(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["coupon-details-coupon-details-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/coupon-details/coupon-details.page.html":
/*!***********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/coupon-details/coupon-details.page.html ***!
  \***********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n  <ion-toolbar color=\"primary\">\n    <ion-title>Coupon details</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <div></div>\n  <ion-grid>\n    <ion-row>\n      <ion-col class=\"ion-text-justify\">\n        <p>Valid Only for 24 hrs</p>\n        <p>Coupon Price depends upon product category</p>\n      <p>Can be used only once for a product, connot be used for other product. But once used for a product, the product can be bid any no of times</p>\n      </ion-col>\n    </ion-row>\n  </ion-grid>\n</ion-content>\n<ion-footer no-shadow>\n  <ion-toolbar position=\"bottom\">\n    <ion-button  slot=\"end\" (click)=\"payWithRazorpay()\">Purchase Coupon</ion-button>\n  </ion-toolbar>\n</ion-footer>");

/***/ }),

/***/ "./src/app/coupon-details/coupon-details-routing.module.ts":
/*!*****************************************************************!*\
  !*** ./src/app/coupon-details/coupon-details-routing.module.ts ***!
  \*****************************************************************/
/*! exports provided: CouponDetailsPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CouponDetailsPageRoutingModule", function() { return CouponDetailsPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _coupon_details_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./coupon-details.page */ "./src/app/coupon-details/coupon-details.page.ts");




const routes = [
    {
        path: '',
        component: _coupon_details_page__WEBPACK_IMPORTED_MODULE_3__["CouponDetailsPage"]
    }
];
let CouponDetailsPageRoutingModule = class CouponDetailsPageRoutingModule {
};
CouponDetailsPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], CouponDetailsPageRoutingModule);



/***/ }),

/***/ "./src/app/coupon-details/coupon-details.module.ts":
/*!*********************************************************!*\
  !*** ./src/app/coupon-details/coupon-details.module.ts ***!
  \*********************************************************/
/*! exports provided: CouponDetailsPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CouponDetailsPageModule", function() { return CouponDetailsPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _coupon_details_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./coupon-details-routing.module */ "./src/app/coupon-details/coupon-details-routing.module.ts");
/* harmony import */ var _coupon_details_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./coupon-details.page */ "./src/app/coupon-details/coupon-details.page.ts");







let CouponDetailsPageModule = class CouponDetailsPageModule {
};
CouponDetailsPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _coupon_details_routing_module__WEBPACK_IMPORTED_MODULE_5__["CouponDetailsPageRoutingModule"]
        ],
        declarations: [_coupon_details_page__WEBPACK_IMPORTED_MODULE_6__["CouponDetailsPage"]]
    })
], CouponDetailsPageModule);



/***/ }),

/***/ "./src/app/coupon-details/coupon-details.page.scss":
/*!*********************************************************!*\
  !*** ./src/app/coupon-details/coupon-details.page.scss ***!
  \*********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvdXBvbi1kZXRhaWxzL2NvdXBvbi1kZXRhaWxzLnBhZ2Uuc2NzcyJ9 */");

/***/ }),

/***/ "./src/app/coupon-details/coupon-details.page.ts":
/*!*******************************************************!*\
  !*** ./src/app/coupon-details/coupon-details.page.ts ***!
  \*******************************************************/
/*! exports provided: CouponDetailsPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CouponDetailsPage", function() { return CouponDetailsPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _api_service_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../api-service.service */ "./src/app/api-service.service.ts");




let CouponDetailsPage = class CouponDetailsPage {
    constructor(apiServiceService, route) {
        this.apiServiceService = apiServiceService;
        this.route = route;
        this.coupon_id = this.route.snapshot.paramMap.get('coupon_id');
    }
    ngOnInit() {
    }
    payWithRazorpay() {
        this.userDetails = JSON.parse(localStorage.getItem('userData'));
        let generateCouponPurchaseOrderData = {
            coupon_id: this.coupon_id,
            user_id: this.userDetails.user_details[0].user_id
        };
        this.apiServiceService.generateCouponPurchaseOrder(generateCouponPurchaseOrderData).subscribe((result) => {
            console.log(result);
        });
    }
};
CouponDetailsPage.ctorParameters = () => [
    { type: _api_service_service__WEBPACK_IMPORTED_MODULE_3__["ApiServiceService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] }
];
CouponDetailsPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-coupon-details',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./coupon-details.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/coupon-details/coupon-details.page.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./coupon-details.page.scss */ "./src/app/coupon-details/coupon-details.page.scss")).default]
    })
], CouponDetailsPage);



/***/ })

}]);
//# sourceMappingURL=coupon-details-coupon-details-module-es2015.js.map