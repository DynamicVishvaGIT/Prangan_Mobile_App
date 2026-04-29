'use strict';

var tslib = require('tslib');
var core = require('@awesome-cordova-plugins/core');
var i0 = require('@angular/core');
require('rxjs');

function _interopNamespaceDefault(e) {
    var n = Object.create(null);
    if (e) {
        Object.keys(e).forEach(function (k) {
            if (k !== 'default') {
                var d = Object.getOwnPropertyDescriptor(e, k);
                Object.defineProperty(n, k, d.get ? d : {
                    enumerable: true,
                    get: function () { return e[k]; }
                });
            }
        });
    }
    n.default = e;
    return Object.freeze(n);
}

var i0__namespace = /*#__PURE__*/_interopNamespaceDefault(i0);

var FCM = /** @class */ (function (_super) {
    tslib.__extends(FCM, _super);
    function FCM() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    FCM.prototype.getAPNSToken = function () { return core.cordova(this, "getAPNSToken", {}, arguments); };
    FCM.prototype.getToken = function () { return core.cordova(this, "getToken", {}, arguments); };
    FCM.prototype.onTokenRefresh = function () { return core.cordova(this, "onTokenRefresh", { "observable": true }, arguments); };
    FCM.prototype.subscribeToTopic = function (topic) { return core.cordova(this, "subscribeToTopic", {}, arguments); };
    FCM.prototype.unsubscribeFromTopic = function (topic) { return core.cordova(this, "unsubscribeFromTopic", {}, arguments); };
    FCM.prototype.hasPermission = function () { return core.cordova(this, "hasPermission", {}, arguments); };
    FCM.prototype.onNotification = function () { return core.cordova(this, "onNotification", { "observable": true, "successIndex": 0, "errorIndex": 2 }, arguments); };
    FCM.prototype.clearAllNotifications = function () { return core.cordova(this, "clearAllNotifications", {}, arguments); };
    FCM.prototype.requestPushPermissionIOS = function (options) { return core.cordova(this, "requestPushPermissionIOS", {}, arguments); };
    FCM.prototype.createNotificationChannelAndroid = function (channelConfig) { return core.cordova(this, "createNotificationChannelAndroid", {}, arguments); };
    FCM.ɵfac = i0__namespace.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.16", ngImport: i0__namespace, type: FCM, deps: null, target: i0__namespace.ɵɵFactoryTarget.Injectable });
    FCM.ɵprov = i0__namespace.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "12.2.16", ngImport: i0__namespace, type: FCM });
    FCM.pluginName = "FCM";
    FCM.plugin = "cordova-plugin-fcm-with-dependecy-updated";
    FCM.pluginRef = "FCMPlugin";
    FCM.repo = "https://github.com/andrehtissot/cordova-plugin-fcm-with-dependecy-updated";
    FCM.platforms = ["Android", "iOS"];
    FCM = tslib.__decorate([], FCM);
    return FCM;
}(core.AwesomeCordovaNativePlugin));
i0__namespace.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.16", ngImport: i0__namespace, type: FCM, decorators: [{
            type: i0.Injectable
        }], propDecorators: { getAPNSToken: [], getToken: [], onTokenRefresh: [], subscribeToTopic: [], unsubscribeFromTopic: [], hasPermission: [], onNotification: [], clearAllNotifications: [], requestPushPermissionIOS: [], createNotificationChannelAndroid: [] } });

exports.FCM = FCM;
