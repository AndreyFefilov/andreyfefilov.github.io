(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\FefilovAS\Documents\Projects\Education\src\main.ts */"zUnb");


/***/ }),

/***/ "AytR":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
const environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "KneB":
/*!**********************************************************!*\
  !*** ./src/app/custom-select/option/option.component.ts ***!
  \**********************************************************/
/*! exports provided: OptionComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OptionComponent", function() { return OptionComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var src_app_services_select_data_transfer_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/services/select-data-transfer.service */ "QwSj");



const _c0 = ["optionTextRef"];
const _c1 = ["*"];
class OptionComponent {
    constructor(_selectDataTransferService) {
        this._selectDataTransferService = _selectDataTransferService;
        this.active = false;
        this.optionText = '';
        this.value ? this.value = this.value : this.value = "";
        this._select = this._selectDataTransferService.getSelectComponent();
    }
    get selected() {
        return this._select.selectedOption === this;
    }
    onClick(event) {
        event.preventDefault();
        event.stopPropagation();
        this._select.setSelectOption(this);
    }
    ngAfterViewInit() {
        setTimeout(() => {
            this.optionText = this.optionTextRef.nativeElement.parentElement.innerText;
        });
    }
    getLabel() {
        return this.optionText;
    }
    setActiveStyles() {
        this.active = true;
    }
    setInactiveStyles() {
        this.active = false;
    }
}
OptionComponent.ɵfac = function OptionComponent_Factory(t) { return new (t || OptionComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_select_data_transfer_service__WEBPACK_IMPORTED_MODULE_1__["SelectDataTransferService"])); };
OptionComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: OptionComponent, selectors: [["custom-option"]], viewQuery: function OptionComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c0, true);
    } if (rf & 2) {
        var _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.optionTextRef = _t.first);
    } }, hostVars: 4, hostBindings: function OptionComponent_HostBindings(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function OptionComponent_click_HostBindingHandler($event) { return ctx.onClick($event); });
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("selected", ctx.selected)("active", ctx.active);
    } }, inputs: { value: "value" }, ngContentSelectors: _c1, decls: 3, vars: 0, consts: [["optionTextRef", ""]], template: function OptionComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojectionDef"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0, null, 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojection"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
    } }, styles: ["[_nghost-%COMP%] {\n  display: block;\n  font-size: 14px;\n  padding: 8px 16px;\n  align-items: center;\n  color: #333;\n  background-color: #fff;\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  -webkit-user-select: none;\n          user-select: none;\n  cursor: pointer;\n  transition: 0.15s ease;\n  max-height: 32px;\n}\n[_nghost-%COMP%]:hover, .active[_nghost-%COMP%] {\n  background-color: #f0f0f0;\n}\n.selected[_nghost-%COMP%] {\n  color: #0079cc;\n  background-color: #f0f0f0;\n}\n.selected[_nghost-%COMP%]:hover, .selected.active[_nghost-%COMP%] {\n  outline: none;\n  background-color: #f0f0f0;\n}\n.disabled[_nghost-%COMP%] {\n  color: #93a1aa;\n  cursor: auto;\n}\n.disabled[_nghost-%COMP%]:hover, .disabled[_nghost-%COMP%]:focus {\n  outline: none;\n  background-color: #f0f0f0;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY3VzdG9tLXNlbGVjdC9vcHRpb24vb3B0aW9uLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksY0FBQTtFQUNBLGVBQUE7RUFDQSxpQkFBQTtFQUNBLG1CQUFBO0VBQ0EsV0FBQTtFQUNBLHNCQUFBO0VBQ0EsbUJBQUE7RUFDQSxnQkFBQTtFQUNBLHVCQUFBO0VBQ0EseUJBQUE7VUFBQSxpQkFBQTtFQUNBLGVBQUE7RUFDQSxzQkFBQTtFQUNBLGdCQUFBO0FBQ0o7QUFDSTtFQUNJLHlCQUFBO0FBQ1I7QUFFSTtFQUNFLGNBQUE7RUFDQSx5QkFBQTtBQUFOO0FBRU07RUFDRSxhQUFBO0VBQ0EseUJBQUE7QUFBUjtBQUtJO0VBQ0UsY0FBQTtFQUNBLFlBQUE7QUFITjtBQUtNO0VBQ0UsYUFBQTtFQUNBLHlCQUFBO0FBSFIiLCJmaWxlIjoic3JjL2FwcC9jdXN0b20tc2VsZWN0L29wdGlvbi9vcHRpb24uY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyI6aG9zdCB7XHJcbiAgICBkaXNwbGF5OiBibG9jaztcclxuICAgIGZvbnQtc2l6ZTogMTRweDtcclxuICAgIHBhZGRpbmc6IDhweCAxNnB4O1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIGNvbG9yOiAjMzMzO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcclxuICAgIHdoaXRlLXNwYWNlOiBub3dyYXA7XHJcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gICAgdGV4dC1vdmVyZmxvdzogZWxsaXBzaXM7XHJcbiAgICB1c2VyLXNlbGVjdDogbm9uZTtcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgIHRyYW5zaXRpb246IC4xNXMgZWFzZTtcclxuICAgIG1heC1oZWlnaHQ6IDMycHg7XHJcblxyXG4gICAgJjpob3ZlciwgJi5hY3RpdmUge1xyXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigyNDAsIDI0MCwgMjQwKTtcclxuICAgIH1cclxuICAgXHJcbiAgICAmLnNlbGVjdGVkIHtcclxuICAgICAgY29sb3I6ICMwMDc5Y2M7XHJcbiAgICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigyNDAsIDI0MCwgMjQwKTs7XHJcblxyXG4gICAgICAmOmhvdmVyLCAmLmFjdGl2ZSB7XHJcbiAgICAgICAgb3V0bGluZTogbm9uZTtcclxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjQwLCAyNDAsIDI0MCk7O1xyXG4gICAgIFxyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgIFxyXG4gICAgJi5kaXNhYmxlZCB7XHJcbiAgICAgIGNvbG9yOiAjOTNhMWFhO1xyXG4gICAgICBjdXJzb3I6IGF1dG87XHJcbiAgIFxyXG4gICAgICAmOmhvdmVyLCAmOmZvY3VzIHtcclxuICAgICAgICBvdXRsaW5lOiBub25lO1xyXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigyNDAsIDI0MCwgMjQwKTs7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9Il19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](OptionComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'custom-option',
                template: `
  <ng-container #optionTextRef>
    <ng-content></ng-content>
  </ng-container>
  `,
                styleUrls: ['option.component.scss']
            }]
    }], function () { return [{ type: src_app_services_select_data_transfer_service__WEBPACK_IMPORTED_MODULE_1__["SelectDataTransferService"] }]; }, { value: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], optionTextRef: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
            args: ['optionTextRef']
        }], selected: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostBinding"],
            args: ['class.selected']
        }], active: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostBinding"],
            args: ['class.active']
        }], onClick: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"],
            args: ['click', ['$event']]
        }] }); })();


