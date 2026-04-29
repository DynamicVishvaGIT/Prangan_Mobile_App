(function () {
  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

  function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return typeof key === "symbol" ? key : String(key); }

  function _toPrimitive(input, hint) { if (typeof input !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (typeof res !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["rules-rules-module"], {
    /***/
    "W/OL":
    /*!*************************************!*\
      !*** ./src/app/rules/rules.page.ts ***!
      \*************************************/

    /*! exports provided: RulesPage */

    /***/
    function WOL(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "RulesPage", function () {
        return RulesPage;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_rules_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./rules.page.html */
      "uplV");
      /* harmony import */


      var _rules_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./rules.page.scss */
      "ifWB");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");
      /* harmony import */


      var _api_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ../api.service */
      "yTNM");

      var RulesPage = /*#__PURE__*/function () {
        function RulesPage(router, apiService) {
          _classCallCheck(this, RulesPage);

          this.router = router;
          this.apiService = apiService;
          this.isRulesPresent = false;
        }

        _createClass(RulesPage, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }, {
          key: "ionViewWillEnter",
          value: function ionViewWillEnter() {
            var _this = this;

            this.apiService.fetchRules().then(function (data) {
              _this.rules = JSON.parse(data.data);
              _this.isRulesPresent = true;
            })["catch"](function (err) {
              _this.rules = '';
              _this.isRulesPresent = false;
            });
          }
        }, {
          key: "doRefresh",
          value: function doRefresh(event) {
            var _this2 = this;

            this.apiService.fetchRules().then(function (data) {
              _this2.rules = JSON.parse(data.data);
              _this2.isRulesPresent = true;
              event.target.complete();
            })["catch"](function (err) {
              _this2.rules = '';
              _this2.isRulesPresent = false;
              event.target.complete();
            });
          }
        }]);

        return RulesPage;
      }();

      RulesPage.ctorParameters = function () {
        return [{
          type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]
        }, {
          type: _api_service__WEBPACK_IMPORTED_MODULE_5__["ApiService"]
        }];
      };

      RulesPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-rules',
        template: _raw_loader_rules_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_rules_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
      })], RulesPage);
      /***/
    },

    /***/
    "bJsR":
    /*!***************************************!*\
      !*** ./src/app/rules/rules.module.ts ***!
      \***************************************/

    /*! exports provided: RulesPageModule */

    /***/
    function bJsR(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "RulesPageModule", function () {
        return RulesPageModule;
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


      var _rules_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./rules-routing.module */
      "cqlJ");
      /* harmony import */


      var _rules_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./rules.page */
      "W/OL");

      var RulesPageModule = /*#__PURE__*/_createClass(function RulesPageModule() {
        _classCallCheck(this, RulesPageModule);
      });

      RulesPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _rules_routing_module__WEBPACK_IMPORTED_MODULE_5__["RulesPageRoutingModule"]],
        declarations: [_rules_page__WEBPACK_IMPORTED_MODULE_6__["RulesPage"]]
      })], RulesPageModule);
      /***/
    },

    /***/
    "cqlJ":
    /*!***********************************************!*\
      !*** ./src/app/rules/rules-routing.module.ts ***!
      \***********************************************/

    /*! exports provided: RulesPageRoutingModule */

    /***/
    function cqlJ(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "RulesPageRoutingModule", function () {
        return RulesPageRoutingModule;
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


      var _rules_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./rules.page */
      "W/OL");

      var routes = [{
        path: '',
        component: _rules_page__WEBPACK_IMPORTED_MODULE_3__["RulesPage"]
      }];

      var RulesPageRoutingModule = /*#__PURE__*/_createClass(function RulesPageRoutingModule() {
        _classCallCheck(this, RulesPageRoutingModule);
      });

      RulesPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
      })], RulesPageRoutingModule);
      /***/
    },

    /***/
    "ifWB":
    /*!***************************************!*\
      !*** ./src/app/rules/rules.page.scss ***!
      \***************************************/

    /*! exports provided: default */

    /***/
    function ifWB(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "ion-content {\n  --background: #f3fbfe;\n}\n\n.heading {\n  font-weight: bold;\n}\n\nion-card {\n  margin: 16px;\n  border-radius: 5px;\n  box-shadow: 0 3px 0px -2px rgba(0, 0, 0, 0), 0 2px 4px 2px rgba(0, 0, 0, 0.03), 0 1px 5px 0 rgba(0, 0, 0, 0.11);\n  padding: 8px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3J1bGVzLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLHFCQUFBO0FBQ0o7O0FBQ0U7RUFDRSxpQkFBQTtBQUVKOztBQUFFO0VBQ0UsWUFBQTtFQUNBLGtCQUFBO0VBQ0EsK0dBQUE7RUFDQSxZQUFBO0FBR0oiLCJmaWxlIjoicnVsZXMucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaW9uLWNvbnRlbnQge1xyXG4gICAgLS1iYWNrZ3JvdW5kOiAjZjNmYmZlO1xyXG4gIH1cclxuICAuaGVhZGluZ3tcclxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gIH1cclxuICBpb24tY2FyZCB7XHJcbiAgICBtYXJnaW46IDE2cHg7XHJcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XHJcbiAgICBib3gtc2hhZG93OiAwIDNweCAwcHggLTJweCByZ2JhKDAsIDAsIDAsIDApLCAwIDJweCA0cHggMnB4IHJnYmEoMCwgMCwgMCwgMC4wMyksIDAgMXB4IDVweCAwIHJnYmEoMCwgMCwgMCwgMC4xMSk7XHJcbiAgICBwYWRkaW5nOiA4cHg7XHJcbiAgfSJdfQ== */";
      /***/
    },

    /***/
    "uplV":
    /*!*****************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/rules/rules.page.html ***!
      \*****************************************************************************/

    /*! exports provided: default */

    /***/
    function uplV(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-header>\n  <ion-toolbar>\n    <ion-title>Rules & Regulations</ion-title>\n    <ion-buttons slot=\"start\">\n      <ion-button  shape=\"round\"[routerLink]=\"['/quicktour']\">\n        <ion-icon color=\"light\" name=\"arrow-back-outline\"></ion-icon>\n      </ion-button>\n    </ion-buttons>\n  </ion-toolbar>\n\n</ion-header>\n\n<ion-content>\n  <div >\n    <!-- <div *ngIf=\"isRulesAvailable\"> -->\n    <p *ngFor=\"let rule of rules\">\n      {{rule.rule}}\n    </p>\n  </div>\n  <div >\n    <!-- <div *ngIf=\"!isRulesAvailable\"> -->\n    <ion-card  class=\"ion-text-start  data-card \" >\n      <ion-row>\n        <ion-col size=\"12\">\n          <p class=\"date\"><b>No Rules Added</b> </p>         \n        </ion-col>\n      </ion-row>\n    </ion-card>\n  </div>\n</ion-content>\n";
      /***/
    }
  }]);
})();
//# sourceMappingURL=rules-rules-module-es5.js.map