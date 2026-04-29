(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["addinquiry-addinquiry-module"],{

/***/ "16zU":
/*!***********************************************!*\
  !*** ./src/app/addinquiry/addinquiry.page.ts ***!
  \***********************************************/
/*! exports provided: AddinquiryPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddinquiryPage", function() { return AddinquiryPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_addinquiry_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./addinquiry.page.html */ "sHQZ");
/* harmony import */ var _addinquiry_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./addinquiry.page.scss */ "r718");
/* harmony import */ var _api_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./../api.service */ "yTNM");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _ionic_storage__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic/storage */ "e8h1");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/router */ "tyNb");









let AddinquiryPage = class AddinquiryPage {
    constructor(apiService, menuCtrl, storage, router, alertController) {
        this.apiService = apiService;
        this.menuCtrl = menuCtrl;
        this.storage = storage;
        this.router = router;
        this.alertController = alertController;
        this.isLoggedIn = false;
        this.todays_date = new Date().toJSON().split('T')[0];
    }
    ngOnInit() {
        this.menuCtrl.enable(false);
        this.enquiryForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormGroup"]({
            branch_id: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required]),
            class: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required]),
            first_name: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].pattern(/^[a-zA-Z\. ]+$/)]),
            last_name: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].pattern(/^[a-zA-Z\. ]+$/)]),
            d_o_b: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required]),
            mothers_name: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].pattern(/^[a-zA-Z\. ]+$/)]),
            mothers_no: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].maxLength(10), _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].minLength(10), _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].pattern(/^[0-9]{10}$/)]),
            mothers_email: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].pattern(/^(?!\_)(?!_*_$)([0-9A-Za-z]+\.)*[a-zA-Z0-9_+-]+@([\w+-]+\.)*[\w+-]+\.[a-zA-Z]{2,4}$/)]),
            mothers_job_profile: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].pattern(/^[a-zA-Z\. ]+$/)]),
            fathers_name: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].pattern(/^[a-zA-Z\. ]+$/)]),
            fathers_no: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].maxLength(10), _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].minLength(10), _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].pattern(/^[0-9]{10}$/)]),
            fathers_email: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].pattern(/^(?!\_)(?!_*_$)([0-9A-Za-z]+\.)*[a-zA-Z0-9_+-]+@([\w+-]+\.)*[\w+-]+\.[a-zA-Z]{2,4}$/)]),
            fathers_job_profile: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].pattern(/^[a-zA-Z\. ]+$/)]),
            siblings: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].pattern(/^[a-zA-Z\. ]+$/)]),
            siblings_name: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].pattern(/^[a-zA-Z\. ]+$/)]),
            sibling_d_o_b: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"](''),
            // child_age:new FormControl('',[Validators.required]),
            gender: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required]),
            address: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].maxLength(100), _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].pattern("^[a-zA-Z0-9,\/&(). ]{0,150}$")]),
            // mobile_1:new FormControl('',[Validators.required,Validators.maxLength(10),Validators.minLength(10),Validators.pattern(/^[0-9]{10}$/)]),
            // mobile_2:new FormControl('',[Validators.required,Validators.maxLength(10),Validators.minLength(10),Validators.pattern(/^[0-9]{10}$/)]),   
            // // date:new FormControl('',[Validators.required]),  
            // email_1:new FormControl('',[Validators.required,Validators.pattern(/^(?!\_)(?!_*_$)([0-9A-Za-z]+\.)*[a-zA-Z0-9_+-]+@([\w+-]+\.)*[\w+-]+\.[a-zA-Z]{2,4}$/)]),
            // email_2:new FormControl('',[Validators.required,Validators.pattern(/^(?!\_)(?!_*_$)([0-9A-Za-z]+\.)*[a-zA-Z0-9_+-]+@([\w+-]+\.)*[\w+-]+\.[a-zA-Z]{2,4}$/)]),   
            q1: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required]),
        });
    }
    get branch_id() {
        return this.enquiryForm.get('branch_id');
    }
    get class() {
        return this.enquiryForm.get('class');
    }
    get first_name() {
        return this.enquiryForm.get('first_name');
    }
    get last_name() {
        return this.enquiryForm.get('last_name');
    }
    get d_o_b() {
        return this.enquiryForm.get('d_o_b');
    }
    // get child_age(){
    //   return this.enquiryForm.get('child_age')
    // }
    get gender() {
        return this.enquiryForm.get('gender');
    }
    get address() {
        return this.enquiryForm.get('address');
    }
    // get mobile_1(){
    //   return this.enquiryForm.get('mobile_1')
    // }
    // get mobile_2(){
    //   return this.enquiryForm.get('mobile_2')
    // }
    // get date(){
    //   return this.enquiryForm.get('date')
    // }
    // get email_1(){
    //   return this.enquiryForm.get('email_1')
    // }
    // get email_2(){
    //   return this.enquiryForm.get('email_2')
    // }
    get q1() {
        return this.enquiryForm.get('q1');
    }
    get mothers_name() {
        return this.enquiryForm.get('mothers_name');
    }
    get mothers_no() {
        return this.enquiryForm.get('mothers_no');
    }
    get mothers_email() {
        return this.enquiryForm.get('mothers_email');
    }
    get mothers_job_profile() {
        return this.enquiryForm.get('mothers_job_profile');
    }
    get fathers_name() {
        return this.enquiryForm.get('fathers_name');
    }
    get fathers_no() {
        return this.enquiryForm.get('fathers_no');
    }
    get fathers_email() {
        return this.enquiryForm.get('fathers_email');
    }
    get fathers_job_profile() {
        return this.enquiryForm.get('fathers_job_profile');
    }
    get siblings() {
        return this.enquiryForm.get('siblings');
    }
    get siblings_name() {
        return this.enquiryForm.get('siblings_name');
    }
    get sibling_d_o_b() {
        return this.enquiryForm.get('sibling_d_o_b');
    }
    ionViewDidEnter() {
        this.apiService.getBranches().then(data => {
            this.branches = JSON.parse(data.data);
        });
    }
    onSubmit(body) {
        body['date'] = new Date();
        console.log('body', body);
        this.apiService.addEnquiry(body).then(data => {
            console.log('data', data);
            this.presentAlert('Enquiry added succsessfully');
            this.enquiryForm.reset({
                branch_id: '',
                class: '',
                first_name: '',
                last_name: '',
                d_o_b: '',
                child_age: '',
                gender: '',
                address: '',
                mobile_1: '',
                mobile_2: '',
                email_1: '',
                email_2: '',
                q1: '',
            });
        }).catch(err => {
            this.apiService.presentToast(err, 2000);
        });
    }
    ionViewWillEnter() {
        if (this.menuCtrl.isEnabled) {
            console.log('hi');
            this.menuCtrl.swipeGesture(false);
        }
        this.storage.get('user').then((data) => {
            if (data) {
                this.isLoggedIn = true;
            }
        });
    }
    ionViewDidLeave() {
        this.menuCtrl.enable(true);
    }
    goBack() {
        if (this.isLoggedIn) {
            this.router.navigate(['quicktour']);
        }
        else {
            this.router.navigate(['login']);
        }
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
                            // this.router.navigate(['mobilelogin'])
                            if (this.isLoggedIn) {
                                this.router.navigate(['quicktour']);
                            }
                            else {
                                this.storage.set('type', 'login').then(_ => {
                                    this.router.navigate(['login']);
                                });
                            }
                        },
                    },
                ],
            });
            yield alert.present();
        });
    }
    ageFromDOB(dateOfBirth) {
        var birthdate = new Date(dateOfBirth.detail.value);
        var timeDiff = Math.abs(new Date().getTime() - new Date(birthdate).getTime());
        var age = Math.floor((timeDiff / (1000 * 3600 * 24)) / 365);
        this.enquiryForm.patchValue({ child_age: age });
    }
};
AddinquiryPage.ctorParameters = () => [
    { type: _api_service__WEBPACK_IMPORTED_MODULE_3__["ApiService"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["MenuController"] },
    { type: _ionic_storage__WEBPACK_IMPORTED_MODULE_7__["Storage"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_8__["Router"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["AlertController"] }
];
AddinquiryPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_5__["Component"])({
        selector: 'app-addinquiry',
        template: _raw_loader_addinquiry_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_addinquiry_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], AddinquiryPage);



/***/ }),

