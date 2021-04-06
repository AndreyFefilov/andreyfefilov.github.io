import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss']
})
export class AppComponent {
  logoPath: string = "../assets/logo.png";
  disableSelect: boolean = false;

  toggleDisableSelect() {
    this.disableSelect = !this.disableSelect;
  }
}
