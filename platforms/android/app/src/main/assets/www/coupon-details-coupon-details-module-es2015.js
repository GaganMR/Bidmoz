(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["coupon-details-coupon-details-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/coupon-details/coupon-details.page.html":
/*!***********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/coupon-details/coupon-details.page.html ***!
  \***********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\r\n  <ion-toolbar color=\"featured\">\r\n    <ion-buttons slot=\"start\">\r\n      <ion-back-button defaultHref=\"/bid-plans\"></ion-back-button>\r\n    </ion-buttons>\r\n    <ion-title>Coupon details</ion-title>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content>\r\n  <div></div>\r\n  <ion-grid>\r\n    <ion-row>\r\n      <ion-col class=\"ion-text-justify\">\r\n        <p>Valid Only for 24 hrs</p>\r\n        <p>Coupon Price depends upon product category</p>\r\n      <p>Can be used only once for a product, connot be used for other product. But once used for a product, the product can be bid any no of times</p>\r\n      </ion-col>\r\n    </ion-row>\r\n  </ion-grid>\r\n</ion-content>\r\n<ion-footer no-shadow>\r\n  <ion-toolbar color=\"featured\" position=\"bottom\">\r\n    <ion-button  color=\"custom-button\" slot=\"end\" (click)=\"payWithRazorpay()\">Purchase Coupon</ion-button>\r\n  </ion-toolbar>\r\n</ion-footer>");

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
/* harmony default export */ __webpack_exports__["default"] = ("p {\n  color: white;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY291cG9uLWRldGFpbHMvY291cG9uLWRldGFpbHMucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksWUFBQTtBQUNKIiwiZmlsZSI6InNyYy9hcHAvY291cG9uLWRldGFpbHMvY291cG9uLWRldGFpbHMucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsicHtcclxuICAgIGNvbG9yOiB3aGl0ZTtcclxufSJdfQ== */");

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
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");





let CouponDetailsPage = class CouponDetailsPage {
    constructor(apiServiceService, routes, loadingController, alertController, route) {
        this.apiServiceService = apiServiceService;
        this.routes = routes;
        this.loadingController = loadingController;
        this.alertController = alertController;
        this.route = route;
        this.coupon_id = this.route.snapshot.paramMap.get('coupon_id');
    }
    ngOnInit() {
    }
    payWithRazorpay() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            this.userDetails = JSON.parse(localStorage.getItem('userData'));
            let generateCouponPurchaseOrderData = {
                coupon_id: this.coupon_id,
                user_id: this.userDetails.user_details[0].user_id
            };
            const loading = yield this.loadingController.create({
                message: 'Please wait...'
            });
            yield loading.present();
            yield this.apiServiceService.generateCouponPurchaseOrder(generateCouponPurchaseOrderData).subscribe((result) => {
                console.log(result);
                var options = {
                    description: result.description,
                    // order_id: result.order_id,
                    currency: result.currency,
                    key: result.key,
                    amount: result.amount,
                    name: 'Bidmoz',
                    prefill: {
                        email: this.userDetails.user_details[0].email,
                        contact: this.userDetails.user_details[0].phone_no,
                        name: this.userDetails.user_details[0].user_id
                    },
                    theme: {
                        color: "#222428"
                    }
                };
                var successCallback = function (success) {
                    // alert('payment_id: ' + success.razorpay_payment_id)
                    // var razorpay_payment_id = success.razorpay_payment_id
                    // var razorpay_order_id = success.razorpay_order_id
                    // var razorpay_signature = success.razorpay_signature
                    loading.dismiss();
                    this.updateCouponPaymentDetails(result.payment_details_id, "Payment Completed", success.razorpay_payment_id, success.razorpay_order_id, success.razorpay_signature, "Payment Completed");
                };
                var cancelCallback = function (error) {
                    alert(error.description + ' (Error ' + error.code + ')');
                    loading.dismiss();
                };
                RazorpayCheckout.on('payment.success', successCallback);
                RazorpayCheckout.on('payment.cancel', cancelCallback);
                RazorpayCheckout.open(options, successCallback, cancelCallback);
                // console.log(this.RazorpayCheckout);
            });
        });
    }
    updateCouponPaymentDetails(payment_details_id, payment_status, razorpay_payment_id, razorpay_order_id, razorpay_signature, remarks) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            let couponPaymentDetails = {
                user_id: this.userDetails.user_details[0].user_id,
                coupon_id: this.coupon_id,
                payment_details_id: payment_details_id,
                razorpay_payment_id: razorpay_payment_id,
                razorpay_order_id: razorpay_order_id,
                razorpay_signature: razorpay_signature,
                payment_status: payment_status
            };
            const loading = yield this.loadingController.create({
                message: 'Updating payment details...'
            });
            yield loading.present();
            yield this.apiServiceService.updateCouponPaymentDetails(couponPaymentDetails).subscribe((res) => {
                if (res) {
                    if (res.status === "Success") {
                        localStorage.removeItem('userData');
                        localStorage.setItem('userData', JSON.stringify(res));
                        loading.dismiss();
                        this.routes.navigate(['current-sessions']);
                    }
                    else {
                        loading.dismiss();
                        this.showAlertController("Coupon update!", "Failed to update user details, please try again later.");
                    }
                }
                else {
                    loading.dismiss();
                    this.showAlertController("Coupon update!", "Failed to update user details, please try again later.");
                }
            });
        });
    }
    showAlertController(sub_header, msg) {
        this.alertController.create({
            //header: 'Alert',
            subHeader: sub_header,
            message: msg,
            buttons: ['OK']
        }).then(res => {
            res.present();
        });
    }
};
CouponDetailsPage.ctorParameters = () => [
    { type: _api_service_service__WEBPACK_IMPORTED_MODULE_3__["ApiServiceService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["LoadingController"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["AlertController"] },
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