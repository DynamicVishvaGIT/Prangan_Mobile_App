(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["notice-notice-module"],{

/***/ "IUlz":
/*!*****************************************!*\
  !*** ./src/app/notice/notice.module.ts ***!
  \*****************************************/
/*! exports provided: NoticePageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NoticePageModule", function() { return NoticePageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _notice_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./notice-routing.module */ "hOG8");
/* harmony import */ var _notice_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./notice.page */ "lzF2");







let NoticePageModule = class NoticePageModule {
};
NoticePageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _notice_routing_module__WEBPACK_IMPORTED_MODULE_5__["NoticePageRoutingModule"]
        ],
        declarations: [_notice_page__WEBPACK_IMPORTED_MODULE_6__["NoticePage"]]
    })
], NoticePageModule);



/***/ }),

/***/ "UxFy":
/*!*****************************************!*\
  !*** ./src/app/notice/notice.page.scss ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("ion-content {\n  --background: #f3fbfe;\n}\n\n.heading {\n  font-weight: bold;\n}\n\nimg {\n  width: 90%;\n  margin-top: 5px;\n}\n\nion-card {\n  margin: 16px;\n  border-radius: 5px;\n  box-shadow: 0 3px 0px -2px rgba(0, 0, 0, 0), 0 2px 4px 2px rgba(0, 0, 0, 0.03), 0 1px 5px 0 rgba(0, 0, 0, 0.11);\n  padding: 8px;\n}\n\n.card-row {\n  padding: 12px;\n  padding-bottom: 7px;\n  padding-right: 16px;\n}\n\n.card-top-row {\n  padding: 0;\n}\n\nhr {\n  border-top: 1px dotted #9d9fa6;\n}\n\n.header {\n  color: #9d9fa6;\n  margin-top: 0;\n  font-size: 14px;\n  margin-bottom: 0;\n}\n\n.value {\n  color: #202020;\n  margin-top: 6px;\n  font-size: 12px;\n}\n\n.view-btn {\n  margin-top: 0;\n  text-transform: none;\n}\n\n.age {\n  font-size: 16px;\n  color: #202020;\n  margin-top: 6px;\n  font-weight: bold;\n  margin-bottom: 6px;\n}\n\n.view-txt {\n  font-size: 10px;\n}\n\n.data-row ion-col {\n  padding-left: 0;\n}\n\n.w-100 {\n  width: 100%;\n}\n\n.date {\n  margin-left: 8px;\n  color: #202020;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL25vdGljZS5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUU7RUFDRSxxQkFBQTtBQUNKOztBQUNFO0VBQ0UsaUJBQUE7QUFFSjs7QUFFRTtFQUNFLFVBQUE7RUFDQSxlQUFBO0FBQ0o7O0FBRUU7RUFDRSxZQUFBO0VBQ0Esa0JBQUE7RUFDQSwrR0FBQTtFQUNBLFlBQUE7QUFDSjs7QUFFRTtFQUNFLGFBQUE7RUFDQSxtQkFBQTtFQUNBLG1CQUFBO0FBQ0o7O0FBRUU7RUFDRSxVQUFBO0FBQ0o7O0FBRUU7RUFDRSw4QkFBQTtBQUNKOztBQUVFO0VBQ0UsY0FBQTtFQUNBLGFBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7QUFDSjs7QUFHRTtFQUNFLGNBQUE7RUFDQSxlQUFBO0VBQ0EsZUFBQTtBQUFKOztBQUdFO0VBRUUsYUFBQTtFQUNBLG9CQUFBO0FBREo7O0FBSUU7RUFDRSxlQUFBO0VBQ0EsY0FBQTtFQUNBLGVBQUE7RUFDQSxpQkFBQTtFQUNBLGtCQUFBO0FBREo7O0FBS0U7RUFDRSxlQUFBO0FBRko7O0FBTUk7RUFDRSxlQUFBO0FBSE47O0FBT0U7RUFDRSxXQUFBO0FBSko7O0FBT0U7RUFDRSxnQkFBQTtFQUNBLGNBQUE7QUFKSiIsImZpbGUiOiJub3RpY2UucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiICBpb24tY29udGVudCB7XHJcbiAgICAtLWJhY2tncm91bmQ6ICNmM2ZiZmU7XHJcbiAgfVxyXG4gIC5oZWFkaW5ne1xyXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgfVxyXG4gIFxyXG4gIFxyXG4gIGltZyB7XHJcbiAgICB3aWR0aDogOTAlO1xyXG4gICAgbWFyZ2luLXRvcDogNXB4O1xyXG4gIH1cclxuICBcclxuICBpb24tY2FyZCB7XHJcbiAgICBtYXJnaW46IDE2cHg7XHJcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XHJcbiAgICBib3gtc2hhZG93OiAwIDNweCAwcHggLTJweCByZ2JhKDAsIDAsIDAsIDApLCAwIDJweCA0cHggMnB4IHJnYmEoMCwgMCwgMCwgMC4wMyksIDAgMXB4IDVweCAwIHJnYmEoMCwgMCwgMCwgMC4xMSk7XHJcbiAgICBwYWRkaW5nOiA4cHg7XHJcbiAgfVxyXG4gIFxyXG4gIC5jYXJkLXJvdyB7XHJcbiAgICBwYWRkaW5nOiAxMnB4O1xyXG4gICAgcGFkZGluZy1ib3R0b206IDdweDtcclxuICAgIHBhZGRpbmctcmlnaHQ6IDE2cHg7XHJcbiAgfVxyXG4gIFxyXG4gIC5jYXJkLXRvcC1yb3cge1xyXG4gICAgcGFkZGluZzogMDtcclxuICB9XHJcbiAgXHJcbiAgaHIge1xyXG4gICAgYm9yZGVyLXRvcDogMXB4IGRvdHRlZCAjOWQ5ZmE2O1xyXG4gIH1cclxuICBcclxuICAuaGVhZGVyIHtcclxuICAgIGNvbG9yOiAjOWQ5ZmE2O1xyXG4gICAgbWFyZ2luLXRvcDogMDtcclxuICAgIGZvbnQtc2l6ZTogMTRweDtcclxuICAgIG1hcmdpbi1ib3R0b206IDA7XHJcbiAgXHJcbiAgfVxyXG4gIFxyXG4gIC52YWx1ZSB7XHJcbiAgICBjb2xvcjogIzIwMjAyMDtcclxuICAgIG1hcmdpbi10b3A6IDZweDtcclxuICAgIGZvbnQtc2l6ZTogMTJweDtcclxuICB9XHJcbiAgXHJcbiAgLnZpZXctYnRuIHtcclxuICAgIC8vIGhlaWdodDogMzZweDtcclxuICAgIG1hcmdpbi10b3A6IDA7XHJcbiAgICB0ZXh0LXRyYW5zZm9ybTogbm9uZTtcclxuICB9XHJcbiAgXHJcbiAgLmFnZSB7XHJcbiAgICBmb250LXNpemU6IDE2cHg7XHJcbiAgICBjb2xvcjogIzIwMjAyMDtcclxuICAgIG1hcmdpbi10b3A6IDZweDtcclxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gICAgbWFyZ2luLWJvdHRvbTogNnB4O1xyXG4gIFxyXG4gIH1cclxuICBcclxuICAudmlldy10eHQge1xyXG4gICAgZm9udC1zaXplOiAxMHB4O1xyXG4gIH1cclxuICBcclxuICAuZGF0YS1yb3cge1xyXG4gICAgaW9uLWNvbCB7XHJcbiAgICAgIHBhZGRpbmctbGVmdDogMDtcclxuICAgIH1cclxuICB9XHJcbiAgXHJcbiAgLnctMTAwIHtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gIH1cclxuICBcclxuICAuZGF0ZSB7XHJcbiAgICBtYXJnaW4tbGVmdDogOHB4O1xyXG4gICAgY29sb3I6ICMyMDIwMjA7XHJcbiAgfVxyXG4gICJdfQ== */");

