(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["sign-in-or-sin-up-sign-in-or-sin-up-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/sign-in-or-sin-up/sign-in-or-sin-up.page.html":
/*!*****************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/sign-in-or-sin-up/sign-in-or-sin-up.page.html ***!
  \*****************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<!-- <ion-header>\n  <ion-toolbar color=\"primary\">\n    <ion-title>SignIn</ion-title>\n  </ion-toolbar>\n</ion-header> -->\n\n<ion-content class=\"auth-form\">\n  <ion-card class=\"container\">\n    <ion-card-content>\n      <ion-grid>\n        <ion-row>\n          <ion-col align-self-center>\n            <ion-button [routerLink]=\"['/user-register']\" expand=\"block\" color=\"primary\">Register</ion-button>\n    \n            <span class=\"divider line one-line\">or</span>\n    \n            <span class=\"already\">Already a user?</span>\n    \n            <ion-button [routerLink]=\"['/login']\" expand=\"block\" color=\"danger\">Sign In</ion-button>\n          </ion-col>\n        </ion-row>\n      </ion-grid>\n    </ion-card-content>\n  </ion-card>\n  \n</ion-content>\n");

/***/ }),

/***/ "./src/app/sign-in-or-sin-up/sign-in-or-sin-up-routing.module.ts":
/*!***********************************************************************!*\
  !*** ./src/app/sign-in-or-sin-up/sign-in-or-sin-up-routing.module.ts ***!
  \***********************************************************************/
/*! exports provided: SignInOrSinUpPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SignInOrSinUpPageRoutingModule", function() { return SignInOrSinUpPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _sign_in_or_sin_up_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./sign-in-or-sin-up.page */ "./src/app/sign-in-or-sin-up/sign-in-or-sin-up.page.ts");




const routes = [
    {
        path: '',
        component: _sign_in_or_sin_up_page__WEBPACK_IMPORTED_MODULE_3__["SignInOrSinUpPage"]
    }
];
let SignInOrSinUpPageRoutingModule = class SignInOrSinUpPageRoutingModule {
};
SignInOrSinUpPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], SignInOrSinUpPageRoutingModule);



/***/ }),

/***/ "./src/app/sign-in-or-sin-up/sign-in-or-sin-up.module.ts":
/*!***************************************************************!*\
  !*** ./src/app/sign-in-or-sin-up/sign-in-or-sin-up.module.ts ***!
  \***************************************************************/
/*! exports provided: SignInOrSinUpPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SignInOrSinUpPageModule", function() { return SignInOrSinUpPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _sign_in_or_sin_up_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./sign-in-or-sin-up-routing.module */ "./src/app/sign-in-or-sin-up/sign-in-or-sin-up-routing.module.ts");
/* harmony import */ var _sign_in_or_sin_up_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./sign-in-or-sin-up.page */ "./src/app/sign-in-or-sin-up/sign-in-or-sin-up.page.ts");







let SignInOrSinUpPageModule = class SignInOrSinUpPageModule {
};
SignInOrSinUpPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _sign_in_or_sin_up_routing_module__WEBPACK_IMPORTED_MODULE_5__["SignInOrSinUpPageRoutingModule"]
        ],
        declarations: [_sign_in_or_sin_up_page__WEBPACK_IMPORTED_MODULE_6__["SignInOrSinUpPage"]]
    })
], SignInOrSinUpPageModule);



/***/ }),

