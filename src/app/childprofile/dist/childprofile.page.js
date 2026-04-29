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
exports.ChildprofilePage = void 0;
var forms_1 = require("@angular/forms");
var core_1 = require("@angular/core");
var ChildprofilePage = /** @class */ (function () {
    function ChildprofilePage(storage, apiService, actionSheetController, alertController, router, loadingController, menuCtrl) {
        this.storage = storage;
        this.apiService = apiService;
        this.actionSheetController = actionSheetController;
        this.alertController = alertController;
        this.router = router;
        this.loadingController = loadingController;
        this.menuCtrl = menuCtrl;
        this.accordion_expanded = false;
        this.isFormSubmitted = false;
    }
    ChildprofilePage.prototype.ngOnInit = function () {
        this.menuCtrl.enable(false);
        this.steptwoForm = new forms_1.FormGroup({
            q1: new forms_1.FormControl('', forms_1.Validators.required),
            q2: new forms_1.FormControl(''),
            q2_ans: new forms_1.FormControl(''),
            q3: new forms_1.FormControl(''),
            q4: new forms_1.FormControl(''),
            q5: new forms_1.FormControl(''),
            q6: new forms_1.FormControl(''),
            q6_ans: new forms_1.FormControl(''),
            q7: new forms_1.FormControl(''),
            q8: new forms_1.FormControl(''),
            q9: new forms_1.FormControl(''),
            q1_med: new forms_1.FormControl('', [forms_1.Validators.pattern(/^[a-zA-Z\. ]+$/)]),
            q2_med: new forms_1.FormControl(''),
            q3_med: new forms_1.FormControl('', [forms_1.Validators.pattern(/^\d{5}([- ]*)\d{6}$/)]),
            q4_med: new forms_1.FormControl(''),
            q4_med_ans: new forms_1.FormControl(''),
            q5_med_ans: new forms_1.FormControl(''),
            q6_med: new forms_1.FormControl(''),
            q7_med: new forms_1.FormControl(''),
            q8_med: new forms_1.FormControl(''),
            q9_med: new forms_1.FormControl('')
        });
    };
    ChildprofilePage.prototype.toggle_accordion = function () {
        this.accordion_expanded = this.accordion_expanded === false;
    };
    ChildprofilePage.prototype.presentLoading = function () {
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
    Object.defineProperty(ChildprofilePage.prototype, "q1", {
        get: function () {
            return this.steptwoForm.get('q1');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ChildprofilePage.prototype, "q2", {
        get: function () {
            return this.steptwoForm.get('q2');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ChildprofilePage.prototype, "q2_ans", {
        get: function () {
            return this.steptwoForm.get('q2_ans');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ChildprofilePage.prototype, "q3", {
        get: function () {
            return this.steptwoForm.get('q3');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ChildprofilePage.prototype, "q4", {
        get: function () {
            return this.steptwoForm.get('q4');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ChildprofilePage.prototype, "q5", {
        get: function () {
            return this.steptwoForm.get('q5');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ChildprofilePage.prototype, "q6", {
        get: function () {
            return this.steptwoForm.get('q6');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ChildprofilePage.prototype, "q6_ans", {
        get: function () {
            return this.steptwoForm.get('q6_ans');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ChildprofilePage.prototype, "q7", {
        get: function () {
            return this.steptwoForm.get('q7');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ChildprofilePage.prototype, "q8", {
        get: function () {
            return this.steptwoForm.get('q8');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ChildprofilePage.prototype, "q9", {
        get: function () {
            return this.steptwoForm.get('q9');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ChildprofilePage.prototype, "q1_med", {
        get: function () {
            return this.steptwoForm.get('q1_med');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ChildprofilePage.prototype, "q2_med", {
        get: function () {
            return this.steptwoForm.get('q2_med');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ChildprofilePage.prototype, "q3_med", {
        get: function () {
            return this.steptwoForm.get('q3_med');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ChildprofilePage.prototype, "q4_med", {
        get: function () {
            return this.steptwoForm.get('q4_med');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ChildprofilePage.prototype, "q4_med_ans", {
        get: function () {
            return this.steptwoForm.get('q4_med_ans');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ChildprofilePage.prototype, "q5_med_ans", {
        get: function () {
            return this.steptwoForm.get('q5_med_ans');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ChildprofilePage.prototype, "q6_med", {
        get: function () {
            return this.steptwoForm.get('q6_med');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ChildprofilePage.prototype, "q7_med", {
        get: function () {
            return this.steptwoForm.get('q7_med');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ChildprofilePage.prototype, "q8_med", {
        get: function () {
            return this.steptwoForm.get('q8_med');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ChildprofilePage.prototype, "q9_med", {
        get: function () {
            return this.steptwoForm.get('q9_med');
        },
        enumerable: false,
        configurable: true
    });
    ChildprofilePage.prototype.onSubmit = function (body) {
        var _this = this;
        this.presentLoading();
        console.log('body', body);
        var formData = new FormData();
        formData.append("userid", this.userid);
        formData.append("q1", body['q1']);
        formData.append("q2", body['q2']);
        formData.append("q2_ans", body['q2_ans']);
        formData.append("q3", body['q3']);
        formData.append("q4", body['q4']);
        formData.append("q5", body['q5']);
        formData.append("q6", body['q6']);
        formData.append("q6_ans", body['q6_ans']);
        formData.append("q7", body['q7']);
        formData.append("q8", body['q8']);
        formData.append("q9", body['q9']);
        formData.append("q1_med", body['q1_med']);
        formData.append("q2_med", body['q2_med']);
        formData.append("q3_med", body['q3_med']);
        formData.append("q4_med", body['q4_med']);
        formData.append("q4_med_ans", body['q4_med_ans']);
        formData.append("q5_men_ans", body['q5_med_ans']);
        formData.append("q6_med", body['q6_med']);
        formData.append("q7_med", body['q7_med']);
        formData.append("q8_med", body['q8_med']);
        formData.append("q9_med", body['q9_med']);
        if (this.isDataPresent) {
            formData.append("child_evn_id", this.child_evn_id);
            formData.append("child_medical_id", this.child_medical_id);
            this.apiService.updateDaycareRegStep2(formData).subscribe(function (data) {
                console.log('data', data);
                _this.loadingController.dismiss();
                _this.presentAlert("Daycare Step 2 form updated successfully");
                // this.steptwoForm.reset()
                console.log(data);
            }, function (err) {
                console.log(err);
                _this.loadingController.dismiss();
                _this.apiService.presentToast(err.error, 2000);
            });
        }
        else {
            this.apiService.daycareRegistrationStep2(formData).subscribe(function (data) {
                console.log('data', data);
                _this.loadingController.dismiss();
                _this.presentAlert("Daycare Step 2 form submitted successfully");
                _this.steptwoForm.reset();
                console.log(data);
            }, function (err) {
                console.log(err);
                _this.loadingController.dismiss();
                _this.apiService.presentToast(err.error, 2000);
            });
        }
    };
    ChildprofilePage.prototype.ionViewWillEnter = function () {
        if (this.menuCtrl.isEnabled) {
            console.log('hi');
            this.menuCtrl.swipeGesture(false);
        }
    };
    ChildprofilePage.prototype.ionViewDidEnter = function () {
        var _this = this;
        this.presentLoading().then(function () {
            _this.storage.get('user').then(function (data) {
                if (data) {
                    var user = JSON.parse(data);
                    _this.userid = user.id;
                    console.log('userid', _this.userid, user.userid);
                    _this.apiService.fetchDayCareStep2(_this.userid).then(function (data) {
                        console.log('fetchDayCareStep2', data.data);
                        var fetchDayCareStep2 = JSON.parse(data.data);
                        if (fetchDayCareStep2) {
                            _this.fetchDayCareStep2_env = fetchDayCareStep2['a'];
                            _this.fetchDayCareStep2_med = fetchDayCareStep2['b'];
                            if (_this.fetchDayCareStep2_env && _this.fetchDayCareStep2_med) {
                                _this.isFormSubmitted = true;
                                console.log(' this.fetchDayCareStep2', _this.fetchDayCareStep2_env, _this.fetchDayCareStep2_med);
                                _this.child_evn_id = _this.fetchDayCareStep2_env.id;
                                _this.child_medical_id = _this.fetchDayCareStep2_med.id;
                                _this.steptwoForm.patchValue({
                                    'q1': _this.fetchDayCareStep2_env.room,
                                    'q2': _this.fetchDayCareStep2_env.playgroup,
                                    'q2_ans': _this.fetchDayCareStep2_env.playgroup_specify,
                                    'q3': _this.fetchDayCareStep2_env.playmentes_specify,
                                    'q4': _this.fetchDayCareStep2_env.tv,
                                    'q5': _this.fetchDayCareStep2_env.play,
                                    'q6': _this.fetchDayCareStep2_env.pets,
                                    'q6_ans': _this.fetchDayCareStep2_env.pets_specify,
                                    'q7': _this.fetchDayCareStep2_env.indoor_activity,
                                    'q8': _this.fetchDayCareStep2_env.outdoor_activity,
                                    'q9': _this.fetchDayCareStep2_env.child_favorite,
                                    'q1_med': _this.fetchDayCareStep2_med.pediatricians_name,
                                    'q2_med': _this.fetchDayCareStep2_med.address,
                                    'q3_med': _this.fetchDayCareStep2_med.telephone_number,
                                    'q4_med': _this.fetchDayCareStep2_med.allergic_reaction,
                                    'q4_med_ans': _this.fetchDayCareStep2_med.allergies,
                                    'q5_med_ans': _this.fetchDayCareStep2_med.allergies_usually_mainfest,
                                    'q6_med': _this.fetchDayCareStep2_med.allergic_reaction,
                                    'q7_med': _this.fetchDayCareStep2_med.fever,
                                    'q8_med': _this.fetchDayCareStep2_med.chile_prone,
                                    'q9_med': _this.fetchDayCareStep2_med.question
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
    ChildprofilePage.prototype.presentAlert = function (message) {
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
                                        _this.router.navigate(['childotherinfo']);
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
    ChildprofilePage.prototype.ionViewDidLeave = function () {
        this.menuCtrl.enable(true);
    };
    ChildprofilePage.prototype.goToNextStep = function () {
        if (this.isFormSubmitted) {
            this.router.navigate(['childotherinfo']);
        }
        else {
            this.apiService.presentToast('Please submit  form to go next step', 3000);
        }
    };
    ChildprofilePage = __decorate([
        core_1.Component({
            selector: 'app-childprofile',
            templateUrl: './childprofile.page.html',
            styleUrls: ['./childprofile.page.scss']
        })
    ], ChildprofilePage);
    return ChildprofilePage;
}());
exports.ChildprofilePage = ChildprofilePage;
