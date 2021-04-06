import { animate, state, style, transition, trigger } from '@angular/animations';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'custom-option',
  template: `<ng-content></ng-content>`,
  styleUrls: ['option.component.scss']
})
export class OptionComponent {
  @Input() public value: string;

  constructor() { }

}
