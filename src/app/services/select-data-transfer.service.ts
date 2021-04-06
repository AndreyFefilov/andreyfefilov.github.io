import { Injectable } from '@angular/core';
import { CustomSelectComponent } from '../custom-select/custom-select.component';

@Injectable({
  providedIn: 'root'
})
export class SelectDataTransferService {
  private _select: CustomSelectComponent;

  constructor() { }

  registerSelectComponent(select: CustomSelectComponent) {
    this._select = select;
  }
 
  getSelectComponent(): CustomSelectComponent {
    return this._select;
  }
}
