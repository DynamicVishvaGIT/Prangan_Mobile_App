(function () {
  function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return e; }; var t, e = {}, r = Object.prototype, n = r.hasOwnProperty, o = Object.defineProperty || function (t, e, r) { t[e] = r.value; }, i = "function" == typeof Symbol ? Symbol : {}, a = i.iterator || "@@iterator", c = i.asyncIterator || "@@asyncIterator", u = i.toStringTag || "@@toStringTag"; function define(t, e, r) { return Object.defineProperty(t, e, { value: r, enumerable: !0, configurable: !0, writable: !0 }), t[e]; } try { define({}, ""); } catch (t) { define = function define(t, e, r) { return t[e] = r; }; } function wrap(t, e, r, n) { var i = e && e.prototype instanceof Generator ? e : Generator, a = Object.create(i.prototype), c = new Context(n || []); return o(a, "_invoke", { value: makeInvokeMethod(t, r, c) }), a; } function tryCatch(t, e, r) { try { return { type: "normal", arg: t.call(e, r) }; } catch (t) { return { type: "throw", arg: t }; } } e.wrap = wrap; var h = "suspendedStart", l = "suspendedYield", f = "executing", s = "completed", y = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var p = {}; define(p, a, function () { return this; }); var d = Object.getPrototypeOf, v = d && d(d(values([]))); v && v !== r && n.call(v, a) && (p = v); var g = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(p); function defineIteratorMethods(t) { ["next", "throw", "return"].forEach(function (e) { define(t, e, function (t) { return this._invoke(e, t); }); }); } function AsyncIterator(t, e) { function invoke(r, o, i, a) { var c = tryCatch(t[r], t, o); if ("throw" !== c.type) { var u = c.arg, h = u.value; return h && "object" == typeof h && n.call(h, "__await") ? e.resolve(h.__await).then(function (t) { invoke("next", t, i, a); }, function (t) { invoke("throw", t, i, a); }) : e.resolve(h).then(function (t) { u.value = t, i(u); }, function (t) { return invoke("throw", t, i, a); }); } a(c.arg); } var r; o(this, "_invoke", { value: function value(t, n) { function callInvokeWithMethodAndArg() { return new e(function (e, r) { invoke(t, n, e, r); }); } return r = r ? r.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); } }); } function makeInvokeMethod(e, r, n) { var o = h; return function (i, a) { if (o === f) throw new Error("Generator is already running"); if (o === s) { if ("throw" === i) throw a; return { value: t, done: !0 }; } for (n.method = i, n.arg = a;;) { var c = n.delegate; if (c) { var u = maybeInvokeDelegate(c, n); if (u) { if (u === y) continue; return u; } } if ("next" === n.method) n.sent = n._sent = n.arg;else if ("throw" === n.method) { if (o === h) throw o = s, n.arg; n.dispatchException(n.arg); } else "return" === n.method && n.abrupt("return", n.arg); o = f; var p = tryCatch(e, r, n); if ("normal" === p.type) { if (o = n.done ? s : l, p.arg === y) continue; return { value: p.arg, done: n.done }; } "throw" === p.type && (o = s, n.method = "throw", n.arg = p.arg); } }; } function maybeInvokeDelegate(e, r) { var n = r.method, o = e.iterator[n]; if (o === t) return r.delegate = null, "throw" === n && e.iterator["return"] && (r.method = "return", r.arg = t, maybeInvokeDelegate(e, r), "throw" === r.method) || "return" !== n && (r.method = "throw", r.arg = new TypeError("The iterator does not provide a '" + n + "' method")), y; var i = tryCatch(o, e.iterator, r.arg); if ("throw" === i.type) return r.method = "throw", r.arg = i.arg, r.delegate = null, y; var a = i.arg; return a ? a.done ? (r[e.resultName] = a.value, r.next = e.nextLoc, "return" !== r.method && (r.method = "next", r.arg = t), r.delegate = null, y) : a : (r.method = "throw", r.arg = new TypeError("iterator result is not an object"), r.delegate = null, y); } function pushTryEntry(t) { var e = { tryLoc: t[0] }; 1 in t && (e.catchLoc = t[1]), 2 in t && (e.finallyLoc = t[2], e.afterLoc = t[3]), this.tryEntries.push(e); } function resetTryEntry(t) { var e = t.completion || {}; e.type = "normal", delete e.arg, t.completion = e; } function Context(t) { this.tryEntries = [{ tryLoc: "root" }], t.forEach(pushTryEntry, this), this.reset(!0); } function values(e) { if (e || "" === e) { var r = e[a]; if (r) return r.call(e); if ("function" == typeof e.next) return e; if (!isNaN(e.length)) { var o = -1, i = function next() { for (; ++o < e.length;) if (n.call(e, o)) return next.value = e[o], next.done = !1, next; return next.value = t, next.done = !0, next; }; return i.next = i; } } throw new TypeError(typeof e + " is not iterable"); } return GeneratorFunction.prototype = GeneratorFunctionPrototype, o(g, "constructor", { value: GeneratorFunctionPrototype, configurable: !0 }), o(GeneratorFunctionPrototype, "constructor", { value: GeneratorFunction, configurable: !0 }), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, u, "GeneratorFunction"), e.isGeneratorFunction = function (t) { var e = "function" == typeof t && t.constructor; return !!e && (e === GeneratorFunction || "GeneratorFunction" === (e.displayName || e.name)); }, e.mark = function (t) { return Object.setPrototypeOf ? Object.setPrototypeOf(t, GeneratorFunctionPrototype) : (t.__proto__ = GeneratorFunctionPrototype, define(t, u, "GeneratorFunction")), t.prototype = Object.create(g), t; }, e.awrap = function (t) { return { __await: t }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, c, function () { return this; }), e.AsyncIterator = AsyncIterator, e.async = function (t, r, n, o, i) { void 0 === i && (i = Promise); var a = new AsyncIterator(wrap(t, r, n, o), i); return e.isGeneratorFunction(r) ? a : a.next().then(function (t) { return t.done ? t.value : a.next(); }); }, defineIteratorMethods(g), define(g, u, "Generator"), define(g, a, function () { return this; }), define(g, "toString", function () { return "[object Generator]"; }), e.keys = function (t) { var e = Object(t), r = []; for (var n in e) r.push(n); return r.reverse(), function next() { for (; r.length;) { var t = r.pop(); if (t in e) return next.value = t, next.done = !1, next; } return next.done = !0, next; }; }, e.values = values, Context.prototype = { constructor: Context, reset: function reset(e) { if (this.prev = 0, this.next = 0, this.sent = this._sent = t, this.done = !1, this.delegate = null, this.method = "next", this.arg = t, this.tryEntries.forEach(resetTryEntry), !e) for (var r in this) "t" === r.charAt(0) && n.call(this, r) && !isNaN(+r.slice(1)) && (this[r] = t); }, stop: function stop() { this.done = !0; var t = this.tryEntries[0].completion; if ("throw" === t.type) throw t.arg; return this.rval; }, dispatchException: function dispatchException(e) { if (this.done) throw e; var r = this; function handle(n, o) { return a.type = "throw", a.arg = e, r.next = n, o && (r.method = "next", r.arg = t), !!o; } for (var o = this.tryEntries.length - 1; o >= 0; --o) { var i = this.tryEntries[o], a = i.completion; if ("root" === i.tryLoc) return handle("end"); if (i.tryLoc <= this.prev) { var c = n.call(i, "catchLoc"), u = n.call(i, "finallyLoc"); if (c && u) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } else if (c) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); } else { if (!u) throw new Error("try statement without catch or finally"); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } } } }, abrupt: function abrupt(t, e) { for (var r = this.tryEntries.length - 1; r >= 0; --r) { var o = this.tryEntries[r]; if (o.tryLoc <= this.prev && n.call(o, "finallyLoc") && this.prev < o.finallyLoc) { var i = o; break; } } i && ("break" === t || "continue" === t) && i.tryLoc <= e && e <= i.finallyLoc && (i = null); var a = i ? i.completion : {}; return a.type = t, a.arg = e, i ? (this.method = "next", this.next = i.finallyLoc, y) : this.complete(a); }, complete: function complete(t, e) { if ("throw" === t.type) throw t.arg; return "break" === t.type || "continue" === t.type ? this.next = t.arg : "return" === t.type ? (this.rval = this.arg = t.arg, this.method = "return", this.next = "end") : "normal" === t.type && e && (this.next = e), y; }, finish: function finish(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.finallyLoc === t) return this.complete(r.completion, r.afterLoc), resetTryEntry(r), y; } }, "catch": function _catch(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.tryLoc === t) { var n = r.completion; if ("throw" === n.type) { var o = n.arg; resetTryEntry(r); } return o; } } throw new Error("illegal catch attempt"); }, delegateYield: function delegateYield(e, r, n) { return this.delegate = { iterator: values(e), resultName: r, nextLoc: n }, "next" === this.method && (this.arg = t), y; } }, e; }

  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

  function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return typeof key === "symbol" ? key : String(key); }

  function _toPrimitive(input, hint) { if (typeof input !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (typeof res !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"], {
    /***/
    0:
    /*!***************************!*\
      !*** multi ./src/main.ts ***!
      \***************************/

    /*! no static exports found */

    /***/
    function _(module, exports, __webpack_require__) {
      module.exports = __webpack_require__(
      /*! /Users/myhome/Desktop/Projects/DYNAMIC VISHBA TECHNOLOGY/Prangan/src/main.ts */
      "zUnb");
      /***/
    },

    /***/
    "3zO9":
    /*!*****************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/editprofile/editprofile.page.html ***!
      \*****************************************************************************************/

    /*! exports provided: default */

    /***/
    function zO9(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-header>\n  <ion-toolbar>\n    <ion-title>Edit Profile</ion-title>\n    <ion-buttons slot=\"start\">\n      <ion-button  shape=\"round\" (click)=\"dismiss()\">\n        <ion-icon color=\"light\" name=\"arrow-back-outline\"></ion-icon>\n      </ion-button>\n    </ion-buttons>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n<div *ngIf=\"userType=='Preschool'\">\n  <form [formGroup]=\"preschoolUpdateForm\" (ngSubmit)=\"onPreschoolSubmit(preschoolUpdateForm.value)\">\n\n    <div class=\"margin-ionic\">\n     \n      <ion-row>\n        <ion-col size=\"12\">\n          <ion-label>Child's Name <span class=\"text-danger\">*</span></ion-label>\n          <ion-item lines=\"none\">\n            <ion-input type=\"text\" formControlName=\"child_name\"></ion-input>\n          </ion-item>\n          <div class=\"error-div\" *ngIf=\"(child_name?.invalid && child_name?.touched) || child_name?.dirty\">\n            <small *ngIf=\"child_name.errors?.pattern\" class=\"text-danger\">Enter a valid child name</small>\n          </div>\n        </ion-col>\n      </ion-row>\n     \n      <ion-row>\n        <ion-col size=\"12\">\n          <ion-label>Gender <span class=\"text-danger\">*</span></ion-label>\n\n          <ion-radio-group allowEmptySelection=\"false\" color=\"primary\" formControlName=\"gender\">\n            <ion-row>\n              <ion-col size=\"4\">\n                <ion-item lines=\"none\">\n                  <ion-radio value=\"Boy\"></ion-radio>\n                  <ion-label>Boy</ion-label>\n                </ion-item>\n              </ion-col>\n              <ion-col size=\"4\">\n                <ion-item lines=\"none\">\n                  <ion-radio value=\"Girl\"></ion-radio>\n                  <ion-label>Girl</ion-label>\n                </ion-item>\n              </ion-col>\n              <ion-col size=\"4\">\n                <ion-item lines=\"none\">\n                  <ion-radio value=\"Other\"></ion-radio>\n                  <ion-label>Other</ion-label>\n                </ion-item>\n              </ion-col>\n            </ion-row>\n          </ion-radio-group>\n        </ion-col>\n      </ion-row>\n      <ion-row>\n        <ion-col size=\"6\">\n          <ion-label>Child's DOB <span class=\"text-danger\">*</span></ion-label>\n          <ion-item lines=\"none\">\n            <ion-datetime displayFormat=\"DD MMM  YYYY\" formControlName=\"d_o_b\" max=\"{{todays_date}}\"></ion-datetime>\n\n          </ion-item>\n        </ion-col>\n     \n\n      \n        <!-- <ion-col size=\"12\">\n          <p class=\"heading\">Admission Seeking For <span class=\"text-danger\">*</span></p>\n          <ion-radio-group allowEmptySelection=\"false\" color=\"primary\" formControlName=\"class\">\n            <ion-row>\n              <ion-col size=\"4\">\n                <ion-item lines=\"none\">\n                  <ion-radio value=\"Playgroup\"></ion-radio>\n                  <ion-label>Play Group</ion-label>\n                </ion-item>\n              </ion-col>\n              <ion-col size=\"4\">\n                <ion-item lines=\"none\">\n                  <ion-radio value=\"Nursery 1\"></ion-radio>\n                  <ion-label>Nursery 1</ion-label>\n                </ion-item>\n              </ion-col>\n              <ion-col size=\"4\">\n                <ion-item lines=\"none\">\n                  <ion-radio value=\"Nursery 2\"></ion-radio>\n                  <ion-label>Nursery 2</ion-label>\n                </ion-item>\n              </ion-col>\n              <ion-col size=\"4\">\n                <ion-item lines=\"none\">\n                  <ion-radio value=\"Jr. KG\"></ion-radio>\n                  <ion-label>Jr.Kg</ion-label>\n                </ion-item>\n              </ion-col>\n              <ion-col size=\"4\">\n                <ion-item lines=\"none\">\n                  <ion-radio value=\"Sr. KG\"></ion-radio>\n                  <ion-label>Sr.Kg</ion-label>\n                </ion-item>\n              </ion-col>\n            </ion-row>\n          </ion-radio-group>\n        </ion-col> -->\n        <ion-col size=\"12\">\n          <ion-label>\n            Child's Picture\n            <span class=\"text-danger\">*</span>\n          </ion-label>\n          <br>\n          <img src=\"{{childbase64Image}}\"  *ngIf=\"childbase64Image\" alt=\"Avatar\" width=\"215\" />\n          <img src=\"{{child_image}}\"  *ngIf=\"child_image &&  !childbase64Image\" alt=\"Avatar\" width=\"215\" />\n          <ion-item lines=\"none\">\n            <ion-button shape=\"round\" class=\"choose-btn\" size=\"small\" (click)=\"presentActionSheet()\">\n              Choose File\n            </ion-button>\n          </ion-item>\n        </ion-col>\n\n\n      </ion-row>\n\n      <br>\n\n\n      <br>\n      <br>\n        \n      <div class=\"ion-text-center\">\n          <ion-button shape=\"round\" type=\"submit\" [disabled]=\"preschoolUpdateForm.invalid\" color=\"primary\">\n            Submit\n          </ion-button>\n        </div>\n    </div>\n\n  </form>\n</div>\n<div *ngIf=\"userType=='Daycare'\">\n  <form [formGroup]=\"DaycareUpdateForm\" (ngSubmit)=\"onDaycareSubmit(DaycareUpdateForm.value)\">\n\n\n    <div class=\"margin-ionic\" >\n    \n     \n      <ion-row>\n        <ion-col size=\"12\">\n          <ion-label>Child's Name <span class=\"text-danger\">*</span></ion-label>\n          <ion-item lines=\"none\">\n            <ion-input formControlName=\"daycare_child_name\" type=\"text\"></ion-input>\n          </ion-item>\n          <div class=\"error-div\" *ngIf=\"(daycare_child_name?.invalid && daycare_child_name?.touched) || daycare_child_name?.dirty\">\n            <small *ngIf=\"daycare_child_name.errors?.pattern\" class=\"text-danger\">Enter a valid child name</small>\n          </div>\n        </ion-col>\n      </ion-row>\n\n      <br>\n      <ion-row>\n        <ion-col size=\"12\">\n          <ion-label>Gender <span class=\"text-danger\">*</span></ion-label>\n  \n          <ion-radio-group allowEmptySelection=\"false\" color=\"primary\" formControlName=\"daycare_gender\">\n            <ion-row>\n              <ion-col size=\"4\">\n                <ion-item lines=\"none\">\n                  <ion-radio value=\"Boy\"></ion-radio>\n                  <ion-label>Boy</ion-label>\n                </ion-item>\n              </ion-col>\n              <ion-col size=\"4\">\n                <ion-item lines=\"none\">\n                  <ion-radio value=\"Girl\"></ion-radio>\n                  <ion-label>Girl</ion-label>\n                </ion-item>\n              </ion-col>\n              <ion-col size=\"4\">\n                <ion-item lines=\"none\">\n                  <ion-radio value=\"Other\"></ion-radio>\n                  <ion-label>Other</ion-label>\n                </ion-item>\n              </ion-col>\n            </ion-row>\n          </ion-radio-group>\n        </ion-col>\n      </ion-row>\n      <ion-row>\n        <ion-col size=\"12\">\n          <ion-label>Child's DOB <span class=\"text-danger\">*</span></ion-label>\n          <ion-item lines=\"none\">\n            <ion-datetime displayFormat=\"DD MMM  YYYY\" formControlName=\"daycare_d_o_b\" max=\"2021\"></ion-datetime>\n          </ion-item>\n        </ion-col>\n      \n     \n      </ion-row>\n      <ion-row>\n        <ion-col size=\"12\">\n          <ion-label>\n            Email ID <span class=\"text-danger\">*</span></ion-label>\n          <ion-item lines=\"none\">\n            <ion-input formControlName=\"daycare_emailid\" type=\"text\"></ion-input>\n          </ion-item>\n          <div class=\"error-div\" *ngIf=\"(daycare_emailid?.invalid && daycare_emailid?.touched) || daycare_emailid?.dirty\">\n            <small *ngIf=\"daycare_emailid.errors?.pattern\" class=\"text-danger\">Enter a valid email id</small>\n          </div>\n        </ion-col>\n     \n  \n      </ion-row>\n      <ion-label>Home Address <span class=\"text-danger\">*</span></ion-label>\n      <ion-item lines=\"none\">\n        <ion-textarea rows=\"6\" cols=\"20\" formControlName=\"daycare_address\"></ion-textarea>\n      </ion-item>\n   \n     \n    \n    </div>\n\n    <div class=\"margin-ionic\" >\n      <ion-row>\n        <ion-col size=\"6\">\n          <ion-label>\n            Child's Picture <span class=\"text-danger\">*</span></ion-label>\n            <br>\n            <img  class=\"img-size\" *ngIf=\"childbase64Image\" src=\"{{childbase64Image}}\" alt=\"\" class=\"image_container\">\n            <img  class=\"img-size\" *ngIf=\"child_image && !childbase64Image\" src=\"{{child_image}}\" alt=\"\" class=\"image_container\">\n          <ion-item lines=\"none\">\n            <ion-button (click)=\"presentActionSheet()\" shape=\"round\" class=\"choose-btn\" size=\"small\" >\n              Choose File\n             </ion-button>\n             \n          </ion-item>\n        </ion-col>\n       \n  \n      </ion-row>\n      <div class=\"ion-text-center\">\n        <ion-button shape=\"round\" type=\"submit\" [disabled]=\"DaycareUpdateForm.invalid\" color=\"primary\">\n          Submit\n        </ion-button>\n      </div>\n    </div>\n  </form>\n</div>\n</ion-content>\n";
      /***/
    },

    /***/
    "6cjs":
    /*!****************************************************************************************************************************************************!*\
      !*** ./node_modules/@ionic-super-tabs/core/dist/esm lazy ^\.\/.*\.entry\.js$ include: \.entry\.js$ exclude: \.system\.entry\.js$ namespace object ***!
      \****************************************************************************************************************************************************/

    /*! no static exports found */

    /***/
    function cjs(module, exports, __webpack_require__) {
      var map = {
        "./super-tab-button_2.entry.js": ["UWEh", "common", 0],
        "./super-tab-indicator.entry.js": ["afC3", 1],
        "./super-tab_3.entry.js": ["XRr/", "common", 2]
      };

      function webpackAsyncContext(req) {
        if (!__webpack_require__.o(map, req)) {
          return Promise.resolve().then(function () {
            var e = new Error("Cannot find module '" + req + "'");
            e.code = 'MODULE_NOT_FOUND';
            throw e;
          });
        }

        var ids = map[req],
            id = ids[0];
        return Promise.all(ids.slice(1).map(__webpack_require__.e)).then(function () {
          return __webpack_require__(id);
        });
      }

      webpackAsyncContext.keys = function webpackAsyncContextKeys() {
        return Object.keys(map);
      };

      webpackAsyncContext.id = "6cjs";
      module.exports = webpackAsyncContext;
      /***/
    },

    /***/
    "AFqN":
    /*!***************************************************!*\
      !*** ./src/app/editprofile/editprofile.module.ts ***!
      \***************************************************/

    /*! exports provided: EditprofilePageModule */

    /***/
    function AFqN(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "EditprofilePageModule", function () {
        return EditprofilePageModule;
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


      var _editprofile_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./editprofile-routing.module */
      "a531");
      /* harmony import */


      var _editprofile_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./editprofile.page */
      "L8TP");

      var EditprofilePageModule = /*#__PURE__*/_createClass(function EditprofilePageModule() {
        _classCallCheck(this, EditprofilePageModule);
      });

      EditprofilePageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"], _editprofile_routing_module__WEBPACK_IMPORTED_MODULE_5__["EditprofilePageRoutingModule"]],
        declarations: [_editprofile_page__WEBPACK_IMPORTED_MODULE_6__["EditprofilePage"]]
      })], EditprofilePageModule);
      /***/
    },

    /***/
    "AytR":
    /*!*****************************************!*\
      !*** ./src/environments/environment.ts ***!
      \*****************************************/

    /*! exports provided: environment */

    /***/
    function AytR(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "environment", function () {
        return environment;
      }); // This file can be replaced during build by using the `fileReplacements` array.
      // `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
      // The list of file replacements can be found in `angular.json`.


      var environment = {
        production: false
      };
      /*
       * For easier debugging in development mode, you can import the following file
       * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
       *
       * This import should be commented out in production mode because it will have a negative impact
       * on performance if an error is thrown.
       */
      // import 'zone.js/dist/zone-error';  // Included with Angular CLI.

      /***/
    },

    /***/
    "L8TP":
    /*!*************************************************!*\
      !*** ./src/app/editprofile/editprofile.page.ts ***!
      \*************************************************/

    /*! exports provided: EditprofilePage */

    /***/
    function L8TP(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "EditprofilePage", function () {
        return EditprofilePage;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_editprofile_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./editprofile.page.html */
      "3zO9");
      /* harmony import */


      var _editprofile_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./editprofile.page.scss */
      "lmbG");
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


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @ionic/angular */
      "TEn/");
      /* harmony import */


      var _ionic_native_camera_ngx__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! @ionic-native/camera/ngx */
      "a/9d");
      /* harmony import */


      var _ionic_native_file_ngx__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! @ionic-native/file/ngx */
      "FAH8");

      var EditprofilePage = /*#__PURE__*/function () {
        function EditprofilePage(modalController, apiService, storage, actionSheetController, file, camera, cf, alertController, loadingController) {
          _classCallCheck(this, EditprofilePage);

          this.modalController = modalController;
          this.apiService = apiService;
          this.storage = storage;
          this.actionSheetController = actionSheetController;
          this.file = file;
          this.camera = camera;
          this.cf = cf;
          this.alertController = alertController;
          this.loadingController = loadingController;
          this.todays_date = new Date().toJSON().split('T')[0];
        }

        _createClass(EditprofilePage, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            var _this = this;

            if (this.userType == 'Preschool') {
              this.preschoolUpdateForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormGroup"]({
                child_name: new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"](this.profile.child_name, [_angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].pattern(/^[a-zA-Z\. ]+$/)]),
                d_o_b: new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"](this.profile.dob, [_angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required]),
                gender: new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"](this.profile.gender, [_angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required])
              });
              this.apiService.userDetails(this.profile.id, 'Preschool').then(function (data) {
                console.log('fetchPreschoolStepOne', data.data);
                _this.fetchPreschoolStepOne = JSON.parse(data.data);

                if (_this.fetchPreschoolStepOne.id) {
                  _this.child_image = _this.fetchPreschoolStepOne.child_img;
                  _this.id = _this.fetchPreschoolStepOne.id;
                  _this.old_image = _this.fetchPreschoolStepOne.child_image;
                  _this.branch_id = _this.fetchPreschoolStepOne.branch_id;
                  _this.pet_name = _this.fetchPreschoolStepOne.pet_name;
                  _this.dob_words = _this.fetchPreschoolStepOne.dob_in_words;
                  _this.mobile_1 = _this.fetchPreschoolStepOne.residence_phone;
                  _this.mobile_2 = _this.fetchPreschoolStepOne.emg_number;
                  _this.mother_tonge = _this.fetchPreschoolStepOne.mother_tongue;
                  _this.other_languages = _this.fetchPreschoolStepOne.other_lang;
                  _this.nationality = _this.fetchPreschoolStepOne.nationality;
                  _this["class"] = _this.fetchPreschoolStepOne["class"];
                }
              });
            } else {
              this.DaycareUpdateForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormGroup"]({
                daycare_child_name: new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"](this.profile.child_name, [_angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].pattern(/^[a-zA-Z\. ]+$/)]),
                daycare_d_o_b: new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"](this.profile.dob, [_angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required]),
                daycare_gender: new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"](this.profile.gender, [_angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required]),
                daycare_address: new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"](this.profile.address, [_angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required]),
                daycare_emailid: new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"](this.profile.emailid, [_angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required])
              });
              this.apiService.userDetails(this.profile.id, 'Daycare').then(function (data) {
                console.log('fetchDaycareStepOne', data.data);
                _this.fetchDaycareStepOne = JSON.parse(data.data);

                if (_this.fetchDaycareStepOne) {
                  _this.id = _this.fetchDaycareStepOne.id;
                  _this.branch_id = _this.fetchDaycareStepOne.branch_id;
                  _this.program = _this.fetchDaycareStepOne.program;
                  _this.timings = _this.fetchDaycareStepOne.timings;
                  _this.pet_name = _this.fetchDaycareStepOne.pet_name;
                  _this.dob_words = _this.fetchDaycareStepOne.dob_words;
                  _this.mobile_1 = _this.fetchDaycareStepOne.home_phone;
                  _this.emailid = _this.fetchDaycareStepOne.emailid;
                  _this.address = _this.fetchDaycareStepOne.address;
                  _this.landmark = _this.fetchDaycareStepOne.landmark;
                  _this.mother_qua = _this.fetchDaycareStepOne.mother_qualification;
                  _this.mother_hobbies = _this.fetchDaycareStepOne.mother_hobbies;
                  _this.mother_work_place = _this.fetchDaycareStepOne.mother_work_place;
                  _this.mother_work_phone_num = _this.fetchDaycareStepOne.mother_work_phone;
                  _this.mother_work_mob_num = _this.fetchDaycareStepOne.mother_mobile_number;
                  _this.father_qualification = _this.fetchDaycareStepOne.father_qualifiaction;
                  _this.father_hobbies = _this.fetchDaycareStepOne.father_hobbies;
                  _this.father_work_place = _this.fetchDaycareStepOne.father_work_place;
                  _this.father_work_phone_num = _this.fetchDaycareStepOne.father_work_phone;
                  _this.father_work_phone_num = _this.fetchDaycareStepOne.father_mobile_number;
                  _this.sibling_name = _this.fetchDaycareStepOne.child_name1;
                  _this.sibling_age = _this.fetchDaycareStepOne.child_age1;
                  _this.sibling_school = _this.fetchDaycareStepOne.child_school1;
                  _this.emg_name = _this.fetchDaycareStepOne.emg_name1;
                  _this.emg_contact_rel = _this.fetchDaycareStepOne.emg_relationship1;
                  _this.emg_contact_phone = _this.fetchDaycareStepOne.emg_mobile1;
                  _this.household_name = _this.fetchDaycareStepOne.other_name1;
                  _this.household_rel = _this.fetchDaycareStepOne.other_relationship1;
                  _this.household_num = _this.fetchDaycareStepOne.other_mobile1;
                  _this.child_image = _this.fetchDaycareStepOne.child_img;
                  _this.motherimg = _this.fetchDaycareStepOne.mother_img;
                  _this.fatherimg = _this.fetchDaycareStepOne.father_img;
                  _this.guardianimg = _this.fetchDaycareStepOne.guardian_img;
                  _this.childioldmg = _this.fetchDaycareStepOne.child_image;
                  _this.motheroldimg = _this.fetchDaycareStepOne.mother_image;
                  _this.fatheroldimg = _this.fetchDaycareStepOne.father_image;
                  _this.guardianoldimg = _this.fetchDaycareStepOne.guardian_image;
                }
              });
            }
          }
        }, {
          key: "dismiss",
          value: function dismiss() {
            this.modalController.dismiss();
          }
        }, {
          key: "child_name",
          get: function get() {
            return this.preschoolUpdateForm.get('child_name');
          }
        }, {
          key: "d_o_b",
          get: function get() {
            return this.preschoolUpdateForm.get('d_o_b');
          }
        }, {
          key: "gender",
          get: function get() {
            return this.preschoolUpdateForm.get('gender');
          } // get class(){
          //     return this.preschoolUpdateForm.get('class')
          // }

        }, {
          key: "daycare_child_name",
          get: function get() {
            return this.DaycareUpdateForm.get('daycare_child_name');
          }
        }, {
          key: "daycare_d_o_b",
          get: function get() {
            return this.DaycareUpdateForm.get('daycare_d_o_b');
          }
        }, {
          key: "daycare_gender",
          get: function get() {
            return this.DaycareUpdateForm.get('daycare_gender');
          }
        }, {
          key: "daycare_address",
          get: function get() {
            return this.DaycareUpdateForm.get('daycare_address');
          }
        }, {
          key: "daycare_emailid",
          get: function get() {
            return this.DaycareUpdateForm.get('daycare_emailid');
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
          key: "onPreschoolSubmit",
          value: function onPreschoolSubmit(body) {
            var _this2 = this;

            this.presentLoading();
            console.log('body', body);
            var formData = new FormData();
            formData.append("child_name", body['child_name']);
            formData.append("gender", body['gender']);
            formData.append("d_o_b", body['d_o_b']);
            formData.append("class", this["class"]);
            formData.append("branch_id", this.branch_id);
            formData.append("pet_name", this.pet_name);
            formData.append("dob_words", this.dob_words);
            formData.append("figures", '');
            formData.append("mobile_1", this.mobile_1);
            formData.append("mobile_2", this.mobile_2);
            formData.append("mother_tonge", this.mother_tonge);
            formData.append("other_languages", this.other_languages);
            formData.append("nationality", this.nationality);

            if (this.childimgBlob) {
              formData.append('image', this.childimgBlob, this.child_file_name);
            } else {
              formData.append('image', '');
            }

            formData.append("user_id", this.id);
            formData.append("old_image", this.old_image);
            this.apiService.updatePreschoolRegStep1(formData).subscribe(function (data) {
              console.log('data', data);

              _this2.loadingController.dismiss();

              _this2.presentAlert("Profile updated successfully");

              console.log(data);
            }, function (err) {
              console.log(err);

              _this2.loadingController.dismiss();

              _this2.apiService.presentToast(err.error, 2000);
            });
          }
        }, {
          key: "onDaycareSubmit",
          value: function onDaycareSubmit(body) {
            var _this3 = this;

            this.presentLoading();
            console.log('body', body);
            var formData = new FormData();
            formData.append("child_name", body['daycare_child_name']);
            formData.append("gender", body['daycare_gender']);
            formData.append("d_o_b", body['daycare_d_o_b']);
            formData.append("emailid", body['daycare_emailid']);
            formData.append("address", body['daycare_address']);
            formData.append('branch_id', this.branch_id);
            formData.append('program', this.program);
            formData.append('timings', this.timings);
            formData.append('pet_name', this.pet_name);
            formData.append('dob_words', this.dob_words);
            formData.append('figures', '');
            formData.append('mobile_1', this.mobile_1);
            formData.append('landmark', this.landmark);
            formData.append('mother_qua', this.mother_qua);
            formData.append('mother_hobbies', this.mother_hobbies);
            formData.append('mother_work_place', this.mother_work_place);
            formData.append('mother_work_phone_num', this.mother_work_phone_num);
            formData.append('mother_work_mob_num', this.mother_work_mob_num);
            formData.append('father_qualification', this.father_qualification);
            formData.append('father_hobbies', this.father_hobbies);
            formData.append('father_work_place', this.father_work_place);
            formData.append('father_work_phone_num', this.father_work_phone_num);
            formData.append('father_work_mob_num', this.father_work_phone_num);
            formData.append('sibling_name', this.sibling_name);
            formData.append('sibling_age', this.sibling_age);
            formData.append('sibling_school', this.sibling_school);
            formData.append('emg_name', this.emg_name);
            formData.append('emg_contact_rel', this.emg_contact_rel);
            formData.append('emg_contact_phone', this.emg_contact_phone);
            formData.append('household_name', this.household_name);
            formData.append('household_rel', this.household_rel);
            formData.append('household_num', this.household_num);
            formData.append('old_img[]', this.childioldmg);
            formData.append('old_img[]', this.motheroldimg);
            formData.append('old_img[]', this.fatheroldimg);
            formData.append('old_img[]', this.guardianoldimg);

            if (this.childimgBlob) {
              formData.append('image[]', this.childimgBlob, this.child_file_name);
            } else {
              formData.append('image[]', '');
            }

            formData.append('image[]', '');
            formData.append('image[]', '');
            formData.append('image[]', '');
            formData.append("id", this.id);
            formData.append('userid', this.profile.id);
            this.apiService.updateDaycareRegStep1(formData).subscribe(function (data) {
              console.log('data', data);

              _this3.loadingController.dismiss();

              _this3.presentAlert("Profile  updated successfully");

              console.log(data);
            }, function (err) {
              console.log(err);

              _this3.loadingController.dismiss();

              _this3.apiService.presentToast(err.error, 2000);
            });
          }
        }, {
          key: "presentAlert",
          value: function presentAlert(message) {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/_regeneratorRuntime().mark(function _callee2() {
              var _this4 = this;

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
                          _this4.modalController.dismiss();
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
          value: function presentActionSheet() {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/_regeneratorRuntime().mark(function _callee3() {
              var _this5 = this;

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
                          _this5.takePicture('child');
                        }
                      }, {
                        text: 'Choose photo from Gallery',
                        icon: 'images-outline',
                        handler: function handler() {
                          _this5.openGallery('child');
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
            var _this6 = this;

            var options = {
              quality: 70,
              destinationType: this.camera.DestinationType.FILE_URI,
              encodingType: this.camera.EncodingType.JPEG,
              mediaType: this.camera.MediaType.PICTURE,
              correctOrientation: true
            };
            this.camera.getPicture(options).then(function (imageData) {
              _this6.file.resolveLocalFilesystemUrl(imageData).then(function (entry) {
                entry.file(function (file) {
                  console.log(file);
                  _this6.childbase64Image = window.Ionic.WebView.convertFileSrc(imageData);

                  _this6.cf.detectChanges();

                  _this6.readFile(file, type);
                });
              });
            }, function (err) {
              _this6.childbase64Image = null;
            });
          }
        }, {
          key: "openGallery",
          value: function openGallery(type) {
            var _this7 = this;

            var options = {
              quality: 70,
              destinationType: this.camera.DestinationType.FILE_URI,
              encodingType: this.camera.EncodingType.JPEG,
              mediaType: this.camera.MediaType.PICTURE,
              correctOrientation: true,
              sourceType: this.camera.PictureSourceType.PHOTOLIBRARY
            };
            this.camera.getPicture(options).then(function (imageData) {
              _this7.file.resolveLocalFilesystemUrl(imageData).then(function (entry) {
                entry.file(function (file) {
                  console.log('file', file);

                  if (file.type == 'image/jpeg') {
                    var filename = file.name;
                    var file_ext = filename.split('.').slice(-1).join('.');
                    var filename_wo_ext = filename.split('.').slice(0, -1).join('.');
                    _this7.modified_filename = filename_wo_ext + file.lastModified.toString() + "." + file_ext;
                    console.log('this.child_file_name', _this7.modified_filename);
                  } else {
                    _this7.modified_filename = file.name;
                  }

                  _this7.child_file_name = _this7.modified_filename;
                  _this7.childbase64Image = window.Ionic.WebView.convertFileSrc(imageData);

                  _this7.cf.detectChanges();

                  _this7.readFile(file, type);
                });
              });
            }, function (err) {// Handle error
            });
          }
        }, {
          key: "readFile",
          value: function readFile(file, type) {
            var _this8 = this;

            var reader = new FileReader();

            reader.onloadend = function () {
              _this8.childimgBlob = new Blob([reader.result], {
                type: file.type
              });
            };

            reader.readAsArrayBuffer(file);
          }
        }]);

        return EditprofilePage;
      }();

      EditprofilePage.ctorParameters = function () {
        return [{
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_7__["ModalController"]
        }, {
          type: _api_service__WEBPACK_IMPORTED_MODULE_4__["ApiService"]
        }, {
          type: _ionic_storage__WEBPACK_IMPORTED_MODULE_3__["Storage"]
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_7__["ActionSheetController"]
        }, {
          type: _ionic_native_file_ngx__WEBPACK_IMPORTED_MODULE_9__["File"]
        }, {
          type: _ionic_native_camera_ngx__WEBPACK_IMPORTED_MODULE_8__["Camera"]
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_6__["ChangeDetectorRef"]
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_7__["AlertController"]
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_7__["LoadingController"]
        }];
      };

      EditprofilePage.propDecorators = {
        userType: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_6__["Input"]
        }],
        profile: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_6__["Input"]
        }]
      };
      EditprofilePage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_6__["Component"])({
        selector: 'app-editprofile',
        template: _raw_loader_editprofile_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_editprofile_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
      })], EditprofilePage);
      /***/
    },

    /***/
    "Sy1n":
    /*!**********************************!*\
      !*** ./src/app/app.component.ts ***!
      \**********************************/

    /*! exports provided: AppComponent */

    /***/
    function Sy1n(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AppComponent", function () {
        return AppComponent;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_app_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./app.component.html */
      "VzVu");
      /* harmony import */


      var _app_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./app.component.scss */
      "ynWL");
      /* harmony import */


      var _api_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./api.service */
      "yTNM");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _ionic_native_splash_screen_ngx__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @ionic-native/splash-screen/ngx */
      "54vc");
      /* harmony import */


      var _ionic_native_status_bar_ngx__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @ionic-native/status-bar/ngx */
      "VYYF");
      /* harmony import */


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! @ionic/angular */
      "TEn/");
      /* harmony import */


      var _ionic_storage__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! @ionic/storage */
      "e8h1");
      /* harmony import */


      var _ionic_native_app_minimize_ngx__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! @ionic-native/app-minimize/ngx */
      "Dicn");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! @angular/common */
      "ofXK"); //import { FCM } from 'cordova-plugin-fcm-with-dependecy-updated/ionic/ngx';


      var AppComponent = /*#__PURE__*/function () {
        function AppComponent(router, platform, splashScreen, statusBar, storage, apiService, menu, //private fcm:FCM,
        alertController, appMinimize, location, actionSheetCtrl) {
          _classCallCheck(this, AppComponent);

          this.router = router;
          this.platform = platform;
          this.splashScreen = splashScreen;
          this.statusBar = statusBar;
          this.storage = storage;
          this.apiService = apiService;
          this.menu = menu;
          this.alertController = alertController;
          this.appMinimize = appMinimize;
          this.location = location;
          this.actionSheetCtrl = actionSheetCtrl;
          this.isActive = false;
          this.isNestedSideMenu = false;
          this.appPages = [{
            title: 'Enquiry Form',
            url: '/addinquiry',
            icon: 'assets/drawer_icons/01_Inquiry_form.png',
            open: false
          }, {
            title: 'Admission Form',
            icon: 'assets/drawer_icons/02_Admission_form.png',
            url: '/admissionform'
          }, {
            title: 'Switch Profile',
            url: '/switchprofile',
            icon: 'assets/drawer_icons/03_About_us.png',
            open: false
          }, {
            title: 'About Us',
            url: '/aboutus',
            icon: 'assets/drawer_icons/03_About_us.png',
            open: false
          }, {
            title: 'Gallery',
            url: '/gallery',
            icon: 'assets/drawer_icons/04_Gallery.png',
            open: false
          }, {
            title: 'Fee Payment',
            url: '/feestructure',
            icon: 'assets/drawer_icons/05_Fee_structure.png',
            open: false
          }, {
            title: 'Payment History',
            url: '/paymenthistory',
            icon: 'assets/drawer_icons/06_Pyment_history.png'
          }, // {
          //   title: 'Courses',
          //   url: '/courses',
          //   icon: 'assets/drawer_icons/07_Courses.png',
          //   open:false
          // },
          {
            title: 'Notifications',
            url: '/notifications',
            icon: 'assets/drawer_icons/notifications.png',
            open: false
          }, // {
          //   title: 'Notice',
          //   url: '/notice',
          //   icon: 'assets/drawer_icons/notice.png',
          //   open:false
          // },
          // {
          //   title: 'Other Activities',
          //   url: '/otheractivities',
          //   icon: 'assets/drawer_icons/service.png',
          //   open:false
          // },
          // {
          //   title: 'Services',
          //   url: '/services',
          //   icon: 'assets/drawer_icons/service.png',
          //   open:false
          // },
          {
            title: 'Medicines',
            url: '/medicines',
            icon: 'assets/drawer_icons/medicine.png',
            open: false
          }, {
            title: 'Offers',
            url: '/offers',
            icon: 'assets/drawer_icons/offer.png',
            open: false
          }, {
            title: 'Rules & Regulations',
            url: '/rules',
            icon: 'assets/drawer_icons/rules.png',
            open: false
          }, {
            title: 'Schedule',
            url: '/schedule',
            icon: 'assets/drawer_icons/schedule.png',
            open: false
          }];
          this.notification = false;
          this.initializeApp();
          this.backButtonEvent();
        }

        _createClass(AppComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            var _this9 = this;

            console.log('hi');
            this.storage.get('userType').then(function (data) {
              console.log('userType', data);
              _this9.userType = data;
            });
            this.apiService.userData.subscribe(function (data) {
              console.log('userData', data.data);
              _this9.profile = JSON.parse(data.data);
            });
            this.apiService.userTypeData.subscribe(function (data) {
              console.log('1');

              if (data) {
                console.log('2');
                console.log('userTypeData', data);
                _this9.userType = data;
              } else {
                console.log('3');
              }
            });
          }
        }, {
          key: "initializeApp",
          value: function initializeApp() {
            var _this10 = this;

            this.platform.ready().then(function () {
              _this10.statusBar.styleDefault();

              _this10.statusBar.backgroundColorByHexString('fdd653');

              _this10.splashScreen.hide();

              _this10.checkLoginStatus();

              console.log(_this10.checkLoginStatus() != undefined);

              if (_this10.checkLoginStatus() == undefined) {
                console.log("no one is logged in");
              } else {// this.fcm.getInitialPushPayload().then(data=>{
                //   console.log('initial',data)
                //   if(data){
                //     if(data.wasTapped){
                //       this.notification=true;
                //       this.body=data.body
                //       this.title=data.title
                //     }
                //   }
                // })
                // setTimeout(() => {
                //   this.fcm.onNotification().subscribe(data => {
                //     console.log(data)
                //     if (data.wasTapped) {
                //       console.log('Received in background',data);
                //       this.router.navigate([NotificationsPage])
                //     } else {
                //       console.log('Received in foreground');
                //       this.router.navigate([QuicktourPage])
                //       this.presentAlert(data.body,data.title)
                //     }
                //   });
                // }, 100);
                // this.fcm.createNotificationChannel({
                //   id: "channel_id_2",
                //   name: "channel_id_2",
                //   importance: "high",
                //  })
              }
            });
          }
        }, {
          key: "goToEnquiryForm",
          value: function goToEnquiryForm() {
            this.router.navigate(['addinquiry']);
          }
        }, {
          key: "goToAdmissionForm",
          value: function goToAdmissionForm() {
            // this.router.navigate(['admissionform']);
            this.presentActionSheet();
          }
        }, {
          key: "goToAboutUs",
          value: function goToAboutUs() {
            this.router.navigate(['aboutus']);
          }
        }, {
          key: "goToGallery",
          value: function goToGallery() {
            this.router.navigate(['gallery']);
          }
        }, {
          key: "goToFeeStructure",
          value: function goToFeeStructure() {
            this.router.navigate(['feestructure']);
          }
        }, {
          key: "goToPaymentHistory",
          value: function goToPaymentHistory() {
            this.router.navigate(['paymenthistory']);
          }
        }, {
          key: "goToCourses",
          value: function goToCourses() {
            this.router.navigate(['courses']);
          }
        }, {
          key: "goToSwitchProfile",
          value: function goToSwitchProfile() {
            this.router.navigate(['switchprofile']);
          }
        }, {
          key: "logout",
          value: function logout() {
            this.storage.remove('active');
            this.storage.remove('type');
            this.storage.remove('cocoon_data');
            this.storage.remove('user');
            this.storage.remove('userType');
            this.storage.clear();
            this.menu.close();
            this.router.navigate(['home']);
            this.initializeApp();
          }
        }, {
          key: "ionViewDidEnter",
          value: function ionViewDidEnter() {
            var _this11 = this;

            this.storage.get('type').then(function (data) {
              console.log('2', data);
              _this11.type = data;
            });
            this.storage.get('userType').then(function (data) {
              console.log('userType', data);
              _this11.userType = data;
            });
          }
        }, {
          key: "checkLoginStatus",
          value: function checkLoginStatus() {
            var _this12 = this;

            this.storage.get('user').then(function (userData) {
              if (userData) {
                if (_this12.notification) {
                  _this12.router.navigate(['notifications']);
                } else {
                  var user = JSON.parse(userData);

                  _this12.storage.get('userType').then(function (userType) {
                    _this12.apiService.userDetails(user.id, userType).then(function (data) {
                      var userDetails = JSON.parse(data.data);

                      if (userDetails.status == 'Active' && userDetails.Approve_status == 'Active') {
                        _this12.router.navigate(['quicktour']);

                        _this12.storage.set('active', true);

                        _this12.isActive = true;
                      } else if (userDetails.status == 'Active') {
                        // if(userType=='Daycare'){
                        //   this.storage.set('active',false)
                        //   this.isActive=false;
                        //   this.router.navigate(['addadmission'])
                        // }
                        // else{
                        //   this.isActive=false;
                        //   this.storage.set('active',false)
                        //   this.router.navigate(['preschoolform'])
                        // }
                        _this12.router.navigate(['switchprofile']);
                      } else {
                        _this12.router.navigate(['home']);
                      }
                    });
                  });

                  _this12.profile = JSON.parse(userData);
                }
              } else {
                _this12.router.navigate(['home']);
              }
            });
          }
        }, {
          key: "toggleSideMenu",
          value: function toggleSideMenu() {
            this.isNestedSideMenu = !this.isNestedSideMenu;
          }
        }, {
          key: "presentAlert",
          value: function presentAlert(body, title) {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/_regeneratorRuntime().mark(function _callee4() {
              var _this13 = this;

              var alert;
              return _regeneratorRuntime().wrap(function _callee4$(_context4) {
                while (1) switch (_context4.prev = _context4.next) {
                  case 0:
                    _context4.next = 2;
                    return this.alertController.create({
                      header: title,
                      message: body,
                      mode: 'ios',
                      backdropDismiss: false,
                      buttons: [{
                        text: 'OK',
                        handler: function handler() {
                          _this13.router.navigate(['quicktour']);
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
          key: "backButtonEvent",
          value: function backButtonEvent() {
            var _this14 = this;

            this.platform.backButton.subscribeWithPriority(10, function () {
              _this14.routerOutlets.forEach(function (outlet) {
                return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(_this14, void 0, void 0, /*#__PURE__*/_regeneratorRuntime().mark(function _callee5() {
                  return _regeneratorRuntime().wrap(function _callee5$(_context5) {
                    while (1) switch (_context5.prev = _context5.next) {
                      case 0:
                        if (!(this.router.url === '/quicktour' || this.router.url == '/home')) {
                          _context5.next = 4;
                          break;
                        }

                        this.appMinimize.minimize();
                        _context5.next = 16;
                        break;

                      case 4:
                        if (!(this.router.url === '/addadmission' || this.router.url == '/admissionform' || this.router.url == '/preschoolform' || this.router.url == '/preschoolotherform' || this.router.url == '/childotherinfotwo')) {
                          _context5.next = 14;
                          break;
                        }

                        if (!this.isActive) {
                          _context5.next = 10;
                          break;
                        }

                        _context5.next = 8;
                        return this.location.back();

                      case 8:
                        _context5.next = 12;
                        break;

                      case 10:
                        _context5.next = 12;
                        return this.location.back();

                      case 12:
                        _context5.next = 16;
                        break;

                      case 14:
                        _context5.next = 16;
                        return this.location.back();

                      case 16:
                      case "end":
                        return _context5.stop();
                    }
                  }, _callee5, this);
                }));
              });
            });
          }
        }, {
          key: "presentActionSheet",
          value: function presentActionSheet() {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/_regeneratorRuntime().mark(function _callee6() {
              var _this15 = this;

              var actionSheet;
              return _regeneratorRuntime().wrap(function _callee6$(_context6) {
                while (1) switch (_context6.prev = _context6.next) {
                  case 0:
                    _context6.next = 2;
                    return this.actionSheetCtrl.create({
                      header: 'Select Admission Type',
                      cssClass: 'my-custom-class',
                      mode: "ios",
                      buttons: [{
                        text: 'Daycare Form',
                        role: 'destructive',
                        handler: function handler() {
                          _this15.router.navigate(['addadmission']);
                        }
                      }, {
                        text: 'Preschool Form',
                        role: 'destructive',
                        handler: function handler() {
                          _this15.router.navigate(['preschoolform']);
                        }
                      }, {
                        text: 'Cancel',
                        role: 'cancel'
                      }]
                    });

                  case 2:
                    actionSheet = _context6.sent;
                    actionSheet.present();

                  case 4:
                  case "end":
                    return _context6.stop();
                }
              }, _callee6, this);
            }));
          }
        }]);

        return AppComponent;
      }();

      AppComponent.ctorParameters = function () {
        return [{
          type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_8__["Platform"]
        }, {
          type: _ionic_native_splash_screen_ngx__WEBPACK_IMPORTED_MODULE_6__["SplashScreen"]
        }, {
          type: _ionic_native_status_bar_ngx__WEBPACK_IMPORTED_MODULE_7__["StatusBar"]
        }, {
          type: _ionic_storage__WEBPACK_IMPORTED_MODULE_9__["Storage"]
        }, {
          type: _api_service__WEBPACK_IMPORTED_MODULE_3__["ApiService"]
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_8__["MenuController"]
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_8__["AlertController"]
        }, {
          type: _ionic_native_app_minimize_ngx__WEBPACK_IMPORTED_MODULE_10__["AppMinimize"]
        }, {
          type: _angular_common__WEBPACK_IMPORTED_MODULE_11__["Location"]
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_8__["ActionSheetController"]
        }];
      };

      AppComponent.propDecorators = {
        routerOutlets: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_5__["ViewChildren"],
          args: [_ionic_angular__WEBPACK_IMPORTED_MODULE_8__["IonRouterOutlet"]]
        }]
      };
      AppComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_5__["Component"])({
        selector: 'app-root',
        template: _raw_loader_app_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_app_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
      })], AppComponent);
      /***/
    },

    /***/
    "VzVu":
    /*!**************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html ***!
      \**************************************************************************/

    /*! exports provided: default */

    /***/
    function VzVu(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-app>\n  <ion-split-pane contentId=\"main-content\">\n    <ion-menu contentId=\"main-content\"   type=\"overlay\" side=\"start\" \n    menu-id=\"main-content-1\" \n    >\n  \n      <ion-toolbar>\n        <ion-row class=\"sidemenu-row\" [routerLink]=\"['/profile']\" *ngIf=\"type!=='quicktour'\" >\n          <ion-col size=\"3\">\n              <img class=\"img-block\" src=\"{{profile?.child_img}}\" />\n          </ion-col>\n          <ion-col size=\"9\" >\n            <ion-title color=\"dark\" class=\"name\">{{profile?.child_name |titlecase}}</ion-title>\n            <p class=\"view-btn\">View Profile</p>\n          </ion-col>\n        </ion-row>\n      </ion-toolbar>\n    \n      <ion-content>\n        <!-- <div *ngFor=\"let p of appPages\">\n          <ion-menu-toggle *ngIf=\"p.url\">\n          <ion-item routerDirection=\"root\" [routerLink]=\"p.url\"> lines=\"none\">\n            <img [ngClass]=\"{'svg': p.url == '/notice' || p.url == '/otheractivities' ||p.url == '/services' ||p.url == '/medicines' ||p.url == '/offers' ||p.url == '/rules' ||p.url == '/schedule' ||p.url == '/yearlyevents' }\" src=\"{{p.icon}}\" alt=\"\">\n            <ion-label>\n              {{p.title}}\n            </ion-label>\n          </ion-item>\n          </ion-menu-toggle>\n        \n       \n          <ion-item  lines=\"none\" *ngIf=\"p.subPages?.length\" (click)=\"p.open = !p.open\" [class.active-parent]=\"p.open\" >\n            <ion-item  lines=\"none\" *ngIf=\"p.subPages?.length\" (click)=\"p.open = !p.open\" [class.active-parent]=\"p.open\" >\n            \n            <img src=\"{{p.icon}}\" alt=\"\">\n          \n            <ion-label>\n              {{p.title}}\n            </ion-label>\n            <ion-icon slot=\"end\" color=\"primary\"  name=\"chevron-forward-circle-outline\" *ngIf=\"!p.open\"></ion-icon>\n            <ion-icon slot=\"end\" color=\"primary\"  *ngIf=\"p.open\" name=\"chevron-down-circle-outline\"></ion-icon>\n          </ion-item>\n          <ion-list *ngIf=\"p.open\">\n            <ion-menu-toggle  >\n              <div *ngFor=\"let s of p.subPages\">\n              <ion-item lines=\"none\" class=\"sub-item\" *ngIf=\"s.title==userType\"  routerDirection=\"root\" [routerLink]=\"[s.url]\" routerLinkActive=\"active\">\n                <img src=\"{{s.icon}}\" alt=\"\">\n                <ion-label>\n                  {{s.title}}\n                </ion-label>\n              </ion-item>\n            </div>\n            </ion-menu-toggle>\n          </ion-list>\n        </div> -->\n\n          <ion-menu-toggle auto-hide=\"false\" >\n            <ion-item lines=\"none\" routerDirection=\"root\" detail=\"false\" (click)=\"goToEnquiryForm()\">\n              <img src=\"../assets/drawer_icons/01_Inquiry_form.png\" alt=\"\">\n              <ion-label>Enquiry Form</ion-label>\n            </ion-item>\n            <ion-item lines=\"none\" routerDirection=\"root\"   detail=\"false\" (click)=\"goToAdmissionForm()\">\n              <img src=\"../assets/drawer_icons/02_Admission_form.png\" alt=\"\">\n              <ion-label>Addmission Form</ion-label>\n            </ion-item>\n            <ion-item lines=\"none\" routerDirection=\"root\"   detail=\"false\" (click)=\"goToSwitchProfile()\">\n              <img src=\"../assets/drawer_icons/03_About_us.png\" alt=\"\">\n              <ion-label>Switch Profile</ion-label>\n            </ion-item>\n            <ion-item lines=\"none\" routerDirection=\"root\"    detail=\"false\"  (click)=\"goToAboutUs()\">\n              <img src=\"../assets/drawer_icons/03_About_us.png\" alt=\"\">\n              <ion-label>About Us</ion-label>\n            </ion-item>\n            <ion-item lines=\"none\" routerDirection=\"root\"    detail=\"false\"  (click)=\"goToGallery()\">\n              <img src=\"../assets/drawer_icons/04_Gallery.png\" alt=\"\">\n              <ion-label>Gallery</ion-label>\n            </ion-item>\n            <ion-item lines=\"none\" routerDirection=\"root\"    detail=\"false\"  (click)=\"goToFeeStructure()\">\n              <img src=\"../assets/drawer_icons/05_Fee_structure.png\" alt=\"\">\n              <ion-label>Fee Structure</ion-label>\n            </ion-item>\n            <ion-item lines=\"none\" routerDirection=\"root\"    detail=\"false\" (click)=\"goToPaymentHistory()\">\n              <img src=\"../assets/drawer_icons/06_Pyment_history.png\" alt=\"\">\n              <ion-label>Payment History</ion-label>\n            </ion-item>\n            <!-- <ion-item lines=\"none\" routerDirection=\"root\"   detail=\"false\" [routerLink]=\"['/medicines']\">\n              <img class=\"terms svg\" src=\"../assets/drawer_icons/medicine.png\" alt=\"\">\n              <ion-label>Medicines</ion-label>\n            </ion-item> -->\n            <!-- <ion-item lines=\"none\" routerDirection=\"root\"   detail=\"false\" [routerLink]=\"['/offers']\">\n              <img class=\"terms svg\" src=\"../assets/drawer_icons/offer.png\" alt=\"\">\n              <ion-label>Offers</ion-label>\n            </ion-item> -->\n            <ion-item lines=\"none\" routerDirection=\"root\"   detail=\"false\" [routerLink]=\"['/rules']\">\n              <img class=\"terms svg\" src=\"../assets/drawer_icons/rules.png\" alt=\"\">\n              <ion-label>Rules & Regulations</ion-label>\n            </ion-item>\n            <!-- <ion-item lines=\"none\" routerDirection=\"root\"   detail=\"false\" [routerLink]=\"['/schedule']\">\n              <img class=\"terms svg\" src=\"../assets/drawer_icons/schedule.png\" alt=\"\">\n              <ion-label>Schedule</ion-label>\n            </ion-item> -->\n          </ion-menu-toggle>\n      </ion-content>\n      <ion-footer *ngIf=\"type!=='quicktour'\">\n        <ion-item lines=\"none\" routerDirection=\"root\" (click)=\"logout()\"  detail=\"false\" >\n          <img src=\"../assets/drawer_icons/08_Logout.png\" alt=\"\">\n          <ion-label>Logout</ion-label>\n        </ion-item>\n      </ion-footer>\n    </ion-menu>\n    <ion-menu contentId=\"main-content\"  type=\"overlay\" side=\"start\" \n    menu-id=\"main-content-2\">\n    <ion-toolbar>\n    </ion-toolbar>\n  \n      <ion-content>\n     \n          <ion-menu-toggle auto-hide=\"false\" >\n            <ion-item lines=\"none\" routerDirection=\"root\" detail=\"false\" (click)=\"goToEnquiryForm()\">\n              <img src=\"../assets/drawer_icons/01_Inquiry_form.png\" alt=\"\">\n              <ion-label>Enquiry Form</ion-label>\n            </ion-item>\n            <ion-item lines=\"none\" routerDirection=\"root\"   detail=\"false\" (click)=\"goToAdmissionForm()\">\n              <img src=\"../assets/drawer_icons/02_Admission_form.png\" alt=\"\">\n              <ion-label>Admission Form</ion-label>\n            </ion-item>\n            <!-- <ion-item lines=\"none\" routerDirection=\"root\"   detail=\"false\" (click)=\"goToAdmissionForm()\">\n              <img src=\"../assets/drawer_icons/02_Admission_form.png\" alt=\"\">\n              <ion-label>Preschool Registration Form</ion-label>\n            </ion-item> -->\n            <ion-item lines=\"none\" routerDirection=\"root\"    detail=\"false\"  (click)=\"goToAboutUs()\">\n              <img src=\"../assets/drawer_icons/03_About_us.png\" alt=\"\">\n              <ion-label>About Us</ion-label>\n            </ion-item>\n            <ion-item lines=\"none\" routerDirection=\"root\"    detail=\"false\"  (click)=\"goToGallery()\">\n              <img src=\"../assets/drawer_icons/04_Gallery.png\" alt=\"\">\n              <ion-label>Gallery</ion-label>\n            </ion-item>\n            <ion-item lines=\"none\" routerDirection=\"root\"    detail=\"false\"  (click)=\"goToFeeStructure()\">\n              <img src=\"../assets/drawer_icons/05_Fee_structure.png\" alt=\"\">\n              <ion-label>Fee Structure</ion-label>\n            </ion-item>\n           \n            <!-- <ion-item lines=\"none\" routerDirection=\"root\"   detail=\"false\" [routerLink]=\"['/notice']\" routerLinkActive=\"router-link-active\" >\n              <img class=\"terms svg\" src=\"../assets/drawer_icons/notice.png\" alt=\"\">\n              <ion-label>Notice</ion-label>\n            </ion-item> -->\n            <!-- <ion-item lines=\"none\" routerDirection=\"root\"   detail=\"false\" [routerLink]=\"['/otheractivities']\">\n              <img class=\"terms svg\" src=\"../assets/drawer_icons/service.png\" alt=\"\">\n              <ion-label>Other Activities</ion-label>\n            </ion-item>\n            <ion-item lines=\"none\" routerDirection=\"root\"   detail=\"false\" [routerLink]=\"['/services']\">\n              <img class=\"terms svg\" src=\"../assets/drawer_icons/service.png\" alt=\"\">\n              <ion-label>Services</ion-label>\n            </ion-item> -->\n            <!-- <ion-item lines=\"none\" routerDirection=\"root\"   detail=\"false\" [routerLink]=\"['/medicines']\">\n              <img class=\"terms svg\" src=\"../assets/drawer_icons/medicine.png\" alt=\"\">\n              <ion-label>Medicines</ion-label>\n            </ion-item> -->\n            <!-- <ion-item lines=\"none\" routerDirection=\"root\"   detail=\"false\" [routerLink]=\"['/offers']\">\n              <img class=\"terms svg\" src=\"../assets/drawer_icons/offer.png\" alt=\"\">\n              <ion-label>Offers</ion-label>\n            </ion-item> -->\n            <ion-item lines=\"none\" routerDirection=\"root\"   detail=\"false\" [routerLink]=\"['/rules']\">\n              <img class=\"terms svg\" src=\"../assets/drawer_icons/rules.png\" alt=\"\">\n              <ion-label>Rules & Regulations</ion-label>\n            </ion-item>\n            <!-- <ion-item lines=\"none\" routerDirection=\"root\"   detail=\"false\" [routerLink]=\"['/schedule']\">\n              <img class=\"terms svg\" src=\"../assets/drawer_icons/schedule.png\" alt=\"\">\n              <ion-label>Schedule</ion-label>\n            </ion-item> -->\n            <!-- <ion-item lines=\"none\" routerDirection=\"root\"   detail=\"false\" [routerLink]=\"['/yearlyevents']\">\n              <img class=\"terms svg\"  src=\"../assets/drawer_icons/yearly_events.png\" alt=\"\">\n              <ion-label>Yearly Events</ion-label>\n            </ion-item>\n            -->\n          </ion-menu-toggle>\n      </ion-content>\n      <ion-footer >\n        <ion-item lines=\"none\" routerDirection=\"root\" (click)=\"logout()\"  detail=\"false\" >\n          <img src=\"../assets/drawer_icons/08_Logout.png\" alt=\"\">\n          <ion-label>Logout</ion-label>\n        </ion-item>\n      </ion-footer>\n    </ion-menu>\n    <!-- ------------------------------------------------- -->\n    <ion-menu contentId=\"main-content\"  type=\"overlay\" side=\"start\" \n    menu-id=\"main-content-3\">\n    <ion-toolbar>\n    </ion-toolbar>\n  \n      <ion-content>\n     \n          <ion-menu-toggle auto-hide=\"false\" >\n            <ion-item lines=\"none\" routerDirection=\"root\" detail=\"false\" (click)=\"goToEnquiryForm()\">\n              <img src=\"../assets/drawer_icons/01_Inquiry_form.png\" alt=\"\">\n              <ion-label>Enquiry Form</ion-label>\n            </ion-item>\n            <ion-item lines=\"none\" routerDirection=\"root\"   detail=\"false\" (click)=\"goToAdmissionForm()\">\n              <img src=\"../assets/drawer_icons/02_Admission_form.png\" alt=\"\">\n              <ion-label>Admission Form</ion-label>\n            </ion-item>\n            <!-- <ion-item lines=\"none\" routerDirection=\"root\"   detail=\"false\" (click)=\"goToAdmissionForm()\">\n              <img src=\"../assets/drawer_icons/02_Admission_form.png\" alt=\"\">\n              <ion-label>Preschool Registration Form</ion-label>\n            </ion-item> -->\n            <ion-item lines=\"none\" routerDirection=\"root\"    detail=\"false\"  (click)=\"goToAboutUs()\">\n              <img src=\"../assets/drawer_icons/03_About_us.png\" alt=\"\">\n              <ion-label>About Us</ion-label>\n            </ion-item>\n            <ion-item lines=\"none\" routerDirection=\"root\"    detail=\"false\"  (click)=\"goToGallery()\">\n              <img src=\"../assets/drawer_icons/04_Gallery.png\" alt=\"\">\n              <ion-label>Gallery</ion-label>\n            </ion-item>\n            <ion-item lines=\"none\" routerDirection=\"root\"    detail=\"false\"  (click)=\"goToFeeStructure()\">\n              <img src=\"../assets/drawer_icons/05_Fee_structure.png\" alt=\"\">\n              <ion-label>Fee Structure</ion-label>\n            </ion-item>\n           \n            <!-- <ion-item lines=\"none\" routerDirection=\"root\"   detail=\"false\" [routerLink]=\"['/notice']\" routerLinkActive=\"router-link-active\" >\n              <img class=\"terms svg\" src=\"../assets/drawer_icons/notice.png\" alt=\"\">\n              <ion-label>Notice</ion-label>\n            </ion-item> -->\n            <!-- <ion-item lines=\"none\" routerDirection=\"root\"   detail=\"false\" [routerLink]=\"['/otheractivities']\">\n              <img class=\"terms svg\" src=\"../assets/drawer_icons/service.png\" alt=\"\">\n              <ion-label>Other Activities</ion-label>\n            </ion-item>\n            <ion-item lines=\"none\" routerDirection=\"root\"   detail=\"false\" [routerLink]=\"['/services']\">\n              <img class=\"terms svg\" src=\"../assets/drawer_icons/service.png\" alt=\"\">\n              <ion-label>Services</ion-label>\n            </ion-item> -->\n            <!-- <ion-item lines=\"none\" routerDirection=\"root\"   detail=\"false\" [routerLink]=\"['/medicines']\">\n              <img class=\"terms svg\" src=\"../assets/drawer_icons/medicine.png\" alt=\"\">\n              <ion-label>Medicines</ion-label>\n            </ion-item> -->\n            <!-- <ion-item lines=\"none\" routerDirection=\"root\"   detail=\"false\" [routerLink]=\"['/offers']\">\n              <img class=\"terms svg\" src=\"../assets/drawer_icons/offer.png\" alt=\"\">\n              <ion-label>Offers</ion-label>\n            </ion-item> -->\n            <ion-item lines=\"none\" routerDirection=\"root\"   detail=\"false\" [routerLink]=\"['/rules']\">\n              <img class=\"terms svg\" src=\"../assets/drawer_icons/rules.png\" alt=\"\">\n              <ion-label>Rules & Regulations</ion-label>\n            </ion-item>\n            <!-- <ion-item lines=\"none\" routerDirection=\"root\"   detail=\"false\" [routerLink]=\"['/schedule']\">\n              <img class=\"terms svg\" src=\"../assets/drawer_icons/schedule.png\" alt=\"\">\n              <ion-label>Schedule</ion-label>\n            </ion-item> -->\n            <!-- <ion-item lines=\"none\" routerDirection=\"root\"   detail=\"false\" [routerLink]=\"['/yearlyevents']\">\n              <img class=\"terms svg\"  src=\"../assets/drawer_icons/yearly_events.png\" alt=\"\">\n              <ion-label>Yearly Events</ion-label>\n            </ion-item> -->\n           \n          </ion-menu-toggle>\n      </ion-content>\n      <ion-footer >\n        <ion-item lines=\"none\" routerDirection=\"root\" (click)=\"logout()\"  detail=\"false\" >\n          <img src=\"../assets/drawer_icons/08_Logout.png\" alt=\"\">\n          <ion-label>Logout</ion-label>\n        </ion-item>\n      </ion-footer>\n    </ion-menu>\n    <ion-router-outlet id=\"main-content\"></ion-router-outlet>\n  </ion-split-pane>\n</ion-app>\n";
      /***/
    },

    /***/
    "ZAI4":
    /*!*******************************!*\
      !*** ./src/app/app.module.ts ***!
      \*******************************/

    /*! exports provided: AppModule */

    /***/
    function ZAI4(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AppModule", function () {
        return AppModule;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _editprofile_editprofile_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./editprofile/editprofile.module */
      "AFqN");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/platform-browser */
      "jhN1");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");
      /* harmony import */


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @ionic/angular */
      "TEn/");
      /* harmony import */


      var _app_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./app.component */
      "Sy1n");
      /* harmony import */


      var _app_routing_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ./app-routing.module */
      "vY5A");
      /* harmony import */


      var _ionic_native_splash_screen_ngx__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! @ionic-native/splash-screen/ngx */
      "54vc");
      /* harmony import */


      var _ionic_native_status_bar_ngx__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! @ionic-native/status-bar/ngx */
      "VYYF");
      /* harmony import */


      var _ionic_storage__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! @ionic/storage */
      "e8h1");
      /* harmony import */


      var _ionic_native_http_ngx__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! @ionic-native/http/ngx */
      "XSEc");
      /* harmony import */


      var _ionic_native_file_ngx__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
      /*! @ionic-native/file/ngx */
      "FAH8");
      /* harmony import */


      var _ionic_native_file_transfer_ngx__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
      /*! @ionic-native/file-transfer/ngx */
      "B7Rs");
      /* harmony import */


      var _ionic_native_camera_ngx__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
      /*! @ionic-native/camera/ngx */
      "a/9d");
      /* harmony import */


      var _angular_common_http__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
      /*! @angular/common/http */
      "tk/3");
      /* harmony import */


      var ionic_native_http_connection_backend__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
      /*! ionic-native-http-connection-backend */
      "LAHU");
      /* harmony import */


      var cordova_plugin_fcm_with_dependecy_updated_ionic_ngx__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(
      /*! cordova-plugin-fcm-with-dependecy-updated/ionic/ngx */
      "lOSq");
      /* harmony import */


      var _ionic_native_app_minimize_ngx__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(
      /*! @ionic-native/app-minimize/ngx */
      "Dicn");
      /* harmony import */


      var _ionic_super_tabs_angular__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(
      /*! @ionic-super-tabs/angular */
      "k6Iy");
      /* harmony import */


      var _ionic_native_photo_viewer_ngx__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(
      /*! @ionic-native/photo-viewer/ngx */
      "U3FU");
      /* harmony import */


      var _ionic_native_android_permissions_ngx__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(
      /*! @ionic-native/android-permissions/ngx */
      "WOgW");
      /* harmony import */


      var ion_bottom_sheet__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(
      /*! ion-bottom-sheet */
      "umRu");
      /* harmony import */


      var _awesome_cordova_plugins_chooser_ngx__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(
      /*! @awesome-cordova-plugins/chooser/ngx */
      "BNVN");
      /* harmony import */


      var _ionic_native_sms_retriever_ngx__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(
      /*! @ionic-native/sms-retriever/ngx */
      "BeAq"); //import { NgOtpInputModule } from  'ng-otp-input';


      var AppModule = /*#__PURE__*/_createClass(function AppModule() {
        _classCallCheck(this, AppModule);
      });

      AppModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
        declarations: [_app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"]],
        entryComponents: [],
        imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["BrowserModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"].forRoot({
          navAnimation: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["iosTransitionAnimation"]
        }), _app_routing_module__WEBPACK_IMPORTED_MODULE_7__["AppRoutingModule"], _ionic_storage__WEBPACK_IMPORTED_MODULE_10__["IonicStorageModule"].forRoot(), _angular_common_http__WEBPACK_IMPORTED_MODULE_15__["HttpClientModule"], ionic_native_http_connection_backend__WEBPACK_IMPORTED_MODULE_16__["NativeHttpModule"], _ionic_super_tabs_angular__WEBPACK_IMPORTED_MODULE_19__["SuperTabsModule"].forRoot(), _editprofile_editprofile_module__WEBPACK_IMPORTED_MODULE_1__["EditprofilePageModule"], ion_bottom_sheet__WEBPACK_IMPORTED_MODULE_22__["IonBottomSheetModule"]],
        providers: [_ionic_native_sms_retriever_ngx__WEBPACK_IMPORTED_MODULE_24__["SmsRetriever"], _ionic_native_splash_screen_ngx__WEBPACK_IMPORTED_MODULE_8__["SplashScreen"], _ionic_native_status_bar_ngx__WEBPACK_IMPORTED_MODULE_9__["StatusBar"], _ionic_native_http_ngx__WEBPACK_IMPORTED_MODULE_11__["HTTP"], _ionic_native_file_ngx__WEBPACK_IMPORTED_MODULE_12__["File"], _ionic_native_file_transfer_ngx__WEBPACK_IMPORTED_MODULE_13__["FileTransfer"], _ionic_native_camera_ngx__WEBPACK_IMPORTED_MODULE_14__["Camera"], cordova_plugin_fcm_with_dependecy_updated_ionic_ngx__WEBPACK_IMPORTED_MODULE_17__["FCM"], _ionic_native_app_minimize_ngx__WEBPACK_IMPORTED_MODULE_18__["AppMinimize"], _ionic_native_photo_viewer_ngx__WEBPACK_IMPORTED_MODULE_20__["PhotoViewer"], _ionic_native_android_permissions_ngx__WEBPACK_IMPORTED_MODULE_21__["AndroidPermissions"], _awesome_cordova_plugins_chooser_ngx__WEBPACK_IMPORTED_MODULE_23__["Chooser"], {
          provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_15__["HttpBackend"],
          useClass: ionic_native_http_connection_backend__WEBPACK_IMPORTED_MODULE_16__["NativeHttpFallback"],
          deps: [_ionic_angular__WEBPACK_IMPORTED_MODULE_5__["Platform"], ionic_native_http_connection_backend__WEBPACK_IMPORTED_MODULE_16__["NativeHttpBackend"], _angular_common_http__WEBPACK_IMPORTED_MODULE_15__["HttpXhrBackend"]]
        }, {
          provide: _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouteReuseStrategy"],
          useClass: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicRouteStrategy"]
        }],
        bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"]]
      })], AppModule);
      /***/
    },

    /***/
    "a531":
    /*!***********************************************************!*\
      !*** ./src/app/editprofile/editprofile-routing.module.ts ***!
      \***********************************************************/

    /*! exports provided: EditprofilePageRoutingModule */

    /***/
    function a531(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "EditprofilePageRoutingModule", function () {
        return EditprofilePageRoutingModule;
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


      var _editprofile_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./editprofile.page */
      "L8TP");

      var routes = [{
        path: '',
        component: _editprofile_page__WEBPACK_IMPORTED_MODULE_3__["EditprofilePage"]
      }];

      var EditprofilePageRoutingModule = /*#__PURE__*/_createClass(function EditprofilePageRoutingModule() {
        _classCallCheck(this, EditprofilePageRoutingModule);
      });

      EditprofilePageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
      })], EditprofilePageRoutingModule);
      /***/
    },

    /***/
    "kLfG":
    /*!*****************************************************************************************************************************************!*\
      !*** ./node_modules/@ionic/core/dist/esm lazy ^\.\/.*\.entry\.js$ include: \.entry\.js$ exclude: \.system\.entry\.js$ namespace object ***!
      \*****************************************************************************************************************************************/

    /*! no static exports found */

    /***/
    function kLfG(module, exports, __webpack_require__) {
      var map = {
        "./ion-action-sheet.entry.js": ["dUtr", "common", 3],
        "./ion-alert.entry.js": ["Q8AI", "common", 4],
        "./ion-app_8.entry.js": ["hgI1", "common", 5],
        "./ion-avatar_3.entry.js": ["CfoV", "common", 6],
        "./ion-back-button.entry.js": ["Nt02", "common", 7],
        "./ion-backdrop.entry.js": ["Q2Bp", 8],
        "./ion-button_2.entry.js": ["0Pbj", "common", 9],
        "./ion-card_5.entry.js": ["ydQj", "common", 10],
        "./ion-checkbox.entry.js": ["4fMi", "common", 11],
        "./ion-chip.entry.js": ["czK9", "common", 12],
        "./ion-col_3.entry.js": ["/CAe", 13],
        "./ion-datetime_3.entry.js": ["WgF3", "common", 14],
        "./ion-fab_3.entry.js": ["uQcF", "common", 15],
        "./ion-img.entry.js": ["wHD8", 16],
        "./ion-infinite-scroll_2.entry.js": ["2lz6", 17],
        "./ion-input.entry.js": ["ercB", "common", 18],
        "./ion-item-option_3.entry.js": ["MGMP", "common", 19],
        "./ion-item_8.entry.js": ["9bur", "common", 20],
        "./ion-loading.entry.js": ["cABk", "common", 21],
        "./ion-menu_3.entry.js": ["kyFE", "common", 22],
        "./ion-modal.entry.js": ["TvZU", "common", 23],
        "./ion-nav_2.entry.js": ["vnES", "common", 24],
        "./ion-popover.entry.js": ["qCuA", "common", 25],
        "./ion-progress-bar.entry.js": ["0tOe", "common", 26],
        "./ion-radio_2.entry.js": ["h11V", "common", 27],
        "./ion-range.entry.js": ["XGij", "common", 28],
        "./ion-refresher_2.entry.js": ["nYbb", "common", 29],
        "./ion-reorder_2.entry.js": ["smMY", "common", 30],
        "./ion-ripple-effect.entry.js": ["STjf", 31],
        "./ion-route_4.entry.js": ["k5eQ", "common", 32],
        "./ion-searchbar.entry.js": ["OR5t", "common", 33],
        "./ion-segment_2.entry.js": ["fSgp", "common", 34],
        "./ion-select_3.entry.js": ["lfGF", "common", 35],
        "./ion-slide_2.entry.js": ["5xYT", 36],
        "./ion-spinner.entry.js": ["nI0H", "common", 37],
        "./ion-split-pane.entry.js": ["NAQR", 38],
        "./ion-tab-bar_2.entry.js": ["knkW", "common", 39],
        "./ion-tab_2.entry.js": ["TpdJ", "common", 40],
        "./ion-text.entry.js": ["ISmu", "common", 41],
        "./ion-textarea.entry.js": ["U7LX", "common", 42],
        "./ion-toast.entry.js": ["L3sA", "common", 43],
        "./ion-toggle.entry.js": ["IUOf", "common", 44],
        "./ion-virtual-scroll.entry.js": ["8Mb5", 45]
      };

      function webpackAsyncContext(req) {
        if (!__webpack_require__.o(map, req)) {
          return Promise.resolve().then(function () {
            var e = new Error("Cannot find module '" + req + "'");
            e.code = 'MODULE_NOT_FOUND';
            throw e;
          });
        }

        var ids = map[req],
            id = ids[0];
        return Promise.all(ids.slice(1).map(__webpack_require__.e)).then(function () {
          return __webpack_require__(id);
        });
      }

      webpackAsyncContext.keys = function webpackAsyncContextKeys() {
        return Object.keys(map);
      };

      webpackAsyncContext.id = "kLfG";
      module.exports = webpackAsyncContext;
      /***/
    },

    /***/
    "lmbG":
    /*!***************************************************!*\
      !*** ./src/app/editprofile/editprofile.page.scss ***!
      \***************************************************/

    /*! exports provided: default */

    /***/
    function lmbG(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = ".step {\n  color: #a2a2a2;\n  font-size: 16px;\n  margin-left: 16px;\n  font-family: initial;\n  margin-bottom: 2px;\n  font-weight: bold;\n}\n\n.step-heading {\n  color: #fdd653;\n  margin-left: 16px;\n  font-family: initial;\n  font-size: 30px;\n  margin-top: 0;\n  font-weight: bold;\n  text-decoration: underline;\n  text-decoration-thickness: 2px;\n}\n\n.wrap {\n  text-align: center;\n  position: relative;\n}\n\n.wrap:before {\n  content: \"\";\n  position: absolute;\n  top: 20%;\n  left: 18%;\n  border-top: 0.5px solid #677483;\n  border-width: thin;\n  width: 65%;\n  transform: translateY(-50%);\n  border-style: dashed;\n}\n\n.active {\n  background: #fdd653;\n  color: #ffffff;\n}\n\n.icon-circle {\n  position: relative;\n  display: inline-block;\n  margin: -1px;\n  width: 30px;\n  height: 30px;\n  font-size: 26px;\n  border-radius: 50%;\n  border: 1px solid #202020;\n  background: #fff;\n  color: #202020;\n  text-align: center;\n}\n\n.icon-circle ion-icon {\n  margin-top: 2px;\n  font-size: 20px;\n}\n\n.heading-1 {\n  color: #676767;\n  margin-bottom: 0;\n  font-size: 16px;\n}\n\n.heading {\n  color: #9b9ca6;\n  margin-bottom: 0;\n  font-size: 14px;\n}\n\nion-label {\n  color: #9b9ca6;\n  font-size: 14px;\n}\n\nion-input {\n  border: 1px solid #9b9ca6;\n  border-radius: 5px;\n  --padding-start: 5px !important;\n  height: 35px;\n}\n\nion-textarea {\n  border: 1px solid #9b9ca6;\n  border-radius: 5px;\n  --padding-start: 5px !important;\n}\n\nion-datetime {\n  border: 1px solid #9b9ca6;\n  border-radius: 5px;\n  --padding-start: 5px !important;\n  width: 100%;\n  height: 35px;\n}\n\nion-item {\n  --padding-start: 0;\n  --ripple-color: transparent;\n  --background-activated: transparent;\n  --background-activated-opacity:transparent;\n  --background-focused: transparent;\n  --background-focused-opacity:transparent;\n  --background-hover: transparent;\n  --background-hover-opacity:transparent;\n}\n\nion-item ion-label {\n  font-size: 12px;\n  color: #9b9ca6;\n}\n\nion-radio-group ion-item {\n  border-bottom: 0;\n}\n\nion-radio-group ion-col {\n  padding-left: 0;\n}\n\nion-radio-group ion-radio {\n  margin-right: 8px;\n  width: 18px;\n  height: 18px;\n}\n\nion-col {\n  padding-left: 0;\n}\n\nion-button {\n  text-transform: none;\n}\n\n.choose-btn {\n  --background: #ee4a35;\n}\n\n.heading-3 {\n  margin-top: 12px;\n  color: #929791;\n}\n\n.admission-row ion-col {\n  text-align: center;\n  text-align: -moz-center;\n}\n\n.admission-row ion-col ion-button {\n  text-transform: none;\n  width: 80%;\n}\n\n.next-btn-col {\n  text-align: left !important;\n}\n\nimg {\n  width: 100px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL2VkaXRwcm9maWxlLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDQTtFQUNJLGNBQUE7RUFDQSxlQUFBO0VBQ0EsaUJBQUE7RUFDQSxvQkFBQTtFQUNBLGtCQUFBO0VBQ0EsaUJBQUE7QUFBSjs7QUFFQTtFQUNJLGNBQUE7RUFDQSxpQkFBQTtFQUNBLG9CQUFBO0VBQ0EsZUFBQTtFQUNBLGFBQUE7RUFDQSxpQkFBQTtFQUNBLDBCQUFBO0VBQ0EsOEJBQUE7QUFDSjs7QUFDQTtFQUNJLGtCQUFBO0VBQ0Esa0JBQUE7QUFFSjs7QUFDRTtFQUNFLFdBQUE7RUFDQSxrQkFBQTtFQUNBLFFBQUE7RUFDQSxTQUFBO0VBQ0EsK0JBQUE7RUFDQSxrQkFBQTtFQUNBLFVBQUE7RUFDQSwyQkFBQTtFQUNBLG9CQUFBO0FBRUo7O0FBQUU7RUFDRSxtQkFBQTtFQUNBLGNBQUE7QUFHSjs7QUFERTtFQUNFLGtCQUFBO0VBQ0EscUJBQUE7RUFDQSxZQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxlQUFBO0VBQ0Esa0JBQUE7RUFDQSx5QkFBQTtFQUNBLGdCQUFBO0VBQ0EsY0FBQTtFQUNBLGtCQUFBO0FBSUo7O0FBRkk7RUFDSSxlQUFBO0VBQ0EsZUFBQTtBQUlSOztBQUVFO0VBQ0UsY0FBQTtFQUNBLGdCQUFBO0VBQ0EsZUFBQTtBQUNKOztBQUNBO0VBQ0ksY0FBQTtFQUNBLGdCQUFBO0VBQ0EsZUFBQTtBQUVKOztBQUFBO0VBQ0ksY0FBQTtFQUNBLGVBQUE7QUFHSjs7QUFEQTtFQUNJLHlCQUFBO0VBQ0Esa0JBQUE7RUFDQSwrQkFBQTtFQUNBLFlBQUE7QUFJSjs7QUFGQTtFQUNJLHlCQUFBO0VBQ0Esa0JBQUE7RUFDQSwrQkFBQTtBQUtKOztBQUhBO0VBQ0kseUJBQUE7RUFDQSxrQkFBQTtFQUNBLCtCQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7QUFNSjs7QUFIQTtFQUVJLGtCQUFBO0VBQ0EsMkJBQUE7RUFDQSxtQ0FBQTtFQUNBLDBDQUFBO0VBQ0EsaUNBQUE7RUFDQSx3Q0FBQTtFQUNBLCtCQUFBO0VBQ0Esc0NBQUE7QUFLSjs7QUFISTtFQUNJLGVBQUE7RUFDSixjQUFBO0FBS0o7O0FBQVE7RUFDSSxnQkFBQTtBQUdaOztBQURRO0VBQ0ksZUFBQTtBQUdaOztBQURRO0VBQ0EsaUJBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtBQUdSOztBQUNJO0VBQ0ksZUFBQTtBQUVSOztBQUNJO0VBQ0ksb0JBQUE7QUFFUjs7QUFBSTtFQUNJLHFCQUFBO0FBR1I7O0FBREk7RUFDSSxnQkFBQTtFQUNBLGNBQUE7QUFJUjs7QUFEUTtFQUNJLGtCQUFBO0VBQ0EsdUJBQUE7QUFJWjs7QUFIWTtFQUNJLG9CQUFBO0VBRUEsVUFBQTtBQUloQjs7QUFDSTtFQUNJLDJCQUFBO0FBRVI7O0FBQUk7RUFDSSxZQUFBO0FBR1IiLCJmaWxlIjoiZWRpdHByb2ZpbGUucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiXHJcbi5zdGVwe1xyXG4gICAgY29sb3I6ICNhMmEyYTI7XHJcbiAgICBmb250LXNpemU6IDE2cHg7XHJcbiAgICBtYXJnaW4tbGVmdDogMTZweDtcclxuICAgIGZvbnQtZmFtaWx5OiBpbml0aWFsO1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMnB4O1xyXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbn1cclxuLnN0ZXAtaGVhZGluZ3tcclxuICAgIGNvbG9yOiAjZmRkNjUzO1xyXG4gICAgbWFyZ2luLWxlZnQ6IDE2cHg7XHJcbiAgICBmb250LWZhbWlseTogaW5pdGlhbDtcclxuICAgIGZvbnQtc2l6ZTogMzBweDtcclxuICAgIG1hcmdpbi10b3A6IDA7XHJcbiAgICBmb250LXdlaWdodDogYm9sZDtcclxuICAgIHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lO1xyXG4gICAgdGV4dC1kZWNvcmF0aW9uLXRoaWNrbmVzczogMnB4O1xyXG59XHJcbi53cmFwIHtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICB9XHJcbiAgXHJcbiAgLndyYXA6YmVmb3JlIHtcclxuICAgIGNvbnRlbnQ6IFwiXCI7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICB0b3A6IDIwJTtcclxuICAgIGxlZnQ6IDE4JTtcclxuICAgIGJvcmRlci10b3A6IDAuNXB4IHNvbGlkICM2Nzc0ODM7XHJcbiAgICBib3JkZXItd2lkdGg6IHRoaW47XHJcbiAgICB3aWR0aDogNjUlO1xyXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC01MCUpO1xyXG4gICAgYm9yZGVyLXN0eWxlOiBkYXNoZWQ7XHJcbiAgfVxyXG4gIC5hY3RpdmV7XHJcbiAgICBiYWNrZ3JvdW5kOiAjZmRkNjUzO1xyXG4gICAgY29sb3I6ICNmZmZmZmY7XHJcbiAgfVxyXG4gIC5pY29uLWNpcmNsZXtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICAgIG1hcmdpbjogLTFweDtcclxuICAgIHdpZHRoOiAzMHB4O1xyXG4gICAgaGVpZ2h0OiAzMHB4O1xyXG4gICAgZm9udC1zaXplOiAyNnB4O1xyXG4gICAgYm9yZGVyLXJhZGl1czogNTAlO1xyXG4gICAgYm9yZGVyOiAxcHggc29saWQgIzIwMjAyMDtcclxuICAgIGJhY2tncm91bmQ6ICNmZmY7XHJcbiAgICBjb2xvcjogIzIwMjAyMDtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuXHJcbiAgICBpb24taWNvbntcclxuICAgICAgICBtYXJnaW4tdG9wOiAycHg7XHJcbiAgICAgICAgZm9udC1zaXplOiAyMHB4O1xyXG4gICAgfVxyXG4gIFxyXG4gIH1cclxuICBcclxuICBcclxuICAuaGVhZGluZy0xe1xyXG4gICAgY29sb3I6ICM2NzY3Njc7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAwO1xyXG4gICAgZm9udC1zaXplOiAxNnB4O1xyXG59XHJcbi5oZWFkaW5ne1xyXG4gICAgY29sb3I6ICM5YjljYTY7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAwO1xyXG4gICAgZm9udC1zaXplOiAxNHB4O1xyXG59XHJcbmlvbi1sYWJlbHtcclxuICAgIGNvbG9yOiAjOWI5Y2E2O1xyXG4gICAgZm9udC1zaXplOiAxNHB4O1xyXG59XHJcbmlvbi1pbnB1dCB7XHJcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjOWI5Y2E2O1xyXG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xyXG4gICAgLS1wYWRkaW5nLXN0YXJ0OiA1cHggIWltcG9ydGFudDtcclxuICAgIGhlaWdodDozNXB4O1xyXG59XHJcbmlvbi10ZXh0YXJlYXtcclxuICAgIGJvcmRlcjogMXB4IHNvbGlkICM5YjljYTY7XHJcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XHJcbiAgICAtLXBhZGRpbmctc3RhcnQ6IDVweCAhaW1wb3J0YW50O1xyXG59XHJcbmlvbi1kYXRldGltZXtcclxuICAgIGJvcmRlcjogMXB4IHNvbGlkICM5YjljYTY7XHJcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XHJcbiAgICAtLXBhZGRpbmctc3RhcnQ6IDVweCAhaW1wb3J0YW50O1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBoZWlnaHQ6MzVweDtcclxuXHJcbn1cclxuaW9uLWl0ZW17XHJcbiAgICAvLyBib3JkZXItYm90dG9tOiAxcHggc29saWQgIzY3NzQ4MztcclxuICAgIC0tcGFkZGluZy1zdGFydDogMDtcclxuICAgIC0tcmlwcGxlLWNvbG9yOiB0cmFuc3BhcmVudDtcclxuICAgIC0tYmFja2dyb3VuZC1hY3RpdmF0ZWQ6IHRyYW5zcGFyZW50O1xyXG4gICAgLS1iYWNrZ3JvdW5kLWFjdGl2YXRlZC1vcGFjaXR5OnRyYW5zcGFyZW50O1xyXG4gICAgLS1iYWNrZ3JvdW5kLWZvY3VzZWQ6IHRyYW5zcGFyZW50O1xyXG4gICAgLS1iYWNrZ3JvdW5kLWZvY3VzZWQtb3BhY2l0eTp0cmFuc3BhcmVudDtcclxuICAgIC0tYmFja2dyb3VuZC1ob3ZlciAgOiB0cmFuc3BhcmVudDtcclxuICAgIC0tYmFja2dyb3VuZC1ob3Zlci1vcGFjaXR5ICA6dHJhbnNwYXJlbnQ7XHJcblxyXG4gICAgaW9uLWxhYmVsIHtcclxuICAgICAgICBmb250LXNpemU6IDEycHg7XHJcbiAgICBjb2xvcjogIzliOWNhNjtcclxuXHJcbiAgICB9XHJcbn1cclxuICAgIGlvbi1yYWRpby1ncm91cHtcclxuICAgICAgICBpb24taXRlbXtcclxuICAgICAgICAgICAgYm9yZGVyLWJvdHRvbTogMDtcclxuICAgICAgICB9XHJcbiAgICAgICAgaW9uLWNvbCB7XHJcbiAgICAgICAgICAgIHBhZGRpbmctbGVmdDogMDtcclxuICAgICAgICB9XHJcbiAgICAgICAgaW9uLXJhZGlve1xyXG4gICAgICAgIG1hcmdpbi1yaWdodDogOHB4O1xyXG4gICAgICAgIHdpZHRoOiAxOHB4O1xyXG4gICAgICAgIGhlaWdodDogMThweDtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgaW9uLWNvbCB7XHJcbiAgICAgICAgcGFkZGluZy1sZWZ0OiAwO1xyXG4gICAgfVxyXG5cclxuICAgIGlvbi1idXR0b24ge1xyXG4gICAgICAgIHRleHQtdHJhbnNmb3JtOiBub25lO1xyXG4gICAgfVxyXG4gICAgLmNob29zZS1idG57XHJcbiAgICAgICAgLS1iYWNrZ3JvdW5kOiAjZWU0YTM1O1xyXG4gICAgfVxyXG4gICAgLmhlYWRpbmctM3tcclxuICAgICAgICBtYXJnaW4tdG9wOiAxMnB4O1xyXG4gICAgICAgIGNvbG9yOiAjOTI5NzkxO1xyXG4gICAgfVxyXG4gICAgLmFkbWlzc2lvbi1yb3d7XHJcbiAgICAgICAgaW9uLWNvbHtcclxuICAgICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgICAgICAgICB0ZXh0LWFsaWduOiAtbW96LWNlbnRlcjtcclxuICAgICAgICAgICAgaW9uLWJ1dHRvbntcclxuICAgICAgICAgICAgICAgIHRleHQtdHJhbnNmb3JtOiBub25lO1xyXG4gICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgIHdpZHRoOiA4MCU7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgLm5leHQtYnRuLWNvbHtcclxuICAgICAgICB0ZXh0LWFsaWduOiBsZWZ0ICFpbXBvcnRhbnQ7XHJcbiAgICB9XHJcbiAgICBpbWd7XHJcbiAgICAgICAgd2lkdGg6IDEwMHB4O1xyXG4gICAgfSJdfQ== */";
      /***/
    },

    /***/
    "vY5A":
    /*!***************************************!*\
      !*** ./src/app/app-routing.module.ts ***!
      \***************************************/

    /*! exports provided: AppRoutingModule */

    /***/
    function vY5A(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function () {
        return AppRoutingModule;
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

      var routes = [{
        path: 'home',
        loadChildren: function loadChildren() {
          return __webpack_require__.e(
          /*! import() | home-home-module */
          "home-home-module").then(__webpack_require__.bind(null,
          /*! ./home/home.module */
          "ct+p")).then(function (m) {
            return m.HomePageModule;
          });
        }
      }, {
        path: '',
        redirectTo: 'home',
        pathMatch: 'full'
      }, {
        path: 'login',
        loadChildren: function loadChildren() {
          return __webpack_require__.e(
          /*! import() | login-login-module */
          "login-login-module").then(__webpack_require__.bind(null,
          /*! ./login/login.module */
          "X3zk")).then(function (m) {
            return m.LoginPageModule;
          });
        }
      }, {
        path: 'quicktour',
        loadChildren: function loadChildren() {
          return __webpack_require__.e(
          /*! import() | quicktour-quicktour-module */
          "quicktour-quicktour-module").then(__webpack_require__.bind(null,
          /*! ./quicktour/quicktour.module */
          "vqB2")).then(function (m) {
            return m.QuicktourPageModule;
          });
        }
      }, {
        path: 'centre',
        loadChildren: function loadChildren() {
          return __webpack_require__.e(
          /*! import() | centre-centre-module */
          "centre-centre-module").then(__webpack_require__.bind(null,
          /*! ./centre/centre.module */
          "TPl5")).then(function (m) {
            return m.CentrePageModule;
          });
        }
      }, {
        path: 'feestructure',
        loadChildren: function loadChildren() {
          return __webpack_require__.e(
          /*! import() | feestructure-feestructure-module */
          "feestructure-feestructure-module").then(__webpack_require__.bind(null,
          /*! ./feestructure/feestructure.module */
          "J/2f")).then(function (m) {
            return m.FeestructurePageModule;
          });
        }
      }, {
        path: 'paymenthistory',
        loadChildren: function loadChildren() {
          return __webpack_require__.e(
          /*! import() | paymenthistory-paymenthistory-module */
          "paymenthistory-paymenthistory-module").then(__webpack_require__.bind(null,
          /*! ./paymenthistory/paymenthistory.module */
          "EDAp")).then(function (m) {
            return m.PaymenthistoryPageModule;
          });
        }
      }, {
        path: 'courses',
        loadChildren: function loadChildren() {
          return __webpack_require__.e(
          /*! import() | courses-courses-module */
          "courses-courses-module").then(__webpack_require__.bind(null,
          /*! ./courses/courses.module */
          "sU/i")).then(function (m) {
            return m.CoursesPageModule;
          });
        }
      }, {
        path: 'events',
        loadChildren: function loadChildren() {
          return __webpack_require__.e(
          /*! import() | events-events-module */
          "events-events-module").then(__webpack_require__.bind(null,
          /*! ./events/events.module */
          "pTcb")).then(function (m) {
            return m.EventsPageModule;
          });
        }
      }, {
        path: 'aboutus',
        loadChildren: function loadChildren() {
          return __webpack_require__.e(
          /*! import() | aboutus-aboutus-module */
          "aboutus-aboutus-module").then(__webpack_require__.bind(null,
          /*! ./aboutus/aboutus.module */
          "1N0L")).then(function (m) {
            return m.AboutusPageModule;
          });
        }
      }, {
        path: 'eventdetails/:event',
        loadChildren: function loadChildren() {
          return __webpack_require__.e(
          /*! import() | eventdetails-eventdetails-module */
          "eventdetails-eventdetails-module").then(__webpack_require__.bind(null,
          /*! ./eventdetails/eventdetails.module */
          "zzI9")).then(function (m) {
            return m.EventdetailsPageModule;
          });
        }
      }, {
        path: 'gallery',
        loadChildren: function loadChildren() {
          return __webpack_require__.e(
          /*! import() | gallery-gallery-module */
          "gallery-gallery-module").then(__webpack_require__.bind(null,
          /*! ./gallery/gallery.module */
          "3ros")).then(function (m) {
            return m.GalleryPageModule;
          });
        }
      }, {
        path: 'addinquiry',
        loadChildren: function loadChildren() {
          return __webpack_require__.e(
          /*! import() | addinquiry-addinquiry-module */
          "addinquiry-addinquiry-module").then(__webpack_require__.bind(null,
          /*! ./addinquiry/addinquiry.module */
          "oLPS")).then(function (m) {
            return m.AddinquiryPageModule;
          });
        }
      }, {
        path: 'addadmission',
        loadChildren: function loadChildren() {
          return __webpack_require__.e(
          /*! import() | addadmission-addadmission-module */
          "addadmission-addadmission-module").then(__webpack_require__.bind(null,
          /*! ./addadmission/addadmission.module */
          "qhoA")).then(function (m) {
            return m.AddadmissionPageModule;
          });
        }
      }, {
        path: 'otp/:mobNo',
        loadChildren: function loadChildren() {
          return __webpack_require__.e(
          /*! import() | otp-otp-module */
          "otp-otp-module").then(__webpack_require__.bind(null,
          /*! ./otp/otp.module */
          "ikiF")).then(function (m) {
            return m.OtpPageModule;
          });
        }
      }, {
        path: 'mobilelogin',
        loadChildren: function loadChildren() {
          return __webpack_require__.e(
          /*! import() | mobilelogin-mobilelogin-module */
          "mobilelogin-mobilelogin-module").then(__webpack_require__.bind(null,
          /*! ./mobilelogin/mobilelogin.module */
          "SbMv")).then(function (m) {
            return m.MobileloginPageModule;
          });
        }
      }, {
        path: 'profile',
        loadChildren: function loadChildren() {
          return __webpack_require__.e(
          /*! import() | profile-profile-module */
          "profile-profile-module").then(__webpack_require__.bind(null,
          /*! ./profile/profile.module */
          "cRhG")).then(function (m) {
            return m.ProfilePageModule;
          });
        }
      }, // {
      //   path: 'homework',
      //   loadChildren: () => import('./homework/homework.module').then( m => m.HomeworkPageModule)
      // },
      // {
      //   path: 'homeworkdetails',
      //   loadChildren: () => import('./homeworkdetails/homeworkdetails.module').then( m => m.HomeworkdetailsPageModule)
      // },
      {
        path: 'childotherinfo',
        loadChildren: function loadChildren() {
          return __webpack_require__.e(
          /*! import() | childotherinfo-childotherinfo-module */
          "childotherinfo-childotherinfo-module").then(__webpack_require__.bind(null,
          /*! ./childotherinfo/childotherinfo.module */
          "u85i")).then(function (m) {
            return m.ChildotherinfoPageModule;
          });
        }
      }, {
        path: 'childprofile',
        loadChildren: function loadChildren() {
          return __webpack_require__.e(
          /*! import() | childprofile-childprofile-module */
          "childprofile-childprofile-module").then(__webpack_require__.bind(null,
          /*! ./childprofile/childprofile.module */
          "BF4i")).then(function (m) {
            return m.ChildprofilePageModule;
          });
        }
      }, {
        path: 'childotherinfotwo',
        loadChildren: function loadChildren() {
          return __webpack_require__.e(
          /*! import() | childotherinfotwo-childotherinfotwo-module */
          "childotherinfotwo-childotherinfotwo-module").then(__webpack_require__.bind(null,
          /*! ./childotherinfotwo/childotherinfotwo.module */
          "2ZFK")).then(function (m) {
            return m.ChildotherinfotwoPageModule;
          });
        }
      }, {
        path: 'parentsinfo',
        loadChildren: function loadChildren() {
          return __webpack_require__.e(
          /*! import() | parentsinfo-parentsinfo-module */
          "parentsinfo-parentsinfo-module").then(__webpack_require__.bind(null,
          /*! ./parentsinfo/parentsinfo.module */
          "AHTF")).then(function (m) {
            return m.ParentsinfoPageModule;
          });
        }
      }, {
        path: 'feestructuretwo/:branch_id/:pdf/:branch_name',
        loadChildren: function loadChildren() {
          return __webpack_require__.e(
          /*! import() | feestructuretwo-feestructuretwo-module */
          "feestructuretwo-feestructuretwo-module").then(__webpack_require__.bind(null,
          /*! ./feestructuretwo/feestructuretwo.module */
          "FP7L")).then(function (m) {
            return m.FeestructuretwoPageModule;
          });
        }
      }, {
        path: 'gallerytwo/:id/:name',
        loadChildren: function loadChildren() {
          return __webpack_require__.e(
          /*! import() | gallerytwo-gallerytwo-module */
          "gallerytwo-gallerytwo-module").then(__webpack_require__.bind(null,
          /*! ./gallerytwo/gallerytwo.module */
          "4cPm")).then(function (m) {
            return m.GallerytwoPageModule;
          });
        }
      }, {
        path: 'switchprofile',
        loadChildren: function loadChildren() {
          return __webpack_require__.e(
          /*! import() | switchprofile-switchprofile-module */
          "switchprofile-switchprofile-module").then(__webpack_require__.bind(null,
          /*! ./switchprofile/switchprofile.module */
          "Iu96")).then(function (m) {
            return m.SwitchprofilePageModule;
          });
        }
      }, {
        path: 'siblingsform',
        loadChildren: function loadChildren() {
          return __webpack_require__.e(
          /*! import() | siblingsform-siblingsform-module */
          "siblingsform-siblingsform-module").then(__webpack_require__.bind(null,
          /*! ./siblingsform/siblingsform.module */
          "EfRL")).then(function (m) {
            return m.SiblingsformPageModule;
          });
        }
      }, {
        path: 'imageform',
        loadChildren: function loadChildren() {
          return __webpack_require__.e(
          /*! import() | imageform-imageform-module */
          "imageform-imageform-module").then(__webpack_require__.bind(null,
          /*! ./imageform/imageform.module */
          "10uQ")).then(function (m) {
            return m.ImageformPageModule;
          });
        }
      }, {
        path: 'preschoolform',
        loadChildren: function loadChildren() {
          return __webpack_require__.e(
          /*! import() | preschoolform-preschoolform-module */
          "preschoolform-preschoolform-module").then(__webpack_require__.bind(null,
          /*! ./preschoolform/preschoolform.module */
          "Avr1")).then(function (m) {
            return m.PreschoolformPageModule;
          });
        }
      }, {
        path: 'preschoolotherform',
        loadChildren: function loadChildren() {
          return __webpack_require__.e(
          /*! import() | preschoolotherform-preschoolotherform-module */
          "preschoolotherform-preschoolotherform-module").then(__webpack_require__.bind(null,
          /*! ./preschoolotherform/preschoolotherform.module */
          "w4YX")).then(function (m) {
            return m.PreschoolotherformPageModule;
          });
        }
      }, {
        path: 'notifications',
        loadChildren: function loadChildren() {
          return __webpack_require__.e(
          /*! import() | notifications-notifications-module */
          "notifications-notifications-module").then(__webpack_require__.bind(null,
          /*! ./notifications/notifications.module */
          "wMrW")).then(function (m) {
            return m.NotificationsPageModule;
          });
        }
      }, {
        path: 'editprofile',
        loadChildren: function loadChildren() {
          return Promise.resolve().then(__webpack_require__.bind(null,
          /*! ./editprofile/editprofile.module */
          "AFqN")).then(function (m) {
            return m.EditprofilePageModule;
          });
        }
      }, {
        path: 'medicines',
        loadChildren: function loadChildren() {
          return Promise.all(
          /*! import() | medicines-medicines-module */
          [__webpack_require__.e("default~editillness-editillness-module~medicines-medicines-module"), __webpack_require__.e("medicines-medicines-module")]).then(__webpack_require__.bind(null,
          /*! ./medicines/medicines.module */
          "Lehh")).then(function (m) {
            return m.MedicinesPageModule;
          });
        }
      }, {
        path: 'schedule',
        loadChildren: function loadChildren() {
          return __webpack_require__.e(
          /*! import() | schedule-schedule-module */
          "schedule-schedule-module").then(__webpack_require__.bind(null,
          /*! ./schedule/schedule.module */
          "L0xO")).then(function (m) {
            return m.SchedulePageModule;
          });
        }
      }, {
        path: 'rules',
        loadChildren: function loadChildren() {
          return __webpack_require__.e(
          /*! import() | rules-rules-module */
          "rules-rules-module").then(__webpack_require__.bind(null,
          /*! ./rules/rules.module */
          "bJsR")).then(function (m) {
            return m.RulesPageModule;
          });
        }
      }, {
        path: 'notice',
        loadChildren: function loadChildren() {
          return __webpack_require__.e(
          /*! import() | notice-notice-module */
          "notice-notice-module").then(__webpack_require__.bind(null,
          /*! ./notice/notice.module */
          "IUlz")).then(function (m) {
            return m.NoticePageModule;
          });
        }
      }, {
        path: 'services',
        loadChildren: function loadChildren() {
          return __webpack_require__.e(
          /*! import() | services-services-module */
          "services-services-module").then(__webpack_require__.bind(null,
          /*! ./services/services.module */
          "334H")).then(function (m) {
            return m.ServicesPageModule;
          });
        }
      }, {
        path: 'offers',
        loadChildren: function loadChildren() {
          return __webpack_require__.e(
          /*! import() | offers-offers-module */
          "offers-offers-module").then(__webpack_require__.bind(null,
          /*! ./offers/offers.module */
          "x4ys")).then(function (m) {
            return m.OffersPageModule;
          });
        }
      }, {
        path: 'otheractivities',
        loadChildren: function loadChildren() {
          return __webpack_require__.e(
          /*! import() | otheractivities-otheractivities-module */
          "otheractivities-otheractivities-module").then(__webpack_require__.bind(null,
          /*! ./otheractivities/otheractivities.module */
          "SL9h")).then(function (m) {
            return m.OtheractivitiesPageModule;
          });
        }
      }, {
        path: 'yearlyevents',
        loadChildren: function loadChildren() {
          return __webpack_require__.e(
          /*! import() | yearlyevents-yearlyevents-module */
          "yearlyevents-yearlyevents-module").then(__webpack_require__.bind(null,
          /*! ./yearlyevents/yearlyevents.module */
          "YN8f")).then(function (m) {
            return m.YearlyeventsPageModule;
          });
        }
      }, {
        path: 'addillness',
        loadChildren: function loadChildren() {
          return __webpack_require__.e(
          /*! import() | addillness-addillness-module */
          "addillness-addillness-module").then(__webpack_require__.bind(null,
          /*! ./addillness/addillness.module */
          "Y7bj")).then(function (m) {
            return m.AddillnessPageModule;
          });
        }
      }, {
        path: 'addmedicine/:illnessId',
        loadChildren: function loadChildren() {
          return Promise.all(
          /*! import() | addmedicine-addmedicine-module */
          [__webpack_require__.e("default~addmedicine-addmedicine-module~editmedicine-editmedicine-module"), __webpack_require__.e("addmedicine-addmedicine-module")]).then(__webpack_require__.bind(null,
          /*! ./addmedicine/addmedicine.module */
          "791s")).then(function (m) {
            return m.AddmedicinePageModule;
          });
        }
      }, {
        path: 'admissionform',
        loadChildren: function loadChildren() {
          return __webpack_require__.e(
          /*! import() | admissionform-admissionform-module */
          "admissionform-admissionform-module").then(__webpack_require__.bind(null,
          /*! ./admissionform/admissionform.module */
          "6Yi+")).then(function (m) {
            return m.AdmissionformPageModule;
          });
        }
      }, {
        path: 'editillness',
        loadChildren: function loadChildren() {
          return Promise.all(
          /*! import() | editillness-editillness-module */
          [__webpack_require__.e("default~editillness-editillness-module~medicines-medicines-module"), __webpack_require__.e("editillness-editillness-module")]).then(__webpack_require__.bind(null,
          /*! ./editillness/editillness.module */
          "BA2P")).then(function (m) {
            return m.EditillnessPageModule;
          });
        }
      }, {
        path: 'editmedicine',
        loadChildren: function loadChildren() {
          return Promise.all(
          /*! import() | editmedicine-editmedicine-module */
          [__webpack_require__.e("default~addmedicine-addmedicine-module~editmedicine-editmedicine-module"), __webpack_require__.e("editmedicine-editmedicine-module")]).then(__webpack_require__.bind(null,
          /*! ./editmedicine/editmedicine.module */
          "6ABL")).then(function (m) {
            return m.EditmedicinePageModule;
          });
        }
      }];

      var AppRoutingModule = /*#__PURE__*/_createClass(function AppRoutingModule() {
        _classCallCheck(this, AppRoutingModule);
      });

      AppRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes, {
          preloadingStrategy: _angular_router__WEBPACK_IMPORTED_MODULE_2__["PreloadAllModules"]
        })],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
      })], AppRoutingModule);
      /***/
    },

    /***/
    "yTNM":
    /*!********************************!*\
      !*** ./src/app/api.service.ts ***!
      \********************************/

    /*! exports provided: ApiService */

    /***/
    function yTNM(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ApiService", function () {
        return ApiService;
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


      var _ionic_native_http_ngx__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @ionic-native/http/ngx */
      "XSEc");
      /* harmony import */


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @ionic/angular */
      "TEn/");
      /* harmony import */


      var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/common/http */
      "tk/3");
      /* harmony import */


      var rxjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! rxjs */
      "qCKp");

      var ApiService = /*#__PURE__*/function () {
        // private baseUrl = 'https://developer.dvadminpanel.in/prangan/cocoon_api/api';
        // private baseUrl = 'https://prangan.aayuralife.in/cocoon_api/api'; // testing purpose
        function ApiService(http, toastCtrl, loadingController, httpclient) {
          _classCallCheck(this, ApiService);

          this.http = http;
          this.toastCtrl = toastCtrl;
          this.loadingController = loadingController;
          this.httpclient = httpclient;
          this.tran_please_wait = 'Please Wait'; //private baseUrl = 'https://dynamicvishva.in/Prangan_New/cocoon_api/api';

          this.baseUrl = 'https://app.prangan.in/Prangan_New/cocoon_api/api';
          this.userData = new rxjs__WEBPACK_IMPORTED_MODULE_5__["Subject"]();
          this.userTypeData = new rxjs__WEBPACK_IMPORTED_MODULE_5__["Subject"]();
        }

        _createClass(ApiService, [{
          key: "presentToast",
          value: function presentToast(message, duration) {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/_regeneratorRuntime().mark(function _callee7() {
              var toast;
              return _regeneratorRuntime().wrap(function _callee7$(_context7) {
                while (1) switch (_context7.prev = _context7.next) {
                  case 0:
                    _context7.next = 2;
                    return this.toastCtrl.create({
                      message: message,
                      duration: duration,
                      position: 'bottom',
                      mode: 'ios',
                      color: 'dark'
                    });

                  case 2:
                    toast = _context7.sent;
                    toast.present();

                  case 4:
                  case "end":
                    return _context7.stop();
                }
              }, _callee7, this);
            }));
          }
        }, {
          key: "login",
          value: function login(data) {
            console.log(data); // const httpOptions = {
            //   headers: new HttpHeaders({
            //     'Content-Type': 'application/json',
            //   })
            // };

            var httpOptions; // return this.http.post(`${this.baseUrl}/login.php`,{},data);

            return this.http.post("".concat(this.baseUrl, "/login.php"), data, httpOptions); // const formData = new FormData();
            // formData.append('Username', data.Username);
            // console.log(data);
            // return this.httpclient.post(`${this.baseUrl}/login.php`,formData);
          }
        }, {
          key: "send_otp",
          value: function send_otp() {
            return this.http.post("".concat(this.baseUrl, "/sendOTP"), {}, {});
          }
        }, {
          key: "verify_otp",
          value: function verify_otp(username, code) {
            // const formData = new FormData();
            // formData.append('Username', username);
            // formData.append('Otp', code.toString());
            // let tempData={'Username':username, 'Otp':code.toString()};
            var httpOptions;
            return this.http.post("".concat(this.baseUrl, "/validate_otp.php"), {
              'Username': username,
              'Otp': code.toString()
            }, httpOptions); // return this.httpclient.post(`${this.baseUrl}/validate_otp.php`,tempData);
          }
        }, {
          key: "userDetails",
          value: function userDetails(id, class_name) {
            // const formData = new FormData();
            // formData.append('Userid', id);
            // formData.append('Class', class_name);
            return this.http.post("".concat(this.baseUrl, "/user_details.php"), {}, {
              'Userid': id,
              'Class': class_name
            }); //return this.httpclient.post(`${this.baseUrl}/user_details.php`,formData);
          }
        }, {
          key: "daycareRegistration",
          value: function daycareRegistration(body) {
            return this.httpclient.post(this.baseUrl + '/daycare_reg.php', body, {});
          }
        }, {
          key: "daycareRegistrationStep2",
          value: function daycareRegistrationStep2(body) {
            return this.httpclient.post(this.baseUrl + '/add_daycare_step2.php', body, {});
          }
        }, {
          key: "daycareRegistrationStep3",
          value: function daycareRegistrationStep3(body) {
            return this.httpclient.post(this.baseUrl + '/add_daycare_step3.php', body, {});
          }
        }, {
          key: "daycareRegistrationStep4",
          value: function daycareRegistrationStep4(body) {
            return this.httpclient.post(this.baseUrl + '/add_daycare_step4.php', body, {});
          }
        }, {
          key: "getBranches",
          value: function getBranches() {
            return this.http.post("".concat(this.baseUrl, "/fetch_branch.php"), {}, {});
          }
        }, {
          key: "fetchDayCareStep2",
          value: function fetchDayCareStep2(id) {
            return this.http.post("".concat(this.baseUrl, "/fetch_daycare_step2.php"), {}, {
              'Userid': id
            });
          }
        }, {
          key: "fetchDayCareStep3",
          value: function fetchDayCareStep3(id) {
            return this.http.post("".concat(this.baseUrl, "/fetch_daycare_step3.php"), {}, {
              'Userid': id
            });
          }
        }, {
          key: "fetchDayCareStep4",
          value: function fetchDayCareStep4(id) {
            return this.http.post("".concat(this.baseUrl, "/fetch_daycare_step4.php"), {}, {
              'Userid': id
            });
          }
        }, {
          key: "fetchAllEvents",
          value: function fetchAllEvents() {
            return this.http.post("".concat(this.baseUrl, "/all_event.php"), {}, {});
          }
        }, {
          key: "fetchBranchEvents",
          value: function fetchBranchEvents(Classtype, Type, Branchid) {
            return this.http.post("".concat(this.baseUrl, "/event.php"), {}, {
              'Classtype': Classtype,
              'Type': Type,
              'Branchid': Branchid
            });
          }
        }, {
          key: "fetchBranchHoliday",
          value: function fetchBranchHoliday(Classtype, Type, Branchid) {
            return this.http.post("".concat(this.baseUrl, "/holiday.php"), {}, {
              'Classtype': Classtype,
              'Type': Type,
              'Branchid': Branchid
            });
          }
        }, {
          key: "fetchAllAlbums",
          value: function fetchAllAlbums() {
            return this.http.post("".concat(this.baseUrl, "/all_album.php"), {}, {});
          }
        }, {
          key: "fetchAllBranchFeeStructure",
          value: function fetchAllBranchFeeStructure() {
            return this.http.post("".concat(this.baseUrl, "/fetch_all_fees_stucture.php"), {}, {});
          }
        }, {
          key: "fetchBranchFeeStructure",
          value: function fetchBranchFeeStructure(Branchid) {
            return this.http.post("".concat(this.baseUrl, "/branch_fees_stucture.php"), {}, {
              'Branchid': Branchid
            });
          }
        }, {
          key: "fetchAlbumDetails",
          value: function fetchAlbumDetails(Albumid) {
            return this.http.post("".concat(this.baseUrl, "/album_image.php"), {}, {
              'Albumid': Albumid
            });
          }
        }, {
          key: "fetchBranchAlbum",
          value: function fetchBranchAlbum(Classtype, Type, Branchid) {
            return this.http.post("".concat(this.baseUrl, "/album.php"), {}, {
              'Classtype': Classtype,
              'Type': Type,
              'Branchid': Branchid
            });
          }
        }, {
          key: "preschoolRegStep1",
          value: function preschoolRegStep1(body) {
            return this.httpclient.post(this.baseUrl + '/preschool_reg.php', body, {});
          }
        }, {
          key: "preschoolRegStep2",
          value: function preschoolRegStep2(body) {
            return this.httpclient.post(this.baseUrl + '/preschool_step2.php', body, {});
          }
        }, {
          key: "preschoolRegStep3",
          value: function preschoolRegStep3(body) {
            return this.httpclient.post(this.baseUrl + '/preschool_step3.php', body, {});
          }
        }, {
          key: "fetchPreschoolRegStep2",
          value: function fetchPreschoolRegStep2(id) {
            return this.http.post("".concat(this.baseUrl, "/fetch_preschool_step2.php"), {}, {
              'Userid': id
            });
          }
        }, {
          key: "fetchPreschoolRegStep3",
          value: function fetchPreschoolRegStep3(id) {
            return this.http.post("".concat(this.baseUrl, "/fetch_preschool_step3.php"), {}, {
              'Userid': id
            });
          }
        }, {
          key: "updatePreschoolRegStep1",
          value: function updatePreschoolRegStep1(formdata) {
            return this.httpclient.post("".concat(this.baseUrl, "/update_preschool_step1.php"), formdata, {});
          }
        }, {
          key: "updatePreschoolRegStep2",
          value: function updatePreschoolRegStep2(formdata) {
            return this.httpclient.post("".concat(this.baseUrl, "/update_preschool_step2.php"), formdata, {});
          }
        }, {
          key: "updatePreschoolRegStep3",
          value: function updatePreschoolRegStep3(formdata) {
            return this.httpclient.post("".concat(this.baseUrl, "/update_preschool_step3.php"), formdata, {});
          }
        }, {
          key: "updateDaycareRegStep1",
          value: function updateDaycareRegStep1(formdata) {
            return this.httpclient.post("".concat(this.baseUrl, "/update_daycare_step1.php"), formdata, {});
          }
        }, {
          key: "updateDaycareRegStep2",
          value: function updateDaycareRegStep2(formdata) {
            return this.httpclient.post("".concat(this.baseUrl, "/update_daycare_step2.php"), formdata, {});
          }
        }, {
          key: "updateDaycareRegStep3",
          value: function updateDaycareRegStep3(formdata) {
            return this.httpclient.post("".concat(this.baseUrl, "/update_daycare_step3.php"), formdata, {});
          }
        }, {
          key: "updateDaycareRegStep4",
          value: function updateDaycareRegStep4(formdata) {
            return this.httpclient.post("".concat(this.baseUrl, "/update_daycare_step4.php"), formdata, {});
          }
        }, {
          key: "userFMS",
          value: function userFMS(body) {
            this.http.setDataSerializer('json');
            return this.http.post(this.baseUrl + '/user_fms_key.php', body, {});
          }
        }, {
          key: "addEnquiry",
          value: function addEnquiry(body) {
            return this.http.post(this.baseUrl + '/add_enquiry.php', body, {});
          }
        }, {
          key: "setUserData",
          value: function setUserData(userData, class_type) {
            var _this16 = this;

            console.log('userData service', userData, class_type);
            var userId = JSON.parse(userData);
            this.userDetails(userId.id, class_type).then(function (data) {
              console.log('userDetails', data, class_type);

              _this16.userData.next(data);

              _this16.userTypeData.next(class_type);
            });
          }
        }, {
          key: "fetchFeeColumn",
          value: function fetchFeeColumn() {
            return this.http.post("".concat(this.baseUrl, "/fetch_fees_columns.php"), {}, {});
          }
        }, {
          key: "fetchFeeRow",
          value: function fetchFeeRow() {
            return this.http.post("".concat(this.baseUrl, "/fetch_fees_rows.php"), {}, {});
          }
        }, {
          key: "fetchFeeStructure",
          value: function fetchFeeStructure(Rowid, Branchid) {
            return this.http.post("".concat(this.baseUrl, "/fetch_fees_structure.php"), {}, {
              'Rowid': Rowid,
              'Branchid': Branchid
            });
          }
        }, {
          key: "fetchUserAttendance",
          value: function fetchUserAttendance(Type, Userid) {
            return this.http.post("".concat(this.baseUrl, "/fetch_user_attendence.php"), {}, {
              'Type': Type,
              'Userid': Userid
            });
          }
        }, {
          key: "fetchNotifications",
          value: function fetchNotifications(Type, Userid) {
            return this.http.post("".concat(this.baseUrl, "/fetch_notification.php"), {}, {
              'Type': Type,
              'Userid': Userid
            });
          }
        }, {
          key: "fetchFeesDetails",
          value: function fetchFeesDetails(Userid) {
            return this.http.post("".concat(this.baseUrl, "/fetch_fees_details.php"), {}, {
              'Type': 'Preschool',
              'Userid': Userid
            });
          }
        }, {
          key: "fetchInstallation",
          value: function fetchInstallation() {
            return this.http.post("".concat(this.baseUrl, "/installation.php"), {}, {});
          }
        }, {
          key: "fetchDaycare",
          value: function fetchDaycare(Userid) {
            return this.http.post("".concat(this.baseUrl, "/daycare_fee_details.php"), {}, {
              'Type': 'Daycare',
              'Userid': Userid
            });
          }
        }, {
          key: "onlinePayment",
          value: function onlinePayment(body) {
            return this.http.post("".concat(this.baseUrl, "/online_payment.php"), body, {});
          }
        }, {
          key: "verifyonlinePayment",
          value: function verifyonlinePayment(body) {
            return this.http.post("".concat(this.baseUrl, "/varify_online_payment.php"), body, {});
          }
        }, {
          key: "paymentHistory",
          value: function paymentHistory(Type, Userid) {
            return this.http.post("".concat(this.baseUrl, "/user_order_history.php"), {}, {
              'Type': Type,
              'Userid': Userid
            });
          }
        }, {
          key: "fetchMedicine",
          value: function fetchMedicine(Userid, Illnessid) {
            return this.http.post("".concat(this.baseUrl, "/fetch_medicine.php"), {}, {
              'Userid': Userid,
              'Illnessid': Illnessid
            });
          }
        }, {
          key: "fetchNotices",
          value: function fetchNotices() {
            return this.http.post("".concat(this.baseUrl, "/fetch_notices.php"), {}, {});
          }
        }, {
          key: "fetchOffers",
          value: function fetchOffers() {
            return this.http.post("".concat(this.baseUrl, "/fetch_offers.php"), {}, {});
          }
        }, {
          key: "fetchOtherActivities",
          value: function fetchOtherActivities() {
            return this.http.post("".concat(this.baseUrl, "/fetch_other_activities.php"), {}, {});
          }
        }, {
          key: "fetchRules",
          value: function fetchRules() {
            return this.http.post("".concat(this.baseUrl, "/fetch_rules.php"), {}, {});
          }
        }, {
          key: "fetchSchedule",
          value: function fetchSchedule(type, classid, branchid) {
            return this.http.post("".concat(this.baseUrl, "/fetch_schedule.php"), {}, {
              'Type': type,
              'Classid': classid,
              'Branchid': branchid
            });
          }
        }, {
          key: "fetchServices",
          value: function fetchServices() {
            return this.http.post("".concat(this.baseUrl, "/fetch_services.php"), {}, {});
          }
        }, {
          key: "fetchIllness",
          value: function fetchIllness(Userid) {
            return this.http.post("".concat(this.baseUrl, "/fetch_illness.php"), {}, {
              'Userid': Userid
            });
          }
        }, {
          key: "addIllness",
          value: function addIllness(body) {
            return this.httpclient.post("".concat(this.baseUrl, "/add_illness.php"), body, {});
          }
        }, {
          key: "addMedicine",
          value: function addMedicine(body) {
            this.http.setDataSerializer('json');
            return this.http.post("".concat(this.baseUrl, "/add_medicine.php"), body, {});
          }
        }, {
          key: "editMedicine",
          value: function editMedicine(body) {
            this.http.setDataSerializer('json');
            return this.http.post("".concat(this.baseUrl, "/edit_medicine.php"), {}, {});
          }
        }, {
          key: "deleteMedicine",
          value: function deleteMedicine(Userid, Illnessid, Tabid) {
            return this.http.post("".concat(this.baseUrl, "/delete_medicine.php"), {}, {
              'Userid': Userid,
              'Illnessid': Illnessid,
              'Tabid': Tabid
            });
          }
        }, {
          key: "deleteIllness",
          value: function deleteIllness(Userid, Illnessid) {
            return this.http.post("".concat(this.baseUrl, "/delete_illness.php"), {}, {
              'Userid': Userid,
              'Illnessid': Illnessid
            });
          }
        }, {
          key: "discontinueMedicine",
          value: function discontinueMedicine(Userid, Illnessid, TabId, Reason) {
            return this.http.post("".concat(this.baseUrl, "/delete_medicine.php"), {}, {
              'Userid': Userid,
              'Illnessid': Illnessid,
              'TabId': TabId,
              'Reason': Reason
            });
          }
        }, {
          key: "discontinueIllness",
          value: function discontinueIllness(Userid, Illnessid, Reason) {
            return this.http.post("".concat(this.baseUrl, "/inactive_illness.php"), {}, {
              'Userid': Userid,
              'Illnessid': Illnessid,
              'Reason': Reason
            });
          }
        }, {
          key: "editIllness",
          value: function editIllness(body) {
            return this.httpclient.post("".concat(this.baseUrl, "/edit_illness.php"), body, {});
          }
        }]);

        return ApiService;
      }();

      ApiService.ctorParameters = function () {
        return [{
          type: _ionic_native_http_ngx__WEBPACK_IMPORTED_MODULE_2__["HTTP"]
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["ToastController"]
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["LoadingController"]
        }, {
          type: _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClient"]
        }];
      };

      ApiService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
      })], ApiService);
      /***/
    },

    /***/
    "ynWL":
    /*!************************************!*\
      !*** ./src/app/app.component.scss ***!
      \************************************/

    /*! exports provided: default */

    /***/
    function ynWL(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "ion-label {\n  font-weight: bold;\n  font-size: 20px !important;\n}\n\nion-menu ion-toolbar {\n  border-bottom: 8px solid #f2f2f2;\n  --background: #fff ;\n}\n\nion-content {\n  --background:#ffffff;\n}\n\n.sidemenu-row {\n  margin-top: 16px;\n  margin-left: 16px;\n  margin-bottom: 10px;\n}\n\n.img-block {\n  border-radius: 5px;\n}\n\nion-item {\n  padding: 16px;\n  padding-left: 0;\n}\n\nion-item img {\n  width: 45px;\n}\n\nion-item ion-label {\n  margin-left: 16px;\n  white-space: normal;\n}\n\n.svg {\n  width: 25px !important;\n  margin-left: 8px;\n  margin-right: 12px;\n}\n\n.name {\n  padding-left: 8px;\n  margin-top: 0;\n  font-weight: bold;\n  font-size: 16px;\n}\n\n.view-btn {\n  margin-top: 2px;\n  margin-left: 8px;\n  font-size: 14px;\n}\n\n@media only screen and (max-height: 650px) {\n  ion-item {\n    padding: 4px;\n  }\n  ion-item img {\n    width: 30px;\n  }\n  ion-item ion-label {\n    margin-left: 16px;\n    font-size: 16px !important;\n  }\n}\n\n.box {\n  background-color: #FFCC55;\n  max-height: 0px;\n  overflow-y: hidden;\n  transition: ease-in-out 400ms max-height;\n}\n\n.box.opened {\n  max-height: 500px;\n  transition: ease-in-out 600ms max-height;\n}\n\n.sub-item {\n  padding: 0 0 0 20px;\n  font-size: small;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL2FwcC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGlCQUFBO0VBQ0EsMEJBQUE7QUFDSjs7QUFFSTtFQUNJLGdDQUFBO0VBQ0EsbUJBQUE7QUFDUjs7QUFHQTtFQUNJLG9CQUFBO0FBQUo7O0FBRUE7RUFDSSxnQkFBQTtFQUNBLGlCQUFBO0VBQ0EsbUJBQUE7QUFDSjs7QUFDQTtFQUNJLGtCQUFBO0FBRUo7O0FBQUE7RUFDSSxhQUFBO0VBQ0EsZUFBQTtBQUdKOztBQUZJO0VBQ0ksV0FBQTtBQUlSOztBQUZJO0VBQ0ksaUJBQUE7RUFDQSxtQkFBQTtBQUlSOztBQURBO0VBQ0ksc0JBQUE7RUFDQSxnQkFBQTtFQUNBLGtCQUFBO0FBSUo7O0FBRkE7RUFDSSxpQkFBQTtFQUNBLGFBQUE7RUFDQSxpQkFBQTtFQUNBLGVBQUE7QUFLSjs7QUFIQTtFQUNJLGVBQUE7RUFDQSxnQkFBQTtFQUNBLGVBQUE7QUFNSjs7QUFKQTtFQUNJO0lBQ0ksWUFBQTtFQU9OO0VBTk07SUFDSSxXQUFBO0VBUVY7RUFOTTtJQUNJLGlCQUFBO0lBQ0EsMEJBQUE7RUFRVjtBQUNGOztBQUxFO0VBQ0UseUJBQUE7RUFDQSxlQUFBO0VBQ0Esa0JBQUE7RUFDQSx3Q0FBQTtBQU9KOztBQUxBO0VBQ0ksaUJBQUE7RUFDQSx3Q0FBQTtBQVFKOztBQU5BO0VBQ0ksbUJBQUE7RUFDQSxnQkFBQTtBQVNKIiwiZmlsZSI6ImFwcC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImlvbi1sYWJlbCB7XHJcbiAgICBmb250LXdlaWdodDogYm9sZDtcclxuICAgIGZvbnQtc2l6ZTogMjBweCAhaW1wb3J0YW50O1xyXG59XHJcbmlvbi1tZW51IHtcclxuICAgIGlvbi10b29sYmFyIHtcclxuICAgICAgICBib3JkZXItYm90dG9tOiA4cHggc29saWQgI2YyZjJmMjtcclxuICAgICAgICAtLWJhY2tncm91bmQ6ICNmZmYgO1xyXG4gICAgfVxyXG59XHJcblxyXG5pb24tY29udGVudCB7XHJcbiAgICAtLWJhY2tncm91bmQ6I2ZmZmZmZjtcclxufVxyXG4uc2lkZW1lbnUtcm93e1xyXG4gICAgbWFyZ2luLXRvcDogMTZweDtcclxuICAgIG1hcmdpbi1sZWZ0OiAxNnB4O1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMTBweDtcclxufVxyXG4uaW1nLWJsb2Nre1xyXG4gICAgYm9yZGVyLXJhZGl1czo1cHg7XHJcbn1cclxuaW9uLWl0ZW0ge1xyXG4gICAgcGFkZGluZzogMTZweDtcclxuICAgIHBhZGRpbmctbGVmdDogMDtcclxuICAgIGltZyB7XHJcbiAgICAgICAgd2lkdGg6IDQ1cHg7XHJcbiAgICB9XHJcbiAgICBpb24tbGFiZWwge1xyXG4gICAgICAgIG1hcmdpbi1sZWZ0OiAxNnB4O1xyXG4gICAgICAgIHdoaXRlLXNwYWNlOiBub3JtYWw7XHJcbiAgICB9XHJcbn1cclxuLnN2Z3tcclxuICAgIHdpZHRoOiAyNXB4ICFpbXBvcnRhbnQ7IFxyXG4gICAgbWFyZ2luLWxlZnQ6IDhweDtcclxuICAgIG1hcmdpbi1yaWdodDogMTJweDtcclxufVxyXG4ubmFtZXtcclxuICAgIHBhZGRpbmctbGVmdDogOHB4O1xyXG4gICAgbWFyZ2luLXRvcDogMDtcclxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gICAgZm9udC1zaXplOiAxNnB4O1xyXG59XHJcbi52aWV3LWJ0bntcclxuICAgIG1hcmdpbi10b3A6IDJweDtcclxuICAgIG1hcmdpbi1sZWZ0OiA4cHg7XHJcbiAgICBmb250LXNpemU6IDE0cHg7XHJcbn1cclxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LWhlaWdodDogNjUwcHgpIHtcclxuICAgIGlvbi1pdGVtIHtcclxuICAgICAgICBwYWRkaW5nOiA0cHg7XHJcbiAgICAgICAgaW1nIHtcclxuICAgICAgICAgICAgd2lkdGg6IDMwcHg7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlvbi1sYWJlbCB7XHJcbiAgICAgICAgICAgIG1hcmdpbi1sZWZ0OiAxNnB4O1xyXG4gICAgICAgICAgICBmb250LXNpemU6IDE2cHggIWltcG9ydGFudDtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG4gIC5ib3gge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI0ZGQ0M1NTtcclxuICAgIG1heC1oZWlnaHQ6IDBweDtcclxuICAgIG92ZXJmbG93LXk6IGhpZGRlbjtcclxuICAgIHRyYW5zaXRpb246IGVhc2UtaW4tb3V0IDQwMG1zIG1heC1oZWlnaHQ7XHJcbn1cclxuLmJveC5vcGVuZWQge1xyXG4gICAgbWF4LWhlaWdodDogNTAwcHg7XHJcbiAgICB0cmFuc2l0aW9uOiBlYXNlLWluLW91dCA2MDBtcyBtYXgtaGVpZ2h0O1xyXG59XHJcbi5zdWItaXRlbXtcclxuICAgIHBhZGRpbmc6IDAgMCAwIDIwcHg7XHJcbiAgICBmb250LXNpemU6IHNtYWxsO1xyXG59Il19 */";
      /***/
    },

    /***/
    "zUnb":
    /*!*********************!*\
      !*** ./src/main.ts ***!
      \*********************/

    /*! no exports provided */

    /***/
    function zUnb(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/platform-browser-dynamic */
      "a3Wg");
      /* harmony import */


      var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./app/app.module */
      "ZAI4");
      /* harmony import */


      var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./environments/environment */
      "AytR");

      if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
      }

      Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])["catch"](function (err) {
        return console.log(err);
      });
      /***/
    },

    /***/
    "zn8P":
    /*!******************************************************!*\
      !*** ./$$_lazy_route_resource lazy namespace object ***!
      \******************************************************/

    /*! no static exports found */

    /***/
    function zn8P(module, exports) {
      function webpackEmptyAsyncContext(req) {
        // Here Promise.resolve().then() is used instead of new Promise() to prevent
        // uncaught exception popping up in devtools
        return Promise.resolve().then(function () {
          var e = new Error("Cannot find module '" + req + "'");
          e.code = 'MODULE_NOT_FOUND';
          throw e;
        });
      }

      webpackEmptyAsyncContext.keys = function () {
        return [];
      };

      webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
      module.exports = webpackEmptyAsyncContext;
      webpackEmptyAsyncContext.id = "zn8P";
      /***/
    }
  }, [[0, "runtime", "vendor"]]]);
})();
//# sourceMappingURL=main-es5.js.map