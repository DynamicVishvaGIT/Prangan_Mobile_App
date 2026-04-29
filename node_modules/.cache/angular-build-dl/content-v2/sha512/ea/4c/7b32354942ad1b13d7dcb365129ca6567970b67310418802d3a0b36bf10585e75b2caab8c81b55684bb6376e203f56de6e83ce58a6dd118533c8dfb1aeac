(function () {
  function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return e; }; var t, e = {}, r = Object.prototype, n = r.hasOwnProperty, o = Object.defineProperty || function (t, e, r) { t[e] = r.value; }, i = "function" == typeof Symbol ? Symbol : {}, a = i.iterator || "@@iterator", c = i.asyncIterator || "@@asyncIterator", u = i.toStringTag || "@@toStringTag"; function define(t, e, r) { return Object.defineProperty(t, e, { value: r, enumerable: !0, configurable: !0, writable: !0 }), t[e]; } try { define({}, ""); } catch (t) { define = function define(t, e, r) { return t[e] = r; }; } function wrap(t, e, r, n) { var i = e && e.prototype instanceof Generator ? e : Generator, a = Object.create(i.prototype), c = new Context(n || []); return o(a, "_invoke", { value: makeInvokeMethod(t, r, c) }), a; } function tryCatch(t, e, r) { try { return { type: "normal", arg: t.call(e, r) }; } catch (t) { return { type: "throw", arg: t }; } } e.wrap = wrap; var h = "suspendedStart", l = "suspendedYield", f = "executing", s = "completed", y = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var p = {}; define(p, a, function () { return this; }); var d = Object.getPrototypeOf, v = d && d(d(values([]))); v && v !== r && n.call(v, a) && (p = v); var g = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(p); function defineIteratorMethods(t) { ["next", "throw", "return"].forEach(function (e) { define(t, e, function (t) { return this._invoke(e, t); }); }); } function AsyncIterator(t, e) { function invoke(r, o, i, a) { var c = tryCatch(t[r], t, o); if ("throw" !== c.type) { var u = c.arg, h = u.value; return h && "object" == typeof h && n.call(h, "__await") ? e.resolve(h.__await).then(function (t) { invoke("next", t, i, a); }, function (t) { invoke("throw", t, i, a); }) : e.resolve(h).then(function (t) { u.value = t, i(u); }, function (t) { return invoke("throw", t, i, a); }); } a(c.arg); } var r; o(this, "_invoke", { value: function value(t, n) { function callInvokeWithMethodAndArg() { return new e(function (e, r) { invoke(t, n, e, r); }); } return r = r ? r.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); } }); } function makeInvokeMethod(e, r, n) { var o = h; return function (i, a) { if (o === f) throw new Error("Generator is already running"); if (o === s) { if ("throw" === i) throw a; return { value: t, done: !0 }; } for (n.method = i, n.arg = a;;) { var c = n.delegate; if (c) { var u = maybeInvokeDelegate(c, n); if (u) { if (u === y) continue; return u; } } if ("next" === n.method) n.sent = n._sent = n.arg;else if ("throw" === n.method) { if (o === h) throw o = s, n.arg; n.dispatchException(n.arg); } else "return" === n.method && n.abrupt("return", n.arg); o = f; var p = tryCatch(e, r, n); if ("normal" === p.type) { if (o = n.done ? s : l, p.arg === y) continue; return { value: p.arg, done: n.done }; } "throw" === p.type && (o = s, n.method = "throw", n.arg = p.arg); } }; } function maybeInvokeDelegate(e, r) { var n = r.method, o = e.iterator[n]; if (o === t) return r.delegate = null, "throw" === n && e.iterator["return"] && (r.method = "return", r.arg = t, maybeInvokeDelegate(e, r), "throw" === r.method) || "return" !== n && (r.method = "throw", r.arg = new TypeError("The iterator does not provide a '" + n + "' method")), y; var i = tryCatch(o, e.iterator, r.arg); if ("throw" === i.type) return r.method = "throw", r.arg = i.arg, r.delegate = null, y; var a = i.arg; return a ? a.done ? (r[e.resultName] = a.value, r.next = e.nextLoc, "return" !== r.method && (r.method = "next", r.arg = t), r.delegate = null, y) : a : (r.method = "throw", r.arg = new TypeError("iterator result is not an object"), r.delegate = null, y); } function pushTryEntry(t) { var e = { tryLoc: t[0] }; 1 in t && (e.catchLoc = t[1]), 2 in t && (e.finallyLoc = t[2], e.afterLoc = t[3]), this.tryEntries.push(e); } function resetTryEntry(t) { var e = t.completion || {}; e.type = "normal", delete e.arg, t.completion = e; } function Context(t) { this.tryEntries = [{ tryLoc: "root" }], t.forEach(pushTryEntry, this), this.reset(!0); } function values(e) { if (e || "" === e) { var r = e[a]; if (r) return r.call(e); if ("function" == typeof e.next) return e; if (!isNaN(e.length)) { var o = -1, i = function next() { for (; ++o < e.length;) if (n.call(e, o)) return next.value = e[o], next.done = !1, next; return next.value = t, next.done = !0, next; }; return i.next = i; } } throw new TypeError(typeof e + " is not iterable"); } return GeneratorFunction.prototype = GeneratorFunctionPrototype, o(g, "constructor", { value: GeneratorFunctionPrototype, configurable: !0 }), o(GeneratorFunctionPrototype, "constructor", { value: GeneratorFunction, configurable: !0 }), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, u, "GeneratorFunction"), e.isGeneratorFunction = function (t) { var e = "function" == typeof t && t.constructor; return !!e && (e === GeneratorFunction || "GeneratorFunction" === (e.displayName || e.name)); }, e.mark = function (t) { return Object.setPrototypeOf ? Object.setPrototypeOf(t, GeneratorFunctionPrototype) : (t.__proto__ = GeneratorFunctionPrototype, define(t, u, "GeneratorFunction")), t.prototype = Object.create(g), t; }, e.awrap = function (t) { return { __await: t }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, c, function () { return this; }), e.AsyncIterator = AsyncIterator, e.async = function (t, r, n, o, i) { void 0 === i && (i = Promise); var a = new AsyncIterator(wrap(t, r, n, o), i); return e.isGeneratorFunction(r) ? a : a.next().then(function (t) { return t.done ? t.value : a.next(); }); }, defineIteratorMethods(g), define(g, u, "Generator"), define(g, a, function () { return this; }), define(g, "toString", function () { return "[object Generator]"; }), e.keys = function (t) { var e = Object(t), r = []; for (var n in e) r.push(n); return r.reverse(), function next() { for (; r.length;) { var t = r.pop(); if (t in e) return next.value = t, next.done = !1, next; } return next.done = !0, next; }; }, e.values = values, Context.prototype = { constructor: Context, reset: function reset(e) { if (this.prev = 0, this.next = 0, this.sent = this._sent = t, this.done = !1, this.delegate = null, this.method = "next", this.arg = t, this.tryEntries.forEach(resetTryEntry), !e) for (var r in this) "t" === r.charAt(0) && n.call(this, r) && !isNaN(+r.slice(1)) && (this[r] = t); }, stop: function stop() { this.done = !0; var t = this.tryEntries[0].completion; if ("throw" === t.type) throw t.arg; return this.rval; }, dispatchException: function dispatchException(e) { if (this.done) throw e; var r = this; function handle(n, o) { return a.type = "throw", a.arg = e, r.next = n, o && (r.method = "next", r.arg = t), !!o; } for (var o = this.tryEntries.length - 1; o >= 0; --o) { var i = this.tryEntries[o], a = i.completion; if ("root" === i.tryLoc) return handle("end"); if (i.tryLoc <= this.prev) { var c = n.call(i, "catchLoc"), u = n.call(i, "finallyLoc"); if (c && u) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } else if (c) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); } else { if (!u) throw new Error("try statement without catch or finally"); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } } } }, abrupt: function abrupt(t, e) { for (var r = this.tryEntries.length - 1; r >= 0; --r) { var o = this.tryEntries[r]; if (o.tryLoc <= this.prev && n.call(o, "finallyLoc") && this.prev < o.finallyLoc) { var i = o; break; } } i && ("break" === t || "continue" === t) && i.tryLoc <= e && e <= i.finallyLoc && (i = null); var a = i ? i.completion : {}; return a.type = t, a.arg = e, i ? (this.method = "next", this.next = i.finallyLoc, y) : this.complete(a); }, complete: function complete(t, e) { if ("throw" === t.type) throw t.arg; return "break" === t.type || "continue" === t.type ? this.next = t.arg : "return" === t.type ? (this.rval = this.arg = t.arg, this.method = "return", this.next = "end") : "normal" === t.type && e && (this.next = e), y; }, finish: function finish(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.finallyLoc === t) return this.complete(r.completion, r.afterLoc), resetTryEntry(r), y; } }, "catch": function _catch(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.tryLoc === t) { var n = r.completion; if ("throw" === n.type) { var o = n.arg; resetTryEntry(r); } return o; } } throw new Error("illegal catch attempt"); }, delegateYield: function delegateYield(e, r, n) { return this.delegate = { iterator: values(e), resultName: r, nextLoc: n }, "next" === this.method && (this.arg = t), y; } }, e; }

  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

  function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return typeof key === "symbol" ? key : String(key); }

  function _toPrimitive(input, hint) { if (typeof input !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (typeof res !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["childotherinfo-childotherinfo-module"], {
    /***/
    "9hIX":
    /*!*********************************************************!*\
      !*** ./src/app/childotherinfo/childotherinfo.page.scss ***!
      \*********************************************************/

    /*! exports provided: default */

    /***/
    function hIX(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = ".wrap {\n  text-align: center;\n  position: relative;\n}\n\n.wrap:before {\n  content: \"\";\n  position: absolute;\n  top: 20%;\n  left: 18%;\n  border-top: 0.5px solid #677483;\n  border-width: thin;\n  width: 65%;\n  transform: translateY(-50%);\n  border-style: dashed;\n}\n\n.active {\n  border: 1px solid #2dd36f !important;\n  color: #ffffff;\n}\n\n.icon-circle {\n  position: relative;\n  display: inline-block;\n  margin: -1px;\n  width: 30px;\n  height: 30px;\n  font-size: 26px;\n  border-radius: 50%;\n  border: 1px solid #202020;\n  background: #fff;\n  color: #2dd36f;\n  text-align: center;\n}\n\n.icon-circle ion-icon {\n  margin-top: 2px;\n  font-size: 20px;\n}\n\n.header-1 {\n  color: #676767;\n  margin-bottom: 0;\n  font-size: 16px;\n}\n\n.heading-1 {\n  color: #676767;\n  margin-bottom: 0;\n  font-size: 16px;\n}\n\n.heading {\n  color: #9b9ca6;\n  margin-bottom: 0;\n  font-size: 14px;\n}\n\nion-label {\n  color: #9b9ca6;\n  font-size: 14px;\n}\n\nion-input {\n  border: 1px solid #9b9ca6;\n  border-radius: 5px;\n  --padding-start: 5px !important;\n  height: 35px;\n}\n\nion-textarea {\n  border: 1px solid #9b9ca6;\n  border-radius: 5px;\n  --padding-start: 5px !important;\n}\n\nion-datetime {\n  border: 1px solid #9b9ca6;\n  border-radius: 5px;\n  --padding-start: 5px !important;\n  width: 100%;\n  height: 35px;\n}\n\nion-item {\n  --padding-start: 0;\n  --ripple-color: transparent;\n  --background-activated: transparent;\n  --background-activated-opacity:transparent;\n  --background-focused: transparent;\n  --background-focused-opacity:transparent;\n  --background-hover: transparent;\n  --background-hover-opacity:transparent;\n}\n\nion-item ion-label {\n  font-size: 12px;\n  color: #9b9ca6;\n}\n\nion-radio-group ion-item {\n  border-bottom: 0;\n}\n\nion-radio-group ion-col {\n  padding-left: 0;\n}\n\nion-radio-group ion-radio {\n  margin-right: 8px;\n  width: 18px;\n  height: 18px;\n}\n\nion-col {\n  padding-left: 0;\n}\n\nion-button {\n  text-transform: none;\n}\n\n.choose-btn {\n  --background: #ee4a35;\n}\n\n.heading-3 {\n  margin-top: 12px;\n  color: #929791;\n}\n\n.color-green {\n  color: #2dd36f;\n  font-weight: bold;\n  margin-top: 10px;\n}\n\n.checkmark {\n  margin-top: -2px;\n}\n\n.dot {\n  color: #202020 !important;\n  margin-top: 2px;\n}\n\n.other-info {\n  margin-top: 16px;\n}\n\n.specify-item {\n  margin-top: 25px;\n}\n\n.admission-row ion-col {\n  text-align: center;\n  text-align: -moz-center;\n}\n\n.admission-row ion-col ion-button {\n  text-transform: none;\n  width: 80%;\n}\n\n.next-btn-col {\n  text-align: left !important;\n}\n\n.list-group.vertical-steps .list-group-item {\n  border: none;\n  border-left: 3px solid #b4b4b4;\n  box-sizing: border-box;\n  border-radius: 0;\n  counter-increment: step-counter;\n  padding-left: 20px;\n  padding-right: 0px;\n  padding-bottom: 7px;\n  padding-top: 0px;\n}\n\n.list-group.vertical-steps .list-group-item::before {\n  border-radius: 50%;\n  background-color: #b4b4b4;\n  color: #fff;\n  content: counter(step-counter);\n  display: inline-block;\n  float: left;\n  height: 25px;\n  line-height: 25px;\n  margin-left: -35px;\n  text-align: center;\n  width: 25px;\n}\n\n.list-group.vertical-steps .final::before {\n  border-radius: 50%;\n  background-color: #b4b4b4;\n  color: #fff;\n  content: counter(step-counter);\n  display: inline-block;\n  float: left;\n  height: 25px;\n  line-height: 25px;\n  margin-left: -32px;\n  text-align: center;\n  width: 25px;\n}\n\n.final {\n  border-left: none !important;\n}\n\n.step-active {\n  border-left: 3px solid #2dd36f !important;\n}\n\n.list-group.vertical-steps .step-active::before {\n  border-radius: 50%;\n  background-color: #2dd36f;\n  color: #fff;\n  content: counter(step-counter);\n  display: inline-block;\n  float: left;\n  height: 25px;\n  line-height: 25px;\n  margin-left: -35px;\n  text-align: center;\n  width: 25px;\n}\n\n.list-group.vertical-steps .list-group-item span, .list-group.vertical-steps .list-group-item a {\n  display: block;\n  overflow: hidden;\n  padding-top: 2px;\n}\n\ndiv.reusable_accordion {\n  z-index: 99;\n  padding: 0;\n  margin: 0;\n  list-style: none;\n  display: flex;\n  flex-wrap: wrap;\n  flex-direction: column;\n  justify-content: space-around;\n  line-height: 25px;\n  height: 180px;\n  background: #f1f1f1;\n  width: auto;\n}\n\ndiv.template_accordion div.template_containers {\n  display: flex;\n  min-width: 45%;\n  min-height: 60px;\n  background: white;\n  flex-direction: row;\n  margin: 5px;\n  justify-content: center;\n  align-content: center;\n}\n\n.toggle_button {\n  --background: #f1f1f1;\n  width: 100%;\n  text-align: center;\n  padding: 0;\n  color: #202020;\n  cursor: pointer;\n  min-width: 100%;\n}\n\n.toggle_button ion-label {\n  font-size: 16px;\n  color: #202020;\n  text-align: left;\n  margin-left: 20px;\n  font-weight: bold;\n}\n\ndiv.accordion-container {\n  overflow: hidden;\n  overflow-y: scroll;\n  transition: max-height 0.5s ease-in-out;\n  height: auto;\n  background: #1f2b37;\n}\n\ndiv.accordion-container.collapsed {\n  max-height: 0 !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL2NoaWxkb3RoZXJpbmZvLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGtCQUFBO0VBQ0Esa0JBQUE7QUFDSjs7QUFFRTtFQUNFLFdBQUE7RUFDQSxrQkFBQTtFQUNBLFFBQUE7RUFDQSxTQUFBO0VBQ0EsK0JBQUE7RUFDQSxrQkFBQTtFQUNBLFVBQUE7RUFDQSwyQkFBQTtFQUNBLG9CQUFBO0FBQ0o7O0FBQ0U7RUFDRSxvQ0FBQTtFQUNBLGNBQUE7QUFFSjs7QUFBRTtFQUNFLGtCQUFBO0VBQ0EscUJBQUE7RUFDQSxZQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxlQUFBO0VBQ0Esa0JBQUE7RUFDQSx5QkFBQTtFQUNBLGdCQUFBO0VBQ0EsY0FBQTtFQUNBLGtCQUFBO0FBR0o7O0FBREk7RUFDSSxlQUFBO0VBQ0EsZUFBQTtBQUdSOztBQUdFO0VBQ0UsY0FBQTtFQUNBLGdCQUFBO0VBQ0EsZUFBQTtBQUFKOztBQUVFO0VBQ0UsY0FBQTtFQUNBLGdCQUFBO0VBQ0EsZUFBQTtBQUNKOztBQUNBO0VBQ0ksY0FBQTtFQUNBLGdCQUFBO0VBQ0EsZUFBQTtBQUVKOztBQUFBO0VBQ0ksY0FBQTtFQUNBLGVBQUE7QUFHSjs7QUFEQTtFQUNJLHlCQUFBO0VBQ0Esa0JBQUE7RUFDQSwrQkFBQTtFQUNBLFlBQUE7QUFJSjs7QUFGQTtFQUNJLHlCQUFBO0VBQ0Esa0JBQUE7RUFDQSwrQkFBQTtBQUtKOztBQUhBO0VBQ0kseUJBQUE7RUFDQSxrQkFBQTtFQUNBLCtCQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7QUFNSjs7QUFIQTtFQUVJLGtCQUFBO0VBQ0EsMkJBQUE7RUFDQSxtQ0FBQTtFQUNBLDBDQUFBO0VBQ0EsaUNBQUE7RUFDQSx3Q0FBQTtFQUNBLCtCQUFBO0VBQ0Esc0NBQUE7QUFLSjs7QUFISTtFQUNJLGVBQUE7RUFDSixjQUFBO0FBS0o7O0FBQVE7RUFDSSxnQkFBQTtBQUdaOztBQURRO0VBQ0ksZUFBQTtBQUdaOztBQURRO0VBQ0EsaUJBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtBQUdSOztBQUNJO0VBQ0ksZUFBQTtBQUVSOztBQUNJO0VBQ0ksb0JBQUE7QUFFUjs7QUFBSTtFQUNJLHFCQUFBO0FBR1I7O0FBREk7RUFDSSxnQkFBQTtFQUNBLGNBQUE7QUFJUjs7QUFGSTtFQUNJLGNBQUE7RUFDQSxpQkFBQTtFQUNBLGdCQUFBO0FBS1I7O0FBSEk7RUFDSSxnQkFBQTtBQU1SOztBQUpJO0VBQ0kseUJBQUE7RUFDQSxlQUFBO0FBT1I7O0FBTEk7RUFDSSxnQkFBQTtBQVFSOztBQU5JO0VBQ0ksZ0JBQUE7QUFTUjs7QUFOUTtFQUNJLGtCQUFBO0VBQ0EsdUJBQUE7QUFTWjs7QUFSWTtFQUNJLG9CQUFBO0VBRUEsVUFBQTtBQVNoQjs7QUFKSTtFQUNJLDJCQUFBO0FBT1I7O0FBTEk7RUFDSSxZQUFBO0VBQ0EsOEJBQUE7RUFDQSxzQkFBQTtFQUNBLGdCQUFBO0VBQ0EsK0JBQUE7RUFDQSxrQkFBQTtFQUNBLGtCQUFBO0VBQ0EsbUJBQUE7RUFDQSxnQkFBQTtBQVFSOztBQU5NO0VBQ0Usa0JBQUE7RUFDQSx5QkFBQTtFQUNBLFdBQUE7RUFDQSw4QkFBQTtFQUNBLHFCQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxpQkFBQTtFQUNBLGtCQUFBO0VBQ0Esa0JBQUE7RUFDQSxXQUFBO0FBU1I7O0FBUE07RUFDRSxrQkFBQTtFQUNBLHlCQUFBO0VBQ0EsV0FBQTtFQUNBLDhCQUFBO0VBQ0EscUJBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGlCQUFBO0VBQ0Esa0JBQUE7RUFDQSxrQkFBQTtFQUNBLFdBQUE7QUFVUjs7QUFSTTtFQUNFLDRCQUFBO0FBV1I7O0FBVE07RUFDRSx5Q0FBQTtBQVlSOztBQVZNO0VBQ0Usa0JBQUE7RUFDQSx5QkFBQTtFQUNBLFdBQUE7RUFDQSw4QkFBQTtFQUNBLHFCQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxpQkFBQTtFQUNBLGtCQUFBO0VBQ0Esa0JBQUE7RUFDQSxXQUFBO0FBYVI7O0FBWE07RUFDRSxjQUFBO0VBQ0EsZ0JBQUE7RUFDQSxnQkFBQTtBQWNSOztBQVhNO0VBQ0UsV0FBQTtFQUNBLFVBQUE7RUFDQSxTQUFBO0VBQ0EsZ0JBQUE7RUFLQSxhQUFBO0VBQ0EsZUFBQTtFQUNBLHNCQUFBO0VBQ0EsNkJBQUE7RUFDQSxpQkFBQTtFQUNBLGFBQUE7RUFDQSxtQkFBQTtFQUNBLFdBQUE7QUFjUjs7QUFYUTtFQUVFLGFBQUE7RUFDQSxjQUFBO0VBQ0EsZ0JBQUE7RUFDQSxpQkFBQTtFQUdBLG1CQUFBO0VBQ0EsV0FBQTtFQUNBLHVCQUFBO0VBQ0EscUJBQUE7QUFjVjs7QUFWTTtFQUNFLHFCQUFBO0VBQ0EsV0FBQTtFQUNBLGtCQUFBO0VBQ0EsVUFBQTtFQUNBLGNBQUE7RUFDQSxlQUFBO0VBQ0EsZUFBQTtBQWFSOztBQVpRO0VBQ0UsZUFBQTtFQUNBLGNBQUE7RUFDQSxnQkFBQTtFQUNBLGlCQUFBO0VBQ0EsaUJBQUE7QUFjVjs7QUFYTTtFQUNFLGdCQUFBO0VBQ0Esa0JBQUE7RUFDQSx1Q0FBQTtFQUNBLFlBQUE7RUFDQSxtQkFBQTtBQWNSOztBQVhNO0VBQ0Usd0JBQUE7QUFjUiIsImZpbGUiOiJjaGlsZG90aGVyaW5mby5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIud3JhcCB7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgfVxyXG4gIFxyXG4gIC53cmFwOmJlZm9yZSB7XHJcbiAgICBjb250ZW50OiBcIlwiO1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgdG9wOiAyMCU7XHJcbiAgICBsZWZ0OiAxOCU7XHJcbiAgICBib3JkZXItdG9wOiAwLjVweCBzb2xpZCAjNjc3NDgzO1xyXG4gICAgYm9yZGVyLXdpZHRoOiB0aGluO1xyXG4gICAgd2lkdGg6IDY1JTtcclxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtNTAlKTtcclxuICAgIGJvcmRlci1zdHlsZTogZGFzaGVkO1xyXG4gIH1cclxuICAuYWN0aXZle1xyXG4gICAgYm9yZGVyOiAxcHggc29saWQgIzJkZDM2ZiAhaW1wb3J0YW50O1xyXG4gICAgY29sb3I6ICNmZmZmZmY7XHJcbiAgfVxyXG4gIC5pY29uLWNpcmNsZXtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICAgIG1hcmdpbjogLTFweDtcclxuICAgIHdpZHRoOiAzMHB4O1xyXG4gICAgaGVpZ2h0OiAzMHB4O1xyXG4gICAgZm9udC1zaXplOiAyNnB4O1xyXG4gICAgYm9yZGVyLXJhZGl1czogNTAlO1xyXG4gICAgYm9yZGVyOiAxcHggc29saWQgIzIwMjAyMDtcclxuICAgIGJhY2tncm91bmQ6ICNmZmY7XHJcbiAgICBjb2xvcjogIzJkZDM2ZjtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuXHJcbiAgICBpb24taWNvbntcclxuICAgICAgICBtYXJnaW4tdG9wOiAycHg7XHJcbiAgICAgICAgZm9udC1zaXplOiAyMHB4O1xyXG4gICAgfVxyXG4gIFxyXG4gIH1cclxuICBcclxuICBcclxuICAuaGVhZGVyLTF7XHJcbiAgICBjb2xvcjogIzY3Njc2NztcclxuICAgIG1hcmdpbi1ib3R0b206IDA7XHJcbiAgICBmb250LXNpemU6IDE2cHg7XHJcbn1cclxuICAuaGVhZGluZy0xe1xyXG4gICAgY29sb3I6ICM2NzY3Njc7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAwO1xyXG4gICAgZm9udC1zaXplOiAxNnB4O1xyXG59XHJcbi5oZWFkaW5ne1xyXG4gICAgY29sb3I6ICM5YjljYTY7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAwO1xyXG4gICAgZm9udC1zaXplOiAxNHB4O1xyXG59XHJcbmlvbi1sYWJlbHtcclxuICAgIGNvbG9yOiAjOWI5Y2E2O1xyXG4gICAgZm9udC1zaXplOiAxNHB4O1xyXG59XHJcbmlvbi1pbnB1dCB7XHJcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjOWI5Y2E2O1xyXG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xyXG4gICAgLS1wYWRkaW5nLXN0YXJ0OiA1cHggIWltcG9ydGFudDtcclxuICAgIGhlaWdodDozNXB4O1xyXG59XHJcbmlvbi10ZXh0YXJlYXtcclxuICAgIGJvcmRlcjogMXB4IHNvbGlkICM5YjljYTY7XHJcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XHJcbiAgICAtLXBhZGRpbmctc3RhcnQ6IDVweCAhaW1wb3J0YW50O1xyXG59XHJcbmlvbi1kYXRldGltZXtcclxuICAgIGJvcmRlcjogMXB4IHNvbGlkICM5YjljYTY7XHJcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XHJcbiAgICAtLXBhZGRpbmctc3RhcnQ6IDVweCAhaW1wb3J0YW50O1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBoZWlnaHQ6MzVweDtcclxuXHJcbn1cclxuaW9uLWl0ZW17XHJcbiAgICAvLyBib3JkZXItYm90dG9tOiAxcHggc29saWQgIzY3NzQ4MztcclxuICAgIC0tcGFkZGluZy1zdGFydDogMDtcclxuICAgIC0tcmlwcGxlLWNvbG9yOiB0cmFuc3BhcmVudDtcclxuICAgIC0tYmFja2dyb3VuZC1hY3RpdmF0ZWQ6IHRyYW5zcGFyZW50O1xyXG4gICAgLS1iYWNrZ3JvdW5kLWFjdGl2YXRlZC1vcGFjaXR5OnRyYW5zcGFyZW50O1xyXG4gICAgLS1iYWNrZ3JvdW5kLWZvY3VzZWQ6IHRyYW5zcGFyZW50O1xyXG4gICAgLS1iYWNrZ3JvdW5kLWZvY3VzZWQtb3BhY2l0eTp0cmFuc3BhcmVudDtcclxuICAgIC0tYmFja2dyb3VuZC1ob3ZlciAgOiB0cmFuc3BhcmVudDtcclxuICAgIC0tYmFja2dyb3VuZC1ob3Zlci1vcGFjaXR5ICA6dHJhbnNwYXJlbnQ7XHJcblxyXG4gICAgaW9uLWxhYmVsIHtcclxuICAgICAgICBmb250LXNpemU6IDEycHg7XHJcbiAgICBjb2xvcjogIzliOWNhNjtcclxuXHJcbiAgICB9XHJcbn1cclxuICAgIGlvbi1yYWRpby1ncm91cHtcclxuICAgICAgICBpb24taXRlbXtcclxuICAgICAgICAgICAgYm9yZGVyLWJvdHRvbTogMDtcclxuICAgICAgICB9XHJcbiAgICAgICAgaW9uLWNvbCB7XHJcbiAgICAgICAgICAgIHBhZGRpbmctbGVmdDogMDtcclxuICAgICAgICB9XHJcbiAgICAgICAgaW9uLXJhZGlve1xyXG4gICAgICAgIG1hcmdpbi1yaWdodDogOHB4O1xyXG4gICAgICAgIHdpZHRoOiAxOHB4O1xyXG4gICAgICAgIGhlaWdodDogMThweDtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgaW9uLWNvbCB7XHJcbiAgICAgICAgcGFkZGluZy1sZWZ0OiAwO1xyXG4gICAgfVxyXG5cclxuICAgIGlvbi1idXR0b24ge1xyXG4gICAgICAgIHRleHQtdHJhbnNmb3JtOiBub25lO1xyXG4gICAgfVxyXG4gICAgLmNob29zZS1idG57XHJcbiAgICAgICAgLS1iYWNrZ3JvdW5kOiAjZWU0YTM1O1xyXG4gICAgfVxyXG4gICAgLmhlYWRpbmctM3tcclxuICAgICAgICBtYXJnaW4tdG9wOiAxMnB4O1xyXG4gICAgICAgIGNvbG9yOiAjOTI5NzkxO1xyXG4gICAgfVxyXG4gICAgLmNvbG9yLWdyZWVue1xyXG4gICAgICAgIGNvbG9yOiAjMmRkMzZmO1xyXG4gICAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gICAgICAgIG1hcmdpbi10b3A6IDEwcHg7XHJcbiAgICB9XHJcbiAgICAuY2hlY2ttYXJre1xyXG4gICAgICAgIG1hcmdpbi10b3A6IC0ycHg7XHJcbiAgICB9XHJcbiAgICAuZG90e1xyXG4gICAgICAgIGNvbG9yOiAjMjAyMDIwICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgbWFyZ2luLXRvcDogMnB4O1xyXG4gICAgfVxyXG4gICAgLm90aGVyLWluZm8ge1xyXG4gICAgICAgIG1hcmdpbi10b3A6IDE2cHg7XHJcbiAgICB9XHJcbiAgICAuc3BlY2lmeS1pdGVte1xyXG4gICAgICAgIG1hcmdpbi10b3A6IDI1cHg7XHJcbiAgICB9XHJcbiAgICAuYWRtaXNzaW9uLXJvd3tcclxuICAgICAgICBpb24tY29se1xyXG4gICAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICAgICAgICAgIHRleHQtYWxpZ246IC1tb3otY2VudGVyO1xyXG4gICAgICAgICAgICBpb24tYnV0dG9ue1xyXG4gICAgICAgICAgICAgICAgdGV4dC10cmFuc2Zvcm06IG5vbmU7XHJcbiAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgd2lkdGg6IDgwJTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICBcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICAubmV4dC1idG4tY29se1xyXG4gICAgICAgIHRleHQtYWxpZ246IGxlZnQgIWltcG9ydGFudDtcclxuICAgIH1cclxuICAgIC5saXN0LWdyb3VwLnZlcnRpY2FsLXN0ZXBzIC5saXN0LWdyb3VwLWl0ZW0ge1xyXG4gICAgICAgIGJvcmRlcjogbm9uZTtcclxuICAgICAgICBib3JkZXItbGVmdDogM3B4IHNvbGlkICNiNGI0YjQ7XHJcbiAgICAgICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcclxuICAgICAgICBib3JkZXItcmFkaXVzOiAwO1xyXG4gICAgICAgIGNvdW50ZXItaW5jcmVtZW50OiBzdGVwLWNvdW50ZXI7XHJcbiAgICAgICAgcGFkZGluZy1sZWZ0OiAyMHB4O1xyXG4gICAgICAgIHBhZGRpbmctcmlnaHQ6IDBweDtcclxuICAgICAgICBwYWRkaW5nLWJvdHRvbTogN3B4O1xyXG4gICAgICAgIHBhZGRpbmctdG9wOiAwcHg7XHJcbiAgICAgIH1cclxuICAgICAgLmxpc3QtZ3JvdXAudmVydGljYWwtc3RlcHMgLmxpc3QtZ3JvdXAtaXRlbTo6YmVmb3JlIHtcclxuICAgICAgICBib3JkZXItcmFkaXVzOiA1MCU7XHJcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2I0YjRiNDtcclxuICAgICAgICBjb2xvcjogI2ZmZjtcclxuICAgICAgICBjb250ZW50OiBjb3VudGVyKHN0ZXAtY291bnRlcik7XHJcbiAgICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gICAgICAgIGZsb2F0OiBsZWZ0O1xyXG4gICAgICAgIGhlaWdodDogMjVweDtcclxuICAgICAgICBsaW5lLWhlaWdodDogMjVweDtcclxuICAgICAgICBtYXJnaW4tbGVmdDogLTM1cHg7XHJcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgICAgIHdpZHRoOiAyNXB4O1xyXG4gICAgICB9XHJcbiAgICAgIC5saXN0LWdyb3VwLnZlcnRpY2FsLXN0ZXBzIC5maW5hbDo6YmVmb3JlIHtcclxuICAgICAgICBib3JkZXItcmFkaXVzOiA1MCU7XHJcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2I0YjRiNDtcclxuICAgICAgICBjb2xvcjogI2ZmZjtcclxuICAgICAgICBjb250ZW50OiBjb3VudGVyKHN0ZXAtY291bnRlcik7XHJcbiAgICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gICAgICAgIGZsb2F0OiBsZWZ0O1xyXG4gICAgICAgIGhlaWdodDogMjVweDtcclxuICAgICAgICBsaW5lLWhlaWdodDogMjVweDtcclxuICAgICAgICBtYXJnaW4tbGVmdDogLTMycHg7XHJcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgICAgIHdpZHRoOiAyNXB4O1xyXG4gICAgICB9XHJcbiAgICAgIC5maW5hbHtcclxuICAgICAgICBib3JkZXItbGVmdDogbm9uZSAhaW1wb3J0YW50O1xyXG4gICAgICB9XHJcbiAgICAgIC5zdGVwLWFjdGl2ZXtcclxuICAgICAgICBib3JkZXItbGVmdDogM3B4IHNvbGlkICMyZGQzNmYgIWltcG9ydGFudDtcclxuICAgICAgfVxyXG4gICAgICAubGlzdC1ncm91cC52ZXJ0aWNhbC1zdGVwcyAuc3RlcC1hY3RpdmU6OmJlZm9yZSB7XHJcbiAgICAgICAgYm9yZGVyLXJhZGl1czogNTAlO1xyXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICMyZGQzNmY7XHJcbiAgICAgICAgY29sb3I6ICNmZmY7XHJcbiAgICAgICAgY29udGVudDogY291bnRlcihzdGVwLWNvdW50ZXIpO1xyXG4gICAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICAgICAgICBmbG9hdDogbGVmdDtcclxuICAgICAgICBoZWlnaHQ6IDI1cHg7XHJcbiAgICAgICAgbGluZS1oZWlnaHQ6IDI1cHg7XHJcbiAgICAgICAgbWFyZ2luLWxlZnQ6IC0zNXB4O1xyXG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgICAgICB3aWR0aDogMjVweDtcclxuICAgICAgfVxyXG4gICAgICAubGlzdC1ncm91cC52ZXJ0aWNhbC1zdGVwcyAubGlzdC1ncm91cC1pdGVtIHNwYW4sIC5saXN0LWdyb3VwLnZlcnRpY2FsLXN0ZXBzIC5saXN0LWdyb3VwLWl0ZW0gYSB7XHJcbiAgICAgICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICAgICAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICAgICAgICBwYWRkaW5nLXRvcDogMnB4O1xyXG4gICAgICB9XHJcbiAgICAgIFxyXG4gICAgICBkaXYucmV1c2FibGVfYWNjb3JkaW9uIHtcclxuICAgICAgICB6LWluZGV4OiA5OTtcclxuICAgICAgICBwYWRkaW5nOiAwO1xyXG4gICAgICAgIG1hcmdpbjogMDtcclxuICAgICAgICBsaXN0LXN0eWxlOiBub25lO1xyXG4gICAgICAgIGRpc3BsYXk6IC13ZWJraXQtYm94O1xyXG4gICAgICAgIGRpc3BsYXk6IC1tb3otYm94O1xyXG4gICAgICAgIGRpc3BsYXk6IC1tcy1mbGV4Ym94O1xyXG4gICAgICAgIGRpc3BsYXk6IC13ZWJraXQtZmxleDtcclxuICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgIGZsZXgtd3JhcDogd3JhcDtcclxuICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xyXG4gICAgICAgIGxpbmUtaGVpZ2h0OiAyNXB4O1xyXG4gICAgICAgIGhlaWdodDogMTgwcHg7XHJcbiAgICAgICAgYmFja2dyb3VuZDogI2YxZjFmMTtcclxuICAgICAgICB3aWR0aDogYXV0bztcclxuICAgICAgfVxyXG4gICAgICBkaXYudGVtcGxhdGVfYWNjb3JkaW9uIHtcclxuICAgICAgICBkaXYudGVtcGxhdGVfY29udGFpbmVycyB7XHJcbiAgICAgICAgICBkaXNwbGF5OiAtd2Via2l0LWJveDtcclxuICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgICBtaW4td2lkdGg6IDQ1JTtcclxuICAgICAgICAgIG1pbi1oZWlnaHQ6IDYwcHg7XHJcbiAgICAgICAgICBiYWNrZ3JvdW5kOiB3aGl0ZTtcclxuICAgICAgICAgIC13ZWJraXQtYm94LW9yaWVudDogaG9yaXpvbnRhbDtcclxuICAgICAgICAgIC13ZWJraXQtYm94LWRpcmVjdGlvbjogbm9ybWFsO1xyXG4gICAgICAgICAgZmxleC1kaXJlY3Rpb246IHJvdztcclxuICAgICAgICAgIG1hcmdpbjogNXB4O1xyXG4gICAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICAgICAgICBhbGlnbi1jb250ZW50OiBjZW50ZXI7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICAgIFxyXG4gICAgICAudG9nZ2xlX2J1dHRvbiB7XHJcbiAgICAgICAgLS1iYWNrZ3JvdW5kOiAjZjFmMWYxO1xyXG4gICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgICAgICBwYWRkaW5nOiAwO1xyXG4gICAgICAgIGNvbG9yOiAjMjAyMDIwO1xyXG4gICAgICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgICAgICBtaW4td2lkdGg6IDEwMCU7XHJcbiAgICAgICAgaW9uLWxhYmVse1xyXG4gICAgICAgICAgZm9udC1zaXplOiAxNnB4O1xyXG4gICAgICAgICAgY29sb3I6ICMyMDIwMjA7XHJcbiAgICAgICAgICB0ZXh0LWFsaWduOiBsZWZ0O1xyXG4gICAgICAgICAgbWFyZ2luLWxlZnQ6IDIwcHg7XHJcbiAgICAgICAgICBmb250LXdlaWdodDogYm9sZDtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgICAgZGl2LmFjY29yZGlvbi1jb250YWluZXIge1xyXG4gICAgICAgIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgICAgICAgb3ZlcmZsb3cteTogc2Nyb2xsO1xyXG4gICAgICAgIHRyYW5zaXRpb246IG1heC1oZWlnaHQgMC41cyBlYXNlLWluLW91dDtcclxuICAgICAgICBoZWlnaHQ6IGF1dG87XHJcbiAgICAgICAgYmFja2dyb3VuZDogcmdiKDMxLCA0MywgNTUpO1xyXG4gICAgICB9XHJcbiAgICAgIFxyXG4gICAgICBkaXYuYWNjb3JkaW9uLWNvbnRhaW5lci5jb2xsYXBzZWQge1xyXG4gICAgICAgIG1heC1oZWlnaHQ6IDAgIWltcG9ydGFudDtcclxuICAgICAgfVxyXG4gICAgICAiXX0= */";
      /***/
    },

    /***/
    "SFoo":
    /*!*****************************************************************!*\
      !*** ./src/app/childotherinfo/childotherinfo-routing.module.ts ***!
      \*****************************************************************/

    /*! exports provided: ChildotherinfoPageRoutingModule */

    /***/
    function SFoo(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ChildotherinfoPageRoutingModule", function () {
        return ChildotherinfoPageRoutingModule;
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


      var _childotherinfo_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./childotherinfo.page */
      "ihey");

      var routes = [{
        path: '',
        component: _childotherinfo_page__WEBPACK_IMPORTED_MODULE_3__["ChildotherinfoPage"]
      }];

      var ChildotherinfoPageRoutingModule = /*#__PURE__*/_createClass(function ChildotherinfoPageRoutingModule() {
        _classCallCheck(this, ChildotherinfoPageRoutingModule);
      });

      ChildotherinfoPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
      })], ChildotherinfoPageRoutingModule);
      /***/
    },

    /***/
    "XLpl":
    /*!***********************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/childotherinfo/childotherinfo.page.html ***!
      \***********************************************************************************************/

    /*! exports provided: default */

    /***/
    function XLpl(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-header class=\"ion-no-border\">\n  <ion-toolbar>\n    <ion-title>Daycare Registration Form</ion-title>\n    <ion-buttons slot=\"start\">\n      <ion-button  shape=\"round\"[routerLink]=\"['/childprofile']\">\n        <ion-icon color=\"light\" name=\"arrow-back-outline\"></ion-icon>\n      </ion-button>\n    </ion-buttons>\n  </ion-toolbar>\n \n\n</ion-header>\n\n<ion-content>\n  <ion-item lines=\"none\" (click)=\"toggle_accordion()\" class=\"toggle_button\">\n    <ion-label  class=\"ion-text-wrap\">Food Habits ,Toilet Habits & Speech and Physical Growth</ion-label>\n    <ion-icon slot=\"end\" color=\"primary\" name=\"chevron-up-circle-outline\" *ngIf=\"!accordion_expanded\"></ion-icon>\n    <ion-icon slot=\"end\" color=\"primary\" name=\"chevron-down-circle-outline\" *ngIf=\"accordion_expanded\"></ion-icon>\n  </ion-item>\n\n\n  <div #accordion class='accordion-container' [style.maxHeight.px]=\"250\" [class.collapsed]=\"!accordion_expanded\">\n    <div class=\"reusable_accordion template_accordion\">\n      <ol class=\"list-group vertical-steps\" style=\"margin-top: 0;list-style: none;padding-left: 28px;\">\n        <li class=\"list-group-item step-active\" [routerLink]=\"['/addadmission']\" routerLinkActive=\"router-link-active\" ><span>Daycare Registration</span></li>\n        <li class=\"list-group-item step-active\" [routerLink]=\"['/childprofile']\"><span>Child's Enviroment & Child's medical record</span></li>\n        <li class=\"list-group-item step-active\"  routerLinkActive=\"router-link-active\" ><span>Food Habits ,Toilet Habits & Speech and Physical Growth</span></li>\n        <li class=\"list-group-item final\" [routerLink]=\"['/childotherinfotwo']\"><span>Consent Form</span></li>\n      </ol>\n    </div>\n  </div>\n  <div class=\"margin-ionic\">\n    <form [formGroup]=\"stepThreeForm\" (ngSubmit)=\"onSubmit(stepThreeForm.value)\">\n    <p class=\"header-1\"><b>Food Habits</b></p>\n    <p class=\"heading\">Would you classify the child  as : <span class=\"text-danger\">*</span></p>\n    <ion-radio-group formControlName=\"q1\" allowEmptySelection=\"false\" color=\"primary\">\n      <ion-row>\n        <ion-col>\n          <ion-item lines=\"none\">\n            <ion-radio value=\"Good\"></ion-radio>\n            <ion-label>Good </ion-label>\n          </ion-item>\n        </ion-col>\n        <ion-col>\n          <ion-item lines=\"none\">\n            <ion-radio value=\"Average\"></ion-radio>\n            <ion-label>Average</ion-label>\n          </ion-item>\n        </ion-col>\n        <ion-col>\n          <ion-item lines=\"none\">\n            <ion-radio value=\"Poor Eater\"></ion-radio>\n            <ion-label>Poor Eater</ion-label>\n          </ion-item>\n        </ion-col>\n     \n      </ion-row>\n    </ion-radio-group>\n    <p class=\"heading\">Is the child : </p>\n    <ion-radio-group formControlName=\"q2\" allowEmptySelection=\"false\" color=\"primary\">\n      <ion-row>\n        <ion-col>\n          <ion-item lines=\"none\">\n            <ion-radio value=\"Vegetarian\"></ion-radio>\n            <ion-label>Vegetarian </ion-label>\n          </ion-item>\n        </ion-col>\n        <ion-col>\n          <ion-item lines=\"none\">\n            <ion-radio value=\"Eggetarian\"></ion-radio>\n            <ion-label>Eggetarian</ion-label>\n          </ion-item>\n        </ion-col>\n        <ion-col>\n          <ion-item lines=\"none\">\n            <ion-radio value=\"Non vegetarian\"></ion-radio>\n            <ion-label>Non Vegetarian</ion-label>\n          </ion-item>\n        </ion-col>\n     \n      </ion-row>\n    </ion-radio-group>\n    <ion-row>\n      <ion-col size=\"6\">\n        <ion-label>Any special dietary requirements ? </ion-label>\n        <ion-item lines=\"none\">\n          <ion-input formControlName=\"q3\" type=\"text\"></ion-input>\n        </ion-item>\n      </ion-col>\n      <ion-col size=\"6\">\n        <ion-label>For which meal is the child most hungry ? </ion-label>\n        <ion-item lines=\"none\">\n          <ion-input type=\"text\" formControlName=\"q4\"></ion-input>\n        </ion-item>\n      </ion-col>\n    </ion-row>\n    <ion-label>What is the child most favourite food ? </ion-label>\n    <ion-item lines=\"none\">\n      <ion-input type=\"text\" formControlName=\"q5\"></ion-input>\n    </ion-item>\n    <ion-label>Does the child feed ? </ion-label>\n    <ion-radio-group formControlName=\"q6\" allowEmptySelection=\"false\" color=\"primary\">\n      <ion-row>\n        <ion-col>\n          <ion-item lines=\"none\">\n            <ion-radio value=\"Himself/herself\"></ion-radio>\n            <ion-label>Himself / herself</ion-label>\n          </ion-item>\n        </ion-col>\n        <ion-col>\n          <ion-item lines=\"none\">\n            <ion-radio value=\"wait to be fed\"></ion-radio>\n            <ion-label>wants to be fed</ion-label>\n          </ion-item>\n        </ion-col>\n      </ion-row>\n    </ion-radio-group>\n    <ion-label>What is his/her general attitude towards eating ? </ion-label>\n    <ion-item lines=\"none\">\n      <ion-input type=\"text\" formControlName=\"q7\"></ion-input>\n    </ion-item>\n    <br>\n    <p class=\"header-1\"> <b>Toilet Habits</b>\n    </p>\n<br>\n  <ion-label>Does the child decide when to go to the toilet or is a reminder needed ?  <span class=\"text-danger\">*</span></ion-label>\n  <ion-item lines=\"none\">\n  <ion-input type=\"text\" formControlName=\"q1_tol\"></ion-input>\n  </ion-item>\n\n  <ion-row>\n    <ion-col size=\"6\">\n      <ion-label>Word child uses for urination </ion-label>\n      <ion-item lines=\"none\">\n        <ion-input type=\"text\" formControlName=\"q2_tol\"></ion-input>\n      </ion-item>\n    </ion-col>\n    <ion-col size=\"6\">\n      <ion-label>Bowel movements </ion-label>\n      <ion-item lines=\"none\" >\n        <ion-input type=\"text\" formControlName=\"q3_tol\" class=\"bowel-input\"></ion-input>\n      </ion-item>\n    </ion-col>\n  </ion-row>\n\n  <ion-label>Usual time for bowel movements </ion-label>\n  <ion-item lines=\"none\" >\n    <ion-input type=\"text\" formControlName=\"q4_tol\" class=\"bowel-input\"></ion-input>\n  </ion-item>\n  <ion-label>Regular </ion-label>\n  <ion-item lines=\"none\">\n    <ion-input type=\"text\" formControlName=\"q5_tol\"></ion-input>\n  </ion-item>\n  <ion-label>Constipated </ion-label>\n  <ion-item lines=\"none\">\n    <ion-input type=\"text\" formControlName=\"q6_tol\"></ion-input>\n  </ion-item>\n\n \n  <ion-label>Willingly goes to toilet </ion-label>\n  <ion-item lines=\"none\">\n    <ion-input type=\"text\" formControlName=\"q7_tol\"></ion-input>\n  </ion-item>\n  <br>\n  <p class=\"header-1\"> <b>Speech and Physical Growth </b>\n  </p>\n  <ion-row>\n    <ion-col size=\"6\">\n      <ion-label>Does he/she talk well ? </ion-label>\n      <ion-item lines=\"none\">\n        <ion-input type=\"text\" formControlName=\"q1_sp\"></ion-input>\n      </ion-item>\n    </ion-col>\n    <ion-col size=\"6\">\n      <ion-label>Fairly well </ion-label>\n      <ion-item lines=\"none\">\n        <ion-input type=\"text\" formControlName=\"q2_sp\"></ion-input>\n      </ion-item>\n    </ion-col>\n    <ion-col size=\"6\">\n      <ion-label>Indistinctly </ion-label>\n      <ion-item lines=\"none\">\n        <ion-input type=\"text\" formControlName=\"q3_sp\"></ion-input>\n      </ion-item>\n    </ion-col>\n    <ion-col size=\"6\">\n      <ion-label>not at all </ion-label>\n      <ion-item lines=\"none\">\n        <ion-input type=\"text\" formControlName=\"q4_sp\"></ion-input>\n      </ion-item>\n    </ion-col>\n    <ion-col size=\"6\">\n      <ion-label>Does anyone read to him/her</ion-label>\n      <ion-item lines=\"none\">\n        <ion-input type=\"text\" formControlName=\"q5_sp\"></ion-input>\n      </ion-item>\n    </ion-col>\n    <ion-col size=\"6\">\n      <ion-label>How regularly</ion-label>\n      <ion-item lines=\"none\">\n        <ion-input type=\"text\" formControlName=\"q6_sp\"></ion-input>\n      </ion-item>\n    </ion-col>\n  </ion-row>\n  <p class=\"heading\">At what age did he/she started : </p>\n  <ion-radio-group allowEmptySelection=\"false\" formControlName=\"q7_sp\" color=\"primary\">\n    <ion-row>\n      <ion-col>\n        <ion-item lines=\"none\">\n          <ion-radio value=\"Crawling\"></ion-radio>\n          <ion-label>Crawling </ion-label>\n        </ion-item>\n      </ion-col>\n      <ion-col>\n        <ion-item lines=\"none\">\n          <ion-radio value=\"walk\"></ion-radio>\n          <ion-label>Walk</ion-label>\n        </ion-item>\n      </ion-col>\n    </ion-row>\n  </ion-radio-group>\n  <p class=\"heading\">Walks without help ? : </p>\n  <ion-radio-group allowEmptySelection=\"false\" formControlName=\"q8_sp\" color=\"primary\">\n    <ion-row>\n      <ion-col>\n        <ion-item lines=\"none\">\n          <ion-radio value=\"Yes\"></ion-radio>\n          <ion-label>Yes </ion-label>\n        </ion-item>\n      </ion-col>\n      <ion-col>\n        <ion-item lines=\"none\">\n          <ion-radio value=\"No\"></ion-radio>\n          <ion-label>No</ion-label>\n        </ion-item>\n      </ion-col>\n    </ion-row>\n  </ion-radio-group>\n  <ion-label>Sleep through the night \n  </ion-label>\n  <ion-item lines=\"none\">\n    <ion-input type=\"text\" formControlName=\"q9_sp\"></ion-input>\n  </ion-item>\n  <ion-label>Would you describe you child as active/quite/thin/average weight/heavy/tall/average height,or short: friendlt or not too friendly ? \n  </ion-label>\n  <ion-item lines=\"none\">\n    <ion-input type=\"text\" formControlName=\"q10_sp\"></ion-input>\n  </ion-item>\n    <ion-row class=\"admission-row\">\n      <ion-col >\n        <ion-button type=\"submit\" [disabled]=\"stepThreeForm.invalid\" shape=\"round\"  color=\"primary\">\n         Submit\n        </ion-button>\n      </ion-col>\n      <ion-col class=\"next-btn-col\">\n        <ion-button  shape=\"round\" [disabled]=\"!isFormSubmitted\" color=\"secondary\">\n          <!-- <ion-button  shape=\"round\" (click)=\"goToStep3()\" [disabled]=\"!isFormSubmitted\" color=\"secondary\"> -->\n          Next\n        </ion-button>\n      </ion-col>\n    </ion-row>\n  </form>\n  </div>\n</ion-content>\n";
      /***/
    },

    /***/
    "ihey":
    /*!*******************************************************!*\
      !*** ./src/app/childotherinfo/childotherinfo.page.ts ***!
      \*******************************************************/

    /*! exports provided: ChildotherinfoPage */

    /***/
    function ihey(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ChildotherinfoPage", function () {
        return ChildotherinfoPage;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_childotherinfo_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./childotherinfo.page.html */
      "XLpl");
      /* harmony import */


      var _childotherinfo_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./childotherinfo.page.scss */
      "9hIX");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/forms */
      "3Pt+");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _ionic_storage__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @ionic/storage */
      "e8h1");
      /* harmony import */


      var _api_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./../api.service */
      "yTNM");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");
      /* harmony import */


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! @ionic/angular */
      "TEn/");

      var ChildotherinfoPage = /*#__PURE__*/function () {
        function ChildotherinfoPage(storage, apiService, actionSheetController, alertController, router, loadingController, menuCtrl) {
          _classCallCheck(this, ChildotherinfoPage);

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

        _createClass(ChildotherinfoPage, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            this.menuCtrl.enable(false);
            this.stepThreeForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormGroup"]({
              q1: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required),
              q2: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](''),
              q3: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](''),
              q4: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](''),
              q5: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](''),
              q6: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](''),
              q7: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](''),
              q1_tol: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required),
              q2_tol: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](''),
              q3_tol: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](''),
              q4_tol: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](''),
              q5_tol: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](''),
              q6_tol: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](''),
              q7_tol: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](''),
              q1_sp: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](''),
              q2_sp: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](''),
              q3_sp: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](''),
              q4_sp: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](''),
              q5_sp: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](''),
              q6_sp: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](''),
              q7_sp: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](''),
              q8_sp: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](''),
              q9_sp: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](''),
              q10_sp: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]('')
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
            return this.stepThreeForm.get('q1');
          }
        }, {
          key: "q2",
          get: function get() {
            return this.stepThreeForm.get('q2');
          }
        }, {
          key: "q3",
          get: function get() {
            return this.stepThreeForm.get('q3');
          }
        }, {
          key: "q4",
          get: function get() {
            return this.stepThreeForm.get('q4');
          }
        }, {
          key: "q5",
          get: function get() {
            return this.stepThreeForm.get('q5');
          }
        }, {
          key: "q6",
          get: function get() {
            return this.stepThreeForm.get('q6');
          }
        }, {
          key: "q7",
          get: function get() {
            return this.stepThreeForm.get('q7');
          }
        }, {
          key: "q1_tol",
          get: function get() {
            return this.stepThreeForm.get('q1_tol');
          }
        }, {
          key: "q2_tol",
          get: function get() {
            return this.stepThreeForm.get('q2_tol');
          }
        }, {
          key: "q3_tol",
          get: function get() {
            return this.stepThreeForm.get('q3_tol');
          }
        }, {
          key: "q4_tol",
          get: function get() {
            return this.stepThreeForm.get('q4_tol');
          }
        }, {
          key: "q5_tol",
          get: function get() {
            return this.stepThreeForm.get('q5_tol');
          }
        }, {
          key: "q6_tol",
          get: function get() {
            return this.stepThreeForm.get('q6_tol');
          }
        }, {
          key: "q7_tol",
          get: function get() {
            return this.stepThreeForm.get('q7_tol');
          }
        }, {
          key: "q1_sp",
          get: function get() {
            return this.stepThreeForm.get('q1_sp');
          }
        }, {
          key: "q2_sp",
          get: function get() {
            return this.stepThreeForm.get('q2_sp');
          }
        }, {
          key: "q3_sp",
          get: function get() {
            return this.stepThreeForm.get('q3_sp');
          }
        }, {
          key: "q4_sp",
          get: function get() {
            return this.stepThreeForm.get('q4_sp');
          }
        }, {
          key: "q5_sp",
          get: function get() {
            return this.stepThreeForm.get('q5_sp');
          }
        }, {
          key: "q6_sp",
          get: function get() {
            return this.stepThreeForm.get('q6_sp');
          }
        }, {
          key: "q7_sp",
          get: function get() {
            return this.stepThreeForm.get('q7_sp');
          }
        }, {
          key: "q8_sp",
          get: function get() {
            return this.stepThreeForm.get('q8_sp');
          }
        }, {
          key: "q9_sp",
          get: function get() {
            return this.stepThreeForm.get('q9_sp');
          }
        }, {
          key: "q10_sp",
          get: function get() {
            return this.stepThreeForm.get('q10_sp');
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
            formData.append("q3", body['q3']);
            formData.append("q4", body['q4']);
            formData.append("q5", body['q5']);
            formData.append("q6", body['q6']);
            formData.append("q7", body['q7']);
            formData.append("q1_tol", body['q1_tol']);
            formData.append("q2_tol", body['q2_tol']);
            formData.append("q3_tol", body['q3_tol']);
            formData.append("q4_tol", body['q4_tol']);
            formData.append("q5_tol", body['q5_tol']);
            formData.append("q6_tol", body['q6_tol']);
            formData.append("q7_tol", body['q7_tol']);
            formData.append("q1_sp", body['q1_sp']);
            formData.append("q2_sp", body['q2_sp']);
            formData.append("q3_sp", body['q3_sp']);
            formData.append("q4_sp", body['q4_sp']);
            formData.append("q5_sp", body['q5_sp']);
            formData.append("q6_sp", body['q6_sp']);
            formData.append("q7_sp", body['q7_sp']);
            formData.append("q8_sp", body['q8_sp']);
            formData.append("q9_sp", body['q9_sp']);
            formData.append("q10_sp", body['q10_sp']);

            if (this.isDataPresent) {
              formData.append("child_food_id", this.child_food_id);
              formData.append("child_physical_id", this.child_physical_id);
              this.apiService.updateDaycareRegStep3(formData).subscribe(function (data) {
                console.log('data', data);

                _this.loadingController.dismiss();

                _this.presentAlert("Daycare Step 3 form updated successfully"); // this.stepThreeForm.reset()


                console.log(data);
              }, function (err) {
                console.log(err);

                _this.loadingController.dismiss();

                _this.apiService.presentToast(err.error, 2000);
              });
            } else {
              this.apiService.daycareRegistrationStep3(formData).subscribe(function (data) {
                console.log('data', data);

                _this.loadingController.dismiss();

                _this.presentAlert("Daycare Step 3 form submitted successfully");

                _this.stepThreeForm.reset();

                console.log(data);
              }, function (err) {
                console.log(err);

                _this.loadingController.dismiss();

                console.log(JSON.parse(err.error.message));

                _this.apiService.presentToast(JSON.parse(err.error.message), 2000);
              });
            }
          }
        }, {
          key: "ionViewDidEnter",
          value: function ionViewDidEnter() {
            var _this2 = this;

            this.menuCtrl.enable(false);
            this.presentLoading().then(function () {
              _this2.storage.get('user').then(function (data) {
                if (data) {
                  var user = JSON.parse(data);
                  _this2.userid = user.id;
                  console.log('userid', _this2.userid);

                  _this2.apiService.fetchDayCareStep3(_this2.userid).then(function (data) {
                    console.log('fetchDayCareStep3', data.data);
                    var fetchDayCareStep3 = JSON.parse(data.data);

                    if (fetchDayCareStep3) {
                      _this2.fetchDayCareStep3_food = fetchDayCareStep3['a'];
                      _this2.fetchDayCareStep3_phy = fetchDayCareStep3['b'];

                      if (_this2.fetchDayCareStep3_food && _this2.fetchDayCareStep3_phy) {
                        _this2.isFormSubmitted = true;
                        _this2.child_food_id = _this2.fetchDayCareStep3_food.id;
                        _this2.child_physical_id = _this2.fetchDayCareStep3_phy.id;

                        _this2.stepThreeForm.patchValue({
                          'q1': _this2.fetchDayCareStep3_food.child_behaviour,
                          'q2': _this2.fetchDayCareStep3_food.is_the_child,
                          'q3': _this2.fetchDayCareStep3_food.dietary_requirements,
                          'q4': _this2.fetchDayCareStep3_food.meal,
                          'q5': _this2.fetchDayCareStep3_food.food,
                          'q6': _this2.fetchDayCareStep3_food.child_feed,
                          'q7': _this2.fetchDayCareStep3_food.attitude,
                          'q1_tol': _this2.fetchDayCareStep3_food.attitude,
                          'q2_tol': _this2.fetchDayCareStep3_food.toilet_hobits_q2,
                          'q3_tol': _this2.fetchDayCareStep3_food.toilet_hobits_q3,
                          'q4_tol': _this2.fetchDayCareStep3_food.toilet_hobits_q4,
                          'q5_tol': _this2.fetchDayCareStep3_food.toilet_hobits_q5,
                          'q6_tol': _this2.fetchDayCareStep3_food.toilet_hobits_q6,
                          'q7_tol': _this2.fetchDayCareStep3_food.toilet_hobits_q7,
                          'q1_sp': _this2.fetchDayCareStep3_phy.q1,
                          'q2_sp': _this2.fetchDayCareStep3_phy.q2,
                          'q3_sp': _this2.fetchDayCareStep3_phy.q3,
                          'q4_sp': _this2.fetchDayCareStep3_phy.q4,
                          'q5_sp': _this2.fetchDayCareStep3_phy.q5,
                          'q6_sp': _this2.fetchDayCareStep3_phy.q6,
                          'q7_sp': _this2.fetchDayCareStep3_phy.q7,
                          'q8_sp': _this2.fetchDayCareStep3_phy.q8,
                          'q9_sp': _this2.fetchDayCareStep3_phy.q9,
                          'q10_sp': _this2.fetchDayCareStep3_phy.q10
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
                          _this3.router.navigate(['childotherinfotwo']);
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
          key: "ionViewWillEnter",
          value: function ionViewWillEnter() {
            if (this.menuCtrl.isEnabled) {
              console.log('hi');
              this.menuCtrl.swipeGesture(false);
            }
          }
        }, {
          key: "goToNextStep",
          value: function goToNextStep() {
            if (this.isFormSubmitted) {
              this.router.navigate(['childotherinfotwo']);
            } else {
              this.apiService.presentToast('Please submit  form to go next step', 3000);
            }
          }
        }, {
          key: "ionViewDidLeave",
          value: function ionViewDidLeave() {
            this.menuCtrl.enable(true);
          }
        }]);

        return ChildotherinfoPage;
      }();

      ChildotherinfoPage.ctorParameters = function () {
        return [{
          type: _ionic_storage__WEBPACK_IMPORTED_MODULE_5__["Storage"]
        }, {
          type: _api_service__WEBPACK_IMPORTED_MODULE_6__["ApiService"]
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

      ChildotherinfoPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_4__["Component"])({
        selector: 'app-childotherinfo',
        template: _raw_loader_childotherinfo_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_childotherinfo_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
      })], ChildotherinfoPage);
      /***/
    },

    /***/
    "u85i":
    /*!*********************************************************!*\
      !*** ./src/app/childotherinfo/childotherinfo.module.ts ***!
      \*********************************************************/

    /*! exports provided: ChildotherinfoPageModule */

    /***/
    function u85i(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ChildotherinfoPageModule", function () {
        return ChildotherinfoPageModule;
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


      var _childotherinfo_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./childotherinfo-routing.module */
      "SFoo");
      /* harmony import */


      var _childotherinfo_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./childotherinfo.page */
      "ihey");

      var ChildotherinfoPageModule = /*#__PURE__*/_createClass(function ChildotherinfoPageModule() {
        _classCallCheck(this, ChildotherinfoPageModule);
      });

      ChildotherinfoPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _childotherinfo_routing_module__WEBPACK_IMPORTED_MODULE_5__["ChildotherinfoPageRoutingModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"]],
        declarations: [_childotherinfo_page__WEBPACK_IMPORTED_MODULE_6__["ChildotherinfoPage"]]
      })], ChildotherinfoPageModule);
      /***/
    }
  }]);
})();
//# sourceMappingURL=childotherinfo-childotherinfo-module-es5.js.map