/***/ }),

/***/ "VTdB":
/*!*******************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/notice/notice.page.html ***!
  \*******************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n  <ion-toolbar>\n    <ion-title>Notice</ion-title>\n    <ion-buttons slot=\"start\">\n      <ion-button shape=\"round\"  [routerLink]=\"['/quicktour']\">\n        <ion-icon color=\"light\" name=\"arrow-back-outline\"></ion-icon>\n      </ion-button>\n    </ion-buttons>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <ion-refresher slot=\"fixed\" (ionRefresh)=\"doRefresh($event)\">\n    <ion-refresher-content></ion-refresher-content>\n  </ion-refresher>\n  <div *ngIf=\"isNoticePresent\">\n  <ion-card *ngFor=\"let notice of notices\">\n    <ion-row class=\"card-row card-top-row\">\n      <ion-col size=\"12\" class=\"ion-text-center\">\n    <img src=\"{{notice.image}}\" alt=\"\">\n      </ion-col>\n      <ion-col size=\"12\">\n        <p class=\"age\">{{notice.title}}</p>\n        <hr>\n        <ion-row class=\"data-row\">\n          <ion-col size=\"12\">\n            {{notice.date}}\n          </ion-col>\n        </ion-row>\n        <hr>\n        <ion-row  class=\"data-row\">\n          <ion-col size=\"12\">\n           {{notice.description}}\n          </ion-col>\n        </ion-row>\n      </ion-col>\n    </ion-row>\n  </ion-card>\n</div>\n<div *ngIf=\"!isNoticePresent\">\n  <ion-card  class=\"ion-text-start  data-card \" >\n    <ion-row>\n      <ion-col size=\"12\">\n        <p class=\"date\"><b>No Notice Added</b> </p>         \n      </ion-col>\n     \n    </ion-row>\n   \n  </ion-card>\n</div>\n</ion-content>\n");

/***/ }),