/***/ "DUT7":
/*!*********************************************************!*\
  !*** ./src/app/addinquiry/addinquiry-routing.module.ts ***!
  \*********************************************************/
/*! exports provided: AddinquiryPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddinquiryPageRoutingModule", function() { return AddinquiryPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _addinquiry_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./addinquiry.page */ "16zU");




const routes = [
    {
        path: '',
        component: _addinquiry_page__WEBPACK_IMPORTED_MODULE_3__["AddinquiryPage"]
    }
];
let AddinquiryPageRoutingModule = class AddinquiryPageRoutingModule {
};
AddinquiryPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], AddinquiryPageRoutingModule);



/***/ }),

/***/ "oLPS":
/*!*************************************************!*\
  !*** ./src/app/addinquiry/addinquiry.module.ts ***!
  \*************************************************/
/*! exports provided: AddinquiryPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddinquiryPageModule", function() { return AddinquiryPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _addinquiry_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./addinquiry-routing.module */ "DUT7");
/* harmony import */ var _addinquiry_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./addinquiry.page */ "16zU");







let AddinquiryPageModule = class AddinquiryPageModule {
};
AddinquiryPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _addinquiry_routing_module__WEBPACK_IMPORTED_MODULE_5__["AddinquiryPageRoutingModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"]
        ],
        declarations: [_addinquiry_page__WEBPACK_IMPORTED_MODULE_6__["AddinquiryPage"]]
    })
], AddinquiryPageModule);



