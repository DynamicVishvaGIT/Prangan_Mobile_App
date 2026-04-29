(function () {
  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

  function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return typeof key === "symbol" ? key : String(key); }

  function _toPrimitive(input, hint) { if (typeof input !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (typeof res !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["schedule-schedule-module"], {
    /***/
    "3aXv":
    /*!*********************************************!*\
      !*** ./src/app/schedule/schedule.page.scss ***!
      \*********************************************/

    /*! exports provided: default */

    /***/
    function aXv(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "ion-content {\n  --background: #f3fbfe;\n}\n\n.heading {\n  font-weight: bold;\n}\n\nimg {\n  width: 90%;\n  margin-top: 5px;\n}\n\nion-card {\n  margin: 16px;\n  border-radius: 5px;\n  box-shadow: 0 3px 0px -2px rgba(0, 0, 0, 0), 0 2px 4px 2px rgba(0, 0, 0, 0.03), 0 1px 5px 0 rgba(0, 0, 0, 0.11);\n  padding: 8px;\n}\n\n.card-row {\n  padding: 12px;\n  padding-bottom: 7px;\n  padding-right: 16px;\n}\n\n.card-top-row {\n  padding: 0;\n}\n\nhr {\n  border-top: 1px dotted #9d9fa6;\n}\n\n.header {\n  color: #9d9fa6;\n  margin-top: 0;\n  font-size: 14px;\n  margin-bottom: 0;\n}\n\n.value {\n  color: #202020;\n  margin-top: 6px;\n  font-size: 12px;\n}\n\n.view-btn {\n  margin-top: 0;\n  text-transform: none;\n}\n\n.age {\n  font-size: 16px;\n  color: #202020;\n  margin-top: 6px;\n  font-weight: bold;\n  margin-bottom: 6px;\n}\n\n.view-txt {\n  font-size: 10px;\n}\n\n.data-row ion-col {\n  padding-left: 0;\n}\n\n.w-100 {\n  width: 100%;\n}\n\n.date {\n  margin-left: 8px;\n  color: #202020;\n}\n\n.month {\n  margin-left: 12px;\n  font-size: 16px;\n  font-weight: bold;\n}\n\n.schedule_heading {\n  font-weight: bold;\n  font-size: 16px;\n  margin: 0;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NjaGVkdWxlLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLHFCQUFBO0FBQ0o7O0FBQ0U7RUFDRSxpQkFBQTtBQUVKOztBQUVFO0VBQ0UsVUFBQTtFQUNBLGVBQUE7QUFDSjs7QUFFRTtFQUNFLFlBQUE7RUFDQSxrQkFBQTtFQUNBLCtHQUFBO0VBQ0EsWUFBQTtBQUNKOztBQUVFO0VBQ0UsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsbUJBQUE7QUFDSjs7QUFFRTtFQUNFLFVBQUE7QUFDSjs7QUFFRTtFQUNFLDhCQUFBO0FBQ0o7O0FBRUU7RUFDRSxjQUFBO0VBQ0EsYUFBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtBQUNKOztBQUdFO0VBQ0UsY0FBQTtFQUNBLGVBQUE7RUFDQSxlQUFBO0FBQUo7O0FBR0U7RUFFRSxhQUFBO0VBQ0Esb0JBQUE7QUFESjs7QUFJRTtFQUNFLGVBQUE7RUFDQSxjQUFBO0VBQ0EsZUFBQTtFQUNBLGlCQUFBO0VBQ0Esa0JBQUE7QUFESjs7QUFLRTtFQUNFLGVBQUE7QUFGSjs7QUFNSTtFQUNFLGVBQUE7QUFITjs7QUFPRTtFQUNFLFdBQUE7QUFKSjs7QUFPRTtFQUNFLGdCQUFBO0VBQ0EsY0FBQTtBQUpKOztBQU1FO0VBQ0UsaUJBQUE7RUFDQSxlQUFBO0VBQ0EsaUJBQUE7QUFISjs7QUFLRTtFQUNFLGlCQUFBO0VBQ0EsZUFBQTtFQUNBLFNBQUE7QUFGSiIsImZpbGUiOiJzY2hlZHVsZS5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJpb24tY29udGVudCB7XHJcbiAgICAtLWJhY2tncm91bmQ6ICNmM2ZiZmU7XHJcbiAgfVxyXG4gIC5oZWFkaW5ne1xyXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgfVxyXG4gIFxyXG4gIFxyXG4gIGltZyB7XHJcbiAgICB3aWR0aDogOTAlO1xyXG4gICAgbWFyZ2luLXRvcDogNXB4O1xyXG4gIH1cclxuICBcclxuICBpb24tY2FyZCB7XHJcbiAgICBtYXJnaW46IDE2cHg7XHJcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XHJcbiAgICBib3gtc2hhZG93OiAwIDNweCAwcHggLTJweCByZ2JhKDAsIDAsIDAsIDApLCAwIDJweCA0cHggMnB4IHJnYmEoMCwgMCwgMCwgMC4wMyksIDAgMXB4IDVweCAwIHJnYmEoMCwgMCwgMCwgMC4xMSk7XHJcbiAgICBwYWRkaW5nOiA4cHg7XHJcbiAgfVxyXG4gIFxyXG4gIC5jYXJkLXJvdyB7XHJcbiAgICBwYWRkaW5nOiAxMnB4O1xyXG4gICAgcGFkZGluZy1ib3R0b206IDdweDtcclxuICAgIHBhZGRpbmctcmlnaHQ6IDE2cHg7XHJcbiAgfVxyXG4gIFxyXG4gIC5jYXJkLXRvcC1yb3cge1xyXG4gICAgcGFkZGluZzogMDtcclxuICB9XHJcbiAgXHJcbiAgaHIge1xyXG4gICAgYm9yZGVyLXRvcDogMXB4IGRvdHRlZCAjOWQ5ZmE2O1xyXG4gIH1cclxuICBcclxuICAuaGVhZGVyIHtcclxuICAgIGNvbG9yOiAjOWQ5ZmE2O1xyXG4gICAgbWFyZ2luLXRvcDogMDtcclxuICAgIGZvbnQtc2l6ZTogMTRweDtcclxuICAgIG1hcmdpbi1ib3R0b206IDA7XHJcbiAgXHJcbiAgfVxyXG4gIFxyXG4gIC52YWx1ZSB7XHJcbiAgICBjb2xvcjogIzIwMjAyMDtcclxuICAgIG1hcmdpbi10b3A6IDZweDtcclxuICAgIGZvbnQtc2l6ZTogMTJweDtcclxuICB9XHJcbiAgXHJcbiAgLnZpZXctYnRuIHtcclxuICAgIC8vIGhlaWdodDogMzZweDtcclxuICAgIG1hcmdpbi10b3A6IDA7XHJcbiAgICB0ZXh0LXRyYW5zZm9ybTogbm9uZTtcclxuICB9XHJcbiAgXHJcbiAgLmFnZSB7XHJcbiAgICBmb250LXNpemU6IDE2cHg7XHJcbiAgICBjb2xvcjogIzIwMjAyMDtcclxuICAgIG1hcmdpbi10b3A6IDZweDtcclxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gICAgbWFyZ2luLWJvdHRvbTogNnB4O1xyXG4gIFxyXG4gIH1cclxuICBcclxuICAudmlldy10eHQge1xyXG4gICAgZm9udC1zaXplOiAxMHB4O1xyXG4gIH1cclxuICBcclxuICAuZGF0YS1yb3cge1xyXG4gICAgaW9uLWNvbCB7XHJcbiAgICAgIHBhZGRpbmctbGVmdDogMDtcclxuICAgIH1cclxuICB9XHJcbiAgXHJcbiAgLnctMTAwIHtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gIH1cclxuICBcclxuICAuZGF0ZSB7XHJcbiAgICBtYXJnaW4tbGVmdDogOHB4O1xyXG4gICAgY29sb3I6ICMyMDIwMjA7XHJcbiAgfVxyXG4gIC5tb250aHtcclxuICAgIG1hcmdpbi1sZWZ0OiAxMnB4O1xyXG4gICAgZm9udC1zaXplOiAxNnB4O1xyXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgfVxyXG4gIC5zY2hlZHVsZV9oZWFkaW5ne1xyXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgICBmb250LXNpemU6IDE2cHg7XHJcbiAgICBtYXJnaW46IDA7XHJcbiAgfVxyXG4gICJdfQ== */";
      /***/
    },

    /***/
    "L0xO":
    /*!*********************************************!*\
      !*** ./src/app/schedule/schedule.module.ts ***!
      \*********************************************/

    /*! exports provided: SchedulePageModule */

    /***/
    function L0xO(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "SchedulePageModule", function () {
        return SchedulePageModule;
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


      var _schedule_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./schedule-routing.module */
      "R8YS");
      /* harmony import */


      var _schedule_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./schedule.page */
      "Nnbm");
      /* harmony import */


      var _ionic_super_tabs_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @ionic-super-tabs/angular */
      "k6Iy");

      var SchedulePageModule = /*#__PURE__*/_createClass(function SchedulePageModule() {
        _classCallCheck(this, SchedulePageModule);
      });

      SchedulePageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _schedule_routing_module__WEBPACK_IMPORTED_MODULE_5__["SchedulePageRoutingModule"], _ionic_super_tabs_angular__WEBPACK_IMPORTED_MODULE_7__["SuperTabsModule"]],
        declarations: [_schedule_page__WEBPACK_IMPORTED_MODULE_6__["SchedulePage"]]
      })], SchedulePageModule);
      /***/
    },

    /***/
    "Nnbm":
    /*!*******************************************!*\
      !*** ./src/app/schedule/schedule.page.ts ***!
      \*******************************************/

    /*! exports provided: SchedulePage */

    /***/
    function Nnbm(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "SchedulePage", function () {
        return SchedulePage;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_schedule_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./schedule.page.html */
      "sZ5U");
      /* harmony import */


      var _schedule_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./schedule.page.scss */
      "3aXv");
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
      /* harmony import */


      var _ionic_storage__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @ionic/storage */
      "e8h1");

      var SchedulePage = /*#__PURE__*/function () {
        function SchedulePage(router, apiService, storage) {
          _classCallCheck(this, SchedulePage);

          this.router = router;
          this.apiService = apiService;
          this.storage = storage;
        }

        _createClass(SchedulePage, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }, {
          key: "ionViewWillEnter",
          value: function ionViewWillEnter() {
            var _this = this;

            this.storage.get('userType').then(function (userType) {
              _this.userType = userType;

              if (userType === 'Preschool') {
                var classId = 'Class_6';
                var type = 'PlayGroup';
              } else {
                var classId = 'Class_5';
                var type = 'Daycare';
              }

              _this.storage.get('user').then(function (data) {
                var user = JSON.parse(data);
                _this.userid = user.userid;

                _this.apiService.userDetails(user.id, userType).then(function (data1) {
                  _this.profile = JSON.parse(data1.data);

                  _this.apiService.fetchSchedule(type, classId, _this.profile.branch_id).then(function (data2) {
                    _this.schedule = JSON.parse(data2.data);
                    console.log('sch', _this.schedule);
                  })["catch"](function (err) {
                    _this.schedule = '';
                    console.log('sch', err);
                  });
                });
              });
            });
          }
        }]);

        return SchedulePage;
      }();

      SchedulePage.ctorParameters = function () {
        return [{
          type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]
        }, {
          type: _api_service__WEBPACK_IMPORTED_MODULE_5__["ApiService"]
        }, {
          type: _ionic_storage__WEBPACK_IMPORTED_MODULE_6__["Storage"]
        }];
      };

      SchedulePage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-schedule',
        template: _raw_loader_schedule_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_schedule_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
      })], SchedulePage);
      /***/
    },

    /***/
    "R8YS":
    /*!*****************************************************!*\
      !*** ./src/app/schedule/schedule-routing.module.ts ***!
      \*****************************************************/

    /*! exports provided: SchedulePageRoutingModule */

    /***/
    function R8YS(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "SchedulePageRoutingModule", function () {
        return SchedulePageRoutingModule;
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


      var _schedule_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./schedule.page */
      "Nnbm");

      var routes = [{
        path: '',
        component: _schedule_page__WEBPACK_IMPORTED_MODULE_3__["SchedulePage"]
      }];

      var SchedulePageRoutingModule = /*#__PURE__*/_createClass(function SchedulePageRoutingModule() {
        _classCallCheck(this, SchedulePageRoutingModule);
      });

      SchedulePageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
      })], SchedulePageRoutingModule);
      /***/
    },

    /***/
    "sZ5U":
    /*!***********************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/schedule/schedule.page.html ***!
      \***********************************************************************************/

    /*! exports provided: default */

    /***/
    function sZ5U(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-header>\n  <ion-toolbar>\n    <ion-title>Schedule</ion-title>\n    <ion-buttons slot=\"start\">\n      <ion-button shape=\"round\"  [routerLink]=\"['/quicktour']\">\n        <ion-icon color=\"light\" name=\"arrow-back-outline\"></ion-icon>\n      </ion-button>\n    </ion-buttons>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <super-tabs>\n    <super-tabs-toolbar slot=\"top\" >\n      <super-tab-button >\n        <ion-label>Playgroup</ion-label>    \n      </super-tab-button>\n      <super-tab-button>\n        <ion-label>Daycare</ion-label>    \n      </super-tab-button>\n    </super-tabs-toolbar>\n    <super-tabs-container>\n      <super-tab>\n        <ion-content>\n          <p class=\"month\">February 2022</p>  \n        <ion-card>\n          <p class=\"schedule_heading\">Maths</p>\n          <p>Date : 05-02-2022</p>\n          <p>Time : 09:00 AM - 11:00 AM </p>\n        </ion-card>  \n        <ion-card>\n          <p class=\"schedule_heading\">English</p>\n          <p>Date : 05-02-2022</p>\n          <p>Time : 11:00 AM - 01:00 PM </p>\n        </ion-card>  \n        <ion-card>\n          <p class=\"schedule_heading\">Lunch</p>\n          <p>Date : 05-02-2022</p>\n          <p>Time : 01:00 PM </p>\n        </ion-card>  \n        </ion-content>\n      </super-tab>\n      <super-tab>\n        <ion-content>\n          <p class=\"month\">February 2022</p>  \n          <ion-card>\n            <p class=\"schedule_heading\">Geography</p>\n            <p>Date : 05-02-2022</p>\n            <p>Time : 09:00 AM - 11:00 AM </p>\n          </ion-card>  \n          <ion-card>\n            <p class=\"schedule_heading\">English</p>\n            <p>Date : 05-02-2022</p>\n            <p>Time : 11:00 AM - 01:00 PM </p>\n          </ion-card>  \n          <ion-card>\n            <p class=\"schedule_heading\">Lunch</p>\n            <p>Date : 05-02-2022</p>\n            <p>Time : 01:00 PM - 02:00 PM</p>\n          </ion-card> \n        </ion-content> \n      </super-tab>\n    </super-tabs-container>\n  </super-tabs>\n</ion-content>\n";
      /***/
    }
  }]);
})();
//# sourceMappingURL=schedule-schedule-module-es5.js.map