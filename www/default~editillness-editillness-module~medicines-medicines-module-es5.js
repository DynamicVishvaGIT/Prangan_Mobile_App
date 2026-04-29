(function () {
  function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return e; }; var t, e = {}, r = Object.prototype, n = r.hasOwnProperty, o = Object.defineProperty || function (t, e, r) { t[e] = r.value; }, i = "function" == typeof Symbol ? Symbol : {}, a = i.iterator || "@@iterator", c = i.asyncIterator || "@@asyncIterator", u = i.toStringTag || "@@toStringTag"; function define(t, e, r) { return Object.defineProperty(t, e, { value: r, enumerable: !0, configurable: !0, writable: !0 }), t[e]; } try { define({}, ""); } catch (t) { define = function define(t, e, r) { return t[e] = r; }; } function wrap(t, e, r, n) { var i = e && e.prototype instanceof Generator ? e : Generator, a = Object.create(i.prototype), c = new Context(n || []); return o(a, "_invoke", { value: makeInvokeMethod(t, r, c) }), a; } function tryCatch(t, e, r) { try { return { type: "normal", arg: t.call(e, r) }; } catch (t) { return { type: "throw", arg: t }; } } e.wrap = wrap; var h = "suspendedStart", l = "suspendedYield", f = "executing", s = "completed", y = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var p = {}; define(p, a, function () { return this; }); var d = Object.getPrototypeOf, v = d && d(d(values([]))); v && v !== r && n.call(v, a) && (p = v); var g = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(p); function defineIteratorMethods(t) { ["next", "throw", "return"].forEach(function (e) { define(t, e, function (t) { return this._invoke(e, t); }); }); } function AsyncIterator(t, e) { function invoke(r, o, i, a) { var c = tryCatch(t[r], t, o); if ("throw" !== c.type) { var u = c.arg, h = u.value; return h && "object" == typeof h && n.call(h, "__await") ? e.resolve(h.__await).then(function (t) { invoke("next", t, i, a); }, function (t) { invoke("throw", t, i, a); }) : e.resolve(h).then(function (t) { u.value = t, i(u); }, function (t) { return invoke("throw", t, i, a); }); } a(c.arg); } var r; o(this, "_invoke", { value: function value(t, n) { function callInvokeWithMethodAndArg() { return new e(function (e, r) { invoke(t, n, e, r); }); } return r = r ? r.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); } }); } function makeInvokeMethod(e, r, n) { var o = h; return function (i, a) { if (o === f) throw new Error("Generator is already running"); if (o === s) { if ("throw" === i) throw a; return { value: t, done: !0 }; } for (n.method = i, n.arg = a;;) { var c = n.delegate; if (c) { var u = maybeInvokeDelegate(c, n); if (u) { if (u === y) continue; return u; } } if ("next" === n.method) n.sent = n._sent = n.arg;else if ("throw" === n.method) { if (o === h) throw o = s, n.arg; n.dispatchException(n.arg); } else "return" === n.method && n.abrupt("return", n.arg); o = f; var p = tryCatch(e, r, n); if ("normal" === p.type) { if (o = n.done ? s : l, p.arg === y) continue; return { value: p.arg, done: n.done }; } "throw" === p.type && (o = s, n.method = "throw", n.arg = p.arg); } }; } function maybeInvokeDelegate(e, r) { var n = r.method, o = e.iterator[n]; if (o === t) return r.delegate = null, "throw" === n && e.iterator["return"] && (r.method = "return", r.arg = t, maybeInvokeDelegate(e, r), "throw" === r.method) || "return" !== n && (r.method = "throw", r.arg = new TypeError("The iterator does not provide a '" + n + "' method")), y; var i = tryCatch(o, e.iterator, r.arg); if ("throw" === i.type) return r.method = "throw", r.arg = i.arg, r.delegate = null, y; var a = i.arg; return a ? a.done ? (r[e.resultName] = a.value, r.next = e.nextLoc, "return" !== r.method && (r.method = "next", r.arg = t), r.delegate = null, y) : a : (r.method = "throw", r.arg = new TypeError("iterator result is not an object"), r.delegate = null, y); } function pushTryEntry(t) { var e = { tryLoc: t[0] }; 1 in t && (e.catchLoc = t[1]), 2 in t && (e.finallyLoc = t[2], e.afterLoc = t[3]), this.tryEntries.push(e); } function resetTryEntry(t) { var e = t.completion || {}; e.type = "normal", delete e.arg, t.completion = e; } function Context(t) { this.tryEntries = [{ tryLoc: "root" }], t.forEach(pushTryEntry, this), this.reset(!0); } function values(e) { if (e || "" === e) { var r = e[a]; if (r) return r.call(e); if ("function" == typeof e.next) return e; if (!isNaN(e.length)) { var o = -1, i = function next() { for (; ++o < e.length;) if (n.call(e, o)) return next.value = e[o], next.done = !1, next; return next.value = t, next.done = !0, next; }; return i.next = i; } } throw new TypeError(typeof e + " is not iterable"); } return GeneratorFunction.prototype = GeneratorFunctionPrototype, o(g, "constructor", { value: GeneratorFunctionPrototype, configurable: !0 }), o(GeneratorFunctionPrototype, "constructor", { value: GeneratorFunction, configurable: !0 }), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, u, "GeneratorFunction"), e.isGeneratorFunction = function (t) { var e = "function" == typeof t && t.constructor; return !!e && (e === GeneratorFunction || "GeneratorFunction" === (e.displayName || e.name)); }, e.mark = function (t) { return Object.setPrototypeOf ? Object.setPrototypeOf(t, GeneratorFunctionPrototype) : (t.__proto__ = GeneratorFunctionPrototype, define(t, u, "GeneratorFunction")), t.prototype = Object.create(g), t; }, e.awrap = function (t) { return { __await: t }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, c, function () { return this; }), e.AsyncIterator = AsyncIterator, e.async = function (t, r, n, o, i) { void 0 === i && (i = Promise); var a = new AsyncIterator(wrap(t, r, n, o), i); return e.isGeneratorFunction(r) ? a : a.next().then(function (t) { return t.done ? t.value : a.next(); }); }, defineIteratorMethods(g), define(g, u, "Generator"), define(g, a, function () { return this; }), define(g, "toString", function () { return "[object Generator]"; }), e.keys = function (t) { var e = Object(t), r = []; for (var n in e) r.push(n); return r.reverse(), function next() { for (; r.length;) { var t = r.pop(); if (t in e) return next.value = t, next.done = !1, next; } return next.done = !0, next; }; }, e.values = values, Context.prototype = { constructor: Context, reset: function reset(e) { if (this.prev = 0, this.next = 0, this.sent = this._sent = t, this.done = !1, this.delegate = null, this.method = "next", this.arg = t, this.tryEntries.forEach(resetTryEntry), !e) for (var r in this) "t" === r.charAt(0) && n.call(this, r) && !isNaN(+r.slice(1)) && (this[r] = t); }, stop: function stop() { this.done = !0; var t = this.tryEntries[0].completion; if ("throw" === t.type) throw t.arg; return this.rval; }, dispatchException: function dispatchException(e) { if (this.done) throw e; var r = this; function handle(n, o) { return a.type = "throw", a.arg = e, r.next = n, o && (r.method = "next", r.arg = t), !!o; } for (var o = this.tryEntries.length - 1; o >= 0; --o) { var i = this.tryEntries[o], a = i.completion; if ("root" === i.tryLoc) return handle("end"); if (i.tryLoc <= this.prev) { var c = n.call(i, "catchLoc"), u = n.call(i, "finallyLoc"); if (c && u) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } else if (c) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); } else { if (!u) throw new Error("try statement without catch or finally"); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } } } }, abrupt: function abrupt(t, e) { for (var r = this.tryEntries.length - 1; r >= 0; --r) { var o = this.tryEntries[r]; if (o.tryLoc <= this.prev && n.call(o, "finallyLoc") && this.prev < o.finallyLoc) { var i = o; break; } } i && ("break" === t || "continue" === t) && i.tryLoc <= e && e <= i.finallyLoc && (i = null); var a = i ? i.completion : {}; return a.type = t, a.arg = e, i ? (this.method = "next", this.next = i.finallyLoc, y) : this.complete(a); }, complete: function complete(t, e) { if ("throw" === t.type) throw t.arg; return "break" === t.type || "continue" === t.type ? this.next = t.arg : "return" === t.type ? (this.rval = this.arg = t.arg, this.method = "return", this.next = "end") : "normal" === t.type && e && (this.next = e), y; }, finish: function finish(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.finallyLoc === t) return this.complete(r.completion, r.afterLoc), resetTryEntry(r), y; } }, "catch": function _catch(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.tryLoc === t) { var n = r.completion; if ("throw" === n.type) { var o = n.arg; resetTryEntry(r); } return o; } } throw new Error("illegal catch attempt"); }, delegateYield: function delegateYield(e, r, n) { return this.delegate = { iterator: values(e), resultName: r, nextLoc: n }, "next" === this.method && (this.arg = t), y; } }, e; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

  function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return typeof key === "symbol" ? key : String(key); }

  function _toPrimitive(input, hint) { if (typeof input !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (typeof res !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["default~editillness-editillness-module~medicines-medicines-module"], {
    /***/
    "/QfT":
    /*!*************************************************!*\
      !*** ./src/app/editillness/editillness.page.ts ***!
      \*************************************************/

    /*! exports provided: EditillnessPage */

    /***/
    function QfT(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "EditillnessPage", function () {
        return EditillnessPage;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_editillness_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./editillness.page.html */
      "cefe");
      /* harmony import */


      var _editillness_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./editillness.page.scss */
      "xH3C");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/forms */
      "3Pt+");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");
      /* harmony import */


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @ionic/angular */
      "TEn/");
      /* harmony import */


      var _api_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ../api.service */
      "yTNM");
      /* harmony import */


      var _ionic_native_camera_ngx__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! @ionic-native/camera/ngx */
      "a/9d");
      /* harmony import */


      var _ionic_native_file_ngx__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! @ionic-native/file/ngx */
      "FAH8");

      var EditillnessPage = /*#__PURE__*/function () {
        function EditillnessPage(modalController, apiService, alertController, loadingController, actionSheetController, camera, file, router, cf) {
          _classCallCheck(this, EditillnessPage);

          this.modalController = modalController;
          this.apiService = apiService;
          this.alertController = alertController;
          this.loadingController = loadingController;
          this.actionSheetController = actionSheetController;
          this.camera = camera;
          this.file = file;
          this.router = router;
          this.cf = cf;
        }

        _createClass(EditillnessPage, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            console.log(this.illness_obj.prescriptionImg);
            var splitted_from_date = this.illness_obj.fromDate.split('-');
            var splitted_to_date = this.illness_obj.toDate.split('-');
            var from_date = splitted_from_date[1] + '-' + splitted_from_date[0] + '-' + splitted_from_date[2];
            var to_date = splitted_to_date[1] + '-' + splitted_to_date[0] + '-' + splitted_to_date[2];
            this.editIllnessForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormGroup"]({
              illness: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"](this.illness_obj.illnessName, [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].pattern(/^[a-zA-z ]+$/)]),
              from_date: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"](from_date, [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required]),
              to_date: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"](to_date, [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required]),
              dont_prescription: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"](this.illness_obj.isPrescription, [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required])
            });
          }
        }, {
          key: "presentAlert",
          value: function presentAlert(message) {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/_regeneratorRuntime().mark(function _callee() {
              var _this = this;

              var alert;
              return _regeneratorRuntime().wrap(function _callee$(_context) {
                while (1) switch (_context.prev = _context.next) {
                  case 0:
                    _context.next = 2;
                    return this.alertController.create({
                      header: 'Successful',
                      message: message,
                      mode: 'ios',
                      backdropDismiss: false,
                      buttons: [{
                        text: 'OK',
                        handler: function handler() {
                          _this.modalController.dismiss();
                        }
                      }]
                    });

                  case 2:
                    alert = _context.sent;
                    _context.next = 5;
                    return alert.present();

                  case 5:
                  case "end":
                    return _context.stop();
                }
              }, _callee, this);
            }));
          }
        }, {
          key: "presentActionSheet",
          value: function presentActionSheet() {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/_regeneratorRuntime().mark(function _callee2() {
              var _this2 = this;

              var actionSheet;
              return _regeneratorRuntime().wrap(function _callee2$(_context2) {
                while (1) switch (_context2.prev = _context2.next) {
                  case 0:
                    _context2.next = 2;
                    return this.actionSheetController.create({
                      header: 'Options',
                      cssClass: 'action-sheets-basic-page',
                      buttons: [{
                        text: 'Take photo',
                        role: 'destructive',
                        icon: 'camera-outline',
                        handler: function handler() {
                          _this2.takePicture();
                        }
                      }, {
                        text: 'Choose photo from Gallery',
                        icon: 'images-outline',
                        handler: function handler() {
                          _this2.openGallery();
                        }
                      }]
                    });

                  case 2:
                    actionSheet = _context2.sent;
                    actionSheet.present();

                  case 4:
                  case "end":
                    return _context2.stop();
                }
              }, _callee2, this);
            }));
          }
        }, {
          key: "takePicture",
          value: function takePicture() {
            var _this3 = this;

            this.imageClicked = true;
            this.pdfClicked = false;
            var options = {
              quality: 70,
              destinationType: this.camera.DestinationType.FILE_URI,
              encodingType: this.camera.EncodingType.JPEG,
              mediaType: this.camera.MediaType.PICTURE,
              correctOrientation: true
            };
            this.camera.getPicture(options).then(function (imageData) {
              _this3.profile_pic2 = 'data:image/jpeg;base64,' + imageData;

              _this3.file.resolveLocalFilesystemUrl(imageData).then(function (entry) {
                entry.file(function (file) {
                  console.log(file);
                  _this3.file_name = file.name;
                  _this3.base64Image = window.Ionic.WebView.convertFileSrc(imageData);

                  _this3.cf.detectChanges();

                  _this3.readFile(file);
                });
              });
            }, function (err) {
              _this3.base64Image = null;
            });
          }
        }, {
          key: "openGallery",
          value: function openGallery() {
            var _this4 = this;

            this.imageClicked = true;
            this.pdfClicked = false;
            var options = {
              quality: 70,
              destinationType: this.camera.DestinationType.FILE_URI,
              encodingType: this.camera.EncodingType.JPEG,
              mediaType: this.camera.MediaType.PICTURE,
              correctOrientation: true,
              sourceType: this.camera.PictureSourceType.PHOTOLIBRARY
            };
            this.camera.getPicture(options).then(function (imageData) {
              _this4.profile_pic2 = 'data:image/jpeg;base64,' + imageData;

              _this4.file.resolveLocalFilesystemUrl(imageData).then(function (entry) {
                entry.file(function (file) {
                  console.log(file);
                  _this4.file_name = file.name;
                  _this4.base64Image = window.Ionic.WebView.convertFileSrc(imageData);

                  _this4.cf.detectChanges();

                  _this4.readFile(file);
                });
              }); //  this.profile_pic = 'data:image/jpeg;base64,' + imageData;

            }, function (err) {
              _this4.base64Image = null;
            });
          }
        }, {
          key: "readFile",
          value: function readFile(file) {
            var _this5 = this;

            var reader = new FileReader();

            reader.onloadend = function () {
              console.log('reader2', reader, reader.result);
              _this5.imgBlob = new Blob([reader.result], {
                type: file.type
              });
              _this5.file_name = file.name;
              console.log("name", file.name);
            };

            reader.readAsArrayBuffer(file);
          }
        }, {
          key: "illness",
          get: function get() {
            return this.editIllnessForm.get('illness');
          }
        }, {
          key: "from_date",
          get: function get() {
            return this.editIllnessForm.get('from_date');
          }
        }, {
          key: "to_date",
          get: function get() {
            return this.editIllnessForm.get('to_date');
          }
        }, {
          key: "dont_prescription",
          get: function get() {
            return this.editIllnessForm.get('dont_prescription');
          }
        }, {
          key: "onSubmit",
          value: function onSubmit(body) {
            var _this6 = this;

            var formdata = new FormData();
            formdata.append("userId", this.userId);
            formdata.append("illnessId", this.illness_obj.illnessId);
            formdata.append("illness", body['illness']);
            formdata.append("from_date", body['from_date']);
            formdata.append("to_date", body['to_date']);
            formdata.append("dont_prescription", body['dont_prescription']);
            formdata.append("olddocName", this.illness_obj.prescriptionImg);
            formdata.append("image", this.imgBlob, this.file_name);
            this.apiService.editIllness(formdata).subscribe(function (data) {
              _this6.loadingController.dismiss();

              _this6.presentAlert('Illness updated successfully');
            }, function (err) {
              console.log(err.error);

              _this6.loadingController.dismiss();

              _this6.apiService.presentToast(err.error, 2000);
            });
          }
        }, {
          key: "closeModal",
          value: function closeModal() {
            this.modalController.dismiss();
          }
        }]);

        return EditillnessPage;
      }();

      EditillnessPage.ctorParameters = function () {
        return [{
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["ModalController"]
        }, {
          type: _api_service__WEBPACK_IMPORTED_MODULE_7__["ApiService"]
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["AlertController"]
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["LoadingController"]
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["ActionSheetController"]
        }, {
          type: _ionic_native_camera_ngx__WEBPACK_IMPORTED_MODULE_8__["Camera"]
        }, {
          type: _ionic_native_file_ngx__WEBPACK_IMPORTED_MODULE_9__["File"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"]
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ChangeDetectorRef"]
        }];
      };

      EditillnessPage.propDecorators = {
        userId: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"]
        }],
        illness_obj: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"]
        }]
      };
      EditillnessPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-editillness',
        template: _raw_loader_editillness_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_editillness_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
      })], EditillnessPage);
      /***/
    },

    /***/
    "cefe":
    /*!*****************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/editillness/editillness.page.html ***!
      \*****************************************************************************************/

    /*! exports provided: default */

    /***/
    function cefe(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-header>\n  <ion-toolbar>\n    <ion-title>Edit Illness</ion-title>\n    <ion-buttons slot=\"start\">\n      <ion-button shape=\"round\" (click)=\"closeModal()\">\n        <ion-icon color=\"light\" name=\"arrow-back-outline\"></ion-icon>\n      </ion-button>\n    </ion-buttons>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <div *ngIf=\"editIllnessForm\">\n  <form [formGroup]=\"editIllnessForm\" (ngSubmit)=\"onSubmit(editIllnessForm.value)\">\n    <ion-row>\n      <ion-col size=\"12\">\n        <ion-label>Sickness & Ilnness </ion-label>\n        <ion-item lines=\"none\">\n          <ion-input formControlName=\"illness\" type=\"text\" ></ion-input>\n        </ion-item>\n        <div class=\"error-div\" *ngIf=\"(illness?.invalid && illness?.touched) || illness?.dirty\">\n          <small *ngIf=\"illness.errors?.pattern\" class=\"text-danger\">Enter a valid illness</small>\n        </div>\n      </ion-col>\n    </ion-row>\n    <ion-row>\n      <ion-col size=\"6\">\n        <ion-label>From Date </ion-label>\n        <ion-item lines=\"none\">\n          <ion-datetime formControlName=\"from_date\" displayFormat=\"DD MMM  YYYY\" ></ion-datetime>\n        </ion-item>\n      </ion-col>\n      <ion-col size=\"6\">\n        <ion-label>To Date </ion-label>\n        <ion-item lines=\"none\">\n          <ion-datetime formControlName=\"to_date\" displayFormat=\"DD MMM  YYYY\" ></ion-datetime>\n        </ion-item>\n      </ion-col>\n    </ion-row>\n    <ion-row>\n      <ion-col size=\"12\">\n        <ion-label>Add Prescription </ion-label>\n        <ion-item lines=\"none\">\n          <img *ngIf=\"illness_obj.prescriptionImg\" src=\"{{illness_obj?.prescriptionImg}}\" alt=\"\">\n          <ion-button color=\"primary\" (click)=\"presentActionSheet()\">\n            Upload Image\n          </ion-button>\n         \n        </ion-item>\n      </ion-col>\n      <ion-col size=\"12\"  class=\"home-header-img\" *ngIf=\"imageClicked && !pdfClicked\">\n        <img src=\"{{base64Image}}\" *ngIf=\"base64Image\" alt=\"Avatar\" width=\"215\" />\n      </ion-col>\n      <!-- <ion-col size=\"6\">\n        <ion-label></ion-label>\n        <ion-item lines=\"none\">\n          <ion-input style=\"margin-top:26px\" type=\"text\" ></ion-input>\n        </ion-item>\n      </ion-col> -->\n    </ion-row>\n    <ion-row>\n      <ion-col size=\"6\">\n        <ion-item lines=\"none\">\n          <ion-checkbox formControlName=\"dont_prescription\"></ion-checkbox>\n          <ion-label>I dont have prescription</ion-label>\n\n        </ion-item>\n      </ion-col>\n     \n    </ion-row>\n    <ion-row>\n      <ion-col size=\"12\" class=\"ion-text-center\">\n      \n          <ion-button [disabled]=\"editIllnessForm.invalid\" shape=\"round\" type=\"submit\"  color=\"secondary\">\n            Submit\n          </ion-button>\n      </ion-col>\n    </ion-row>\n    \n  </form>\n</div>\n</ion-content>\n";
      /***/
    },

    /***/
    "xH3C":
    /*!***************************************************!*\
      !*** ./src/app/editillness/editillness.page.scss ***!
      \***************************************************/

    /*! exports provided: default */

    /***/
    function xH3C(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "@charset \"UTF-8\";\nform {\n  margin: 16px;\n}\n.step {\n  color: #a2a2a2;\n  font-size: 16px;\n  margin-left: 16px;\n  font-family: initial;\n  margin-bottom: 2px;\n  font-weight: bold;\n}\n.step-heading {\n  color: #fdd653;\n  margin-left: 16px;\n  font-family: initial;\n  font-size: 30px;\n  margin-top: 0;\n  font-weight: bold;\n  text-decoration: underline;\n  text-decoration-thickness: 2px;\n}\n.wrap {\n  text-align: center;\n  position: relative;\n}\n.wrap:before {\n  content: \"\";\n  position: absolute;\n  top: 20%;\n  left: 18%;\n  border-top: 0.5px solid #677483;\n  border-width: thin;\n  width: 65%;\n  transform: translateY(-50%);\n  border-style: dashed;\n}\n.active {\n  background: #fdd653;\n  color: #ffffff;\n}\n.icon-circle {\n  position: relative;\n  display: inline-block;\n  margin: -1px;\n  width: 30px;\n  height: 30px;\n  font-size: 26px;\n  border-radius: 50%;\n  border: 1px solid #202020;\n  background: #fff;\n  color: #202020;\n  text-align: center;\n}\n.icon-circle ion-icon {\n  margin-top: 2px;\n  font-size: 20px;\n}\n.heading-1 {\n  color: #676767;\n  margin-bottom: 0;\n  font-size: 16px;\n}\n.heading {\n  color: #9b9ca6;\n  margin-bottom: 0;\n  font-size: 14px;\n}\nion-label {\n  color: #9b9ca6;\n  font-size: 14px;\n}\nion-input {\n  border: 1px solid #9b9ca6;\n  border-radius: 5px;\n  --padding-start: 5px !important;\n  height: 35px;\n}\nion-textarea {\n  border: 1px solid #9b9ca6;\n  border-radius: 5px;\n  --padding-start: 5px !important;\n}\nion-datetime {\n  border: 1px solid #9b9ca6;\n  border-radius: 5px;\n  --padding-start: 5px !important;\n  width: 100%;\n  height: 35px;\n}\nion-item {\n  --padding-start: 0;\n  --ripple-color: transparent;\n  --background-activated: transparent;\n  --background-activated-opacity:transparent;\n  --background-focused: transparent;\n  --background-focused-opacity:transparent;\n  --background-hover: transparent;\n  --background-hover-opacity:transparent;\n}\nion-item ion-label {\n  font-size: 12px;\n  color: #9b9ca6;\n}\nion-radio-group ion-item {\n  border-bottom: 0;\n}\nion-radio-group ion-col {\n  padding-left: 0;\n}\nion-radio-group ion-radio {\n  margin-right: 8px;\n  width: 18px;\n  height: 18px;\n}\nion-col {\n  padding-left: 0;\n}\nion-button {\n  text-transform: none;\n}\n.choose-btn {\n  --background: #ee4a35;\n  --color:#fff;\n}\n.heading-3 {\n  margin-top: 12px;\n  color: #929791;\n}\n.admission-row ion-col {\n  text-align: center;\n  text-align: -moz-center;\n}\n.admission-row ion-col ion-button {\n  text-transform: none;\n  width: 40%;\n}\n.btn-row ion-col {\n  text-align: center;\n  text-align: -moz-center;\n}\n.btn-row ion-col ion-button {\n  text-transform: none;\n  width: 75%;\n}\n.next-btn-col {\n  text-align: left !important;\n}\nion-segment-button {\n  text-transform: none;\n}\nimg {\n  width: 60%;\n}\n.tabs {\n  border-radius: 0;\n  overflow: hidden;\n  box-shadow: 0 4px 4px -2px rgba(0, 0, 0, 0.5);\n}\n#chck1 {\n  position: absolute;\n  opacity: 0;\n  z-index: -1;\n}\n.tab {\n  width: 100%;\n  color: white;\n  overflow: hidden;\n}\n.tab-label {\n  display: flex;\n  justify-content: space-between;\n  padding: 1em;\n  background: #2c3e50;\n  font-weight: bold;\n  cursor: pointer;\n  /* Icon */\n}\n.tab-label:hover {\n  background: #1a252f;\n}\n.tab-label::after {\n  content: \"❯\";\n  width: 1em;\n  height: 1em;\n  text-align: center;\n  transition: all 0.35s;\n}\n.tab-content {\n  max-height: 0;\n  padding: 0 1em;\n  color: #2c3e50;\n  background: white;\n  transition: all 0.35s;\n}\n.tab-close {\n  display: flex;\n  justify-content: flex-end;\n  padding: 1em;\n  font-size: 0.75em;\n  background: #2c3e50;\n  cursor: pointer;\n}\n.tab-close:hover {\n  background: #1a252f;\n}\n#chck1:checked + .tab-label {\n  background: #1a252f;\n}\n#chck1:checked + .tab-label::after {\n  transform: rotate(90deg);\n}\n#chck1:checked ~ .tab-content {\n  max-height: 100vh;\n  padding: 1em;\n}\n.inside-body {\n  padding: 25px;\n}\n.list-group.vertical-steps .list-group-item {\n  border: none;\n  border-left: 3px solid #b4b4b4;\n  box-sizing: border-box;\n  border-radius: 0;\n  counter-increment: step-counter;\n  padding-left: 20px;\n  padding-right: 0px;\n  padding-bottom: 7px;\n  padding-top: 0px;\n}\n.list-group.vertical-steps .list-group-item::before {\n  border-radius: 50%;\n  background-color: #b4b4b4;\n  color: #fff;\n  content: counter(step-counter);\n  display: inline-block;\n  float: left;\n  height: 25px;\n  line-height: 25px;\n  margin-left: -35px;\n  text-align: center;\n  width: 25px;\n}\n.list-group.vertical-steps .final::before {\n  border-radius: 50%;\n  background-color: #b4b4b4;\n  color: #fff;\n  content: counter(step-counter);\n  display: inline-block;\n  float: left;\n  height: 25px;\n  line-height: 25px;\n  margin-left: -32px;\n  text-align: center;\n  width: 25px;\n}\n.final {\n  border-left: none !important;\n}\n.list-group.vertical-steps .step-active::before {\n  border-radius: 50%;\n  background-color: #2dd36f;\n  color: #fff;\n  content: counter(step-counter);\n  display: inline-block;\n  float: left;\n  height: 25px;\n  line-height: 25px;\n  margin-left: -35px;\n  text-align: center;\n  width: 25px;\n}\n.list-group.vertical-steps .list-group-item span, .list-group.vertical-steps .list-group-item a {\n  display: block;\n  overflow: hidden;\n  padding-top: 2px;\n}\ndiv.reusable_accordion {\n  z-index: 99;\n  padding: 0;\n  margin: 0;\n  list-style: none;\n  display: flex;\n  flex-wrap: wrap;\n  flex-direction: column;\n  justify-content: space-around;\n  line-height: 25px;\n  height: 180px;\n  background: #f1f1f1;\n  width: auto;\n}\ndiv.template_accordion div.template_containers {\n  display: flex;\n  min-width: 45%;\n  min-height: 60px;\n  background: white;\n  flex-direction: row;\n  margin: 5px;\n  justify-content: center;\n  align-content: center;\n}\n.toggle_button {\n  --background: #f1f1f1;\n  width: 100%;\n  text-align: center;\n  padding: 0;\n  color: #202020;\n  cursor: pointer;\n  min-width: 100%;\n}\n.toggle_button ion-label {\n  font-size: 16px;\n  color: #202020;\n  text-align: left;\n  margin-left: 20px;\n  font-weight: bold;\n}\ndiv.accordion-container {\n  overflow: hidden;\n  overflow-y: scroll;\n  transition: max-height 0.5s ease-in-out;\n  height: auto;\n  background: #1f2b37;\n}\ndiv.accordion-container.collapsed {\n  max-height: 0 !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL2VkaXRpbGxuZXNzLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxnQkFBZ0I7QUFHaEI7RUFDSSxZQUFBO0FBREo7QUFHQTtFQUNJLGNBQUE7RUFDQSxlQUFBO0VBQ0EsaUJBQUE7RUFDQSxvQkFBQTtFQUNBLGtCQUFBO0VBQ0EsaUJBQUE7QUFBSjtBQUVBO0VBQ0ksY0FBQTtFQUNBLGlCQUFBO0VBQ0Esb0JBQUE7RUFDQSxlQUFBO0VBQ0EsYUFBQTtFQUNBLGlCQUFBO0VBQ0EsMEJBQUE7RUFDQSw4QkFBQTtBQUNKO0FBQ0E7RUFDSSxrQkFBQTtFQUNBLGtCQUFBO0FBRUo7QUFDRTtFQUNFLFdBQUE7RUFDQSxrQkFBQTtFQUNBLFFBQUE7RUFDQSxTQUFBO0VBQ0EsK0JBQUE7RUFDQSxrQkFBQTtFQUNBLFVBQUE7RUFDQSwyQkFBQTtFQUNBLG9CQUFBO0FBRUo7QUFBRTtFQUNFLG1CQUFBO0VBQ0EsY0FBQTtBQUdKO0FBREU7RUFDRSxrQkFBQTtFQUNBLHFCQUFBO0VBQ0EsWUFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0EsZUFBQTtFQUNBLGtCQUFBO0VBQ0EseUJBQUE7RUFDQSxnQkFBQTtFQUNBLGNBQUE7RUFDQSxrQkFBQTtBQUlKO0FBRkk7RUFDSSxlQUFBO0VBQ0EsZUFBQTtBQUlSO0FBRUU7RUFDRSxjQUFBO0VBQ0EsZ0JBQUE7RUFDQSxlQUFBO0FBQ0o7QUFDQTtFQUNJLGNBQUE7RUFDQSxnQkFBQTtFQUNBLGVBQUE7QUFFSjtBQUFBO0VBQ0ksY0FBQTtFQUNBLGVBQUE7QUFHSjtBQURBO0VBQ0kseUJBQUE7RUFDQSxrQkFBQTtFQUNBLCtCQUFBO0VBQ0EsWUFBQTtBQUlKO0FBRkE7RUFDSSx5QkFBQTtFQUNBLGtCQUFBO0VBQ0EsK0JBQUE7QUFLSjtBQUhBO0VBQ0kseUJBQUE7RUFDQSxrQkFBQTtFQUNBLCtCQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7QUFNSjtBQUhBO0VBRUksa0JBQUE7RUFDQSwy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QUFBO0FBUUo7QUFKQTtFQUNFLHFCQUFBO0VBQ0EsV0FBQTtFQUNBLGtCQUFBO0VBQ0EsVUFBQTtFQUNBLGNBQUE7RUFDQSxlQUFBO0VBQ0EsZUFBQTtBQU9GO0FBTkU7RUFDRSxlQUFBO0VBQ0EsY0FBQTtFQUNBLGdCQUFBO0VBQ0EsaUJBQUE7RUFDQSxpQkFBQTtBQVFKO0FBTEE7RUFDRSxnQkFBQTtFQUNBLGtCQUFBO0VBQ0EsdUNBQUE7RUFDQSxZQUFBO0VBQ0EsbUJBQUE7QUFRRjtBQUxBO0VBQ0Usd0JBQUE7QUFRRiIsImZpbGUiOiJlZGl0aWxsbmVzcy5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJcclxuJG1pZG5pZ2h0OiAjMmMzZTUwO1xyXG4kY2xvdWRzOiAjZWNmMGYxO1xyXG5mb3Jte1xyXG4gICAgbWFyZ2luOiAxNnB4O1xyXG59XHJcbi5zdGVwe1xyXG4gICAgY29sb3I6ICNhMmEyYTI7XHJcbiAgICBmb250LXNpemU6IDE2cHg7XHJcbiAgICBtYXJnaW4tbGVmdDogMTZweDtcclxuICAgIGZvbnQtZmFtaWx5OiBpbml0aWFsO1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMnB4O1xyXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbn1cclxuLnN0ZXAtaGVhZGluZ3tcclxuICAgIGNvbG9yOiAjZmRkNjUzO1xyXG4gICAgbWFyZ2luLWxlZnQ6IDE2cHg7XHJcbiAgICBmb250LWZhbWlseTogaW5pdGlhbDtcclxuICAgIGZvbnQtc2l6ZTogMzBweDtcclxuICAgIG1hcmdpbi10b3A6IDA7XHJcbiAgICBmb250LXdlaWdodDogYm9sZDtcclxuICAgIHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lO1xyXG4gICAgdGV4dC1kZWNvcmF0aW9uLXRoaWNrbmVzczogMnB4O1xyXG59XHJcbi53cmFwIHtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICB9XHJcbiAgXHJcbiAgLndyYXA6YmVmb3JlIHtcclxuICAgIGNvbnRlbnQ6IFwiXCI7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICB0b3A6IDIwJTtcclxuICAgIGxlZnQ6IDE4JTtcclxuICAgIGJvcmRlci10b3A6IDAuNXB4IHNvbGlkICM2Nzc0ODM7XHJcbiAgICBib3JkZXItd2lkdGg6IHRoaW47XHJcbiAgICB3aWR0aDogNjUlO1xyXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC01MCUpO1xyXG4gICAgYm9yZGVyLXN0eWxlOiBkYXNoZWQ7XHJcbiAgfVxyXG4gIC5hY3RpdmV7XHJcbiAgICBiYWNrZ3JvdW5kOiAjZmRkNjUzO1xyXG4gICAgY29sb3I6ICNmZmZmZmY7XHJcbiAgfVxyXG4gIC5pY29uLWNpcmNsZXtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICAgIG1hcmdpbjogLTFweDtcclxuICAgIHdpZHRoOiAzMHB4O1xyXG4gICAgaGVpZ2h0OiAzMHB4O1xyXG4gICAgZm9udC1zaXplOiAyNnB4O1xyXG4gICAgYm9yZGVyLXJhZGl1czogNTAlO1xyXG4gICAgYm9yZGVyOiAxcHggc29saWQgIzIwMjAyMDtcclxuICAgIGJhY2tncm91bmQ6ICNmZmY7XHJcbiAgICBjb2xvcjogIzIwMjAyMDtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuXHJcbiAgICBpb24taWNvbntcclxuICAgICAgICBtYXJnaW4tdG9wOiAycHg7XHJcbiAgICAgICAgZm9udC1zaXplOiAyMHB4O1xyXG4gICAgfVxyXG4gIFxyXG4gIH1cclxuICBcclxuICBcclxuICAuaGVhZGluZy0xe1xyXG4gICAgY29sb3I6ICM2NzY3Njc7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAwO1xyXG4gICAgZm9udC1zaXplOiAxNnB4O1xyXG59XHJcbi5oZWFkaW5ne1xyXG4gICAgY29sb3I6ICM5YjljYTY7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAwO1xyXG4gICAgZm9udC1zaXplOiAxNHB4O1xyXG59XHJcbmlvbi1sYWJlbHtcclxuICAgIGNvbG9yOiAjOWI5Y2E2O1xyXG4gICAgZm9udC1zaXplOiAxNHB4O1xyXG59XHJcbmlvbi1pbnB1dCB7XHJcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjOWI5Y2E2O1xyXG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xyXG4gICAgLS1wYWRkaW5nLXN0YXJ0OiA1cHggIWltcG9ydGFudDtcclxuICAgIGhlaWdodDozNXB4O1xyXG59XHJcbmlvbi10ZXh0YXJlYXtcclxuICAgIGJvcmRlcjogMXB4IHNvbGlkICM5YjljYTY7XHJcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XHJcbiAgICAtLXBhZGRpbmctc3RhcnQ6IDVweCAhaW1wb3J0YW50O1xyXG59XHJcbmlvbi1kYXRldGltZXtcclxuICAgIGJvcmRlcjogMXB4IHNvbGlkICM5YjljYTY7XHJcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XHJcbiAgICAtLXBhZGRpbmctc3RhcnQ6IDVweCAhaW1wb3J0YW50O1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBoZWlnaHQ6MzVweDtcclxuXHJcbn1cclxuaW9uLWl0ZW17XHJcbiAgICAvLyBib3JkZXItYm90dG9tOiAxcHggc29saWQgIzY3NzQ4MztcclxuICAgIC0tcGFkZGluZy1zdGFydDogMDtcclxuICAgIC0tcmlwcGxlLWNvbG9yOiB0cmFuc3BhcmVudDtcclxuICAgIC0tYmFja2dyb3VuZC1hY3RpdmF0ZWQ6IHRyYW5zcGFyZW50O1xyXG4gICAgLS1iYWNrZ3JvdW5kLWFjdGl2YXRlZC1vcGFjaXR5OnRyYW5zcGFyZW50O1xyXG4gICAgLS1iYWNrZ3JvdW5kLWZvY3VzZWQ6IHRyYW5zcGFyZW50O1xyXG4gICAgLS1iYWNrZ3JvdW5kLWZvY3VzZWQtb3BhY2l0eTp0cmFuc3BhcmVudDtcclxuICAgIC0tYmFja2dyb3VuZC1ob3ZlciAgOiB0cmFuc3BhcmVudDtcclxuICAgIC0tYmFja2dyb3VuZC1ob3Zlci1vcGFjaXR5ICA6dHJhbnNwYXJlbnQ7XHJcblxyXG4gICAgaW9uLWxhYmVsIHtcclxuICAgICAgICBmb250LXNpemU6IDEycHg7XHJcbiAgICAgICAgY29sb3I6ICM5YjljYTY7XHJcblxyXG4gICAgfVxyXG59XHJcbiAgICBpb24tcmFkaW8tZ3JvdXB7XHJcbiAgICAgICAgaW9uLWl0ZW17XHJcbiAgICAgICAgICAgIGJvcmRlci1ib3R0b206IDA7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlvbi1jb2wge1xyXG4gICAgICAgICAgICBwYWRkaW5nLWxlZnQ6IDA7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlvbi1yYWRpb3tcclxuICAgICAgICBtYXJnaW4tcmlnaHQ6IDhweDtcclxuICAgICAgICB3aWR0aDogMThweDtcclxuICAgICAgICBoZWlnaHQ6IDE4cHg7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGlvbi1jb2wge1xyXG4gICAgICAgIHBhZGRpbmctbGVmdDogMDtcclxuICAgIH1cclxuXHJcbiAgICBpb24tYnV0dG9uIHtcclxuICAgICAgICB0ZXh0LXRyYW5zZm9ybTogbm9uZTtcclxuICAgIH1cclxuICAgIFxyXG4gICAgLmNob29zZS1idG57XHJcbiAgICAgICAgLS1iYWNrZ3JvdW5kOiAjZWU0YTM1O1xyXG4gICAgICAgIC0tY29sb3I6I2ZmZjtcclxuICAgIH1cclxuICAgIC5oZWFkaW5nLTN7XHJcbiAgICAgICAgbWFyZ2luLXRvcDogMTJweDtcclxuICAgICAgICBjb2xvcjogIzkyOTc5MTtcclxuICAgIH1cclxuICAgIC5hZG1pc3Npb24tcm93e1xyXG4gICAgICAgIGlvbi1jb2x7XHJcbiAgICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgICAgICAgICAgdGV4dC1hbGlnbjogLW1vei1jZW50ZXI7XHJcbiAgICAgICAgICAgIGlvbi1idXR0b257XHJcbiAgICAgICAgICAgICAgICB0ZXh0LXRyYW5zZm9ybTogbm9uZTtcclxuICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICB3aWR0aDogNDAlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgIFxyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIC5idG4tcm93e1xyXG4gICAgICAgIGlvbi1jb2x7XHJcbiAgICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgICAgICAgICAgdGV4dC1hbGlnbjogLW1vei1jZW50ZXI7XHJcbiAgICAgICAgICAgIGlvbi1idXR0b257XHJcbiAgICAgICAgICAgICAgICB0ZXh0LXRyYW5zZm9ybTogbm9uZTtcclxuICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICB3aWR0aDogNzUlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgIFxyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIC5uZXh0LWJ0bi1jb2x7XHJcbiAgICAgICAgdGV4dC1hbGlnbjogbGVmdCAhaW1wb3J0YW50O1xyXG4gICAgfVxyXG4gICAgaW9uLXNlZ21lbnQtYnV0dG9ue1xyXG4gICAgICAgIHRleHQtdHJhbnNmb3JtOiBub25lO1xyXG4gICAgfVxyXG4gICAgaW1ne1xyXG4gICAgICAgIHdpZHRoOiA2MCU7XHJcbiAgICB9XHJcblxyXG4gICAgLnRhYnMge1xyXG4gIGJvcmRlci1yYWRpdXM6IDA7XHJcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICBib3gtc2hhZG93OiAwIDRweCA0cHggLTJweCByZ2JhKDAsMCwwLDAuNSk7XHJcbn1cclxuI2NoY2sxe1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICBvcGFjaXR5OiAwO1xyXG4gIHotaW5kZXg6IC0xO1xyXG59XHJcbi50YWIge1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIGNvbG9yOiB3aGl0ZTtcclxuICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gICYtbGFiZWwge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxuICAgIHBhZGRpbmc6IDFlbTtcclxuICAgIGJhY2tncm91bmQ6ICRtaWRuaWdodDtcclxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgLyogSWNvbiAqL1xyXG4gICAgJjpob3ZlciB7XHJcbiAgICAgIGJhY2tncm91bmQ6IGRhcmtlbigkbWlkbmlnaHQsIDEwJSk7XHJcbiAgICB9XHJcbiAgICAmOjphZnRlciB7XHJcbiAgICAgIGNvbnRlbnQ6IFwiXFwyNzZGXCI7XHJcbiAgICAgIHdpZHRoOiAxZW07XHJcbiAgICAgIGhlaWdodDogMWVtO1xyXG4gICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICAgIHRyYW5zaXRpb246IGFsbCAuMzVzO1xyXG4gICAgfVxyXG4gIH1cclxuICAmLWNvbnRlbnQge1xyXG4gICAgbWF4LWhlaWdodDogMDtcclxuICAgIHBhZGRpbmc6IDAgMWVtO1xyXG4gICAgY29sb3I6ICRtaWRuaWdodDtcclxuICAgIGJhY2tncm91bmQ6IHdoaXRlO1xyXG4gICAgdHJhbnNpdGlvbjogYWxsIC4zNXM7XHJcbiAgfVxyXG4gICYtY2xvc2Uge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGp1c3RpZnktY29udGVudDogZmxleC1lbmQ7XHJcbiAgICBwYWRkaW5nOiAxZW07XHJcbiAgICBmb250LXNpemU6IDAuNzVlbTtcclxuICAgIGJhY2tncm91bmQ6ICRtaWRuaWdodDtcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgICY6aG92ZXIge1xyXG4gICAgICBiYWNrZ3JvdW5kOiBkYXJrZW4oJG1pZG5pZ2h0LCAxMCUpO1xyXG4gICAgfVxyXG4gIH1cclxufVxyXG4jY2hjazE6Y2hlY2tlZCB7XHJcbiAgICArIC50YWItbGFiZWwge1xyXG4gICAgICBiYWNrZ3JvdW5kOiBkYXJrZW4oJG1pZG5pZ2h0LCAxMCUpO1xyXG4gICAgICAmOjphZnRlciB7XHJcbiAgICAgICAgdHJhbnNmb3JtOiByb3RhdGUoOTBkZWcpO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgICB+IC50YWItY29udGVudCB7XHJcbiAgICAgIG1heC1oZWlnaHQ6IDEwMHZoO1xyXG4gICAgICBwYWRkaW5nOiAxZW07XHJcbiAgICB9XHJcbiAgfVxyXG4gIC5pbnNpZGUtYm9keSB7XHJcbiAgICBwYWRkaW5nOiAyNXB4O1xyXG59XHJcbi5saXN0LWdyb3VwLnZlcnRpY2FsLXN0ZXBzIC5saXN0LWdyb3VwLWl0ZW0ge1xyXG4gIGJvcmRlcjogbm9uZTtcclxuICBib3JkZXItbGVmdDogM3B4IHNvbGlkICNiNGI0YjQ7XHJcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcclxuICBib3JkZXItcmFkaXVzOiAwO1xyXG4gIGNvdW50ZXItaW5jcmVtZW50OiBzdGVwLWNvdW50ZXI7XHJcbiAgcGFkZGluZy1sZWZ0OiAyMHB4O1xyXG4gIHBhZGRpbmctcmlnaHQ6IDBweDtcclxuICBwYWRkaW5nLWJvdHRvbTogN3B4O1xyXG4gIHBhZGRpbmctdG9wOiAwcHg7XHJcbn1cclxuLmxpc3QtZ3JvdXAudmVydGljYWwtc3RlcHMgLmxpc3QtZ3JvdXAtaXRlbTo6YmVmb3JlIHtcclxuICBib3JkZXItcmFkaXVzOiA1MCU7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogI2I0YjRiNDtcclxuICBjb2xvcjogI2ZmZjtcclxuICBjb250ZW50OiBjb3VudGVyKHN0ZXAtY291bnRlcik7XHJcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gIGZsb2F0OiBsZWZ0O1xyXG4gIGhlaWdodDogMjVweDtcclxuICBsaW5lLWhlaWdodDogMjVweDtcclxuICBtYXJnaW4tbGVmdDogLTM1cHg7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIHdpZHRoOiAyNXB4O1xyXG59XHJcbi5saXN0LWdyb3VwLnZlcnRpY2FsLXN0ZXBzIC5maW5hbDo6YmVmb3JlIHtcclxuICBib3JkZXItcmFkaXVzOiA1MCU7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogI2I0YjRiNDtcclxuICBjb2xvcjogI2ZmZjtcclxuICBjb250ZW50OiBjb3VudGVyKHN0ZXAtY291bnRlcik7XHJcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gIGZsb2F0OiBsZWZ0O1xyXG4gIGhlaWdodDogMjVweDtcclxuICBsaW5lLWhlaWdodDogMjVweDtcclxuICBtYXJnaW4tbGVmdDogLTMycHg7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIHdpZHRoOiAyNXB4O1xyXG59XHJcbi5maW5hbHtcclxuICBib3JkZXItbGVmdDogbm9uZSAhaW1wb3J0YW50O1xyXG59XHJcbi5saXN0LWdyb3VwLnZlcnRpY2FsLXN0ZXBzIC5zdGVwLWFjdGl2ZTo6YmVmb3JlIHtcclxuICBib3JkZXItcmFkaXVzOiA1MCU7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogIzJkZDM2ZjtcclxuICBjb2xvcjogI2ZmZjtcclxuICBjb250ZW50OiBjb3VudGVyKHN0ZXAtY291bnRlcik7XHJcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gIGZsb2F0OiBsZWZ0O1xyXG4gIGhlaWdodDogMjVweDtcclxuICBsaW5lLWhlaWdodDogMjVweDtcclxuICBtYXJnaW4tbGVmdDogLTM1cHg7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIHdpZHRoOiAyNXB4O1xyXG59XHJcbi5saXN0LWdyb3VwLnZlcnRpY2FsLXN0ZXBzIC5saXN0LWdyb3VwLWl0ZW0gc3BhbiwgLmxpc3QtZ3JvdXAudmVydGljYWwtc3RlcHMgLmxpc3QtZ3JvdXAtaXRlbSBhIHtcclxuICBkaXNwbGF5OiBibG9jaztcclxuICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gIHBhZGRpbmctdG9wOiAycHg7XHJcbn1cclxuXHJcbmRpdi5yZXVzYWJsZV9hY2NvcmRpb24ge1xyXG4gIHotaW5kZXg6IDk5O1xyXG4gIHBhZGRpbmc6IDA7XHJcbiAgbWFyZ2luOiAwO1xyXG4gIGxpc3Qtc3R5bGU6IG5vbmU7XHJcbiAgZGlzcGxheTogLXdlYmtpdC1ib3g7XHJcbiAgZGlzcGxheTogLW1vei1ib3g7XHJcbiAgZGlzcGxheTogLW1zLWZsZXhib3g7XHJcbiAgZGlzcGxheTogLXdlYmtpdC1mbGV4O1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleC13cmFwOiB3cmFwO1xyXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XHJcbiAgbGluZS1oZWlnaHQ6IDI1cHg7XHJcbiAgaGVpZ2h0OiAxODBweDtcclxuICBiYWNrZ3JvdW5kOiAjZjFmMWYxO1xyXG4gIHdpZHRoOiBhdXRvO1xyXG59XHJcbmRpdi50ZW1wbGF0ZV9hY2NvcmRpb24ge1xyXG4gIGRpdi50ZW1wbGF0ZV9jb250YWluZXJzIHtcclxuICAgIGRpc3BsYXk6IC13ZWJraXQtYm94O1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIG1pbi13aWR0aDogNDUlO1xyXG4gICAgbWluLWhlaWdodDogNjBweDtcclxuICAgIGJhY2tncm91bmQ6IHdoaXRlO1xyXG4gICAgLXdlYmtpdC1ib3gtb3JpZW50OiBob3Jpem9udGFsO1xyXG4gICAgLXdlYmtpdC1ib3gtZGlyZWN0aW9uOiBub3JtYWw7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xyXG4gICAgbWFyZ2luOiA1cHg7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgIGFsaWduLWNvbnRlbnQ6IGNlbnRlcjtcclxuICB9XHJcbn1cclxuXHJcbi50b2dnbGVfYnV0dG9uIHtcclxuICAtLWJhY2tncm91bmQ6ICNmMWYxZjE7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIHBhZGRpbmc6IDA7XHJcbiAgY29sb3I6ICMyMDIwMjA7XHJcbiAgY3Vyc29yOiBwb2ludGVyO1xyXG4gIG1pbi13aWR0aDogMTAwJTtcclxuICBpb24tbGFiZWx7XHJcbiAgICBmb250LXNpemU6IDE2cHg7XHJcbiAgICBjb2xvcjogIzIwMjAyMDtcclxuICAgIHRleHQtYWxpZ246IGxlZnQ7XHJcbiAgICBtYXJnaW4tbGVmdDogMjBweDtcclxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gIH1cclxufVxyXG5kaXYuYWNjb3JkaW9uLWNvbnRhaW5lciB7XHJcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICBvdmVyZmxvdy15OiBzY3JvbGw7XHJcbiAgdHJhbnNpdGlvbjogbWF4LWhlaWdodCAwLjVzIGVhc2UtaW4tb3V0O1xyXG4gIGhlaWdodDogYXV0bztcclxuICBiYWNrZ3JvdW5kOiByZ2IoMzEsIDQzLCA1NSk7XHJcbn1cclxuXHJcbmRpdi5hY2NvcmRpb24tY29udGFpbmVyLmNvbGxhcHNlZCB7XHJcbiAgbWF4LWhlaWdodDogMCAhaW1wb3J0YW50O1xyXG59XHJcblxyXG4iXX0= */";
      /***/
    }
  }]);
})();
//# sourceMappingURL=default~editillness-editillness-module~medicines-medicines-module-es5.js.map