/***/ }),

/***/ "OCL7":
/*!**************************************************************!*\
  !*** ./src/app/custom-select/dropdown/dropdown.component.ts ***!
  \**************************************************************/
/*! exports provided: DropdownComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DropdownComponent", function() { return DropdownComponent; });
/* harmony import */ var _angular_cdk_portal__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/cdk/portal */ "+rOU");
/* harmony import */ var _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/cdk/overlay */ "rDax");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");






function DropdownComponent_ng_template_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵprojection"](0, 0, ["#projected", ""]);
} }
const _c0 = ["*"];
class DropdownComponent {
    constructor(overlay) {
        this.overlay = overlay;
        this.onDropdownHide = new _angular_core__WEBPACK_IMPORTED_MODULE_2__["EventEmitter"]();
        this.isDropdownShowing = false;
    }
    onWindowResize() {
        this.updateDropdownWidth();
    }
    showDropdown() {
        this.overlayRef = this.overlay.create(this.getOverlayConfig());
        this.overlayRef.attach(this.contentTemplate);
        this.updateDropdownWidth();
        this.overlayRef.backdropClick().subscribe(() => this.hideDropdown());
        this.isDropdownShowing = true;
    }
    hideDropdown() {
        this.onDropdownHide.emit();
        setTimeout(() => {
            this.overlayRef.detach();
            this.isDropdownShowing = false;
        }, 150);
    }
    updateDropdownWidth() {
        if (!this.overlayRef) {
            return;
        }
        const refRect = this.selectInputRef.getBoundingClientRect();
        this.overlayRef.updateSize({ width: refRect.width });
    }
    getOverlayConfig() {
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
        return new _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_1__["OverlayConfig"]({
            positionStrategy: positionStrategy,
            hasBackdrop: true,
            backdropClass: 'cdk-overlay-transparent-backdrop'
        });
    }
}
DropdownComponent.ɵfac = function DropdownComponent_Factory(t) { return new (t || DropdownComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_1__["Overlay"])); };
DropdownComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({ type: DropdownComponent, selectors: [["custom-dropdown"]], viewQuery: function DropdownComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵviewQuery"](_angular_cdk_portal__WEBPACK_IMPORTED_MODULE_0__["CdkPortal"], true);
    } if (rf & 2) {
        var _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵloadQuery"]()) && (ctx.contentTemplate = _t.first);
    } }, hostBindings: function DropdownComponent_HostBindings(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("resize", function DropdownComponent_resize_HostBindingHandler() { return ctx.onWindowResize(); }, false, _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresolveWindow"]);
    } }, inputs: { selectInputRef: "selectInputRef" }, outputs: { onDropdownHide: "onDropdownHide" }, ngContentSelectors: _c0, decls: 1, vars: 0, consts: [["cdk-portal", ""]], template: function DropdownComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵprojectionDef"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](0, DropdownComponent_ng_template_0_Template, 1, 0, "ng-template", 0);
    } }, directives: [_angular_cdk_portal__WEBPACK_IMPORTED_MODULE_0__["TemplatePortalDirective"]], encapsulation: 2 });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵsetClassMetadata"](DropdownComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"],
        args: [{
                selector: 'custom-dropdown',
                template: `
  <ng-template cdk-portal="">
    <ng-content #projected></ng-content>
  </ng-template>`
            }]
    }], function () { return [{ type: _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_1__["Overlay"] }]; }, { contentTemplate: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ViewChild"],
            args: [_angular_cdk_portal__WEBPACK_IMPORTED_MODULE_0__["CdkPortal"]]
        }], onDropdownHide: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Output"]
        }], selectInputRef: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"]
        }], onWindowResize: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["HostListener"],
            args: ['window:resize']
        }] }); })();


/***/ }),

/***/ "QwSj":
/*!**********************************************************!*\
  !*** ./src/app/services/select-data-transfer.service.ts ***!
  \**********************************************************/
/*! exports provided: SelectDataTransferService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SelectDataTransferService", function() { return SelectDataTransferService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");


class SelectDataTransferService {
    constructor() { }
    registerSelectComponent(select) {
        this._select = select;
    }
    getSelectComponent() {
        return this._select;
    }
}
SelectDataTransferService.ɵfac = function SelectDataTransferService_Factory(t) { return new (t || SelectDataTransferService)(); };
SelectDataTransferService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: SelectDataTransferService, factory: SelectDataTransferService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SelectDataTransferService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "Sy1n":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var ngx_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ngx-perfect-scrollbar */ "Kdsb");
/* harmony import */ var _custom_select_custom_select_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./custom-select/custom-select.component */ "kuZW");
/* harmony import */ var _custom_select_option_option_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./custom-select/option/option.component */ "KneB");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ "ofXK");








