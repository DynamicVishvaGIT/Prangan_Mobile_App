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
exports.GallerytwoPage = void 0;
var core_1 = require("@angular/core");
var GallerytwoPage = /** @class */ (function () {
    // fileTransfer: FileTransferObject
    function GallerytwoPage(route, apiService, location, photoViewer, file, sanitizer, http, androidPermissions, alertController) {
        this.route = route;
        this.apiService = apiService;
        this.location = location;
        this.photoViewer = photoViewer;
        this.file = file;
        this.sanitizer = sanitizer;
        this.http = http;
        this.androidPermissions = androidPermissions;
        this.alertController = alertController;
    }
    GallerytwoPage.prototype.ngOnInit = function () {
    };
    GallerytwoPage.prototype.ionViewDidEnter = function () {
        var _this = this;
        this.route.paramMap.subscribe(function (params) {
            _this.id = params.get('id');
            _this.name = params.get('name');
            _this.apiService.fetchAlbumDetails(_this.id).then(function (data) {
                console.log('data', data);
                _this.images = JSON.parse(data.data);
            });
        });
    };
    GallerytwoPage.prototype.goBack = function () {
        this.location.back();
    };
    GallerytwoPage.prototype.presentAlert = function (message) {
        return __awaiter(this, void 0, void 0, function () {
            var alert;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.alertController.create({
                            header: 'Successful',
                            message: message,
                            mode: 'ios',
                            backdropDismiss: false,
                            buttons: [
                                {
                                    text: 'OK',
                                    handler: function () {
                                        console.log('ok');
                                    }
                                },
                            ]
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
    GallerytwoPage.prototype.download = function (url) {
        var _this = this;
        if (url) {
            this.androidPermissions.checkPermission(this.androidPermissions.PERMISSION.READ_EXTERNAL_STORAGE).then(function (data) {
                console.log(data);
                if (!data.hasPermission) {
                    console.log('1');
                    _this.apiService.presentToast('Storage permission is not turned on', 2000);
                    _this.androidPermissions.requestPermissions([_this.androidPermissions.PERMISSION.READ_EXTERNAL_STORAGE]);
                }
                else {
                    console.log('2');
                    var filename = _this.parseUrlFilename(url);
                    console.log('filename', filename);
                    var filePath = _this.file.externalRootDirectory + '/Download/' + filename;
                    _this.http.downloadFile(url, {}, {}, filePath).then(function (response) {
                        _this.presentAlert('Image saved to Downloads folder');
                    })["catch"](function (err) {
                        _this.apiService.presentToast(err.error, 2000);
                        // prints 403
                        console.log('error block ... ', err.status);
                        // prints Permission denied
                        console.log('error block ... ', err.error);
                    });
                }
            })["catch"](function (err) {
                _this.androidPermissions.requestPermissions([_this.androidPermissions.PERMISSION.READ_EXTERNAL_STORAGE]);
            });
        }
    };
    GallerytwoPage.prototype.parseUrlFilename = function (url, defaultFilename) {
        if (defaultFilename === void 0) { defaultFilename = null; }
        var filename = new URL(url, "https://example.com").href.split("#").shift().split("?").shift().split("/").pop(); //No need to change "https://example.com"; it's only present to allow for processing relative URLs.
        if (!filename) {
            if (defaultFilename) {
                filename = defaultFilename;
                //No default filename provided; use a pseudorandom string.
            }
            else {
                filename = Math.random().toString(36).substr(2, 10);
                // filename='abc.png'
            }
        }
        return filename;
    };
    GallerytwoPage.prototype.viewImage = function (url) {
        if (url) {
            this.photoViewer.show(url, '', { share: true });
        }
    };
    GallerytwoPage.prototype.doRefresh = function (event) {
        var _this = this;
        this.route.paramMap.subscribe(function (params) {
            _this.id = params.get('id');
            _this.name = params.get('name');
            _this.apiService.fetchAlbumDetails(_this.id).then(function (data) {
                console.log('data', data);
                _this.images = JSON.parse(data.data);
                event.target.complete();
            })["catch"](function (err) {
                event.target.complete();
            });
        });
    };
    GallerytwoPage = __decorate([
        core_1.Component({
            selector: 'app-gallerytwo',
            templateUrl: './gallerytwo.page.html',
            styleUrls: ['./gallerytwo.page.scss']
        })
    ], GallerytwoPage);
    return GallerytwoPage;
}());
exports.GallerytwoPage = GallerytwoPage;
