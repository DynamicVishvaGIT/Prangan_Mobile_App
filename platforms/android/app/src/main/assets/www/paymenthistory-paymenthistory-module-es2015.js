(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["paymenthistory-paymenthistory-module"],{

/***/ "23ql":
/*!*******************************************************!*\
  !*** ./src/app/paymenthistory/paymenthistory.page.ts ***!
  \*******************************************************/
/*! exports provided: PaymenthistoryPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PaymenthistoryPage", function() { return PaymenthistoryPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_paymenthistory_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./paymenthistory.page.html */ "YOzA");
/* harmony import */ var _paymenthistory_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./paymenthistory.page.scss */ "JW6Q");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _api_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./../api.service */ "yTNM");
/* harmony import */ var _ionic_storage__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/storage */ "e8h1");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ "TEn/");







let PaymenthistoryPage = class PaymenthistoryPage {
    constructor(storage, apiService, alertController) {
        this.storage = storage;
        this.apiService = apiService;
        this.alertController = alertController;
    }
    ngOnInit() {
    }
    ionViewWillEnter() {
        this.storage.get('user').then(data => {
            this.branch_id = JSON.parse(data).branch_id;
            this.user_id = JSON.parse(data).id;
            this.storage.get('userType').then(userType => {
                this.userType = userType;
                if (userType == 'Preschool') {
                    this.apiService.paymentHistory(this.userType, this.user_id).then(data => {
                        console.log(JSON.parse(data.data));
                        this.orders = JSON.parse(data.data);
                        this.isOrdersAvailable = true;
                    }).catch(err => {
                        console.log(err);
                        this.isOrdersAvailable = false;
                        this.orders = '';
                    });
                }
                else {
                    this.apiService.fetchDaycare(this.user_id).then(data => {
                        this.orders = JSON.parse(data.data);
                        console.log('fess', this.orders);
                        this.isOrdersAvailable = true;
                    }).catch(err => {
                        this.orders = '';
                        this.isOrdersAvailable = false;
                        console.log(err);
                    });
                }
            });
        });
    }
    ConvertTimeStamp(time) {
        return this.formatDate(new Date(time * 1000));
    }
    formatDate(date) {
        var d = new Date(date), month = '' + (d.getMonth() + 1), day = '' + d.getDate(), year = d.getFullYear();
        if (month.length < 2)
            month = '0' + month;
        if (day.length < 2)
            day = '0' + day;
        return [day, month, year].join('/') + " " + d.getHours() + ":" + d.getMinutes();
    }
    doRefresh(event) {
        this.storage.get('user').then(data => {
            this.branch_id = JSON.parse(data).branch_id;
            this.user_id = JSON.parse(data).id;
            this.storage.get('userType').then(userType => {
                this.userType = userType;
                this.apiService.paymentHistory(this.userType, this.user_id).then(data => {
                    console.log(data);
                    this.orders = JSON.parse(data.data);
                    this.isOrdersAvailable = true;
                    event.target.complete();
                }).catch(err => {
                    console.log(err);
                    this.isOrdersAvailable = false;
                    this.orders = '';
                    event.target.complete();
                });
            });
        });
    }
};
PaymenthistoryPage.ctorParameters = () => [
    { type: _ionic_storage__WEBPACK_IMPORTED_MODULE_5__["Storage"] },
    { type: _api_service__WEBPACK_IMPORTED_MODULE_4__["ApiService"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["AlertController"] }
];
PaymenthistoryPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-paymenthistory',
        template: _raw_loader_paymenthistory_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_paymenthistory_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], PaymenthistoryPage);



/***/ }),

/***/ "EDAp":
/*!*********************************************************!*\
  !*** ./src/app/paymenthistory/paymenthistory.module.ts ***!
  \*********************************************************/
/*! exports provided: PaymenthistoryPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PaymenthistoryPageModule", function() { return PaymenthistoryPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _paymenthistory_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./paymenthistory-routing.module */ "pvOg");
/* harmony import */ var _paymenthistory_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./paymenthistory.page */ "23ql");







