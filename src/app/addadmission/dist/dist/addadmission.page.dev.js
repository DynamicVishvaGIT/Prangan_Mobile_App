"use strict";

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

var __decorate = void 0 && (void 0).__decorate || function (decorators, target, key, desc) {
  var c = arguments.length,
      r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
      d;
  if ((typeof Reflect === "undefined" ? "undefined" : _typeof(Reflect)) === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) {
    if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
  }
  return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var __awaiter = void 0 && (void 0).__awaiter || function (thisArg, _arguments, P, generator) {
  function adopt(value) {
    return value instanceof P ? value : new P(function (resolve) {
      resolve(value);
    });
  }

  return new (P || (P = Promise))(function (resolve, reject) {
    function fulfilled(value) {
      try {
        step(generator.next(value));
      } catch (e) {
        reject(e);
      }
    }

    function rejected(value) {
      try {
        step(generator["throw"](value));
      } catch (e) {
        reject(e);
      }
    }

    function step(result) {
      result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected);
    }

    step((generator = generator.apply(thisArg, _arguments || [])).next());
  });
};

var __generator = void 0 && (void 0).__generator || function (thisArg, body) {
  var _ = {
    label: 0,
    sent: function sent() {
      if (t[0] & 1) throw t[1];
      return t[1];
    },
    trys: [],
    ops: []
  },
      f,
      y,
      t,
      g;
  return g = {
    next: verb(0),
    "throw": verb(1),
    "return": verb(2)
  }, typeof Symbol === "function" && (g[Symbol.iterator] = function () {
    return this;
  }), g;

  function verb(n) {
    return function (v) {
      return step([n, v]);
    };
  }

  function step(op) {
    if (f) throw new TypeError("Generator is already executing.");

    while (_) {
      try {
        if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
        if (y = 0, t) op = [op[0] & 2, t.value];

        switch (op[0]) {
          case 0:
          case 1:
            t = op;
            break;

          case 4:
            _.label++;
            return {
              value: op[1],
              done: false
            };

          case 5:
            _.label++;
            y = op[1];
            op = [0];
            continue;

          case 7:
            op = _.ops.pop();

            _.trys.pop();

            continue;

          default:
            if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) {
              _ = 0;
              continue;
            }

            if (op[0] === 3 && (!t || op[1] > t[0] && op[1] < t[3])) {
              _.label = op[1];
              break;
            }

            if (op[0] === 6 && _.label < t[1]) {
              _.label = t[1];
              t = op;
              break;
            }

            if (t && _.label < t[2]) {
              _.label = t[2];

              _.ops.push(op);

              break;
            }

            if (t[2]) _.ops.pop();

            _.trys.pop();

            continue;
        }

        op = body.call(thisArg, _);
      } catch (e) {
        op = [6, e];
        y = 0;
      } finally {
        f = t = 0;
      }
    }

    if (op[0] & 5) throw op[1];
    return {
      value: op[0] ? op[1] : void 0,
      done: true
    };
  }
};

exports.__esModule = true;
exports.AddadmissionPage = void 0;

var forms_1 = require("@angular/forms");

var core_1 = require("@angular/core");

var angular_1 = require("@ionic/angular");

