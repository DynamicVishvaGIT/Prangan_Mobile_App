"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.MobileloginPage = void 0;
var core_1 = require("@angular/core");
var forms_1 = require("@angular/forms");
var MobileloginPage = /** @class */ (function () {
    function MobileloginPage(menuCtrl, apiService, router) {
        this.menuCtrl = menuCtrl;
        this.apiService = apiService;
        this.router = router;
    }
    MobileloginPage.prototype.ngOnInit = function () {
        this.loginForm = new forms_1.FormGroup({
            userMobile: new forms_1.FormControl('', [forms_1.Validators.required, forms_1.Validators.maxLength(10), forms_1.Validators.minLength(10), forms_1.Validators.pattern(/^[0-9]{10}$/)])
        });
        this.menuCtrl.enable(false, 'main-content-1');
        this.menuCtrl.enable(false, 'main-content-2');
    };
    Object.defineProperty(MobileloginPage.prototype, "userMobile", {
        get: function () {
            return this.loginForm.get('userMobile');
        },
        enumerable: false,
        configurable: true
    });
    MobileloginPage.prototype.onSubmit = function (body) {
        var _this = this;
        this.apiService.login({ 'Username': body['userMobile'] }).then(function (data) {
            console.log('data', data);
            if (data.status === 200) {
                _this.router.navigate(['otp', body['userMobile']]);
            }
        })["catch"](function (err) {
            if (err.status === 403) {
                _this.apiService.presentToast('Invalid Mobile Number', 2000);
            }
            console.log('err', err);
        });
    };
    MobileloginPage.prototype.ionViewWillEnter = function () {
        this.menuCtrl.enable(false, 'main-content-1');
        this.menuCtrl.enable(false, 'main-content-2');
    };
    MobileloginPage = __decorate([
        core_1.Component({
            selector: 'app-mobilelogin',
            templateUrl: './mobilelogin.page.html',
            styleUrls: ['./mobilelogin.page.scss']
        })
    ], MobileloginPage);
    return MobileloginPage;
}());
exports.MobileloginPage = MobileloginPage;
