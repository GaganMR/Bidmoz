(function () {
  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["user-account-user-account-module"], {
    /***/
    "./node_modules/raw-loader/dist/cjs.js!./src/app/user-account/user-account.page.html":
    /*!*******************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/user-account/user-account.page.html ***!
      \*******************************************************************************************/

    /*! exports provided: default */

    /***/
    function node_modulesRawLoaderDistCjsJsSrcAppUserAccountUserAccountPageHtml(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-header>\n  <ion-toolbar color=\"primary\">\n    <ion-buttons slot=\"start\">\n      <ion-back-button defaultHref=\"/featured-product\"></ion-back-button>\n    </ion-buttons>\n    <ion-title>User Account</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <ion-grid>\n    <ion-row>\n      <ion-col>\n        <ion-avatar style=\"margin-top: 22px;\">\n          <img height=\"500\" src=\"../../assets/photo.jpg\" />\n        </ion-avatar>\n      </ion-col>\n      <ion-col>\n        <p><b>{{name}}</b></p>\n        <p>{{phone_no}}</p>\n        <p>{{email}}</p>\n      </ion-col>\n      <ion-col style=\"margin-top: 17px;\" class=\"ion-no-padding\"><ion-icon  class=\"ion-text-end\" name=\"create-outline\"></ion-icon></ion-col>\n    </ion-row>\n    <ion-card>\n      <ion-row>\n        <ion-col class=\"abc\">\n          <ion-icon name=\"star\"></ion-icon>\n          <div><p>52</p></div>\n        </ion-col>\n        <ion-col offset class=\"abc\">\n          <ion-icon name=\"logo-codepen\"></ion-icon>\n          <div><p>08</p></div>\n        </ion-col>\n      </ion-row>\n    </ion-card>\n    <ion-card>\n      <ion-row>\n        <ion-col><p>Coupons You Have</p></ion-col>\n      </ion-row>\n    </ion-card>\n    <ion-card>\n      <ion-row>\n        <ion-col><p>Product References 2</p></ion-col>\n      </ion-row>\n    </ion-card>\n  </ion-grid>\n</ion-content>\n";
      /***/
    },

    /***/
    "./src/app/user-account/user-account-routing.module.ts":
    /*!*************************************************************!*\
      !*** ./src/app/user-account/user-account-routing.module.ts ***!
      \*************************************************************/

    /*! exports provided: UserAccountPageRoutingModule */

    /***/
    function srcAppUserAccountUserAccountRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "UserAccountPageRoutingModule", function () {
        return UserAccountPageRoutingModule;
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


      var _user_account_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./user-account.page */
      "./src/app/user-account/user-account.page.ts");

      var routes = [{
        path: '',
        component: _user_account_page__WEBPACK_IMPORTED_MODULE_3__["UserAccountPage"]
      }];

      var UserAccountPageRoutingModule = function UserAccountPageRoutingModule() {
        _classCallCheck(this, UserAccountPageRoutingModule);
      };

      UserAccountPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
      })], UserAccountPageRoutingModule);
      /***/
    },

    /***/
    "./src/app/user-account/user-account.module.ts":
    /*!*****************************************************!*\
      !*** ./src/app/user-account/user-account.module.ts ***!
      \*****************************************************/

    /*! exports provided: UserAccountPageModule */

    /***/
    function srcAppUserAccountUserAccountModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "UserAccountPageModule", function () {
        return UserAccountPageModule;
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


      var _user_account_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./user-account-routing.module */
      "./src/app/user-account/user-account-routing.module.ts");
      /* harmony import */


      var _user_account_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./user-account.page */
      "./src/app/user-account/user-account.page.ts");

      var UserAccountPageModule = function UserAccountPageModule() {
        _classCallCheck(this, UserAccountPageModule);
      };

      UserAccountPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _user_account_routing_module__WEBPACK_IMPORTED_MODULE_5__["UserAccountPageRoutingModule"]],
        declarations: [_user_account_page__WEBPACK_IMPORTED_MODULE_6__["UserAccountPage"]]
      })], UserAccountPageModule);
      /***/
    },

    /***/
    "./src/app/user-account/user-account.page.scss":
    /*!*****************************************************!*\
      !*** ./src/app/user-account/user-account.page.scss ***!
      \*****************************************************/

    /*! exports provided: default */

    /***/
    function srcAppUserAccountUserAccountPageScss(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = ".abc {\n  text-align: center;\n  font-size: xx-large;\n}\n\n.ion-no-padding {\n  font-size: xx-large;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdXNlci1hY2NvdW50L3VzZXItYWNjb3VudC5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxrQkFBQTtFQUNBLG1CQUFBO0FBQ0o7O0FBQ0k7RUFDSSxtQkFBQTtBQUVSIiwiZmlsZSI6InNyYy9hcHAvdXNlci1hY2NvdW50L3VzZXItYWNjb3VudC5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuYWJjIHtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgZm9udC1zaXplOiB4eC1sYXJnZTtcbiAgICB9XG4gICAgLmlvbi1uby1wYWRkaW5ne1xuICAgICAgICBmb250LXNpemU6eHgtbGFyZ2U7XG4gICAgfSJdfQ== */";
      /***/
    },

    /***/
    "./src/app/user-account/user-account.page.ts":
    /*!***************************************************!*\
      !*** ./src/app/user-account/user-account.page.ts ***!
      \***************************************************/

    /*! exports provided: UserAccountPage */

    /***/
    function srcAppUserAccountUserAccountPageTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "UserAccountPage", function () {
        return UserAccountPage;
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


      var _api_service_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ../api-service.service */
      "./src/app/api-service.service.ts");

      var UserAccountPage = /*#__PURE__*/function () {
        function UserAccountPage(apiServiceService) {
          _classCallCheck(this, UserAccountPage);

          this.apiServiceService = apiServiceService;
        }

        _createClass(UserAccountPage, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            this.getUserData();
          }
        }, {
          key: "getUserData",
          value: function getUserData() {
            var _this = this;

            this.user_id = 59;
            this.apiServiceService.getUserDetails(this.user_id).subscribe(function (res) {
              console.log(res[0].user_name);

              if (res) {
                _this.name = res[0].user_name;
                _this.email = res[0].email;
                _this.phone_no = res[0].phone_no;
              }
            });
          }
        }]);

        return UserAccountPage;
      }();

      UserAccountPage.ctorParameters = function () {
        return [{
          type: _api_service_service__WEBPACK_IMPORTED_MODULE_2__["ApiServiceService"]
        }];
      };

      UserAccountPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-user-account',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! raw-loader!./user-account.page.html */
        "./node_modules/raw-loader/dist/cjs.js!./src/app/user-account/user-account.page.html"))["default"],
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! ./user-account.page.scss */
        "./src/app/user-account/user-account.page.scss"))["default"]]
      })], UserAccountPage);
      /***/
    }
  }]);
})();
//# sourceMappingURL=user-account-user-account-module-es5.js.map