(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["home-home-module"],{

/***/ "A3+G":
/*!*********************************************!*\
  !*** ./src/app/home/home-routing.module.ts ***!
  \*********************************************/
/*! exports provided: HomePageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomePageRoutingModule", function() { return HomePageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _home_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./home.page */ "zpKS");




const routes = [
    {
        path: '',
        component: _home_page__WEBPACK_IMPORTED_MODULE_3__["HomePage"],
    }
];
let HomePageRoutingModule = class HomePageRoutingModule {
};
HomePageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })
], HomePageRoutingModule);



/***/ }),

/***/ "WcN3":
/*!***************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/home/home.page.html ***!
  \***************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n<ion-content [fullscreen]=\"true\">\n<div class=\"img-block\">\n<img src=\"../../assets/logo/prangan-logo.png\" alt=\"\">\n</div>\n  <ion-row class=\"app-icon-container\">\n    <ion-col class=\"ion-text-center ion-no-padding\">\n\n      <img src=\"../../assets/logo/login-2.png\" />      \n    </ion-col>\n  </ion-row>\n\n  <div id=\"container\" class=\"margin-ionic padding-ionic-start padding-ionic-end\">\n    <ion-button  shape=\"round\"class=\"tour-btn\" size=\"default\" (click)=\"openQuickTour()\"  fill=\"outline\" color=\"light\"   expand=\"block\" type=\"submit\">\n      <p class=\"tour-btn-text\">Quick Tour </p> \n    </ion-button>\n   <p class=\"ion-text-center or-txt\">OR</p>\n   <ion-button  shape=\"round\"class=\"login-btn\" (click)=\"openLogin()\"  expand=\"block\" fill=\"solid\"  color=\"primary\">\n    <p class=\"btn-text\">Login </p> \n\n  \n  </ion-button>\n  </div>\n</ion-content>\n");

/***/ }),

/***/ "ct+p":
/*!*************************************!*\
  !*** ./src/app/home/home.module.ts ***!
  \*************************************/
/*! exports provided: HomePageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomePageModule", function() { return HomePageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _home_page__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./home.page */ "zpKS");
/* harmony import */ var _home_routing_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./home-routing.module */ "A3+G");







let HomePageModule = class HomePageModule {
};
HomePageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonicModule"],
            _home_routing_module__WEBPACK_IMPORTED_MODULE_6__["HomePageRoutingModule"]
        ],
        declarations: [_home_page__WEBPACK_IMPORTED_MODULE_5__["HomePage"]]
    })
], HomePageModule);



/***/ }),

