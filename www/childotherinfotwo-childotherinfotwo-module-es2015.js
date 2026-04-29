(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["childotherinfotwo-childotherinfotwo-module"],{

/***/ "0Jjz":
/*!*****************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/childotherinfotwo/childotherinfotwo.page.html ***!
  \*****************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header class=\"ion-no-border\">\n  <ion-toolbar>\n    <ion-title>Daycare Registration Form</ion-title>\n    <ion-buttons slot=\"start\">\n      <ion-button  shape=\"round\"[routerLink]=\"['/childotherinfo']\">\n        <ion-icon color=\"light\" name=\"arrow-back-outline\"></ion-icon>\n      </ion-button>\n    </ion-buttons>\n  </ion-toolbar>\n \n\n</ion-header>\n\n<ion-content>\n  <ion-item lines=\"none\" (click)=\"toggle_accordion()\" class=\"toggle_button\">\n    <ion-label>Consent Form</ion-label>\n    <ion-icon slot=\"end\" color=\"primary\" name=\"chevron-up-circle-outline\" *ngIf=\"!accordion_expanded\"></ion-icon>\n    <ion-icon slot=\"end\" color=\"primary\" name=\"chevron-down-circle-outline\" *ngIf=\"accordion_expanded\"></ion-icon>\n  </ion-item>\n\n\n  <div #accordion class='accordion-container' [style.maxHeight.px]=\"250\" [class.collapsed]=\"!accordion_expanded\">\n    <div class=\"reusable_accordion template_accordion\">\n      <ol class=\"list-group vertical-steps\" style=\"margin-top: 0;list-style: none;padding-left: 28px;\">\n        <li class=\"list-group-item step-active\" [routerLink]=\"['/addadmission']\" routerLinkActive=\"router-link-active\" ><span>Daycare Registration</span></li>\n        <li class=\"list-group-item step-active\" [routerLink]=\"['/childprofile']\"><span>Child's Enviroment & Child's medical record</span></li>\n        <li class=\"list-group-item step-active\" [routerLink]=\"['/childotherinfo']\" routerLinkActive=\"router-link-active\" ><span>Food Habits ,Toilet Habits & Speech and Physical Growth</span></li>\n        <li class=\"list-group-item final\" ><span>Consent Form</span></li>\n      </ol>\n    </div>\n  </div>\n  <div class=\"margin-ionic\">\n\n<form [formGroup]=\"stepFourForm\" (ngSubmit)=\"onSubmit(stepFourForm.value)\">\n\n    <ion-row>\n      <ion-col size=\"6\">\n        <ion-label>Name <span class=\"text-danger\">*</span></ion-label>\n        <ion-item lines=\"none\">\n          <ion-input type=\"text\" formControlName=\"q1_ans\"></ion-input>\n        </ion-item>\n        <div class=\"error-div\" *ngIf=\"(q1_ans?.invalid && q1_ans?.touched) || q1_ans?.dirty\">\n          <small *ngIf=\"q1_ans.errors?.pattern\" class=\"text-danger\">Enter a valid name</small>\n        </div>\n      </ion-col>\n      <ion-col size=\"6\">\n        <ion-label>Relationship </ion-label>\n        <ion-item lines=\"none\" >\n          <ion-input type=\"text\" formControlName=\"q2_ans\"></ion-input>\n        </ion-item>\n        <div class=\"error-div\" *ngIf=\"(q2_ans?.invalid && q2_ans?.touched) || q2_ans?.dirty\">\n          <small *ngIf=\"q2_ans.errors?.pattern\" class=\"text-danger\">Enter a valid relationship</small>\n        </div>\n      </ion-col>\n    </ion-row>\n    <ion-label>Address </ion-label>\n    <ion-item lines=\"none\">\n      <ion-textarea rows=\"6\" cols=\"20\" formControlName=\"q3_ans\"></ion-textarea>\n    </ion-item>\n    <ion-row>\n      <ion-col size=\"6\">\n        <ion-label>Image </ion-label>\n        <br>\n        <img  class=\"img-size\" *ngIf=\"image1base64Image\" src=\"{{image1base64Image}}\" alt=\"\" class=\"image_container\">\n        <img  class=\"img-size\" *ngIf=\"img1 && !image1base64Image\" src=\"{{img1}}\" alt=\"\" class=\"image_container\">\n        \n        <ion-item lines=\"none\">\n        <ion-button (click)=\"presentActionSheet('image1')\" shape=\"round\" class=\"choose-btn\" size=\"small\" >\n          Choose File\n         </ion-button>\n        </ion-item>\n      </ion-col>\n      <ion-col size=\"6\">\n        <ion-label>Phone </ion-label>\n        <ion-item lines=\"none\" >\n          <ion-input type=\"tel\" formControlName=\"q5_ans\" maxlength=\"10\"></ion-input>\n        </ion-item>\n        <div class=\"error-div\" *ngIf=\"(q5_ans?.invalid && q5_ans?.touched) || q5_ans?.dirty\">\n          <small *ngIf=\"q5_ans.errors?.pattern\" class=\"text-danger\">Enter a valid phone number</small>\n        </div>\n      </ion-col>\n    </ion-row>\n    <ion-row>\n      <ion-col size=\"6\">\n        <ion-label>Name </ion-label>\n        <ion-item lines=\"none\">\n          <ion-input type=\"text\" formControlName=\"q6_ans\"></ion-input>\n        </ion-item>\n        <div class=\"error-div\" *ngIf=\"(q6_ans?.invalid && q6_ans?.touched) || q6_ans?.dirty\">\n          <small *ngIf=\"q6_ans.errors?.pattern\" class=\"text-danger\">Enter a valid name</small>\n        </div>\n      </ion-col>\n      <ion-col size=\"6\">\n        <ion-label>Relationship </ion-label>\n        <ion-item lines=\"none\" >\n          <ion-input type=\"text\" formControlName=\"q7_ans\"></ion-input>\n        </ion-item>\n        <div class=\"error-div\" *ngIf=\"(q7_ans?.invalid && q7_ans?.touched) || q7_ans?.dirty\">\n          <small *ngIf=\"q7_ans.errors?.pattern\" class=\"text-danger\">Enter a valid relationship</small>\n        </div>\n      </ion-col>\n    </ion-row>\n    <ion-label>Address </ion-label>\n    <ion-item lines=\"none\">\n      <ion-textarea rows=\"6\" cols=\"20\" formControlName=\"q8_ans\"></ion-textarea>\n    </ion-item>\n    <ion-row>\n      <ion-col size=\"6\">\n        <ion-label>Image </ion-label>\n        <br>\n        <img  class=\"img-size\" *ngIf=\"image2base64Image\" src=\"{{image2base64Image}}\" alt=\"\" class=\"image_container\">\n        <img  class=\"img-size\" *ngIf=\"img2 && !image2base64Image\" src=\"{{img2}}\" alt=\"\" class=\"image_container\">\n        <ion-item lines=\"none\">\n        <ion-button  shape=\"round\" (click)=\"presentActionSheet('image2')\" class=\"choose-btn\" size=\"small\" >\n          Choose File\n         </ion-button>\n        </ion-item>\n      </ion-col>\n      <ion-col size=\"6\">\n        <ion-label>Phone </ion-label>\n        <ion-item lines=\"none\" >\n          <ion-input type=\"tel\" formControlName=\"q10_ans\" maxlength=\"10\"></ion-input>\n        </ion-item>\n        <div class=\"error-div\" *ngIf=\"(q10_ans?.invalid && q10_ans?.touched) || q10_ans?.dirty\">\n          <small *ngIf=\"q10_ans.errors?.pattern\" class=\"text-danger\">Enter a valid phone number</small>\n        </div>\n      </ion-col>\n    </ion-row>\n    <ion-label>The following people are not authorized to pick up child </ion-label>\n    <ion-item lines=\"none\" >\n      <ion-input type=\"text\" formControlName=\"q11_ans\" ></ion-input>\n    </ion-item>\n  <br>\n  <ion-row class=\"admission-row\">\n    <ion-col >\n      <ion-button [disabled]=\"stepFourForm.invalid\" type=\"submit\" shape=\"round\"  color=\"primary\">\n       Submit\n      </ion-button>\n    </ion-col>\n   \n  </ion-row>\n</form>\n  </div>\n</ion-content>\n");

/***/ }),