let PaymenthistoryPageModule = class PaymenthistoryPageModule {
};
PaymenthistoryPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _paymenthistory_routing_module__WEBPACK_IMPORTED_MODULE_5__["PaymenthistoryPageRoutingModule"]
        ],
        declarations: [_paymenthistory_page__WEBPACK_IMPORTED_MODULE_6__["PaymenthistoryPage"]]
    })
], PaymenthistoryPageModule);



/***/ }),

/***/ "JW6Q":
/*!*********************************************************!*\
  !*** ./src/app/paymenthistory/paymenthistory.page.scss ***!
  \*********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("ion-content {\n  --background:#f3fbfe;\n}\n\nion-card {\n  margin: 20px;\n  border-radius: 5px;\n  box-shadow: 0 3px 0px -2px rgba(0, 0, 0, 0), 0 2px 4px 2px rgba(0, 0, 0, 0.03), 0 1px 5px 0 rgba(0, 0, 0, 0.11);\n}\n\n.name {\n  font-size: 16px;\n  margin-left: 12px;\n  margin-bottom: 6px;\n  color: #202020;\n  margin-top: 6px;\n}\n\n.card-row {\n  padding: 12px;\n  padding-bottom: 7px;\n  padding-right: 16px;\n}\n\n.card-top-row {\n  padding-bottom: 0px;\n}\n\nhr {\n  border-top: 1px dotted #9d9fa6;\n  margin: 0 8px;\n}\n\n.heading {\n  color: #9d9fa6;\n  margin-top: 0;\n  font-size: 12px;\n  margin-bottom: 0;\n}\n\n.value {\n  color: #202020;\n  margin-top: 6px;\n  font-size: 12px;\n}\n\n.cancel-btn {\n  height: 36px;\n  margin-top: -10px;\n  text-transform: none;\n  margin-left: 10px;\n}\n\n.w-100 {\n  width: 100%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3BheW1lbnRoaXN0b3J5LnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLG9CQUFBO0FBQ0Y7O0FBRUE7RUFDSSxZQUFBO0VBQ0Esa0JBQUE7RUFDQSwrR0FBQTtBQUNKOztBQUNFO0VBQ0UsZUFBQTtFQUNBLGlCQUFBO0VBQ0Esa0JBQUE7RUFDQSxjQUFBO0VBQ0EsZUFBQTtBQUVKOztBQUNFO0VBQ0ksYUFBQTtFQUNBLG1CQUFBO0VBQ0EsbUJBQUE7QUFFTjs7QUFBRTtFQUNFLG1CQUFBO0FBR0o7O0FBREU7RUFDRSw4QkFBQTtFQUNFLGFBQUE7QUFJTjs7QUFGRTtFQUNFLGNBQUE7RUFDQSxhQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0FBS0o7O0FBRkU7RUFDRSxjQUFBO0VBQ0EsZUFBQTtFQUNBLGVBQUE7QUFLSjs7QUFIRTtFQUNFLFlBQUE7RUFDQSxpQkFBQTtFQUNBLG9CQUFBO0VBQ0EsaUJBQUE7QUFNSjs7QUFIRTtFQUNFLFdBQUE7QUFNSiIsImZpbGUiOiJwYXltZW50aGlzdG9yeS5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJpb24tY29udGVudCB7XHJcbiAgLS1iYWNrZ3JvdW5kOiNmM2ZiZmU7XHJcbn1cclxuXHJcbmlvbi1jYXJke1xyXG4gICAgbWFyZ2luOiAyMHB4O1xyXG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xyXG4gICAgYm94LXNoYWRvdzogMCAzcHggMHB4IC0ycHggcmdiYSgwLCAwLCAwLCAwKSwgMCAycHggNHB4IDJweCByZ2IoMCAwIDAgLyAzJSksIDAgMXB4IDVweCAwIHJnYmEoMCwgMCwgMCwgMC4xMSk7XHJcbiAgfVxyXG4gIC5uYW1lIHtcclxuICAgIGZvbnQtc2l6ZTogMTZweDtcclxuICAgIG1hcmdpbi1sZWZ0OiAxMnB4O1xyXG4gICAgbWFyZ2luLWJvdHRvbTogNnB4O1xyXG4gICAgY29sb3I6ICMyMDIwMjA7XHJcbiAgICBtYXJnaW4tdG9wOiA2cHg7XHJcbiAgICAvLyBmb250LXdlaWdodDogYm9sZDtcclxuICB9XHJcbiAgLmNhcmQtcm93e1xyXG4gICAgICBwYWRkaW5nOiAxMnB4O1xyXG4gICAgICBwYWRkaW5nLWJvdHRvbTogN3B4O1xyXG4gICAgICBwYWRkaW5nLXJpZ2h0OiAxNnB4O1xyXG4gIH1cclxuICAuY2FyZC10b3Atcm93e1xyXG4gICAgcGFkZGluZy1ib3R0b206IDBweDtcclxuICB9XHJcbiAgaHJ7XHJcbiAgICBib3JkZXItdG9wOiAxcHggZG90dGVkICM5ZDlmYTY7XHJcbiAgICAgIG1hcmdpbjogMCA4cHg7XHJcbiAgfVxyXG4gIC5oZWFkaW5ne1xyXG4gICAgY29sb3I6ICM5ZDlmYTY7XHJcbiAgICBtYXJnaW4tdG9wOiAwO1xyXG4gICAgZm9udC1zaXplOiAxMnB4O1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMDtcclxuXHJcbiAgfVxyXG4gIC52YWx1ZXtcclxuICAgIGNvbG9yOiAjMjAyMDIwO1xyXG4gICAgbWFyZ2luLXRvcDogNnB4O1xyXG4gICAgZm9udC1zaXplOiAxMnB4O1xyXG4gIH1cclxuICAuY2FuY2VsLWJ0bntcclxuICAgIGhlaWdodDogMzZweDtcclxuICAgIG1hcmdpbi10b3A6IC0xMHB4O1xyXG4gICAgdGV4dC10cmFuc2Zvcm06IG5vbmU7XHJcbiAgICBtYXJnaW4tbGVmdDogMTBweDtcclxuICAgXHJcbiAgfVxyXG4gIC53LTEwMHtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gIH0iXX0= */");

