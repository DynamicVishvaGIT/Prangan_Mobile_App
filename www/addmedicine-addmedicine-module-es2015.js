(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["addmedicine-addmedicine-module"],{

/***/ "791s":
/*!***************************************************!*\
  !*** ./src/app/addmedicine/addmedicine.module.ts ***!
  \***************************************************/
/*! exports provided: AddmedicinePageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddmedicinePageModule", function() { return AddmedicinePageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _addmedicine_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./addmedicine-routing.module */ "T1Ao");
/* harmony import */ var _addmedicine_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./addmedicine.page */ "wUQ3");
/* harmony import */ var ion_bottom_sheet__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ion-bottom-sheet */ "umRu");








let AddmedicinePageModule = class AddmedicinePageModule {
};
AddmedicinePageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _addmedicine_routing_module__WEBPACK_IMPORTED_MODULE_5__["AddmedicinePageRoutingModule"],
            ion_bottom_sheet__WEBPACK_IMPORTED_MODULE_7__["IonBottomSheetModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"]
        ],
        declarations: [_addmedicine_page__WEBPACK_IMPORTED_MODULE_6__["AddmedicinePage"]]
    })
], AddmedicinePageModule);



/***/ }),

/***/ "T1Ao":
/*!***********************************************************!*\
  !*** ./src/app/addmedicine/addmedicine-routing.module.ts ***!
  \***********************************************************/
/*! exports provided: AddmedicinePageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddmedicinePageRoutingModule", function() { return AddmedicinePageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _addmedicine_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./addmedicine.page */ "wUQ3");




const routes = [
    {
        path: '',
        component: _addmedicine_page__WEBPACK_IMPORTED_MODULE_3__["AddmedicinePage"]
    }
];
let AddmedicinePageRoutingModule = class AddmedicinePageRoutingModule {
};
AddmedicinePageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], AddmedicinePageRoutingModule);



/***/ }),

