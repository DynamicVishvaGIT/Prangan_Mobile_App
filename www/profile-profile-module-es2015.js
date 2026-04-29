(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["profile-profile-module"],{

/***/ "cRhG":
/*!*******************************************!*\
  !*** ./src/app/profile/profile.module.ts ***!
  \*******************************************/
/*! exports provided: ProfilePageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProfilePageModule", function() { return ProfilePageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _profile_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./profile-routing.module */ "v+7O");
/* harmony import */ var _profile_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./profile.page */ "ncJE");







let ProfilePageModule = class ProfilePageModule {
};
ProfilePageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _profile_routing_module__WEBPACK_IMPORTED_MODULE_5__["ProfilePageRoutingModule"]
        ],
        declarations: [_profile_page__WEBPACK_IMPORTED_MODULE_6__["ProfilePage"]]
    })
], ProfilePageModule);



/***/ }),

/***/ "ncJE":
/*!*****************************************!*\
  !*** ./src/app/profile/profile.page.ts ***!
  \*****************************************/
/*! exports provided: ProfilePage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProfilePage", function() { return ProfilePage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_profile_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./profile.page.html */ "tXh8");
/* harmony import */ var _profile_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./profile.page.scss */ "zxxS");
/* harmony import */ var _editprofile_editprofile_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./../editprofile/editprofile.page */ "L8TP");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _api_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./../api.service */ "yTNM");
/* harmony import */ var _ionic_storage__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/storage */ "e8h1");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ "fXoL");








let ProfilePage = class ProfilePage {
    constructor(storage, apiService, menuCtrl, modalController) {
        this.storage = storage;
        this.apiService = apiService;
        this.menuCtrl = menuCtrl;
        this.modalController = modalController;
    }
    ngOnInit() {
    }
    ionViewDidEnter() {
        if (this.menuCtrl.isEnabled) {
            this.menuCtrl.swipeGesture(true);
        }
        this.menuCtrl.close();
        this.storage.get('user').then(data => {
            var user = JSON.parse(data);
            this.userid = user.userid;
            this.storage.get('userType').then(userType => {
                this.userType = userType;
                this.apiService.userDetails(user.id, userType).then(data => {
                    console.log('data', data.data);
                    this.profile = JSON.parse(data.data);
                });
            });
        });
    }
    openEdit() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const modal = yield this.modalController.create({
                component: _editprofile_editprofile_page__WEBPACK_IMPORTED_MODULE_3__["EditprofilePage"],
                componentProps: {
                    'userType': this.userType,
                    'profile': this.profile
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
    doRefresh(event) {
        this.storage.get('user').then(data => {
            var user = JSON.parse(data);
            this.userid = user.userid;
            this.storage.get('userType').then(userType => {
                this.userType = userType;
                this.apiService.userDetails(user.id, userType).then(data => {
                    console.log('data', data.data);
                    this.profile = JSON.parse(data.data);
                    event.target.complete();
                }).catch(err => {
                    event.target.complete();
                });
            });
        });
    }
};
ProfilePage.ctorParameters = () => [
    { type: _ionic_storage__WEBPACK_IMPORTED_MODULE_6__["Storage"] },
    { type: _api_service__WEBPACK_IMPORTED_MODULE_5__["ApiService"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["MenuController"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["ModalController"] }
];
ProfilePage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_7__["Component"])({
        selector: 'app-profile',
        template: _raw_loader_profile_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_profile_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], ProfilePage);



/***/ }),

/***/ "tXh8":
/*!*********************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/profile/profile.page.html ***!
  \*********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n  <ion-toolbar>\n    <ion-title>Profile</ion-title>\n    <ion-buttons slot=\"start\">\n      <ion-button  shape=\"round\"[routerLink]=\"['/quicktour']\">\n        <ion-icon color=\"light\" name=\"arrow-back-outline\"></ion-icon>\n      </ion-button>\n    </ion-buttons>\n    <ion-buttons slot=\"end\">\n      <ion-button  shape=\"round\" fill=\"outline\" color=\"light\" (click)=\"openEdit()\">\n        <ion-icon color=\"light\" name=\"create-outline\"></ion-icon>\n      </ion-button>\n    </ion-buttons>\n    \n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <ion-refresher slot=\"fixed\" (ionRefresh)=\"doRefresh($event)\">\n    <ion-refresher-content></ion-refresher-content>\n  </ion-refresher>\n  <br>\n  <div *ngIf=\"profile\">\n\n \n<div class=\"img-block\">\n  <img src=\"{{profile.child_img}}\" alt=\"\">\n</div>\n<br>\n<ion-card mode=\"ios\">\n \n  <div class=\"margin-ionic-start margin-ionic-top card-div\">\n\n<p class=\"heading\">Name</p>\n<p class=\"value\">{{profile.child_name|titlecase}}</p>\n\n<p class=\"heading\">Date of Birth</p>\n<p class=\"value\">{{profile.dob|date:'dd MMM,yyyy'}}</p>\n\n<p class=\"heading\" *ngIf=\"profile.child_age1\">Age</p>\n<p class=\"value\" *ngIf=\"profile.child_age1\">{{profile.child_age1}}</p>\n\n<p class=\"heading\" *ngIf=\"profile.class\">Admission Type</p>\n<p class=\"value\" *ngIf=\"profile.class\">{{profile.class}}</p>\n\n<p class=\"heading\" *ngIf=\"profile.father_mobile_number\">Father Mobile No.</p>\n<p class=\"value\" *ngIf=\"profile.father_mobile_number\">{{profile.father_mobile_number}}</p>\n\n<p class=\"heading\" *ngIf=\"profile.mother_mobile_number\">Mother Mobile No.</p>\n<p class=\"value\" *ngIf=\"profile.mother_mobile_number\">{{profile.mother_mobile_number}}</p>\n\n<!-- <p class=\"heading\">Guardian Mobile No.</p>\n<p class=\"value\">{{profile.child_name}}</p> -->\n\n<p class=\"heading\" *ngIf=\"profile.address\">Address</p>\n<p class=\"value\" *ngIf=\"profile.address\">{{profile.address}}</p>\n\n<p class=\"heading\" *ngIf=\"profile.gender\">Gender</p>\n<p class=\"value\" *ngIf=\"profile.gender\">{{profile.gender}}</p>\n\n<p class=\"heading\" *ngIf=\"profile.emailid\">Email</p>\n<p class=\"value\" *ngIf=\"profile.emailid\">{{profile.emailid}}</p>\n<br>\n</div>\n\n</ion-card>\n</div>\n</ion-content>\n");

/***/ }),

