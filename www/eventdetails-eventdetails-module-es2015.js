(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["eventdetails-eventdetails-module"],{

/***/ "1gaA":
/*!*****************************************************!*\
  !*** ./src/app/eventdetails/eventdetails.page.scss ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("ion-content {\n  --background:#f3fbfe;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL2V2ZW50ZGV0YWlscy5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxvQkFBQTtBQUNKIiwiZmlsZSI6ImV2ZW50ZGV0YWlscy5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJpb24tY29udGVudCB7XHJcbiAgICAtLWJhY2tncm91bmQ6I2YzZmJmZTtcclxufSJdfQ== */");

/***/ }),

/***/ "1qDM":
/*!*******************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/eventdetails/eventdetails.page.html ***!
  \*******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n  <ion-toolbar>\n    <ion-title *ngIf=\"event\">{{event|titlecase}}</ion-title>\n    <ion-buttons slot=\"start\">\n      <ion-button  shape=\"round\"[routerLink]=\"['/events']\"  >\n        <ion-icon name=\"arrow-back-sharp\" color=\"light\"></ion-icon>\n      </ion-button>\n    </ion-buttons>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <div class=\"padding-ionic\">\n    <ion-row >\n      <ion-col size=\"6\">\n        <ion-img src=\"../../assets/events/01.png\"></ion-img>\n      </ion-col>\n      <ion-col size=\"6\">\n        <ion-img src=\"../../assets/events/02.png\"></ion-img>\n      </ion-col>\n      <ion-col size=\"6\">\n        <ion-img src=\"../../assets/events/03.png\"></ion-img>\n      </ion-col>\n      <ion-col size=\"6\">\n        <ion-img src=\"../../assets/events/04.png\"></ion-img>\n      </ion-col>\n    </ion-row>\n  </div>\n</ion-content>\n");

/***/ }),

/***/ "a2y5":
/*!***************************************************!*\
  !*** ./src/app/eventdetails/eventdetails.page.ts ***!
  \***************************************************/
/*! exports provided: EventdetailsPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EventdetailsPage", function() { return EventdetailsPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_eventdetails_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./eventdetails.page.html */ "1qDM");
/* harmony import */ var _eventdetails_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./eventdetails.page.scss */ "1gaA");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "tyNb");





let EventdetailsPage = class EventdetailsPage {
    constructor(route) {
        this.route = route;
    }
    ngOnInit() {
    }
    ionViewDidEnter() {
        this.route.paramMap.subscribe(params => {
            this.event = params.get('event');
        });
    }
};
EventdetailsPage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"] }
];
EventdetailsPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-eventdetails',
        template: _raw_loader_eventdetails_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_eventdetails_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], EventdetailsPage);



/***/ }),

/***/ "njBr":
/*!*************************************************************!*\
  !*** ./src/app/eventdetails/eventdetails-routing.module.ts ***!
  \*************************************************************/
/*! exports provided: EventdetailsPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EventdetailsPageRoutingModule", function() { return EventdetailsPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _eventdetails_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./eventdetails.page */ "a2y5");




const routes = [
    {
        path: '',
        component: _eventdetails_page__WEBPACK_IMPORTED_MODULE_3__["EventdetailsPage"]
    }
];
let EventdetailsPageRoutingModule = class EventdetailsPageRoutingModule {
};
EventdetailsPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], EventdetailsPageRoutingModule);



/***/ }),

/***/ "zzI9":
/*!*****************************************************!*\
  !*** ./src/app/eventdetails/eventdetails.module.ts ***!
  \*****************************************************/
/*! exports provided: EventdetailsPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EventdetailsPageModule", function() { return EventdetailsPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _eventdetails_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./eventdetails-routing.module */ "njBr");
/* harmony import */ var _eventdetails_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./eventdetails.page */ "a2y5");







let EventdetailsPageModule = class EventdetailsPageModule {
};
EventdetailsPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _eventdetails_routing_module__WEBPACK_IMPORTED_MODULE_5__["EventdetailsPageRoutingModule"]
        ],
        declarations: [_eventdetails_page__WEBPACK_IMPORTED_MODULE_6__["EventdetailsPage"]]
    })
], EventdetailsPageModule);



/***/ })

}]);
//# sourceMappingURL=eventdetails-eventdetails-module-es2015.js.map