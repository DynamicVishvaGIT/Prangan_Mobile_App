(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["events-events-module"],{

/***/ "0DrO":
/*!*****************************************!*\
  !*** ./src/app/events/events.page.scss ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("ion-content {\n  --background:#f3fbfe;\n}\n\nimg {\n  width: 80%;\n  margin-top: 27px;\n}\n\nion-card {\n  margin: 20px;\n  border-radius: 5px;\n  box-shadow: 0 3px 0px -2px rgba(0, 0, 0, 0), 0 2px 4px 2px rgba(0, 0, 0, 0.03), 0 1px 5px 0 rgba(0, 0, 0, 0.11);\n}\n\n.card-row {\n  padding: 12px;\n  padding-bottom: 7px;\n  padding-right: 16px;\n}\n\n.card-top-row {\n  padding: 0;\n}\n\nhr {\n  border-top: 1px dotted #9d9fa6;\n  margin-left: -18px;\n  margin-right: 10px;\n}\n\n.header {\n  color: #9d9fa6;\n  margin-top: 0;\n  font-size: 11px;\n  margin-bottom: 0;\n}\n\n.value {\n  color: #202020;\n  margin-top: 6px;\n  font-size: 11px;\n}\n\n.view-btn {\n  margin-top: 0;\n  text-transform: none;\n}\n\n.age {\n  font-size: 16px;\n  color: #202020;\n  margin-top: 6px;\n  font-weight: bold;\n  margin-bottom: 6px;\n}\n\n.view-txt {\n  font-size: 10px;\n}\n\n.data-row ion-col {\n  padding-left: 0;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL2V2ZW50cy5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxvQkFBQTtBQUNKOztBQUNBO0VBQ0ksVUFBQTtFQUNBLGdCQUFBO0FBRUo7O0FBQ0U7RUFDRSxZQUFBO0VBQ0Esa0JBQUE7RUFDQSwrR0FBQTtBQUVKOztBQUFFO0VBQ0ksYUFBQTtFQUNBLG1CQUFBO0VBQ0EsbUJBQUE7QUFHTjs7QUFERTtFQUNFLFVBQUE7QUFJSjs7QUFGRTtFQUNFLDhCQUFBO0VBQ0Esa0JBQUE7RUFDQSxrQkFBQTtBQUtKOztBQUhFO0VBQ0UsY0FBQTtFQUNBLGFBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7QUFNSjs7QUFIRTtFQUNFLGNBQUE7RUFDQSxlQUFBO0VBQ0EsZUFBQTtBQU1KOztBQUpFO0VBRUUsYUFBQTtFQUNBLG9CQUFBO0FBTUo7O0FBSEU7RUFDRSxlQUFBO0VBQ0EsY0FBQTtFQUNBLGVBQUE7RUFDQSxpQkFBQTtFQUNBLGtCQUFBO0FBTUo7O0FBSEU7RUFDSSxlQUFBO0FBTU47O0FBSEk7RUFDSSxlQUFBO0FBTVIiLCJmaWxlIjoiZXZlbnRzLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImlvbi1jb250ZW50IHtcclxuICAgIC0tYmFja2dyb3VuZDojZjNmYmZlO1xyXG59XHJcbmltZyB7XHJcbiAgICB3aWR0aDogODAlO1xyXG4gICAgbWFyZ2luLXRvcDogMjdweDtcclxuXHJcbiAgfVxyXG4gIGlvbi1jYXJke1xyXG4gICAgbWFyZ2luOiAyMHB4O1xyXG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xyXG4gICAgYm94LXNoYWRvdzogMCAzcHggMHB4IC0ycHggcmdiYSgwLCAwLCAwLCAwKSwgMCAycHggNHB4IDJweCByZ2IoMCAwIDAgLyAzJSksIDAgMXB4IDVweCAwIHJnYmEoMCwgMCwgMCwgMC4xMSk7XHJcbiAgfVxyXG4gIC5jYXJkLXJvd3tcclxuICAgICAgcGFkZGluZzogMTJweDtcclxuICAgICAgcGFkZGluZy1ib3R0b206IDdweDtcclxuICAgICAgcGFkZGluZy1yaWdodDogMTZweDtcclxuICB9XHJcbiAgLmNhcmQtdG9wLXJvd3tcclxuICAgIHBhZGRpbmc6MDtcclxuICB9XHJcbiAgaHJ7XHJcbiAgICBib3JkZXItdG9wOiAxcHggZG90dGVkICM5ZDlmYTY7XHJcbiAgICBtYXJnaW4tbGVmdDogLTE4cHg7XHJcbiAgICBtYXJnaW4tcmlnaHQ6IDEwcHg7XHJcbiAgfVxyXG4gIC5oZWFkZXJ7XHJcbiAgICBjb2xvcjogIzlkOWZhNjtcclxuICAgIG1hcmdpbi10b3A6IDA7XHJcbiAgICBmb250LXNpemU6IDExcHg7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAwO1xyXG5cclxuICB9XHJcbiAgLnZhbHVle1xyXG4gICAgY29sb3I6ICMyMDIwMjA7XHJcbiAgICBtYXJnaW4tdG9wOiA2cHg7XHJcbiAgICBmb250LXNpemU6IDExcHg7XHJcbiAgfVxyXG4gIC52aWV3LWJ0bntcclxuICAgIC8vIGhlaWdodDogMzZweDtcclxuICAgIG1hcmdpbi10b3A6IDA7XHJcbiAgICB0ZXh0LXRyYW5zZm9ybTogbm9uZTtcclxuICB9XHJcbiAgXHJcbiAgLmFnZXtcclxuICAgIGZvbnQtc2l6ZTogMTZweDtcclxuICAgIGNvbG9yOiAjMjAyMDIwO1xyXG4gICAgbWFyZ2luLXRvcDogNnB4O1xyXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgICBtYXJnaW4tYm90dG9tOiA2cHg7XHJcblxyXG4gIH1cclxuICAudmlldy10eHR7XHJcbiAgICAgIGZvbnQtc2l6ZTogMTBweDtcclxuICB9XHJcbiAgLmRhdGEtcm93e1xyXG4gICAgaW9uLWNvbHtcclxuICAgICAgICBwYWRkaW5nLWxlZnQ6IDA7XHJcbiAgICB9XHJcbiAgfSJdfQ== */");

/***/ }),

