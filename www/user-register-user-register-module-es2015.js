(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["user-register-user-register-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/user-register/user-register.page.html":
/*!*********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/user-register/user-register.page.html ***!
  \*********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n  <ion-toolbar color=\"primary\" >\n    <!-- class=\"ion-text-center\" -->\n    <ion-buttons slot=\"start\">\n      <ion-back-button defaultHref=\"/home\"></ion-back-button>\n    </ion-buttons>\n    <ion-title>User Register</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <!-- <div style=\"height: 80%; display: flex; align-items: center; justify-content: center;\"> -->\n  <ion-card class=\"container\" *ngIf=\"!isRegistered\">\n    <ion-card-content>\n      <form [formGroup]=\"ionicUserRegisterForm\" (ngSubmit)=\"submitForm()\" novalidate>\n        <ion-item lines=\"full\">\n          <ion-label position=\"floating\">Name</ion-label>\n          <ion-input formControlName=\"user_name\" type=\"text\" required></ion-input>\n        </ion-item>\n        <span class=\"error ion-padding\" *ngIf=\"isSubmitted && errorControl.user_name.errors?.required\">\n          Name is required.\n        </span>\n        <span class=\"error ion-padding\" *ngIf=\"isSubmitted && errorControl.user_name.errors?.minlength\">\n          Name should be min 2 chars long.\n        </span>\n        <ion-item lines=\"full\">\n          <ion-label position=\"floating\">Phone No</ion-label>\n          <ion-input maxlength=\"10\" formControlName=\"phone_no\" type=\"text\" required></ion-input>\n        </ion-item>\n        <span class=\"error ion-padding\" *ngIf=\"isSubmitted && errorControl.phone_no.errors?.required\">\n          Mobile number is required.\n        </span>\n        <span class=\"error ion-padding\" *ngIf=\"isSubmitted && errorControl.phone_no.errors?.pattern\">\n          Only numerical values allowed.\n        </span>\n        <ion-item lines=\"full\">\n          <ion-label position=\"floating\">Email</ion-label>\n          <ion-input formControlName=\"email\" type=\"email\" required></ion-input>\n        </ion-item>\n        <span class=\"error ion-padding\" *ngIf=\"isSubmitted && errorControl.email.errors?.required\">\n          Email is required.\n        </span>\n        <span class=\"error ion-padding\" *ngIf=\"isSubmitted && errorControl.email.errors?.pattern\">\n          Please provide valid email id.\n        </span>\n        <ion-row>\n          <ion-col>\n            <ion-button type=\"submit\" color=\"primary\" expand=\"block\">Submit</ion-button>\n          </ion-col>\n        </ion-row>\n      </form>\n    </ion-card-content>\n  </ion-card>\n  <ion-card class=\"container\" *ngIf=\"isRegistered\">\n    <ion-card-content>\n      <form [formGroup]=\"verifyOtpForm\" (ngSubmit)=\"SubmitOtPForm()\">\n          <p style=\"text-align: center;\">Please enter one time verification code sent to +91{{userData.phone_no}}</p>\n      <ion-grid>\n        <ion-row>\n          <ion-col>\n            <ion-item >\n              <ion-input type=\"text\" placeholder=\"Enter Otp\" maxlength=\"4\" formControlName=\"otp\"></ion-input>\n            </ion-item>\n          </ion-col>\n          <!--  <ion-col>\n            <ion-item >\n              <ion-input type=\"tel\" placeholder=\"*\" maxlength=\"1\" [(ngModel)] =\"OTP.first\" #otp1  (keyup)=\"otpController($event,otp2,'')\"  ></ion-input>\n            </ion-item>\n          </ion-col>\n           <ion-col >\n            <ion-item>\n              <ion-input type=\"tel\" placeholder=\"*\" maxlength=\"1\" [(ngModel)] =\"OTP.second\"#otp2 (keyup)=\"otpController($event,otp3,otp1)\" ></ion-input>\n            </ion-item>\n          </ion-col>\n          <ion-col >\n            <ion-item>\n              <ion-input type=\"tel\" placeholder=\"*\" maxlength=\"1\" #otp3 [(ngModel)] =\"OTP.third\" (keyup)=\"otpController($event,otp4,otp2)\" ></ion-input>\n            </ion-item>\n          </ion-col>\n          <ion-col >\n            <ion-item>\n              <ion-input type=\"tel\" placeholder=\"*\" maxlength=\"1\" #otp4 [(ngModel)] =\"OTP.forth\" (keyup)=\"otpController($event,'',otp3)\"></ion-input>\n            </ion-item>\n          </ion-col> -->\n        </ion-row>\n        <ion-row>\n          <ion-col>\n            <ion-button type=\"submit\" color=\"primary\" expand=\"block\">Submit</ion-button>\n          </ion-col>\n        </ion-row>\n      </ion-grid>\n      </form>\n    </ion-card-content>\n  </ion-card>\n<!-- </div> -->\n</ion-content>\n<!-- <ion-footer no-shadow>\n\t<ion-toolbar position=\"bottom\">\n    <ion-row>\n      <ion-col>\n    <ion-button type=\"submit\" slot=\"end\" [routerLink]=\"['/terms-and-condtions']\">Continue<ion-icon name=\"chevron-forward-outline\"></ion-icon></ion-button>\n    </ion-col>\n    </ion-row>\n\t</ion-toolbar>\n</ion-footer> -->\n<!-- expand=\"block\" slot=\"end\" -->\n\n\n    <!-- <ion-row text-center>\n        <ion-col>\n         <ion-input #otp1 required maxLength=\"1\" (keyup)=\"otpController($event,otp2,'')\">\n         </ion-input>\n         <ion-input #otp2 required maxLength=\"1\" (keyup)=\"otpController($event,otp3,otp1)\">\n         </ion-input>\n         <ion-input #otp3 required maxLength=\"1\" (keyup)=\"otpController($event,otp4,otp2)\">\n         </ion-input>\n         <ion-input #otp4  required maxLength=\"1\" (keyup)=\"otpController($event,'',otp3)\">\n         </ion-input>\n        </ion-col>\n      </ion-row> -->\n");

/***/ }),

