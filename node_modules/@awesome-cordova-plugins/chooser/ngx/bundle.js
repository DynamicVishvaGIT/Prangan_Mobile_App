'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var tslib = require('tslib');
var core$1 = require('@angular/core');
var core = require('@awesome-cordova-plugins/core');

var Chooser = /** @class */ (function (_super) {
    tslib.__extends(Chooser, _super);
    function Chooser() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Chooser.prototype.getFile = function (accept) { return core.cordova(this, "getFile", {}, arguments); };
    Chooser.prototype.getFileMetadata = function (accept) { return core.cordova(this, "getFileMetadata", {}, arguments); };
    Chooser.pluginName = "Chooser";
    Chooser.plugin = "cordova-plugin-chooser";
    Chooser.pluginRef = "chooser";
    Chooser.repo = "https://github.com/cyph/cordova-plugin-chooser";
    Chooser.platforms = ["Android", "iOS"];
    Chooser.decorators = [
        { type: core$1.Injectable }
    ];
    return Chooser;
}(core.AwesomeCordovaNativePlugin));

exports.Chooser = Chooser;
