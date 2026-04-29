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
exports.EditprofilePage = void 0;
var forms_1 = require("@angular/forms");
var core_1 = require("@angular/core");
var EditprofilePage = /** @class */ (function () {
    function EditprofilePage(modalController, apiService, storage, actionSheetController, file, camera, cf, alertController, loadingController) {
        this.modalController = modalController;
        this.apiService = apiService;
        this.storage = storage;
        this.actionSheetController = actionSheetController;
        this.file = file;
        this.camera = camera;
        this.cf = cf;
        this.alertController = alertController;
        this.loadingController = loadingController;
        this.todays_date = new Date().toJSON().split('T')[0];
    }
    EditprofilePage.prototype.ngOnInit = function () {
        var _this = this;
        if (this.userType == 'Preschool') {
            this.preschoolUpdateForm = new forms_1.FormGroup({
                child_name: new forms_1.FormControl(this.profile.child_name, [forms_1.Validators.required, forms_1.Validators.pattern(/^[a-zA-Z\. ]+$/)]),
                d_o_b: new forms_1.FormControl(this.profile.dob, [forms_1.Validators.required]),
                gender: new forms_1.FormControl(this.profile.gender, [forms_1.Validators.required])
            });
            this.apiService.userDetails(this.profile.id, 'Preschool').then(function (data) {
                console.log('fetchPreschoolStepOne', data.data);
                _this.fetchPreschoolStepOne = JSON.parse(data.data);
                if (_this.fetchPreschoolStepOne.id) {
                    _this.child_image = _this.fetchPreschoolStepOne.child_img;
                    _this.id = _this.fetchPreschoolStepOne.id;
                    _this.old_image = _this.fetchPreschoolStepOne.child_image;
                    _this.branch_id = _this.fetchPreschoolStepOne.branch_id;
                    _this.pet_name = _this.fetchPreschoolStepOne.pet_name;
                    _this.dob_words = _this.fetchPreschoolStepOne.dob_in_words;
                    _this.mobile_1 = _this.fetchPreschoolStepOne.residence_phone;
                    _this.mobile_2 = _this.fetchPreschoolStepOne.emg_number;
                    _this.mother_tonge = _this.fetchPreschoolStepOne.mother_tongue;
                    _this.other_languages = _this.fetchPreschoolStepOne.other_lang;
                    _this.nationality = _this.fetchPreschoolStepOne.nationality;
                    _this["class"] = _this.fetchPreschoolStepOne["class"];
                }
            });
        }
        else {
            this.DaycareUpdateForm = new forms_1.FormGroup({
                daycare_child_name: new forms_1.FormControl(this.profile.child_name, [forms_1.Validators.required, forms_1.Validators.pattern(/^[a-zA-Z\. ]+$/)]),
                daycare_d_o_b: new forms_1.FormControl(this.profile.dob, [forms_1.Validators.required]),
                daycare_gender: new forms_1.FormControl(this.profile.gender, [forms_1.Validators.required]),
                daycare_address: new forms_1.FormControl(this.profile.address, [forms_1.Validators.required]),
                daycare_emailid: new forms_1.FormControl(this.profile.emailid, [forms_1.Validators.required])
            });
            this.apiService.userDetails(this.profile.id, 'Daycare').then(function (data) {
                console.log('fetchDaycareStepOne', data.data);
                _this.fetchDaycareStepOne = JSON.parse(data.data);
                if (_this.fetchDaycareStepOne) {
                    _this.id = _this.fetchDaycareStepOne.id;
                    _this.branch_id = _this.fetchDaycareStepOne.branch_id;
                    _this.program = _this.fetchDaycareStepOne.program;
                    _this.timings = _this.fetchDaycareStepOne.timings;
                    _this.pet_name = _this.fetchDaycareStepOne.pet_name;
                    _this.dob_words = _this.fetchDaycareStepOne.dob_words;
                    _this.mobile_1 = _this.fetchDaycareStepOne.home_phone;
                    _this.emailid = _this.fetchDaycareStepOne.emailid;
                    _this.address = _this.fetchDaycareStepOne.address;
                    _this.landmark = _this.fetchDaycareStepOne.landmark;
                    _this.mother_qua = _this.fetchDaycareStepOne.mother_qualification;
                    _this.mother_hobbies = _this.fetchDaycareStepOne.mother_hobbies;
                    _this.mother_work_place = _this.fetchDaycareStepOne.mother_work_place;
                    _this.mother_work_phone_num = _this.fetchDaycareStepOne.mother_work_phone;
                    _this.mother_work_mob_num = _this.fetchDaycareStepOne.mother_mobile_number;
                    _this.father_qualification = _this.fetchDaycareStepOne.father_qualifiaction;
                    _this.father_hobbies = _this.fetchDaycareStepOne.father_hobbies;
                    _this.father_work_place = _this.fetchDaycareStepOne.father_work_place;
                    _this.father_work_phone_num = _this.fetchDaycareStepOne.father_work_phone;
                    _this.father_work_phone_num = _this.fetchDaycareStepOne.father_mobile_number;
                    _this.sibling_name = _this.fetchDaycareStepOne.child_name1;
                    _this.sibling_age = _this.fetchDaycareStepOne.child_age1;
                    _this.sibling_school = _this.fetchDaycareStepOne.child_school1;
                    _this.emg_name = _this.fetchDaycareStepOne.emg_name1;
                    _this.emg_contact_rel = _this.fetchDaycareStepOne.emg_relationship1;
                    _this.emg_contact_phone = _this.fetchDaycareStepOne.emg_mobile1;
                    _this.household_name = _this.fetchDaycareStepOne.other_name1;
                    _this.household_rel = _this.fetchDaycareStepOne.other_relationship1;
                    _this.household_num = _this.fetchDaycareStepOne.other_mobile1;
                    _this.child_image = _this.fetchDaycareStepOne.child_img;
                    _this.motherimg = _this.fetchDaycareStepOne.mother_img;
                    _this.fatherimg = _this.fetchDaycareStepOne.father_img;
                    _this.guardianimg = _this.fetchDaycareStepOne.guardian_img;
                    _this.childioldmg = _this.fetchDaycareStepOne.child_image;
                    _this.motheroldimg = _this.fetchDaycareStepOne.mother_image;
                    _this.fatheroldimg = _this.fetchDaycareStepOne.father_image;
                    _this.guardianoldimg = _this.fetchDaycareStepOne.guardian_image;
                }
            });
        }
    };
    EditprofilePage.prototype.dismiss = function () {
        this.modalController.dismiss();
    };
    Object.defineProperty(EditprofilePage.prototype, "child_name", {
        get: function () {
            return this.preschoolUpdateForm.get('child_name');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(EditprofilePage.prototype, "d_o_b", {
        get: function () {
            return this.preschoolUpdateForm.get('d_o_b');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(EditprofilePage.prototype, "gender", {
        get: function () {
            return this.preschoolUpdateForm.get('gender');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(EditprofilePage.prototype, "daycare_child_name", {
        // get class(){
        //     return this.preschoolUpdateForm.get('class')
        // }
        get: function () {
            return this.DaycareUpdateForm.get('daycare_child_name');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(EditprofilePage.prototype, "daycare_d_o_b", {
        get: function () {
            return this.DaycareUpdateForm.get('daycare_d_o_b');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(EditprofilePage.prototype, "daycare_gender", {
        get: function () {
            return this.DaycareUpdateForm.get('daycare_gender');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(EditprofilePage.prototype, "daycare_address", {
        get: function () {
            return this.DaycareUpdateForm.get('daycare_address');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(EditprofilePage.prototype, "daycare_emailid", {
        get: function () {
            return this.DaycareUpdateForm.get('daycare_emailid');
        },
        enumerable: false,
        configurable: true
    });
    EditprofilePage.prototype.presentLoading = function () {
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
    EditprofilePage.prototype.onPreschoolSubmit = function (body) {
        var _this = this;
        this.presentLoading();
        console.log('body', body);
        var formData = new FormData();
        formData.append("child_name", body['child_name']);
        formData.append("gender", body['gender']);
        formData.append("d_o_b", body['d_o_b']);
        formData.append("class", this["class"]);
        formData.append("branch_id", this.branch_id);
        formData.append("pet_name", this.pet_name);
        formData.append("dob_words", this.dob_words);
        formData.append("figures", '');
        formData.append("mobile_1", this.mobile_1);
        formData.append("mobile_2", this.mobile_2);
        formData.append("mother_tonge", this.mother_tonge);
        formData.append("other_languages", this.other_languages);
        formData.append("nationality", this.nationality);
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
            _this.presentAlert("Profile updated successfully");
            console.log(data);
        }, function (err) {
            console.log(err);
            _this.loadingController.dismiss();
            _this.apiService.presentToast(err.error, 2000);
        });
    };
    EditprofilePage.prototype.onDaycareSubmit = function (body) {
        var _this = this;
        this.presentLoading();
        console.log('body', body);
        var formData = new FormData();
        formData.append("child_name", body['daycare_child_name']);
        formData.append("gender", body['daycare_gender']);
        formData.append("d_o_b", body['daycare_d_o_b']);
        formData.append("emailid", body['daycare_emailid']);
        formData.append("address", body['daycare_address']);
        formData.append('branch_id', this.branch_id);
        formData.append('program', this.program);
        formData.append('timings', this.timings);
        formData.append('pet_name', this.pet_name);
        formData.append('dob_words', this.dob_words);
        formData.append('figures', '');
        formData.append('mobile_1', this.mobile_1);
        formData.append('landmark', this.landmark);
        formData.append('mother_qua', this.mother_qua);
        formData.append('mother_hobbies', this.mother_hobbies);
        formData.append('mother_work_place', this.mother_work_place);
        formData.append('mother_work_phone_num', this.mother_work_phone_num);
        formData.append('mother_work_mob_num', this.mother_work_mob_num);
        formData.append('father_qualification', this.father_qualification);
        formData.append('father_hobbies', this.father_hobbies);
        formData.append('father_work_place', this.father_work_place);
        formData.append('father_work_phone_num', this.father_work_phone_num);
        formData.append('father_work_mob_num', this.father_work_phone_num);
        formData.append('sibling_name', this.sibling_name);
        formData.append('sibling_age', this.sibling_age);
        formData.append('sibling_school', this.sibling_school);
        formData.append('emg_name', this.emg_name);
        formData.append('emg_contact_rel', this.emg_contact_rel);
        formData.append('emg_contact_phone', this.emg_contact_phone);
        formData.append('household_name', this.household_name);
        formData.append('household_rel', this.household_rel);
        formData.append('household_num', this.household_num);
        formData.append('old_img[]', this.childioldmg);
        formData.append('old_img[]', this.motheroldimg);
        formData.append('old_img[]', this.fatheroldimg);
        formData.append('old_img[]', this.guardianoldimg);
        if (this.childimgBlob) {
            formData.append('image[]', this.childimgBlob, this.child_file_name);
        }
        else {
            formData.append('image[]', '');
        }
        formData.append('image[]', '');
        formData.append('image[]', '');
        formData.append('image[]', '');
        formData.append("id", this.id);
        formData.append('userid', this.profile.id);
        this.apiService.updateDaycareRegStep1(formData).subscribe(function (data) {
            console.log('data', data);
            _this.loadingController.dismiss();
            _this.presentAlert("Profile  updated successfully");
            console.log(data);
        }, function (err) {
            console.log(err);
            _this.loadingController.dismiss();
            _this.apiService.presentToast(err.error, 2000);
        });
    };
    EditprofilePage.prototype.presentAlert = function (message) {
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
                                        _this.modalController.dismiss();
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
    EditprofilePage.prototype.presentActionSheet = function () {
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
    EditprofilePage.prototype.takePicture = function (type) {
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
    EditprofilePage.prototype.openGallery = function (type) {
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
                    _this.child_file_name = _this.modified_filename;
                    _this.childbase64Image = window.Ionic.WebView.convertFileSrc(imageData);
                    _this.cf.detectChanges();
                    _this.readFile(file, type);
                });
            });
        }, function (err) {
            // Handle error
        });
    };
    EditprofilePage.prototype.readFile = function (file, type) {
        var _this = this;
        var reader = new FileReader();
        reader.onloadend = function () {
            _this.childimgBlob = new Blob([reader.result], {
                type: file.type
            });
        };
        reader.readAsArrayBuffer(file);
    };
    __decorate([
        core_1.Input()
    ], EditprofilePage.prototype, "userType");
    __decorate([
        core_1.Input()
    ], EditprofilePage.prototype, "profile");
    EditprofilePage = __decorate([
        core_1.Component({
            selector: 'app-editprofile',
            templateUrl: './editprofile.page.html',
            styleUrls: ['./editprofile.page.scss']
        })
    ], EditprofilePage);
    return EditprofilePage;
}());
exports.EditprofilePage = EditprofilePage;
