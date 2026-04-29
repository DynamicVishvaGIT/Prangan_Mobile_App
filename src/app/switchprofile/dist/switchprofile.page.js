"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.SwitchprofilePage = void 0;
var core_1 = require("@angular/core");
var SwitchprofilePage = /** @class */ (function () {
    function SwitchprofilePage(apiService, router, storage, fcm, menuCtrl) {
        this.apiService = apiService;
        this.router = router;
        this.storage = storage;
        this.fcm = fcm;
        this.menuCtrl = menuCtrl;
    }
    SwitchprofilePage.prototype.ngOnInit = function () {
    };
    SwitchprofilePage.prototype.ionViewDidEnter = function () {
        var _this = this;
        if (this.menuCtrl.isEnabled) {
            console.log('hi');
            this.menuCtrl.swipeGesture(false);
        }
        this.storage.get('cocoon_data').then(function (data) {
            console.log('cc', data);
            _this.preschool_users = JSON.parse(data)['preschool'];
            _this.daycare_users = JSON.parse(data)['daycare'];
            // this.profile=JSON.parse(data)
        });
        this.fcm.getToken().then(function (token) {
            _this.token = token;
        });
    };
    SwitchprofilePage.prototype.selectUser = function (id, Class) {
        var _this = this;
        this.apiService.userDetails(id, Class).then(function (data) {
            var user = JSON.parse(data.data);
            _this.storage.set('user', data.data);
            if (user.status == 'Active' && user.Approve_status == 'Active') {
                _this.router.navigate(['quicktour']);
                _this.storage.set('active', true);
            }
            else {
                if (Class == 'Daycare') {
                    _this.storage.set('active', false).then(function (_) {
                        _this.router.navigate(['addadmission']);
                    });
                }
                else {
                    _this.storage.set('active', false).then(function (_) {
                        _this.router.navigate(['preschoolform']);
                    });
                }
            }
            _this.storage.set('userType', Class);
            _this.apiService.setUserData(data.data, Class);
            _this.apiService.userFMS({ 'userid': user.id, 'type': Class, 'fmskey': _this.token })["catch"](function (err) {
                console.log(err);
            });
        });
    };
    SwitchprofilePage.prototype.doRefresh = function (event) {
        var _this = this;
        this.storage.get('cocoon_data').then(function (data) {
            console.log('cc', data);
            _this.preschool_users = JSON.parse(data)['preschool'];
            _this.daycare_users = JSON.parse(data)['daycare'];
            // this.profile=JSON.parse(data)
            event.target.complete();
        })["catch"](function (err) {
            event.target.complete();
        });
        this.fcm.getToken().then(function (token) {
            _this.token = token;
        });
    };
    SwitchprofilePage = __decorate([
        core_1.Component({
            selector: 'app-switchprofile',
            templateUrl: './switchprofile.page.html',
            styleUrls: ['./switchprofile.page.scss']
        })
    ], SwitchprofilePage);
    return SwitchprofilePage;
}());
exports.SwitchprofilePage = SwitchprofilePage;
