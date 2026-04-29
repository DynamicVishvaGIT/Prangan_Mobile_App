"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.PaymenthistoryPage = void 0;
var core_1 = require("@angular/core");
var PaymenthistoryPage = /** @class */ (function () {
    function PaymenthistoryPage(storage, apiService, alertController) {
        this.storage = storage;
        this.apiService = apiService;
        this.alertController = alertController;
    }
    PaymenthistoryPage.prototype.ngOnInit = function () {
    };
    PaymenthistoryPage.prototype.ionViewWillEnter = function () {
        var _this = this;
        this.storage.get('user').then(function (data) {
            _this.branch_id = JSON.parse(data).branch_id;
            _this.user_id = JSON.parse(data).id;
            _this.storage.get('userType').then(function (userType) {
                _this.userType = userType;
                if (userType == 'Preschool') {
                    _this.apiService.paymentHistory(_this.userType, _this.user_id).then(function (data) {
                        console.log(data);
                        _this.orders = JSON.parse(data.data);
                        _this.isOrdersAvailable = true;
                    })["catch"](function (err) {
                        console.log(err);
                        _this.isOrdersAvailable = false;
                        _this.orders = '';
                    });
                }
                else {
                    _this.apiService.fetchDaycare(_this.user_id).then(function (data) {
                        _this.orders = JSON.parse(data.data);
                        console.log('fess', _this.orders);
                        _this.isOrdersAvailable = true;
                    })["catch"](function (err) {
                        _this.orders = '';
                        _this.isOrdersAvailable = false;
                        console.log(err);
                    });
                }
            });
        });
    };
    PaymenthistoryPage.prototype.ConvertTimeStamp = function (time) {
        return this.formatDate(new Date(time * 1000));
    };
    PaymenthistoryPage.prototype.formatDate = function (date) {
        var d = new Date(date), month = '' + (d.getMonth() + 1), day = '' + d.getDate(), year = d.getFullYear();
        if (month.length < 2)
            month = '0' + month;
        if (day.length < 2)
            day = '0' + day;
        return [day, month, year].join('/') + " " + d.getHours() + ":" + d.getMinutes();
    };
    PaymenthistoryPage.prototype.doRefresh = function (event) {
        var _this = this;
        this.storage.get('user').then(function (data) {
            _this.branch_id = JSON.parse(data).branch_id;
            _this.user_id = JSON.parse(data).id;
            _this.storage.get('userType').then(function (userType) {
                _this.userType = userType;
                _this.apiService.paymentHistory(_this.userType, _this.user_id).then(function (data) {
                    console.log(data);
                    _this.orders = JSON.parse(data.data);
                    _this.isOrdersAvailable = true;
                    event.target.complete();
                })["catch"](function (err) {
                    console.log(err);
                    _this.isOrdersAvailable = false;
                    _this.orders = '';
                    event.target.complete();
                });
            });
        });
    };
    PaymenthistoryPage = __decorate([
        core_1.Component({
            selector: 'app-paymenthistory',
            templateUrl: './paymenthistory.page.html',
            styleUrls: ['./paymenthistory.page.scss']
        })
    ], PaymenthistoryPage);
    return PaymenthistoryPage;
}());
exports.PaymenthistoryPage = PaymenthistoryPage;