/***/ "VMUn":
/*!***************************************************!*\
  !*** ./src/app/addmedicine/addmedicine.page.scss ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("ion-content {\n  --background: #f3fbfe;\n}\n\n.heading {\n  font-weight: bold;\n}\n\n.restrict_div {\n  background: #0ea4d9;\n}\n\n.edit_div {\n  background: #00c35c;\n}\n\n.delete_div {\n  background: #ff3131;\n}\n\nimg {\n  width: 18%;\n  margin-top: 5px;\n}\n\nion-card {\n  margin: 5px;\n  border-radius: 5px;\n  box-shadow: 0 3px 0px -2px rgba(0, 0, 0, 0), 0 2px 4px 2px rgba(0, 0, 0, 0.03), 0 1px 5px 0 rgba(0, 0, 0, 0.11);\n  padding: 8px;\n}\n\n.card-row {\n  padding: 12px;\n  padding-bottom: 7px;\n  padding-right: 16px;\n}\n\n.card-top-row {\n  padding: 0;\n}\n\nhr {\n  border-top: 1px dotted #9d9fa6;\n  margin-left: -18px;\n  margin-right: 10px;\n}\n\n.header {\n  color: #9d9fa6;\n  margin-top: 0;\n  font-size: 11px;\n  margin-bottom: 0;\n}\n\n.value {\n  color: #202020;\n  margin-top: 6px;\n  font-size: 11px;\n}\n\n.view-btn {\n  margin-top: 0;\n  text-transform: none;\n}\n\n.age {\n  font-size: 16px;\n  color: #202020;\n  margin-top: 6px;\n  font-weight: bold;\n  margin-bottom: 6px;\n}\n\n.view-txt {\n  font-size: 10px;\n}\n\n.data-row ion-col {\n  padding-left: 0;\n}\n\n.w-100 {\n  width: 100%;\n}\n\n.date {\n  margin-left: 8px;\n  color: #202020;\n}\n\nion-fab {\n  margin-bottom: 0%;\n  margin-right: 2%;\n}\n\nion-fab ion-fab-button {\n  width: 40px;\n  height: 40px;\n}\n\n.heading-1 {\n  color: #676767;\n  margin-bottom: 0;\n  font-size: 16px;\n}\n\n.heading {\n  color: #9b9ca6;\n  margin-bottom: 0;\n  font-size: 14px;\n}\n\nion-label {\n  color: #9b9ca6;\n  font-size: 14px;\n}\n\nion-input {\n  border: 1px solid #9b9ca6;\n  border-radius: 5px;\n  --padding-start: 5px !important;\n  height: 35px;\n}\n\nion-textarea {\n  border: 1px solid #9b9ca6;\n  border-radius: 5px;\n  --padding-start: 5px !important;\n}\n\nion-datetime {\n  border: 1px solid #9b9ca6;\n  border-radius: 5px;\n  --padding-start: 5px !important;\n  width: 100%;\n  height: 35px;\n}\n\nion-item {\n  --padding-start: 0;\n  --ripple-color: transparent;\n  --background-activated: transparent;\n  --background-activated-opacity:transparent;\n  --background-focused: transparent;\n  --background-focused-opacity:transparent;\n  --background-hover: transparent;\n  --background-hover-opacity:transparent;\n}\n\nion-item ion-label {\n  font-size: 12px;\n  color: #9b9ca6;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL2FkZG1lZGljaW5lLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLHFCQUFBO0FBQ0o7O0FBRUU7RUFDRSxpQkFBQTtBQUNKOztBQUNFO0VBQ0UsbUJBQUE7QUFFSjs7QUFBRTtFQUNFLG1CQUFBO0FBR0o7O0FBREU7RUFDRSxtQkFBQTtBQUlKOztBQURFO0VBQ0UsVUFBQTtFQUNBLGVBQUE7QUFJSjs7QUFERTtFQUNFLFdBQUE7RUFDQSxrQkFBQTtFQUNBLCtHQUFBO0VBQ0EsWUFBQTtBQUlKOztBQURFO0VBQ0UsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsbUJBQUE7QUFJSjs7QUFERTtFQUNFLFVBQUE7QUFJSjs7QUFERTtFQUNFLDhCQUFBO0VBQ0Esa0JBQUE7RUFDQSxrQkFBQTtBQUlKOztBQURFO0VBQ0UsY0FBQTtFQUNBLGFBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7QUFJSjs7QUFBRTtFQUNFLGNBQUE7RUFDQSxlQUFBO0VBQ0EsZUFBQTtBQUdKOztBQUFFO0VBRUUsYUFBQTtFQUNBLG9CQUFBO0FBRUo7O0FBQ0U7RUFDRSxlQUFBO0VBQ0EsY0FBQTtFQUNBLGVBQUE7RUFDQSxpQkFBQTtFQUNBLGtCQUFBO0FBRUo7O0FBRUU7RUFDRSxlQUFBO0FBQ0o7O0FBR0k7RUFDRSxlQUFBO0FBQU47O0FBSUU7RUFDRSxXQUFBO0FBREo7O0FBSUU7RUFDRSxnQkFBQTtFQUNBLGNBQUE7QUFESjs7QUFJRTtFQUNFLGlCQUFBO0VBRUEsZ0JBQUE7QUFGSjs7QUFHSTtFQUNJLFdBQUE7RUFDQSxZQUFBO0FBRFI7O0FBS0U7RUFDRSxjQUFBO0VBQ0EsZ0JBQUE7RUFDQSxlQUFBO0FBRko7O0FBSUE7RUFDSSxjQUFBO0VBQ0EsZ0JBQUE7RUFDQSxlQUFBO0FBREo7O0FBR0E7RUFDSSxjQUFBO0VBQ0EsZUFBQTtBQUFKOztBQUVBO0VBQ0kseUJBQUE7RUFDQSxrQkFBQTtFQUNBLCtCQUFBO0VBQ0EsWUFBQTtBQUNKOztBQUNBO0VBQ0kseUJBQUE7RUFDQSxrQkFBQTtFQUNBLCtCQUFBO0FBRUo7O0FBQUE7RUFDSSx5QkFBQTtFQUNBLGtCQUFBO0VBQ0EsK0JBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtBQUdKOztBQUFBO0VBRUksa0JBQUE7RUFDQSwyQkFBQTtFQUNBLG1DQUFBO0VBQ0EsMENBQUE7RUFDQSxpQ0FBQTtFQUNBLHdDQUFBO0VBQ0EsK0JBQUE7RUFDQSxzQ0FBQTtBQUVKOztBQUFJO0VBQ0ksZUFBQTtFQUNBLGNBQUE7QUFFUiIsImZpbGUiOiJhZGRtZWRpY2luZS5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJpb24tY29udGVudCB7XHJcbiAgICAtLWJhY2tncm91bmQ6ICNmM2ZiZmU7XHJcbiAgfVxyXG4gIFxyXG4gIC5oZWFkaW5ne1xyXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgfVxyXG4gIC5yZXN0cmljdF9kaXZ7XHJcbiAgICBiYWNrZ3JvdW5kOiAjMGVhNGQ5O1xyXG4gIH1cclxuICAuZWRpdF9kaXZ7XHJcbiAgICBiYWNrZ3JvdW5kOiAjMDBjMzVjO1xyXG4gIH1cclxuICAuZGVsZXRlX2RpdntcclxuICAgIGJhY2tncm91bmQ6ICNmZjMxMzE7XHJcbiAgfVxyXG4gIFxyXG4gIGltZyB7XHJcbiAgICB3aWR0aDogMTglO1xyXG4gICAgbWFyZ2luLXRvcDogNXB4O1xyXG4gIH1cclxuICBcclxuICBpb24tY2FyZCB7XHJcbiAgICBtYXJnaW46IDVweDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcclxuICAgIGJveC1zaGFkb3c6IDAgM3B4IDBweCAtMnB4IHJnYmEoMCwgMCwgMCwgMCksIDAgMnB4IDRweCAycHggcmdiKDAgMCAwIC8gMyUpLCAwIDFweCA1cHggMCByZ2JhKDAsIDAsIDAsIDAuMTEpO1xyXG4gICAgcGFkZGluZzogOHB4O1xyXG4gIH1cclxuICBcclxuICAuY2FyZC1yb3cge1xyXG4gICAgcGFkZGluZzogMTJweDtcclxuICAgIHBhZGRpbmctYm90dG9tOiA3cHg7XHJcbiAgICBwYWRkaW5nLXJpZ2h0OiAxNnB4O1xyXG4gIH1cclxuICBcclxuICAuY2FyZC10b3Atcm93IHtcclxuICAgIHBhZGRpbmc6IDA7XHJcbiAgfVxyXG4gIFxyXG4gIGhyIHtcclxuICAgIGJvcmRlci10b3A6IDFweCBkb3R0ZWQgIzlkOWZhNjtcclxuICAgIG1hcmdpbi1sZWZ0OiAtMThweDtcclxuICAgIG1hcmdpbi1yaWdodDogMTBweDtcclxuICB9XHJcbiAgXHJcbiAgLmhlYWRlciB7XHJcbiAgICBjb2xvcjogIzlkOWZhNjtcclxuICAgIG1hcmdpbi10b3A6IDA7XHJcbiAgICBmb250LXNpemU6IDExcHg7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAwO1xyXG4gIFxyXG4gIH1cclxuICBcclxuICAudmFsdWUge1xyXG4gICAgY29sb3I6ICMyMDIwMjA7XHJcbiAgICBtYXJnaW4tdG9wOiA2cHg7XHJcbiAgICBmb250LXNpemU6IDExcHg7XHJcbiAgfVxyXG4gIFxyXG4gIC52aWV3LWJ0biB7XHJcbiAgICAvLyBoZWlnaHQ6IDM2cHg7XHJcbiAgICBtYXJnaW4tdG9wOiAwO1xyXG4gICAgdGV4dC10cmFuc2Zvcm06IG5vbmU7XHJcbiAgfVxyXG4gIFxyXG4gIC5hZ2Uge1xyXG4gICAgZm9udC1zaXplOiAxNnB4O1xyXG4gICAgY29sb3I6ICMyMDIwMjA7XHJcbiAgICBtYXJnaW4tdG9wOiA2cHg7XHJcbiAgICBmb250LXdlaWdodDogYm9sZDtcclxuICAgIG1hcmdpbi1ib3R0b206IDZweDtcclxuICBcclxuICB9XHJcbiAgXHJcbiAgLnZpZXctdHh0IHtcclxuICAgIGZvbnQtc2l6ZTogMTBweDtcclxuICB9XHJcbiAgXHJcbiAgLmRhdGEtcm93IHtcclxuICAgIGlvbi1jb2wge1xyXG4gICAgICBwYWRkaW5nLWxlZnQ6IDA7XHJcbiAgICB9XHJcbiAgfVxyXG4gIFxyXG4gIC53LTEwMCB7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICB9XHJcbiAgXHJcbiAgLmRhdGUge1xyXG4gICAgbWFyZ2luLWxlZnQ6IDhweDtcclxuICAgIGNvbG9yOiAjMjAyMDIwO1xyXG4gIH1cclxuICBcclxuICBpb24tZmFie1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMCU7XHJcbiAgICAvLyBtYXJnaW4tcmlnaHQ6IDE4cHg7XHJcbiAgICBtYXJnaW4tcmlnaHQ6IDIlO1xyXG4gICAgaW9uLWZhYi1idXR0b24ge1xyXG4gICAgICAgIHdpZHRoOiA0MHB4O1xyXG4gICAgICAgIGhlaWdodDogNDBweDtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIC5oZWFkaW5nLTF7XHJcbiAgICBjb2xvcjogIzY3Njc2NztcclxuICAgIG1hcmdpbi1ib3R0b206IDA7XHJcbiAgICBmb250LXNpemU6IDE2cHg7XHJcbn1cclxuLmhlYWRpbmd7XHJcbiAgICBjb2xvcjogIzliOWNhNjtcclxuICAgIG1hcmdpbi1ib3R0b206IDA7XHJcbiAgICBmb250LXNpemU6IDE0cHg7XHJcbn1cclxuaW9uLWxhYmVse1xyXG4gICAgY29sb3I6ICM5YjljYTY7XHJcbiAgICBmb250LXNpemU6IDE0cHg7XHJcbn1cclxuaW9uLWlucHV0IHtcclxuICAgIGJvcmRlcjogMXB4IHNvbGlkICM5YjljYTY7XHJcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XHJcbiAgICAtLXBhZGRpbmctc3RhcnQ6IDVweCAhaW1wb3J0YW50O1xyXG4gICAgaGVpZ2h0OjM1cHg7XHJcbn1cclxuaW9uLXRleHRhcmVhe1xyXG4gICAgYm9yZGVyOiAxcHggc29saWQgIzliOWNhNjtcclxuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcclxuICAgIC0tcGFkZGluZy1zdGFydDogNXB4ICFpbXBvcnRhbnQ7XHJcbn1cclxuaW9uLWRhdGV0aW1le1xyXG4gICAgYm9yZGVyOiAxcHggc29saWQgIzliOWNhNjtcclxuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcclxuICAgIC0tcGFkZGluZy1zdGFydDogNXB4ICFpbXBvcnRhbnQ7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGhlaWdodDozNXB4O1xyXG5cclxufVxyXG5pb24taXRlbXtcclxuICAgIC8vIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjNjc3NDgzO1xyXG4gICAgLS1wYWRkaW5nLXN0YXJ0OiAwO1xyXG4gICAgLS1yaXBwbGUtY29sb3I6IHRyYW5zcGFyZW50O1xyXG4gICAgLS1iYWNrZ3JvdW5kLWFjdGl2YXRlZDogdHJhbnNwYXJlbnQ7XHJcbiAgICAtLWJhY2tncm91bmQtYWN0aXZhdGVkLW9wYWNpdHk6dHJhbnNwYXJlbnQ7XHJcbiAgICAtLWJhY2tncm91bmQtZm9jdXNlZDogdHJhbnNwYXJlbnQ7XHJcbiAgICAtLWJhY2tncm91bmQtZm9jdXNlZC1vcGFjaXR5OnRyYW5zcGFyZW50O1xyXG4gICAgLS1iYWNrZ3JvdW5kLWhvdmVyICA6IHRyYW5zcGFyZW50O1xyXG4gICAgLS1iYWNrZ3JvdW5kLWhvdmVyLW9wYWNpdHkgIDp0cmFuc3BhcmVudDtcclxuXHJcbiAgICBpb24tbGFiZWwge1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMTJweDtcclxuICAgICAgICBjb2xvcjogIzliOWNhNjtcclxuXHJcbiAgICB9XHJcbn0iXX0= */");