const _c0 = ["mySelect"];
function AppComponent_div_81_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " \u0412\u044B\u0431\u043E\u0440 \u0437\u043D\u0430\u0447\u0435\u043D\u0438\u044F \u0438\u0437 \u0441\u043F\u0438\u0441\u043A\u0430 \u043E\u0431\u044F\u0437\u0430\u0442\u0435\u043B\u0435\u043D! ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function AppComponent_div_81_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, AppComponent_div_81_div_1_Template, 2, 0, "div", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](68);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", _r1.errors.required);
} }
class AppComponent {
    constructor() {
        this.logoPath = "../assets/logo.png";
        this.disableSelect = false;
        this.control = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]({
            text: '',
            value: ''
        });
    }
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
        this.control.setValue({
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
        }
        else {
            this.control.enable();
        }
    }
}
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(); };
AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app-root"]], viewQuery: function AppComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c0, true);
    } if (rf & 2) {
        var _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.select = _t.first);
    } }, decls: 102, vars: 9, consts: [[1, "app"], [1, "header"], [1, "header__wrapper"], ["alt", "Rubius logo", 1, "header__logo", 3, "src"], [1, "header__title"], [1, "app__wrapper"], [1, "app__main"], [1, "app__content"], [2, "margin-bottom", "32px"], ["label", "\u0421\u043F\u0438\u0441\u043E\u043A", "placeholder", "\u0412\u044B\u0431\u0435\u0440\u0438\u0442\u0435 \u0437\u043D\u0430\u0447\u0435\u043D\u0438\u0435 \u0438\u0437 \u0441\u043F\u0438\u0441\u043A\u0430", 3, "required", "disabled", "selectionChange"], ["mySelect", ""], ["value", "1"], ["value", "2"], ["value", "3"], ["value", "4"], ["value", "5"], ["value", "6"], ["value", "7"], ["value", "8"], ["value", "009"], ["value", "10"], [1, "app__action-buttons"], [2, "margin-right", "14px", 3, "click"], [2, "width", "50px", "margin-right", "14px", 3, "click"], [3, "click"], ["label", "Select \u0448\u0438\u0440\u0438\u043D\u043E\u0439 300px", "placeholder", "\u0412\u044B\u0431\u0435\u0440\u0438\u0442\u0435 \u0437\u043D\u0430\u0447\u0435\u043D\u0438\u0435 \u0438\u0437 \u0441\u043F\u0438\u0441\u043A\u0430", "width", "300", 2, "margin-top", "60px", 3, "selectionChange"], ["value", "A"], ["value", "B"], ["value", "C"], ["value", "D"], ["placeholder", "Select \u0431\u0435\u0437 \u043B\u0435\u0439\u0431\u043B\u0430 \u0438 values", 2, "margin-top", "60px", 3, "selectionChange"], ["label", "Select \u0441 ngModel", "placeholder", "\u0412\u044B\u0431\u0435\u0440\u0438\u0442\u0435 \u0437\u043D\u0430\u0447\u0435\u043D\u0438\u0435 \u0438\u0437 \u0441\u043F\u0438\u0441\u043A\u0430", 2, "margin-top", "60px", 3, "required", "ngModel", "selectionChange", "ngModelChange"], ["model", "ngModel"], ["style", "color: red; font-size: 12px; margin-top: 4px;", 4, "ngIf"], ["label", "Select \u0441 Form Control", "placeholder", "\u0412\u044B\u0431\u0435\u0440\u0438\u0442\u0435 \u0437\u043D\u0430\u0447\u0435\u043D\u0438\u0435 \u0438\u0437 \u0441\u043F\u0438\u0441\u043A\u0430", 2, "margin-top", "60px", 3, "formControl", "selectionChange"], [2, "color", "red", "font-size", "12px", "margin-top", "4px"], [4, "ngIf"]], template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "header", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "img", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "span", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "\u0417\u0430\u0434\u0430\u043D\u0438\u0435 \u043F\u043E \u0418\u041F\u0420 - Custom Select");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "perfect-scrollbar");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "span", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "\u0412\u0441\u0435 \u0432\u044B\u0431\u0440\u0430\u043D\u043D\u044B\u0435 \u0437\u043D\u0430\u0447\u0435\u043D\u0438\u044F Select`\u043E\u0432 \u0432\u044B\u0432\u043E\u0434\u044F\u0442\u0441\u044F \u0432 \u043A\u043E\u043D\u0441\u043E\u043B\u044C");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "custom-select", 9, 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("selectionChange", function AppComponent_Template_custom_select_selectionChange_12_listener($event) { return ctx.logEvent($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "custom-option", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "\u042D\u0442\u0443");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "custom-option", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "\u0440\u0430\u0431\u043E\u0442\u0443");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "custom-option", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, "\u0431\u0443\u0434\u0435\u0442");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "custom-option", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, "\u043F\u0440\u043E\u0432\u0435\u0440\u044F\u0442\u044C");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "custom-option", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, "\u041A\u043E\u0441\u0442\u044F\u043D");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "custom-option", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25, "\u0422\u0435\u0440\u0451\u0445\u0438\u043D");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "custom-option", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](27, "LKJHsdas f000000 LKJHsdasf LKJHsdasf LKJHsdasf LKJHsdasf LKJHsdasf");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "custom-option", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](29, "001010");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "custom-option", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](31, "Value 009");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "custom-option", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](33, "Value 010");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "div", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "button", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AppComponent_Template_button_click_35_listener() { return ctx.open(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](36, "\u041E\u0442\u043A\u0440\u044B\u0442\u044C");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "button", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AppComponent_Template_button_click_37_listener() { return ctx.toggleDisableSelect(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](38);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "button", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AppComponent_Template_button_click_39_listener() { return ctx.resetSelect(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](40, "\u0421\u0431\u0440\u043E\u0441\u0438\u0442\u044C \u0437\u043D\u0430\u0447\u0435\u043D\u0438\u0435");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "custom-select", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("selectionChange", function AppComponent_Template_custom_select_selectionChange_41_listener($event) { return ctx.logEvent($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "custom-option", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](43, "ABC");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "custom-option", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](45, "sdsdf");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "custom-option", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](47, "LKJHsdasf");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](48, "custom-option", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](49, "erwr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](50, "custom-option");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](51, "000000");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](52, "custom-option");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](53, "LKJHsdasf000000 LKJHsdasf LKJHsdasf LKJHsdasf LKJHsdasf LKJHsdasf");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](54, "custom-select", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("selectionChange", function AppComponent_Template_custom_select_selectionChange_54_listener($event) { return ctx.logEvent($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](55, "custom-option");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](56, "ABC");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](57, "custom-option");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](58, "sdsdf");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](59, "custom-option");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](60, "LKJHsdasf");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](61, "custom-option");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](62, "erwr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](63, "custom-option");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](64, "000000");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](65, "custom-option");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](66, "LKJHsdasf000000 LKJHsdasf LKJHsdasf LKJHsdasf LKJHsdasf LKJHsdasf");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](67, "custom-select", 31, 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("selectionChange", function AppComponent_Template_custom_select_selectionChange_67_listener() { return ctx.logCurrentSelectValue(); })("ngModelChange", function AppComponent_Template_custom_select_ngModelChange_67_listener($event) { return ctx.currentSelectValue = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](69, "custom-option", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](70, "ABC");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](71, "custom-option", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](72, "sdsdf");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](73, "custom-option", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](74, "LKJHsdasf");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](75, "custom-option", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](76, "erwr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](77, "custom-option");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](78, "000000");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](79, "custom-option");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](80, "LKJHsdasf000000 LKJHsdasf LKJHsdasf LKJHsdasf LKJHsdasf LKJHsdasf");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](81, AppComponent_div_81_Template, 2, 1, "div", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](82, "custom-select", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("selectionChange", function AppComponent_Template_custom_select_selectionChange_82_listener() { return ctx.logFormControlValue(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](83, "custom-option", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](84, "ABC");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](85, "custom-option", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](86, "sdsdf");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](87, "custom-option", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](88, "LKJHsdasf");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](89, "custom-option", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](90, "erwr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](91, "custom-option");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](92, "000000");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](93, "custom-option");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](94, "LKJHsdasf000000 LKJHsdasf LKJHsdasf LKJHsdasf LKJHsdasf LKJHsdasf");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](95, "div", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](96, "button", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AppComponent_Template_button_click_96_listener() { return ctx.setValueWithFormControl(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](97, "\u041F\u0440\u0438\u0441\u0432\u043E\u0438\u0442\u044C \u0437\u043D\u0430\u0447\u0435\u043D\u0438\u0435 \"Value 5\"");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](98, "button", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AppComponent_Template_button_click_98_listener() { return ctx.toggleDisableWithFormControl(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](99);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](100, "button", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AppComponent_Template_button_click_100_listener() { return ctx.resetWithFormControl(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](101, "\u0421\u0431\u0440\u043E\u0441\u0438\u0442\u044C \u0437\u043D\u0430\u0447\u0435\u043D\u0438\u0435");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](68);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", ctx.logoPath, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("required", true)("disabled", ctx.disableSelect);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](26);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.disableSelect ? "\u0412\u043A\u043B" : "\u0412\u044B\u043A\u043B");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](29);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("required", true)("ngModel", ctx.currentSelectValue);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", _r1.invalid && (_r1.dirty || _r1.touched));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formControl", ctx.control);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.control.disabled ? "\u0412\u043A\u043B" : "\u0412\u044B\u043A\u043B");
    } }, directives: [ngx_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_2__["PerfectScrollbarComponent"], _custom_select_custom_select_component__WEBPACK_IMPORTED_MODULE_3__["CustomSelectComponent"], _custom_select_option_option_component__WEBPACK_IMPORTED_MODULE_4__["OptionComponent"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["RequiredValidator"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgModel"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgIf"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControlDirective"]], styles: [".app[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 100%;\n}\n.app__wrapper[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  height: calc(100% - 55px);\n}\n.app__main[_ngcontent-%COMP%] {\n  position: relative;\n  padding: 3px;\n  width: 30%;\n  height: 50%;\n  border-radius: 10px;\n  background-color: #FFFFFF;\n  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);\n}\n.app__content[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  padding: 15px;\n}\n.app__action-buttons[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  margin-top: 16px;\n  display: flex;\n  width: 100%;\n}\n.header[_ngcontent-%COMP%] {\n  display: flex;\n  width: 100%;\n  height: 55px;\n  background-color: #212121;\n  position: sticky;\n  top: 0;\n  box-shadow: 0 0 10px rgba(0, 0, 0, 0.5);\n  align-items: center;\n}\n.header__wrapper[_ngcontent-%COMP%] {\n  position: relative;\n  display: flex;\n  max-width: 100%;\n  width: 100%;\n  height: 100%;\n  justify-content: space-between;\n  align-items: center;\n  margin: 0 15%;\n}\n.header__title[_ngcontent-%COMP%] {\n  font-size: 16px;\n  color: #FFFFFF;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXBwLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksV0FBQTtFQUNBLFlBQUE7QUFDSjtBQUNJO0VBQ0ksYUFBQTtFQUNBLG1CQUFBO0VBQ0EsdUJBQUE7RUFDQSx5QkFBQTtBQUNSO0FBRUk7RUFDSSxrQkFBQTtFQUNBLFlBQUE7RUFDQSxVQUFBO0VBQ0EsV0FBQTtFQUNBLG1CQUFBO0VBQ0EseUJBQUE7RUFDQSx1Q0FBQTtBQUFSO0FBR0k7RUFDSSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSxhQUFBO0FBRFI7QUFJSTtFQUNJLGFBQUE7RUFDQSxtQkFBQTtFQUNBLGdCQUFBO0VBQ0EsYUFBQTtFQUNBLFdBQUE7QUFGUjtBQU1BO0VBQ0ksYUFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0EseUJBQUE7RUFDQSxnQkFBQTtFQUNBLE1BQUE7RUFDQSx1Q0FBQTtFQUNBLG1CQUFBO0FBSEo7QUFLSTtFQUNJLGtCQUFBO0VBQ0EsYUFBQTtFQUNBLGVBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLDhCQUFBO0VBQ0EsbUJBQUE7RUFDQSxhQUFBO0FBSFI7QUFNSTtFQUNJLGVBQUE7RUFDQSxjQUFBO0FBSlIiLCJmaWxlIjoic3JjL2FwcC9hcHAuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuYXBwIHtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgaGVpZ2h0OiAxMDAlO1xyXG5cclxuICAgICZfX3dyYXBwZXIge1xyXG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgICAgICBoZWlnaHQ6IGNhbGMoMTAwJSAtIDU1cHgpO1xyXG4gICAgfVxyXG5cclxuICAgICZfX21haW4ge1xyXG4gICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgICAgICBwYWRkaW5nOiAzcHg7XHJcbiAgICAgICAgd2lkdGg6IDMwJTtcclxuICAgICAgICBoZWlnaHQ6IDUwJTtcclxuICAgICAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xyXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNGRkZGRkY7XHJcbiAgICAgICAgYm94LXNoYWRvdzogMCAwIDEwcHggcmdiKDAgMCAwIC8gMTAlKTtcclxuICAgIH1cclxuXHJcbiAgICAmX19jb250ZW50IHtcclxuICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICAgICAgcGFkZGluZzogMTVweDtcclxuICAgIH1cclxuXHJcbiAgICAmX19hY3Rpb24tYnV0dG9ucyB7XHJcbiAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgICAgIG1hcmdpbi10b3A6IDE2cHg7XHJcbiAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgIH1cclxufVxyXG5cclxuLmhlYWRlciB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBoZWlnaHQ6IDU1cHg7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMjEyMTIxO1xyXG4gICAgcG9zaXRpb246IHN0aWNreTtcclxuICAgIHRvcDogMDtcclxuICAgIGJveC1zaGFkb3c6IDAgMCAxMHB4IHJnYigwIDAgMCAvIDUwJSk7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG5cclxuICAgICZfX3dyYXBwZXIge1xyXG4gICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgIG1heC13aWR0aDogMTAwJTtcclxuICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG4gICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICAgICAgbWFyZ2luOiAwIDE1JTtcclxuICAgIH1cclxuXHJcbiAgICAmX190aXRsZSB7XHJcbiAgICAgICAgZm9udC1zaXplOiAxNnB4O1xyXG4gICAgICAgIGNvbG9yOiAjRkZGRkZGO1xyXG4gICAgfVxyXG59Il19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-root',
                templateUrl: 'app.component.html',
                styleUrls: ['app.component.scss']
            }]
    }], null, { select: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
            args: ['mySelect']
        }] }); })();


