import {
  AfterViewInit,
  Component,
  ElementRef,
  HostBinding,
  HostListener,
  Input,
  ViewChild,
} from '@angular/core';

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
export class OptionComponent implements AfterViewInit {
  @Input() public value: string;
  @ViewChild('optionTextRef') optionTextRef: ElementRef;
  @HostBinding('class.selected') get selected(): boolean {
    return this._select.selectedOption === this;
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

  @HostListener('click', ['$event']) onClick(event) {
    event.preventDefault();
    event.stopPropagation();
    this._select.setSelectOption(this);
  }

}
