import {
  AfterViewInit,
  Component,
  ContentChildren,
  ElementRef,
  EventEmitter,
  forwardRef,
  Input,
  Output,
  QueryList,
  Renderer2,
  ViewChild
} from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';
import { ActiveDescendantKeyManager } from '@angular/cdk/a11y';

import { SelectDataTransferService } from '../services/select-data-transfer.service';
import { DropdownComponent } from './dropdown/dropdown.component';
import { OptionComponent } from './option/option.component';
import { SelectValue } from '../interfaces/select-value.interface';

@Component({
  selector: 'custom-select',
  templateUrl: 'custom-select.component.html',
  styleUrls: ['custom-select.component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => CustomSelectComponent),
      multi: true
    },
    SelectDataTransferService]
})
export class CustomSelectComponent implements AfterViewInit, ControlValueAccessor {
  @ViewChild('selectWrapperRef') public selectWrapperRef: ElementRef;
  @ViewChild('input') public selectInput: ElementRef;
  @ViewChild(DropdownComponent) public dropdown: DropdownComponent;

  @ContentChildren(OptionComponent) public selectOptions: QueryList<OptionComponent>
  
  @Output() public selectionChange = new EventEmitter();

  @Input() public selectedValue: string;
  @Input() public label: string;
  @Input() public placeholder: string;
  @Input() public required = false;
  @Input() public disabled = false;
  @Input() public width: number;

  public opened: boolean = false;
  public selectedOption: OptionComponent;
  public selectText: string;

  constructor(
    private _selectDataTransferService: SelectDataTransferService,
    private _renderer: Renderer2
  ) {
    this._selectDataTransferService.registerSelectComponent(this);
  }

  private _keyManager: ActiveDescendantKeyManager<OptionComponent>

  ngAfterViewInit() {
    if (this.width) {
      this.selectWrapperRef.nativeElement.style.width = `${this.width}px`;
    }
    
    setTimeout(() => {
      this.selectText = '';

      this._keyManager = new ActiveDescendantKeyManager(this.selectOptions)
        .withHorizontalOrientation('ltr')
        .withVerticalOrientation()
        .withWrap();
    });
  }

  showDropdown() {
    if (!this.dropdown.isDropdownShowing) {
      this.selectInput.nativeElement.focus();
      this.dropdown.showDropdown();
      this.opened = true;
    }
  }

  hideDropDown() {
    if (this.dropdown.isDropdownShowing) {
      this.dropdown.hideDropdown();
    }
  }

  onDropdownHide() {
    this.opened = false;
  }

  resetSelectValue() {
    if (this.selectedOption) {
      this.selectedOption = null;
      this.selectedValue = null;
      this.selectText = null;
    }
  }
   
  onSelectClick(event) {
    event.stopPropagation();
    this.showDropdown();
    setTimeout(() => {
      this.selectInput.nativeElement.focus();
    }, 10);
  }

  onKeyDown(event) {
    if (!this.dropdown.isDropdownShowing) {
      this.showDropdown();
      return;
    }

    if (!this.selectOptions.length) {
      event.preventDefault();
      return;
    }

    if (event.key === 'Enter' || event.key === ' ') {
      this.setSelectOption(this._keyManager.activeItem);
    } else if (event.key === 'Escape' || event.key === 'Esc') {
      this.dropdown.isDropdownShowing && this.dropdown.hideDropdown();
    } else if (['ArrowUp', 'Up', 'ArrowDown', 'Down', 'ArrowRight', 'Right', 'ArrowLeft', 'Left']
      .indexOf(event.key) > -1) {
      this._keyManager.onKeydown(event);
    } else if (event.key === 'PageUp' || event.key === 'PageDown' || event.key === 'Tab') {
      this.dropdown.isDropdownShowing && event.preventDefault();
    }
  }

  setSelectOption(option: OptionComponent) {
    this._keyManager.setActiveItem(option);
    this.selectedValue = option.value;
    this.selectedOption = option;
    this.selectText = option.optionText ? option.optionText : '';
    this.dropdown.hideDropdown();
    this.selectInput.nativeElement.focus();
    this.onChange();
    const selectValue = <SelectValue> {
      text: this.selectText,
      value: this.selectedValue
    }
    this.selectionChange.emit(selectValue);
  }

  onChangeFn = (_: any) => {};
 
  onTouchedFn = () => {};
 
  registerOnChange(fn: any) {
    this.onChangeFn = fn;
  }
 
  registerOnTouched(fn: any) {
    this.onTouchedFn = fn;
  }
 
  setDisabledState(isDisabled: boolean) {
    this._renderer.setProperty(this.selectInput.nativeElement, 'disabled', isDisabled);
  }
 
  writeValue(obj) {
    this.selectedOption = obj || null;
    this.selectedValue = obj?.value || null;
    this.selectText = obj?.text || null;
  }
 
  onTouched() {
    this.onTouchedFn();
  }
 
  onChange() {
    const selectValue = <SelectValue> {
      text: this.selectText || "",
      value: this.selectedValue || ""
    };
    this.onChangeFn(selectValue);
  }
  
}