/***/ "v+7O":
/*!***************************************************!*\
  !*** ./src/app/profile/profile-routing.module.ts ***!
  \***************************************************/
/*! exports provided: ProfilePageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProfilePageRoutingModule", function() { return ProfilePageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _profile_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./profile.page */ "ncJE");




const routes = [
    {
        path: '',
        component: _profile_page__WEBPACK_IMPORTED_MODULE_3__["ProfilePage"]
    }
];
let ProfilePageRoutingModule = class ProfilePageRoutingModule {
};
ProfilePageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], ProfilePageRoutingModule);



/***/ }),

/***/ "zxxS":
/*!*******************************************!*\
  !*** ./src/app/profile/profile.page.scss ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("ion-content {\n  --background:#f3fbfe;\n}\n\n.img-block {\n  z-index: 1000;\n  position: relative;\n  text-align: center;\n}\n\n.img-block img {\n  width: 75px;\n}\n\n.heading {\n  margin-top: 8px;\n  margin-bottom: 8px;\n  color: #8a8a8a;\n}\n\n.value {\n  margin-top: 8px;\n  margin-bottom: 20px;\n  color: #202020;\n  font-weight: bold;\n}\n\n.card-div {\n  margin-top: 15%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3Byb2ZpbGUucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksb0JBQUE7QUFDSjs7QUFDRTtFQUtFLGFBQUE7RUFDQSxrQkFBQTtFQUNBLGtCQUFBO0FBRko7O0FBR0k7RUFDSSxXQUFBO0FBRFI7O0FBSUU7RUFDSSxlQUFBO0VBQ0Esa0JBQUE7RUFDQSxjQUFBO0FBRE47O0FBR0U7RUFDSSxlQUFBO0VBQ0EsbUJBQUE7RUFDQSxjQUFBO0VBQ0EsaUJBQUE7QUFBTjs7QUFFRTtFQUNJLGVBQUE7QUFDTiIsImZpbGUiOiJwcm9maWxlLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImlvbi1jb250ZW50IHtcclxuICAgIC0tYmFja2dyb3VuZDojZjNmYmZlO1xyXG4gIH1cclxuICAuaW1nLWJsb2NrIHtcclxuICAgIC8vIHotaW5kZXg6IDEwMDA7XHJcbiAgICAvLyBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAvLyB0b3A6IDIlO1xyXG4gICAgLy8gdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgei1pbmRleDogMTAwMDtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIGltZ3tcclxuICAgICAgICB3aWR0aDogNzVweDtcclxuICAgIH1cclxuICB9XHJcbiAgLmhlYWRpbmcge1xyXG4gICAgICBtYXJnaW4tdG9wOiA4cHg7XHJcbiAgICAgIG1hcmdpbi1ib3R0b206IDhweDtcclxuICAgICAgY29sb3I6ICM4YThhOGE7XHJcbiAgfVxyXG4gIC52YWx1ZSB7XHJcbiAgICAgIG1hcmdpbi10b3A6IDhweDtcclxuICAgICAgbWFyZ2luLWJvdHRvbTogMjBweDtcclxuICAgICAgY29sb3I6ICMyMDIwMjA7XHJcbiAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gIH1cclxuICAuY2FyZC1kaXZ7XHJcbiAgICAgIG1hcmdpbi10b3A6IDE1JTtcclxuICB9Il19 */");

/***/ })

}]);
//# sourceMappingURL=profile-profile-module-es2015.js.map