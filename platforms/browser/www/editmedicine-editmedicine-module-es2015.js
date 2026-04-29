(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["editmedicine-editmedicine-module"],{

/***/ "6ABL":
/*!*****************************************************!*\
  !*** ./src/app/editmedicine/editmedicine.module.ts ***!
  \*****************************************************/
/*! exports provided: EditmedicinePageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EditmedicinePageModule", function() { return EditmedicinePageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _editmedicine_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./editmedicine-routing.module */ "Niac");
/* harmony import */ var _editmedicine_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./editmedicine.page */ "HWDZ");







let EditmedicinePageModule = class EditmedicinePageModule {
};
EditmedicinePageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _editmedicine_routing_module__WEBPACK_IMPORTED_MODULE_5__["EditmedicinePageRoutingModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"]
        ],
        declarations: [_editmedicine_page__WEBPACK_IMPORTED_MODULE_6__["EditmedicinePage"]]
    })
], EditmedicinePageModule);



/***/ }),

/***/ "Niac":
/*!*************************************************************!*\
  !*** ./src/app/editmedicine/editmedicine-routing.module.ts ***!
  \*************************************************************/
/*! exports provided: EditmedicinePageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EditmedicinePageRoutingModule", function() { return EditmedicinePageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _editmedicine_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./editmedicine.page */ "HWDZ");




const routes = [
    {
        path: '',
        component: _editmedicine_page__WEBPACK_IMPORTED_MODULE_3__["EditmedicinePage"]
    }
];
let EditmedicinePageRoutingModule = class EditmedicinePageRoutingModule {
};
EditmedicinePageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], EditmedicinePageRoutingModule);



/***/ })

}]);
//# sourceMappingURL=editmedicine-editmedicine-module-es2015.js.map