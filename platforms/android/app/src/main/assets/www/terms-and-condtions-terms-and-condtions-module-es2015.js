(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["terms-and-condtions-terms-and-condtions-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/terms-and-condtions/terms-and-condtions.page.html":
/*!*********************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/terms-and-condtions/terms-and-condtions.page.html ***!
  \*********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\r\n  <!-- class=\"ion-text-center\" -->\r\n  <ion-toolbar color=\"featured\">\r\n    <!-- <ion-buttons slot=\"start\">\r\n      <ion-back-button defaultHref=\"/user-register\"></ion-back-button>\r\n    </ion-buttons> -->\r\n    <ion-title>Terms & Condtions</ion-title>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content>\r\n  <ion-grid>\r\n    <ion-row>\r\n      <ion-col col-12 col-xl-2 col-lg-3 col-md-4>\r\n        <p class=\"ion-text-justify\">\r\n          Maveric Systems is an engineering services company founded in 2000. It\r\n          works across digital platforms, banking solutions, data technologies,\r\n          and regulatory systems.[1] Maveric Systems has a dedicated offshore\r\n          delivery and research center in Chennai, India. Headquartered in\r\n          Chennai, India, Maveric Systems has branches in Mumbai, Bangalore,\r\n          Singapore, Mexico City, London, Dubai, Riyadh, New Jersey, and Kuala\r\n          Lumpur. The firm operates in the APAC, Middle East.[2]\r\n        </p>\r\n        <p class=\"ion-text-justify\">\r\n          The company was founded in 2000 by Ranga Reddy, P Venkatesh, NN\r\n          Subramanian and VN Mahesh. The company initially offered testing\r\n          services to banks and financial institutions but, by 2012, Maveric\r\n          Systems diversified into requirements assurance, application\r\n          assurance, and program assurance. Maveric additionally offered domain\r\n          specialization, platforms, and technical competency.[4] In 2018, the\r\n          company expanded its board to include Chitra Ramakrishna, the former\r\n          CEO and Managing Director of National Stock Exchange, and D. K.\r\n          Sharma, a technology specialist and former CIO of Citigroup Global\r\n          Consumer Banking’s International Business as independent Board of\r\n          Directors. [5]\r\n        </p>\r\n      </ion-col>\r\n    </ion-row>\r\n    <ion-row>\r\n      <ion-col>\r\n    <ion-checkbox [checked]=\"isChecked\" (ionChange)=\"notify()\"></ion-checkbox>\r\n    </ion-col>\r\n    </ion-row>\r\n  </ion-grid>\r\n</ion-content>\r\n<ion-footer no-shadow >\r\n  <ion-toolbar color=\"featured\" position=\"bottom\" transparent>\r\n    <ion-button color=\"custom-button\" slot=\"end\" [disabled]=\"isChecked != true\" (click)=\"acceptTermsAndConditions()\">Continue</ion-button>\r\n  </ion-toolbar>\r\n</ion-footer>\r\n");

/***/ }),

/***/ "./src/app/terms-and-condtions/terms-and-condtions-routing.module.ts":
/*!***************************************************************************!*\
  !*** ./src/app/terms-and-condtions/terms-and-condtions-routing.module.ts ***!
  \***************************************************************************/
/*! exports provided: TermsAndCondtionsPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TermsAndCondtionsPageRoutingModule", function() { return TermsAndCondtionsPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _terms_and_condtions_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./terms-and-condtions.page */ "./src/app/terms-and-condtions/terms-and-condtions.page.ts");




const routes = [
    {
        path: '',
        component: _terms_and_condtions_page__WEBPACK_IMPORTED_MODULE_3__["TermsAndCondtionsPage"]
    }
];
let TermsAndCondtionsPageRoutingModule = class TermsAndCondtionsPageRoutingModule {
};
TermsAndCondtionsPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], TermsAndCondtionsPageRoutingModule);



/***/ }),

/***/ "./src/app/terms-and-condtions/terms-and-condtions.module.ts":
/*!*******************************************************************!*\
  !*** ./src/app/terms-and-condtions/terms-and-condtions.module.ts ***!
  \*******************************************************************/
/*! exports provided: TermsAndCondtionsPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TermsAndCondtionsPageModule", function() { return TermsAndCondtionsPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _terms_and_condtions_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./terms-and-condtions-routing.module */ "./src/app/terms-and-condtions/terms-and-condtions-routing.module.ts");
/* harmony import */ var _terms_and_condtions_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./terms-and-condtions.page */ "./src/app/terms-and-condtions/terms-and-condtions.page.ts");







let TermsAndCondtionsPageModule = class TermsAndCondtionsPageModule {
};
TermsAndCondtionsPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _terms_and_condtions_routing_module__WEBPACK_IMPORTED_MODULE_5__["TermsAndCondtionsPageRoutingModule"]
        ],
        declarations: [_terms_and_condtions_page__WEBPACK_IMPORTED_MODULE_6__["TermsAndCondtionsPage"]]
    })
], TermsAndCondtionsPageModule);



/***/ }),

/***/ "./src/app/terms-and-condtions/terms-and-condtions.page.scss":
/*!*******************************************************************!*\
  !*** ./src/app/terms-and-condtions/terms-and-condtions.page.scss ***!
  \*******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("ion-content {\n  --ion-background-color:white;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdGVybXMtYW5kLWNvbmR0aW9ucy90ZXJtcy1hbmQtY29uZHRpb25zLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLDRCQUFBO0FBQ0oiLCJmaWxlIjoic3JjL2FwcC90ZXJtcy1hbmQtY29uZHRpb25zL3Rlcm1zLWFuZC1jb25kdGlvbnMucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaW9uLWNvbnRlbnR7XHJcbiAgICAtLWlvbi1iYWNrZ3JvdW5kLWNvbG9yOndoaXRlO1xyXG4gIH0iXX0= */");

/***/ }),

/***/ "./src/app/terms-and-condtions/terms-and-condtions.page.ts":
/*!*****************************************************************!*\
  !*** ./src/app/terms-and-condtions/terms-and-condtions.page.ts ***!
  \*****************************************************************/
/*! exports provided: TermsAndCondtionsPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TermsAndCondtionsPage", function() { return TermsAndCondtionsPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");



let TermsAndCondtionsPage = class TermsAndCondtionsPage {
    constructor(router) {
        this.router = router;
        this.isChecked = false;
    }
    ngOnInit() {
    }
    notify() {
        this.isChecked = !this.isChecked;
    }
    acceptTermsAndConditions() {
        localStorage.setItem("terms&conditions", "accepted");
        this.router.navigate(['current-sessions']);
    }
};
TermsAndCondtionsPage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }
];
TermsAndCondtionsPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-terms-and-condtions',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./terms-and-condtions.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/terms-and-condtions/terms-and-condtions.page.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./terms-and-condtions.page.scss */ "./src/app/terms-and-condtions/terms-and-condtions.page.scss")).default]
    })
], TermsAndCondtionsPage);



/***/ })

}]);
//# sourceMappingURL=terms-and-condtions-terms-and-condtions-module-es2015.js.map