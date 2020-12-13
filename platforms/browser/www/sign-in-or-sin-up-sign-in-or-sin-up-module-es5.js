(function () {
  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["sign-in-or-sin-up-sign-in-or-sin-up-module"], {
    /***/
    "./node_modules/raw-loader/dist/cjs.js!./src/app/sign-in-or-sin-up/sign-in-or-sin-up.page.html":
    /*!*****************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/sign-in-or-sin-up/sign-in-or-sin-up.page.html ***!
      \*****************************************************************************************************/

    /*! exports provided: default */

    /***/
    function node_modulesRawLoaderDistCjsJsSrcAppSignInOrSinUpSignInOrSinUpPageHtml(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<!-- <ion-header>\r\n  <ion-toolbar color=\"primary\">\r\n    <ion-title>SignIn</ion-title>\r\n  </ion-toolbar>\r\n</ion-header> -->\r\n\r\n<ion-content class=\"auth-form\">\r\n  <ion-header class=\"ion-no-border\">\r\n    <ion-toolbar>\r\n      <h1  class=\"ion-text-center\"><b>BIDMOZ</b></h1>\r\n    </ion-toolbar>\r\n  </ion-header>\r\n  <div class=\"container\">\r\n  <ion-card >\r\n    <ion-card-content>\r\n      <ion-grid>\r\n        <ion-row>\r\n          <ion-col align-self-center>\r\n            <ion-button [routerLink]=\"['/user-register']\" expand=\"block\" color=\"primary\">Register</ion-button>\r\n    \r\n            <span class=\"divider line one-line\">or</span>\r\n    \r\n            <span class=\"already\">Already a user?</span>\r\n    \r\n            <ion-button [routerLink]=\"['/login']\" expand=\"block\" color=\"danger\">Sign In</ion-button>\r\n          </ion-col>\r\n        </ion-row>\r\n      </ion-grid>\r\n    </ion-card-content>\r\n  </ion-card>\r\n</div>\r\n</ion-content>\r\n";
      /***/
    },

    /***/
    "./src/app/sign-in-or-sin-up/sign-in-or-sin-up-routing.module.ts":
    /*!***********************************************************************!*\
      !*** ./src/app/sign-in-or-sin-up/sign-in-or-sin-up-routing.module.ts ***!
      \***********************************************************************/

    /*! exports provided: SignInOrSinUpPageRoutingModule */

    /***/
    function srcAppSignInOrSinUpSignInOrSinUpRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "SignInOrSinUpPageRoutingModule", function () {
        return SignInOrSinUpPageRoutingModule;
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


      var _sign_in_or_sin_up_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./sign-in-or-sin-up.page */
      "./src/app/sign-in-or-sin-up/sign-in-or-sin-up.page.ts");

      var routes = [{
        path: '',
        component: _sign_in_or_sin_up_page__WEBPACK_IMPORTED_MODULE_3__["SignInOrSinUpPage"]
      }];

      var SignInOrSinUpPageRoutingModule = function SignInOrSinUpPageRoutingModule() {
        _classCallCheck(this, SignInOrSinUpPageRoutingModule);
      };

      SignInOrSinUpPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
      })], SignInOrSinUpPageRoutingModule);
      /***/
    },

    /***/
    "./src/app/sign-in-or-sin-up/sign-in-or-sin-up.module.ts":
    /*!***************************************************************!*\
      !*** ./src/app/sign-in-or-sin-up/sign-in-or-sin-up.module.ts ***!
      \***************************************************************/

    /*! exports provided: SignInOrSinUpPageModule */

    /***/
    function srcAppSignInOrSinUpSignInOrSinUpModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "SignInOrSinUpPageModule", function () {
        return SignInOrSinUpPageModule;
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


      var _sign_in_or_sin_up_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./sign-in-or-sin-up-routing.module */
      "./src/app/sign-in-or-sin-up/sign-in-or-sin-up-routing.module.ts");
      /* harmony import */


      var _sign_in_or_sin_up_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./sign-in-or-sin-up.page */
      "./src/app/sign-in-or-sin-up/sign-in-or-sin-up.page.ts");

      var SignInOrSinUpPageModule = function SignInOrSinUpPageModule() {
        _classCallCheck(this, SignInOrSinUpPageModule);
      };

      SignInOrSinUpPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _sign_in_or_sin_up_routing_module__WEBPACK_IMPORTED_MODULE_5__["SignInOrSinUpPageRoutingModule"]],
        declarations: [_sign_in_or_sin_up_page__WEBPACK_IMPORTED_MODULE_6__["SignInOrSinUpPage"]]
      })], SignInOrSinUpPageModule);
      /***/
    },

    /***/
    "./src/app/sign-in-or-sin-up/sign-in-or-sin-up.page.scss":
    /*!***************************************************************!*\
      !*** ./src/app/sign-in-or-sin-up/sign-in-or-sin-up.page.scss ***!
      \***************************************************************/

    /*! exports provided: default */

    /***/
    function srcAppSignInOrSinUpSignInOrSinUpPageScss(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = ".container {\n  margin-top: 25%;\n}\n\n.divider {\n  display: flex;\n}\n\n.divider:before, .divider:after {\n  content: \"\";\n  flex: 1;\n}\n\n.line {\n  align-items: center;\n  margin: 1em -1em;\n  color: #cccccc;\n}\n\n.line:before, .line:after {\n  height: 1px;\n  margin: 0 1em;\n}\n\n.one-line:before, .one-line:after {\n  background: #cccccc;\n}\n\n.auth-form ion-grid,\n.auth-form ion-row {\n  height: 100%;\n  justify-content: center;\n}\n\n.already {\n  display: block;\n  text-align: center;\n  padding-bottom: 10px;\n}\n\n.ion-text-center {\n  color: white;\n  margin-top: 25%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2lnbi1pbi1vci1zaW4tdXAvc2lnbi1pbi1vci1zaW4tdXAucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBRUUsZUFBQTtBQUFGOztBQU9BO0VBQ0ksYUFBQTtBQUpKOztBQU1JO0VBRUUsV0FBQTtFQUNBLE9BQUE7QUFMTjs7QUFTRTtFQUNFLG1CQUFBO0VBQ0EsZ0JBQUE7RUFDQSxjQUFBO0FBTko7O0FBUUk7RUFFRSxXQUFBO0VBQ0EsYUFBQTtBQVBOOztBQVlJO0VBRUcsbUJBQUE7QUFWUDs7QUFjRTs7RUFFRSxZQUFBO0VBQ0EsdUJBQUE7QUFYSjs7QUFjRTtFQUNFLGNBQUE7RUFDQSxrQkFBQTtFQUNBLG9CQUFBO0FBWEo7O0FBY0U7RUFDRSxZQUFBO0VBQ0EsZUFBQTtBQVhKIiwiZmlsZSI6InNyYy9hcHAvc2lnbi1pbi1vci1zaW4tdXAvc2lnbi1pbi1vci1zaW4tdXAucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmNvbnRhaW5lciB7XHJcbiAgLy8gdG9wOiAyMiU7XHJcbiAgbWFyZ2luLXRvcDogMjUlO1xyXG4gIC8vIC0taW9uLWJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xyXG59XHJcbi8vIGlvbi1jb250ZW50e1xyXG4vLyAgIC0taW9uLWJhY2tncm91bmQtY29sb3I6I0VCRUJGNTtcclxuLy8gfVxyXG5cclxuLmRpdmlkZXIge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIFxyXG4gICAgJjpiZWZvcmUsXHJcbiAgICAmOmFmdGVyIHtcclxuICAgICAgY29udGVudDogXCJcIjtcclxuICAgICAgZmxleDogMTtcclxuICAgIH1cclxuICB9XHJcbiAgXHJcbiAgLmxpbmUge1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIG1hcmdpbjogMWVtIC0xZW07XHJcbiAgICBjb2xvcjogI2NjY2NjYztcclxuICAgIFxyXG4gICAgJjpiZWZvcmUsXHJcbiAgICAmOmFmdGVyIHtcclxuICAgICAgaGVpZ2h0OiAxcHg7XHJcbiAgICAgIG1hcmdpbjogMCAxZW07XHJcbiAgICB9XHJcbiAgfSBcclxuICBcclxuICAub25lLWxpbmUge1xyXG4gICAgJjpiZWZvcmUsXHJcbiAgICAmOmFmdGVyIHtcclxuICAgICAgIGJhY2tncm91bmQ6ICNjY2NjY2M7XHJcbiAgICB9XHJcbiAgfVxyXG4gIFxyXG4gIC5hdXRoLWZvcm0gaW9uLWdyaWQsXHJcbiAgLmF1dGgtZm9ybSBpb24tcm93IHtcclxuICAgIGhlaWdodDogMTAwJTtcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gIH1cclxuICBcclxuICAuYWxyZWFkeSB7XHJcbiAgICBkaXNwbGF5OiBibG9jaztcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIHBhZGRpbmctYm90dG9tOiAxMHB4O1xyXG4gIH1cclxuXHJcbiAgLmlvbi10ZXh0LWNlbnRlcntcclxuICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgIG1hcmdpbi10b3A6IDI1JTtcclxuICB9XHJcbiAgIl19 */";
      /***/
    },

    /***/
    "./src/app/sign-in-or-sin-up/sign-in-or-sin-up.page.ts":
    /*!*************************************************************!*\
      !*** ./src/app/sign-in-or-sin-up/sign-in-or-sin-up.page.ts ***!
      \*************************************************************/

    /*! exports provided: SignInOrSinUpPage */

    /***/
    function srcAppSignInOrSinUpSignInOrSinUpPageTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "SignInOrSinUpPage", function () {
        return SignInOrSinUpPage;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "./node_modules/tslib/tslib.es6.js");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

      var SignInOrSinUpPage = /*#__PURE__*/function () {
        function SignInOrSinUpPage() {
          _classCallCheck(this, SignInOrSinUpPage);
        }

        _createClass(SignInOrSinUpPage, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }]);

        return SignInOrSinUpPage;
      }();

      SignInOrSinUpPage.ctorParameters = function () {
        return [];
      };

      SignInOrSinUpPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-sign-in-or-sin-up',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! raw-loader!./sign-in-or-sin-up.page.html */
        "./node_modules/raw-loader/dist/cjs.js!./src/app/sign-in-or-sin-up/sign-in-or-sin-up.page.html"))["default"],
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! ./sign-in-or-sin-up.page.scss */
        "./src/app/sign-in-or-sin-up/sign-in-or-sin-up.page.scss"))["default"]]
      })], SignInOrSinUpPage);
      /***/
    }
  }]);
})();
//# sourceMappingURL=sign-in-or-sin-up-sign-in-or-sin-up-module-es5.js.map