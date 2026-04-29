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
exports.PreschoolformPage = void 0;
var forms_1 = require("@angular/forms");
var core_1 = require("@angular/core");
var PreschoolformPage = /** @class */ (function () {
    function PreschoolformPage(storage, apiService, actionSheetController, file, camera, cf, alertController, router, loadingController, location, menuCtrl) {
        this.storage = storage;
        this.apiService = apiService;
        this.actionSheetController = actionSheetController;
        this.file = file;
        this.camera = camera;
        this.cf = cf;
        this.alertController = alertController;
        this.router = router;
        this.loadingController = loadingController;
        this.location = location;
        this.menuCtrl = menuCtrl;
        this.todays_date = new Date().toJSON().split('T')[0];
        this.isDisabled = false;
        this.isFormSubmitted = false;
        this.isApproved = false;
    }
    PreschoolformPage.prototype.presentLoading = function () {
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
    PreschoolformPage.prototype.ngOnInit = function () {
        this.menuCtrl.enable(false);
        this.preschoolRegForm = new forms_1.FormGroup({
            branch_id: new forms_1.FormControl('', [forms_1.Validators.required]),
            child_name: new forms_1.FormControl('', [forms_1.Validators.required, forms_1.Validators.pattern(/^[a-zA-Z\. ]+$/)]),
            pet_name: new forms_1.FormControl('', [forms_1.Validators.required, forms_1.Validators.pattern(/^[a-zA-z ]+$/)]),
            gender: new forms_1.FormControl('', [forms_1.Validators.required]),
            d_o_b: new forms_1.FormControl('', [forms_1.Validators.required]),
            dob_words: new forms_1.FormControl('', [forms_1.Validators.required, forms_1.Validators.pattern(/^[a-zA-Z ]+$/)]),
            // figures:new FormControl('',[Validators.required]),
            mobile_1: new forms_1.FormControl('', [forms_1.Validators.required, forms_1.Validators.maxLength(10), forms_1.Validators.minLength(10), forms_1.Validators.pattern(/^[0-9]{10}$/)]),
            mobile_2: new forms_1.FormControl('', [forms_1.Validators.required, forms_1.Validators.maxLength(10), forms_1.Validators.minLength(10), forms_1.Validators.pattern(/^[0-9]{10}$/)]),
            mother_tonge: new forms_1.FormControl('', [forms_1.Validators.required, forms_1.Validators.pattern(/^[a-zA-z ]+$/)]),
            other_languages: new forms_1.FormControl('', [forms_1.Validators.required, forms_1.Validators.pattern(/^[a-zA-z ,]+$/)]),
            nationality: new forms_1.FormControl('', [forms_1.Validators.required, forms_1.Validators.pattern(/^[a-zA-z ]+$/)]),
            "class": new forms_1.FormControl('', [forms_1.Validators.required])
        });
    };
    PreschoolformPage.prototype.onSubmit = function (body) {
        var _this = this;
        this.presentLoading();
        console.log('child_file_name1', this.child_file_name);
        if (this.child_file_name == '') {
            console.log('child_file_name2', this.child_file_name);
            this.loadingController.dismiss();
            this.apiService.presentToast('Please upload child image', 2000);
        }
        else {
            console.log('child_file_name3', this.child_file_name);
            console.log(body);
            console.log('body', body);
            var formData = new FormData();
            formData.append("branch_id", body['branch_id']);
            formData.append("child_name", body['child_name']);
            formData.append("pet_name", body['pet_name']);
            formData.append("gender", body['gender']);
            formData.append("d_o_b", body['d_o_b']);
            formData.append("dob_words", body['dob_words']);
            formData.append("figures", '');
            formData.append("mobile_1", body['mobile_1']);
            formData.append("mobile_2", body['mobile_2']);
            formData.append("mother_tonge", body['mother_tonge']);
            formData.append("other_languages", body['other_languages']);
            formData.append("nationality", body['nationality']);
            formData.append("class", body['class']);
            if (this.isDataPresent) {
                if (this.childimgBlob) {
                    formData.append('image', this.childimgBlob, this.child_file_name);
                }
                else {
                    formData.append('image', '');
                }
                formData.append("user_id", this.id);
                formData.append("old_image", this.old_image);
                this.apiService.updatePreschoolRegStep1(formData).subscribe(function (data) {
                    console.log('data', data);
                    _this.loadingController.dismiss();
                    _this.presentAlert("Preschool form updated successfully");
                    console.log(data);
                }, function (err) {
                    console.log(err);
                    _this.loadingController.dismiss();
                    _this.apiService.presentToast(err.error, 2000);
                });
            }
            else {
                formData.append('image', this.childimgBlob, this.child_file_name);
                this.apiService.preschoolRegStep1(formData).subscribe(function (data) {
                    console.log('data', data);
                    _this.loadingController.dismiss();
                    _this.presentAlert("Preschool form submitted successfully");
                    _this.preschoolRegForm.reset();
                    _this.childbase64Image = '';
                    _this.child_file_name = '';
                    console.log(data);
                }, function (err) {
                    console.log(err);
                    _this.loadingController.dismiss();
                    _this.apiService.presentToast(err.error, 2000);
                });
            }
        }
    };
    PreschoolformPage.prototype.ionViewDidEnter = function () {
        var _this = this;
        if (this.menuCtrl.isEnabled) {
            console.log('hi');
            this.menuCtrl.swipeGesture(false);
        }
        this.presentLoading().then(function () {
            _this.apiService.fetchFeeColumn().then(function (data) {
                console.log(data);
                _this.columns = JSON.parse(data.data);
            })["catch"](function (err) {
                console.log(err, err);
            });
            _this.storage.get('user').then(function (data) {
                if (data) {
                    var user = JSON.parse(data);
                    _this.isLoggedIn = true;
                    _this.userid = user.userid;
                    _this.storage.get('userType').then(function (userType) {
                        _this.userType = userType;
                        if (_this.userType == 'Preschool') {
                            _this.apiService.userDetails(user.id, userType).then(function (data) {
                                console.log('fetchPreschoolStepOne', data.data);
                                _this.fetchPreschoolStepOne = JSON.parse(data.data);
                                if (_this.fetchPreschoolStepOne.id) {
                                    if (_this.fetchPreschoolStepOne.status == 'Active' && _this.fetchPreschoolStepOne.Approve_status == 'Active') {
                                        _this.isApproved = true;
                                    }
                                    _this.isFormSubmitted = true;
                                    _this.child_image = _this.fetchPreschoolStepOne.child_img;
                                    _this.id = _this.fetchPreschoolStepOne.id;
                                    _this.isDisabled = true;
                                    _this.old_image = _this.fetchPreschoolStepOne.child_image;
                                    _this.preschoolRegForm.patchValue({
                                        'branch_id': _this.fetchPreschoolStepOne.branch_id,
                                        'child_name': _this.fetchPreschoolStepOne.child_name,
                                        'pet_name': _this.fetchPreschoolStepOne.pet_name,
                                        'gender': _this.fetchPreschoolStepOne.gender,
                                        'd_o_b': _this.fetchPreschoolStepOne.dob,
                                        'dob_words': _this.fetchPreschoolStepOne.dob_in_words,
                                        // 'figures':this.fetchPreschoolStepOne.dob_in_figure,
                                        'mobile_1': _this.fetchPreschoolStepOne.residence_phone,
                                        'mobile_2': _this.fetchPreschoolStepOne.emg_number,
                                        'mother_tonge': _this.fetchPreschoolStepOne.mother_tongue,
                                        'other_languages': _this.fetchPreschoolStepOne.other_lang,
                                        'nationality': _this.fetchPreschoolStepOne.nationality,
                                        'class': _this.fetchPreschoolStepOne["class"]
                                    });
                                    _this.isDataPresent = true;
                                    _this.loadingController.dismiss();
                                }
                                else {
                                    _this.isDataPresent = false;
                                    _this.loadingController.dismiss();
                                }
                            });
                        }
                        else {
                            _this.isDataPresent = false;
                            _this.loadingController.dismiss();
                        }
                    });
                }
                else {
                    _this.loadingController.dismiss();
                    _this.isDataPresent = false;
                    _this.isLoggedIn = false;
                    _this.preschoolRegForm.reset();
                }
            });
            _this.apiService.getBranches().then(function (data) {
                _this.branches = JSON.parse(data.data);
            });
        });
    };
    Object.defineProperty(PreschoolformPage.prototype, "branch_id", {
        get: function () {
            return this.preschoolRegForm.get('branch_id');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(PreschoolformPage.prototype, "child_name", {
        get: function () {
            return this.preschoolRegForm.get('child_name');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(PreschoolformPage.prototype, "pet_name", {
        get: function () {
            return this.preschoolRegForm.get('pet_name');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(PreschoolformPage.prototype, "gender", {
        get: function () {
            return this.preschoolRegForm.get('gender');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(PreschoolformPage.prototype, "d_o_b", {
        get: function () {
            return this.preschoolRegForm.get('d_o_b');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(PreschoolformPage.prototype, "dob_words", {
        get: function () {
            return this.preschoolRegForm.get('dob_words');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(PreschoolformPage.prototype, "mobile_1", {
        // get figures(){
        //   return this.preschoolRegForm.get('figures')
        // }
        get: function () {
            return this.preschoolRegForm.get('mobile_1');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(PreschoolformPage.prototype, "mobile_2", {
        get: function () {
            return this.preschoolRegForm.get('mobile_2');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(PreschoolformPage.prototype, "mother_tonge", {
        get: function () {
            return this.preschoolRegForm.get('mother_tonge');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(PreschoolformPage.prototype, "other_languages", {
        get: function () {
            return this.preschoolRegForm.get('other_languages');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(PreschoolformPage.prototype, "nationality", {
        get: function () {
            return this.preschoolRegForm.get('nationality');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(PreschoolformPage.prototype, "class", {
        get: function () {
            return this.preschoolRegForm.get('class');
        },
        enumerable: false,
        configurable: true
    });
    PreschoolformPage.prototype.presentActionSheet = function () {
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
                                        _this.takePicture('child');
                                    }
                                },
                                {
                                    text: 'Choose photo from Gallery',
                                    icon: 'images-outline',
                                    handler: function () {
                                        _this.openGallery('child');
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
    PreschoolformPage.prototype.takePicture = function (type) {
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
                    _this.childbase64Image = window.Ionic.WebView.convertFileSrc(imageData);
                    _this.cf.detectChanges();
                    _this.readFile(file, type);
                });
            });
        }, function (err) {
            _this.childbase64Image = null;
        });
    };
    PreschoolformPage.prototype.openGallery = function (type) {
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
                    console.log('file', file);
                    _this.childbase64Image = window.Ionic.WebView.convertFileSrc(imageData);
                    _this.cf.detectChanges();
                    _this.readFile(file, type);
                });
            });
        }, function (err) {
            // Handle error
        });
    };
    PreschoolformPage.prototype.readFile = function (file, type) {
        var _this = this;
        var reader = new FileReader();
        reader.onloadend = function () {
            _this.childimgBlob = new Blob([reader.result], {
                type: file.type
            });
            console.log('child_file_name', _this.child_file_name);
            _this.child_file_name = file.name;
        };
        reader.readAsArrayBuffer(file);
    };
    PreschoolformPage.prototype.previousTab = function (value) {
        this.value = value;
    };
    PreschoolformPage.prototype.presentAlert = function (message) {
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
                                        if (_this.isLoggedIn) {
                                            if (_this.userType == 'Preschool') {
                                                _this.router.navigate(['parentsinfo']);
                                            }
                                            else {
                                                _this.storage.set('type', 'login').then(function (_) {
                                                    _this.router.navigate(['login']);
                                                });
                                            }
                                        }
                                        else {
                                            _this.storage.set('type', 'login').then(function (_) {
                                                _this.router.navigate(['login']);
                                            });
                                        }
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
    PreschoolformPage.prototype.goBack = function () {
        if (this.isLoggedIn) {
            if (this.isApproved) {
                this.router.navigate(['quicktour']);
            }
            else {
                if (this.userType == 'Preschool') {
                    this.apiService.presentToast('Please wait for your registration approval', 3000);
                }
                else {
                    this.router.navigate(['quicktour']);
                }
            }
        }
        else {
            this.router.navigate(['login']);
        }
    };
    PreschoolformPage.prototype.ionViewDidLeave = function () {
        this.menuCtrl.enable(true);
    };
    PreschoolformPage.prototype.goToStep2 = function () {
        if (this.isFormSubmitted) {
            this.router.navigateByUrl('/parentsinfo');
        }
        else {
            this.apiService.presentToast('Please submit Registration Form to go next step', 3000);
        }
    };
    PreschoolformPage.prototype.goToStep3 = function () {
        if (this.isFormSubmitted) {
            this.router.navigateByUrl('/preschoolotherform');
        }
        else {
            this.apiService.presentToast('Please submit Registration Form to go next step', 3000);
        }
    };
    PreschoolformPage.prototype.doRefresh = function (event) {
        var _this = this;
        this.menuCtrl.enable(false);
        this.presentLoading().then(function () {
            _this.apiService.fetchFeeColumn().then(function (data) {
                console.log(data);
                _this.columns = JSON.parse(data.data);
            })["catch"](function (err) {
                console.log(err, err);
            });
            _this.storage.get('user').then(function (data) {
                if (data) {
                    var user = JSON.parse(data);
                    _this.isLoggedIn = true;
                    _this.userid = user.userid;
                    _this.storage.get('userType').then(function (userType) {
                        _this.userType = userType;
                        if (_this.userType == 'Preschool') {
                            _this.apiService.userDetails(user.id, userType).then(function (data) {
                                event.target.complete();
                                console.log('fetchPreschoolStepOne', data.data);
                                _this.fetchPreschoolStepOne = JSON.parse(data.data);
                                if (_this.fetchPreschoolStepOne.id) {
                                    if (_this.fetchPreschoolStepOne.status == 'Active' && _this.fetchPreschoolStepOne.Approve_status == 'Active') {
                                        _this.isApproved = true;
                                    }
                                    _this.isFormSubmitted = true;
                                    _this.child_image = _this.fetchPreschoolStepOne.child_img;
                                    _this.id = _this.fetchPreschoolStepOne.id;
                                    _this.isDisabled = true;
                                    _this.old_image = _this.fetchPreschoolStepOne.child_image;
                                    _this.preschoolRegForm.patchValue({
                                        'branch_id': _this.fetchPreschoolStepOne.branch_id,
                                        'child_name': _this.fetchPreschoolStepOne.child_name,
                                        'pet_name': _this.fetchPreschoolStepOne.pet_name,
                                        'gender': _this.fetchPreschoolStepOne.gender,
                                        'd_o_b': _this.fetchPreschoolStepOne.dob,
                                        'dob_words': _this.fetchPreschoolStepOne.dob_in_words,
                                        // 'figures':this.fetchPreschoolStepOne.dob_in_figure,
                                        'mobile_1': _this.fetchPreschoolStepOne.residence_phone,
                                        'mobile_2': _this.fetchPreschoolStepOne.emg_number,
                                        'mother_tonge': _this.fetchPreschoolStepOne.mother_tongue,
                                        'other_languages': _this.fetchPreschoolStepOne.other_lang,
                                        'nationality': _this.fetchPreschoolStepOne.nationality,
                                        'class': _this.fetchPreschoolStepOne["class"]
                                    });
                                    _this.isDataPresent = true;
                                    _this.loadingController.dismiss();
                                }
                                else {
                                    event.target.complete();
                                    _this.isDataPresent = false;
                                    _this.loadingController.dismiss();
                                }
                            });
                        }
                        else {
                            _this.isDataPresent = false;
                            _this.loadingController.dismiss();
                        }
                    });
                }
                else {
                    event.target.complete();
                    _this.loadingController.dismiss();
                    _this.isDataPresent = false;
                    _this.isLoggedIn = false;
                    _this.preschoolRegForm.reset();
                }
            });
            _this.apiService.getBranches().then(function (data) {
                _this.branches = JSON.parse(data.data);
            });
        });
    };
    PreschoolformPage = __decorate([
        core_1.Component({
            selector: 'app-preschoolform',
            templateUrl: './preschoolform.page.html',
            styleUrls: ['./preschoolform.page.scss']
        })
    ], PreschoolformPage);
    return PreschoolformPage;
}());
exports.PreschoolformPage = PreschoolformPage;
