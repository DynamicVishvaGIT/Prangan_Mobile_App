"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.OtpPage = void 0;
var core_1 = require("@angular/core");
var OtpPage = /** @class */ (function () {
    function OtpPage(menuCtrl, apiService, route, router, storage, fcm) {
        this.menuCtrl = menuCtrl;
        this.apiService = apiService;
        this.route = route;
        this.router = router;
        this.storage = storage;
        this.fcm = fcm;
    }
    OtpPage.prototype.ionViewDidEnter = function () {
        var _this = this;
        this.mobNo = this.route.snapshot.paramMap.get('mobNo');
        this.fcm.getToken().then(function (token) {
            _this.token = token;
        });
    };
    OtpPage.prototype.ngOnInit = function () {
        this.menuCtrl.enable(false, 'main-content-1');
        this.menuCtrl.enable(false, 'main-content-2');
    };
    OtpPage.prototype.onOtpChange = function (otp) {
        this.otp = otp;
    };
    OtpPage.prototype.onSubmit = function () {
        var _this = this;
        console.log(this.otp);
        if (!this.otp) {
            this.apiService.presentToast('Please enter OTP', 2000);
        }
        else {
            if (this.otp.length !== 6) {
                this.apiService.presentToast('Please enter valid OTP', 2000);
            }
            else {
                this.apiService.verify_otp(this.mobNo, this.otp).then(function (data) {
                    console.log('data', data);
                    var daycare = JSON.parse(data.data)['daycare'];
                    var preschool = JSON.parse(data.data)['preschool'];
                    _this.storage.set('cocoon_data', data.data);
                    if (daycare.length == 0 && preschool.length == 0) {
                        _this.apiService.presentToast('Please wait for your registration approval ', 2000);
                    }
                    if (daycare.length > 0 && preschool.length > 0) {
                        _this.router.navigate(['switchprofile']);
                    }
                    else if (daycare.length === 1 && preschool.length === 0) {
                        _this.apiService.userDetails(daycare[0].id, 'Daycare').then(function (data) {
                            var user = JSON.parse(data.data);
                            _this.storage.set('user', data.data);
                            if (user.status == 'Active' && user.Approve_status == 'Active') {
                                _this.router.navigate(['quicktour']);
                                _this.storage.set('active', true);
                            }
                            else {
                                _this.storage.set('active', false).then(function (_) {
                                    _this.router.navigate(['addadmission']);
                                });
                            }
                            _this.storage.set('userType', 'Daycare');
                            _this.apiService.setUserData(data.data, 'Daycare');
                            _this.apiService.userFMS({ 'userid': user.id, 'type': 'Daycare', 'fmskey': _this.token })["catch"](function (err) {
                                console.log(err);
                            });
                        });
                    }
                    else if (preschool.length === 1 && daycare.length === 0) {
                        _this.apiService.userDetails(preschool[0].id, 'Preschool').then(function (data) {
                            var user = JSON.parse(data.data);
                            _this.storage.set('user', data.data);
                            if (user.status == 'Active' && user.Approve_status == 'Active') {
                                _this.router.navigate(['quicktour']);
                                _this.storage.set('active', true);
                            }
                            else {
                                _this.storage.set('active', false).then(function (_) {
                                    _this.router.navigate(['preschoolform']);
                                });
                            }
                            _this.apiService.userFMS({ 'userid': user.id, 'type': 'Preschool', 'fmskey': _this.token }).then(function (data) {
                                console.log(data);
                            })["catch"](function (err) {
                                console.log(err);
                            });
                            _this.storage.set('userType', 'Preschool');
                            _this.apiService.setUserData(data.data, 'Preschool');
                        });
                    }
                    else if (preschool.length > 1 || daycare.length > 1) {
                        console.log('err3');
                        _this.router.navigate(['switchprofile']);
                    }
                })["catch"](function (err) {
                    if (err.status === 403) {
                        _this.apiService.presentToast('OTP is invalid', 2000);
                    }
                    console.log('err', err);
                });
            }
        }
        // this.router.navigate(['quicktour'])
    };
    OtpPage.prototype.ionViewWillEnter = function () {
        this.menuCtrl.enable(false);
    };
    // ionViewDidLeave(){
    //   this.menuCtrl.enable(true);
    // 
    OtpPage.prototype.resendOTP = function () {
        var _this = this;
        this.apiService.login({ 'Username': this.mobNo }).then(function (data) {
            if (data.status === 200) {
                _this.apiService.presentToast('OTP is sent', 2000);
            }
        });
    };
    OtpPage = __decorate([
        core_1.Component({
            selector: 'app-otp',
            templateUrl: './otp.page.html',
            styleUrls: ['./otp.page.scss']
        })
    ], OtpPage);
    return OtpPage;
}());
exports.OtpPage = OtpPage;
