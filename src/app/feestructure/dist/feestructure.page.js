"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
exports.__esModule = true;
exports.FeestructurePage = void 0;
var core_1 = require("@angular/core");
var FeestructurePage = /** @class */ (function () {
    function FeestructurePage(storage, apiService, router, http, alertController) {
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
    FeestructurePage.prototype.ngOnInit = function () {
    };
    FeestructurePage.prototype.ionViewWillEnter = function () {
        var _this = this;
        this.storage.get('type').then(function (data) {
            console.log('data', data);
            _this.type = data;
            if (data === 'quicktour') {
                _this.apiService.fetchAllBranchFeeStructure().then(function (data) {
                    _this.fees = JSON.parse(data.data);
                });
            }
            else {
                _this.storage.get('user').then(function (data) {
                    _this.branch_id = JSON.parse(data).branch_id;
                    _this.user_id = JSON.parse(data).id;
                    _this.apiService.fetchBranchFeeStructure(_this.branch_id).then(function (data) {
                        _this.fees = [JSON.parse(data.data)];
                        if (_this.branch_id == '1') {
                            _this.rkey = 'rzp_test_YWFaY0cPlGJ7Lc';
                            _this.header = {
                                'Authorization': 'Basic ' + btoa("rzp_test_YWFaY0cPlGJ7Lc:HFYXeeJ7YfSWBzEmQlRDFCYj")
                            };
                        }
                        else if (_this.branch_id == '9') {
                            _this.rkey = 'rzp_test_tjMm2K5OafvfTD';
                            _this.header = {
                                'Authorization': 'Basic ' + btoa("rzp_test_tjMm2K5OafvfTD:mbqr5LV8Czty5FM69iqFItaI")
                            };
                        }
                        else if (_this.branch_id == '10') {
                            _this.rkey = 'rzp_test_v2v3L8A4Zf0Ber';
                            _this.header = {
                                'Authorization': 'Basic ' + btoa("rzp_test_v2v3L8A4Zf0Ber:a7ErXuPClT67NeM7m6OmVWDy")
                            };
                        }
                        else if (_this.branch_id == '2') {
                            _this.rkey = 'rzp_test_B4OIYna3AFk95P';
                            _this.header = {
                                'Authorization': 'Basic ' + btoa("rzp_test_B4OIYna3AFk95P:ANKcDzQfNuetTssXczBkx0Iy")
                            };
                        }
                        _this.storage.get('userType').then(function (userType) {
                            _this.userType = userType;
                            if (userType == 'Daycare') {
                                _this.apiService.fetchDaycare(_this.user_id).then(function (data) {
                                    _this.daycare_fee_details = JSON.parse(data.data);
                                    _this.original_daycare_amt = JSON.parse(data.data);
                                    console.log('fess', _this.daycare_fee_details);
                                })["catch"](function (err) {
                                    _this.daycare_fee_details = '';
                                    console.log(err);
                                });
                            }
                            else {
                                _this.apiService.fetchFeesDetails(_this.user_id).then(function (data) {
                                    _this.fee_details = JSON.parse(data.data);
                                    _this.fee_details_original = JSON.parse(data.data);
                                    _this.original_amt_data = _this.fee_details_original['b'];
                                    _this.user_amt_a = _this.fee_details['a'];
                                    _this.user_amt_b = _this.fee_details['b'];
                                    if (!_this.user_amt_b) {
                                        _this.apiService.fetchInstallation().then(function (data) {
                                            console.log('dara', data);
                                            _this.installations = JSON.parse(data.data);
                                            _this.original_amt_data = JSON.parse(data.data);
                                        })["catch"](function (err) {
                                            _this.installations = '';
                                            console.log(err);
                                        });
                                    }
                                })["catch"](function (err) {
                                    _this.fee_details = '';
                                });
                            }
                        });
                    });
                });
            }
        });
    };
    FeestructurePage.prototype.getAmount = function (rowId, BranchId) {
        console.log('row', rowId, BranchId);
    };
    FeestructurePage.prototype.openBranchFeeStructure = function (branch_id, pdf, branch_name) {
        this.router.navigate(['feestructuretwo', branch_id, pdf, branch_name]);
    };
    FeestructurePage.prototype.pay = function (id, expected_amount, date, total_amount) {
        var _this = this;
        console.log(expected_amount);
        var original_expected_amount = this.original_amt_data.filter(function (term) {
            return term.id == id;
        });
        if (original_expected_amount.length > 0) {
            if (expected_amount > original_expected_amount[0].expected_amount && expected_amount > total_amount) {
                this.apiService.presentToast('Please enter amount less than expected amount', 3000);
            }
            else {
                this.http.setDataSerializer('json');
                this.http.post('https://api.razorpay.com/v1/orders', { "amount": expected_amount * 100, "currency": "INR" }, this.header).then(function (data) {
                    console.log('pay', data);
                    var parsed_data = JSON.parse(data.data);
                    _this.order_id = parsed_data['id'];
                    parsed_data['userid'] = _this.user_id;
                    parsed_data['installmentid'] = id;
                    parsed_data['from_date'] = date + "-01";
                    parsed_data['to_date'] = '';
                    parsed_data['type'] = 'Preschool';
                    console.log('parsed_data', parsed_data);
                    _this.apiService.onlinePayment(parsed_data).then(function (data) {
                        if (data.status == 200) {
                            var options = {
                                description: 'Prangan',
                                image: 'http://dynamicvishva.in/Prangan_New/images/prangan.png',
                                currency: "INR",
                                key: _this.rkey,
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
                            var successCallback = function (payment_id) {
                                _this.successFn(payment_id);
                            };
                            // var successCallback = (success)=> {
                            //   alert('payment_id: ' + success.razorpay_payment_id)
                            //   var orderId = success.razorpay_order_id
                            //   var signature = success.razorpay_signature
                            // }
                            var cancelCallback = function (error) {
                                _this.apiService.presentToast("Payment Failed", 2000);
                            };
                            RazorpayCheckout.on('payment.success', successCallback);
                            RazorpayCheckout.on('payment.cancel', cancelCallback);
                            RazorpayCheckout.open(options);
                        }
                    })["catch"](function (err) {
                        console.log('err2', err);
                    });
                })["catch"](function (err) {
                    console.log('err1', err);
                });
            }
        }
        console.log('id', id, original_expected_amount);
    };
    FeestructurePage.prototype.payDaycare = function () {
        var _this = this;
        console.log(amount);
        if (this.month_type == 'single') {
            var amount = this.single_amount;
            var from_date = this.single_from_month;
            var to_date = '';
            if (from_date) {
                if (amount > 0) {
                    this.http.setDataSerializer('json');
                    this.http.post('https://api.razorpay.com/v1/orders', { "amount": amount * 100, "currency": "INR" }, this.header).then(function (data) {
                        console.log('pay', data);
                        var parsed_data = JSON.parse(data.data);
                        _this.order_id = parsed_data['id'];
                        parsed_data['userid'] = _this.user_id;
                        parsed_data['installmentid'] = '';
                        parsed_data['from_date'] = from_date;
                        parsed_data['to_date'] = to_date;
                        parsed_data['type'] = 'Daycare';
                        console.log('parsed_data', parsed_data);
                        _this.apiService.onlinePayment(parsed_data).then(function (data) {
                            if (data.status == 200) {
                                var options = {
                                    description: 'Prangan',
                                    image: 'http://dynamicvishva.in/Prangan_New/images/prangan.png',
                                    currency: "INR",
                                    key: _this.rkey,
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
                                var successCallback = function (payment_id) {
                                    _this.successFn(payment_id);
                                };
                                // var successCallback = (success)=> {
                                //   alert('payment_id: ' + success.razorpay_payment_id)
                                //   var orderId = success.razorpay_order_id
                                //   var signature = success.razorpay_signature
                                // }
                                var cancelCallback = function (error) {
                                    _this.apiService.presentToast("Payment Failed", 2000);
                                };
                                RazorpayCheckout.on('payment.success', successCallback);
                                RazorpayCheckout.on('payment.cancel', cancelCallback);
                                RazorpayCheckout.open(options);
                            }
                        })["catch"](function (err) {
                            console.log('err2', err);
                        });
                    })["catch"](function (err) {
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
            var month_from_date = this.from_month;
            var month_to_date = this.to_month;
            if (month_from_date && month_to_date) {
                if (amount > 0) {
                    if (month_from_date > month_to_date) {
                        this.apiService.presentToast('From month cannot be greater than To Month ', 3000);
                    }
                    else {
                        this.http.setDataSerializer('json');
                        this.http.post('https://api.razorpay.com/v1/orders', { "amount": amount * 100, "currency": "INR" }, this.header).then(function (data) {
                            console.log('pay', data);
                            var parsed_data = JSON.parse(data.data);
                            _this.order_id = parsed_data['id'];
                            parsed_data['userid'] = _this.user_id;
                            parsed_data['installmentid'] = '';
                            parsed_data['from_date'] = month_from_date;
                            parsed_data['to_date'] = month_to_date;
                            parsed_data['type'] = 'Daycare';
                            console.log('parsed_data', parsed_data);
                            _this.apiService.onlinePayment(parsed_data).then(function (data) {
                                if (data.status == 200) {
                                    var options = {
                                        description: 'Prangan',
                                        image: 'http://dynamicvishva.in/Prangan_New/images/prangan.png',
                                        currency: "INR",
                                        key: _this.rkey,
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
                                    var successCallback = function (payment_id) {
                                        _this.successFn(payment_id);
                                    };
                                    // var successCallback = (success)=> {
                                    //   alert('payment_id: ' + success.razorpay_payment_id)
                                    //   var orderId = success.razorpay_order_id
                                    //   var signature = success.razorpay_signature
                                    // }
                                    var cancelCallback = function (error) {
                                        _this.apiService.presentToast("Payment Failed", 2000);
                                    };
                                    RazorpayCheckout.on('payment.success', successCallback);
                                    RazorpayCheckout.on('payment.cancel', cancelCallback);
                                    RazorpayCheckout.open(options);
                                }
                            })["catch"](function (err) {
                                console.log('err2', err);
                            });
                        })["catch"](function (err) {
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
    };
    FeestructurePage.prototype.payInstallment = function (id, amount, date, total_amount) {
        var _this = this;
        if (parseInt(amount) > 0) {
            console.log(amount);
            var original_expected_amount = this.original_amt_data.filter(function (term) {
                return term.id == id;
            });
            if (original_expected_amount.length > 0) {
                if (amount > original_expected_amount[0].amount && amount > total_amount) {
                    this.apiService.presentToast('Please enter amount less than expected amount', 3000);
                }
                else {
                    this.http.setDataSerializer('json');
                    this.http.post('https://api.razorpay.com/v1/orders', { "amount": amount * 100, "currency": "INR" }, this.header).then(function (data) {
                        console.log('pay', data);
                        var parsed_data = JSON.parse(data.data);
                        _this.order_id = parsed_data['id'];
                        parsed_data['userid'] = _this.user_id;
                        parsed_data['installmentid'] = '';
                        parsed_data['from_date'] = date;
                        parsed_data['to_date'] = '';
                        parsed_data['type'] = 'Preschool';
                        console.log('parsed_data', parsed_data);
                        _this.apiService.onlinePayment(parsed_data).then(function (data) {
                            if (data.status == 200) {
                                var options = {
                                    description: 'Prangan',
                                    image: 'http://dynamicvishva.in/Prangan_New/images/prangan.png',
                                    currency: "INR",
                                    key: _this.rkey,
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
                                var successCallback = function (payment_id) {
                                    _this.successFn(payment_id);
                                };
                                // var successCallback = (success)=> {
                                //   alert('payment_id: ' + success.razorpay_payment_id)
                                //   var orderId = success.razorpay_order_id
                                //   var signature = success.razorpay_signature
                                // }
                                var cancelCallback = function (error) {
                                    _this.apiService.presentToast("Payment Failed", 2000);
                                };
                                RazorpayCheckout.on('payment.success', successCallback);
                                RazorpayCheckout.on('payment.cancel', cancelCallback);
                                RazorpayCheckout.open(options);
                            }
                        })["catch"](function (err) {
                            console.log('err2', err);
                        });
                    })["catch"](function (err) {
                        console.log('err1', err);
                    });
                }
            }
            console.log('id', id, original_expected_amount);
        }
        else {
            this.apiService.presentToast('Please enter amount ', 3000);
        }
    };
    FeestructurePage.prototype.presentAlert = function (message) {
        return __awaiter(this, void 0, void 0, function () {
            var alert;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.alertController.create({
                            header: 'Successful',
                            message: message,
                            mode: 'ios',
                            backdropDismiss: false,
                            buttons: ['OK']
                        })];
                    case 1:
                        alert = _a.sent();
                        return [4 /*yield*/, alert.present()];
                    case 2:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    FeestructurePage.prototype.successFn = function (payment_id) {
        var _this = this;
        console.log(payment_id);
        console.log('a', this.payment_data);
        this.payment_data['order_id'] = this.order_id;
        this.payment_data['razorpay_payment_id'] = payment_id['razorpay_payment_id'];
        this.payment_data['razorpay_order_id'] = payment_id['razorpay_order_id'];
        this.payment_data['razorpay_signature'] = payment_id['razorpay_signature'];
        this.payment_data['branchid'] = this.branch_id;
        this.apiService.verifyonlinePayment(this.payment_data).then(function (data) {
            if (data.status == 200) {
                _this.presentAlert('Payment is successful');
                _this.from_month = '';
                _this.to_month = '';
                _this.multiple_amount = '';
                _this.single_from_month = '';
                _this.single_amount = '';
                _this.ionViewWillEnter();
            }
        })["catch"](function (err) {
            console.log(err);
            _this.log = err;
            var error_message = JSON.parse(err.error)['error'];
            _this.apiService.presentToast(error_message, 2000);
        });
    };
    FeestructurePage.prototype.doRefresh = function (event) {
        var _this = this;
        this.storage.get('type').then(function (data) {
            console.log('data', data);
            _this.type = data;
            if (data === 'quicktour') {
                _this.apiService.fetchAllBranchFeeStructure().then(function (data) {
                    _this.fees = JSON.parse(data.data);
                    event.target.complete();
                });
            }
            else {
                _this.storage.get('user').then(function (data) {
                    _this.branch_id = JSON.parse(data).branch_id;
                    _this.user_id = JSON.parse(data).id;
                    _this.apiService.fetchBranchFeeStructure(_this.branch_id).then(function (data) {
                        _this.fees = [JSON.parse(data.data)];
                        if (_this.branch_id == '1') {
                            _this.rkey = 'rzp_test_YWFaY0cPlGJ7Lc';
                            _this.header = {
                                'Authorization': 'Basic ' + btoa("rzp_test_YWFaY0cPlGJ7Lc:HFYXeeJ7YfSWBzEmQlRDFCYj")
                            };
                        }
                        else if (_this.branch_id == '9') {
                            _this.rkey = 'rzp_test_tjMm2K5OafvfTD';
                            _this.header = {
                                'Authorization': 'Basic ' + btoa("rzp_test_tjMm2K5OafvfTD:mbqr5LV8Czty5FM69iqFItaI")
                            };
                        }
                        else if (_this.branch_id == '10') {
                            _this.rkey = 'rzp_test_v2v3L8A4Zf0Ber';
                            _this.header = {
                                'Authorization': 'Basic ' + btoa("rzp_test_v2v3L8A4Zf0Ber:a7ErXuPClT67NeM7m6OmVWDy")
                            };
                        }
                        else if (_this.branch_id == '2') {
                            _this.rkey = 'rzp_test_B4OIYna3AFk95P';
                            _this.header = {
                                'Authorization': 'Basic ' + btoa("rzp_test_B4OIYna3AFk95P:ANKcDzQfNuetTssXczBkx0Iy")
                            };
                        }
                        _this.storage.get('userType').then(function (userType) {
                            _this.userType = userType;
                            if (userType == 'Daycare') {
                                event.target.complete();
                                _this.apiService.fetchDaycare(_this.user_id).then(function (data) {
                                    _this.daycare_fee_details = JSON.parse(data.data);
                                    _this.original_daycare_amt = JSON.parse(data.data);
                                    console.log('fess', _this.daycare_fee_details);
                                })["catch"](function (err) {
                                    _this.daycare_fee_details = '';
                                    console.log(err);
                                });
                            }
                            else {
                                event.target.complete();
                                _this.apiService.fetchFeesDetails(_this.user_id).then(function (data) {
                                    _this.fee_details = JSON.parse(data.data);
                                    _this.fee_details_original = JSON.parse(data.data);
                                    _this.original_amt_data = _this.fee_details_original['b'];
                                    _this.user_amt_a = _this.fee_details['a'];
                                    _this.user_amt_b = _this.fee_details['b'];
                                    if (!_this.user_amt_b) {
                                        _this.apiService.fetchInstallation().then(function (data) {
                                            console.log('dara', data);
                                            _this.installations = JSON.parse(data.data);
                                            _this.original_amt_data = JSON.parse(data.data);
                                        })["catch"](function (err) {
                                            _this.installations = '';
                                            console.log(err);
                                        });
                                    }
                                    console.log('fess', _this.fee_details);
                                })["catch"](function (err) {
                                    _this.fee_details = '';
                                });
                            }
                        });
                    });
                });
            }
        });
    };
    FeestructurePage.prototype.typeChange = function (event) {
        console.log(event);
        console.log(event.target.value);
        this.month_type = event.target.value;
    };
    FeestructurePage.prototype.alreadyPaid = function () {
        this.apiService.presentToast('Payment is already done ', 3000);
    };
    FeestructurePage = __decorate([
        core_1.Component({
            selector: 'app-feestructure',
            templateUrl: './feestructure.page.html',
            styleUrls: ['./feestructure.page.scss']
        })
    ], FeestructurePage);
    return FeestructurePage;
}());
exports.FeestructurePage = FeestructurePage;