/***/ }),

/***/ "WYWL":
/*!*****************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/addmedicine/addmedicine.page.html ***!
  \*****************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n  <ion-toolbar>\n    <ion-title>Medicine</ion-title>\n    <ion-buttons slot=\"start\">\n      <ion-button  shape=\"round\" [routerLink]=\"['/medicines']\" routerLinkActive=\"router-link-active\" >\n        <ion-icon color=\"light\" name=\"arrow-back-outline\"></ion-icon>\n      </ion-button>\n    </ion-buttons>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <div class=\"padding-ionic\" *ngIf=\"medicines\">\n    <ion-card  *ngFor=\"let medicine of medicines\">\n      <ion-row class=\"card-row card-top-row\"  >\n      <ion-col size=\"12\">\n        <ion-label class=\"heading\">{{medicine.tabName |titlecase}}</ion-label>\n      </ion-col>\n     \n      </ion-row>\n      <ion-row class=\"card-row card-top-row\" >\n      <ion-col size=\"6\">\n        <p class=\"heading\">Morning Time</p>\n        <p class=\"heading\">Afternoon Time</p>\n        <p class=\"heading\">Evening Time</p>\n      </ion-col>\n      <ion-col size=\"6\" class=\"ion-text-start\">\n        <p >{{medicine.morningTime || 'N/A'}}</p>\n        <p >{{medicine.afternoonTime || 'N/A'}}</p>\n        <p >{{medicine.eveningTime || 'N/A'}}</p>\n        \n      </ion-col>\n      </ion-row>\n      <hr>\n      <ion-row class=\"card-row card-top-row\" >\n        <ion-col size=\"6\">\n          <ion-label class=\"heading\">Medicine Quantity</ion-label>\n        </ion-col>\n        <ion-col size=\"6\" class=\"ion-text-start\">\n          <ion-label>{{medicine.quantity || 'N/A'}}</ion-label>\n        </ion-col>\n        </ion-row>\n        <hr>\n        <ion-row class=\"card-row card-top-row\" >\n          <ion-col size=\"6\">\n            <ion-label class=\"heading\">Comment </ion-label>\n          </ion-col>\n          <ion-col size=\"6\" class=\"ion-text-start\">\n            <ion-label>{{medicine.comment}}</ion-label>\n          </ion-col>\n          </ion-row>\n       \n          <hr>\n          <ion-row class=\"card-row card-top-row\">\n            <ion-col size=\"12\">\n              <ion-row>\n                <ion-col size=\"4\" class=\"ion-text-center restrict_div\" (click)=\"discontinueMedicines(medicine.userId,medicine.illnessId,medicine.tabId)\">\n                  <img src=\"../../assets/medicine/restriction-ends2.png\" alt=\"\">\n                </ion-col>\n                <ion-col size=\"4\" class=\"ion-text-center edit_div\" (click)=\"openEditMedicine(medicine,medicine.tabId)\">\n                  <img src=\"../../assets/medicine/pencil2.png\" alt=\"\">\n                </ion-col>\n                <ion-col size=\"4\" class=\"ion-text-center delete_div\" (click)=\"deleteMedicine(medicine.tabId)\">\n                  <img src=\"../../assets/medicine/delete2.png\" alt=\"\">\n                </ion-col>\n              </ion-row>\n              \n            </ion-col>\n            </ion-row>\n    </ion-card>\n    <br>\n  </div>\n    \n</ion-content>\n<ion-bottom-sheet\n  #sheet\n  [(state)]=\"sheetState\"\n  [canBounce]=\"canBounce\"\n  [topDistance]=\"topDistance\"\n  [hideCloseButton]=\"hideCloseButton\"\n  [hideDragIcon]=\"hideDragIcon\"\n  [roundBorderOnTop]=\"roundBorderOnTop\"\n  [disableDrag]=\"disableDrag\"\n  [transition]=\"transition\"\n  [title]=\"title\"\n  [dockedHeight]=\"dockedHeight\"\n>\n<form [formGroup]=\"addMedicineForm\" (ngSubmit)=\"onSubmit(addMedicineForm.value)\">\n  <ion-row>\n   \n    <ion-col size=\"12\">\n      <ion-label>Medicine Name</ion-label>\n      <ion-item lines=\"none\">\n        <ion-input formControlName=\"tab\" type=\"text\" ></ion-input>\n      </ion-item>\n    </ion-col>\n  </ion-row>\n  <ion-row>\n   \n    <ion-col size=\"3\">\n      <ion-label>Morning Time</ion-label>\n    </ion-col>\n    <ion-col size=\"9\">\n      <ion-item lines=\"none\">\n      <ion-datetime displayFormat=\"h:mm a\" formControlName=\"morningTime\"></ion-datetime>\n      </ion-item>\n    </ion-col>\n    \n  </ion-row>\n  <ion-row>\n   \n    <ion-col size=\"3\">\n      <ion-label>Afternoon Time</ion-label>\n    </ion-col>\n    <ion-col size=\"9\">\n      <ion-item lines=\"none\">\n      <ion-datetime displayFormat=\"h:mm a\" formControlName=\"afternoonTime\"></ion-datetime>\n\n      </ion-item>\n    </ion-col>\n    \n  </ion-row>\n  <ion-row>\n   \n    <ion-col size=\"3\">\n      <ion-label>Evening Time</ion-label>\n    </ion-col>\n    <ion-col size=\"9\">\n      <ion-item lines=\"none\">\n      <ion-datetime displayFormat=\"h:mm a\" formControlName=\"eveningTime\"></ion-datetime>\n      </ion-item>\n    </ion-col>\n    \n  </ion-row>\n  <ion-row>\n    <ion-col size=\"6\">\n      <ion-label>Quantity </ion-label>\n      <ion-item lines=\"none\">\n        <ion-input type=\"number\" formControlName=\"quantity\"></ion-input>\n        </ion-item>\n    </ion-col>\n    <ion-col size=\"6\">\n      <ion-label>Comment </ion-label>\n      <ion-item lines=\"none\">\n        <ion-input type=\"text\" formControlName=\"comment\"></ion-input>\n        </ion-item>\n    </ion-col>\n  </ion-row>\n  <ion-row>\n    <ion-col size=\"12\" class=\"ion-text-center\">\n        <ion-button [disabled]=\"addMedicineForm.invalid\" shape=\"round\" type=\"submit\"  color=\"secondary\">\n          Submit\n        </ion-button>\n    </ion-col>\n  </ion-row>\n</form>\n</ion-bottom-sheet>\n\n<ion-fab vertical=\"bottom\" horizontal=\"end\" slot=\"fixed\">\n  <ion-fab-button (click)=\"openAddMedicine()\">\n    <ion-icon color=\"light\" name=\"add-sharp\"></ion-icon>\n  </ion-fab-button>\n</ion-fab>");

/***/ }),

