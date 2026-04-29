(function () {
  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

  function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return typeof key === "symbol" ? key : String(key); }

  function _toPrimitive(input, hint) { if (typeof input !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (typeof res !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["centre-centre-module"], {
    /***/
    "TPl5":
    /*!*****************************************!*\
      !*** ./src/app/centre/centre.module.ts ***!
      \*****************************************/

    /*! exports provided: CentrePageModule */

    /***/
    function TPl5(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "CentrePageModule", function () {
        return CentrePageModule;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/forms */
      "3Pt+");
      /* harmony import */


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @ionic/angular */
      "TEn/");
      /* harmony import */


      var _centre_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./centre-routing.module */
      "c8Nc");
      /* harmony import */


      var _centre_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./centre.page */
      "zzX7");

      var CentrePageModule = /*#__PURE__*/_createClass(function CentrePageModule() {
        _classCallCheck(this, CentrePageModule);
      });

      CentrePageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _centre_routing_module__WEBPACK_IMPORTED_MODULE_5__["CentrePageRoutingModule"]],
        declarations: [_centre_page__WEBPACK_IMPORTED_MODULE_6__["CentrePage"]]
      })], CentrePageModule);
      /***/
    },

    /***/
    "c8Nc":
    /*!*************************************************!*\
      !*** ./src/app/centre/centre-routing.module.ts ***!
      \*************************************************/

    /*! exports provided: CentrePageRoutingModule */

    /***/
    function c8Nc(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "CentrePageRoutingModule", function () {
        return CentrePageRoutingModule;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");
      /* harmony import */


      var _centre_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./centre.page */
      "zzX7");

      var routes = [{
        path: '',
        component: _centre_page__WEBPACK_IMPORTED_MODULE_3__["CentrePage"]
      }];

      var CentrePageRoutingModule = /*#__PURE__*/_createClass(function CentrePageRoutingModule() {
        _classCallCheck(this, CentrePageRoutingModule);
      });

      CentrePageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
      })], CentrePageRoutingModule);
      /***/
    },

    /***/
    "rgRD":
    /*!*******************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/centre/centre.page.html ***!
      \*******************************************************************************/

    /*! exports provided: default */

    /***/
    function rgRD(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-header>\n  <ion-toolbar>\n    <ion-title>Centre</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <div class=\"padding-ionic\">\n    <ion-card mode=\"ios\" class=\"ion-text-center\">\n      <p>Nerul</p>\n      <ion-button  shape=\"round\"  size=\"small\" color=\"primary\">\n        Details\n      </ion-button>\n    </ion-card>\n    <ion-card mode=\"ios\" class=\"ion-text-center\">\n      <p>Kharghar</p>\n      <ion-button  shape=\"round\" size=\"small\" color=\"primary\">\n        Details\n      </ion-button>\n    </ion-card>\n    <ion-card mode=\"ios\" class=\"ion-text-center\">\n      <p>Vashi</p>\n      <ion-button  shape=\"round\"  size=\"small\" color=\"primary\">\n        Details\n      </ion-button>\n    </ion-card>\n  </div>\n\n</ion-content>\n";
      /***/
    },

    /***/
    "zHjt":
    /*!*****************************************!*\
      !*** ./src/app/centre/centre.page.scss ***!
      \*****************************************/

    /*! exports provided: default */

    /***/
    function zHjt(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "ion-content {\n  --background:#f3fbfe;\n}\n\nion-card {\n  margin-top: 16px;\n}\n\nion-card p {\n  font-size: 20px;\n  font-weight: bold;\n}\n\nion-card ion-button {\n  margin-bottom: 16px;\n  text-transform: none;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL2NlbnRyZS5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxvQkFBQTtBQUNKOztBQUNBO0VBQ0ksZ0JBQUE7QUFFSjs7QUFESTtFQUNJLGVBQUE7RUFDQSxpQkFBQTtBQUdSOztBQURJO0VBQ0ksbUJBQUE7RUFDQSxvQkFBQTtBQUdSIiwiZmlsZSI6ImNlbnRyZS5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJpb24tY29udGVudCB7XHJcbiAgICAtLWJhY2tncm91bmQ6I2YzZmJmZTtcclxufVxyXG5pb24tY2FyZCB7XHJcbiAgICBtYXJnaW4tdG9wOiAxNnB4O1xyXG4gICAgcHtcclxuICAgICAgICBmb250LXNpemU6IDIwcHg7XHJcbiAgICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgICB9XHJcbiAgICBpb24tYnV0dG9uIHtcclxuICAgICAgICBtYXJnaW4tYm90dG9tOiAxNnB4O1xyXG4gICAgICAgIHRleHQtdHJhbnNmb3JtOiBub25lO1xyXG4gICAgfVxyXG59Il19 */";
      /***/
    },

    /***/
    "zzX7":
    /*!***************************************!*\
      !*** ./src/app/centre/centre.page.ts ***!
      \***************************************/

    /*! exports provided: CentrePage */

    /***/
    function zzX7(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "CentrePage", function () {
        return CentrePage;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_centre_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./centre.page.html */
      "rgRD");
      /* harmony import */


      var _centre_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./centre.page.scss */
      "zHjt");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");

      var CentrePage = /*#__PURE__*/function () {
        function CentrePage() {
          _classCallCheck(this, CentrePage);
        }

        _createClass(CentrePage, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }]);

        return CentrePage;
      }();

      CentrePage.ctorParameters = function () {
        return [];
      };

      CentrePage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-centre',
        template: _raw_loader_centre_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_centre_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
      })], CentrePage);
      /***/
    }
  }]);
})();
//# sourceMappingURL=centre-centre-module-es5.js.map