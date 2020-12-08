(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["coupon-purchase-coupon-purchase-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/coupon-purchase/coupon-purchase.page.html":
/*!*************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/coupon-purchase/coupon-purchase.page.html ***!
  \*************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n  <ion-toolbar color=\"primary\">\n    <ion-buttons slot=\"start\">\n      <ion-back-button defaultHref=\"/home\"></ion-back-button>\n    </ion-buttons>\n    <ion-title>Coupon Purchase</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <ion-grid>\n    <ion-row>\n      <ion-col>\n        <ion-label>Coupon Type</ion-label>\n      </ion-col>\n    </ion-row>\n    <ion-card>\n      <!-- <ion-row>\n        <ion-col>\n          <ion-label>Coupon Type</ion-label>\n        </ion-col>\n      </ion-row> -->\n      <ion-row>\n        <ion-col>\n          <!-- <ion-card> -->\n          <ion-item>\n            <ion-label position=\"floating\">Description</ion-label>\n            <ion-textarea></ion-textarea>\n          </ion-item>\n  \n          <!-- </ion-card> -->\n        </ion-col>\n      </ion-row>\n      <ion-row>\n        <ion-col>\n          <ion-item>\n            <ion-label position=\"floating\">Validity</ion-label>\n            <ion-input></ion-input>\n          </ion-item>\n        </ion-col>\n      </ion-row>\n    </ion-card><br>\n    <ion-row>\n      <ion-col>\n        <ion-label>Payment Type</ion-label>\n      </ion-col>\n    </ion-row>\n  </ion-grid>\n  <ion-radio-group value=\"debit/credit\">\n    <ion-list>\n    <ion-item>\n      <ion-label>Debit/Credit Card</ion-label>\n      <ion-radio slot=\"start\" color=\"success\" value=\"debit/credit\"></ion-radio>\n    </ion-item>\n    <ion-item>\n      <ion-label>UPI Link</ion-label>\n      <ion-radio slot=\"start\" color=\"success\" value=\"upi\"></ion-radio>\n    </ion-item>\n    <ion-item>\n      <ion-label>Phone Pay</ion-label>\n      <ion-radio slot=\"start\" color=\"success\" value=\"phonepay\"></ion-radio>\n    </ion-item>\n    <ion-item>\n      <ion-label>Google Pay</ion-label>\n      <ion-radio slot=\"start\" color=\"success\" value=\"googlepay\"></ion-radio>\n    </ion-item>\n  </ion-list>\n  </ion-radio-group>\n</ion-content>\n");

/***/ }),

/***/ "./src/app/coupon-purchase/coupon-purchase-routing.module.ts":
/*!*******************************************************************!*\
  !*** ./src/app/coupon-purchase/coupon-purchase-routing.module.ts ***!
  \*******************************************************************/
/*! exports provided: CouponPurchasePageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CouponPurchasePageRoutingModule", function() { return CouponPurchasePageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _coupon_purchase_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./coupon-purchase.page */ "./src/app/coupon-purchase/coupon-purchase.page.ts");




const routes = [
    {
        path: '',
        component: _coupon_purchase_page__WEBPACK_IMPORTED_MODULE_3__["CouponPurchasePage"]
    }
];
let CouponPurchasePageRoutingModule = class CouponPurchasePageRoutingModule {
};
CouponPurchasePageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], CouponPurchasePageRoutingModule);



/***/ }),

/***/ "./src/app/coupon-purchase/coupon-purchase.module.ts":
/*!***********************************************************!*\
  !*** ./src/app/coupon-purchase/coupon-purchase.module.ts ***!
  \***********************************************************/
/*! exports provided: CouponPurchasePageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CouponPurchasePageModule", function() { return CouponPurchasePageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _coupon_purchase_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./coupon-purchase-routing.module */ "./src/app/coupon-purchase/coupon-purchase-routing.module.ts");
/* harmony import */ var _coupon_purchase_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./coupon-purchase.page */ "./src/app/coupon-purchase/coupon-purchase.page.ts");







let CouponPurchasePageModule = class CouponPurchasePageModule {
};
CouponPurchasePageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _coupon_purchase_routing_module__WEBPACK_IMPORTED_MODULE_5__["CouponPurchasePageRoutingModule"]
        ],
        declarations: [_coupon_purchase_page__WEBPACK_IMPORTED_MODULE_6__["CouponPurchasePage"]]
    })
], CouponPurchasePageModule);



/***/ }),

/***/ "./src/app/coupon-purchase/coupon-purchase.page.scss":
/*!***********************************************************!*\
  !*** ./src/app/coupon-purchase/coupon-purchase.page.scss ***!
  \***********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvdXBvbi1wdXJjaGFzZS9jb3Vwb24tcHVyY2hhc2UucGFnZS5zY3NzIn0= */");

/***/ }),

/***/ "./src/app/coupon-purchase/coupon-purchase.page.ts":
/*!*********************************************************!*\
  !*** ./src/app/coupon-purchase/coupon-purchase.page.ts ***!
  \*********************************************************/
/*! exports provided: CouponPurchasePage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CouponPurchasePage", function() { return CouponPurchasePage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


let CouponPurchasePage = class CouponPurchasePage {
    constructor() { }
    ngOnInit() {
    }
};
CouponPurchasePage.ctorParameters = () => [];
CouponPurchasePage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-coupon-purchase',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./coupon-purchase.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/coupon-purchase/coupon-purchase.page.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./coupon-purchase.page.scss */ "./src/app/coupon-purchase/coupon-purchase.page.scss")).default]
    })
], CouponPurchasePage);



/***/ })

}]);
//# sourceMappingURL=coupon-purchase-coupon-purchase-module-es2015.js.map