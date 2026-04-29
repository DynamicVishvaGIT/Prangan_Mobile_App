(function () {
  function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return e; }; var t, e = {}, r = Object.prototype, n = r.hasOwnProperty, o = Object.defineProperty || function (t, e, r) { t[e] = r.value; }, i = "function" == typeof Symbol ? Symbol : {}, a = i.iterator || "@@iterator", c = i.asyncIterator || "@@asyncIterator", u = i.toStringTag || "@@toStringTag"; function define(t, e, r) { return Object.defineProperty(t, e, { value: r, enumerable: !0, configurable: !0, writable: !0 }), t[e]; } try { define({}, ""); } catch (t) { define = function define(t, e, r) { return t[e] = r; }; } function wrap(t, e, r, n) { var i = e && e.prototype instanceof Generator ? e : Generator, a = Object.create(i.prototype), c = new Context(n || []); return o(a, "_invoke", { value: makeInvokeMethod(t, r, c) }), a; } function tryCatch(t, e, r) { try { return { type: "normal", arg: t.call(e, r) }; } catch (t) { return { type: "throw", arg: t }; } } e.wrap = wrap; var h = "suspendedStart", l = "suspendedYield", f = "executing", s = "completed", y = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var p = {}; define(p, a, function () { return this; }); var d = Object.getPrototypeOf, v = d && d(d(values([]))); v && v !== r && n.call(v, a) && (p = v); var g = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(p); function defineIteratorMethods(t) { ["next", "throw", "return"].forEach(function (e) { define(t, e, function (t) { return this._invoke(e, t); }); }); } function AsyncIterator(t, e) { function invoke(r, o, i, a) { var c = tryCatch(t[r], t, o); if ("throw" !== c.type) { var u = c.arg, h = u.value; return h && "object" == typeof h && n.call(h, "__await") ? e.resolve(h.__await).then(function (t) { invoke("next", t, i, a); }, function (t) { invoke("throw", t, i, a); }) : e.resolve(h).then(function (t) { u.value = t, i(u); }, function (t) { return invoke("throw", t, i, a); }); } a(c.arg); } var r; o(this, "_invoke", { value: function value(t, n) { function callInvokeWithMethodAndArg() { return new e(function (e, r) { invoke(t, n, e, r); }); } return r = r ? r.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); } }); } function makeInvokeMethod(e, r, n) { var o = h; return function (i, a) { if (o === f) throw new Error("Generator is already running"); if (o === s) { if ("throw" === i) throw a; return { value: t, done: !0 }; } for (n.method = i, n.arg = a;;) { var c = n.delegate; if (c) { var u = maybeInvokeDelegate(c, n); if (u) { if (u === y) continue; return u; } } if ("next" === n.method) n.sent = n._sent = n.arg;else if ("throw" === n.method) { if (o === h) throw o = s, n.arg; n.dispatchException(n.arg); } else "return" === n.method && n.abrupt("return", n.arg); o = f; var p = tryCatch(e, r, n); if ("normal" === p.type) { if (o = n.done ? s : l, p.arg === y) continue; return { value: p.arg, done: n.done }; } "throw" === p.type && (o = s, n.method = "throw", n.arg = p.arg); } }; } function maybeInvokeDelegate(e, r) { var n = r.method, o = e.iterator[n]; if (o === t) return r.delegate = null, "throw" === n && e.iterator["return"] && (r.method = "return", r.arg = t, maybeInvokeDelegate(e, r), "throw" === r.method) || "return" !== n && (r.method = "throw", r.arg = new TypeError("The iterator does not provide a '" + n + "' method")), y; var i = tryCatch(o, e.iterator, r.arg); if ("throw" === i.type) return r.method = "throw", r.arg = i.arg, r.delegate = null, y; var a = i.arg; return a ? a.done ? (r[e.resultName] = a.value, r.next = e.nextLoc, "return" !== r.method && (r.method = "next", r.arg = t), r.delegate = null, y) : a : (r.method = "throw", r.arg = new TypeError("iterator result is not an object"), r.delegate = null, y); } function pushTryEntry(t) { var e = { tryLoc: t[0] }; 1 in t && (e.catchLoc = t[1]), 2 in t && (e.finallyLoc = t[2], e.afterLoc = t[3]), this.tryEntries.push(e); } function resetTryEntry(t) { var e = t.completion || {}; e.type = "normal", delete e.arg, t.completion = e; } function Context(t) { this.tryEntries = [{ tryLoc: "root" }], t.forEach(pushTryEntry, this), this.reset(!0); } function values(e) { if (e || "" === e) { var r = e[a]; if (r) return r.call(e); if ("function" == typeof e.next) return e; if (!isNaN(e.length)) { var o = -1, i = function next() { for (; ++o < e.length;) if (n.call(e, o)) return next.value = e[o], next.done = !1, next; return next.value = t, next.done = !0, next; }; return i.next = i; } } throw new TypeError(typeof e + " is not iterable"); } return GeneratorFunction.prototype = GeneratorFunctionPrototype, o(g, "constructor", { value: GeneratorFunctionPrototype, configurable: !0 }), o(GeneratorFunctionPrototype, "constructor", { value: GeneratorFunction, configurable: !0 }), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, u, "GeneratorFunction"), e.isGeneratorFunction = function (t) { var e = "function" == typeof t && t.constructor; return !!e && (e === GeneratorFunction || "GeneratorFunction" === (e.displayName || e.name)); }, e.mark = function (t) { return Object.setPrototypeOf ? Object.setPrototypeOf(t, GeneratorFunctionPrototype) : (t.__proto__ = GeneratorFunctionPrototype, define(t, u, "GeneratorFunction")), t.prototype = Object.create(g), t; }, e.awrap = function (t) { return { __await: t }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, c, function () { return this; }), e.AsyncIterator = AsyncIterator, e.async = function (t, r, n, o, i) { void 0 === i && (i = Promise); var a = new AsyncIterator(wrap(t, r, n, o), i); return e.isGeneratorFunction(r) ? a : a.next().then(function (t) { return t.done ? t.value : a.next(); }); }, defineIteratorMethods(g), define(g, u, "Generator"), define(g, a, function () { return this; }), define(g, "toString", function () { return "[object Generator]"; }), e.keys = function (t) { var e = Object(t), r = []; for (var n in e) r.push(n); return r.reverse(), function next() { for (; r.length;) { var t = r.pop(); if (t in e) return next.value = t, next.done = !1, next; } return next.done = !0, next; }; }, e.values = values, Context.prototype = { constructor: Context, reset: function reset(e) { if (this.prev = 0, this.next = 0, this.sent = this._sent = t, this.done = !1, this.delegate = null, this.method = "next", this.arg = t, this.tryEntries.forEach(resetTryEntry), !e) for (var r in this) "t" === r.charAt(0) && n.call(this, r) && !isNaN(+r.slice(1)) && (this[r] = t); }, stop: function stop() { this.done = !0; var t = this.tryEntries[0].completion; if ("throw" === t.type) throw t.arg; return this.rval; }, dispatchException: function dispatchException(e) { if (this.done) throw e; var r = this; function handle(n, o) { return a.type = "throw", a.arg = e, r.next = n, o && (r.method = "next", r.arg = t), !!o; } for (var o = this.tryEntries.length - 1; o >= 0; --o) { var i = this.tryEntries[o], a = i.completion; if ("root" === i.tryLoc) return handle("end"); if (i.tryLoc <= this.prev) { var c = n.call(i, "catchLoc"), u = n.call(i, "finallyLoc"); if (c && u) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } else if (c) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); } else { if (!u) throw new Error("try statement without catch or finally"); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } } } }, abrupt: function abrupt(t, e) { for (var r = this.tryEntries.length - 1; r >= 0; --r) { var o = this.tryEntries[r]; if (o.tryLoc <= this.prev && n.call(o, "finallyLoc") && this.prev < o.finallyLoc) { var i = o; break; } } i && ("break" === t || "continue" === t) && i.tryLoc <= e && e <= i.finallyLoc && (i = null); var a = i ? i.completion : {}; return a.type = t, a.arg = e, i ? (this.method = "next", this.next = i.finallyLoc, y) : this.complete(a); }, complete: function complete(t, e) { if ("throw" === t.type) throw t.arg; return "break" === t.type || "continue" === t.type ? this.next = t.arg : "return" === t.type ? (this.rval = this.arg = t.arg, this.method = "return", this.next = "end") : "normal" === t.type && e && (this.next = e), y; }, finish: function finish(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.finallyLoc === t) return this.complete(r.completion, r.afterLoc), resetTryEntry(r), y; } }, "catch": function _catch(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.tryLoc === t) { var n = r.completion; if ("throw" === n.type) { var o = n.arg; resetTryEntry(r); } return o; } } throw new Error("illegal catch attempt"); }, delegateYield: function delegateYield(e, r, n) { return this.delegate = { iterator: values(e), resultName: r, nextLoc: n }, "next" === this.method && (this.arg = t), y; } }, e; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

  function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return typeof key === "symbol" ? key : String(key); }

  function _toPrimitive(input, hint) { if (typeof input !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (typeof res !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["medicines-medicines-module"], {
    /***/
    "4to5":
    /*!***********************************************!*\
      !*** ./src/app/medicines/medicines.page.scss ***!
      \***********************************************/

    /*! exports provided: default */

    /***/
    function to5(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "ion-content {\n  --background: #f3fbfe;\n}\n\n.heading {\n  font-weight: bold;\n}\n\n.restrict_div {\n  background: #0ea4d9;\n}\n\n.edit_div {\n  background: #00c35c;\n}\n\n.delete_div {\n  background: #ff3131;\n}\n\nimg {\n  width: 18%;\n  margin-top: 5px;\n}\n\nion-card {\n  margin: 5px;\n  border-radius: 5px;\n  box-shadow: 0 3px 0px -2px rgba(0, 0, 0, 0), 0 2px 4px 2px rgba(0, 0, 0, 0.03), 0 1px 5px 0 rgba(0, 0, 0, 0.11);\n  padding: 8px;\n}\n\n.card-row {\n  padding: 12px;\n  padding-bottom: 7px;\n  padding-right: 16px;\n}\n\n.card-top-row {\n  padding: 0;\n}\n\nhr {\n  border-top: 1px dotted #9d9fa6;\n  margin-left: -18px;\n  margin-right: 10px;\n}\n\n.header {\n  color: #9d9fa6;\n  margin-top: 0;\n  font-size: 11px;\n  margin-bottom: 0;\n}\n\n.value {\n  color: #202020;\n  margin-top: 6px;\n  font-size: 11px;\n}\n\n.view-btn {\n  margin-top: 0;\n  text-transform: none;\n}\n\n.age {\n  font-size: 16px;\n  color: #202020;\n  margin-top: 6px;\n  font-weight: bold;\n  margin-bottom: 6px;\n}\n\n.view-txt {\n  font-size: 10px;\n}\n\n.data-row ion-col {\n  padding-left: 0;\n}\n\n.w-100 {\n  width: 100%;\n}\n\n.date {\n  margin-left: 8px;\n  color: #202020;\n}\n\nion-fab {\n  margin-bottom: 0%;\n  margin-right: 2%;\n}\n\nion-fab ion-fab-button {\n  width: 40px;\n  height: 40px;\n}\n\nion-button {\n  text-transform: none;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL21lZGljaW5lcy5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxxQkFBQTtBQUNGOztBQUVBO0VBQ0UsaUJBQUE7QUFDRjs7QUFDQTtFQUNFLG1CQUFBO0FBRUY7O0FBQUE7RUFDRSxtQkFBQTtBQUdGOztBQURBO0VBQ0UsbUJBQUE7QUFJRjs7QUFEQTtFQUNFLFVBQUE7RUFDQSxlQUFBO0FBSUY7O0FBREE7RUFDRSxXQUFBO0VBQ0Esa0JBQUE7RUFDQSwrR0FBQTtFQUNBLFlBQUE7QUFJRjs7QUFEQTtFQUNFLGFBQUE7RUFDQSxtQkFBQTtFQUNBLG1CQUFBO0FBSUY7O0FBREE7RUFDRSxVQUFBO0FBSUY7O0FBREE7RUFDRSw4QkFBQTtFQUNBLGtCQUFBO0VBQ0Esa0JBQUE7QUFJRjs7QUFEQTtFQUNFLGNBQUE7RUFDQSxhQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0FBSUY7O0FBQUE7RUFDRSxjQUFBO0VBQ0EsZUFBQTtFQUNBLGVBQUE7QUFHRjs7QUFBQTtFQUVFLGFBQUE7RUFDQSxvQkFBQTtBQUVGOztBQUNBO0VBQ0UsZUFBQTtFQUNBLGNBQUE7RUFDQSxlQUFBO0VBQ0EsaUJBQUE7RUFDQSxrQkFBQTtBQUVGOztBQUVBO0VBQ0UsZUFBQTtBQUNGOztBQUdFO0VBQ0UsZUFBQTtBQUFKOztBQUlBO0VBQ0UsV0FBQTtBQURGOztBQUlBO0VBQ0UsZ0JBQUE7RUFDQSxjQUFBO0FBREY7O0FBSUE7RUFDRSxpQkFBQTtFQUVBLGdCQUFBO0FBRkY7O0FBR0U7RUFDSSxXQUFBO0VBQ0EsWUFBQTtBQUROOztBQUtBO0VBQ0Usb0JBQUE7QUFGRiIsImZpbGUiOiJtZWRpY2luZXMucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaW9uLWNvbnRlbnQge1xyXG4gIC0tYmFja2dyb3VuZDogI2YzZmJmZTtcclxufVxyXG5cclxuLmhlYWRpbmd7XHJcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbn1cclxuLnJlc3RyaWN0X2RpdntcclxuICBiYWNrZ3JvdW5kOiAjMGVhNGQ5O1xyXG59XHJcbi5lZGl0X2RpdntcclxuICBiYWNrZ3JvdW5kOiAjMDBjMzVjO1xyXG59XHJcbi5kZWxldGVfZGl2e1xyXG4gIGJhY2tncm91bmQ6ICNmZjMxMzE7XHJcbn1cclxuXHJcbmltZyB7XHJcbiAgd2lkdGg6IDE4JTtcclxuICBtYXJnaW4tdG9wOiA1cHg7XHJcbn1cclxuXHJcbmlvbi1jYXJkIHtcclxuICBtYXJnaW46IDVweDtcclxuICBib3JkZXItcmFkaXVzOiA1cHg7XHJcbiAgYm94LXNoYWRvdzogMCAzcHggMHB4IC0ycHggcmdiYSgwLCAwLCAwLCAwKSwgMCAycHggNHB4IDJweCByZ2IoMCAwIDAgLyAzJSksIDAgMXB4IDVweCAwIHJnYmEoMCwgMCwgMCwgMC4xMSk7XHJcbiAgcGFkZGluZzogOHB4O1xyXG59XHJcblxyXG4uY2FyZC1yb3cge1xyXG4gIHBhZGRpbmc6IDEycHg7XHJcbiAgcGFkZGluZy1ib3R0b206IDdweDtcclxuICBwYWRkaW5nLXJpZ2h0OiAxNnB4O1xyXG59XHJcblxyXG4uY2FyZC10b3Atcm93IHtcclxuICBwYWRkaW5nOiAwO1xyXG59XHJcblxyXG5ociB7XHJcbiAgYm9yZGVyLXRvcDogMXB4IGRvdHRlZCAjOWQ5ZmE2O1xyXG4gIG1hcmdpbi1sZWZ0OiAtMThweDtcclxuICBtYXJnaW4tcmlnaHQ6IDEwcHg7XHJcbn1cclxuXHJcbi5oZWFkZXIge1xyXG4gIGNvbG9yOiAjOWQ5ZmE2O1xyXG4gIG1hcmdpbi10b3A6IDA7XHJcbiAgZm9udC1zaXplOiAxMXB4O1xyXG4gIG1hcmdpbi1ib3R0b206IDA7XHJcblxyXG59XHJcblxyXG4udmFsdWUge1xyXG4gIGNvbG9yOiAjMjAyMDIwO1xyXG4gIG1hcmdpbi10b3A6IDZweDtcclxuICBmb250LXNpemU6IDExcHg7XHJcbn1cclxuXHJcbi52aWV3LWJ0biB7XHJcbiAgLy8gaGVpZ2h0OiAzNnB4O1xyXG4gIG1hcmdpbi10b3A6IDA7XHJcbiAgdGV4dC10cmFuc2Zvcm06IG5vbmU7XHJcbn1cclxuXHJcbi5hZ2Uge1xyXG4gIGZvbnQtc2l6ZTogMTZweDtcclxuICBjb2xvcjogIzIwMjAyMDtcclxuICBtYXJnaW4tdG9wOiA2cHg7XHJcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgbWFyZ2luLWJvdHRvbTogNnB4O1xyXG5cclxufVxyXG5cclxuLnZpZXctdHh0IHtcclxuICBmb250LXNpemU6IDEwcHg7XHJcbn1cclxuXHJcbi5kYXRhLXJvdyB7XHJcbiAgaW9uLWNvbCB7XHJcbiAgICBwYWRkaW5nLWxlZnQ6IDA7XHJcbiAgfVxyXG59XHJcblxyXG4udy0xMDAge1xyXG4gIHdpZHRoOiAxMDAlO1xyXG59XHJcblxyXG4uZGF0ZSB7XHJcbiAgbWFyZ2luLWxlZnQ6IDhweDtcclxuICBjb2xvcjogIzIwMjAyMDtcclxufVxyXG5cclxuaW9uLWZhYntcclxuICBtYXJnaW4tYm90dG9tOiAwJTtcclxuICAvLyBtYXJnaW4tcmlnaHQ6IDE4cHg7XHJcbiAgbWFyZ2luLXJpZ2h0OiAyJTtcclxuICBpb24tZmFiLWJ1dHRvbiB7XHJcbiAgICAgIHdpZHRoOiA0MHB4O1xyXG4gICAgICBoZWlnaHQ6IDQwcHg7XHJcbiAgfVxyXG59XHJcblxyXG5pb24tYnV0dG9ue1xyXG4gIHRleHQtdHJhbnNmb3JtOiBub25lO1xyXG59Il19 */";
      /***/
    },

    /***/
    "DeRH":
    /*!*********************************************!*\
      !*** ./src/app/medicines/medicines.page.ts ***!
      \*********************************************/

    /*! exports provided: MedicinesPage */

    /***/
    function DeRH(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "MedicinesPage", function () {
        return MedicinesPage;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_medicines_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./medicines.page.html */
      "S6bk");
      /* harmony import */


      var _medicines_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./medicines.page.scss */
      "4to5");
      /* harmony import */


      var _editillness_editillness_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./../editillness/editillness.page */
      "/QfT");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @ionic/angular */
      "TEn/");
      /* harmony import */


      var _api_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ../api.service */
      "yTNM");
      /* harmony import */


      var _ionic_storage__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! @ionic/storage */
      "e8h1");

      var MedicinesPage = /*#__PURE__*/function () {
        function MedicinesPage(alertController, router, apiService, storage, modalCtrl) {
          _classCallCheck(this, MedicinesPage);

          this.alertController = alertController;
          this.router = router;
          this.apiService = apiService;
          this.storage = storage;
          this.modalCtrl = modalCtrl;
        }

        _createClass(MedicinesPage, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }, {
          key: "ionViewDidEnter",
          value: function ionViewDidEnter() {
            var _this = this;

            this.storage.get('user').then(function (data) {
              if (data) {
                var user = JSON.parse(data);
                _this.userid = user.id;

                _this.apiService.fetchIllness(_this.userid).then(function (data) {
                  console.log('illness', data);
                  _this.illness = JSON.parse(data.data);
                  console.log('notices', _this.illness);
                })["catch"](function (err) {
                  _this.illness = '';
                });
              }
            });
          }
        }, {
          key: "doRefresh",
          value: function doRefresh(event) {
            var _this2 = this;

            this.storage.get('user').then(function (data) {
              if (data) {
                var user = JSON.parse(data);
                _this2.userid = user.id;

                _this2.apiService.fetchIllness(_this2.userid).then(function (data) {
                  console.log('illness', data);
                  _this2.illness = JSON.parse(data.data);
                  event.target.complete();
                  console.log('notices', _this2.illness);
                })["catch"](function (err) {
                  _this2.illness = '';
                  event.target.complete();
                });
              }
            });
          }
        }, {
          key: "discontinueMedicines",
          value: function discontinueMedicines(illnessId) {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/_regeneratorRuntime().mark(function _callee() {
              var _this3 = this;

              var alert;
              return _regeneratorRuntime().wrap(function _callee$(_context) {
                while (1) switch (_context.prev = _context.next) {
                  case 0:
                    _context.next = 2;
                    return this.alertController.create({
                      cssClass: 'my-custom-class',
                      header: 'Discontinue Illness',
                      mode: 'ios',
                      subHeader: 'Are you sure you want to discontinue illness ?',
                      inputs: [{
                        name: 'reason',
                        type: 'text',
                        placeholder: 'Reason'
                      }],
                      buttons: [{
                        text: 'No',
                        role: 'cancel',
                        cssClass: 'secondary',
                        handler: function handler() {}
                      }, {
                        text: 'Yes',
                        handler: function handler(formdata) {
                          console.log('Confirm Ok', formdata.reason);
                          _this3.discontinue_reason = formdata.reason;

                          _this3.apiService.discontinueIllness(_this3.userid, illnessId, _this3.discontinue_reason).then(function (data) {
                            console.log('illness', data);

                            _this3.presentAlert('Illness discontinued successfully');
                          })["catch"](function (err) {
                            console.log(err);

                            _this3.apiService.presentToast(err.error, 1000);
                          });
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
          key: "presentdeleteIllnessAlert",
          value: function presentdeleteIllnessAlert(id) {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/_regeneratorRuntime().mark(function _callee2() {
              var _this4 = this;

              var alert;
              return _regeneratorRuntime().wrap(function _callee2$(_context2) {
                while (1) switch (_context2.prev = _context2.next) {
                  case 0:
                    _context2.next = 2;
                    return this.alertController.create({
                      cssClass: 'my-custom-class',
                      header: 'Delete Illness',
                      mode: 'ios',
                      message: 'Are you sure you want to delete illness ?',
                      buttons: [{
                        text: 'Yes',
                        role: 'cancel',
                        cssClass: 'secondary',
                        handler: function handler(blah) {
                          console.log('Confirm Cancel: blah');

                          _this4.deleteIllness(id);
                        }
                      }, {
                        text: 'No',
                        handler: function handler() {
                          console.log('Confirm Okay');
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
          key: "openPrescription",
          value: function openPrescription(img_url) {
            window.open(img_url);
          }
        }, {
          key: "openEditIllness",
          value: function openEditIllness(illness) {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/_regeneratorRuntime().mark(function _callee3() {
              var _this5 = this;

              var modal, data;
              return _regeneratorRuntime().wrap(function _callee3$(_context3) {
                while (1) switch (_context3.prev = _context3.next) {
                  case 0:
                    _context3.next = 2;
                    return this.modalCtrl.create({
                      component: _editillness_editillness_page__WEBPACK_IMPORTED_MODULE_3__["EditillnessPage"],
                      componentProps: {
                        'userId': this.userid,
                        'illness_obj': illness
                      },
                      swipeToClose: true
                    });

                  case 2:
                    modal = _context3.sent;
                    _context3.next = 5;
                    return modal.present();

                  case 5:
                    _context3.next = 7;
                    return modal.onDidDismiss().then(function (data) {
                      _this5.ionViewDidEnter();
                    });

                  case 7:
                    data = _context3.sent;
                    console.log(data);

                  case 9:
                  case "end":
                    return _context3.stop();
                }
              }, _callee3, this);
            }));
          }
        }, {
          key: "presentAlert",
          value: function presentAlert(message) {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/_regeneratorRuntime().mark(function _callee4() {
              var _this6 = this;

              var alert;
              return _regeneratorRuntime().wrap(function _callee4$(_context4) {
                while (1) switch (_context4.prev = _context4.next) {
                  case 0:
                    _context4.next = 2;
                    return this.alertController.create({
                      header: 'Successful',
                      message: message,
                      mode: 'ios',
                      backdropDismiss: false,
                      buttons: [{
                        text: 'OK',
                        handler: function handler() {
                          _this6.ionViewDidEnter();
                        }
                      }]
                    });

                  case 2:
                    alert = _context4.sent;
                    _context4.next = 5;
                    return alert.present();

                  case 5:
                  case "end":
                    return _context4.stop();
                }
              }, _callee4, this);
            }));
          }
        }, {
          key: "deleteIllness",
          value: function deleteIllness(illnessId) {
            var _this7 = this;

            this.apiService.deleteIllness(this.userid, illnessId).then(function (data) {
              console.log('illness', data);

              _this7.presentAlert('Illness deleted successfully');

              console.log('notices', _this7.illness);
            })["catch"](function (err) {
              _this7.apiService.presentToast(err.error, 1000);
            });
          }
        }]);

        return MedicinesPage;
      }();

      MedicinesPage.ctorParameters = function () {
        return [{
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["AlertController"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]
        }, {
          type: _api_service__WEBPACK_IMPORTED_MODULE_7__["ApiService"]
        }, {
          type: _ionic_storage__WEBPACK_IMPORTED_MODULE_8__["Storage"]
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["ModalController"]
        }];
      };

      MedicinesPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_5__["Component"])({
        selector: 'app-medicines',
        template: _raw_loader_medicines_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_medicines_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
      })], MedicinesPage);
      /***/
    },

    /***/
    "Lehh":
    /*!***********************************************!*\
      !*** ./src/app/medicines/medicines.module.ts ***!
      \***********************************************/

    /*! exports provided: MedicinesPageModule */

    /***/
    function Lehh(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "MedicinesPageModule", function () {
        return MedicinesPageModule;
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


      var _medicines_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./medicines-routing.module */
      "qdO2");
      /* harmony import */


      var _medicines_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./medicines.page */
      "DeRH");

      var MedicinesPageModule = /*#__PURE__*/_createClass(function MedicinesPageModule() {
        _classCallCheck(this, MedicinesPageModule);
      });

      MedicinesPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _medicines_routing_module__WEBPACK_IMPORTED_MODULE_5__["MedicinesPageRoutingModule"]],
        declarations: [_medicines_page__WEBPACK_IMPORTED_MODULE_6__["MedicinesPage"]]
      })], MedicinesPageModule);
      /***/
    },

    /***/
    "S6bk":
    /*!*************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/medicines/medicines.page.html ***!
      \*************************************************************************************/

    /*! exports provided: default */

    /***/
    function S6bk(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-header>\n  <ion-toolbar>\n    <ion-title>Illness</ion-title>\n    <ion-buttons slot=\"start\">\n      <ion-button shape=\"round\"  [routerLink]=\"['/quicktour']\">\n        <ion-icon color=\"light\" name=\"arrow-back-outline\"></ion-icon>\n      </ion-button>\n    </ion-buttons>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <ion-refresher slot=\"fixed\" (ionRefresh)=\"doRefresh($event)\">\n    <ion-refresher-content></ion-refresher-content>\n  </ion-refresher>\n  <div class=\"padding-ionic\" *ngIf=\"illness?.length>0\">\n    <ion-card  *ngFor=\"let illness_obj of illness\">\n      <ion-row class=\"card-row card-top-row\" [routerLink]=\"['/addmedicine',illness_obj.illnessId]\" >\n      <ion-col size=\"12\">\n        <ion-label class=\"heading\">Duration</ion-label>\n      </ion-col>\n     \n      </ion-row>\n      <ion-row class=\"card-row card-top-row\" [routerLink]=\"['/addmedicine',illness_obj.illnessId]\">\n      <ion-col size=\"6\">\n        <p class=\"heading\">From Date</p>\n        <p class=\"heading\">To Date</p>\n      </ion-col>\n      <ion-col size=\"6\" class=\"ion-text-start\">\n        <p >{{illness_obj.fromDate}}</p>\n        <p >{{illness_obj.toDate}}</p>\n      </ion-col>\n      </ion-row>\n      <hr>\n      <ion-row class=\"card-row card-top-row\" [routerLink]=\"['/addmedicine',illness_obj.illnessId]\">\n        <ion-col size=\"6\">\n          <ion-label class=\"heading\">Sickness & Illness</ion-label>\n        </ion-col>\n        <ion-col size=\"6\" class=\"ion-text-start\">\n          <ion-label>{{illness_obj.illnessName |titlecase }}</ion-label>\n        </ion-col>\n        </ion-row>\n        <hr>\n        <ion-row class=\"card-row card-top-row\" [routerLink]=\"['/addmedicine',illness_obj.illnessId]\">\n          <ion-col size=\"6\">\n            <ion-label class=\"heading\">Prescription</ion-label>\n          </ion-col>\n          <ion-col size=\"6\">\n            <ion-label class=\"heading\">\n              <ion-button size=\"small\" (click)=\"openPrescription(illness_obj.prescriptionImg)\" color=\"primary\" shape=\"round\">\n                View Prescription\n              </ion-button>\n            </ion-label>\n          </ion-col>\n          </ion-row>\n       \n          <hr>\n          <ion-row class=\"card-row card-top-row\">\n            <ion-col size=\"12\">\n              <ion-row>\n                <ion-col size=\"4\" class=\"ion-text-center restrict_div\" (click)=\"discontinueMedicines(illness_obj.illnessId)\">\n                  <img src=\"../../assets/medicine/restriction-ends2.png\" alt=\"\">\n                </ion-col>\n                <ion-col size=\"4\" class=\"ion-text-center edit_div\" (click)=\"openEditIllness(illness_obj)\">\n                  <img src=\"../../assets/medicine/pencil2.png\" alt=\"\">\n                </ion-col>\n                <ion-col size=\"4\" class=\"ion-text-center delete_div\" (click)=\"presentdeleteIllnessAlert(illness_obj.illnessId)\">\n                  <img src=\"../../assets/medicine/delete2.png\" alt=\"\">\n                </ion-col>\n              </ion-row>\n              \n            </ion-col>\n            </ion-row>\n    </ion-card>\n    <br>\n\n    <br>\n  </div>\n  <div *ngIf=\"illness?.length==0\">\n    <ion-card  class=\"ion-text-start  data-card \" >\n      <ion-row>\n        <ion-col size=\"12\">\n          <p class=\"date\"><b>No Illness Added</b> </p>         \n        </ion-col>\n      </ion-row>\n    </ion-card>\n  </div>\n</ion-content>\n<ion-fab vertical=\"bottom\" horizontal=\"end\" slot=\"fixed\">\n  <ion-fab-button>\n    <!-- <ion-fab-button (click)=\"openAddIllness()\"> -->\n    <ion-icon color=\"light\" name=\"add-sharp\"></ion-icon>\n  </ion-fab-button>\n</ion-fab>";
      /***/
    },

    /***/
    "qdO2":
    /*!*******************************************************!*\
      !*** ./src/app/medicines/medicines-routing.module.ts ***!
      \*******************************************************/

    /*! exports provided: MedicinesPageRoutingModule */

    /***/
    function qdO2(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "MedicinesPageRoutingModule", function () {
        return MedicinesPageRoutingModule;
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


      var _medicines_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./medicines.page */
      "DeRH");

      var routes = [{
        path: '',
        component: _medicines_page__WEBPACK_IMPORTED_MODULE_3__["MedicinesPage"]
      }];

      var MedicinesPageRoutingModule = /*#__PURE__*/_createClass(function MedicinesPageRoutingModule() {
        _classCallCheck(this, MedicinesPageRoutingModule);
      });

      MedicinesPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
      })], MedicinesPageRoutingModule);
      /***/
    }
  }]);
})();
//# sourceMappingURL=medicines-medicines-module-es5.js.map