/***/ }),

/***/ "ZAI4":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/cdk/overlay */ "rDax");
/* harmony import */ var _angular_cdk_portal__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/cdk/portal */ "+rOU");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var ngx_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ngx-perfect-scrollbar */ "Kdsb");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./app.component */ "Sy1n");
/* harmony import */ var _custom_select_custom_select_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./custom-select/custom-select.component */ "kuZW");
/* harmony import */ var _custom_select_dropdown_dropdown_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./custom-select/dropdown/dropdown.component */ "OCL7");
/* harmony import */ var _custom_select_option_option_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./custom-select/option/option.component */ "KneB");











const COMPONENTS = [
    _app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"],
    _custom_select_custom_select_component__WEBPACK_IMPORTED_MODULE_7__["CustomSelectComponent"],
    _custom_select_dropdown_dropdown_component__WEBPACK_IMPORTED_MODULE_8__["DropdownComponent"],
    _custom_select_option_option_component__WEBPACK_IMPORTED_MODULE_9__["OptionComponent"]
];
class AppModule {
}
AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"]] });
AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ factory: function AppModule_Factory(t) { return new (t || AppModule)(); }, providers: [], imports: [[
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
            ngx_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_5__["PerfectScrollbarModule"],
            _angular_cdk_portal__WEBPACK_IMPORTED_MODULE_3__["PortalModule"],
            _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_2__["OverlayModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ReactiveFormsModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"],
        _custom_select_custom_select_component__WEBPACK_IMPORTED_MODULE_7__["CustomSelectComponent"],
        _custom_select_dropdown_dropdown_component__WEBPACK_IMPORTED_MODULE_8__["DropdownComponent"],
        _custom_select_option_option_component__WEBPACK_IMPORTED_MODULE_9__["OptionComponent"]], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
        ngx_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_5__["PerfectScrollbarModule"],
        _angular_cdk_portal__WEBPACK_IMPORTED_MODULE_3__["PortalModule"],
        _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_2__["OverlayModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ReactiveFormsModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AppModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
                declarations: [
                    COMPONENTS
                ],
                imports: [
                    _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                    ngx_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_5__["PerfectScrollbarModule"],
                    _angular_cdk_portal__WEBPACK_IMPORTED_MODULE_3__["PortalModule"],
                    _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_2__["OverlayModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ReactiveFormsModule"]
                ],
                providers: [],
                bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "kuZW":
/*!**********************************************************!*\
  !*** ./src/app/custom-select/custom-select.component.ts ***!
  \**********************************************************/
/*! exports provided: CustomSelectComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CustomSelectComponent", function() { return CustomSelectComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/cdk/a11y */ "u47x");
/* harmony import */ var _services_select_data_transfer_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/select-data-transfer.service */ "QwSj");
/* harmony import */ var _dropdown_dropdown_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./dropdown/dropdown.component */ "OCL7");
/* harmony import */ var _option_option_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./option/option.component */ "KneB");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var ngx_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ngx-perfect-scrollbar */ "Kdsb");











