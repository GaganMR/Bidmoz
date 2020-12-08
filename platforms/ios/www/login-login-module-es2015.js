(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["login-login-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/login/login.page.html":
/*!*****************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/login/login.page.html ***!
  \*****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n  <ion-toolbar>\n    <ion-title>Login</ion-title>\n  </ion-toolbar>\n</ion-header>\n<ion-content>\n  <ion-card class=\"container\" *ngIf=\"!isLoggedIn\">\n    <ion-card-content>\n<form [formGroup]=\"ionicUserLoginForm\" (ngSubmit)=\"loginForm()\" novalidate>\n  <ion-item lines=\"full\">\n    <ion-label position=\"floating\">Mobile No</ion-label>\n    <ion-input maxlength=\"10\" formControlName=\"phone_no\" type=\"text\" required></ion-input>\n  </ion-item>\n  <span class=\"error ion-padding\" *ngIf=\"isSubmitted && errorControl.phone_no.errors?.required\">\n    Mobile number is required.\n  </span>\n  <ion-row>\n    <ion-col>\n      <ion-button type=\"submit\" color=\"danger\" expand=\"block\">Sign In</ion-button>\n      <!-- <a [routerLink]=\"['/forgot-password']\" class=\"small-text\">Forgot Password?</a> -->\n    </ion-col>\n\n  </ion-row>\n</form>\n</ion-card-content>\n  </ion-card>\n\n<ion-card class=\"container\" *ngIf=\"isLoggedIn\">\n  <ion-card-content>\n    <form [formGroup]=\"verifyOtpForm\" (ngSubmit)=\"SubmitOtPForm()\">\n        <p style=\"text-align: center;\">Please enter one time verification code sent to +91{{userData.phone_no}}</p>\n    <ion-grid>\n      <ion-row>\n        <ion-col>\n          <ion-item >\n            <ion-input type=\"text\" placeholder=\"Enter Otp\" maxlength=\"4\" formControlName=\"otp\"></ion-input>\n          </ion-item>\n        </ion-col>\n        <!-- <ion-col>\n          <ion-item >\n            <ion-input type=\"tel\" placeholder=\"*\" maxlength=\"1\"  #otp1  (keyup)=\"otpController($event,otp2,'')\"  ></ion-input>\n          </ion-item>\n        </ion-col>\n        <ion-col >\n          <ion-item>\n            <ion-input type=\"tel\" placeholder=\"*\" maxlength=\"1\" #otp2 (keyup)=\"otpController($event,otp3,otp1)\" ></ion-input>\n          </ion-item>\n        </ion-col>\n        <ion-col >\n          <ion-item>\n            <ion-input type=\"tel\" placeholder=\"*\" maxlength=\"1\" #otp3  (keyup)=\"otpController($event,otp4,otp2)\" ></ion-input>\n          </ion-item>\n        </ion-col>\n        <ion-col >\n          <ion-item>\n            <ion-input type=\"tel\" placeholder=\"*\" maxlength=\"1\" #otp4  (keyup)=\"otpController($event,'',otp3)\"></ion-input>\n          </ion-item>\n        </ion-col> -->\n      </ion-row>\n      <ion-row>\n        <ion-col>\n          <ion-button type=\"submit\" color=\"primary\" expand=\"block\">Submit</ion-button>\n        </ion-col>\n      </ion-row>\n    </ion-grid>\n  </form>\n  </ion-card-content>\n</ion-card>\n</ion-content>\n");

/***/ }),

/***/ "./src/app/login/login-routing.module.ts":
/*!***********************************************!*\
  !*** ./src/app/login/login-routing.module.ts ***!
  \***********************************************/
/*! exports provided: LoginPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginPageRoutingModule", function() { return LoginPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _login_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./login.page */ "./src/app/login/login.page.ts");




const routes = [
    {
        path: '',
        component: _login_page__WEBPACK_IMPORTED_MODULE_3__["LoginPage"]
    }
];
let LoginPageRoutingModule = class LoginPageRoutingModule {
};
LoginPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], LoginPageRoutingModule);



/***/ }),

/***/ "./src/app/login/login.module.ts":
/*!***************************************!*\
  !*** ./src/app/login/login.module.ts ***!
  \***************************************/
/*! exports provided: LoginPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginPageModule", function() { return LoginPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _login_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./login-routing.module */ "./src/app/login/login-routing.module.ts");
/* harmony import */ var _login_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./login.page */ "./src/app/login/login.page.ts");







