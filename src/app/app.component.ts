import { Component, ViewChild } from '@angular/core';
import { FormControl } from '@angular/forms';

import { CustomSelectComponent } from './custom-select/custom-select.component';
import { SelectValue } from './interfaces/select-value.interface';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss']
})
export class AppComponent {
  @ViewChild('mySelect') select: CustomSelectComponent;

  logoPath: string = "../assets/logo.png";
  disableSelect: boolean = false;

  currentSelectValue: SelectValue;
  control = new FormControl(<SelectValue>{
    text: '',
    value: ''
  });

  toggleDisableSelect() {
    this.disableSelect = !this.disableSelect;
  }

  resetSelect() {
    this.select.resetSelectValue();
  }

  open() {
    this.select.showDropdown();
  }

  logEvent(event) {
    console.log(event);
  }

  logCurrentSelectValue() {
    console.log("Значение с ngModel: ", this.currentSelectValue);
  }

  logFormControlValue() {
    console.log("Значение с Form Control: ", this.control.value);
  }

  setValueWithFormControl() {
    this.control.setValue(<SelectValue> {
      text: 'Value 5',
      value: ''
    });
    console.log("Присвоенное значение с помощью setValue: ", this.control.value);
  }

  resetWithFormControl() {
    this.control.reset();
    console.log("Сброшенное значение с помощью reset: ", this.control.value);
  }

  toggleDisableWithFormControl() {
    if (this.control.enabled) {
      this.control.disable();
    } else {
      this.control.enable();
    }
  }
}