/***/ "./src/app/user-register/user-register-routing.module.ts":
/*!***************************************************************!*\
  !*** ./src/app/user-register/user-register-routing.module.ts ***!
  \***************************************************************/
/*! exports provided: UserRegisterPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserRegisterPageRoutingModule", function() { return UserRegisterPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _user_register_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./user-register.page */ "./src/app/user-register/user-register.page.ts");




const routes = [
    {
        path: '',
        component: _user_register_page__WEBPACK_IMPORTED_MODULE_3__["UserRegisterPage"]
    }
];
let UserRegisterPageRoutingModule = class UserRegisterPageRoutingModule {
};
UserRegisterPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], UserRegisterPageRoutingModule);



/***/ }),

/***/ "./src/app/user-register/user-register.module.ts":
/*!*******************************************************!*\
  !*** ./src/app/user-register/user-register.module.ts ***!
  \*******************************************************/
/*! exports provided: UserRegisterPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserRegisterPageModule", function() { return UserRegisterPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _user_register_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./user-register-routing.module */ "./src/app/user-register/user-register-routing.module.ts");
/* harmony import */ var _user_register_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./user-register.page */ "./src/app/user-register/user-register.page.ts");







let UserRegisterPageModule = class UserRegisterPageModule {
};
UserRegisterPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _user_register_routing_module__WEBPACK_IMPORTED_MODULE_5__["UserRegisterPageRoutingModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"]
        ],
        declarations: [_user_register_page__WEBPACK_IMPORTED_MODULE_6__["UserRegisterPage"]]
    })
], UserRegisterPageModule);



/***/ }),

/***/ "./src/app/user-register/user-register.page.scss":
/*!*******************************************************!*\
  !*** ./src/app/user-register/user-register.page.scss ***!
  \*******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".container {\n  top: 22%;\n  --ion-background-color: white;\n}\n\nion-content {\n  --ion-background-color:#EBEBF5;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdXNlci1yZWdpc3Rlci91c2VyLXJlZ2lzdGVyLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLFFBQUE7RUFDQSw2QkFBQTtBQUNKOztBQUNBO0VBQ0ksOEJBQUE7QUFFSiIsImZpbGUiOiJzcmMvYXBwL3VzZXItcmVnaXN0ZXIvdXNlci1yZWdpc3Rlci5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY29udGFpbmVyIHtcbiAgICB0b3A6IDIyJTtcbiAgICAtLWlvbi1iYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcbn1cbmlvbi1jb250ZW50e1xuICAgIC0taW9uLWJhY2tncm91bmQtY29sb3I6I0VCRUJGNTtcbiAgfVxuXG5cbi8vICAgaW9uLWlucHV0e1xuLy8gICAgIGRpc3BsYXk6aW5saW5lLWJsb2NrO1xuLy8gICAgIHdpZHRoOjUwcHg7XG4vLyAgICAgaGVpZ2h0OjUwcHg7XG4vLyAgICAgbWFyZ2luOjEwcHg7XG4vLyAgICAgYm9yZGVyLXJhZGl1czogNTAlO1xuLy8gICAgIC0tYmFja2dyb3VuZDojZTFlMWUxO1xuLy8gICAgIC0tcGFkZGluZy1zdGFydDo3cHg7XG4vLyAgICAgfSJdfQ== */");

