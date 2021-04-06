import { Component, ViewChild } from '@angular/core';

import { CustomSelectComponent } from './custom-select/custom-select.component';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss']
})
export class AppComponent {
  @ViewChild('mySelect') select: CustomSelectComponent;
  logoPath: string = "../assets/logo.png";
  disableSelect: boolean = false;

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
}
