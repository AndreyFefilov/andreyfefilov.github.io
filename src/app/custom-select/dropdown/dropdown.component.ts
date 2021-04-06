import { CdkPortal } from '@angular/cdk/portal';
import { Overlay, OverlayConfig, OverlayRef } from '@angular/cdk/overlay';
import {
  Component,
  EventEmitter,
  HostListener,
  Input,
  Output,
  ViewChild
} from '@angular/core';


@Component({
  selector: 'custom-dropdown',
  template: `
  <ng-template cdk-portal="">
    <ng-content></ng-content>
  </ng-template>`
})
export class DropdownComponent {
  @ViewChild(CdkPortal) public contentTemplate: CdkPortal;
  @Output() public onDropdownHide = new EventEmitter();
  @Input() public selectInputRef: HTMLElement;

  protected overlayRef: OverlayRef;
  public isDropdownShowing = false;

  constructor(protected overlay: Overlay) { }

  @HostListener('window:resize')
    public onWindowResize() {
    this.updateDropdownWidth();
  }

  public showDropdown() {
    this.overlayRef = this.overlay.create(this.getOverlayConfig());
    this.overlayRef.attach(this.contentTemplate);
    this.updateDropdownWidth();
    this.overlayRef.backdropClick().subscribe(() => this.hideDropdown());
    this.isDropdownShowing = true;
 }
 
  public hideDropdown() {
    this.onDropdownHide.emit();
    setTimeout(() => {
      this.overlayRef.detach();
      this.isDropdownShowing = false;
    }, 150);
  }

  private updateDropdownWidth() {
    if (!this.overlayRef) {
      return;
    }
   
    const refRect = this.selectInputRef.getBoundingClientRect();
    this.overlayRef.updateSize({ width: refRect.width });
  }

  protected getOverlayConfig(): OverlayConfig {
    const positionStrategy = this.overlay.position()
      .flexibleConnectedTo(this.selectInputRef)
      .withPush(false)
      .withPositions([
        {
          originX: 'start',
          originY: 'bottom',
          overlayX: 'start',
          overlayY: 'top'
        },
        {
          originX: 'start',
          originY: 'top',
          overlayX: 'start',
          overlayY: 'bottom'
        }
      ]);
 
    return new OverlayConfig({
      positionStrategy: positionStrategy,
      hasBackdrop: true,
      backdropClass: 'cdk-overlay-transparent-backdrop'
    });
  }

}
