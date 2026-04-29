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
exports.ApiService = void 0;
var core_1 = require("@angular/core");
var rxjs_1 = require("rxjs");
var ApiService = /** @class */ (function () {
    function ApiService(http, toastCtrl, loadingController, httpclient) {
        this.http = http;
        this.toastCtrl = toastCtrl;
        this.loadingController = loadingController;
        this.httpclient = httpclient;
        this.tran_please_wait = 'Please Wait';
        this.baseUrl = 'https://dynamicvishva.in/Prangan_New/cocoon_api/api';
        this.userData = new rxjs_1.Subject();
        this.userTypeData = new rxjs_1.Subject();
    }
    ApiService.prototype.presentToast = function (message, duration) {
        return __awaiter(this, void 0, void 0, function () {
            var toast;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.toastCtrl.create({
                            message: message,
                            duration: duration,
                            position: 'bottom',
                            mode: 'ios',
                            color: 'dark'
                        })];
                    case 1:
                        toast = _a.sent();
                        toast.present();
                        return [2 /*return*/];
                }
            });
        });
    };
    ApiService.prototype.login = function (data) {
        return this.http.post(this.baseUrl + "/login.php", {}, data);
    };
    ApiService.prototype.send_otp = function () {
        return this.http.post(this.baseUrl + "/sendOTP", {}, {});
    };
    ApiService.prototype.verify_otp = function (username, code) {
        return this.http.post(this.baseUrl + "/validate_otp.php", {}, { 'Username': username, 'Otp': code.toString() });
    };
    ApiService.prototype.userDetails = function (id, class_name) {
        return this.http.post(this.baseUrl + "/user_details.php", {}, { 'Userid': id, 'Class': class_name });
    };
    ApiService.prototype.daycareRegistration = function (body) {
        return this.httpclient.post(this.baseUrl + '/daycare_reg.php', body, {});
    };
    ApiService.prototype.daycareRegistrationStep2 = function (body) {
        return this.httpclient.post(this.baseUrl + '/add_daycare_step2.php', body, {});
    };
    ApiService.prototype.daycareRegistrationStep3 = function (body) {
        return this.httpclient.post(this.baseUrl + '/add_daycare_step3.php', body, {});
    };
    ApiService.prototype.daycareRegistrationStep4 = function (body) {
        return this.httpclient.post(this.baseUrl + '/add_daycare_step4.php', body, {});
    };
    ApiService.prototype.getBranches = function () {
        return this.http.post(this.baseUrl + "/fetch_branch.php", {}, {});
    };
    ApiService.prototype.fetchDayCareStep2 = function (id) {
        return this.http.post(this.baseUrl + "/fetch_daycare_step2.php", {}, { 'Userid': id });
    };
    ApiService.prototype.fetchDayCareStep3 = function (id) {
        return this.http.post(this.baseUrl + "/fetch_daycare_step3.php", {}, { 'Userid': id });
    };
    ApiService.prototype.fetchDayCareStep4 = function (id) {
        return this.http.post(this.baseUrl + "/fetch_daycare_step4.php", {}, { 'Userid': id });
    };
    ApiService.prototype.fetchAllEvents = function () {
        return this.http.post(this.baseUrl + "/all_event.php", {}, {});
    };
    ApiService.prototype.fetchBranchEvents = function (Classtype, Type, Branchid) {
        return this.http.post(this.baseUrl + "/event.php", {}, { 'Classtype': Classtype, 'Type': Type, 'Branchid': Branchid });
    };
    ApiService.prototype.fetchBranchHoliday = function (Classtype, Type, Branchid) {
        return this.http.post(this.baseUrl + "/holiday.php", {}, { 'Classtype': Classtype, 'Type': Type, 'Branchid': Branchid });
    };
    ApiService.prototype.fetchAllAlbums = function () {
        return this.http.post(this.baseUrl + "/all_album.php", {}, {});
    };
    ApiService.prototype.fetchAllBranchFeeStructure = function () {
        return this.http.post(this.baseUrl + "/fetch_all_fees_stucture.php", {}, {});
    };
    ApiService.prototype.fetchBranchFeeStructure = function (Branchid) {
        return this.http.post(this.baseUrl + "/branch_fees_stucture.php", {}, { 'Branchid': Branchid });
    };
    ApiService.prototype.fetchAlbumDetails = function (Albumid) {
        return this.http.post(this.baseUrl + "/album_image.php", {}, { 'Albumid': Albumid });
    };
    ApiService.prototype.fetchBranchAlbum = function (Classtype, Type, Branchid) {
        return this.http.post(this.baseUrl + "/album.php", {}, { 'Classtype': Classtype, 'Type': Type, 'Branchid': Branchid });
    };
    ApiService.prototype.preschoolRegStep1 = function (body) {
        return this.httpclient.post(this.baseUrl + '/preschool_reg.php', body, {});
    };
    ApiService.prototype.preschoolRegStep2 = function (body) {
        return this.httpclient.post(this.baseUrl + '/preschool_step2.php', body, {});
    };
    ApiService.prototype.preschoolRegStep3 = function (body) {
        return this.httpclient.post(this.baseUrl + '/preschool_step3.php', body, {});
    };
    ApiService.prototype.fetchPreschoolRegStep2 = function (id) {
        return this.http.post(this.baseUrl + "/fetch_preschool_step2.php", {}, { 'Userid': id });
    };
    ApiService.prototype.fetchPreschoolRegStep3 = function (id) {
        return this.http.post(this.baseUrl + "/fetch_preschool_step3.php", {}, { 'Userid': id });
    };
    ApiService.prototype.updatePreschoolRegStep1 = function (formdata) {
        return this.httpclient.post(this.baseUrl + "/update_preschool_step1.php", formdata, {});
    };
    ApiService.prototype.updatePreschoolRegStep2 = function (formdata) {
        return this.httpclient.post(this.baseUrl + "/update_preschool_step2.php", formdata, {});
    };
    ApiService.prototype.updatePreschoolRegStep3 = function (formdata) {
        return this.httpclient.post(this.baseUrl + "/update_preschool_step3.php", formdata, {});
    };
    ApiService.prototype.updateDaycareRegStep1 = function (formdata) {
        return this.httpclient.post(this.baseUrl + "/update_daycare_step1.php", formdata, {});
    };
    ApiService.prototype.updateDaycareRegStep2 = function (formdata) {
        return this.httpclient.post(this.baseUrl + "/update_daycare_step2.php", formdata, {});
    };
    ApiService.prototype.updateDaycareRegStep3 = function (formdata) {
        return this.httpclient.post(this.baseUrl + "/update_daycare_step3.php", formdata, {});
    };
    ApiService.prototype.updateDaycareRegStep4 = function (formdata) {
        return this.httpclient.post(this.baseUrl + "/update_daycare_step4.php", formdata, {});
    };
    ApiService.prototype.userFMS = function (body) {
        this.http.setDataSerializer('json');
        return this.http.post(this.baseUrl + '/user_fms_key.php', body, {});
    };
    ApiService.prototype.addEnquiry = function (body) {
        return this.http.post(this.baseUrl + '/add_enquiry.php', body, {});
    };
    ApiService.prototype.setUserData = function (userData, class_type) {
        var _this = this;
        console.log('userData service', userData, class_type);
        var userId = JSON.parse(userData);
        this.userDetails(userId.id, class_type).then(function (data) {
            console.log('userDetails', data, class_type);
            _this.userData.next(data);
            _this.userTypeData.next(class_type);
        });
    };
    ApiService.prototype.fetchFeeColumn = function () {
        return this.http.post(this.baseUrl + "/fetch_fees_columns.php", {}, {});
    };
    ApiService.prototype.fetchFeeRow = function () {
        return this.http.post(this.baseUrl + "/fetch_fees_rows.php", {}, {});
    };
    ApiService.prototype.fetchFeeStructure = function (Rowid, Branchid) {
        return this.http.post(this.baseUrl + "/fetch_fees_structure.php", {}, { 'Rowid': Rowid, 'Branchid': Branchid });
    };
    ApiService.prototype.fetchUserAttendance = function (Type, Userid) {
        return this.http.post(this.baseUrl + "/fetch_user_attendence.php", {}, { 'Type': Type, 'Userid': Userid });
    };
    ApiService.prototype.fetchNotifications = function (Type, Userid) {
        return this.http.post(this.baseUrl + "/fetch_notification.php", {}, { 'Type': Type, 'Userid': Userid });
    };
    ApiService.prototype.fetchFeesDetails = function (Userid) {
        return this.http.post(this.baseUrl + "/fetch_fees_details.php", {}, { 'Type': 'Preschool', 'Userid': Userid });
    };
    ApiService.prototype.fetchInstallation = function () {
        return this.http.post(this.baseUrl + "/installation.php", {}, {});
    };
    ApiService.prototype.fetchDaycare = function (Userid) {
        return this.http.post(this.baseUrl + "/daycare_fee_details.php", {}, { 'Type': 'Daycare', 'Userid': Userid });
    };
    ApiService.prototype.onlinePayment = function (body) {
        return this.http.post(this.baseUrl + "/online_payment.php", body, {});
    };
    ApiService.prototype.verifyonlinePayment = function (body) {
        return this.http.post(this.baseUrl + "/varify_online_payment.php", body, {});
    };
    ApiService.prototype.paymentHistory = function (Type, Userid) {
        return this.http.post(this.baseUrl + "/user_order_history.php", {}, { 'Type': Type, 'Userid': Userid });
    };
    ApiService = __decorate([
        core_1.Injectable({
            providedIn: 'root'
        })
    ], ApiService);
    return ApiService;
}());
exports.ApiService = ApiService;
