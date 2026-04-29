(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["feestructure-feestructure-module"],{

/***/ "J/2f":
/*!*****************************************************!*\
  !*** ./src/app/feestructure/feestructure.module.ts ***!
  \*****************************************************/
/*! exports provided: FeestructurePageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FeestructurePageModule", function() { return FeestructurePageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _feestructure_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./feestructure-routing.module */ "bytV");
/* harmony import */ var _feestructure_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./feestructure.page */ "Ywwl");
/* harmony import */ var _ionic_super_tabs_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic-super-tabs/angular */ "k6Iy");








let FeestructurePageModule = class FeestructurePageModule {
};
FeestructurePageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _feestructure_routing_module__WEBPACK_IMPORTED_MODULE_5__["FeestructurePageRoutingModule"],
            _ionic_super_tabs_angular__WEBPACK_IMPORTED_MODULE_7__["SuperTabsModule"],
        ],
        declarations: [_feestructure_page__WEBPACK_IMPORTED_MODULE_6__["FeestructurePage"]]
    })
], FeestructurePageModule);



/***/ }),

/***/ "Ywwl":
/*!***************************************************!*\
  !*** ./src/app/feestructure/feestructure.page.ts ***!
  \***************************************************/
/*! exports provided: FeestructurePage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FeestructurePage", function() { return FeestructurePage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_feestructure_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./feestructure.page.html */ "yD+c");
/* harmony import */ var _feestructure_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./feestructure.page.scss */ "haW5");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _ionic_native_http_ngx__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic-native/http/ngx */ "XSEc");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _ionic_storage__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic/storage */ "e8h1");
/* harmony import */ var _api_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./../api.service */ "yTNM");









