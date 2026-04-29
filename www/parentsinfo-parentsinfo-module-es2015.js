(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["parentsinfo-parentsinfo-module"],{

/***/ "AHTF":
/*!***************************************************!*\
  !*** ./src/app/parentsinfo/parentsinfo.module.ts ***!
  \***************************************************/
/*! exports provided: ParentsinfoPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ParentsinfoPageModule", function() { return ParentsinfoPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _parentsinfo_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./parentsinfo-routing.module */ "gYwZ");
/* harmony import */ var _parentsinfo_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./parentsinfo.page */ "n3/i");







let ParentsinfoPageModule = class ParentsinfoPageModule {
};
ParentsinfoPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _parentsinfo_routing_module__WEBPACK_IMPORTED_MODULE_5__["ParentsinfoPageRoutingModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"]
        ],
        declarations: [_parentsinfo_page__WEBPACK_IMPORTED_MODULE_6__["ParentsinfoPage"]]
    })
], ParentsinfoPageModule);



/***/ }),

/***/ "WrwF":
/*!*****************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/parentsinfo/parentsinfo.page.html ***!
  \*****************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header class=\"ion-no-border\">\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n      <ion-back-button></ion-back-button>\n    </ion-buttons>\n    <ion-title>Preschool Addmission Form</ion-title>\n    <!-- <ion-buttons slot=\"start\">\n      <ion-button  shape=\"round\"[routerLink]=\"['/preschoolform']\">\n        <ion-icon color=\"light\" name=\"arrow-back-outline\"></ion-icon>\n      </ion-button>\n    </ion-buttons> -->\n  </ion-toolbar>\n \n\n</ion-header>\n\n<ion-content>\n  <ion-row class=\"ion-text-center margin-ionic-top wrap\">\n    <ion-col size=\"4\">\n      <!-- <div class=\"active \"> -->\n        <ion-icon [routerLink]=\"['/preschoolform']\" name=\"checkmark-circle\" class=\"checkmark\" size=\"large\" color=\"success\"></ion-icon>\n      <!-- </div> -->\n      <p  [routerLink]=\"['/preschoolform']\" class=\"color-green\" >Preschool Registration</p>\n    </ion-col>\n    <ion-col size=\"4\">\n      <img src=\"../../assets/dashboard/checkmark.png\" alt=\"\">\n      <p class=\"color-green\" >Parents Info</p>\n    </ion-col>\n\n    <ion-col size=\"4\" (click)=\"goToStep3()\">\n      <div class=\"icon-circle \" >\n        <ion-icon name=\"ellipse\" class=\"dot\"></ion-icon>\n      </div>\n      <p class=\"color-red heading-3\" >Additional Information</p>\n    </ion-col>\n  </ion-row>\n  <div class=\"margin-ionic\">\n<form [formGroup]=\"preschoolRegTwoForm\" (ngSubmit)=\"onSubmit(preschoolRegTwoForm.value)\">\n   \n\n    <ion-label>Father's Name <span class=\"text-danger\">*</span></ion-label>\n    <ion-item lines=\"none\">\n    <ion-input type=\"text\" formControlName=\"dad_name\"></ion-input>\n    </ion-item>\n    <div class=\"error-div\" *ngIf=\"(dad_name?.invalid && dad_name?.touched) || dad_name?.dirty\">\n      <small *ngIf=\"dad_name.errors?.pattern\" class=\"text-danger\">Enter a valid name</small>\n    </div>\n    <ion-row>\n      <ion-col size=\"6\">\n        <ion-label>Father's Qualification </ion-label>\n        <ion-item lines=\"none\">\n          <ion-input type=\"text\" formControlName=\"dad_education\"></ion-input>\n        </ion-item>\n      </ion-col>\n      <ion-col size=\"6\">\n        <ion-label>Father's Occupation / Profession </ion-label>\n        <ion-item lines=\"none\">\n          <ion-input type=\"text\" formControlName=\"dad_occupationn\"></ion-input>\n        </ion-item>\n        <div class=\"error-div\" *ngIf=\"(dad_occupationn?.invalid && dad_occupationn?.touched) || dad_occupationn?.dirty\">\n          <small *ngIf=\"dad_occupationn.errors?.pattern\" class=\"text-danger\">Enter a valid occupation / profession</small>\n        </div>\n      </ion-col>\n      <ion-col size=\"6\">\n        <ion-label>Father's Mobile Number </ion-label>\n        <ion-item lines=\"none\">\n          <ion-input type=\"tel\" maxLength=\"10\"  formControlName=\"dad_cell_no\"></ion-input>\n        </ion-item>\n        <div class=\"error-div\" *ngIf=\"(dad_cell_no?.invalid && dad_cell_no?.touched) || dad_cell_no?.dirty\">\n          <small *ngIf=\"dad_cell_no.errors?.pattern\" class=\"text-danger\">Enter a valid mobile number</small>\n        </div>\n      </ion-col>\n      <ion-col size=\"6\">\n        <ion-label>Father's Email </ion-label>\n        <ion-item lines=\"none\">\n          <ion-input type=\"text\" formControlName=\"dad_email\"></ion-input>\n        </ion-item>\n        <div class=\"error-div\" *ngIf=\"(dad_email?.invalid && dad_email?.touched) || dad_email?.dirty\">\n          <small *ngIf=\"dad_email.errors?.pattern\" class=\"text-danger\">Enter a valid email</small>\n        </div>\n      </ion-col>\n    </ion-row>\n    <ion-label>Mother's Name <span class=\"text-danger\">*</span></ion-label>\n    <ion-item lines=\"none\">\n    <ion-input type=\"text\" formControlName=\"mom_name\"></ion-input>\n    </ion-item>\n    <div class=\"error-div\" *ngIf=\"(mom_name?.invalid && mom_name?.touched) || mom_name?.dirty\">\n      <small *ngIf=\"mom_name.errors?.pattern\" class=\"text-danger\">Enter a valid name</small>\n    </div>\n    <ion-row>\n      <ion-col size=\"6\">\n        <ion-label>Mother's Qualification </ion-label>\n        <ion-item lines=\"none\">\n          <ion-input type=\"text\" formControlName=\"mom_education\"></ion-input>\n        </ion-item>\n      </ion-col>\n      <ion-col size=\"6\">\n        <ion-label>Mother's Occupation / Profession </ion-label>\n        <ion-item lines=\"none\">\n          <ion-input type=\"text\" formControlName=\"mom_occupation\"></ion-input>\n        </ion-item>\n        <div class=\"error-div\" *ngIf=\"(mom_occupation?.invalid && mom_occupation?.touched) || mom_occupation?.dirty\">\n          <small *ngIf=\"mom_occupation.errors?.pattern\" class=\"text-danger\">Enter a valid occupation / profession</small>\n        </div>\n      </ion-col>\n      <ion-col size=\"6\">\n        <ion-label>Mother's Mobile Number </ion-label>\n        <ion-item lines=\"none\">\n          <ion-input type=\"tel\" maxLength=\"10\" formControlName=\"mom_cell_no\"></ion-input>\n        </ion-item>\n        <div class=\"error-div\" *ngIf=\"(mom_cell_no?.invalid && mom_cell_no?.touched) || mom_cell_no?.dirty\">\n          <small *ngIf=\"mom_cell_no.errors?.pattern\" class=\"text-danger\">Enter a valid mobile number</small>\n        </div>\n      </ion-col>\n      <ion-col size=\"6\">\n        <ion-label>Mother's Email </ion-label>\n        <ion-item lines=\"none\">\n          <ion-input type=\"text\" formControlName=\"mom_email\"></ion-input>\n        </ion-item>\n        <div class=\"error-div\" *ngIf=\"(mom_email?.invalid && mom_email?.touched) || mom_email?.dirty\">\n          <small *ngIf=\"mom_email.errors?.pattern\" class=\"text-danger\">Enter a valid email</small>\n        </div>\n      </ion-col>\n  \n    </ion-row>\n    <ion-label class=\"heading-1\">Siblings of the child </ion-label>\n<ion-row>\n  <ion-col size=\"12\">\n    <ion-label>Name </ion-label>\n    <ion-item lines=\"none\">\n      <ion-input type=\"text\" formControlName=\"child1\"></ion-input>\n    </ion-item>\n    <div class=\"error-div\" *ngIf=\"(child1?.invalid && child1?.touched) || child1?.dirty\">\n      <small *ngIf=\"child1.errors?.pattern\" class=\"text-danger\">Enter a valid name</small>\n    </div>\n  </ion-col>\n  <ion-col size=\"6\">\n    <ion-label>School </ion-label>\n    <ion-item lines=\"none\">\n      <ion-input type=\"text\" formControlName=\"child_school_1\"></ion-input>\n    </ion-item>\n  </ion-col>\n  <ion-col size=\"6\">\n    <ion-label>Class </ion-label>\n    <ion-item lines=\"none\">\n      <ion-input type=\"text\" formControlName=\"child_class1\"></ion-input>\n    </ion-item>\n  </ion-col>\n  \n</ion-row>\n<ion-row>\n  <ion-col size=\"12\">\n    <ion-label>Name </ion-label>\n    <ion-item lines=\"none\">\n      <ion-input type=\"text\" formControlName=\"child2\"></ion-input>\n    </ion-item>\n    <div class=\"error-div\" *ngIf=\"(child2?.invalid && child2?.touched) || child2?.dirty\">\n      <small *ngIf=\"child2.errors?.pattern\" class=\"text-danger\">Enter a valid name</small>\n    </div>\n  </ion-col>\n  <ion-col size=\"6\">\n    <ion-label>School </ion-label>\n    <ion-item lines=\"none\">\n      <ion-input type=\"text\" formControlName=\"child_school_2\"></ion-input>\n    </ion-item>\n  </ion-col>\n  <ion-col size=\"6\">\n    <ion-label>Class </ion-label>\n    <ion-item lines=\"none\">\n      <ion-input type=\"text\" formControlName=\"child_class2\"></ion-input>\n    </ion-item>\n  </ion-col>\n  \n</ion-row>\n<ion-label class=\"heading-1\">Other Family Members At Home</ion-label>\n\n    <ion-row>\n      <ion-col size=\"6\">\n        <ion-label>Name </ion-label>\n        <ion-item lines=\"none\">\n          <ion-input type=\"text\" formControlName=\"other_name1\"></ion-input>\n        </ion-item>\n        <div class=\"error-div\" *ngIf=\"(other_name1?.invalid && other_name1?.touched) || other_name1?.dirty\">\n          <small *ngIf=\"other_name1.errors?.pattern\" class=\"text-danger\">Enter a valid name</small>\n        </div>\n      </ion-col>\n      <ion-col size=\"6\">\n        <ion-label>Relationship </ion-label>\n        <ion-item lines=\"none\">\n          <ion-input type=\"text\" formControlName=\"other_rel1\"></ion-input>\n        </ion-item>\n        <div class=\"error-div\" *ngIf=\"(other_rel1?.invalid && other_rel1?.touched) || other_rel1?.dirty\">\n          <small *ngIf=\"other_rel1.errors?.pattern\" class=\"text-danger\">Enter a valid relationship</small>\n        </div>\n      </ion-col>\n      <ion-col size=\"6\">\n      <ion-label>Name </ion-label>\n      <ion-item lines=\"none\">\n        <ion-input type=\"text\" formControlName=\"other_name2\"></ion-input>\n      </ion-item>\n      <div class=\"error-div\" *ngIf=\"(other_name2?.invalid && other_name2?.touched) || other_name2?.dirty\">\n        <small *ngIf=\"other_name2.errors?.pattern\" class=\"text-danger\">Enter a valid name</small>\n      </div>\n      </ion-col>\n      <ion-col size=\"6\">\n      <ion-label>Relationship </ion-label>\n      <ion-item lines=\"none\">\n        <ion-input type=\"text\" formControlName=\"other_rel2\"></ion-input>\n      </ion-item>\n      <div class=\"error-div\" *ngIf=\"(other_rel2?.invalid && other_rel2?.touched) || other_rel2?.dirty\">\n        <small *ngIf=\"other_rel2.errors?.pattern\" class=\"text-danger\">Enter a valid relationship</small>\n      </div>\n      </ion-col>\n      <ion-col size=\"12\">\n      <ion-label>Person attending the child at home </ion-label>\n      <ion-item lines=\"none\">\n        <ion-input type=\"text\" formControlName=\"q1_ans\"></ion-input>\n      </ion-item>\n      <div class=\"error-div\" *ngIf=\"(q1_ans?.invalid && q1_ans?.touched) || q1_ans?.dirty\">\n        <small *ngIf=\"q1_ans.errors?.pattern\" class=\"text-danger\">Enter a valid name</small>\n      </div>\n      </ion-col>\n      <ion-col size=\"12\">\n        <ion-label>Is the child currently attending Prangan Daycare ?</ion-label>\n      \n        <ion-radio-group formControlName=\"q2\" allowEmptySelection=\"false\" color=\"primary\" >\n          <ion-row>\n            <ion-col size=\"4\">\n              <ion-item lines=\"none\">\n                <ion-radio value=\"Yes\"></ion-radio>\n                <ion-label>Yes</ion-label>\n              </ion-item>\n            </ion-col>\n            <ion-col size=\"4\">\n              <ion-item lines=\"none\">\n                <ion-radio value=\"No\"></ion-radio>\n                <ion-label>No</ion-label>\n              </ion-item>\n            </ion-col>\n       \n          </ion-row>\n        </ion-radio-group>\n      </ion-col>\n\n    </ion-row>\n   \n  <br>\n\n  <div class=\"ion-text-center\">\n  \n      <ion-button shape=\"round\" type=\"button\" (click)=\"goToStep3()\" [disabled]=\"!isFormSubmitted\" color=\"primary\">\n        Next\n      </ion-button>\n      <ion-button [disabled]=\"preschoolRegTwoForm.invalid\" shape=\"round\" type=\"submit\" color=\"primary\">\n        Submit\n      </ion-button>\n   \n  </div>\n</form>  \n  </div>\n</ion-content>\n");

/***/ }),