/***/ "hOG8":
/*!*************************************************!*\
  !*** ./src/app/notice/notice-routing.module.ts ***!
  \*************************************************/
/*! exports provided: NoticePageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NoticePageRoutingModule", function() { return NoticePageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _notice_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./notice.page */ "lzF2");




const routes = [
    {
        path: '',
        component: _notice_page__WEBPACK_IMPORTED_MODULE_3__["NoticePage"]
    }
];
let NoticePageRoutingModule = class NoticePageRoutingModule {
};
NoticePageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], NoticePageRoutingModule);



/***/ }),

/***/ "lzF2":
/*!***************************************!*\
  !*** ./src/app/notice/notice.page.ts ***!
  \***************************************/
/*! exports provided: NoticePage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NoticePage", function() { return NoticePage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_notice_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./notice.page.html */ "VTdB");
/* harmony import */ var _notice_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./notice.page.scss */ "UxFy");
/* harmony import */ var _api_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./../api.service */ "yTNM");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ "fXoL");






let NoticePage = class NoticePage {
    constructor(router, apiService) {
        this.router = router;
        this.apiService = apiService;
        this.isNoticePresent = false;
    }
    ngOnInit() {
    }
    goBack() {
        this.router.navigate(['quicktour']);
    }
    ionViewWillEnter() {
        this.apiService.fetchNotices().then(data => {
            this.notices = JSON.parse(data.data);
            console.log('notices', this.notices);
            this.isNoticePresent = true;
        }).catch(err => {
            this.notices = '';
            this.isNoticePresent = false;
        });
    }
    doRefresh(event) {
        this.apiService.fetchNotices().then(data => {
            this.notices = JSON.parse(data.data);
            console.log('notices', this.notices);
            this.isNoticePresent = true;
            event.target.complete();
        }).catch(err => {
            this.notices = '';
            event.target.complete();
            this.isNoticePresent = false;
        });
    }
};
NoticePage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] },
    { type: _api_service__WEBPACK_IMPORTED_MODULE_3__["ApiService"] }
];
NoticePage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_5__["Component"])({
        selector: 'app-notice',
        template: _raw_loader_notice_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_notice_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], NoticePage);



/***/ })

}]);
//# sourceMappingURL=notice-notice-module-es2015.js.map