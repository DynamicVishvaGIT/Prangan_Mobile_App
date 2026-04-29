(function () {
  function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return e; }; var t, e = {}, r = Object.prototype, n = r.hasOwnProperty, o = Object.defineProperty || function (t, e, r) { t[e] = r.value; }, i = "function" == typeof Symbol ? Symbol : {}, a = i.iterator || "@@iterator", c = i.asyncIterator || "@@asyncIterator", u = i.toStringTag || "@@toStringTag"; function define(t, e, r) { return Object.defineProperty(t, e, { value: r, enumerable: !0, configurable: !0, writable: !0 }), t[e]; } try { define({}, ""); } catch (t) { define = function define(t, e, r) { return t[e] = r; }; } function wrap(t, e, r, n) { var i = e && e.prototype instanceof Generator ? e : Generator, a = Object.create(i.prototype), c = new Context(n || []); return o(a, "_invoke", { value: makeInvokeMethod(t, r, c) }), a; } function tryCatch(t, e, r) { try { return { type: "normal", arg: t.call(e, r) }; } catch (t) { return { type: "throw", arg: t }; } } e.wrap = wrap; var h = "suspendedStart", l = "suspendedYield", f = "executing", s = "completed", y = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var p = {}; define(p, a, function () { return this; }); var d = Object.getPrototypeOf, v = d && d(d(values([]))); v && v !== r && n.call(v, a) && (p = v); var g = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(p); function defineIteratorMethods(t) { ["next", "throw", "return"].forEach(function (e) { define(t, e, function (t) { return this._invoke(e, t); }); }); } function AsyncIterator(t, e) { function invoke(r, o, i, a) { var c = tryCatch(t[r], t, o); if ("throw" !== c.type) { var u = c.arg, h = u.value; return h && "object" == typeof h && n.call(h, "__await") ? e.resolve(h.__await).then(function (t) { invoke("next", t, i, a); }, function (t) { invoke("throw", t, i, a); }) : e.resolve(h).then(function (t) { u.value = t, i(u); }, function (t) { return invoke("throw", t, i, a); }); } a(c.arg); } var r; o(this, "_invoke", { value: function value(t, n) { function callInvokeWithMethodAndArg() { return new e(function (e, r) { invoke(t, n, e, r); }); } return r = r ? r.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); } }); } function makeInvokeMethod(e, r, n) { var o = h; return function (i, a) { if (o === f) throw new Error("Generator is already running"); if (o === s) { if ("throw" === i) throw a; return { value: t, done: !0 }; } for (n.method = i, n.arg = a;;) { var c = n.delegate; if (c) { var u = maybeInvokeDelegate(c, n); if (u) { if (u === y) continue; return u; } } if ("next" === n.method) n.sent = n._sent = n.arg;else if ("throw" === n.method) { if (o === h) throw o = s, n.arg; n.dispatchException(n.arg); } else "return" === n.method && n.abrupt("return", n.arg); o = f; var p = tryCatch(e, r, n); if ("normal" === p.type) { if (o = n.done ? s : l, p.arg === y) continue; return { value: p.arg, done: n.done }; } "throw" === p.type && (o = s, n.method = "throw", n.arg = p.arg); } }; } function maybeInvokeDelegate(e, r) { var n = r.method, o = e.iterator[n]; if (o === t) return r.delegate = null, "throw" === n && e.iterator["return"] && (r.method = "return", r.arg = t, maybeInvokeDelegate(e, r), "throw" === r.method) || "return" !== n && (r.method = "throw", r.arg = new TypeError("The iterator does not provide a '" + n + "' method")), y; var i = tryCatch(o, e.iterator, r.arg); if ("throw" === i.type) return r.method = "throw", r.arg = i.arg, r.delegate = null, y; var a = i.arg; return a ? a.done ? (r[e.resultName] = a.value, r.next = e.nextLoc, "return" !== r.method && (r.method = "next", r.arg = t), r.delegate = null, y) : a : (r.method = "throw", r.arg = new TypeError("iterator result is not an object"), r.delegate = null, y); } function pushTryEntry(t) { var e = { tryLoc: t[0] }; 1 in t && (e.catchLoc = t[1]), 2 in t && (e.finallyLoc = t[2], e.afterLoc = t[3]), this.tryEntries.push(e); } function resetTryEntry(t) { var e = t.completion || {}; e.type = "normal", delete e.arg, t.completion = e; } function Context(t) { this.tryEntries = [{ tryLoc: "root" }], t.forEach(pushTryEntry, this), this.reset(!0); } function values(e) { if (e || "" === e) { var r = e[a]; if (r) return r.call(e); if ("function" == typeof e.next) return e; if (!isNaN(e.length)) { var o = -1, i = function next() { for (; ++o < e.length;) if (n.call(e, o)) return next.value = e[o], next.done = !1, next; return next.value = t, next.done = !0, next; }; return i.next = i; } } throw new TypeError(typeof e + " is not iterable"); } return GeneratorFunction.prototype = GeneratorFunctionPrototype, o(g, "constructor", { value: GeneratorFunctionPrototype, configurable: !0 }), o(GeneratorFunctionPrototype, "constructor", { value: GeneratorFunction, configurable: !0 }), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, u, "GeneratorFunction"), e.isGeneratorFunction = function (t) { var e = "function" == typeof t && t.constructor; return !!e && (e === GeneratorFunction || "GeneratorFunction" === (e.displayName || e.name)); }, e.mark = function (t) { return Object.setPrototypeOf ? Object.setPrototypeOf(t, GeneratorFunctionPrototype) : (t.__proto__ = GeneratorFunctionPrototype, define(t, u, "GeneratorFunction")), t.prototype = Object.create(g), t; }, e.awrap = function (t) { return { __await: t }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, c, function () { return this; }), e.AsyncIterator = AsyncIterator, e.async = function (t, r, n, o, i) { void 0 === i && (i = Promise); var a = new AsyncIterator(wrap(t, r, n, o), i); return e.isGeneratorFunction(r) ? a : a.next().then(function (t) { return t.done ? t.value : a.next(); }); }, defineIteratorMethods(g), define(g, u, "Generator"), define(g, a, function () { return this; }), define(g, "toString", function () { return "[object Generator]"; }), e.keys = function (t) { var e = Object(t), r = []; for (var n in e) r.push(n); return r.reverse(), function next() { for (; r.length;) { var t = r.pop(); if (t in e) return next.value = t, next.done = !1, next; } return next.done = !0, next; }; }, e.values = values, Context.prototype = { constructor: Context, reset: function reset(e) { if (this.prev = 0, this.next = 0, this.sent = this._sent = t, this.done = !1, this.delegate = null, this.method = "next", this.arg = t, this.tryEntries.forEach(resetTryEntry), !e) for (var r in this) "t" === r.charAt(0) && n.call(this, r) && !isNaN(+r.slice(1)) && (this[r] = t); }, stop: function stop() { this.done = !0; var t = this.tryEntries[0].completion; if ("throw" === t.type) throw t.arg; return this.rval; }, dispatchException: function dispatchException(e) { if (this.done) throw e; var r = this; function handle(n, o) { return a.type = "throw", a.arg = e, r.next = n, o && (r.method = "next", r.arg = t), !!o; } for (var o = this.tryEntries.length - 1; o >= 0; --o) { var i = this.tryEntries[o], a = i.completion; if ("root" === i.tryLoc) return handle("end"); if (i.tryLoc <= this.prev) { var c = n.call(i, "catchLoc"), u = n.call(i, "finallyLoc"); if (c && u) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } else if (c) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); } else { if (!u) throw new Error("try statement without catch or finally"); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } } } }, abrupt: function abrupt(t, e) { for (var r = this.tryEntries.length - 1; r >= 0; --r) { var o = this.tryEntries[r]; if (o.tryLoc <= this.prev && n.call(o, "finallyLoc") && this.prev < o.finallyLoc) { var i = o; break; } } i && ("break" === t || "continue" === t) && i.tryLoc <= e && e <= i.finallyLoc && (i = null); var a = i ? i.completion : {}; return a.type = t, a.arg = e, i ? (this.method = "next", this.next = i.finallyLoc, y) : this.complete(a); }, complete: function complete(t, e) { if ("throw" === t.type) throw t.arg; return "break" === t.type || "continue" === t.type ? this.next = t.arg : "return" === t.type ? (this.rval = this.arg = t.arg, this.method = "return", this.next = "end") : "normal" === t.type && e && (this.next = e), y; }, finish: function finish(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.finallyLoc === t) return this.complete(r.completion, r.afterLoc), resetTryEntry(r), y; } }, "catch": function _catch(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.tryLoc === t) { var n = r.completion; if ("throw" === n.type) { var o = n.arg; resetTryEntry(r); } return o; } } throw new Error("illegal catch attempt"); }, delegateYield: function delegateYield(e, r, n) { return this.delegate = { iterator: values(e), resultName: r, nextLoc: n }, "next" === this.method && (this.arg = t), y; } }, e; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

  function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return typeof key === "symbol" ? key : String(key); }

  function _toPrimitive(input, hint) { if (typeof input !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (typeof res !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["childprofile-childprofile-module"], {
    /***/
    "A4im":
    /*!***************************************************!*\
      !*** ./src/app/childprofile/childprofile.page.ts ***!
      \***************************************************/

    /*! exports provided: ChildprofilePage */

    /***/
    function A4im(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ChildprofilePage", function () {
        return ChildprofilePage;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_childprofile_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./childprofile.page.html */
      "FhnG");
      /* harmony import */


      var _childprofile_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./childprofile.page.scss */
      "agoW");
      /* harmony import */


      var _ionic_storage__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @ionic/storage */
      "e8h1");
      /* harmony import */


      var _api_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ./../api.service */
      "yTNM");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/forms */
      "3Pt+");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");
      /* harmony import */


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! @ionic/angular */
      "TEn/");

      var ChildprofilePage = /*#__PURE__*/function () {
        function ChildprofilePage(storage, apiService, actionSheetController, alertController, router, loadingController, menuCtrl) {
          _classCallCheck(this, ChildprofilePage);

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

        _createClass(ChildprofilePage, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            this.menuCtrl.enable(false);
            this.steptwoForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormGroup"]({
              q1: new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required),
              q2: new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"](''),
              q2_ans: new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"](''),
              q3: new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"](''),
              q4: new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"](''),
              q5: new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"](''),
              q6: new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"](''),
              q6_ans: new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"](''),
              q7: new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"](''),
              q8: new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"](''),
              q9: new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"](''),
              q1_med: new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].pattern(/^[a-zA-Z\. ]+$/)]),
              q2_med: new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"](''),
              q3_med: new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].pattern(/((\+*)((0[ -]*)*|((91 )*))((\d{12})+|(\d{10})+))|\d{5}([- ]*)\d{6}/)]),
              q4_med: new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"](''),
              q4_med_ans: new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"](''),
              q5_med_ans: new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"](''),
              q6_med: new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"](''),
              q7_med: new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"](''),
              q8_med: new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"](''),
              q9_med: new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"]('')
            });
          }
        }, {
          key: "toggle_accordion",
          value: function toggle_accordion() {
            this.accordion_expanded = this.accordion_expanded === false;
          }
        }, {
          key: "presentLoading",
          value: function presentLoading() {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/_regeneratorRuntime().mark(function _callee() {
              var loading, _yield$loading$onDidD, role, data;

              return _regeneratorRuntime().wrap(function _callee$(_context) {
                while (1) switch (_context.prev = _context.next) {
                  case 0:
                    _context.next = 2;
                    return this.loadingController.create({
                      message: 'Please wait...',
                      mode: 'ios',
                      backdropDismiss: false
                    });

                  case 2:
                    loading = _context.sent;
                    return _context.abrupt("return", loading.present());

                  case 6:
                    _yield$loading$onDidD = _context.sent;
                    role = _yield$loading$onDidD.role;
                    data = _yield$loading$onDidD.data;
                    console.log('Loading dismissed!');

                  case 10:
                  case "end":
                    return _context.stop();
                }
              }, _callee, this);
            }));
          }
        }, {
          key: "q1",
          get: function get() {
            return this.steptwoForm.get('q1');
          }
        }, {
          key: "q2",
          get: function get() {
            return this.steptwoForm.get('q2');
          }
        }, {
          key: "q2_ans",
          get: function get() {
            return this.steptwoForm.get('q2_ans');
          }
        }, {
          key: "q3",
          get: function get() {
            return this.steptwoForm.get('q3');
          }
        }, {
          key: "q4",
          get: function get() {
            return this.steptwoForm.get('q4');
          }
        }, {
          key: "q5",
          get: function get() {
            return this.steptwoForm.get('q5');
          }
        }, {
          key: "q6",
          get: function get() {
            return this.steptwoForm.get('q6');
          }
        }, {
          key: "q6_ans",
          get: function get() {
            return this.steptwoForm.get('q6_ans');
          }
        }, {
          key: "q7",
          get: function get() {
            return this.steptwoForm.get('q7');
          }
        }, {
          key: "q8",
          get: function get() {
            return this.steptwoForm.get('q8');
          }
        }, {
          key: "q9",
          get: function get() {
            return this.steptwoForm.get('q9');
          }
        }, {
          key: "q1_med",
          get: function get() {
            return this.steptwoForm.get('q1_med');
          }
        }, {
          key: "q2_med",
          get: function get() {
            return this.steptwoForm.get('q2_med');
          }
        }, {
          key: "q3_med",
          get: function get() {
            return this.steptwoForm.get('q3_med');
          }
        }, {
          key: "q4_med",
          get: function get() {
            return this.steptwoForm.get('q4_med');
          }
        }, {
          key: "q4_med_ans",
          get: function get() {
            return this.steptwoForm.get('q4_med_ans');
          }
        }, {
          key: "q5_med_ans",
          get: function get() {
            return this.steptwoForm.get('q5_med_ans');
          }
        }, {
          key: "q6_med",
          get: function get() {
            return this.steptwoForm.get('q6_med');
          }
        }, {
          key: "q7_med",
          get: function get() {
            return this.steptwoForm.get('q7_med');
          }
        }, {
          key: "q8_med",
          get: function get() {
            return this.steptwoForm.get('q8_med');
          }
        }, {
          key: "q9_med",
          get: function get() {
            return this.steptwoForm.get('q9_med');
          }
        }, {
          key: "onSubmit",
          value: function onSubmit(body) {
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

                _this.presentAlert("Daycare Step 2 form updated successfully"); // this.steptwoForm.reset()


                console.log(data);
              }, function (err) {
                console.log(err);

                _this.loadingController.dismiss();

                _this.apiService.presentToast(err.error, 2000);
              });
            } else {
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
          }
        }, {
          key: "ionViewWillEnter",
          value: function ionViewWillEnter() {
            if (this.menuCtrl.isEnabled) {
              console.log('hi');
              this.menuCtrl.swipeGesture(false);
            }
          }
        }, {
          key: "ionViewDidEnter",
          value: function ionViewDidEnter() {
            var _this2 = this;

            this.presentLoading().then(function () {
              _this2.storage.get('user').then(function (data) {
                if (data) {
                  var user = JSON.parse(data);
                  _this2.userid = user.id;
                  console.log('userid', _this2.userid, user.userid);

                  _this2.apiService.fetchDayCareStep2(_this2.userid).then(function (data) {
                    console.log('fetchDayCareStep2', data.data);
                    var fetchDayCareStep2 = JSON.parse(data.data);

                    if (fetchDayCareStep2) {
                      _this2.fetchDayCareStep2_env = fetchDayCareStep2['a'];
                      _this2.fetchDayCareStep2_med = fetchDayCareStep2['b'];

                      if (_this2.fetchDayCareStep2_env && _this2.fetchDayCareStep2_med) {
                        _this2.isFormSubmitted = true;
                        console.log(' this.fetchDayCareStep2', _this2.fetchDayCareStep2_env, _this2.fetchDayCareStep2_med);
                        _this2.child_evn_id = _this2.fetchDayCareStep2_env.id;
                        _this2.child_medical_id = _this2.fetchDayCareStep2_med.id;

                        _this2.steptwoForm.patchValue({
                          'q1': _this2.fetchDayCareStep2_env.room,
                          'q2': _this2.fetchDayCareStep2_env.playgroup,
                          'q2_ans': _this2.fetchDayCareStep2_env.playgroup_specify,
                          'q3': _this2.fetchDayCareStep2_env.playmentes_specify,
                          'q4': _this2.fetchDayCareStep2_env.tv,
                          'q5': _this2.fetchDayCareStep2_env.play,
                          'q6': _this2.fetchDayCareStep2_env.pets,
                          'q6_ans': _this2.fetchDayCareStep2_env.pets_specify,
                          'q7': _this2.fetchDayCareStep2_env.indoor_activity,
                          'q8': _this2.fetchDayCareStep2_env.outdoor_activity,
                          'q9': _this2.fetchDayCareStep2_env.child_favorite,
                          'q1_med': _this2.fetchDayCareStep2_med.pediatricians_name,
                          'q2_med': _this2.fetchDayCareStep2_med.address,
                          'q3_med': _this2.fetchDayCareStep2_med.telephone_number,
                          'q4_med': _this2.fetchDayCareStep2_med.allergic_reaction,
                          'q4_med_ans': _this2.fetchDayCareStep2_med.allergies,
                          'q5_med_ans': _this2.fetchDayCareStep2_med.allergies_usually_mainfest,
                          'q6_med': _this2.fetchDayCareStep2_med.allergic_reaction,
                          'q7_med': _this2.fetchDayCareStep2_med.fever,
                          'q8_med': _this2.fetchDayCareStep2_med.chile_prone,
                          'q9_med': _this2.fetchDayCareStep2_med.question
                        });

                        _this2.isDataPresent = true;

                        _this2.loadingController.dismiss();
                      } else {
                        _this2.isDataPresent = false;

                        _this2.loadingController.dismiss();
                      }
                    } else {
                      _this2.isDataPresent = false;

                      _this2.loadingController.dismiss();
                    }
                  });
                }
              });
            });
          }
        }, {
          key: "presentAlert",
          value: function presentAlert(message) {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/_regeneratorRuntime().mark(function _callee2() {
              var _this3 = this;

              var alert;
              return _regeneratorRuntime().wrap(function _callee2$(_context2) {
                while (1) switch (_context2.prev = _context2.next) {
                  case 0:
                    _context2.next = 2;
                    return this.alertController.create({
                      header: 'Successful',
                      message: message,
                      mode: 'ios',
                      backdropDismiss: false,
                      buttons: [{
                        text: 'OK',
                        handler: function handler() {
                          _this3.router.navigate(['childotherinfo']);
                        }
                      }]
                    });

                  case 2:
                    alert = _context2.sent;
                    _context2.next = 5;
                    return alert.present();

                  case 5:
                  case "end":
                    return _context2.stop();
                }
              }, _callee2, this);
            }));
          }
        }, {
          key: "ionViewDidLeave",
          value: function ionViewDidLeave() {
            this.menuCtrl.enable(true);
          }
        }, {
          key: "goToNextStep",
          value: function goToNextStep() {
            if (this.isFormSubmitted) {
              this.router.navigate(['childotherinfo']);
            } else {
              this.apiService.presentToast('Please submit  form to go next step', 3000);
            }
          }
        }]);

        return ChildprofilePage;
      }();

      ChildprofilePage.ctorParameters = function () {
        return [{
          type: _ionic_storage__WEBPACK_IMPORTED_MODULE_3__["Storage"]
        }, {
          type: _api_service__WEBPACK_IMPORTED_MODULE_4__["ApiService"]
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_8__["ActionSheetController"]
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_8__["AlertController"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_7__["Router"]
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_8__["LoadingController"]
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_8__["MenuController"]
        }];
      };

      ChildprofilePage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_6__["Component"])({
        selector: 'app-childprofile',
        template: _raw_loader_childprofile_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_childprofile_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
      })], ChildprofilePage);
      /***/
    },

    /***/
    "BF4i":
    /*!*****************************************************!*\
      !*** ./src/app/childprofile/childprofile.module.ts ***!
      \*****************************************************/

    /*! exports provided: ChildprofilePageModule */

    /***/
    function BF4i(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ChildprofilePageModule", function () {
        return ChildprofilePageModule;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/forms */
      "3Pt+");
      /* harmony import */


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @ionic/angular */
      "TEn/");
      /* harmony import */


      var _childprofile_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./childprofile-routing.module */
      "Sp3E");
      /* harmony import */


      var _childprofile_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./childprofile.page */
      "A4im");

      var ChildprofilePageModule = /*#__PURE__*/_createClass(function ChildprofilePageModule() {
        _classCallCheck(this, ChildprofilePageModule);
      });

      ChildprofilePageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _childprofile_routing_module__WEBPACK_IMPORTED_MODULE_5__["ChildprofilePageRoutingModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"]],
        declarations: [_childprofile_page__WEBPACK_IMPORTED_MODULE_6__["ChildprofilePage"]]
      })], ChildprofilePageModule);
      /***/
    },

    /***/
    "FhnG":
    /*!*******************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/childprofile/childprofile.page.html ***!
      \*******************************************************************************************/

    /*! exports provided: default */

    /***/
    function FhnG(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-header class=\"ion-no-border\">\n  <ion-toolbar>\n    <ion-title>Daycare Registration Form</ion-title>\n    <ion-buttons slot=\"start\">\n      <ion-button  shape=\"round\"[routerLink]=\"['/addadmission']\">\n        <ion-icon color=\"light\" name=\"arrow-back-outline\"></ion-icon>\n      </ion-button>\n    </ion-buttons>\n  </ion-toolbar>\n  \n\n</ion-header>\n\n<ion-content>\n  <ion-item lines=\"none\" (click)=\"this.toggle_accordion()\" class=\"toggle_button\">\n    <ion-label>Childs Enviroment & Child's medical record</ion-label>\n    <ion-icon slot=\"end\" color=\"primary\" name=\"chevron-up-circle-outline\" *ngIf=\"!accordion_expanded\"></ion-icon>\n    <ion-icon slot=\"end\" color=\"primary\" name=\"chevron-down-circle-outline\" *ngIf=\"accordion_expanded\"></ion-icon>\n  </ion-item>\n\n\n  <div #accordion class='accordion-container' [style.maxHeight.px]=\"250\" [class.collapsed]=\"!this.accordion_expanded\">\n    <div class=\"reusable_accordion template_accordion\">\n      <ol class=\"list-group vertical-steps\" style=\"margin-top: 0;list-style: none;padding-left: 28px;\">\n        <li class=\"list-group-item step-active\" [routerLink]=\"['/addadmission']\" routerLinkActive=\"router-link-active\" ><span>Daycare Registration</span></li>\n        <li class=\"list-group-item step-active\" ><span>Child's Enviroment & Child's medical record</span></li>\n        <li class=\"list-group-item\" [routerLink]=\"['/childotherinfo']\" routerLinkActive=\"router-link-active\" ><span>Food Habits ,Toilet Habits & Speech and Physical Growth</span></li>\n        <li class=\"list-group-item final\" [routerLink]=\"['/childotherinfotwo']\"><span>Consent Form</span></li>\n      </ol>\n    </div>\n  </div>\n  <div class=\"margin-ionic\">\n<form [formGroup]=\"steptwoForm\" (ngSubmit)=\"onSubmit(steptwoForm.value)\">\n    <p class=\"header-1\"><b>Child's Environment</b> </p>\n    <p class=\"heading\">Does the child have a separate room ? <span class=\"text-danger\">*</span></p>\n    \n    <ion-radio-group formControlName=\"q1\" allowEmptySelection=\"false\" color=\"primary\">\n      <ion-row>\n        <ion-col size=\"3\">\n          <ion-item lines=\"none\">\n            <ion-radio value=\"Yes\"></ion-radio>\n            <ion-label>Yes</ion-label>\n          </ion-item>\n        </ion-col>\n        <ion-col size=\"3\">\n          <ion-item lines=\"none\">\n            <ion-radio value=\"No\"></ion-radio>\n            <ion-label>No</ion-label>\n          </ion-item>\n        </ion-col>\n      </ion-row>\n    </ion-radio-group>\n    <p class=\"heading\">Does the child have playgroup experience ? </p>\n    \n    <ion-radio-group formControlName=\"q2\" allowEmptySelection=\"false\" color=\"primary\">\n      <ion-row>\n        <ion-col size=\"3\">\n          <ion-item lines=\"none\">\n            <ion-radio value=\"Yes\"></ion-radio>\n            <ion-label>Yes</ion-label>\n          </ion-item>\n        </ion-col>\n        <ion-col size=\"3\">\n          <ion-item lines=\"none\">\n            <ion-radio value=\"No\"></ion-radio>\n            <ion-label>No</ion-label>\n          </ion-item>\n        </ion-col>\n      \n      </ion-row>\n    </ion-radio-group>\n    <ion-row>\n      <ion-col >\n        <ion-label>Specify </ion-label>\n        <ion-item lines=\"none\">\n          <ion-input formControlName=\"q2_ans\" type=\"text\"></ion-input>\n        </ion-item>\n      </ion-col>\n    </ion-row>\n    <ion-label>Does the child have neighborhood playmates ? </ion-label>\n    <ion-label>Specify </ion-label>\n    <ion-item lines=\"none\">\n    <ion-input type=\"text\" formControlName=\"q3\"></ion-input>\n    </ion-item>\n    <ion-label>When and with whom does the child watch TV ? </ion-label>\n    <ion-item lines=\"none\">\n    <ion-input type=\"text\" formControlName=\"q4\"></ion-input>\n    </ion-item>\n    <p class=\"heading\">Does the child prefer to play ? </p>\n    <ion-radio-group formControlName=\"q5\" allowEmptySelection=\"false\" color=\"primary\">\n      <ion-row>\n        <ion-col>\n          <ion-item lines=\"none\">\n            <ion-radio value=\"alone\"></ion-radio>\n            <ion-label>Alone</ion-label>\n          </ion-item>\n        </ion-col>\n        <ion-col>\n          <ion-item lines=\"none\">\n            <ion-radio value=\"with playments\"></ion-radio>\n            <ion-label>With playmates</ion-label>\n          </ion-item>\n        </ion-col>\n        <ion-col>\n          <ion-item lines=\"none\">\n            <ion-radio value=\"with siblings\"></ion-radio>\n            <ion-label>With siblings</ion-label>\n          </ion-item>\n        </ion-col>\n        <ion-col>\n          <ion-item lines=\"none\">\n            <ion-radio value=\"with adults\"></ion-radio>\n            <ion-label>With adults</ion-label>\n          </ion-item>\n        </ion-col>\n      </ion-row>\n    </ion-radio-group>\n    <ion-row>\n      <ion-col size=\"6\">\n        <ion-label>Does the child have any pets ? </ion-label>\n        <ion-radio-group formControlName=\"q6\" allowEmptySelection=\"false\" color=\"primary\">\n          <ion-row>\n            <ion-col>\n              <ion-item lines=\"none\">\n                <ion-radio value=\"Yes\"></ion-radio>\n                <ion-label>Yes</ion-label>\n              </ion-item>\n            </ion-col>\n            <ion-col>\n              <ion-item lines=\"none\">\n                <ion-radio value=\"No\"></ion-radio>\n                <ion-label>No</ion-label>\n              </ion-item>\n            </ion-col>\n          </ion-row>\n        </ion-radio-group>\n      </ion-col>\n      <ion-col size=\"6\">\n        <ion-label>If yes, please specify </ion-label>\n        <br>\n        <ion-item lines=\"none\" class=\"specify-item\">\n          <ion-input formControlName=\"q6_ans\" type=\"text\"></ion-input>\n        </ion-item>\n      </ion-col>\n    </ion-row>\n  \n    <ion-row>\n      <ion-col size=\"6\">\n        <ion-label>What is child's favourite indoor activity ? </ion-label>\n        <ion-item lines=\"none\">\n          <ion-input formControlName=\"q7\" type=\"text\"></ion-input>\n        </ion-item>\n      </ion-col>\n      <ion-col size=\"6\">\n        <ion-label>List child's favourite outdoor activity </ion-label>\n        <ion-item lines=\"none\">\n          <ion-input type=\"text\" formControlName=\"q8\"></ion-input>\n        </ion-item>\n      </ion-col>\n    </ion-row>\n    <ion-label>List the child's favourite toys, play equipments and books </ion-label>\n    <ion-item lines=\"none\">\n    <ion-input type=\"text\" formControlName=\"q9\"></ion-input>\n    </ion-item>\n    <p class=\"header-1\"><b>Child's Medical Record</b></p>\n    <br>\n    <ion-label>Pediatrician's Name </ion-label>\n    <ion-item lines=\"none\">\n    <ion-input type=\"text\" formControlName=\"q1_med\"></ion-input>\n    </ion-item>\n    <div class=\"error-div\" *ngIf=\"(q1_med?.invalid && q1_med?.touched) || q1_med?.dirty\">\n      <small *ngIf=\"q1_med.errors?.pattern\" class=\"text-danger\">Enter a valid pediatrician's name</small>\n    </div>\n    <br>\n    <ion-label>Address </ion-label>\n    <ion-item lines=\"none\">\n      <ion-textarea rows=\"6\" cols=\"20\" formControlName=\"q2_med\"></ion-textarea>\n    </ion-item>\n    <br>\n    <ion-label>Telephone No. </ion-label>\n    <ion-item lines=\"none\">\n    <ion-input type=\"tel\" formControlName=\"q3_med\" maxlength=\"10\"></ion-input>\n    </ion-item>\n    <div class=\"error-div\" *ngIf=\"(q3_med?.invalid && q3_med?.touched) || q3_med?.dirty\">\n      <small *ngIf=\"q3_med.errors?.pattern\" class=\"text-danger\">Enter a valid telephone number</small>\n    </div>\n    <br> \n   \n    <ion-row>\n      <ion-col size=\"6\">\n        <ion-label>Does your child have any allergies? \n        </ion-label>\n        <ion-radio-group formControlName=\"q4_med\" allowEmptySelection=\"false\" color=\"primary\">\n          <ion-row>\n            <ion-col>\n              <ion-item lines=\"none\">\n                <ion-radio value=\"Yes\"></ion-radio>\n                <ion-label>Yes</ion-label>\n              </ion-item>\n            </ion-col>\n            <ion-col>\n              <ion-item lines=\"none\">\n                <ion-radio value=\"No\"></ion-radio>\n                <ion-label>No</ion-label>\n              </ion-item>\n            </ion-col>\n          </ion-row>\n        </ion-radio-group>\n      </ion-col>\n      <ion-col size=\"6\">\n        <ion-label>If yes, please specify </ion-label>\n        <br>\n        <ion-item lines=\"none\" class=\"specify-item\">\n          <ion-input type=\"text\" formControlName=\"q4_med_ans\"></ion-input>\n        </ion-item>\n      </ion-col>\n    </ion-row>\n    <p class=\"heading\">How does the allergies usually manifest itself ? </p>\n    <ion-radio-group allowEmptySelection=\"false\" formControlName=\"q5_med_ans\" color=\"primary\">\n      <ion-row>\n        <ion-col>\n          <ion-item lines=\"none\">\n            <ion-radio value=\"Hives\"></ion-radio>\n            <ion-label>Hives</ion-label>\n          </ion-item>\n        </ion-col>\n        <ion-col>\n          <ion-item lines=\"none\">\n            <ion-radio value=\"Asthma\"></ion-radio>\n            <ion-label>Asthma</ion-label>\n          </ion-item>\n        </ion-col>\n        <ion-col>\n          <ion-item lines=\"none\">\n            <ion-radio value=\"Rashes\"></ion-radio>\n            <ion-label>Rashes</ion-label>\n          </ion-item>\n        </ion-col>\n        <ion-col>\n          <ion-item lines=\"none\">\n            <ion-radio value=\"other\"></ion-radio>\n            <ion-label>Other</ion-label>\n          </ion-item>\n        </ion-col>\n      </ion-row>\n    </ion-radio-group>\n    <ion-label>Special instruction in case of an allergic reaction </ion-label>\n    <ion-item lines=\"none\">\n    <ion-input type=\"text\" formControlName=\"q6_med\"></ion-input>\n    </ion-item>\n    <ion-label>Does the child run fever easily ? </ion-label>\n    <ion-radio-group allowEmptySelection=\"false\" formControlName=\"q7_med\" color=\"primary\">\n      <ion-row>\n        <ion-col>\n          <ion-item lines=\"none\">\n            <ion-radio value=\"Yes\"></ion-radio>\n            <ion-label>Yes</ion-label>\n          </ion-item>\n        </ion-col>\n        <ion-col>\n          <ion-item lines=\"none\">\n            <ion-radio value=\"No\"></ion-radio>\n            <ion-label>No</ion-label>\n          </ion-item>\n        </ion-col>\n      </ion-row>\n    </ion-radio-group>\n    <p class=\"heading\">Is your child prone to :</p>\n    <ion-radio-group formControlName=\"q8_med\" allowEmptySelection=\"false\" color=\"primary\">\n      <ion-row>\n        <ion-col size=\"5\">\n          <ion-item lines=\"none\">\n            <ion-radio value=\"Stomach Update\"></ion-radio>\n            <ion-label>Stomach Upset</ion-label>\n          </ion-item>\n        </ion-col>\n        <ion-col size=\"5\">\n          <ion-item lines=\"none\">\n            <ion-radio value=\"Cold\"></ion-radio>\n            <ion-label>Cold</ion-label>\n          </ion-item>\n        </ion-col>\n        <ion-col size=\"5\">\n          <ion-item lines=\"none\">\n            <ion-radio value=\"Cough\"></ion-radio>\n            <ion-label>Cough</ion-label>\n          </ion-item>\n        </ion-col>\n        <ion-col size=\"5\">\n          <ion-item lines=\"none\">\n            <ion-radio value=\"Sore Throat\"></ion-radio>\n            <ion-label>Sore throat</ion-label>\n          </ion-item>\n        </ion-col>\n        <ion-col size=\"5\">\n          <ion-item lines=\"none\">\n            <ion-radio value=\"Ear Aches\"></ion-radio>\n            <ion-label>Ear ache </ion-label>\n          </ion-item>\n        </ion-col>\n      </ion-row>\n    </ion-radio-group>\n    <ion-label>Are there any special family circumstance which may be a factor in your child's present behaviour ?(Divorce, New baby, Moving of house,Hospitalization etc) </ion-label>\n    <ion-item lines=\"none\">\n    <ion-input type=\"text\" formControlName=\"q9_med\"></ion-input>\n    </ion-item>\n    <ion-row class=\"admission-row\">\n      <ion-col >\n        <ion-button type=\"submit\" shape=\"round\" [disabled]=\"steptwoForm.invalid\"  color=\"primary\">\n         Submit\n        </ion-button>\n      </ion-col>\n      <ion-col class=\"next-btn-col\">\n        <ion-button (click)=\"goToNextStep()\" [disabled]=\"!isFormSubmitted\"  shape=\"round\"  color=\"secondary\">\n          Next\n        </ion-button>\n      </ion-col>\n    </ion-row>\n  </form>\n  </div>\n</ion-content>\n";
      /***/
    },

    /***/
    "Sp3E":
    /*!*************************************************************!*\
      !*** ./src/app/childprofile/childprofile-routing.module.ts ***!
      \*************************************************************/

    /*! exports provided: ChildprofilePageRoutingModule */

    /***/
    function Sp3E(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ChildprofilePageRoutingModule", function () {
        return ChildprofilePageRoutingModule;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");
      /* harmony import */


      var _childprofile_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./childprofile.page */
      "A4im");

      var routes = [{
        path: '',
        component: _childprofile_page__WEBPACK_IMPORTED_MODULE_3__["ChildprofilePage"]
      }];

      var ChildprofilePageRoutingModule = /*#__PURE__*/_createClass(function ChildprofilePageRoutingModule() {
        _classCallCheck(this, ChildprofilePageRoutingModule);
      });

      ChildprofilePageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
      })], ChildprofilePageRoutingModule);
      /***/
    },

    /***/
    "agoW":
    /*!*****************************************************!*\
      !*** ./src/app/childprofile/childprofile.page.scss ***!
      \*****************************************************/

    /*! exports provided: default */

    /***/
    function agoW(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = ".wrap {\n  text-align: center;\n  position: relative;\n}\n\n.wrap:before {\n  content: \"\";\n  position: absolute;\n  top: 20%;\n  left: 18%;\n  border-top: 0.5px solid #677483;\n  border-width: thin;\n  width: 65%;\n  transform: translateY(-50%);\n  border-style: dashed;\n}\n\n.active {\n  border: 1px solid #2dd36f !important;\n  color: #ffffff;\n}\n\n.icon-circle {\n  position: relative;\n  display: inline-block;\n  margin: -1px;\n  width: 30px;\n  height: 30px;\n  font-size: 26px;\n  border-radius: 50%;\n  border: 1px solid #202020;\n  background: #fff;\n  color: #2dd36f;\n  text-align: center;\n}\n\n.icon-circle ion-icon {\n  margin-top: 2px;\n  font-size: 20px;\n}\n\n.header-1 {\n  color: #676767;\n  margin-bottom: 0;\n  font-size: 16px;\n}\n\n.heading-1 {\n  color: #676767;\n  margin-bottom: 0;\n  font-size: 16px;\n}\n\n.heading {\n  color: #9b9ca6;\n  margin-bottom: 0;\n  font-size: 14px;\n}\n\nion-label {\n  color: #9b9ca6;\n  font-size: 14px;\n}\n\nion-input {\n  border: 1px solid #9b9ca6;\n  border-radius: 5px;\n  --padding-start: 5px !important;\n  height: 35px;\n}\n\nion-textarea {\n  border: 1px solid #9b9ca6;\n  border-radius: 5px;\n  --padding-start: 5px !important;\n}\n\nion-datetime {\n  border: 1px solid #9b9ca6;\n  border-radius: 5px;\n  --padding-start: 5px !important;\n  width: 100%;\n  height: 35px;\n}\n\nion-item {\n  --padding-start: 0;\n  --ripple-color: transparent;\n  --background-activated: transparent;\n  --background-activated-opacity:transparent;\n  --background-focused: transparent;\n  --background-focused-opacity:transparent;\n  --background-hover: transparent;\n  --background-hover-opacity:transparent;\n}\n\nion-item ion-label {\n  font-size: 12px;\n  color: #9b9ca6;\n}\n\nion-radio-group ion-item {\n  border-bottom: 0;\n}\n\nion-radio-group ion-col {\n  padding-left: 0;\n}\n\nion-radio-group ion-radio {\n  margin-right: 8px;\n  width: 18px;\n  height: 18px;\n}\n\nion-col {\n  padding-left: 0;\n}\n\nion-button {\n  text-transform: none;\n}\n\n.choose-btn {\n  --background: #ee4a35;\n}\n\n.heading-3 {\n  margin-top: 12px;\n  color: #929791;\n}\n\n.color-green {\n  color: #2dd36f;\n  font-weight: bold;\n  margin-top: 10px;\n}\n\n.checkmark {\n  margin-top: -2px;\n}\n\n.dot {\n  color: #202020 !important;\n  margin-top: 2px;\n}\n\n.other-info {\n  margin-top: 16px;\n}\n\n.specify-item ion-input {\n  margin-top: 25px;\n}\n\n.admission-row ion-col {\n  text-align: center;\n  text-align: -moz-center;\n}\n\n.admission-row ion-col ion-button {\n  text-transform: none;\n  width: 80%;\n}\n\n.next-btn-col {\n  text-align: left !important;\n}\n\n.list-group.vertical-steps .list-group-item {\n  border: none;\n  border-left: 3px solid #b4b4b4;\n  box-sizing: border-box;\n  border-radius: 0;\n  counter-increment: step-counter;\n  padding-left: 20px;\n  padding-right: 0px;\n  padding-bottom: 7px;\n  padding-top: 0px;\n}\n\n.list-group.vertical-steps .list-group-item::before {\n  border-radius: 50%;\n  background-color: #b4b4b4;\n  color: #fff;\n  content: counter(step-counter);\n  display: inline-block;\n  float: left;\n  height: 25px;\n  line-height: 25px;\n  margin-left: -35px;\n  text-align: center;\n  width: 25px;\n}\n\n.list-group.vertical-steps .final::before {\n  border-radius: 50%;\n  background-color: #b4b4b4;\n  color: #fff;\n  content: counter(step-counter);\n  display: inline-block;\n  float: left;\n  height: 25px;\n  line-height: 25px;\n  margin-left: -32px;\n  text-align: center;\n  width: 25px;\n}\n\n.final {\n  border-left: none !important;\n}\n\n.step-active {\n  border-left: 3px solid #2dd36f !important;\n}\n\n.list-group.vertical-steps .step-active::before {\n  border-radius: 50%;\n  background-color: #2dd36f;\n  color: #fff;\n  content: counter(step-counter);\n  display: inline-block;\n  float: left;\n  height: 25px;\n  line-height: 25px;\n  margin-left: -35px;\n  text-align: center;\n  width: 25px;\n}\n\n.list-group.vertical-steps .list-group-item span, .list-group.vertical-steps .list-group-item a {\n  display: block;\n  overflow: hidden;\n  padding-top: 2px;\n}\n\ndiv.reusable_accordion {\n  z-index: 99;\n  padding: 0;\n  margin: 0;\n  list-style: none;\n  display: flex;\n  flex-wrap: wrap;\n  flex-direction: column;\n  justify-content: space-around;\n  line-height: 25px;\n  height: 180px;\n  background: #f1f1f1;\n  width: auto;\n}\n\ndiv.template_accordion div.template_containers {\n  display: flex;\n  min-width: 45%;\n  min-height: 60px;\n  background: white;\n  flex-direction: row;\n  margin: 5px;\n  justify-content: center;\n  align-content: center;\n}\n\n.toggle_button {\n  --background: #f1f1f1;\n  width: 100%;\n  text-align: center;\n  padding: 0;\n  color: #202020;\n  cursor: pointer;\n  min-width: 100%;\n}\n\n.toggle_button ion-label {\n  font-size: 16px;\n  color: #202020;\n  text-align: left;\n  margin-left: 20px;\n  font-weight: bold;\n}\n\ndiv.accordion-container {\n  overflow: hidden;\n  overflow-y: scroll;\n  transition: max-height 0.5s ease-in-out;\n  height: auto;\n  background: #1f2b37;\n}\n\ndiv.accordion-container.collapsed {\n  max-height: 0 !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL2NoaWxkcHJvZmlsZS5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxrQkFBQTtFQUNBLGtCQUFBO0FBQ0o7O0FBRUU7RUFDRSxXQUFBO0VBQ0Esa0JBQUE7RUFDQSxRQUFBO0VBQ0EsU0FBQTtFQUNBLCtCQUFBO0VBQ0Esa0JBQUE7RUFDQSxVQUFBO0VBQ0EsMkJBQUE7RUFDQSxvQkFBQTtBQUNKOztBQUNFO0VBQ0Usb0NBQUE7RUFDQSxjQUFBO0FBRUo7O0FBQUU7RUFDRSxrQkFBQTtFQUNBLHFCQUFBO0VBQ0EsWUFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0EsZUFBQTtFQUNBLGtCQUFBO0VBQ0EseUJBQUE7RUFDQSxnQkFBQTtFQUNBLGNBQUE7RUFDQSxrQkFBQTtBQUdKOztBQURJO0VBQ0ksZUFBQTtFQUNBLGVBQUE7QUFHUjs7QUFFRTtFQUNFLGNBQUE7RUFDQSxnQkFBQTtFQUNBLGVBQUE7QUFDSjs7QUFDRTtFQUNFLGNBQUE7RUFDQSxnQkFBQTtFQUNBLGVBQUE7QUFFSjs7QUFBQTtFQUNJLGNBQUE7RUFDQSxnQkFBQTtFQUNBLGVBQUE7QUFHSjs7QUFEQTtFQUNJLGNBQUE7RUFDQSxlQUFBO0FBSUo7O0FBRkE7RUFDSSx5QkFBQTtFQUNBLGtCQUFBO0VBQ0EsK0JBQUE7RUFDQSxZQUFBO0FBS0o7O0FBSEE7RUFDSSx5QkFBQTtFQUNBLGtCQUFBO0VBQ0EsK0JBQUE7QUFNSjs7QUFKQTtFQUNJLHlCQUFBO0VBQ0Esa0JBQUE7RUFDQSwrQkFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0FBT0o7O0FBSkE7RUFFSSxrQkFBQTtFQUNBLDJCQUFBO0VBQ0EsbUNBQUE7RUFDQSwwQ0FBQTtFQUNBLGlDQUFBO0VBQ0Esd0NBQUE7RUFDQSwrQkFBQTtFQUNBLHNDQUFBO0FBTUo7O0FBSkk7RUFDSSxlQUFBO0VBQ0osY0FBQTtBQU1KOztBQURRO0VBQ0ksZ0JBQUE7QUFJWjs7QUFGUTtFQUNJLGVBQUE7QUFJWjs7QUFGUTtFQUNBLGlCQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7QUFJUjs7QUFBSTtFQUNJLGVBQUE7QUFHUjs7QUFBSTtFQUNJLG9CQUFBO0FBR1I7O0FBREk7RUFDSSxxQkFBQTtBQUlSOztBQUZJO0VBQ0ksZ0JBQUE7RUFDQSxjQUFBO0FBS1I7O0FBSEk7RUFDSSxjQUFBO0VBQ0EsaUJBQUE7RUFDQSxnQkFBQTtBQU1SOztBQUpJO0VBQ0ksZ0JBQUE7QUFPUjs7QUFMSTtFQUNJLHlCQUFBO0VBQ0EsZUFBQTtBQVFSOztBQU5JO0VBQ0ksZ0JBQUE7QUFTUjs7QUFOUTtFQUNJLGdCQUFBO0FBU1o7O0FBTFE7RUFDSSxrQkFBQTtFQUNBLHVCQUFBO0FBUVo7O0FBUFk7RUFDSSxvQkFBQTtFQUVBLFVBQUE7QUFRaEI7O0FBSEk7RUFDSSwyQkFBQTtBQU1SOztBQUpJO0VBQ0ksWUFBQTtFQUNBLDhCQUFBO0VBQ0Esc0JBQUE7RUFDQSxnQkFBQTtFQUNBLCtCQUFBO0VBQ0Esa0JBQUE7RUFDQSxrQkFBQTtFQUNBLG1CQUFBO0VBQ0EsZ0JBQUE7QUFPUjs7QUFMTTtFQUNFLGtCQUFBO0VBQ0EseUJBQUE7RUFDQSxXQUFBO0VBQ0EsOEJBQUE7RUFDQSxxQkFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0EsaUJBQUE7RUFDQSxrQkFBQTtFQUNBLGtCQUFBO0VBQ0EsV0FBQTtBQVFSOztBQU5NO0VBQ0Usa0JBQUE7RUFDQSx5QkFBQTtFQUNBLFdBQUE7RUFDQSw4QkFBQTtFQUNBLHFCQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxpQkFBQTtFQUNBLGtCQUFBO0VBQ0Esa0JBQUE7RUFDQSxXQUFBO0FBU1I7O0FBUE07RUFDRSw0QkFBQTtBQVVSOztBQVJNO0VBQ0UseUNBQUE7QUFXUjs7QUFUTTtFQUNFLGtCQUFBO0VBQ0EseUJBQUE7RUFDQSxXQUFBO0VBQ0EsOEJBQUE7RUFDQSxxQkFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0EsaUJBQUE7RUFDQSxrQkFBQTtFQUNBLGtCQUFBO0VBQ0EsV0FBQTtBQVlSOztBQVZNO0VBQ0UsY0FBQTtFQUNBLGdCQUFBO0VBQ0EsZ0JBQUE7QUFhUjs7QUFWTTtFQUNFLFdBQUE7RUFDQSxVQUFBO0VBQ0EsU0FBQTtFQUNBLGdCQUFBO0VBS0EsYUFBQTtFQUNBLGVBQUE7RUFDQSxzQkFBQTtFQUNBLDZCQUFBO0VBQ0EsaUJBQUE7RUFDQSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSxXQUFBO0FBYVI7O0FBVlE7RUFFRSxhQUFBO0VBQ0EsY0FBQTtFQUNBLGdCQUFBO0VBQ0EsaUJBQUE7RUFHQSxtQkFBQTtFQUNBLFdBQUE7RUFDQSx1QkFBQTtFQUNBLHFCQUFBO0FBYVY7O0FBVE07RUFDRSxxQkFBQTtFQUNBLFdBQUE7RUFDQSxrQkFBQTtFQUNBLFVBQUE7RUFDQSxjQUFBO0VBQ0EsZUFBQTtFQUNBLGVBQUE7QUFZUjs7QUFYUTtFQUNFLGVBQUE7RUFDQSxjQUFBO0VBQ0EsZ0JBQUE7RUFDQSxpQkFBQTtFQUNBLGlCQUFBO0FBYVY7O0FBVk07RUFDRSxnQkFBQTtFQUNBLGtCQUFBO0VBQ0EsdUNBQUE7RUFDQSxZQUFBO0VBQ0EsbUJBQUE7QUFhUjs7QUFWTTtFQUNFLHdCQUFBO0FBYVIiLCJmaWxlIjoiY2hpbGRwcm9maWxlLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi53cmFwIHtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICB9XHJcbiAgXHJcbiAgLndyYXA6YmVmb3JlIHtcclxuICAgIGNvbnRlbnQ6IFwiXCI7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICB0b3A6IDIwJTtcclxuICAgIGxlZnQ6IDE4JTtcclxuICAgIGJvcmRlci10b3A6IDAuNXB4IHNvbGlkICM2Nzc0ODM7XHJcbiAgICBib3JkZXItd2lkdGg6IHRoaW47XHJcbiAgICB3aWR0aDogNjUlO1xyXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC01MCUpO1xyXG4gICAgYm9yZGVyLXN0eWxlOiBkYXNoZWQ7XHJcbiAgfVxyXG4gIC5hY3RpdmV7XHJcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjMmRkMzZmICFpbXBvcnRhbnQ7XHJcbiAgICBjb2xvcjogI2ZmZmZmZjtcclxuICB9XHJcbiAgLmljb24tY2lyY2xle1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gICAgbWFyZ2luOiAtMXB4O1xyXG4gICAgd2lkdGg6IDMwcHg7XHJcbiAgICBoZWlnaHQ6IDMwcHg7XHJcbiAgICBmb250LXNpemU6IDI2cHg7XHJcbiAgICBib3JkZXItcmFkaXVzOiA1MCU7XHJcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjMjAyMDIwO1xyXG4gICAgYmFja2dyb3VuZDogI2ZmZjtcclxuICAgIGNvbG9yOiAjMmRkMzZmO1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG5cclxuICAgIGlvbi1pY29ue1xyXG4gICAgICAgIG1hcmdpbi10b3A6IDJweDtcclxuICAgICAgICBmb250LXNpemU6IDIwcHg7XHJcbiAgICB9XHJcbiAgXHJcbiAgfVxyXG4gIFxyXG4gIC5oZWFkZXItMXtcclxuICAgIGNvbG9yOiAjNjc2NzY3O1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMDtcclxuICAgIGZvbnQtc2l6ZTogMTZweDtcclxufVxyXG4gIC5oZWFkaW5nLTF7XHJcbiAgICBjb2xvcjogIzY3Njc2NztcclxuICAgIG1hcmdpbi1ib3R0b206IDA7XHJcbiAgICBmb250LXNpemU6IDE2cHg7XHJcbn1cclxuLmhlYWRpbmd7XHJcbiAgICBjb2xvcjogIzliOWNhNjtcclxuICAgIG1hcmdpbi1ib3R0b206IDA7XHJcbiAgICBmb250LXNpemU6IDE0cHg7XHJcbn1cclxuaW9uLWxhYmVse1xyXG4gICAgY29sb3I6ICM5YjljYTY7XHJcbiAgICBmb250LXNpemU6IDE0cHg7XHJcbn1cclxuaW9uLWlucHV0IHtcclxuICAgIGJvcmRlcjogMXB4IHNvbGlkICM5YjljYTY7XHJcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XHJcbiAgICAtLXBhZGRpbmctc3RhcnQ6IDVweCAhaW1wb3J0YW50O1xyXG4gICAgaGVpZ2h0OjM1cHg7XHJcbn1cclxuaW9uLXRleHRhcmVhe1xyXG4gICAgYm9yZGVyOiAxcHggc29saWQgIzliOWNhNjtcclxuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcclxuICAgIC0tcGFkZGluZy1zdGFydDogNXB4ICFpbXBvcnRhbnQ7XHJcbn1cclxuaW9uLWRhdGV0aW1le1xyXG4gICAgYm9yZGVyOiAxcHggc29saWQgIzliOWNhNjtcclxuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcclxuICAgIC0tcGFkZGluZy1zdGFydDogNXB4ICFpbXBvcnRhbnQ7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGhlaWdodDozNXB4O1xyXG5cclxufVxyXG5pb24taXRlbXtcclxuICAgIC8vIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjNjc3NDgzO1xyXG4gICAgLS1wYWRkaW5nLXN0YXJ0OiAwO1xyXG4gICAgLS1yaXBwbGUtY29sb3I6IHRyYW5zcGFyZW50O1xyXG4gICAgLS1iYWNrZ3JvdW5kLWFjdGl2YXRlZDogdHJhbnNwYXJlbnQ7XHJcbiAgICAtLWJhY2tncm91bmQtYWN0aXZhdGVkLW9wYWNpdHk6dHJhbnNwYXJlbnQ7XHJcbiAgICAtLWJhY2tncm91bmQtZm9jdXNlZDogdHJhbnNwYXJlbnQ7XHJcbiAgICAtLWJhY2tncm91bmQtZm9jdXNlZC1vcGFjaXR5OnRyYW5zcGFyZW50O1xyXG4gICAgLS1iYWNrZ3JvdW5kLWhvdmVyICA6IHRyYW5zcGFyZW50O1xyXG4gICAgLS1iYWNrZ3JvdW5kLWhvdmVyLW9wYWNpdHkgIDp0cmFuc3BhcmVudDtcclxuXHJcbiAgICBpb24tbGFiZWwge1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMTJweDtcclxuICAgIGNvbG9yOiAjOWI5Y2E2O1xyXG5cclxuICAgIH1cclxufVxyXG4gICAgaW9uLXJhZGlvLWdyb3Vwe1xyXG4gICAgICAgIGlvbi1pdGVte1xyXG4gICAgICAgICAgICBib3JkZXItYm90dG9tOiAwO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpb24tY29sIHtcclxuICAgICAgICAgICAgcGFkZGluZy1sZWZ0OiAwO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpb24tcmFkaW97XHJcbiAgICAgICAgbWFyZ2luLXJpZ2h0OiA4cHg7XHJcbiAgICAgICAgd2lkdGg6IDE4cHg7XHJcbiAgICAgICAgaGVpZ2h0OiAxOHB4O1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBpb24tY29sIHtcclxuICAgICAgICBwYWRkaW5nLWxlZnQ6IDA7XHJcbiAgICB9XHJcblxyXG4gICAgaW9uLWJ1dHRvbiB7XHJcbiAgICAgICAgdGV4dC10cmFuc2Zvcm06IG5vbmU7XHJcbiAgICB9XHJcbiAgICAuY2hvb3NlLWJ0bntcclxuICAgICAgICAtLWJhY2tncm91bmQ6ICNlZTRhMzU7XHJcbiAgICB9XHJcbiAgICAuaGVhZGluZy0ze1xyXG4gICAgICAgIG1hcmdpbi10b3A6IDEycHg7XHJcbiAgICAgICAgY29sb3I6ICM5Mjk3OTE7XHJcbiAgICB9XHJcbiAgICAuY29sb3ItZ3JlZW57XHJcbiAgICAgICAgY29sb3I6ICMyZGQzNmY7XHJcbiAgICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgICAgICAgbWFyZ2luLXRvcDogMTBweDtcclxuICAgIH1cclxuICAgIC5jaGVja21hcmt7XHJcbiAgICAgICAgbWFyZ2luLXRvcDogLTJweDtcclxuICAgIH1cclxuICAgIC5kb3R7XHJcbiAgICAgICAgY29sb3I6ICMyMDIwMjAgIWltcG9ydGFudDtcclxuICAgICAgICBtYXJnaW4tdG9wOiAycHg7XHJcbiAgICB9XHJcbiAgICAub3RoZXItaW5mbyB7XHJcbiAgICAgICAgbWFyZ2luLXRvcDogMTZweDtcclxuICAgIH1cclxuICAgIC5zcGVjaWZ5LWl0ZW17XHJcbiAgICAgICAgaW9uLWlucHV0IHtcclxuICAgICAgICAgICAgbWFyZ2luLXRvcDogMjVweDtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICAuYWRtaXNzaW9uLXJvd3tcclxuICAgICAgICBpb24tY29se1xyXG4gICAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICAgICAgICAgIHRleHQtYWxpZ246IC1tb3otY2VudGVyO1xyXG4gICAgICAgICAgICBpb24tYnV0dG9ue1xyXG4gICAgICAgICAgICAgICAgdGV4dC10cmFuc2Zvcm06IG5vbmU7XHJcbiAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgd2lkdGg6IDgwJTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICBcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICAubmV4dC1idG4tY29se1xyXG4gICAgICAgIHRleHQtYWxpZ246IGxlZnQgIWltcG9ydGFudDtcclxuICAgIH1cclxuICAgIC5saXN0LWdyb3VwLnZlcnRpY2FsLXN0ZXBzIC5saXN0LWdyb3VwLWl0ZW0ge1xyXG4gICAgICAgIGJvcmRlcjogbm9uZTtcclxuICAgICAgICBib3JkZXItbGVmdDogM3B4IHNvbGlkICNiNGI0YjQ7XHJcbiAgICAgICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcclxuICAgICAgICBib3JkZXItcmFkaXVzOiAwO1xyXG4gICAgICAgIGNvdW50ZXItaW5jcmVtZW50OiBzdGVwLWNvdW50ZXI7XHJcbiAgICAgICAgcGFkZGluZy1sZWZ0OiAyMHB4O1xyXG4gICAgICAgIHBhZGRpbmctcmlnaHQ6IDBweDtcclxuICAgICAgICBwYWRkaW5nLWJvdHRvbTogN3B4O1xyXG4gICAgICAgIHBhZGRpbmctdG9wOiAwcHg7XHJcbiAgICAgIH1cclxuICAgICAgLmxpc3QtZ3JvdXAudmVydGljYWwtc3RlcHMgLmxpc3QtZ3JvdXAtaXRlbTo6YmVmb3JlIHtcclxuICAgICAgICBib3JkZXItcmFkaXVzOiA1MCU7XHJcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2I0YjRiNDtcclxuICAgICAgICBjb2xvcjogI2ZmZjtcclxuICAgICAgICBjb250ZW50OiBjb3VudGVyKHN0ZXAtY291bnRlcik7XHJcbiAgICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gICAgICAgIGZsb2F0OiBsZWZ0O1xyXG4gICAgICAgIGhlaWdodDogMjVweDtcclxuICAgICAgICBsaW5lLWhlaWdodDogMjVweDtcclxuICAgICAgICBtYXJnaW4tbGVmdDogLTM1cHg7XHJcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgICAgIHdpZHRoOiAyNXB4O1xyXG4gICAgICB9XHJcbiAgICAgIC5saXN0LWdyb3VwLnZlcnRpY2FsLXN0ZXBzIC5maW5hbDo6YmVmb3JlIHtcclxuICAgICAgICBib3JkZXItcmFkaXVzOiA1MCU7XHJcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2I0YjRiNDtcclxuICAgICAgICBjb2xvcjogI2ZmZjtcclxuICAgICAgICBjb250ZW50OiBjb3VudGVyKHN0ZXAtY291bnRlcik7XHJcbiAgICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gICAgICAgIGZsb2F0OiBsZWZ0O1xyXG4gICAgICAgIGhlaWdodDogMjVweDtcclxuICAgICAgICBsaW5lLWhlaWdodDogMjVweDtcclxuICAgICAgICBtYXJnaW4tbGVmdDogLTMycHg7XHJcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgICAgIHdpZHRoOiAyNXB4O1xyXG4gICAgICB9XHJcbiAgICAgIC5maW5hbHtcclxuICAgICAgICBib3JkZXItbGVmdDogbm9uZSAhaW1wb3J0YW50O1xyXG4gICAgICB9XHJcbiAgICAgIC5zdGVwLWFjdGl2ZXtcclxuICAgICAgICBib3JkZXItbGVmdDogM3B4IHNvbGlkICMyZGQzNmYgIWltcG9ydGFudDtcclxuICAgICAgfVxyXG4gICAgICAubGlzdC1ncm91cC52ZXJ0aWNhbC1zdGVwcyAuc3RlcC1hY3RpdmU6OmJlZm9yZSB7XHJcbiAgICAgICAgYm9yZGVyLXJhZGl1czogNTAlO1xyXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICMyZGQzNmY7XHJcbiAgICAgICAgY29sb3I6ICNmZmY7XHJcbiAgICAgICAgY29udGVudDogY291bnRlcihzdGVwLWNvdW50ZXIpO1xyXG4gICAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICAgICAgICBmbG9hdDogbGVmdDtcclxuICAgICAgICBoZWlnaHQ6IDI1cHg7XHJcbiAgICAgICAgbGluZS1oZWlnaHQ6IDI1cHg7XHJcbiAgICAgICAgbWFyZ2luLWxlZnQ6IC0zNXB4O1xyXG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgICAgICB3aWR0aDogMjVweDtcclxuICAgICAgfVxyXG4gICAgICAubGlzdC1ncm91cC52ZXJ0aWNhbC1zdGVwcyAubGlzdC1ncm91cC1pdGVtIHNwYW4sIC5saXN0LWdyb3VwLnZlcnRpY2FsLXN0ZXBzIC5saXN0LWdyb3VwLWl0ZW0gYSB7XHJcbiAgICAgICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICAgICAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICAgICAgICBwYWRkaW5nLXRvcDogMnB4O1xyXG4gICAgICB9XHJcbiAgICAgIFxyXG4gICAgICBkaXYucmV1c2FibGVfYWNjb3JkaW9uIHtcclxuICAgICAgICB6LWluZGV4OiA5OTtcclxuICAgICAgICBwYWRkaW5nOiAwO1xyXG4gICAgICAgIG1hcmdpbjogMDtcclxuICAgICAgICBsaXN0LXN0eWxlOiBub25lO1xyXG4gICAgICAgIGRpc3BsYXk6IC13ZWJraXQtYm94O1xyXG4gICAgICAgIGRpc3BsYXk6IC1tb3otYm94O1xyXG4gICAgICAgIGRpc3BsYXk6IC1tcy1mbGV4Ym94O1xyXG4gICAgICAgIGRpc3BsYXk6IC13ZWJraXQtZmxleDtcclxuICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgIGZsZXgtd3JhcDogd3JhcDtcclxuICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xyXG4gICAgICAgIGxpbmUtaGVpZ2h0OiAyNXB4O1xyXG4gICAgICAgIGhlaWdodDogMTgwcHg7XHJcbiAgICAgICAgYmFja2dyb3VuZDogI2YxZjFmMTtcclxuICAgICAgICB3aWR0aDogYXV0bztcclxuICAgICAgfVxyXG4gICAgICBkaXYudGVtcGxhdGVfYWNjb3JkaW9uIHtcclxuICAgICAgICBkaXYudGVtcGxhdGVfY29udGFpbmVycyB7XHJcbiAgICAgICAgICBkaXNwbGF5OiAtd2Via2l0LWJveDtcclxuICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgICBtaW4td2lkdGg6IDQ1JTtcclxuICAgICAgICAgIG1pbi1oZWlnaHQ6IDYwcHg7XHJcbiAgICAgICAgICBiYWNrZ3JvdW5kOiB3aGl0ZTtcclxuICAgICAgICAgIC13ZWJraXQtYm94LW9yaWVudDogaG9yaXpvbnRhbDtcclxuICAgICAgICAgIC13ZWJraXQtYm94LWRpcmVjdGlvbjogbm9ybWFsO1xyXG4gICAgICAgICAgZmxleC1kaXJlY3Rpb246IHJvdztcclxuICAgICAgICAgIG1hcmdpbjogNXB4O1xyXG4gICAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICAgICAgICBhbGlnbi1jb250ZW50OiBjZW50ZXI7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICAgIFxyXG4gICAgICAudG9nZ2xlX2J1dHRvbiB7XHJcbiAgICAgICAgLS1iYWNrZ3JvdW5kOiAjZjFmMWYxO1xyXG4gICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgICAgICBwYWRkaW5nOiAwO1xyXG4gICAgICAgIGNvbG9yOiAjMjAyMDIwO1xyXG4gICAgICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgICAgICBtaW4td2lkdGg6IDEwMCU7XHJcbiAgICAgICAgaW9uLWxhYmVse1xyXG4gICAgICAgICAgZm9udC1zaXplOiAxNnB4O1xyXG4gICAgICAgICAgY29sb3I6ICMyMDIwMjA7XHJcbiAgICAgICAgICB0ZXh0LWFsaWduOiBsZWZ0O1xyXG4gICAgICAgICAgbWFyZ2luLWxlZnQ6IDIwcHg7XHJcbiAgICAgICAgICBmb250LXdlaWdodDogYm9sZDtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgICAgZGl2LmFjY29yZGlvbi1jb250YWluZXIge1xyXG4gICAgICAgIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgICAgICAgb3ZlcmZsb3cteTogc2Nyb2xsO1xyXG4gICAgICAgIHRyYW5zaXRpb246IG1heC1oZWlnaHQgMC41cyBlYXNlLWluLW91dDtcclxuICAgICAgICBoZWlnaHQ6IGF1dG87XHJcbiAgICAgICAgYmFja2dyb3VuZDogcmdiKDMxLCA0MywgNTUpO1xyXG4gICAgICB9XHJcbiAgICAgIFxyXG4gICAgICBkaXYuYWNjb3JkaW9uLWNvbnRhaW5lci5jb2xsYXBzZWQge1xyXG4gICAgICAgIG1heC1oZWlnaHQ6IDAgIWltcG9ydGFudDtcclxuICAgICAgfVxyXG4gICAgICAiXX0= */";
      /***/
    }
  }]);
})();
//# sourceMappingURL=childprofile-childprofile-module-es5.js.map