let FeestructurePage = class FeestructurePage {
    constructor(storage, apiService, router, http, alertController) {
        this.storage = storage;
        this.apiService = apiService;
        this.router = router;
        this.http = http;
        this.alertController = alertController;
        this.rows = [];
        this.branch_id_array = [];
        this.amount = {};
        this.payment_data = {};
        this.month_type = 'single';
    }
    ngOnInit() {
    }
    ionViewWillEnter() {
        this.storage.get('type').then(data => {
            console.log('data', data);
            this.type = data;
            if (data === 'quicktour') {
                this.apiService.fetchAllBranchFeeStructure().then(data => {
                    this.fees = JSON.parse(data.data);
                });
            }
            else {
                this.storage.get('user').then(data => {
                    this.branch_id = JSON.parse(data).branch_id;
                    console.log('user', data);
                    this.rkey = 'rzp_test_90ElcNKYzC3OjW';
                    this.header = {
                        'Authorization': 'Basic ' + btoa("rzp_test_90ElcNKYzC3OjW:ClzKfJ5Rn6zlnYDGwXIPdBdh")
                    };
                    this.user_id = JSON.parse(data).id;
                    this.apiService.fetchBranchFeeStructure(this.branch_id).then(data => {
                        this.fees = [JSON.parse(data.data)];
                        // if(this.branch_id=='1'){
                        //   this.rkey='rzp_test_YWFaY0cPlGJ7Lc'
                        //   this.header = {
                        //     'Authorization' : 'Basic '+ btoa("rzp_test_YWFaY0cPlGJ7Lc:HFYXeeJ7YfSWBzEmQlRDFCYj")
                        //     };
                        // }
                        // else if(this.branch_id=='9'){
                        //   this.rkey='rzp_test_tjMm2K5OafvfTD'
                        //   this.header = {
                        //     'Authorization' : 'Basic '+ btoa("rzp_test_tjMm2K5OafvfTD:mbqr5LV8Czty5FM69iqFItaI")
                        //     };
                        // }
                        // else if(this.branch_id=='10'){
                        //   this.rkey='rzp_test_v2v3L8A4Zf0Ber'
                        //   this.header = {
                        //     'Authorization' : 'Basic '+ btoa("rzp_test_v2v3L8A4Zf0Ber:a7ErXuPClT67NeM7m6OmVWDy")
                        //     };
                        // }
                        // else if(this.branch_id=='2'){
                        //   this.rkey='rzp_test_B4OIYna3AFk95P'
                        //   this.header = {
                        //     'Authorization' : 'Basic '+ btoa("rzp_test_B4OIYna3AFk95P:ANKcDzQfNuetTssXczBkx0Iy")
                        //     };
                        // }
                        this.storage.get('userType').then(userType => {
                            this.userType = userType;
                            if (userType == 'Daycare') {
                                this.apiService.fetchDaycare(this.user_id).then(data => {
                                    this.daycare_fee_details = JSON.parse(data.data);
                                    console.log(this.daycare_fee_details);
                                    this.original_daycare_amt = JSON.parse(data.data);
                                    console.log('fess', this.daycare_fee_details);
                                }).catch(err => {
                                    this.daycare_fee_details = '';
                                    console.log(err);
                                });
                            }
                            else {
                                this.apiService.fetchFeesDetails(this.user_id).then(data => {
                                    this.fee_details = JSON.parse(data.data);
                                    this.fee_details_original = JSON.parse(data.data);
                                    this.original_amt_data = this.fee_details_original['b'];
                                    this.user_amt_a = this.fee_details['a'];
                                    this.user_amt_b = this.fee_details['b'];
                                    if (!this.user_amt_b) {
                                        this.apiService.fetchInstallation().then(data => {
                                            console.log('dara', data);
                                            this.installations = JSON.parse(data.data);
                                            this.original_amt_data = JSON.parse(data.data);
                                        }).catch(err => {
                                            this.installations = '';
                                            console.log(err);
                                        });
                                    }
                                }).catch(err => {
                                    this.fee_details = '';
                                });
                            }
                        });
                    });
                });
            }
        });
    }
    getAmount(rowId, BranchId) {
        console.log('row', rowId, BranchId);
    }
    openBranchFeeStructure(branch_id, pdf, branch_name) {
        this.router.navigate(['feestructuretwo', branch_id, pdf, branch_name]);
    }
    pay(id, expected_amount, date, total_amount) {
        console.log(expected_amount);
        var original_expected_amount = this.original_amt_data.filter(term => {
            return term.id == id;
        });
        if (original_expected_amount.length > 0) {
            if (expected_amount > original_expected_amount[0].expected_amount && expected_amount > total_amount) {
                this.apiService.presentToast('Please enter amount less than expected amount', 3000);
            }
            else {
                this.http.setDataSerializer('json');
                console.log('rkey', this.rkey);
                this.http.post('https://api.razorpay.com/v1/orders', { "amount": expected_amount * 100, "currency": "INR" }, this.header).then(data => {
                    console.log('pay', data);
                    var parsed_data = JSON.parse(data.data);
                    this.order_id = parsed_data['id'];
                    parsed_data['userid'] = this.user_id;
                    parsed_data['installmentid'] = id;
                    parsed_data['from_date'] = date + "-01";
                    parsed_data['to_date'] = '';
                    parsed_data['type'] = 'Preschool';
                    console.log('parsed_data', parsed_data);
                    this.apiService.onlinePayment(parsed_data).then(data => {
                        if (data.status == 200) {
                            var options = {
                                description: 'Prangan',
                                image: 'http://dynamicvishva.in/Prangan_New/images/prangan.png',
                                currency: "INR",
                                key: this.rkey,
                                amount: parsed_data['amount'],
                                name: 'Prangan',
                                order_id: parsed_data['id'],
                                theme: {
                                    color: '#fdd653'
                                },
                                modal: {
                                    ondismiss: function () {
                                        alert('dismissed');
                                    }
                                }
                            };
                            var successCallback = (payment_id) => {
                                this.successFn(payment_id);
                            };
                            // var successCallback = (success)=> {
                            //   alert('payment_id: ' + success.razorpay_payment_id)
                            //   var orderId = success.razorpay_order_id
                            //   var signature = success.razorpay_signature
                            // }
                            var cancelCallback = (error) => {
                                this.apiService.presentToast("Payment Failed", 2000);
                            };
                            RazorpayCheckout.on('payment.success', successCallback);
                            RazorpayCheckout.on('payment.cancel', cancelCallback);
                            RazorpayCheckout.open(options);
                        }
                    }).catch(err => {
                        console.log('err2', err);
                    });
                }).catch(err => {
                    console.log('err1', err);
                });
            }
        }
        console.log('id', id, original_expected_amount);
    }
    payDaycare() {
        if (this.month_type == 'single') {
            var amount = this.single_amount;
            var from_date = this.single_from_month;
            var to_date = '';
            if (from_date) {
                console.log(amount, this.rkey);
                if (amount > 0) {
                    this.http.setDataSerializer('json');
                    this.http.post('https://api.razorpay.com/v1/orders', { "amount": amount * 100, "currency": "INR" }, this.header).then(data => {
                        console.log('pay', data);
                        var parsed_data = JSON.parse(data.data);
                        this.order_id = parsed_data['id'];
                        parsed_data['userid'] = this.user_id;
                        parsed_data['installmentid'] = '';
                        parsed_data['from_date'] = from_date;
                        parsed_data['to_date'] = to_date;
                        parsed_data['type'] = 'Daycare';
                        console.log('parsed_data', parsed_data);
                        this.apiService.onlinePayment(parsed_data).then(data => {
                            if (data.status == 200) {
                                var options = {
                                    description: 'Prangan',
                                    image: 'http://dynamicvishva.in/Prangan_New/images/prangan.png',
                                    currency: "INR",
                                    key: this.rkey,
                                    amount: parsed_data['amount'],
                                    name: 'Prangan',
                                    order_id: parsed_data['id'],
                                    theme: {
                                        color: '#fdd653'
                                    },
                                    modal: {
                                        ondismiss: function () {
                                            alert('dismissed');
                                        }
                                    }
                                };
                                var successCallback = (payment_id) => {
                                    this.successFn(payment_id);
                                };
                                // var successCallback = (success)=> {
                                //   alert('payment_id: ' + success.razorpay_payment_id)
                                //   var orderId = success.razorpay_order_id
                                //   var signature = success.razorpay_signature
                                // }
                                var cancelCallback = (error) => {
                                    this.apiService.presentToast("Payment Failed", 2000);
                                };
                                RazorpayCheckout.on('payment.success', successCallback);
                                RazorpayCheckout.on('payment.cancel', cancelCallback);
                                RazorpayCheckout.open(options);
                            }
                        }).catch(err => {
                            console.log('err2', err);
                        });
                    }).catch(err => {
                        console.log('err1', err);
                    });
                }
                else {
                    this.apiService.presentToast('Please enter amount ', 3000);
                }
            }
            else {
                this.apiService.presentToast('Please select month ', 3000);
            }
        }
        else {
            var amount = this.multiple_amount;
            console.log("multiple_amount", this.multiple_amount);
            var month_from_date = this.from_month;
            var month_to_date = this.to_month;
            if (month_from_date && month_to_date) {
                if (amount > 0) {
                    if (month_from_date > month_to_date) {
                        this.apiService.presentToast('From month cannot be greater than To Month ', 3000);
                    }
                    else {
                        this.http.setDataSerializer('json');
                        this.http.post('https://api.razorpay.com/v1/orders', { "amount": amount * 100, "currency": "INR" }, this.header).then(data => {
                            console.log('pay', data);
                            var parsed_data = JSON.parse(data.data);
                            this.order_id = parsed_data['id'];
                            parsed_data['userid'] = this.user_id;
                            parsed_data['installmentid'] = '';
                            parsed_data['from_date'] = month_from_date;
                            parsed_data['to_date'] = month_to_date;
                            parsed_data['type'] = 'Daycare';
                            console.log('parsed_data', parsed_data);
                            this.apiService.onlinePayment(parsed_data).then(data => {
                                if (data.status == 200) {
                                    var options = {
                                        description: 'Prangan',
                                        image: 'http://dynamicvishva.in/Prangan_New/images/prangan.png',
                                        currency: "INR",
                                        key: this.rkey,
                                        amount: parsed_data['amount'],
                                        name: 'Prangan',
                                        order_id: parsed_data['id'],
                                        theme: {
                                            color: '#fdd653'
                                        },
                                        modal: {
                                            ondismiss: function () {
                                                alert('dismissed');
                                            }
                                        }
                                    };
                                    var successCallback = (payment_id) => {
                                        this.successFn(payment_id);
                                    };
                                    // var successCallback = (success)=> {
                                    //   alert('payment_id: ' + success.razorpay_payment_id)
                                    //   var orderId = success.razorpay_order_id
                                    //   var signature = success.razorpay_signature
                                    // }
                                    var cancelCallback = (error) => {
                                        this.apiService.presentToast("Payment Failed", 2000);
                                    };
                                    RazorpayCheckout.on('payment.success', successCallback);
                                    RazorpayCheckout.on('payment.cancel', cancelCallback);
                                    RazorpayCheckout.open(options);
                                }
                            }).catch(err => {
                                console.log('err2', err);
                            });
                        }).catch(err => {
                            console.log('err1', err);
                        });
                    }
                }
                else {
                    this.apiService.presentToast('Please enter amount ', 3000);
                }
            }
            else {
                this.apiService.presentToast('Please select both months ', 3000);
            }
        }
    }
    payInstallment(id, amount, date, total_amount) {
        if (parseInt(amount) > 0) {
            console.log(amount);
            var original_expected_amount = this.original_amt_data.filter(term => {
                return term.id == id;
            });
            if (original_expected_amount.length > 0) {
                if (amount > original_expected_amount[0].amount && amount > total_amount) {
                    this.apiService.presentToast('Please enter amount less than expected amount', 3000);
                }
                else {
                    this.http.setDataSerializer('json');
                    this.http.post('https://api.razorpay.com/v1/orders', { "amount": amount * 100, "currency": "INR" }, this.header).then(data => {
                        console.log('pay', data);
                        var parsed_data = JSON.parse(data.data);
                        this.order_id = parsed_data['id'];
                        parsed_data['userid'] = this.user_id;
                        parsed_data['installmentid'] = '';
                        parsed_data['from_date'] = date;
                        parsed_data['to_date'] = '';
                        parsed_data['type'] = 'Preschool';
                        console.log('parsed_data', parsed_data);
                        this.apiService.onlinePayment(parsed_data).then(data => {
                            if (data.status == 200) {
                                var options = {
                                    description: 'Prangan',
                                    image: 'http://dynamicvishva.in/Prangan_New/images/prangan.png',
                                    currency: "INR",
                                    key: this.rkey,
                                    amount: parsed_data['amount'],
                                    name: 'Prangan',
                                    order_id: parsed_data['id'],
                                    theme: {
                                        color: '#fdd653'
                                    },
                                    modal: {
                                        ondismiss: function () {
                                            alert('dismissed');
                                        }
                                    }
                                };
                                var successCallback = (payment_id) => {
                                    this.successFn(payment_id);
                                };
                                // var successCallback = (success)=> {
                                //   alert('payment_id: ' + success.razorpay_payment_id)
                                //   var orderId = success.razorpay_order_id
                                //   var signature = success.razorpay_signature
                                // }
                                var cancelCallback = (error) => {
                                    this.apiService.presentToast("Payment Failed", 2000);
                                };
                                RazorpayCheckout.on('payment.success', successCallback);
                                RazorpayCheckout.on('payment.cancel', cancelCallback);
                                RazorpayCheckout.open(options);
                            }
                        }).catch(err => {
                            console.log('err2', err);
                        });
                    }).catch(err => {
                        console.log('err1', err);
                    });
                }
            }
            console.log('id', id, original_expected_amount);
        }
        else {
            this.apiService.presentToast('Please enter amount ', 3000);
        }
    }
    presentAlert(message) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const alert = yield this.alertController.create({
                header: 'Successful',
                message: message,
                mode: 'ios',
                backdropDismiss: false,
                buttons: ['OK']
            });
            yield alert.present();
        });
    }
    successFn(payment_id) {
        console.log(payment_id);
        console.log('a', this.payment_data);
        alert("success");
        this.payment_data['order_id'] = this.order_id;
        this.payment_data['razorpay_payment_id'] = payment_id.razorpay_payment_id;
        this.payment_data['razorpay_order_id'] = payment_id.razorpay_order_id;
        this.payment_data['razorpay_signature'] = payment_id.razorpay_signature;
        this.payment_data['branchid'] = this.branch_id;
        this.apiService.verifyonlinePayment(this.payment_data).then(data => {
            if (data.status == 200) {
                this.presentAlert('Payment is successful');
                this.from_month = '';
                this.to_month = '';
                this.multiple_amount = '';
                this.single_from_month = '';
                this.single_amount = '';
                this.ionViewWillEnter();
            }
        }).catch(err => {
            console.log(err);
            this.log = err;
            var error_message = JSON.parse(err.error)['error'];
            this.apiService.presentToast(error_message, 2000);
        });
    }
    doRefresh(event) {
        this.storage.get('type').then(data => {
            console.log('data', data);
            this.type = data;
            if (data === 'quicktour') {
                this.apiService.fetchAllBranchFeeStructure().then(data => {
                    this.fees = JSON.parse(data.data);
                    event.target.complete();
                });
            }
            else {
                this.storage.get('user').then(data => {
                    this.branch_id = JSON.parse(data).branch_id;
                    this.user_id = JSON.parse(data).id;
                    this.apiService.fetchBranchFeeStructure(this.branch_id).then(data => {
                        this.fees = [JSON.parse(data.data)];
                        this.rkey = 'rzp_test_90ElcNKYzC3OjW';
                        this.header = {
                            'Authorization': 'Basic ' + btoa("rzp_test_90ElcNKYzC3OjW:ClzKfJ5Rn6zlnYDGwXIPdBdh")
                        };
                        // if(this.branch_id=='1'){
                        //   this.rkey='rzp_test_YWFaY0cPlGJ7Lc'
                        //   this.header = {
                        //     'Authorization' : 'Basic '+ btoa("rzp_test_YWFaY0cPlGJ7Lc:HFYXeeJ7YfSWBzEmQlRDFCYj")
                        //     };
                        // }
                        // else if(this.branch_id=='9'){
                        //   this.rkey='rzp_test_tjMm2K5OafvfTD'
                        //   this.header = {
                        //     'Authorization' : 'Basic '+ btoa("rzp_test_tjMm2K5OafvfTD:mbqr5LV8Czty5FM69iqFItaI")
                        //     };
                        // }
                        // else if(this.branch_id=='10'){
                        //   this.rkey='rzp_test_v2v3L8A4Zf0Ber'
                        //   this.header = {
                        //     'Authorization' : 'Basic '+ btoa("rzp_test_v2v3L8A4Zf0Ber:a7ErXuPClT67NeM7m6OmVWDy")
                        //     };
                        // }
                        // else if(this.branch_id=='2'){
                        //   this.rkey='rzp_test_B4OIYna3AFk95P'
                        //   this.header = {
                        //     'Authorization' : 'Basic '+ btoa("rzp_test_B4OIYna3AFk95P:ANKcDzQfNuetTssXczBkx0Iy")
                        //     };
                        // }
                        this.storage.get('userType').then(userType => {
                            this.userType = userType;
                            if (userType == 'Daycare') {
                                event.target.complete();
                                this.apiService.fetchDaycare(this.user_id).then(data => {
                                    this.daycare_fee_details = JSON.parse(data.data);
                                    console.log("daycare_fee_details", this.daycare_fee_details);
                                    this.original_daycare_amt = JSON.parse(data.data);
                                    console.log('fess', this.daycare_fee_details);
                                }).catch(err => {
                                    this.daycare_fee_details = '';
                                    console.log(err);
                                });
                            }
                            else {
                                event.target.complete();
                                this.apiService.fetchFeesDetails(this.user_id).then(data => {
                                    this.fee_details = JSON.parse(data.data);
                                    this.fee_details_original = JSON.parse(data.data);
                                    this.original_amt_data = this.fee_details_original['b'];
                                    this.user_amt_a = this.fee_details['a'];
                                    this.user_amt_b = this.fee_details['b'];
                                    if (!this.user_amt_b) {
                                        this.apiService.fetchInstallation().then(data => {
                                            console.log('dara', data);
                                            this.installations = JSON.parse(data.data);
                                            this.original_amt_data = JSON.parse(data.data);
                                        }).catch(err => {
                                            this.installations = '';
                                            console.log(err);
                                        });
                                    }
                                    console.log('fess', this.fee_details);
                                }).catch(err => {
                                    this.fee_details = '';
                                });
                            }
                        });
                    });
                });
            }
        });
    }
    typeChange(event) {
        console.log(event);
        console.log(event.target.value);
        this.month_type = event.target.value;
    }
    alreadyPaid() {
        this.apiService.presentToast('Payment is already done ', 3000);
    }
};
FeestructurePage.ctorParameters = () => [
    { type: _ionic_storage__WEBPACK_IMPORTED_MODULE_7__["Storage"] },
    { type: _api_service__WEBPACK_IMPORTED_MODULE_8__["ApiService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"] },
    { type: _ionic_native_http_ngx__WEBPACK_IMPORTED_MODULE_4__["HTTP"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["AlertController"] }
];
FeestructurePage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_6__["Component"])({
        selector: 'app-feestructure',
        template: _raw_loader_feestructure_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_feestructure_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], FeestructurePage);