/***/ "2ZFK":
/*!***************************************************************!*\
  !*** ./src/app/childotherinfotwo/childotherinfotwo.module.ts ***!
  \***************************************************************/
/*! exports provided: ChildotherinfotwoPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChildotherinfotwoPageModule", function() { return ChildotherinfotwoPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _childotherinfotwo_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./childotherinfotwo-routing.module */ "JdOq");
/* harmony import */ var _childotherinfotwo_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./childotherinfotwo.page */ "snrj");







let ChildotherinfotwoPageModule = class ChildotherinfotwoPageModule {
};
ChildotherinfotwoPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _childotherinfotwo_routing_module__WEBPACK_IMPORTED_MODULE_5__["ChildotherinfotwoPageRoutingModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"]
        ],
        declarations: [_childotherinfotwo_page__WEBPACK_IMPORTED_MODULE_6__["ChildotherinfotwoPage"]]
    })
], ChildotherinfotwoPageModule);



/***/ }),

/***/ "JdOq":
/*!***********************************************************************!*\
  !*** ./src/app/childotherinfotwo/childotherinfotwo-routing.module.ts ***!
  \***********************************************************************/
/*! exports provided: ChildotherinfotwoPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChildotherinfotwoPageRoutingModule", function() { return ChildotherinfotwoPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _childotherinfotwo_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./childotherinfotwo.page */ "snrj");




const routes = [
    {
        path: '',
        component: _childotherinfotwo_page__WEBPACK_IMPORTED_MODULE_3__["ChildotherinfotwoPage"]
    }
];
let ChildotherinfotwoPageRoutingModule = class ChildotherinfotwoPageRoutingModule {
};
ChildotherinfotwoPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], ChildotherinfotwoPageRoutingModule);



/***/ }),

