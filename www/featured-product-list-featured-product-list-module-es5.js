(function () {
  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["featured-product-list-featured-product-list-module"], {
    /***/
    "./node_modules/raw-loader/dist/cjs.js!./src/app/featured-product-list/featured-product-list.page.html":
    /*!*************************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/featured-product-list/featured-product-list.page.html ***!
      \*************************************************************************************************************/

    /*! exports provided: default */

    /***/
    function node_modulesRawLoaderDistCjsJsSrcAppFeaturedProductListFeaturedProductListPageHtml(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-header>\r\n  <ion-toolbar color=\"featured\">\r\n    <ion-buttons slot=\"start\">\r\n      <ion-back-button defaultHref=\"/current-sessions\"></ion-back-button>\r\n    </ion-buttons>\r\n    <ion-title>Featured-product-list</ion-title>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content>\r\n  <ion-grid>\r\n    <ion-row>\r\n      <ion-col size=\"6\" *ngFor=\"let item of featuredProduct\" (click)=\"coupnDetails(item)\">\r\n        <ion-card style=\"border-radius: 10px;\">\r\n            <img height=\"80\" width=\"150\" style=\"padding: 10px;\" src=\"https://bidmoz.thehereitis.com/bidmoz_app_apis/{{item.product_image_url}}\" />\r\n        </ion-card>\r\n      </ion-col>\r\n    </ion-row>\r\n  </ion-grid>\r\n</ion-content>\r\n";
      /***/
    },

    /***/
    "./src/app/featured-product-list/featured-product-list-routing.module.ts":
    /*!*******************************************************************************!*\
      !*** ./src/app/featured-product-list/featured-product-list-routing.module.ts ***!
      \*******************************************************************************/

    /*! exports provided: FeaturedProductListPageRoutingModule */

    /***/
    function srcAppFeaturedProductListFeaturedProductListRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "FeaturedProductListPageRoutingModule", function () {
        return FeaturedProductListPageRoutingModule;
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


      var _featured_product_list_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./featured-product-list.page */
      "./src/app/featured-product-list/featured-product-list.page.ts");

      var routes = [{
        path: '',
        component: _featured_product_list_page__WEBPACK_IMPORTED_MODULE_3__["FeaturedProductListPage"]
      }];

      var FeaturedProductListPageRoutingModule = function FeaturedProductListPageRoutingModule() {
        _classCallCheck(this, FeaturedProductListPageRoutingModule);
      };

      FeaturedProductListPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
      })], FeaturedProductListPageRoutingModule);
      /***/
    },

    /***/
    "./src/app/featured-product-list/featured-product-list.module.ts":
    /*!***********************************************************************!*\
      !*** ./src/app/featured-product-list/featured-product-list.module.ts ***!
      \***********************************************************************/

    /*! exports provided: FeaturedProductListPageModule */

    /***/
    function srcAppFeaturedProductListFeaturedProductListModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "FeaturedProductListPageModule", function () {
        return FeaturedProductListPageModule;
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


      var _featured_product_list_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./featured-product-list-routing.module */
      "./src/app/featured-product-list/featured-product-list-routing.module.ts");
      /* harmony import */


      var _featured_product_list_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./featured-product-list.page */
      "./src/app/featured-product-list/featured-product-list.page.ts");

      var FeaturedProductListPageModule = function FeaturedProductListPageModule() {
        _classCallCheck(this, FeaturedProductListPageModule);
      };

      FeaturedProductListPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _featured_product_list_routing_module__WEBPACK_IMPORTED_MODULE_5__["FeaturedProductListPageRoutingModule"]],
        declarations: [_featured_product_list_page__WEBPACK_IMPORTED_MODULE_6__["FeaturedProductListPage"]]
      })], FeaturedProductListPageModule);
      /***/
    },

    /***/
    "./src/app/featured-product-list/featured-product-list.page.scss":
    /*!***********************************************************************!*\
      !*** ./src/app/featured-product-list/featured-product-list.page.scss ***!
      \***********************************************************************/

    /*! exports provided: default */

    /***/
    function srcAppFeaturedProductListFeaturedProductListPageScss(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2ZlYXR1cmVkLXByb2R1Y3QtbGlzdC9mZWF0dXJlZC1wcm9kdWN0LWxpc3QucGFnZS5zY3NzIn0= */";
      /***/
    },

    /***/
    "./src/app/featured-product-list/featured-product-list.page.ts":
    /*!*********************************************************************!*\
      !*** ./src/app/featured-product-list/featured-product-list.page.ts ***!
      \*********************************************************************/

    /*! exports provided: FeaturedProductListPage */

    /***/
    function srcAppFeaturedProductListFeaturedProductListPageTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "FeaturedProductListPage", function () {
        return FeaturedProductListPage;
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
      /* harmony import */


      var _ionic_native_social_sharing_ngx__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @ionic-native/social-sharing/ngx */
      "./node_modules/@ionic-native/social-sharing/__ivy_ngcc__/ngx/index.js");

      var FeaturedProductListPage = /*#__PURE__*/function () {
        function FeaturedProductListPage(socialSharing, apiServiceService, route) {
          _classCallCheck(this, FeaturedProductListPage);

          this.socialSharing = socialSharing;
          this.apiServiceService = apiServiceService;
          this.route = route;
          this.slideOpts = {
            initialSlide: 1
          };
        }

        _createClass(FeaturedProductListPage, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            this.getfeatureProduct();
          }
        }, {
          key: "sShare",
          value: function sShare() {
            console.log("abc");
            var options = {
              message: 'Ionic Share',
              url: 'https://ionicframework.com/docs/native/social-sharing'
            };
            this.socialSharing.shareWithOptions(options);
          }
        }, {
          key: "getfeatureProduct",
          value: function getfeatureProduct() {
            var _this = this;

            this.apiServiceService.getFeaturedProduct().subscribe(function (result) {
              console.log(result);
              _this.featuredProduct = result;
            });
          }
        }, {
          key: "getFeatureProductDetails",
          value: function getFeatureProductDetails() {
            this.userDetails = JSON.parse(localStorage.getItem('userData'));
            console.log();
            var getFeaturedProductData = {
              featured_product_id: this.featured_product_id,
              product_id: this.product_id,
              user_id: this.userDetails.user_details[0].user_id
            };
            console.log(getFeaturedProductData);
            this.apiServiceService.requestFeatureProductDetails(getFeaturedProductData).subscribe(function (res) {
              console.log(res);
            });
          }
        }]);

        return FeaturedProductListPage;
      }();

      FeaturedProductListPage.ctorParameters = function () {
        return [{
          type: _ionic_native_social_sharing_ngx__WEBPACK_IMPORTED_MODULE_4__["SocialSharing"]
        }, {
          type: _api_service_service__WEBPACK_IMPORTED_MODULE_3__["ApiServiceService"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]
        }];
      };

      FeaturedProductListPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-featured-product-list',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! raw-loader!./featured-product-list.page.html */
        "./node_modules/raw-loader/dist/cjs.js!./src/app/featured-product-list/featured-product-list.page.html"))["default"],
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! ./featured-product-list.page.scss */
        "./src/app/featured-product-list/featured-product-list.page.scss"))["default"]]
      })], FeaturedProductListPage);
      /***/
    }
  }]);
})();
//# sourceMappingURL=featured-product-list-featured-product-list-module-es5.js.map