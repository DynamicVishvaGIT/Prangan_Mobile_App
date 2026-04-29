(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["services-services-module"],{

/***/ "334H":
/*!*********************************************!*\
  !*** ./src/app/services/services.module.ts ***!
  \*********************************************/
/*! exports provided: ServicesPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ServicesPageModule", function() { return ServicesPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _services_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./services-routing.module */ "fD4K");
/* harmony import */ var _services_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./services.page */ "O7F2");







let ServicesPageModule = class ServicesPageModule {
};
ServicesPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _services_routing_module__WEBPACK_IMPORTED_MODULE_5__["ServicesPageRoutingModule"]
        ],
        declarations: [_services_page__WEBPACK_IMPORTED_MODULE_6__["ServicesPage"]]
    })
], ServicesPageModule);



/***/ }),

/***/ "EV+0":
/*!***********************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/services/services.page.html ***!
  \***********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n  <ion-toolbar>\n    <ion-title>Services</ion-title>\n    <ion-buttons slot=\"start\">\n      <ion-button shape=\"round\" [routerLink]=\"['/quicktour']\"  >\n        <ion-icon color=\"light\" name=\"arrow-back-outline\"></ion-icon>\n      </ion-button>\n    </ion-buttons>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <div *ngIf=\"services?.length>0\">\n    <ion-card *ngFor=\"let service of services\">\n      <ion-row class=\"card-row card-top-row\">\n        <ion-col size=\"12\" class=\"ion-text-center\">\n          <img src=\"{{service.serviceImg}}\" alt=\"\">\n        </ion-col>\n        <ion-col size=\"12\">\n          <p class=\"age\">{{service.service | titlecase }}</p>\n        </ion-col>\n        <!-- <ion-col size=\"12\">\n          <p class=\"age\">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec bibendum lectus mi, eu pulvinar nunc hendrerit at. Etiam sed diam sed ante egestas aliquam. Nulla purus velit, aliquet et lectus at, accumsan luctus orci. Sed rutrum rhoncus elit, ac volutpat ex hendrerit a. Fusce dictum vulputate facilisis. Duis pellentesque, mi aliquam egestas mollis, arcu nisi tempus massa, at imperdiet quam lacus a mi. Aliquam semper tincidunt enim. Aenean luctus, turpis quis auctor ultrices, nibh est auctor velit, id congue mauris d</p>\n        </ion-col> -->\n      </ion-row>\n    </ion-card>\n  </div>\n  <div *ngIf=\"services?.length==0\">\n    <ion-card  class=\"ion-text-start  data-card \" >\n      <ion-row>\n        <ion-col size=\"12\">\n          <p class=\"date\"><b>No Services Added</b> </p>         \n        </ion-col>\n      </ion-row>\n    </ion-card>\n  </div>\n</ion-content>\n");

/***/ }),

/***/ "O7F2":
/*!*******************************************!*\
  !*** ./src/app/services/services.page.ts ***!
  \*******************************************/
/*! exports provided: ServicesPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ServicesPage", function() { return ServicesPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_services_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./services.page.html */ "EV+0");
/* harmony import */ var _services_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./services.page.scss */ "odIF");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _api_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../api.service */ "yTNM");






let ServicesPage = class ServicesPage {
    constructor(router, apiService) {
        this.router = router;
        this.apiService = apiService;
        this.isServicesPresent = false;
    }
    ngOnInit() {
    }
    ionViewWillEnter() {
        this.apiService.fetchServices().then(data => {
            this.services = JSON.parse(data.data);
            this.isServicesPresent = true;
        }).catch(err => {
            this.services = '';
            this.isServicesPresent = false;
        });
    }
    doRefresh(event) {
        this.apiService.fetchServices().then(data => {
            this.services = JSON.parse(data.data);
            this.isServicesPresent = true;
            event.target.complete();
        }).catch(err => {
            this.services = '';
            this.isServicesPresent = false;
            event.target.complete();
        });
    }
};
ServicesPage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] },
    { type: _api_service__WEBPACK_IMPORTED_MODULE_5__["ApiService"] }
];
ServicesPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-services',
        template: _raw_loader_services_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_services_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], ServicesPage);