let LoginPageModule = class LoginPageModule {
};
LoginPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _login_routing_module__WEBPACK_IMPORTED_MODULE_5__["LoginPageRoutingModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"]
        ],
        declarations: [_login_page__WEBPACK_IMPORTED_MODULE_6__["LoginPage"]]
    })
], LoginPageModule);



/***/ }),

/***/ "./src/app/login/login.page.scss":
/*!***************************************!*\
  !*** ./src/app/login/login.page.scss ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".container {\n  top: 22%;\n  --ion-background-color: white;\n}\n\nion-content {\n  --ion-background-color:#EBEBF5;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbG9naW4vbG9naW4ucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksUUFBQTtFQUNBLDZCQUFBO0FBQ0o7O0FBQ0E7RUFDSSw4QkFBQTtBQUVKIiwiZmlsZSI6InNyYy9hcHAvbG9naW4vbG9naW4ucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmNvbnRhaW5lciB7XG4gICAgdG9wOiAyMiU7XG4gICAgLS1pb24tYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XG59XG5pb24tY29udGVudHtcbiAgICAtLWlvbi1iYWNrZ3JvdW5kLWNvbG9yOiNFQkVCRjU7XG4gIH0iXX0= */");

/***/ }),

/***/ "./src/app/login/login.page.ts":
/*!*************************************!*\
  !*** ./src/app/login/login.page.ts ***!
  \*************************************/
/*! exports provided: LoginPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginPage", function() { return LoginPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _api_service_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../api-service.service */ "./src/app/api-service.service.ts");






let LoginPage = class LoginPage {
    constructor(formBuilder, apiServiceService, routes, loadingController, alertController) {
        this.formBuilder = formBuilder;
        this.apiServiceService = apiServiceService;
        this.routes = routes;
        this.loadingController = loadingController;
        this.alertController = alertController;
        this.LoginData = { user_name: "", email: "", phone_no: "" };
        this.isSubmitted = false;
        this.isLoggedIn = false;
    }
    ngOnInit() {
        this.ionicUserLoginForm = this.formBuilder.group({
            phone_no: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].pattern('^[0-9]+$')]]
        });
        this.verifyOtpForm = this.formBuilder.group({
            otp: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].pattern('^[0-9]+$')]]
        });
    }
    get errorControl() {
        return this.ionicUserLoginForm.controls;
    }
    loginForm() {
        this.isSubmitted = true;
        if (!this.ionicUserLoginForm.valid) {
            console.log('Please provide the Mobile Number!');
            return false;
        }
        else {
            this.loginUser();
        }
    }
    loginUser() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const loading = yield this.loadingController.create({
                message: 'Loading...'
            });
            yield loading.present();
            yield this.apiServiceService.userLogin(this.ionicUserLoginForm.value.phone_no).subscribe((res) => {
                console.log(res);
                if (res) {
                    if (res.status === "Success") {
                        this.userData = res;
                        this.isLoggedIn = true;
                        loading.dismiss();
                    }
                    else if (res.status === "Failed") {
                        this.isLoggedIn = false;
                        loading.dismiss();
                        this.showAlertController("Login failed!", res.Message);
                    }
                }
            });
        });
    }
    otpController(event, next, prev) {
        if (event.target.value.length < 1 && prev) {
            prev.setFocus();
        }
        else if (next && event.target.value.length > 0) {
            next.setFocus();
        }
        else {
            return 0;
        }
    }
    SubmitOtPForm() {
        //console.log(this.verifyOtpForm.value.otp);
        let user = {
            user_id: this.userData.user_id,
            phone_no: this.userData.phone_no,
        };
        //console.log(user);
        if (this.userData.otp == this.verifyOtpForm.value.otp) {
            this.verifyOTP(user);
        }
    }
    verifyOTP(user) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const loading = yield this.loadingController.create({
                message: 'Loading...'
            });
            yield loading.present();
            yield this.apiServiceService.verifyOTP(user).subscribe((res) => {
                console.log(res);
                localStorage.setItem('userData', JSON.stringify(res));
                loading.dismiss();
                this.routes.navigate(['featured-product']);
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
LoginPage.ctorParameters = () => [
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"] },
    { type: _api_service_service__WEBPACK_IMPORTED_MODULE_5__["ApiServiceService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["LoadingController"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["AlertController"] }
];
LoginPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-login',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./login.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/login/login.page.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./login.page.scss */ "./src/app/login/login.page.scss")).default]
    })
], LoginPage);



/***/ })

}]);
//# sourceMappingURL=login-login-module-es2015.js.map