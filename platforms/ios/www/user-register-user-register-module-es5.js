(function () {
  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["user-register-user-register-module"], {
    /***/
    "./node_modules/raw-loader/dist/cjs.js!./src/app/user-register/user-register.page.html":
    /*!*********************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/user-register/user-register.page.html ***!
      \*********************************************************************************************/

    /*! exports provided: default */

    /***/
    function node_modulesRawLoaderDistCjsJsSrcAppUserRegisterUserRegisterPageHtml(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-header>\r\n  <ion-toolbar color=\"featured\" >\r\n    <!-- class=\"ion-text-center\" -->\r\n    <ion-buttons slot=\"start\">\r\n      <ion-back-button defaultHref=\"/home\"></ion-back-button>\r\n    </ion-buttons>\r\n    <ion-title>User Register</ion-title>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content>\r\n  <div class=\"container\">\r\n    <ion-header class=\"ion-no-border\">\r\n      <ion-toolbar>\r\n        <h1  class=\"ion-text-center\"><b>BIDMOZ</b></h1>\r\n      </ion-toolbar>\r\n    </ion-header>\r\n  <ion-card  *ngIf=\"!isRegistered\">\r\n    <ion-card-content>\r\n      <form [formGroup]=\"ionicUserRegisterForm\" (ngSubmit)=\"submitForm()\" novalidate>\r\n        <ion-item lines=\"full\">\r\n          <ion-label position=\"floating\">Name</ion-label>\r\n          <ion-input formControlName=\"user_name\" type=\"text\" required></ion-input>\r\n        </ion-item>\r\n        <span class=\"error ion-padding\" *ngIf=\"isSubmitted && errorControl.user_name.errors?.required\">\r\n          Name is required.\r\n        </span>\r\n        <span class=\"error ion-padding\" *ngIf=\"isSubmitted && errorControl.user_name.errors?.minlength\">\r\n          Name should be min 2 chars long.\r\n        </span>\r\n        <ion-item lines=\"full\">\r\n          <ion-label position=\"floating\">Phone No</ion-label>\r\n          <ion-input maxlength=\"10\" formControlName=\"phone_no\" type=\"text\" required></ion-input>\r\n        </ion-item>\r\n        <span class=\"error ion-padding\" *ngIf=\"isSubmitted && errorControl.phone_no.errors?.required\">\r\n          Mobile number is required.\r\n        </span>\r\n        <span class=\"error ion-padding\" *ngIf=\"isSubmitted && errorControl.phone_no.errors?.pattern\">\r\n          Only numerical values allowed.\r\n        </span>\r\n        <ion-item lines=\"full\">\r\n          <ion-label position=\"floating\">Email</ion-label>\r\n          <ion-input formControlName=\"email\" type=\"email\" required></ion-input>\r\n        </ion-item>\r\n        <span class=\"error ion-padding\" *ngIf=\"isSubmitted && errorControl.email.errors?.required\">\r\n          Email is required.\r\n        </span>\r\n        <span class=\"error ion-padding\" *ngIf=\"isSubmitted && errorControl.email.errors?.pattern\">\r\n          Please provide valid email id.\r\n        </span>\r\n        <ion-row>\r\n          <ion-col>\r\n            <ion-button type=\"submit\" color=\"primary\" expand=\"block\">Submit</ion-button>\r\n          </ion-col>\r\n        </ion-row>\r\n      </form>\r\n    </ion-card-content>\r\n  </ion-card>\r\n  <ion-card class=\"container\" *ngIf=\"isRegistered\">\r\n    <ion-card-content>\r\n      <form [formGroup]=\"verifyOtpForm\" (ngSubmit)=\"SubmitOtPForm()\">\r\n          <p style=\"text-align: center;\">Please enter one time verification code sent to +91{{userData.phone_no}}</p>\r\n      <ion-grid>\r\n        <ion-row>\r\n          <ion-col>\r\n            <ion-item >\r\n              <ion-input type=\"text\" placeholder=\"Enter Otp\" maxlength=\"4\" formControlName=\"otp\"></ion-input>\r\n            </ion-item>\r\n          </ion-col>\r\n          <!--  <ion-col>\r\n            <ion-item >\r\n              <ion-input type=\"tel\" placeholder=\"*\" maxlength=\"1\" [(ngModel)] =\"OTP.first\" #otp1  (keyup)=\"otpController($event,otp2,'')\"  ></ion-input>\r\n            </ion-item>\r\n          </ion-col>\r\n           <ion-col >\r\n            <ion-item>\r\n              <ion-input type=\"tel\" placeholder=\"*\" maxlength=\"1\" [(ngModel)] =\"OTP.second\"#otp2 (keyup)=\"otpController($event,otp3,otp1)\" ></ion-input>\r\n            </ion-item>\r\n          </ion-col>\r\n          <ion-col >\r\n            <ion-item>\r\n              <ion-input type=\"tel\" placeholder=\"*\" maxlength=\"1\" #otp3 [(ngModel)] =\"OTP.third\" (keyup)=\"otpController($event,otp4,otp2)\" ></ion-input>\r\n            </ion-item>\r\n          </ion-col>\r\n          <ion-col >\r\n            <ion-item>\r\n              <ion-input type=\"tel\" placeholder=\"*\" maxlength=\"1\" #otp4 [(ngModel)] =\"OTP.forth\" (keyup)=\"otpController($event,'',otp3)\"></ion-input>\r\n            </ion-item>\r\n          </ion-col> -->\r\n        </ion-row>\r\n        <ion-row>\r\n          <ion-col>\r\n            <ion-button type=\"submit\" color=\"primary\" expand=\"block\">Submit</ion-button>\r\n          </ion-col>\r\n        </ion-row>\r\n      </ion-grid>\r\n      </form>\r\n    </ion-card-content>\r\n  </ion-card>\r\n  </div>\r\n</ion-content>\r\n<!-- <ion-footer no-shadow>\r\n\t<ion-toolbar position=\"bottom\">\r\n    <ion-row>\r\n      <ion-col>\r\n    <ion-button type=\"submit\" slot=\"end\" [routerLink]=\"['/terms-and-condtions']\">Continue<ion-icon name=\"chevron-forward-outline\"></ion-icon></ion-button>\r\n    </ion-col>\r\n    </ion-row>\r\n\t</ion-toolbar>\r\n</ion-footer> -->\r\n<!-- expand=\"block\" slot=\"end\" -->\r\n\r\n\r\n    <!-- <ion-row text-center>\r\n        <ion-col>\r\n         <ion-input #otp1 required maxLength=\"1\" (keyup)=\"otpController($event,otp2,'')\">\r\n         </ion-input>\r\n         <ion-input #otp2 required maxLength=\"1\" (keyup)=\"otpController($event,otp3,otp1)\">\r\n         </ion-input>\r\n         <ion-input #otp3 required maxLength=\"1\" (keyup)=\"otpController($event,otp4,otp2)\">\r\n         </ion-input>\r\n         <ion-input #otp4  required maxLength=\"1\" (keyup)=\"otpController($event,'',otp3)\">\r\n         </ion-input>\r\n        </ion-col>\r\n      </ion-row> -->\r\n";
      /***/
    },

    /***/
    "./src/app/user-register/user-register-routing.module.ts":
    /*!***************************************************************!*\
      !*** ./src/app/user-register/user-register-routing.module.ts ***!
      \***************************************************************/

    /*! exports provided: UserRegisterPageRoutingModule */

    /***/
    function srcAppUserRegisterUserRegisterRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "UserRegisterPageRoutingModule", function () {
        return UserRegisterPageRoutingModule;
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


      var _user_register_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./user-register.page */
      "./src/app/user-register/user-register.page.ts");

      var routes = [{
        path: '',
        component: _user_register_page__WEBPACK_IMPORTED_MODULE_3__["UserRegisterPage"]
      }];

      var UserRegisterPageRoutingModule = function UserRegisterPageRoutingModule() {
        _classCallCheck(this, UserRegisterPageRoutingModule);
      };

      UserRegisterPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
      })], UserRegisterPageRoutingModule);
      /***/
    },

    /***/
    "./src/app/user-register/user-register.module.ts":
    /*!*******************************************************!*\
      !*** ./src/app/user-register/user-register.module.ts ***!
      \*******************************************************/

    /*! exports provided: UserRegisterPageModule */

    /***/
    function srcAppUserRegisterUserRegisterModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "UserRegisterPageModule", function () {
        return UserRegisterPageModule;
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


      var _user_register_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./user-register-routing.module */
      "./src/app/user-register/user-register-routing.module.ts");
      /* harmony import */


      var _user_register_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./user-register.page */
      "./src/app/user-register/user-register.page.ts");

      var UserRegisterPageModule = function UserRegisterPageModule() {
        _classCallCheck(this, UserRegisterPageModule);
      };

      UserRegisterPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _user_register_routing_module__WEBPACK_IMPORTED_MODULE_5__["UserRegisterPageRoutingModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"]],
        declarations: [_user_register_page__WEBPACK_IMPORTED_MODULE_6__["UserRegisterPage"]]
      })], UserRegisterPageModule);
      /***/
    },

    /***/
    "./src/app/user-register/user-register.page.scss":
    /*!*******************************************************!*\
      !*** ./src/app/user-register/user-register.page.scss ***!
      \*******************************************************/

    /*! exports provided: default */

    /***/
    function srcAppUserRegisterUserRegisterPageScss(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = ".container {\n  top: 50%;\n}\n\n.ion-text-center {\n  color: white;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdXNlci1yZWdpc3Rlci91c2VyLXJlZ2lzdGVyLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLFFBQUE7QUFDSjs7QUFjQTtFQUNJLFlBQUE7QUFYSiIsImZpbGUiOiJzcmMvYXBwL3VzZXItcmVnaXN0ZXIvdXNlci1yZWdpc3Rlci5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY29udGFpbmVyIHtcclxuICAgIHRvcDogNTAlO1xyXG59XHJcblxyXG5cclxuLy8gICBpb24taW5wdXR7XHJcbi8vICAgICBkaXNwbGF5OmlubGluZS1ibG9jaztcclxuLy8gICAgIHdpZHRoOjUwcHg7XHJcbi8vICAgICBoZWlnaHQ6NTBweDtcclxuLy8gICAgIG1hcmdpbjoxMHB4O1xyXG4vLyAgICAgYm9yZGVyLXJhZGl1czogNTAlO1xyXG4vLyAgICAgLS1iYWNrZ3JvdW5kOiNlMWUxZTE7XHJcbi8vICAgICAtLXBhZGRpbmctc3RhcnQ6N3B4O1xyXG4vLyAgICAgfVxyXG5cclxuXHJcbi5pb24tdGV4dC1jZW50ZXJ7XHJcbiAgICBjb2xvcjogd2hpdGU7XHJcbiAgfSJdfQ== */";
      /***/
    },

    /***/
    "./src/app/user-register/user-register.page.ts":
    /*!*****************************************************!*\
      !*** ./src/app/user-register/user-register.page.ts ***!
      \*****************************************************/

    /*! exports provided: UserRegisterPage */

    /***/
    function srcAppUserRegisterUserRegisterPageTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "UserRegisterPage", function () {
        return UserRegisterPage;
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


      var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/forms */
      "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/router */
      "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
      /* harmony import */


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @ionic/angular */
      "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
      /* harmony import */


      var _api_service_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ../api-service.service */
      "./src/app/api-service.service.ts");

      var UserRegisterPage = /*#__PURE__*/function () {
        // OTP: any =  {
        //   first: '',
        //   second: '',
        //   third: '',
        //   forth: '',
        //   // fifth: '',
        //   // sixth: ''
        // };
        function UserRegisterPage(formBuilder, apiServiceService, routes, loadingController, alertController) {
          _classCallCheck(this, UserRegisterPage);

          this.formBuilder = formBuilder;
          this.apiServiceService = apiServiceService;
          this.routes = routes;
          this.loadingController = loadingController;
          this.alertController = alertController;
          this.isSubmitted = false;
          this.isRegistered = false;
        }

        _createClass(UserRegisterPage, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            this.ionicUserRegisterForm = this.formBuilder.group({
              user_name: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].minLength(2)]],
              email: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].pattern('[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}$')]],
              phone_no: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].pattern('^[0-9]+$')]]
            });
            this.verifyOtpForm = this.formBuilder.group({
              otp: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].pattern('^[0-9]+$')]]
            });
          }
        }, {
          key: "submitForm",
          value: function submitForm() {
            this.isSubmitted = true;

            if (!this.ionicUserRegisterForm.valid) {
              console.log('Please provide all the required values!');
              return false;
            } else {
              // this.routes.navigate(['/terms-and-condtions']);
              var userData = this.ionicUserRegisterForm.value;
              console.log(userData);
              var registerData = {
                user_name: "",
                email: "",
                phone_no: ""
              };
              registerData.user_name = userData.user_name;
              registerData.phone_no = userData.phone_no;
              registerData.email = userData.email;
              this.registerUser(registerData);
            }
          }
        }, {
          key: "registerUser",
          value: function registerUser(registerData) {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
              var _this = this;

              var loading;
              return regeneratorRuntime.wrap(function _callee$(_context) {
                while (1) {
                  switch (_context.prev = _context.next) {
                    case 0:
                      _context.next = 2;
                      return this.loadingController.create({
                        message: 'Loading...'
                      });

                    case 2:
                      loading = _context.sent;
                      _context.next = 5;
                      return loading.present();

                    case 5:
                      _context.next = 7;
                      return this.apiServiceService.userRegister(registerData).subscribe(function (res) {
                        console.log(res);

                        if (res) {
                          if (res.status === "Success") {
                            _this.userData = res;
                            _this.isRegistered = true;
                            loading.dismiss();
                          } else if (res.status === "Duplicate_Phone_No") {
                            console.log("Duplicate_Phone_No");
                            _this.isRegistered = false;
                            loading.dismiss();

                            _this.showAlertController("Registration failed!", res.Message);
                          }
                        }
                      });

                    case 7:
                    case "end":
                      return _context.stop();
                  }
                }
              }, _callee, this);
            }));
          }
        }, {
          key: "otpController",
          value: function otpController(event, next, prev, index) {
            console.log(JSON.stringify(this.OTP));

            if (index == 4) {
              console.log("submit");
            }

            if (event.target.value.length < 1 && prev) {
              prev.setFocus();
            } else if (next && event.target.value.length > 0) {
              next.setFocus();
            } else {
              // console.log(event.target.value);
              return 0;
            }
          }
        }, {
          key: "SubmitOtPForm",
          value: function SubmitOtPForm() {
            var _this2 = this;

            console.log(this.verifyOtpForm.value.otp, this.userData);
            var user = {
              user_id: this.userData.user_id,
              phone_no: this.userData.phone_no
            };
            console.log(user);

            if (this.userData.otp == this.verifyOtpForm.value.otp) {
              this.apiServiceService.verifyOTP(user).subscribe(function (res) {
                console.log(res);
                localStorage.setItem('userData', JSON.stringify(res));

                _this2.routes.navigate(['current-sessions']);
              });
            }
          }
        }, {
          key: "showAlertController",
          value: function showAlertController(sub_header, msg) {
            this.alertController.create({
              //header: 'Alert',
              subHeader: sub_header,
              message: msg,
              buttons: ['OK']
            }).then(function (res) {
              res.present();
            });
          }
        }, {
          key: "errorControl",
          get: function get() {
            return this.ionicUserRegisterForm.controls;
          }
        }]);

        return UserRegisterPage;
      }();

      UserRegisterPage.ctorParameters = function () {
        return [{
          type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"]
        }, {
          type: _api_service_service__WEBPACK_IMPORTED_MODULE_5__["ApiServiceService"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["LoadingController"]
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["AlertController"]
        }];
      };

      UserRegisterPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-user-register',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! raw-loader!./user-register.page.html */
        "./node_modules/raw-loader/dist/cjs.js!./src/app/user-register/user-register.page.html"))["default"],
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! ./user-register.page.scss */
        "./src/app/user-register/user-register.page.scss"))["default"]]
      })], UserRegisterPage);
      /***/
    }
  }]);
})();
//# sourceMappingURL=user-register-user-register-module-es5.js.map