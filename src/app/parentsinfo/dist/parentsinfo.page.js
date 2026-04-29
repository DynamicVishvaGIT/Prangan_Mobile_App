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
exports.ParentsinfoPage = void 0;
var forms_1 = require("@angular/forms");
var core_1 = require("@angular/core");
var ParentsinfoPage = /** @class */ (function () {
    function ParentsinfoPage(apiService, alertController, router, storage, loadingController, menuCtrl) {
        this.apiService = apiService;
        this.alertController = alertController;
        this.router = router;
        this.storage = storage;
        this.loadingController = loadingController;
        this.menuCtrl = menuCtrl;
        this.isFormSubmitted = false;
    }
    ParentsinfoPage.prototype.presentLoading = function () {
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
    ParentsinfoPage.prototype.ionViewDidEnter = function () {
        var _this = this;
        this.menuCtrl.enable(false);
        this.presentLoading().then(function () {
            _this.storage.get('user').then(function (data) {
                _this.id = JSON.parse(data).id;
                _this.apiService.fetchPreschoolRegStep2(_this.id).then(function (data) {
                    console.log('fetchPreschoolRegStep2', data);
                    _this.fetchPreschoolRegStep2data = JSON.parse(data.data);
                    if (_this.fetchPreschoolRegStep2data.id) {
                        _this.isFormSubmitted = true;
                        _this.form_data_id = _this.fetchPreschoolRegStep2data.id;
                        _this.preschoolRegTwoForm.patchValue({
                            mom_name: _this.fetchPreschoolRegStep2data.mother_name,
                            dad_name: _this.fetchPreschoolRegStep2data.father_name,
                            mom_education: _this.fetchPreschoolRegStep2data.mother_qualification,
                            dad_education: _this.fetchPreschoolRegStep2data.father_qualification,
                            mom_occupation: _this.fetchPreschoolRegStep2data.mother_occupation,
                            dad_occupationn: _this.fetchPreschoolRegStep2data.father_occupation,
                            mom_cell_no: _this.fetchPreschoolRegStep2data.mother_mobile_number,
                            dad_cell_no: _this.fetchPreschoolRegStep2data.father_mobile_number,
                            mom_email: _this.fetchPreschoolRegStep2data.mother_email_id,
                            dad_email: _this.fetchPreschoolRegStep2data.father_email_id,
                            child1: _this.fetchPreschoolRegStep2data.sibling_name1,
                            child_school_1: _this.fetchPreschoolRegStep2data.sibling_school1,
                            child_class1: _this.fetchPreschoolRegStep2data.sibling_class1,
                            child2: _this.fetchPreschoolRegStep2data.sibling_name2,
                            child_school_2: _this.fetchPreschoolRegStep2data.sibling_school2,
                            child_class2: _this.fetchPreschoolRegStep2data.sibling_class1,
                            other_name1: _this.fetchPreschoolRegStep2data.other_name1,
                            other_rel1: _this.fetchPreschoolRegStep2data.other_relation1,
                            other_name2: _this.fetchPreschoolRegStep2data.other_name2,
                            other_rel2: _this.fetchPreschoolRegStep2data.other_relation2,
                            q1_ans: _this.fetchPreschoolRegStep2data.q1,
                            q2: _this.fetchPreschoolRegStep2data.q2
                        });
                        _this.isDataPresent = true;
                        _this.loadingController.dismiss();
                    }
                    else {
                        _this.isDataPresent = false;
                        _this.loadingController.dismiss();
                    }
                })["catch"](function (err) {
                    console.log('err', err);
                });
            });
        });
    };
    ParentsinfoPage.prototype.ngOnInit = function () {
        this.menuCtrl.enable(false);
        this.preschoolRegTwoForm = new forms_1.FormGroup({
            mom_name: new forms_1.FormControl('', [forms_1.Validators.pattern(/^[a-zA-Z\. ]+$/)]),
            dad_name: new forms_1.FormControl('', [forms_1.Validators.required, forms_1.Validators.pattern(/^[a-zA-Z\. ]+$/)]),
            mom_education: new forms_1.FormControl(''),
            dad_education: new forms_1.FormControl(''),
            mom_occupation: new forms_1.FormControl('', [forms_1.Validators.pattern(/^[a-zA-z ]+$/)]),
            dad_occupationn: new forms_1.FormControl('', [forms_1.Validators.pattern(/^[a-zA-z ]+$/)]),
            mom_cell_no: new forms_1.FormControl('', [forms_1.Validators.maxLength(10), forms_1.Validators.minLength(10), forms_1.Validators.pattern(/^[0-9]{10}$/)]),
            dad_cell_no: new forms_1.FormControl('', [forms_1.Validators.maxLength(10), forms_1.Validators.minLength(10), forms_1.Validators.pattern(/^[0-9]{10}$/)]),
            mom_email: new forms_1.FormControl('', [forms_1.Validators.pattern(/^(?!\_)(?!_*_$)([0-9A-Za-z]+\.)*[a-zA-Z0-9_+-]+@([\w+-]+\.)*[\w+-]+\.[a-zA-Z]{2,4}$/)]),
            dad_email: new forms_1.FormControl('', [forms_1.Validators.pattern(/^(?!\_)(?!_*_$)([0-9A-Za-z]+\.)*[a-zA-Z0-9_+-]+@([\w+-]+\.)*[\w+-]+\.[a-zA-Z]{2,4}$/)]),
            child1: new forms_1.FormControl('', [forms_1.Validators.pattern(/^[a-zA-z ]+$/)]),
            child_school_1: new forms_1.FormControl(''),
            child_class1: new forms_1.FormControl(''),
            child2: new forms_1.FormControl('', [forms_1.Validators.pattern(/^[a-zA-z ]+$/)]),
            child_school_2: new forms_1.FormControl(''),
            child_class2: new forms_1.FormControl(''),
            other_name1: new forms_1.FormControl('', [forms_1.Validators.pattern(/^[a-zA-Z\. ]+$/)]),
            other_rel1: new forms_1.FormControl('', [forms_1.Validators.pattern(/^[a-zA-z ]+$/)]),
            other_name2: new forms_1.FormControl('', [forms_1.Validators.pattern(/^[a-zA-Z\. ]+$/)]),
            other_rel2: new forms_1.FormControl('', [forms_1.Validators.pattern(/^[a-zA-z ]+$/)]),
            q1_ans: new forms_1.FormControl(''),
            q2: new forms_1.FormControl('')
        });
    };
    ParentsinfoPage.prototype.ionViewWillEnter = function () {
        if (this.menuCtrl.isEnabled) {
            console.log('hi');
            this.menuCtrl.swipeGesture(false);
        }
    };
    Object.defineProperty(ParentsinfoPage.prototype, "mom_name", {
        get: function () {
            return this.preschoolRegTwoForm.get('mom_name');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ParentsinfoPage.prototype, "dad_name", {
        get: function () {
            return this.preschoolRegTwoForm.get('dad_name');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ParentsinfoPage.prototype, "mom_education", {
        get: function () {
            return this.preschoolRegTwoForm.get('mom_education');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ParentsinfoPage.prototype, "dad_education", {
        get: function () {
            return this.preschoolRegTwoForm.get('dad_education');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ParentsinfoPage.prototype, "mom_occupation", {
        get: function () {
            return this.preschoolRegTwoForm.get('mom_occupation');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ParentsinfoPage.prototype, "dad_occupationn", {
        get: function () {
            return this.preschoolRegTwoForm.get('dad_occupationn');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ParentsinfoPage.prototype, "mom_cell_no", {
        get: function () {
            return this.preschoolRegTwoForm.get('mom_cell_no');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ParentsinfoPage.prototype, "dad_cell_no", {
        get: function () {
            return this.preschoolRegTwoForm.get('dad_cell_no');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ParentsinfoPage.prototype, "mom_email", {
        get: function () {
            return this.preschoolRegTwoForm.get('mom_email');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ParentsinfoPage.prototype, "dad_email", {
        get: function () {
            return this.preschoolRegTwoForm.get('dad_email');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ParentsinfoPage.prototype, "child1", {
        get: function () {
            return this.preschoolRegTwoForm.get('child1');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ParentsinfoPage.prototype, "child_school_1", {
        get: function () {
            return this.preschoolRegTwoForm.get('child_school_1');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ParentsinfoPage.prototype, "child_class1", {
        get: function () {
            return this.preschoolRegTwoForm.get('child_class1');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ParentsinfoPage.prototype, "child2", {
        get: function () {
            return this.preschoolRegTwoForm.get('child2');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ParentsinfoPage.prototype, "child_school_2", {
        get: function () {
            return this.preschoolRegTwoForm.get('child_school_2');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ParentsinfoPage.prototype, "child_class2", {
        get: function () {
            return this.preschoolRegTwoForm.get('child_class2');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ParentsinfoPage.prototype, "other_name1", {
        get: function () {
            return this.preschoolRegTwoForm.get('other_name1');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ParentsinfoPage.prototype, "other_rel1", {
        get: function () {
            return this.preschoolRegTwoForm.get('other_rel1');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ParentsinfoPage.prototype, "other_name2", {
        get: function () {
            return this.preschoolRegTwoForm.get('other_name2');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ParentsinfoPage.prototype, "other_rel2", {
        get: function () {
            return this.preschoolRegTwoForm.get('other_rel2');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ParentsinfoPage.prototype, "q1_ans", {
        get: function () {
            return this.preschoolRegTwoForm.get('q1_ans');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ParentsinfoPage.prototype, "q2", {
        get: function () {
            return this.preschoolRegTwoForm.get('q2');
        },
        enumerable: false,
        configurable: true
    });
    ParentsinfoPage.prototype.presentAlert = function (message) {
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
                                        _this.router.navigate(['preschoolotherform']);
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
    ParentsinfoPage.prototype.onSubmit = function (body) {
        var _this = this;
        this.presentLoading();
        console.log('body', body);
        var formData = new FormData();
        formData.append("mom_name", body['mom_name']);
        formData.append("dad_name", body['dad_name']);
        formData.append("mom_education", body['mom_education']);
        formData.append("dad_education", body['dad_education']);
        formData.append("mom_occupation", body['mom_occupation']);
        formData.append("dad_occupationn", body['dad_occupationn']);
        formData.append("mom_cell_no", body['mom_cell_no']);
        formData.append("dad_cell_no", body['dad_cell_no']);
        formData.append("mom_email", body['mom_email']);
        formData.append("dad_email", body['dad_email']);
        formData.append("child1", body['child1']);
        formData.append("child_school_1", body['child_school_1']);
        formData.append("child_class1", body['child_class1']);
        formData.append("child2", body['child2']);
        formData.append("child_school_2", body['child_school_2']);
        formData.append("child_class2", body['child_class2']);
        formData.append("other_name1", body['other_name1']);
        formData.append("other_rel1", body['other_rel1']);
        formData.append("other_name2", body['other_name2']);
        formData.append("other_rel2", body['other_rel2']);
        formData.append("q1_ans", body['q1_ans']);
        formData.append("q2", body['q2']);
        if (this.isDataPresent) {
            formData.append("userid", this.id);
            formData.append("id", this.form_data_id);
            this.apiService.updatePreschoolRegStep2(formData).subscribe(function (data) {
                console.log('data', data);
                _this.loadingController.dismiss();
                _this.presentAlert("Parents info form updated successfully");
                console.log(data);
            }, function (err) {
                console.log(err);
                _this.loadingController.dismiss();
                _this.apiService.presentToast(err.error, 2000);
            });
        }
        else {
            formData.append("userid", this.id);
            this.apiService.preschoolRegStep2(formData).subscribe(function (data) {
                console.log('data', data);
                _this.loadingController.dismiss();
                _this.presentAlert("Parents info form  submitted successfully");
                _this.preschoolRegTwoForm.reset();
                console.log(data);
            }, function (err) {
                console.log(err);
                _this.loadingController.dismiss();
                _this.apiService.presentToast(err.error, 2000);
            });
        }
    };
    ParentsinfoPage.prototype.ionViewDidLeave = function () {
        this.menuCtrl.enable(true);
    };
    ParentsinfoPage.prototype.goToStep3 = function () {
        if (this.isFormSubmitted) {
            this.router.navigateByUrl('/preschoolotherform');
        }
        else {
            this.apiService.presentToast('Please submit  form to go next step', 3000);
        }
    };
    ParentsinfoPage = __decorate([
        core_1.Component({
            selector: 'app-parentsinfo',
            templateUrl: './parentsinfo.page.html',
            styleUrls: ['./parentsinfo.page.scss']
        })
    ], ParentsinfoPage);
    return ParentsinfoPage;
}());
exports.ParentsinfoPage = ParentsinfoPage;
