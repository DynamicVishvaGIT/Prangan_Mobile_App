(function () {
  function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return e; }; var t, e = {}, r = Object.prototype, n = r.hasOwnProperty, o = Object.defineProperty || function (t, e, r) { t[e] = r.value; }, i = "function" == typeof Symbol ? Symbol : {}, a = i.iterator || "@@iterator", c = i.asyncIterator || "@@asyncIterator", u = i.toStringTag || "@@toStringTag"; function define(t, e, r) { return Object.defineProperty(t, e, { value: r, enumerable: !0, configurable: !0, writable: !0 }), t[e]; } try { define({}, ""); } catch (t) { define = function define(t, e, r) { return t[e] = r; }; } function wrap(t, e, r, n) { var i = e && e.prototype instanceof Generator ? e : Generator, a = Object.create(i.prototype), c = new Context(n || []); return o(a, "_invoke", { value: makeInvokeMethod(t, r, c) }), a; } function tryCatch(t, e, r) { try { return { type: "normal", arg: t.call(e, r) }; } catch (t) { return { type: "throw", arg: t }; } } e.wrap = wrap; var h = "suspendedStart", l = "suspendedYield", f = "executing", s = "completed", y = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var p = {}; define(p, a, function () { return this; }); var d = Object.getPrototypeOf, v = d && d(d(values([]))); v && v !== r && n.call(v, a) && (p = v); var g = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(p); function defineIteratorMethods(t) { ["next", "throw", "return"].forEach(function (e) { define(t, e, function (t) { return this._invoke(e, t); }); }); } function AsyncIterator(t, e) { function invoke(r, o, i, a) { var c = tryCatch(t[r], t, o); if ("throw" !== c.type) { var u = c.arg, h = u.value; return h && "object" == typeof h && n.call(h, "__await") ? e.resolve(h.__await).then(function (t) { invoke("next", t, i, a); }, function (t) { invoke("throw", t, i, a); }) : e.resolve(h).then(function (t) { u.value = t, i(u); }, function (t) { return invoke("throw", t, i, a); }); } a(c.arg); } var r; o(this, "_invoke", { value: function value(t, n) { function callInvokeWithMethodAndArg() { return new e(function (e, r) { invoke(t, n, e, r); }); } return r = r ? r.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); } }); } function makeInvokeMethod(e, r, n) { var o = h; return function (i, a) { if (o === f) throw new Error("Generator is already running"); if (o === s) { if ("throw" === i) throw a; return { value: t, done: !0 }; } for (n.method = i, n.arg = a;;) { var c = n.delegate; if (c) { var u = maybeInvokeDelegate(c, n); if (u) { if (u === y) continue; return u; } } if ("next" === n.method) n.sent = n._sent = n.arg;else if ("throw" === n.method) { if (o === h) throw o = s, n.arg; n.dispatchException(n.arg); } else "return" === n.method && n.abrupt("return", n.arg); o = f; var p = tryCatch(e, r, n); if ("normal" === p.type) { if (o = n.done ? s : l, p.arg === y) continue; return { value: p.arg, done: n.done }; } "throw" === p.type && (o = s, n.method = "throw", n.arg = p.arg); } }; } function maybeInvokeDelegate(e, r) { var n = r.method, o = e.iterator[n]; if (o === t) return r.delegate = null, "throw" === n && e.iterator["return"] && (r.method = "return", r.arg = t, maybeInvokeDelegate(e, r), "throw" === r.method) || "return" !== n && (r.method = "throw", r.arg = new TypeError("The iterator does not provide a '" + n + "' method")), y; var i = tryCatch(o, e.iterator, r.arg); if ("throw" === i.type) return r.method = "throw", r.arg = i.arg, r.delegate = null, y; var a = i.arg; return a ? a.done ? (r[e.resultName] = a.value, r.next = e.nextLoc, "return" !== r.method && (r.method = "next", r.arg = t), r.delegate = null, y) : a : (r.method = "throw", r.arg = new TypeError("iterator result is not an object"), r.delegate = null, y); } function pushTryEntry(t) { var e = { tryLoc: t[0] }; 1 in t && (e.catchLoc = t[1]), 2 in t && (e.finallyLoc = t[2], e.afterLoc = t[3]), this.tryEntries.push(e); } function resetTryEntry(t) { var e = t.completion || {}; e.type = "normal", delete e.arg, t.completion = e; } function Context(t) { this.tryEntries = [{ tryLoc: "root" }], t.forEach(pushTryEntry, this), this.reset(!0); } function values(e) { if (e || "" === e) { var r = e[a]; if (r) return r.call(e); if ("function" == typeof e.next) return e; if (!isNaN(e.length)) { var o = -1, i = function next() { for (; ++o < e.length;) if (n.call(e, o)) return next.value = e[o], next.done = !1, next; return next.value = t, next.done = !0, next; }; return i.next = i; } } throw new TypeError(typeof e + " is not iterable"); } return GeneratorFunction.prototype = GeneratorFunctionPrototype, o(g, "constructor", { value: GeneratorFunctionPrototype, configurable: !0 }), o(GeneratorFunctionPrototype, "constructor", { value: GeneratorFunction, configurable: !0 }), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, u, "GeneratorFunction"), e.isGeneratorFunction = function (t) { var e = "function" == typeof t && t.constructor; return !!e && (e === GeneratorFunction || "GeneratorFunction" === (e.displayName || e.name)); }, e.mark = function (t) { return Object.setPrototypeOf ? Object.setPrototypeOf(t, GeneratorFunctionPrototype) : (t.__proto__ = GeneratorFunctionPrototype, define(t, u, "GeneratorFunction")), t.prototype = Object.create(g), t; }, e.awrap = function (t) { return { __await: t }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, c, function () { return this; }), e.AsyncIterator = AsyncIterator, e.async = function (t, r, n, o, i) { void 0 === i && (i = Promise); var a = new AsyncIterator(wrap(t, r, n, o), i); return e.isGeneratorFunction(r) ? a : a.next().then(function (t) { return t.done ? t.value : a.next(); }); }, defineIteratorMethods(g), define(g, u, "Generator"), define(g, a, function () { return this; }), define(g, "toString", function () { return "[object Generator]"; }), e.keys = function (t) { var e = Object(t), r = []; for (var n in e) r.push(n); return r.reverse(), function next() { for (; r.length;) { var t = r.pop(); if (t in e) return next.value = t, next.done = !1, next; } return next.done = !0, next; }; }, e.values = values, Context.prototype = { constructor: Context, reset: function reset(e) { if (this.prev = 0, this.next = 0, this.sent = this._sent = t, this.done = !1, this.delegate = null, this.method = "next", this.arg = t, this.tryEntries.forEach(resetTryEntry), !e) for (var r in this) "t" === r.charAt(0) && n.call(this, r) && !isNaN(+r.slice(1)) && (this[r] = t); }, stop: function stop() { this.done = !0; var t = this.tryEntries[0].completion; if ("throw" === t.type) throw t.arg; return this.rval; }, dispatchException: function dispatchException(e) { if (this.done) throw e; var r = this; function handle(n, o) { return a.type = "throw", a.arg = e, r.next = n, o && (r.method = "next", r.arg = t), !!o; } for (var o = this.tryEntries.length - 1; o >= 0; --o) { var i = this.tryEntries[o], a = i.completion; if ("root" === i.tryLoc) return handle("end"); if (i.tryLoc <= this.prev) { var c = n.call(i, "catchLoc"), u = n.call(i, "finallyLoc"); if (c && u) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } else if (c) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); } else { if (!u) throw new Error("try statement without catch or finally"); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } } } }, abrupt: function abrupt(t, e) { for (var r = this.tryEntries.length - 1; r >= 0; --r) { var o = this.tryEntries[r]; if (o.tryLoc <= this.prev && n.call(o, "finallyLoc") && this.prev < o.finallyLoc) { var i = o; break; } } i && ("break" === t || "continue" === t) && i.tryLoc <= e && e <= i.finallyLoc && (i = null); var a = i ? i.completion : {}; return a.type = t, a.arg = e, i ? (this.method = "next", this.next = i.finallyLoc, y) : this.complete(a); }, complete: function complete(t, e) { if ("throw" === t.type) throw t.arg; return "break" === t.type || "continue" === t.type ? this.next = t.arg : "return" === t.type ? (this.rval = this.arg = t.arg, this.method = "return", this.next = "end") : "normal" === t.type && e && (this.next = e), y; }, finish: function finish(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.finallyLoc === t) return this.complete(r.completion, r.afterLoc), resetTryEntry(r), y; } }, "catch": function _catch(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.tryLoc === t) { var n = r.completion; if ("throw" === n.type) { var o = n.arg; resetTryEntry(r); } return o; } } throw new Error("illegal catch attempt"); }, delegateYield: function delegateYield(e, r, n) { return this.delegate = { iterator: values(e), resultName: r, nextLoc: n }, "next" === this.method && (this.arg = t), y; } }, e; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

  function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return typeof key === "symbol" ? key : String(key); }

  function _toPrimitive(input, hint) { if (typeof input !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (typeof res !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["default~addmedicine-addmedicine-module~editmedicine-editmedicine-module"], {
    /***/
    "/viP":
    /*!*****************************************************!*\
      !*** ./src/app/editmedicine/editmedicine.page.scss ***!
      \*****************************************************/

    /*! exports provided: default */

    /***/
    function viP(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "@charset \"UTF-8\";\nform {\n  margin: 16px;\n}\n.step {\n  color: #a2a2a2;\n  font-size: 16px;\n  margin-left: 16px;\n  font-family: initial;\n  margin-bottom: 2px;\n  font-weight: bold;\n}\n.step-heading {\n  color: #fdd653;\n  margin-left: 16px;\n  font-family: initial;\n  font-size: 30px;\n  margin-top: 0;\n  font-weight: bold;\n  text-decoration: underline;\n  text-decoration-thickness: 2px;\n}\n.wrap {\n  text-align: center;\n  position: relative;\n}\n.wrap:before {\n  content: \"\";\n  position: absolute;\n  top: 20%;\n  left: 18%;\n  border-top: 0.5px solid #677483;\n  border-width: thin;\n  width: 65%;\n  transform: translateY(-50%);\n  border-style: dashed;\n}\n.active {\n  background: #fdd653;\n  color: #ffffff;\n}\n.icon-circle {\n  position: relative;\n  display: inline-block;\n  margin: -1px;\n  width: 30px;\n  height: 30px;\n  font-size: 26px;\n  border-radius: 50%;\n  border: 1px solid #202020;\n  background: #fff;\n  color: #202020;\n  text-align: center;\n}\n.icon-circle ion-icon {\n  margin-top: 2px;\n  font-size: 20px;\n}\n.heading-1 {\n  color: #676767;\n  margin-bottom: 0;\n  font-size: 16px;\n}\n.heading {\n  color: #9b9ca6;\n  margin-bottom: 0;\n  font-size: 14px;\n}\nion-label {\n  color: #9b9ca6;\n  font-size: 14px;\n}\nion-input {\n  border: 1px solid #9b9ca6;\n  border-radius: 5px;\n  --padding-start: 5px !important;\n  height: 35px;\n}\nion-textarea {\n  border: 1px solid #9b9ca6;\n  border-radius: 5px;\n  --padding-start: 5px !important;\n}\nion-datetime {\n  border: 1px solid #9b9ca6;\n  border-radius: 5px;\n  --padding-start: 5px !important;\n  width: 100%;\n  height: 35px;\n}\nion-item {\n  --padding-start: 0;\n  --ripple-color: transparent;\n  --background-activated: transparent;\n  --background-activated-opacity:transparent;\n  --background-focused: transparent;\n  --background-focused-opacity:transparent;\n  --background-hover: transparent;\n  --background-hover-opacity:transparent;\n}\nion-item ion-label {\n  font-size: 12px;\n  color: #9b9ca6;\n}\nion-radio-group ion-item {\n  border-bottom: 0;\n}\nion-radio-group ion-col {\n  padding-left: 0;\n}\nion-radio-group ion-radio {\n  margin-right: 8px;\n  width: 18px;\n  height: 18px;\n}\nion-col {\n  padding-left: 0;\n}\nion-button {\n  text-transform: none;\n}\n.choose-btn {\n  --background: #ee4a35;\n  --color:#fff;\n}\n.heading-3 {\n  margin-top: 12px;\n  color: #929791;\n}\n.admission-row ion-col {\n  text-align: center;\n  text-align: -moz-center;\n}\n.admission-row ion-col ion-button {\n  text-transform: none;\n  width: 40%;\n}\n.btn-row ion-col {\n  text-align: center;\n  text-align: -moz-center;\n}\n.btn-row ion-col ion-button {\n  text-transform: none;\n  width: 75%;\n}\n.next-btn-col {\n  text-align: left !important;\n}\nion-segment-button {\n  text-transform: none;\n}\nimg {\n  width: 60%;\n}\n.tabs {\n  border-radius: 0;\n  overflow: hidden;\n  box-shadow: 0 4px 4px -2px rgba(0, 0, 0, 0.5);\n}\n#chck1 {\n  position: absolute;\n  opacity: 0;\n  z-index: -1;\n}\n.tab {\n  width: 100%;\n  color: white;\n  overflow: hidden;\n}\n.tab-label {\n  display: flex;\n  justify-content: space-between;\n  padding: 1em;\n  background: #2c3e50;\n  font-weight: bold;\n  cursor: pointer;\n  /* Icon */\n}\n.tab-label:hover {\n  background: #1a252f;\n}\n.tab-label::after {\n  content: \"❯\";\n  width: 1em;\n  height: 1em;\n  text-align: center;\n  transition: all 0.35s;\n}\n.tab-content {\n  max-height: 0;\n  padding: 0 1em;\n  color: #2c3e50;\n  background: white;\n  transition: all 0.35s;\n}\n.tab-close {\n  display: flex;\n  justify-content: flex-end;\n  padding: 1em;\n  font-size: 0.75em;\n  background: #2c3e50;\n  cursor: pointer;\n}\n.tab-close:hover {\n  background: #1a252f;\n}\n#chck1:checked + .tab-label {\n  background: #1a252f;\n}\n#chck1:checked + .tab-label::after {\n  transform: rotate(90deg);\n}\n#chck1:checked ~ .tab-content {\n  max-height: 100vh;\n  padding: 1em;\n}\n.inside-body {\n  padding: 25px;\n}\n.list-group.vertical-steps .list-group-item {\n  border: none;\n  border-left: 3px solid #b4b4b4;\n  box-sizing: border-box;\n  border-radius: 0;\n  counter-increment: step-counter;\n  padding-left: 20px;\n  padding-right: 0px;\n  padding-bottom: 7px;\n  padding-top: 0px;\n}\n.list-group.vertical-steps .list-group-item::before {\n  border-radius: 50%;\n  background-color: #b4b4b4;\n  color: #fff;\n  content: counter(step-counter);\n  display: inline-block;\n  float: left;\n  height: 25px;\n  line-height: 25px;\n  margin-left: -35px;\n  text-align: center;\n  width: 25px;\n}\n.list-group.vertical-steps .final::before {\n  border-radius: 50%;\n  background-color: #b4b4b4;\n  color: #fff;\n  content: counter(step-counter);\n  display: inline-block;\n  float: left;\n  height: 25px;\n  line-height: 25px;\n  margin-left: -32px;\n  text-align: center;\n  width: 25px;\n}\n.final {\n  border-left: none !important;\n}\n.list-group.vertical-steps .step-active::before {\n  border-radius: 50%;\n  background-color: #2dd36f;\n  color: #fff;\n  content: counter(step-counter);\n  display: inline-block;\n  float: left;\n  height: 25px;\n  line-height: 25px;\n  margin-left: -35px;\n  text-align: center;\n  width: 25px;\n}\n.list-group.vertical-steps .list-group-item span, .list-group.vertical-steps .list-group-item a {\n  display: block;\n  overflow: hidden;\n  padding-top: 2px;\n}\ndiv.reusable_accordion {\n  z-index: 99;\n  padding: 0;\n  margin: 0;\n  list-style: none;\n  display: flex;\n  flex-wrap: wrap;\n  flex-direction: column;\n  justify-content: space-around;\n  line-height: 25px;\n  height: 180px;\n  background: #f1f1f1;\n  width: auto;\n}\ndiv.template_accordion div.template_containers {\n  display: flex;\n  min-width: 45%;\n  min-height: 60px;\n  background: white;\n  flex-direction: row;\n  margin: 5px;\n  justify-content: center;\n  align-content: center;\n}\n.toggle_button {\n  --background: #f1f1f1;\n  width: 100%;\n  text-align: center;\n  padding: 0;\n  color: #202020;\n  cursor: pointer;\n  min-width: 100%;\n}\n.toggle_button ion-label {\n  font-size: 16px;\n  color: #202020;\n  text-align: left;\n  margin-left: 20px;\n  font-weight: bold;\n}\ndiv.accordion-container {\n  overflow: hidden;\n  overflow-y: scroll;\n  transition: max-height 0.5s ease-in-out;\n  height: auto;\n  background: #1f2b37;\n}\ndiv.accordion-container.collapsed {\n  max-height: 0 !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL2VkaXRtZWRpY2luZS5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsZ0JBQWdCO0FBR2hCO0VBQ0ksWUFBQTtBQURKO0FBR0E7RUFDSSxjQUFBO0VBQ0EsZUFBQTtFQUNBLGlCQUFBO0VBQ0Esb0JBQUE7RUFDQSxrQkFBQTtFQUNBLGlCQUFBO0FBQUo7QUFFQTtFQUNJLGNBQUE7RUFDQSxpQkFBQTtFQUNBLG9CQUFBO0VBQ0EsZUFBQTtFQUNBLGFBQUE7RUFDQSxpQkFBQTtFQUNBLDBCQUFBO0VBQ0EsOEJBQUE7QUFDSjtBQUNBO0VBQ0ksa0JBQUE7RUFDQSxrQkFBQTtBQUVKO0FBQ0U7RUFDRSxXQUFBO0VBQ0Esa0JBQUE7RUFDQSxRQUFBO0VBQ0EsU0FBQTtFQUNBLCtCQUFBO0VBQ0Esa0JBQUE7RUFDQSxVQUFBO0VBQ0EsMkJBQUE7RUFDQSxvQkFBQTtBQUVKO0FBQUU7RUFDRSxtQkFBQTtFQUNBLGNBQUE7QUFHSjtBQURFO0VBQ0Usa0JBQUE7RUFDQSxxQkFBQTtFQUNBLFlBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGVBQUE7RUFDQSxrQkFBQTtFQUNBLHlCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxjQUFBO0VBQ0Esa0JBQUE7QUFJSjtBQUZJO0VBQ0ksZUFBQTtFQUNBLGVBQUE7QUFJUjtBQUVFO0VBQ0UsY0FBQTtFQUNBLGdCQUFBO0VBQ0EsZUFBQTtBQUNKO0FBQ0E7RUFDSSxjQUFBO0VBQ0EsZ0JBQUE7RUFDQSxlQUFBO0FBRUo7QUFBQTtFQUNJLGNBQUE7RUFDQSxlQUFBO0FBR0o7QUFEQTtFQUNJLHlCQUFBO0VBQ0Esa0JBQUE7RUFDQSwrQkFBQTtFQUNBLFlBQUE7QUFJSjtBQUZBO0VBQ0kseUJBQUE7RUFDQSxrQkFBQTtFQUNBLCtCQUFBO0FBS0o7QUFIQTtFQUNJLHlCQUFBO0VBQ0Esa0JBQUE7RUFDQSwrQkFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0FBTUo7QUFIQTtFQUVJLGtCQUFBO0VBQ0Es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QkFBQTtBQVFKO0FBSkE7RUFDRSxxQkFBQTtFQUNBLFdBQUE7RUFDQSxrQkFBQTtFQUNBLFVBQUE7RUFDQSxjQUFBO0VBQ0EsZUFBQTtFQUNBLGVBQUE7QUFPRjtBQU5FO0VBQ0UsZUFBQTtFQUNBLGNBQUE7RUFDQSxnQkFBQTtFQUNBLGlCQUFBO0VBQ0EsaUJBQUE7QUFRSjtBQUxBO0VBQ0UsZ0JBQUE7RUFDQSxrQkFBQTtFQUNBLHVDQUFBO0VBQ0EsWUFBQTtFQUNBLG1CQUFBO0FBUUY7QUFMQTtFQUNFLHdCQUFBO0FBUUYiLCJmaWxlIjoiZWRpdG1lZGljaW5lLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIlxyXG4kbWlkbmlnaHQ6ICMyYzNlNTA7XHJcbiRjbG91ZHM6ICNlY2YwZjE7XHJcbmZvcm17XHJcbiAgICBtYXJnaW46IDE2cHg7XHJcbn1cclxuLnN0ZXB7XHJcbiAgICBjb2xvcjogI2EyYTJhMjtcclxuICAgIGZvbnQtc2l6ZTogMTZweDtcclxuICAgIG1hcmdpbi1sZWZ0OiAxNnB4O1xyXG4gICAgZm9udC1mYW1pbHk6IGluaXRpYWw7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAycHg7XHJcbiAgICBmb250LXdlaWdodDogYm9sZDtcclxufVxyXG4uc3RlcC1oZWFkaW5ne1xyXG4gICAgY29sb3I6ICNmZGQ2NTM7XHJcbiAgICBtYXJnaW4tbGVmdDogMTZweDtcclxuICAgIGZvbnQtZmFtaWx5OiBpbml0aWFsO1xyXG4gICAgZm9udC1zaXplOiAzMHB4O1xyXG4gICAgbWFyZ2luLXRvcDogMDtcclxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gICAgdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmU7XHJcbiAgICB0ZXh0LWRlY29yYXRpb24tdGhpY2tuZXNzOiAycHg7XHJcbn1cclxuLndyYXAge1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gIH1cclxuICBcclxuICAud3JhcDpiZWZvcmUge1xyXG4gICAgY29udGVudDogXCJcIjtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIHRvcDogMjAlO1xyXG4gICAgbGVmdDogMTglO1xyXG4gICAgYm9yZGVyLXRvcDogMC41cHggc29saWQgIzY3NzQ4MztcclxuICAgIGJvcmRlci13aWR0aDogdGhpbjtcclxuICAgIHdpZHRoOiA2NSU7XHJcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTUwJSk7XHJcbiAgICBib3JkZXItc3R5bGU6IGRhc2hlZDtcclxuICB9XHJcbiAgLmFjdGl2ZXtcclxuICAgIGJhY2tncm91bmQ6ICNmZGQ2NTM7XHJcbiAgICBjb2xvcjogI2ZmZmZmZjtcclxuICB9XHJcbiAgLmljb24tY2lyY2xle1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gICAgbWFyZ2luOiAtMXB4O1xyXG4gICAgd2lkdGg6IDMwcHg7XHJcbiAgICBoZWlnaHQ6IDMwcHg7XHJcbiAgICBmb250LXNpemU6IDI2cHg7XHJcbiAgICBib3JkZXItcmFkaXVzOiA1MCU7XHJcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjMjAyMDIwO1xyXG4gICAgYmFja2dyb3VuZDogI2ZmZjtcclxuICAgIGNvbG9yOiAjMjAyMDIwO1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG5cclxuICAgIGlvbi1pY29ue1xyXG4gICAgICAgIG1hcmdpbi10b3A6IDJweDtcclxuICAgICAgICBmb250LXNpemU6IDIwcHg7XHJcbiAgICB9XHJcbiAgXHJcbiAgfVxyXG4gIFxyXG4gIFxyXG4gIC5oZWFkaW5nLTF7XHJcbiAgICBjb2xvcjogIzY3Njc2NztcclxuICAgIG1hcmdpbi1ib3R0b206IDA7XHJcbiAgICBmb250LXNpemU6IDE2cHg7XHJcbn1cclxuLmhlYWRpbmd7XHJcbiAgICBjb2xvcjogIzliOWNhNjtcclxuICAgIG1hcmdpbi1ib3R0b206IDA7XHJcbiAgICBmb250LXNpemU6IDE0cHg7XHJcbn1cclxuaW9uLWxhYmVse1xyXG4gICAgY29sb3I6ICM5YjljYTY7XHJcbiAgICBmb250LXNpemU6IDE0cHg7XHJcbn1cclxuaW9uLWlucHV0IHtcclxuICAgIGJvcmRlcjogMXB4IHNvbGlkICM5YjljYTY7XHJcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XHJcbiAgICAtLXBhZGRpbmctc3RhcnQ6IDVweCAhaW1wb3J0YW50O1xyXG4gICAgaGVpZ2h0OjM1cHg7XHJcbn1cclxuaW9uLXRleHRhcmVhe1xyXG4gICAgYm9yZGVyOiAxcHggc29saWQgIzliOWNhNjtcclxuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcclxuICAgIC0tcGFkZGluZy1zdGFydDogNXB4ICFpbXBvcnRhbnQ7XHJcbn1cclxuaW9uLWRhdGV0aW1le1xyXG4gICAgYm9yZGVyOiAxcHggc29saWQgIzliOWNhNjtcclxuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcclxuICAgIC0tcGFkZGluZy1zdGFydDogNXB4ICFpbXBvcnRhbnQ7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGhlaWdodDozNXB4O1xyXG5cclxufVxyXG5pb24taXRlbXtcclxuICAgIC8vIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjNjc3NDgzO1xyXG4gICAgLS1wYWRkaW5nLXN0YXJ0OiAwO1xyXG4gICAgLS1yaXBwbGUtY29sb3I6IHRyYW5zcGFyZW50O1xyXG4gICAgLS1iYWNrZ3JvdW5kLWFjdGl2YXRlZDogdHJhbnNwYXJlbnQ7XHJcbiAgICAtLWJhY2tncm91bmQtYWN0aXZhdGVkLW9wYWNpdHk6dHJhbnNwYXJlbnQ7XHJcbiAgICAtLWJhY2tncm91bmQtZm9jdXNlZDogdHJhbnNwYXJlbnQ7XHJcbiAgICAtLWJhY2tncm91bmQtZm9jdXNlZC1vcGFjaXR5OnRyYW5zcGFyZW50O1xyXG4gICAgLS1iYWNrZ3JvdW5kLWhvdmVyICA6IHRyYW5zcGFyZW50O1xyXG4gICAgLS1iYWNrZ3JvdW5kLWhvdmVyLW9wYWNpdHkgIDp0cmFuc3BhcmVudDtcclxuXHJcbiAgICBpb24tbGFiZWwge1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMTJweDtcclxuICAgICAgICBjb2xvcjogIzliOWNhNjtcclxuXHJcbiAgICB9XHJcbn1cclxuICAgIGlvbi1yYWRpby1ncm91cHtcclxuICAgICAgICBpb24taXRlbXtcclxuICAgICAgICAgICAgYm9yZGVyLWJvdHRvbTogMDtcclxuICAgICAgICB9XHJcbiAgICAgICAgaW9uLWNvbCB7XHJcbiAgICAgICAgICAgIHBhZGRpbmctbGVmdDogMDtcclxuICAgICAgICB9XHJcbiAgICAgICAgaW9uLXJhZGlve1xyXG4gICAgICAgIG1hcmdpbi1yaWdodDogOHB4O1xyXG4gICAgICAgIHdpZHRoOiAxOHB4O1xyXG4gICAgICAgIGhlaWdodDogMThweDtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgaW9uLWNvbCB7XHJcbiAgICAgICAgcGFkZGluZy1sZWZ0OiAwO1xyXG4gICAgfVxyXG5cclxuICAgIGlvbi1idXR0b24ge1xyXG4gICAgICAgIHRleHQtdHJhbnNmb3JtOiBub25lO1xyXG4gICAgfVxyXG4gICAgXHJcbiAgICAuY2hvb3NlLWJ0bntcclxuICAgICAgICAtLWJhY2tncm91bmQ6ICNlZTRhMzU7XHJcbiAgICAgICAgLS1jb2xvcjojZmZmO1xyXG4gICAgfVxyXG4gICAgLmhlYWRpbmctM3tcclxuICAgICAgICBtYXJnaW4tdG9wOiAxMnB4O1xyXG4gICAgICAgIGNvbG9yOiAjOTI5NzkxO1xyXG4gICAgfVxyXG4gICAgLmFkbWlzc2lvbi1yb3d7XHJcbiAgICAgICAgaW9uLWNvbHtcclxuICAgICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgICAgICAgICB0ZXh0LWFsaWduOiAtbW96LWNlbnRlcjtcclxuICAgICAgICAgICAgaW9uLWJ1dHRvbntcclxuICAgICAgICAgICAgICAgIHRleHQtdHJhbnNmb3JtOiBub25lO1xyXG4gICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgIHdpZHRoOiA0MCU7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgLmJ0bi1yb3d7XHJcbiAgICAgICAgaW9uLWNvbHtcclxuICAgICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgICAgICAgICB0ZXh0LWFsaWduOiAtbW96LWNlbnRlcjtcclxuICAgICAgICAgICAgaW9uLWJ1dHRvbntcclxuICAgICAgICAgICAgICAgIHRleHQtdHJhbnNmb3JtOiBub25lO1xyXG4gICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgIHdpZHRoOiA3NSU7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgLm5leHQtYnRuLWNvbHtcclxuICAgICAgICB0ZXh0LWFsaWduOiBsZWZ0ICFpbXBvcnRhbnQ7XHJcbiAgICB9XHJcbiAgICBpb24tc2VnbWVudC1idXR0b257XHJcbiAgICAgICAgdGV4dC10cmFuc2Zvcm06IG5vbmU7XHJcbiAgICB9XHJcbiAgICBpbWd7XHJcbiAgICAgICAgd2lkdGg6IDYwJTtcclxuICAgIH1cclxuXHJcbiAgICAudGFicyB7XHJcbiAgYm9yZGVyLXJhZGl1czogMDtcclxuICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gIGJveC1zaGFkb3c6IDAgNHB4IDRweCAtMnB4IHJnYmEoMCwwLDAsMC41KTtcclxufVxyXG4jY2hjazF7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIG9wYWNpdHk6IDA7XHJcbiAgei1pbmRleDogLTE7XHJcbn1cclxuLnRhYiB7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgY29sb3I6IHdoaXRlO1xyXG4gIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgJi1sYWJlbCB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG4gICAgcGFkZGluZzogMWVtO1xyXG4gICAgYmFja2dyb3VuZDogJG1pZG5pZ2h0O1xyXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICAvKiBJY29uICovXHJcbiAgICAmOmhvdmVyIHtcclxuICAgICAgYmFja2dyb3VuZDogZGFya2VuKCRtaWRuaWdodCwgMTAlKTtcclxuICAgIH1cclxuICAgICY6OmFmdGVyIHtcclxuICAgICAgY29udGVudDogXCJcXDI3NkZcIjtcclxuICAgICAgd2lkdGg6IDFlbTtcclxuICAgICAgaGVpZ2h0OiAxZW07XHJcbiAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgICAgdHJhbnNpdGlvbjogYWxsIC4zNXM7XHJcbiAgICB9XHJcbiAgfVxyXG4gICYtY29udGVudCB7XHJcbiAgICBtYXgtaGVpZ2h0OiAwO1xyXG4gICAgcGFkZGluZzogMCAxZW07XHJcbiAgICBjb2xvcjogJG1pZG5pZ2h0O1xyXG4gICAgYmFja2dyb3VuZDogd2hpdGU7XHJcbiAgICB0cmFuc2l0aW9uOiBhbGwgLjM1cztcclxuICB9XHJcbiAgJi1jbG9zZSB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAganVzdGlmeS1jb250ZW50OiBmbGV4LWVuZDtcclxuICAgIHBhZGRpbmc6IDFlbTtcclxuICAgIGZvbnQtc2l6ZTogMC43NWVtO1xyXG4gICAgYmFja2dyb3VuZDogJG1pZG5pZ2h0O1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgJjpob3ZlciB7XHJcbiAgICAgIGJhY2tncm91bmQ6IGRhcmtlbigkbWlkbmlnaHQsIDEwJSk7XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcbiNjaGNrMTpjaGVja2VkIHtcclxuICAgICsgLnRhYi1sYWJlbCB7XHJcbiAgICAgIGJhY2tncm91bmQ6IGRhcmtlbigkbWlkbmlnaHQsIDEwJSk7XHJcbiAgICAgICY6OmFmdGVyIHtcclxuICAgICAgICB0cmFuc2Zvcm06IHJvdGF0ZSg5MGRlZyk7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICAgIH4gLnRhYi1jb250ZW50IHtcclxuICAgICAgbWF4LWhlaWdodDogMTAwdmg7XHJcbiAgICAgIHBhZGRpbmc6IDFlbTtcclxuICAgIH1cclxuICB9XHJcbiAgLmluc2lkZS1ib2R5IHtcclxuICAgIHBhZGRpbmc6IDI1cHg7XHJcbn1cclxuLmxpc3QtZ3JvdXAudmVydGljYWwtc3RlcHMgLmxpc3QtZ3JvdXAtaXRlbSB7XHJcbiAgYm9yZGVyOiBub25lO1xyXG4gIGJvcmRlci1sZWZ0OiAzcHggc29saWQgI2I0YjRiNDtcclxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xyXG4gIGJvcmRlci1yYWRpdXM6IDA7XHJcbiAgY291bnRlci1pbmNyZW1lbnQ6IHN0ZXAtY291bnRlcjtcclxuICBwYWRkaW5nLWxlZnQ6IDIwcHg7XHJcbiAgcGFkZGluZy1yaWdodDogMHB4O1xyXG4gIHBhZGRpbmctYm90dG9tOiA3cHg7XHJcbiAgcGFkZGluZy10b3A6IDBweDtcclxufVxyXG4ubGlzdC1ncm91cC52ZXJ0aWNhbC1zdGVwcyAubGlzdC1ncm91cC1pdGVtOjpiZWZvcmUge1xyXG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjYjRiNGI0O1xyXG4gIGNvbG9yOiAjZmZmO1xyXG4gIGNvbnRlbnQ6IGNvdW50ZXIoc3RlcC1jb3VudGVyKTtcclxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgZmxvYXQ6IGxlZnQ7XHJcbiAgaGVpZ2h0OiAyNXB4O1xyXG4gIGxpbmUtaGVpZ2h0OiAyNXB4O1xyXG4gIG1hcmdpbi1sZWZ0OiAtMzVweDtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgd2lkdGg6IDI1cHg7XHJcbn1cclxuLmxpc3QtZ3JvdXAudmVydGljYWwtc3RlcHMgLmZpbmFsOjpiZWZvcmUge1xyXG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjYjRiNGI0O1xyXG4gIGNvbG9yOiAjZmZmO1xyXG4gIGNvbnRlbnQ6IGNvdW50ZXIoc3RlcC1jb3VudGVyKTtcclxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgZmxvYXQ6IGxlZnQ7XHJcbiAgaGVpZ2h0OiAyNXB4O1xyXG4gIGxpbmUtaGVpZ2h0OiAyNXB4O1xyXG4gIG1hcmdpbi1sZWZ0OiAtMzJweDtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgd2lkdGg6IDI1cHg7XHJcbn1cclxuLmZpbmFse1xyXG4gIGJvcmRlci1sZWZ0OiBub25lICFpbXBvcnRhbnQ7XHJcbn1cclxuLmxpc3QtZ3JvdXAudmVydGljYWwtc3RlcHMgLnN0ZXAtYWN0aXZlOjpiZWZvcmUge1xyXG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMmRkMzZmO1xyXG4gIGNvbG9yOiAjZmZmO1xyXG4gIGNvbnRlbnQ6IGNvdW50ZXIoc3RlcC1jb3VudGVyKTtcclxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgZmxvYXQ6IGxlZnQ7XHJcbiAgaGVpZ2h0OiAyNXB4O1xyXG4gIGxpbmUtaGVpZ2h0OiAyNXB4O1xyXG4gIG1hcmdpbi1sZWZ0OiAtMzVweDtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgd2lkdGg6IDI1cHg7XHJcbn1cclxuLmxpc3QtZ3JvdXAudmVydGljYWwtc3RlcHMgLmxpc3QtZ3JvdXAtaXRlbSBzcGFuLCAubGlzdC1ncm91cC52ZXJ0aWNhbC1zdGVwcyAubGlzdC1ncm91cC1pdGVtIGEge1xyXG4gIGRpc3BsYXk6IGJsb2NrO1xyXG4gIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgcGFkZGluZy10b3A6IDJweDtcclxufVxyXG5cclxuZGl2LnJldXNhYmxlX2FjY29yZGlvbiB7XHJcbiAgei1pbmRleDogOTk7XHJcbiAgcGFkZGluZzogMDtcclxuICBtYXJnaW46IDA7XHJcbiAgbGlzdC1zdHlsZTogbm9uZTtcclxuICBkaXNwbGF5OiAtd2Via2l0LWJveDtcclxuICBkaXNwbGF5OiAtbW96LWJveDtcclxuICBkaXNwbGF5OiAtbXMtZmxleGJveDtcclxuICBkaXNwbGF5OiAtd2Via2l0LWZsZXg7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBmbGV4LXdyYXA6IHdyYXA7XHJcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcclxuICBsaW5lLWhlaWdodDogMjVweDtcclxuICBoZWlnaHQ6IDE4MHB4O1xyXG4gIGJhY2tncm91bmQ6ICNmMWYxZjE7XHJcbiAgd2lkdGg6IGF1dG87XHJcbn1cclxuZGl2LnRlbXBsYXRlX2FjY29yZGlvbiB7XHJcbiAgZGl2LnRlbXBsYXRlX2NvbnRhaW5lcnMge1xyXG4gICAgZGlzcGxheTogLXdlYmtpdC1ib3g7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgbWluLXdpZHRoOiA0NSU7XHJcbiAgICBtaW4taGVpZ2h0OiA2MHB4O1xyXG4gICAgYmFja2dyb3VuZDogd2hpdGU7XHJcbiAgICAtd2Via2l0LWJveC1vcmllbnQ6IGhvcml6b250YWw7XHJcbiAgICAtd2Via2l0LWJveC1kaXJlY3Rpb246IG5vcm1hbDtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XHJcbiAgICBtYXJnaW46IDVweDtcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgYWxpZ24tY29udGVudDogY2VudGVyO1xyXG4gIH1cclxufVxyXG5cclxuLnRvZ2dsZV9idXR0b24ge1xyXG4gIC0tYmFja2dyb3VuZDogI2YxZjFmMTtcclxuICB3aWR0aDogMTAwJTtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgcGFkZGluZzogMDtcclxuICBjb2xvcjogIzIwMjAyMDtcclxuICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgbWluLXdpZHRoOiAxMDAlO1xyXG4gIGlvbi1sYWJlbHtcclxuICAgIGZvbnQtc2l6ZTogMTZweDtcclxuICAgIGNvbG9yOiAjMjAyMDIwO1xyXG4gICAgdGV4dC1hbGlnbjogbGVmdDtcclxuICAgIG1hcmdpbi1sZWZ0OiAyMHB4O1xyXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgfVxyXG59XHJcbmRpdi5hY2NvcmRpb24tY29udGFpbmVyIHtcclxuICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gIG92ZXJmbG93LXk6IHNjcm9sbDtcclxuICB0cmFuc2l0aW9uOiBtYXgtaGVpZ2h0IDAuNXMgZWFzZS1pbi1vdXQ7XHJcbiAgaGVpZ2h0OiBhdXRvO1xyXG4gIGJhY2tncm91bmQ6IHJnYigzMSwgNDMsIDU1KTtcclxufVxyXG5cclxuZGl2LmFjY29yZGlvbi1jb250YWluZXIuY29sbGFwc2VkIHtcclxuICBtYXgtaGVpZ2h0OiAwICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbiJdfQ== */";
      /***/
    },

    /***/
    "HWDZ":
    /*!***************************************************!*\
      !*** ./src/app/editmedicine/editmedicine.page.ts ***!
      \***************************************************/

    /*! exports provided: EditmedicinePage */

    /***/
    function HWDZ(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "EditmedicinePage", function () {
        return EditmedicinePage;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_editmedicine_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./editmedicine.page.html */
      "UObF");
      /* harmony import */


      var _editmedicine_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./editmedicine.page.scss */
      "/viP");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/forms */
      "3Pt+");
      /* harmony import */


      var _api_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ../api.service */
      "yTNM");
      /* harmony import */


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @ionic/angular */
      "TEn/");

      var EditmedicinePage = /*#__PURE__*/function () {
        function EditmedicinePage(modalController, apiService, alertController, loadingController) {
          _classCallCheck(this, EditmedicinePage);

          this.modalController = modalController;
          this.apiService = apiService;
          this.alertController = alertController;
          this.loadingController = loadingController;
        }

        _createClass(EditmedicinePage, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            this.editMedicineForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormGroup"]({
              tab: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"](this.medicine_obj.tabName, [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].pattern(/^[a-zA-z ]+$/)]),
              morningTime: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"](this.medicine_obj.morningTime),
              afternoonTime: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"](this.medicine_obj.afternoonTime),
              eveningTime: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"](this.medicine_obj.eveningTime),
              quantity: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"](this.medicine_obj.quantity, [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required]),
              comment: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"](this.medicine_obj.comment, [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required])
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
          key: "onSubmit",
          value: function onSubmit(body) {
            var _this2 = this;

            console.log(body);
            body['userId'] = this.userId;
            body['illnessId'] = this.illnessId;
            body['tabId'] = this.tabId;
            this.apiService.editMedicine(body).then(function (data) {
              console.log('data', data);

              _this2.presentAlert('Medicine updated successfully');
            })["catch"](function (err) {
              console.log('err', err);

              _this2.apiService.presentToast(err.error, 2000);
            });
          }
        }, {
          key: "closeModal",
          value: function closeModal() {
            this.modalController.dismiss();
          }
        }]);

        return EditmedicinePage;
      }();

      EditmedicinePage.ctorParameters = function () {
        return [{
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["ModalController"]
        }, {
          type: _api_service__WEBPACK_IMPORTED_MODULE_5__["ApiService"]
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["AlertController"]
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["LoadingController"]
        }];
      };

      EditmedicinePage.propDecorators = {
        userId: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"]
        }],
        illnessId: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"]
        }],
        tabId: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"]
        }],
        medicine_obj: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"]
        }]
      };
      EditmedicinePage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-editmedicine',
        template: _raw_loader_editmedicine_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_editmedicine_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
      })], EditmedicinePage);
      /***/
    },

    /***/
    "UObF":
    /*!*******************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/editmedicine/editmedicine.page.html ***!
      \*******************************************************************************************/

    /*! exports provided: default */

    /***/
    function UObF(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-header>\n  <ion-toolbar>\n    <ion-title>Edit Medicine</ion-title>\n    <ion-buttons slot=\"start\">\n      <ion-button shape=\"round\" (click)=\"closeModal()\">\n        <ion-icon color=\"light\" name=\"arrow-back-outline\"></ion-icon>\n      </ion-button>\n    </ion-buttons>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <div *ngIf=\"editMedicineForm\">\n  <form [formGroup]=\"editMedicineForm\" (ngSubmit)=\"onSubmit(editMedicineForm.value)\">\n    <ion-row>\n     \n      <ion-col size=\"12\">\n        <ion-label>Medicine Name</ion-label>\n        <ion-item lines=\"none\">\n          <ion-input formControlName=\"tab\" type=\"text\" ></ion-input>\n        </ion-item>\n      </ion-col>\n    </ion-row>\n    <ion-row>\n     \n      <ion-col size=\"3\">\n        <ion-label>Morning Time</ion-label>\n      </ion-col>\n      <ion-col size=\"9\">\n        <ion-item lines=\"none\">\n        <ion-datetime displayFormat=\"h:mm a\" formControlName=\"morningTime\"></ion-datetime>\n        </ion-item>\n      </ion-col>\n      \n    </ion-row>\n    <ion-row>\n     \n      <ion-col size=\"3\">\n        <ion-label>Afternoon Time</ion-label>\n      </ion-col>\n      <ion-col size=\"9\">\n        <ion-item lines=\"none\">\n        <ion-datetime displayFormat=\"h:mm a\" formControlName=\"afternoonTime\"></ion-datetime>\n  \n        </ion-item>\n      </ion-col>\n      \n    </ion-row>\n    <ion-row>\n     \n      <ion-col size=\"3\">\n        <ion-label>Evening Time</ion-label>\n      </ion-col>\n      <ion-col size=\"9\">\n        <ion-item lines=\"none\">\n        <ion-datetime displayFormat=\"h:mm a\" formControlName=\"eveningTime\"></ion-datetime>\n        </ion-item>\n      </ion-col>\n      \n    </ion-row>\n    <ion-row>\n      <ion-col size=\"6\">\n        <ion-label>Quantity </ion-label>\n        <ion-item lines=\"none\">\n          <ion-input type=\"number\" formControlName=\"quantity\"></ion-input>\n          </ion-item>\n      </ion-col>\n      <ion-col size=\"6\">\n        <ion-label>Comment </ion-label>\n        <ion-item lines=\"none\">\n          <ion-input type=\"text\" formControlName=\"comment\"></ion-input>\n          </ion-item>\n      </ion-col>\n    </ion-row>\n    <ion-row>\n      <ion-col size=\"12\" class=\"ion-text-center\">\n          <ion-button [disabled]=\"editMedicineForm.invalid\" shape=\"round\" type=\"submit\"  color=\"secondary\">\n            Submit\n          </ion-button>\n      </ion-col>\n    </ion-row>\n  </form>\n</div>\n</ion-content>\n";
      /***/
    }
  }]);
})();
//# sourceMappingURL=default~addmedicine-addmedicine-module~editmedicine-editmedicine-module-es5.js.map