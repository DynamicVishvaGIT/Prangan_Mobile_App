(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["medicines-medicines-module"],{

/***/ "4to5":
/*!***********************************************!*\
  !*** ./src/app/medicines/medicines.page.scss ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("ion-content {\n  --background: #f3fbfe;\n}\n\n.heading {\n  font-weight: bold;\n}\n\n.restrict_div {\n  background: #0ea4d9;\n}\n\n.edit_div {\n  background: #00c35c;\n}\n\n.delete_div {\n  background: #ff3131;\n}\n\nimg {\n  width: 18%;\n  margin-top: 5px;\n}\n\nion-card {\n  margin: 5px;\n  border-radius: 5px;\n  box-shadow: 0 3px 0px -2px rgba(0, 0, 0, 0), 0 2px 4px 2px rgba(0, 0, 0, 0.03), 0 1px 5px 0 rgba(0, 0, 0, 0.11);\n  padding: 8px;\n}\n\n.card-row {\n  padding: 12px;\n  padding-bottom: 7px;\n  padding-right: 16px;\n}\n\n.card-top-row {\n  padding: 0;\n}\n\nhr {\n  border-top: 1px dotted #9d9fa6;\n  margin-left: -18px;\n  margin-right: 10px;\n}\n\n.header {\n  color: #9d9fa6;\n  margin-top: 0;\n  font-size: 11px;\n  margin-bottom: 0;\n}\n\n.value {\n  color: #202020;\n  margin-top: 6px;\n  font-size: 11px;\n}\n\n.view-btn {\n  margin-top: 0;\n  text-transform: none;\n}\n\n.age {\n  font-size: 16px;\n  color: #202020;\n  margin-top: 6px;\n  font-weight: bold;\n  margin-bottom: 6px;\n}\n\n.view-txt {\n  font-size: 10px;\n}\n\n.data-row ion-col {\n  padding-left: 0;\n}\n\n.w-100 {\n  width: 100%;\n}\n\n.date {\n  margin-left: 8px;\n  color: #202020;\n}\n\nion-fab {\n  margin-bottom: 0%;\n  margin-right: 2%;\n}\n\nion-fab ion-fab-button {\n  width: 40px;\n  height: 40px;\n}\n\nion-button {\n  text-transform: none;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL21lZGljaW5lcy5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxxQkFBQTtBQUNGOztBQUVBO0VBQ0UsaUJBQUE7QUFDRjs7QUFDQTtFQUNFLG1CQUFBO0FBRUY7O0FBQUE7RUFDRSxtQkFBQTtBQUdGOztBQURBO0VBQ0UsbUJBQUE7QUFJRjs7QUFEQTtFQUNFLFVBQUE7RUFDQSxlQUFBO0FBSUY7O0FBREE7RUFDRSxXQUFBO0VBQ0Esa0JBQUE7RUFDQSwrR0FBQTtFQUNBLFlBQUE7QUFJRjs7QUFEQTtFQUNFLGFBQUE7RUFDQSxtQkFBQTtFQUNBLG1CQUFBO0FBSUY7O0FBREE7RUFDRSxVQUFBO0FBSUY7O0FBREE7RUFDRSw4QkFBQTtFQUNBLGtCQUFBO0VBQ0Esa0JBQUE7QUFJRjs7QUFEQTtFQUNFLGNBQUE7RUFDQSxhQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0FBSUY7O0FBQUE7RUFDRSxjQUFBO0VBQ0EsZUFBQTtFQUNBLGVBQUE7QUFHRjs7QUFBQTtFQUVFLGFBQUE7RUFDQSxvQkFBQTtBQUVGOztBQUNBO0VBQ0UsZUFBQTtFQUNBLGNBQUE7RUFDQSxlQUFBO0VBQ0EsaUJBQUE7RUFDQSxrQkFBQTtBQUVGOztBQUVBO0VBQ0UsZUFBQTtBQUNGOztBQUdFO0VBQ0UsZUFBQTtBQUFKOztBQUlBO0VBQ0UsV0FBQTtBQURGOztBQUlBO0VBQ0UsZ0JBQUE7RUFDQSxjQUFBO0FBREY7O0FBSUE7RUFDRSxpQkFBQTtFQUVBLGdCQUFBO0FBRkY7O0FBR0U7RUFDSSxXQUFBO0VBQ0EsWUFBQTtBQUROOztBQUtBO0VBQ0Usb0JBQUE7QUFGRiIsImZpbGUiOiJtZWRpY2luZXMucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaW9uLWNvbnRlbnQge1xyXG4gIC0tYmFja2dyb3VuZDogI2YzZmJmZTtcclxufVxyXG5cclxuLmhlYWRpbmd7XHJcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbn1cclxuLnJlc3RyaWN0X2RpdntcclxuICBiYWNrZ3JvdW5kOiAjMGVhNGQ5O1xyXG59XHJcbi5lZGl0X2RpdntcclxuICBiYWNrZ3JvdW5kOiAjMDBjMzVjO1xyXG59XHJcbi5kZWxldGVfZGl2e1xyXG4gIGJhY2tncm91bmQ6ICNmZjMxMzE7XHJcbn1cclxuXHJcbmltZyB7XHJcbiAgd2lkdGg6IDE4JTtcclxuICBtYXJnaW4tdG9wOiA1cHg7XHJcbn1cclxuXHJcbmlvbi1jYXJkIHtcclxuICBtYXJnaW46IDVweDtcclxuICBib3JkZXItcmFkaXVzOiA1cHg7XHJcbiAgYm94LXNoYWRvdzogMCAzcHggMHB4IC0ycHggcmdiYSgwLCAwLCAwLCAwKSwgMCAycHggNHB4IDJweCByZ2IoMCAwIDAgLyAzJSksIDAgMXB4IDVweCAwIHJnYmEoMCwgMCwgMCwgMC4xMSk7XHJcbiAgcGFkZGluZzogOHB4O1xyXG59XHJcblxyXG4uY2FyZC1yb3cge1xyXG4gIHBhZGRpbmc6IDEycHg7XHJcbiAgcGFkZGluZy1ib3R0b206IDdweDtcclxuICBwYWRkaW5nLXJpZ2h0OiAxNnB4O1xyXG59XHJcblxyXG4uY2FyZC10b3Atcm93IHtcclxuICBwYWRkaW5nOiAwO1xyXG59XHJcblxyXG5ociB7XHJcbiAgYm9yZGVyLXRvcDogMXB4IGRvdHRlZCAjOWQ5ZmE2O1xyXG4gIG1hcmdpbi1sZWZ0OiAtMThweDtcclxuICBtYXJnaW4tcmlnaHQ6IDEwcHg7XHJcbn1cclxuXHJcbi5oZWFkZXIge1xyXG4gIGNvbG9yOiAjOWQ5ZmE2O1xyXG4gIG1hcmdpbi10b3A6IDA7XHJcbiAgZm9udC1zaXplOiAxMXB4O1xyXG4gIG1hcmdpbi1ib3R0b206IDA7XHJcblxyXG59XHJcblxyXG4udmFsdWUge1xyXG4gIGNvbG9yOiAjMjAyMDIwO1xyXG4gIG1hcmdpbi10b3A6IDZweDtcclxuICBmb250LXNpemU6IDExcHg7XHJcbn1cclxuXHJcbi52aWV3LWJ0biB7XHJcbiAgLy8gaGVpZ2h0OiAzNnB4O1xyXG4gIG1hcmdpbi10b3A6IDA7XHJcbiAgdGV4dC10cmFuc2Zvcm06IG5vbmU7XHJcbn1cclxuXHJcbi5hZ2Uge1xyXG4gIGZvbnQtc2l6ZTogMTZweDtcclxuICBjb2xvcjogIzIwMjAyMDtcclxuICBtYXJnaW4tdG9wOiA2cHg7XHJcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgbWFyZ2luLWJvdHRvbTogNnB4O1xyXG5cclxufVxyXG5cclxuLnZpZXctdHh0IHtcclxuICBmb250LXNpemU6IDEwcHg7XHJcbn1cclxuXHJcbi5kYXRhLXJvdyB7XHJcbiAgaW9uLWNvbCB7XHJcbiAgICBwYWRkaW5nLWxlZnQ6IDA7XHJcbiAgfVxyXG59XHJcblxyXG4udy0xMDAge1xyXG4gIHdpZHRoOiAxMDAlO1xyXG59XHJcblxyXG4uZGF0ZSB7XHJcbiAgbWFyZ2luLWxlZnQ6IDhweDtcclxuICBjb2xvcjogIzIwMjAyMDtcclxufVxyXG5cclxuaW9uLWZhYntcclxuICBtYXJnaW4tYm90dG9tOiAwJTtcclxuICAvLyBtYXJnaW4tcmlnaHQ6IDE4cHg7XHJcbiAgbWFyZ2luLXJpZ2h0OiAyJTtcclxuICBpb24tZmFiLWJ1dHRvbiB7XHJcbiAgICAgIHdpZHRoOiA0MHB4O1xyXG4gICAgICBoZWlnaHQ6IDQwcHg7XHJcbiAgfVxyXG59XHJcblxyXG5pb24tYnV0dG9ue1xyXG4gIHRleHQtdHJhbnNmb3JtOiBub25lO1xyXG59Il19 */");

/***/ }),

