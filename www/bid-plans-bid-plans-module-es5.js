(function () {
  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["bid-plans-bid-plans-module"], {
    /***/
    "./node_modules/raw-loader/dist/cjs.js!./src/app/bid-plans/bid-plans.page.html":
    /*!*************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/bid-plans/bid-plans.page.html ***!
      \*************************************************************************************/

    /*! exports provided: default */

    /***/
    function node_modulesRawLoaderDistCjsJsSrcAppBidPlansBidPlansPageHtml(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-header>\r\n  <ion-toolbar color=\"featured\">\r\n    <!-- class=\"ion-text-center\" -->\r\n    <ion-buttons slot=\"start\">\r\n      <ion-back-button defaultHref=\"/current-sessions\"></ion-back-button>\r\n    </ion-buttons>\r\n    <ion-title>Bid Plans(Coupons)</ion-title>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content fullscreen>\r\n  <ion-card *ngIf=\"userCoupons\" class=\"mainCard\">\r\n    <ion-card-header>\r\n      <ion-card-subtitle><strong>Coupons You Have</strong></ion-card-subtitle>\r\n    </ion-card-header>\r\n    <ion-grid>\r\n      <ion-row>\r\n        <ion-col size=\"6\" *ngFor=\"let item of this.userCoupons\" (click)=\"coupnDetails(item)\">\r\n          <ion-card class=\"container\">\r\n            <ion-card-header>\r\n              <ion-card-subtitle>{{item.coupon_title}}&nbsp;(INR{{item.coupon_price}})</ion-card-subtitle>\r\n            </ion-card-header>\r\n          </ion-card>\r\n        </ion-col>\r\n      </ion-row>\r\n    </ion-grid>\r\n  </ion-card>\r\n  <ion-card *ngIf=\"activeCoupons\" class=\"mainCard\">\r\n    <ion-card-header>\r\n      <ion-card-subtitle><strong>Coupons You May Want To Buy</strong></ion-card-subtitle>\r\n    </ion-card-header>\r\n    <ion-grid>\r\n      <ion-row>\r\n        <ion-col size=\"6\" *ngFor=\"let item of activeCoupons\" (click)=\"coupnDetails(item)\">\r\n          <ion-card class=\"container\">\r\n            <ion-card-header>\r\n              <ion-card-subtitle>{{item.coupon_title}}&nbsp;(INR{{item.coupon_price}})</ion-card-subtitle>\r\n            </ion-card-header>\r\n          </ion-card>\r\n        </ion-col>\r\n      </ion-row>\r\n    </ion-grid>\r\n  </ion-card>\r\n\r\n\r\n</ion-content>\r\n<!-- <ion-footer no-shadow>\r\n  <ion-toolbar position=\"bottom\">\r\n    <ion-button  slot=\"end\" [routerLink]=\"['/coupon-purchase']\"\r\n      >Continue<ion-icon name=\"chevron-forward-outline\"></ion-icon\r\n    ></ion-button>\r\n  </ion-toolbar>\r\n</ion-footer> -->";
      /***/
    },

    /***/
    "./src/app/bid-plans/bid-plans-routing.module.ts":
    /*!*******************************************************!*\
      !*** ./src/app/bid-plans/bid-plans-routing.module.ts ***!
      \*******************************************************/

    /*! exports provided: BidPlansPageRoutingModule */

    /***/
    function srcAppBidPlansBidPlansRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "BidPlansPageRoutingModule", function () {
        return BidPlansPageRoutingModule;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "./node_modules/tslib/tslib.es6.js");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/router */
      "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
      /* harmony import */


      var _bid_plans_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./bid-plans.page */
      "./src/app/bid-plans/bid-plans.page.ts");

      var routes = [{
        path: '',
        component: _bid_plans_page__WEBPACK_IMPORTED_MODULE_3__["BidPlansPage"]
      }];

      var BidPlansPageRoutingModule = function BidPlansPageRoutingModule() {
        _classCallCheck(this, BidPlansPageRoutingModule);
      };

      BidPlansPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
      })], BidPlansPageRoutingModule);
      /***/
    },

    /***/
    "./src/app/bid-plans/bid-plans.module.ts":
    /*!***********************************************!*\
      !*** ./src/app/bid-plans/bid-plans.module.ts ***!
      \***********************************************/

    /*! exports provided: BidPlansPageModule */

    /***/
    function srcAppBidPlansBidPlansModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "BidPlansPageModule", function () {
        return BidPlansPageModule;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "./node_modules/tslib/tslib.es6.js");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/common */
      "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/forms */
      "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
      /* harmony import */


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @ionic/angular */
      "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
      /* harmony import */


      var _bid_plans_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./bid-plans-routing.module */
      "./src/app/bid-plans/bid-plans-routing.module.ts");
      /* harmony import */


      var _bid_plans_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./bid-plans.page */
      "./src/app/bid-plans/bid-plans.page.ts"); // const routes: Routes = [
      //   {
      //     path: '',
      //     component: BidPlansPage
      //   },
      // ]


      var BidPlansPageModule = function BidPlansPageModule() {
        _classCallCheck(this, BidPlansPageModule);
      };

      BidPlansPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _bid_plans_routing_module__WEBPACK_IMPORTED_MODULE_5__["BidPlansPageRoutingModule"]],
        declarations: [_bid_plans_page__WEBPACK_IMPORTED_MODULE_6__["BidPlansPage"]]
      })], BidPlansPageModule);
      /***/
    },

    /***/
    "./src/app/bid-plans/bid-plans.page.scss":
    /*!***********************************************!*\
      !*** ./src/app/bid-plans/bid-plans.page.scss ***!
      \***********************************************/

    /*! exports provided: default */

    /***/
    function srcAppBidPlansBidPlansPageScss(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = ".container {\n  --ion-background-color: #f5f6f9;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYmlkLXBsYW5zL2JpZC1wbGFucy5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSwrQkFBQTtBQUNKIiwiZmlsZSI6InNyYy9hcHAvYmlkLXBsYW5zL2JpZC1wbGFucy5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY29udGFpbmVyIHtcclxuICAgIC0taW9uLWJhY2tncm91bmQtY29sb3I6ICNmNWY2Zjk7XHJcbn1cclxuLy8gaW9uLWNvbnRlbnR7XHJcbi8vICAgICAtLWlvbi1iYWNrZ3JvdW5kLWNvbG9yOndoaXRlO1xyXG4vLyB9XHJcbi8vIC5tYWluQ2FyZHtcclxuLy8gICAgIC0taW9uLWJhY2tncm91bmQtY29sb3I6ICAjRUJFQkY1OyAgXHJcbi8vIH1cclxuXHJcbiJdfQ== */";
      /***/
    },

    /***/
    "./src/app/bid-plans/bid-plans.page.ts":
    /*!*********************************************!*\
      !*** ./src/app/bid-plans/bid-plans.page.ts ***!
      \*********************************************/

    /*! exports provided: BidPlansPage */

    /***/
    function srcAppBidPlansBidPlansPageTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "BidPlansPage", function () {
        return BidPlansPage;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "./node_modules/tslib/tslib.es6.js");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/router */
      "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
      /* harmony import */


      var _api_service_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ../api-service.service */
      "./src/app/api-service.service.ts");

      var BidPlansPage = /*#__PURE__*/function () {
        function BidPlansPage(apiServiceService, router) {
          _classCallCheck(this, BidPlansPage);

          this.apiServiceService = apiServiceService;
          this.router = router;
        }

        _createClass(BidPlansPage, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            this.getCoupon();
          }
        }, {
          key: "getCoupon",
          value: function getCoupon() {
            var _this = this;

            this.userDetails = JSON.parse(localStorage.getItem('userData'));
            this.apiServiceService.getCoupons(this.userDetails.user_details[0].user_id).subscribe(function (result) {
              console.log(result);
              _this.activeCoupons = result.active_coupons_details;
              _this.userCoupons = result.user_coupons_details; // console.log(this.allCoupons);
            });
          }
        }, {
          key: "coupnDetails",
          value: function coupnDetails(item) {
            this.router.navigate(['coupon-details', item.coupon_id]);
          }
        }]);

        return BidPlansPage;
      }();

      BidPlansPage.ctorParameters = function () {
        return [{
          type: _api_service_service__WEBPACK_IMPORTED_MODULE_3__["ApiServiceService"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]
        }];
      };

      BidPlansPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-bid-plans',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! raw-loader!./bid-plans.page.html */
        "./node_modules/raw-loader/dist/cjs.js!./src/app/bid-plans/bid-plans.page.html"))["default"],
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! ./bid-plans.page.scss */
        "./src/app/bid-plans/bid-plans.page.scss"))["default"]]
      })], BidPlansPage);
      /***/
    }
  }]);
})();
//# sourceMappingURL=bid-plans-bid-plans-module-es5.js.map