/***/ "f6od":
/*!*************************************!*\
  !*** ./src/app/home/home.page.scss ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".app-icon-container {\n  top: 50%;\n}\n\n.img-block {\n  width: 50%;\n  z-index: 1000;\n  position: absolute;\n  top: 10%;\n  left: 25%;\n}\n\nion-item {\n  width: 100%;\n  border: 1px solid #e1e1e1;\n  height: 34px;\n  border-radius: 4px;\n}\n\nion-input {\n  margin-top: -16px;\n}\n\nion-item ion-icon {\n  margin-top: -16px !important;\n  color: #0a4f8b;\n}\n\n.list-md .item-block .item-inner {\n  border-bottom: none;\n}\n\nion-button {\n  --padding-top: 25px;\n  --padding-bottom: 25px;\n  font-size: 13px;\n}\n\n.center {\n  text-align: center;\n}\n\n.sign-up-link {\n  font-size: 16px;\n}\n\n.sign-up-link button {\n  background-color: transparent;\n  color: #111;\n  padding: 0;\n  margin: 0;\n  text-transform: capitalize;\n}\n\n.item-has-focus {\n  --highlight-background: none;\n}\n\n.log-icon {\n  margin-right: 8px;\n}\n\n.input-heading {\n  margin-bottom: 8px;\n  font-weight: 500;\n}\n\n.form-div {\n  margin-top: 30px;\n  margin-left: 16px;\n  margin-right: 16px;\n}\n\n.btn-text {\n  margin-top: 0;\n  font-size: 16px;\n}\n\n.tour-btn-text {\n  margin-top: 0px;\n  color: #3a3a3a;\n  font-size: 16px;\n}\n\n.login-btn {\n  --padding-bottom: 10px;\n  text-transform: none;\n}\n\n.tour-btn {\n  text-transform: none;\n  --padding-bottom: 10px;\n  --box-shadow: none;\n  --border-width: 1px;\n  border: 1px solid #afafaf8f;\n}\n\n.forgot-pwd {\n  font-size: 14px;\n  color: #323232;\n}\n\n.or-txt {\n  font-size: 13px;\n  color: #b7b7b7;\n  font-weight: bold;\n}\n\n@media only screen and (max-height: 650px) {\n  .form-div {\n    margin-top: -30px;\n    margin-left: 16px;\n    margin-right: 16px;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL2hvbWUucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsUUFBQTtBQUNGOztBQUdBO0VBQ0UsVUFBQTtFQUNBLGFBQUE7RUFDQSxrQkFBQTtFQUNBLFFBQUE7RUFDQSxTQUFBO0FBQUY7O0FBRUE7RUFDRSxXQUFBO0VBQ0EseUJBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7QUFDRjs7QUFDQTtFQUNFLGlCQUFBO0FBRUY7O0FBTUE7RUFDRSw0QkFBQTtFQUNBLGNBQUE7QUFIRjs7QUFNQTtFQUNFLG1CQUFBO0FBSEY7O0FBTUE7RUFDRSxtQkFBQTtFQUNBLHNCQUFBO0VBQ0EsZUFBQTtBQUhGOztBQU1BO0VBQ0Usa0JBQUE7QUFIRjs7QUFNQTtFQUNFLGVBQUE7QUFIRjs7QUFNQTtFQUNFLDZCQUFBO0VBQ0EsV0FBQTtFQUNBLFVBQUE7RUFDQSxTQUFBO0VBQ0EsMEJBQUE7QUFIRjs7QUFNQTtFQUNFLDRCQUFBO0FBSEY7O0FBS0E7RUFDRSxpQkFBQTtBQUZGOztBQUlBO0VBR0Usa0JBQUE7RUFDQSxnQkFBQTtBQUhGOztBQU1BO0VBQ0UsZ0JBQUE7RUFDQSxpQkFBQTtFQUNBLGtCQUFBO0FBSEY7O0FBS0E7RUFDRSxhQUFBO0VBQ0EsZUFBQTtBQUZGOztBQUtBO0VBQ0UsZUFBQTtFQUNBLGNBQUE7RUFFQSxlQUFBO0FBSEY7O0FBS0E7RUFDRSxzQkFBQTtFQUNBLG9CQUFBO0FBRkY7O0FBSUE7RUFDRSxvQkFBQTtFQUNBLHNCQUFBO0VBQ0Esa0JBQUE7RUFDQSxtQkFBQTtFQUNBLDJCQUFBO0FBREY7O0FBSUE7RUFDRSxlQUFBO0VBQ0EsY0FBQTtBQURGOztBQUdBO0VBQ0UsZUFBQTtFQUNBLGNBQUE7RUFDQSxpQkFBQTtBQUFGOztBQUVBO0VBQ0U7SUFDRSxpQkFBQTtJQUNBLGlCQUFBO0lBQ0Esa0JBQUE7RUFDRjtBQUNGIiwiZmlsZSI6ImhvbWUucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmFwcC1pY29uLWNvbnRhaW5lciB7XG4gIHRvcDo1MCU7XG5cbn1cblxuLmltZy1ibG9jayB7XG4gIHdpZHRoOiA1MCU7XG4gIHotaW5kZXg6IDEwMDA7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiAxMCU7XG4gIGxlZnQ6IDI1JTtcbiAgfVxuaW9uLWl0ZW0ge1xuICB3aWR0aDogMTAwJTtcbiAgYm9yZGVyOiAxcHggc29saWQgI2UxZTFlMTtcbiAgaGVpZ2h0OiAzNHB4O1xuICBib3JkZXItcmFkaXVzOiA0cHg7XG59XG5pb24taW5wdXQge1xuICBtYXJnaW4tdG9wOiAtMTZweDtcbn1cbi8vICAgLnBhc3N3b3JkSWNvbntcbi8vICAgICBmb250LXNpemU6MnJlbSAhaW1wb3J0YW50O1xuLy8gICAgIHBvc2l0aW9uOiByZWxhdGl2ZSAhaW1wb3J0YW50O1xuLy8gICAgIHRvcDogMjJweCAhaW1wb3J0YW50O1xuLy8gICAgIG1hcmdpbjogMCBhdXRvICFpbXBvcnRhbnQ7XG4vLyAgfVxuaW9uLWl0ZW0gaW9uLWljb24ge1xuICBtYXJnaW4tdG9wOiAtMTZweCAhaW1wb3J0YW50O1xuICBjb2xvcjogIzBhNGY4Yjtcbn1cblxuLmxpc3QtbWQgLml0ZW0tYmxvY2sgLml0ZW0taW5uZXIge1xuICBib3JkZXItYm90dG9tOiBub25lO1xufVxuXG5pb24tYnV0dG9uIHtcbiAgLS1wYWRkaW5nLXRvcDogMjVweDtcbiAgLS1wYWRkaW5nLWJvdHRvbTogMjVweDtcbiAgZm9udC1zaXplOiAxM3B4O1xufVxuXG4uY2VudGVyIHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuXG4uc2lnbi11cC1saW5rIHtcbiAgZm9udC1zaXplOiAxNnB4O1xufVxuXG4uc2lnbi11cC1saW5rIGJ1dHRvbiB7XG4gIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xuICBjb2xvcjogIzExMTtcbiAgcGFkZGluZzogMDtcbiAgbWFyZ2luOiAwO1xuICB0ZXh0LXRyYW5zZm9ybTogY2FwaXRhbGl6ZTtcbn1cblxuLml0ZW0taGFzLWZvY3VzIHtcbiAgLS1oaWdobGlnaHQtYmFja2dyb3VuZDogbm9uZTtcbn1cbi5sb2ctaWNvbiB7XG4gIG1hcmdpbi1yaWdodDogOHB4O1xufVxuLmlucHV0LWhlYWRpbmd7XG5cbiAgLy8gbWFyZ2luLWxlZnQ6IDE2cHg7XG4gIG1hcmdpbi1ib3R0b206IDhweDtcbiAgZm9udC13ZWlnaHQ6IDUwMDtcblxufVxuLmZvcm0tZGl2e1xuICBtYXJnaW4tdG9wOiAzMHB4O1xuICBtYXJnaW4tbGVmdDogMTZweDtcbiAgbWFyZ2luLXJpZ2h0OiAxNnB4O1xufVxuLmJ0bi10ZXh0e1xuICBtYXJnaW4tdG9wOiAwO1xuICBmb250LXNpemU6IDE2cHg7XG4gIC8vIGZvbnQtd2VpZ2h0OiBib2xkO1xufVxuLnRvdXItYnRuLXRleHR7XG4gIG1hcmdpbi10b3A6IDBweDtcbiAgY29sb3I6ICMzYTNhM2E7XG4gIC8vIGZvbnQtd2VpZ2h0OiBib2xkO1xuICBmb250LXNpemU6IDE2cHg7XG59XG4ubG9naW4tYnRue1xuICAtLXBhZGRpbmctYm90dG9tOiAxMHB4O1xuICB0ZXh0LXRyYW5zZm9ybTogbm9uZTtcbn1cbi50b3VyLWJ0bntcbiAgdGV4dC10cmFuc2Zvcm06IG5vbmU7XG4gIC0tcGFkZGluZy1ib3R0b206IDEwcHg7XG4gIC0tYm94LXNoYWRvdzogbm9uZTtcbiAgLS1ib3JkZXItd2lkdGg6IDFweDtcbiAgYm9yZGVyOiAxcHggc29saWQgI2FmYWZhZjhmO1xuXG59XG4uZm9yZ290LXB3ZHtcbiAgZm9udC1zaXplOiAxNHB4O1xuICBjb2xvcjogIzMyMzIzMjtcbn1cbi5vci10eHR7XG4gIGZvbnQtc2l6ZTogMTNweDtcbiAgY29sb3I6I2I3YjdiNztcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG59XG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtaGVpZ2h0OiA2NTBweCkge1xuICAuZm9ybS1kaXYge1xuICAgIG1hcmdpbi10b3A6IC0zMHB4O1xuICAgIG1hcmdpbi1sZWZ0OiAxNnB4O1xuICAgIG1hcmdpbi1yaWdodDogMTZweDtcbn1cbn0iXX0= */");