/***/ "DeRH":
/*!*********************************************!*\
  !*** ./src/app/medicines/medicines.page.ts ***!
  \*********************************************/
/*! exports provided: MedicinesPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MedicinesPage", function() { return MedicinesPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_medicines_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./medicines.page.html */ "S6bk");
/* harmony import */ var _medicines_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./medicines.page.scss */ "4to5");
/* harmony import */ var _editillness_editillness_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./../editillness/editillness.page */ "/QfT");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _api_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../api.service */ "yTNM");
/* harmony import */ var _ionic_storage__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ionic/storage */ "e8h1");









let MedicinesPage = class MedicinesPage {
    constructor(alertController, router, apiService, storage, modalCtrl) {
        this.alertController = alertController;
        this.router = router;
        this.apiService = apiService;
        this.storage = storage;
        this.modalCtrl = modalCtrl;
    }
    ngOnInit() {
    }
    ionViewDidEnter() {
        this.storage.get('user').then((data) => {
            if (data) {
                var user = JSON.parse(data);
                this.userid = user.id;
                this.apiService.fetchIllness(this.userid).then(data => {
                    console.log('illness', data);
                    this.illness = JSON.parse(data.data);
                    console.log('notices', this.illness);
                }).catch(err => {
                    this.illness = '';
                });
            }
        });
    }
    doRefresh(event) {
        this.storage.get('user').then((data) => {
            if (data) {
                var user = JSON.parse(data);
                this.userid = user.id;
                this.apiService.fetchIllness(this.userid).then(data => {
                    console.log('illness', data);
                    this.illness = JSON.parse(data.data);
                    event.target.complete();
                    console.log('notices', this.illness);
                }).catch(err => {
                    this.illness = '';
                    event.target.complete();
                });
            }
        });
    }
    discontinueMedicines(illnessId) {
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
                            this.apiService.discontinueIllness(this.userid, illnessId, this.discontinue_reason).then(data => {
                                console.log('illness', data);
                                this.presentAlert('Illness discontinued successfully');
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
    presentdeleteIllnessAlert(id) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const alert = yield this.alertController.create({
                cssClass: 'my-custom-class',
                header: 'Delete Illness',
                mode: 'ios',
                message: 'Are you sure you want to delete illness ?',
                buttons: [
                    {
                        text: 'Yes',
                        role: 'cancel',
                        cssClass: 'secondary',
                        handler: (blah) => {
                            console.log('Confirm Cancel: blah');
                            this.deleteIllness(id);
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
    openPrescription(img_url) {
        window.open(img_url);
    }
    openEditIllness(illness) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const modal = yield this.modalCtrl.create({
                component: _editillness_editillness_page__WEBPACK_IMPORTED_MODULE_3__["EditillnessPage"],
                componentProps: {
                    'userId': this.userid,
                    'illness_obj': illness,
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
                        },
                    },
                ],
            });
            yield alert.present();
        });
    }
    deleteIllness(illnessId) {
        this.apiService.deleteIllness(this.userid, illnessId).then(data => {
            console.log('illness', data);
            this.presentAlert('Illness deleted successfully');
            console.log('notices', this.illness);
        }).catch(err => {
            this.apiService.presentToast(err.error, 1000);
        });
    }
};
MedicinesPage.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["AlertController"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] },
    { type: _api_service__WEBPACK_IMPORTED_MODULE_7__["ApiService"] },
    { type: _ionic_storage__WEBPACK_IMPORTED_MODULE_8__["Storage"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["ModalController"] }
];
MedicinesPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_5__["Component"])({
        selector: 'app-medicines',
        template: _raw_loader_medicines_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_medicines_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], MedicinesPage);



/***/ }),

