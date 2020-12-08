(function () {
  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["terms-and-condtions-terms-and-condtions-module"], {
    /***/
    "./node_modules/raw-loader/dist/cjs.js!./src/app/terms-and-condtions/terms-and-condtions.page.html":
    /*!*********************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/terms-and-condtions/terms-and-condtions.page.html ***!
      \*********************************************************************************************************/

    /*! exports provided: default */

    /***/
    function node_modulesRawLoaderDistCjsJsSrcAppTermsAndCondtionsTermsAndCondtionsPageHtml(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-header>\n  <!-- class=\"ion-text-center\" -->\n  <ion-toolbar color=\"primary\">\n    <!-- <ion-buttons slot=\"start\">\n      <ion-back-button defaultHref=\"/user-register\"></ion-back-button>\n    </ion-buttons> -->\n    <ion-title>Terms & Condtions</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <ion-grid>\n    <ion-row>\n      <ion-col col-12 col-xl-2 col-lg-3 col-md-4>\n        <p class=\"ion-text-justify\">\n          Maveric Systems is an engineering services company founded in 2000. It\n          works across digital platforms, banking solutions, data technologies,\n          and regulatory systems.[1] Maveric Systems has a dedicated offshore\n          delivery and research center in Chennai, India. Headquartered in\n          Chennai, India, Maveric Systems has branches in Mumbai, Bangalore,\n          Singapore, Mexico City, London, Dubai, Riyadh, New Jersey, and Kuala\n          Lumpur. The firm operates in the APAC, Middle East.[2]\n        </p>\n        <p class=\"ion-text-justify\">\n          The company was founded in 2000 by Ranga Reddy, P Venkatesh, NN\n          Subramanian and VN Mahesh. The company initially offered testing\n          services to banks and financial institutions but, by 2012, Maveric\n          Systems diversified into requirements assurance, application\n          assurance, and program assurance. Maveric additionally offered domain\n          specialization, platforms, and technical competency.[4] In 2018, the\n          company expanded its board to include Chitra Ramakrishna, the former\n          CEO and Managing Director of National Stock Exchange, and D. K.\n          Sharma, a technology specialist and former CIO of Citigroup Global\n          Consumer Banking’s International Business as independent Board of\n          Directors. [5]\n        </p>\n      </ion-col>\n    </ion-row>\n    <ion-row>\n      <ion-col>\n    <ion-checkbox [checked]=\"isChecked\" (ionChange)=\"notify()\"></ion-checkbox>\n    </ion-col>\n    </ion-row>\n  </ion-grid>\n</ion-content>\n<ion-footer no-shadow>\n  <ion-toolbar position=\"bottom\">\n    <ion-button  slot=\"end\" [disabled]=\"isChecked != true\" (click)=\"acceptTermsAndConditions()\">Continue</ion-button>\n  </ion-toolbar>\n</ion-footer>\n";
      /***/
    },

    /***/
    "./src/app/terms-and-condtions/terms-and-condtions-routing.module.ts":
    /*!***************************************************************************!*\
      !*** ./src/app/terms-and-condtions/terms-and-condtions-routing.module.ts ***!
      \***************************************************************************/

    /*! exports provided: TermsAndCondtionsPageRoutingModule */

    /***/
    function srcAppTermsAndCondtionsTermsAndCondtionsRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "TermsAndCondtionsPageRoutingModule", function () {
        return TermsAndCondtionsPageRoutingModule;
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


      var _terms_and_condtions_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./terms-and-condtions.page */
      "./src/app/terms-and-condtions/terms-and-condtions.page.ts");

      var routes = [{
        path: '',
        component: _terms_and_condtions_page__WEBPACK_IMPORTED_MODULE_3__["TermsAndCondtionsPage"]
      }];

      var TermsAndCondtionsPageRoutingModule = function TermsAndCondtionsPageRoutingModule() {
        _classCallCheck(this, TermsAndCondtionsPageRoutingModule);
      };

      TermsAndCondtionsPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
      })], TermsAndCondtionsPageRoutingModule);
      /***/
    },

    /***/
    "./src/app/terms-and-condtions/terms-and-condtions.module.ts":
    /*!*******************************************************************!*\
      !*** ./src/app/terms-and-condtions/terms-and-condtions.module.ts ***!
      \*******************************************************************/

    /*! exports provided: TermsAndCondtionsPageModule */

    /***/
    function srcAppTermsAndCondtionsTermsAndCondtionsModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "TermsAndCondtionsPageModule", function () {
        return TermsAndCondtionsPageModule;
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


      var _terms_and_condtions_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./terms-and-condtions-routing.module */
      "./src/app/terms-and-condtions/terms-and-condtions-routing.module.ts");
      /* harmony import */


      var _terms_and_condtions_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./terms-and-condtions.page */
      "./src/app/terms-and-condtions/terms-and-condtions.page.ts");

      var TermsAndCondtionsPageModule = function TermsAndCondtionsPageModule() {
        _classCallCheck(this, TermsAndCondtionsPageModule);
      };

      TermsAndCondtionsPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _terms_and_condtions_routing_module__WEBPACK_IMPORTED_MODULE_5__["TermsAndCondtionsPageRoutingModule"]],
        declarations: [_terms_and_condtions_page__WEBPACK_IMPORTED_MODULE_6__["TermsAndCondtionsPage"]]
      })], TermsAndCondtionsPageModule);
      /***/
    },

    /***/
    "./src/app/terms-and-condtions/terms-and-condtions.page.scss":
    /*!*******************************************************************!*\
      !*** ./src/app/terms-and-condtions/terms-and-condtions.page.scss ***!
      \*******************************************************************/

    /*! exports provided: default */

    /***/
    function srcAppTermsAndCondtionsTermsAndCondtionsPageScss(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3Rlcm1zLWFuZC1jb25kdGlvbnMvdGVybXMtYW5kLWNvbmR0aW9ucy5wYWdlLnNjc3MifQ== */";
      /***/
    },

    /***/
    "./src/app/terms-and-condtions/terms-and-condtions.page.ts":
    /*!*****************************************************************!*\
      !*** ./src/app/terms-and-condtions/terms-and-condtions.page.ts ***!
      \*****************************************************************/

    /*! exports provided: TermsAndCondtionsPage */

    /***/
    function srcAppTermsAndCondtionsTermsAndCondtionsPageTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "TermsAndCondtionsPage", function () {
        return TermsAndCondtionsPage;
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

      var TermsAndCondtionsPage = /*#__PURE__*/function () {
        function TermsAndCondtionsPage(router) {
          _classCallCheck(this, TermsAndCondtionsPage);

          this.router = router;
          this.isChecked = false;
        }

        _createClass(TermsAndCondtionsPage, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }, {
          key: "notify",
          value: function notify() {
            this.isChecked = !this.isChecked;
          }
        }, {
          key: "acceptTermsAndConditions",
          value: function acceptTermsAndConditions() {
            localStorage.setItem("terms&conditions", "accepted");
            this.router.navigate(['featured-product']);
          }
        }]);

        return TermsAndCondtionsPage;
      }();

      TermsAndCondtionsPage.ctorParameters = function () {
        return [{
          type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]
        }];
      };

      TermsAndCondtionsPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-terms-and-condtions',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! raw-loader!./terms-and-condtions.page.html */
        "./node_modules/raw-loader/dist/cjs.js!./src/app/terms-and-condtions/terms-and-condtions.page.html"))["default"],
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! ./terms-and-condtions.page.scss */
        "./src/app/terms-and-condtions/terms-and-condtions.page.scss"))["default"]]
      })], TermsAndCondtionsPage);
      /***/
    }
  }]);
})();
//# sourceMappingURL=terms-and-condtions-terms-and-condtions-module-es5.js.map