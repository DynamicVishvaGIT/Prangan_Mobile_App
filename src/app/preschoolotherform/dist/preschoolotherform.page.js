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
exports.PreschoolotherformPage = void 0;
var forms_1 = require("@angular/forms");
var core_1 = require("@angular/core");
var PreschoolotherformPage = /** @class */ (function () {
    function PreschoolotherformPage(storage, apiService, router, alertController, loadingController, menuCtrl) {
        this.storage = storage;
        this.apiService = apiService;
        this.router = router;
        this.alertController = alertController;
        this.loadingController = loadingController;
        this.menuCtrl = menuCtrl;
    }
    PreschoolotherformPage.prototype.presentLoading = function () {
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
    PreschoolotherformPage.prototype.ionViewDidEnter = function () {
        var _this = this;
        this.menuCtrl.enable(false);
        this.presentLoading().then(function () {
            _this.storage.get('user').then(function (data) {
                _this.id = JSON.parse(data).id;
                _this.apiService.fetchPreschoolRegStep3(_this.id).then(function (data) {
                    console.log('fetchPreschoolRegStep3', data);
                    _this.fetchPreschoolRegStep3data = JSON.parse(data.data);
                    if (_this.fetchPreschoolRegStep3data.id) {
                        _this.form_data_id = _this.fetchPreschoolRegStep3data.id;
                        _this.preschoolStepThreeForm.patchValue({
                            q1_ans: _this.fetchPreschoolRegStep3data.q1,
                            q2_ans: _this.fetchPreschoolRegStep3data.q2,
                            q3_ans: _this.fetchPreschoolRegStep3data.q3,
                            q4_ans: _this.fetchPreschoolRegStep3data.q4,
                            q5_ans: _this.fetchPreschoolRegStep3data.q5,
                            q6_ans: _this.fetchPreschoolRegStep3data.q6,
                            q7_ans: _this.fetchPreschoolRegStep3data.q7,
                            q8_ans: _this.fetchPreschoolRegStep3data.q8,
                            q9_ans: _this.fetchPreschoolRegStep3data.q9,
                            q10_ans: _this.fetchPreschoolRegStep3data.q10,
                            q11_ans: _this.fetchPreschoolRegStep3data.q11,
                            q12_ans: _this.fetchPreschoolRegStep3data.q12,
                            q13_ans: _this.fetchPreschoolRegStep3data.q13
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
    PreschoolotherformPage.prototype.ngOnInit = function () {
        this.preschoolStepThreeForm = new forms_1.FormGroup({
            q1_ans: new forms_1.FormControl('', forms_1.Validators.required),
            q2_ans: new forms_1.FormControl(''),
            q3_ans: new forms_1.FormControl(''),
            q4_ans: new forms_1.FormControl(''),
            q5_ans: new forms_1.FormControl(''),
            q6_ans: new forms_1.FormControl(''),
            q7_ans: new forms_1.FormControl(''),
            q8_ans: new forms_1.FormControl(''),
            q9_ans: new forms_1.FormControl(''),
            q10_ans: new forms_1.FormControl(''),
            q11_ans: new forms_1.FormControl(''),
            q12_ans: new forms_1.FormControl(''),
            q13_ans: new forms_1.FormControl('')
        });
    };
    Object.defineProperty(PreschoolotherformPage.prototype, "q1_ans", {
        get: function () {
            return this.preschoolStepThreeForm.get('q1_ans');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(PreschoolotherformPage.prototype, "q2_ans", {
        get: function () {
            return this.preschoolStepThreeForm.get('q2_ans');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(PreschoolotherformPage.prototype, "q3_ans", {
        get: function () {
            return this.preschoolStepThreeForm.get('q3_ans');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(PreschoolotherformPage.prototype, "q4_ans", {
        get: function () {
            return this.preschoolStepThreeForm.get('q4_ans');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(PreschoolotherformPage.prototype, "q5_ans", {
        get: function () {
            return this.preschoolStepThreeForm.get('q5_ans');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(PreschoolotherformPage.prototype, "q6_ans", {
        get: function () {
            return this.preschoolStepThreeForm.get('q6_ans');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(PreschoolotherformPage.prototype, "q7_ans", {
        get: function () {
            return this.preschoolStepThreeForm.get('q7_ans');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(PreschoolotherformPage.prototype, "q8_ans", {
        get: function () {
            return this.preschoolStepThreeForm.get('q8_ans');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(PreschoolotherformPage.prototype, "q9_ans", {
        get: function () {
            return this.preschoolStepThreeForm.get('q9_ans');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(PreschoolotherformPage.prototype, "q10_ans", {
        get: function () {
            return this.preschoolStepThreeForm.get('q10_ans');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(PreschoolotherformPage.prototype, "q11_ans", {
        get: function () {
            return this.preschoolStepThreeForm.get('q11_ans');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(PreschoolotherformPage.prototype, "q12_ans", {
        get: function () {
            return this.preschoolStepThreeForm.get('q12_ans');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(PreschoolotherformPage.prototype, "q13_ans", {
        get: function () {
            return this.preschoolStepThreeForm.get('q13_ans');
        },
        enumerable: false,
        configurable: true
    });
    PreschoolotherformPage.prototype.onSubmit = function (body) {
        var _this = this;
        this.presentLoading();
        console.log('body', body);
        var formData = new FormData();
        formData.append("q1_ans", body['q1_ans']);
        formData.append("q2_ans", body['q2_ans']);
        formData.append("q3_ans", body['q3_ans']);
        formData.append("q4_ans", body['q4_ans']);
        formData.append("q5_ans", body['q5_ans']);
        formData.append("q6_ans", body['q6_ans']);
        formData.append("q7_ans", body['q7_ans']);
        formData.append("q8_ans", body['q8_ans']);
        formData.append("q9_ans", body['q9_ans']);
        formData.append("q10_ans", body['q10_ans']);
        formData.append("q11_ans", body['q11_ans']);
        formData.append("q12_ans", body['q12_ans']);
        formData.append("q13_ans", body['q13_ans']);
        formData.append("child2", body['child2']);
        if (this.isDataPresent) {
            formData.append("userid", this.id);
            formData.append("id", this.form_data_id);
            this.apiService.updatePreschoolRegStep3(formData).subscribe(function (data) {
                console.log('data', data);
                _this.loadingController.dismiss();
                _this.presentAlert("Form updated successfully");
                console.log(data);
            }, function (err) {
                console.log(err);
                _this.loadingController.dismiss();
                _this.apiService.presentToast(err.error, 2000);
            });
        }
        else {
            formData.append("userid", this.id);
            this.apiService.preschoolRegStep3(formData).subscribe(function (data) {
                console.log('data', data);
                _this.loadingController.dismiss();
                _this.presentAlert("Form submitted successfully");
                _this.preschoolStepThreeForm.reset();
                console.log(data);
            }, function (err) {
                console.log(err);
                _this.loadingController.dismiss();
                _this.apiService.presentToast(err.error, 2000);
            });
        }
    };
    PreschoolotherformPage.prototype.presentAlert = function (message) {
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
                                        _this.apiService.userDetails(_this.id, 'Preschool').then(function (data) {
                                            _this.fetchPreschoolStepOne = JSON.parse(data.data);
                                            if (_this.fetchPreschoolStepOne.status == 'Active' && _this.fetchPreschoolStepOne.Approve_status == 'Active') {
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
    PreschoolotherformPage.prototype.ionViewDidLeave = function () {
        this.menuCtrl.enable(true);
    };
    PreschoolotherformPage.prototype.ionViewWillEnter = function () {
        if (this.menuCtrl.isEnabled) {
            console.log('hi');
            this.menuCtrl.swipeGesture(false);
        }
    };
    PreschoolotherformPage = __decorate([
        core_1.Component({
            selector: 'app-preschoolotherform',
            templateUrl: './preschoolotherform.page.html',
            styleUrls: ['./preschoolotherform.page.scss']
        })
    ], PreschoolotherformPage);
    return PreschoolotherformPage;
}());
exports.PreschoolotherformPage = PreschoolotherformPage;
