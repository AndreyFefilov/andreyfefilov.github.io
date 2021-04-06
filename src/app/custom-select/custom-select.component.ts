import {
  AfterViewInit,
  Component,
  ContentChildren,
  ElementRef,
  Input,
  QueryList,
  ViewChild
} from '@angular/core';
import { DropdownComponent } from './dropdown/dropdown.component';
import { OptionComponent } from './option/option.component';

@Component({
  selector: 'custom-select',
  templateUrl: 'custom-select.component.html',
  styleUrls: ['custom-select.component.scss']
})
export class CustomSelectComponent implements AfterViewInit {
  @ViewChild('selectWrapperRef') public selectWrapperRef: ElementRef;
  @ViewChild('input') public selectInput: ElementRef;
  @ViewChild(DropdownComponent) public dropdown: DropdownComponent;

  @ContentChildren(OptionComponent) public selectOptions: QueryList<OptionComponent>
  
  @Input() public selectedValue: string;
  @Input() public label: string;
  @Input() public placeholder: string;
  @Input() public required = false;
  @Input() public disabled = false;
  @Input() public width: number;

  public opened: boolean = false;
  public selectedOption: OptionComponent;
  public selectText: string;

  constructor() { }

  ngAfterViewInit() {
    if (this.width) {
      this.selectWrapperRef.nativeElement.style.width = `${this.width}px`;
    }
    
    this.selectedOption = this.selectOptions.toArray().find(option => option.value === this.selectedValue);
    this.selectText = this.selectedOption ? this.selectedOption.value : '';
  }

  showDropdown() {
    this.dropdown.showDropdown();
    this.opened = true;
  }

  onDropdownHide() {
    this.opened = false;
  }
   
  onSelectClick(event) {
    event.stopPropagation();
    this.showDropdown();
    setTimeout(() => {
      this.selectInput.nativeElement.focus();
    }, 10);
  }

  selectOption(option: OptionComponent) {
    this.selectedValue = option.value;
    this.selectedOption = option;
    this.selectText = this.selectedOption ? this.selectedOption.value : '';
    this.dropdown.hideDropdown();
    this.selectInput.nativeElement.focus();
  }
  
}
