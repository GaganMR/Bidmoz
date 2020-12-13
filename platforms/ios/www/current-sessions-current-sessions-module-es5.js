(function () {
  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["current-sessions-current-sessions-module"], {
    /***/
    "./node_modules/raw-loader/dist/cjs.js!./src/app/current-sessions/current-sessions.page.html":
    /*!***************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/current-sessions/current-sessions.page.html ***!
      \***************************************************************************************************/

    /*! exports provided: default */

    /***/
    function node_modulesRawLoaderDistCjsJsSrcAppCurrentSessionsCurrentSessionsPageHtml(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<!-- <ion-header>\r\n  <ion-toolbar>\r\n    <ion-title>current-sessions</ion-title>\r\n  </ion-toolbar>\r\n</ion-header> -->\r\n\r\n<ion-content fullscreen class=\"ion-padding\" scroll-y=\"false\">\r\n  <ion-slides style=\"height:60px;\" spaceBetween=\"-15\" slidesPerView=\"auto\">\r\n    <ion-slide style=\"padding:5px; padding-bottom:0px; max-width:80px;\" *ngFor=\"let item of upcommingSessions\" (click)=\"goToUpcommingSessionDetails(item.session_id)\">\r\n      <div>\r\n        <div style=\"margin:0 auto; width:55px; height:55px; border:1.5px solid black; border-radius:50px; background-color:white;\">\r\n          <img style=\"    height: 26px;\r\n          width: 38px;\r\n          margin-top: 15px;\" src=\"https://bidmoz.thehereitis.com/bidmoz_app_apis/{{item.product_image_url}}\">\r\n        </div>\r\n      </div>\r\n    </ion-slide>\r\n</ion-slides>\r\n  <ion-card *ngIf=\"sessions\">\r\n  <ion-card-content>\r\n  <ion-slides  pager>\r\n    <ion-slide *ngFor=\"let item of sessions\" (click)=\"bidCount(item)\">\r\n      <div class=\"slide\">\r\n        <h2>{{item.product_name}}</h2>\r\n        <div class=\"ion-text-start\" style=\"padding-left: 28px;\">\r\n          <p >#{{item.session_id}}</p>\r\n          </div>\r\n        <img\r\n          class=\"imgHight\"\r\n          src=\"https://bidmoz.thehereitis.com/bidmoz_app_apis/{{item.product_image_url}}\"\r\n        />\r\n        <div class=\"ion-text-start\">\r\n          <h2>Ends in:&nbsp;&nbsp;&nbsp;<b>{{item.end_date}}</b></h2>\r\n          <h2>Current Price:&nbsp;&nbsp;&nbsp;&nbsp;<b>{{item.current_price}}</b></h2>\r\n          <h2>Participants:&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<b>{{item.no_of_participants}}</b></h2>\r\n        </div>\r\n      </div>\r\n    </ion-slide>\r\n  </ion-slides>\r\n  </ion-card-content>\r\n  </ion-card>\r\n</ion-content>\r\n<ion-footer>\r\n  <ion-toolbar>\r\n    <ion-tabs>\r\n      <ion-tab-bar color=\"featured\" slot=\"start bottom\">\r\n        <ion-tab-button (click)=\"editUser()\">\r\n          <ion-icon\r\n            name=\"person-outline\"\r\n          ></ion-icon>\r\n        </ion-tab-button>\r\n        <ion-tab-button  (click)=\"goToProductDetails()\">\r\n          <ion-icon name=\"flash-off-outline\"></ion-icon>\r\n        </ion-tab-button>\r\n      </ion-tab-bar>\r\n    </ion-tabs>\r\n  </ion-toolbar>\r\n</ion-footer>\r\n";
      /***/
    },

    /***/
    "./src/app/current-sessions/current-sessions-routing.module.ts":
    /*!*********************************************************************!*\
      !*** ./src/app/current-sessions/current-sessions-routing.module.ts ***!
      \*********************************************************************/

    /*! exports provided: CurrentSessionsPageRoutingModule */

    /***/
    function srcAppCurrentSessionsCurrentSessionsRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "CurrentSessionsPageRoutingModule", function () {
        return CurrentSessionsPageRoutingModule;
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


      var _current_sessions_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./current-sessions.page */
      "./src/app/current-sessions/current-sessions.page.ts");

      var routes = [{
        path: '',
        component: _current_sessions_page__WEBPACK_IMPORTED_MODULE_3__["CurrentSessionsPage"]
      }];

      var CurrentSessionsPageRoutingModule = function CurrentSessionsPageRoutingModule() {
        _classCallCheck(this, CurrentSessionsPageRoutingModule);
      };

      CurrentSessionsPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
      })], CurrentSessionsPageRoutingModule);
      /***/
    },

    /***/
    "./src/app/current-sessions/current-sessions.module.ts":
    /*!*************************************************************!*\
      !*** ./src/app/current-sessions/current-sessions.module.ts ***!
      \*************************************************************/

    /*! exports provided: CurrentSessionsPageModule */

    /***/
    function srcAppCurrentSessionsCurrentSessionsModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "CurrentSessionsPageModule", function () {
        return CurrentSessionsPageModule;
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


      var _current_sessions_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./current-sessions-routing.module */
      "./src/app/current-sessions/current-sessions-routing.module.ts");
      /* harmony import */


      var _current_sessions_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./current-sessions.page */
      "./src/app/current-sessions/current-sessions.page.ts");

      var CurrentSessionsPageModule = function CurrentSessionsPageModule() {
        _classCallCheck(this, CurrentSessionsPageModule);
      };

      CurrentSessionsPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _current_sessions_routing_module__WEBPACK_IMPORTED_MODULE_5__["CurrentSessionsPageRoutingModule"]],
        declarations: [_current_sessions_page__WEBPACK_IMPORTED_MODULE_6__["CurrentSessionsPage"]]
      })], CurrentSessionsPageModule);
      /***/
    },

    /***/
    "./src/app/current-sessions/current-sessions.page.scss":
    /*!*************************************************************!*\
      !*** ./src/app/current-sessions/current-sessions.page.scss ***!
      \*************************************************************/

    /*! exports provided: default */

    /***/
    function srcAppCurrentSessionsCurrentSessionsPageScss(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = ".imgHight {\n  height: 300px;\n  width: 100%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY3VycmVudC1zZXNzaW9ucy9jdXJyZW50LXNlc3Npb25zLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFJQTtFQUNJLGFBQUE7RUFDQSxXQUFBO0FBSEoiLCJmaWxlIjoic3JjL2FwcC9jdXJyZW50LXNlc3Npb25zL2N1cnJlbnQtc2Vzc2lvbnMucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLy8gLnN3aXBlci1wYWdpbmF0aW9uIHtcclxuLy8gICAgIGJvdHRvbTogNjYlICFpbXBvcnRhbnQ7XHJcbi8vICB9XHJcblxyXG4uaW1nSGlnaHR7XHJcbiAgICBoZWlnaHQ6IDMwMHB4O1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbn1cclxuXHJcbi8vICBpb24tc2xpZGVzIHtcclxuLy8gICAgIGhlaWdodDogMTAwJTtcclxuLy8gICB9XHJcblxyXG4gLy8gLnN3aXBlci1zbGlkZSB7XHJcbiAvLyAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gLy8gfVxyXG5cclxuIC8vIC5zd2lwZXItc2xpZGUgaDIge1xyXG4gLy8gICBtYXJnaW4tdG9wOiAxcmVtO1xyXG4gLy8gfVxyXG5cclxuIC8vIC5zd2lwZXItc2xpZGUgaW1nIHtcclxuIC8vICAgbWF4LWhlaWdodDogNTAlO1xyXG4gLy8gICBtYXgtd2lkdGg6IDgwJTtcclxuIC8vICAgbWFyZ2luOiAzMHB4IDAgMzBweDtcclxuIC8vICAgcG9pbnRlci1ldmVudHM6IG5vbmU7XHJcbiAvLyB9XHJcblxyXG4gLy8gYiB7XHJcbiAvLyAgIGZvbnQtd2VpZ2h0OiA1MDA7XHJcbiAvLyB9XHJcblxyXG4gLy8gcCB7XHJcbiAvLyAgIHBhZGRpbmc6IDAgNDBweDtcclxuIC8vICAgZm9udC1zaXplOiAxNHB4O1xyXG4gLy8gICBsaW5lLWhlaWdodDogMS41O1xyXG4gLy8gICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLXN0ZXAtNjAwLCAjNjA2NDZiKTtcclxuIC8vIH1cclxuXHJcbiAvLyBwIGIge1xyXG4gLy8gICBjb2xvcjogdmFyKC0taW9uLXRleHQtY29sb3IsICMwMDAwMDApO1xyXG4gLy8gfVxyXG4iXX0= */";
      /***/
    },

    /***/
    "./src/app/current-sessions/current-sessions.page.ts":
    /*!***********************************************************!*\
      !*** ./src/app/current-sessions/current-sessions.page.ts ***!
      \***********************************************************/

    /*! exports provided: CurrentSessionsPage */

    /***/
    function srcAppCurrentSessionsCurrentSessionsPageTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "CurrentSessionsPage", function () {
        return CurrentSessionsPage;
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
      "./src/app/api-service.service.ts");

      var CurrentSessionsPage = /*#__PURE__*/function () {
        function CurrentSessionsPage(apiServiceService, router, loadingController, alertController, navCtrl, toastController) {
          _classCallCheck(this, CurrentSessionsPage);

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

        _createClass(CurrentSessionsPage, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            this.getSession();
            this.getUpcommingSessions();
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
          key: "getUpcommingSessions",
          value: function getUpcommingSessions() {
            var _this2 = this;

            this.apiServiceService.getUpcommingSessions().subscribe(function (result) {
              console.log(result);
              _this2.upcommingSessions = result;
            });
          }
        }, {
          key: "goToProductDetails",
          value: function goToProductDetails() {
            // console.log(id)
            this.router.navigate(['featured-product-list']);
          }
        }, {
          key: "goToUpcommingSessionDetails",
          value: function goToUpcommingSessionDetails(session_id) {
            console.log(session_id);
            this.router.navigate(['upcomming-session-details', session_id]);
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
          key: "editUser",
          value: function editUser() {
            this.userDetails = JSON.parse(localStorage.getItem('userData'));

            if (this.userDetails) {
              if (this.userDetails.user_details[0].login_status === "ACTIVE") {
                var user_id = this.userDetails.user_details[0].user_id;
                this.router.navigate(['user-account', user_id]);
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

        return CurrentSessionsPage;
      }();

      CurrentSessionsPage.ctorParameters = function () {
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

      CurrentSessionsPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-current-sessions',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! raw-loader!./current-sessions.page.html */
        "./node_modules/raw-loader/dist/cjs.js!./src/app/current-sessions/current-sessions.page.html"))["default"],
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! ./current-sessions.page.scss */
        "./src/app/current-sessions/current-sessions.page.scss"))["default"]]
      })], CurrentSessionsPage);
      /***/
    }
  }]);
})();
//# sourceMappingURL=current-sessions-current-sessions-module-es5.js.map