(function () {
  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["featured-product-featured-product-module"], {
    /***/
    "./node_modules/raw-loader/dist/cjs.js!./src/app/featured-product/featured-product.page.html":
    /*!***************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/featured-product/featured-product.page.html ***!
      \***************************************************************************************************/

    /*! exports provided: default */

    /***/
    function node_modulesRawLoaderDistCjsJsSrcAppFeaturedProductFeaturedProductPageHtml(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<!-- <ion-header>\n  <ion-toolbar color=\"primary\">\n      <ion-buttons slot=\"start\">\n        <ion-back-button defaultHref=\"/home\"></ion-back-button>\n      </ion-buttons>\n      <ion-title>Feature Product</ion-title>\n  </ion-toolbar>\n</ion-header> -->\n\n<ion-content fullscreen class=\"ion-padding\" scroll-y=\"false\">\n  <!-- <ion-card>\n    <ion-card-content> -->\n  <ion-slides style=\"height:60px;\" spaceBetween=\"-15\" slidesPerView=\"auto\">\n    <ion-slide style=\"padding:5px; padding-bottom:0px; max-width:80px;\" *ngFor=\"let item of feturedProduct\" (click)=\"goToProductDetails(item.featured_product_id,item.product_id)\">\n      <div>\n        <div style=\"margin:0 auto; width:55px; height:55px; border:1.5px solid black; border-radius:50px; background-color:white;\">\n          <img style=\"    height: 26px;\n          width: 38px;\n          margin-top: 15px;\" src=\"https://bidmoz.thehereitis.com/bidmoz_app_apis/{{item.product_image_url}}\">\n        </div>\n      </div>\n    </ion-slide>\n</ion-slides>\n<!-- </ion-card-content>\n</ion-card> -->\n  <ion-card>\n  <!-- <ion-card-header> -->\n  <!-- <ion-card-subtitle>Destination</ion-card-subtitle> -->\n  <!-- <ion-card-title style=\"text-align: center;\">i-Phone-SE</ion-card-title>\n    </ion-card-header> -->\n  <ion-card-content>\n  <ion-slides  pager>\n    <ion-slide *ngFor=\"let item of sessions\" (click)=\"bidCount(item)\">\n      <div class=\"slide\">\n        <h2>{{item.product_name}}</h2>\n        <img\n          class=\"imgHight\"\n          src=\"https://bidmoz.thehereitis.com/bidmoz_app_apis/{{item.product_image_url}}\"\n        />\n      </div>\n    </ion-slide>\n  </ion-slides>\n\n  <!-- Founded in 1829 on an isthmus between Lake Monona and Lake Mendota, Madison was named the capital of the Wisconsin Territory in 1836. -->\n  </ion-card-content>\n  </ion-card>\n</ion-content>\n<ion-footer>\n  <ion-toolbar>\n    <ion-tabs>\n      <ion-tab-bar slot=\"start bottom\">\n        <ion-tab-button>\n          <!-- <ion-label>Music</ion-label> -->\n          <ion-icon\n            name=\"person-outline\"\n            [routerLink]=\"['/user-account']\"\n          ></ion-icon>\n        </ion-tab-button>\n        <ion-tab-button tab=\"blink\">\n          <ion-icon name=\"flash-off-outline\"></ion-icon>\n        </ion-tab-button>\n      </ion-tab-bar>\n    </ion-tabs>\n  </ion-toolbar>\n</ion-footer>\n";
      /***/
    },

    /***/
    "./src/app/featured-product/featured-product-routing.module.ts":
    /*!*********************************************************************!*\
      !*** ./src/app/featured-product/featured-product-routing.module.ts ***!
      \*********************************************************************/

    /*! exports provided: FeaturedProductPageRoutingModule */

    /***/
    function srcAppFeaturedProductFeaturedProductRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "FeaturedProductPageRoutingModule", function () {
        return FeaturedProductPageRoutingModule;
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


      var _featured_product_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./featured-product.page */
      "./src/app/featured-product/featured-product.page.ts");

      var routes = [{
        path: '',
        component: _featured_product_page__WEBPACK_IMPORTED_MODULE_3__["FeaturedProductPage"]
      }];

      var FeaturedProductPageRoutingModule = function FeaturedProductPageRoutingModule() {
        _classCallCheck(this, FeaturedProductPageRoutingModule);
      };

      FeaturedProductPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
      })], FeaturedProductPageRoutingModule);
      /***/
    },

    /***/
    "./src/app/featured-product/featured-product.module.ts":
    /*!*************************************************************!*\
      !*** ./src/app/featured-product/featured-product.module.ts ***!
      \*************************************************************/

    /*! exports provided: FeaturedProductPageModule */

    /***/
    function srcAppFeaturedProductFeaturedProductModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "FeaturedProductPageModule", function () {
        return FeaturedProductPageModule;
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


      var _featured_product_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./featured-product-routing.module */
      "./src/app/featured-product/featured-product-routing.module.ts");
      /* harmony import */


      var _featured_product_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./featured-product.page */
      "./src/app/featured-product/featured-product.page.ts");

      var FeaturedProductPageModule = function FeaturedProductPageModule() {
        _classCallCheck(this, FeaturedProductPageModule);
      };

      FeaturedProductPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _featured_product_routing_module__WEBPACK_IMPORTED_MODULE_5__["FeaturedProductPageRoutingModule"]],
        declarations: [_featured_product_page__WEBPACK_IMPORTED_MODULE_6__["FeaturedProductPage"]]
      })], FeaturedProductPageModule);
      /***/
    },

    /***/
    "./src/app/featured-product/featured-product.page.scss":
    /*!*************************************************************!*\
      !*** ./src/app/featured-product/featured-product.page.scss ***!
      \*************************************************************/

    /*! exports provided: default */

    /***/
    function srcAppFeaturedProductFeaturedProductPageScss(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = ".imgHight {\n  height: 300px;\n  width: 100%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZmVhdHVyZWQtcHJvZHVjdC9mZWF0dXJlZC1wcm9kdWN0LnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFJQztFQUNJLGFBQUE7RUFDQSxXQUFBO0FBSEwiLCJmaWxlIjoic3JjL2FwcC9mZWF0dXJlZC1wcm9kdWN0L2ZlYXR1cmVkLXByb2R1Y3QucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLy8gLnN3aXBlci1wYWdpbmF0aW9uIHtcbi8vICAgICBib3R0b206IDY2JSAhaW1wb3J0YW50O1xuLy8gIH1cblxuIC5pbWdIaWdodHtcbiAgICAgaGVpZ2h0OiAzMDBweDtcbiAgICAgd2lkdGg6IDEwMCU7XG4gfVxuXG4vLyAgaW9uLXNsaWRlcyB7XG4vLyAgICAgaGVpZ2h0OiAxMDAlO1xuLy8gICB9XG5cbiAgLy8gLnN3aXBlci1zbGlkZSB7XG4gIC8vICAgZGlzcGxheTogYmxvY2s7XG4gIC8vIH1cblxuICAvLyAuc3dpcGVyLXNsaWRlIGgyIHtcbiAgLy8gICBtYXJnaW4tdG9wOiAxcmVtO1xuICAvLyB9XG5cbiAgLy8gLnN3aXBlci1zbGlkZSBpbWcge1xuICAvLyAgIG1heC1oZWlnaHQ6IDUwJTtcbiAgLy8gICBtYXgtd2lkdGg6IDgwJTtcbiAgLy8gICBtYXJnaW46IDMwcHggMCAzMHB4O1xuICAvLyAgIHBvaW50ZXItZXZlbnRzOiBub25lO1xuICAvLyB9XG5cbiAgLy8gYiB7XG4gIC8vICAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgLy8gfVxuXG4gIC8vIHAge1xuICAvLyAgIHBhZGRpbmc6IDAgNDBweDtcbiAgLy8gICBmb250LXNpemU6IDE0cHg7XG4gIC8vICAgbGluZS1oZWlnaHQ6IDEuNTtcbiAgLy8gICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLXN0ZXAtNjAwLCAjNjA2NDZiKTtcbiAgLy8gfVxuXG4gIC8vIHAgYiB7XG4gIC8vICAgY29sb3I6IHZhcigtLWlvbi10ZXh0LWNvbG9yLCAjMDAwMDAwKTtcbiAgLy8gfVxuXG5cbiJdfQ== */";
      /***/
    },

    /***/
    "./src/app/featured-product/featured-product.page.ts":
    /*!***********************************************************!*\
      !*** ./src/app/featured-product/featured-product.page.ts ***!
      \***********************************************************/

    /*! exports provided: FeaturedProductPage */

    /***/
    function srcAppFeaturedProductFeaturedProductPageTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "FeaturedProductPage", function () {
        return FeaturedProductPage;
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


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @ionic/angular */
      "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
      /* harmony import */


      var _api_service_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ../api-service.service */
      "./src/app/api-service.service.ts"); // import { parse } from 'path';
      // import { Parse } from 'parse';


      var FeaturedProductPage = /*#__PURE__*/function () {
        function FeaturedProductPage(apiServiceService, router, loadingController, alertController, navCtrl, toastController) {
          _classCallCheck(this, FeaturedProductPage);

          this.apiServiceService = apiServiceService;
          this.router = router;
          this.loadingController = loadingController;
          this.alertController = alertController;
          this.navCtrl = navCtrl;
          this.toastController = toastController;
          this.slideOpts = {
            initialSlide: 1
          };
        }

        _createClass(FeaturedProductPage, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            this.getSession();
            this.getFeaturedProduct();
          }
        }, {
          key: "getProduct",
          value: function getProduct() {
            this.apiServiceService.getProductCategory().subscribe(function (result) {// console.log(result);
            });
          }
        }, {
          key: "getSession",
          value: function getSession() {
            var _this = this;

            this.apiServiceService.getSessions().subscribe(function (result) {
              _this.sessions = result;
            });
          }
        }, {
          key: "getFeaturedProduct",
          value: function getFeaturedProduct() {
            var _this2 = this;

            this.apiServiceService.getFeaturedProduct().subscribe(function (result) {
              console.log(result);
              _this2.feturedProduct = result;
            });
          }
        }, {
          key: "goToProductDetails",
          value: function goToProductDetails(featured_product_id, product_id) {
            // console.log(id)
            this.router.navigate(['feature-product-details', featured_product_id, product_id]);
          }
        }, {
          key: "bidCount",
          value: function bidCount(item) {
            var _this3 = this;

            this.userDetails = JSON.parse(localStorage.getItem('userData'));

            if (this.userDetails) {
              if (this.userDetails.user_details[0].login_status === "ACTIVE") {
                if (this.userDetails.user_coupons) {
                  var user_coupons = this.userDetails.user_coupons;
                  console.log(user_coupons);
                  var matchCouponFound = false;
                  var bidMatchData;

                  for (var i = 0; i < user_coupons.length; i++) {
                    if (item.product_scale === user_coupons[i].coupon_applicable_scale) {
                      bidMatchData = {
                        session_id: item.session_id,
                        coupon_id: user_coupons[i].coupon_id,
                        user_id: this.userDetails.user_details[0].user_id
                      };
                      matchCouponFound = true;
                      break;
                    } else if (item.product_scale !== user_coupons[i].coupon_applicable_scale) {
                      matchCouponFound = false;
                    }
                  }

                  if (matchCouponFound) {
                    this.apiServiceService.makeBidCount(bidMatchData).subscribe(function (result) {
                      console.log(result);

                      _this3.presentToast("Your bid is counted successfully.");
                    });
                  } else if (!matchCouponFound) {
                    this.showAlertController("Coupon not found", "Currently there are no coupons available for this product in auction, you need to purchase a coupon that is applicable for this session !");
                  }
                } else {
                  this.showAlertController("No coupons found", "Dear user, you do not have any coupons available in your account right now, you need to purchase a coupon in order to make your bid for this session.");
                }
              }
            } else {
              this.router.navigate(['sign-in-or-sin-up']);
            }
          }
        }, {
          key: "presentToast",
          value: function presentToast(msg) {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
              var toast;
              return regeneratorRuntime.wrap(function _callee$(_context) {
                while (1) {
                  switch (_context.prev = _context.next) {
                    case 0:
                      _context.next = 2;
                      return this.toastController.create({
                        message: msg,
                        duration: 2000
                      });

                    case 2:
                      toast = _context.sent;
                      toast.present();

                    case 4:
                    case "end":
                      return _context.stop();
                  }
                }
              }, _callee, this);
            }));
          }
        }, {
          key: "showAlertController",
          value: function showAlertController(sub_header, msg) {
            var _this4 = this;

            this.alertController.create({
              //header: 'Alert',
              subHeader: sub_header,
              message: msg,
              backdropDismiss: false,
              buttons: [{
                text: 'Cancel',
                role: 'cancel',
                handler: function handler() {
                  console.log('Cancel clicked');
                }
              }, {
                text: 'Buy Coupons',
                handler: function handler() {
                  _this4.router.navigate(['bid-plans']);

                  console.log('Buy clicked');
                }
              }]
            }).then(function (res) {
              res.present();
            });
          }
        }]);

        return FeaturedProductPage;
      }();

      FeaturedProductPage.ctorParameters = function () {
        return [{
          type: _api_service_service__WEBPACK_IMPORTED_MODULE_4__["ApiServiceService"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["LoadingController"]
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["AlertController"]
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["NavController"]
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["ToastController"]
        }];
      };

      FeaturedProductPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-featured-product',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! raw-loader!./featured-product.page.html */
        "./node_modules/raw-loader/dist/cjs.js!./src/app/featured-product/featured-product.page.html"))["default"],
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! ./featured-product.page.scss */
        "./src/app/featured-product/featured-product.page.scss"))["default"]]
      })], FeaturedProductPage);
      /***/
    }
  }]);
})();
//# sourceMappingURL=featured-product-featured-product-module-es5.js.map