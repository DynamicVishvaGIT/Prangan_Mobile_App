(function () {
  function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return e; }; var t, e = {}, r = Object.prototype, n = r.hasOwnProperty, o = Object.defineProperty || function (t, e, r) { t[e] = r.value; }, i = "function" == typeof Symbol ? Symbol : {}, a = i.iterator || "@@iterator", c = i.asyncIterator || "@@asyncIterator", u = i.toStringTag || "@@toStringTag"; function define(t, e, r) { return Object.defineProperty(t, e, { value: r, enumerable: !0, configurable: !0, writable: !0 }), t[e]; } try { define({}, ""); } catch (t) { define = function define(t, e, r) { return t[e] = r; }; } function wrap(t, e, r, n) { var i = e && e.prototype instanceof Generator ? e : Generator, a = Object.create(i.prototype), c = new Context(n || []); return o(a, "_invoke", { value: makeInvokeMethod(t, r, c) }), a; } function tryCatch(t, e, r) { try { return { type: "normal", arg: t.call(e, r) }; } catch (t) { return { type: "throw", arg: t }; } } e.wrap = wrap; var h = "suspendedStart", l = "suspendedYield", f = "executing", s = "completed", y = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var p = {}; define(p, a, function () { return this; }); var d = Object.getPrototypeOf, v = d && d(d(values([]))); v && v !== r && n.call(v, a) && (p = v); var g = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(p); function defineIteratorMethods(t) { ["next", "throw", "return"].forEach(function (e) { define(t, e, function (t) { return this._invoke(e, t); }); }); } function AsyncIterator(t, e) { function invoke(r, o, i, a) { var c = tryCatch(t[r], t, o); if ("throw" !== c.type) { var u = c.arg, h = u.value; return h && "object" == typeof h && n.call(h, "__await") ? e.resolve(h.__await).then(function (t) { invoke("next", t, i, a); }, function (t) { invoke("throw", t, i, a); }) : e.resolve(h).then(function (t) { u.value = t, i(u); }, function (t) { return invoke("throw", t, i, a); }); } a(c.arg); } var r; o(this, "_invoke", { value: function value(t, n) { function callInvokeWithMethodAndArg() { return new e(function (e, r) { invoke(t, n, e, r); }); } return r = r ? r.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); } }); } function makeInvokeMethod(e, r, n) { var o = h; return function (i, a) { if (o === f) throw new Error("Generator is already running"); if (o === s) { if ("throw" === i) throw a; return { value: t, done: !0 }; } for (n.method = i, n.arg = a;;) { var c = n.delegate; if (c) { var u = maybeInvokeDelegate(c, n); if (u) { if (u === y) continue; return u; } } if ("next" === n.method) n.sent = n._sent = n.arg;else if ("throw" === n.method) { if (o === h) throw o = s, n.arg; n.dispatchException(n.arg); } else "return" === n.method && n.abrupt("return", n.arg); o = f; var p = tryCatch(e, r, n); if ("normal" === p.type) { if (o = n.done ? s : l, p.arg === y) continue; return { value: p.arg, done: n.done }; } "throw" === p.type && (o = s, n.method = "throw", n.arg = p.arg); } }; } function maybeInvokeDelegate(e, r) { var n = r.method, o = e.iterator[n]; if (o === t) return r.delegate = null, "throw" === n && e.iterator["return"] && (r.method = "return", r.arg = t, maybeInvokeDelegate(e, r), "throw" === r.method) || "return" !== n && (r.method = "throw", r.arg = new TypeError("The iterator does not provide a '" + n + "' method")), y; var i = tryCatch(o, e.iterator, r.arg); if ("throw" === i.type) return r.method = "throw", r.arg = i.arg, r.delegate = null, y; var a = i.arg; return a ? a.done ? (r[e.resultName] = a.value, r.next = e.nextLoc, "return" !== r.method && (r.method = "next", r.arg = t), r.delegate = null, y) : a : (r.method = "throw", r.arg = new TypeError("iterator result is not an object"), r.delegate = null, y); } function pushTryEntry(t) { var e = { tryLoc: t[0] }; 1 in t && (e.catchLoc = t[1]), 2 in t && (e.finallyLoc = t[2], e.afterLoc = t[3]), this.tryEntries.push(e); } function resetTryEntry(t) { var e = t.completion || {}; e.type = "normal", delete e.arg, t.completion = e; } function Context(t) { this.tryEntries = [{ tryLoc: "root" }], t.forEach(pushTryEntry, this), this.reset(!0); } function values(e) { if (e || "" === e) { var r = e[a]; if (r) return r.call(e); if ("function" == typeof e.next) return e; if (!isNaN(e.length)) { var o = -1, i = function next() { for (; ++o < e.length;) if (n.call(e, o)) return next.value = e[o], next.done = !1, next; return next.value = t, next.done = !0, next; }; return i.next = i; } } throw new TypeError(typeof e + " is not iterable"); } return GeneratorFunction.prototype = GeneratorFunctionPrototype, o(g, "constructor", { value: GeneratorFunctionPrototype, configurable: !0 }), o(GeneratorFunctionPrototype, "constructor", { value: GeneratorFunction, configurable: !0 }), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, u, "GeneratorFunction"), e.isGeneratorFunction = function (t) { var e = "function" == typeof t && t.constructor; return !!e && (e === GeneratorFunction || "GeneratorFunction" === (e.displayName || e.name)); }, e.mark = function (t) { return Object.setPrototypeOf ? Object.setPrototypeOf(t, GeneratorFunctionPrototype) : (t.__proto__ = GeneratorFunctionPrototype, define(t, u, "GeneratorFunction")), t.prototype = Object.create(g), t; }, e.awrap = function (t) { return { __await: t }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, c, function () { return this; }), e.AsyncIterator = AsyncIterator, e.async = function (t, r, n, o, i) { void 0 === i && (i = Promise); var a = new AsyncIterator(wrap(t, r, n, o), i); return e.isGeneratorFunction(r) ? a : a.next().then(function (t) { return t.done ? t.value : a.next(); }); }, defineIteratorMethods(g), define(g, u, "Generator"), define(g, a, function () { return this; }), define(g, "toString", function () { return "[object Generator]"; }), e.keys = function (t) { var e = Object(t), r = []; for (var n in e) r.push(n); return r.reverse(), function next() { for (; r.length;) { var t = r.pop(); if (t in e) return next.value = t, next.done = !1, next; } return next.done = !0, next; }; }, e.values = values, Context.prototype = { constructor: Context, reset: function reset(e) { if (this.prev = 0, this.next = 0, this.sent = this._sent = t, this.done = !1, this.delegate = null, this.method = "next", this.arg = t, this.tryEntries.forEach(resetTryEntry), !e) for (var r in this) "t" === r.charAt(0) && n.call(this, r) && !isNaN(+r.slice(1)) && (this[r] = t); }, stop: function stop() { this.done = !0; var t = this.tryEntries[0].completion; if ("throw" === t.type) throw t.arg; return this.rval; }, dispatchException: function dispatchException(e) { if (this.done) throw e; var r = this; function handle(n, o) { return a.type = "throw", a.arg = e, r.next = n, o && (r.method = "next", r.arg = t), !!o; } for (var o = this.tryEntries.length - 1; o >= 0; --o) { var i = this.tryEntries[o], a = i.completion; if ("root" === i.tryLoc) return handle("end"); if (i.tryLoc <= this.prev) { var c = n.call(i, "catchLoc"), u = n.call(i, "finallyLoc"); if (c && u) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } else if (c) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); } else { if (!u) throw new Error("try statement without catch or finally"); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } } } }, abrupt: function abrupt(t, e) { for (var r = this.tryEntries.length - 1; r >= 0; --r) { var o = this.tryEntries[r]; if (o.tryLoc <= this.prev && n.call(o, "finallyLoc") && this.prev < o.finallyLoc) { var i = o; break; } } i && ("break" === t || "continue" === t) && i.tryLoc <= e && e <= i.finallyLoc && (i = null); var a = i ? i.completion : {}; return a.type = t, a.arg = e, i ? (this.method = "next", this.next = i.finallyLoc, y) : this.complete(a); }, complete: function complete(t, e) { if ("throw" === t.type) throw t.arg; return "break" === t.type || "continue" === t.type ? this.next = t.arg : "return" === t.type ? (this.rval = this.arg = t.arg, this.method = "return", this.next = "end") : "normal" === t.type && e && (this.next = e), y; }, finish: function finish(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.finallyLoc === t) return this.complete(r.completion, r.afterLoc), resetTryEntry(r), y; } }, "catch": function _catch(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.tryLoc === t) { var n = r.completion; if ("throw" === n.type) { var o = n.arg; resetTryEntry(r); } return o; } } throw new Error("illegal catch attempt"); }, delegateYield: function delegateYield(e, r, n) { return this.delegate = { iterator: values(e), resultName: r, nextLoc: n }, "next" === this.method && (this.arg = t), y; } }, e; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

  function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return typeof key === "symbol" ? key : String(key); }

  function _toPrimitive(input, hint) { if (typeof input !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (typeof res !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["addinquiry-addinquiry-module"], {
    /***/
    "16zU":
    /*!***********************************************!*\
      !*** ./src/app/addinquiry/addinquiry.page.ts ***!
      \***********************************************/

    /*! exports provided: AddinquiryPage */

    /***/
    function zU(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AddinquiryPage", function () {
        return AddinquiryPage;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_addinquiry_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./addinquiry.page.html */
      "sHQZ");
      /* harmony import */


      var _addinquiry_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./addinquiry.page.scss */
      "r718");
      /* harmony import */


      var _api_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./../api.service */
      "yTNM");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/forms */
      "3Pt+");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @ionic/angular */
      "TEn/");
      /* harmony import */


      var _ionic_storage__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @ionic/storage */
      "e8h1");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");

      var AddinquiryPage = /*#__PURE__*/function () {
        function AddinquiryPage(apiService, menuCtrl, storage, router, alertController) {
          _classCallCheck(this, AddinquiryPage);

          this.apiService = apiService;
          this.menuCtrl = menuCtrl;
          this.storage = storage;
          this.router = router;
          this.alertController = alertController;
          this.isLoggedIn = false;
          this.todays_date = new Date().toJSON().split('T')[0];
        }

        _createClass(AddinquiryPage, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            this.menuCtrl.enable(false);
            this.enquiryForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormGroup"]({
              branch_id: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required]),
              "class": new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required]),
              first_name: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].pattern(/^[a-zA-Z\. ]+$/)]),
              last_name: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].pattern(/^[a-zA-Z\. ]+$/)]),
              d_o_b: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required]),
              mothers_name: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].pattern(/^[a-zA-Z\. ]+$/)]),
              mothers_no: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].maxLength(10), _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].minLength(10), _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].pattern(/^[0-9]{10}$/)]),
              mothers_email: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].pattern(/^(?!\_)(?!_*_$)([0-9A-Za-z]+\.)*[a-zA-Z0-9_+-]+@([\w+-]+\.)*[\w+-]+\.[a-zA-Z]{2,4}$/)]),
              mothers_job_profile: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].pattern(/^[a-zA-Z\. ]+$/)]),
              fathers_name: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].pattern(/^[a-zA-Z\. ]+$/)]),
              fathers_no: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].maxLength(10), _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].minLength(10), _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].pattern(/^[0-9]{10}$/)]),
              fathers_email: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].pattern(/^(?!\_)(?!_*_$)([0-9A-Za-z]+\.)*[a-zA-Z0-9_+-]+@([\w+-]+\.)*[\w+-]+\.[a-zA-Z]{2,4}$/)]),
              fathers_job_profile: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].pattern(/^[a-zA-Z\. ]+$/)]),
              siblings: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].pattern(/^[a-zA-Z\. ]+$/)]),
              siblings_name: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].pattern(/^[a-zA-Z\. ]+$/)]),
              sibling_d_o_b: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"](''),
              // child_age:new FormControl('',[Validators.required]),
              gender: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required]),
              address: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].maxLength(100), _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].pattern("^[a-zA-Z0-9,\/&(). ]{0,150}$")]),
              // mobile_1:new FormControl('',[Validators.required,Validators.maxLength(10),Validators.minLength(10),Validators.pattern(/^[0-9]{10}$/)]),
              // mobile_2:new FormControl('',[Validators.required,Validators.maxLength(10),Validators.minLength(10),Validators.pattern(/^[0-9]{10}$/)]),   
              // // date:new FormControl('',[Validators.required]),  
              // email_1:new FormControl('',[Validators.required,Validators.pattern(/^(?!\_)(?!_*_$)([0-9A-Za-z]+\.)*[a-zA-Z0-9_+-]+@([\w+-]+\.)*[\w+-]+\.[a-zA-Z]{2,4}$/)]),
              // email_2:new FormControl('',[Validators.required,Validators.pattern(/^(?!\_)(?!_*_$)([0-9A-Za-z]+\.)*[a-zA-Z0-9_+-]+@([\w+-]+\.)*[\w+-]+\.[a-zA-Z]{2,4}$/)]),   
              q1: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required])
            });
          }
        }, {
          key: "branch_id",
          get: function get() {
            return this.enquiryForm.get('branch_id');
          }
        }, {
          key: "class",
          get: function get() {
            return this.enquiryForm.get('class');
          }
        }, {
          key: "first_name",
          get: function get() {
            return this.enquiryForm.get('first_name');
          }
        }, {
          key: "last_name",
          get: function get() {
            return this.enquiryForm.get('last_name');
          }
        }, {
          key: "d_o_b",
          get: function get() {
            return this.enquiryForm.get('d_o_b');
          } // get child_age(){
          //   return this.enquiryForm.get('child_age')
          // }

        }, {
          key: "gender",
          get: function get() {
            return this.enquiryForm.get('gender');
          }
        }, {
          key: "address",
          get: function get() {
            return this.enquiryForm.get('address');
          } // get mobile_1(){
          //   return this.enquiryForm.get('mobile_1')
          // }
          // get mobile_2(){
          //   return this.enquiryForm.get('mobile_2')
          // }
          // get date(){
          //   return this.enquiryForm.get('date')
          // }
          // get email_1(){
          //   return this.enquiryForm.get('email_1')
          // }
          // get email_2(){
          //   return this.enquiryForm.get('email_2')
          // }

        }, {
          key: "q1",
          get: function get() {
            return this.enquiryForm.get('q1');
          }
        }, {
          key: "mothers_name",
          get: function get() {
            return this.enquiryForm.get('mothers_name');
          }
        }, {
          key: "mothers_no",
          get: function get() {
            return this.enquiryForm.get('mothers_no');
          }
        }, {
          key: "mothers_email",
          get: function get() {
            return this.enquiryForm.get('mothers_email');
          }
        }, {
          key: "mothers_job_profile",
          get: function get() {
            return this.enquiryForm.get('mothers_job_profile');
          }
        }, {
          key: "fathers_name",
          get: function get() {
            return this.enquiryForm.get('fathers_name');
          }
        }, {
          key: "fathers_no",
          get: function get() {
            return this.enquiryForm.get('fathers_no');
          }
        }, {
          key: "fathers_email",
          get: function get() {
            return this.enquiryForm.get('fathers_email');
          }
        }, {
          key: "fathers_job_profile",
          get: function get() {
            return this.enquiryForm.get('fathers_job_profile');
          }
        }, {
          key: "siblings",
          get: function get() {
            return this.enquiryForm.get('siblings');
          }
        }, {
          key: "siblings_name",
          get: function get() {
            return this.enquiryForm.get('siblings_name');
          }
        }, {
          key: "sibling_d_o_b",
          get: function get() {
            return this.enquiryForm.get('sibling_d_o_b');
          }
        }, {
          key: "ionViewDidEnter",
          value: function ionViewDidEnter() {
            var _this = this;

            this.apiService.getBranches().then(function (data) {
              _this.branches = JSON.parse(data.data);
            });
          }
        }, {
          key: "onSubmit",
          value: function onSubmit(body) {
            var _this2 = this;

            body['date'] = new Date();
            console.log('body', body);
            this.apiService.addEnquiry(body).then(function (data) {
              console.log('data', data);

              _this2.presentAlert('Enquiry added succsessfully');

              _this2.enquiryForm.reset({
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
              _this2.apiService.presentToast(err, 2000);
            });
          }
        }, {
          key: "ionViewWillEnter",
          value: function ionViewWillEnter() {
            var _this3 = this;

            if (this.menuCtrl.isEnabled) {
              console.log('hi');
              this.menuCtrl.swipeGesture(false);
            }

            this.storage.get('user').then(function (data) {
              if (data) {
                _this3.isLoggedIn = true;
              }
            });
          }
        }, {
          key: "ionViewDidLeave",
          value: function ionViewDidLeave() {
            this.menuCtrl.enable(true);
          }
        }, {
          key: "goBack",
          value: function goBack() {
            if (this.isLoggedIn) {
              this.router.navigate(['quicktour']);
            } else {
              this.router.navigate(['login']);
            }
          }
        }, {
          key: "presentAlert",
          value: function presentAlert(message) {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/_regeneratorRuntime().mark(function _callee() {
              var _this4 = this;

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
                          // this.router.navigate(['mobilelogin'])
                          if (_this4.isLoggedIn) {
                            _this4.router.navigate(['quicktour']);
                          } else {
                            _this4.storage.set('type', 'login').then(function (_) {
                              _this4.router.navigate(['login']);
                            });
                          }
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
          key: "ageFromDOB",
          value: function ageFromDOB(dateOfBirth) {
            var birthdate = new Date(dateOfBirth.detail.value);
            var timeDiff = Math.abs(new Date().getTime() - new Date(birthdate).getTime());
            var age = Math.floor(timeDiff / (1000 * 3600 * 24) / 365);
            this.enquiryForm.patchValue({
              child_age: age
            });
          }
        }]);

        return AddinquiryPage;
      }();

      AddinquiryPage.ctorParameters = function () {
        return [{
          type: _api_service__WEBPACK_IMPORTED_MODULE_3__["ApiService"]
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["MenuController"]
        }, {
          type: _ionic_storage__WEBPACK_IMPORTED_MODULE_7__["Storage"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_8__["Router"]
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["AlertController"]
        }];
      };

      AddinquiryPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_5__["Component"])({
        selector: 'app-addinquiry',
        template: _raw_loader_addinquiry_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_addinquiry_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
      })], AddinquiryPage);
      /***/
    },

    /***/
    "DUT7":
    /*!*********************************************************!*\
      !*** ./src/app/addinquiry/addinquiry-routing.module.ts ***!
      \*********************************************************/

    /*! exports provided: AddinquiryPageRoutingModule */

    /***/
    function DUT7(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AddinquiryPageRoutingModule", function () {
        return AddinquiryPageRoutingModule;
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


      var _addinquiry_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./addinquiry.page */
      "16zU");

      var routes = [{
        path: '',
        component: _addinquiry_page__WEBPACK_IMPORTED_MODULE_3__["AddinquiryPage"]
      }];

      var AddinquiryPageRoutingModule = /*#__PURE__*/_createClass(function AddinquiryPageRoutingModule() {
        _classCallCheck(this, AddinquiryPageRoutingModule);
      });

      AddinquiryPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
      })], AddinquiryPageRoutingModule);
      /***/
    },

    /***/
    "oLPS":
    /*!*************************************************!*\
      !*** ./src/app/addinquiry/addinquiry.module.ts ***!
      \*************************************************/

    /*! exports provided: AddinquiryPageModule */

    /***/
    function oLPS(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AddinquiryPageModule", function () {
        return AddinquiryPageModule;
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


      var _addinquiry_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./addinquiry-routing.module */
      "DUT7");
      /* harmony import */


      var _addinquiry_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./addinquiry.page */
      "16zU");

      var AddinquiryPageModule = /*#__PURE__*/_createClass(function AddinquiryPageModule() {
        _classCallCheck(this, AddinquiryPageModule);
      });

      AddinquiryPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _addinquiry_routing_module__WEBPACK_IMPORTED_MODULE_5__["AddinquiryPageRoutingModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"]],
        declarations: [_addinquiry_page__WEBPACK_IMPORTED_MODULE_6__["AddinquiryPage"]]
      })], AddinquiryPageModule);
      /***/
    },

    /***/
    "r718":
    /*!*************************************************!*\
      !*** ./src/app/addinquiry/addinquiry.page.scss ***!
      \*************************************************/

    /*! exports provided: default */

    /***/
    function r718(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = ".heading-1 {\n  color: #676767;\n  margin-bottom: 0;\n  font-size: 16px;\n}\n\n.heading {\n  color: #9b9ca6;\n  margin-bottom: 0;\n  font-size: 14px;\n}\n\nion-label {\n  color: #9b9ca6;\n  font-size: 13px;\n}\n\nion-input {\n  border: 1px solid #9b9ca6;\n  border-radius: 5px;\n  --padding-start: 5px !important;\n  height: 35px;\n}\n\nion-textarea {\n  border: 1px solid #9b9ca6;\n  border-radius: 5px;\n  --padding-start: 5px !important;\n}\n\nion-datetime {\n  border: 1px solid #9b9ca6;\n  border-radius: 5px;\n  --padding-start: 5px !important;\n  width: 100%;\n  height: 35px;\n}\n\nion-item {\n  --padding-start: 0;\n  --ripple-color: transparent;\n  --background-activated: transparent;\n  --background-activated-opacity:transparent;\n  --background-focused: transparent;\n  --background-focused-opacity:transparent;\n  --background-hover: transparent;\n  --background-hover-opacity:transparent;\n}\n\nion-item ion-label {\n  font-size: 12px;\n  color: #9b9ca6;\n}\n\nion-radio-group ion-item {\n  border-bottom: 0;\n}\n\nion-radio-group ion-col {\n  padding-left: 0;\n}\n\nion-radio-group ion-radio {\n  margin-right: 8px;\n  width: 18px;\n  height: 18px;\n}\n\nion-col {\n  padding-left: 0;\n}\n\nion-button {\n  text-transform: none;\n  width: 80%;\n}\n\n.required:after {\n  content: \" *\";\n  color: red;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL2FkZGlucXVpcnkucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUNJO0VBQ0ksY0FBQTtFQUNBLGdCQUFBO0VBQ0EsZUFBQTtBQUFSOztBQUVJO0VBQ0ksY0FBQTtFQUNBLGdCQUFBO0VBQ0EsZUFBQTtBQUNSOztBQUNJO0VBQ0ksY0FBQTtFQUNBLGVBQUE7QUFFUjs7QUFBSTtFQUNJLHlCQUFBO0VBQ0Esa0JBQUE7RUFDQSwrQkFBQTtFQUNBLFlBQUE7QUFHUjs7QUFESTtFQUNJLHlCQUFBO0VBQ0Esa0JBQUE7RUFDQSwrQkFBQTtBQUlSOztBQUZJO0VBQ0kseUJBQUE7RUFDQSxrQkFBQTtFQUNBLCtCQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7QUFLUjs7QUFGSTtFQUVJLGtCQUFBO0VBQ0EsMkJBQUE7RUFDQSxtQ0FBQTtFQUNBLDBDQUFBO0VBQ0EsaUNBQUE7RUFDQSx3Q0FBQTtFQUNBLCtCQUFBO0VBQ0Esc0NBQUE7QUFJUjs7QUFGUTtFQUNJLGVBQUE7RUFDSixjQUFBO0FBSVI7O0FBQ1k7RUFDSSxnQkFBQTtBQUVoQjs7QUFBWTtFQUNJLGVBQUE7QUFFaEI7O0FBQVk7RUFDQSxpQkFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0FBRVo7O0FBRVE7RUFDSSxlQUFBO0FBQ1o7O0FBRVE7RUFDSSxvQkFBQTtFQUVBLFVBQUE7QUFBWjs7QUFJUTtFQUNJLGFBQUE7RUFDQSxVQUFBO0FBRFoiLCJmaWxlIjoiYWRkaW5xdWlyeS5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJcclxuICAgIC5oZWFkaW5nLTF7XHJcbiAgICAgICAgY29sb3I6ICM2NzY3Njc7XHJcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogMDtcclxuICAgICAgICBmb250LXNpemU6IDE2cHg7XHJcbiAgICB9XHJcbiAgICAuaGVhZGluZ3tcclxuICAgICAgICBjb2xvcjogIzliOWNhNjtcclxuICAgICAgICBtYXJnaW4tYm90dG9tOiAwO1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMTRweDtcclxuICAgIH1cclxuICAgIGlvbi1sYWJlbHtcclxuICAgICAgICBjb2xvcjogIzliOWNhNjtcclxuICAgICAgICBmb250LXNpemU6IDEzcHg7XHJcbiAgICB9XHJcbiAgICBpb24taW5wdXQge1xyXG4gICAgICAgIGJvcmRlcjogMXB4IHNvbGlkICM5YjljYTY7XHJcbiAgICAgICAgYm9yZGVyLXJhZGl1czogNXB4O1xyXG4gICAgICAgIC0tcGFkZGluZy1zdGFydDogNXB4ICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgaGVpZ2h0OjM1cHg7XHJcbiAgICB9XHJcbiAgICBpb24tdGV4dGFyZWF7XHJcbiAgICAgICAgYm9yZGVyOiAxcHggc29saWQgIzliOWNhNjtcclxuICAgICAgICBib3JkZXItcmFkaXVzOiA1cHg7XHJcbiAgICAgICAgLS1wYWRkaW5nLXN0YXJ0OiA1cHggIWltcG9ydGFudDtcclxuICAgIH1cclxuICAgIGlvbi1kYXRldGltZXtcclxuICAgICAgICBib3JkZXI6IDFweCBzb2xpZCAjOWI5Y2E2O1xyXG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDVweDtcclxuICAgICAgICAtLXBhZGRpbmctc3RhcnQ6IDVweCAhaW1wb3J0YW50O1xyXG4gICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgIGhlaWdodDozNXB4O1xyXG5cclxuICAgIH1cclxuICAgIGlvbi1pdGVte1xyXG4gICAgICAgIC8vIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjNjc3NDgzO1xyXG4gICAgICAgIC0tcGFkZGluZy1zdGFydDogMDtcclxuICAgICAgICAtLXJpcHBsZS1jb2xvcjogdHJhbnNwYXJlbnQ7XHJcbiAgICAgICAgLS1iYWNrZ3JvdW5kLWFjdGl2YXRlZDogdHJhbnNwYXJlbnQ7XHJcbiAgICAgICAgLS1iYWNrZ3JvdW5kLWFjdGl2YXRlZC1vcGFjaXR5OnRyYW5zcGFyZW50O1xyXG4gICAgICAgIC0tYmFja2dyb3VuZC1mb2N1c2VkOiB0cmFuc3BhcmVudDtcclxuICAgICAgICAtLWJhY2tncm91bmQtZm9jdXNlZC1vcGFjaXR5OnRyYW5zcGFyZW50O1xyXG4gICAgICAgIC0tYmFja2dyb3VuZC1ob3ZlciAgOiB0cmFuc3BhcmVudDtcclxuICAgICAgICAtLWJhY2tncm91bmQtaG92ZXItb3BhY2l0eSAgOnRyYW5zcGFyZW50O1xyXG5cclxuICAgICAgICBpb24tbGFiZWwge1xyXG4gICAgICAgICAgICBmb250LXNpemU6IDEycHg7XHJcbiAgICAgICAgY29sb3I6ICM5YjljYTY7XHJcblxyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgICAgICBpb24tcmFkaW8tZ3JvdXB7XHJcbiAgICAgICAgICAgIGlvbi1pdGVte1xyXG4gICAgICAgICAgICAgICAgYm9yZGVyLWJvdHRvbTogMDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBpb24tY29sIHtcclxuICAgICAgICAgICAgICAgIHBhZGRpbmctbGVmdDogMDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBpb24tcmFkaW97XHJcbiAgICAgICAgICAgIG1hcmdpbi1yaWdodDogOHB4O1xyXG4gICAgICAgICAgICB3aWR0aDogMThweDtcclxuICAgICAgICAgICAgaGVpZ2h0OiAxOHB4O1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpb24tY29sIHtcclxuICAgICAgICAgICAgcGFkZGluZy1sZWZ0OiAwO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaW9uLWJ1dHRvbiB7XHJcbiAgICAgICAgICAgIHRleHQtdHJhbnNmb3JtOiBub25lO1xyXG4gICAgICAgICAgIFxyXG4gICAgICAgICAgICB3aWR0aDogODAlO1xyXG4gICAgICAgIH1cclxuICAgICAgIFxyXG5cclxuICAgICAgICAucmVxdWlyZWQ6YWZ0ZXIge1xyXG4gICAgICAgICAgICBjb250ZW50OlwiICpcIjtcclxuICAgICAgICAgICAgY29sb3I6IHJlZDtcclxuICAgICAgICAgIH0iXX0= */";
      /***/
    },

    /***/
    "sHQZ":
    /*!***************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/addinquiry/addinquiry.page.html ***!
      \***************************************************************************************/

    /*! exports provided: default */

    /***/
    function sHQZ(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-header>\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n      <ion-back-button></ion-back-button>\n    </ion-buttons>\n    <ion-title>Enquiry Form</ion-title>\n    <!-- <ion-buttons slot=\"start\">\n      <ion-button  shape=\"round\" (click)=\"goBack()\">\n        <ion-icon color=\"light\" name=\"arrow-back-outline\"></ion-icon>\n      </ion-button>\n    </ion-buttons> -->\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n<p class=\"ion-text-center heading-1\">\n  <b>Preschool and Daycare</b> \n</p>\n<form [formGroup]=\"enquiryForm\" (ngSubmit)=\"onSubmit(enquiryForm.value)\">\n\n<div class=\"margin-ionic\">\n\n<p class=\"heading required\">Prangan Centres</p>\n<ion-radio-group allowEmptySelection=\"false\" color=\"primary\" formControlName=\"branch_id\">\n  <ion-row *ngIf=\"branches\">\n    <ion-col *ngFor=\"let branch of branches\">\n      <ion-item lines=\"none\">\n        <ion-radio value=\"{{branch.id}}\"></ion-radio>\n        <ion-label>{{branch.branch_name}}</ion-label>\n      </ion-item>\n    </ion-col>\n  </ion-row>\n</ion-radio-group>\n<p class=\"heading required\">Admission Seeking For</p>\n<ion-radio-group allowEmptySelection=\"false\" color=\"primary\" formControlName=\"class\">\n  <ion-row >\n    <ion-col size=\"4\">\n      <ion-item lines=\"none\">\n        <ion-radio value=\"Play Group\" ></ion-radio>\n        <ion-label>Play Group</ion-label>\n      </ion-item>\n    </ion-col>\n    <ion-col size=\"4\">\n      <ion-item lines=\"none\">\n        <ion-radio value=\"Nursery\" ></ion-radio>\n        <ion-label>Nursery</ion-label>\n      </ion-item>\n    </ion-col>\n    <ion-col size=\"4\">\n      <ion-item lines=\"none\">\n        <ion-radio value=\"Day Care\" ></ion-radio>\n       <ion-label>Daycare</ion-label>\n      </ion-item>\n    </ion-col>\n    <ion-col size=\"4\">\n      <ion-item lines=\"none\">\n        <ion-radio value=\"Jr_kg\" ></ion-radio>\n       <ion-label>Jr.Kg</ion-label>\n      </ion-item>\n    </ion-col>\n    <ion-col size=\"4\">\n      <ion-item lines=\"none\">\n        <ion-radio value=\"srkg\"></ion-radio>\n       <ion-label>Sr.Kg</ion-label>\n      </ion-item>\n    </ion-col>\n  </ion-row>\n</ion-radio-group>\n<ion-row>\n  <ion-col size=\"6\">\n    <ion-label class=\"required\">Child's First Name</ion-label>\n    <ion-item lines=\"none\">\n      <ion-input type=\"text\" formControlName=\"first_name\"></ion-input>\n    </ion-item>\n    <div class=\"error-div\" *ngIf=\"(first_name?.invalid && first_name?.touched) || first_name?.dirty\">\n      <small *ngIf=\"first_name.errors?.pattern\" class=\"text-danger\">Enter a valid name </small>\n    </div>\n  </ion-col>\n  <ion-col size=\"6\">\n    <ion-label class=\"required\">Child's Last Name</ion-label>\n    <ion-item lines=\"none\">\n      <ion-input type=\"text\" formControlName=\"last_name\"></ion-input>\n    </ion-item>\n    <div class=\"error-div\" *ngIf=\"(last_name?.invalid && last_name?.touched) || last_name?.dirty\">\n      <small *ngIf=\"last_name.errors?.pattern\" class=\"text-danger\">Enter a valid name </small>\n    </div>\n  </ion-col>\n</ion-row>\n<ion-row>\n  <ion-col size=\"6\">\n    <ion-label class=\"required\">Child's DOB</ion-label>\n    <ion-item lines=\"none\">\n      <ion-datetime displayFormat=\"DD MMM  YYYY\" formControlName=\"d_o_b\" max=\"{{todays_date}}\" (ionChange)=\"ageFromDOB($event)\"></ion-datetime>\n    </ion-item>\n  </ion-col>\n  <!-- <ion-col size=\"6\">\n    <ion-label>Child's Age</ion-label>\n    <ion-item lines=\"none\">\n      <ion-input type=\"number\" formControlName=\"child_age\" maxLength=\"2\"></ion-input>\n    </ion-item>\n  </ion-col> -->\n</ion-row>\n<ion-row>\n  <ion-col size=\"12\">\n<ion-label class=\"required\">Gender</ion-label>\n\n    <ion-radio-group allowEmptySelection=\"false\" color=\"primary\" formControlName=\"gender\">\n      <ion-row >\n        <ion-col>\n          <ion-item lines=\"none\">\n            <ion-radio value=\"Boy\" ></ion-radio>\n            <ion-label>Boy</ion-label>\n          </ion-item>\n        </ion-col>\n        <ion-col>\n          <ion-item lines=\"none\">\n            <ion-radio value=\"Girl\" ></ion-radio>\n            <ion-label>Girl</ion-label>\n          </ion-item>\n        </ion-col>\n        <ion-col>\n          <ion-item lines=\"none\">\n            <ion-radio value=\"Other\" ></ion-radio>\n            <ion-label>Other</ion-label>\n          </ion-item>\n        </ion-col>\n      </ion-row>\n    </ion-radio-group>\n  </ion-col>\n</ion-row>\n<br>\n\n<ion-label class=\"required\">Home Address</ion-label>\n<ion-item lines=\"none\">\n  <ion-textarea rows=\"6\" cols=\"20\" formControlName=\"address\"></ion-textarea>\n</ion-item>\n<div style=\"color: var(--ion-color-danger);\" *ngIf=\"enquiryForm.controls['address'].touched && enquiryForm.controls['address'].hasError('maxlength')\">\n  Enter a  Maximum of 100 characters only.\n</div>\n<div *ngIf=\"(address.invalid && address.touched) || address.dirty\">\n  <small *ngIf=\"address.errors?.required\" style=\"color: red;\">Address is required</small>\n  <!--question mark(?) is a safe navigation operator-->\n  <small *ngIf=\"address.errors?.pattern\" style=\"color: red;\">Address Contains Invalid Characters.</small>\n</div>  \n<br>\n<ion-row>\n  <ion-col size=\"6\">\n    <ion-label class=\"required\">Mother's Name\n    </ion-label>\n    <ion-item lines=\"none\">\n      <ion-input type=\"text\" formControlName=\"mothers_name\"></ion-input>\n    </ion-item>\n    <div class=\"error-div\" *ngIf=\"(mothers_name?.invalid && mothers_name?.touched) || mothers_name?.dirty\">\n      <small *ngIf=\"mothers_name.errors?.pattern\" class=\"text-danger\">Enter a valid name </small>\n    </div>\n  </ion-col>\n  <ion-col size=\"6\">\n    <ion-label class=\"required\">Mother's contact number\n    </ion-label>\n    <ion-item lines=\"none\">\n      <ion-input type=\"tel\" maxlength=\"10\" formControlName=\"mothers_no\"></ion-input>\n    </ion-item>\n    <div class=\"error-div\" *ngIf=\"(mothers_no?.invalid && mothers_no?.touched) || mothers_no?.dirty\">\n      <small *ngIf=\"mothers_no.errors?.pattern\" class=\"text-danger\">Enter a valid mobile number</small>\n    </div>\n  </ion-col>\n  <ion-col size=\"6\">\n    <ion-label class=\"required\">Mother's Email ID</ion-label>\n    <ion-item lines=\"none\">\n      <ion-input type=\"text\" formControlName=\"mothers_email\"></ion-input>\n    </ion-item>\n    <div class=\"error-div\" *ngIf=\"(mothers_email?.invalid && mothers_email?.touched) || mothers_email?.dirty\">\n      <small *ngIf=\"mothers_email.errors?.pattern\" class=\"text-danger\">Enter a valid email id</small>\n    </div>\n  </ion-col>\n  <ion-col size=\"6\">\n    <ion-label class=\"required\">Mother's Job Profile</ion-label>\n    <ion-item lines=\"none\">\n      <ion-input type=\"text\" formControlName=\"mothers_job_profile\"></ion-input>\n    </ion-item>\n    <div class=\"error-div\" *ngIf=\"(mothers_job_profile?.invalid && mothers_job_profile?.touched) || mothers_job_profile?.dirty\">\n      <small *ngIf=\"mothers_job_profile.errors?.pattern\" class=\"text-danger\">Enter a valid job profile</small>\n    </div>\n  </ion-col>\n</ion-row>\n<ion-row>\n  <ion-col size=\"6\">\n    <ion-label  class=\"required\">Father's  Name\n    </ion-label>\n    <ion-item lines=\"none\">\n      <ion-input type=\"text\" formControlName=\"fathers_name\"></ion-input>\n    </ion-item>\n    <div class=\"error-div\" *ngIf=\"(fathers_name?.invalid && fathers_name?.touched) || fathers_name?.dirty\">\n      <small *ngIf=\"fathers_name.errors?.pattern\" class=\"text-danger\">Enter a valid name </small>\n    </div>\n  </ion-col>\n  <ion-col size=\"6\">\n    <ion-label  class=\"required\">Father's contact number\n    </ion-label>\n    <ion-item lines=\"none\">\n      <ion-input type=\"tel\" maxlength=\"10\" formControlName=\"fathers_no\"></ion-input>\n    </ion-item>\n    <div class=\"error-div\" *ngIf=\"(fathers_no?.invalid && fathers_no?.touched) || fathers_no?.dirty\">\n      <small *ngIf=\"fathers_no.errors?.pattern\" class=\"text-danger\">Enter a valid mobile number</small>\n    </div>\n  </ion-col>\n  <ion-col size=\"6\">\n    <ion-label  class=\"required\">Father's Email ID</ion-label>\n    <ion-item lines=\"none\">\n      <ion-input type=\"text\" formControlName=\"fathers_email\"></ion-input>\n    </ion-item>\n    <div class=\"error-div\" *ngIf=\"(fathers_email?.invalid && fathers_email?.touched) || fathers_email?.dirty\">\n      <small *ngIf=\"fathers_email.errors?.pattern\" class=\"text-danger\">Enter a valid email id</small>\n    </div>\n  </ion-col>\n  <ion-col size=\"6\">\n    <ion-label class=\"required\">Father's Job Profile</ion-label>\n    <ion-item lines=\"none\">\n      <ion-input type=\"text\" formControlName=\"fathers_job_profile\"></ion-input>\n    </ion-item>\n    <div class=\"error-div\" *ngIf=\"(mothers_job_profile?.invalid && fathers_job_profile?.touched) || fathers_job_profile?.dirty\">\n      <small *ngIf=\"fathers_job_profile.errors?.pattern\" class=\"text-danger\">Enter a valid job profile</small>\n    </div>\n  </ion-col>\n  <!-- <ion-col size=\"6\">\n    <ion-label>Sibling (if any)</ion-label>\n    <ion-item lines=\"none\">\n      <ion-input type=\"text\" formControlName=\"siblings\"></ion-input>\n    </ion-item>\n \n  </ion-col>\n  <ion-col size=\"6\">\n    <ion-label>Sibling's Name</ion-label>\n    <ion-item lines=\"none\">\n      <ion-input type=\"text\" formControlName=\"siblings_name\"></ion-input>\n    </ion-item>\n    <div class=\"error-div\" *ngIf=\"(siblings_name?.invalid && siblings_name?.touched) || siblings_name?.dirty\">\n      <small *ngIf=\"siblings_name.errors?.pattern\" class=\"text-danger\">Enter a valid name</small>\n    </div>\n  </ion-col>\n  <ion-col size=\"6\">\n    <ion-label>Sibling's Date of Birth</ion-label>\n    <ion-item lines=\"none\">\n      <ion-datetime displayFormat=\"DD MMM  YYYY\" formControlName=\"sibling_d_o_b\" max=\"{{todays_date}}\" (ionChange)=\"ageFromDOB($event)\"></ion-datetime>\n    </ion-item>\n  </ion-col> -->\n</ion-row>\n<!-- <ion-row>\n  <ion-col size=\"6\">\n    <ion-label>Mobile Number 1</ion-label>\n    <ion-item lines=\"none\">\n      <ion-input type=\"tel\" maxlength=\"10\" formControlName=\"mobile_1\"></ion-input>\n\n    </ion-item>\n    <div class=\"error-div\" *ngIf=\"(mobile_1?.invalid && mobile_1?.touched) || mobile_1?.dirty\">\n      <small *ngIf=\"mobile_1.errors?.pattern\" class=\"text-danger\">Enter a valid mobile number</small>\n    </div>\n  </ion-col>\n  <ion-col size=\"6\">\n    <ion-label>Mobile Number 2</ion-label>\n    <ion-item lines=\"none\">\n      <ion-input type=\"tel\" maxlength=\"10\" formControlName=\"mobile_2\"></ion-input>\n\n    </ion-item>\n    <div class=\"error-div\" *ngIf=\"(mobile_2?.invalid && mobile_2?.touched) || mobile_2?.dirty\">\n      <small *ngIf=\"mobile_2.errors?.pattern\" class=\"text-danger\">Enter a valid mobile number</small>\n    </div>\n  </ion-col>\n \n  <ion-col size=\"6\">\n    <ion-label>Email 2</ion-label>\n    <ion-item lines=\"none\">\n      <ion-input type=\"text\" formControlName=\"email_2\"></ion-input>\n    </ion-item>\n    <div class=\"error-div\" *ngIf=\"(email_2?.invalid && email_2?.touched) || email_2?.dirty\">\n      <small *ngIf=\"email_2.errors?.pattern\" class=\"text-danger\">Enter a valid email id</small>\n    </div>\n  </ion-col>\n</ion-row> -->\n<br>\n\n<p class=\"heading required\">How did you hear about us ?</p>\n<ion-radio-group allowEmptySelection=\"false\" color=\"primary\" formControlName=\"q1\">\n  <ion-row >\n    <ion-col size=\"4\">\n      <ion-item lines=\"none\">\n        <ion-radio value=\"Facebook\" ></ion-radio>\n        <ion-label>Facebook</ion-label>\n      </ion-item>\n    </ion-col>\n    <ion-col size=\"4\">\n      <ion-item lines=\"none\">\n        <ion-radio value=\"Instagram\" ></ion-radio>\n        <ion-label>Instagram</ion-label>\n      </ion-item>\n    </ion-col>\n    <ion-col size=\"4\">\n      <ion-item lines=\"none\">\n        <ion-radio value=\"Google\" ></ion-radio>\n       <ion-label>Google</ion-label>\n      </ion-item>\n    </ion-col>\n    <ion-col size=\"4\">\n      <ion-item lines=\"none\">\n        <ion-radio value=\"Friend\" ></ion-radio>\n       <ion-label>Friends</ion-label>\n      </ion-item>\n    </ion-col>\n    <ion-col size=\"4\">\n      <ion-item lines=\"none\">\n        <ion-radio value=\"Other\" ></ion-radio>\n       <ion-label>Others</ion-label>\n      </ion-item>\n    </ion-col>\n  </ion-row>\n</ion-radio-group>\n<div class=\"ion-text-center\">\n  <ion-button [disabled]=\"enquiryForm.invalid\" type=\"submit\" shape=\"round\"   color=\"primary\">\n    Submit\n  </ion-button>\n</div>\n\n</div>\n</form>\n\n</ion-content>\n";
      /***/
    }
  }]);
})();
//# sourceMappingURL=addinquiry-addinquiry-module-es5.js.map