/***/ }),

/***/ "./src/app/user-register/user-register.page.ts":
/*!*****************************************************!*\
  !*** ./src/app/user-register/user-register.page.ts ***!
  \*****************************************************/
/*! exports provided: UserRegisterPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserRegisterPage", function() { return UserRegisterPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _api_service_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../api-service.service */ "./src/app/api-service.service.ts");






let UserRegisterPage = class UserRegisterPage {
    // OTP: any =  {
    //   first: '',
    //   second: '',
    //   third: '',
    //   forth: '',
    //   // fifth: '',
    //   // sixth: ''
    // };
    constructor(formBuilder, apiServiceService, routes, loadingController, alertController) {
        this.formBuilder = formBuilder;
        this.apiServiceService = apiServiceService;
        this.routes = routes;
        this.loadingController = loadingController;
        this.alertController = alertController;
        this.isSubmitted = false;
        this.isRegistered = false;
    }
    ngOnInit() {
        this.ionicUserRegisterForm = this.formBuilder.group({
            user_name: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].minLength(2)]],
            email: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].pattern('[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}$')]],
            phone_no: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].pattern('^[0-9]+$')]]
        });
        this.verifyOtpForm = this.formBuilder.group({
            otp: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].pattern('^[0-9]+$')]]
        });
    }
    get errorControl() {
        return this.ionicUserRegisterForm.controls;
    }
    submitForm() {
        this.isSubmitted = true;
        if (!this.ionicUserRegisterForm.valid) {
            console.log('Please provide all the required values!');
            return false;
        }
        else {
            // this.routes.navigate(['/terms-and-condtions']);
            var userData = this.ionicUserRegisterForm.value;
            console.log(userData);
            let registerData = { user_name: "", email: "", phone_no: "" };
            registerData.user_name = userData.user_name;
            registerData.phone_no = userData.phone_no;
            registerData.email = userData.email;
            this.registerUser(registerData);
        }
    }
    registerUser(registerData) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const loading = yield this.loadingController.create({
                message: 'Loading...'
            });
            yield loading.present();
            yield this.apiServiceService.userRegister(registerData).subscribe((res) => {
                console.log(res);
                if (res) {
                    if (res.status === "Success") {
                        this.userData = res;
                        this.isRegistered = true;
                        loading.dismiss();
                    }
                    else if (res.status === "Duplicate_Phone_No") {
                        console.log("Duplicate_Phone_No");
                        this.isRegistered = false;
                        loading.dismiss();
                        this.showAlertController("Registration failed!", res.Message);
                    }
                }
            });
        });
    }
    otpController(event, next, prev, index) {
        console.log(JSON.stringify(this.OTP));
        if (index == 4) {
            console.log("submit");
        }
        if (event.target.value.length < 1 && prev) {
            prev.setFocus();
        }
        else if (next && event.target.value.length > 0) {
            next.setFocus();
        }
        else {
            // console.log(event.target.value);
            return 0;
        }
    }
    SubmitOtPForm() {
        console.log(this.verifyOtpForm.value.otp, this.userData);
        let user = {
            user_id: this.userData.user_id,
            phone_no: this.userData.phone_no,
        };
        console.log(user);
        if (this.userData.otp == this.verifyOtpForm.value.otp) {
            this.apiServiceService.verifyOTP(user).subscribe((res) => {
                console.log(res);
                localStorage.setItem('userData', JSON.stringify(res));
                this.routes.navigate(['featured-product']);
            });
        }
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
UserRegisterPage.ctorParameters = () => [
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"] },
    { type: _api_service_service__WEBPACK_IMPORTED_MODULE_5__["ApiServiceService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["LoadingController"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["AlertController"] }
];
UserRegisterPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-user-register',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./user-register.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/user-register/user-register.page.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./user-register.page.scss */ "./src/app/user-register/user-register.page.scss")).default]
    })
], UserRegisterPage);



/***/ })

}]);
//# sourceMappingURL=user-register-user-register-module-es2015.js.map