var AddadmissionPage =
/** @class */
function () {
  function AddadmissionPage(storage, apiService, actionSheetController, file, camera, cf, alertController, router, loadingController, location) {
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
    this.step = 'step-1';
    this.value = 'personal_info';
    this.isOtherInfoEnabled = false;
    this.isImagesEnabled = false;
    this.isLoggedIn = false;
    this.accordion_expanded = false;
  }

  AddadmissionPage.prototype.ngOnInit = function () {
    this.dayCareRegForm = new forms_1.FormGroup({
      branch_id: new forms_1.FormControl('', [forms_1.Validators.required]),
      program: new forms_1.FormControl('', [forms_1.Validators.required, forms_1.Validators.pattern(/^[a-zA-z ]+$/)]),
      timings: new forms_1.FormControl('', [forms_1.Validators.required]),
      child_name: new forms_1.FormControl('', [forms_1.Validators.required, forms_1.Validators.pattern(/^[a-zA-Z\. ]+$/)]),
      pet_name: new forms_1.FormControl('', [forms_1.Validators.required, forms_1.Validators.pattern(/^[a-zA-z ]+$/)]),
      gender: new forms_1.FormControl('', [forms_1.Validators.required]),
      d_o_b: new forms_1.FormControl('', [forms_1.Validators.required]),
      dob_words: new forms_1.FormControl('', [forms_1.Validators.required]),
      figures: new forms_1.FormControl('', [forms_1.Validators.required]),
      mobile_1: new forms_1.FormControl('', [forms_1.Validators.required, forms_1.Validators.maxLength(10), forms_1.Validators.minLength(10), forms_1.Validators.pattern(/^[0-9]{10}$/)]),
      emailid: new forms_1.FormControl('', [forms_1.Validators.required, forms_1.Validators.pattern(/^(?!\_)(?!_*_$)([0-9A-Za-z]+\.)*[a-zA-Z0-9_+-]+@([\w+-]+\.)*[\w+-]+\.[a-zA-Z]{2,4}$/)]),
      address: new forms_1.FormControl('', [forms_1.Validators.required]),
      landmark: new forms_1.FormControl('', [forms_1.Validators.required]),
      mother_qua: new forms_1.FormControl('', [forms_1.Validators.required]),
      mother_hobbies: new forms_1.FormControl('', [forms_1.Validators.required, forms_1.Validators.pattern(/^[a-zA-z ,]+$/)]),
      mother_work_place: new forms_1.FormControl('', [forms_1.Validators.required]),
      mother_work_phone_num: new forms_1.FormControl('', [forms_1.Validators.required, forms_1.Validators.pattern(/^\d{5}([- ]*)\d{6}$/)]),
      mother_work_mob_num: new forms_1.FormControl('', [forms_1.Validators.required, forms_1.Validators.maxLength(10), forms_1.Validators.minLength(10), forms_1.Validators.pattern(/^[0-9]{10}$/)]),
      father_qualification: new forms_1.FormControl('', [forms_1.Validators.required]),
      father_hobbies: new forms_1.FormControl('', [forms_1.Validators.required, forms_1.Validators.pattern(/^[a-zA-z ,]+$/)]),
      father_work_place: new forms_1.FormControl('', [forms_1.Validators.required]),
      father_work_phone_num: new forms_1.FormControl('', [forms_1.Validators.required, forms_1.Validators.pattern(/^\d{5}([- ]*)\d{6}$/)]),
      father_work_mob_num: new forms_1.FormControl('', [forms_1.Validators.required, forms_1.Validators.maxLength(10), forms_1.Validators.minLength(10), forms_1.Validators.pattern(/^[0-9]{10}$/)]),
      sibling_name: new forms_1.FormControl('', [forms_1.Validators.required, forms_1.Validators.pattern(/^[a-zA-Z\. ]+$/)]),
      sibling_age: new forms_1.FormControl('', [forms_1.Validators.required]),
      sibling_school: new forms_1.FormControl('', [forms_1.Validators.required]),
      emg_name: new forms_1.FormControl('', [forms_1.Validators.required, forms_1.Validators.pattern(/^[a-zA-Z\. ]+$/)]),
      emg_contact_rel: new forms_1.FormControl('', [forms_1.Validators.required, forms_1.Validators.pattern(/^[a-zA-z ]+$/)]),
      emg_contact_phone: new forms_1.FormControl('', [forms_1.Validators.required, forms_1.Validators.pattern(/^\d{5}([- ]*)\d{6}$/)]),
      household_name: new forms_1.FormControl('', [forms_1.Validators.required, forms_1.Validators.pattern(/^[a-zA-Z\. ]+$/)]),
      household_rel: new forms_1.FormControl('', [forms_1.Validators.required, forms_1.Validators.pattern(/^[a-zA-z ]+$/)]),
      household_num: new forms_1.FormControl('', [forms_1.Validators.required, forms_1.Validators.pattern(/^\d{5}([- ]*)\d{6}$/)])
    });
  };

  AddadmissionPage.prototype.toggleForm = function (stepToActivate) {
    this.step = 'step-' + stepToActivate;
  };

  AddadmissionPage.prototype.presentLoading = function () {
    return __awaiter(this, void 0, void 0, function () {
      var loading, _a, role, data;

      return __generator(this, function (_b) {
        switch (_b.label) {
          case 0:
            return [4
            /*yield*/
            , this.loadingController.create({
              message: 'Please wait...',
              mode: 'ios',
              backdropDismiss: false
            })];

          case 1:
            loading = _b.sent();
            return [2
            /*return*/
            , loading.present()];

          case 2:
            _a = _b.sent(), role = _a.role, data = _a.data;
            console.log('Loading dismissed!');
            return [2
            /*return*/
            ];
        }
      });
    });
  };

  AddadmissionPage.prototype.segmentChanged = function (ev) {
    this.value = ev.detail.value;
    console.log('Segment changed', ev);
  };

  AddadmissionPage.prototype.goToForm = function (value) {
    if (value === 'other_info') {
      if (this.branch_id.valid == false) {
        this.apiService.presentToast('Please select center', 2000);
      }

      if (this.program.valid == false) {
        this.apiService.presentToast('Please enter valid program', 2000);
      } else if (this.timings.valid == false) {
        this.apiService.presentToast('Please enter valid timing', 2000);
      } else if (this.child_name.valid == false) {
        this.apiService.presentToast('Please enter valid child name', 2000);
      } else if (this.pet_name.valid == false) {
        this.apiService.presentToast('Please enter valid pet name', 2000);
      } else if (this.gender.valid == false) {
        this.apiService.presentToast('Please select gender', 2000);
      } else if (this.d_o_b.valid == false) {
        this.apiService.presentToast('Please enter valid date of birth', 2000);
      } else if (this.dob_words.valid == false) {
        this.apiService.presentToast('Please enter valid date of birth in words', 2000);
      } else if (this.figures.valid == false) {
        this.apiService.presentToast('Please enter valid date of birth in figures', 2000);
      } else if (this.mobile_1.valid == false) {
        this.apiService.presentToast('Please enter valid residence phone number', 2000);
      } else if (this.emailid.valid == false) {
        this.apiService.presentToast('Please enter valid email', 2000);
      } else if (this.address.valid == false) {
        this.apiService.presentToast('Please enter valid address', 2000);
      } else if (this.landmark.valid == false) {
        this.apiService.presentToast('Please enter valid landmark', 2000);
      } else if (this.mother_qua.valid == false) {
        this.apiService.presentToast("Please enter valid mother's qualification", 2000);
      } else if (this.mother_hobbies.valid == false) {
        this.apiService.presentToast("Please enter valid mother's hobbies", 2000);
      } else if (this.mother_work_place.valid == false) {
        this.apiService.presentToast("Please enter valid mother's work place", 2000);
      } else if (this.mother_work_phone_num.valid == false) {
        this.apiService.presentToast("Please enter valid mother's work phone number", 2000);
      } else if (this.mother_work_mob_num.valid == false) {
        this.apiService.presentToast("Please enter valid mother's work mobile number", 2000);
      } else if (this.father_qualification.valid == false) {
        this.apiService.presentToast("Please enter valid father's qualification", 2000);
      } else if (this.father_hobbies.valid == false) {
        this.apiService.presentToast("Please enter valid father's hobbies", 2000);
      } else if (this.father_work_place.valid == false) {
        this.apiService.presentToast("Please enter valid father's work place", 2000);
      } else if (this.father_work_phone_num.valid == false) {
        this.apiService.presentToast("Please enter valid father's work phone number", 2000);
      } else if (this.father_work_mob_num.valid == false) {
        this.apiService.presentToast("Please enter valid father's work mobile number", 2000);
      } else {
        this.value = value;
        this.isOtherInfoEnabled = true;
      }
    } else if (value === 'images') {
      if (this.sibling_name.valid == false) {
        this.apiService.presentToast('Please enter valid sibling name', 2000);
      } else if (this.sibling_age.valid == false) {
        this.apiService.presentToast("Please enter valid sibling's age", 2000);
      } else if (this.sibling_school.valid == false) {
        this.apiService.presentToast("Please enter valid sibling's school", 2000);
      } else if (this.emg_name.valid == false) {
        this.apiService.presentToast("Please enter valid emergency contact's name", 2000);
      } else if (this.emg_contact_rel.valid == false) {
        this.apiService.presentToast("Please enter valid emergency contact's relation", 2000);
      } else if (this.emg_contact_phone.valid == false) {
        this.apiService.presentToast("Please enter valid emergency contact's phone number", 2000);
      } else if (this.household_name.valid == false) {
        this.apiService.presentToast("Please enter valid name of other member's of household ", 2000);
      } else if (this.household_rel.valid == false) {
        this.apiService.presentToast("Please enter valid relation of other member's of household", 2000);
      } else if (this.household_num.valid == false) {
        this.apiService.presentToast("Please enter valid number of other member's of household", 2000);
      } else {
        this.isImagesEnabled = true;
        this.value = value;
      }
    }

    this.myContent.scrollToTop(700);
  };

  AddadmissionPage.prototype.onSubmit = function (body) {
    var _this = this;

    this.presentLoading();
    console.log(body);
    console.log('body', body);
    var formData = new FormData();
    formData.append('branch_id', body['branch_id']);
    formData.append('program', body['program']);
    formData.append('timings', body['timings']);
    formData.append('child_name', body['child_name']);
    formData.append('pet_name', body['pet_name']);
    formData.append('gender', body['gender']);
    formData.append('d_o_b', body['d_o_b']);
    formData.append('dob_words', body['dob_words']);
    formData.append('figures', body['figures']);
    formData.append('mobile_1', body['mobile_1']);
    formData.append('emailid', body['emailid']);
    formData.append('address', body['address']);
    formData.append('landmark', body['landmark']);
    formData.append('mother_qua', body['mother_qua']);
    formData.append('mother_hobbies', body['mother_hobbies']);
    formData.append('mother_work_place', body['mother_work_place']);
    formData.append('mother_work_phone_num', body['mother_work_phone_num']);
    formData.append('mother_work_mob_num', body['mother_work_mob_num']);
    formData.append('father_qualification', body['father_qualification']);
    formData.append('father_hobbies', body['father_hobbies']);
    formData.append('father_work_place', body['father_work_place']);
    formData.append('father_work_phone_num', body['father_work_phone_num']);
    formData.append('father_work_mob_num', body['father_work_mob_num']);
    formData.append('sibling_name', body['sibling_name']);
    formData.append('sibling_age', body['sibling_age']);
    formData.append('sibling_school', body['sibling_school']);
    formData.append('emg_name', body['emg_name']);
    formData.append('emg_contact_rel', body['emg_contact_rel']);
    formData.append('emg_contact_phone', body['emg_contact_phone']);
    formData.append('household_name', body['household_name']);
    formData.append('household_rel', body['household_rel']);
    formData.append('household_num', body['household_num']);

    if (this.isDataPresent) {
      formData.append('id', this.id);

      if (this.childimgBlob) {
        formData.append('image[]', this.childimgBlob, this.child_file_name);
      } else {
        formData.append('image[]', '');
      }

      if (this.motherimgBlob) {
        formData.append('image[]', this.motherimgBlob, this.mother_file_name);
      } else {
        formData.append('image[]', '');
      }

      if (this.fatherimgBlob) {
        formData.append('image[]', this.fatherimgBlob, this.father_file_name);
      } else {
        formData.append('image[]', '');
      }

      if (this.guardianimgBlob) {
        formData.append('image[]', this.guardianimgBlob, this.guardian_file_name);
      } else {
        formData.append('image[]', '');
      }

      this.apiService.updateDaycareRegStep1(formData).subscribe(function (data) {
        console.log('data', data);

        _this.loadingController.dismiss();

        _this.presentAlert('Daycare registration updated successfully');

        console.log(data);
      }, function (err) {
        console.log(err);

        _this.loadingController.dismiss();

        _this.apiService.presentToast(err.error, 2000);
      });
    } else {
      if (this.childimgBlob) {
        formData.append('image[]', this.childimgBlob, this.child_file_name);
      }

      if (this.motherimgBlob) {
        formData.append('image[]', this.motherimgBlob, this.mother_file_name);
      }

      if (this.fatherimgBlob) {
        formData.append('image[]', this.fatherimgBlob, this.father_file_name);
      }

      if (this.guardianimgBlob) {
        formData.append('image[]', this.guardianimgBlob, this.guardian_file_name);
      }

      this.apiService.daycareRegistration(formData).subscribe(function (data) {
        console.log('data', data);

        _this.loadingController.dismiss();

        _this.presentAlert('Daycare registration submitted successfully');

        console.log(data);
      }, function (err) {
        console.log(err);

        _this.loadingController.dismiss();

        _this.apiService.presentToast(err.error, 2000);
      });
    }
  };

  AddadmissionPage.prototype.ionViewDidEnter = function () {
    var _this = this;

    this.presentLoading().then(function () {
      _this.storage.get('user').then(function (data) {
        if (data) {
          _this.isLoggedIn = true;
          var user = JSON.parse(data);
          _this.userid = user.userid;

          _this.storage.get('userType').then(function (userType) {
            _this.apiService.userDetails(user.id, userType).then(function (data) {
              console.log('fetchDaycareStepOne', data.data);
              _this.fetchDaycareStepOne = JSON.parse(data.data);

              if (_this.fetchDaycareStepOne) {
                _this.id = _this.fetchDaycareStepOne.id;

                _this.dayCareRegForm.patchValue({
                  branch_id: _this.fetchDaycareStepOne.branch_id,
                  program: _this.fetchDaycareStepOne.program,
                  timings: _this.fetchDaycareStepOne.timings,
                  child_name: _this.fetchDaycareStepOne.child_name,
                  pet_name: _this.fetchDaycareStepOne.pet_name,
                  gender: _this.fetchDaycareStepOne.gender,
                  d_o_b: new Date(_this.fetchDaycareStepOne.dob).toISOString(),
                  dob_words: _this.fetchDaycareStepOne.dob_words,
                  figures: _this.fetchDaycareStepOne.figures,
                  mobile_1: _this.fetchDaycareStepOne.home_phone,
                  emailid: _this.fetchDaycareStepOne.emailid,
                  address: _this.fetchDaycareStepOne.address,
                  landmark: _this.fetchDaycareStepOne.landmark,
                  mother_qua: _this.fetchDaycareStepOne.mother_qualification,
                  mother_hobbies: _this.fetchDaycareStepOne.mother_hobbies,
                  mother_work_place: _this.fetchDaycareStepOne.mother_work_place,
                  mother_work_phone_num: _this.fetchDaycareStepOne.mother_work_phone,
                  mother_work_mob_num: _this.fetchDaycareStepOne.mother_mobile_number,
                  father_qualification: _this.fetchDaycareStepOne.father_qualifiaction,
                  father_hobbies: _this.fetchDaycareStepOne.father_hobbies,
                  father_work_place: _this.fetchDaycareStepOne.father_work_place,
                  father_work_phone_num: _this.fetchDaycareStepOne.father_work_phone,
                  father_work_mob_num: _this.fetchDaycareStepOne.father_mobile_number,
                  sibling_name: _this.fetchDaycareStepOne.child_name1,
                  sibling_age: _this.fetchDaycareStepOne.child_age1,
                  sibling_school: _this.fetchDaycareStepOne.child_school1,
                  emg_name: _this.fetchDaycareStepOne.emg_name1,
                  emg_contact_rel: _this.fetchDaycareStepOne.emg_relationship1,
                  emg_contact_phone: _this.fetchDaycareStepOne.emg_mobile1,
                  household_name: _this.fetchDaycareStepOne.other_name1,
                  household_rel: _this.fetchDaycareStepOne.other_relationship1,
                  household_num: _this.fetchDaycareStepOne.other_mobile1
                });

                _this.childimg = _this.fetchDaycareStepOne.child_img;
                _this.motherimg = _this.fetchDaycareStepOne.mother_img;
                _this.fatherimg = _this.fetchDaycareStepOne.father_img;
                _this.guardianimg = _this.fetchDaycareStepOne.father_img;
                _this.isDataPresent = true;

                _this.loadingController.dismiss();
              } else {
                _this.isDataPresent = false;

                _this.loadingController.dismiss();
              }
            });
          });
        } else {
          _this.loadingController.dismiss();
        }
      });

      _this.apiService.getBranches().then(function (data) {
        _this.branches = JSON.parse(data.data);
      });
    });
  };

  Object.defineProperty(AddadmissionPage.prototype, "branch_id", {
    get: function get() {
      return this.dayCareRegForm.get('branch_id');
    },
    enumerable: false,
    configurable: true
  });
  Object.defineProperty(AddadmissionPage.prototype, "program", {
    get: function get() {
      return this.dayCareRegForm.get('program');
    },
    enumerable: false,
    configurable: true
  });
  Object.defineProperty(AddadmissionPage.prototype, "timings", {
    get: function get() {
      return this.dayCareRegForm.get('timings');
    },
    enumerable: false,
    configurable: true
  });
  Object.defineProperty(AddadmissionPage.prototype, "child_name", {
    get: function get() {
      return this.dayCareRegForm.get('child_name');
    },
    enumerable: false,
    configurable: true
  });
  Object.defineProperty(AddadmissionPage.prototype, "pet_name", {
    get: function get() {
      return this.dayCareRegForm.get('pet_name');
    },
    enumerable: false,
    configurable: true
  });
  Object.defineProperty(AddadmissionPage.prototype, "gender", {
    get: function get() {
      return this.dayCareRegForm.get('gender');
    },
    enumerable: false,
    configurable: true
  });
  Object.defineProperty(AddadmissionPage.prototype, "d_o_b", {
    get: function get() {
      return this.dayCareRegForm.get('d_o_b');
    },
    enumerable: false,
    configurable: true
  });
  Object.defineProperty(AddadmissionPage.prototype, "dob_words", {
    get: function get() {
      return this.dayCareRegForm.get('dob_words');
    },
    enumerable: false,
    configurable: true
  });
  Object.defineProperty(AddadmissionPage.prototype, "figures", {
    get: function get() {
      return this.dayCareRegForm.get('figures');
    },
    enumerable: false,
    configurable: true
  });
  Object.defineProperty(AddadmissionPage.prototype, "mobile_1", {
    get: function get() {
      return this.dayCareRegForm.get('mobile_1');
    },
    enumerable: false,
    configurable: true
  });
  Object.defineProperty(AddadmissionPage.prototype, "emailid", {
    get: function get() {
      return this.dayCareRegForm.get('emailid');
    },
    enumerable: false,
    configurable: true
  });
  Object.defineProperty(AddadmissionPage.prototype, "address", {
    get: function get() {
      return this.dayCareRegForm.get('address');
    },
    enumerable: false,
    configurable: true
  });
  Object.defineProperty(AddadmissionPage.prototype, "landmark", {
    get: function get() {
      return this.dayCareRegForm.get('landmark');
    },
    enumerable: false,
    configurable: true
  });
  Object.defineProperty(AddadmissionPage.prototype, "mother_qua", {
    get: function get() {
      return this.dayCareRegForm.get('mother_qua');
    },
    enumerable: false,
    configurable: true
  });
  Object.defineProperty(AddadmissionPage.prototype, "mother_hobbies", {
    get: function get() {
      return this.dayCareRegForm.get('mother_hobbies');
    },
    enumerable: false,
    configurable: true
  });
  Object.defineProperty(AddadmissionPage.prototype, "mother_work_place", {
    get: function get() {
      return this.dayCareRegForm.get('mother_work_place');
    },
    enumerable: false,
    configurable: true
  });
  Object.defineProperty(AddadmissionPage.prototype, "mother_work_phone_num", {
    get: function get() {
      return this.dayCareRegForm.get('mother_work_phone_num');
    },
    enumerable: false,
    configurable: true
  });
  Object.defineProperty(AddadmissionPage.prototype, "mother_work_mob_num", {
    get: function get() {
      return this.dayCareRegForm.get('mother_work_mob_num');
    },
    enumerable: false,
    configurable: true
  });
  Object.defineProperty(AddadmissionPage.prototype, "father_qualification", {
    get: function get() {
      return this.dayCareRegForm.get('father_qualification');
    },
    enumerable: false,
    configurable: true
  });
  Object.defineProperty(AddadmissionPage.prototype, "father_hobbies", {
    get: function get() {
      return this.dayCareRegForm.get('father_hobbies');
    },
    enumerable: false,
    configurable: true
  });
  Object.defineProperty(AddadmissionPage.prototype, "father_work_place", {
    get: function get() {
      return this.dayCareRegForm.get('father_work_place');
    },
    enumerable: false,
    configurable: true
  });
  Object.defineProperty(AddadmissionPage.prototype, "father_work_phone_num", {
    get: function get() {
      return this.dayCareRegForm.get('father_work_phone_num');
    },
    enumerable: false,
    configurable: true
  });
  Object.defineProperty(AddadmissionPage.prototype, "father_work_mob_num", {
    get: function get() {
      return this.dayCareRegForm.get('father_work_mob_num');
    },
    enumerable: false,
    configurable: true
  });
  Object.defineProperty(AddadmissionPage.prototype, "sibling_name", {
    get: function get() {
      return this.dayCareRegForm.get('sibling_name');
    },
    enumerable: false,
    configurable: true
  });
  Object.defineProperty(AddadmissionPage.prototype, "sibling_age", {
    get: function get() {
      return this.dayCareRegForm.get('sibling_age');
    },
    enumerable: false,
    configurable: true
  });
  Object.defineProperty(AddadmissionPage.prototype, "sibling_school", {
    get: function get() {
      return this.dayCareRegForm.get('sibling_school');
    },
    enumerable: false,
    configurable: true
  });
  Object.defineProperty(AddadmissionPage.prototype, "emg_name", {
    get: function get() {
      return this.dayCareRegForm.get('emg_name');
    },
    enumerable: false,
    configurable: true
  });
  Object.defineProperty(AddadmissionPage.prototype, "emg_contact_rel", {
    get: function get() {
      return this.dayCareRegForm.get('emg_contact_rel');
    },
    enumerable: false,
    configurable: true
  });
  Object.defineProperty(AddadmissionPage.prototype, "emg_contact_phone", {
    get: function get() {
      return this.dayCareRegForm.get('emg_contact_phone');
    },
    enumerable: false,
    configurable: true
  });
  Object.defineProperty(AddadmissionPage.prototype, "household_name", {
    get: function get() {
      return this.dayCareRegForm.get('household_name');
    },
    enumerable: false,
    configurable: true
  });
  Object.defineProperty(AddadmissionPage.prototype, "household_rel", {
    get: function get() {
      return this.dayCareRegForm.get('household_rel');
    },
    enumerable: false,
    configurable: true
  });
  Object.defineProperty(AddadmissionPage.prototype, "household_num", {
    get: function get() {
      return this.dayCareRegForm.get('household_num');
    },
    enumerable: false,
    configurable: true
  });

  AddadmissionPage.prototype.presentActionSheet = function (type) {
    return __awaiter(this, void 0, void 0, function () {
      var actionSheet;

      var _this = this;

      return __generator(this, function (_a) {
        switch (_a.label) {
          case 0:
            return [4
            /*yield*/
            , this.actionSheetController.create({
              header: 'Options',
              cssClass: 'action-sheets-basic-page',
              buttons: [{
                text: 'Take photo',
                role: 'destructive',
                icon: 'camera-outline',
                handler: function handler() {
                  if (type == 'child') {
                    _this.takePicture('child');
                  } else if (type == 'mother') {
                    _this.takePicture('mother');
                  } else if (type == 'father') {
                    _this.takePicture('father');
                  } else if (type == 'guardian') {
                    _this.takePicture('guardian');
                  }
                }
              }, {
                text: 'Choose photo from Gallery',
                icon: 'images-outline',
                handler: function handler() {
                  if (type == 'child') {
                    _this.openGallery('child');
                  } else if (type == 'mother') {
                    _this.openGallery('mother');
                  } else if (type == 'father') {
                    _this.openGallery('father');
                  } else if (type == 'guardian') {
                    _this.openGallery('guardian');
                  }
                }
              }]
            })];

          case 1:
            actionSheet = _a.sent();
            actionSheet.present();
            return [2
            /*return*/
            ];
        }
      });
    });
  };

  AddadmissionPage.prototype.takePicture = function (type) {
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

          if (type == 'child') {
            _this.child_file_name = file.name;
            _this.childbase64Image = window.Ionic.WebView.convertFileSrc(imageData);
          } else if (type == 'mother') {
            _this.mother_file_name = file.name;
            _this.motherbase64Image = window.Ionic.WebView.convertFileSrc(imageData);
          } else if (type == 'father') {
            _this.father_file_name = file.name;
            _this.fatherbase64Image = window.Ionic.WebView.convertFileSrc(imageData);
          } else if (type == 'guardian') {
            _this.guardian_file_name = file.name;
            _this.guardianbase64Image = window.Ionic.WebView.convertFileSrc(imageData);
          }

          _this.cf.detectChanges();

          _this.readFile(file, type);
        });
      });
    }, function (err) {
      _this.childbase64Image = null;
      _this.motherbase64Image = null;
      _this.fatherbase64Image = null;
      _this.guardianbase64Image = null;
    });
  };

  AddadmissionPage.prototype.openGallery = function (type) {
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

          if (type == 'child') {
            _this.child_file_name = file.name;
            _this.childbase64Image = window.Ionic.WebView.convertFileSrc(imageData);
          } else if (type == 'mother') {
            _this.mother_file_name = file.name;
            _this.motherbase64Image = window.Ionic.WebView.convertFileSrc(imageData);
          } else if (type == 'father') {
            _this.father_file_name = file.name;
            _this.fatherbase64Image = window.Ionic.WebView.convertFileSrc(imageData);
          } else if (type == 'guardian') {
            _this.guardian_file_name = file.name;
            _this.guardianbase64Image = window.Ionic.WebView.convertFileSrc(imageData);
          }

          _this.cf.detectChanges();

          _this.readFile(file, type);
        });
      });
    }, function (err) {// Handle error
    });
  };

  AddadmissionPage.prototype.readFile = function (file, type) {
    var _this = this;

    var reader = new FileReader();

    reader.onloadend = function () {
      if (type == 'child') {
        _this.childimgBlob = new Blob([reader.result], {
          type: file.type
        });
      } else if (type == 'mother') {
        _this.motherimgBlob = new Blob([reader.result], {
          type: file.type
        });
      } else if (type == 'father') {
        _this.fatherimgBlob = new Blob([reader.result], {
          type: file.type
        });
      } else if (type == 'guardian') {
        _this.guardianimgBlob = new Blob([reader.result], {
          type: file.type
        });
      }

      console.log('name', file.name);
    };

    reader.readAsArrayBuffer(file);
  };

  AddadmissionPage.prototype.previousTab = function (value) {
    this.value = value;
  };

  AddadmissionPage.prototype.presentAlert = function (message) {
    return __awaiter(this, void 0, void 0, function () {
      var alert;

      var _this = this;

      return __generator(this, function (_a) {
        switch (_a.label) {
          case 0:
            return [4
            /*yield*/
            , this.alertController.create({
              header: 'Successful',
              message: message,
              mode: 'ios',
              backdropDismiss: false,
              buttons: [{
                text: 'OK',
                handler: function handler() {
                  // this.router.navigate(['mobilelogin'])
                  if (_this.isLoggedIn) {
                    _this.router.navigate(['mobilelogin']);
                  }
                }
              }]
            })];

          case 1:
            alert = _a.sent();
            return [4
            /*yield*/
            , alert.present()];

          case 2:
            _a.sent();

            return [2
            /*return*/
            ];
        }
      });
    });
  };

  AddadmissionPage.prototype.toggle_accordion = function () {
    this.accordion_expanded = this.accordion_expanded === false;
  };

  AddadmissionPage.prototype.goBack = function () {
    this.location.back();
  };

  __decorate([core_1.ViewChild(angular_1.IonContent, {
    read: angular_1.IonContent,
    "static": false
  })], AddadmissionPage.prototype, "myContent");

  AddadmissionPage = __decorate([core_1.Component({
    selector: 'app-addadmission',
    templateUrl: './addadmission.page.html',
    styleUrls: ['./addadmission.page.scss']
  })], AddadmissionPage);
  return AddadmissionPage;
}();

exports.AddadmissionPage = AddadmissionPage;