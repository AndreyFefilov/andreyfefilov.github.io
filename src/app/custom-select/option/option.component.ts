import {
  AfterViewInit,
  Component,
  ElementRef,
  HostBinding,
  HostListener,
  Input,
  ViewChild,
} from '@angular/core';
import { Highlightable } from '@angular/cdk/a11y';

import { SelectDataTransferService } from 'src/app/services/select-data-transfer.service';
import { CustomSelectComponent } from '../custom-select.component';

@Component({
  selector: 'custom-option',
  template: `
  <ng-container #optionTextRef>
    <ng-content></ng-content>
  </ng-container>
  `,
  styleUrls: ['option.component.scss']
})
export class OptionComponent implements AfterViewInit, Highlightable {
  @Input() public value: string;
  @ViewChild('optionTextRef') optionTextRef: ElementRef;

  @HostBinding('class.selected') get selected(): boolean {
    return this._select.selectedOption === this;
  }

  @HostBinding('class.active') active = false;

  @HostListener('click', ['$event']) onClick(event) {
    event.preventDefault();
    event.stopPropagation();
    this._select.setSelectOption(this);
  }

  private _select: CustomSelectComponent;
  public optionText: string = '';

  constructor(private _selectDataTransferService: SelectDataTransferService) {
    this._select = this._selectDataTransferService.getSelectComponent();
  }

  ngAfterViewInit() {
    setTimeout(() => {
      this.optionText = this.optionTextRef.nativeElement.parentElement.innerText;
    });
  }

  getLabel(): string {
    return this.optionText;
  }
 
  setActiveStyles() {
    this.active = true;
  }
 
  setInactiveStyles() {
    this.active = false;
  }

}
