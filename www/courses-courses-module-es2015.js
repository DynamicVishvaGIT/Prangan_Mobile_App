(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["courses-courses-module"],{

/***/ "I93C":
/*!***************************************************!*\
  !*** ./src/app/courses/courses-routing.module.ts ***!
  \***************************************************/
/*! exports provided: CoursesPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CoursesPageRoutingModule", function() { return CoursesPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _courses_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./courses.page */ "utW2");




const routes = [
    {
        path: '',
        component: _courses_page__WEBPACK_IMPORTED_MODULE_3__["CoursesPage"]
    }
];
let CoursesPageRoutingModule = class CoursesPageRoutingModule {
};
CoursesPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], CoursesPageRoutingModule);



/***/ }),

/***/ "mHEJ":
/*!*******************************************!*\
  !*** ./src/app/courses/courses.page.scss ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("ion-content {\n  --background:#f3fbfe;\n}\n\nimg {\n  width: 100%;\n  margin-top: 27px;\n}\n\nion-card {\n  margin: 20px;\n  border-radius: 5px;\n  box-shadow: 0 3px 0px -2px rgba(0, 0, 0, 0), 0 2px 4px 2px rgba(0, 0, 0, 0.03), 0 1px 5px 0 rgba(0, 0, 0, 0.11);\n}\n\n.card-row {\n  padding: 12px;\n  padding-bottom: 7px;\n  padding-right: 16px;\n}\n\n.card-top-row {\n  padding: 0;\n}\n\nhr {\n  border-top: 1px dotted #9d9fa6;\n  margin-left: -18px;\n  margin-right: 10px;\n}\n\n.header {\n  color: #9d9fa6;\n  margin-top: 0;\n  font-size: 11px;\n  margin-bottom: 0;\n}\n\n.value {\n  color: #202020;\n  margin-top: 6px;\n  font-size: 11px;\n}\n\n.view-btn {\n  margin-top: 0;\n  text-transform: none;\n}\n\n.age {\n  font-size: 16px;\n  color: #202020;\n  margin-top: 6px;\n  font-weight: bold;\n  margin-bottom: 6px;\n}\n\n.view-txt {\n  font-size: 10px;\n}\n\n.data-row ion-col {\n  padding-left: 0;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL2NvdXJzZXMucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksb0JBQUE7QUFDSjs7QUFDQTtFQUNJLFdBQUE7RUFDQSxnQkFBQTtBQUVKOztBQUNFO0VBQ0UsWUFBQTtFQUNBLGtCQUFBO0VBQ0EsK0dBQUE7QUFFSjs7QUFBRTtFQUNJLGFBQUE7RUFDQSxtQkFBQTtFQUNBLG1CQUFBO0FBR047O0FBREU7RUFDRSxVQUFBO0FBSUo7O0FBRkU7RUFDRSw4QkFBQTtFQUNBLGtCQUFBO0VBQ0Esa0JBQUE7QUFLSjs7QUFIRTtFQUNFLGNBQUE7RUFDQSxhQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0FBTUo7O0FBSEU7RUFDRSxjQUFBO0VBQ0EsZUFBQTtFQUNBLGVBQUE7QUFNSjs7QUFKRTtFQUVFLGFBQUE7RUFDQSxvQkFBQTtBQU1KOztBQUhFO0VBQ0UsZUFBQTtFQUNBLGNBQUE7RUFDQSxlQUFBO0VBQ0EsaUJBQUE7RUFDQSxrQkFBQTtBQU1KOztBQUhFO0VBQ0ksZUFBQTtBQU1OOztBQUhJO0VBQ0ksZUFBQTtBQU1SIiwiZmlsZSI6ImNvdXJzZXMucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaW9uLWNvbnRlbnQge1xyXG4gICAgLS1iYWNrZ3JvdW5kOiNmM2ZiZmU7XHJcbn1cclxuaW1nIHtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgbWFyZ2luLXRvcDogMjdweDtcclxuXHJcbiAgfVxyXG4gIGlvbi1jYXJke1xyXG4gICAgbWFyZ2luOiAyMHB4O1xyXG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xyXG4gICAgYm94LXNoYWRvdzogMCAzcHggMHB4IC0ycHggcmdiYSgwLCAwLCAwLCAwKSwgMCAycHggNHB4IDJweCByZ2IoMCAwIDAgLyAzJSksIDAgMXB4IDVweCAwIHJnYmEoMCwgMCwgMCwgMC4xMSk7XHJcbiAgfVxyXG4gIC5jYXJkLXJvd3tcclxuICAgICAgcGFkZGluZzogMTJweDtcclxuICAgICAgcGFkZGluZy1ib3R0b206IDdweDtcclxuICAgICAgcGFkZGluZy1yaWdodDogMTZweDtcclxuICB9XHJcbiAgLmNhcmQtdG9wLXJvd3tcclxuICAgIHBhZGRpbmc6MDtcclxuICB9XHJcbiAgaHJ7XHJcbiAgICBib3JkZXItdG9wOiAxcHggZG90dGVkICM5ZDlmYTY7XHJcbiAgICBtYXJnaW4tbGVmdDogLTE4cHg7XHJcbiAgICBtYXJnaW4tcmlnaHQ6IDEwcHg7XHJcbiAgfVxyXG4gIC5oZWFkZXJ7XHJcbiAgICBjb2xvcjogIzlkOWZhNjtcclxuICAgIG1hcmdpbi10b3A6IDA7XHJcbiAgICBmb250LXNpemU6IDExcHg7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAwO1xyXG5cclxuICB9XHJcbiAgLnZhbHVle1xyXG4gICAgY29sb3I6ICMyMDIwMjA7XHJcbiAgICBtYXJnaW4tdG9wOiA2cHg7XHJcbiAgICBmb250LXNpemU6IDExcHg7XHJcbiAgfVxyXG4gIC52aWV3LWJ0bntcclxuICAgIC8vIGhlaWdodDogMzZweDtcclxuICAgIG1hcmdpbi10b3A6IDA7XHJcbiAgICB0ZXh0LXRyYW5zZm9ybTogbm9uZTtcclxuICB9XHJcbiAgXHJcbiAgLmFnZXtcclxuICAgIGZvbnQtc2l6ZTogMTZweDtcclxuICAgIGNvbG9yOiAjMjAyMDIwO1xyXG4gICAgbWFyZ2luLXRvcDogNnB4O1xyXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgICBtYXJnaW4tYm90dG9tOiA2cHg7XHJcblxyXG4gIH1cclxuICAudmlldy10eHR7XHJcbiAgICAgIGZvbnQtc2l6ZTogMTBweDtcclxuICB9XHJcbiAgLmRhdGEtcm93e1xyXG4gICAgaW9uLWNvbHtcclxuICAgICAgICBwYWRkaW5nLWxlZnQ6IDA7XHJcbiAgICB9XHJcbiAgfSJdfQ== */");