/***/ "BktZ":
/*!*******************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/events/events.page.html ***!
  \*******************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n  <ion-toolbar>\n    <ion-title>Events</ion-title>\n    <ion-buttons slot=\"start\">\n      <ion-button  shape=\"round\"[routerLink]=\"['/quicktour']\"  >\n        <ion-icon name=\"arrow-back-sharp\" color=\"light\"></ion-icon>\n      </ion-button>\n    </ion-buttons>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <ion-card>\n    <ion-row class=\"card-row card-top-row\">\n      <ion-col size=\"3\" >\n    <img src=\"../../assets/dashboard/01_events.png\" alt=\"\">\n      </ion-col>\n      <ion-col size=\"9\">\n        <p class=\"age\">Summer Camp</p>\n        <hr>\n        <ion-row class=\"data-row\">\n          <ion-col size=\"12\">\n            <p class=\"header\">Date</p>\n            <p class=\"value\">19 Apr-22 May 2021</p>\n          </ion-col>\n         \n        </ion-row>\n        <ion-row  class=\"data-row\">\n          <ion-col size=\"9\">\n           \n          </ion-col>\n          <ion-col size=\"3\">\n            <ion-button  shape=\"round\"(click)=\"openDetails('Summer Camp')\" size=\"small\" class=\"view-btn\" color=\"primary\"><p class=\"view-txt\">View</p></ion-button>\n          </ion-col>\n        </ion-row>\n      </ion-col>\n     \n    </ion-row>\n  \n  </ion-card>\n  <ion-card>\n    <ion-row class=\"card-row card-top-row\">\n      <ion-col size=\"3\" >\n    <img src=\"../../assets/dashboard/02_events.png\" alt=\"\">\n      </ion-col>\n      <ion-col size=\"9\">\n        <p class=\"age\">Holi Color Making</p>\n        <hr>\n        <ion-row class=\"data-row\">\n          <ion-col size=\"12\">\n            <p class=\"header\">Date</p>\n            <p class=\"value\">27th March 2021</p>\n          </ion-col>\n         \n        </ion-row>\n        <ion-row  class=\"data-row\">\n          <ion-col size=\"9\">\n           \n          </ion-col>\n          <ion-col size=\"3\">\n            <ion-button  shape=\"round\"(click)=\"openDetails('Holi Color Making')\" size=\"small\" class=\"view-btn\" color=\"primary\"><p class=\"view-txt\">View</p></ion-button>\n          </ion-col>\n        </ion-row>\n      </ion-col>\n     \n    </ion-row>\n  \n  </ion-card>\n\n \n</ion-content>\n");

/***/ }),

/***/ "QFKT":
/*!***************************************!*\
  !*** ./src/app/events/events.page.ts ***!
  \***************************************/
/*! exports provided: EventsPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EventsPage", function() { return EventsPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_events_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./events.page.html */ "BktZ");
/* harmony import */ var _events_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./events.page.scss */ "0DrO");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ "fXoL");





let EventsPage = class EventsPage {
    constructor(router) {
        this.router = router;
    }
    ngOnInit() {
    }
    openDetails(event) {
        this.router.navigate(['eventdetails', event]);
    }
};
EventsPage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] }
];
EventsPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_4__["Component"])({
        selector: 'app-events',
        template: _raw_loader_events_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_events_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], EventsPage);



/***/ }),

/***/ "kE+t":
/*!*************************************************!*\
  !*** ./src/app/events/events-routing.module.ts ***!
  \*************************************************/
/*! exports provided: EventsPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EventsPageRoutingModule", function() { return EventsPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _events_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./events.page */ "QFKT");




const routes = [
    {
        path: '',
        component: _events_page__WEBPACK_IMPORTED_MODULE_3__["EventsPage"]
    }
];
let EventsPageRoutingModule = class EventsPageRoutingModule {
};
EventsPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], EventsPageRoutingModule);



/***/ }),

/***/ "pTcb":
/*!*****************************************!*\
  !*** ./src/app/events/events.module.ts ***!
  \*****************************************/
/*! exports provided: EventsPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EventsPageModule", function() { return EventsPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _events_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./events-routing.module */ "kE+t");
/* harmony import */ var _events_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./events.page */ "QFKT");







let EventsPageModule = class EventsPageModule {
};
EventsPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _events_routing_module__WEBPACK_IMPORTED_MODULE_5__["EventsPageRoutingModule"]
        ],
        declarations: [_events_page__WEBPACK_IMPORTED_MODULE_6__["EventsPage"]]
    })
], EventsPageModule);



/***/ })

}]);
//# sourceMappingURL=events-events-module-es2015.js.map