/***/ "gYwZ":
/*!***********************************************************!*\
  !*** ./src/app/parentsinfo/parentsinfo-routing.module.ts ***!
  \***********************************************************/
/*! exports provided: ParentsinfoPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ParentsinfoPageRoutingModule", function() { return ParentsinfoPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _parentsinfo_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./parentsinfo.page */ "n3/i");




const routes = [
    {
        path: '',
        component: _parentsinfo_page__WEBPACK_IMPORTED_MODULE_3__["ParentsinfoPage"]
    }
];
let ParentsinfoPageRoutingModule = class ParentsinfoPageRoutingModule {
};
ParentsinfoPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], ParentsinfoPageRoutingModule);



/***/ }),

/***/ "n3/i":
/*!*************************************************!*\
  !*** ./src/app/parentsinfo/parentsinfo.page.ts ***!
  \*************************************************/
/*! exports provided: ParentsinfoPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ParentsinfoPage", function() { return ParentsinfoPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_parentsinfo_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./parentsinfo.page.html */ "WrwF");
/* harmony import */ var _parentsinfo_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./parentsinfo.page.scss */ "o/Kp");
/* harmony import */ var _api_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./../api.service */ "yTNM");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _ionic_storage__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ionic/storage */ "e8h1");










let ParentsinfoPage = class ParentsinfoPage {
    constructor(apiService, alertController, router, storage, loadingController, menuCtrl) {
        this.apiService = apiService;
        this.alertController = alertController;
        this.router = router;
        this.storage = storage;
        this.loadingController = loadingController;
        this.menuCtrl = menuCtrl;
        this.isFormSubmitted = false;
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
    ionViewDidEnter() {
        this.menuCtrl.enable(false);
        this.presentLoading().then(() => {
            this.storage.get('user').then(data => {
                this.id = JSON.parse(data).id;
                this.apiService.fetchPreschoolRegStep2(this.id).then(data => {
                    console.log('fetchPreschoolRegStep2', data);
                    this.fetchPreschoolRegStep2data = JSON.parse(data.data);
                    if (this.fetchPreschoolRegStep2data.id) {
                        this.isFormSubmitted = true;
                        this.form_data_id = this.fetchPreschoolRegStep2data.id;
                        this.preschoolRegTwoForm.patchValue({
                            mom_name: this.fetchPreschoolRegStep2data.mother_name,
                            dad_name: this.fetchPreschoolRegStep2data.father_name,
                            mom_education: this.fetchPreschoolRegStep2data.mother_qualification,
                            dad_education: this.fetchPreschoolRegStep2data.father_qualification,
                            mom_occupation: this.fetchPreschoolRegStep2data.mother_occupation,
                            dad_occupationn: this.fetchPreschoolRegStep2data.father_occupation,
                            mom_cell_no: this.fetchPreschoolRegStep2data.mother_mobile_number,
                            dad_cell_no: this.fetchPreschoolRegStep2data.father_mobile_number,
                            mom_email: this.fetchPreschoolRegStep2data.mother_email_id,
                            dad_email: this.fetchPreschoolRegStep2data.father_email_id,
                            child1: this.fetchPreschoolRegStep2data.sibling_name1,
                            child_school_1: this.fetchPreschoolRegStep2data.sibling_school1,
                            child_class1: this.fetchPreschoolRegStep2data.sibling_class1,
                            child2: this.fetchPreschoolRegStep2data.sibling_name2,
                            child_school_2: this.fetchPreschoolRegStep2data.sibling_school2,
                            child_class2: this.fetchPreschoolRegStep2data.sibling_class1,
                            other_name1: this.fetchPreschoolRegStep2data.other_name1,
                            other_rel1: this.fetchPreschoolRegStep2data.other_relation1,
                            other_name2: this.fetchPreschoolRegStep2data.other_name2,
                            other_rel2: this.fetchPreschoolRegStep2data.other_relation2,
                            q1_ans: this.fetchPreschoolRegStep2data.q1,
                            q2: this.fetchPreschoolRegStep2data.q2,
                        });
                        this.isDataPresent = true;
                        this.loadingController.dismiss();
                    }
                    else {
                        this.isDataPresent = false;
                        this.loadingController.dismiss();
                    }
                }).catch(err => {
                    console.log('err', err);
                });
            });
        });
    }
    ngOnInit() {
        this.menuCtrl.enable(false);
        this.preschoolRegTwoForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormGroup"]({
            mom_name: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].pattern(/^[a-zA-Z\. ]+$/)]),
            dad_name: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].pattern(/^[a-zA-Z\. ]+$/)]),
            mom_education: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"](''),
            dad_education: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"](''),
            mom_occupation: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].pattern(/^[a-zA-z ]+$/)]),
            dad_occupationn: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].pattern(/^[a-zA-z ]+$/)]),
            mom_cell_no: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].maxLength(10), _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].minLength(10), _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].pattern(/^[0-9]{10}$/)]),
            dad_cell_no: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].maxLength(10), _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].minLength(10), _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].pattern(/^[0-9]{10}$/)]),
            mom_email: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].pattern(/^(?!\_)(?!_*_$)([0-9A-Za-z]+\.)*[a-zA-Z0-9_+-]+@([\w+-]+\.)*[\w+-]+\.[a-zA-Z]{2,4}$/)]),
            dad_email: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].pattern(/^(?!\_)(?!_*_$)([0-9A-Za-z]+\.)*[a-zA-Z0-9_+-]+@([\w+-]+\.)*[\w+-]+\.[a-zA-Z]{2,4}$/)]),
            child1: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].pattern(/^[a-zA-z ]+$/)]),
            child_school_1: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"](''),
            child_class1: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"](''),
            child2: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].pattern(/^[a-zA-z ]+$/)]),
            child_school_2: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"](''),
            child_class2: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"](''),
            other_name1: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].pattern(/^[a-zA-Z\. ]+$/)]),
            other_rel1: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].pattern(/^[a-zA-z ]+$/)]),
            other_name2: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].pattern(/^[a-zA-Z\. ]+$/)]),
            other_rel2: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].pattern(/^[a-zA-z ]+$/)]),
            q1_ans: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"](''),
            q2: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"](''),
        });
    }
    ionViewWillEnter() {
        if (this.menuCtrl.isEnabled) {
            console.log('hi');
            this.menuCtrl.swipeGesture(false);
        }
    }
    get mom_name() {
        return this.preschoolRegTwoForm.get('mom_name');
    }
    get dad_name() {
        return this.preschoolRegTwoForm.get('dad_name');
    }
    get mom_education() {
        return this.preschoolRegTwoForm.get('mom_education');
    }
    get dad_education() {
        return this.preschoolRegTwoForm.get('dad_education');
    }
    get mom_occupation() {
        return this.preschoolRegTwoForm.get('mom_occupation');
    }
    get dad_occupationn() {
        return this.preschoolRegTwoForm.get('dad_occupationn');
    }
    get mom_cell_no() {
        return this.preschoolRegTwoForm.get('mom_cell_no');
    }
    get dad_cell_no() {
        return this.preschoolRegTwoForm.get('dad_cell_no');
    }
    get mom_email() {
        return this.preschoolRegTwoForm.get('mom_email');
    }
    get dad_email() {
        return this.preschoolRegTwoForm.get('dad_email');
    }
    get child1() {
        return this.preschoolRegTwoForm.get('child1');
    }
    get child_school_1() {
        return this.preschoolRegTwoForm.get('child_school_1');
    }
    get child_class1() {
        return this.preschoolRegTwoForm.get('child_class1');
    }
    get child2() {
        return this.preschoolRegTwoForm.get('child2');
    }
    get child_school_2() {
        return this.preschoolRegTwoForm.get('child_school_2');
    }
    get child_class2() {
        return this.preschoolRegTwoForm.get('child_class2');
    }
    get other_name1() {
        return this.preschoolRegTwoForm.get('other_name1');
    }
    get other_rel1() {
        return this.preschoolRegTwoForm.get('other_rel1');
    }
    get other_name2() {
        return this.preschoolRegTwoForm.get('other_name2');
    }
    get other_rel2() {
        return this.preschoolRegTwoForm.get('other_rel2');
    }
    get q1_ans() {
        return this.preschoolRegTwoForm.get('q1_ans');
    }
    get q2() {
        return this.preschoolRegTwoForm.get('q2');
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
                            this.router.navigate(['preschoolotherform']);
                        }
                    }
                ],
            });
            yield alert.present();
        });
    }
    onSubmit(body) {
        this.presentLoading();
        console.log('body', body);
        const formData = new FormData();
        formData.append("mom_name", body['mom_name']);
        formData.append("dad_name", body['dad_name']);
        formData.append("mom_education", body['mom_education']);
        formData.append("dad_education", body['dad_education']);
        formData.append("mom_occupation", body['mom_occupation']);
        formData.append("dad_occupationn", body['dad_occupationn']);
        formData.append("mom_cell_no", body['mom_cell_no']);
        formData.append("dad_cell_no", body['dad_cell_no']);
        formData.append("mom_email", body['mom_email']);
        formData.append("dad_email", body['dad_email']);
        formData.append("child1", body['child1']);
        formData.append("child_school_1", body['child_school_1']);
        formData.append("child_class1", body['child_class1']);
        formData.append("child2", body['child2']);
        formData.append("child_school_2", body['child_school_2']);
        formData.append("child_class2", body['child_class2']);
        formData.append("other_name1", body['other_name1']);
        formData.append("other_rel1", body['other_rel1']);
        formData.append("other_name2", body['other_name2']);
        formData.append("other_rel2", body['other_rel2']);
        formData.append("q1_ans", body['q1_ans']);
        formData.append("q2", body['q2']);
        if (this.isDataPresent) {
            formData.append("userid", this.id);
            formData.append("id", this.form_data_id);
            this.apiService.updatePreschoolRegStep2(formData).subscribe(data => {
                console.log('data', data);
                this.loadingController.dismiss();
                this.presentAlert("Parents info form updated successfully");
                console.log(data);
            }, err => {
                console.log(err);
                this.loadingController.dismiss();
                this.apiService.presentToast(err.error, 2000);
            });
        }
        else {
            formData.append("userid", this.id);
            this.apiService.preschoolRegStep2(formData).subscribe(data => {
                console.log('data', data);
                this.loadingController.dismiss();
                this.presentAlert("Parents info form  submitted successfully");
                this.preschoolRegTwoForm.reset();
                console.log(data);
            }, err => {
                console.log(err);
                this.loadingController.dismiss();
                this.apiService.presentToast(err.error, 2000);
            });
        }
    }
    ionViewDidLeave() {
        this.menuCtrl.enable(true);
    }
    goToStep3() {
        if (this.isFormSubmitted) {
            this.router.navigateByUrl('/preschoolotherform');
        }
        else {
            this.apiService.presentToast('Please submit  form to go next step', 3000);
        }
    }
};
ParentsinfoPage.ctorParameters = () => [
    { type: _api_service__WEBPACK_IMPORTED_MODULE_3__["ApiService"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_7__["AlertController"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"] },
    { type: _ionic_storage__WEBPACK_IMPORTED_MODULE_8__["Storage"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_7__["LoadingController"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_7__["MenuController"] }
];
ParentsinfoPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_5__["Component"])({
        selector: 'app-parentsinfo',
        template: _raw_loader_parentsinfo_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_parentsinfo_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], ParentsinfoPage);



/***/ }),

/***/ "o/Kp":
/*!***************************************************!*\
  !*** ./src/app/parentsinfo/parentsinfo.page.scss ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".wrap {\n  text-align: center;\n  position: relative;\n}\n\n.wrap:before {\n  content: \"\";\n  position: absolute;\n  top: 20%;\n  left: 18%;\n  border-top: 0.5px solid #677483;\n  border-width: thin;\n  width: 65%;\n  transform: translateY(-50%);\n  border-style: dashed;\n}\n\n.active {\n  border: 1px solid #2dd36f !important;\n  color: #ffffff;\n}\n\n.icon-circle {\n  position: relative;\n  display: inline-block;\n  margin: -1px;\n  width: 30px;\n  height: 30px;\n  font-size: 26px;\n  border-radius: 50%;\n  border: 1px solid #202020;\n  background: #fff;\n  color: #2dd36f;\n  text-align: center;\n}\n\n.icon-circle ion-icon {\n  margin-top: 2px;\n  font-size: 20px;\n}\n\n.heading-1 {\n  color: #676767;\n  margin-bottom: 0;\n  font-size: 16px;\n}\n\n.heading {\n  color: #9b9ca6;\n  margin-bottom: 0;\n  font-size: 14px;\n}\n\nion-label {\n  color: #9b9ca6;\n  font-size: 14px;\n}\n\nion-input {\n  border: 1px solid #9b9ca6;\n  border-radius: 5px;\n  --padding-start: 5px !important;\n  height: 35px;\n}\n\nion-textarea {\n  border: 1px solid #9b9ca6;\n  border-radius: 5px;\n  --padding-start: 5px !important;\n}\n\nion-datetime {\n  border: 1px solid #9b9ca6;\n  border-radius: 5px;\n  --padding-start: 5px !important;\n  width: 100%;\n  height: 35px;\n}\n\nion-item {\n  --padding-start: 0;\n  --ripple-color: transparent;\n  --background-activated: transparent;\n  --background-activated-opacity:transparent;\n  --background-focused: transparent;\n  --background-focused-opacity:transparent;\n  --background-hover: transparent;\n  --background-hover-opacity:transparent;\n}\n\nion-item ion-label {\n  font-size: 12px;\n  color: #9b9ca6;\n}\n\nion-radio-group ion-item {\n  border-bottom: 0;\n}\n\nion-radio-group ion-col {\n  padding-left: 0;\n}\n\nion-radio-group ion-radio {\n  margin-right: 8px;\n  width: 18px;\n  height: 18px;\n}\n\nion-col {\n  padding-left: 0;\n}\n\n.submit-btn ion-button {\n  text-transform: none;\n  width: 80%;\n  margin-right: 8px;\n}\n\n.choose-btn {\n  --background: #ee4a35;\n  text-transform: none;\n}\n\n.heading-3 {\n  margin-top: 16px;\n  color: #202020;\n}\n\n.color-green {\n  color: #2dd36f;\n  font-weight: bold;\n  margin-top: 10px;\n}\n\n.checkmark {\n  margin-top: -2px;\n}\n\n.dot {\n  color: #202020 !important;\n  margin-top: 2px;\n}\n\n.other-info {\n  margin-top: 16px;\n}\n\nimg {\n  width: 32px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3BhcmVudHNpbmZvLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGtCQUFBO0VBQ0Esa0JBQUE7QUFDSjs7QUFFRTtFQUNFLFdBQUE7RUFDQSxrQkFBQTtFQUNBLFFBQUE7RUFDQSxTQUFBO0VBQ0EsK0JBQUE7RUFDQSxrQkFBQTtFQUNBLFVBQUE7RUFDQSwyQkFBQTtFQUNBLG9CQUFBO0FBQ0o7O0FBQ0U7RUFDRSxvQ0FBQTtFQUNBLGNBQUE7QUFFSjs7QUFBRTtFQUNFLGtCQUFBO0VBQ0EscUJBQUE7RUFDQSxZQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxlQUFBO0VBQ0Esa0JBQUE7RUFDQSx5QkFBQTtFQUNBLGdCQUFBO0VBQ0EsY0FBQTtFQUNBLGtCQUFBO0FBR0o7O0FBREk7RUFDSSxlQUFBO0VBQ0EsZUFBQTtBQUdSOztBQUdFO0VBQ0UsY0FBQTtFQUNBLGdCQUFBO0VBQ0EsZUFBQTtBQUFKOztBQUVBO0VBQ0ksY0FBQTtFQUNBLGdCQUFBO0VBQ0EsZUFBQTtBQUNKOztBQUNBO0VBQ0ksY0FBQTtFQUNBLGVBQUE7QUFFSjs7QUFBQTtFQUNJLHlCQUFBO0VBQ0Esa0JBQUE7RUFDQSwrQkFBQTtFQUNBLFlBQUE7QUFHSjs7QUFEQTtFQUNJLHlCQUFBO0VBQ0Esa0JBQUE7RUFDQSwrQkFBQTtBQUlKOztBQUZBO0VBQ0kseUJBQUE7RUFDQSxrQkFBQTtFQUNBLCtCQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7QUFLSjs7QUFGQTtFQUVJLGtCQUFBO0VBQ0EsMkJBQUE7RUFDQSxtQ0FBQTtFQUNBLDBDQUFBO0VBQ0EsaUNBQUE7RUFDQSx3Q0FBQTtFQUNBLCtCQUFBO0VBQ0Esc0NBQUE7QUFJSjs7QUFGSTtFQUNJLGVBQUE7RUFDSixjQUFBO0FBSUo7O0FBQ1E7RUFDSSxnQkFBQTtBQUVaOztBQUFRO0VBQ0ksZUFBQTtBQUVaOztBQUFRO0VBQ0EsaUJBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtBQUVSOztBQUVJO0VBQ0ksZUFBQTtBQUNSOztBQUlTO0VBQ0csb0JBQUE7RUFFQSxVQUFBO0VBQ0EsaUJBQUE7QUFGWjs7QUFNSTtFQUNJLHFCQUFBO0VBQ0Esb0JBQUE7QUFIUjs7QUFNSTtFQUNJLGdCQUFBO0VBQ0EsY0FBQTtBQUhSOztBQUtJO0VBQ0ksY0FBQTtFQUNBLGlCQUFBO0VBQ0EsZ0JBQUE7QUFGUjs7QUFJSTtFQUNJLGdCQUFBO0FBRFI7O0FBR0k7RUFDSSx5QkFBQTtFQUNBLGVBQUE7QUFBUjs7QUFFSTtFQUNJLGdCQUFBO0FBQ1I7O0FBQ0k7RUFDSSxXQUFBO0FBRVIiLCJmaWxlIjoicGFyZW50c2luZm8ucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLndyYXAge1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gIH1cclxuICBcclxuICAud3JhcDpiZWZvcmUge1xyXG4gICAgY29udGVudDogXCJcIjtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIHRvcDogMjAlO1xyXG4gICAgbGVmdDogMTglO1xyXG4gICAgYm9yZGVyLXRvcDogMC41cHggc29saWQgIzY3NzQ4MztcclxuICAgIGJvcmRlci13aWR0aDogdGhpbjtcclxuICAgIHdpZHRoOiA2NSU7XHJcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTUwJSk7XHJcbiAgICBib3JkZXItc3R5bGU6IGRhc2hlZDtcclxuICB9XHJcbiAgLmFjdGl2ZXtcclxuICAgIGJvcmRlcjogMXB4IHNvbGlkICMyZGQzNmYgIWltcG9ydGFudDtcclxuICAgIGNvbG9yOiAjZmZmZmZmO1xyXG4gIH1cclxuICAuaWNvbi1jaXJjbGV7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgICBtYXJnaW46IC0xcHg7XHJcbiAgICB3aWR0aDogMzBweDtcclxuICAgIGhlaWdodDogMzBweDtcclxuICAgIGZvbnQtc2l6ZTogMjZweDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcclxuICAgIGJvcmRlcjogMXB4IHNvbGlkICMyMDIwMjA7XHJcbiAgICBiYWNrZ3JvdW5kOiAjZmZmO1xyXG4gICAgY29sb3I6ICMyZGQzNmY7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcblxyXG4gICAgaW9uLWljb257XHJcbiAgICAgICAgbWFyZ2luLXRvcDogMnB4O1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMjBweDtcclxuICAgIH1cclxuICBcclxuICB9XHJcbiAgXHJcbiAgXHJcbiAgLmhlYWRpbmctMXtcclxuICAgIGNvbG9yOiAjNjc2NzY3O1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMDtcclxuICAgIGZvbnQtc2l6ZTogMTZweDtcclxufVxyXG4uaGVhZGluZ3tcclxuICAgIGNvbG9yOiAjOWI5Y2E2O1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMDtcclxuICAgIGZvbnQtc2l6ZTogMTRweDtcclxufVxyXG5pb24tbGFiZWx7XHJcbiAgICBjb2xvcjogIzliOWNhNjtcclxuICAgIGZvbnQtc2l6ZTogMTRweDtcclxufVxyXG5pb24taW5wdXQge1xyXG4gICAgYm9yZGVyOiAxcHggc29saWQgIzliOWNhNjtcclxuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcclxuICAgIC0tcGFkZGluZy1zdGFydDogNXB4ICFpbXBvcnRhbnQ7XHJcbiAgICBoZWlnaHQ6MzVweDtcclxufVxyXG5pb24tdGV4dGFyZWF7XHJcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjOWI5Y2E2O1xyXG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xyXG4gICAgLS1wYWRkaW5nLXN0YXJ0OiA1cHggIWltcG9ydGFudDtcclxufVxyXG5pb24tZGF0ZXRpbWV7XHJcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjOWI5Y2E2O1xyXG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xyXG4gICAgLS1wYWRkaW5nLXN0YXJ0OiA1cHggIWltcG9ydGFudDtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgaGVpZ2h0OjM1cHg7XHJcblxyXG59XHJcbmlvbi1pdGVte1xyXG4gICAgLy8gYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICM2Nzc0ODM7XHJcbiAgICAtLXBhZGRpbmctc3RhcnQ6IDA7XHJcbiAgICAtLXJpcHBsZS1jb2xvcjogdHJhbnNwYXJlbnQ7XHJcbiAgICAtLWJhY2tncm91bmQtYWN0aXZhdGVkOiB0cmFuc3BhcmVudDtcclxuICAgIC0tYmFja2dyb3VuZC1hY3RpdmF0ZWQtb3BhY2l0eTp0cmFuc3BhcmVudDtcclxuICAgIC0tYmFja2dyb3VuZC1mb2N1c2VkOiB0cmFuc3BhcmVudDtcclxuICAgIC0tYmFja2dyb3VuZC1mb2N1c2VkLW9wYWNpdHk6dHJhbnNwYXJlbnQ7XHJcbiAgICAtLWJhY2tncm91bmQtaG92ZXIgIDogdHJhbnNwYXJlbnQ7XHJcbiAgICAtLWJhY2tncm91bmQtaG92ZXItb3BhY2l0eSAgOnRyYW5zcGFyZW50O1xyXG5cclxuICAgIGlvbi1sYWJlbCB7XHJcbiAgICAgICAgZm9udC1zaXplOiAxMnB4O1xyXG4gICAgY29sb3I6ICM5YjljYTY7XHJcblxyXG4gICAgfVxyXG59XHJcbiAgICBpb24tcmFkaW8tZ3JvdXB7XHJcbiAgICAgICAgaW9uLWl0ZW17XHJcbiAgICAgICAgICAgIGJvcmRlci1ib3R0b206IDA7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlvbi1jb2wge1xyXG4gICAgICAgICAgICBwYWRkaW5nLWxlZnQ6IDA7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlvbi1yYWRpb3tcclxuICAgICAgICBtYXJnaW4tcmlnaHQ6IDhweDtcclxuICAgICAgICB3aWR0aDogMThweDtcclxuICAgICAgICBoZWlnaHQ6IDE4cHg7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGlvbi1jb2wge1xyXG4gICAgICAgIHBhZGRpbmctbGVmdDogMDtcclxuICAgIH1cclxuXHJcbiAgICAuc3VibWl0LWJ0biBcclxuICAgICB7XHJcbiAgICAgICAgIGlvbi1idXR0b24ge1xyXG4gICAgICAgICAgICB0ZXh0LXRyYW5zZm9ybTogbm9uZTtcclxuICAgICAgICAgICBcclxuICAgICAgICAgICAgd2lkdGg6IDgwJTtcclxuICAgICAgICAgICAgbWFyZ2luLXJpZ2h0OiA4cHg7XHJcbiAgICAgICAgIH1cclxuICAgICAgIFxyXG4gICAgfVxyXG4gICAgLmNob29zZS1idG57XHJcbiAgICAgICAgLS1iYWNrZ3JvdW5kOiAjZWU0YTM1O1xyXG4gICAgICAgIHRleHQtdHJhbnNmb3JtOiBub25lO1xyXG5cclxuICAgIH1cclxuICAgIC5oZWFkaW5nLTN7XHJcbiAgICAgICAgbWFyZ2luLXRvcDogMTZweDtcclxuICAgICAgICBjb2xvcjogIzIwMjAyMDtcclxuICAgIH1cclxuICAgIC5jb2xvci1ncmVlbntcclxuICAgICAgICBjb2xvcjogIzJkZDM2ZjtcclxuICAgICAgICBmb250LXdlaWdodDogYm9sZDtcclxuICAgICAgICBtYXJnaW4tdG9wOiAxMHB4O1xyXG4gICAgfVxyXG4gICAgLmNoZWNrbWFya3tcclxuICAgICAgICBtYXJnaW4tdG9wOiAtMnB4O1xyXG4gICAgfVxyXG4gICAgLmRvdHtcclxuICAgICAgICBjb2xvcjogIzIwMjAyMCAhaW1wb3J0YW50O1xyXG4gICAgICAgIG1hcmdpbi10b3A6IDJweDtcclxuICAgIH1cclxuICAgIC5vdGhlci1pbmZvIHtcclxuICAgICAgICBtYXJnaW4tdG9wOiAxNnB4O1xyXG4gICAgfVxyXG4gICAgaW1nIHtcclxuICAgICAgICB3aWR0aDogMzJweDtcclxuICAgIH0iXX0= */");

/***/ })

}]);
//# sourceMappingURL=parentsinfo-parentsinfo-module-es2015.js.map