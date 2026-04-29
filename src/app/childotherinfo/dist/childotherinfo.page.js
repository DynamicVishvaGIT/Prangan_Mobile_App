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
exports.ChildotherinfoPage = void 0;
var forms_1 = require("@angular/forms");
var core_1 = require("@angular/core");
var ChildotherinfoPage = /** @class */ (function () {
    function ChildotherinfoPage(storage, apiService, actionSheetController, alertController, router, loadingController, menuCtrl) {
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
    ChildotherinfoPage.prototype.ngOnInit = function () {
        this.menuCtrl.enable(false);
        this.stepThreeForm = new forms_1.FormGroup({
            q1: new forms_1.FormControl('', forms_1.Validators.required),
            q2: new forms_1.FormControl(''),
            q3: new forms_1.FormControl(''),
            q4: new forms_1.FormControl(''),
            q5: new forms_1.FormControl(''),
            q6: new forms_1.FormControl(''),
            q7: new forms_1.FormControl(''),
            q1_tol: new forms_1.FormControl(''),
            q2_tol: new forms_1.FormControl(''),
            q3_tol: new forms_1.FormControl(''),
            q4_tol: new forms_1.FormControl(''),
            q5_tol: new forms_1.FormControl(''),
            q6_tol: new forms_1.FormControl(''),
            q7_tol: new forms_1.FormControl(''),
            q1_sp: new forms_1.FormControl(''),
            q2_sp: new forms_1.FormControl(''),
            q3_sp: new forms_1.FormControl(''),
            q4_sp: new forms_1.FormControl(''),
            q5_sp: new forms_1.FormControl(''),
            q6_sp: new forms_1.FormControl(''),
            q7_sp: new forms_1.FormControl(''),
            q8_sp: new forms_1.FormControl(''),
            q9_sp: new forms_1.FormControl(''),
            q10_sp: new forms_1.FormControl('')
        });
    };
    ChildotherinfoPage.prototype.toggle_accordion = function () {
        this.accordion_expanded = this.accordion_expanded === false;
    };
    ChildotherinfoPage.prototype.presentLoading = function () {
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
    Object.defineProperty(ChildotherinfoPage.prototype, "q1", {
        get: function () {
            return this.stepThreeForm.get('q1');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ChildotherinfoPage.prototype, "q2", {
        get: function () {
            return this.stepThreeForm.get('q2');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ChildotherinfoPage.prototype, "q3", {
        get: function () {
            return this.stepThreeForm.get('q3');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ChildotherinfoPage.prototype, "q4", {
        get: function () {
            return this.stepThreeForm.get('q4');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ChildotherinfoPage.prototype, "q5", {
        get: function () {
            return this.stepThreeForm.get('q5');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ChildotherinfoPage.prototype, "q6", {
        get: function () {
            return this.stepThreeForm.get('q6');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ChildotherinfoPage.prototype, "q7", {
        get: function () {
            return this.stepThreeForm.get('q7');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ChildotherinfoPage.prototype, "q1_tol", {
        get: function () {
            return this.stepThreeForm.get('q1_tol');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ChildotherinfoPage.prototype, "q2_tol", {
        get: function () {
            return this.stepThreeForm.get('q2_tol');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ChildotherinfoPage.prototype, "q3_tol", {
        get: function () {
            return this.stepThreeForm.get('q3_tol');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ChildotherinfoPage.prototype, "q4_tol", {
        get: function () {
            return this.stepThreeForm.get('q4_tol');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ChildotherinfoPage.prototype, "q5_tol", {
        get: function () {
            return this.stepThreeForm.get('q5_tol');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ChildotherinfoPage.prototype, "q6_tol", {
        get: function () {
            return this.stepThreeForm.get('q6_tol');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ChildotherinfoPage.prototype, "q7_tol", {
        get: function () {
            return this.stepThreeForm.get('q7_tol');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ChildotherinfoPage.prototype, "q1_sp", {
        get: function () {
            return this.stepThreeForm.get('q1_sp');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ChildotherinfoPage.prototype, "q2_sp", {
        get: function () {
            return this.stepThreeForm.get('q2_sp');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ChildotherinfoPage.prototype, "q3_sp", {
        get: function () {
            return this.stepThreeForm.get('q3_sp');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ChildotherinfoPage.prototype, "q4_sp", {
        get: function () {
            return this.stepThreeForm.get('q4_sp');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ChildotherinfoPage.prototype, "q5_sp", {
        get: function () {
            return this.stepThreeForm.get('q5_sp');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ChildotherinfoPage.prototype, "q6_sp", {
        get: function () {
            return this.stepThreeForm.get('q6_sp');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ChildotherinfoPage.prototype, "q7_sp", {
        get: function () {
            return this.stepThreeForm.get('q7_sp');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ChildotherinfoPage.prototype, "q8_sp", {
        get: function () {
            return this.stepThreeForm.get('q8_sp');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ChildotherinfoPage.prototype, "q9_sp", {
        get: function () {
            return this.stepThreeForm.get('q9_sp');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ChildotherinfoPage.prototype, "q10_sp", {
        get: function () {
            return this.stepThreeForm.get('q10_sp');
        },
        enumerable: false,
        configurable: true
    });
    ChildotherinfoPage.prototype.onSubmit = function (body) {
        var _this = this;
        this.presentLoading();
        console.log('body', body);
        var formData = new FormData();
        formData.append("userid", this.userid);
        formData.append("q1", body['q1']);
        formData.append("q2", body['q2']);
        formData.append("q3", body['q3']);
        formData.append("q4", body['q4']);
        formData.append("q5", body['q5']);
        formData.append("q6", body['q6']);
        formData.append("q7", body['q7']);
        formData.append("q1_tol", body['q1_tol']);
        formData.append("q2_tol", body['q2_tol']);
        formData.append("q3_tol", body['q3_tol']);
        formData.append("q4_tol", body['q4_tol']);
        formData.append("q5_tol", body['q5_tol']);
        formData.append("q6_tol", body['q6_tol']);
        formData.append("q7_tol", body['q7_tol']);
        formData.append("q1_sp", body['q1_sp']);
        formData.append("q2_sp", body['q2_sp']);
        formData.append("q3_sp", body['q3_sp']);
        formData.append("q4_sp", body['q4_sp']);
        formData.append("q5_sp", body['q5_sp']);
        formData.append("q6_sp", body['q6_sp']);
        formData.append("q7_sp", body['q7_sp']);
        formData.append("q8_sp", body['q8_sp']);
        formData.append("q9_sp", body['q9_sp']);
        formData.append("q10_sp", body['q10_sp']);
        if (this.isDataPresent) {
            formData.append("child_food_id", this.child_food_id);
            formData.append("child_physical_id", this.child_physical_id);
            this.apiService.updateDaycareRegStep3(formData).subscribe(function (data) {
                console.log('data', data);
                _this.loadingController.dismiss();
                _this.presentAlert("Daycare Step 3 form updated successfully");
                // this.stepThreeForm.reset()
                console.log(data);
            }, function (err) {
                console.log(err);
                _this.loadingController.dismiss();
                _this.apiService.presentToast(err.error, 2000);
            });
        }
        else {
            this.apiService.daycareRegistrationStep3(formData).subscribe(function (data) {
                console.log('data', data);
                _this.loadingController.dismiss();
                _this.presentAlert("Daycare Step 3 form submitted successfully");
                _this.stepThreeForm.reset();
                console.log(data);
            }, function (err) {
                console.log(err);
                _this.loadingController.dismiss();
                _this.apiService.presentToast(err.error, 2000);
            });
        }
    };
    ChildotherinfoPage.prototype.ionViewDidEnter = function () {
        var _this = this;
        this.menuCtrl.enable(false);
        this.presentLoading().then(function () {
            _this.storage.get('user').then(function (data) {
                if (data) {
                    var user = JSON.parse(data);
                    _this.userid = user.id;
                    console.log('userid', _this.userid);
                    _this.apiService.fetchDayCareStep3(_this.userid).then(function (data) {
                        console.log('fetchDayCareStep3', data.data);
                        var fetchDayCareStep3 = JSON.parse(data.data);
                        if (fetchDayCareStep3) {
                            _this.fetchDayCareStep3_food = fetchDayCareStep3['a'];
                            _this.fetchDayCareStep3_phy = fetchDayCareStep3['b'];
                            if (_this.fetchDayCareStep3_food && _this.fetchDayCareStep3_phy) {
                                _this.isFormSubmitted = true;
                                _this.child_food_id = _this.fetchDayCareStep3_food.id;
                                _this.child_physical_id = _this.fetchDayCareStep3_phy.id;
                                _this.stepThreeForm.patchValue({
                                    'q1': _this.fetchDayCareStep3_food.child_behaviour,
                                    'q2': _this.fetchDayCareStep3_food.is_the_child,
                                    'q3': _this.fetchDayCareStep3_food.dietary_requirements,
                                    'q4': _this.fetchDayCareStep3_food.meal,
                                    'q5': _this.fetchDayCareStep3_food.food,
                                    'q6': _this.fetchDayCareStep3_food.child_feed,
                                    'q7': _this.fetchDayCareStep3_food.attitude,
                                    'q1_tol': _this.fetchDayCareStep3_food.attitude,
                                    'q2_tol': _this.fetchDayCareStep3_food.toilet_hobits_q2,
                                    'q3_tol': _this.fetchDayCareStep3_food.toilet_hobits_q3,
                                    'q4_tol': _this.fetchDayCareStep3_food.toilet_hobits_q4,
                                    'q5_tol': _this.fetchDayCareStep3_food.toilet_hobits_q5,
                                    'q6_tol': _this.fetchDayCareStep3_food.toilet_hobits_q6,
                                    'q7_tol': _this.fetchDayCareStep3_food.toilet_hobits_q7,
                                    'q1_sp': _this.fetchDayCareStep3_phy.q1,
                                    'q2_sp': _this.fetchDayCareStep3_phy.q2,
                                    'q3_sp': _this.fetchDayCareStep3_phy.q3,
                                    'q4_sp': _this.fetchDayCareStep3_phy.q4,
                                    'q5_sp': _this.fetchDayCareStep3_phy.q5,
                                    'q6_sp': _this.fetchDayCareStep3_phy.q6,
                                    'q7_sp': _this.fetchDayCareStep3_phy.q7,
                                    'q8_sp': _this.fetchDayCareStep3_phy.q8,
                                    'q9_sp': _this.fetchDayCareStep3_phy.q9,
                                    'q10_sp': _this.fetchDayCareStep3_phy.q10
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
    ChildotherinfoPage.prototype.presentAlert = function (message) {
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
                                        _this.router.navigate(['childotherinfotwo']);
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
    ChildotherinfoPage.prototype.ionViewWillEnter = function () {
        if (this.menuCtrl.isEnabled) {
            console.log('hi');
            this.menuCtrl.swipeGesture(false);
        }
    };
    ChildotherinfoPage.prototype.goToNextStep = function () {
        if (this.isFormSubmitted) {
            this.router.navigate(['childotherinfotwo']);
        }
        else {
            this.apiService.presentToast('Please submit  form to go next step', 3000);
        }
    };
    ChildotherinfoPage.prototype.ionViewDidLeave = function () {
        this.menuCtrl.enable(true);
    };
    ChildotherinfoPage = __decorate([
        core_1.Component({
            selector: 'app-childotherinfo',
            templateUrl: './childotherinfo.page.html',
            styleUrls: ['./childotherinfo.page.scss']
        })
    ], ChildotherinfoPage);
    return ChildotherinfoPage;
}());
exports.ChildotherinfoPage = ChildotherinfoPage;