/***/ "P8bj":
/*!***************************************************************!*\
  !*** ./src/app/childotherinfotwo/childotherinfotwo.page.scss ***!
  \***************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".wrap {\n  text-align: center;\n  position: relative;\n}\n\n.wrap:before {\n  content: \"\";\n  position: absolute;\n  top: 20%;\n  left: 18%;\n  border-top: 0.5px solid #677483;\n  border-width: thin;\n  width: 65%;\n  transform: translateY(-50%);\n  border-style: dashed;\n}\n\n.active {\n  border: 1px solid #2dd36f !important;\n  color: #ffffff;\n}\n\n.icon-circle {\n  position: relative;\n  display: inline-block;\n  margin: -1px;\n  width: 30px;\n  height: 30px;\n  font-size: 26px;\n  border-radius: 50%;\n  border: 1px solid #202020;\n  background: #fff;\n  color: #2dd36f;\n  text-align: center;\n}\n\n.icon-circle ion-icon {\n  margin-top: 2px;\n  font-size: 20px;\n}\n\n.header-1 {\n  color: #676767;\n  margin-bottom: 0;\n  font-size: 16px;\n}\n\n.heading-1 {\n  color: #676767;\n  margin-bottom: 0;\n  font-size: 16px;\n}\n\n.heading {\n  color: #9b9ca6;\n  margin-bottom: 0;\n  font-size: 14px;\n}\n\nion-label {\n  color: #9b9ca6;\n  font-size: 14px;\n}\n\nion-input {\n  border: 1px solid #9b9ca6;\n  border-radius: 5px;\n  --padding-start: 5px !important;\n  height: 35px;\n}\n\nion-textarea {\n  border: 1px solid #9b9ca6;\n  border-radius: 5px;\n  --padding-start: 5px !important;\n}\n\nion-datetime {\n  border: 1px solid #9b9ca6;\n  border-radius: 5px;\n  --padding-start: 5px !important;\n  width: 100%;\n  height: 35px;\n}\n\nion-item {\n  --padding-start: 0;\n  --ripple-color: transparent;\n  --background-activated: transparent;\n  --background-activated-opacity:transparent;\n  --background-focused: transparent;\n  --background-focused-opacity:transparent;\n  --background-hover: transparent;\n  --background-hover-opacity:transparent;\n}\n\nion-item ion-label {\n  font-size: 12px;\n  color: #9b9ca6;\n}\n\nion-radio-group ion-item {\n  border-bottom: 0;\n}\n\nion-radio-group ion-col {\n  padding-left: 0;\n}\n\nion-radio-group ion-radio {\n  margin-right: 8px;\n  width: 18px;\n  height: 18px;\n}\n\nion-col {\n  padding-left: 0;\n}\n\nion-button {\n  text-transform: none;\n}\n\n.choose-btn {\n  --background: #ee4a35;\n}\n\n.heading-3 {\n  margin-top: 12px;\n  color: #929791;\n}\n\n.color-green {\n  color: #2dd36f;\n  font-weight: bold;\n  margin-top: 10px;\n}\n\n.checkmark {\n  margin-top: -2px;\n}\n\n.dot {\n  color: #202020 !important;\n  margin-top: 2px;\n}\n\n.other-info {\n  margin-top: 16px;\n}\n\nimg {\n  width: 60%;\n}\n\n.bowel-input {\n  margin-top: 25px;\n}\n\n.admission-row ion-col {\n  text-align: center;\n  text-align: -moz-center;\n}\n\n.admission-row ion-col ion-button {\n  text-transform: none;\n  width: 80%;\n}\n\n.next-btn-col {\n  text-align: left !important;\n}\n\n.list-group.vertical-steps .list-group-item {\n  border: none;\n  border-left: 3px solid #b4b4b4;\n  box-sizing: border-box;\n  border-radius: 0;\n  counter-increment: step-counter;\n  padding-left: 20px;\n  padding-right: 0px;\n  padding-bottom: 7px;\n  padding-top: 0px;\n}\n\n.list-group.vertical-steps .list-group-item::before {\n  border-radius: 50%;\n  background-color: #b4b4b4;\n  color: #fff;\n  content: counter(step-counter);\n  display: inline-block;\n  float: left;\n  height: 25px;\n  line-height: 25px;\n  margin-left: -35px;\n  text-align: center;\n  width: 25px;\n}\n\n.list-group.vertical-steps .final::before {\n  border-radius: 50%;\n  background-color: #2dd36f;\n  color: #fff;\n  content: counter(step-counter);\n  display: inline-block;\n  float: left;\n  height: 25px;\n  line-height: 25px;\n  margin-left: -31px;\n  text-align: center;\n  width: 25px;\n}\n\n.final {\n  border-left: none !important;\n}\n\n.step-active {\n  border-left: 3px solid #2dd36f !important;\n}\n\n.list-group.vertical-steps .step-active::before {\n  border-radius: 50%;\n  background-color: #2dd36f;\n  color: #fff;\n  content: counter(step-counter);\n  display: inline-block;\n  float: left;\n  height: 25px;\n  line-height: 25px;\n  margin-left: -35px;\n  text-align: center;\n  width: 25px;\n}\n\n.list-group.vertical-steps .list-group-item span, .list-group.vertical-steps .list-group-item a {\n  display: block;\n  overflow: hidden;\n  padding-top: 2px;\n}\n\ndiv.reusable_accordion {\n  z-index: 99;\n  padding: 0;\n  margin: 0;\n  list-style: none;\n  display: flex;\n  flex-wrap: wrap;\n  flex-direction: column;\n  justify-content: space-around;\n  line-height: 25px;\n  height: 180px;\n  background: #f1f1f1;\n  width: auto;\n}\n\ndiv.template_accordion div.template_containers {\n  display: flex;\n  min-width: 45%;\n  min-height: 60px;\n  background: white;\n  flex-direction: row;\n  margin: 5px;\n  justify-content: center;\n  align-content: center;\n}\n\n.toggle_button {\n  --background: #f1f1f1;\n  width: 100%;\n  text-align: center;\n  padding: 0;\n  color: #202020;\n  cursor: pointer;\n  min-width: 100%;\n}\n\n.toggle_button ion-label {\n  font-size: 16px;\n  color: #202020;\n  text-align: left;\n  margin-left: 20px;\n  font-weight: bold;\n}\n\ndiv.accordion-container {\n  overflow: hidden;\n  overflow-y: scroll;\n  transition: max-height 0.5s ease-in-out;\n  height: auto;\n  background: #1f2b37;\n}\n\ndiv.accordion-container.collapsed {\n  max-height: 0 !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL2NoaWxkb3RoZXJpbmZvdHdvLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGtCQUFBO0VBQ0Esa0JBQUE7QUFDSjs7QUFFRTtFQUNFLFdBQUE7RUFDQSxrQkFBQTtFQUNBLFFBQUE7RUFDQSxTQUFBO0VBQ0EsK0JBQUE7RUFDQSxrQkFBQTtFQUNBLFVBQUE7RUFDQSwyQkFBQTtFQUNBLG9CQUFBO0FBQ0o7O0FBQ0U7RUFDRSxvQ0FBQTtFQUNBLGNBQUE7QUFFSjs7QUFBRTtFQUNFLGtCQUFBO0VBQ0EscUJBQUE7RUFDQSxZQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxlQUFBO0VBQ0Esa0JBQUE7RUFDQSx5QkFBQTtFQUNBLGdCQUFBO0VBQ0EsY0FBQTtFQUNBLGtCQUFBO0FBR0o7O0FBREk7RUFDSSxlQUFBO0VBQ0EsZUFBQTtBQUdSOztBQUdFO0VBQ0UsY0FBQTtFQUNBLGdCQUFBO0VBQ0EsZUFBQTtBQUFKOztBQUVFO0VBQ0UsY0FBQTtFQUNBLGdCQUFBO0VBQ0EsZUFBQTtBQUNKOztBQUNBO0VBQ0ksY0FBQTtFQUNBLGdCQUFBO0VBQ0EsZUFBQTtBQUVKOztBQUFBO0VBQ0ksY0FBQTtFQUNBLGVBQUE7QUFHSjs7QUFEQTtFQUNJLHlCQUFBO0VBQ0Esa0JBQUE7RUFDQSwrQkFBQTtFQUNBLFlBQUE7QUFJSjs7QUFGQTtFQUNJLHlCQUFBO0VBQ0Esa0JBQUE7RUFDQSwrQkFBQTtBQUtKOztBQUhBO0VBQ0kseUJBQUE7RUFDQSxrQkFBQTtFQUNBLCtCQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7QUFNSjs7QUFIQTtFQUVJLGtCQUFBO0VBQ0EsMkJBQUE7RUFDQSxtQ0FBQTtFQUNBLDBDQUFBO0VBQ0EsaUNBQUE7RUFDQSx3Q0FBQTtFQUNBLCtCQUFBO0VBQ0Esc0NBQUE7QUFLSjs7QUFISTtFQUNJLGVBQUE7RUFDSixjQUFBO0FBS0o7O0FBQVE7RUFDSSxnQkFBQTtBQUdaOztBQURRO0VBQ0ksZUFBQTtBQUdaOztBQURRO0VBQ0EsaUJBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtBQUdSOztBQUNJO0VBQ0ksZUFBQTtBQUVSOztBQUNJO0VBQ0ksb0JBQUE7QUFFUjs7QUFBSTtFQUNJLHFCQUFBO0FBR1I7O0FBREk7RUFDSSxnQkFBQTtFQUNBLGNBQUE7QUFJUjs7QUFGSTtFQUNJLGNBQUE7RUFDQSxpQkFBQTtFQUNBLGdCQUFBO0FBS1I7O0FBSEk7RUFDSSxnQkFBQTtBQU1SOztBQUpJO0VBQ0kseUJBQUE7RUFDQSxlQUFBO0FBT1I7O0FBTEk7RUFDSSxnQkFBQTtBQVFSOztBQU5JO0VBQ0UsVUFBQTtBQVNOOztBQVBJO0VBQ0ksZ0JBQUE7QUFVUjs7QUFQUTtFQUNJLGtCQUFBO0VBQ0EsdUJBQUE7QUFVWjs7QUFUWTtFQUNJLG9CQUFBO0VBRUEsVUFBQTtBQVVoQjs7QUFMSTtFQUNJLDJCQUFBO0FBUVI7O0FBTkk7RUFDSSxZQUFBO0VBQ0EsOEJBQUE7RUFDQSxzQkFBQTtFQUNBLGdCQUFBO0VBQ0EsK0JBQUE7RUFDQSxrQkFBQTtFQUNBLGtCQUFBO0VBQ0EsbUJBQUE7RUFDQSxnQkFBQTtBQVNSOztBQVBNO0VBQ0Usa0JBQUE7RUFDQSx5QkFBQTtFQUNBLFdBQUE7RUFDQSw4QkFBQTtFQUNBLHFCQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxpQkFBQTtFQUNBLGtCQUFBO0VBQ0Esa0JBQUE7RUFDQSxXQUFBO0FBVVI7O0FBUk07RUFDRSxrQkFBQTtFQUNBLHlCQUFBO0VBQ0EsV0FBQTtFQUNBLDhCQUFBO0VBQ0EscUJBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGlCQUFBO0VBQ0Esa0JBQUE7RUFDQSxrQkFBQTtFQUNBLFdBQUE7QUFXUjs7QUFUTTtFQUNFLDRCQUFBO0FBWVI7O0FBVk07RUFDRSx5Q0FBQTtBQWFSOztBQVhNO0VBQ0Usa0JBQUE7RUFDQSx5QkFBQTtFQUNBLFdBQUE7RUFDQSw4QkFBQTtFQUNBLHFCQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxpQkFBQTtFQUNBLGtCQUFBO0VBQ0Esa0JBQUE7RUFDQSxXQUFBO0FBY1I7O0FBWk07RUFDRSxjQUFBO0VBQ0EsZ0JBQUE7RUFDQSxnQkFBQTtBQWVSOztBQVpNO0VBQ0UsV0FBQTtFQUNBLFVBQUE7RUFDQSxTQUFBO0VBQ0EsZ0JBQUE7RUFLQSxhQUFBO0VBQ0EsZUFBQTtFQUNBLHNCQUFBO0VBQ0EsNkJBQUE7RUFDQSxpQkFBQTtFQUNBLGFBQUE7RUFDQSxtQkFBQTtFQUNBLFdBQUE7QUFlUjs7QUFaUTtFQUVFLGFBQUE7RUFDQSxjQUFBO0VBQ0EsZ0JBQUE7RUFDQSxpQkFBQTtFQUdBLG1CQUFBO0VBQ0EsV0FBQTtFQUNBLHVCQUFBO0VBQ0EscUJBQUE7QUFlVjs7QUFYTTtFQUNFLHFCQUFBO0VBQ0EsV0FBQTtFQUNBLGtCQUFBO0VBQ0EsVUFBQTtFQUNBLGNBQUE7RUFDQSxlQUFBO0VBQ0EsZUFBQTtBQWNSOztBQWJRO0VBQ0UsZUFBQTtFQUNBLGNBQUE7RUFDQSxnQkFBQTtFQUNBLGlCQUFBO0VBQ0EsaUJBQUE7QUFlVjs7QUFaTTtFQUNFLGdCQUFBO0VBQ0Esa0JBQUE7RUFDQSx1Q0FBQTtFQUNBLFlBQUE7RUFDQSxtQkFBQTtBQWVSOztBQVpNO0VBQ0Usd0JBQUE7QUFlUiIsImZpbGUiOiJjaGlsZG90aGVyaW5mb3R3by5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIud3JhcCB7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgfVxyXG4gIFxyXG4gIC53cmFwOmJlZm9yZSB7XHJcbiAgICBjb250ZW50OiBcIlwiO1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgdG9wOiAyMCU7XHJcbiAgICBsZWZ0OiAxOCU7XHJcbiAgICBib3JkZXItdG9wOiAwLjVweCBzb2xpZCAjNjc3NDgzO1xyXG4gICAgYm9yZGVyLXdpZHRoOiB0aGluO1xyXG4gICAgd2lkdGg6IDY1JTtcclxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtNTAlKTtcclxuICAgIGJvcmRlci1zdHlsZTogZGFzaGVkO1xyXG4gIH1cclxuICAuYWN0aXZle1xyXG4gICAgYm9yZGVyOiAxcHggc29saWQgIzJkZDM2ZiAhaW1wb3J0YW50O1xyXG4gICAgY29sb3I6ICNmZmZmZmY7XHJcbiAgfVxyXG4gIC5pY29uLWNpcmNsZXtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICAgIG1hcmdpbjogLTFweDtcclxuICAgIHdpZHRoOiAzMHB4O1xyXG4gICAgaGVpZ2h0OiAzMHB4O1xyXG4gICAgZm9udC1zaXplOiAyNnB4O1xyXG4gICAgYm9yZGVyLXJhZGl1czogNTAlO1xyXG4gICAgYm9yZGVyOiAxcHggc29saWQgIzIwMjAyMDtcclxuICAgIGJhY2tncm91bmQ6ICNmZmY7XHJcbiAgICBjb2xvcjogIzJkZDM2ZjtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuXHJcbiAgICBpb24taWNvbntcclxuICAgICAgICBtYXJnaW4tdG9wOiAycHg7XHJcbiAgICAgICAgZm9udC1zaXplOiAyMHB4O1xyXG4gICAgfVxyXG4gIFxyXG4gIH1cclxuICBcclxuICBcclxuICAuaGVhZGVyLTF7XHJcbiAgICBjb2xvcjogIzY3Njc2NztcclxuICAgIG1hcmdpbi1ib3R0b206IDA7XHJcbiAgICBmb250LXNpemU6IDE2cHg7XHJcbn1cclxuICAuaGVhZGluZy0xe1xyXG4gICAgY29sb3I6ICM2NzY3Njc7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAwO1xyXG4gICAgZm9udC1zaXplOiAxNnB4O1xyXG59XHJcbi5oZWFkaW5ne1xyXG4gICAgY29sb3I6ICM5YjljYTY7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAwO1xyXG4gICAgZm9udC1zaXplOiAxNHB4O1xyXG59XHJcbmlvbi1sYWJlbHtcclxuICAgIGNvbG9yOiAjOWI5Y2E2O1xyXG4gICAgZm9udC1zaXplOiAxNHB4O1xyXG59XHJcbmlvbi1pbnB1dCB7XHJcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjOWI5Y2E2O1xyXG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xyXG4gICAgLS1wYWRkaW5nLXN0YXJ0OiA1cHggIWltcG9ydGFudDtcclxuICAgIGhlaWdodDozNXB4O1xyXG59XHJcbmlvbi10ZXh0YXJlYXtcclxuICAgIGJvcmRlcjogMXB4IHNvbGlkICM5YjljYTY7XHJcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XHJcbiAgICAtLXBhZGRpbmctc3RhcnQ6IDVweCAhaW1wb3J0YW50O1xyXG59XHJcbmlvbi1kYXRldGltZXtcclxuICAgIGJvcmRlcjogMXB4IHNvbGlkICM5YjljYTY7XHJcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XHJcbiAgICAtLXBhZGRpbmctc3RhcnQ6IDVweCAhaW1wb3J0YW50O1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBoZWlnaHQ6MzVweDtcclxuXHJcbn1cclxuaW9uLWl0ZW17XHJcbiAgICAvLyBib3JkZXItYm90dG9tOiAxcHggc29saWQgIzY3NzQ4MztcclxuICAgIC0tcGFkZGluZy1zdGFydDogMDtcclxuICAgIC0tcmlwcGxlLWNvbG9yOiB0cmFuc3BhcmVudDtcclxuICAgIC0tYmFja2dyb3VuZC1hY3RpdmF0ZWQ6IHRyYW5zcGFyZW50O1xyXG4gICAgLS1iYWNrZ3JvdW5kLWFjdGl2YXRlZC1vcGFjaXR5OnRyYW5zcGFyZW50O1xyXG4gICAgLS1iYWNrZ3JvdW5kLWZvY3VzZWQ6IHRyYW5zcGFyZW50O1xyXG4gICAgLS1iYWNrZ3JvdW5kLWZvY3VzZWQtb3BhY2l0eTp0cmFuc3BhcmVudDtcclxuICAgIC0tYmFja2dyb3VuZC1ob3ZlciAgOiB0cmFuc3BhcmVudDtcclxuICAgIC0tYmFja2dyb3VuZC1ob3Zlci1vcGFjaXR5ICA6dHJhbnNwYXJlbnQ7XHJcblxyXG4gICAgaW9uLWxhYmVsIHtcclxuICAgICAgICBmb250LXNpemU6IDEycHg7XHJcbiAgICBjb2xvcjogIzliOWNhNjtcclxuXHJcbiAgICB9XHJcbn1cclxuICAgIGlvbi1yYWRpby1ncm91cHtcclxuICAgICAgICBpb24taXRlbXtcclxuICAgICAgICAgICAgYm9yZGVyLWJvdHRvbTogMDtcclxuICAgICAgICB9XHJcbiAgICAgICAgaW9uLWNvbCB7XHJcbiAgICAgICAgICAgIHBhZGRpbmctbGVmdDogMDtcclxuICAgICAgICB9XHJcbiAgICAgICAgaW9uLXJhZGlve1xyXG4gICAgICAgIG1hcmdpbi1yaWdodDogOHB4O1xyXG4gICAgICAgIHdpZHRoOiAxOHB4O1xyXG4gICAgICAgIGhlaWdodDogMThweDtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgaW9uLWNvbCB7XHJcbiAgICAgICAgcGFkZGluZy1sZWZ0OiAwO1xyXG4gICAgfVxyXG5cclxuICAgIGlvbi1idXR0b24ge1xyXG4gICAgICAgIHRleHQtdHJhbnNmb3JtOiBub25lO1xyXG4gICAgfVxyXG4gICAgLmNob29zZS1idG57XHJcbiAgICAgICAgLS1iYWNrZ3JvdW5kOiAjZWU0YTM1O1xyXG4gICAgfVxyXG4gICAgLmhlYWRpbmctM3tcclxuICAgICAgICBtYXJnaW4tdG9wOiAxMnB4O1xyXG4gICAgICAgIGNvbG9yOiAjOTI5NzkxO1xyXG4gICAgfVxyXG4gICAgLmNvbG9yLWdyZWVue1xyXG4gICAgICAgIGNvbG9yOiAjMmRkMzZmO1xyXG4gICAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gICAgICAgIG1hcmdpbi10b3A6IDEwcHg7XHJcbiAgICB9XHJcbiAgICAuY2hlY2ttYXJre1xyXG4gICAgICAgIG1hcmdpbi10b3A6IC0ycHg7XHJcbiAgICB9XHJcbiAgICAuZG90e1xyXG4gICAgICAgIGNvbG9yOiAjMjAyMDIwICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgbWFyZ2luLXRvcDogMnB4O1xyXG4gICAgfVxyXG4gICAgLm90aGVyLWluZm8ge1xyXG4gICAgICAgIG1hcmdpbi10b3A6IDE2cHg7XHJcbiAgICB9XHJcbiAgICBpbWd7XHJcbiAgICAgIHdpZHRoOiA2MCU7XHJcbiAgfVxyXG4gICAgLmJvd2VsLWlucHV0e1xyXG4gICAgICAgIG1hcmdpbi10b3A6IDI1cHhcclxuICAgIH1cclxuICAgIC5hZG1pc3Npb24tcm93e1xyXG4gICAgICAgIGlvbi1jb2x7XHJcbiAgICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgICAgICAgICAgdGV4dC1hbGlnbjogLW1vei1jZW50ZXI7XHJcbiAgICAgICAgICAgIGlvbi1idXR0b257XHJcbiAgICAgICAgICAgICAgICB0ZXh0LXRyYW5zZm9ybTogbm9uZTtcclxuICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICB3aWR0aDogODAlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgIFxyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIC5uZXh0LWJ0bi1jb2x7XHJcbiAgICAgICAgdGV4dC1hbGlnbjogbGVmdCAhaW1wb3J0YW50O1xyXG4gICAgfVxyXG4gICAgLmxpc3QtZ3JvdXAudmVydGljYWwtc3RlcHMgLmxpc3QtZ3JvdXAtaXRlbSB7XHJcbiAgICAgICAgYm9yZGVyOiBub25lO1xyXG4gICAgICAgIGJvcmRlci1sZWZ0OiAzcHggc29saWQgI2I0YjRiNDtcclxuICAgICAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xyXG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDA7XHJcbiAgICAgICAgY291bnRlci1pbmNyZW1lbnQ6IHN0ZXAtY291bnRlcjtcclxuICAgICAgICBwYWRkaW5nLWxlZnQ6IDIwcHg7XHJcbiAgICAgICAgcGFkZGluZy1yaWdodDogMHB4O1xyXG4gICAgICAgIHBhZGRpbmctYm90dG9tOiA3cHg7XHJcbiAgICAgICAgcGFkZGluZy10b3A6IDBweDtcclxuICAgICAgfVxyXG4gICAgICAubGlzdC1ncm91cC52ZXJ0aWNhbC1zdGVwcyAubGlzdC1ncm91cC1pdGVtOjpiZWZvcmUge1xyXG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcclxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjYjRiNGI0O1xyXG4gICAgICAgIGNvbG9yOiAjZmZmO1xyXG4gICAgICAgIGNvbnRlbnQ6IGNvdW50ZXIoc3RlcC1jb3VudGVyKTtcclxuICAgICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgICAgICAgZmxvYXQ6IGxlZnQ7XHJcbiAgICAgICAgaGVpZ2h0OiAyNXB4O1xyXG4gICAgICAgIGxpbmUtaGVpZ2h0OiAyNXB4O1xyXG4gICAgICAgIG1hcmdpbi1sZWZ0OiAtMzVweDtcclxuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICAgICAgd2lkdGg6IDI1cHg7XHJcbiAgICAgIH1cclxuICAgICAgLmxpc3QtZ3JvdXAudmVydGljYWwtc3RlcHMgLmZpbmFsOjpiZWZvcmUge1xyXG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcclxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMmRkMzZmO1xyXG4gICAgICAgIGNvbG9yOiAjZmZmO1xyXG4gICAgICAgIGNvbnRlbnQ6IGNvdW50ZXIoc3RlcC1jb3VudGVyKTtcclxuICAgICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgICAgICAgZmxvYXQ6IGxlZnQ7XHJcbiAgICAgICAgaGVpZ2h0OiAyNXB4O1xyXG4gICAgICAgIGxpbmUtaGVpZ2h0OiAyNXB4O1xyXG4gICAgICAgIG1hcmdpbi1sZWZ0OiAtMzFweDtcclxuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICAgICAgd2lkdGg6IDI1cHg7XHJcbiAgICAgIH1cclxuICAgICAgLmZpbmFse1xyXG4gICAgICAgIGJvcmRlci1sZWZ0OiBub25lICFpbXBvcnRhbnQ7XHJcbiAgICAgIH1cclxuICAgICAgLnN0ZXAtYWN0aXZle1xyXG4gICAgICAgIGJvcmRlci1sZWZ0OiAzcHggc29saWQgIzJkZDM2ZiAhaW1wb3J0YW50O1xyXG4gICAgICB9XHJcbiAgICAgIC5saXN0LWdyb3VwLnZlcnRpY2FsLXN0ZXBzIC5zdGVwLWFjdGl2ZTo6YmVmb3JlIHtcclxuICAgICAgICBib3JkZXItcmFkaXVzOiA1MCU7XHJcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogIzJkZDM2ZjtcclxuICAgICAgICBjb2xvcjogI2ZmZjtcclxuICAgICAgICBjb250ZW50OiBjb3VudGVyKHN0ZXAtY291bnRlcik7XHJcbiAgICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gICAgICAgIGZsb2F0OiBsZWZ0O1xyXG4gICAgICAgIGhlaWdodDogMjVweDtcclxuICAgICAgICBsaW5lLWhlaWdodDogMjVweDtcclxuICAgICAgICBtYXJnaW4tbGVmdDogLTM1cHg7XHJcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgICAgIHdpZHRoOiAyNXB4O1xyXG4gICAgICB9XHJcbiAgICAgIC5saXN0LWdyb3VwLnZlcnRpY2FsLXN0ZXBzIC5saXN0LWdyb3VwLWl0ZW0gc3BhbiwgLmxpc3QtZ3JvdXAudmVydGljYWwtc3RlcHMgLmxpc3QtZ3JvdXAtaXRlbSBhIHtcclxuICAgICAgICBkaXNwbGF5OiBibG9jaztcclxuICAgICAgICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gICAgICAgIHBhZGRpbmctdG9wOiAycHg7XHJcbiAgICAgIH1cclxuICAgICAgXHJcbiAgICAgIGRpdi5yZXVzYWJsZV9hY2NvcmRpb24ge1xyXG4gICAgICAgIHotaW5kZXg6IDk5O1xyXG4gICAgICAgIHBhZGRpbmc6IDA7XHJcbiAgICAgICAgbWFyZ2luOiAwO1xyXG4gICAgICAgIGxpc3Qtc3R5bGU6IG5vbmU7XHJcbiAgICAgICAgZGlzcGxheTogLXdlYmtpdC1ib3g7XHJcbiAgICAgICAgZGlzcGxheTogLW1vei1ib3g7XHJcbiAgICAgICAgZGlzcGxheTogLW1zLWZsZXhib3g7XHJcbiAgICAgICAgZGlzcGxheTogLXdlYmtpdC1mbGV4O1xyXG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgZmxleC13cmFwOiB3cmFwO1xyXG4gICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XHJcbiAgICAgICAgbGluZS1oZWlnaHQ6IDI1cHg7XHJcbiAgICAgICAgaGVpZ2h0OiAxODBweDtcclxuICAgICAgICBiYWNrZ3JvdW5kOiAjZjFmMWYxO1xyXG4gICAgICAgIHdpZHRoOiBhdXRvO1xyXG4gICAgICB9XHJcbiAgICAgIGRpdi50ZW1wbGF0ZV9hY2NvcmRpb24ge1xyXG4gICAgICAgIGRpdi50ZW1wbGF0ZV9jb250YWluZXJzIHtcclxuICAgICAgICAgIGRpc3BsYXk6IC13ZWJraXQtYm94O1xyXG4gICAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICAgIG1pbi13aWR0aDogNDUlO1xyXG4gICAgICAgICAgbWluLWhlaWdodDogNjBweDtcclxuICAgICAgICAgIGJhY2tncm91bmQ6IHdoaXRlO1xyXG4gICAgICAgICAgLXdlYmtpdC1ib3gtb3JpZW50OiBob3Jpem9udGFsO1xyXG4gICAgICAgICAgLXdlYmtpdC1ib3gtZGlyZWN0aW9uOiBub3JtYWw7XHJcbiAgICAgICAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xyXG4gICAgICAgICAgbWFyZ2luOiA1cHg7XHJcbiAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgICAgICAgIGFsaWduLWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgICAgXHJcbiAgICAgIC50b2dnbGVfYnV0dG9uIHtcclxuICAgICAgICAtLWJhY2tncm91bmQ6ICNmMWYxZjE7XHJcbiAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgICAgIHBhZGRpbmc6IDA7XHJcbiAgICAgICAgY29sb3I6ICMyMDIwMjA7XHJcbiAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgICAgIG1pbi13aWR0aDogMTAwJTtcclxuICAgICAgICBpb24tbGFiZWx7XHJcbiAgICAgICAgICBmb250LXNpemU6IDE2cHg7XHJcbiAgICAgICAgICBjb2xvcjogIzIwMjAyMDtcclxuICAgICAgICAgIHRleHQtYWxpZ246IGxlZnQ7XHJcbiAgICAgICAgICBtYXJnaW4tbGVmdDogMjBweDtcclxuICAgICAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgICBkaXYuYWNjb3JkaW9uLWNvbnRhaW5lciB7XHJcbiAgICAgICAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICAgICAgICBvdmVyZmxvdy15OiBzY3JvbGw7XHJcbiAgICAgICAgdHJhbnNpdGlvbjogbWF4LWhlaWdodCAwLjVzIGVhc2UtaW4tb3V0O1xyXG4gICAgICAgIGhlaWdodDogYXV0bztcclxuICAgICAgICBiYWNrZ3JvdW5kOiByZ2IoMzEsIDQzLCA1NSk7XHJcbiAgICAgIH1cclxuICAgICAgXHJcbiAgICAgIGRpdi5hY2NvcmRpb24tY29udGFpbmVyLmNvbGxhcHNlZCB7XHJcbiAgICAgICAgbWF4LWhlaWdodDogMCAhaW1wb3J0YW50O1xyXG4gICAgICB9XHJcbiAgICAgICJdfQ== */");

