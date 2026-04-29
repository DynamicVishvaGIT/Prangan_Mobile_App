(function () {
  function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return e; }; var t, e = {}, r = Object.prototype, n = r.hasOwnProperty, o = Object.defineProperty || function (t, e, r) { t[e] = r.value; }, i = "function" == typeof Symbol ? Symbol : {}, a = i.iterator || "@@iterator", c = i.asyncIterator || "@@asyncIterator", u = i.toStringTag || "@@toStringTag"; function define(t, e, r) { return Object.defineProperty(t, e, { value: r, enumerable: !0, configurable: !0, writable: !0 }), t[e]; } try { define({}, ""); } catch (t) { define = function define(t, e, r) { return t[e] = r; }; } function wrap(t, e, r, n) { var i = e && e.prototype instanceof Generator ? e : Generator, a = Object.create(i.prototype), c = new Context(n || []); return o(a, "_invoke", { value: makeInvokeMethod(t, r, c) }), a; } function tryCatch(t, e, r) { try { return { type: "normal", arg: t.call(e, r) }; } catch (t) { return { type: "throw", arg: t }; } } e.wrap = wrap; var h = "suspendedStart", l = "suspendedYield", f = "executing", s = "completed", y = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var p = {}; define(p, a, function () { return this; }); var d = Object.getPrototypeOf, v = d && d(d(values([]))); v && v !== r && n.call(v, a) && (p = v); var g = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(p); function defineIteratorMethods(t) { ["next", "throw", "return"].forEach(function (e) { define(t, e, function (t) { return this._invoke(e, t); }); }); } function AsyncIterator(t, e) { function invoke(r, o, i, a) { var c = tryCatch(t[r], t, o); if ("throw" !== c.type) { var u = c.arg, h = u.value; return h && "object" == typeof h && n.call(h, "__await") ? e.resolve(h.__await).then(function (t) { invoke("next", t, i, a); }, function (t) { invoke("throw", t, i, a); }) : e.resolve(h).then(function (t) { u.value = t, i(u); }, function (t) { return invoke("throw", t, i, a); }); } a(c.arg); } var r; o(this, "_invoke", { value: function value(t, n) { function callInvokeWithMethodAndArg() { return new e(function (e, r) { invoke(t, n, e, r); }); } return r = r ? r.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); } }); } function makeInvokeMethod(e, r, n) { var o = h; return function (i, a) { if (o === f) throw new Error("Generator is already running"); if (o === s) { if ("throw" === i) throw a; return { value: t, done: !0 }; } for (n.method = i, n.arg = a;;) { var c = n.delegate; if (c) { var u = maybeInvokeDelegate(c, n); if (u) { if (u === y) continue; return u; } } if ("next" === n.method) n.sent = n._sent = n.arg;else if ("throw" === n.method) { if (o === h) throw o = s, n.arg; n.dispatchException(n.arg); } else "return" === n.method && n.abrupt("return", n.arg); o = f; var p = tryCatch(e, r, n); if ("normal" === p.type) { if (o = n.done ? s : l, p.arg === y) continue; return { value: p.arg, done: n.done }; } "throw" === p.type && (o = s, n.method = "throw", n.arg = p.arg); } }; } function maybeInvokeDelegate(e, r) { var n = r.method, o = e.iterator[n]; if (o === t) return r.delegate = null, "throw" === n && e.iterator["return"] && (r.method = "return", r.arg = t, maybeInvokeDelegate(e, r), "throw" === r.method) || "return" !== n && (r.method = "throw", r.arg = new TypeError("The iterator does not provide a '" + n + "' method")), y; var i = tryCatch(o, e.iterator, r.arg); if ("throw" === i.type) return r.method = "throw", r.arg = i.arg, r.delegate = null, y; var a = i.arg; return a ? a.done ? (r[e.resultName] = a.value, r.next = e.nextLoc, "return" !== r.method && (r.method = "next", r.arg = t), r.delegate = null, y) : a : (r.method = "throw", r.arg = new TypeError("iterator result is not an object"), r.delegate = null, y); } function pushTryEntry(t) { var e = { tryLoc: t[0] }; 1 in t && (e.catchLoc = t[1]), 2 in t && (e.finallyLoc = t[2], e.afterLoc = t[3]), this.tryEntries.push(e); } function resetTryEntry(t) { var e = t.completion || {}; e.type = "normal", delete e.arg, t.completion = e; } function Context(t) { this.tryEntries = [{ tryLoc: "root" }], t.forEach(pushTryEntry, this), this.reset(!0); } function values(e) { if (e || "" === e) { var r = e[a]; if (r) return r.call(e); if ("function" == typeof e.next) return e; if (!isNaN(e.length)) { var o = -1, i = function next() { for (; ++o < e.length;) if (n.call(e, o)) return next.value = e[o], next.done = !1, next; return next.value = t, next.done = !0, next; }; return i.next = i; } } throw new TypeError(typeof e + " is not iterable"); } return GeneratorFunction.prototype = GeneratorFunctionPrototype, o(g, "constructor", { value: GeneratorFunctionPrototype, configurable: !0 }), o(GeneratorFunctionPrototype, "constructor", { value: GeneratorFunction, configurable: !0 }), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, u, "GeneratorFunction"), e.isGeneratorFunction = function (t) { var e = "function" == typeof t && t.constructor; return !!e && (e === GeneratorFunction || "GeneratorFunction" === (e.displayName || e.name)); }, e.mark = function (t) { return Object.setPrototypeOf ? Object.setPrototypeOf(t, GeneratorFunctionPrototype) : (t.__proto__ = GeneratorFunctionPrototype, define(t, u, "GeneratorFunction")), t.prototype = Object.create(g), t; }, e.awrap = function (t) { return { __await: t }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, c, function () { return this; }), e.AsyncIterator = AsyncIterator, e.async = function (t, r, n, o, i) { void 0 === i && (i = Promise); var a = new AsyncIterator(wrap(t, r, n, o), i); return e.isGeneratorFunction(r) ? a : a.next().then(function (t) { return t.done ? t.value : a.next(); }); }, defineIteratorMethods(g), define(g, u, "Generator"), define(g, a, function () { return this; }), define(g, "toString", function () { return "[object Generator]"; }), e.keys = function (t) { var e = Object(t), r = []; for (var n in e) r.push(n); return r.reverse(), function next() { for (; r.length;) { var t = r.pop(); if (t in e) return next.value = t, next.done = !1, next; } return next.done = !0, next; }; }, e.values = values, Context.prototype = { constructor: Context, reset: function reset(e) { if (this.prev = 0, this.next = 0, this.sent = this._sent = t, this.done = !1, this.delegate = null, this.method = "next", this.arg = t, this.tryEntries.forEach(resetTryEntry), !e) for (var r in this) "t" === r.charAt(0) && n.call(this, r) && !isNaN(+r.slice(1)) && (this[r] = t); }, stop: function stop() { this.done = !0; var t = this.tryEntries[0].completion; if ("throw" === t.type) throw t.arg; return this.rval; }, dispatchException: function dispatchException(e) { if (this.done) throw e; var r = this; function handle(n, o) { return a.type = "throw", a.arg = e, r.next = n, o && (r.method = "next", r.arg = t), !!o; } for (var o = this.tryEntries.length - 1; o >= 0; --o) { var i = this.tryEntries[o], a = i.completion; if ("root" === i.tryLoc) return handle("end"); if (i.tryLoc <= this.prev) { var c = n.call(i, "catchLoc"), u = n.call(i, "finallyLoc"); if (c && u) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } else if (c) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); } else { if (!u) throw new Error("try statement without catch or finally"); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } } } }, abrupt: function abrupt(t, e) { for (var r = this.tryEntries.length - 1; r >= 0; --r) { var o = this.tryEntries[r]; if (o.tryLoc <= this.prev && n.call(o, "finallyLoc") && this.prev < o.finallyLoc) { var i = o; break; } } i && ("break" === t || "continue" === t) && i.tryLoc <= e && e <= i.finallyLoc && (i = null); var a = i ? i.completion : {}; return a.type = t, a.arg = e, i ? (this.method = "next", this.next = i.finallyLoc, y) : this.complete(a); }, complete: function complete(t, e) { if ("throw" === t.type) throw t.arg; return "break" === t.type || "continue" === t.type ? this.next = t.arg : "return" === t.type ? (this.rval = this.arg = t.arg, this.method = "return", this.next = "end") : "normal" === t.type && e && (this.next = e), y; }, finish: function finish(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.finallyLoc === t) return this.complete(r.completion, r.afterLoc), resetTryEntry(r), y; } }, "catch": function _catch(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.tryLoc === t) { var n = r.completion; if ("throw" === n.type) { var o = n.arg; resetTryEntry(r); } return o; } } throw new Error("illegal catch attempt"); }, delegateYield: function delegateYield(e, r, n) { return this.delegate = { iterator: values(e), resultName: r, nextLoc: n }, "next" === this.method && (this.arg = t), y; } }, e; }

  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

  function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return typeof key === "symbol" ? key : String(key); }

  function _toPrimitive(input, hint) { if (typeof input !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (typeof res !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["preschoolform-preschoolform-module"], {
    /***/
    "Avr1":
    /*!*******************************************************!*\
      !*** ./src/app/preschoolform/preschoolform.module.ts ***!
      \*******************************************************/

    /*! exports provided: PreschoolformPageModule */

    /***/
    function Avr1(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "PreschoolformPageModule", function () {
        return PreschoolformPageModule;
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


      var _preschoolform_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./preschoolform-routing.module */
      "JJnx");
      /* harmony import */


      var _preschoolform_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./preschoolform.page */
      "hMjY");

      var PreschoolformPageModule = /*#__PURE__*/_createClass(function PreschoolformPageModule() {
        _classCallCheck(this, PreschoolformPageModule);
      });

      PreschoolformPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _preschoolform_routing_module__WEBPACK_IMPORTED_MODULE_5__["PreschoolformPageRoutingModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"]],
        declarations: [_preschoolform_page__WEBPACK_IMPORTED_MODULE_6__["PreschoolformPage"]]
      })], PreschoolformPageModule);
      /***/
    },

    /***/
    "JJnx":
    /*!***************************************************************!*\
      !*** ./src/app/preschoolform/preschoolform-routing.module.ts ***!
      \***************************************************************/

    /*! exports provided: PreschoolformPageRoutingModule */

    /***/
    function JJnx(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "PreschoolformPageRoutingModule", function () {
        return PreschoolformPageRoutingModule;
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


      var _preschoolform_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./preschoolform.page */
      "hMjY");

      var routes = [{
        path: '',
        component: _preschoolform_page__WEBPACK_IMPORTED_MODULE_3__["PreschoolformPage"]
      }];

      var PreschoolformPageRoutingModule = /*#__PURE__*/_createClass(function PreschoolformPageRoutingModule() {
        _classCallCheck(this, PreschoolformPageRoutingModule);
      });

      PreschoolformPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
      })], PreschoolformPageRoutingModule);
      /***/
    },

    /***/
    "KBYr":
    /*!*******************************************************!*\
      !*** ./src/app/preschoolform/preschoolform.page.scss ***!
      \*******************************************************/

    /*! exports provided: default */

    /***/
    function KBYr(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = ".step {\n  color: #a2a2a2;\n  font-size: 16px;\n  margin-left: 16px;\n  font-family: initial;\n  margin-bottom: 2px;\n  font-weight: bold;\n}\n\n.step-heading {\n  color: #fdd653;\n  margin-left: 16px;\n  font-family: initial;\n  font-size: 30px;\n  margin-top: 0;\n  font-weight: bold;\n  text-decoration: underline;\n  text-decoration-thickness: 2px;\n}\n\n.wrap {\n  text-align: center;\n  position: relative;\n}\n\n.wrap:before {\n  content: \"\";\n  position: absolute;\n  top: 20%;\n  left: 18%;\n  border-top: 0.5px solid #677483;\n  border-width: thin;\n  width: 65%;\n  transform: translateY(-50%);\n  border-style: dashed;\n}\n\n.active {\n  background: #fdd653;\n  color: #ffffff;\n}\n\n.icon-circle {\n  position: relative;\n  display: inline-block;\n  margin: -1px;\n  width: 30px;\n  height: 30px;\n  font-size: 26px;\n  border-radius: 50%;\n  border: 1px solid #202020;\n  background: #fff;\n  color: #202020;\n  text-align: center;\n}\n\n.icon-circle ion-icon {\n  margin-top: 2px;\n  font-size: 20px;\n}\n\n.heading-1 {\n  color: #676767;\n  margin-bottom: 0;\n  font-size: 16px;\n}\n\n.heading {\n  color: #9b9ca6;\n  margin-bottom: 0;\n  font-size: 14px;\n}\n\nion-label {\n  color: #9b9ca6;\n  font-size: 14px;\n}\n\nion-input {\n  border: 1px solid #9b9ca6;\n  border-radius: 5px;\n  --padding-start: 5px !important;\n  height: 35px;\n}\n\nion-textarea {\n  border: 1px solid #9b9ca6;\n  border-radius: 5px;\n  --padding-start: 5px !important;\n}\n\nion-datetime {\n  border: 1px solid #9b9ca6;\n  border-radius: 5px;\n  --padding-start: 5px !important;\n  width: 100%;\n  height: 35px;\n}\n\nion-item {\n  --padding-start: 0;\n  --ripple-color: transparent;\n  --background-activated: transparent;\n  --background-activated-opacity:transparent;\n  --background-focused: transparent;\n  --background-focused-opacity:transparent;\n  --background-hover: transparent;\n  --background-hover-opacity:transparent;\n}\n\nion-item ion-label {\n  font-size: 12px;\n  color: #9b9ca6;\n}\n\nion-radio-group ion-item {\n  border-bottom: 0;\n}\n\nion-radio-group ion-col {\n  padding-left: 0;\n}\n\nion-radio-group ion-radio {\n  margin-right: 8px;\n  width: 18px;\n  height: 18px;\n}\n\nion-col {\n  padding-left: 0;\n}\n\nion-button {\n  text-transform: none;\n}\n\n.choose-btn {\n  --background: #ee4a35;\n}\n\n.heading-3 {\n  margin-top: 12px;\n  color: #929791;\n}\n\n.admission-row ion-col {\n  text-align: center;\n  text-align: -moz-center;\n}\n\n.admission-row ion-col ion-button {\n  text-transform: none;\n  width: 80%;\n}\n\n.next-btn-col {\n  text-align: left !important;\n}\n\nimg {\n  width: 100px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3ByZXNjaG9vbGZvcm0ucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUNBO0VBQ0ksY0FBQTtFQUNBLGVBQUE7RUFDQSxpQkFBQTtFQUNBLG9CQUFBO0VBQ0Esa0JBQUE7RUFDQSxpQkFBQTtBQUFKOztBQUVBO0VBQ0ksY0FBQTtFQUNBLGlCQUFBO0VBQ0Esb0JBQUE7RUFDQSxlQUFBO0VBQ0EsYUFBQTtFQUNBLGlCQUFBO0VBQ0EsMEJBQUE7RUFDQSw4QkFBQTtBQUNKOztBQUNBO0VBQ0ksa0JBQUE7RUFDQSxrQkFBQTtBQUVKOztBQUNFO0VBQ0UsV0FBQTtFQUNBLGtCQUFBO0VBQ0EsUUFBQTtFQUNBLFNBQUE7RUFDQSwrQkFBQTtFQUNBLGtCQUFBO0VBQ0EsVUFBQTtFQUNBLDJCQUFBO0VBQ0Esb0JBQUE7QUFFSjs7QUFBRTtFQUNFLG1CQUFBO0VBQ0EsY0FBQTtBQUdKOztBQURFO0VBQ0Usa0JBQUE7RUFDQSxxQkFBQTtFQUNBLFlBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGVBQUE7RUFDQSxrQkFBQTtFQUNBLHlCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxjQUFBO0VBQ0Esa0JBQUE7QUFJSjs7QUFGSTtFQUNJLGVBQUE7RUFDQSxlQUFBO0FBSVI7O0FBRUU7RUFDRSxjQUFBO0VBQ0EsZ0JBQUE7RUFDQSxlQUFBO0FBQ0o7O0FBQ0E7RUFDSSxjQUFBO0VBQ0EsZ0JBQUE7RUFDQSxlQUFBO0FBRUo7O0FBQUE7RUFDSSxjQUFBO0VBQ0EsZUFBQTtBQUdKOztBQURBO0VBQ0kseUJBQUE7RUFDQSxrQkFBQTtFQUNBLCtCQUFBO0VBQ0EsWUFBQTtBQUlKOztBQUZBO0VBQ0kseUJBQUE7RUFDQSxrQkFBQTtFQUNBLCtCQUFBO0FBS0o7O0FBSEE7RUFDSSx5QkFBQTtFQUNBLGtCQUFBO0VBQ0EsK0JBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtBQU1KOztBQUhBO0VBRUksa0JBQUE7RUFDQSwyQkFBQTtFQUNBLG1DQUFBO0VBQ0EsMENBQUE7RUFDQSxpQ0FBQTtFQUNBLHdDQUFBO0VBQ0EsK0JBQUE7RUFDQSxzQ0FBQTtBQUtKOztBQUhJO0VBQ0ksZUFBQTtFQUNKLGNBQUE7QUFLSjs7QUFBUTtFQUNJLGdCQUFBO0FBR1o7O0FBRFE7RUFDSSxlQUFBO0FBR1o7O0FBRFE7RUFDQSxpQkFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0FBR1I7O0FBQ0k7RUFDSSxlQUFBO0FBRVI7O0FBQ0k7RUFDSSxvQkFBQTtBQUVSOztBQUFJO0VBQ0kscUJBQUE7QUFHUjs7QUFESTtFQUNJLGdCQUFBO0VBQ0EsY0FBQTtBQUlSOztBQURRO0VBQ0ksa0JBQUE7RUFDQSx1QkFBQTtBQUlaOztBQUhZO0VBQ0ksb0JBQUE7RUFFQSxVQUFBO0FBSWhCOztBQUNJO0VBQ0ksMkJBQUE7QUFFUjs7QUFBSTtFQUNJLFlBQUE7QUFHUiIsImZpbGUiOiJwcmVzY2hvb2xmb3JtLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIlxyXG4uc3RlcHtcclxuICAgIGNvbG9yOiAjYTJhMmEyO1xyXG4gICAgZm9udC1zaXplOiAxNnB4O1xyXG4gICAgbWFyZ2luLWxlZnQ6IDE2cHg7XHJcbiAgICBmb250LWZhbWlseTogaW5pdGlhbDtcclxuICAgIG1hcmdpbi1ib3R0b206IDJweDtcclxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG59XHJcbi5zdGVwLWhlYWRpbmd7XHJcbiAgICBjb2xvcjogI2ZkZDY1MztcclxuICAgIG1hcmdpbi1sZWZ0OiAxNnB4O1xyXG4gICAgZm9udC1mYW1pbHk6IGluaXRpYWw7XHJcbiAgICBmb250LXNpemU6IDMwcHg7XHJcbiAgICBtYXJnaW4tdG9wOiAwO1xyXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgICB0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZTtcclxuICAgIHRleHQtZGVjb3JhdGlvbi10aGlja25lc3M6IDJweDtcclxufVxyXG4ud3JhcCB7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgfVxyXG4gIFxyXG4gIC53cmFwOmJlZm9yZSB7XHJcbiAgICBjb250ZW50OiBcIlwiO1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgdG9wOiAyMCU7XHJcbiAgICBsZWZ0OiAxOCU7XHJcbiAgICBib3JkZXItdG9wOiAwLjVweCBzb2xpZCAjNjc3NDgzO1xyXG4gICAgYm9yZGVyLXdpZHRoOiB0aGluO1xyXG4gICAgd2lkdGg6IDY1JTtcclxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtNTAlKTtcclxuICAgIGJvcmRlci1zdHlsZTogZGFzaGVkO1xyXG4gIH1cclxuICAuYWN0aXZle1xyXG4gICAgYmFja2dyb3VuZDogI2ZkZDY1MztcclxuICAgIGNvbG9yOiAjZmZmZmZmO1xyXG4gIH1cclxuICAuaWNvbi1jaXJjbGV7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgICBtYXJnaW46IC0xcHg7XHJcbiAgICB3aWR0aDogMzBweDtcclxuICAgIGhlaWdodDogMzBweDtcclxuICAgIGZvbnQtc2l6ZTogMjZweDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcclxuICAgIGJvcmRlcjogMXB4IHNvbGlkICMyMDIwMjA7XHJcbiAgICBiYWNrZ3JvdW5kOiAjZmZmO1xyXG4gICAgY29sb3I6ICMyMDIwMjA7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcblxyXG4gICAgaW9uLWljb257XHJcbiAgICAgICAgbWFyZ2luLXRvcDogMnB4O1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMjBweDtcclxuICAgIH1cclxuICBcclxuICB9XHJcbiAgXHJcbiAgXHJcbiAgLmhlYWRpbmctMXtcclxuICAgIGNvbG9yOiAjNjc2NzY3O1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMDtcclxuICAgIGZvbnQtc2l6ZTogMTZweDtcclxufVxyXG4uaGVhZGluZ3tcclxuICAgIGNvbG9yOiAjOWI5Y2E2O1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMDtcclxuICAgIGZvbnQtc2l6ZTogMTRweDtcclxufVxyXG5pb24tbGFiZWx7XHJcbiAgICBjb2xvcjogIzliOWNhNjtcclxuICAgIGZvbnQtc2l6ZTogMTRweDtcclxufVxyXG5pb24taW5wdXQge1xyXG4gICAgYm9yZGVyOiAxcHggc29saWQgIzliOWNhNjtcclxuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcclxuICAgIC0tcGFkZGluZy1zdGFydDogNXB4ICFpbXBvcnRhbnQ7XHJcbiAgICBoZWlnaHQ6MzVweDtcclxufVxyXG5pb24tdGV4dGFyZWF7XHJcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjOWI5Y2E2O1xyXG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xyXG4gICAgLS1wYWRkaW5nLXN0YXJ0OiA1cHggIWltcG9ydGFudDtcclxufVxyXG5pb24tZGF0ZXRpbWV7XHJcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjOWI5Y2E2O1xyXG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xyXG4gICAgLS1wYWRkaW5nLXN0YXJ0OiA1cHggIWltcG9ydGFudDtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgaGVpZ2h0OjM1cHg7XHJcblxyXG59XHJcbmlvbi1pdGVte1xyXG4gICAgLy8gYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICM2Nzc0ODM7XHJcbiAgICAtLXBhZGRpbmctc3RhcnQ6IDA7XHJcbiAgICAtLXJpcHBsZS1jb2xvcjogdHJhbnNwYXJlbnQ7XHJcbiAgICAtLWJhY2tncm91bmQtYWN0aXZhdGVkOiB0cmFuc3BhcmVudDtcclxuICAgIC0tYmFja2dyb3VuZC1hY3RpdmF0ZWQtb3BhY2l0eTp0cmFuc3BhcmVudDtcclxuICAgIC0tYmFja2dyb3VuZC1mb2N1c2VkOiB0cmFuc3BhcmVudDtcclxuICAgIC0tYmFja2dyb3VuZC1mb2N1c2VkLW9wYWNpdHk6dHJhbnNwYXJlbnQ7XHJcbiAgICAtLWJhY2tncm91bmQtaG92ZXIgIDogdHJhbnNwYXJlbnQ7XHJcbiAgICAtLWJhY2tncm91bmQtaG92ZXItb3BhY2l0eSAgOnRyYW5zcGFyZW50O1xyXG5cclxuICAgIGlvbi1sYWJlbCB7XHJcbiAgICAgICAgZm9udC1zaXplOiAxMnB4O1xyXG4gICAgY29sb3I6ICM5YjljYTY7XHJcblxyXG4gICAgfVxyXG59XHJcbiAgICBpb24tcmFkaW8tZ3JvdXB7XHJcbiAgICAgICAgaW9uLWl0ZW17XHJcbiAgICAgICAgICAgIGJvcmRlci1ib3R0b206IDA7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlvbi1jb2wge1xyXG4gICAgICAgICAgICBwYWRkaW5nLWxlZnQ6IDA7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlvbi1yYWRpb3tcclxuICAgICAgICBtYXJnaW4tcmlnaHQ6IDhweDtcclxuICAgICAgICB3aWR0aDogMThweDtcclxuICAgICAgICBoZWlnaHQ6IDE4cHg7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGlvbi1jb2wge1xyXG4gICAgICAgIHBhZGRpbmctbGVmdDogMDtcclxuICAgIH1cclxuXHJcbiAgICBpb24tYnV0dG9uIHtcclxuICAgICAgICB0ZXh0LXRyYW5zZm9ybTogbm9uZTtcclxuICAgIH1cclxuICAgIC5jaG9vc2UtYnRue1xyXG4gICAgICAgIC0tYmFja2dyb3VuZDogI2VlNGEzNTtcclxuICAgIH1cclxuICAgIC5oZWFkaW5nLTN7XHJcbiAgICAgICAgbWFyZ2luLXRvcDogMTJweDtcclxuICAgICAgICBjb2xvcjogIzkyOTc5MTtcclxuICAgIH1cclxuICAgIC5hZG1pc3Npb24tcm93e1xyXG4gICAgICAgIGlvbi1jb2x7XHJcbiAgICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgICAgICAgICAgdGV4dC1hbGlnbjogLW1vei1jZW50ZXI7XHJcbiAgICAgICAgICAgIGlvbi1idXR0b257XHJcbiAgICAgICAgICAgICAgICB0ZXh0LXRyYW5zZm9ybTogbm9uZTtcclxuICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICB3aWR0aDogODAlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgIFxyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIC5uZXh0LWJ0bi1jb2x7XHJcbiAgICAgICAgdGV4dC1hbGlnbjogbGVmdCAhaW1wb3J0YW50O1xyXG4gICAgfVxyXG4gICAgaW1ne1xyXG4gICAgICAgIHdpZHRoOiAxMDBweDtcclxuICAgIH0iXX0= */";
      /***/
    },

    /***/
    "SCUg":
    /*!*********************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/preschoolform/preschoolform.page.html ***!
      \*********************************************************************************************/

    /*! exports provided: default */

    /***/
    function SCUg(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-header class=\"ion-no-border\">\n  <ion-toolbar>\n    <ion-title>Preschool Admission Form</ion-title>\n    <!-- <ion-buttons slot=\"start\">\n      <ion-button shape=\"round\" (click)=\"goBack()\">\n        <ion-icon color=\"light\" name=\"arrow-back-outline\"></ion-icon>\n      </ion-button>\n    </ion-buttons> -->\n    <ion-buttons slot=\"start\">\n      <ion-back-button></ion-back-button>\n    </ion-buttons>\n  </ion-toolbar>\n\n\n</ion-header>\n\n<ion-content>\n  <ion-refresher slot=\"fixed\" (ionRefresh)=\"doRefresh($event)\">\n    <ion-refresher-content></ion-refresher-content>\n  </ion-refresher>\n  <ion-row class=\"ion-text-center margin-ionic-top wrap\" *ngIf=\"isLoggedIn && userType=='Preschool'\">\n    <ion-col size=\"4\">\n      <div class=\"icon-circle active \">\n        <ion-icon name=\"ellipse\" class=\"dot\"></ion-icon>\n      </div>\n      <p class=\"color-red \">Preschool Registration</p>\n    </ion-col>\n    <ion-col size=\"4\" (click)=\"goToStep2()\">\n      <div class=\"icon-circle \"  >\n      </div>\n      <p class=\"color-red heading-3\"  >Parents Info</p>\n\n    </ion-col>\n\n    <ion-col size=\"4\" (click)=\"goToStep3()\">\n      <div class=\"icon-circle \"  >\n      </div>\n      <p class=\"color-red heading-3\" > Additional Information</p>\n\n    </ion-col>\n  </ion-row> \n  <br>\n  <form [formGroup]=\"preschoolRegForm\" (ngSubmit)=\"onSubmit(preschoolRegForm.value)\">\n\n    <div class=\"margin-ionic\">\n      <p class=\"heading-1\">Prangan Centres <span class=\"text-danger\">*</span></p>\n      <ion-radio-group allowEmptySelection=\"false\" color=\"primary\" formControlName=\"branch_id\" >\n        <ion-row *ngIf=\"branches\">\n          <ion-col *ngFor=\"let branch of branches\">\n            <ion-item lines=\"none\">\n              <ion-radio value=\"{{branch.id}}\" [disabled]=\"isLoggedIn && userType=='Preschool'\"></ion-radio>\n              <ion-label>{{branch.branch_name}}</ion-label>\n            </ion-item>\n          </ion-col>\n        </ion-row>\n      </ion-radio-group>\n      <ion-row>\n        <ion-col size=\"12\">\n          <ion-label>Child's Name <span class=\"text-danger\">*</span></ion-label>\n          <ion-item lines=\"none\">\n            <ion-input type=\"text\" formControlName=\"child_name\"></ion-input>\n          </ion-item>\n          <div class=\"error-div\" *ngIf=\"(child_name?.invalid && child_name?.touched) || child_name?.dirty\">\n            <small *ngIf=\"child_name.errors?.pattern\" class=\"text-danger\">Enter a valid child name</small>\n          </div>\n        </ion-col>\n      </ion-row>\n      <ion-label>Pet Name </ion-label>\n      <ion-item lines=\"none\">\n        <ion-input formControlName=\"pet_name\" type=\"text\"></ion-input>\n      </ion-item>\n      <div class=\"error-div\" *ngIf=\"(pet_name?.invalid && pet_name?.touched) || pet_name?.dirty\">\n        <small *ngIf=\"pet_name.errors?.pattern\" class=\"text-danger\">Enter a valid pet name</small>\n      </div>\n      <br>\n      <ion-row>\n        <ion-col size=\"12\">\n          <ion-label>Gender <span class=\"text-danger\">*</span></ion-label>\n\n          <ion-radio-group allowEmptySelection=\"false\" color=\"primary\" formControlName=\"gender\">\n            <ion-row>\n              <ion-col size=\"4\">\n                <ion-item lines=\"none\">\n                  <ion-radio value=\"Boy\"></ion-radio>\n                  <ion-label>Boy</ion-label>\n                </ion-item>\n              </ion-col>\n              <ion-col size=\"4\">\n                <ion-item lines=\"none\">\n                  <ion-radio value=\"Girl\"></ion-radio>\n                  <ion-label>Girl</ion-label>\n                </ion-item>\n              </ion-col>\n              <ion-col size=\"4\">\n                <ion-item lines=\"none\">\n                  <ion-radio value=\"Other\"></ion-radio>\n                  <ion-label>Other</ion-label>\n                </ion-item>\n              </ion-col>\n            </ion-row>\n          </ion-radio-group>\n        </ion-col>\n      </ion-row>\n      <ion-row>\n        <ion-col size=\"12\">\n          <ion-label>Child's DOB <span class=\"text-danger\">*</span></ion-label>\n          <ion-item lines=\"none\">\n            <ion-datetime displayFormat=\"DD MMM  YYYY\" formControlName=\"d_o_b\" max=\"{{todays_date}}\"></ion-datetime>\n\n          </ion-item>\n        </ion-col>\n        <!-- <ion-col size=\"6\">\n          <ion-label>In Words <span class=\"text-danger\">*</span></ion-label>\n          <ion-item lines=\"none\">\n            <ion-input formControlName=\"dob_words\" type=\"text\"></ion-input>\n          </ion-item>\n          <div class=\"error-div\" *ngIf=\"(dob_words?.invalid && dob_words?.touched) || dob_words?.dirty\">\n            <small *ngIf=\"dob_words.errors?.pattern\" class=\"text-danger\">Enter a valid DOB in words</small>\n          </div>\n        </ion-col> -->\n        <!-- <ion-col size=\"6\">\n          <ion-label>In Figures <span class=\"text-danger\">*</span></ion-label>\n          <br>\n          <ion-label>e.g. 20-07-19</ion-label>\n          <ion-item lines=\"none\">\n            <ion-input formControlName=\"figures\" type=\"text\"></ion-input>\n          </ion-item>\n        </ion-col> -->\n\n\n        <ion-col size=\"6\">\n          <ion-label>Residence Mobile Number <span class=\"text-danger\">*</span></ion-label>\n          <ion-label>(For Login)</ion-label>\n          <ion-item lines=\"none\">\n            <ion-input formControlName=\"mobile_1\" type=\"tel\" maxlength=\"10\" [disabled]=\"isDisabled\"></ion-input>\n\n          </ion-item>\n          <div class=\"error-div\" *ngIf=\"(mobile_1?.invalid && mobile_1?.touched) || mobile_1?.dirty\">\n            <small *ngIf=\"mobile_1.errors?.pattern\" class=\"text-danger\">Enter a valid residence mobile number</small>\n          </div>\n        </ion-col>\n        <ion-col size=\"6\">\n          <ion-label>Emergency Phone <span class=\"text-danger\">*</span></ion-label>\n          <ion-item lines=\"none\">\n            <ion-input formControlName=\"mobile_2\" type=\"tel\" maxLength=\"10\"></ion-input>\n\n          </ion-item>\n          <div class=\"error-div\" *ngIf=\"(mobile_2?.invalid && mobile_2?.touched) || mobile_2?.dirty\">\n            <small *ngIf=\"mobile_2.errors?.pattern\" class=\"text-danger\">Enter a valid  phone number</small>\n          </div>\n        </ion-col>\n        <ion-col size=\"6\">\n          <ion-label>Mother Tongue <span class=\"text-danger\">*</span></ion-label>\n          <ion-item lines=\"none\">\n            <ion-input type=\"text\" formControlName=\"mother_tonge\"></ion-input>\n          </ion-item>\n          <div class=\"error-div\" *ngIf=\"(mother_tonge?.invalid && mother_tonge?.touched) || mother_tonge?.dirty\">\n            <small *ngIf=\"mother_tonge.errors?.pattern\" class=\"text-danger\">Enter a valid mother tounge</small>\n          </div>\n        </ion-col>\n        <ion-col size=\"12\">\n          <ion-label>Other Languages Spoken <span class=\"text-danger\">*</span></ion-label>\n          <ion-item lines=\"none\">\n            <ion-input type=\"text\" formControlName=\"other_languages\"></ion-input>\n          </ion-item>\n          <div class=\"error-div\"\n            *ngIf=\"(other_languages?.invalid && other_languages?.touched) || other_languages?.dirty\">\n            <small *ngIf=\"other_languages.errors?.pattern\" class=\"text-danger\">Enter a valid language</small>\n          </div>\n        </ion-col>\n        <ion-col size=\"6\">\n          <ion-label>Nationaity <span class=\"text-danger\">*</span></ion-label>\n          <ion-item lines=\"none\">\n            <ion-input type=\"text\" formControlName=\"nationality\"></ion-input>\n          </ion-item>\n          <div class=\"error-div\" *ngIf=\"(nationality?.invalid && nationality?.touched) || nationality?.dirty\">\n            <small *ngIf=\"nationality.errors?.pattern\" class=\"text-danger\">Enter a valid nationality</small>\n          </div>\n        </ion-col>\n        <ion-col size=\"12\">\n          <p class=\"heading\">Admission Seeking For <span class=\"text-danger\">*</span></p>\n          <ion-radio-group allowEmptySelection=\"false\" color=\"primary\" formControlName=\"class\">\n            <ion-row *ngIf=\"columns\">\n              <ion-col size=\"4\" *ngFor=\"let item of columns\">\n                <ion-item lines=\"none\">\n                  <ion-radio value=\"{{item.name}}\"></ion-radio>\n                  <ion-label>{{item.name |titlecase}}</ion-label>\n                </ion-item>\n              </ion-col>\n              <!-- <ion-col size=\"4\">\n                <ion-item lines=\"none\">\n                  <ion-radio value=\"Nursery 1\"></ion-radio>\n                  <ion-label>Nursery 1</ion-label>\n                </ion-item>\n              </ion-col>\n              <ion-col size=\"4\">\n                <ion-item lines=\"none\">\n                  <ion-radio value=\"Nursery 2\"></ion-radio>\n                  <ion-label>Nursery 2</ion-label>\n                </ion-item>\n              </ion-col>\n              <ion-col size=\"4\">\n                <ion-item lines=\"none\">\n                  <ion-radio value=\"Jr. KG\"></ion-radio>\n                  <ion-label>Jr.Kg</ion-label>\n                </ion-item>\n              </ion-col>\n              <ion-col size=\"4\">\n                <ion-item lines=\"none\">\n                  <ion-radio value=\"Sr. KG\"></ion-radio>\n                  <ion-label>Sr.Kg</ion-label>\n                </ion-item>\n              </ion-col> -->\n            </ion-row>\n          </ion-radio-group>\n        </ion-col>\n        <ion-col size=\"12\">\n          <ion-label>\n            Child's Picture\n            <span class=\"text-danger\">*</span>\n          </ion-label>\n          <br>\n          <img src=\"{{childbase64Image}}\"  *ngIf=\"childbase64Image\" alt=\"Avatar\" width=\"215\" />\n          <img src=\"{{child_image}}\"  *ngIf=\"child_image && isLoggedIn &&  !childbase64Image\" alt=\"Avatar\" width=\"215\" />\n          <ion-item lines=\"none\">\n            <ion-button shape=\"round\" class=\"choose-btn\" size=\"small\" (click)=\"presentActionSheet()\">\n              Choose File\n            </ion-button>\n          </ion-item>\n        </ion-col>\n\n\n      </ion-row>\n\n      <br>\n\n\n      <br>\n      <br>\n      <ion-row class=\"admission-row\">\n      \n        <ion-col size=\"6\">\n          <ion-button shape=\"round\" type=\"button\" (click)=\"goToStep2()\" [disabled]=\"!isFormSubmitted && isLoggedIn && userType=='Preschool'\" color=\"primary\">\n            Next\n          </ion-button>\n        </ion-col>\n        <ion-col  size=\"6\">\n          <ion-button shape=\"round\" type=\"submit\" [disabled]=\"!preschoolRegForm.valid\" color=\"primary\">\n            Submit\n          </ion-button>\n        </ion-col>\n      </ion-row>\n    </div>\n\n  </form>\n\n</ion-content>\n";
      /***/
    },

    /***/
    "hMjY":
    /*!*****************************************************!*\
      !*** ./src/app/preschoolform/preschoolform.page.ts ***!
      \*****************************************************/

    /*! exports provided: PreschoolformPage */

    /***/
    function hMjY(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "PreschoolformPage", function () {
        return PreschoolformPage;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_preschoolform_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./preschoolform.page.html */
      "SCUg");
      /* harmony import */


      var _preschoolform_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./preschoolform.page.scss */
      "KBYr");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");
      /* harmony import */


      var _api_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./../api.service */
      "yTNM");
      /* harmony import */


      var _ionic_storage__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @ionic/storage */
      "e8h1");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @angular/forms */
      "3Pt+");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! @ionic/angular */
      "TEn/");
      /* harmony import */


      var _ionic_native_camera_ngx__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! @ionic-native/camera/ngx */
      "a/9d");
      /* harmony import */


      var _ionic_native_file_ngx__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! @ionic-native/file/ngx */
      "FAH8");

      var PreschoolformPage = /*#__PURE__*/function () {
        function PreschoolformPage(storage, apiService, actionSheetController, file, camera, cf, alertController, router, loadingController, location, menuCtrl) {
          _classCallCheck(this, PreschoolformPage);

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
          this.menuCtrl = menuCtrl;
          this.todays_date = new Date().toJSON().split('T')[0];
          this.isDisabled = false;
          this.isFormSubmitted = false;
          this.isApproved = false;
        }

        _createClass(PreschoolformPage, [{
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
          key: "ngOnInit",
          value: function ngOnInit() {
            this.menuCtrl.enable(false);
            this.preschoolRegForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormGroup"]({
              branch_id: new _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_7__["Validators"].required]),
              child_name: new _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_7__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_7__["Validators"].pattern(/^[a-zA-Z\. ]+$/)]),
              pet_name: new _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_7__["Validators"].pattern(/^[a-zA-z ]+$/)]),
              gender: new _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_7__["Validators"].required]),
              d_o_b: new _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_7__["Validators"].required]),
              //dob_words:new FormControl('',[Validators.required,Validators.pattern(/^[a-zA-Z ]+$/)]),
              // figures:new FormControl('',[Validators.required]),
              mobile_1: new _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_7__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_7__["Validators"].maxLength(10), _angular_forms__WEBPACK_IMPORTED_MODULE_7__["Validators"].minLength(10), _angular_forms__WEBPACK_IMPORTED_MODULE_7__["Validators"].pattern(/^[0-9]{10}$/)]),
              mobile_2: new _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_7__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_7__["Validators"].maxLength(10), _angular_forms__WEBPACK_IMPORTED_MODULE_7__["Validators"].minLength(10), _angular_forms__WEBPACK_IMPORTED_MODULE_7__["Validators"].pattern(/^[0-9]{10}$/)]),
              mother_tonge: new _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_7__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_7__["Validators"].pattern(/^[a-zA-z ]+$/)]),
              other_languages: new _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_7__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_7__["Validators"].pattern(/^[a-zA-z ,]+$/)]),
              nationality: new _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_7__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_7__["Validators"].pattern(/^[a-zA-z ]+$/)]),
              "class": new _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_7__["Validators"].required])
            });
          }
        }, {
          key: "onSubmit",
          value: function onSubmit(body) {
            var _this = this;

            // if (this.childimgBlob == null){
            //   console.log(this.preschoolRegForm.valid)
            //   alert("You Forgot to add child image !")
            //   console.log('childimgBlob is null ',this.childimgBlob)
            //   }else{
            this.presentLoading();
            console.log('child_file_name1', this.child_file_name);

            if (this.child_file_name == '') {
              console.log('child_file_name2', this.child_file_name);
              this.loadingController.dismiss();
              this.apiService.presentToast('Please upload child image', 2000);
            } else {
              console.log('child_file_name3', this.child_file_name);
              console.log(body);
              console.log('body', body);
              var formData = new FormData();
              formData.append('branch_id', body.branch_id);
              formData.append('child_name', body.child_name);
              formData.append('pet_name', body.pet_name);
              formData.append('gender', body.gender);
              formData.append('d_o_b', body.d_o_b); //formData.append("dob_words", body['dob_words'])

              formData.append('figures', '');
              formData.append('mobile_1', body.mobile_1);
              formData.append('mobile_2', body.mobile_2);
              formData.append('mother_tonge', body.mother_tonge);
              formData.append('other_languages', body.other_languages);
              formData.append('nationality', body.nationality);
              formData.append('class', body["class"]);

              if (this.isDataPresent) {
                if (this.childimgBlob) {
                  formData.append('image', this.childimgBlob, this.child_file_name);
                } else {
                  formData.append('image', '');
                }

                formData.append('user_id', this.id);
                formData.append('old_image', this.old_image);
                this.apiService.updatePreschoolRegStep1(formData).subscribe(function (data) {
                  console.log('data', data);

                  _this.loadingController.dismiss();

                  _this.presentAlert('Preschool form updated successfully');

                  console.log(data);
                }, function (err) {
                  console.log(err);

                  _this.loadingController.dismiss();

                  _this.apiService.presentToast(err.error, 2000);
                });
              } else {
                formData.append('image', this.childimgBlob, this.child_file_name);
                this.apiService.preschoolRegStep1(formData).subscribe(function (data) {
                  console.log('data', data);

                  _this.loadingController.dismiss();

                  _this.presentAlert('Preschool form submitted successfully. Please wait for your registration approval.');

                  _this.preschoolRegForm.reset();

                  _this.childbase64Image = '';
                  _this.child_file_name = '';
                  console.log(data);
                }, function (err) {
                  console.log(err);

                  _this.loadingController.dismiss();

                  _this.apiService.presentToast(err.error, 2000);
                });
              }
            }
          }
        }, {
          key: "dismissLoader",
          value: function dismissLoader() {
            this.loadingController.dismiss();
          }
        }, {
          key: "ionViewDidEnter",
          value: function ionViewDidEnter() {
            var _this2 = this;

            if (this.menuCtrl.isEnabled) {
              console.log('hi');
              this.menuCtrl.swipeGesture(false);
            }

            this.presentLoading().then(function () {
              _this2.apiService.fetchFeeColumn().then(function (data) {
                console.log(data);
                _this2.columns = JSON.parse(data.data);
              })["catch"](function (err) {
                console.log(err, err);
              });

              _this2.storage.get('user').then(function (data) {
                console.log('storage', data);

                if (data) {
                  var user = JSON.parse(data);
                  _this2.isLoggedIn = true;
                  _this2.userid = user.userid;

                  _this2.storage.get('userType').then(function (userType) {
                    console.log(userType);
                    _this2.userType = userType;

                    if (_this2.userType == 'Preschool') {
                      console.log(user.id, userType, _this2.userType);

                      _this2.apiService.userDetails(user.id, userType).then(function (data) {
                        console.log('fetchPreschoolStepOne', data.data);
                        _this2.fetchPreschoolStepOne = JSON.parse(data.data);

                        if (_this2.fetchPreschoolStepOne.id) {
                          if (_this2.fetchPreschoolStepOne.status == 'Active' && _this2.fetchPreschoolStepOne.Approve_status == 'Active') {
                            _this2.isApproved = true;
                          }

                          _this2.isFormSubmitted = true;
                          _this2.child_image = _this2.fetchPreschoolStepOne.child_img;
                          _this2.id = _this2.fetchPreschoolStepOne.id;
                          _this2.isDisabled = true;
                          _this2.old_image = _this2.fetchPreschoolStepOne.child_image;

                          _this2.preschoolRegForm.patchValue({
                            branch_id: _this2.fetchPreschoolStepOne.branch_id,
                            child_name: _this2.fetchPreschoolStepOne.child_name,
                            pet_name: _this2.fetchPreschoolStepOne.pet_name,
                            gender: _this2.fetchPreschoolStepOne.gender,
                            d_o_b: _this2.fetchPreschoolStepOne.dob,
                            //'dob_words':this.fetchPreschoolStepOne.dob_in_words,
                            // 'figures':this.fetchPreschoolStepOne.dob_in_figure,
                            mobile_1: _this2.fetchPreschoolStepOne.residence_phone,
                            mobile_2: _this2.fetchPreschoolStepOne.emg_number,
                            mother_tonge: _this2.fetchPreschoolStepOne.mother_tongue,
                            other_languages: _this2.fetchPreschoolStepOne.other_lang,
                            nationality: _this2.fetchPreschoolStepOne.nationality,
                            "class": _this2.fetchPreschoolStepOne["class"]
                          });

                          _this2.isDataPresent = true;

                          _this2.loadingController.dismiss();
                        } else {
                          _this2.isDataPresent = false;

                          _this2.loadingController.dismiss();
                        }
                      });
                    } else {
                      _this2.isDataPresent = false;

                      _this2.loadingController.dismiss();
                    }
                  });
                } else {
                  _this2.loadingController.dismiss();

                  _this2.isDataPresent = false;
                  _this2.isLoggedIn = false;

                  _this2.preschoolRegForm.reset();
                }
              });

              _this2.apiService.getBranches().then(function (data) {
                _this2.branches = JSON.parse(data.data);
              });
            });
          }
        }, {
          key: "branch_id",
          get: function get() {
            return this.preschoolRegForm.get('branch_id');
          }
        }, {
          key: "child_name",
          get: function get() {
            return this.preschoolRegForm.get('child_name');
          }
        }, {
          key: "pet_name",
          get: function get() {
            return this.preschoolRegForm.get('pet_name');
          }
        }, {
          key: "gender",
          get: function get() {
            return this.preschoolRegForm.get('gender');
          }
        }, {
          key: "d_o_b",
          get: function get() {
            return this.preschoolRegForm.get('d_o_b');
          } // get dob_words(){
          //   return this.preschoolRegForm.get('dob_words')
          // }
          // get figures(){
          //   return this.preschoolRegForm.get('figures')
          // }

        }, {
          key: "mobile_1",
          get: function get() {
            return this.preschoolRegForm.get('mobile_1');
          }
        }, {
          key: "mobile_2",
          get: function get() {
            return this.preschoolRegForm.get('mobile_2');
          }
        }, {
          key: "mother_tonge",
          get: function get() {
            return this.preschoolRegForm.get('mother_tonge');
          }
        }, {
          key: "other_languages",
          get: function get() {
            return this.preschoolRegForm.get('other_languages');
          }
        }, {
          key: "nationality",
          get: function get() {
            return this.preschoolRegForm.get('nationality');
          }
        }, {
          key: "class",
          get: function get() {
            return this.preschoolRegForm.get('class');
          }
        }, {
          key: "presentActionSheet",
          value: function presentActionSheet() {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/_regeneratorRuntime().mark(function _callee2() {
              var _this3 = this;

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
                          _this3.takePicture('child');
                        }
                      }, {
                        text: 'Choose photo from Gallery',
                        icon: 'images-outline',
                        handler: function handler() {
                          _this3.openGallery('child');
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
          value: function takePicture(type) {
            var _this4 = this;

            var options = {
              quality: 70,
              destinationType: this.camera.DestinationType.FILE_URI,
              encodingType: this.camera.EncodingType.JPEG,
              mediaType: this.camera.MediaType.PICTURE,
              correctOrientation: true
            };
            this.camera.getPicture(options).then(function (imageData) {
              _this4.file.resolveLocalFilesystemUrl(imageData).then(function (entry) {
                entry.file(function (file) {
                  console.log(file);
                  _this4.childbase64Image = window.Ionic.WebView.convertFileSrc(imageData);

                  _this4.cf.detectChanges();

                  _this4.readFile(file, type);
                });
              });
            }, function (err) {
              _this4.childbase64Image = null;
            });
          }
        }, {
          key: "openGallery",
          value: function openGallery(type) {
            var _this5 = this;

            var options = {
              quality: 70,
              destinationType: this.camera.DestinationType.FILE_URI,
              encodingType: this.camera.EncodingType.JPEG,
              mediaType: this.camera.MediaType.PICTURE,
              correctOrientation: true,
              sourceType: this.camera.PictureSourceType.PHOTOLIBRARY
            };
            this.camera.getPicture(options).then(function (imageData) {
              _this5.file.resolveLocalFilesystemUrl(imageData).then(function (entry) {
                entry.file(function (file) {
                  console.log('file', file);
                  _this5.childbase64Image = window.Ionic.WebView.convertFileSrc(imageData);

                  _this5.cf.detectChanges();

                  _this5.readFile(file, type);
                });
              });
            }, function (err) {// Handle error
            });
          }
        }, {
          key: "readFile",
          value: function readFile(file, type) {
            var _this6 = this;

            var reader = new FileReader();

            reader.onloadend = function () {
              _this6.childimgBlob = new Blob([reader.result], {
                type: file.type
              });
              console.log('child_file_name', _this6.child_file_name);
              _this6.child_file_name = file.name;
            };

            reader.readAsArrayBuffer(file);
          }
        }, {
          key: "previousTab",
          value: function previousTab(value) {
            this.value = value;
          }
        }, {
          key: "presentAlert",
          value: function presentAlert(message) {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/_regeneratorRuntime().mark(function _callee3() {
              var _this7 = this;

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
                          if (_this7.isLoggedIn) {
                            if (_this7.userType == 'Preschool') {
                              // this.router.navigate(['quicktour'])
                              _this7.router.navigate(['parentsinfo']);
                            } else {
                              // this.storage.set('type','login').then(_=>{
                              //   this.router.navigate(['login']);
                              //   });
                              _this7.router.navigate(['switchprofile']);
                            }
                          } else {
                            _this7.storage.set('type', 'login').then(function (_) {
                              _this7.router.navigate(['login']);
                            });
                          }
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
          key: "goBack",
          value: function goBack() {
            if (this.isLoggedIn) {
              if (this.isApproved) {
                this.router.navigate(['quicktour']);
              } else {
                if (this.userType == 'Preschool') {
                  this.apiService.presentToast('Please wait for your registration approval', 3000);
                } else {
                  this.router.navigate(['quicktour']);
                }
              }
            } else {
              this.router.navigate(['login']);
            }
          }
        }, {
          key: "ionViewDidLeave",
          value: function ionViewDidLeave() {
            this.menuCtrl.enable(true);
          }
        }, {
          key: "goToStep2",
          value: function goToStep2() {
            if (this.isFormSubmitted) {
              this.router.navigateByUrl('/parentsinfo');
            } else {
              this.apiService.presentToast('Please submit Registration Form to go next step', 3000);
            }
          }
        }, {
          key: "goToStep3",
          value: function goToStep3() {
            if (this.isFormSubmitted) {
              this.router.navigateByUrl('/preschoolotherform');
            } else {
              this.apiService.presentToast('Please submit Registration Form to go next step', 3000);
            }
          }
        }, {
          key: "doRefresh",
          value: function doRefresh(event) {
            var _this8 = this;

            this.menuCtrl.enable(false);
            this.presentLoading().then(function () {
              _this8.apiService.fetchFeeColumn().then(function (data) {
                console.log(data);
                _this8.columns = JSON.parse(data.data);
              })["catch"](function (err) {
                console.log(err, err);
              });

              _this8.storage.get('user').then(function (data) {
                if (data) {
                  var user = JSON.parse(data);
                  _this8.isLoggedIn = true;
                  _this8.userid = user.userid;

                  _this8.storage.get('userType').then(function (userType) {
                    _this8.userType = userType;

                    if (_this8.userType == 'Preschool') {
                      _this8.apiService.userDetails(user.id, userType).then(function (data) {
                        event.target.complete();
                        console.log('fetchPreschoolStepOne', data.data);
                        _this8.fetchPreschoolStepOne = JSON.parse(data.data);

                        if (_this8.fetchPreschoolStepOne.id) {
                          if (_this8.fetchPreschoolStepOne.status == 'Active' && _this8.fetchPreschoolStepOne.Approve_status == 'Active') {
                            _this8.isApproved = true;
                          }

                          _this8.isFormSubmitted = true;
                          _this8.child_image = _this8.fetchPreschoolStepOne.child_img;
                          _this8.id = _this8.fetchPreschoolStepOne.id;
                          _this8.isDisabled = true;
                          _this8.old_image = _this8.fetchPreschoolStepOne.child_image;

                          _this8.preschoolRegForm.patchValue({
                            branch_id: _this8.fetchPreschoolStepOne.branch_id,
                            child_name: _this8.fetchPreschoolStepOne.child_name,
                            pet_name: _this8.fetchPreschoolStepOne.pet_name,
                            gender: _this8.fetchPreschoolStepOne.gender,
                            d_o_b: _this8.fetchPreschoolStepOne.dob,
                            //'dob_words':this.fetchPreschoolStepOne.dob_in_words,
                            // 'figures':this.fetchPreschoolStepOne.dob_in_figure,
                            mobile_1: _this8.fetchPreschoolStepOne.residence_phone,
                            mobile_2: _this8.fetchPreschoolStepOne.emg_number,
                            mother_tonge: _this8.fetchPreschoolStepOne.mother_tongue,
                            other_languages: _this8.fetchPreschoolStepOne.other_lang,
                            nationality: _this8.fetchPreschoolStepOne.nationality,
                            "class": _this8.fetchPreschoolStepOne["class"]
                          });

                          _this8.isDataPresent = true;

                          _this8.loadingController.dismiss();
                        } else {
                          event.target.complete();
                          _this8.isDataPresent = false;

                          _this8.loadingController.dismiss();
                        }
                      });
                    } else {
                      _this8.isDataPresent = false;

                      _this8.loadingController.dismiss();
                    }
                  });
                } else {
                  event.target.complete();

                  _this8.loadingController.dismiss();

                  _this8.isDataPresent = false;
                  _this8.isLoggedIn = false;

                  _this8.preschoolRegForm.reset();
                }
              });

              _this8.apiService.getBranches().then(function (data) {
                _this8.branches = JSON.parse(data.data);
              });
            });
          }
        }]);

        return PreschoolformPage;
      }();

      PreschoolformPage.ctorParameters = function () {
        return [{
          type: _ionic_storage__WEBPACK_IMPORTED_MODULE_6__["Storage"]
        }, {
          type: _api_service__WEBPACK_IMPORTED_MODULE_5__["ApiService"]
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_9__["ActionSheetController"]
        }, {
          type: _ionic_native_file_ngx__WEBPACK_IMPORTED_MODULE_11__["File"]
        }, {
          type: _ionic_native_camera_ngx__WEBPACK_IMPORTED_MODULE_10__["Camera"]
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_8__["ChangeDetectorRef"]
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_9__["AlertController"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_9__["LoadingController"]
        }, {
          type: _angular_common__WEBPACK_IMPORTED_MODULE_3__["Location"]
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_9__["MenuController"]
        }];
      };

      PreschoolformPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_8__["Component"])({
        selector: 'app-preschoolform',
        template: _raw_loader_preschoolform_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_preschoolform_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
      })], PreschoolformPage);
      /***/
    }
  }]);
})();
//# sourceMappingURL=preschoolform-preschoolform-module-es5.js.map