(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["feature-product-details-feature-product-details-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/feature-product-details/feature-product-details.page.html":
/*!*****************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/feature-product-details/feature-product-details.page.html ***!
  \*****************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\r\n  <ion-toolbar color=\"featured\">\r\n    <ion-buttons slot=\"start\">\r\n      <ion-back-button defaultHref=\"/home\"></ion-back-button>\r\n    </ion-buttons>\r\n    <ion-title>Feature Product Details</ion-title>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content>\r\n    <ion-grid>\r\n      <ion-row>\r\n        <ion-col size=\"6\" *ngFor=\"let item of featuredProduct\" (click)=\"coupnDetails(item)\">\r\n          <ion-card style=\"border-radius: 10px;\">\r\n              <img height=\"80\" width=\"150\" style=\"padding: 10px;\" src=\"https://bidmoz.thehereitis.com/bidmoz_app_apis/{{item.product_image_url}}\" />\r\n          </ion-card>\r\n        </ion-col>\r\n      </ion-row>\r\n    </ion-grid>\r\n</ion-content>\r\n<ion-footer>\r\n  <ion-toolbar>\r\n    <ion-tabs>\r\n      <ion-tab-bar color=\"featured\" slot=\"start bottom\">\r\n        <ion-tab-button (click)=\"sShare()\">\r\n          <ion-icon name=\"share-social-outline\"></ion-icon>\r\n        </ion-tab-button>\r\n        <ion-tab-button>\r\n          <ion-icon name=\"git-pull-request-outline\" (click)=\"getFeatureProductDetails()\"></ion-icon>\r\n        </ion-tab-button>\r\n      </ion-tab-bar>\r\n    </ion-tabs>\r\n  </ion-toolbar>\r\n</ion-footer>");

/***/ }),

/***/ "./src/app/feature-product-details/feature-product-details-routing.module.ts":
/*!***********************************************************************************!*\
  !*** ./src/app/feature-product-details/feature-product-details-routing.module.ts ***!
  \***********************************************************************************/
/*! exports provided: FeatureProductDetailsPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FeatureProductDetailsPageRoutingModule", function() { return FeatureProductDetailsPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _feature_product_details_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./feature-product-details.page */ "./src/app/feature-product-details/feature-product-details.page.ts");




const routes = [
    {
        path: '',
        component: _feature_product_details_page__WEBPACK_IMPORTED_MODULE_3__["FeatureProductDetailsPage"]
    }
];
let FeatureProductDetailsPageRoutingModule = class FeatureProductDetailsPageRoutingModule {
};
FeatureProductDetailsPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], FeatureProductDetailsPageRoutingModule);



/***/ }),

/***/ "./src/app/feature-product-details/feature-product-details.module.ts":
/*!***************************************************************************!*\
  !*** ./src/app/feature-product-details/feature-product-details.module.ts ***!
  \***************************************************************************/
/*! exports provided: FeatureProductDetailsPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FeatureProductDetailsPageModule", function() { return FeatureProductDetailsPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _feature_product_details_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./feature-product-details-routing.module */ "./src/app/feature-product-details/feature-product-details-routing.module.ts");
/* harmony import */ var _feature_product_details_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./feature-product-details.page */ "./src/app/feature-product-details/feature-product-details.page.ts");







let FeatureProductDetailsPageModule = class FeatureProductDetailsPageModule {
};
FeatureProductDetailsPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _feature_product_details_routing_module__WEBPACK_IMPORTED_MODULE_5__["FeatureProductDetailsPageRoutingModule"]
        ],
        declarations: [_feature_product_details_page__WEBPACK_IMPORTED_MODULE_6__["FeatureProductDetailsPage"]]
    })
], FeatureProductDetailsPageModule);



/***/ }),

/***/ "./src/app/feature-product-details/feature-product-details.page.scss":
/*!***************************************************************************!*\
  !*** ./src/app/feature-product-details/feature-product-details.page.scss ***!
  \***************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2ZlYXR1cmUtcHJvZHVjdC1kZXRhaWxzL2ZlYXR1cmUtcHJvZHVjdC1kZXRhaWxzLnBhZ2Uuc2NzcyJ9 */");

/***/ }),

/***/ "./src/app/feature-product-details/feature-product-details.page.ts":
/*!*************************************************************************!*\
  !*** ./src/app/feature-product-details/feature-product-details.page.ts ***!
  \*************************************************************************/
/*! exports provided: FeatureProductDetailsPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FeatureProductDetailsPage", function() { return FeatureProductDetailsPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _ionic_native_social_sharing_ngx__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic-native/social-sharing/ngx */ "./node_modules/@ionic-native/social-sharing/__ivy_ngcc__/ngx/index.js");
/* harmony import */ var _api_service_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../api-service.service */ "./src/app/api-service.service.ts");





let FeatureProductDetailsPage = class FeatureProductDetailsPage {
    constructor(socialSharing, apiServiceService, route) {
        this.socialSharing = socialSharing;
        this.apiServiceService = apiServiceService;
        this.route = route;
        this.slideOpts = {
            initialSlide: 1,
        };
    }
    ngOnInit() {
        this.getfeatureProduct();
    }
    sShare() {
        console.log("abc");
        var options = {
            message: 'Ionic Share',
            url: 'https://ionicframework.com/docs/native/social-sharing',
        };
        this.socialSharing.shareWithOptions(options);
    }
    getfeatureProduct() {
        this.apiServiceService.getFeaturedProduct().subscribe((result) => {
            console.log(result);
            this.featuredProduct = result;
        });
    }
    getFeatureProductDetails() {
        this.userDetails = JSON.parse(localStorage.getItem('userData'));
        console.log();
        let getFeaturedProductData = {
            featured_product_id: this.featured_product_id,
            product_id: this.product_id,
            user_id: this.userDetails.user_details[0].user_id
        };
        console.log(getFeaturedProductData);
        this.apiServiceService.requestFeatureProductDetails(getFeaturedProductData).subscribe((res) => {
            console.log(res);
        });
    }
};
FeatureProductDetailsPage.ctorParameters = () => [
    { type: _ionic_native_social_sharing_ngx__WEBPACK_IMPORTED_MODULE_3__["SocialSharing"] },
    { type: _api_service_service__WEBPACK_IMPORTED_MODULE_4__["ApiServiceService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] }
];
FeatureProductDetailsPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-feature-product-details',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./feature-product-details.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/feature-product-details/feature-product-details.page.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./feature-product-details.page.scss */ "./src/app/feature-product-details/feature-product-details.page.scss")).default]
    })
], FeatureProductDetailsPage);



/***/ })

}]);
//# sourceMappingURL=feature-product-details-feature-product-details-module-es2015.js.map