const _c0 = ["selectWrapperRef"];
const _c1 = ["input"];
function CustomSelectComponent_label_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "label", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r2.label);
} }
const _c2 = [[["custom-option"]]];
const _c3 = ["custom-option"];
class CustomSelectComponent {
    constructor(_selectDataTransferService, _renderer) {
        this._selectDataTransferService = _selectDataTransferService;
        this._renderer = _renderer;
        this.selectionChange = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.required = false;
        this.disabled = false;
        this.opened = false;
        this.onChangeFn = (_) => { };
        this.onTouchedFn = () => { };
        this._selectDataTransferService.registerSelectComponent(this);
    }
    ngAfterViewInit() {
        if (this.width) {
            this.selectWrapperRef.nativeElement.style.width = `${this.width}px`;
        }
        setTimeout(() => {
            this.selectText = '';
            this._keyManager = new _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_2__["ActiveDescendantKeyManager"](this.selectOptions)
                .withHorizontalOrientation('ltr')
                .withVerticalOrientation()
                .withWrap();
        });
    }
    showDropdown() {
        if (!this.dropdown.isDropdownShowing) {
            this.selectInput.nativeElement.focus();
            this.dropdown.showDropdown();
            this.opened = true;
        }
    }
    hideDropDown() {
        if (this.dropdown.isDropdownShowing) {
            this.dropdown.hideDropdown();
        }
    }
    onDropdownHide() {
        this.opened = false;
    }
    resetSelectValue() {
        if (this.selectedOption) {
            this.selectedOption = null;
            this.selectedValue = null;
            this.selectText = null;
        }
    }
    onSelectClick(event) {
        event.stopPropagation();
        this.showDropdown();
        setTimeout(() => {
            this.selectInput.nativeElement.focus();
        }, 10);
    }
    onKeyDown(event) {
        if (!this.dropdown.isDropdownShowing) {
            this.showDropdown();
            return;
        }
        if (!this.selectOptions.length) {
            event.preventDefault();
            return;
        }
        if (event.key === 'Enter' || event.key === ' ') {
            this.setSelectOption(this._keyManager.activeItem);
        }
        else if (event.key === 'Escape' || event.key === 'Esc') {
            this.dropdown.isDropdownShowing && this.dropdown.hideDropdown();
        }
        else if (['ArrowUp', 'Up', 'ArrowDown', 'Down', 'ArrowRight', 'Right', 'ArrowLeft', 'Left']
            .indexOf(event.key) > -1) {
            this._keyManager.onKeydown(event);
        }
        else if (event.key === 'PageUp' || event.key === 'PageDown' || event.key === 'Tab') {
            this.dropdown.isDropdownShowing && event.preventDefault();
        }
    }
    setSelectOption(option) {
        this._keyManager.setActiveItem(option);
        this.selectedValue = option.value;
        this.selectedOption = option;
        this.selectText = option.optionText ? option.optionText : '';
        this.dropdown.hideDropdown();
        this.selectInput.nativeElement.focus();
        this.onChange();
        const selectValue = {
            text: this.selectText,
            value: this.selectedValue
        };
        this.selectionChange.emit(selectValue);
    }
    registerOnChange(fn) {
        this.onChangeFn = fn;
    }
    registerOnTouched(fn) {
        this.onTouchedFn = fn;
    }
    setDisabledState(isDisabled) {
        this._renderer.setProperty(this.selectInput.nativeElement, 'disabled', isDisabled);
    }
    writeValue(obj) {
        this.selectedOption = obj || null;
        this.selectedValue = (obj === null || obj === void 0 ? void 0 : obj.value) || null;
        this.selectText = (obj === null || obj === void 0 ? void 0 : obj.text) || null;
    }
    onTouched() {
        this.onTouchedFn();
    }
    onChange() {
        const selectValue = {
            text: this.selectText || "",
            value: this.selectedValue || ""
        };
        this.onChangeFn(selectValue);
    }
}
CustomSelectComponent.ɵfac = function CustomSelectComponent_Factory(t) { return new (t || CustomSelectComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_select_data_transfer_service__WEBPACK_IMPORTED_MODULE_3__["SelectDataTransferService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["Renderer2"])); };
CustomSelectComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: CustomSelectComponent, selectors: [["custom-select"]], contentQueries: function CustomSelectComponent_ContentQueries(rf, ctx, dirIndex) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵcontentQuery"](dirIndex, _option_option_component__WEBPACK_IMPORTED_MODULE_5__["OptionComponent"], false);
    } if (rf & 2) {
        var _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.selectOptions = _t);
    } }, viewQuery: function CustomSelectComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c0, true);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c1, true);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_dropdown_dropdown_component__WEBPACK_IMPORTED_MODULE_4__["DropdownComponent"], true);
    } if (rf & 2) {
        var _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.selectWrapperRef = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.selectInput = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.dropdown = _t.first);
    } }, inputs: { selectedValue: "selectedValue", label: "label", placeholder: "placeholder", required: "required", disabled: "disabled", width: "width" }, outputs: { selectionChange: "selectionChange" }, features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵProvidersFeature"]([
            {
                provide: _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NG_VALUE_ACCESSOR"],
                useExisting: Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["forwardRef"])(() => CustomSelectComponent),
                multi: true
            },
            _services_select_data_transfer_service__WEBPACK_IMPORTED_MODULE_3__["SelectDataTransferService"]
        ])], ngContentSelectors: _c3, decls: 14, vars: 13, consts: [[1, "custom-select__wrapper"], ["selectWrapperRef", ""], [1, "custom-select__input"], ["selectInputRef", ""], ["class", "custom-select__label", 4, "ngIf"], ["readonly", "", "autocomplete", "off", 3, "placeholder", "value", "disabled", "click", "keydown", "blur"], ["input", ""], [1, "custom-select__dropdown-icon", 3, "click"], ["position", "after", "width", "12", "height", "8", "viewBox", "0 0 12 8", "fill", "none", "xmlns", "http://www.w3.org/2000/svg", 1, "custom-select__arrow"], ["d", "M11 1L6 6L1 1", "stroke-width", "2"], [3, "selectInputRef", "onDropdownHide"], [1, "custom-select__options-container"], [1, "custom-select__label"]], template: function CustomSelectComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojectionDef"](_c2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0, 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2, 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, CustomSelectComponent_label_4_Template, 2, 1, "label", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "input", 5, 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CustomSelectComponent_Template_input_click_5_listener($event) { return ctx.onSelectClick($event); })("keydown", function CustomSelectComponent_Template_input_keydown_5_listener($event) { return ctx.onKeyDown($event); })("blur", function CustomSelectComponent_Template_input_blur_5_listener() { return ctx.onTouched(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CustomSelectComponent_Template_div_click_7_listener($event) { return ctx.onSelectClick($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "svg", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "path", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceHTML"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "custom-dropdown", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("onDropdownHide", function CustomSelectComponent_Template_custom_dropdown_onDropdownHide_10_listener() { return ctx.onDropdownHide(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "perfect-scrollbar");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojection"](13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("required", ctx.required);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.label);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("opened", ctx.opened);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("placeholder", ctx.placeholder);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", ctx.selectText)("disabled", ctx.disabled);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("opened", ctx.opened);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("selectInputRef", _r1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("opened", ctx.opened);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_6__["NgIf"], _dropdown_dropdown_component__WEBPACK_IMPORTED_MODULE_4__["DropdownComponent"], ngx_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_7__["PerfectScrollbarComponent"]], styles: ["[_nghost-%COMP%] {\n  display: inline-block;\n}\n\n.custom-select__wrapper[_ngcontent-%COMP%] {\n  position: relative;\n  min-width: 5.625rem;\n}\n\n.custom-select__input[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  position: relative;\n  margin: 0;\n  outline: 0;\n}\n\n.custom-select__input[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\n  max-width: 100%;\n  height: 1.5rem;\n  border: 1px solid #a8a8a8;\n  border-radius: 8px;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n  overflow: hidden;\n  color: #323232;\n  margin-top: 4px;\n  padding: 4px 18px 2px 8px;\n  outline: 0;\n  cursor: pointer;\n  font-size: 14px;\n  transition: 0.15s ease;\n}\n\n.custom-select__input[_ngcontent-%COMP%]   input.opened[_ngcontent-%COMP%] {\n  color: #0079cc;\n  border: 1px solid #0079cc;\n}\n\n.custom-select__input[_ngcontent-%COMP%]   input.opened[_ngcontent-%COMP%]::placeholder {\n  color: #0079cc;\n}\n\n.custom-select__input[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]::placeholder {\n  color: #9b9b9b;\n  font-size: 14px;\n  transition: 0.15s ease;\n}\n\n.custom-select__input[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]:disabled {\n  cursor: default;\n  color: #c3cbcf;\n}\n\n.custom-select__input[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]:disabled::placeholder {\n  color: #c3cbcf;\n}\n\n.custom-select__input[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]:disabled    + .custom-select__dropdown-icon[_ngcontent-%COMP%] {\n  color: #c3cbcf;\n}\n\n.custom-select__input[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]:disabled    + .custom-select__dropdown-icon[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%]   *[_ngcontent-%COMP%] {\n  fill: #c3cbcf;\n}\n\n.custom-select__input[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]:not(:disabled):hover {\n  color: #0079cc;\n}\n\n.custom-select__input[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]:not(:disabled):hover::placeholder {\n  color: #0079cc;\n}\n\n.custom-select__input[_ngcontent-%COMP%]   .custom-select__dropdown-icon[_ngcontent-%COMP%] {\n  position: absolute;\n  right: 10px;\n  bottom: 6px;\n  pointer-events: none;\n  cursor: pointer;\n  transition: transform 0.15s ease;\n}\n\n.custom-select__input[_ngcontent-%COMP%]   .custom-select__dropdown-icon.opened[_ngcontent-%COMP%] {\n  transform: rotate(180deg);\n}\n\n.custom-select__input[_ngcontent-%COMP%]   .custom-select__dropdown-icon.opened[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%]   *[_ngcontent-%COMP%] {\n  fill: #0079cc;\n}\n\n.custom-select__input[_ngcontent-%COMP%]   .custom-select__dropdown-icon[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%]   *[_ngcontent-%COMP%] {\n  fill: #b9b9b9;\n}\n\n.custom-select__input.required[_ngcontent-%COMP%]   label[_ngcontent-%COMP%]:after {\n  color: #c80000;\n  content: \"*\";\n  position: relative;\n  left: 2px;\n  bottom: 2px;\n  font-size: 14px;\n}\n\n.custom-select__label[_ngcontent-%COMP%] {\n  color: grey;\n  font-size: 12px;\n}\n\n.custom-select__options-container[_ngcontent-%COMP%] {\n  margin-top: 4px;\n  width: 100%;\n  display: block;\n  overflow: auto;\n  max-height: 0;\n  border: 1px solid #a8a8a8;\n  border-radius: 8px;\n  box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);\n  transition: 0.15s ease;\n  opacity: 0;\n}\n\n.custom-select__options-container.opened[_ngcontent-%COMP%] {\n  height: auto;\n  max-height: 192px;\n  opacity: 1;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY3VzdG9tLXNlbGVjdC9jdXN0b20tc2VsZWN0LmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0kscUJBQUE7QUFDSjs7QUFJSTtFQUNJLGtCQUFBO0VBQ0EsbUJBQUE7QUFEUjs7QUFJSTtFQUNJLGFBQUE7RUFDQSxzQkFBQTtFQUNBLGtCQUFBO0VBQ0EsU0FBQTtFQUNBLFVBQUE7QUFGUjs7QUFJUTtFQUNJLGVBQUE7RUFDQSxjQUFBO0VBQ0EseUJBQUE7RUFDQSxrQkFBQTtFQUNBLHVCQUFBO0VBQ0EsbUJBQUE7RUFDQSxnQkFBQTtFQUNBLGNBQUE7RUFDQSxlQUFBO0VBQ0EseUJBQUE7RUFDQSxVQUFBO0VBQ0EsZUFBQTtFQUNBLGVBQUE7RUFDQSxzQkFBQTtBQUZaOztBQUlZO0VBQ0ksY0FBQTtFQUNBLHlCQUFBO0FBRmhCOztBQUlnQjtFQUNJLGNBQUE7QUFGcEI7O0FBTVk7RUFDSSxjQUFBO0VBQ0EsZUFBQTtFQUNBLHNCQUFBO0FBSmhCOztBQU9ZO0VBQ0ksZUFBQTtFQUNBLGNBQUE7QUFMaEI7O0FBT2dCO0VBQ0ksY0FBQTtBQUxwQjs7QUFTWTtFQUNJLGNBQUE7QUFQaEI7O0FBU2dCO0VBQ0ksYUFBQTtBQVBwQjs7QUFXWTtFQUNJLGNBQUE7QUFUaEI7O0FBV2dCO0VBQ0ksY0FBQTtBQVRwQjs7QUFlUTtFQUNJLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLFdBQUE7RUFDQSxvQkFBQTtFQUNBLGVBQUE7RUFDQSxnQ0FBQTtBQWJaOztBQWVZO0VBS0kseUJBQUE7QUFiaEI7O0FBZWdCO0VBQ0ksYUFBQTtBQWJwQjs7QUFpQlk7RUFDSSxhQUFBO0FBZmhCOztBQW1CUTtFQUNJLGNBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7RUFDQSxTQUFBO0VBQ0EsV0FBQTtFQUNBLGVBQUE7QUFqQlo7O0FBcUJJO0VBQ0ksV0FBQTtFQUNBLGVBQUE7QUFuQlI7O0FBc0JJO0VBQ0ksZUFBQTtFQUNBLFdBQUE7RUFDQSxjQUFBO0VBQ0EsY0FBQTtFQUNBLGFBQUE7RUFDQSx5QkFBQTtFQUNBLGtCQUFBO0VBQ0EsdUNBQUE7RUFDQSxzQkFBQTtFQUNBLFVBQUE7QUFwQlI7O0FBc0JRO0VBQ0ksWUFBQTtFQUNBLGlCQUFBO0VBQ0EsVUFBQTtBQXBCWiIsImZpbGUiOiJzcmMvYXBwL2N1c3RvbS1zZWxlY3QvY3VzdG9tLXNlbGVjdC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIjpob3N0IHtcclxuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxufVxyXG5cclxuXHJcbi5jdXN0b20tc2VsZWN0IHtcclxuICAgICZfX3dyYXBwZXIge1xyXG4gICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgICAgICBtaW4td2lkdGg6IDUuNjI1cmVtO1xyXG4gICAgfVxyXG4gICAgICAgXHJcbiAgICAmX19pbnB1dCB7XHJcbiAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgICAgICBtYXJnaW46IDA7XHJcbiAgICAgICAgb3V0bGluZTogMDtcclxuICAgIFxyXG4gICAgICAgIGlucHV0IHtcclxuICAgICAgICAgICAgbWF4LXdpZHRoOiAxMDAlO1xyXG4gICAgICAgICAgICBoZWlnaHQ6IDEuNXJlbTtcclxuICAgICAgICAgICAgYm9yZGVyOiAxcHggc29saWQgI2E4YThhODtcclxuICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogOHB4O1xyXG4gICAgICAgICAgICB0ZXh0LW92ZXJmbG93OiBlbGxpcHNpcztcclxuICAgICAgICAgICAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcclxuICAgICAgICAgICAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICAgICAgICAgICAgY29sb3I6ICMzMjMyMzI7XHJcbiAgICAgICAgICAgIG1hcmdpbi10b3A6IDRweDtcclxuICAgICAgICAgICAgcGFkZGluZzogNHB4IDE4cHggMnB4IDhweDtcclxuICAgICAgICAgICAgb3V0bGluZTogMDtcclxuICAgICAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgICAgICAgICBmb250LXNpemU6IDE0cHg7XHJcbiAgICAgICAgICAgIHRyYW5zaXRpb246IC4xNXMgZWFzZTtcclxuXHJcbiAgICAgICAgICAgICYub3BlbmVkIHtcclxuICAgICAgICAgICAgICAgIGNvbG9yOiAjMDA3OWNjO1xyXG4gICAgICAgICAgICAgICAgYm9yZGVyOiAxcHggc29saWQgIzAwNzljYztcclxuXHJcbiAgICAgICAgICAgICAgICAmOjpwbGFjZWhvbGRlciB7XHJcbiAgICAgICAgICAgICAgICAgICAgY29sb3I6ICMwMDc5Y2M7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICY6OnBsYWNlaG9sZGVyIHtcclxuICAgICAgICAgICAgICAgIGNvbG9yOiAjOWI5YjliO1xyXG4gICAgICAgICAgICAgICAgZm9udC1zaXplOiAxNHB4O1xyXG4gICAgICAgICAgICAgICAgdHJhbnNpdGlvbjogLjE1cyBlYXNlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgXHJcbiAgICAgICAgICAgICY6ZGlzYWJsZWQge1xyXG4gICAgICAgICAgICAgICAgY3Vyc29yOiBkZWZhdWx0O1xyXG4gICAgICAgICAgICAgICAgY29sb3I6ICNjM2NiY2Y7XHJcblxyXG4gICAgICAgICAgICAgICAgJjo6cGxhY2Vob2xkZXIge1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbG9yOiAjYzNjYmNmO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgXHJcbiAgICAgICAgICAgICY6ZGlzYWJsZWQgKyAuY3VzdG9tLXNlbGVjdF9fZHJvcGRvd24taWNvbiB7XHJcbiAgICAgICAgICAgICAgICBjb2xvcjogI2MzY2JjZjtcclxuXHJcbiAgICAgICAgICAgICAgICBzdmcgKiB7XHJcbiAgICAgICAgICAgICAgICAgICAgZmlsbDogI2MzY2JjZjtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSAgIFxyXG5cclxuICAgICAgICAgICAgJjpub3QoOmRpc2FibGVkKTpob3ZlciB7XHJcbiAgICAgICAgICAgICAgICBjb2xvcjogIzAwNzljYztcclxuXHJcbiAgICAgICAgICAgICAgICAmOjpwbGFjZWhvbGRlciB7XHJcbiAgICAgICAgICAgICAgICAgICAgY29sb3I6ICMwMDc5Y2M7XHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgXHJcbiAgICAgICAgLmN1c3RvbS1zZWxlY3RfX2Ryb3Bkb3duLWljb24ge1xyXG4gICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgICAgICAgIHJpZ2h0OiAxMHB4O1xyXG4gICAgICAgICAgICBib3R0b206IDZweDtcclxuICAgICAgICAgICAgcG9pbnRlci1ldmVudHM6IG5vbmU7XHJcbiAgICAgICAgICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgICAgICAgICAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIC4xNXMgZWFzZTtcclxuXHJcbiAgICAgICAgICAgICYub3BlbmVkIHtcclxuICAgICAgICAgICAgICAgIC13ZWJraXQtdHJhbnNmb3JtOiByb3RhdGUoMTgwZGVnKTtcclxuICAgICAgICAgICAgICAgIC1tb3otdHJhbnNmb3JtOiByb3RhdGUoMTgwZGVnKTtcclxuICAgICAgICAgICAgICAgIC1tcy10cmFuc2Zvcm06IHJvdGF0ZSgxODBkZWcpO1xyXG4gICAgICAgICAgICAgICAgLW8tdHJhbnNmb3JtOiByb3RhdGUoMTgwZGVnKTtcclxuICAgICAgICAgICAgICAgIHRyYW5zZm9ybTogcm90YXRlKDE4MGRlZyk7XHJcblxyXG4gICAgICAgICAgICAgICAgc3ZnICoge1xyXG4gICAgICAgICAgICAgICAgICAgIGZpbGw6ICMwMDc5Y2M7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICBcclxuICAgICAgICAgICAgc3ZnICoge1xyXG4gICAgICAgICAgICAgICAgZmlsbDogcmdiKDE4NSwgMTg1LCAxODUpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgXHJcbiAgICAgICAgJi5yZXF1aXJlZCBsYWJlbDphZnRlciB7XHJcbiAgICAgICAgICAgIGNvbG9yOiByZ2IoMjAwLCAwLCAwKTtcclxuICAgICAgICAgICAgY29udGVudDogXCIqXCI7XHJcbiAgICAgICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgICAgICAgICAgbGVmdDogMnB4O1xyXG4gICAgICAgICAgICBib3R0b206IDJweDtcclxuICAgICAgICAgICAgZm9udC1zaXplOiAxNHB4O1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAmX19sYWJlbCB7XHJcbiAgICAgICAgY29sb3I6IGdyZXk7XHJcbiAgICAgICAgZm9udC1zaXplOiAxMnB4O1xyXG4gICAgfVxyXG5cclxuICAgICZfX29wdGlvbnMtY29udGFpbmVyIHtcclxuICAgICAgICBtYXJnaW4tdG9wOiA0cHg7XHJcbiAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICAgICAgb3ZlcmZsb3c6IGF1dG87XHJcbiAgICAgICAgbWF4LWhlaWdodDogMDtcclxuICAgICAgICBib3JkZXI6IDFweCBzb2xpZCAjYThhOGE4O1xyXG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDhweDtcclxuICAgICAgICBib3gtc2hhZG93OiAwIDAgMTBweCByZ2IoMCAwIDAgLyAyMCUpO1xyXG4gICAgICAgIHRyYW5zaXRpb246IDAuMTVzIGVhc2U7XHJcbiAgICAgICAgb3BhY2l0eTogMDtcclxuXHJcbiAgICAgICAgJi5vcGVuZWQge1xyXG4gICAgICAgICAgICBoZWlnaHQ6IGF1dG87XHJcbiAgICAgICAgICAgIG1heC1oZWlnaHQ6IDE5MnB4O1xyXG4gICAgICAgICAgICBvcGFjaXR5OiAxO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufSJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CustomSelectComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'custom-select',
                templateUrl: 'custom-select.component.html',
                styleUrls: ['custom-select.component.scss'],
                providers: [
                    {
                        provide: _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NG_VALUE_ACCESSOR"],
                        useExisting: Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["forwardRef"])(() => CustomSelectComponent),
                        multi: true
                    },
                    _services_select_data_transfer_service__WEBPACK_IMPORTED_MODULE_3__["SelectDataTransferService"]
                ]
            }]
    }], function () { return [{ type: _services_select_data_transfer_service__WEBPACK_IMPORTED_MODULE_3__["SelectDataTransferService"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Renderer2"] }]; }, { selectWrapperRef: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
            args: ['selectWrapperRef']
        }], selectInput: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
            args: ['input']
        }], dropdown: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
            args: [_dropdown_dropdown_component__WEBPACK_IMPORTED_MODULE_4__["DropdownComponent"]]
        }], selectOptions: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ContentChildren"],
            args: [_option_option_component__WEBPACK_IMPORTED_MODULE_5__["OptionComponent"]]
        }], selectionChange: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }], selectedValue: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], label: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], placeholder: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], required: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], disabled: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], width: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }] }); })();


/***/ }),

/***/ "zUnb":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./environments/environment */ "AytR");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "ZAI4");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ "zn8P":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "zn8P";

/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map