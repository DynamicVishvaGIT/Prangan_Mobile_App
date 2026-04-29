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
exports.AppComponent = void 0;
var core_1 = require("@angular/core");
var angular_1 = require("@ionic/angular");
var AppComponent = /** @class */ (function () {
    function AppComponent(router, platform, splashScreen, statusBar, storage, apiService, menu, fcm, alertController, appMinimize, location) {
        this.router = router;
        this.platform = platform;
        this.splashScreen = splashScreen;
        this.statusBar = statusBar;
        this.storage = storage;
        this.apiService = apiService;
        this.menu = menu;
        this.fcm = fcm;
        this.alertController = alertController;
        this.appMinimize = appMinimize;
        this.location = location;
        this.isActive = false;
        this.isNestedSideMenu = false;
        this.appPages = [
            {
                title: 'Enquiry Form',
                url: '/addinquiry',
                icon: 'assets/drawer_icons/01_Inquiry_form.png',
                open: false
            },
            {
                title: 'Registration Form',
                icon: 'assets/drawer_icons/02_Admission_form.png',
                subPages: [
                    { title: 'Preschool', url: '/preschoolform', icon: 'assets/drawer_icons/02_Admission_form.png' },
                    { title: 'Daycare', url: '/addadmission', icon: 'assets/drawer_icons/02_Admission_form.png' }
                ]
            },
            {
                title: 'Switch Profile',
                url: '/switchprofile',
                icon: 'assets/drawer_icons/03_About_us.png',
                open: false
            },
            {
                title: 'About Us',
                url: '/aboutus',
                icon: 'assets/drawer_icons/03_About_us.png',
                open: false
            },
            {
                title: 'Gallery',
                url: '/gallery',
                icon: 'assets/drawer_icons/04_Gallery.png',
                open: false
            },
            {
                title: 'Fee Payment',
                url: '/feestructure',
                icon: 'assets/drawer_icons/05_Fee_structure.png',
                open: false
            },
            {
                title: 'Payment History',
                url: '/paymenthistory',
                icon: 'assets/drawer_icons/06_Pyment_history.png'
            },
            {
                title: 'Courses',
                url: '/courses',
                icon: 'assets/drawer_icons/07_Courses.png',
                open: false
            },
            {
                title: 'Notifications',
                url: '/notifications',
                icon: 'assets/drawer_icons/notifications.png',
                open: false
            },
            {
                title: 'Notice',
                url: '/notice',
                icon: 'assets/drawer_icons/notice.png',
                open: false
            },
            {
                title: 'Other Activities',
                url: '/otheractivities',
                icon: 'assets/drawer_icons/service.png',
                open: false
            },
            {
                title: 'Services',
                url: '/services',
                icon: 'assets/drawer_icons/service.png',
                open: false
            },
            {
                title: 'Medicines',
                url: '/medicines',
                icon: 'assets/drawer_icons/medicine.png',
                open: false
            },
            {
                title: 'Offers',
                url: '/offers',
                icon: 'assets/drawer_icons/offer.png',
                open: false
            },
            {
                title: 'Rules & Regulations',
                url: '/rules',
                icon: 'assets/drawer_icons/rules.png',
                open: false
            },
            {
                title: 'Schedule',
                url: '/schedule',
                icon: 'assets/drawer_icons/schedule.png',
                open: false
            },
            {
                title: 'Yearly Events',
                url: '/yearlyevents',
                icon: 'assets/drawer_icons/yearly_events.png',
                open: false
            },
        ];
        this.notification = false;
        this.initializeApp();
        this.backButtonEvent();
    }
    AppComponent.prototype.ngOnInit = function () {
        var _this = this;
        console.log('hi');
        this.storage.get('userType').then(function (data) {
            console.log('userType', data);
            _this.userType = data;
        });
        this.apiService.userData.subscribe(function (data) {
            console.log('userData', data.data);
            _this.profile = JSON.parse(data.data);
        });
        this.apiService.userTypeData.subscribe(function (data) {
            console.log('1');
            if (data) {
                console.log('2');
                console.log('userTypeData', data);
                _this.userType = data;
            }
            else {
                console.log('3');
            }
        });
    };
    AppComponent.prototype.initializeApp = function () {
        var _this = this;
        this.platform.ready().then(function () {
            _this.statusBar.styleDefault();
            _this.statusBar.backgroundColorByHexString('fdd653');
            _this.splashScreen.hide();
            _this.checkLoginStatus();
            _this.fcm.getInitialPushPayload().then(function (data) {
                console.log('initial', data);
                if (data) {
                    if (data.wasTapped) {
                        _this.notification = true;
                        _this.body = data.body;
                        _this.title = data.title;
                    }
                }
            });
            setTimeout(function () {
                _this.fcm.onNotification().subscribe(function (data) {
                    if (data.wasTapped) {
                        console.log('Received in background');
                    }
                    else {
                        console.log('Received in foreground');
                        _this.presentAlert(data.body, data.title);
                    }
                });
            }, 100);
            _this.fcm.createNotificationChannel({
                id: "channel_id_2",
                name: "channel_id_2",
                importance: "high"
            });
        });
    };
    AppComponent.prototype.goToEnquiryForm = function () {
        this.router.navigate(['addinquiry']);
    };
    AppComponent.prototype.goToAdmissionForm = function () {
        this.router.navigate(['addadmission']);
    };
    AppComponent.prototype.goToAboutUs = function () {
        this.router.navigate(['aboutus']);
    };
    AppComponent.prototype.goToGallery = function () {
        this.router.navigate(['gallery']);
    };
    AppComponent.prototype.goToFeeStructure = function () {
        this.router.navigate(['feestructure']);
    };
    AppComponent.prototype.goToPaymentHistory = function () {
        this.router.navigate(['paymenthistory']);
    };
    AppComponent.prototype.goToCourses = function () {
        this.router.navigate(['courses']);
    };
    AppComponent.prototype.logout = function () {
        this.storage.remove('active');
        this.storage.remove('type');
        this.storage.remove('cocoon_data');
        this.storage.remove('user');
        this.storage.remove('userType');
        this.storage.clear();
        this.menu.close();
        this.router.navigate(['home']);
    };
    AppComponent.prototype.ionViewDidEnter = function () {
        var _this = this;
        this.storage.get('type').then(function (data) {
            console.log('2', data);
            _this.type = data;
        });
        this.storage.get('userType').then(function (data) {
            console.log('userType', data);
            _this.userType = data;
        });
    };
    AppComponent.prototype.checkLoginStatus = function () {
        var _this = this;
        this.storage.get('user').then(function (userData) {
            if (userData) {
                if (_this.notification) {
                    _this.router.navigate(['notifications']);
                }
                else {
                    var user = JSON.parse(userData);
                    _this.storage.get('userType').then(function (userType) {
                        _this.apiService.userDetails(user.id, userType).then(function (data) {
                            var userDetails = JSON.parse(data.data);
                            if (userDetails.status == 'Active' && userDetails.Approve_status == 'Active') {
                                _this.router.navigate(['quicktour']);
                                _this.storage.set('active', true);
                                _this.isActive = true;
                            }
                            else {
                                if (userType == 'Daycare') {
                                    _this.storage.set('active', false);
                                    _this.isActive = false;
                                    _this.router.navigate(['addadmission']);
                                }
                                else {
                                    _this.isActive = false;
                                    _this.storage.set('active', false);
                                    _this.router.navigate(['preschoolform']);
                                }
                            }
                        });
                    });
                    _this.profile = JSON.parse(userData);
                }
            }
            else {
                _this.router.navigate(['home']);
            }
        });
    };
    AppComponent.prototype.toggleSideMenu = function () {
        this.isNestedSideMenu = !this.isNestedSideMenu;
    };
    AppComponent.prototype.presentAlert = function (body, title) {
        return __awaiter(this, void 0, void 0, function () {
            var alert;
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.alertController.create({
                            header: title,
                            message: body,
                            mode: 'ios',
                            backdropDismiss: false,
                            buttons: [{
                                    text: 'OK',
                                    handler: function () {
                                        _this.router.navigate(['notifications']);
                                    }
                                }]
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
    AppComponent.prototype.backButtonEvent = function () {
        var _this = this;
        this.platform.backButton.subscribeWithPriority(10, function () {
            _this.routerOutlets.forEach(function (outlet) { return __awaiter(_this, void 0, void 0, function () {
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0:
                            if (!(this.router.url === '/quicktour' || this.router.url == '/home')) return [3 /*break*/, 1];
                            this.appMinimize.minimize();
                            return [3 /*break*/, 7];
                        case 1:
                            if (!(this.router.url === '/addadmission' || this.router.url == '/preschoolform' || this.router.url == '/preschoolotherform' || this.router.url == '/childotherinfotwo')) return [3 /*break*/, 5];
                            if (!this.isActive) return [3 /*break*/, 3];
                            return [4 /*yield*/, this.location.back()];
                        case 2:
                            _a.sent();
                            return [3 /*break*/, 4];
                        case 3:
                            this.apiService.presentToast('Please wait for your registration approval', 3000);
                            _a.label = 4;
                        case 4: return [3 /*break*/, 7];
                        case 5: return [4 /*yield*/, this.location.back()];
                        case 6:
                            _a.sent();
                            _a.label = 7;
                        case 7: return [2 /*return*/];
                    }
                });
            }); });
        });
    };
    __decorate([
        core_1.ViewChildren(angular_1.IonRouterOutlet)
    ], AppComponent.prototype, "routerOutlets");
    AppComponent = __decorate([
        core_1.Component({
            selector: 'app-root',
            templateUrl: 'app.component.html',
            styleUrls: ['app.component.scss']
        })
    ], AppComponent);
    return AppComponent;
}());
exports.AppComponent = AppComponent;