/***/ }),

/***/ "YOzA":
/*!***********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/paymenthistory/paymenthistory.page.html ***!
  \***********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n  <ion-toolbar>\n    <ion-title>Payment History</ion-title>\n    <ion-buttons slot=\"start\">\n      <ion-button  shape=\"round\"[routerLink]=\"['/quicktour']\">\n        <ion-icon color=\"light\" name=\"arrow-back-outline\"></ion-icon>\n      </ion-button>\n    </ion-buttons>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <ion-refresher slot=\"fixed\" (ionRefresh)=\"doRefresh($event)\">\n    <ion-refresher-content></ion-refresher-content>\n  </ion-refresher>\n  <div *ngIf=\"orders\">\n    <div *ngIf=\"userType=='Daycare'\">\n  <ion-card *ngFor=\"let order of orders\">\n    <ion-row *ngIf=\"order.orderid\">\n      <ion-col size=\"12\">\n        <p class=\"name\">Order ID: <b>{{order.orderid}}</b> </p>\n      </ion-col>\n    </ion-row>\n    <hr>\n    <ion-row class=\"card-row card-top-row\">\n      <ion-col  size=\"6\">\n        <p class=\"heading\">Date</p>\n        <p class=\"value\"><b>{{order.create_date}}</b></p>\n      </ion-col>\n      <ion-col size=\"6\" *ngIf=\"order.type=='Single'\">\n        <p class=\"heading\">Month</p>\n        <p class=\"value\"><b>{{order.from_date|date:'MMM, yyyy'}}</b></p>\n      </ion-col>\n      <ion-col size=\"6\" *ngIf=\"order.type=='Multiple'\">\n        <p class=\"heading\">From Date</p>\n        <p class=\"value\"><b>{{order.from_date|date:'MMM, yyyy'}}</b></p>\n      </ion-col>\n      <ion-col size=\"6\" *ngIf=\"order.type=='Multiple'\">\n        <p class=\"heading\">To Date</p>\n        <p class=\"value\"><b>{{order.to_date|date:'MMM, yyyy'}}</b></p>\n      </ion-col>\n      <ion-col size=\"6\">\n        <p class=\"heading\">Amount</p>\n        <p class=\"value\"><b>₹ {{order.amount}}</b> </p>\n      </ion-col>\n      <ion-col size=\"6\">\n        <p class=\"heading\">Status</p>\n        <p class=\"value\"><b>{{order.status}}</b> </p>\n      </ion-col>\n    </ion-row>\n    <!-- <ion-row class=\"card-row\">\n      <ion-col size=\"5\">\n        <p class=\"heading\">Time</p>\n        <p class=\"value\">10 AM</p>\n      </ion-col>\n      <ion-col size=\"7\">\n        <p class=\"heading\">Transaction ID</p>\n        <p class=\"value\">6262111186678</p>\n      </ion-col>\n      \n    </ion-row> -->\n    <!-- <ion-row>\n      <ion-col size=\"12\">\n          <ion-button  shape=\"round\"size=\"small\" class=\"cancel-btn\" expand=\"block\" color=\"primary\"><p>Download invoice</p></ion-button>\n      </ion-col>\n    </ion-row> -->\n  </ion-card>\n</div>\n    <div *ngIf=\"userType=='Preschool'\">\n  <ion-card *ngFor=\"let order of orders\">\n    <ion-row *ngIf=\"order.orderid\">\n      <ion-col size=\"12\" >\n        <p class=\"name\">Order ID: <b>{{order.orderid}}</b> </p>\n      </ion-col>\n    </ion-row>\n    <hr>\n    <ion-row class=\"card-row card-top-row\">\n      <ion-col  size=\"6\">\n        <p class=\"heading\">Date</p>\n        <p class=\"value\"><b>{{ConvertTimeStamp(order.created_at)}}</b></p>\n      </ion-col>\n      <ion-col size=\"6\" *ngIf=\"order.type=='Preschool'\">\n        <p class=\"heading\">Month</p>\n        <p class=\"value\"><b>{{order.from_date|date:'MMM, yyyy'}}</b></p>\n      </ion-col>\n      <ion-col size=\"6\">\n        <p class=\"heading\">Amount</p>\n        <p class=\"value\"><b>₹ {{order.amount}}</b> </p>\n      </ion-col>\n      <ion-col size=\"6\">\n        <p class=\"heading\">Status</p>\n        <p class=\"value\"><b>{{order.status}}</b> </p>\n      </ion-col>\n     \n      \n    </ion-row>\n   \n  </ion-card>\n</div>\n</div>\n<div class=\"margin-ionic homework-slider\" *ngIf=\"!isOrdersAvailable\">\n  <ion-slides pager=\"false\" class=\"slider-card events-slider\"  >\n    <ion-slide>\n      <ion-card  class=\"ion-text-start  data-card w-100\" >\n        <ion-row>\n          <ion-col size=\"12\">\n            <p class=\"date\"><b>No Payment History</b> </p>         \n          </ion-col>\n         \n        </ion-row>\n       \n      </ion-card>\n    </ion-slide>\n  </ion-slides>\n</div>\n</ion-content>\n");

/***/ }),

/***/ "pvOg":
/*!*****************************************************************!*\
  !*** ./src/app/paymenthistory/paymenthistory-routing.module.ts ***!
  \*****************************************************************/
/*! exports provided: PaymenthistoryPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PaymenthistoryPageRoutingModule", function() { return PaymenthistoryPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _paymenthistory_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./paymenthistory.page */ "23ql");




const routes = [
    {
        path: '',
        component: _paymenthistory_page__WEBPACK_IMPORTED_MODULE_3__["PaymenthistoryPage"]
    }
];
let PaymenthistoryPageRoutingModule = class PaymenthistoryPageRoutingModule {
};
PaymenthistoryPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], PaymenthistoryPageRoutingModule);



/***/ })

}]);
//# sourceMappingURL=paymenthistory-paymenthistory-module-es2015.js.map