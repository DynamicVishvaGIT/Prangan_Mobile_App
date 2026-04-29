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
exports.ChildotherinfotwoPage = void 0;
var forms_1 = require("@angular/forms");
var core_1 = require("@angular/core");
var ChildotherinfotwoPage = /** @class */ (function () {
    function ChildotherinfotwoPage(storage, apiService, actionSheetController, alertController, router, file, camera, cf, loadingController, menuCtrl) {
        this.storage = storage;
        this.apiService = apiService;
        this.actionSheetController = actionSheetController;
        this.alertController = alertController;
        this.router = router;
        this.file = file;
        this.camera = camera;
        this.cf = cf;
        this.loadingController = loadingController;
        this.menuCtrl = menuCtrl;
        this.accordion_expanded = false;
    }
    ChildotherinfotwoPage.prototype.ngOnInit = function () {
        this.menuCtrl.enable(false);
        this.stepFourForm = new forms_1.FormGroup({
            q1_ans: new forms_1.FormControl('', [forms_1.Validators.required, forms_1.Validators.pattern(/^[a-zA-Z\. ]+$/)]),
            q2_ans: new forms_1.FormControl('', [forms_1.Validators.pattern(/^[a-zA-z -]+$/)]),
            q3_ans: new forms_1.FormControl(''),
            q5_ans: new forms_1.FormControl('', [forms_1.Validators.maxLength(10), forms_1.Validators.minLength(10), forms_1.Validators.pattern(/^[0-9]{10}$/)]),
            q6_ans: new forms_1.FormControl('', [forms_1.Validators.pattern(/^[a-zA-Z\. ]+$/)]),
            q7_ans: new forms_1.FormControl('', [forms_1.Validators.pattern(/^[a-zA-z -]+$/)]),
            q8_ans: new forms_1.FormControl(''),
            q10_ans: new forms_1.FormControl('', [forms_1.Validators.maxLength(10), forms_1.Validators.minLength(10), forms_1.Validators.pattern(/^[0-9]{10}$/)]),
            q11_ans: new forms_1.FormControl('')
        });
    };
    ChildotherinfotwoPage.prototype.toggle_accordion = function () {
        this.accordion_expanded = this.accordion_expanded === false;
    };
    ChildotherinfotwoPage.prototype.presentLoading = function () {
        return __awaiter(this, void 0, void 0, function () {
            var loading, _a, role, data;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0: return [4 /*yield*/, this.loadingController.create({
                            message: 'Please wait...',
                            mode: 'ios',
                            backdropDismiss: false
                        })];
                    case 1:
                        loading = _b.sent();
                        return [2 /*return*/, loading.present()];
                    case 2:
                        _a = _b.sent(), role = _a.role, data = _a.data;
                        console.log('Loading dismissed!');
                        return [2 /*return*/];
                }
            });
        });
    };
    Object.defineProperty(ChildotherinfotwoPage.prototype, "q1_ans", {
        get: function () {
            return this.stepFourForm.get('q1_ans');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ChildotherinfotwoPage.prototype, "q2_ans", {
        get: function () {
            return this.stepFourForm.get('q2_ans');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ChildotherinfotwoPage.prototype, "q3_ans", {
        get: function () {
            return this.stepFourForm.get('q3_ans');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ChildotherinfotwoPage.prototype, "q5_ans", {
        get: function () {
            return this.stepFourForm.get('q5_ans');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ChildotherinfotwoPage.prototype, "q6_ans", {
        get: function () {
            return this.stepFourForm.get('q6_ans');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ChildotherinfotwoPage.prototype, "q7_ans", {
        get: function () {
            return this.stepFourForm.get('q7_ans');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ChildotherinfotwoPage.prototype, "q8_ans", {
        get: function () {
            return this.stepFourForm.get('q8_ans');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ChildotherinfotwoPage.prototype, "q10_ans", {
        get: function () {
            return this.stepFourForm.get('q10_ans');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ChildotherinfotwoPage.prototype, "q11", {
        get: function () {
            return this.stepFourForm.get('q11_ans');
        },
        enumerable: false,
        configurable: true
    });
    // get old_image1(){
    //   return this.stepFourForm.get('old_image1')
    // }
    // get old_image2(){
    //   return this.stepFourForm.get('old_image2')
    // }
    ChildotherinfotwoPage.prototype.onSubmit = function (body) {
        var _this = this;
        this.presentLoading();
        console.log('body', body);
        var formData = new FormData();
        formData.append("userid", this.userid);
        formData.append("q1_ans", body['q1_ans']);
        formData.append("q2_ans", body['q2_ans']);
        formData.append("q3_ans", body['q3_ans']);
        formData.append("q5_ans", body['q5_ans']);
        formData.append("q6_ans", body['q6_ans']);
        formData.append("q7_ans", body['q7_ans']);
        formData.append("q8_ans", body['q8_ans']);
        formData.append("q10_ans", body['q10_ans']);
        formData.append("q11_ans", body['q11_ans']);
        if (this.isDataPresent) {
            formData.append("child_consent_id", this.child_consent_id);
            formData.append("old_image1", this.old_image1);
            formData.append("old_image2", this.old_image2);
            if (this.image1imgBlob) {
                formData.append("q4_ans", this.image1imgBlob, this.image1_file_name);
            }
            if (this.image2imgBlob) {
                formData.append("q9_ans", this.image2imgBlob, this.image2_file_name);
            }
            this.apiService.updateDaycareRegStep4(formData).subscribe(function (data) {
                console.log('data', data);
                _this.loadingController.dismiss();
                _this.presentAlert("Daycare Step 4 form updated successfully");
                // this.stepFourForm.reset()
                console.log(data);
            }, function (err) {
                console.log(err);
                _this.loadingController.dismiss();
                _this.apiService.presentToast(err.error, 2000);
            });
        }
        else {
            if (this.image1imgBlob) {
                formData.append("q4_ans", this.image1imgBlob, this.image1_file_name);
            }
            if (this.image2imgBlob) {
                formData.append("q9_ans", this.image2imgBlob, this.image2_file_name);
            }
            this.apiService.daycareRegistrationStep4(formData).subscribe(function (data) {
                console.log('data', data);
                _this.loadingController.dismiss();
                _this.presentAlert("Daycare Step 4 form submitted successfully");
                _this.stepFourForm.reset();
                console.log(data);
            }, function (err) {
                console.log(err);
                _this.loadingController.dismiss();
                _this.apiService.presentToast(err.error, 2000);
            });
        }
    };
    ChildotherinfotwoPage.prototype.ionViewDidEnter = function () {
        var _this = this;
        this.menuCtrl.enable(false);
        this.presentLoading().then(function () {
            _this.storage.get('user').then(function (data) {
                if (data) {
                    var user = JSON.parse(data);
                    _this.userid = user.id;
                    console.log('userid', _this.userid, user.userid);
                    _this.apiService.fetchDayCareStep4(_this.userid).then(function (data) {
                        console.log('fetchDayCareStep4', data.data);
                        var fetchDayCareStep4 = JSON.parse(data.data);
                        if (fetchDayCareStep4) {
                            _this.fetchDayCareStep4 = fetchDayCareStep4['a'];
                            if (_this.fetchDayCareStep4) {
                                _this.child_consent_id = _this.fetchDayCareStep4.id;
                                _this.img1 = _this.fetchDayCareStep4.img1;
                                _this.img2 = _this.fetchDayCareStep4.img2;
                                _this.old_image1 = _this.fetchDayCareStep4.image1;
                                _this.old_image2 = _this.fetchDayCareStep4.image2;
                                _this.stepFourForm.patchValue({
                                    'q1_ans': _this.fetchDayCareStep4.name1,
                                    'q2_ans': _this.fetchDayCareStep4.relationship1,
                                    'q3_ans': _this.fetchDayCareStep4.address1,
                                    'q5_ans': _this.fetchDayCareStep4.mobile_number1,
                                    'q6_ans': _this.fetchDayCareStep4.name2,
                                    'q7_ans': _this.fetchDayCareStep4.relationship2,
                                    'q8_ans': _this.fetchDayCareStep4.address2,
                                    'q10_ans': _this.fetchDayCareStep4.mobile_number2,
                                    'q11_ans': _this.fetchDayCareStep4.q1
                                });
                                _this.isDataPresent = true;
                                _this.loadingController.dismiss();
                            }
                            else {
                                _this.isDataPresent = false;
                                _this.loadingController.dismiss();
                            }
                        }
                        else {
                            _this.isDataPresent = false;
                            _this.loadingController.dismiss();
                        }
                    });
                }
            });
        });
    };
    ChildotherinfotwoPage.prototype.presentAlert = function (message) {
        return __awaiter(this, void 0, void 0, function () {
            var alert;
            var _this = this;
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
                                        _this.apiService.userDetails(_this.userid, 'Daycare').then(function (data) {
                                            _this.fetchDayCareStep1 = JSON.parse(data.data);
                                            if (_this.fetchDayCareStep1.status == 'Active' && _this.fetchDayCareStep1.Approve_status == 'Active') {
                                                _this.router.navigate(['quicktour']);
                                            }
                                            else {
                                                _this.apiService.presentToast('Please wait for your registration approval', 2000);
                                                _this.storage.set('type', 'login').then(function (_) {
                                                    _this.router.navigate(['login']);
                                                });
                                            }
                                        });
                                    }
                                }
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
    ChildotherinfotwoPage.prototype.presentActionSheet = function (type) {
        return __awaiter(this, void 0, void 0, function () {
            var actionSheet;
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.actionSheetController.create({
                            header: 'Options',
                            cssClass: 'action-sheets-basic-page',
                            buttons: [
                                {
                                    text: 'Take photo',
                                    role: 'destructive',
                                    icon: 'camera-outline',
                                    handler: function () {
                                        if (type == 'image1') {
                                            _this.takePicture('image1');
                                        }
                                        else if (type == 'image2') {
                                            _this.takePicture('image2');
                                        }
                                    }
                                },
                                {
                                    text: 'Choose photo from Gallery',
                                    icon: 'images-outline',
                                    handler: function () {
                                        if (type == 'image1') {
                                            _this.openGallery('image1');
                                        }
                                        else if (type == 'image2') {
                                            _this.openGallery('image2');
                                        }
                                    }
                                },
                            ]
                        })];
                    case 1:
                        actionSheet = _a.sent();
                        actionSheet.present();
                        return [2 /*return*/];
                }
            });
        });
    };
    ChildotherinfotwoPage.prototype.takePicture = function (type) {
        var _this = this;
        var options = {
            quality: 70,
            destinationType: this.camera.DestinationType.FILE_URI,
            encodingType: this.camera.EncodingType.JPEG,
            mediaType: this.camera.MediaType.PICTURE,
            correctOrientation: true
        };
        this.camera.getPicture(options).then(function (imageData) {
            _this.file.resolveLocalFilesystemUrl(imageData).then(function (entry) {
                entry.file(function (file) {
                    console.log(file);
                    if (type == 'image1') {
                        _this.image1_file_name = file.name;
                        _this.image1base64Image = window.Ionic.WebView.convertFileSrc(imageData);
                    }
                    else if (type == 'image2') {
                        _this.image2_file_name = file.name;
                        _this.image2base64Image = window.Ionic.WebView.convertFileSrc(imageData);
                    }
                    _this.cf.detectChanges();
                    _this.readFile(file, type);
                });
            });
        }, function (err) {
            _this.image1base64Image = null;
            _this.image2base64Image = null;
        });
    };
    ChildotherinfotwoPage.prototype.openGallery = function (type) {
        var _this = this;
        var options = {
            quality: 70,
            destinationType: this.camera.DestinationType.FILE_URI,
            encodingType: this.camera.EncodingType.JPEG,
            mediaType: this.camera.MediaType.PICTURE,
            correctOrientation: true,
            sourceType: this.camera.PictureSourceType.PHOTOLIBRARY
        };
        this.camera.getPicture(options).then(function (imageData) {
            _this.file.resolveLocalFilesystemUrl(imageData).then(function (entry) {
                entry.file(function (file) {
                    console.log(file);
                    if (file.type == 'image/jpeg') {
                        var filename = file.name;
                        var file_ext = (filename.split('.').slice(-1)).join('.');
                        var filename_wo_ext = (filename.split('.').slice(0, -1)).join('.');
                        _this.modified_filename = filename_wo_ext + (file.lastModified).toString() + "." + file_ext;
                        console.log('this.child_file_name', _this.modified_filename);
                    }
                    else {
                        _this.modified_filename = file.name;
                    }
                    if (type == 'image1') {
                        _this.image1_file_name = _this.modified_filename;
                        _this.image1base64Image = window.Ionic.WebView.convertFileSrc(imageData);
                    }
                    else if (type == 'image2') {
                        _this.image2_file_name = _this.modified_filename;
                        _this.image2base64Image = window.Ionic.WebView.convertFileSrc(imageData);
                    }
                    _this.cf.detectChanges();
                    _this.readFile(file, type);
                });
            });
        }, function (err) {
            // Handle error
        });
    };
    ChildotherinfotwoPage.prototype.readFile = function (file, type) {
        var _this = this;
        var reader = new FileReader();
        reader.onloadend = function () {
            if (type == 'image1') {
                _this.image1imgBlob = new Blob([reader.result], {
                    type: file.type
                });
            }
            else if (type == 'image2') {
                _this.image2imgBlob = new Blob([reader.result], {
                    type: file.type
                });
            }
            console.log("name", file.name);
        };
        reader.readAsArrayBuffer(file);
    };
    ChildotherinfotwoPage.prototype.ionViewDidLeave = function () {
        this.menuCtrl.enable(true);
    };
    ChildotherinfotwoPage.prototype.ionViewWillEnter = function () {
        if (this.menuCtrl.isEnabled) {
            console.log('hi');
            this.menuCtrl.swipeGesture(false);
        }
    };
    ChildotherinfotwoPage = __decorate([
        core_1.Component({
            selector: 'app-childotherinfotwo',
            templateUrl: './childotherinfotwo.page.html',
            styleUrls: ['./childotherinfotwo.page.scss']
        })
    ], ChildotherinfotwoPage);
    return ChildotherinfotwoPage;
}());
exports.ChildotherinfotwoPage = ChildotherinfotwoPage;