/***/ }),

/***/ "zpKS":
/*!***********************************!*\
  !*** ./src/app/home/home.page.ts ***!
  \***********************************/
/*! exports provided: HomePage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomePage", function() { return HomePage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_home_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./home.page.html */ "WcN3");
/* harmony import */ var _home_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./home.page.scss */ "f6od");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _ionic_storage__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/storage */ "e8h1");







let HomePage = class HomePage {
    constructor(router, menuCtrl, storage) {
        this.router = router;
        this.menuCtrl = menuCtrl;
        this.storage = storage;
    }
    openQuickTour() {
        this.storage.set('type', 'quicktour').then(_ => {
            this.router.navigate(['quicktour']);
        });
    }
    openLogin() {
        this.storage.set('type', 'login').then(_ => {
            this.router.navigate(['login']);
        });
    }
    ionViewWillEnter() {
        this.menuCtrl.enable(false, 'main-content-1');
        this.menuCtrl.enable(false, 'main-content-2');
    }
    // ionViewDidLeave(){
    //   this.menuCtrl.enable(true);
    // }
    ngOnInit() {
        this.menuCtrl.enable(false, 'main-content-1');
        this.menuCtrl.enable(false, 'main-content-2');
    }
};
HomePage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["MenuController"] },
    { type: _ionic_storage__WEBPACK_IMPORTED_MODULE_6__["Storage"] }
];
HomePage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-home',
        template: _raw_loader_home_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_home_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], HomePage);



/***/ })

}]);
//# sourceMappingURL=home-home-module-es2015.js.map