/***/ "./src/app/sign-in-or-sin-up/sign-in-or-sin-up.page.scss":
/*!***************************************************************!*\
  !*** ./src/app/sign-in-or-sin-up/sign-in-or-sin-up.page.scss ***!
  \***************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".container {\n  top: 22%;\n  --ion-background-color: white;\n}\n\nion-content {\n  --ion-background-color:#EBEBF5;\n}\n\n.divider {\n  display: flex;\n}\n\n.divider:before, .divider:after {\n  content: \"\";\n  flex: 1;\n}\n\n.line {\n  align-items: center;\n  margin: 1em -1em;\n  color: #cccccc;\n}\n\n.line:before, .line:after {\n  height: 1px;\n  margin: 0 1em;\n}\n\n.one-line:before, .one-line:after {\n  background: #cccccc;\n}\n\n.auth-form ion-grid,\n.auth-form ion-row {\n  height: 100%;\n  justify-content: center;\n}\n\n.already {\n  display: block;\n  text-align: center;\n  padding-bottom: 10px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2lnbi1pbi1vci1zaW4tdXAvc2lnbi1pbi1vci1zaW4tdXAucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsUUFBQTtFQUNBLDZCQUFBO0FBQ0Y7O0FBQ0E7RUFDRSw4QkFBQTtBQUVGOztBQUNBO0VBQ0ksYUFBQTtBQUVKOztBQUFJO0VBRUUsV0FBQTtFQUNBLE9BQUE7QUFDTjs7QUFHRTtFQUNFLG1CQUFBO0VBQ0EsZ0JBQUE7RUFDQSxjQUFBO0FBQUo7O0FBRUk7RUFFRSxXQUFBO0VBQ0EsYUFBQTtBQUROOztBQU1JO0VBRUcsbUJBQUE7QUFKUDs7QUFRRTs7RUFFRSxZQUFBO0VBQ0EsdUJBQUE7QUFMSjs7QUFRRTtFQUNFLGNBQUE7RUFDQSxrQkFBQTtFQUNBLG9CQUFBO0FBTEoiLCJmaWxlIjoic3JjL2FwcC9zaWduLWluLW9yLXNpbi11cC9zaWduLWluLW9yLXNpbi11cC5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY29udGFpbmVyIHtcbiAgdG9wOiAyMiU7XG4gIC0taW9uLWJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xufVxuaW9uLWNvbnRlbnR7XG4gIC0taW9uLWJhY2tncm91bmQtY29sb3I6I0VCRUJGNTtcbn1cblxuLmRpdmlkZXIge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgXG4gICAgJjpiZWZvcmUsXG4gICAgJjphZnRlciB7XG4gICAgICBjb250ZW50OiBcIlwiO1xuICAgICAgZmxleDogMTtcbiAgICB9XG4gIH1cbiAgXG4gIC5saW5lIHtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIG1hcmdpbjogMWVtIC0xZW07XG4gICAgY29sb3I6ICNjY2NjY2M7XG4gICAgXG4gICAgJjpiZWZvcmUsXG4gICAgJjphZnRlciB7XG4gICAgICBoZWlnaHQ6IDFweDtcbiAgICAgIG1hcmdpbjogMCAxZW07XG4gICAgfVxuICB9IFxuICBcbiAgLm9uZS1saW5lIHtcbiAgICAmOmJlZm9yZSxcbiAgICAmOmFmdGVyIHtcbiAgICAgICBiYWNrZ3JvdW5kOiAjY2NjY2NjO1xuICAgIH1cbiAgfVxuICBcbiAgLmF1dGgtZm9ybSBpb24tZ3JpZCxcbiAgLmF1dGgtZm9ybSBpb24tcm93IHtcbiAgICBoZWlnaHQ6IDEwMCU7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIH1cbiAgXG4gIC5hbHJlYWR5IHtcbiAgICBkaXNwbGF5OiBibG9jaztcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgcGFkZGluZy1ib3R0b206IDEwcHg7XG4gIH0iXX0= */");

/***/ }),

/***/ "./src/app/sign-in-or-sin-up/sign-in-or-sin-up.page.ts":
/*!*************************************************************!*\
  !*** ./src/app/sign-in-or-sin-up/sign-in-or-sin-up.page.ts ***!
  \*************************************************************/
/*! exports provided: SignInOrSinUpPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SignInOrSinUpPage", function() { return SignInOrSinUpPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


let SignInOrSinUpPage = class SignInOrSinUpPage {
    constructor() { }
    ngOnInit() {
    }
};
SignInOrSinUpPage.ctorParameters = () => [];
SignInOrSinUpPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-sign-in-or-sin-up',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./sign-in-or-sin-up.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/sign-in-or-sin-up/sign-in-or-sin-up.page.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./sign-in-or-sin-up.page.scss */ "./src/app/sign-in-or-sin-up/sign-in-or-sin-up.page.scss")).default]
    })
], SignInOrSinUpPage);



/***/ })

}]);
//# sourceMappingURL=sign-in-or-sin-up-sign-in-or-sin-up-module-es2015.js.map