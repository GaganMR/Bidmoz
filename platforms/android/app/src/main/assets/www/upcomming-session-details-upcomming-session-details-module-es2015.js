(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["upcomming-session-details-upcomming-session-details-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/upcomming-session-details/upcomming-session-details.page.html":
/*!*********************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/upcomming-session-details/upcomming-session-details.page.html ***!
  \*********************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\r\n  <ion-toolbar color=\"featured\">\r\n     <ion-buttons slot=\"start\">\r\n      <ion-back-button defaultHref=\"/featured-product\"></ion-back-button>\r\n    </ion-buttons>\r\n    <ion-title>Upcomming-Session</ion-title>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content>\r\n  <ion-card *ngIf=\"upcommingSessionDetails\" style=\"height:100%\">\r\n    <ion-card-content>\r\n      <ion-slides>\r\n        <ion-slide *ngFor=\"let item of upcommingSessionDetails\">\r\n          <div class=\"slide\">\r\n            <h2>{{item.product_name}}</h2><br>\r\n            <div class=\"ion-text-start\" style=\"padding-left: 28px;\">\r\n            <p >#{{item.session_id}}</p>\r\n            </div>\r\n            <img\r\n              class=\"imgHight\"\r\n              src=\"https://bidmoz.thehereitis.com/bidmoz_app_apis/{{item.product_image_url}}\"\r\n            />\r\n            <div class=\"ion-text-start\">\r\n              <h2><strong>Product Description:</strong></h2>\r\n              <p>{{item.product_description}}</p>\r\n            </div>\r\n            <div class=\"ion-text-start\">\r\n              <h2>Session starts at:&nbsp;&nbsp;<b>{{item.start_date}}</b></h2>\r\n              <h2>Session ends at:&nbsp;&nbsp;&nbsp;<b>{{item.end_date}}</b></h2>\r\n              <h2>Base Price:&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<b>{{item.base_price}}</b></h2>\r\n            </div>\r\n          </div>\r\n        </ion-slide>\r\n      </ion-slides>\r\n    </ion-card-content>\r\n    </ion-card>\r\n</ion-content>\r\n");

/***/ }),

/***/ "./src/app/upcomming-session-details/upcomming-session-details-routing.module.ts":
/*!***************************************************************************************!*\
  !*** ./src/app/upcomming-session-details/upcomming-session-details-routing.module.ts ***!
  \***************************************************************************************/
/*! exports provided: UpcommingSessionDetailsPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UpcommingSessionDetailsPageRoutingModule", function() { return UpcommingSessionDetailsPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _upcomming_session_details_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./upcomming-session-details.page */ "./src/app/upcomming-session-details/upcomming-session-details.page.ts");




const routes = [
    {
        path: '',
        component: _upcomming_session_details_page__WEBPACK_IMPORTED_MODULE_3__["UpcommingSessionDetailsPage"]
    }
];
let UpcommingSessionDetailsPageRoutingModule = class UpcommingSessionDetailsPageRoutingModule {
};
UpcommingSessionDetailsPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], UpcommingSessionDetailsPageRoutingModule);



/***/ }),

/***/ "./src/app/upcomming-session-details/upcomming-session-details.module.ts":
/*!*******************************************************************************!*\
  !*** ./src/app/upcomming-session-details/upcomming-session-details.module.ts ***!
  \*******************************************************************************/
/*! exports provided: UpcommingSessionDetailsPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UpcommingSessionDetailsPageModule", function() { return UpcommingSessionDetailsPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _upcomming_session_details_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./upcomming-session-details-routing.module */ "./src/app/upcomming-session-details/upcomming-session-details-routing.module.ts");
/* harmony import */ var _upcomming_session_details_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./upcomming-session-details.page */ "./src/app/upcomming-session-details/upcomming-session-details.page.ts");







let UpcommingSessionDetailsPageModule = class UpcommingSessionDetailsPageModule {
};
UpcommingSessionDetailsPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _upcomming_session_details_routing_module__WEBPACK_IMPORTED_MODULE_5__["UpcommingSessionDetailsPageRoutingModule"]
        ],
        declarations: [_upcomming_session_details_page__WEBPACK_IMPORTED_MODULE_6__["UpcommingSessionDetailsPage"]]
    })
], UpcommingSessionDetailsPageModule);



/***/ }),

/***/ "./src/app/upcomming-session-details/upcomming-session-details.page.scss":
/*!*******************************************************************************!*\
  !*** ./src/app/upcomming-session-details/upcomming-session-details.page.scss ***!
  \*******************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3VwY29tbWluZy1zZXNzaW9uLWRldGFpbHMvdXBjb21taW5nLXNlc3Npb24tZGV0YWlscy5wYWdlLnNjc3MifQ== */");

/***/ }),

/***/ "./src/app/upcomming-session-details/upcomming-session-details.page.ts":
/*!*****************************************************************************!*\
  !*** ./src/app/upcomming-session-details/upcomming-session-details.page.ts ***!
  \*****************************************************************************/
/*! exports provided: UpcommingSessionDetailsPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UpcommingSessionDetailsPage", function() { return UpcommingSessionDetailsPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _api_service_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../api-service.service */ "./src/app/api-service.service.ts");




let UpcommingSessionDetailsPage = class UpcommingSessionDetailsPage {
    constructor(apiServiceService, route) {
        this.apiServiceService = apiServiceService;
        this.route = route;
        this.session_id = this.route.snapshot.paramMap.get('session_id');
    }
    ngOnInit() {
        console.log(this.session_id);
        this.apiServiceService.getUpcommingSessionsDetails(this.session_id).subscribe((result) => {
            console.log(result);
            this.upcommingSessionDetails = result;
        });
    }
};
UpcommingSessionDetailsPage.ctorParameters = () => [
    { type: _api_service_service__WEBPACK_IMPORTED_MODULE_3__["ApiServiceService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] }
];
UpcommingSessionDetailsPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-upcomming-session-details',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./upcomming-session-details.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/upcomming-session-details/upcomming-session-details.page.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./upcomming-session-details.page.scss */ "./src/app/upcomming-session-details/upcomming-session-details.page.scss")).default]
    })
], UpcommingSessionDetailsPage);



/***/ })

}]);
//# sourceMappingURL=upcomming-session-details-upcomming-session-details-module-es2015.js.map