/***/ }),

/***/ "o+MO":
/*!*********************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/courses/courses.page.html ***!
  \*********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n  <ion-toolbar>\n    <ion-title>Courses</ion-title>\n    <ion-buttons slot=\"start\">\n      <ion-button  shape=\"round\"[routerLink]=\"['/quicktour']\">\n        <ion-icon color=\"light\" name=\"arrow-back-outline\"></ion-icon>\n      </ion-button>\n    </ion-buttons>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n \n  <ion-card>\n    <ion-row class=\"card-row card-top-row\">\n      <ion-col size=\"3\" >\n    <img src=\"../../assets/courses/02_Playgroup.png\" alt=\"\">\n      </ion-col>\n      <ion-col size=\"9\">\n        <p class=\"age\">Playgroup</p>\n        <hr>\n        <ion-row class=\"data-row\">\n          <ion-col size=\"12\">\n            <p class=\"header\">Age Criteria</p>\n            <p class=\"value\">24 Months  as on 31st July 2021</p>\n          </ion-col>\n         \n        </ion-row>\n        <!-- <ion-row  class=\"data-row\">\n          <ion-col size=\"9\">\n           \n          </ion-col>\n          <ion-col size=\"3\">\n            <ion-button  shape=\"round\"size=\"small\" class=\"view-btn\" color=\"primary\"><p class=\"view-txt\">View</p></ion-button>\n          </ion-col>\n        </ion-row> -->\n      </ion-col>\n     \n    </ion-row>\n  \n  </ion-card>\n  <ion-card>\n    <ion-row class=\"card-row card-top-row\">\n      <ion-col size=\"3\" >\n    <img src=\"../../assets/courses/03_Nursery.png\" alt=\"\">\n      </ion-col>\n      <ion-col size=\"9\">\n        <p class=\"age\">Nursery</p>\n        <hr>\n        <ion-row class=\"data-row\">\n          <ion-col size=\"12\">\n            <p class=\"header\">Age Criteria</p>\n            <p class=\"value\">2.8 Yrs  as on 31st July 2021</p>\n          </ion-col>\n         \n        </ion-row>\n        <!-- <ion-row  class=\"data-row\">\n          <ion-col size=\"9\">\n           \n          </ion-col>\n          <ion-col size=\"3\">\n            <ion-button  shape=\"round\"size=\"small\" class=\"view-btn\" color=\"primary\"><p class=\"view-txt\">View</p></ion-button>\n          </ion-col>\n        </ion-row> -->\n      </ion-col>\n     \n    </ion-row>\n  \n  </ion-card>\n  <ion-card>\n    <ion-row class=\"card-row card-top-row\">\n      <ion-col size=\"3\" >\n    <img src=\"../../assets/courses/04_Jr. Kg.png\" alt=\"\">\n      </ion-col>\n      <ion-col size=\"9\">\n        <p class=\"age\">Jr.Kg</p>\n        <hr>\n        <ion-row class=\"data-row\">\n          <ion-col size=\"12\">\n            <p class=\"header\">Age Criteria</p>\n            <p class=\"value\">2.8 Yrs as on 31st July 2021</p>\n          </ion-col>\n         \n        </ion-row>\n        <!-- <ion-row  class=\"data-row\">\n          <ion-col size=\"9\">\n           \n          </ion-col>\n          <ion-col size=\"3\">\n            <ion-button  shape=\"round\"size=\"small\" class=\"view-btn\" color=\"primary\"><p class=\"view-txt\">View</p></ion-button>\n          </ion-col>\n        </ion-row> -->\n      </ion-col>\n     \n    </ion-row>\n  \n  </ion-card>\n  <ion-card>\n    <ion-row class=\"card-row card-top-row\">\n      <ion-col size=\"3\" >\n    <img src=\"../../assets/courses/05_Sr. Kg.png\" alt=\"\">\n      </ion-col>\n      <ion-col size=\"9\">\n        <p class=\"age\">Sr.Kg</p>\n        <hr>\n        <ion-row class=\"data-row\">\n          <ion-col size=\"12\">\n            <p class=\"header\">Age Criteria</p>\n            <p class=\"value\">2.8 Yrs as on 31st July 2021</p>\n          </ion-col>\n         \n        </ion-row>\n        <!-- <ion-row  class=\"data-row\">\n          <ion-col size=\"9\">\n           \n          </ion-col>\n          <ion-col size=\"3\">\n            <ion-button  shape=\"round\"size=\"small\" class=\"view-btn\" color=\"primary\"><p class=\"view-txt\">View</p></ion-button>\n          </ion-col>\n        </ion-row> -->\n      </ion-col>\n     \n    </ion-row>\n  \n  </ion-card>\n  \n \n \n</ion-content>\n");

/***/ }),

