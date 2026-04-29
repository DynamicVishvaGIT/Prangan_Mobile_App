'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var tslib = require('tslib');
var core = require('@ionic-native/core');
var core$1 = require('@angular/core');

var AppMinimize = /** @class */ (function (_super) {
    tslib.__extends(AppMinimize, _super);
    function AppMinimize() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    AppMinimize.prototype.minimize = function () { return core.cordova(this, "minimize", {}, arguments); };
    AppMinimize.pluginName = "AppMinimize";
    AppMinimize.plugin = "cordova-plugin-appminimize";
    AppMinimize.pluginRef = "plugins.appMinimize";
    AppMinimize.repo = "https://github.com/tomloprod/cordova-plugin-appminimize";
    AppMinimize.platforms = ["Android"];
    AppMinimize.decorators = [
        { type: core$1.Injectable }
    ];
    return AppMinimize;
}(core.IonicNativePlugin));

exports.AppMinimize = AppMinimize;
