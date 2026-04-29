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
exports.AddinquiryPage = void 0;
var forms_1 = require("@angular/forms");
var core_1 = require("@angular/core");
var AddinquiryPage = /** @class */ (function () {
    function AddinquiryPage(apiService, menuCtrl, storage, router, alertController) {
        this.apiService = apiService;
        this.menuCtrl = menuCtrl;
        this.storage = storage;
        this.router = router;
        this.alertController = alertController;
        this.isLoggedIn = false;
        this.todays_date = new Date().toJSON().split('T')[0];
    }
    AddinquiryPage.prototype.ngOnInit = function () {
        this.menuCtrl.enable(false);
        this.enquiryForm = new forms_1.FormGroup({
            branch_id: new forms_1.FormControl('', [forms_1.Validators.required]),
            "class": new forms_1.FormControl('', [forms_1.Validators.required]),
            first_name: new forms_1.FormControl('', [forms_1.Validators.required, forms_1.Validators.pattern(/^[a-zA-Z\. ]+$/)]),
            last_name: new forms_1.FormControl('', [forms_1.Validators.required, forms_1.Validators.pattern(/^[a-zA-Z\. ]+$/)]),
            d_o_b: new forms_1.FormControl('', [forms_1.Validators.required]),
            child_age: new forms_1.FormControl('', [forms_1.Validators.required]),
            gender: new forms_1.FormControl('', [forms_1.Validators.required]),
            address: new forms_1.FormControl('', [forms_1.Validators.required]),
            mobile_1: new forms_1.FormControl('', [forms_1.Validators.required, forms_1.Validators.maxLength(10), forms_1.Validators.minLength(10), forms_1.Validators.pattern(/^[0-9]{10}$/)]),
            mobile_2: new forms_1.FormControl('', [forms_1.Validators.required, forms_1.Validators.maxLength(10), forms_1.Validators.minLength(10), forms_1.Validators.pattern(/^[0-9]{10}$/)]),
            // date:new FormControl('',[Validators.required]),  
            email_1: new forms_1.FormControl('', [forms_1.Validators.required, forms_1.Validators.pattern(/^(?!\_)(?!_*_$)([0-9A-Za-z]+\.)*[a-zA-Z0-9_+-]+@([\w+-]+\.)*[\w+-]+\.[a-zA-Z]{2,4}$/)]),
            email_2: new forms_1.FormControl('', [forms_1.Validators.required, forms_1.Validators.pattern(/^(?!\_)(?!_*_$)([0-9A-Za-z]+\.)*[a-zA-Z0-9_+-]+@([\w+-]+\.)*[\w+-]+\.[a-zA-Z]{2,4}$/)]),
            q1: new forms_1.FormControl('', [forms_1.Validators.required])
        });
    };
    Object.defineProperty(AddinquiryPage.prototype, "branch_id", {
        get: function () {
            return this.enquiryForm.get('branch_id');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(AddinquiryPage.prototype, "class", {
        get: function () {
            return this.enquiryForm.get('class');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(AddinquiryPage.prototype, "first_name", {
        get: function () {
            return this.enquiryForm.get('first_name');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(AddinquiryPage.prototype, "last_name", {
        get: function () {
            return this.enquiryForm.get('last_name');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(AddinquiryPage.prototype, "d_o_b", {
        get: function () {
            return this.enquiryForm.get('d_o_b');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(AddinquiryPage.prototype, "child_age", {
        get: function () {
            return this.enquiryForm.get('child_age');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(AddinquiryPage.prototype, "gender", {
        get: function () {
            return this.enquiryForm.get('gender');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(AddinquiryPage.prototype, "address", {
        get: function () {
            return this.enquiryForm.get('address');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(AddinquiryPage.prototype, "mobile_1", {
        get: function () {
            return this.enquiryForm.get('mobile_1');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(AddinquiryPage.prototype, "mobile_2", {
        get: function () {
            return this.enquiryForm.get('mobile_2');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(AddinquiryPage.prototype, "email_1", {
        // get date(){
        //   return this.enquiryForm.get('date')
        // }
        get: function () {
            return this.enquiryForm.get('email_1');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(AddinquiryPage.prototype, "email_2", {
        get: function () {
            return this.enquiryForm.get('email_2');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(AddinquiryPage.prototype, "q1", {
        get: function () {
            return this.enquiryForm.get('q1');
        },
        enumerable: false,
        configurable: true
    });
    AddinquiryPage.prototype.ionViewDidEnter = function () {
        var _this = this;
        this.apiService.getBranches().then(function (data) {
            _this.branches = JSON.parse(data.data);
        });
    };
    AddinquiryPage.prototype.onSubmit = function (body) {
        var _this = this;
        body['date'] = new Date();
        console.log('body', body);
        this.apiService.addEnquiry(body).then(function (data) {
            console.log('data', data);
            _this.presentAlert('Enquiry added succsessfully');
            _this.enquiryForm.reset({
                branch_id: '',
                "class": '',
                first_name: '',
                last_name: '',
                d_o_b: '',
                child_age: '',
                gender: '',
                address: '',
                mobile_1: '',
                mobile_2: '',
                email_1: '',
                email_2: '',
                q1: ''
            });
        })["catch"](function (err) {
            _this.apiService.presentToast(err, 2000);
        });
    };
    AddinquiryPage.prototype.ionViewWillEnter = function () {
        var _this = this;
        if (this.menuCtrl.isEnabled) {
            console.log('hi');
            this.menuCtrl.swipeGesture(false);
        }
        this.storage.get('user').then(function (data) {
            if (data) {
                _this.isLoggedIn = true;
            }
        });
    };
    AddinquiryPage.prototype.ionViewDidLeave = function () {
        this.menuCtrl.enable(true);
    };
    AddinquiryPage.prototype.goBack = function () {
        if (this.isLoggedIn) {
            this.router.navigate(['quicktour']);
        }
        else {
            this.router.navigate(['login']);
        }
    };
    AddinquiryPage.prototype.presentAlert = function (message) {
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
                                        // this.router.navigate(['mobilelogin'])
                                        if (_this.isLoggedIn) {
                                            _this.router.navigate(['quicktour']);
                                        }
                                        else {
                                            _this.storage.set('type', 'login').then(function (_) {
                                                _this.router.navigate(['login']);
                                            });
                                        }
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
    AddinquiryPage.prototype.ageFromDOB = function (dateOfBirth) {
        var birthdate = new Date(dateOfBirth.detail.value);
        var timeDiff = Math.abs(new Date().getTime() - new Date(birthdate).getTime());
        var age = Math.floor((timeDiff / (1000 * 3600 * 24)) / 365);
        this.enquiryForm.patchValue({ child_age: age });
    };
    AddinquiryPage = __decorate([
        core_1.Component({
            selector: 'app-addinquiry',
            templateUrl: './addinquiry.page.html',
            styleUrls: ['./addinquiry.page.scss']
        })
    ], AddinquiryPage);
    return AddinquiryPage;
}());
exports.AddinquiryPage = AddinquiryPage;
