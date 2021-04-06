import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { OverlayModule } from '@angular/cdk/overlay';
import { PortalModule } from '@angular/cdk/portal';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { PerfectScrollbarModule } from 'ngx-perfect-scrollbar';

import { AppComponent } from './app.component';
import { CustomSelectComponent } from './custom-select/custom-select.component';
import { DropdownComponent } from './custom-select/dropdown/dropdown.component';
import { OptionComponent } from './custom-select/option/option.component';

const COMPONENTS = [
  AppComponent,
  CustomSelectComponent,
  DropdownComponent,
  OptionComponent
];

@NgModule({
  declarations: [
    COMPONENTS
  ],
  imports: [
    BrowserModule,
    PerfectScrollbarModule,
    PortalModule,
    OverlayModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