/***/ }),

/***/ "snrj":
/*!*************************************************************!*\
  !*** ./src/app/childotherinfotwo/childotherinfotwo.page.ts ***!
  \*************************************************************/
/*! exports provided: ChildotherinfotwoPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChildotherinfotwoPage", function() { return ChildotherinfotwoPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_childotherinfotwo_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./childotherinfotwo.page.html */ "0Jjz");
/* harmony import */ var _childotherinfotwo_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./childotherinfotwo.page.scss */ "P8bj");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _api_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./../api.service */ "yTNM");
/* harmony import */ var _ionic_storage__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ionic/storage */ "e8h1");
/* harmony import */ var _ionic_native_camera_ngx__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @ionic-native/camera/ngx */ "a/9d");
/* harmony import */ var _ionic_native_file_ngx__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @ionic-native/file/ngx */ "FAH8");













let ChildotherinfotwoPage = class ChildotherinfotwoPage {
    constructor(storage, apiService, actionSheetController, alertController, router, file, camera, cf, loadingController, menuCtrl) {
        this.storage = storage;
        this.apiService = apiService;
        this.actionSheetController = actionSheetController;
        this.alertController = alertController;
        this.router = router;
        this.file = file;
        this.camera = camera;
        this.cf = cf;
        this.loadingController = loadingController;
        this.menuCtrl = menuCtrl;
        this.accordion_expanded = false;
    }
    ngOnInit() {
        this.menuCtrl.enable(false);
        this.stepFourForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormGroup"]({
            q1_ans: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].pattern(/^[a-zA-Z\. ]+$/)]),
            q2_ans: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].pattern(/^[a-zA-z -]+$/)]),
            q3_ans: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](''),
            q5_ans: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].maxLength(10), _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].minLength(10), _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].pattern(/^[0-9]{10}$/)]),
            q6_ans: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].pattern(/^[a-zA-Z\. ]+$/)]),
            q7_ans: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].pattern(/^[a-zA-z -]+$/)]),
            q8_ans: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](''),
            q10_ans: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].maxLength(10), _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].minLength(10), _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].pattern(/^[0-9]{10}$/)]),
            q11_ans: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](''),
        });
    }
    toggle_accordion() {
        this.accordion_expanded = this.accordion_expanded === false;
    }
    presentLoading() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const loading = yield this.loadingController.create({
                message: 'Please wait...',
                mode: 'ios',
                backdropDismiss: false
            });
            return loading.present();
            const { role, data } = yield loading.onDidDismiss();
            console.log('Loading dismissed!');
        });
    }
    get q1_ans() {
        return this.stepFourForm.get('q1_ans');
    }
    get q2_ans() {
        return this.stepFourForm.get('q2_ans');
    }
    get q3_ans() {
        return this.stepFourForm.get('q3_ans');
    }
    get q5_ans() {
        return this.stepFourForm.get('q5_ans');
    }
    get q6_ans() {
        return this.stepFourForm.get('q6_ans');
    }
    get q7_ans() {
        return this.stepFourForm.get('q7_ans');
    }
    get q8_ans() {
        return this.stepFourForm.get('q8_ans');
    }
    get q10_ans() {
        return this.stepFourForm.get('q10_ans');
    }
    get q11() {
        return this.stepFourForm.get('q11_ans');
    }
    // get old_image1(){
    //   return this.stepFourForm.get('old_image1')
    // }
    // get old_image2(){
    //   return this.stepFourForm.get('old_image2')
    // }
    onSubmit(body) {
        this.presentLoading();
        console.log('body', body);
        const formData = new FormData();
        formData.append("userid", this.userid);
        formData.append("q1_ans", body['q1_ans']);
        formData.append("q2_ans", body['q2_ans']);
        formData.append("q3_ans", body['q3_ans']);
        formData.append("q5_ans", body['q5_ans']);
        formData.append("q6_ans", body['q6_ans']);
        formData.append("q7_ans", body['q7_ans']);
        formData.append("q8_ans", body['q8_ans']);
        formData.append("q10_ans", body['q10_ans']);
        formData.append("q11_ans", body['q11_ans']);
        if (this.isDataPresent) {
            console.log("data present");
            formData.append("child_consent_id", this.child_consent_id);
            formData.append("old_image1", this.old_image1);
            formData.append("old_image2", this.old_image2);
            if (this.image1imgBlob) {
                formData.append("q4_ans", this.image1imgBlob, this.image1_file_name);
            }
            if (this.image2imgBlob) {
                formData.append("q9_ans", this.image2imgBlob, this.image2_file_name);
            }
            this.apiService.updateDaycareRegStep4(formData).subscribe(data => {
                console.log('data', data);
                this.loadingController.dismiss();
                this.presentAlert("Daycare Step 4 form submitted successfully");
                this.stepFourForm.reset();
            }, err => {
                console.log(err);
                console.log(err.status);
                this.loadingController.dismiss();
                // if (err.status == 200){
                // }else{
                //   console.log(JSON.parse(err.error.text));
                //   this.apiService.presentToast(err.error,2000);
                // } 
            });
        }
        else {
            console.log("data not present");
            formData.append("child_consent_id", this.child_consent_id);
            if (this.image1imgBlob) {
                formData.append("q4_ans", this.image1imgBlob, this.image1_file_name);
            }
            if (this.image2imgBlob) {
                formData.append("q9_ans", this.image2imgBlob, this.image2_file_name);
            }
            console.log(formData.get('q4_ans'));
            console.log(formData.get('q9_ans'));
            this.apiService.daycareRegistrationStep4(formData).subscribe(data => {
                console.log(data);
                this.loadingController.dismiss();
                this.presentAlert("Daycare Step 4 form submitted successfully");
                this.stepFourForm.reset();
                console.log(data);
            }, err => {
                console.log(err);
                console.log(err.status);
                this.loadingController.dismiss();
            });
        }
    }
    ionViewDidEnter() {
        this.menuCtrl.enable(false);
        this.presentLoading().then(() => {
            this.storage.get('user').then(data => {
                if (data) {
                    var user = JSON.parse(data);
                    this.userid = user.id;
                    console.log('userid', this.userid, user.userid);
                    this.apiService.fetchDayCareStep4(this.userid).then(data => {
                        console.log('fetchDayCareStep4', data.data);
                        var fetchDayCareStep4 = JSON.parse(data.data);
                        if (fetchDayCareStep4) {
                            this.fetchDayCareStep4 = fetchDayCareStep4['a'];
                            if (this.fetchDayCareStep4) {
                                this.child_consent_id = this.fetchDayCareStep4.id;
                                this.img1 = this.fetchDayCareStep4.img1;
                                this.img2 = this.fetchDayCareStep4.img2;
                                this.old_image1 = this.fetchDayCareStep4.image1;
                                this.old_image2 = this.fetchDayCareStep4.image2;
                                this.stepFourForm.patchValue({
                                    'q1_ans': this.fetchDayCareStep4.name1,
                                    'q2_ans': this.fetchDayCareStep4.relationship1,
                                    'q3_ans': this.fetchDayCareStep4.address1,
                                    'q5_ans': this.fetchDayCareStep4.mobile_number1,
                                    'q6_ans': this.fetchDayCareStep4.name2,
                                    'q7_ans': this.fetchDayCareStep4.relationship2,
                                    'q8_ans': this.fetchDayCareStep4.address2,
                                    'q10_ans': this.fetchDayCareStep4.mobile_number2,
                                    'q11_ans': this.fetchDayCareStep4.q1,
                                });
                                this.isDataPresent = true;
                                this.loadingController.dismiss();
                            }
                            else {
                                this.isDataPresent = false;
                                this.loadingController.dismiss();
                            }
                        }
                        else {
                            this.isDataPresent = false;
                            this.loadingController.dismiss();
                        }
                    });
                }
            });
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
                            this.apiService.userDetails(this.userid, 'Daycare').then(data => {
                                console.log(this.fetchDayCareStep1);
                                this.fetchDayCareStep1 = JSON.parse(data.data);
                                if (this.fetchDayCareStep1.status == 'Active' && this.fetchDayCareStep1.Approve_status == 'Active') {
                                    this.router.navigate(['quicktour']);
                                }
                                else {
                                    this.apiService.presentToast('Please wait for your registration approval', 2000);
                                    this.router.navigate(['switchprofile']);
                                    // this.storage.set('type','login').then(_=>{
                                    //   });
                                }
                            });
                        }
                    }
                ],
            });
            yield alert.present();
        });
    }
    presentActionSheet(type) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const actionSheet = yield this.actionSheetController.create({
                header: 'Options',
                cssClass: 'action-sheets-basic-page',
                buttons: [
                    {
                        text: 'Take photo',
                        role: 'destructive',
                        icon: 'camera-outline',
                        handler: () => {
                            if (type == 'image1') {
                                this.takePicture('image1');
                            }
                            else if (type == 'image2') {
                                this.takePicture('image2');
                            }
                        }
                    },
                    {
                        text: 'Choose photo from Gallery',
                        icon: 'images-outline',
                        handler: () => {
                            if (type == 'image1') {
                                this.openGallery('image1');
                            }
                            else if (type == 'image2') {
                                this.openGallery('image2');
                            }
                        }
                    },
                ]
            });
            actionSheet.present();
        });
    }
    takePicture(type) {
        const options = {
            quality: 70,
            destinationType: this.camera.DestinationType.FILE_URI,
            encodingType: this.camera.EncodingType.JPEG,
            mediaType: this.camera.MediaType.PICTURE,
            correctOrientation: true
        };
        this.camera.getPicture(options).then((imageData) => {
            this.file.resolveLocalFilesystemUrl(imageData).then((entry) => {
                entry.file(file => {
                    console.log(file);
                    if (type == 'image1') {
                        this.image1_file_name = file.name;
                        this.image1base64Image = window.Ionic.WebView.convertFileSrc(imageData);
                    }
                    else if (type == 'image2') {
                        this.image2_file_name = file.name;
                        this.image2base64Image = window.Ionic.WebView.convertFileSrc(imageData);
                    }
                    this.cf.detectChanges();
                    this.readFile(file, type);
                });
            });
        }, (err) => {
            this.image1base64Image = null;
            this.image2base64Image = null;
        });
    }
    openGallery(type) {
        const options = {
            quality: 70,
            destinationType: this.camera.DestinationType.FILE_URI,
            encodingType: this.camera.EncodingType.JPEG,
            mediaType: this.camera.MediaType.PICTURE,
            correctOrientation: true,
            sourceType: this.camera.PictureSourceType.PHOTOLIBRARY
        };
        this.camera.getPicture(options).then((imageData) => {
            this.file.resolveLocalFilesystemUrl(imageData).then((entry) => {
                entry.file(file => {
                    console.log(file);
                    if (file.type == 'image/jpeg') {
                        var filename = file.name;
                        var file_ext = (filename.split('.').slice(-1)).join('.');
                        var filename_wo_ext = (filename.split('.').slice(0, -1)).join('.');
                        this.modified_filename = filename_wo_ext + (file.lastModified).toString() + "." + file_ext;
                        console.log('this.child_file_name', this.modified_filename);
                    }
                    else {
                        this.modified_filename = file.name;
                    }
                    if (type == 'image1') {
                        this.image1_file_name = this.modified_filename;
                        this.image1base64Image = window.Ionic.WebView.convertFileSrc(imageData);
                    }
                    else if (type == 'image2') {
                        this.image2_file_name = this.modified_filename;
                        this.image2base64Image = window.Ionic.WebView.convertFileSrc(imageData);
                    }
                    this.cf.detectChanges();
                    this.readFile(file, type);
                });
            });
        }, (err) => {
            // Handle error
        });
    }
    readFile(file, type) {
        const reader = new FileReader();
        reader.onloadend = () => {
            if (type == 'image1') {
                this.image1imgBlob = new Blob([reader.result], {
                    type: file.type
                });
            }
            else if (type == 'image2') {
                this.image2imgBlob = new Blob([reader.result], {
                    type: file.type
                });
            }
            console.log("name", file.name);
        };
        reader.readAsArrayBuffer(file);
    }
    ionViewDidLeave() {
        this.menuCtrl.enable(true);
    }
    ionViewWillEnter() {
        if (this.menuCtrl.isEnabled) {
            console.log('hi');
            this.menuCtrl.swipeGesture(false);
        }
    }
};
ChildotherinfotwoPage.ctorParameters = () => [
    { type: _ionic_storage__WEBPACK_IMPORTED_MODULE_8__["Storage"] },
    { type: _api_service__WEBPACK_IMPORTED_MODULE_7__["ApiService"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["ActionSheetController"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["AlertController"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"] },
    { type: _ionic_native_file_ngx__WEBPACK_IMPORTED_MODULE_10__["File"] },
    { type: _ionic_native_camera_ngx__WEBPACK_IMPORTED_MODULE_9__["Camera"] },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["ChangeDetectorRef"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["LoadingController"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["MenuController"] }
];
ChildotherinfotwoPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_4__["Component"])({
        selector: 'app-childotherinfotwo',
        template: _raw_loader_childotherinfotwo_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_childotherinfotwo_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], ChildotherinfotwoPage);



/***/ })

}]);
//# sourceMappingURL=childotherinfotwo-childotherinfotwo-module-es2015.js.map