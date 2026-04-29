"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.HomePage = void 0;
var core_1 = require("@angular/core");
var HomePage = /** @class */ (function () {
    function HomePage(router, menuCtrl, storage) {
        this.router = router;
        this.menuCtrl = menuCtrl;
        this.storage = storage;
    }
    HomePage.prototype.openQuickTour = function () {
        var _this = this;
        this.storage.set('type', 'quicktour').then(function (_) {
            _this.router.navigate(['quicktour']);
        });
    };
    HomePage.prototype.openLogin = function () {
        var _this = this;
        this.storage.set('type', 'login').then(function (_) {
            _this.router.navigate(['login']);
        });
    };
    HomePage.prototype.ionViewWillEnter = function () {
        this.menuCtrl.enable(false, 'main-content-1');
        this.menuCtrl.enable(false, 'main-content-2');
    };
    // ionViewDidLeave(){
    //   this.menuCtrl.enable(true);
    // }
    HomePage.prototype.ngOnInit = function () {
        this.menuCtrl.enable(false, 'main-content-1');
        this.menuCtrl.enable(false, 'main-content-2');
    };
    HomePage = __decorate([
        core_1.Component({
            selector: 'app-home',
            templateUrl: 'home.page.html',
            styleUrls: ['home.page.scss']
        })
    ], HomePage);
    return HomePage;
}());
exports.HomePage = HomePage;