/***/ }),

/***/ "bytV":
/*!*************************************************************!*\
  !*** ./src/app/feestructure/feestructure-routing.module.ts ***!
  \*************************************************************/
/*! exports provided: FeestructurePageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FeestructurePageRoutingModule", function() { return FeestructurePageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _feestructure_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./feestructure.page */ "Ywwl");




const routes = [
    {
        path: '',
        component: _feestructure_page__WEBPACK_IMPORTED_MODULE_3__["FeestructurePage"]
    }
];
let FeestructurePageRoutingModule = class FeestructurePageRoutingModule {
};
FeestructurePageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], FeestructurePageRoutingModule);



/***/ }),

/***/ "haW5":
/*!*****************************************************!*\
  !*** ./src/app/feestructure/feestructure.page.scss ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (":host {\n  --super-tabs-toolbar-background: #ffffff;\n  --st-indicator-color: #fdd653;\n  --st-indicator-height:3px;\n  --st-label-text-transform:none;\n  --st-label-color-active: #fdd653;\n}\n\nion-card {\n  margin: 16px 0 0 0;\n  border-radius: 20px;\n  background: linear-gradient(to bottom, #b0ff86, #ffffff);\n}\n\nion-card .heading {\n  font-size: 24px;\n  font-weight: bold;\n  margin: 20px 0 8px 16px;\n}\n\nion-card p {\n  font-size: 12px;\n  margin: 2px 8px -6px 16px;\n}\n\nion-card ion-button {\n  margin-bottom: 16px;\n  text-transform: none;\n  width: 40%;\n  height: 35px;\n}\n\nion-card .p-margin {\n  margin: 12px 8px 8px 16px;\n}\n\n.header {\n  font-weight: bold;\n}\n\n.amount-div {\n  border-radius: 20px;\n  margin-bottom: 16px;\n  background: #75fa75;\n  padding: 8px;\n}\n\nion-label {\n  color: #202020;\n  font-size: 14px;\n}\n\nion-input {\n  border: 1px solid #9b9ca6;\n  border-radius: 5px;\n  --padding-start: 5px !important;\n  height: 35px;\n}\n\nion-textarea {\n  border: 1px solid #9b9ca6;\n  border-radius: 5px;\n  --padding-start: 5px !important;\n}\n\nion-datetime {\n  border: 1px solid #9b9ca6;\n  border-radius: 5px;\n  --padding-start: 5px !important;\n  width: 100%;\n  height: 35px;\n}\n\nhr {\n  background: #b1b1b1;\n}\n\nion-item {\n  --padding-start: 0;\n  --ripple-color: transparent;\n  --background-activated: transparent;\n  --background-activated-opacity:transparent;\n  --background-focused: transparent;\n  --background-focused-opacity:transparent;\n  --background-hover: transparent;\n  --background-hover-opacity:transparent;\n}\n\nion-item ion-label {\n  color: #9b9ca6;\n}\n\nion-radio-group ion-item {\n  border-bottom: 0;\n}\n\nion-radio-group ion-col {\n  padding-left: 0;\n}\n\nion-radio-group ion-radio {\n  margin-right: 8px;\n  width: 18px;\n  height: 18px;\n}\n\nion-col {\n  padding-left: 0;\n}\n\nion-button {\n  text-transform: none;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL2ZlZXN0cnVjdHVyZS5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBR0E7RUFDSSx3Q0FBQTtFQUNBLDZCQUFBO0VBQ0EseUJBQUE7RUFDQSw4QkFBQTtFQUNBLGdDQUFBO0FBRko7O0FBSUE7RUFDSSxrQkFBQTtFQUNBLG1CQUFBO0VBQ0Esd0RBQUE7QUFESjs7QUFFSTtFQUNJLGVBQUE7RUFDQSxpQkFBQTtFQUNBLHVCQUFBO0FBQVI7O0FBRUk7RUFDSSxlQUFBO0VBQ0EseUJBQUE7QUFBUjs7QUFFSTtFQUNJLG1CQUFBO0VBQ0Esb0JBQUE7RUFDQSxVQUFBO0VBRUEsWUFBQTtBQURSOztBQUdJO0VBQ0kseUJBQUE7QUFEUjs7QUFLQTtFQUNJLGlCQUFBO0FBRko7O0FBSUE7RUFFSSxtQkFBQTtFQUNBLG1CQUFBO0VBQ0EsbUJBQUE7RUFDQSxZQUFBO0FBRko7O0FBSUE7RUFDSSxjQUFBO0VBQ0EsZUFBQTtBQURKOztBQUdBO0VBQ0kseUJBQUE7RUFDQSxrQkFBQTtFQUNBLCtCQUFBO0VBQ0EsWUFBQTtBQUFKOztBQUVBO0VBQ0kseUJBQUE7RUFDQSxrQkFBQTtFQUNBLCtCQUFBO0FBQ0o7O0FBQ0E7RUFDSSx5QkFBQTtFQUNBLGtCQUFBO0VBQ0EsK0JBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtBQUVKOztBQUNBO0VBQ0ksbUJBQUE7QUFFSjs7QUFBQTtFQUVJLGtCQUFBO0VBQ0EsMkJBQUE7RUFDQSxtQ0FBQTtFQUNBLDBDQUFBO0VBQ0EsaUNBQUE7RUFDQSx3Q0FBQTtFQUNBLCtCQUFBO0VBQ0Esc0NBQUE7QUFFSjs7QUFBSTtFQUVBLGNBQUE7QUFDSjs7QUFJUTtFQUNJLGdCQUFBO0FBRFo7O0FBR1E7RUFDSSxlQUFBO0FBRFo7O0FBR1E7RUFDQSxpQkFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0FBRFI7O0FBS0k7RUFDSSxlQUFBO0FBRlI7O0FBS0k7RUFDSSxvQkFBQTtBQUZSIiwiZmlsZSI6ImZlZXN0cnVjdHVyZS5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBpb24tY29udGVudCB7XHJcbi8vICAgICAtLWJhY2tncm91bmQ6I2YzZmJmZTtcclxuLy8gfVxyXG46aG9zdCB7ICBcclxuICAgIC0tc3VwZXItdGFicy10b29sYmFyLWJhY2tncm91bmQ6ICNmZmZmZmY7XHJcbiAgICAtLXN0LWluZGljYXRvci1jb2xvcjogI2ZkZDY1MztcclxuICAgIC0tc3QtaW5kaWNhdG9yLWhlaWdodDozcHg7XHJcbiAgICAtLXN0LWxhYmVsLXRleHQtdHJhbnNmb3JtOm5vbmU7XHJcbiAgICAtLXN0LWxhYmVsLWNvbG9yLWFjdGl2ZTogI2ZkZDY1MztcclxuICB9XHJcbmlvbi1jYXJkIHtcclxuICAgIG1hcmdpbjogMTZweCAwIDAgMDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDIwcHg7XHJcbiAgICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQodG8gYm90dG9tLCAjYjBmZjg2ICwgI2ZmZmZmZik7XHJcbiAgICAuaGVhZGluZ3tcclxuICAgICAgICBmb250LXNpemU6IDI0cHg7XHJcbiAgICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgICAgICAgbWFyZ2luOiAyMHB4IDAgOHB4IDE2cHg7XHJcbiAgICB9XHJcbiAgICBwIHtcclxuICAgICAgICBmb250LXNpemU6IDEycHg7XHJcbiAgICAgICAgbWFyZ2luOiAycHggOHB4IC02cHggMTZweDtcclxuICAgIH1cclxuICAgIGlvbi1idXR0b24ge1xyXG4gICAgICAgIG1hcmdpbi1ib3R0b206IDE2cHg7XHJcbiAgICAgICAgdGV4dC10cmFuc2Zvcm06IG5vbmU7XHJcbiAgICAgICAgd2lkdGg6IDQwJTtcclxuICAgICAgICAvLyAtLWJvcmRlci1yYWRpdXM6IDZweDtcclxuICAgICAgICBoZWlnaHQ6IDM1cHg7XHJcbiAgICB9XHJcbiAgICAucC1tYXJnaW57XHJcbiAgICAgICAgbWFyZ2luOiAxMnB4IDhweCA4cHggMTZweDtcclxuICAgICAgICBcclxuICAgIH1cclxufVxyXG4uaGVhZGVye1xyXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbn1cclxuLmFtb3VudC1kaXZ7XHJcbiAgICBcclxuICAgIGJvcmRlci1yYWRpdXM6IDIwcHg7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAxNnB4O1xyXG4gICAgYmFja2dyb3VuZDogcmdiKDExNywgMjUwLCAxMTcpO1xyXG4gICAgcGFkZGluZzogOHB4O1xyXG59XHJcbmlvbi1sYWJlbHtcclxuICAgIGNvbG9yOiAjMjAyMDIwO1xyXG4gICAgZm9udC1zaXplOiAxNHB4O1xyXG59XHJcbmlvbi1pbnB1dCB7XHJcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjOWI5Y2E2O1xyXG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xyXG4gICAgLS1wYWRkaW5nLXN0YXJ0OiA1cHggIWltcG9ydGFudDtcclxuICAgIGhlaWdodDozNXB4O1xyXG59XHJcbmlvbi10ZXh0YXJlYXtcclxuICAgIGJvcmRlcjogMXB4IHNvbGlkICM5YjljYTY7XHJcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XHJcbiAgICAtLXBhZGRpbmctc3RhcnQ6IDVweCAhaW1wb3J0YW50O1xyXG59XHJcbmlvbi1kYXRldGltZXtcclxuICAgIGJvcmRlcjogMXB4IHNvbGlkICM5YjljYTY7XHJcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XHJcbiAgICAtLXBhZGRpbmctc3RhcnQ6IDVweCAhaW1wb3J0YW50O1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBoZWlnaHQ6MzVweDtcclxuXHJcbn1cclxuaHJ7XHJcbiAgICBiYWNrZ3JvdW5kOiAjYjFiMWIxO1xyXG59XHJcbmlvbi1pdGVte1xyXG4gICAgLy8gYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICM2Nzc0ODM7XHJcbiAgICAtLXBhZGRpbmctc3RhcnQ6IDA7XHJcbiAgICAtLXJpcHBsZS1jb2xvcjogdHJhbnNwYXJlbnQ7XHJcbiAgICAtLWJhY2tncm91bmQtYWN0aXZhdGVkOiB0cmFuc3BhcmVudDtcclxuICAgIC0tYmFja2dyb3VuZC1hY3RpdmF0ZWQtb3BhY2l0eTp0cmFuc3BhcmVudDtcclxuICAgIC0tYmFja2dyb3VuZC1mb2N1c2VkOiB0cmFuc3BhcmVudDtcclxuICAgIC0tYmFja2dyb3VuZC1mb2N1c2VkLW9wYWNpdHk6dHJhbnNwYXJlbnQ7XHJcbiAgICAtLWJhY2tncm91bmQtaG92ZXIgIDogdHJhbnNwYXJlbnQ7XHJcbiAgICAtLWJhY2tncm91bmQtaG92ZXItb3BhY2l0eSAgOnRyYW5zcGFyZW50O1xyXG5cclxuICAgIGlvbi1sYWJlbCB7XHJcbiAgICAgICBcclxuICAgIGNvbG9yOiAjOWI5Y2E2O1xyXG5cclxuICAgIH1cclxufVxyXG4gICAgaW9uLXJhZGlvLWdyb3Vwe1xyXG4gICAgICAgIGlvbi1pdGVte1xyXG4gICAgICAgICAgICBib3JkZXItYm90dG9tOiAwO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpb24tY29sIHtcclxuICAgICAgICAgICAgcGFkZGluZy1sZWZ0OiAwO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpb24tcmFkaW97XHJcbiAgICAgICAgbWFyZ2luLXJpZ2h0OiA4cHg7XHJcbiAgICAgICAgd2lkdGg6IDE4cHg7XHJcbiAgICAgICAgaGVpZ2h0OiAxOHB4O1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBpb24tY29sIHtcclxuICAgICAgICBwYWRkaW5nLWxlZnQ6IDA7XHJcbiAgICB9XHJcblxyXG4gICAgaW9uLWJ1dHRvbiB7XHJcbiAgICAgICAgdGV4dC10cmFuc2Zvcm06IG5vbmU7XHJcbiAgICAgICBcclxuICAgICAgICAvLyB3aWR0aDogODAlO1xyXG4gICAgfSJdfQ== */");

