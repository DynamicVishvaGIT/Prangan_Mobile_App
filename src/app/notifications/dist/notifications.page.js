"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.NotificationsPage = void 0;
var core_1 = require("@angular/core");
var NotificationsPage = /** @class */ (function () {
    function NotificationsPage(storage, apiService) {
        this.storage = storage;
        this.apiService = apiService;
    }
    NotificationsPage.prototype.ngOnInit = function () {
    };
    NotificationsPage.prototype.ionViewWillEnter = function () {
        var _this = this;
        this.storage.get('user').then(function (data) {
            _this.user_id = JSON.parse(data).id;
            _this.storage.get('userType').then(function (userType) {
                _this.apiService.fetchNotifications(userType, _this.user_id).then(function (data) {
                    _this.notifications = JSON.parse(data.data);
                    console.log('notific', _this.notifications);
                })["catch"](function (err) {
                    _this.notifications = '';
                });
            });
        });
    };
    NotificationsPage.prototype.doRefresh = function (event) {
        var _this = this;
        this.storage.get('user').then(function (data) {
            _this.user_id = JSON.parse(data).id;
            _this.storage.get('userType').then(function (userType) {
                _this.apiService.fetchNotifications(userType, _this.user_id).then(function (data) {
                    _this.notifications = JSON.parse(data.data);
                    console.log('notific', _this.notifications);
                    event.target.complete();
                })["catch"](function (err) {
                    _this.notifications = '';
                    event.target.complete();
                });
            });
        });
    };
    NotificationsPage = __decorate([
        core_1.Component({
            selector: 'app-notifications',
            templateUrl: './notifications.page.html',
            styleUrls: ['./notifications.page.scss']
        })
    ], NotificationsPage);
    return NotificationsPage;
}());
exports.NotificationsPage = NotificationsPage;