/***/ }),

/***/ "r718":
/*!*************************************************!*\
  !*** ./src/app/addinquiry/addinquiry.page.scss ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".heading-1 {\n  color: #676767;\n  margin-bottom: 0;\n  font-size: 16px;\n}\n\n.heading {\n  color: #9b9ca6;\n  margin-bottom: 0;\n  font-size: 14px;\n}\n\nion-label {\n  color: #9b9ca6;\n  font-size: 13px;\n}\n\nion-input {\n  border: 1px solid #9b9ca6;\n  border-radius: 5px;\n  --padding-start: 5px !important;\n  height: 35px;\n}\n\nion-textarea {\n  border: 1px solid #9b9ca6;\n  border-radius: 5px;\n  --padding-start: 5px !important;\n}\n\nion-datetime {\n  border: 1px solid #9b9ca6;\n  border-radius: 5px;\n  --padding-start: 5px !important;\n  width: 100%;\n  height: 35px;\n}\n\nion-item {\n  --padding-start: 0;\n  --ripple-color: transparent;\n  --background-activated: transparent;\n  --background-activated-opacity:transparent;\n  --background-focused: transparent;\n  --background-focused-opacity:transparent;\n  --background-hover: transparent;\n  --background-hover-opacity:transparent;\n}\n\nion-item ion-label {\n  font-size: 12px;\n  color: #9b9ca6;\n}\n\nion-radio-group ion-item {\n  border-bottom: 0;\n}\n\nion-radio-group ion-col {\n  padding-left: 0;\n}\n\nion-radio-group ion-radio {\n  margin-right: 8px;\n  width: 18px;\n  height: 18px;\n}\n\nion-col {\n  padding-left: 0;\n}\n\nion-button {\n  text-transform: none;\n  width: 80%;\n}\n\n.required:after {\n  content: \" *\";\n  color: red;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL2FkZGlucXVpcnkucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUNJO0VBQ0ksY0FBQTtFQUNBLGdCQUFBO0VBQ0EsZUFBQTtBQUFSOztBQUVJO0VBQ0ksY0FBQTtFQUNBLGdCQUFBO0VBQ0EsZUFBQTtBQUNSOztBQUNJO0VBQ0ksY0FBQTtFQUNBLGVBQUE7QUFFUjs7QUFBSTtFQUNJLHlCQUFBO0VBQ0Esa0JBQUE7RUFDQSwrQkFBQTtFQUNBLFlBQUE7QUFHUjs7QUFESTtFQUNJLHlCQUFBO0VBQ0Esa0JBQUE7RUFDQSwrQkFBQTtBQUlSOztBQUZJO0VBQ0kseUJBQUE7RUFDQSxrQkFBQTtFQUNBLCtCQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7QUFLUjs7QUFGSTtFQUVJLGtCQUFBO0VBQ0EsMkJBQUE7RUFDQSxtQ0FBQTtFQUNBLDBDQUFBO0VBQ0EsaUNBQUE7RUFDQSx3Q0FBQTtFQUNBLCtCQUFBO0VBQ0Esc0NBQUE7QUFJUjs7QUFGUTtFQUNJLGVBQUE7RUFDSixjQUFBO0FBSVI7O0FBQ1k7RUFDSSxnQkFBQTtBQUVoQjs7QUFBWTtFQUNJLGVBQUE7QUFFaEI7O0FBQVk7RUFDQSxpQkFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0FBRVo7O0FBRVE7RUFDSSxlQUFBO0FBQ1o7O0FBRVE7RUFDSSxvQkFBQTtFQUVBLFVBQUE7QUFBWjs7QUFJUTtFQUNJLGFBQUE7RUFDQSxVQUFBO0FBRFoiLCJmaWxlIjoiYWRkaW5xdWlyeS5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJcclxuICAgIC5oZWFkaW5nLTF7XHJcbiAgICAgICAgY29sb3I6ICM2NzY3Njc7XHJcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogMDtcclxuICAgICAgICBmb250LXNpemU6IDE2cHg7XHJcbiAgICB9XHJcbiAgICAuaGVhZGluZ3tcclxuICAgICAgICBjb2xvcjogIzliOWNhNjtcclxuICAgICAgICBtYXJnaW4tYm90dG9tOiAwO1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMTRweDtcclxuICAgIH1cclxuICAgIGlvbi1sYWJlbHtcclxuICAgICAgICBjb2xvcjogIzliOWNhNjtcclxuICAgICAgICBmb250LXNpemU6IDEzcHg7XHJcbiAgICB9XHJcbiAgICBpb24taW5wdXQge1xyXG4gICAgICAgIGJvcmRlcjogMXB4IHNvbGlkICM5YjljYTY7XHJcbiAgICAgICAgYm9yZGVyLXJhZGl1czogNXB4O1xyXG4gICAgICAgIC0tcGFkZGluZy1zdGFydDogNXB4ICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgaGVpZ2h0OjM1cHg7XHJcbiAgICB9XHJcbiAgICBpb24tdGV4dGFyZWF7XHJcbiAgICAgICAgYm9yZGVyOiAxcHggc29saWQgIzliOWNhNjtcclxuICAgICAgICBib3JkZXItcmFkaXVzOiA1cHg7XHJcbiAgICAgICAgLS1wYWRkaW5nLXN0YXJ0OiA1cHggIWltcG9ydGFudDtcclxuICAgIH1cclxuICAgIGlvbi1kYXRldGltZXtcclxuICAgICAgICBib3JkZXI6IDFweCBzb2xpZCAjOWI5Y2E2O1xyXG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDVweDtcclxuICAgICAgICAtLXBhZGRpbmctc3RhcnQ6IDVweCAhaW1wb3J0YW50O1xyXG4gICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgIGhlaWdodDozNXB4O1xyXG5cclxuICAgIH1cclxuICAgIGlvbi1pdGVte1xyXG4gICAgICAgIC8vIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjNjc3NDgzO1xyXG4gICAgICAgIC0tcGFkZGluZy1zdGFydDogMDtcclxuICAgICAgICAtLXJpcHBsZS1jb2xvcjogdHJhbnNwYXJlbnQ7XHJcbiAgICAgICAgLS1iYWNrZ3JvdW5kLWFjdGl2YXRlZDogdHJhbnNwYXJlbnQ7XHJcbiAgICAgICAgLS1iYWNrZ3JvdW5kLWFjdGl2YXRlZC1vcGFjaXR5OnRyYW5zcGFyZW50O1xyXG4gICAgICAgIC0tYmFja2dyb3VuZC1mb2N1c2VkOiB0cmFuc3BhcmVudDtcclxuICAgICAgICAtLWJhY2tncm91bmQtZm9jdXNlZC1vcGFjaXR5OnRyYW5zcGFyZW50O1xyXG4gICAgICAgIC0tYmFja2dyb3VuZC1ob3ZlciAgOiB0cmFuc3BhcmVudDtcclxuICAgICAgICAtLWJhY2tncm91bmQtaG92ZXItb3BhY2l0eSAgOnRyYW5zcGFyZW50O1xyXG5cclxuICAgICAgICBpb24tbGFiZWwge1xyXG4gICAgICAgICAgICBmb250LXNpemU6IDEycHg7XHJcbiAgICAgICAgY29sb3I6ICM5YjljYTY7XHJcblxyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgICAgICBpb24tcmFkaW8tZ3JvdXB7XHJcbiAgICAgICAgICAgIGlvbi1pdGVte1xyXG4gICAgICAgICAgICAgICAgYm9yZGVyLWJvdHRvbTogMDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBpb24tY29sIHtcclxuICAgICAgICAgICAgICAgIHBhZGRpbmctbGVmdDogMDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBpb24tcmFkaW97XHJcbiAgICAgICAgICAgIG1hcmdpbi1yaWdodDogOHB4O1xyXG4gICAgICAgICAgICB3aWR0aDogMThweDtcclxuICAgICAgICAgICAgaGVpZ2h0OiAxOHB4O1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpb24tY29sIHtcclxuICAgICAgICAgICAgcGFkZGluZy1sZWZ0OiAwO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaW9uLWJ1dHRvbiB7XHJcbiAgICAgICAgICAgIHRleHQtdHJhbnNmb3JtOiBub25lO1xyXG4gICAgICAgICAgIFxyXG4gICAgICAgICAgICB3aWR0aDogODAlO1xyXG4gICAgICAgIH1cclxuICAgICAgIFxyXG5cclxuICAgICAgICAucmVxdWlyZWQ6YWZ0ZXIge1xyXG4gICAgICAgICAgICBjb250ZW50OlwiICpcIjtcclxuICAgICAgICAgICAgY29sb3I6IHJlZDtcclxuICAgICAgICAgIH0iXX0= */");