/***/ }),

/***/ "fD4K":
/*!*****************************************************!*\
  !*** ./src/app/services/services-routing.module.ts ***!
  \*****************************************************/
/*! exports provided: ServicesPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ServicesPageRoutingModule", function() { return ServicesPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _services_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./services.page */ "O7F2");




const routes = [
    {
        path: '',
        component: _services_page__WEBPACK_IMPORTED_MODULE_3__["ServicesPage"]
    }
];
let ServicesPageRoutingModule = class ServicesPageRoutingModule {
};
ServicesPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], ServicesPageRoutingModule);



/***/ }),

/***/ "odIF":
/*!*********************************************!*\
  !*** ./src/app/services/services.page.scss ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("ion-content {\n  --background: #f3fbfe;\n}\n\n.heading {\n  font-weight: bold;\n}\n\nimg {\n  width: 90%;\n  margin-top: 5px;\n}\n\nion-card {\n  margin: 16px;\n  border-radius: 5px;\n  box-shadow: 0 3px 0px -2px rgba(0, 0, 0, 0), 0 2px 4px 2px rgba(0, 0, 0, 0.03), 0 1px 5px 0 rgba(0, 0, 0, 0.11);\n  padding: 8px;\n}\n\n.card-row {\n  padding: 12px;\n  padding-bottom: 7px;\n  padding-right: 16px;\n}\n\n.card-top-row {\n  padding: 0;\n}\n\nhr {\n  border-top: 1px dotted #9d9fa6;\n}\n\n.header {\n  color: #9d9fa6;\n  margin-top: 0;\n  font-size: 14px;\n  margin-bottom: 0;\n}\n\n.value {\n  color: #202020;\n  margin-top: 6px;\n  font-size: 12px;\n}\n\n.view-btn {\n  margin-top: 0;\n  text-transform: none;\n}\n\n.age {\n  font-size: 16px;\n  color: #202020;\n  margin-top: 6px;\n  font-weight: bold;\n  margin-bottom: 6px;\n}\n\n.view-txt {\n  font-size: 10px;\n}\n\n.data-row ion-col {\n  padding-left: 0;\n}\n\n.w-100 {\n  width: 100%;\n}\n\n.date {\n  margin-left: 8px;\n  color: #202020;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NlcnZpY2VzLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLHFCQUFBO0FBQ0o7O0FBQ0U7RUFDRSxpQkFBQTtBQUVKOztBQUVFO0VBQ0UsVUFBQTtFQUNBLGVBQUE7QUFDSjs7QUFFRTtFQUNFLFlBQUE7RUFDQSxrQkFBQTtFQUNBLCtHQUFBO0VBQ0EsWUFBQTtBQUNKOztBQUVFO0VBQ0UsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsbUJBQUE7QUFDSjs7QUFFRTtFQUNFLFVBQUE7QUFDSjs7QUFFRTtFQUNFLDhCQUFBO0FBQ0o7O0FBRUU7RUFDRSxjQUFBO0VBQ0EsYUFBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtBQUNKOztBQUdFO0VBQ0UsY0FBQTtFQUNBLGVBQUE7RUFDQSxlQUFBO0FBQUo7O0FBR0U7RUFFRSxhQUFBO0VBQ0Esb0JBQUE7QUFESjs7QUFJRTtFQUNFLGVBQUE7RUFDQSxjQUFBO0VBQ0EsZUFBQTtFQUNBLGlCQUFBO0VBQ0Esa0JBQUE7QUFESjs7QUFLRTtFQUNFLGVBQUE7QUFGSjs7QUFNSTtFQUNFLGVBQUE7QUFITjs7QUFPRTtFQUNFLFdBQUE7QUFKSjs7QUFPRTtFQUNFLGdCQUFBO0VBQ0EsY0FBQTtBQUpKIiwiZmlsZSI6InNlcnZpY2VzLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImlvbi1jb250ZW50IHtcclxuICAgIC0tYmFja2dyb3VuZDogI2YzZmJmZTtcclxuICB9XHJcbiAgLmhlYWRpbmd7XHJcbiAgICBmb250LXdlaWdodDogYm9sZDtcclxuICB9XHJcbiAgXHJcbiAgXHJcbiAgaW1nIHtcclxuICAgIHdpZHRoOiA5MCU7XHJcbiAgICBtYXJnaW4tdG9wOiA1cHg7XHJcbiAgfVxyXG4gIFxyXG4gIGlvbi1jYXJkIHtcclxuICAgIG1hcmdpbjogMTZweDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcclxuICAgIGJveC1zaGFkb3c6IDAgM3B4IDBweCAtMnB4IHJnYmEoMCwgMCwgMCwgMCksIDAgMnB4IDRweCAycHggcmdiYSgwLCAwLCAwLCAwLjAzKSwgMCAxcHggNXB4IDAgcmdiYSgwLCAwLCAwLCAwLjExKTtcclxuICAgIHBhZGRpbmc6IDhweDtcclxuICB9XHJcbiAgXHJcbiAgLmNhcmQtcm93IHtcclxuICAgIHBhZGRpbmc6IDEycHg7XHJcbiAgICBwYWRkaW5nLWJvdHRvbTogN3B4O1xyXG4gICAgcGFkZGluZy1yaWdodDogMTZweDtcclxuICB9XHJcbiAgXHJcbiAgLmNhcmQtdG9wLXJvdyB7XHJcbiAgICBwYWRkaW5nOiAwO1xyXG4gIH1cclxuICBcclxuICBociB7XHJcbiAgICBib3JkZXItdG9wOiAxcHggZG90dGVkICM5ZDlmYTY7XHJcbiAgfVxyXG4gIFxyXG4gIC5oZWFkZXIge1xyXG4gICAgY29sb3I6ICM5ZDlmYTY7XHJcbiAgICBtYXJnaW4tdG9wOiAwO1xyXG4gICAgZm9udC1zaXplOiAxNHB4O1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMDtcclxuICBcclxuICB9XHJcbiAgXHJcbiAgLnZhbHVlIHtcclxuICAgIGNvbG9yOiAjMjAyMDIwO1xyXG4gICAgbWFyZ2luLXRvcDogNnB4O1xyXG4gICAgZm9udC1zaXplOiAxMnB4O1xyXG4gIH1cclxuICBcclxuICAudmlldy1idG4ge1xyXG4gICAgLy8gaGVpZ2h0OiAzNnB4O1xyXG4gICAgbWFyZ2luLXRvcDogMDtcclxuICAgIHRleHQtdHJhbnNmb3JtOiBub25lO1xyXG4gIH1cclxuICBcclxuICAuYWdlIHtcclxuICAgIGZvbnQtc2l6ZTogMTZweDtcclxuICAgIGNvbG9yOiAjMjAyMDIwO1xyXG4gICAgbWFyZ2luLXRvcDogNnB4O1xyXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgICBtYXJnaW4tYm90dG9tOiA2cHg7XHJcbiAgXHJcbiAgfVxyXG4gIFxyXG4gIC52aWV3LXR4dCB7XHJcbiAgICBmb250LXNpemU6IDEwcHg7XHJcbiAgfVxyXG4gIFxyXG4gIC5kYXRhLXJvdyB7XHJcbiAgICBpb24tY29sIHtcclxuICAgICAgcGFkZGluZy1sZWZ0OiAwO1xyXG4gICAgfVxyXG4gIH1cclxuICBcclxuICAudy0xMDAge1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgfVxyXG4gIFxyXG4gIC5kYXRlIHtcclxuICAgIG1hcmdpbi1sZWZ0OiA4cHg7XHJcbiAgICBjb2xvcjogIzIwMjAyMDtcclxuICB9XHJcbiAgIl19 */");

/***/ })

}]);
//# sourceMappingURL=services-services-module-es2015.js.map