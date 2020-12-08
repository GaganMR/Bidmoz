(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["bid-plans-bid-plans-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/bid-plans/bid-plans.page.html":
/*!*************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/bid-plans/bid-plans.page.html ***!
  \*************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n  <ion-toolbar color=\"primary\">\n    <!-- class=\"ion-text-center\" -->\n    <ion-buttons slot=\"start\">\n      <ion-back-button defaultHref=\"/terms-and-condtions\"></ion-back-button>\n    </ion-buttons>\n    <ion-title>Bid Plans(Coupons)</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content fullscreen>\n  <ion-card *ngIf=\"userCoupons\" class=\"mainCard\">\n    <ion-card-header>\n      <ion-card-subtitle><strong>Coupons You Have</strong></ion-card-subtitle>\n    </ion-card-header>\n    <ion-grid>\n      <ion-row>\n        <ion-col size=\"6\" *ngFor=\"let item of this.userCoupons\" (click)=\"coupnDetails(item)\">\n          <ion-card class=\"container\">\n            <ion-card-header>\n              <ion-card-subtitle>{{item.coupon_title}}&nbsp;(INR{{item.coupon_price}})</ion-card-subtitle>\n            </ion-card-header>\n          </ion-card>\n        </ion-col>\n      </ion-row>\n    </ion-grid>\n  </ion-card>\n  <ion-card *ngIf=\"activeCoupons\" class=\"mainCard\">\n    <ion-card-header>\n      <ion-card-subtitle><strong>Coupons You May Want To Buy</strong></ion-card-subtitle>\n    </ion-card-header>\n    <ion-grid>\n      <ion-row>\n        <ion-col size=\"6\" *ngFor=\"let item of activeCoupons\" (click)=\"coupnDetails(item)\">\n          <ion-card class=\"container\">\n            <ion-card-header>\n              <ion-card-subtitle>{{item.coupon_title}}&nbsp;(INR{{item.coupon_price}})</ion-card-subtitle>\n            </ion-card-header>\n          </ion-card>\n        </ion-col>\n      </ion-row>\n    </ion-grid>\n  </ion-card>\n\n\n</ion-content>\n<!-- <ion-footer no-shadow>\n  <ion-toolbar position=\"bottom\">\n    <ion-button  slot=\"end\" [routerLink]=\"['/coupon-purchase']\"\n      >Continue<ion-icon name=\"chevron-forward-outline\"></ion-icon\n    ></ion-button>\n  </ion-toolbar>\n</ion-footer> -->");

/***/ }),

/***/ "./src/app/bid-plans/bid-plans-routing.module.ts":
/*!*******************************************************!*\
  !*** ./src/app/bid-plans/bid-plans-routing.module.ts ***!
  \*******************************************************/
/*! exports provided: BidPlansPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BidPlansPageRoutingModule", function() { return BidPlansPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _bid_plans_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./bid-plans.page */ "./src/app/bid-plans/bid-plans.page.ts");




const routes = [
    {
        path: '',
        component: _bid_plans_page__WEBPACK_IMPORTED_MODULE_3__["BidPlansPage"]
    }
];
let BidPlansPageRoutingModule = class BidPlansPageRoutingModule {
};
BidPlansPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], BidPlansPageRoutingModule);



/***/ }),

/***/ "./src/app/bid-plans/bid-plans.module.ts":
/*!***********************************************!*\
  !*** ./src/app/bid-plans/bid-plans.module.ts ***!
  \***********************************************/
/*! exports provided: BidPlansPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BidPlansPageModule", function() { return BidPlansPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _bid_plans_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./bid-plans-routing.module */ "./src/app/bid-plans/bid-plans-routing.module.ts");
/* harmony import */ var _bid_plans_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./bid-plans.page */ "./src/app/bid-plans/bid-plans.page.ts");







// const routes: Routes = [
//   {
//     path: '',
//     component: BidPlansPage
//   },
// ]
let BidPlansPageModule = class BidPlansPageModule {
};
BidPlansPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _bid_plans_routing_module__WEBPACK_IMPORTED_MODULE_5__["BidPlansPageRoutingModule"]
        ],
        declarations: [_bid_plans_page__WEBPACK_IMPORTED_MODULE_6__["BidPlansPage"]]
    })
], BidPlansPageModule);



/***/ }),

/***/ "./src/app/bid-plans/bid-plans.page.scss":
/*!***********************************************!*\
  !*** ./src/app/bid-plans/bid-plans.page.scss ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".container {\n  --ion-background-color: white;\n}\n\nion-content {\n  --ion-background-color:white;\n}\n\n.mainCard {\n  --ion-background-color: #EBEBF5;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYmlkLXBsYW5zL2JpZC1wbGFucy5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSw2QkFBQTtBQUNKOztBQUNBO0VBQ0ksNEJBQUE7QUFFSjs7QUFBQTtFQUNJLCtCQUFBO0FBR0oiLCJmaWxlIjoic3JjL2FwcC9iaWQtcGxhbnMvYmlkLXBsYW5zLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5jb250YWluZXIge1xuICAgIC0taW9uLWJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xufVxuaW9uLWNvbnRlbnR7XG4gICAgLS1pb24tYmFja2dyb3VuZC1jb2xvcjp3aGl0ZTtcbn1cbi5tYWluQ2FyZHtcbiAgICAtLWlvbi1iYWNrZ3JvdW5kLWNvbG9yOiAgI0VCRUJGNTsgIFxufSJdfQ== */");

/***/ }),

/***/ "./src/app/bid-plans/bid-plans.page.ts":
/*!*********************************************!*\
  !*** ./src/app/bid-plans/bid-plans.page.ts ***!
  \*********************************************/
/*! exports provided: BidPlansPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BidPlansPage", function() { return BidPlansPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _api_service_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../api-service.service */ "./src/app/api-service.service.ts");




let BidPlansPage = class BidPlansPage {
    constructor(apiServiceService, router) {
        this.apiServiceService = apiServiceService;
        this.router = router;
    }
    ngOnInit() {
        this.getCoupon();
    }
    getCoupon() {
        this.userDetails = JSON.parse(localStorage.getItem('userData'));
        this.apiServiceService.getCoupons(this.userDetails.user_details[0].user_id).subscribe((result) => {
            console.log(result);
            this.activeCoupons = result.active_coupons_details;
            this.userCoupons = result.user_coupons_details;
            // console.log(this.allCoupons);
        });
    }
    coupnDetails(item) {
        this.router.navigate(['coupon-details', item.coupon_id]);
    }
};
BidPlansPage.ctorParameters = () => [
    { type: _api_service_service__WEBPACK_IMPORTED_MODULE_3__["ApiServiceService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }
];
BidPlansPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-bid-plans',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./bid-plans.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/bid-plans/bid-plans.page.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./bid-plans.page.scss */ "./src/app/bid-plans/bid-plans.page.scss")).default]
    })
], BidPlansPage);



/***/ })

}]);
//# sourceMappingURL=bid-plans-bid-plans-module-es2015.js.map