/***/ }),

/***/ "sHQZ":
/*!***************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/addinquiry/addinquiry.page.html ***!
  \***************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n      <ion-back-button></ion-back-button>\n    </ion-buttons>\n    <ion-title>Enquiry Form</ion-title>\n    <!-- <ion-buttons slot=\"start\">\n      <ion-button  shape=\"round\" (click)=\"goBack()\">\n        <ion-icon color=\"light\" name=\"arrow-back-outline\"></ion-icon>\n      </ion-button>\n    </ion-buttons> -->\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n<p class=\"ion-text-center heading-1\">\n  <b>Preschool and Daycare</b> \n</p>\n<form [formGroup]=\"enquiryForm\" (ngSubmit)=\"onSubmit(enquiryForm.value)\">\n\n<div class=\"margin-ionic\">\n\n<p class=\"heading required\">Prangan Centres</p>\n<ion-radio-group allowEmptySelection=\"false\" color=\"primary\" formControlName=\"branch_id\">\n  <ion-row *ngIf=\"branches\">\n    <ion-col *ngFor=\"let branch of branches\">\n      <ion-item lines=\"none\">\n        <ion-radio value=\"{{branch.id}}\"></ion-radio>\n        <ion-label>{{branch.branch_name}}</ion-label>\n      </ion-item>\n    </ion-col>\n  </ion-row>\n</ion-radio-group>\n<p class=\"heading required\">Admission Seeking For</p>\n<ion-radio-group allowEmptySelection=\"false\" color=\"primary\" formControlName=\"class\">\n  <ion-row >\n    <ion-col size=\"4\">\n      <ion-item lines=\"none\">\n        <ion-radio value=\"Play Group\" ></ion-radio>\n        <ion-label>Play Group</ion-label>\n      </ion-item>\n    </ion-col>\n    <ion-col size=\"4\">\n      <ion-item lines=\"none\">\n        <ion-radio value=\"Nursery\" ></ion-radio>\n        <ion-label>Nursery</ion-label>\n      </ion-item>\n    </ion-col>\n    <ion-col size=\"4\">\n      <ion-item lines=\"none\">\n        <ion-radio value=\"Day Care\" ></ion-radio>\n       <ion-label>Daycare</ion-label>\n      </ion-item>\n    </ion-col>\n    <ion-col size=\"4\">\n      <ion-item lines=\"none\">\n        <ion-radio value=\"Jr_kg\" ></ion-radio>\n       <ion-label>Jr.Kg</ion-label>\n      </ion-item>\n    </ion-col>\n    <ion-col size=\"4\">\n      <ion-item lines=\"none\">\n        <ion-radio value=\"srkg\"></ion-radio>\n       <ion-label>Sr.Kg</ion-label>\n      </ion-item>\n    </ion-col>\n  </ion-row>\n</ion-radio-group>\n<ion-row>\n  <ion-col size=\"6\">\n    <ion-label class=\"required\">Child's First Name</ion-label>\n    <ion-item lines=\"none\">\n      <ion-input type=\"text\" formControlName=\"first_name\"></ion-input>\n    </ion-item>\n    <div class=\"error-div\" *ngIf=\"(first_name?.invalid && first_name?.touched) || first_name?.dirty\">\n      <small *ngIf=\"first_name.errors?.pattern\" class=\"text-danger\">Enter a valid name </small>\n    </div>\n  </ion-col>\n  <ion-col size=\"6\">\n    <ion-label class=\"required\">Child's Last Name</ion-label>\n    <ion-item lines=\"none\">\n      <ion-input type=\"text\" formControlName=\"last_name\"></ion-input>\n    </ion-item>\n    <div class=\"error-div\" *ngIf=\"(last_name?.invalid && last_name?.touched) || last_name?.dirty\">\n      <small *ngIf=\"last_name.errors?.pattern\" class=\"text-danger\">Enter a valid name </small>\n    </div>\n  </ion-col>\n</ion-row>\n<ion-row>\n  <ion-col size=\"6\">\n    <ion-label class=\"required\">Child's DOB</ion-label>\n    <ion-item lines=\"none\">\n      <ion-datetime displayFormat=\"DD MMM  YYYY\" formControlName=\"d_o_b\" max=\"{{todays_date}}\" (ionChange)=\"ageFromDOB($event)\"></ion-datetime>\n    </ion-item>\n  </ion-col>\n  <!-- <ion-col size=\"6\">\n    <ion-label>Child's Age</ion-label>\n    <ion-item lines=\"none\">\n      <ion-input type=\"number\" formControlName=\"child_age\" maxLength=\"2\"></ion-input>\n    </ion-item>\n  </ion-col> -->\n</ion-row>\n<ion-row>\n  <ion-col size=\"12\">\n<ion-label class=\"required\">Gender</ion-label>\n\n    <ion-radio-group allowEmptySelection=\"false\" color=\"primary\" formControlName=\"gender\">\n      <ion-row >\n        <ion-col>\n          <ion-item lines=\"none\">\n            <ion-radio value=\"Boy\" ></ion-radio>\n            <ion-label>Boy</ion-label>\n          </ion-item>\n        </ion-col>\n        <ion-col>\n          <ion-item lines=\"none\">\n            <ion-radio value=\"Girl\" ></ion-radio>\n            <ion-label>Girl</ion-label>\n          </ion-item>\n        </ion-col>\n        <ion-col>\n          <ion-item lines=\"none\">\n            <ion-radio value=\"Other\" ></ion-radio>\n            <ion-label>Other</ion-label>\n          </ion-item>\n        </ion-col>\n      </ion-row>\n    </ion-radio-group>\n  </ion-col>\n</ion-row>\n<br>\n\n<ion-label class=\"required\">Home Address</ion-label>\n<ion-item lines=\"none\">\n  <ion-textarea rows=\"6\" cols=\"20\" formControlName=\"address\"></ion-textarea>\n</ion-item>\n<div style=\"color: var(--ion-color-danger);\" *ngIf=\"enquiryForm.controls['address'].touched && enquiryForm.controls['address'].hasError('maxlength')\">\n  Enter a  Maximum of 100 characters only.\n</div>\n<div *ngIf=\"(address.invalid && address.touched) || address.dirty\">\n  <small *ngIf=\"address.errors?.required\" style=\"color: red;\">Address is required</small>\n  <!--question mark(?) is a safe navigation operator-->\n  <small *ngIf=\"address.errors?.pattern\" style=\"color: red;\">Address Contains Invalid Characters.</small>\n</div>  \n<br>\n<ion-row>\n  <ion-col size=\"6\">\n    <ion-label class=\"required\">Mother's Name\n    </ion-label>\n    <ion-item lines=\"none\">\n      <ion-input type=\"text\" formControlName=\"mothers_name\"></ion-input>\n    </ion-item>\n    <div class=\"error-div\" *ngIf=\"(mothers_name?.invalid && mothers_name?.touched) || mothers_name?.dirty\">\n      <small *ngIf=\"mothers_name.errors?.pattern\" class=\"text-danger\">Enter a valid name </small>\n    </div>\n  </ion-col>\n  <ion-col size=\"6\">\n    <ion-label class=\"required\">Mother's contact number\n    </ion-label>\n    <ion-item lines=\"none\">\n      <ion-input type=\"tel\" maxlength=\"10\" formControlName=\"mothers_no\"></ion-input>\n    </ion-item>\n    <div class=\"error-div\" *ngIf=\"(mothers_no?.invalid && mothers_no?.touched) || mothers_no?.dirty\">\n      <small *ngIf=\"mothers_no.errors?.pattern\" class=\"text-danger\">Enter a valid mobile number</small>\n    </div>\n  </ion-col>\n  <ion-col size=\"6\">\n    <ion-label class=\"required\">Mother's Email ID</ion-label>\n    <ion-item lines=\"none\">\n      <ion-input type=\"text\" formControlName=\"mothers_email\"></ion-input>\n    </ion-item>\n    <div class=\"error-div\" *ngIf=\"(mothers_email?.invalid && mothers_email?.touched) || mothers_email?.dirty\">\n      <small *ngIf=\"mothers_email.errors?.pattern\" class=\"text-danger\">Enter a valid email id</small>\n    </div>\n  </ion-col>\n  <ion-col size=\"6\">\n    <ion-label class=\"required\">Mother's Job Profile</ion-label>\n    <ion-item lines=\"none\">\n      <ion-input type=\"text\" formControlName=\"mothers_job_profile\"></ion-input>\n    </ion-item>\n    <div class=\"error-div\" *ngIf=\"(mothers_job_profile?.invalid && mothers_job_profile?.touched) || mothers_job_profile?.dirty\">\n      <small *ngIf=\"mothers_job_profile.errors?.pattern\" class=\"text-danger\">Enter a valid job profile</small>\n    </div>\n  </ion-col>\n</ion-row>\n<ion-row>\n  <ion-col size=\"6\">\n    <ion-label  class=\"required\">Father's  Name\n    </ion-label>\n    <ion-item lines=\"none\">\n      <ion-input type=\"text\" formControlName=\"fathers_name\"></ion-input>\n    </ion-item>\n    <div class=\"error-div\" *ngIf=\"(fathers_name?.invalid && fathers_name?.touched) || fathers_name?.dirty\">\n      <small *ngIf=\"fathers_name.errors?.pattern\" class=\"text-danger\">Enter a valid name </small>\n    </div>\n  </ion-col>\n  <ion-col size=\"6\">\n    <ion-label  class=\"required\">Father's contact number\n    </ion-label>\n    <ion-item lines=\"none\">\n      <ion-input type=\"tel\" maxlength=\"10\" formControlName=\"fathers_no\"></ion-input>\n    </ion-item>\n    <div class=\"error-div\" *ngIf=\"(fathers_no?.invalid && fathers_no?.touched) || fathers_no?.dirty\">\n      <small *ngIf=\"fathers_no.errors?.pattern\" class=\"text-danger\">Enter a valid mobile number</small>\n    </div>\n  </ion-col>\n  <ion-col size=\"6\">\n    <ion-label  class=\"required\">Father's Email ID</ion-label>\n    <ion-item lines=\"none\">\n      <ion-input type=\"text\" formControlName=\"fathers_email\"></ion-input>\n    </ion-item>\n    <div class=\"error-div\" *ngIf=\"(fathers_email?.invalid && fathers_email?.touched) || fathers_email?.dirty\">\n      <small *ngIf=\"fathers_email.errors?.pattern\" class=\"text-danger\">Enter a valid email id</small>\n    </div>\n  </ion-col>\n  <ion-col size=\"6\">\n    <ion-label class=\"required\">Father's Job Profile</ion-label>\n    <ion-item lines=\"none\">\n      <ion-input type=\"text\" formControlName=\"fathers_job_profile\"></ion-input>\n    </ion-item>\n    <div class=\"error-div\" *ngIf=\"(mothers_job_profile?.invalid && fathers_job_profile?.touched) || fathers_job_profile?.dirty\">\n      <small *ngIf=\"fathers_job_profile.errors?.pattern\" class=\"text-danger\">Enter a valid job profile</small>\n    </div>\n  </ion-col>\n  <!-- <ion-col size=\"6\">\n    <ion-label>Sibling (if any)</ion-label>\n    <ion-item lines=\"none\">\n      <ion-input type=\"text\" formControlName=\"siblings\"></ion-input>\n    </ion-item>\n \n  </ion-col>\n  <ion-col size=\"6\">\n    <ion-label>Sibling's Name</ion-label>\n    <ion-item lines=\"none\">\n      <ion-input type=\"text\" formControlName=\"siblings_name\"></ion-input>\n    </ion-item>\n    <div class=\"error-div\" *ngIf=\"(siblings_name?.invalid && siblings_name?.touched) || siblings_name?.dirty\">\n      <small *ngIf=\"siblings_name.errors?.pattern\" class=\"text-danger\">Enter a valid name</small>\n    </div>\n  </ion-col>\n  <ion-col size=\"6\">\n    <ion-label>Sibling's Date of Birth</ion-label>\n    <ion-item lines=\"none\">\n      <ion-datetime displayFormat=\"DD MMM  YYYY\" formControlName=\"sibling_d_o_b\" max=\"{{todays_date}}\" (ionChange)=\"ageFromDOB($event)\"></ion-datetime>\n    </ion-item>\n  </ion-col> -->\n</ion-row>\n<!-- <ion-row>\n  <ion-col size=\"6\">\n    <ion-label>Mobile Number 1</ion-label>\n    <ion-item lines=\"none\">\n      <ion-input type=\"tel\" maxlength=\"10\" formControlName=\"mobile_1\"></ion-input>\n\n    </ion-item>\n    <div class=\"error-div\" *ngIf=\"(mobile_1?.invalid && mobile_1?.touched) || mobile_1?.dirty\">\n      <small *ngIf=\"mobile_1.errors?.pattern\" class=\"text-danger\">Enter a valid mobile number</small>\n    </div>\n  </ion-col>\n  <ion-col size=\"6\">\n    <ion-label>Mobile Number 2</ion-label>\n    <ion-item lines=\"none\">\n      <ion-input type=\"tel\" maxlength=\"10\" formControlName=\"mobile_2\"></ion-input>\n\n    </ion-item>\n    <div class=\"error-div\" *ngIf=\"(mobile_2?.invalid && mobile_2?.touched) || mobile_2?.dirty\">\n      <small *ngIf=\"mobile_2.errors?.pattern\" class=\"text-danger\">Enter a valid mobile number</small>\n    </div>\n  </ion-col>\n \n  <ion-col size=\"6\">\n    <ion-label>Email 2</ion-label>\n    <ion-item lines=\"none\">\n      <ion-input type=\"text\" formControlName=\"email_2\"></ion-input>\n    </ion-item>\n    <div class=\"error-div\" *ngIf=\"(email_2?.invalid && email_2?.touched) || email_2?.dirty\">\n      <small *ngIf=\"email_2.errors?.pattern\" class=\"text-danger\">Enter a valid email id</small>\n    </div>\n  </ion-col>\n</ion-row> -->\n<br>\n\n<p class=\"heading required\">How did you hear about us ?</p>\n<ion-radio-group allowEmptySelection=\"false\" color=\"primary\" formControlName=\"q1\">\n  <ion-row >\n    <ion-col size=\"4\">\n      <ion-item lines=\"none\">\n        <ion-radio value=\"Facebook\" ></ion-radio>\n        <ion-label>Facebook</ion-label>\n      </ion-item>\n    </ion-col>\n    <ion-col size=\"4\">\n      <ion-item lines=\"none\">\n        <ion-radio value=\"Instagram\" ></ion-radio>\n        <ion-label>Instagram</ion-label>\n      </ion-item>\n    </ion-col>\n    <ion-col size=\"4\">\n      <ion-item lines=\"none\">\n        <ion-radio value=\"Google\" ></ion-radio>\n       <ion-label>Google</ion-label>\n      </ion-item>\n    </ion-col>\n    <ion-col size=\"4\">\n      <ion-item lines=\"none\">\n        <ion-radio value=\"Friend\" ></ion-radio>\n       <ion-label>Friends</ion-label>\n      </ion-item>\n    </ion-col>\n    <ion-col size=\"4\">\n      <ion-item lines=\"none\">\n        <ion-radio value=\"Other\" ></ion-radio>\n       <ion-label>Others</ion-label>\n      </ion-item>\n    </ion-col>\n  </ion-row>\n</ion-radio-group>\n<div class=\"ion-text-center\">\n  <ion-button [disabled]=\"enquiryForm.invalid\" type=\"submit\" shape=\"round\"   color=\"primary\">\n    Submit\n  </ion-button>\n</div>\n\n</div>\n</form>\n\n</ion-content>\n");

/***/ })

}]);
//# sourceMappingURL=addinquiry-addinquiry-module-es2015.js.map