/***/ "wUQ3":
/*!*************************************************!*\
  !*** ./src/app/addmedicine/addmedicine.page.ts ***!
  \*************************************************/
/*! exports provided: AddmedicinePage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddmedicinePage", function() { return AddmedicinePage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_addmedicine_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./addmedicine.page.html */ "WYWL");
/* harmony import */ var _addmedicine_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./addmedicine.page.scss */ "VMUn");
/* harmony import */ var _editmedicine_editmedicine_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./../editmedicine/editmedicine.page */ "HWDZ");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var ion_bottom_sheet__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ion-bottom-sheet */ "umRu");
/* harmony import */ var _api_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../api.service */ "yTNM");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _ionic_storage__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @ionic/storage */ "e8h1");











let AddmedicinePage = class AddmedicinePage {
    constructor(alertController, apiService, storage, route, modalCtrl) {
        this.alertController = alertController;
        this.apiService = apiService;
        this.storage = storage;
        this.route = route;
        this.modalCtrl = modalCtrl;
        this.sheetState = ion_bottom_sheet__WEBPACK_IMPORTED_MODULE_7__["SheetState"].Bottom;
        this.minHeight = 300;
        this.dockedHeight = 400;
        this.canBounce = true;
        this.topDistance = 0;
        this.hideCloseButton = false;
        this.hideDragIcon = false;
        this.roundBorderOnTop = true;
        this.disableDrag = false;
        this.transition = '0.4s ease';
        this.title = 'Add Medicine';
    }
    ngOnInit() {
        this.addMedicineForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_9__["FormGroup"]({
            tab: new _angular_forms__WEBPACK_IMPORTED_MODULE_9__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_9__["Validators"].required]),
            morningTime: new _angular_forms__WEBPACK_IMPORTED_MODULE_9__["FormControl"](''),
            afternoonTime: new _angular_forms__WEBPACK_IMPORTED_MODULE_9__["FormControl"](''),
            eveningTime: new _angular_forms__WEBPACK_IMPORTED_MODULE_9__["FormControl"](''),
            quantity: new _angular_forms__WEBPACK_IMPORTED_MODULE_9__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_9__["Validators"].required]),
            comment: new _angular_forms__WEBPACK_IMPORTED_MODULE_9__["FormControl"](''),
        });
    }
    ionViewDidEnter() {
        this.storage.get('user').then((data) => {
            if (data) {
                var user = JSON.parse(data);
                this.userid = user.id;
                this.illnessId = this.route.snapshot.paramMap.get('illnessId');
                this.apiService.fetchMedicine(this.userid, this.illnessId).then(data => {
                    console.log('medicines', data);
                    this.medicines = JSON.parse(data.data);
                }).catch(err => {
                    this.medicines = '';
                });
            }
        });
    }
    doRefresh(event) {
        this.storage.get('user').then((data) => {
            if (data) {
                var user = JSON.parse(data);
                this.userid = user.id;
                this.illnessId = this.route.snapshot.params.get('illnessId');
                this.apiService.fetchMedicine(this.userid, this.illnessId).then(data => {
                    console.log('medicines', data);
                    this.medicines = JSON.parse(data.data);
                    event.target.complete();
                }).catch(err => {
                    this.medicines = '';
                    event.target.complete();
                });
            }
        });
    }
    deleteMedicineAlert(tabId) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const alert = yield this.alertController.create({
                cssClass: 'my-custom-class',
                header: 'Delete Medicine',
                mode: 'ios',
                message: 'Are you sure you want to delete medicine ?',
                buttons: [
                    {
                        text: 'Yes',
                        role: 'cancel',
                        cssClass: 'secondary',
                        handler: (blah) => {
                            console.log('Confirm Cancel: blah');
                            this.deleteMedicine(tabId);
                        }
                    }, {
                        text: 'No',
                        handler: () => {
                            console.log('Confirm Okay');
                        }
                    }
                ]
            });
            yield alert.present();
        });
    }
    openAddMedicine() {
        this.sheetState = ion_bottom_sheet__WEBPACK_IMPORTED_MODULE_7__["SheetState"].Docked;
    }
    discontinueMedicines(userId, illnessId, TabId) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const alert = yield this.alertController.create({
                cssClass: 'my-custom-class',
                header: 'Discontinue Illness',
                mode: 'ios',
                subHeader: 'Are you sure you want to discontinue illness ?',
                inputs: [
                    {
                        name: 'reason',
                        type: 'text',
                        placeholder: 'Reason'
                    },
                ],
                buttons: [
                    {
                        text: 'No',
                        role: 'cancel',
                        cssClass: 'secondary',
                        handler: () => {
                        }
                    }, {
                        text: 'Yes',
                        handler: (formdata) => {
                            console.log('Confirm Ok', formdata.reason);
                            this.discontinue_reason = formdata.reason;
                            this.apiService.discontinueMedicine(userId, illnessId, TabId, this.discontinue_reason).then(data => {
                                console.log('illness', data);
                                this.presentAlert('Medicine discontinued successfully');
                            }).catch(err => {
                                console.log(err);
                                this.apiService.presentToast(err.error, 1000);
                            });
                        }
                    }
                ]
            });
            yield alert.present();
        });
    }
    presentAlert(message) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const alert = yield this.alertController.create({
                header: 'Successful',
                message: message,
                mode: 'ios',
                backdropDismiss: false,
                buttons: [
                    {
                        text: 'OK',
                        handler: () => {
                            this.ionViewDidEnter();
                            this.sheetState = ion_bottom_sheet__WEBPACK_IMPORTED_MODULE_7__["SheetState"].Bottom;
                        },
                    },
                ],
            });
            yield alert.present();
        });
    }
    deleteMedicine(tabId) {
        this.apiService.deleteMedicine(this.userid, this.illnessId, tabId).then(data => {
            console.log('illness', data);
            this.presentAlert('Medicine deleted successfully');
        }).catch(err => {
            this.apiService.presentToast(err.error, 1000);
        });
    }
    openEditMedicine(medicine_obj, tabId) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const modal = yield this.modalCtrl.create({
                component: _editmedicine_editmedicine_page__WEBPACK_IMPORTED_MODULE_3__["EditmedicinePage"],
                componentProps: {
                    'userId': this.userid,
                    'illnessId': this.illnessId,
                    'tabId': tabId,
                    'medicine_obj': medicine_obj,
                },
                swipeToClose: true
            });
            yield modal.present();
            const data = yield modal.onDidDismiss().then(data => {
                this.ionViewDidEnter();
            });
            console.log(data);
        });
    }
    onSubmit(body) {
        body['userId'] = this.userid;
        body['illnessId'] = this.illnessId;
        console.log('body', body);
        if (body['morningTime']) {
            body['morning'] = 'morning';
        }
        else {
            body['morning'] = '';
        }
        if (body['afternoonTime']) {
            body['afternoon'] = 'afternoon';
        }
        else {
            body['afternoon'] = '';
        }
        if (body['eveningTime']) {
            body['evening'] = 'evening';
        }
        else {
            body['evening'] = '';
        }
        this.apiService.addMedicine(body).then(data => {
            console.log('data', data);
            this.presentAlert('Medicine added successfully');
        }).catch(err => {
            this.apiService.presentToast(err.error, 2000);
            console.log('err', err);
        });
    }
};
AddmedicinePage.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["AlertController"] },
    { type: _api_service__WEBPACK_IMPORTED_MODULE_8__["ApiService"] },
    { type: _ionic_storage__WEBPACK_IMPORTED_MODULE_10__["Storage"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["ModalController"] }
];
AddmedicinePage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_5__["Component"])({
        selector: 'app-addmedicine',
        template: _raw_loader_addmedicine_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_addmedicine_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], AddmedicinePage);



/***/ })

}]);
//# sourceMappingURL=addmedicine-addmedicine-module-es2015.js.map