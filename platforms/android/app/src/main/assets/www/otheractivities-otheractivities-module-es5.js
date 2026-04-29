(function () {
  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

  function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return typeof key === "symbol" ? key : String(key); }

  function _toPrimitive(input, hint) { if (typeof input !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (typeof res !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["otheractivities-otheractivities-module"], {
    /***/
    "6lBo":
    /*!*************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/otheractivities/otheractivities.page.html ***!
      \*************************************************************************************************/

    /*! exports provided: default */

    /***/
    function lBo(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-header>\n  <ion-toolbar>\n    <ion-title>Other Activities</ion-title>\n    <ion-buttons slot=\"start\">\n      <ion-button shape=\"round\"  [routerLink]=\"['/quicktour']\">\n        <ion-icon color=\"light\" name=\"arrow-back-outline\"></ion-icon>\n      </ion-button>\n    </ion-buttons>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <div *ngIf=\"isActivityPresent\">\n    <ion-card *ngFor=\"let activity of activities\">\n      <ion-row class=\"card-row card-top-row\">\n        <ion-col size=\"12\" class=\"ion-text-center\">\n          <img src=\"{{activity.activityImg}}\" alt=\"\">\n        </ion-col>\n        <ion-col size=\"12\">\n          <p class=\"age\">{{activity.activity | titlecase}}</p>\n        </ion-col>\n        <!-- <hr>\n          <ion-col size=\"12\">\n            {{}}\n          </ion-col> -->\n      </ion-row>\n    </ion-card>\n  </div>\n  <div *ngIf=\"!isActivityPresent\">\n    <ion-card  class=\"ion-text-start  data-card \" >\n      <ion-row>\n        <ion-col size=\"12\">\n          <p class=\"date\"><b>No Activity Added</b> </p>         \n        </ion-col>\n      </ion-row>\n    </ion-card>\n  </div>\n</ion-content>\n";
      /***/
    },

    /***/
    "JAs7":
    /*!*********************************************************!*\
      !*** ./src/app/otheractivities/otheractivities.page.ts ***!
      \*********************************************************/

    /*! exports provided: OtheractivitiesPage */

    /***/
    function JAs7(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "OtheractivitiesPage", function () {
        return OtheractivitiesPage;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_otheractivities_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./otheractivities.page.html */
      "6lBo");
      /* harmony import */


      var _otheractivities_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./otheractivities.page.scss */
      "tOb2");
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

      var OtheractivitiesPage = /*#__PURE__*/function () {
        function OtheractivitiesPage(router, apiService) {
          _classCallCheck(this, OtheractivitiesPage);

          this.router = router;
          this.apiService = apiService;
          this.isActivityPresent = false;
        }

        _createClass(OtheractivitiesPage, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }, {
          key: "ionViewWillEnter",
          value: function ionViewWillEnter() {
            var _this = this;

            this.apiService.fetchOtherActivities().then(function (data) {
              _this.activities = JSON.parse(data.data);
              _this.isActivityPresent = true;
            })["catch"](function (err) {
              _this.activities = '';
              _this.isActivityPresent = false;
            });
          }
        }, {
          key: "doRefresh",
          value: function doRefresh(event) {
            var _this2 = this;

            this.apiService.fetchOtherActivities().then(function (data) {
              _this2.activities = JSON.parse(data.data);
              _this2.isActivityPresent = true;
              event.target.complete();
            })["catch"](function (err) {
              _this2.activities = '';
              _this2.isActivityPresent = false;
              event.target.complete();
            });
          }
        }]);

        return OtheractivitiesPage;
      }();

      OtheractivitiesPage.ctorParameters = function () {
        return [{
          type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]
        }, {
          type: _api_service__WEBPACK_IMPORTED_MODULE_5__["ApiService"]
        }];
      };

      OtheractivitiesPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-otheractivities',
        template: _raw_loader_otheractivities_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_otheractivities_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
      })], OtheractivitiesPage);
      /***/
    },

    /***/
    "SL9h":
    /*!***********************************************************!*\
      !*** ./src/app/otheractivities/otheractivities.module.ts ***!
      \***********************************************************/

    /*! exports provided: OtheractivitiesPageModule */

    /***/
    function SL9h(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "OtheractivitiesPageModule", function () {
        return OtheractivitiesPageModule;
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


      var _otheractivities_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./otheractivities-routing.module */
      "fWyv");
      /* harmony import */


      var _otheractivities_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./otheractivities.page */
      "JAs7");

      var OtheractivitiesPageModule = /*#__PURE__*/_createClass(function OtheractivitiesPageModule() {
        _classCallCheck(this, OtheractivitiesPageModule);
      });

      OtheractivitiesPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _otheractivities_routing_module__WEBPACK_IMPORTED_MODULE_5__["OtheractivitiesPageRoutingModule"]],
        declarations: [_otheractivities_page__WEBPACK_IMPORTED_MODULE_6__["OtheractivitiesPage"]]
      })], OtheractivitiesPageModule);
      /***/
    },

    /***/
    "fWyv":
    /*!*******************************************************************!*\
      !*** ./src/app/otheractivities/otheractivities-routing.module.ts ***!
      \*******************************************************************/

    /*! exports provided: OtheractivitiesPageRoutingModule */

    /***/
    function fWyv(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "OtheractivitiesPageRoutingModule", function () {
        return OtheractivitiesPageRoutingModule;
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


      var _otheractivities_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./otheractivities.page */
      "JAs7");

      var routes = [{
        path: '',
        component: _otheractivities_page__WEBPACK_IMPORTED_MODULE_3__["OtheractivitiesPage"]
      }];

      var OtheractivitiesPageRoutingModule = /*#__PURE__*/_createClass(function OtheractivitiesPageRoutingModule() {
        _classCallCheck(this, OtheractivitiesPageRoutingModule);
      });

      OtheractivitiesPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
      })], OtheractivitiesPageRoutingModule);
      /***/
    },

    /***/
    "tOb2":
    /*!***********************************************************!*\
      !*** ./src/app/otheractivities/otheractivities.page.scss ***!
      \***********************************************************/

    /*! exports provided: default */

    /***/
    function tOb2(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "ion-content {\n  --background: #f3fbfe;\n}\n\n.heading {\n  font-weight: bold;\n}\n\nimg {\n  width: 90%;\n  margin-top: 5px;\n}\n\nion-card {\n  margin: 16px;\n  border-radius: 5px;\n  box-shadow: 0 3px 0px -2px rgba(0, 0, 0, 0), 0 2px 4px 2px rgba(0, 0, 0, 0.03), 0 1px 5px 0 rgba(0, 0, 0, 0.11);\n  padding: 8px;\n}\n\n.card-row {\n  padding: 12px;\n  padding-bottom: 7px;\n  padding-right: 16px;\n}\n\n.card-top-row {\n  padding: 0;\n}\n\nhr {\n  border-top: 1px dotted #9d9fa6;\n}\n\n.header {\n  color: #9d9fa6;\n  margin-top: 0;\n  font-size: 14px;\n  margin-bottom: 0;\n}\n\n.value {\n  color: #202020;\n  margin-top: 6px;\n  font-size: 12px;\n}\n\n.view-btn {\n  margin-top: 0;\n  text-transform: none;\n}\n\n.age {\n  font-size: 16px;\n  color: #202020;\n  margin-top: 6px;\n  font-weight: bold;\n  margin-bottom: 6px;\n}\n\n.view-txt {\n  font-size: 10px;\n}\n\n.data-row ion-col {\n  padding-left: 0;\n}\n\n.w-100 {\n  width: 100%;\n}\n\n.date {\n  margin-left: 8px;\n  color: #202020;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL290aGVyYWN0aXZpdGllcy5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxxQkFBQTtBQUNGOztBQUNBO0VBQ0UsaUJBQUE7QUFFRjs7QUFFQTtFQUNFLFVBQUE7RUFDQSxlQUFBO0FBQ0Y7O0FBRUE7RUFDRSxZQUFBO0VBQ0Esa0JBQUE7RUFDQSwrR0FBQTtFQUNBLFlBQUE7QUFDRjs7QUFFQTtFQUNFLGFBQUE7RUFDQSxtQkFBQTtFQUNBLG1CQUFBO0FBQ0Y7O0FBRUE7RUFDRSxVQUFBO0FBQ0Y7O0FBRUE7RUFDRSw4QkFBQTtBQUNGOztBQUVBO0VBQ0UsY0FBQTtFQUNBLGFBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7QUFDRjs7QUFHQTtFQUNFLGNBQUE7RUFDQSxlQUFBO0VBQ0EsZUFBQTtBQUFGOztBQUdBO0VBRUUsYUFBQTtFQUNBLG9CQUFBO0FBREY7O0FBSUE7RUFDRSxlQUFBO0VBQ0EsY0FBQTtFQUNBLGVBQUE7RUFDQSxpQkFBQTtFQUNBLGtCQUFBO0FBREY7O0FBS0E7RUFDRSxlQUFBO0FBRkY7O0FBTUU7RUFDRSxlQUFBO0FBSEo7O0FBT0E7RUFDRSxXQUFBO0FBSkY7O0FBT0E7RUFDRSxnQkFBQTtFQUNBLGNBQUE7QUFKRiIsImZpbGUiOiJvdGhlcmFjdGl2aXRpZXMucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaW9uLWNvbnRlbnQge1xyXG4gIC0tYmFja2dyb3VuZDogI2YzZmJmZTtcclxufVxyXG4uaGVhZGluZ3tcclxuICBmb250LXdlaWdodDogYm9sZDtcclxufVxyXG5cclxuXHJcbmltZyB7XHJcbiAgd2lkdGg6IDkwJTtcclxuICBtYXJnaW4tdG9wOiA1cHg7XHJcbn1cclxuXHJcbmlvbi1jYXJkIHtcclxuICBtYXJnaW46IDE2cHg7XHJcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xyXG4gIGJveC1zaGFkb3c6IDAgM3B4IDBweCAtMnB4IHJnYmEoMCwgMCwgMCwgMCksIDAgMnB4IDRweCAycHggcmdiYSgwLCAwLCAwLCAwLjAzKSwgMCAxcHggNXB4IDAgcmdiYSgwLCAwLCAwLCAwLjExKTtcclxuICBwYWRkaW5nOiA4cHg7XHJcbn1cclxuXHJcbi5jYXJkLXJvdyB7XHJcbiAgcGFkZGluZzogMTJweDtcclxuICBwYWRkaW5nLWJvdHRvbTogN3B4O1xyXG4gIHBhZGRpbmctcmlnaHQ6IDE2cHg7XHJcbn1cclxuXHJcbi5jYXJkLXRvcC1yb3cge1xyXG4gIHBhZGRpbmc6IDA7XHJcbn1cclxuXHJcbmhyIHtcclxuICBib3JkZXItdG9wOiAxcHggZG90dGVkICM5ZDlmYTY7XHJcbn1cclxuXHJcbi5oZWFkZXIge1xyXG4gIGNvbG9yOiAjOWQ5ZmE2O1xyXG4gIG1hcmdpbi10b3A6IDA7XHJcbiAgZm9udC1zaXplOiAxNHB4O1xyXG4gIG1hcmdpbi1ib3R0b206IDA7XHJcblxyXG59XHJcblxyXG4udmFsdWUge1xyXG4gIGNvbG9yOiAjMjAyMDIwO1xyXG4gIG1hcmdpbi10b3A6IDZweDtcclxuICBmb250LXNpemU6IDEycHg7XHJcbn1cclxuXHJcbi52aWV3LWJ0biB7XHJcbiAgLy8gaGVpZ2h0OiAzNnB4O1xyXG4gIG1hcmdpbi10b3A6IDA7XHJcbiAgdGV4dC10cmFuc2Zvcm06IG5vbmU7XHJcbn1cclxuXHJcbi5hZ2Uge1xyXG4gIGZvbnQtc2l6ZTogMTZweDtcclxuICBjb2xvcjogIzIwMjAyMDtcclxuICBtYXJnaW4tdG9wOiA2cHg7XHJcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgbWFyZ2luLWJvdHRvbTogNnB4O1xyXG5cclxufVxyXG5cclxuLnZpZXctdHh0IHtcclxuICBmb250LXNpemU6IDEwcHg7XHJcbn1cclxuXHJcbi5kYXRhLXJvdyB7XHJcbiAgaW9uLWNvbCB7XHJcbiAgICBwYWRkaW5nLWxlZnQ6IDA7XHJcbiAgfVxyXG59XHJcblxyXG4udy0xMDAge1xyXG4gIHdpZHRoOiAxMDAlO1xyXG59XHJcblxyXG4uZGF0ZSB7XHJcbiAgbWFyZ2luLWxlZnQ6IDhweDtcclxuICBjb2xvcjogIzIwMjAyMDtcclxufVxyXG4iXX0= */";
      /***/
    }
  }]);
})();
//# sourceMappingURL=otheractivities-otheractivities-module-es5.js.map