(function () {
  function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return e; }; var t, e = {}, r = Object.prototype, n = r.hasOwnProperty, o = Object.defineProperty || function (t, e, r) { t[e] = r.value; }, i = "function" == typeof Symbol ? Symbol : {}, a = i.iterator || "@@iterator", c = i.asyncIterator || "@@asyncIterator", u = i.toStringTag || "@@toStringTag"; function define(t, e, r) { return Object.defineProperty(t, e, { value: r, enumerable: !0, configurable: !0, writable: !0 }), t[e]; } try { define({}, ""); } catch (t) { define = function define(t, e, r) { return t[e] = r; }; } function wrap(t, e, r, n) { var i = e && e.prototype instanceof Generator ? e : Generator, a = Object.create(i.prototype), c = new Context(n || []); return o(a, "_invoke", { value: makeInvokeMethod(t, r, c) }), a; } function tryCatch(t, e, r) { try { return { type: "normal", arg: t.call(e, r) }; } catch (t) { return { type: "throw", arg: t }; } } e.wrap = wrap; var h = "suspendedStart", l = "suspendedYield", f = "executing", s = "completed", y = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var p = {}; define(p, a, function () { return this; }); var d = Object.getPrototypeOf, v = d && d(d(values([]))); v && v !== r && n.call(v, a) && (p = v); var g = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(p); function defineIteratorMethods(t) { ["next", "throw", "return"].forEach(function (e) { define(t, e, function (t) { return this._invoke(e, t); }); }); } function AsyncIterator(t, e) { function invoke(r, o, i, a) { var c = tryCatch(t[r], t, o); if ("throw" !== c.type) { var u = c.arg, h = u.value; return h && "object" == typeof h && n.call(h, "__await") ? e.resolve(h.__await).then(function (t) { invoke("next", t, i, a); }, function (t) { invoke("throw", t, i, a); }) : e.resolve(h).then(function (t) { u.value = t, i(u); }, function (t) { return invoke("throw", t, i, a); }); } a(c.arg); } var r; o(this, "_invoke", { value: function value(t, n) { function callInvokeWithMethodAndArg() { return new e(function (e, r) { invoke(t, n, e, r); }); } return r = r ? r.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); } }); } function makeInvokeMethod(e, r, n) { var o = h; return function (i, a) { if (o === f) throw new Error("Generator is already running"); if (o === s) { if ("throw" === i) throw a; return { value: t, done: !0 }; } for (n.method = i, n.arg = a;;) { var c = n.delegate; if (c) { var u = maybeInvokeDelegate(c, n); if (u) { if (u === y) continue; return u; } } if ("next" === n.method) n.sent = n._sent = n.arg;else if ("throw" === n.method) { if (o === h) throw o = s, n.arg; n.dispatchException(n.arg); } else "return" === n.method && n.abrupt("return", n.arg); o = f; var p = tryCatch(e, r, n); if ("normal" === p.type) { if (o = n.done ? s : l, p.arg === y) continue; return { value: p.arg, done: n.done }; } "throw" === p.type && (o = s, n.method = "throw", n.arg = p.arg); } }; } function maybeInvokeDelegate(e, r) { var n = r.method, o = e.iterator[n]; if (o === t) return r.delegate = null, "throw" === n && e.iterator["return"] && (r.method = "return", r.arg = t, maybeInvokeDelegate(e, r), "throw" === r.method) || "return" !== n && (r.method = "throw", r.arg = new TypeError("The iterator does not provide a '" + n + "' method")), y; var i = tryCatch(o, e.iterator, r.arg); if ("throw" === i.type) return r.method = "throw", r.arg = i.arg, r.delegate = null, y; var a = i.arg; return a ? a.done ? (r[e.resultName] = a.value, r.next = e.nextLoc, "return" !== r.method && (r.method = "next", r.arg = t), r.delegate = null, y) : a : (r.method = "throw", r.arg = new TypeError("iterator result is not an object"), r.delegate = null, y); } function pushTryEntry(t) { var e = { tryLoc: t[0] }; 1 in t && (e.catchLoc = t[1]), 2 in t && (e.finallyLoc = t[2], e.afterLoc = t[3]), this.tryEntries.push(e); } function resetTryEntry(t) { var e = t.completion || {}; e.type = "normal", delete e.arg, t.completion = e; } function Context(t) { this.tryEntries = [{ tryLoc: "root" }], t.forEach(pushTryEntry, this), this.reset(!0); } function values(e) { if (e || "" === e) { var r = e[a]; if (r) return r.call(e); if ("function" == typeof e.next) return e; if (!isNaN(e.length)) { var o = -1, i = function next() { for (; ++o < e.length;) if (n.call(e, o)) return next.value = e[o], next.done = !1, next; return next.value = t, next.done = !0, next; }; return i.next = i; } } throw new TypeError(typeof e + " is not iterable"); } return GeneratorFunction.prototype = GeneratorFunctionPrototype, o(g, "constructor", { value: GeneratorFunctionPrototype, configurable: !0 }), o(GeneratorFunctionPrototype, "constructor", { value: GeneratorFunction, configurable: !0 }), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, u, "GeneratorFunction"), e.isGeneratorFunction = function (t) { var e = "function" == typeof t && t.constructor; return !!e && (e === GeneratorFunction || "GeneratorFunction" === (e.displayName || e.name)); }, e.mark = function (t) { return Object.setPrototypeOf ? Object.setPrototypeOf(t, GeneratorFunctionPrototype) : (t.__proto__ = GeneratorFunctionPrototype, define(t, u, "GeneratorFunction")), t.prototype = Object.create(g), t; }, e.awrap = function (t) { return { __await: t }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, c, function () { return this; }), e.AsyncIterator = AsyncIterator, e.async = function (t, r, n, o, i) { void 0 === i && (i = Promise); var a = new AsyncIterator(wrap(t, r, n, o), i); return e.isGeneratorFunction(r) ? a : a.next().then(function (t) { return t.done ? t.value : a.next(); }); }, defineIteratorMethods(g), define(g, u, "Generator"), define(g, a, function () { return this; }), define(g, "toString", function () { return "[object Generator]"; }), e.keys = function (t) { var e = Object(t), r = []; for (var n in e) r.push(n); return r.reverse(), function next() { for (; r.length;) { var t = r.pop(); if (t in e) return next.value = t, next.done = !1, next; } return next.done = !0, next; }; }, e.values = values, Context.prototype = { constructor: Context, reset: function reset(e) { if (this.prev = 0, this.next = 0, this.sent = this._sent = t, this.done = !1, this.delegate = null, this.method = "next", this.arg = t, this.tryEntries.forEach(resetTryEntry), !e) for (var r in this) "t" === r.charAt(0) && n.call(this, r) && !isNaN(+r.slice(1)) && (this[r] = t); }, stop: function stop() { this.done = !0; var t = this.tryEntries[0].completion; if ("throw" === t.type) throw t.arg; return this.rval; }, dispatchException: function dispatchException(e) { if (this.done) throw e; var r = this; function handle(n, o) { return a.type = "throw", a.arg = e, r.next = n, o && (r.method = "next", r.arg = t), !!o; } for (var o = this.tryEntries.length - 1; o >= 0; --o) { var i = this.tryEntries[o], a = i.completion; if ("root" === i.tryLoc) return handle("end"); if (i.tryLoc <= this.prev) { var c = n.call(i, "catchLoc"), u = n.call(i, "finallyLoc"); if (c && u) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } else if (c) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); } else { if (!u) throw new Error("try statement without catch or finally"); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } } } }, abrupt: function abrupt(t, e) { for (var r = this.tryEntries.length - 1; r >= 0; --r) { var o = this.tryEntries[r]; if (o.tryLoc <= this.prev && n.call(o, "finallyLoc") && this.prev < o.finallyLoc) { var i = o; break; } } i && ("break" === t || "continue" === t) && i.tryLoc <= e && e <= i.finallyLoc && (i = null); var a = i ? i.completion : {}; return a.type = t, a.arg = e, i ? (this.method = "next", this.next = i.finallyLoc, y) : this.complete(a); }, complete: function complete(t, e) { if ("throw" === t.type) throw t.arg; return "break" === t.type || "continue" === t.type ? this.next = t.arg : "return" === t.type ? (this.rval = this.arg = t.arg, this.method = "return", this.next = "end") : "normal" === t.type && e && (this.next = e), y; }, finish: function finish(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.finallyLoc === t) return this.complete(r.completion, r.afterLoc), resetTryEntry(r), y; } }, "catch": function _catch(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.tryLoc === t) { var n = r.completion; if ("throw" === n.type) { var o = n.arg; resetTryEntry(r); } return o; } } throw new Error("illegal catch attempt"); }, delegateYield: function delegateYield(e, r, n) { return this.delegate = { iterator: values(e), resultName: r, nextLoc: n }, "next" === this.method && (this.arg = t), y; } }, e; }

  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

  function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return typeof key === "symbol" ? key : String(key); }

  function _toPrimitive(input, hint) { if (typeof input !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (typeof res !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["addmedicine-addmedicine-module"], {
    /***/
    "791s":
    /*!***************************************************!*\
      !*** ./src/app/addmedicine/addmedicine.module.ts ***!
      \***************************************************/

    /*! exports provided: AddmedicinePageModule */

    /***/
    function s(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AddmedicinePageModule", function () {
        return AddmedicinePageModule;
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


      var _addmedicine_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./addmedicine-routing.module */
      "T1Ao");
      /* harmony import */


      var _addmedicine_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./addmedicine.page */
      "wUQ3");
      /* harmony import */


      var ion_bottom_sheet__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ion-bottom-sheet */
      "umRu");

      var AddmedicinePageModule = /*#__PURE__*/_createClass(function AddmedicinePageModule() {
        _classCallCheck(this, AddmedicinePageModule);
      });

      AddmedicinePageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _addmedicine_routing_module__WEBPACK_IMPORTED_MODULE_5__["AddmedicinePageRoutingModule"], ion_bottom_sheet__WEBPACK_IMPORTED_MODULE_7__["IonBottomSheetModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"]],
        declarations: [_addmedicine_page__WEBPACK_IMPORTED_MODULE_6__["AddmedicinePage"]]
      })], AddmedicinePageModule);
      /***/
    },

    /***/
    "T1Ao":
    /*!***********************************************************!*\
      !*** ./src/app/addmedicine/addmedicine-routing.module.ts ***!
      \***********************************************************/

    /*! exports provided: AddmedicinePageRoutingModule */

    /***/
    function T1Ao(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AddmedicinePageRoutingModule", function () {
        return AddmedicinePageRoutingModule;
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


      var _addmedicine_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./addmedicine.page */
      "wUQ3");

      var routes = [{
        path: '',
        component: _addmedicine_page__WEBPACK_IMPORTED_MODULE_3__["AddmedicinePage"]
      }];

      var AddmedicinePageRoutingModule = /*#__PURE__*/_createClass(function AddmedicinePageRoutingModule() {
        _classCallCheck(this, AddmedicinePageRoutingModule);
      });

      AddmedicinePageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
      })], AddmedicinePageRoutingModule);
      /***/
    },

    /***/
    "VMUn":
    /*!***************************************************!*\
      !*** ./src/app/addmedicine/addmedicine.page.scss ***!
      \***************************************************/

    /*! exports provided: default */

    /***/
    function VMUn(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "ion-content {\n  --background: #f3fbfe;\n}\n\n.heading {\n  font-weight: bold;\n}\n\n.restrict_div {\n  background: #0ea4d9;\n}\n\n.edit_div {\n  background: #00c35c;\n}\n\n.delete_div {\n  background: #ff3131;\n}\n\nimg {\n  width: 18%;\n  margin-top: 5px;\n}\n\nion-card {\n  margin: 5px;\n  border-radius: 5px;\n  box-shadow: 0 3px 0px -2px rgba(0, 0, 0, 0), 0 2px 4px 2px rgba(0, 0, 0, 0.03), 0 1px 5px 0 rgba(0, 0, 0, 0.11);\n  padding: 8px;\n}\n\n.card-row {\n  padding: 12px;\n  padding-bottom: 7px;\n  padding-right: 16px;\n}\n\n.card-top-row {\n  padding: 0;\n}\n\nhr {\n  border-top: 1px dotted #9d9fa6;\n  margin-left: -18px;\n  margin-right: 10px;\n}\n\n.header {\n  color: #9d9fa6;\n  margin-top: 0;\n  font-size: 11px;\n  margin-bottom: 0;\n}\n\n.value {\n  color: #202020;\n  margin-top: 6px;\n  font-size: 11px;\n}\n\n.view-btn {\n  margin-top: 0;\n  text-transform: none;\n}\n\n.age {\n  font-size: 16px;\n  color: #202020;\n  margin-top: 6px;\n  font-weight: bold;\n  margin-bottom: 6px;\n}\n\n.view-txt {\n  font-size: 10px;\n}\n\n.data-row ion-col {\n  padding-left: 0;\n}\n\n.w-100 {\n  width: 100%;\n}\n\n.date {\n  margin-left: 8px;\n  color: #202020;\n}\n\nion-fab {\n  margin-bottom: 0%;\n  margin-right: 2%;\n}\n\nion-fab ion-fab-button {\n  width: 40px;\n  height: 40px;\n}\n\n.heading-1 {\n  color: #676767;\n  margin-bottom: 0;\n  font-size: 16px;\n}\n\n.heading {\n  color: #9b9ca6;\n  margin-bottom: 0;\n  font-size: 14px;\n}\n\nion-label {\n  color: #9b9ca6;\n  font-size: 14px;\n}\n\nion-input {\n  border: 1px solid #9b9ca6;\n  border-radius: 5px;\n  --padding-start: 5px !important;\n  height: 35px;\n}\n\nion-textarea {\n  border: 1px solid #9b9ca6;\n  border-radius: 5px;\n  --padding-start: 5px !important;\n}\n\nion-datetime {\n  border: 1px solid #9b9ca6;\n  border-radius: 5px;\n  --padding-start: 5px !important;\n  width: 100%;\n  height: 35px;\n}\n\nion-item {\n  --padding-start: 0;\n  --ripple-color: transparent;\n  --background-activated: transparent;\n  --background-activated-opacity:transparent;\n  --background-focused: transparent;\n  --background-focused-opacity:transparent;\n  --background-hover: transparent;\n  --background-hover-opacity:transparent;\n}\n\nion-item ion-label {\n  font-size: 12px;\n  color: #9b9ca6;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL2FkZG1lZGljaW5lLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLHFCQUFBO0FBQ0o7O0FBRUU7RUFDRSxpQkFBQTtBQUNKOztBQUNFO0VBQ0UsbUJBQUE7QUFFSjs7QUFBRTtFQUNFLG1CQUFBO0FBR0o7O0FBREU7RUFDRSxtQkFBQTtBQUlKOztBQURFO0VBQ0UsVUFBQTtFQUNBLGVBQUE7QUFJSjs7QUFERTtFQUNFLFdBQUE7RUFDQSxrQkFBQTtFQUNBLCtHQUFBO0VBQ0EsWUFBQTtBQUlKOztBQURFO0VBQ0UsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsbUJBQUE7QUFJSjs7QUFERTtFQUNFLFVBQUE7QUFJSjs7QUFERTtFQUNFLDhCQUFBO0VBQ0Esa0JBQUE7RUFDQSxrQkFBQTtBQUlKOztBQURFO0VBQ0UsY0FBQTtFQUNBLGFBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7QUFJSjs7QUFBRTtFQUNFLGNBQUE7RUFDQSxlQUFBO0VBQ0EsZUFBQTtBQUdKOztBQUFFO0VBRUUsYUFBQTtFQUNBLG9CQUFBO0FBRUo7O0FBQ0U7RUFDRSxlQUFBO0VBQ0EsY0FBQTtFQUNBLGVBQUE7RUFDQSxpQkFBQTtFQUNBLGtCQUFBO0FBRUo7O0FBRUU7RUFDRSxlQUFBO0FBQ0o7O0FBR0k7RUFDRSxlQUFBO0FBQU47O0FBSUU7RUFDRSxXQUFBO0FBREo7O0FBSUU7RUFDRSxnQkFBQTtFQUNBLGNBQUE7QUFESjs7QUFJRTtFQUNFLGlCQUFBO0VBRUEsZ0JBQUE7QUFGSjs7QUFHSTtFQUNJLFdBQUE7RUFDQSxZQUFBO0FBRFI7O0FBS0U7RUFDRSxjQUFBO0VBQ0EsZ0JBQUE7RUFDQSxlQUFBO0FBRko7O0FBSUE7RUFDSSxjQUFBO0VBQ0EsZ0JBQUE7RUFDQSxlQUFBO0FBREo7O0FBR0E7RUFDSSxjQUFBO0VBQ0EsZUFBQTtBQUFKOztBQUVBO0VBQ0kseUJBQUE7RUFDQSxrQkFBQTtFQUNBLCtCQUFBO0VBQ0EsWUFBQTtBQUNKOztBQUNBO0VBQ0kseUJBQUE7RUFDQSxrQkFBQTtFQUNBLCtCQUFBO0FBRUo7O0FBQUE7RUFDSSx5QkFBQTtFQUNBLGtCQUFBO0VBQ0EsK0JBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtBQUdKOztBQUFBO0VBRUksa0JBQUE7RUFDQSwyQkFBQTtFQUNBLG1DQUFBO0VBQ0EsMENBQUE7RUFDQSxpQ0FBQTtFQUNBLHdDQUFBO0VBQ0EsK0JBQUE7RUFDQSxzQ0FBQTtBQUVKOztBQUFJO0VBQ0ksZUFBQTtFQUNBLGNBQUE7QUFFUiIsImZpbGUiOiJhZGRtZWRpY2luZS5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJpb24tY29udGVudCB7XHJcbiAgICAtLWJhY2tncm91bmQ6ICNmM2ZiZmU7XHJcbiAgfVxyXG4gIFxyXG4gIC5oZWFkaW5ne1xyXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgfVxyXG4gIC5yZXN0cmljdF9kaXZ7XHJcbiAgICBiYWNrZ3JvdW5kOiAjMGVhNGQ5O1xyXG4gIH1cclxuICAuZWRpdF9kaXZ7XHJcbiAgICBiYWNrZ3JvdW5kOiAjMDBjMzVjO1xyXG4gIH1cclxuICAuZGVsZXRlX2RpdntcclxuICAgIGJhY2tncm91bmQ6ICNmZjMxMzE7XHJcbiAgfVxyXG4gIFxyXG4gIGltZyB7XHJcbiAgICB3aWR0aDogMTglO1xyXG4gICAgbWFyZ2luLXRvcDogNXB4O1xyXG4gIH1cclxuICBcclxuICBpb24tY2FyZCB7XHJcbiAgICBtYXJnaW46IDVweDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcclxuICAgIGJveC1zaGFkb3c6IDAgM3B4IDBweCAtMnB4IHJnYmEoMCwgMCwgMCwgMCksIDAgMnB4IDRweCAycHggcmdiKDAgMCAwIC8gMyUpLCAwIDFweCA1cHggMCByZ2JhKDAsIDAsIDAsIDAuMTEpO1xyXG4gICAgcGFkZGluZzogOHB4O1xyXG4gIH1cclxuICBcclxuICAuY2FyZC1yb3cge1xyXG4gICAgcGFkZGluZzogMTJweDtcclxuICAgIHBhZGRpbmctYm90dG9tOiA3cHg7XHJcbiAgICBwYWRkaW5nLXJpZ2h0OiAxNnB4O1xyXG4gIH1cclxuICBcclxuICAuY2FyZC10b3Atcm93IHtcclxuICAgIHBhZGRpbmc6IDA7XHJcbiAgfVxyXG4gIFxyXG4gIGhyIHtcclxuICAgIGJvcmRlci10b3A6IDFweCBkb3R0ZWQgIzlkOWZhNjtcclxuICAgIG1hcmdpbi1sZWZ0OiAtMThweDtcclxuICAgIG1hcmdpbi1yaWdodDogMTBweDtcclxuICB9XHJcbiAgXHJcbiAgLmhlYWRlciB7XHJcbiAgICBjb2xvcjogIzlkOWZhNjtcclxuICAgIG1hcmdpbi10b3A6IDA7XHJcbiAgICBmb250LXNpemU6IDExcHg7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAwO1xyXG4gIFxyXG4gIH1cclxuICBcclxuICAudmFsdWUge1xyXG4gICAgY29sb3I6ICMyMDIwMjA7XHJcbiAgICBtYXJnaW4tdG9wOiA2cHg7XHJcbiAgICBmb250LXNpemU6IDExcHg7XHJcbiAgfVxyXG4gIFxyXG4gIC52aWV3LWJ0biB7XHJcbiAgICAvLyBoZWlnaHQ6IDM2cHg7XHJcbiAgICBtYXJnaW4tdG9wOiAwO1xyXG4gICAgdGV4dC10cmFuc2Zvcm06IG5vbmU7XHJcbiAgfVxyXG4gIFxyXG4gIC5hZ2Uge1xyXG4gICAgZm9udC1zaXplOiAxNnB4O1xyXG4gICAgY29sb3I6ICMyMDIwMjA7XHJcbiAgICBtYXJnaW4tdG9wOiA2cHg7XHJcbiAgICBmb250LXdlaWdodDogYm9sZDtcclxuICAgIG1hcmdpbi1ib3R0b206IDZweDtcclxuICBcclxuICB9XHJcbiAgXHJcbiAgLnZpZXctdHh0IHtcclxuICAgIGZvbnQtc2l6ZTogMTBweDtcclxuICB9XHJcbiAgXHJcbiAgLmRhdGEtcm93IHtcclxuICAgIGlvbi1jb2wge1xyXG4gICAgICBwYWRkaW5nLWxlZnQ6IDA7XHJcbiAgICB9XHJcbiAgfVxyXG4gIFxyXG4gIC53LTEwMCB7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICB9XHJcbiAgXHJcbiAgLmRhdGUge1xyXG4gICAgbWFyZ2luLWxlZnQ6IDhweDtcclxuICAgIGNvbG9yOiAjMjAyMDIwO1xyXG4gIH1cclxuICBcclxuICBpb24tZmFie1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMCU7XHJcbiAgICAvLyBtYXJnaW4tcmlnaHQ6IDE4cHg7XHJcbiAgICBtYXJnaW4tcmlnaHQ6IDIlO1xyXG4gICAgaW9uLWZhYi1idXR0b24ge1xyXG4gICAgICAgIHdpZHRoOiA0MHB4O1xyXG4gICAgICAgIGhlaWdodDogNDBweDtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIC5oZWFkaW5nLTF7XHJcbiAgICBjb2xvcjogIzY3Njc2NztcclxuICAgIG1hcmdpbi1ib3R0b206IDA7XHJcbiAgICBmb250LXNpemU6IDE2cHg7XHJcbn1cclxuLmhlYWRpbmd7XHJcbiAgICBjb2xvcjogIzliOWNhNjtcclxuICAgIG1hcmdpbi1ib3R0b206IDA7XHJcbiAgICBmb250LXNpemU6IDE0cHg7XHJcbn1cclxuaW9uLWxhYmVse1xyXG4gICAgY29sb3I6ICM5YjljYTY7XHJcbiAgICBmb250LXNpemU6IDE0cHg7XHJcbn1cclxuaW9uLWlucHV0IHtcclxuICAgIGJvcmRlcjogMXB4IHNvbGlkICM5YjljYTY7XHJcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XHJcbiAgICAtLXBhZGRpbmctc3RhcnQ6IDVweCAhaW1wb3J0YW50O1xyXG4gICAgaGVpZ2h0OjM1cHg7XHJcbn1cclxuaW9uLXRleHRhcmVhe1xyXG4gICAgYm9yZGVyOiAxcHggc29saWQgIzliOWNhNjtcclxuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcclxuICAgIC0tcGFkZGluZy1zdGFydDogNXB4ICFpbXBvcnRhbnQ7XHJcbn1cclxuaW9uLWRhdGV0aW1le1xyXG4gICAgYm9yZGVyOiAxcHggc29saWQgIzliOWNhNjtcclxuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcclxuICAgIC0tcGFkZGluZy1zdGFydDogNXB4ICFpbXBvcnRhbnQ7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGhlaWdodDozNXB4O1xyXG5cclxufVxyXG5pb24taXRlbXtcclxuICAgIC8vIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjNjc3NDgzO1xyXG4gICAgLS1wYWRkaW5nLXN0YXJ0OiAwO1xyXG4gICAgLS1yaXBwbGUtY29sb3I6IHRyYW5zcGFyZW50O1xyXG4gICAgLS1iYWNrZ3JvdW5kLWFjdGl2YXRlZDogdHJhbnNwYXJlbnQ7XHJcbiAgICAtLWJhY2tncm91bmQtYWN0aXZhdGVkLW9wYWNpdHk6dHJhbnNwYXJlbnQ7XHJcbiAgICAtLWJhY2tncm91bmQtZm9jdXNlZDogdHJhbnNwYXJlbnQ7XHJcbiAgICAtLWJhY2tncm91bmQtZm9jdXNlZC1vcGFjaXR5OnRyYW5zcGFyZW50O1xyXG4gICAgLS1iYWNrZ3JvdW5kLWhvdmVyICA6IHRyYW5zcGFyZW50O1xyXG4gICAgLS1iYWNrZ3JvdW5kLWhvdmVyLW9wYWNpdHkgIDp0cmFuc3BhcmVudDtcclxuXHJcbiAgICBpb24tbGFiZWwge1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMTJweDtcclxuICAgICAgICBjb2xvcjogIzliOWNhNjtcclxuXHJcbiAgICB9XHJcbn0iXX0= */";
      /***/
    },

    /***/
    "WYWL":
    /*!*****************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/addmedicine/addmedicine.page.html ***!
      \*****************************************************************************************/

    /*! exports provided: default */

    /***/
    function WYWL(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-header>\n  <ion-toolbar>\n    <ion-title>Medicine</ion-title>\n    <ion-buttons slot=\"start\">\n      <ion-button  shape=\"round\" [routerLink]=\"['/medicines']\" routerLinkActive=\"router-link-active\" >\n        <ion-icon color=\"light\" name=\"arrow-back-outline\"></ion-icon>\n      </ion-button>\n    </ion-buttons>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <div class=\"padding-ionic\" *ngIf=\"medicines\">\n    <ion-card  *ngFor=\"let medicine of medicines\">\n      <ion-row class=\"card-row card-top-row\"  >\n      <ion-col size=\"12\">\n        <ion-label class=\"heading\">{{medicine.tabName |titlecase}}</ion-label>\n      </ion-col>\n     \n      </ion-row>\n      <ion-row class=\"card-row card-top-row\" >\n      <ion-col size=\"6\">\n        <p class=\"heading\">Morning Time</p>\n        <p class=\"heading\">Afternoon Time</p>\n        <p class=\"heading\">Evening Time</p>\n      </ion-col>\n      <ion-col size=\"6\" class=\"ion-text-start\">\n        <p >{{medicine.morningTime || 'N/A'}}</p>\n        <p >{{medicine.afternoonTime || 'N/A'}}</p>\n        <p >{{medicine.eveningTime || 'N/A'}}</p>\n        \n      </ion-col>\n      </ion-row>\n      <hr>\n      <ion-row class=\"card-row card-top-row\" >\n        <ion-col size=\"6\">\n          <ion-label class=\"heading\">Medicine Quantity</ion-label>\n        </ion-col>\n        <ion-col size=\"6\" class=\"ion-text-start\">\n          <ion-label>{{medicine.quantity || 'N/A'}}</ion-label>\n        </ion-col>\n        </ion-row>\n        <hr>\n        <ion-row class=\"card-row card-top-row\" >\n          <ion-col size=\"6\">\n            <ion-label class=\"heading\">Comment </ion-label>\n          </ion-col>\n          <ion-col size=\"6\" class=\"ion-text-start\">\n            <ion-label>{{medicine.comment}}</ion-label>\n          </ion-col>\n          </ion-row>\n       \n          <hr>\n          <ion-row class=\"card-row card-top-row\">\n            <ion-col size=\"12\">\n              <ion-row>\n                <ion-col size=\"4\" class=\"ion-text-center restrict_div\" (click)=\"discontinueMedicines(medicine.userId,medicine.illnessId,medicine.tabId)\">\n                  <img src=\"../../assets/medicine/restriction-ends2.png\" alt=\"\">\n                </ion-col>\n                <ion-col size=\"4\" class=\"ion-text-center edit_div\" (click)=\"openEditMedicine(medicine,medicine.tabId)\">\n                  <img src=\"../../assets/medicine/pencil2.png\" alt=\"\">\n                </ion-col>\n                <ion-col size=\"4\" class=\"ion-text-center delete_div\" (click)=\"deleteMedicine(medicine.tabId)\">\n                  <img src=\"../../assets/medicine/delete2.png\" alt=\"\">\n                </ion-col>\n              </ion-row>\n              \n            </ion-col>\n            </ion-row>\n    </ion-card>\n    <br>\n  </div>\n    \n</ion-content>\n<ion-bottom-sheet\n  #sheet\n  [(state)]=\"sheetState\"\n  [canBounce]=\"canBounce\"\n  [topDistance]=\"topDistance\"\n  [hideCloseButton]=\"hideCloseButton\"\n  [hideDragIcon]=\"hideDragIcon\"\n  [roundBorderOnTop]=\"roundBorderOnTop\"\n  [disableDrag]=\"disableDrag\"\n  [transition]=\"transition\"\n  [title]=\"title\"\n  [dockedHeight]=\"dockedHeight\"\n>\n<form [formGroup]=\"addMedicineForm\" (ngSubmit)=\"onSubmit(addMedicineForm.value)\">\n  <ion-row>\n   \n    <ion-col size=\"12\">\n      <ion-label>Medicine Name</ion-label>\n      <ion-item lines=\"none\">\n        <ion-input formControlName=\"tab\" type=\"text\" ></ion-input>\n      </ion-item>\n    </ion-col>\n  </ion-row>\n  <ion-row>\n   \n    <ion-col size=\"3\">\n      <ion-label>Morning Time</ion-label>\n    </ion-col>\n    <ion-col size=\"9\">\n      <ion-item lines=\"none\">\n      <ion-datetime displayFormat=\"h:mm a\" formControlName=\"morningTime\"></ion-datetime>\n      </ion-item>\n    </ion-col>\n    \n  </ion-row>\n  <ion-row>\n   \n    <ion-col size=\"3\">\n      <ion-label>Afternoon Time</ion-label>\n    </ion-col>\n    <ion-col size=\"9\">\n      <ion-item lines=\"none\">\n      <ion-datetime displayFormat=\"h:mm a\" formControlName=\"afternoonTime\"></ion-datetime>\n\n      </ion-item>\n    </ion-col>\n    \n  </ion-row>\n  <ion-row>\n   \n    <ion-col size=\"3\">\n      <ion-label>Evening Time</ion-label>\n    </ion-col>\n    <ion-col size=\"9\">\n      <ion-item lines=\"none\">\n      <ion-datetime displayFormat=\"h:mm a\" formControlName=\"eveningTime\"></ion-datetime>\n      </ion-item>\n    </ion-col>\n    \n  </ion-row>\n  <ion-row>\n    <ion-col size=\"6\">\n      <ion-label>Quantity </ion-label>\n      <ion-item lines=\"none\">\n        <ion-input type=\"number\" formControlName=\"quantity\"></ion-input>\n        </ion-item>\n    </ion-col>\n    <ion-col size=\"6\">\n      <ion-label>Comment </ion-label>\n      <ion-item lines=\"none\">\n        <ion-input type=\"text\" formControlName=\"comment\"></ion-input>\n        </ion-item>\n    </ion-col>\n  </ion-row>\n  <ion-row>\n    <ion-col size=\"12\" class=\"ion-text-center\">\n        <ion-button [disabled]=\"addMedicineForm.invalid\" shape=\"round\" type=\"submit\"  color=\"secondary\">\n          Submit\n        </ion-button>\n    </ion-col>\n  </ion-row>\n</form>\n</ion-bottom-sheet>\n\n<ion-fab vertical=\"bottom\" horizontal=\"end\" slot=\"fixed\">\n  <ion-fab-button (click)=\"openAddMedicine()\">\n    <ion-icon color=\"light\" name=\"add-sharp\"></ion-icon>\n  </ion-fab-button>\n</ion-fab>";
      /***/
    },

    /***/
    "wUQ3":
    /*!*************************************************!*\
      !*** ./src/app/addmedicine/addmedicine.page.ts ***!
      \*************************************************/

    /*! exports provided: AddmedicinePage */

    /***/
    function wUQ3(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AddmedicinePage", function () {
        return AddmedicinePage;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_addmedicine_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./addmedicine.page.html */
      "WYWL");
      /* harmony import */


      var _addmedicine_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./addmedicine.page.scss */
      "VMUn");
      /* harmony import */


      var _editmedicine_editmedicine_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./../editmedicine/editmedicine.page */
      "HWDZ");
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


      var ion_bottom_sheet__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ion-bottom-sheet */
      "umRu");
      /* harmony import */


      var _api_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! ../api.service */
      "yTNM");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! @angular/forms */
      "3Pt+");
      /* harmony import */


      var _ionic_storage__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! @ionic/storage */
      "e8h1");

      var AddmedicinePage = /*#__PURE__*/function () {
        function AddmedicinePage(alertController, apiService, storage, route, modalCtrl) {
          _classCallCheck(this, AddmedicinePage);

          this.alertController = alertController;
          this.apiService = apiService;
          this.storage = storage;
          this.route = route;
          this.modalCtrl = modalCtrl;
          this.sheetState = ion_bottom_sheet__WEBPACK_IMPORTED_MODULE_7__["SheetState"].Bottom;
          this.minHeight = 300;
          this.dockedHeight = 400;
          this.canBounce = true;
          this.topDistance = 0;
          this.hideCloseButton = false;
          this.hideDragIcon = false;
          this.roundBorderOnTop = true;
          this.disableDrag = false;
          this.transition = '0.4s ease';
          this.title = 'Add Medicine';
        }

        _createClass(AddmedicinePage, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            this.addMedicineForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_9__["FormGroup"]({
              tab: new _angular_forms__WEBPACK_IMPORTED_MODULE_9__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_9__["Validators"].required]),
              morningTime: new _angular_forms__WEBPACK_IMPORTED_MODULE_9__["FormControl"](''),
              afternoonTime: new _angular_forms__WEBPACK_IMPORTED_MODULE_9__["FormControl"](''),
              eveningTime: new _angular_forms__WEBPACK_IMPORTED_MODULE_9__["FormControl"](''),
              quantity: new _angular_forms__WEBPACK_IMPORTED_MODULE_9__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_9__["Validators"].required]),
              comment: new _angular_forms__WEBPACK_IMPORTED_MODULE_9__["FormControl"]('')
            });
          }
        }, {
          key: "ionViewDidEnter",
          value: function ionViewDidEnter() {
            var _this = this;

            this.storage.get('user').then(function (data) {
              if (data) {
                var user = JSON.parse(data);
                _this.userid = user.id;
                _this.illnessId = _this.route.snapshot.paramMap.get('illnessId');

                _this.apiService.fetchMedicine(_this.userid, _this.illnessId).then(function (data) {
                  console.log('medicines', data);
                  _this.medicines = JSON.parse(data.data);
                })["catch"](function (err) {
                  _this.medicines = '';
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
                _this2.illnessId = _this2.route.snapshot.params.get('illnessId');

                _this2.apiService.fetchMedicine(_this2.userid, _this2.illnessId).then(function (data) {
                  console.log('medicines', data);
                  _this2.medicines = JSON.parse(data.data);
                  event.target.complete();
                })["catch"](function (err) {
                  _this2.medicines = '';
                  event.target.complete();
                });
              }
            });
          }
        }, {
          key: "deleteMedicineAlert",
          value: function deleteMedicineAlert(tabId) {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/_regeneratorRuntime().mark(function _callee() {
              var _this3 = this;

              var alert;
              return _regeneratorRuntime().wrap(function _callee$(_context) {
                while (1) switch (_context.prev = _context.next) {
                  case 0:
                    _context.next = 2;
                    return this.alertController.create({
                      cssClass: 'my-custom-class',
                      header: 'Delete Medicine',
                      mode: 'ios',
                      message: 'Are you sure you want to delete medicine ?',
                      buttons: [{
                        text: 'Yes',
                        role: 'cancel',
                        cssClass: 'secondary',
                        handler: function handler(blah) {
                          console.log('Confirm Cancel: blah');

                          _this3.deleteMedicine(tabId);
                        }
                      }, {
                        text: 'No',
                        handler: function handler() {
                          console.log('Confirm Okay');
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
          key: "openAddMedicine",
          value: function openAddMedicine() {
            this.sheetState = ion_bottom_sheet__WEBPACK_IMPORTED_MODULE_7__["SheetState"].Docked;
          }
        }, {
          key: "discontinueMedicines",
          value: function discontinueMedicines(userId, illnessId, TabId) {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/_regeneratorRuntime().mark(function _callee2() {
              var _this4 = this;

              var alert;
              return _regeneratorRuntime().wrap(function _callee2$(_context2) {
                while (1) switch (_context2.prev = _context2.next) {
                  case 0:
                    _context2.next = 2;
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
                          _this4.discontinue_reason = formdata.reason;

                          _this4.apiService.discontinueMedicine(userId, illnessId, TabId, _this4.discontinue_reason).then(function (data) {
                            console.log('illness', data);

                            _this4.presentAlert('Medicine discontinued successfully');
                          })["catch"](function (err) {
                            console.log(err);

                            _this4.apiService.presentToast(err.error, 1000);
                          });
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
          key: "presentAlert",
          value: function presentAlert(message) {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/_regeneratorRuntime().mark(function _callee3() {
              var _this5 = this;

              var alert;
              return _regeneratorRuntime().wrap(function _callee3$(_context3) {
                while (1) switch (_context3.prev = _context3.next) {
                  case 0:
                    _context3.next = 2;
                    return this.alertController.create({
                      header: 'Successful',
                      message: message,
                      mode: 'ios',
                      backdropDismiss: false,
                      buttons: [{
                        text: 'OK',
                        handler: function handler() {
                          _this5.ionViewDidEnter();

                          _this5.sheetState = ion_bottom_sheet__WEBPACK_IMPORTED_MODULE_7__["SheetState"].Bottom;
                        }
                      }]
                    });

                  case 2:
                    alert = _context3.sent;
                    _context3.next = 5;
                    return alert.present();

                  case 5:
                  case "end":
                    return _context3.stop();
                }
              }, _callee3, this);
            }));
          }
        }, {
          key: "deleteMedicine",
          value: function deleteMedicine(tabId) {
            var _this6 = this;

            this.apiService.deleteMedicine(this.userid, this.illnessId, tabId).then(function (data) {
              console.log('illness', data);

              _this6.presentAlert('Medicine deleted successfully');
            })["catch"](function (err) {
              _this6.apiService.presentToast(err.error, 1000);
            });
          }
        }, {
          key: "openEditMedicine",
          value: function openEditMedicine(medicine_obj, tabId) {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/_regeneratorRuntime().mark(function _callee4() {
              var _this7 = this;

              var modal, data;
              return _regeneratorRuntime().wrap(function _callee4$(_context4) {
                while (1) switch (_context4.prev = _context4.next) {
                  case 0:
                    _context4.next = 2;
                    return this.modalCtrl.create({
                      component: _editmedicine_editmedicine_page__WEBPACK_IMPORTED_MODULE_3__["EditmedicinePage"],
                      componentProps: {
                        'userId': this.userid,
                        'illnessId': this.illnessId,
                        'tabId': tabId,
                        'medicine_obj': medicine_obj
                      },
                      swipeToClose: true
                    });

                  case 2:
                    modal = _context4.sent;
                    _context4.next = 5;
                    return modal.present();

                  case 5:
                    _context4.next = 7;
                    return modal.onDidDismiss().then(function (data) {
                      _this7.ionViewDidEnter();
                    });

                  case 7:
                    data = _context4.sent;
                    console.log(data);

                  case 9:
                  case "end":
                    return _context4.stop();
                }
              }, _callee4, this);
            }));
          }
        }, {
          key: "onSubmit",
          value: function onSubmit(body) {
            var _this8 = this;

            body['userId'] = this.userid;
            body['illnessId'] = this.illnessId;
            console.log('body', body);

            if (body['morningTime']) {
              body['morning'] = 'morning';
            } else {
              body['morning'] = '';
            }

            if (body['afternoonTime']) {
              body['afternoon'] = 'afternoon';
            } else {
              body['afternoon'] = '';
            }

            if (body['eveningTime']) {
              body['evening'] = 'evening';
            } else {
              body['evening'] = '';
            }

            this.apiService.addMedicine(body).then(function (data) {
              console.log('data', data);

              _this8.presentAlert('Medicine added successfully');
            })["catch"](function (err) {
              _this8.apiService.presentToast(err.error, 2000);

              console.log('err', err);
            });
          }
        }]);

        return AddmedicinePage;
      }();

      AddmedicinePage.ctorParameters = function () {
        return [{
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["AlertController"]
        }, {
          type: _api_service__WEBPACK_IMPORTED_MODULE_8__["ApiService"]
        }, {
          type: _ionic_storage__WEBPACK_IMPORTED_MODULE_10__["Storage"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"]
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["ModalController"]
        }];
      };

      AddmedicinePage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_5__["Component"])({
        selector: 'app-addmedicine',
        template: _raw_loader_addmedicine_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_addmedicine_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
      })], AddmedicinePage);
      /***/
    }
  }]);
})();
//# sourceMappingURL=addmedicine-addmedicine-module-es5.js.map