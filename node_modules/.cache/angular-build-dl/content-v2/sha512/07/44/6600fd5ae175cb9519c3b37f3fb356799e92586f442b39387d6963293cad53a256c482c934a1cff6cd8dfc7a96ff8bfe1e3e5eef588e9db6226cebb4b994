(function () {
  function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return e; }; var t, e = {}, r = Object.prototype, n = r.hasOwnProperty, o = Object.defineProperty || function (t, e, r) { t[e] = r.value; }, i = "function" == typeof Symbol ? Symbol : {}, a = i.iterator || "@@iterator", c = i.asyncIterator || "@@asyncIterator", u = i.toStringTag || "@@toStringTag"; function define(t, e, r) { return Object.defineProperty(t, e, { value: r, enumerable: !0, configurable: !0, writable: !0 }), t[e]; } try { define({}, ""); } catch (t) { define = function define(t, e, r) { return t[e] = r; }; } function wrap(t, e, r, n) { var i = e && e.prototype instanceof Generator ? e : Generator, a = Object.create(i.prototype), c = new Context(n || []); return o(a, "_invoke", { value: makeInvokeMethod(t, r, c) }), a; } function tryCatch(t, e, r) { try { return { type: "normal", arg: t.call(e, r) }; } catch (t) { return { type: "throw", arg: t }; } } e.wrap = wrap; var h = "suspendedStart", l = "suspendedYield", f = "executing", s = "completed", y = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var p = {}; define(p, a, function () { return this; }); var d = Object.getPrototypeOf, v = d && d(d(values([]))); v && v !== r && n.call(v, a) && (p = v); var g = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(p); function defineIteratorMethods(t) { ["next", "throw", "return"].forEach(function (e) { define(t, e, function (t) { return this._invoke(e, t); }); }); } function AsyncIterator(t, e) { function invoke(r, o, i, a) { var c = tryCatch(t[r], t, o); if ("throw" !== c.type) { var u = c.arg, h = u.value; return h && "object" == typeof h && n.call(h, "__await") ? e.resolve(h.__await).then(function (t) { invoke("next", t, i, a); }, function (t) { invoke("throw", t, i, a); }) : e.resolve(h).then(function (t) { u.value = t, i(u); }, function (t) { return invoke("throw", t, i, a); }); } a(c.arg); } var r; o(this, "_invoke", { value: function value(t, n) { function callInvokeWithMethodAndArg() { return new e(function (e, r) { invoke(t, n, e, r); }); } return r = r ? r.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); } }); } function makeInvokeMethod(e, r, n) { var o = h; return function (i, a) { if (o === f) throw new Error("Generator is already running"); if (o === s) { if ("throw" === i) throw a; return { value: t, done: !0 }; } for (n.method = i, n.arg = a;;) { var c = n.delegate; if (c) { var u = maybeInvokeDelegate(c, n); if (u) { if (u === y) continue; return u; } } if ("next" === n.method) n.sent = n._sent = n.arg;else if ("throw" === n.method) { if (o === h) throw o = s, n.arg; n.dispatchException(n.arg); } else "return" === n.method && n.abrupt("return", n.arg); o = f; var p = tryCatch(e, r, n); if ("normal" === p.type) { if (o = n.done ? s : l, p.arg === y) continue; return { value: p.arg, done: n.done }; } "throw" === p.type && (o = s, n.method = "throw", n.arg = p.arg); } }; } function maybeInvokeDelegate(e, r) { var n = r.method, o = e.iterator[n]; if (o === t) return r.delegate = null, "throw" === n && e.iterator["return"] && (r.method = "return", r.arg = t, maybeInvokeDelegate(e, r), "throw" === r.method) || "return" !== n && (r.method = "throw", r.arg = new TypeError("The iterator does not provide a '" + n + "' method")), y; var i = tryCatch(o, e.iterator, r.arg); if ("throw" === i.type) return r.method = "throw", r.arg = i.arg, r.delegate = null, y; var a = i.arg; return a ? a.done ? (r[e.resultName] = a.value, r.next = e.nextLoc, "return" !== r.method && (r.method = "next", r.arg = t), r.delegate = null, y) : a : (r.method = "throw", r.arg = new TypeError("iterator result is not an object"), r.delegate = null, y); } function pushTryEntry(t) { var e = { tryLoc: t[0] }; 1 in t && (e.catchLoc = t[1]), 2 in t && (e.finallyLoc = t[2], e.afterLoc = t[3]), this.tryEntries.push(e); } function resetTryEntry(t) { var e = t.completion || {}; e.type = "normal", delete e.arg, t.completion = e; } function Context(t) { this.tryEntries = [{ tryLoc: "root" }], t.forEach(pushTryEntry, this), this.reset(!0); } function values(e) { if (e || "" === e) { var r = e[a]; if (r) return r.call(e); if ("function" == typeof e.next) return e; if (!isNaN(e.length)) { var o = -1, i = function next() { for (; ++o < e.length;) if (n.call(e, o)) return next.value = e[o], next.done = !1, next; return next.value = t, next.done = !0, next; }; return i.next = i; } } throw new TypeError(typeof e + " is not iterable"); } return GeneratorFunction.prototype = GeneratorFunctionPrototype, o(g, "constructor", { value: GeneratorFunctionPrototype, configurable: !0 }), o(GeneratorFunctionPrototype, "constructor", { value: GeneratorFunction, configurable: !0 }), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, u, "GeneratorFunction"), e.isGeneratorFunction = function (t) { var e = "function" == typeof t && t.constructor; return !!e && (e === GeneratorFunction || "GeneratorFunction" === (e.displayName || e.name)); }, e.mark = function (t) { return Object.setPrototypeOf ? Object.setPrototypeOf(t, GeneratorFunctionPrototype) : (t.__proto__ = GeneratorFunctionPrototype, define(t, u, "GeneratorFunction")), t.prototype = Object.create(g), t; }, e.awrap = function (t) { return { __await: t }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, c, function () { return this; }), e.AsyncIterator = AsyncIterator, e.async = function (t, r, n, o, i) { void 0 === i && (i = Promise); var a = new AsyncIterator(wrap(t, r, n, o), i); return e.isGeneratorFunction(r) ? a : a.next().then(function (t) { return t.done ? t.value : a.next(); }); }, defineIteratorMethods(g), define(g, u, "Generator"), define(g, a, function () { return this; }), define(g, "toString", function () { return "[object Generator]"; }), e.keys = function (t) { var e = Object(t), r = []; for (var n in e) r.push(n); return r.reverse(), function next() { for (; r.length;) { var t = r.pop(); if (t in e) return next.value = t, next.done = !1, next; } return next.done = !0, next; }; }, e.values = values, Context.prototype = { constructor: Context, reset: function reset(e) { if (this.prev = 0, this.next = 0, this.sent = this._sent = t, this.done = !1, this.delegate = null, this.method = "next", this.arg = t, this.tryEntries.forEach(resetTryEntry), !e) for (var r in this) "t" === r.charAt(0) && n.call(this, r) && !isNaN(+r.slice(1)) && (this[r] = t); }, stop: function stop() { this.done = !0; var t = this.tryEntries[0].completion; if ("throw" === t.type) throw t.arg; return this.rval; }, dispatchException: function dispatchException(e) { if (this.done) throw e; var r = this; function handle(n, o) { return a.type = "throw", a.arg = e, r.next = n, o && (r.method = "next", r.arg = t), !!o; } for (var o = this.tryEntries.length - 1; o >= 0; --o) { var i = this.tryEntries[o], a = i.completion; if ("root" === i.tryLoc) return handle("end"); if (i.tryLoc <= this.prev) { var c = n.call(i, "catchLoc"), u = n.call(i, "finallyLoc"); if (c && u) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } else if (c) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); } else { if (!u) throw new Error("try statement without catch or finally"); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } } } }, abrupt: function abrupt(t, e) { for (var r = this.tryEntries.length - 1; r >= 0; --r) { var o = this.tryEntries[r]; if (o.tryLoc <= this.prev && n.call(o, "finallyLoc") && this.prev < o.finallyLoc) { var i = o; break; } } i && ("break" === t || "continue" === t) && i.tryLoc <= e && e <= i.finallyLoc && (i = null); var a = i ? i.completion : {}; return a.type = t, a.arg = e, i ? (this.method = "next", this.next = i.finallyLoc, y) : this.complete(a); }, complete: function complete(t, e) { if ("throw" === t.type) throw t.arg; return "break" === t.type || "continue" === t.type ? this.next = t.arg : "return" === t.type ? (this.rval = this.arg = t.arg, this.method = "return", this.next = "end") : "normal" === t.type && e && (this.next = e), y; }, finish: function finish(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.finallyLoc === t) return this.complete(r.completion, r.afterLoc), resetTryEntry(r), y; } }, "catch": function _catch(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.tryLoc === t) { var n = r.completion; if ("throw" === n.type) { var o = n.arg; resetTryEntry(r); } return o; } } throw new Error("illegal catch attempt"); }, delegateYield: function delegateYield(e, r, n) { return this.delegate = { iterator: values(e), resultName: r, nextLoc: n }, "next" === this.method && (this.arg = t), y; } }, e; }

  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

  function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return typeof key === "symbol" ? key : String(key); }

  function _toPrimitive(input, hint) { if (typeof input !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (typeof res !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["childotherinfotwo-childotherinfotwo-module"], {
    /***/
    "0Jjz":
    /*!*****************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/childotherinfotwo/childotherinfotwo.page.html ***!
      \*****************************************************************************************************/

    /*! exports provided: default */

    /***/
    function Jjz(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-header class=\"ion-no-border\">\n  <ion-toolbar>\n    <ion-title>Daycare Registration Form</ion-title>\n    <ion-buttons slot=\"start\">\n      <ion-button  shape=\"round\"[routerLink]=\"['/childotherinfo']\">\n        <ion-icon color=\"light\" name=\"arrow-back-outline\"></ion-icon>\n      </ion-button>\n    </ion-buttons>\n  </ion-toolbar>\n \n\n</ion-header>\n\n<ion-content>\n  <ion-item lines=\"none\" (click)=\"toggle_accordion()\" class=\"toggle_button\">\n    <ion-label>Consent Form</ion-label>\n    <ion-icon slot=\"end\" color=\"primary\" name=\"chevron-up-circle-outline\" *ngIf=\"!accordion_expanded\"></ion-icon>\n    <ion-icon slot=\"end\" color=\"primary\" name=\"chevron-down-circle-outline\" *ngIf=\"accordion_expanded\"></ion-icon>\n  </ion-item>\n\n\n  <div #accordion class='accordion-container' [style.maxHeight.px]=\"250\" [class.collapsed]=\"!accordion_expanded\">\n    <div class=\"reusable_accordion template_accordion\">\n      <ol class=\"list-group vertical-steps\" style=\"margin-top: 0;list-style: none;padding-left: 28px;\">\n        <li class=\"list-group-item step-active\" [routerLink]=\"['/addadmission']\" routerLinkActive=\"router-link-active\" ><span>Daycare Registration</span></li>\n        <li class=\"list-group-item step-active\" [routerLink]=\"['/childprofile']\"><span>Child's Enviroment & Child's medical record</span></li>\n        <li class=\"list-group-item step-active\" [routerLink]=\"['/childotherinfo']\" routerLinkActive=\"router-link-active\" ><span>Food Habits ,Toilet Habits & Speech and Physical Growth</span></li>\n        <li class=\"list-group-item final\" ><span>Consent Form</span></li>\n      </ol>\n    </div>\n  </div>\n  <div class=\"margin-ionic\">\n\n<form [formGroup]=\"stepFourForm\" (ngSubmit)=\"onSubmit(stepFourForm.value)\">\n\n    <ion-row>\n      <ion-col size=\"6\">\n        <ion-label>Name <span class=\"text-danger\">*</span></ion-label>\n        <ion-item lines=\"none\">\n          <ion-input type=\"text\" formControlName=\"q1_ans\"></ion-input>\n        </ion-item>\n        <div class=\"error-div\" *ngIf=\"(q1_ans?.invalid && q1_ans?.touched) || q1_ans?.dirty\">\n          <small *ngIf=\"q1_ans.errors?.pattern\" class=\"text-danger\">Enter a valid name</small>\n        </div>\n      </ion-col>\n      <ion-col size=\"6\">\n        <ion-label>Relationship </ion-label>\n        <ion-item lines=\"none\" >\n          <ion-input type=\"text\" formControlName=\"q2_ans\"></ion-input>\n        </ion-item>\n        <div class=\"error-div\" *ngIf=\"(q2_ans?.invalid && q2_ans?.touched) || q2_ans?.dirty\">\n          <small *ngIf=\"q2_ans.errors?.pattern\" class=\"text-danger\">Enter a valid relationship</small>\n        </div>\n      </ion-col>\n    </ion-row>\n    <ion-label>Address </ion-label>\n    <ion-item lines=\"none\">\n      <ion-textarea rows=\"6\" cols=\"20\" formControlName=\"q3_ans\"></ion-textarea>\n    </ion-item>\n    <ion-row>\n      <ion-col size=\"6\">\n        <ion-label>Image </ion-label>\n        <br>\n        <img  class=\"img-size\" *ngIf=\"image1base64Image\" src=\"{{image1base64Image}}\" alt=\"\" class=\"image_container\">\n        <img  class=\"img-size\" *ngIf=\"img1 && !image1base64Image\" src=\"{{img1}}\" alt=\"\" class=\"image_container\">\n        \n        <ion-item lines=\"none\">\n        <ion-button (click)=\"presentActionSheet('image1')\" shape=\"round\" class=\"choose-btn\" size=\"small\" >\n          Choose File\n         </ion-button>\n        </ion-item>\n      </ion-col>\n      <ion-col size=\"6\">\n        <ion-label>Phone </ion-label>\n        <ion-item lines=\"none\" >\n          <ion-input type=\"tel\" formControlName=\"q5_ans\" maxlength=\"10\"></ion-input>\n        </ion-item>\n        <div class=\"error-div\" *ngIf=\"(q5_ans?.invalid && q5_ans?.touched) || q5_ans?.dirty\">\n          <small *ngIf=\"q5_ans.errors?.pattern\" class=\"text-danger\">Enter a valid phone number</small>\n        </div>\n      </ion-col>\n    </ion-row>\n    <ion-row>\n      <ion-col size=\"6\">\n        <ion-label>Name </ion-label>\n        <ion-item lines=\"none\">\n          <ion-input type=\"text\" formControlName=\"q6_ans\"></ion-input>\n        </ion-item>\n        <div class=\"error-div\" *ngIf=\"(q6_ans?.invalid && q6_ans?.touched) || q6_ans?.dirty\">\n          <small *ngIf=\"q6_ans.errors?.pattern\" class=\"text-danger\">Enter a valid name</small>\n        </div>\n      </ion-col>\n      <ion-col size=\"6\">\n        <ion-label>Relationship </ion-label>\n        <ion-item lines=\"none\" >\n          <ion-input type=\"text\" formControlName=\"q7_ans\"></ion-input>\n        </ion-item>\n        <div class=\"error-div\" *ngIf=\"(q7_ans?.invalid && q7_ans?.touched) || q7_ans?.dirty\">\n          <small *ngIf=\"q7_ans.errors?.pattern\" class=\"text-danger\">Enter a valid relationship</small>\n        </div>\n      </ion-col>\n    </ion-row>\n    <ion-label>Address </ion-label>\n    <ion-item lines=\"none\">\n      <ion-textarea rows=\"6\" cols=\"20\" formControlName=\"q8_ans\"></ion-textarea>\n    </ion-item>\n    <ion-row>\n      <ion-col size=\"6\">\n        <ion-label>Image </ion-label>\n        <br>\n        <img  class=\"img-size\" *ngIf=\"image2base64Image\" src=\"{{image2base64Image}}\" alt=\"\" class=\"image_container\">\n        <img  class=\"img-size\" *ngIf=\"img2 && !image2base64Image\" src=\"{{img2}}\" alt=\"\" class=\"image_container\">\n        <ion-item lines=\"none\">\n        <ion-button  shape=\"round\" (click)=\"presentActionSheet('image2')\" class=\"choose-btn\" size=\"small\" >\n          Choose File\n         </ion-button>\n        </ion-item>\n      </ion-col>\n      <ion-col size=\"6\">\n        <ion-label>Phone </ion-label>\n        <ion-item lines=\"none\" >\n          <ion-input type=\"tel\" formControlName=\"q10_ans\" maxlength=\"10\"></ion-input>\n        </ion-item>\n        <div class=\"error-div\" *ngIf=\"(q10_ans?.invalid && q10_ans?.touched) || q10_ans?.dirty\">\n          <small *ngIf=\"q10_ans.errors?.pattern\" class=\"text-danger\">Enter a valid phone number</small>\n        </div>\n      </ion-col>\n    </ion-row>\n    <ion-label>The following people are not authorized to pick up child </ion-label>\n    <ion-item lines=\"none\" >\n      <ion-input type=\"text\" formControlName=\"q11_ans\" ></ion-input>\n    </ion-item>\n  <br>\n  <ion-row class=\"admission-row\">\n    <ion-col >\n      <ion-button [disabled]=\"stepFourForm.invalid\" type=\"submit\" shape=\"round\"  color=\"primary\">\n       Submit\n      </ion-button>\n    </ion-col>\n   \n  </ion-row>\n</form>\n  </div>\n</ion-content>\n";
      /***/
    },

    /***/
    "2ZFK":
    /*!***************************************************************!*\
      !*** ./src/app/childotherinfotwo/childotherinfotwo.module.ts ***!
      \***************************************************************/

    /*! exports provided: ChildotherinfotwoPageModule */

    /***/
    function ZFK(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ChildotherinfotwoPageModule", function () {
        return ChildotherinfotwoPageModule;
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


      var _childotherinfotwo_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./childotherinfotwo-routing.module */
      "JdOq");
      /* harmony import */


      var _childotherinfotwo_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./childotherinfotwo.page */
      "snrj");

      var ChildotherinfotwoPageModule = /*#__PURE__*/_createClass(function ChildotherinfotwoPageModule() {
        _classCallCheck(this, ChildotherinfotwoPageModule);
      });

      ChildotherinfotwoPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _childotherinfotwo_routing_module__WEBPACK_IMPORTED_MODULE_5__["ChildotherinfotwoPageRoutingModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"]],
        declarations: [_childotherinfotwo_page__WEBPACK_IMPORTED_MODULE_6__["ChildotherinfotwoPage"]]
      })], ChildotherinfotwoPageModule);
      /***/
    },

    /***/
    "JdOq":
    /*!***********************************************************************!*\
      !*** ./src/app/childotherinfotwo/childotherinfotwo-routing.module.ts ***!
      \***********************************************************************/

    /*! exports provided: ChildotherinfotwoPageRoutingModule */

    /***/
    function JdOq(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ChildotherinfotwoPageRoutingModule", function () {
        return ChildotherinfotwoPageRoutingModule;
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


      var _childotherinfotwo_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./childotherinfotwo.page */
      "snrj");

      var routes = [{
        path: '',
        component: _childotherinfotwo_page__WEBPACK_IMPORTED_MODULE_3__["ChildotherinfotwoPage"]
      }];

      var ChildotherinfotwoPageRoutingModule = /*#__PURE__*/_createClass(function ChildotherinfotwoPageRoutingModule() {
        _classCallCheck(this, ChildotherinfotwoPageRoutingModule);
      });

      ChildotherinfotwoPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
      })], ChildotherinfotwoPageRoutingModule);
      /***/
    },

    /***/
    "P8bj":
    /*!***************************************************************!*\
      !*** ./src/app/childotherinfotwo/childotherinfotwo.page.scss ***!
      \***************************************************************/

    /*! exports provided: default */

    /***/
    function P8bj(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = ".wrap {\n  text-align: center;\n  position: relative;\n}\n\n.wrap:before {\n  content: \"\";\n  position: absolute;\n  top: 20%;\n  left: 18%;\n  border-top: 0.5px solid #677483;\n  border-width: thin;\n  width: 65%;\n  transform: translateY(-50%);\n  border-style: dashed;\n}\n\n.active {\n  border: 1px solid #2dd36f !important;\n  color: #ffffff;\n}\n\n.icon-circle {\n  position: relative;\n  display: inline-block;\n  margin: -1px;\n  width: 30px;\n  height: 30px;\n  font-size: 26px;\n  border-radius: 50%;\n  border: 1px solid #202020;\n  background: #fff;\n  color: #2dd36f;\n  text-align: center;\n}\n\n.icon-circle ion-icon {\n  margin-top: 2px;\n  font-size: 20px;\n}\n\n.header-1 {\n  color: #676767;\n  margin-bottom: 0;\n  font-size: 16px;\n}\n\n.heading-1 {\n  color: #676767;\n  margin-bottom: 0;\n  font-size: 16px;\n}\n\n.heading {\n  color: #9b9ca6;\n  margin-bottom: 0;\n  font-size: 14px;\n}\n\nion-label {\n  color: #9b9ca6;\n  font-size: 14px;\n}\n\nion-input {\n  border: 1px solid #9b9ca6;\n  border-radius: 5px;\n  --padding-start: 5px !important;\n  height: 35px;\n}\n\nion-textarea {\n  border: 1px solid #9b9ca6;\n  border-radius: 5px;\n  --padding-start: 5px !important;\n}\n\nion-datetime {\n  border: 1px solid #9b9ca6;\n  border-radius: 5px;\n  --padding-start: 5px !important;\n  width: 100%;\n  height: 35px;\n}\n\nion-item {\n  --padding-start: 0;\n  --ripple-color: transparent;\n  --background-activated: transparent;\n  --background-activated-opacity:transparent;\n  --background-focused: transparent;\n  --background-focused-opacity:transparent;\n  --background-hover: transparent;\n  --background-hover-opacity:transparent;\n}\n\nion-item ion-label {\n  font-size: 12px;\n  color: #9b9ca6;\n}\n\nion-radio-group ion-item {\n  border-bottom: 0;\n}\n\nion-radio-group ion-col {\n  padding-left: 0;\n}\n\nion-radio-group ion-radio {\n  margin-right: 8px;\n  width: 18px;\n  height: 18px;\n}\n\nion-col {\n  padding-left: 0;\n}\n\nion-button {\n  text-transform: none;\n}\n\n.choose-btn {\n  --background: #ee4a35;\n}\n\n.heading-3 {\n  margin-top: 12px;\n  color: #929791;\n}\n\n.color-green {\n  color: #2dd36f;\n  font-weight: bold;\n  margin-top: 10px;\n}\n\n.checkmark {\n  margin-top: -2px;\n}\n\n.dot {\n  color: #202020 !important;\n  margin-top: 2px;\n}\n\n.other-info {\n  margin-top: 16px;\n}\n\nimg {\n  width: 60%;\n}\n\n.bowel-input {\n  margin-top: 25px;\n}\n\n.admission-row ion-col {\n  text-align: center;\n  text-align: -moz-center;\n}\n\n.admission-row ion-col ion-button {\n  text-transform: none;\n  width: 80%;\n}\n\n.next-btn-col {\n  text-align: left !important;\n}\n\n.list-group.vertical-steps .list-group-item {\n  border: none;\n  border-left: 3px solid #b4b4b4;\n  box-sizing: border-box;\n  border-radius: 0;\n  counter-increment: step-counter;\n  padding-left: 20px;\n  padding-right: 0px;\n  padding-bottom: 7px;\n  padding-top: 0px;\n}\n\n.list-group.vertical-steps .list-group-item::before {\n  border-radius: 50%;\n  background-color: #b4b4b4;\n  color: #fff;\n  content: counter(step-counter);\n  display: inline-block;\n  float: left;\n  height: 25px;\n  line-height: 25px;\n  margin-left: -35px;\n  text-align: center;\n  width: 25px;\n}\n\n.list-group.vertical-steps .final::before {\n  border-radius: 50%;\n  background-color: #2dd36f;\n  color: #fff;\n  content: counter(step-counter);\n  display: inline-block;\n  float: left;\n  height: 25px;\n  line-height: 25px;\n  margin-left: -31px;\n  text-align: center;\n  width: 25px;\n}\n\n.final {\n  border-left: none !important;\n}\n\n.step-active {\n  border-left: 3px solid #2dd36f !important;\n}\n\n.list-group.vertical-steps .step-active::before {\n  border-radius: 50%;\n  background-color: #2dd36f;\n  color: #fff;\n  content: counter(step-counter);\n  display: inline-block;\n  float: left;\n  height: 25px;\n  line-height: 25px;\n  margin-left: -35px;\n  text-align: center;\n  width: 25px;\n}\n\n.list-group.vertical-steps .list-group-item span, .list-group.vertical-steps .list-group-item a {\n  display: block;\n  overflow: hidden;\n  padding-top: 2px;\n}\n\ndiv.reusable_accordion {\n  z-index: 99;\n  padding: 0;\n  margin: 0;\n  list-style: none;\n  display: flex;\n  flex-wrap: wrap;\n  flex-direction: column;\n  justify-content: space-around;\n  line-height: 25px;\n  height: 180px;\n  background: #f1f1f1;\n  width: auto;\n}\n\ndiv.template_accordion div.template_containers {\n  display: flex;\n  min-width: 45%;\n  min-height: 60px;\n  background: white;\n  flex-direction: row;\n  margin: 5px;\n  justify-content: center;\n  align-content: center;\n}\n\n.toggle_button {\n  --background: #f1f1f1;\n  width: 100%;\n  text-align: center;\n  padding: 0;\n  color: #202020;\n  cursor: pointer;\n  min-width: 100%;\n}\n\n.toggle_button ion-label {\n  font-size: 16px;\n  color: #202020;\n  text-align: left;\n  margin-left: 20px;\n  font-weight: bold;\n}\n\ndiv.accordion-container {\n  overflow: hidden;\n  overflow-y: scroll;\n  transition: max-height 0.5s ease-in-out;\n  height: auto;\n  background: #1f2b37;\n}\n\ndiv.accordion-container.collapsed {\n  max-height: 0 !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL2NoaWxkb3RoZXJpbmZvdHdvLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGtCQUFBO0VBQ0Esa0JBQUE7QUFDSjs7QUFFRTtFQUNFLFdBQUE7RUFDQSxrQkFBQTtFQUNBLFFBQUE7RUFDQSxTQUFBO0VBQ0EsK0JBQUE7RUFDQSxrQkFBQTtFQUNBLFVBQUE7RUFDQSwyQkFBQTtFQUNBLG9CQUFBO0FBQ0o7O0FBQ0U7RUFDRSxvQ0FBQTtFQUNBLGNBQUE7QUFFSjs7QUFBRTtFQUNFLGtCQUFBO0VBQ0EscUJBQUE7RUFDQSxZQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxlQUFBO0VBQ0Esa0JBQUE7RUFDQSx5QkFBQTtFQUNBLGdCQUFBO0VBQ0EsY0FBQTtFQUNBLGtCQUFBO0FBR0o7O0FBREk7RUFDSSxlQUFBO0VBQ0EsZUFBQTtBQUdSOztBQUdFO0VBQ0UsY0FBQTtFQUNBLGdCQUFBO0VBQ0EsZUFBQTtBQUFKOztBQUVFO0VBQ0UsY0FBQTtFQUNBLGdCQUFBO0VBQ0EsZUFBQTtBQUNKOztBQUNBO0VBQ0ksY0FBQTtFQUNBLGdCQUFBO0VBQ0EsZUFBQTtBQUVKOztBQUFBO0VBQ0ksY0FBQTtFQUNBLGVBQUE7QUFHSjs7QUFEQTtFQUNJLHlCQUFBO0VBQ0Esa0JBQUE7RUFDQSwrQkFBQTtFQUNBLFlBQUE7QUFJSjs7QUFGQTtFQUNJLHlCQUFBO0VBQ0Esa0JBQUE7RUFDQSwrQkFBQTtBQUtKOztBQUhBO0VBQ0kseUJBQUE7RUFDQSxrQkFBQTtFQUNBLCtCQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7QUFNSjs7QUFIQTtFQUVJLGtCQUFBO0VBQ0EsMkJBQUE7RUFDQSxtQ0FBQTtFQUNBLDBDQUFBO0VBQ0EsaUNBQUE7RUFDQSx3Q0FBQTtFQUNBLCtCQUFBO0VBQ0Esc0NBQUE7QUFLSjs7QUFISTtFQUNJLGVBQUE7RUFDSixjQUFBO0FBS0o7O0FBQVE7RUFDSSxnQkFBQTtBQUdaOztBQURRO0VBQ0ksZUFBQTtBQUdaOztBQURRO0VBQ0EsaUJBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtBQUdSOztBQUNJO0VBQ0ksZUFBQTtBQUVSOztBQUNJO0VBQ0ksb0JBQUE7QUFFUjs7QUFBSTtFQUNJLHFCQUFBO0FBR1I7O0FBREk7RUFDSSxnQkFBQTtFQUNBLGNBQUE7QUFJUjs7QUFGSTtFQUNJLGNBQUE7RUFDQSxpQkFBQTtFQUNBLGdCQUFBO0FBS1I7O0FBSEk7RUFDSSxnQkFBQTtBQU1SOztBQUpJO0VBQ0kseUJBQUE7RUFDQSxlQUFBO0FBT1I7O0FBTEk7RUFDSSxnQkFBQTtBQVFSOztBQU5JO0VBQ0UsVUFBQTtBQVNOOztBQVBJO0VBQ0ksZ0JBQUE7QUFVUjs7QUFQUTtFQUNJLGtCQUFBO0VBQ0EsdUJBQUE7QUFVWjs7QUFUWTtFQUNJLG9CQUFBO0VBRUEsVUFBQTtBQVVoQjs7QUFMSTtFQUNJLDJCQUFBO0FBUVI7O0FBTkk7RUFDSSxZQUFBO0VBQ0EsOEJBQUE7RUFDQSxzQkFBQTtFQUNBLGdCQUFBO0VBQ0EsK0JBQUE7RUFDQSxrQkFBQTtFQUNBLGtCQUFBO0VBQ0EsbUJBQUE7RUFDQSxnQkFBQTtBQVNSOztBQVBNO0VBQ0Usa0JBQUE7RUFDQSx5QkFBQTtFQUNBLFdBQUE7RUFDQSw4QkFBQTtFQUNBLHFCQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxpQkFBQTtFQUNBLGtCQUFBO0VBQ0Esa0JBQUE7RUFDQSxXQUFBO0FBVVI7O0FBUk07RUFDRSxrQkFBQTtFQUNBLHlCQUFBO0VBQ0EsV0FBQTtFQUNBLDhCQUFBO0VBQ0EscUJBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGlCQUFBO0VBQ0Esa0JBQUE7RUFDQSxrQkFBQTtFQUNBLFdBQUE7QUFXUjs7QUFUTTtFQUNFLDRCQUFBO0FBWVI7O0FBVk07RUFDRSx5Q0FBQTtBQWFSOztBQVhNO0VBQ0Usa0JBQUE7RUFDQSx5QkFBQTtFQUNBLFdBQUE7RUFDQSw4QkFBQTtFQUNBLHFCQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxpQkFBQTtFQUNBLGtCQUFBO0VBQ0Esa0JBQUE7RUFDQSxXQUFBO0FBY1I7O0FBWk07RUFDRSxjQUFBO0VBQ0EsZ0JBQUE7RUFDQSxnQkFBQTtBQWVSOztBQVpNO0VBQ0UsV0FBQTtFQUNBLFVBQUE7RUFDQSxTQUFBO0VBQ0EsZ0JBQUE7RUFLQSxhQUFBO0VBQ0EsZUFBQTtFQUNBLHNCQUFBO0VBQ0EsNkJBQUE7RUFDQSxpQkFBQTtFQUNBLGFBQUE7RUFDQSxtQkFBQTtFQUNBLFdBQUE7QUFlUjs7QUFaUTtFQUVFLGFBQUE7RUFDQSxjQUFBO0VBQ0EsZ0JBQUE7RUFDQSxpQkFBQTtFQUdBLG1CQUFBO0VBQ0EsV0FBQTtFQUNBLHVCQUFBO0VBQ0EscUJBQUE7QUFlVjs7QUFYTTtFQUNFLHFCQUFBO0VBQ0EsV0FBQTtFQUNBLGtCQUFBO0VBQ0EsVUFBQTtFQUNBLGNBQUE7RUFDQSxlQUFBO0VBQ0EsZUFBQTtBQWNSOztBQWJRO0VBQ0UsZUFBQTtFQUNBLGNBQUE7RUFDQSxnQkFBQTtFQUNBLGlCQUFBO0VBQ0EsaUJBQUE7QUFlVjs7QUFaTTtFQUNFLGdCQUFBO0VBQ0Esa0JBQUE7RUFDQSx1Q0FBQTtFQUNBLFlBQUE7RUFDQSxtQkFBQTtBQWVSOztBQVpNO0VBQ0Usd0JBQUE7QUFlUiIsImZpbGUiOiJjaGlsZG90aGVyaW5mb3R3by5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIud3JhcCB7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgfVxyXG4gIFxyXG4gIC53cmFwOmJlZm9yZSB7XHJcbiAgICBjb250ZW50OiBcIlwiO1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgdG9wOiAyMCU7XHJcbiAgICBsZWZ0OiAxOCU7XHJcbiAgICBib3JkZXItdG9wOiAwLjVweCBzb2xpZCAjNjc3NDgzO1xyXG4gICAgYm9yZGVyLXdpZHRoOiB0aGluO1xyXG4gICAgd2lkdGg6IDY1JTtcclxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtNTAlKTtcclxuICAgIGJvcmRlci1zdHlsZTogZGFzaGVkO1xyXG4gIH1cclxuICAuYWN0aXZle1xyXG4gICAgYm9yZGVyOiAxcHggc29saWQgIzJkZDM2ZiAhaW1wb3J0YW50O1xyXG4gICAgY29sb3I6ICNmZmZmZmY7XHJcbiAgfVxyXG4gIC5pY29uLWNpcmNsZXtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICAgIG1hcmdpbjogLTFweDtcclxuICAgIHdpZHRoOiAzMHB4O1xyXG4gICAgaGVpZ2h0OiAzMHB4O1xyXG4gICAgZm9udC1zaXplOiAyNnB4O1xyXG4gICAgYm9yZGVyLXJhZGl1czogNTAlO1xyXG4gICAgYm9yZGVyOiAxcHggc29saWQgIzIwMjAyMDtcclxuICAgIGJhY2tncm91bmQ6ICNmZmY7XHJcbiAgICBjb2xvcjogIzJkZDM2ZjtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuXHJcbiAgICBpb24taWNvbntcclxuICAgICAgICBtYXJnaW4tdG9wOiAycHg7XHJcbiAgICAgICAgZm9udC1zaXplOiAyMHB4O1xyXG4gICAgfVxyXG4gIFxyXG4gIH1cclxuICBcclxuICBcclxuICAuaGVhZGVyLTF7XHJcbiAgICBjb2xvcjogIzY3Njc2NztcclxuICAgIG1hcmdpbi1ib3R0b206IDA7XHJcbiAgICBmb250LXNpemU6IDE2cHg7XHJcbn1cclxuICAuaGVhZGluZy0xe1xyXG4gICAgY29sb3I6ICM2NzY3Njc7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAwO1xyXG4gICAgZm9udC1zaXplOiAxNnB4O1xyXG59XHJcbi5oZWFkaW5ne1xyXG4gICAgY29sb3I6ICM5YjljYTY7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAwO1xyXG4gICAgZm9udC1zaXplOiAxNHB4O1xyXG59XHJcbmlvbi1sYWJlbHtcclxuICAgIGNvbG9yOiAjOWI5Y2E2O1xyXG4gICAgZm9udC1zaXplOiAxNHB4O1xyXG59XHJcbmlvbi1pbnB1dCB7XHJcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjOWI5Y2E2O1xyXG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xyXG4gICAgLS1wYWRkaW5nLXN0YXJ0OiA1cHggIWltcG9ydGFudDtcclxuICAgIGhlaWdodDozNXB4O1xyXG59XHJcbmlvbi10ZXh0YXJlYXtcclxuICAgIGJvcmRlcjogMXB4IHNvbGlkICM5YjljYTY7XHJcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XHJcbiAgICAtLXBhZGRpbmctc3RhcnQ6IDVweCAhaW1wb3J0YW50O1xyXG59XHJcbmlvbi1kYXRldGltZXtcclxuICAgIGJvcmRlcjogMXB4IHNvbGlkICM5YjljYTY7XHJcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XHJcbiAgICAtLXBhZGRpbmctc3RhcnQ6IDVweCAhaW1wb3J0YW50O1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBoZWlnaHQ6MzVweDtcclxuXHJcbn1cclxuaW9uLWl0ZW17XHJcbiAgICAvLyBib3JkZXItYm90dG9tOiAxcHggc29saWQgIzY3NzQ4MztcclxuICAgIC0tcGFkZGluZy1zdGFydDogMDtcclxuICAgIC0tcmlwcGxlLWNvbG9yOiB0cmFuc3BhcmVudDtcclxuICAgIC0tYmFja2dyb3VuZC1hY3RpdmF0ZWQ6IHRyYW5zcGFyZW50O1xyXG4gICAgLS1iYWNrZ3JvdW5kLWFjdGl2YXRlZC1vcGFjaXR5OnRyYW5zcGFyZW50O1xyXG4gICAgLS1iYWNrZ3JvdW5kLWZvY3VzZWQ6IHRyYW5zcGFyZW50O1xyXG4gICAgLS1iYWNrZ3JvdW5kLWZvY3VzZWQtb3BhY2l0eTp0cmFuc3BhcmVudDtcclxuICAgIC0tYmFja2dyb3VuZC1ob3ZlciAgOiB0cmFuc3BhcmVudDtcclxuICAgIC0tYmFja2dyb3VuZC1ob3Zlci1vcGFjaXR5ICA6dHJhbnNwYXJlbnQ7XHJcblxyXG4gICAgaW9uLWxhYmVsIHtcclxuICAgICAgICBmb250LXNpemU6IDEycHg7XHJcbiAgICBjb2xvcjogIzliOWNhNjtcclxuXHJcbiAgICB9XHJcbn1cclxuICAgIGlvbi1yYWRpby1ncm91cHtcclxuICAgICAgICBpb24taXRlbXtcclxuICAgICAgICAgICAgYm9yZGVyLWJvdHRvbTogMDtcclxuICAgICAgICB9XHJcbiAgICAgICAgaW9uLWNvbCB7XHJcbiAgICAgICAgICAgIHBhZGRpbmctbGVmdDogMDtcclxuICAgICAgICB9XHJcbiAgICAgICAgaW9uLXJhZGlve1xyXG4gICAgICAgIG1hcmdpbi1yaWdodDogOHB4O1xyXG4gICAgICAgIHdpZHRoOiAxOHB4O1xyXG4gICAgICAgIGhlaWdodDogMThweDtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgaW9uLWNvbCB7XHJcbiAgICAgICAgcGFkZGluZy1sZWZ0OiAwO1xyXG4gICAgfVxyXG5cclxuICAgIGlvbi1idXR0b24ge1xyXG4gICAgICAgIHRleHQtdHJhbnNmb3JtOiBub25lO1xyXG4gICAgfVxyXG4gICAgLmNob29zZS1idG57XHJcbiAgICAgICAgLS1iYWNrZ3JvdW5kOiAjZWU0YTM1O1xyXG4gICAgfVxyXG4gICAgLmhlYWRpbmctM3tcclxuICAgICAgICBtYXJnaW4tdG9wOiAxMnB4O1xyXG4gICAgICAgIGNvbG9yOiAjOTI5NzkxO1xyXG4gICAgfVxyXG4gICAgLmNvbG9yLWdyZWVue1xyXG4gICAgICAgIGNvbG9yOiAjMmRkMzZmO1xyXG4gICAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gICAgICAgIG1hcmdpbi10b3A6IDEwcHg7XHJcbiAgICB9XHJcbiAgICAuY2hlY2ttYXJre1xyXG4gICAgICAgIG1hcmdpbi10b3A6IC0ycHg7XHJcbiAgICB9XHJcbiAgICAuZG90e1xyXG4gICAgICAgIGNvbG9yOiAjMjAyMDIwICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgbWFyZ2luLXRvcDogMnB4O1xyXG4gICAgfVxyXG4gICAgLm90aGVyLWluZm8ge1xyXG4gICAgICAgIG1hcmdpbi10b3A6IDE2cHg7XHJcbiAgICB9XHJcbiAgICBpbWd7XHJcbiAgICAgIHdpZHRoOiA2MCU7XHJcbiAgfVxyXG4gICAgLmJvd2VsLWlucHV0e1xyXG4gICAgICAgIG1hcmdpbi10b3A6IDI1cHhcclxuICAgIH1cclxuICAgIC5hZG1pc3Npb24tcm93e1xyXG4gICAgICAgIGlvbi1jb2x7XHJcbiAgICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgICAgICAgICAgdGV4dC1hbGlnbjogLW1vei1jZW50ZXI7XHJcbiAgICAgICAgICAgIGlvbi1idXR0b257XHJcbiAgICAgICAgICAgICAgICB0ZXh0LXRyYW5zZm9ybTogbm9uZTtcclxuICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICB3aWR0aDogODAlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgIFxyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIC5uZXh0LWJ0bi1jb2x7XHJcbiAgICAgICAgdGV4dC1hbGlnbjogbGVmdCAhaW1wb3J0YW50O1xyXG4gICAgfVxyXG4gICAgLmxpc3QtZ3JvdXAudmVydGljYWwtc3RlcHMgLmxpc3QtZ3JvdXAtaXRlbSB7XHJcbiAgICAgICAgYm9yZGVyOiBub25lO1xyXG4gICAgICAgIGJvcmRlci1sZWZ0OiAzcHggc29saWQgI2I0YjRiNDtcclxuICAgICAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xyXG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDA7XHJcbiAgICAgICAgY291bnRlci1pbmNyZW1lbnQ6IHN0ZXAtY291bnRlcjtcclxuICAgICAgICBwYWRkaW5nLWxlZnQ6IDIwcHg7XHJcbiAgICAgICAgcGFkZGluZy1yaWdodDogMHB4O1xyXG4gICAgICAgIHBhZGRpbmctYm90dG9tOiA3cHg7XHJcbiAgICAgICAgcGFkZGluZy10b3A6IDBweDtcclxuICAgICAgfVxyXG4gICAgICAubGlzdC1ncm91cC52ZXJ0aWNhbC1zdGVwcyAubGlzdC1ncm91cC1pdGVtOjpiZWZvcmUge1xyXG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcclxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjYjRiNGI0O1xyXG4gICAgICAgIGNvbG9yOiAjZmZmO1xyXG4gICAgICAgIGNvbnRlbnQ6IGNvdW50ZXIoc3RlcC1jb3VudGVyKTtcclxuICAgICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgICAgICAgZmxvYXQ6IGxlZnQ7XHJcbiAgICAgICAgaGVpZ2h0OiAyNXB4O1xyXG4gICAgICAgIGxpbmUtaGVpZ2h0OiAyNXB4O1xyXG4gICAgICAgIG1hcmdpbi1sZWZ0OiAtMzVweDtcclxuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICAgICAgd2lkdGg6IDI1cHg7XHJcbiAgICAgIH1cclxuICAgICAgLmxpc3QtZ3JvdXAudmVydGljYWwtc3RlcHMgLmZpbmFsOjpiZWZvcmUge1xyXG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcclxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMmRkMzZmO1xyXG4gICAgICAgIGNvbG9yOiAjZmZmO1xyXG4gICAgICAgIGNvbnRlbnQ6IGNvdW50ZXIoc3RlcC1jb3VudGVyKTtcclxuICAgICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgICAgICAgZmxvYXQ6IGxlZnQ7XHJcbiAgICAgICAgaGVpZ2h0OiAyNXB4O1xyXG4gICAgICAgIGxpbmUtaGVpZ2h0OiAyNXB4O1xyXG4gICAgICAgIG1hcmdpbi1sZWZ0OiAtMzFweDtcclxuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICAgICAgd2lkdGg6IDI1cHg7XHJcbiAgICAgIH1cclxuICAgICAgLmZpbmFse1xyXG4gICAgICAgIGJvcmRlci1sZWZ0OiBub25lICFpbXBvcnRhbnQ7XHJcbiAgICAgIH1cclxuICAgICAgLnN0ZXAtYWN0aXZle1xyXG4gICAgICAgIGJvcmRlci1sZWZ0OiAzcHggc29saWQgIzJkZDM2ZiAhaW1wb3J0YW50O1xyXG4gICAgICB9XHJcbiAgICAgIC5saXN0LWdyb3VwLnZlcnRpY2FsLXN0ZXBzIC5zdGVwLWFjdGl2ZTo6YmVmb3JlIHtcclxuICAgICAgICBib3JkZXItcmFkaXVzOiA1MCU7XHJcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogIzJkZDM2ZjtcclxuICAgICAgICBjb2xvcjogI2ZmZjtcclxuICAgICAgICBjb250ZW50OiBjb3VudGVyKHN0ZXAtY291bnRlcik7XHJcbiAgICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gICAgICAgIGZsb2F0OiBsZWZ0O1xyXG4gICAgICAgIGhlaWdodDogMjVweDtcclxuICAgICAgICBsaW5lLWhlaWdodDogMjVweDtcclxuICAgICAgICBtYXJnaW4tbGVmdDogLTM1cHg7XHJcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgICAgIHdpZHRoOiAyNXB4O1xyXG4gICAgICB9XHJcbiAgICAgIC5saXN0LWdyb3VwLnZlcnRpY2FsLXN0ZXBzIC5saXN0LWdyb3VwLWl0ZW0gc3BhbiwgLmxpc3QtZ3JvdXAudmVydGljYWwtc3RlcHMgLmxpc3QtZ3JvdXAtaXRlbSBhIHtcclxuICAgICAgICBkaXNwbGF5OiBibG9jaztcclxuICAgICAgICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gICAgICAgIHBhZGRpbmctdG9wOiAycHg7XHJcbiAgICAgIH1cclxuICAgICAgXHJcbiAgICAgIGRpdi5yZXVzYWJsZV9hY2NvcmRpb24ge1xyXG4gICAgICAgIHotaW5kZXg6IDk5O1xyXG4gICAgICAgIHBhZGRpbmc6IDA7XHJcbiAgICAgICAgbWFyZ2luOiAwO1xyXG4gICAgICAgIGxpc3Qtc3R5bGU6IG5vbmU7XHJcbiAgICAgICAgZGlzcGxheTogLXdlYmtpdC1ib3g7XHJcbiAgICAgICAgZGlzcGxheTogLW1vei1ib3g7XHJcbiAgICAgICAgZGlzcGxheTogLW1zLWZsZXhib3g7XHJcbiAgICAgICAgZGlzcGxheTogLXdlYmtpdC1mbGV4O1xyXG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgZmxleC13cmFwOiB3cmFwO1xyXG4gICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XHJcbiAgICAgICAgbGluZS1oZWlnaHQ6IDI1cHg7XHJcbiAgICAgICAgaGVpZ2h0OiAxODBweDtcclxuICAgICAgICBiYWNrZ3JvdW5kOiAjZjFmMWYxO1xyXG4gICAgICAgIHdpZHRoOiBhdXRvO1xyXG4gICAgICB9XHJcbiAgICAgIGRpdi50ZW1wbGF0ZV9hY2NvcmRpb24ge1xyXG4gICAgICAgIGRpdi50ZW1wbGF0ZV9jb250YWluZXJzIHtcclxuICAgICAgICAgIGRpc3BsYXk6IC13ZWJraXQtYm94O1xyXG4gICAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICAgIG1pbi13aWR0aDogNDUlO1xyXG4gICAgICAgICAgbWluLWhlaWdodDogNjBweDtcclxuICAgICAgICAgIGJhY2tncm91bmQ6IHdoaXRlO1xyXG4gICAgICAgICAgLXdlYmtpdC1ib3gtb3JpZW50OiBob3Jpem9udGFsO1xyXG4gICAgICAgICAgLXdlYmtpdC1ib3gtZGlyZWN0aW9uOiBub3JtYWw7XHJcbiAgICAgICAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xyXG4gICAgICAgICAgbWFyZ2luOiA1cHg7XHJcbiAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgICAgICAgIGFsaWduLWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgICAgXHJcbiAgICAgIC50b2dnbGVfYnV0dG9uIHtcclxuICAgICAgICAtLWJhY2tncm91bmQ6ICNmMWYxZjE7XHJcbiAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgICAgIHBhZGRpbmc6IDA7XHJcbiAgICAgICAgY29sb3I6ICMyMDIwMjA7XHJcbiAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgICAgIG1pbi13aWR0aDogMTAwJTtcclxuICAgICAgICBpb24tbGFiZWx7XHJcbiAgICAgICAgICBmb250LXNpemU6IDE2cHg7XHJcbiAgICAgICAgICBjb2xvcjogIzIwMjAyMDtcclxuICAgICAgICAgIHRleHQtYWxpZ246IGxlZnQ7XHJcbiAgICAgICAgICBtYXJnaW4tbGVmdDogMjBweDtcclxuICAgICAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgICBkaXYuYWNjb3JkaW9uLWNvbnRhaW5lciB7XHJcbiAgICAgICAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICAgICAgICBvdmVyZmxvdy15OiBzY3JvbGw7XHJcbiAgICAgICAgdHJhbnNpdGlvbjogbWF4LWhlaWdodCAwLjVzIGVhc2UtaW4tb3V0O1xyXG4gICAgICAgIGhlaWdodDogYXV0bztcclxuICAgICAgICBiYWNrZ3JvdW5kOiByZ2IoMzEsIDQzLCA1NSk7XHJcbiAgICAgIH1cclxuICAgICAgXHJcbiAgICAgIGRpdi5hY2NvcmRpb24tY29udGFpbmVyLmNvbGxhcHNlZCB7XHJcbiAgICAgICAgbWF4LWhlaWdodDogMCAhaW1wb3J0YW50O1xyXG4gICAgICB9XHJcbiAgICAgICJdfQ== */";
      /***/
    },

    /***/
    "snrj":
    /*!*************************************************************!*\
      !*** ./src/app/childotherinfotwo/childotherinfotwo.page.ts ***!
      \*************************************************************/

    /*! exports provided: ChildotherinfotwoPage */

    /***/
    function snrj(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ChildotherinfotwoPage", function () {
        return ChildotherinfotwoPage;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_childotherinfotwo_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./childotherinfotwo.page.html */
      "0Jjz");
      /* harmony import */


      var _childotherinfotwo_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./childotherinfotwo.page.scss */
      "P8bj");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/forms */
      "3Pt+");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
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
      /*! ./../api.service */
      "yTNM");
      /* harmony import */


      var _ionic_storage__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! @ionic/storage */
      "e8h1");
      /* harmony import */


      var _ionic_native_camera_ngx__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! @ionic-native/camera/ngx */
      "a/9d");
      /* harmony import */


      var _ionic_native_file_ngx__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! @ionic-native/file/ngx */
      "FAH8");

      var ChildotherinfotwoPage = /*#__PURE__*/function () {
        function ChildotherinfotwoPage(storage, apiService, actionSheetController, alertController, router, file, camera, cf, loadingController, menuCtrl) {
          _classCallCheck(this, ChildotherinfotwoPage);

          this.storage = storage;
          this.apiService = apiService;
          this.actionSheetController = actionSheetController;
          this.alertController = alertController;
          this.router = router;
          this.file = file;
          this.camera = camera;
          this.cf = cf;
          this.loadingController = loadingController;
          this.menuCtrl = menuCtrl;
          this.accordion_expanded = false;
        }

        _createClass(ChildotherinfotwoPage, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            this.menuCtrl.enable(false);
            this.stepFourForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormGroup"]({
              q1_ans: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].pattern(/^[a-zA-Z\. ]+$/)]),
              q2_ans: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].pattern(/^[a-zA-z -]+$/)]),
              q3_ans: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](''),
              q5_ans: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].maxLength(10), _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].minLength(10), _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].pattern(/^[0-9]{10}$/)]),
              q6_ans: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].pattern(/^[a-zA-Z\. ]+$/)]),
              q7_ans: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].pattern(/^[a-zA-z -]+$/)]),
              q8_ans: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](''),
              q10_ans: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].maxLength(10), _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].minLength(10), _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].pattern(/^[0-9]{10}$/)]),
              q11_ans: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]('')
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
          key: "q1_ans",
          get: function get() {
            return this.stepFourForm.get('q1_ans');
          }
        }, {
          key: "q2_ans",
          get: function get() {
            return this.stepFourForm.get('q2_ans');
          }
        }, {
          key: "q3_ans",
          get: function get() {
            return this.stepFourForm.get('q3_ans');
          }
        }, {
          key: "q5_ans",
          get: function get() {
            return this.stepFourForm.get('q5_ans');
          }
        }, {
          key: "q6_ans",
          get: function get() {
            return this.stepFourForm.get('q6_ans');
          }
        }, {
          key: "q7_ans",
          get: function get() {
            return this.stepFourForm.get('q7_ans');
          }
        }, {
          key: "q8_ans",
          get: function get() {
            return this.stepFourForm.get('q8_ans');
          }
        }, {
          key: "q10_ans",
          get: function get() {
            return this.stepFourForm.get('q10_ans');
          }
        }, {
          key: "q11",
          get: function get() {
            return this.stepFourForm.get('q11_ans');
          } // get old_image1(){
          //   return this.stepFourForm.get('old_image1')
          // }
          // get old_image2(){
          //   return this.stepFourForm.get('old_image2')
          // }

        }, {
          key: "onSubmit",
          value: function onSubmit(body) {
            var _this = this;

            this.presentLoading();
            console.log('body', body);
            var formData = new FormData();
            formData.append("userid", this.userid);
            formData.append("q1_ans", body['q1_ans']);
            formData.append("q2_ans", body['q2_ans']);
            formData.append("q3_ans", body['q3_ans']);
            formData.append("q5_ans", body['q5_ans']);
            formData.append("q6_ans", body['q6_ans']);
            formData.append("q7_ans", body['q7_ans']);
            formData.append("q8_ans", body['q8_ans']);
            formData.append("q10_ans", body['q10_ans']);
            formData.append("q11_ans", body['q11_ans']);

            if (this.isDataPresent) {
              console.log("data present");
              formData.append("child_consent_id", this.child_consent_id);
              formData.append("old_image1", this.old_image1);
              formData.append("old_image2", this.old_image2);

              if (this.image1imgBlob) {
                formData.append("q4_ans", this.image1imgBlob, this.image1_file_name);
              }

              if (this.image2imgBlob) {
                formData.append("q9_ans", this.image2imgBlob, this.image2_file_name);
              }

              this.apiService.updateDaycareRegStep4(formData).subscribe(function (data) {
                console.log('data', data);

                _this.loadingController.dismiss();

                _this.presentAlert("Daycare Step 4 form submitted successfully");

                _this.stepFourForm.reset();
              }, function (err) {
                console.log(err);
                console.log(err.status);

                _this.loadingController.dismiss(); // if (err.status == 200){
                // }else{
                //   console.log(JSON.parse(err.error.text));
                //   this.apiService.presentToast(err.error,2000);
                // } 

              });
            } else {
              console.log("data not present");
              formData.append("child_consent_id", this.child_consent_id);

              if (this.image1imgBlob) {
                formData.append("q4_ans", this.image1imgBlob, this.image1_file_name);
              }

              if (this.image2imgBlob) {
                formData.append("q9_ans", this.image2imgBlob, this.image2_file_name);
              }

              console.log(formData.get('q4_ans'));
              console.log(formData.get('q9_ans'));
              this.apiService.daycareRegistrationStep4(formData).subscribe(function (data) {
                console.log(data);

                _this.loadingController.dismiss();

                _this.presentAlert("Daycare Step 4 form submitted successfully");

                _this.stepFourForm.reset();

                console.log(data);
              }, function (err) {
                console.log(err);
                console.log(err.status);

                _this.loadingController.dismiss();
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
                  console.log('userid', _this2.userid, user.userid);

                  _this2.apiService.fetchDayCareStep4(_this2.userid).then(function (data) {
                    console.log('fetchDayCareStep4', data.data);
                    var fetchDayCareStep4 = JSON.parse(data.data);

                    if (fetchDayCareStep4) {
                      _this2.fetchDayCareStep4 = fetchDayCareStep4['a'];

                      if (_this2.fetchDayCareStep4) {
                        _this2.child_consent_id = _this2.fetchDayCareStep4.id;
                        _this2.img1 = _this2.fetchDayCareStep4.img1;
                        _this2.img2 = _this2.fetchDayCareStep4.img2;
                        _this2.old_image1 = _this2.fetchDayCareStep4.image1;
                        _this2.old_image2 = _this2.fetchDayCareStep4.image2;

                        _this2.stepFourForm.patchValue({
                          'q1_ans': _this2.fetchDayCareStep4.name1,
                          'q2_ans': _this2.fetchDayCareStep4.relationship1,
                          'q3_ans': _this2.fetchDayCareStep4.address1,
                          'q5_ans': _this2.fetchDayCareStep4.mobile_number1,
                          'q6_ans': _this2.fetchDayCareStep4.name2,
                          'q7_ans': _this2.fetchDayCareStep4.relationship2,
                          'q8_ans': _this2.fetchDayCareStep4.address2,
                          'q10_ans': _this2.fetchDayCareStep4.mobile_number2,
                          'q11_ans': _this2.fetchDayCareStep4.q1
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
                          _this3.apiService.userDetails(_this3.userid, 'Daycare').then(function (data) {
                            console.log(_this3.fetchDayCareStep1);
                            _this3.fetchDayCareStep1 = JSON.parse(data.data);

                            if (_this3.fetchDayCareStep1.status == 'Active' && _this3.fetchDayCareStep1.Approve_status == 'Active') {
                              _this3.router.navigate(['quicktour']);
                            } else {
                              _this3.apiService.presentToast('Please wait for your registration approval', 2000);

                              _this3.router.navigate(['switchprofile']); // this.storage.set('type','login').then(_=>{
                              //   });

                            }
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
          key: "presentActionSheet",
          value: function presentActionSheet(type) {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/_regeneratorRuntime().mark(function _callee3() {
              var _this4 = this;

              var actionSheet;
              return _regeneratorRuntime().wrap(function _callee3$(_context3) {
                while (1) switch (_context3.prev = _context3.next) {
                  case 0:
                    _context3.next = 2;
                    return this.actionSheetController.create({
                      header: 'Options',
                      cssClass: 'action-sheets-basic-page',
                      buttons: [{
                        text: 'Take photo',
                        role: 'destructive',
                        icon: 'camera-outline',
                        handler: function handler() {
                          if (type == 'image1') {
                            _this4.takePicture('image1');
                          } else if (type == 'image2') {
                            _this4.takePicture('image2');
                          }
                        }
                      }, {
                        text: 'Choose photo from Gallery',
                        icon: 'images-outline',
                        handler: function handler() {
                          if (type == 'image1') {
                            _this4.openGallery('image1');
                          } else if (type == 'image2') {
                            _this4.openGallery('image2');
                          }
                        }
                      }]
                    });

                  case 2:
                    actionSheet = _context3.sent;
                    actionSheet.present();

                  case 4:
                  case "end":
                    return _context3.stop();
                }
              }, _callee3, this);
            }));
          }
        }, {
          key: "takePicture",
          value: function takePicture(type) {
            var _this5 = this;

            var options = {
              quality: 70,
              destinationType: this.camera.DestinationType.FILE_URI,
              encodingType: this.camera.EncodingType.JPEG,
              mediaType: this.camera.MediaType.PICTURE,
              correctOrientation: true
            };
            this.camera.getPicture(options).then(function (imageData) {
              _this5.file.resolveLocalFilesystemUrl(imageData).then(function (entry) {
                entry.file(function (file) {
                  console.log(file);

                  if (type == 'image1') {
                    _this5.image1_file_name = file.name;
                    _this5.image1base64Image = window.Ionic.WebView.convertFileSrc(imageData);
                  } else if (type == 'image2') {
                    _this5.image2_file_name = file.name;
                    _this5.image2base64Image = window.Ionic.WebView.convertFileSrc(imageData);
                  }

                  _this5.cf.detectChanges();

                  _this5.readFile(file, type);
                });
              });
            }, function (err) {
              _this5.image1base64Image = null;
              _this5.image2base64Image = null;
            });
          }
        }, {
          key: "openGallery",
          value: function openGallery(type) {
            var _this6 = this;

            var options = {
              quality: 70,
              destinationType: this.camera.DestinationType.FILE_URI,
              encodingType: this.camera.EncodingType.JPEG,
              mediaType: this.camera.MediaType.PICTURE,
              correctOrientation: true,
              sourceType: this.camera.PictureSourceType.PHOTOLIBRARY
            };
            this.camera.getPicture(options).then(function (imageData) {
              _this6.file.resolveLocalFilesystemUrl(imageData).then(function (entry) {
                entry.file(function (file) {
                  console.log(file);

                  if (file.type == 'image/jpeg') {
                    var filename = file.name;
                    var file_ext = filename.split('.').slice(-1).join('.');
                    var filename_wo_ext = filename.split('.').slice(0, -1).join('.');
                    _this6.modified_filename = filename_wo_ext + file.lastModified.toString() + "." + file_ext;
                    console.log('this.child_file_name', _this6.modified_filename);
                  } else {
                    _this6.modified_filename = file.name;
                  }

                  if (type == 'image1') {
                    _this6.image1_file_name = _this6.modified_filename;
                    _this6.image1base64Image = window.Ionic.WebView.convertFileSrc(imageData);
                  } else if (type == 'image2') {
                    _this6.image2_file_name = _this6.modified_filename;
                    _this6.image2base64Image = window.Ionic.WebView.convertFileSrc(imageData);
                  }

                  _this6.cf.detectChanges();

                  _this6.readFile(file, type);
                });
              });
            }, function (err) {// Handle error
            });
          }
        }, {
          key: "readFile",
          value: function readFile(file, type) {
            var _this7 = this;

            var reader = new FileReader();

            reader.onloadend = function () {
              if (type == 'image1') {
                _this7.image1imgBlob = new Blob([reader.result], {
                  type: file.type
                });
              } else if (type == 'image2') {
                _this7.image2imgBlob = new Blob([reader.result], {
                  type: file.type
                });
              }

              console.log("name", file.name);
            };

            reader.readAsArrayBuffer(file);
          }
        }, {
          key: "ionViewDidLeave",
          value: function ionViewDidLeave() {
            this.menuCtrl.enable(true);
          }
        }, {
          key: "ionViewWillEnter",
          value: function ionViewWillEnter() {
            if (this.menuCtrl.isEnabled) {
              console.log('hi');
              this.menuCtrl.swipeGesture(false);
            }
          }
        }]);

        return ChildotherinfotwoPage;
      }();

      ChildotherinfotwoPage.ctorParameters = function () {
        return [{
          type: _ionic_storage__WEBPACK_IMPORTED_MODULE_8__["Storage"]
        }, {
          type: _api_service__WEBPACK_IMPORTED_MODULE_7__["ApiService"]
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["ActionSheetController"]
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["AlertController"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"]
        }, {
          type: _ionic_native_file_ngx__WEBPACK_IMPORTED_MODULE_10__["File"]
        }, {
          type: _ionic_native_camera_ngx__WEBPACK_IMPORTED_MODULE_9__["Camera"]
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["ChangeDetectorRef"]
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["LoadingController"]
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["MenuController"]
        }];
      };

      ChildotherinfotwoPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_4__["Component"])({
        selector: 'app-childotherinfotwo',
        template: _raw_loader_childotherinfotwo_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_childotherinfotwo_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
      })], ChildotherinfotwoPage);
      /***/
    }
  }]);
})();
//# sourceMappingURL=childotherinfotwo-childotherinfotwo-module-es5.js.map