/***/ }),

/***/ "yD+c":
/*!*******************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/feestructure/feestructure.page.html ***!
  \*******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n  <ion-toolbar>\n    <ion-title *ngIf=\"type!=='quicktour'\">Fee Payment</ion-title>\n    <ion-title *ngIf=\"type=='quicktour'\">Fee Structure</ion-title>\n    <ion-buttons slot=\"start\">\n      <ion-button  shape=\"round\"[routerLink]=\"['/quicktour']\">\n        <ion-icon color=\"light\" name=\"arrow-back-outline\"></ion-icon>\n      </ion-button>\n    </ion-buttons>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <ion-refresher slot=\"fixed\" (ionRefresh)=\"doRefresh($event)\">\n    <ion-refresher-content></ion-refresher-content>\n  </ion-refresher>\n  <super-tabs>\n    <super-tabs-toolbar slot=\"top\" >\n      <super-tab-button *ngIf=\"type!=='quicktour'\">\n        <ion-label>Pay Fees</ion-label>    \n      </super-tab-button>\n      <super-tab-button>\n        <ion-label>View Fees</ion-label>    \n      </super-tab-button>\n     \n    </super-tabs-toolbar>\n    <super-tabs-container>\n      <super-tab  *ngIf=\"type!=='quicktour'\">\n        <ion-content>\n          <div class=\"padding-ionic\" *ngIf=\"userType\">\n            <div *ngIf=\"userType=='Daycare'\" >\n              <ion-label>Month Type <span class=\"text-danger\">*</span></ion-label>\n            \n              <ion-radio-group allowEmptySelection=\"false\" color=\"primary\" (ionChange)=\"typeChange($event)\"  [(ngModel)]=\"month_type\">\n                <ion-row>\n                  <ion-col >\n                    <ion-item lines=\"none\">\n                      <ion-radio value=\"single\"></ion-radio>\n                      <ion-label>Single</ion-label>\n                    </ion-item>\n                  </ion-col>\n                  <ion-col >\n                    <ion-item lines=\"none\">\n                      <ion-radio value=\"multiple\"></ion-radio>\n                      <ion-label>Multiple</ion-label>\n                    </ion-item>\n                  </ion-col>\n                </ion-row>\n              </ion-radio-group>\n              <div *ngIf=\"month_type=='multiple'\">\n                <ion-row >\n                  <ion-col size=\"6\">\n                    <ion-label>From Month  <span class=\"text-danger\">*</span></ion-label>\n                    <ion-item lines=\"none\">\n                      <ion-datetime displayFormat=\"DD MMM  YYYY\" [(ngModel)]=\"from_month\" ></ion-datetime>\n                    </ion-item>\n                  </ion-col>\n                  <ion-col size=\"6\">\n                    <ion-label>To Month  <span class=\"text-danger\">*</span></ion-label>\n                    <ion-item lines=\"none\">\n                      <ion-datetime displayFormat=\"DD MMM  YYYY\" [(ngModel)]=\"to_month\" ></ion-datetime>\n                    </ion-item>\n                  </ion-col>\n                  <ion-col size=\"12\">\n                    <ion-label>Amount  <span class=\"text-danger\">*</span></ion-label><br>\n                    <ion-item lines=\"none\">\n                      <ion-input [readonly]=\"true\" name=\"multiple_amount\" [(ngModel)]=\"multiple_amount\"  type=\"number\" placeholder=\"Enter amount\"  ></ion-input>\n                    </ion-item>\n                  </ion-col>\n                    <ion-button style=\"width:96%\" expand=\"block\" (click)=\"payDaycare()\" color=\"primary\"  shape=\"round\">\n                      Pay\n                    </ion-button>\n                </ion-row>\n\n               \n              </div>\n          <div>\n\n              <ion-row *ngIf=\"month_type=='single'\">\n                <ion-col size=\"12\">\n                  <ion-label>Month  <span class=\"text-danger\">*</span></ion-label>\n                  <ion-item lines=\"none\">\n                    <ion-datetime displayFormat=\"DD MMM  YYYY\" [(ngModel)]=\"single_from_month\" ></ion-datetime>\n                  </ion-item>\n                </ion-col>\n                <ion-col size=\"12\">\n                  <ion-label>Amount  <span class=\"text-danger\">*</span></ion-label>\n                  <ion-item lines=\"none\">\n                      <ion-input name=\"single_amount\" [(ngModel)]=\"single_amount\"  type=\"number\" placeholder=\"Enter amount\"  ></ion-input>\n                  </ion-item>\n                </ion-col>\n              \n                <ion-col size=\"12\">\n                  <ion-button expand=\"block\" style=\"width:96%\" (click)=\"payDaycare()\" color=\"primary\"  shape=\"round\">\n                    Pay\n                  </ion-button>\n                </ion-col>\n              </ion-row>\n          </div>\n\n              <!-- <div class=\"amount-div\"  *ngFor=\"let daycare of daycare_fee_details\"> -->\n                \n                <!-- <ion-row *ngIf=\"daycare.type=='Multiple'\">\n                  <ion-col size=\"6\" >\n                    <ion-label>From Month</ion-label><br>\n                    <ion-label><b>{{daycare.from_date|date:'MMM, yyyy'}}</b></ion-label><br>\n                  </ion-col>\n                  <ion-col size=\"6\">\n                    <ion-label>To Month</ion-label><br>\n                    <ion-label><b>{{daycare.to_date|date:'MMM, yyyy'}}</b></ion-label><br>\n                  </ion-col>\n                  <ion-col size=\"6\">\n                    <ion-label>Amount</ion-label><br>\n                    <ion-input name=\"d_amount\" [(ngModel)]=\"daycare.amount\" *ngIf=\"daycare.amount\" max=\"{{daycare.amount}}\" type=\"number\" placeholder=\"Enter amount\" value=\"{{daycare.amount}}\" ></ion-input>\n                    \n                  </ion-col>\n                  <ion-col size=\"12\">\n                    <ion-button expand=\"block\" (click)=\"payDaycare(daycare.id,daycare.amount,daycare.from_date,daycare.to_date)\" color=\"primary\"  shape=\"round\">\n                      Pay\n                    </ion-button>\n                  </ion-col>\n                </ion-row>\n                <ion-row *ngIf=\"daycare.type=='Single'\">\n                  <ion-col size=\"6\" >\n                    <ion-label>Month</ion-label><br>\n                    <ion-label><b>{{daycare.from_date|date:'MMM, yyyy'}}</b></ion-label><br>\n                  </ion-col>\n                  \n                  <ion-col size=\"6\">\n                    <ion-label>Amount</ion-label><br>\n                    <ion-input name=\"d_amount\" [(ngModel)]=\"daycare.amount\" *ngIf=\"daycare.amount\" max=\"{{daycare.amount}}\" type=\"number\" placeholder=\"Enter amount\" value=\"{{daycare.amount}}\" ></ion-input>\n                    \n                  </ion-col>\n                  <ion-col size=\"12\">\n                    <ion-button expand=\"block\" (click)=\"payDaycare(daycare.id,daycare.amount,daycare.from_date,daycare.to_date)\" color=\"primary\"  shape=\"round\">\n                      Pay\n                    </ion-button>\n                  </ion-col>\n                </ion-row> -->\n              <!-- </div> -->\n            </div>\n            <div *ngIf=\"userType=='Preschool'\">\n              <div mode=\"ios\" *ngIf=\"user_amt_a\">\n                <ion-row>\n                \n                  <ion-col size=\"12\">\n                    <ion-label>Total Amount</ion-label><br>\n                    <ion-label><b> ₹ {{user_amt_a.amount}}</b></ion-label><br>\n                  </ion-col>\n                </ion-row>\n                \n              </div>\n              <div mode=\"ios\" *ngIf=\"fee_details && user_amt_b\">\n                <p>Installments</p>\n                <div  *ngFor=\"let item of user_amt_b;let index=index\">\n                  <ion-row>\n                    <ion-col size=\"6\">\n                      <ion-label>Amount</ion-label><br>\n                      <ion-item>\n                        <ion-input [readonly]=\"true\"  name=\"amt\" [(ngModel)]=\"item.expected_amount\"  max=\"{{item.expected_amount}}\" type=\"text\" placeholder=\"Enter amount\" value=\"{{item.expected_amount}}\" ></ion-input>\n                      </ion-item>\n                    </ion-col>\n                    <ion-col size=\"6\">\n                      <ion-label>Date</ion-label><br>\n                      <ion-label><b>{{item.month|date:'dd MMM, yyyy'}}</b> </ion-label>\n                    </ion-col>\n                    <ion-col size=\"12\">\n                      <ion-button expand=\"block\"  *ngIf=\"item.amount!=item.expected_amount\" (click)=\"pay(item.id,item.expected_amount,item.month,user_amt_a?.amount)\" color=\"primary\"  shape=\"round\" >\n                        Pay\n                      </ion-button>\n                      <ion-text *ngIf=\"item.amount==item.expected_amount\"  color=\"success\"  >\n                        Payment Done\n                      </ion-text>\n                    </ion-col>\n                  </ion-row>\n           \n                  <br>\n                  <hr>\n                  <br>\n\n                </div>\n               \n              </div>\n              <div mode=\"ios\" *ngIf=\"fee_details && installations\">\n                <p>Installments</p>\n                <div  *ngFor=\"let item of installations;let index=index\">\n                  <ion-row>\n                    <ion-col size=\"6\">\n                      <ion-label>Amount</ion-label><br>\n                      <ion-item>\n                        <ion-input [readonly]=\"true\" name=\"amount\" [(ngModel)]=\"item.amount\"  max=\"{{item.amount}}\" type=\"number\" placeholder=\"Enter amount\" value=\"{{item.amount}}\" ></ion-input>\n                      </ion-item>\n                    </ion-col>\n                    <ion-col size=\"6\">\n                      <ion-label>Date</ion-label><br>\n                      <ion-label><b>{{item.month|date:'dd MMM, yyyy'}}</b> </ion-label>\n                    </ion-col>\n                    <ion-col size=\"12\">\n                      <ion-button expand=\"block\" (click)=\"payInstallment(item.id,item.amount,item.month,user_amt_a?.amount)\" color=\"primary\"  shape=\"round\">\n                        Pay\n                      </ion-button>\n                    </ion-col>\n                  </ion-row>\n                </div>\n               \n              </div>\n            </div>\n          </div>\n        </ion-content>\n      </super-tab>\n      <super-tab >\n        <ion-content>\n          <div class=\"padding-ionic\" *ngIf=\"fees\">\n            <ion-card mode=\"ios\" *ngFor=\"let fee of fees\">\n              <p class=\"heading\"><b>{{fee.branch_name |titlecase}}</b></p>\n             <br>\n             <ion-row *ngIf=\"columns\">\n               <ion-col size=\"4\" >\n                 Particulars\n               </ion-col>\n               <ion-col size=\"4\" *ngFor=\"let column of columns\">\n                 {{column.name|titlecase}}\n               </ion-col>\n             </ion-row>\n             <div *ngIf=\"rows\">\n             <ion-row   *ngFor=\"let row of rows\">\n               <ion-col size=\"4\">\n                 {{row.row.name|titlecase}}\n                 <!-- {{getAmount(row.row.id,fee.id)}} -->\n               </ion-col>\n               <div *ngIf=\"amounts\" >\n                <ion-col size=\"4\" *ngFor=\"let amount of amounts\">\n                  {{amount.amount}}\n                </ion-col>\n               </div>\n             </ion-row>\n            </div>\n              <div class=\"ion-text-center\">\n                <ion-button  shape=\"round\" size=\"default\" class=\"view-btn\" color=\"primary\" (click)=\"openBranchFeeStructure(fee.id,fee.pdf,fee.branch_name)\" >View Details</ion-button>\n          \n              </div>\n            </ion-card>\n          </div>\n        </ion-content>\n      </super-tab>\n     \n    </super-tabs-container>\n  </super-tabs>\n  \n  <!-- <ion-card mode=\"ios\" *ngIf=\"type!=='login'\">\n    <p class=\"heading\"><b>Playgroup</b></p>\n    <ion-row>\n      <ion-col size=\"6\">\n        <p class=\"header\">Form : 0</p>\n        <p class=\"p-margin\">0</p>\n\n      </ion-col>\n      <ion-col size=\"6\">\n        <p class=\"header\">Admission Fee : </p>\n        <p class=\"p-margin\">4000</p>\n\n      </ion-col>\n    </ion-row>\n    <ion-row>\n      <ion-col size=\"6\">\n        <p class=\"header\">Kit : </p>\n        <p class=\"p-margin\">2000</p>\n\n      </ion-col>\n      <ion-col size=\"6\">\n        <p class=\"header\">1st Term : </p>\n        <p class=\"p-margin\">21,600</p>\n\n      </ion-col>\n    </ion-row>\n    <ion-row>\n      <ion-col size=\"6\">\n        <p class=\"header\">Activity Fee : </p>\n        <p class=\"p-margin\">1500</p>\n\n      </ion-col>\n      <ion-col size=\"6\">\n        <p class=\"header\">2nd Term : </p>\n        <p class=\"p-margin\">21,600</p>\n        \n      </ion-col>\n    </ion-row>\n    <ion-row>\n      <ion-col size=\"6\">\n        <p class=\"header\">Books : </p>\n        <p class=\"p-margin\">2200</p>\n\n      </ion-col>\n      <ion-col size=\"6\">\n        <p class=\"header\">Term Fee : </p>\n        <p class=\"p-margin\">3600</p>\n\n      </ion-col>\n    </ion-row>\n    <ion-row>\n      <ion-col size=\"6\">\n        <p class=\"header\"><b> Total : </b></p>\n        <p class=\"p-margin\">5700</p>\n\n      </ion-col>\n      <ion-col size=\"6\">\n        <p class=\"header\"><b>Total : </b> </p>\n        <p class=\"p-margin\">50,800</p>\n\n      </ion-col>\n    </ion-row>\n    <ion-row>\n      <ion-col size=\"6\">\n        <p class=\"header\"><b>Timing</b>  : </p>\n        <p class=\"p-margin\">9 AM to 11:30 AM</p>\n      </ion-col>\n      <ion-col size=\"6\">\n        <p class=\"header\"><b>Age Criteria</b>  : </p>\n        <p  class=\"p-margin\">24 months + as on 31st May</p>\n      </ion-col>\n    </ion-row>\n   <br>\n    <div class=\"ion-text-center\">\n      <ion-button  shape=\"round\" size=\"default\" class=\"view-btn\" color=\"primary\">View</ion-button>\n\n    </div>\n  </ion-card>\n  <ion-card mode=\"ios\" *ngIf=\"type=='login' || type=='quicktour'\">\n    <p class=\"heading\"><b>Nursery</b></p>\n    <ion-row>\n      <ion-col size=\"6\">\n        <p class=\"header\">Form : </p>\n        <p class=\"p-margin\">0</p>\n      </ion-col>\n      <ion-col size=\"6\">\n        <p class=\"header\">Admission Fee : </p>\n        <p class=\"p-margin\">4000</p>\n      </ion-col>\n    </ion-row>\n    <ion-row>\n      <ion-col size=\"6\">\n        <p class=\"header\">Kit : </p>\n        <p class=\"p-margin\">2000</p>\n\n      </ion-col>\n      <ion-col size=\"6\">\n        <p class=\"header\">1st Term : </p>\n        <p class=\"p-margin\">22,500</p>\n\n      </ion-col>\n    </ion-row>\n    <ion-row>\n      <ion-col size=\"6\">\n        <p class=\"header\">Activity Fee : </p>\n        <p class=\"p-margin\">1500</p>\n\n      </ion-col>\n      <ion-col size=\"6\">\n        <p class=\"header\">2nd Term : </p>\n        <p class=\"p-margin\">22,500</p>\n\n      </ion-col>\n    </ion-row>\n    <ion-row>\n      <ion-col size=\"6\">\n        <p class=\"header\">Books : </p>\n        <p class=\"p-margin\">2500</p>\n\n      </ion-col>\n      <ion-col size=\"6\">\n        <p class=\"header\">Term Fee : </p>\n        <p class=\"p-margin\">3750</p>\n\n      </ion-col>\n    </ion-row>\n    <ion-row>\n      <ion-col size=\"6\">\n        <p class=\"header\"><b> Total : </b></p>\n        <p class=\"p-margin\">6000</p>\n\n      </ion-col>\n      <ion-col size=\"6\">\n        <p class=\"header\"><b>Total : </b> </p>\n        <p class=\"p-margin\">52,750</p>\n\n      </ion-col>\n    </ion-row>\n    <ion-row>\n      <ion-col size=\"6\">\n        <p class=\"header\"><b>Timing</b>  : </p>\n        <p class=\"p-margin\">9 AM to 1 PM</p>\n      </ion-col>\n      <ion-col size=\"6\">\n        <p class=\"header\"><b>Age Criteria</b>  : </p>\n        <p  class=\"p-margin\">2.8 yrs + as on 31st May</p>\n      </ion-col>\n    </ion-row>\n   <br>\n    <div class=\"ion-text-center\">\n      <ion-button  shape=\"round\" size=\"default\" class=\"view-btn\" color=\"primary\">View</ion-button>\n\n    </div>\n  </ion-card>\n   -->\n\n</ion-content>\n");

/***/ })

}]);
//# sourceMappingURL=feestructure-feestructure-module-es2015.js.map