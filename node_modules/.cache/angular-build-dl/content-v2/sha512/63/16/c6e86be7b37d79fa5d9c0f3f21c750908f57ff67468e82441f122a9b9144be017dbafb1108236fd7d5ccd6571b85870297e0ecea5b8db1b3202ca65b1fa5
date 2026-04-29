(function () {
  function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return e; }; var t, e = {}, r = Object.prototype, n = r.hasOwnProperty, o = Object.defineProperty || function (t, e, r) { t[e] = r.value; }, i = "function" == typeof Symbol ? Symbol : {}, a = i.iterator || "@@iterator", c = i.asyncIterator || "@@asyncIterator", u = i.toStringTag || "@@toStringTag"; function define(t, e, r) { return Object.defineProperty(t, e, { value: r, enumerable: !0, configurable: !0, writable: !0 }), t[e]; } try { define({}, ""); } catch (t) { define = function define(t, e, r) { return t[e] = r; }; } function wrap(t, e, r, n) { var i = e && e.prototype instanceof Generator ? e : Generator, a = Object.create(i.prototype), c = new Context(n || []); return o(a, "_invoke", { value: makeInvokeMethod(t, r, c) }), a; } function tryCatch(t, e, r) { try { return { type: "normal", arg: t.call(e, r) }; } catch (t) { return { type: "throw", arg: t }; } } e.wrap = wrap; var h = "suspendedStart", l = "suspendedYield", f = "executing", s = "completed", y = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var p = {}; define(p, a, function () { return this; }); var d = Object.getPrototypeOf, v = d && d(d(values([]))); v && v !== r && n.call(v, a) && (p = v); var g = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(p); function defineIteratorMethods(t) { ["next", "throw", "return"].forEach(function (e) { define(t, e, function (t) { return this._invoke(e, t); }); }); } function AsyncIterator(t, e) { function invoke(r, o, i, a) { var c = tryCatch(t[r], t, o); if ("throw" !== c.type) { var u = c.arg, h = u.value; return h && "object" == typeof h && n.call(h, "__await") ? e.resolve(h.__await).then(function (t) { invoke("next", t, i, a); }, function (t) { invoke("throw", t, i, a); }) : e.resolve(h).then(function (t) { u.value = t, i(u); }, function (t) { return invoke("throw", t, i, a); }); } a(c.arg); } var r; o(this, "_invoke", { value: function value(t, n) { function callInvokeWithMethodAndArg() { return new e(function (e, r) { invoke(t, n, e, r); }); } return r = r ? r.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); } }); } function makeInvokeMethod(e, r, n) { var o = h; return function (i, a) { if (o === f) throw new Error("Generator is already running"); if (o === s) { if ("throw" === i) throw a; return { value: t, done: !0 }; } for (n.method = i, n.arg = a;;) { var c = n.delegate; if (c) { var u = maybeInvokeDelegate(c, n); if (u) { if (u === y) continue; return u; } } if ("next" === n.method) n.sent = n._sent = n.arg;else if ("throw" === n.method) { if (o === h) throw o = s, n.arg; n.dispatchException(n.arg); } else "return" === n.method && n.abrupt("return", n.arg); o = f; var p = tryCatch(e, r, n); if ("normal" === p.type) { if (o = n.done ? s : l, p.arg === y) continue; return { value: p.arg, done: n.done }; } "throw" === p.type && (o = s, n.method = "throw", n.arg = p.arg); } }; } function maybeInvokeDelegate(e, r) { var n = r.method, o = e.iterator[n]; if (o === t) return r.delegate = null, "throw" === n && e.iterator["return"] && (r.method = "return", r.arg = t, maybeInvokeDelegate(e, r), "throw" === r.method) || "return" !== n && (r.method = "throw", r.arg = new TypeError("The iterator does not provide a '" + n + "' method")), y; var i = tryCatch(o, e.iterator, r.arg); if ("throw" === i.type) return r.method = "throw", r.arg = i.arg, r.delegate = null, y; var a = i.arg; return a ? a.done ? (r[e.resultName] = a.value, r.next = e.nextLoc, "return" !== r.method && (r.method = "next", r.arg = t), r.delegate = null, y) : a : (r.method = "throw", r.arg = new TypeError("iterator result is not an object"), r.delegate = null, y); } function pushTryEntry(t) { var e = { tryLoc: t[0] }; 1 in t && (e.catchLoc = t[1]), 2 in t && (e.finallyLoc = t[2], e.afterLoc = t[3]), this.tryEntries.push(e); } function resetTryEntry(t) { var e = t.completion || {}; e.type = "normal", delete e.arg, t.completion = e; } function Context(t) { this.tryEntries = [{ tryLoc: "root" }], t.forEach(pushTryEntry, this), this.reset(!0); } function values(e) { if (e || "" === e) { var r = e[a]; if (r) return r.call(e); if ("function" == typeof e.next) return e; if (!isNaN(e.length)) { var o = -1, i = function next() { for (; ++o < e.length;) if (n.call(e, o)) return next.value = e[o], next.done = !1, next; return next.value = t, next.done = !0, next; }; return i.next = i; } } throw new TypeError(typeof e + " is not iterable"); } return GeneratorFunction.prototype = GeneratorFunctionPrototype, o(g, "constructor", { value: GeneratorFunctionPrototype, configurable: !0 }), o(GeneratorFunctionPrototype, "constructor", { value: GeneratorFunction, configurable: !0 }), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, u, "GeneratorFunction"), e.isGeneratorFunction = function (t) { var e = "function" == typeof t && t.constructor; return !!e && (e === GeneratorFunction || "GeneratorFunction" === (e.displayName || e.name)); }, e.mark = function (t) { return Object.setPrototypeOf ? Object.setPrototypeOf(t, GeneratorFunctionPrototype) : (t.__proto__ = GeneratorFunctionPrototype, define(t, u, "GeneratorFunction")), t.prototype = Object.create(g), t; }, e.awrap = function (t) { return { __await: t }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, c, function () { return this; }), e.AsyncIterator = AsyncIterator, e.async = function (t, r, n, o, i) { void 0 === i && (i = Promise); var a = new AsyncIterator(wrap(t, r, n, o), i); return e.isGeneratorFunction(r) ? a : a.next().then(function (t) { return t.done ? t.value : a.next(); }); }, defineIteratorMethods(g), define(g, u, "Generator"), define(g, a, function () { return this; }), define(g, "toString", function () { return "[object Generator]"; }), e.keys = function (t) { var e = Object(t), r = []; for (var n in e) r.push(n); return r.reverse(), function next() { for (; r.length;) { var t = r.pop(); if (t in e) return next.value = t, next.done = !1, next; } return next.done = !0, next; }; }, e.values = values, Context.prototype = { constructor: Context, reset: function reset(e) { if (this.prev = 0, this.next = 0, this.sent = this._sent = t, this.done = !1, this.delegate = null, this.method = "next", this.arg = t, this.tryEntries.forEach(resetTryEntry), !e) for (var r in this) "t" === r.charAt(0) && n.call(this, r) && !isNaN(+r.slice(1)) && (this[r] = t); }, stop: function stop() { this.done = !0; var t = this.tryEntries[0].completion; if ("throw" === t.type) throw t.arg; return this.rval; }, dispatchException: function dispatchException(e) { if (this.done) throw e; var r = this; function handle(n, o) { return a.type = "throw", a.arg = e, r.next = n, o && (r.method = "next", r.arg = t), !!o; } for (var o = this.tryEntries.length - 1; o >= 0; --o) { var i = this.tryEntries[o], a = i.completion; if ("root" === i.tryLoc) return handle("end"); if (i.tryLoc <= this.prev) { var c = n.call(i, "catchLoc"), u = n.call(i, "finallyLoc"); if (c && u) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } else if (c) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); } else { if (!u) throw new Error("try statement without catch or finally"); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } } } }, abrupt: function abrupt(t, e) { for (var r = this.tryEntries.length - 1; r >= 0; --r) { var o = this.tryEntries[r]; if (o.tryLoc <= this.prev && n.call(o, "finallyLoc") && this.prev < o.finallyLoc) { var i = o; break; } } i && ("break" === t || "continue" === t) && i.tryLoc <= e && e <= i.finallyLoc && (i = null); var a = i ? i.completion : {}; return a.type = t, a.arg = e, i ? (this.method = "next", this.next = i.finallyLoc, y) : this.complete(a); }, complete: function complete(t, e) { if ("throw" === t.type) throw t.arg; return "break" === t.type || "continue" === t.type ? this.next = t.arg : "return" === t.type ? (this.rval = this.arg = t.arg, this.method = "return", this.next = "end") : "normal" === t.type && e && (this.next = e), y; }, finish: function finish(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.finallyLoc === t) return this.complete(r.completion, r.afterLoc), resetTryEntry(r), y; } }, "catch": function _catch(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.tryLoc === t) { var n = r.completion; if ("throw" === n.type) { var o = n.arg; resetTryEntry(r); } return o; } } throw new Error("illegal catch attempt"); }, delegateYield: function delegateYield(e, r, n) { return this.delegate = { iterator: values(e), resultName: r, nextLoc: n }, "next" === this.method && (this.arg = t), y; } }, e; }

  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

  function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return typeof key === "symbol" ? key : String(key); }

  function _toPrimitive(input, hint) { if (typeof input !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (typeof res !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["feestructure-feestructure-module"], {
    /***/
    "J/2f":
    /*!*****************************************************!*\
      !*** ./src/app/feestructure/feestructure.module.ts ***!
      \*****************************************************/

    /*! exports provided: FeestructurePageModule */

    /***/
    function J2f(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "FeestructurePageModule", function () {
        return FeestructurePageModule;
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


      var _feestructure_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./feestructure-routing.module */
      "bytV");
      /* harmony import */


      var _feestructure_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./feestructure.page */
      "Ywwl");
      /* harmony import */


      var _ionic_super_tabs_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @ionic-super-tabs/angular */
      "k6Iy");

      var FeestructurePageModule = /*#__PURE__*/_createClass(function FeestructurePageModule() {
        _classCallCheck(this, FeestructurePageModule);
      });

      FeestructurePageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _feestructure_routing_module__WEBPACK_IMPORTED_MODULE_5__["FeestructurePageRoutingModule"], _ionic_super_tabs_angular__WEBPACK_IMPORTED_MODULE_7__["SuperTabsModule"]],
        declarations: [_feestructure_page__WEBPACK_IMPORTED_MODULE_6__["FeestructurePage"]]
      })], FeestructurePageModule);
      /***/
    },

    /***/
    "Ywwl":
    /*!***************************************************!*\
      !*** ./src/app/feestructure/feestructure.page.ts ***!
      \***************************************************/

    /*! exports provided: FeestructurePage */

    /***/
    function Ywwl(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "FeestructurePage", function () {
        return FeestructurePage;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_feestructure_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./feestructure.page.html */
      "yD+c");
      /* harmony import */


      var _feestructure_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./feestructure.page.scss */
      "haW5");
      /* harmony import */


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @ionic/angular */
      "TEn/");
      /* harmony import */


      var _ionic_native_http_ngx__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @ionic-native/http/ngx */
      "XSEc");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _ionic_storage__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @ionic/storage */
      "e8h1");
      /* harmony import */


      var _api_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! ./../api.service */
      "yTNM");

      var FeestructurePage = /*#__PURE__*/function () {
        function FeestructurePage(storage, apiService, router, http, alertController) {
          _classCallCheck(this, FeestructurePage);

          this.storage = storage;
          this.apiService = apiService;
          this.router = router;
          this.http = http;
          this.alertController = alertController;
          this.rows = [];
          this.branch_id_array = [];
          this.amount = {};
          this.payment_data = {};
          this.month_type = 'single';
        }

        _createClass(FeestructurePage, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }, {
          key: "ionViewWillEnter",
          value: function ionViewWillEnter() {
            var _this = this;

            this.storage.get('type').then(function (data) {
              console.log('data', data);
              _this.type = data;

              if (data === 'quicktour') {
                _this.apiService.fetchAllBranchFeeStructure().then(function (data) {
                  _this.fees = JSON.parse(data.data);
                });
              } else {
                _this.storage.get('user').then(function (data) {
                  _this.branch_id = JSON.parse(data).branch_id;
                  console.log('user', data);
                  _this.rkey = 'rzp_test_90ElcNKYzC3OjW';
                  _this.header = {
                    'Authorization': 'Basic ' + btoa("rzp_test_90ElcNKYzC3OjW:ClzKfJ5Rn6zlnYDGwXIPdBdh")
                  };
                  _this.user_id = JSON.parse(data).id;

                  _this.apiService.fetchBranchFeeStructure(_this.branch_id).then(function (data) {
                    _this.fees = [JSON.parse(data.data)]; // if(this.branch_id=='1'){
                    //   this.rkey='rzp_test_YWFaY0cPlGJ7Lc'
                    //   this.header = {
                    //     'Authorization' : 'Basic '+ btoa("rzp_test_YWFaY0cPlGJ7Lc:HFYXeeJ7YfSWBzEmQlRDFCYj")
                    //     };
                    // }
                    // else if(this.branch_id=='9'){
                    //   this.rkey='rzp_test_tjMm2K5OafvfTD'
                    //   this.header = {
                    //     'Authorization' : 'Basic '+ btoa("rzp_test_tjMm2K5OafvfTD:mbqr5LV8Czty5FM69iqFItaI")
                    //     };
                    // }
                    // else if(this.branch_id=='10'){
                    //   this.rkey='rzp_test_v2v3L8A4Zf0Ber'
                    //   this.header = {
                    //     'Authorization' : 'Basic '+ btoa("rzp_test_v2v3L8A4Zf0Ber:a7ErXuPClT67NeM7m6OmVWDy")
                    //     };
                    // }
                    // else if(this.branch_id=='2'){
                    //   this.rkey='rzp_test_B4OIYna3AFk95P'
                    //   this.header = {
                    //     'Authorization' : 'Basic '+ btoa("rzp_test_B4OIYna3AFk95P:ANKcDzQfNuetTssXczBkx0Iy")
                    //     };
                    // }

                    _this.storage.get('userType').then(function (userType) {
                      _this.userType = userType;

                      if (userType == 'Daycare') {
                        _this.apiService.fetchDaycare(_this.user_id).then(function (data) {
                          _this.daycare_fee_details = JSON.parse(data.data);
                          console.log(_this.daycare_fee_details);
                          _this.original_daycare_amt = JSON.parse(data.data);
                          console.log('fess', _this.daycare_fee_details);
                        })["catch"](function (err) {
                          _this.daycare_fee_details = '';
                          console.log(err);
                        });
                      } else {
                        _this.apiService.fetchFeesDetails(_this.user_id).then(function (data) {
                          _this.fee_details = JSON.parse(data.data);
                          _this.fee_details_original = JSON.parse(data.data);
                          _this.original_amt_data = _this.fee_details_original['b'];
                          _this.user_amt_a = _this.fee_details['a'];
                          _this.user_amt_b = _this.fee_details['b'];

                          if (!_this.user_amt_b) {
                            _this.apiService.fetchInstallation().then(function (data) {
                              console.log('dara', data);
                              _this.installations = JSON.parse(data.data);
                              _this.original_amt_data = JSON.parse(data.data);
                            })["catch"](function (err) {
                              _this.installations = '';
                              console.log(err);
                            });
                          }
                        })["catch"](function (err) {
                          _this.fee_details = '';
                        });
                      }
                    });
                  });
                });
              }
            });
          }
        }, {
          key: "getAmount",
          value: function getAmount(rowId, BranchId) {
            console.log('row', rowId, BranchId);
          }
        }, {
          key: "openBranchFeeStructure",
          value: function openBranchFeeStructure(branch_id, pdf, branch_name) {
            this.router.navigate(['feestructuretwo', branch_id, pdf, branch_name]);
          }
        }, {
          key: "pay",
          value: function pay(id, expected_amount, date, total_amount) {
            var _this2 = this;

            console.log(expected_amount);
            var original_expected_amount = this.original_amt_data.filter(function (term) {
              return term.id == id;
            });

            if (original_expected_amount.length > 0) {
              if (expected_amount > original_expected_amount[0].expected_amount && expected_amount > total_amount) {
                this.apiService.presentToast('Please enter amount less than expected amount', 3000);
              } else {
                this.http.setDataSerializer('json');
                console.log('rkey', this.rkey);
                this.http.post('https://api.razorpay.com/v1/orders', {
                  "amount": expected_amount * 100,
                  "currency": "INR"
                }, this.header).then(function (data) {
                  console.log('pay', data);
                  var parsed_data = JSON.parse(data.data);
                  _this2.order_id = parsed_data['id'];
                  parsed_data['userid'] = _this2.user_id;
                  parsed_data['installmentid'] = id;
                  parsed_data['from_date'] = date + "-01";
                  parsed_data['to_date'] = '';
                  parsed_data['type'] = 'Preschool';
                  console.log('parsed_data', parsed_data);

                  _this2.apiService.onlinePayment(parsed_data).then(function (data) {
                    if (data.status == 200) {
                      var options = {
                        description: 'Prangan',
                        image: 'http://dynamicvishva.in/Prangan_New/images/prangan.png',
                        currency: "INR",
                        key: _this2.rkey,
                        amount: parsed_data['amount'],
                        name: 'Prangan',
                        order_id: parsed_data['id'],
                        theme: {
                          color: '#fdd653'
                        },
                        modal: {
                          ondismiss: function ondismiss() {
                            alert('dismissed');
                          }
                        }
                      };

                      var successCallback = function successCallback(payment_id) {
                        _this2.successFn(payment_id);
                      }; // var successCallback = (success)=> {
                      //   alert('payment_id: ' + success.razorpay_payment_id)
                      //   var orderId = success.razorpay_order_id
                      //   var signature = success.razorpay_signature
                      // }


                      var cancelCallback = function cancelCallback(error) {
                        _this2.apiService.presentToast("Payment Failed", 2000);
                      };

                      RazorpayCheckout.on('payment.success', successCallback);
                      RazorpayCheckout.on('payment.cancel', cancelCallback);
                      RazorpayCheckout.open(options);
                    }
                  })["catch"](function (err) {
                    console.log('err2', err);
                  });
                })["catch"](function (err) {
                  console.log('err1', err);
                });
              }
            }

            console.log('id', id, original_expected_amount);
          }
        }, {
          key: "payDaycare",
          value: function payDaycare() {
            var _this3 = this;

            if (this.month_type == 'single') {
              var amount = this.single_amount;
              var from_date = this.single_from_month;
              var to_date = '';

              if (from_date) {
                console.log(amount, this.rkey);

                if (amount > 0) {
                  this.http.setDataSerializer('json');
                  this.http.post('https://api.razorpay.com/v1/orders', {
                    "amount": amount * 100,
                    "currency": "INR"
                  }, this.header).then(function (data) {
                    console.log('pay', data);
                    var parsed_data = JSON.parse(data.data);
                    _this3.order_id = parsed_data['id'];
                    parsed_data['userid'] = _this3.user_id;
                    parsed_data['installmentid'] = '';
                    parsed_data['from_date'] = from_date;
                    parsed_data['to_date'] = to_date;
                    parsed_data['type'] = 'Daycare';
                    console.log('parsed_data', parsed_data);

                    _this3.apiService.onlinePayment(parsed_data).then(function (data) {
                      if (data.status == 200) {
                        var options = {
                          description: 'Prangan',
                          image: 'http://dynamicvishva.in/Prangan_New/images/prangan.png',
                          currency: "INR",
                          key: _this3.rkey,
                          amount: parsed_data['amount'],
                          name: 'Prangan',
                          order_id: parsed_data['id'],
                          theme: {
                            color: '#fdd653'
                          },
                          modal: {
                            ondismiss: function ondismiss() {
                              alert('dismissed');
                            }
                          }
                        };

                        var successCallback = function successCallback(payment_id) {
                          _this3.successFn(payment_id);
                        }; // var successCallback = (success)=> {
                        //   alert('payment_id: ' + success.razorpay_payment_id)
                        //   var orderId = success.razorpay_order_id
                        //   var signature = success.razorpay_signature
                        // }


                        var cancelCallback = function cancelCallback(error) {
                          _this3.apiService.presentToast("Payment Failed", 2000);
                        };

                        RazorpayCheckout.on('payment.success', successCallback);
                        RazorpayCheckout.on('payment.cancel', cancelCallback);
                        RazorpayCheckout.open(options);
                      }
                    })["catch"](function (err) {
                      console.log('err2', err);
                    });
                  })["catch"](function (err) {
                    console.log('err1', err);
                  });
                } else {
                  this.apiService.presentToast('Please enter amount ', 3000);
                }
              } else {
                this.apiService.presentToast('Please select month ', 3000);
              }
            } else {
              var amount = this.multiple_amount;
              console.log("multiple_amount", this.multiple_amount);
              var month_from_date = this.from_month;
              var month_to_date = this.to_month;

              if (month_from_date && month_to_date) {
                if (amount > 0) {
                  if (month_from_date > month_to_date) {
                    this.apiService.presentToast('From month cannot be greater than To Month ', 3000);
                  } else {
                    this.http.setDataSerializer('json');
                    this.http.post('https://api.razorpay.com/v1/orders', {
                      "amount": amount * 100,
                      "currency": "INR"
                    }, this.header).then(function (data) {
                      console.log('pay', data);
                      var parsed_data = JSON.parse(data.data);
                      _this3.order_id = parsed_data['id'];
                      parsed_data['userid'] = _this3.user_id;
                      parsed_data['installmentid'] = '';
                      parsed_data['from_date'] = month_from_date;
                      parsed_data['to_date'] = month_to_date;
                      parsed_data['type'] = 'Daycare';
                      console.log('parsed_data', parsed_data);

                      _this3.apiService.onlinePayment(parsed_data).then(function (data) {
                        if (data.status == 200) {
                          var options = {
                            description: 'Prangan',
                            image: 'http://dynamicvishva.in/Prangan_New/images/prangan.png',
                            currency: "INR",
                            key: _this3.rkey,
                            amount: parsed_data['amount'],
                            name: 'Prangan',
                            order_id: parsed_data['id'],
                            theme: {
                              color: '#fdd653'
                            },
                            modal: {
                              ondismiss: function ondismiss() {
                                alert('dismissed');
                              }
                            }
                          };

                          var successCallback = function successCallback(payment_id) {
                            _this3.successFn(payment_id);
                          }; // var successCallback = (success)=> {
                          //   alert('payment_id: ' + success.razorpay_payment_id)
                          //   var orderId = success.razorpay_order_id
                          //   var signature = success.razorpay_signature
                          // }


                          var cancelCallback = function cancelCallback(error) {
                            _this3.apiService.presentToast("Payment Failed", 2000);
                          };

                          RazorpayCheckout.on('payment.success', successCallback);
                          RazorpayCheckout.on('payment.cancel', cancelCallback);
                          RazorpayCheckout.open(options);
                        }
                      })["catch"](function (err) {
                        console.log('err2', err);
                      });
                    })["catch"](function (err) {
                      console.log('err1', err);
                    });
                  }
                } else {
                  this.apiService.presentToast('Please enter amount ', 3000);
                }
              } else {
                this.apiService.presentToast('Please select both months ', 3000);
              }
            }
          }
        }, {
          key: "payInstallment",
          value: function payInstallment(id, amount, date, total_amount) {
            var _this4 = this;

            if (parseInt(amount) > 0) {
              console.log(amount);
              var original_expected_amount = this.original_amt_data.filter(function (term) {
                return term.id == id;
              });

              if (original_expected_amount.length > 0) {
                if (amount > original_expected_amount[0].amount && amount > total_amount) {
                  this.apiService.presentToast('Please enter amount less than expected amount', 3000);
                } else {
                  this.http.setDataSerializer('json');
                  this.http.post('https://api.razorpay.com/v1/orders', {
                    "amount": amount * 100,
                    "currency": "INR"
                  }, this.header).then(function (data) {
                    console.log('pay', data);
                    var parsed_data = JSON.parse(data.data);
                    _this4.order_id = parsed_data['id'];
                    parsed_data['userid'] = _this4.user_id;
                    parsed_data['installmentid'] = '';
                    parsed_data['from_date'] = date;
                    parsed_data['to_date'] = '';
                    parsed_data['type'] = 'Preschool';
                    console.log('parsed_data', parsed_data);

                    _this4.apiService.onlinePayment(parsed_data).then(function (data) {
                      if (data.status == 200) {
                        var options = {
                          description: 'Prangan',
                          image: 'http://dynamicvishva.in/Prangan_New/images/prangan.png',
                          currency: "INR",
                          key: _this4.rkey,
                          amount: parsed_data['amount'],
                          name: 'Prangan',
                          order_id: parsed_data['id'],
                          theme: {
                            color: '#fdd653'
                          },
                          modal: {
                            ondismiss: function ondismiss() {
                              alert('dismissed');
                            }
                          }
                        };

                        var successCallback = function successCallback(payment_id) {
                          _this4.successFn(payment_id);
                        }; // var successCallback = (success)=> {
                        //   alert('payment_id: ' + success.razorpay_payment_id)
                        //   var orderId = success.razorpay_order_id
                        //   var signature = success.razorpay_signature
                        // }


                        var cancelCallback = function cancelCallback(error) {
                          _this4.apiService.presentToast("Payment Failed", 2000);
                        };

                        RazorpayCheckout.on('payment.success', successCallback);
                        RazorpayCheckout.on('payment.cancel', cancelCallback);
                        RazorpayCheckout.open(options);
                      }
                    })["catch"](function (err) {
                      console.log('err2', err);
                    });
                  })["catch"](function (err) {
                    console.log('err1', err);
                  });
                }
              }

              console.log('id', id, original_expected_amount);
            } else {
              this.apiService.presentToast('Please enter amount ', 3000);
            }
          }
        }, {
          key: "presentAlert",
          value: function presentAlert(message) {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/_regeneratorRuntime().mark(function _callee() {
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
                      buttons: ['OK']
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
          key: "successFn",
          value: function successFn(payment_id) {
            var _this5 = this;

            console.log(payment_id);
            console.log('a', this.payment_data);
            alert("success");
            this.payment_data['order_id'] = this.order_id;
            this.payment_data['razorpay_payment_id'] = payment_id.razorpay_payment_id;
            this.payment_data['razorpay_order_id'] = payment_id.razorpay_order_id;
            this.payment_data['razorpay_signature'] = payment_id.razorpay_signature;
            this.payment_data['branchid'] = this.branch_id;
            this.apiService.verifyonlinePayment(this.payment_data).then(function (data) {
              if (data.status == 200) {
                _this5.presentAlert('Payment is successful');

                _this5.from_month = '';
                _this5.to_month = '';
                _this5.multiple_amount = '';
                _this5.single_from_month = '';
                _this5.single_amount = '';

                _this5.ionViewWillEnter();
              }
            })["catch"](function (err) {
              console.log(err);
              _this5.log = err;
              var error_message = JSON.parse(err.error)['error'];

              _this5.apiService.presentToast(error_message, 2000);
            });
          }
        }, {
          key: "doRefresh",
          value: function doRefresh(event) {
            var _this6 = this;

            this.storage.get('type').then(function (data) {
              console.log('data', data);
              _this6.type = data;

              if (data === 'quicktour') {
                _this6.apiService.fetchAllBranchFeeStructure().then(function (data) {
                  _this6.fees = JSON.parse(data.data);
                  event.target.complete();
                });
              } else {
                _this6.storage.get('user').then(function (data) {
                  _this6.branch_id = JSON.parse(data).branch_id;
                  _this6.user_id = JSON.parse(data).id;

                  _this6.apiService.fetchBranchFeeStructure(_this6.branch_id).then(function (data) {
                    _this6.fees = [JSON.parse(data.data)];
                    _this6.rkey = 'rzp_test_90ElcNKYzC3OjW';
                    _this6.header = {
                      'Authorization': 'Basic ' + btoa("rzp_test_90ElcNKYzC3OjW:ClzKfJ5Rn6zlnYDGwXIPdBdh")
                    }; // if(this.branch_id=='1'){
                    //   this.rkey='rzp_test_YWFaY0cPlGJ7Lc'
                    //   this.header = {
                    //     'Authorization' : 'Basic '+ btoa("rzp_test_YWFaY0cPlGJ7Lc:HFYXeeJ7YfSWBzEmQlRDFCYj")
                    //     };
                    // }
                    // else if(this.branch_id=='9'){
                    //   this.rkey='rzp_test_tjMm2K5OafvfTD'
                    //   this.header = {
                    //     'Authorization' : 'Basic '+ btoa("rzp_test_tjMm2K5OafvfTD:mbqr5LV8Czty5FM69iqFItaI")
                    //     };
                    // }
                    // else if(this.branch_id=='10'){
                    //   this.rkey='rzp_test_v2v3L8A4Zf0Ber'
                    //   this.header = {
                    //     'Authorization' : 'Basic '+ btoa("rzp_test_v2v3L8A4Zf0Ber:a7ErXuPClT67NeM7m6OmVWDy")
                    //     };
                    // }
                    // else if(this.branch_id=='2'){
                    //   this.rkey='rzp_test_B4OIYna3AFk95P'
                    //   this.header = {
                    //     'Authorization' : 'Basic '+ btoa("rzp_test_B4OIYna3AFk95P:ANKcDzQfNuetTssXczBkx0Iy")
                    //     };
                    // }

                    _this6.storage.get('userType').then(function (userType) {
                      _this6.userType = userType;

                      if (userType == 'Daycare') {
                        event.target.complete();

                        _this6.apiService.fetchDaycare(_this6.user_id).then(function (data) {
                          _this6.daycare_fee_details = JSON.parse(data.data);
                          console.log("daycare_fee_details", _this6.daycare_fee_details);
                          _this6.original_daycare_amt = JSON.parse(data.data);
                          console.log('fess', _this6.daycare_fee_details);
                        })["catch"](function (err) {
                          _this6.daycare_fee_details = '';
                          console.log(err);
                        });
                      } else {
                        event.target.complete();

                        _this6.apiService.fetchFeesDetails(_this6.user_id).then(function (data) {
                          _this6.fee_details = JSON.parse(data.data);
                          _this6.fee_details_original = JSON.parse(data.data);
                          _this6.original_amt_data = _this6.fee_details_original['b'];
                          _this6.user_amt_a = _this6.fee_details['a'];
                          _this6.user_amt_b = _this6.fee_details['b'];

                          if (!_this6.user_amt_b) {
                            _this6.apiService.fetchInstallation().then(function (data) {
                              console.log('dara', data);
                              _this6.installations = JSON.parse(data.data);
                              _this6.original_amt_data = JSON.parse(data.data);
                            })["catch"](function (err) {
                              _this6.installations = '';
                              console.log(err);
                            });
                          }

                          console.log('fess', _this6.fee_details);
                        })["catch"](function (err) {
                          _this6.fee_details = '';
                        });
                      }
                    });
                  });
                });
              }
            });
          }
        }, {
          key: "typeChange",
          value: function typeChange(event) {
            console.log(event);
            console.log(event.target.value);
            this.month_type = event.target.value;
          }
        }, {
          key: "alreadyPaid",
          value: function alreadyPaid() {
            this.apiService.presentToast('Payment is already done ', 3000);
          }
        }]);

        return FeestructurePage;
      }();

      FeestructurePage.ctorParameters = function () {
        return [{
          type: _ionic_storage__WEBPACK_IMPORTED_MODULE_7__["Storage"]
        }, {
          type: _api_service__WEBPACK_IMPORTED_MODULE_8__["ApiService"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"]
        }, {
          type: _ionic_native_http_ngx__WEBPACK_IMPORTED_MODULE_4__["HTTP"]
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["AlertController"]
        }];
      };

      FeestructurePage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_6__["Component"])({
        selector: 'app-feestructure',
        template: _raw_loader_feestructure_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_feestructure_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
      })], FeestructurePage);
      /***/
    },

    /***/
    "bytV":
    /*!*************************************************************!*\
      !*** ./src/app/feestructure/feestructure-routing.module.ts ***!
      \*************************************************************/

    /*! exports provided: FeestructurePageRoutingModule */

    /***/
    function bytV(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "FeestructurePageRoutingModule", function () {
        return FeestructurePageRoutingModule;
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


      var _feestructure_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./feestructure.page */
      "Ywwl");

      var routes = [{
        path: '',
        component: _feestructure_page__WEBPACK_IMPORTED_MODULE_3__["FeestructurePage"]
      }];

      var FeestructurePageRoutingModule = /*#__PURE__*/_createClass(function FeestructurePageRoutingModule() {
        _classCallCheck(this, FeestructurePageRoutingModule);
      });

      FeestructurePageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
      })], FeestructurePageRoutingModule);
      /***/
    },

    /***/
    "haW5":
    /*!*****************************************************!*\
      !*** ./src/app/feestructure/feestructure.page.scss ***!
      \*****************************************************/

    /*! exports provided: default */

    /***/
    function haW5(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = ":host {\n  --super-tabs-toolbar-background: #ffffff;\n  --st-indicator-color: #fdd653;\n  --st-indicator-height:3px;\n  --st-label-text-transform:none;\n  --st-label-color-active: #fdd653;\n}\n\nion-card {\n  margin: 16px 0 0 0;\n  border-radius: 20px;\n  background: linear-gradient(to bottom, #b0ff86, #ffffff);\n}\n\nion-card .heading {\n  font-size: 24px;\n  font-weight: bold;\n  margin: 20px 0 8px 16px;\n}\n\nion-card p {\n  font-size: 12px;\n  margin: 2px 8px -6px 16px;\n}\n\nion-card ion-button {\n  margin-bottom: 16px;\n  text-transform: none;\n  width: 40%;\n  height: 35px;\n}\n\nion-card .p-margin {\n  margin: 12px 8px 8px 16px;\n}\n\n.header {\n  font-weight: bold;\n}\n\n.amount-div {\n  border-radius: 20px;\n  margin-bottom: 16px;\n  background: #75fa75;\n  padding: 8px;\n}\n\nion-label {\n  color: #202020;\n  font-size: 14px;\n}\n\nion-input {\n  border: 1px solid #9b9ca6;\n  border-radius: 5px;\n  --padding-start: 5px !important;\n  height: 35px;\n}\n\nion-textarea {\n  border: 1px solid #9b9ca6;\n  border-radius: 5px;\n  --padding-start: 5px !important;\n}\n\nion-datetime {\n  border: 1px solid #9b9ca6;\n  border-radius: 5px;\n  --padding-start: 5px !important;\n  width: 100%;\n  height: 35px;\n}\n\nhr {\n  background: #b1b1b1;\n}\n\nion-item {\n  --padding-start: 0;\n  --ripple-color: transparent;\n  --background-activated: transparent;\n  --background-activated-opacity:transparent;\n  --background-focused: transparent;\n  --background-focused-opacity:transparent;\n  --background-hover: transparent;\n  --background-hover-opacity:transparent;\n}\n\nion-item ion-label {\n  color: #9b9ca6;\n}\n\nion-radio-group ion-item {\n  border-bottom: 0;\n}\n\nion-radio-group ion-col {\n  padding-left: 0;\n}\n\nion-radio-group ion-radio {\n  margin-right: 8px;\n  width: 18px;\n  height: 18px;\n}\n\nion-col {\n  padding-left: 0;\n}\n\nion-button {\n  text-transform: none;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL2ZlZXN0cnVjdHVyZS5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBR0E7RUFDSSx3Q0FBQTtFQUNBLDZCQUFBO0VBQ0EseUJBQUE7RUFDQSw4QkFBQTtFQUNBLGdDQUFBO0FBRko7O0FBSUE7RUFDSSxrQkFBQTtFQUNBLG1CQUFBO0VBQ0Esd0RBQUE7QUFESjs7QUFFSTtFQUNJLGVBQUE7RUFDQSxpQkFBQTtFQUNBLHVCQUFBO0FBQVI7O0FBRUk7RUFDSSxlQUFBO0VBQ0EseUJBQUE7QUFBUjs7QUFFSTtFQUNJLG1CQUFBO0VBQ0Esb0JBQUE7RUFDQSxVQUFBO0VBRUEsWUFBQTtBQURSOztBQUdJO0VBQ0kseUJBQUE7QUFEUjs7QUFLQTtFQUNJLGlCQUFBO0FBRko7O0FBSUE7RUFFSSxtQkFBQTtFQUNBLG1CQUFBO0VBQ0EsbUJBQUE7RUFDQSxZQUFBO0FBRko7O0FBSUE7RUFDSSxjQUFBO0VBQ0EsZUFBQTtBQURKOztBQUdBO0VBQ0kseUJBQUE7RUFDQSxrQkFBQTtFQUNBLCtCQUFBO0VBQ0EsWUFBQTtBQUFKOztBQUVBO0VBQ0kseUJBQUE7RUFDQSxrQkFBQTtFQUNBLCtCQUFBO0FBQ0o7O0FBQ0E7RUFDSSx5QkFBQTtFQUNBLGtCQUFBO0VBQ0EsK0JBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtBQUVKOztBQUNBO0VBQ0ksbUJBQUE7QUFFSjs7QUFBQTtFQUVJLGtCQUFBO0VBQ0EsMkJBQUE7RUFDQSxtQ0FBQTtFQUNBLDBDQUFBO0VBQ0EsaUNBQUE7RUFDQSx3Q0FBQTtFQUNBLCtCQUFBO0VBQ0Esc0NBQUE7QUFFSjs7QUFBSTtFQUVBLGNBQUE7QUFDSjs7QUFJUTtFQUNJLGdCQUFBO0FBRFo7O0FBR1E7RUFDSSxlQUFBO0FBRFo7O0FBR1E7RUFDQSxpQkFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0FBRFI7O0FBS0k7RUFDSSxlQUFBO0FBRlI7O0FBS0k7RUFDSSxvQkFBQTtBQUZSIiwiZmlsZSI6ImZlZXN0cnVjdHVyZS5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBpb24tY29udGVudCB7XHJcbi8vICAgICAtLWJhY2tncm91bmQ6I2YzZmJmZTtcclxuLy8gfVxyXG46aG9zdCB7ICBcclxuICAgIC0tc3VwZXItdGFicy10b29sYmFyLWJhY2tncm91bmQ6ICNmZmZmZmY7XHJcbiAgICAtLXN0LWluZGljYXRvci1jb2xvcjogI2ZkZDY1MztcclxuICAgIC0tc3QtaW5kaWNhdG9yLWhlaWdodDozcHg7XHJcbiAgICAtLXN0LWxhYmVsLXRleHQtdHJhbnNmb3JtOm5vbmU7XHJcbiAgICAtLXN0LWxhYmVsLWNvbG9yLWFjdGl2ZTogI2ZkZDY1MztcclxuICB9XHJcbmlvbi1jYXJkIHtcclxuICAgIG1hcmdpbjogMTZweCAwIDAgMDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDIwcHg7XHJcbiAgICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQodG8gYm90dG9tLCAjYjBmZjg2ICwgI2ZmZmZmZik7XHJcbiAgICAuaGVhZGluZ3tcclxuICAgICAgICBmb250LXNpemU6IDI0cHg7XHJcbiAgICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgICAgICAgbWFyZ2luOiAyMHB4IDAgOHB4IDE2cHg7XHJcbiAgICB9XHJcbiAgICBwIHtcclxuICAgICAgICBmb250LXNpemU6IDEycHg7XHJcbiAgICAgICAgbWFyZ2luOiAycHggOHB4IC02cHggMTZweDtcclxuICAgIH1cclxuICAgIGlvbi1idXR0b24ge1xyXG4gICAgICAgIG1hcmdpbi1ib3R0b206IDE2cHg7XHJcbiAgICAgICAgdGV4dC10cmFuc2Zvcm06IG5vbmU7XHJcbiAgICAgICAgd2lkdGg6IDQwJTtcclxuICAgICAgICAvLyAtLWJvcmRlci1yYWRpdXM6IDZweDtcclxuICAgICAgICBoZWlnaHQ6IDM1cHg7XHJcbiAgICB9XHJcbiAgICAucC1tYXJnaW57XHJcbiAgICAgICAgbWFyZ2luOiAxMnB4IDhweCA4cHggMTZweDtcclxuICAgICAgICBcclxuICAgIH1cclxufVxyXG4uaGVhZGVye1xyXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbn1cclxuLmFtb3VudC1kaXZ7XHJcbiAgICBcclxuICAgIGJvcmRlci1yYWRpdXM6IDIwcHg7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAxNnB4O1xyXG4gICAgYmFja2dyb3VuZDogcmdiKDExNywgMjUwLCAxMTcpO1xyXG4gICAgcGFkZGluZzogOHB4O1xyXG59XHJcbmlvbi1sYWJlbHtcclxuICAgIGNvbG9yOiAjMjAyMDIwO1xyXG4gICAgZm9udC1zaXplOiAxNHB4O1xyXG59XHJcbmlvbi1pbnB1dCB7XHJcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjOWI5Y2E2O1xyXG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xyXG4gICAgLS1wYWRkaW5nLXN0YXJ0OiA1cHggIWltcG9ydGFudDtcclxuICAgIGhlaWdodDozNXB4O1xyXG59XHJcbmlvbi10ZXh0YXJlYXtcclxuICAgIGJvcmRlcjogMXB4IHNvbGlkICM5YjljYTY7XHJcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XHJcbiAgICAtLXBhZGRpbmctc3RhcnQ6IDVweCAhaW1wb3J0YW50O1xyXG59XHJcbmlvbi1kYXRldGltZXtcclxuICAgIGJvcmRlcjogMXB4IHNvbGlkICM5YjljYTY7XHJcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XHJcbiAgICAtLXBhZGRpbmctc3RhcnQ6IDVweCAhaW1wb3J0YW50O1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBoZWlnaHQ6MzVweDtcclxuXHJcbn1cclxuaHJ7XHJcbiAgICBiYWNrZ3JvdW5kOiAjYjFiMWIxO1xyXG59XHJcbmlvbi1pdGVte1xyXG4gICAgLy8gYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICM2Nzc0ODM7XHJcbiAgICAtLXBhZGRpbmctc3RhcnQ6IDA7XHJcbiAgICAtLXJpcHBsZS1jb2xvcjogdHJhbnNwYXJlbnQ7XHJcbiAgICAtLWJhY2tncm91bmQtYWN0aXZhdGVkOiB0cmFuc3BhcmVudDtcclxuICAgIC0tYmFja2dyb3VuZC1hY3RpdmF0ZWQtb3BhY2l0eTp0cmFuc3BhcmVudDtcclxuICAgIC0tYmFja2dyb3VuZC1mb2N1c2VkOiB0cmFuc3BhcmVudDtcclxuICAgIC0tYmFja2dyb3VuZC1mb2N1c2VkLW9wYWNpdHk6dHJhbnNwYXJlbnQ7XHJcbiAgICAtLWJhY2tncm91bmQtaG92ZXIgIDogdHJhbnNwYXJlbnQ7XHJcbiAgICAtLWJhY2tncm91bmQtaG92ZXItb3BhY2l0eSAgOnRyYW5zcGFyZW50O1xyXG5cclxuICAgIGlvbi1sYWJlbCB7XHJcbiAgICAgICBcclxuICAgIGNvbG9yOiAjOWI5Y2E2O1xyXG5cclxuICAgIH1cclxufVxyXG4gICAgaW9uLXJhZGlvLWdyb3Vwe1xyXG4gICAgICAgIGlvbi1pdGVte1xyXG4gICAgICAgICAgICBib3JkZXItYm90dG9tOiAwO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpb24tY29sIHtcclxuICAgICAgICAgICAgcGFkZGluZy1sZWZ0OiAwO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpb24tcmFkaW97XHJcbiAgICAgICAgbWFyZ2luLXJpZ2h0OiA4cHg7XHJcbiAgICAgICAgd2lkdGg6IDE4cHg7XHJcbiAgICAgICAgaGVpZ2h0OiAxOHB4O1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBpb24tY29sIHtcclxuICAgICAgICBwYWRkaW5nLWxlZnQ6IDA7XHJcbiAgICB9XHJcblxyXG4gICAgaW9uLWJ1dHRvbiB7XHJcbiAgICAgICAgdGV4dC10cmFuc2Zvcm06IG5vbmU7XHJcbiAgICAgICBcclxuICAgICAgICAvLyB3aWR0aDogODAlO1xyXG4gICAgfSJdfQ== */";
      /***/
    },

    /***/
    "yD+c":
    /*!*******************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/feestructure/feestructure.page.html ***!
      \*******************************************************************************************/

    /*! exports provided: default */

    /***/
    function yDC(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-header>\n  <ion-toolbar>\n    <ion-title *ngIf=\"type!=='quicktour'\">Fee Payment</ion-title>\n    <ion-title *ngIf=\"type=='quicktour'\">Fee Structure</ion-title>\n    <ion-buttons slot=\"start\">\n      <ion-button  shape=\"round\"[routerLink]=\"['/quicktour']\">\n        <ion-icon color=\"light\" name=\"arrow-back-outline\"></ion-icon>\n      </ion-button>\n    </ion-buttons>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <ion-refresher slot=\"fixed\" (ionRefresh)=\"doRefresh($event)\">\n    <ion-refresher-content></ion-refresher-content>\n  </ion-refresher>\n  <super-tabs>\n    <super-tabs-toolbar slot=\"top\" >\n      <super-tab-button *ngIf=\"type!=='quicktour'\">\n        <ion-label>Pay Fees</ion-label>    \n      </super-tab-button>\n      <super-tab-button>\n        <ion-label>View Fees</ion-label>    \n      </super-tab-button>\n     \n    </super-tabs-toolbar>\n    <super-tabs-container>\n      <super-tab  *ngIf=\"type!=='quicktour'\">\n        <ion-content>\n          <div class=\"padding-ionic\" *ngIf=\"userType\">\n            <div *ngIf=\"userType=='Daycare'\" >\n              <ion-label>Month Type <span class=\"text-danger\">*</span></ion-label>\n            \n              <ion-radio-group allowEmptySelection=\"false\" color=\"primary\" (ionChange)=\"typeChange($event)\"  [(ngModel)]=\"month_type\">\n                <ion-row>\n                  <ion-col >\n                    <ion-item lines=\"none\">\n                      <ion-radio value=\"single\"></ion-radio>\n                      <ion-label>Single</ion-label>\n                    </ion-item>\n                  </ion-col>\n                  <ion-col >\n                    <ion-item lines=\"none\">\n                      <ion-radio value=\"multiple\"></ion-radio>\n                      <ion-label>Multiple</ion-label>\n                    </ion-item>\n                  </ion-col>\n                </ion-row>\n              </ion-radio-group>\n              <div *ngIf=\"month_type=='multiple'\">\n                <ion-row >\n                  <ion-col size=\"6\">\n                    <ion-label>From Month  <span class=\"text-danger\">*</span></ion-label>\n                    <ion-item lines=\"none\">\n                      <ion-datetime displayFormat=\"DD MMM  YYYY\" [(ngModel)]=\"from_month\" ></ion-datetime>\n                    </ion-item>\n                  </ion-col>\n                  <ion-col size=\"6\">\n                    <ion-label>To Month  <span class=\"text-danger\">*</span></ion-label>\n                    <ion-item lines=\"none\">\n                      <ion-datetime displayFormat=\"DD MMM  YYYY\" [(ngModel)]=\"to_month\" ></ion-datetime>\n                    </ion-item>\n                  </ion-col>\n                  <ion-col size=\"12\">\n                    <ion-label>Amount  <span class=\"text-danger\">*</span></ion-label><br>\n                    <ion-item lines=\"none\">\n                      <ion-input [readonly]=\"true\" name=\"multiple_amount\" [(ngModel)]=\"multiple_amount\"  type=\"number\" placeholder=\"Enter amount\"  ></ion-input>\n                    </ion-item>\n                  </ion-col>\n                    <ion-button style=\"width:96%\" expand=\"block\" (click)=\"payDaycare()\" color=\"primary\"  shape=\"round\">\n                      Pay\n                    </ion-button>\n                </ion-row>\n\n               \n              </div>\n          <div>\n\n              <ion-row *ngIf=\"month_type=='single'\">\n                <ion-col size=\"12\">\n                  <ion-label>Month  <span class=\"text-danger\">*</span></ion-label>\n                  <ion-item lines=\"none\">\n                    <ion-datetime displayFormat=\"DD MMM  YYYY\" [(ngModel)]=\"single_from_month\" ></ion-datetime>\n                  </ion-item>\n                </ion-col>\n                <ion-col size=\"12\">\n                  <ion-label>Amount  <span class=\"text-danger\">*</span></ion-label>\n                  <ion-item lines=\"none\">\n                      <ion-input name=\"single_amount\" [(ngModel)]=\"single_amount\"  type=\"number\" placeholder=\"Enter amount\"  ></ion-input>\n                  </ion-item>\n                </ion-col>\n              \n                <ion-col size=\"12\">\n                  <ion-button expand=\"block\" style=\"width:96%\" (click)=\"payDaycare()\" color=\"primary\"  shape=\"round\">\n                    Pay\n                  </ion-button>\n                </ion-col>\n              </ion-row>\n          </div>\n\n              <!-- <div class=\"amount-div\"  *ngFor=\"let daycare of daycare_fee_details\"> -->\n                \n                <!-- <ion-row *ngIf=\"daycare.type=='Multiple'\">\n                  <ion-col size=\"6\" >\n                    <ion-label>From Month</ion-label><br>\n                    <ion-label><b>{{daycare.from_date|date:'MMM, yyyy'}}</b></ion-label><br>\n                  </ion-col>\n                  <ion-col size=\"6\">\n                    <ion-label>To Month</ion-label><br>\n                    <ion-label><b>{{daycare.to_date|date:'MMM, yyyy'}}</b></ion-label><br>\n                  </ion-col>\n                  <ion-col size=\"6\">\n                    <ion-label>Amount</ion-label><br>\n                    <ion-input name=\"d_amount\" [(ngModel)]=\"daycare.amount\" *ngIf=\"daycare.amount\" max=\"{{daycare.amount}}\" type=\"number\" placeholder=\"Enter amount\" value=\"{{daycare.amount}}\" ></ion-input>\n                    \n                  </ion-col>\n                  <ion-col size=\"12\">\n                    <ion-button expand=\"block\" (click)=\"payDaycare(daycare.id,daycare.amount,daycare.from_date,daycare.to_date)\" color=\"primary\"  shape=\"round\">\n                      Pay\n                    </ion-button>\n                  </ion-col>\n                </ion-row>\n                <ion-row *ngIf=\"daycare.type=='Single'\">\n                  <ion-col size=\"6\" >\n                    <ion-label>Month</ion-label><br>\n                    <ion-label><b>{{daycare.from_date|date:'MMM, yyyy'}}</b></ion-label><br>\n                  </ion-col>\n                  \n                  <ion-col size=\"6\">\n                    <ion-label>Amount</ion-label><br>\n                    <ion-input name=\"d_amount\" [(ngModel)]=\"daycare.amount\" *ngIf=\"daycare.amount\" max=\"{{daycare.amount}}\" type=\"number\" placeholder=\"Enter amount\" value=\"{{daycare.amount}}\" ></ion-input>\n                    \n                  </ion-col>\n                  <ion-col size=\"12\">\n                    <ion-button expand=\"block\" (click)=\"payDaycare(daycare.id,daycare.amount,daycare.from_date,daycare.to_date)\" color=\"primary\"  shape=\"round\">\n                      Pay\n                    </ion-button>\n                  </ion-col>\n                </ion-row> -->\n              <!-- </div> -->\n            </div>\n            <div *ngIf=\"userType=='Preschool'\">\n              <div mode=\"ios\" *ngIf=\"user_amt_a\">\n                <ion-row>\n                \n                  <ion-col size=\"12\">\n                    <ion-label>Total Amount</ion-label><br>\n                    <ion-label><b> ₹ {{user_amt_a.amount}}</b></ion-label><br>\n                  </ion-col>\n                </ion-row>\n                \n              </div>\n              <div mode=\"ios\" *ngIf=\"fee_details && user_amt_b\">\n                <p>Installments</p>\n                <div  *ngFor=\"let item of user_amt_b;let index=index\">\n                  <ion-row>\n                    <ion-col size=\"6\">\n                      <ion-label>Amount</ion-label><br>\n                      <ion-item>\n                        <ion-input [readonly]=\"true\"  name=\"amt\" [(ngModel)]=\"item.expected_amount\"  max=\"{{item.expected_amount}}\" type=\"text\" placeholder=\"Enter amount\" value=\"{{item.expected_amount}}\" ></ion-input>\n                      </ion-item>\n                    </ion-col>\n                    <ion-col size=\"6\">\n                      <ion-label>Date</ion-label><br>\n                      <ion-label><b>{{item.month|date:'dd MMM, yyyy'}}</b> </ion-label>\n                    </ion-col>\n                    <ion-col size=\"12\">\n                      <ion-button expand=\"block\"  *ngIf=\"item.amount!=item.expected_amount\" (click)=\"pay(item.id,item.expected_amount,item.month,user_amt_a?.amount)\" color=\"primary\"  shape=\"round\" >\n                        Pay\n                      </ion-button>\n                      <ion-text *ngIf=\"item.amount==item.expected_amount\"  color=\"success\"  >\n                        Payment Done\n                      </ion-text>\n                    </ion-col>\n                  </ion-row>\n           \n                  <br>\n                  <hr>\n                  <br>\n\n                </div>\n               \n              </div>\n              <div mode=\"ios\" *ngIf=\"fee_details && installations\">\n                <p>Installments</p>\n                <div  *ngFor=\"let item of installations;let index=index\">\n                  <ion-row>\n                    <ion-col size=\"6\">\n                      <ion-label>Amount</ion-label><br>\n                      <ion-item>\n                        <ion-input [readonly]=\"true\" name=\"amount\" [(ngModel)]=\"item.amount\"  max=\"{{item.amount}}\" type=\"number\" placeholder=\"Enter amount\" value=\"{{item.amount}}\" ></ion-input>\n                      </ion-item>\n                    </ion-col>\n                    <ion-col size=\"6\">\n                      <ion-label>Date</ion-label><br>\n                      <ion-label><b>{{item.month|date:'dd MMM, yyyy'}}</b> </ion-label>\n                    </ion-col>\n                    <ion-col size=\"12\">\n                      <ion-button expand=\"block\" (click)=\"payInstallment(item.id,item.amount,item.month,user_amt_a?.amount)\" color=\"primary\"  shape=\"round\">\n                        Pay\n                      </ion-button>\n                    </ion-col>\n                  </ion-row>\n                </div>\n               \n              </div>\n            </div>\n          </div>\n        </ion-content>\n      </super-tab>\n      <super-tab >\n        <ion-content>\n          <div class=\"padding-ionic\" *ngIf=\"fees\">\n            <ion-card mode=\"ios\" *ngFor=\"let fee of fees\">\n              <p class=\"heading\"><b>{{fee.branch_name |titlecase}}</b></p>\n             <br>\n             <ion-row *ngIf=\"columns\">\n               <ion-col size=\"4\" >\n                 Particulars\n               </ion-col>\n               <ion-col size=\"4\" *ngFor=\"let column of columns\">\n                 {{column.name|titlecase}}\n               </ion-col>\n             </ion-row>\n             <div *ngIf=\"rows\">\n             <ion-row   *ngFor=\"let row of rows\">\n               <ion-col size=\"4\">\n                 {{row.row.name|titlecase}}\n                 <!-- {{getAmount(row.row.id,fee.id)}} -->\n               </ion-col>\n               <div *ngIf=\"amounts\" >\n                <ion-col size=\"4\" *ngFor=\"let amount of amounts\">\n                  {{amount.amount}}\n                </ion-col>\n               </div>\n             </ion-row>\n            </div>\n              <div class=\"ion-text-center\">\n                <ion-button  shape=\"round\" size=\"default\" class=\"view-btn\" color=\"primary\" (click)=\"openBranchFeeStructure(fee.id,fee.pdf,fee.branch_name)\" >View Details</ion-button>\n          \n              </div>\n            </ion-card>\n          </div>\n        </ion-content>\n      </super-tab>\n     \n    </super-tabs-container>\n  </super-tabs>\n  \n  <!-- <ion-card mode=\"ios\" *ngIf=\"type!=='login'\">\n    <p class=\"heading\"><b>Playgroup</b></p>\n    <ion-row>\n      <ion-col size=\"6\">\n        <p class=\"header\">Form : 0</p>\n        <p class=\"p-margin\">0</p>\n\n      </ion-col>\n      <ion-col size=\"6\">\n        <p class=\"header\">Admission Fee : </p>\n        <p class=\"p-margin\">4000</p>\n\n      </ion-col>\n    </ion-row>\n    <ion-row>\n      <ion-col size=\"6\">\n        <p class=\"header\">Kit : </p>\n        <p class=\"p-margin\">2000</p>\n\n      </ion-col>\n      <ion-col size=\"6\">\n        <p class=\"header\">1st Term : </p>\n        <p class=\"p-margin\">21,600</p>\n\n      </ion-col>\n    </ion-row>\n    <ion-row>\n      <ion-col size=\"6\">\n        <p class=\"header\">Activity Fee : </p>\n        <p class=\"p-margin\">1500</p>\n\n      </ion-col>\n      <ion-col size=\"6\">\n        <p class=\"header\">2nd Term : </p>\n        <p class=\"p-margin\">21,600</p>\n        \n      </ion-col>\n    </ion-row>\n    <ion-row>\n      <ion-col size=\"6\">\n        <p class=\"header\">Books : </p>\n        <p class=\"p-margin\">2200</p>\n\n      </ion-col>\n      <ion-col size=\"6\">\n        <p class=\"header\">Term Fee : </p>\n        <p class=\"p-margin\">3600</p>\n\n      </ion-col>\n    </ion-row>\n    <ion-row>\n      <ion-col size=\"6\">\n        <p class=\"header\"><b> Total : </b></p>\n        <p class=\"p-margin\">5700</p>\n\n      </ion-col>\n      <ion-col size=\"6\">\n        <p class=\"header\"><b>Total : </b> </p>\n        <p class=\"p-margin\">50,800</p>\n\n      </ion-col>\n    </ion-row>\n    <ion-row>\n      <ion-col size=\"6\">\n        <p class=\"header\"><b>Timing</b>  : </p>\n        <p class=\"p-margin\">9 AM to 11:30 AM</p>\n      </ion-col>\n      <ion-col size=\"6\">\n        <p class=\"header\"><b>Age Criteria</b>  : </p>\n        <p  class=\"p-margin\">24 months + as on 31st May</p>\n      </ion-col>\n    </ion-row>\n   <br>\n    <div class=\"ion-text-center\">\n      <ion-button  shape=\"round\" size=\"default\" class=\"view-btn\" color=\"primary\">View</ion-button>\n\n    </div>\n  </ion-card>\n  <ion-card mode=\"ios\" *ngIf=\"type=='login' || type=='quicktour'\">\n    <p class=\"heading\"><b>Nursery</b></p>\n    <ion-row>\n      <ion-col size=\"6\">\n        <p class=\"header\">Form : </p>\n        <p class=\"p-margin\">0</p>\n      </ion-col>\n      <ion-col size=\"6\">\n        <p class=\"header\">Admission Fee : </p>\n        <p class=\"p-margin\">4000</p>\n      </ion-col>\n    </ion-row>\n    <ion-row>\n      <ion-col size=\"6\">\n        <p class=\"header\">Kit : </p>\n        <p class=\"p-margin\">2000</p>\n\n      </ion-col>\n      <ion-col size=\"6\">\n        <p class=\"header\">1st Term : </p>\n        <p class=\"p-margin\">22,500</p>\n\n      </ion-col>\n    </ion-row>\n    <ion-row>\n      <ion-col size=\"6\">\n        <p class=\"header\">Activity Fee : </p>\n        <p class=\"p-margin\">1500</p>\n\n      </ion-col>\n      <ion-col size=\"6\">\n        <p class=\"header\">2nd Term : </p>\n        <p class=\"p-margin\">22,500</p>\n\n      </ion-col>\n    </ion-row>\n    <ion-row>\n      <ion-col size=\"6\">\n        <p class=\"header\">Books : </p>\n        <p class=\"p-margin\">2500</p>\n\n      </ion-col>\n      <ion-col size=\"6\">\n        <p class=\"header\">Term Fee : </p>\n        <p class=\"p-margin\">3750</p>\n\n      </ion-col>\n    </ion-row>\n    <ion-row>\n      <ion-col size=\"6\">\n        <p class=\"header\"><b> Total : </b></p>\n        <p class=\"p-margin\">6000</p>\n\n      </ion-col>\n      <ion-col size=\"6\">\n        <p class=\"header\"><b>Total : </b> </p>\n        <p class=\"p-margin\">52,750</p>\n\n      </ion-col>\n    </ion-row>\n    <ion-row>\n      <ion-col size=\"6\">\n        <p class=\"header\"><b>Timing</b>  : </p>\n        <p class=\"p-margin\">9 AM to 1 PM</p>\n      </ion-col>\n      <ion-col size=\"6\">\n        <p class=\"header\"><b>Age Criteria</b>  : </p>\n        <p  class=\"p-margin\">2.8 yrs + as on 31st May</p>\n      </ion-col>\n    </ion-row>\n   <br>\n    <div class=\"ion-text-center\">\n      <ion-button  shape=\"round\" size=\"default\" class=\"view-btn\" color=\"primary\">View</ion-button>\n\n    </div>\n  </ion-card>\n   -->\n\n</ion-content>\n";
      /***/
    }
  }]);
})();
//# sourceMappingURL=feestructure-feestructure-module-es5.js.map