/***/ "sU/i":
/*!*******************************************!*\
  !*** ./src/app/courses/courses.module.ts ***!
  \*******************************************/
/*! exports provided: CoursesPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CoursesPageModule", function() { return CoursesPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _courses_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./courses-routing.module */ "I93C");
/* harmony import */ var _courses_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./courses.page */ "utW2");







let CoursesPageModule = class CoursesPageModule {
};
CoursesPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _courses_routing_module__WEBPACK_IMPORTED_MODULE_5__["CoursesPageRoutingModule"]
        ],
        declarations: [_courses_page__WEBPACK_IMPORTED_MODULE_6__["CoursesPage"]]
    })
], CoursesPageModule);



/***/ }),

/***/ "utW2":
/*!*****************************************!*\
  !*** ./src/app/courses/courses.page.ts ***!
  \*****************************************/
/*! exports provided: CoursesPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CoursesPage", function() { return CoursesPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_courses_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./courses.page.html */ "o+MO");
/* harmony import */ var _courses_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./courses.page.scss */ "mHEJ");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");




let CoursesPage = class CoursesPage {
    constructor() { }
    ngOnInit() {
    }
};
CoursesPage.ctorParameters = () => [];
CoursesPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-courses',
        template: _raw_loader_courses_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_courses_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], CoursesPage);



/***/ })

}]);
//# sourceMappingURL=courses-courses-module-es2015.js.map