/***/ "Lehh":
/*!***********************************************!*\
  !*** ./src/app/medicines/medicines.module.ts ***!
  \***********************************************/
/*! exports provided: MedicinesPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MedicinesPageModule", function() { return MedicinesPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _medicines_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./medicines-routing.module */ "qdO2");
/* harmony import */ var _medicines_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./medicines.page */ "DeRH");







let MedicinesPageModule = class MedicinesPageModule {
};
MedicinesPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _medicines_routing_module__WEBPACK_IMPORTED_MODULE_5__["MedicinesPageRoutingModule"]
        ],
        declarations: [_medicines_page__WEBPACK_IMPORTED_MODULE_6__["MedicinesPage"]]
    })
], MedicinesPageModule);



/***/ }),

/***/ "S6bk":
/*!*************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/medicines/medicines.page.html ***!
  \*************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n  <ion-toolbar>\n    <ion-title>Illness</ion-title>\n    <ion-buttons slot=\"start\">\n      <ion-button shape=\"round\"  [routerLink]=\"['/quicktour']\">\n        <ion-icon color=\"light\" name=\"arrow-back-outline\"></ion-icon>\n      </ion-button>\n    </ion-buttons>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <ion-refresher slot=\"fixed\" (ionRefresh)=\"doRefresh($event)\">\n    <ion-refresher-content></ion-refresher-content>\n  </ion-refresher>\n  <div class=\"padding-ionic\" *ngIf=\"illness?.length>0\">\n    <ion-card  *ngFor=\"let illness_obj of illness\">\n      <ion-row class=\"card-row card-top-row\" [routerLink]=\"['/addmedicine',illness_obj.illnessId]\" >\n      <ion-col size=\"12\">\n        <ion-label class=\"heading\">Duration</ion-label>\n      </ion-col>\n     \n      </ion-row>\n      <ion-row class=\"card-row card-top-row\" [routerLink]=\"['/addmedicine',illness_obj.illnessId]\">\n      <ion-col size=\"6\">\n        <p class=\"heading\">From Date</p>\n        <p class=\"heading\">To Date</p>\n      </ion-col>\n      <ion-col size=\"6\" class=\"ion-text-start\">\n        <p >{{illness_obj.fromDate}}</p>\n        <p >{{illness_obj.toDate}}</p>\n      </ion-col>\n      </ion-row>\n      <hr>\n      <ion-row class=\"card-row card-top-row\" [routerLink]=\"['/addmedicine',illness_obj.illnessId]\">\n        <ion-col size=\"6\">\n          <ion-label class=\"heading\">Sickness & Illness</ion-label>\n        </ion-col>\n        <ion-col size=\"6\" class=\"ion-text-start\">\n          <ion-label>{{illness_obj.illnessName |titlecase }}</ion-label>\n        </ion-col>\n        </ion-row>\n        <hr>\n        <ion-row class=\"card-row card-top-row\" [routerLink]=\"['/addmedicine',illness_obj.illnessId]\">\n          <ion-col size=\"6\">\n            <ion-label class=\"heading\">Prescription</ion-label>\n          </ion-col>\n          <ion-col size=\"6\">\n            <ion-label class=\"heading\">\n              <ion-button size=\"small\" (click)=\"openPrescription(illness_obj.prescriptionImg)\" color=\"primary\" shape=\"round\">\n                View Prescription\n              </ion-button>\n            </ion-label>\n          </ion-col>\n          </ion-row>\n       \n          <hr>\n          <ion-row class=\"card-row card-top-row\">\n            <ion-col size=\"12\">\n              <ion-row>\n                <ion-col size=\"4\" class=\"ion-text-center restrict_div\" (click)=\"discontinueMedicines(illness_obj.illnessId)\">\n                  <img src=\"../../assets/medicine/restriction-ends2.png\" alt=\"\">\n                </ion-col>\n                <ion-col size=\"4\" class=\"ion-text-center edit_div\" (click)=\"openEditIllness(illness_obj)\">\n                  <img src=\"../../assets/medicine/pencil2.png\" alt=\"\">\n                </ion-col>\n                <ion-col size=\"4\" class=\"ion-text-center delete_div\" (click)=\"presentdeleteIllnessAlert(illness_obj.illnessId)\">\n                  <img src=\"../../assets/medicine/delete2.png\" alt=\"\">\n                </ion-col>\n              </ion-row>\n              \n            </ion-col>\n            </ion-row>\n    </ion-card>\n    <br>\n\n    <br>\n  </div>\n  <div *ngIf=\"illness?.length==0\">\n    <ion-card  class=\"ion-text-start  data-card \" >\n      <ion-row>\n        <ion-col size=\"12\">\n          <p class=\"date\"><b>No Illness Added</b> </p>         \n        </ion-col>\n      </ion-row>\n    </ion-card>\n  </div>\n</ion-content>\n<ion-fab vertical=\"bottom\" horizontal=\"end\" slot=\"fixed\">\n  <ion-fab-button>\n    <!-- <ion-fab-button (click)=\"openAddIllness()\"> -->\n    <ion-icon color=\"light\" name=\"add-sharp\"></ion-icon>\n  </ion-fab-button>\n</ion-fab>");

/***/ }),

/***/ "qdO2":
/*!*******************************************************!*\
  !*** ./src/app/medicines/medicines-routing.module.ts ***!
  \*******************************************************/
/*! exports provided: MedicinesPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MedicinesPageRoutingModule", function() { return MedicinesPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _medicines_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./medicines.page */ "DeRH");




const routes = [
    {
        path: '',
        component: _medicines_page__WEBPACK_IMPORTED_MODULE_3__["MedicinesPage"]
    }
];
let MedicinesPageRoutingModule = class MedicinesPageRoutingModule {
};
MedicinesPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], MedicinesPageRoutingModule);



/***/ })

}]);
//# sourceMappingURL=medicines-medicines-module-es2015.js.map