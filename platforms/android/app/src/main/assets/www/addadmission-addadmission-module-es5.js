(function () {
  function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return e; }; var t, e = {}, r = Object.prototype, n = r.hasOwnProperty, o = Object.defineProperty || function (t, e, r) { t[e] = r.value; }, i = "function" == typeof Symbol ? Symbol : {}, a = i.iterator || "@@iterator", c = i.asyncIterator || "@@asyncIterator", u = i.toStringTag || "@@toStringTag"; function define(t, e, r) { return Object.defineProperty(t, e, { value: r, enumerable: !0, configurable: !0, writable: !0 }), t[e]; } try { define({}, ""); } catch (t) { define = function define(t, e, r) { return t[e] = r; }; } function wrap(t, e, r, n) { var i = e && e.prototype instanceof Generator ? e : Generator, a = Object.create(i.prototype), c = new Context(n || []); return o(a, "_invoke", { value: makeInvokeMethod(t, r, c) }), a; } function tryCatch(t, e, r) { try { return { type: "normal", arg: t.call(e, r) }; } catch (t) { return { type: "throw", arg: t }; } } e.wrap = wrap; var h = "suspendedStart", l = "suspendedYield", f = "executing", s = "completed", y = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var p = {}; define(p, a, function () { return this; }); var d = Object.getPrototypeOf, v = d && d(d(values([]))); v && v !== r && n.call(v, a) && (p = v); var g = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(p); function defineIteratorMethods(t) { ["next", "throw", "return"].forEach(function (e) { define(t, e, function (t) { return this._invoke(e, t); }); }); } function AsyncIterator(t, e) { function invoke(r, o, i, a) { var c = tryCatch(t[r], t, o); if ("throw" !== c.type) { var u = c.arg, h = u.value; return h && "object" == typeof h && n.call(h, "__await") ? e.resolve(h.__await).then(function (t) { invoke("next", t, i, a); }, function (t) { invoke("throw", t, i, a); }) : e.resolve(h).then(function (t) { u.value = t, i(u); }, function (t) { return invoke("throw", t, i, a); }); } a(c.arg); } var r; o(this, "_invoke", { value: function value(t, n) { function callInvokeWithMethodAndArg() { return new e(function (e, r) { invoke(t, n, e, r); }); } return r = r ? r.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); } }); } function makeInvokeMethod(e, r, n) { var o = h; return function (i, a) { if (o === f) throw new Error("Generator is already running"); if (o === s) { if ("throw" === i) throw a; return { value: t, done: !0 }; } for (n.method = i, n.arg = a;;) { var c = n.delegate; if (c) { var u = maybeInvokeDelegate(c, n); if (u) { if (u === y) continue; return u; } } if ("next" === n.method) n.sent = n._sent = n.arg;else if ("throw" === n.method) { if (o === h) throw o = s, n.arg; n.dispatchException(n.arg); } else "return" === n.method && n.abrupt("return", n.arg); o = f; var p = tryCatch(e, r, n); if ("normal" === p.type) { if (o = n.done ? s : l, p.arg === y) continue; return { value: p.arg, done: n.done }; } "throw" === p.type && (o = s, n.method = "throw", n.arg = p.arg); } }; } function maybeInvokeDelegate(e, r) { var n = r.method, o = e.iterator[n]; if (o === t) return r.delegate = null, "throw" === n && e.iterator["return"] && (r.method = "return", r.arg = t, maybeInvokeDelegate(e, r), "throw" === r.method) || "return" !== n && (r.method = "throw", r.arg = new TypeError("The iterator does not provide a '" + n + "' method")), y; var i = tryCatch(o, e.iterator, r.arg); if ("throw" === i.type) return r.method = "throw", r.arg = i.arg, r.delegate = null, y; var a = i.arg; return a ? a.done ? (r[e.resultName] = a.value, r.next = e.nextLoc, "return" !== r.method && (r.method = "next", r.arg = t), r.delegate = null, y) : a : (r.method = "throw", r.arg = new TypeError("iterator result is not an object"), r.delegate = null, y); } function pushTryEntry(t) { var e = { tryLoc: t[0] }; 1 in t && (e.catchLoc = t[1]), 2 in t && (e.finallyLoc = t[2], e.afterLoc = t[3]), this.tryEntries.push(e); } function resetTryEntry(t) { var e = t.completion || {}; e.type = "normal", delete e.arg, t.completion = e; } function Context(t) { this.tryEntries = [{ tryLoc: "root" }], t.forEach(pushTryEntry, this), this.reset(!0); } function values(e) { if (e || "" === e) { var r = e[a]; if (r) return r.call(e); if ("function" == typeof e.next) return e; if (!isNaN(e.length)) { var o = -1, i = function next() { for (; ++o < e.length;) if (n.call(e, o)) return next.value = e[o], next.done = !1, next; return next.value = t, next.done = !0, next; }; return i.next = i; } } throw new TypeError(typeof e + " is not iterable"); } return GeneratorFunction.prototype = GeneratorFunctionPrototype, o(g, "constructor", { value: GeneratorFunctionPrototype, configurable: !0 }), o(GeneratorFunctionPrototype, "constructor", { value: GeneratorFunction, configurable: !0 }), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, u, "GeneratorFunction"), e.isGeneratorFunction = function (t) { var e = "function" == typeof t && t.constructor; return !!e && (e === GeneratorFunction || "GeneratorFunction" === (e.displayName || e.name)); }, e.mark = function (t) { return Object.setPrototypeOf ? Object.setPrototypeOf(t, GeneratorFunctionPrototype) : (t.__proto__ = GeneratorFunctionPrototype, define(t, u, "GeneratorFunction")), t.prototype = Object.create(g), t; }, e.awrap = function (t) { return { __await: t }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, c, function () { return this; }), e.AsyncIterator = AsyncIterator, e.async = function (t, r, n, o, i) { void 0 === i && (i = Promise); var a = new AsyncIterator(wrap(t, r, n, o), i); return e.isGeneratorFunction(r) ? a : a.next().then(function (t) { return t.done ? t.value : a.next(); }); }, defineIteratorMethods(g), define(g, u, "Generator"), define(g, a, function () { return this; }), define(g, "toString", function () { return "[object Generator]"; }), e.keys = function (t) { var e = Object(t), r = []; for (var n in e) r.push(n); return r.reverse(), function next() { for (; r.length;) { var t = r.pop(); if (t in e) return next.value = t, next.done = !1, next; } return next.done = !0, next; }; }, e.values = values, Context.prototype = { constructor: Context, reset: function reset(e) { if (this.prev = 0, this.next = 0, this.sent = this._sent = t, this.done = !1, this.delegate = null, this.method = "next", this.arg = t, this.tryEntries.forEach(resetTryEntry), !e) for (var r in this) "t" === r.charAt(0) && n.call(this, r) && !isNaN(+r.slice(1)) && (this[r] = t); }, stop: function stop() { this.done = !0; var t = this.tryEntries[0].completion; if ("throw" === t.type) throw t.arg; return this.rval; }, dispatchException: function dispatchException(e) { if (this.done) throw e; var r = this; function handle(n, o) { return a.type = "throw", a.arg = e, r.next = n, o && (r.method = "next", r.arg = t), !!o; } for (var o = this.tryEntries.length - 1; o >= 0; --o) { var i = this.tryEntries[o], a = i.completion; if ("root" === i.tryLoc) return handle("end"); if (i.tryLoc <= this.prev) { var c = n.call(i, "catchLoc"), u = n.call(i, "finallyLoc"); if (c && u) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } else if (c) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); } else { if (!u) throw new Error("try statement without catch or finally"); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } } } }, abrupt: function abrupt(t, e) { for (var r = this.tryEntries.length - 1; r >= 0; --r) { var o = this.tryEntries[r]; if (o.tryLoc <= this.prev && n.call(o, "finallyLoc") && this.prev < o.finallyLoc) { var i = o; break; } } i && ("break" === t || "continue" === t) && i.tryLoc <= e && e <= i.finallyLoc && (i = null); var a = i ? i.completion : {}; return a.type = t, a.arg = e, i ? (this.method = "next", this.next = i.finallyLoc, y) : this.complete(a); }, complete: function complete(t, e) { if ("throw" === t.type) throw t.arg; return "break" === t.type || "continue" === t.type ? this.next = t.arg : "return" === t.type ? (this.rval = this.arg = t.arg, this.method = "return", this.next = "end") : "normal" === t.type && e && (this.next = e), y; }, finish: function finish(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.finallyLoc === t) return this.complete(r.completion, r.afterLoc), resetTryEntry(r), y; } }, "catch": function _catch(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.tryLoc === t) { var n = r.completion; if ("throw" === n.type) { var o = n.arg; resetTryEntry(r); } return o; } } throw new Error("illegal catch attempt"); }, delegateYield: function delegateYield(e, r, n) { return this.delegate = { iterator: values(e), resultName: r, nextLoc: n }, "next" === this.method && (this.arg = t), y; } }, e; }

  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

  function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return typeof key === "symbol" ? key : String(key); }

  function _toPrimitive(input, hint) { if (typeof input !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (typeof res !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["addadmission-addadmission-module"], {
    /***/
    "2JKY":
    /*!*******************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/addadmission/addadmission.page.html ***!
      \*******************************************************************************************/

    /*! exports provided: default */

    /***/
    function JKY(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-header class=\"ion-no-border\">\n  <ion-toolbar>\n    <ion-title>Daycare Admission Form</ion-title>\n    <!-- <ion-buttons slot=\"start\">\n      <ion-button shape=\"round\" defaultHref=\"login\" (click)=\"goBack()\">\n        <ion-icon color=\"light\" name=\"arrow-back-outline\"></ion-icon>\n      </ion-button>\n    </ion-buttons> -->\n    <ion-buttons slot=\"start\">\n      <ion-back-button></ion-back-button>\n    </ion-buttons>\n  </ion-toolbar>\n\n\n</ion-header>\n\n<ion-content>\n  <ion-refresher slot=\"fixed\" (ionRefresh)=\"doRefresh($event)\">\n    <ion-refresher-content></ion-refresher-content>\n  </ion-refresher>\n  <ion-item lines=\"none\" (click)=\"toggle_accordion()\" class=\"toggle_button\" *ngIf=\"isLoggedIn && userType=='Daycare'\">\n    <ion-label>Daycare Registration</ion-label>\n    <ion-icon slot=\"end\" color=\"primary\" name=\"chevron-up-circle-outline\" *ngIf=\"!accordion_expanded\"></ion-icon>\n    <ion-icon slot=\"end\" color=\"primary\" name=\"chevron-down-circle-outline\" *ngIf=\"accordion_expanded\"></ion-icon>\n  </ion-item>\n\n\n  <div #accordion class='accordion-container' [style.maxHeight.px]=\"250\" [class.collapsed]=\"!accordion_expanded\" *ngIf=\"isLoggedIn && userType=='Daycare'\">\n    <div class=\"reusable_accordion template_accordion\">\n      <ol class=\"list-group vertical-steps\" style=\"margin-top: 0;list-style: none;padding-left: 28px;\">\n        <li class=\"list-group-item step-active\"><span>Daycare Registration</span></li>\n        <li class=\"list-group-item\" [routerLink]=\"['/childprofile']\" routerLinkActive=\"router-link-active\" ><span>Child's Enviroment & Child's medical record</span></li>\n        <li class=\"list-group-item\" [routerLink]=\"['/childotherinfo']\"><span>Food Habits ,Toilet Habits & Speech and Physical Growth</span></li>\n        <li class=\"list-group-item final\" [routerLink]=\"['/childotherinfotwo']\"><span>Consent Form</span></li>\n      </ol>\n    </div>\n  </div>\n    <!-- <div class=\"tab\">\n      <input type=\"checkbox\" id=\"chck1\">\n      <label class=\"tab-label\" for=\"chck1\">Item 1</label>\n      <div class=\"tab-content\">\n        \n   <ol class=\"list-group vertical-steps\" style=\"margin-top:0\">\n          <li class=\"list-group-item\"><span>Masukkan kartu ATM dan PIN BCA Anda</span></li>\n          <li class=\"list-group-item\"><span>Masuk ke menu TRANSFER dan klik BCA Virtual Account</span></li>\n          <li class=\"list-group-item\"><span>Masukkan kode perusahaan untuk GO-JEK: 70001 dan nomor telepon yang terdaftar pada aplikasi (Contoh: 700010812XXXXXX)</span></li>\n          <li class=\"list-group-item\"><span>Masukkan jumlah top up yang diinginkan</span></li>\n          <li class=\"list-group-item\"><span>Ikuti instruksi untuk menyelesaikan transaksi</span></li>\n        </ol>\n     \n      </div>\n  </div> -->\n\n  <!-- <ion-row class=\"ion-text-center margin-ionic-top wrap\" *ngIf=\"isLoggedIn\">\n      <ion-col size=\"4\">\n        <div class=\"icon-circle active \">\n          <ion-icon name=\"ellipse\" class=\"dot\"></ion-icon>\n  \n        </div>\n        <p class=\"color-red \">Child Profile</p>\n      </ion-col>\n      <ion-col size=\"4\">\n        <div class=\"icon-circle \">\n        </div>\n        <p class=\"color-red heading-3\">Child Other Info</p>\n  \n      </ion-col>\n  \n      <ion-col size=\"4\">\n        <div class=\"icon-circle \">\n        </div>\n        <p class=\"color-red heading-3\">Images</p>\n  \n      </ion-col>\n    </ion-row>  -->\n    <br>\n  <ion-segment mode=\"ios\" (ionChange)=\"segmentChanged($event)\" value=\"{{value}}\">\n    <ion-segment-button value=\"personal_info\">\n      <ion-label> Personal Info</ion-label>\n    </ion-segment-button>\n    <ion-segment-button value=\"other_info\" [disabled]=\"!isOtherInfoEnabled\">\n      <ion-label>Other info</ion-label>\n    </ion-segment-button>\n    <ion-segment-button value=\"images\" [disabled]=\"!isImagesEnabled\">\n      <ion-label>Images</ion-label>\n    </ion-segment-button>\n  </ion-segment>\n  <form [formGroup]=\"dayCareRegForm\" (ngSubmit)=\"onSubmit(dayCareRegForm.value)\">\n\n\n    <div class=\"margin-ionic\" *ngIf=\"value=='personal_info'\">\n      <p class=\"heading-1\">Prangan Centres <span class=\"text-danger\">*</span></p>\n      <ion-radio-group allowEmptySelection=\"false\" color=\"primary\" formControlName=\"branch_id\">\n        <ion-row *ngIf=\"branches\">\n          <ion-col *ngFor=\"let branch of branches\">\n            <ion-item lines=\"none\">\n              <ion-radio value=\"{{branch.id}}\"  [disabled]=\"isLoggedIn && userType=='Daycare'\"></ion-radio>\n              <ion-label>{{branch.branch_name}}</ion-label>\n            </ion-item>\n          </ion-col>\n        </ion-row>\n      </ion-radio-group>\n      <!-- <ion-row>\n        <ion-col size=\"6\">\n          <ion-label>Program <span class=\"text-danger\">*</span></ion-label>\n          <ion-item lines=\"none\">\n            <ion-input  type=\"text\" formControlName=\"program\"></ion-input>\n          </ion-item>\n          <div class=\"error-div\" *ngIf=\"(program?.invalid && program?.touched) || program?.dirty\">\n            <small *ngIf=\"program.errors?.pattern\" class=\"text-danger\">Enter a valid program</small>\n          </div>\n        </ion-col>\n        <ion-col size=\"6\">\n          <ion-label>Timings <span class=\"text-danger\">*</span></ion-label>\n          <ion-item lines=\"none\">\n            <ion-datetime formControlName=\"timings\" displayFormat=\"hh mm A \"></ion-datetime>\n          </ion-item>\n        </ion-col>\n      </ion-row> -->\n      <ion-row>\n        <ion-col size=\"12\">\n          <ion-label>Child's Name <span class=\"text-danger\">*</span></ion-label>\n          <ion-item lines=\"none\">\n            <ion-input formControlName=\"child_name\" type=\"text\"></ion-input>\n          </ion-item>\n          <div class=\"error-div\" *ngIf=\"(child_name?.invalid && program?.touched) || child_name?.dirty\">\n            <small *ngIf=\"child_name.errors?.pattern\" class=\"text-danger\">Enter a valid child name</small>\n          </div>\n        </ion-col>\n      </ion-row>\n      <ion-label>Pet Name <span class=\"text-danger\">*</span></ion-label>\n      <ion-item lines=\"none\">\n        <ion-input formControlName=\"pet_name\" type=\"text\"></ion-input>\n      </ion-item>\n      <div class=\"error-div\" *ngIf=\"(pet_name?.invalid && pet_name?.touched) || pet_name?.dirty\">\n        <small *ngIf=\"pet_name.errors?.pattern\" class=\"text-danger\">Enter a valid pet name</small>\n      </div>\n      <br>\n      <ion-row>\n        <ion-col size=\"12\">\n          <ion-label>Gender <span class=\"text-danger\">*</span></ion-label>\n  \n          <ion-radio-group allowEmptySelection=\"false\" color=\"primary\" formControlName=\"gender\">\n            <ion-row>\n              <ion-col size=\"4\">\n                <ion-item lines=\"none\">\n                  <ion-radio value=\"Boy\"></ion-radio>\n                  <ion-label>Boy</ion-label>\n                </ion-item>\n              </ion-col>\n              <ion-col size=\"4\">\n                <ion-item lines=\"none\">\n                  <ion-radio value=\"Girl\"></ion-radio>\n                  <ion-label>Girl</ion-label>\n                </ion-item>\n              </ion-col>\n              <ion-col size=\"4\">\n                <ion-item lines=\"none\">\n                  <ion-radio value=\"Other\"></ion-radio>\n                  <ion-label>Other</ion-label>\n                </ion-item>\n              </ion-col>\n            </ion-row>\n          </ion-radio-group>\n        </ion-col>\n      </ion-row>\n      <ion-row>\n        <ion-col size=\"12\">\n          <ion-label>Child's DOB <span class=\"text-danger\">*</span></ion-label>\n          <ion-item lines=\"none\">\n            <ion-datetime displayFormat=\"DD MMM  YYYY\" formControlName=\"d_o_b\" max=\"{{todays_date}}\"></ion-datetime>\n          </ion-item>\n        </ion-col>\n        <!-- <ion-col size=\"6\">\n          <ion-label>In Words <span class=\"text-danger\">*</span></ion-label>\n          <ion-item lines=\"none\">\n            <ion-input formControlName=\"dob_words\" type=\"text\"></ion-input>\n          </ion-item>\n          <div class=\"error-div\" *ngIf=\"(dob_words?.invalid && dob_words?.touched) || dob_words?.dirty\">\n            <small *ngIf=\"dob_words.errors?.pattern\" class=\"text-danger\">Enter a valid DOB in words</small>\n          </div>\n        </ion-col> -->\n        <!-- <ion-col size=\"6\">\n          <ion-label>In Figures <span class=\"text-danger\">*</span></ion-label>\n          <ion-label>e.g. 20-07-19</ion-label>\n          <ion-item lines=\"none\">\n            <ion-input formControlName=\"figures\" type=\"text\"></ion-input>\n          </ion-item>\n        </ion-col> -->\n      </ion-row>\n      <ion-row>\n        <ion-col size=\"12\">\n          <ion-label>\n            Email ID <span class=\"text-danger\">*</span></ion-label>\n          <ion-item lines=\"none\">\n            <ion-input formControlName=\"emailid\" type=\"text\"></ion-input>\n          </ion-item>\n          <div class=\"error-div\" *ngIf=\"(emailid?.invalid && emailid?.touched) || emailid?.dirty\">\n            <small *ngIf=\"emailid.errors?.pattern\" class=\"text-danger\">Enter a valid email id</small>\n          </div>\n        </ion-col>\n        <ion-col size=\"6\">\n          <ion-label>Residence Mobile Number (For Login) <span class=\"text-danger\">*</span></ion-label>\n          <ion-item lines=\"none\"> \n            <ion-input formControlName=\"mobile_1\" type=\"tel\" maxlength=\"10\" [disabled]=\"isDisabled\"></ion-input>\n          </ion-item>\n          <div class=\"error-div\" *ngIf=\"(mobile_1?.invalid && mobile_1?.touched) || mobile_1?.dirty\">\n            <small *ngIf=\"mobile_1.errors?.pattern\" class=\"text-danger\">Enter a valid residence mobile number</small>\n          </div>\n        </ion-col>\n        <ion-col size=\"12\">\n          <ion-label>Landmark </ion-label>\n          <ion-item lines=\"none\">\n            <ion-input formControlName=\"landmark\" type=\"text\"></ion-input>\n          </ion-item>\n        </ion-col>\n  \n      </ion-row>\n      <ion-label>Home Address </ion-label>\n      <ion-item lines=\"none\">\n        <ion-textarea rows=\"6\" cols=\"20\" formControlName=\"address\"></ion-textarea>\n      </ion-item>\n      <br>\n      <ion-row>\n        <ion-col size=\"6\">\n          <ion-label>Mother's Qualification </ion-label>\n          <ion-item lines=\"none\">\n            <ion-input formControlName=\"mother_qua\" type=\"text\"></ion-input>\n          </ion-item>\n          \n        </ion-col>\n        <ion-col size=\"6\">\n          <ion-label>Mother's Hobbies </ion-label>\n          <ion-item lines=\"none\">\n            <ion-input formControlName=\"mother_hobbies\" type=\"text\"></ion-input>\n          </ion-item>\n          <div class=\"error-div\" *ngIf=\"(mother_hobbies?.invalid && mother_hobbies?.touched) || mother_hobbies?.dirty\">\n            <small *ngIf=\"mother_hobbies.errors?.pattern\" class=\"text-danger\">Enter  valid hobbies</small>\n          </div>\n        </ion-col>\n        <ion-col size=\"6\">\n          <ion-label>Mother's Work Place </ion-label>\n          <ion-item lines=\"none\">\n            <ion-input formControlName=\"mother_work_place\" type=\"text\"></ion-input>\n          </ion-item>\n        </ion-col>\n        <ion-col size=\"6\">\n          <ion-label>Work Phone Number </ion-label>\n          <ion-item lines=\"none\">\n            <ion-input formControlName=\"mother_work_phone_num\" type=\"tel\" maxlength=\"10\"></ion-input>\n          </ion-item>\n          <div class=\"error-div\" *ngIf=\"(mother_work_phone_num?.invalid && mother_work_phone_num?.touched) || mother_work_phone_num?.dirty\">\n            <small *ngIf=\"mother_work_phone_num.errors?.pattern\" class=\"text-danger\">Enter a valid number </small>\n          </div>\n        </ion-col>\n        <ion-col size=\"6\">\n          <ion-label>Work Mobile Number </ion-label>\n          <ion-item lines=\"none\">\n            <ion-input formControlName=\"mother_work_mob_num\" type=\"tel\" maxlength=\"10\"></ion-input>\n          </ion-item>\n          <div class=\"error-div\" *ngIf=\"(mother_work_mob_num?.invalid && mother_work_mob_num?.touched) || mother_work_mob_num?.dirty\">\n            <small *ngIf=\"mother_work_mob_num.errors?.pattern\" class=\"text-danger\">Enter a valid phone number</small>\n          </div>\n        </ion-col>\n        <ion-col size=\"6\">\n          <ion-label>\n            Father's Qualifications </ion-label>\n          <ion-item lines=\"none\">\n            <ion-input formControlName=\"father_qualification\" type=\"text\"></ion-input>\n          </ion-item>\n        </ion-col>\n        <ion-col size=\"6\">\n          <ion-label>\n            Father's Hobbies</ion-label>\n          <ion-item lines=\"none\">\n            <ion-input formControlName=\"father_hobbies\" type=\"text\"></ion-input>\n          </ion-item>\n          <div class=\"error-div\" *ngIf=\"(father_hobbies?.invalid && father_hobbies?.touched) || father_hobbies?.dirty\">\n            <small *ngIf=\"father_hobbies.errors?.pattern\" class=\"text-danger\">Enter  valid hobbies</small>\n          </div>\n        </ion-col>\n        <ion-col size=\"6\">\n          <ion-label>\n            Father's Work Place </ion-label>\n          <ion-item lines=\"none\">\n            <ion-input formControlName=\"father_work_place\" type=\"text\"></ion-input>\n          </ion-item>\n        </ion-col>\n        <ion-col size=\"6\">\n          <ion-label>\n            Work Phone Number </ion-label>\n          <ion-item lines=\"none\">\n            <ion-input formControlName=\"father_work_phone_num\" type=\"tel\" maxlength=\"10\"></ion-input>\n          </ion-item>\n          <div class=\"error-div\" *ngIf=\"(father_work_phone_num?.invalid && father_work_phone_num?.touched) || father_work_phone_num?.dirty\">\n            <small *ngIf=\"father_work_phone_num.errors?.pattern\" class=\"text-danger\">Enter a valid phone number</small>\n          </div>\n        </ion-col>\n        <ion-col size=\"6\">\n          <ion-label>\n            Work Mobile Number </ion-label>\n          <ion-item lines=\"none\">\n            <ion-input formControlName=\"father_work_mob_num\" type=\"tel\" maxlength=\"10\"></ion-input>\n          </ion-item>\n          <div class=\"error-div\" *ngIf=\"(father_work_mob_num?.invalid && father_work_mob_num?.touched) || father_work_mob_num?.dirty\">\n            <small *ngIf=\"father_work_mob_num.errors?.pattern\" class=\"text-danger\">Enter a valid phone number</small>\n          </div>\n        </ion-col>\n      \n      </ion-row>\n      <br>\n      <br>\n      <ion-row class=\"admission-row\">\n      \n        <ion-col >\n          <ion-button shape=\"round\" (click)=\"goToForm('other_info')\" routerLinkActive=\"router-link-active\"  color=\"secondary\">\n            Next\n          </ion-button>\n        </ion-col>\n      </ion-row>\n    \n    </div>\n    <div class=\"margin-ionic\" *ngIf=\"value=='other_info'\">\n      <ion-row>\n        <ion-col size=\"6\">\n          <ion-label>\n            Sibling's Name </ion-label>\n          <ion-item lines=\"none\">\n            <ion-input formControlName=\"sibling_name\" type=\"text\"></ion-input>\n          </ion-item>\n          <div class=\"error-div\" *ngIf=\"(sibling_name?.invalid && sibling_name?.touched) || sibling_name?.dirty\">\n            <small *ngIf=\"sibling_name.errors?.pattern\" class=\"text-danger\">Enter a valid name</small>\n          </div>\n        </ion-col>\n        <ion-col size=\"6\">\n          <ion-label>\n            Sibling's Age </ion-label>\n          <ion-item lines=\"none\">\n            <ion-input formControlName=\"sibling_age\" type=\"number\"></ion-input>\n          </ion-item>\n        </ion-col>\n        <ion-col size=\"12\">\n          <ion-label>\n            Sibling's School Name</ion-label>\n          <ion-item lines=\"none\">\n            <ion-input formControlName=\"sibling_school\" type=\"text\"></ion-input>\n          </ion-item>\n        </ion-col>\n        <ion-col size=\"12\">\n          <ion-label>\n            Emergency Contact's Name <span class=\"text-danger\">*</span></ion-label>\n          <ion-item lines=\"none\">\n            <ion-input formControlName=\"emg_name\" type=\"text\"></ion-input>\n          </ion-item>\n          <div class=\"error-div\" *ngIf=\"(emg_name?.invalid && emg_name?.touched) || emg_name?.dirty\">\n            <small *ngIf=\"emg_name.errors?.pattern\" class=\"text-danger\">Enter a valid name</small>\n          </div>\n        </ion-col>\n        <ion-col size=\"6\">\n          <ion-label>\n            Emergency Contact's Relationship <span class=\"text-danger\">*</span></ion-label>\n          <ion-item lines=\"none\">\n            <ion-input formControlName=\"emg_contact_rel\" type=\"text\"></ion-input>\n          </ion-item>\n          <div class=\"error-div\" *ngIf=\"(emg_contact_rel?.invalid && emg_contact_rel?.touched) || emg_contact_rel?.dirty\">\n            <small *ngIf=\"emg_contact_rel.errors?.pattern\" class=\"text-danger\">Enter a valid relation</small>\n          </div>\n        </ion-col>\n        <ion-col size=\"6\">\n          <ion-label>\n            Emergency Contact's Phone <span class=\"text-danger\">*</span></ion-label>\n            <br>\n            <br>\n          <ion-item lines=\"none\">\n            <ion-input formControlName=\"emg_contact_phone\" type=\"tel\" maxlength=\"10\"></ion-input>\n          </ion-item>\n          <div class=\"error-div\" *ngIf=\"(emg_contact_phone?.invalid && emg_contact_phone?.touched) || emg_contact_phone?.dirty\">\n            <small *ngIf=\"emg_contact_phone.errors?.pattern\" class=\"text-danger\">Enter a valid phone number</small>\n          </div>\n        </ion-col>\n        <ion-col size=\"6\">\n          <ion-label>\n            Other Members of Household's Name <span class=\"text-danger\">*</span></ion-label>\n          <ion-item lines=\"none\">\n            <ion-input formControlName=\"household_name\" type=\"text\"></ion-input>\n          </ion-item>\n          <div class=\"error-div\" *ngIf=\"(household_name?.invalid && household_name?.touched) || household_name?.dirty\">\n            <small *ngIf=\"household_name.errors?.pattern\" class=\"text-danger\">Enter a valid name</small>\n          </div>\n        </ion-col>\n        <ion-col size=\"6\">\n          <ion-label>\n            Other Members of Household's Relationship <span class=\"text-danger\">*</span></ion-label>\n          <ion-item lines=\"none\">\n            <ion-input formControlName=\"household_rel\" type=\"text\"></ion-input>\n          </ion-item>\n          <div class=\"error-div\" *ngIf=\"(household_rel?.invalid && household_rel?.touched) || household_rel?.dirty\">\n            <small *ngIf=\"household_rel.errors?.pattern\" class=\"text-danger\">Enter a valid relation</small>\n          </div>\n        </ion-col>\n        <ion-col size=\"6\">\n          <ion-label>\n            Other Members of Household's Phone Number <span class=\"text-danger\">*</span></ion-label>\n          <ion-item lines=\"none\">\n            <ion-input formControlName=\"household_num\" type=\"tel\" maxlength=\"10\"></ion-input>\n          </ion-item>\n          <div class=\"error-div\" *ngIf=\"(household_num?.invalid && household_num?.touched) || household_num?.dirty\">\n            <small *ngIf=\"household_num.errors?.pattern\" class=\"text-danger\">Enter a valid number</small>\n          </div>\n        </ion-col>\n      </ion-row>\n      <ion-row class=\"btn-row\">\n        <ion-col>\n          <ion-button shape=\"round\" (click)=\"previousTab('personal_info')\" color=\"primary\">\n            Previous\n          </ion-button>\n        </ion-col>\n        <ion-col >\n          <ion-button shape=\"round\"  (click)=\"goToForm('images')\" routerLinkActive=\"router-link-active\"  color=\"secondary\">\n            Next\n          </ion-button>\n        </ion-col>\n      </ion-row>\n    </div>\n    <div class=\"margin-ionic\" *ngIf=\"value=='images'\">\n      <ion-row>\n        <ion-col size=\"6\">\n          <ion-label>\n            Child's Picture <span class=\"text-danger\">*</span></ion-label>\n            <br>\n            <img  class=\"img-size\" *ngIf=\"childbase64Image\" src=\"{{childbase64Image}}\" alt=\"\" class=\"image_container\">\n            <img  class=\"img-size\" *ngIf=\"childimg && !childbase64Image\" src=\"{{childimg}}\" alt=\"\" class=\"image_container\">\n          <ion-item lines=\"none\">\n            <ion-button (click)=\"presentActionSheet('child')\" shape=\"round\" class=\"choose-btn\" size=\"small\" >\n              Choose File\n             </ion-button>\n             \n          </ion-item>\n        </ion-col>\n        <ion-col size=\"6\">\n          <ion-label>\n            Mother's Picture </ion-label>\n            <br>\n            <img  class=\"img-size\" *ngIf=\"motherbase64Image\" src=\"{{motherbase64Image}}\" alt=\"\" class=\"image_container\">\n            <img  class=\"img-size\" *ngIf=\"motherimg && !motherbase64Image\" src=\"{{motherimg}}\" alt=\"\" class=\"image_container\">\n          <ion-item lines=\"none\">\n            <ion-button (click)=\"presentActionSheet('mother')\" shape=\"round\" class=\"choose-btn\" size=\"small\" >\n              Choose File\n             </ion-button>\n             \n          </ion-item>\n        </ion-col>\n        <ion-col size=\"6\">\n          <ion-label>\n            Father's Picture </ion-label>\n            <br>\n            <img  class=\"img-size\" *ngIf=\"fatherbase64Image\" src=\"{{fatherbase64Image}}\" alt=\"\" class=\"image_container\">\n            <img  class=\"img-size\" *ngIf=\"fatherimg && !fatherbase64Image\" src=\"{{fatherimg}}\" alt=\"\" class=\"image_container\">\n          <ion-item lines=\"none\">\n            <ion-button (click)=\"presentActionSheet('father')\" shape=\"round\" class=\"choose-btn\" size=\"small\" >\n              Choose File\n             </ion-button>\n             \n          </ion-item>\n        </ion-col>\n        <ion-col size=\"6\">\n          <ion-label>\n            Guardian's Picture </ion-label>\n            <br>\n            <img  class=\"img-size\" *ngIf=\"guardianbase64Image\" src=\"{{guardianbase64Image}}\" alt=\"\" class=\"image_container\">\n            <img  class=\"img-size\" *ngIf=\"guardianimg && !guardianbase64Image\" src=\"{{guardianimg}}\" alt=\"\" class=\"image_container\">\n          <ion-item lines=\"none\">\n            <ion-button (click)=\"presentActionSheet('guardian')\" shape=\"round\" class=\"choose-btn\" size=\"small\" >\n              Choose File\n             </ion-button>\n             \n          </ion-item>\n        </ion-col>\n  \n      </ion-row>\n      <ion-row class=\"btn-row\">\n        <ion-col>\n          <ion-button shape=\"round\" (click)=\"previousTab('other_info')\" color=\"primary\">\n            Previous\n          </ion-button>\n        </ion-col>\n        <ion-col>\n          <ion-button shape=\"round\" type=\"submit\" [disabled]=\"dayCareRegForm.invalid\" color=\"secondary\">\n            Submit\n          </ion-button>\n        </ion-col>\n\n      </ion-row>\n    </div>\n  </form>\n</ion-content>\n";
      /***/
    },

    /***/
    "3l9b":
    /*!*****************************************************!*\
      !*** ./src/app/addadmission/addadmission.page.scss ***!
      \*****************************************************/

    /*! exports provided: default */

    /***/
    function l9b(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "@charset \"UTF-8\";\n.step {\n  color: #a2a2a2;\n  font-size: 16px;\n  margin-left: 16px;\n  font-family: initial;\n  margin-bottom: 2px;\n  font-weight: bold;\n}\n.step-heading {\n  color: #fdd653;\n  margin-left: 16px;\n  font-family: initial;\n  font-size: 30px;\n  margin-top: 0;\n  font-weight: bold;\n  text-decoration: underline;\n  text-decoration-thickness: 2px;\n}\n.wrap {\n  text-align: center;\n  position: relative;\n}\n.wrap:before {\n  content: \"\";\n  position: absolute;\n  top: 20%;\n  left: 18%;\n  border-top: 0.5px solid #677483;\n  border-width: thin;\n  width: 65%;\n  transform: translateY(-50%);\n  border-style: dashed;\n}\n.active {\n  background: #fdd653;\n  color: #ffffff;\n}\n.icon-circle {\n  position: relative;\n  display: inline-block;\n  margin: -1px;\n  width: 30px;\n  height: 30px;\n  font-size: 26px;\n  border-radius: 50%;\n  border: 1px solid #202020;\n  background: #fff;\n  color: #202020;\n  text-align: center;\n}\n.icon-circle ion-icon {\n  margin-top: 2px;\n  font-size: 20px;\n}\n.heading-1 {\n  color: #676767;\n  margin-bottom: 0;\n  font-size: 16px;\n}\n.heading {\n  color: #9b9ca6;\n  margin-bottom: 0;\n  font-size: 14px;\n}\nion-label {\n  color: #9b9ca6;\n  font-size: 14px;\n}\nion-input {\n  border: 1px solid #9b9ca6;\n  border-radius: 5px;\n  --padding-start: 5px !important;\n  height: 35px;\n}\nion-textarea {\n  border: 1px solid #9b9ca6;\n  border-radius: 5px;\n  --padding-start: 5px !important;\n}\nion-datetime {\n  border: 1px solid #9b9ca6;\n  border-radius: 5px;\n  --padding-start: 5px !important;\n  width: 100%;\n  height: 35px;\n}\nion-item {\n  --padding-start: 0;\n  --ripple-color: transparent;\n  --background-activated: transparent;\n  --background-activated-opacity:transparent;\n  --background-focused: transparent;\n  --background-focused-opacity:transparent;\n  --background-hover: transparent;\n  --background-hover-opacity:transparent;\n}\nion-item ion-label {\n  font-size: 12px;\n  color: #9b9ca6;\n}\nion-radio-group ion-item {\n  border-bottom: 0;\n}\nion-radio-group ion-col {\n  padding-left: 0;\n}\nion-radio-group ion-radio {\n  margin-right: 8px;\n  width: 18px;\n  height: 18px;\n}\nion-col {\n  padding-left: 0;\n}\nion-button {\n  text-transform: none;\n}\n.choose-btn {\n  --background: #ee4a35;\n  --color:#fff;\n}\n.heading-3 {\n  margin-top: 12px;\n  color: #929791;\n}\n.admission-row ion-col {\n  text-align: center;\n  text-align: -moz-center;\n}\n.admission-row ion-col ion-button {\n  text-transform: none;\n  width: 40%;\n}\n.btn-row ion-col {\n  text-align: center;\n  text-align: -moz-center;\n}\n.btn-row ion-col ion-button {\n  text-transform: none;\n  width: 75%;\n}\n.next-btn-col {\n  text-align: left !important;\n}\nion-segment-button {\n  text-transform: none;\n}\nimg {\n  width: 60%;\n}\n.tabs {\n  border-radius: 0;\n  overflow: hidden;\n  box-shadow: 0 4px 4px -2px rgba(0, 0, 0, 0.5);\n}\n#chck1 {\n  position: absolute;\n  opacity: 0;\n  z-index: -1;\n}\n.tab {\n  width: 100%;\n  color: white;\n  overflow: hidden;\n}\n.tab-label {\n  display: flex;\n  justify-content: space-between;\n  padding: 1em;\n  background: #2c3e50;\n  font-weight: bold;\n  cursor: pointer;\n  /* Icon */\n}\n.tab-label:hover {\n  background: #1a252f;\n}\n.tab-label::after {\n  content: \"❯\";\n  width: 1em;\n  height: 1em;\n  text-align: center;\n  transition: all 0.35s;\n}\n.tab-content {\n  max-height: 0;\n  padding: 0 1em;\n  color: #2c3e50;\n  background: white;\n  transition: all 0.35s;\n}\n.tab-close {\n  display: flex;\n  justify-content: flex-end;\n  padding: 1em;\n  font-size: 0.75em;\n  background: #2c3e50;\n  cursor: pointer;\n}\n.tab-close:hover {\n  background: #1a252f;\n}\n#chck1:checked + .tab-label {\n  background: #1a252f;\n}\n#chck1:checked + .tab-label::after {\n  transform: rotate(90deg);\n}\n#chck1:checked ~ .tab-content {\n  max-height: 100vh;\n  padding: 1em;\n}\n.inside-body {\n  padding: 25px;\n}\n.list-group.vertical-steps .list-group-item {\n  border: none;\n  border-left: 3px solid #b4b4b4;\n  box-sizing: border-box;\n  border-radius: 0;\n  counter-increment: step-counter;\n  padding-left: 20px;\n  padding-right: 0px;\n  padding-bottom: 7px;\n  padding-top: 0px;\n}\n.list-group.vertical-steps .list-group-item::before {\n  border-radius: 50%;\n  background-color: #b4b4b4;\n  color: #fff;\n  content: counter(step-counter);\n  display: inline-block;\n  float: left;\n  height: 25px;\n  line-height: 25px;\n  margin-left: -35px;\n  text-align: center;\n  width: 25px;\n}\n.list-group.vertical-steps .final::before {\n  border-radius: 50%;\n  background-color: #b4b4b4;\n  color: #fff;\n  content: counter(step-counter);\n  display: inline-block;\n  float: left;\n  height: 25px;\n  line-height: 25px;\n  margin-left: -32px;\n  text-align: center;\n  width: 25px;\n}\n.final {\n  border-left: none !important;\n}\n.list-group.vertical-steps .step-active::before {\n  border-radius: 50%;\n  background-color: #2dd36f;\n  color: #fff;\n  content: counter(step-counter);\n  display: inline-block;\n  float: left;\n  height: 25px;\n  line-height: 25px;\n  margin-left: -35px;\n  text-align: center;\n  width: 25px;\n}\n.list-group.vertical-steps .list-group-item span, .list-group.vertical-steps .list-group-item a {\n  display: block;\n  overflow: hidden;\n  padding-top: 2px;\n}\ndiv.reusable_accordion {\n  z-index: 99;\n  padding: 0;\n  margin: 0;\n  list-style: none;\n  display: flex;\n  flex-wrap: wrap;\n  flex-direction: column;\n  justify-content: space-around;\n  line-height: 25px;\n  height: 180px;\n  background: #f1f1f1;\n  width: auto;\n}\ndiv.template_accordion div.template_containers {\n  display: flex;\n  min-width: 45%;\n  min-height: 60px;\n  background: white;\n  flex-direction: row;\n  margin: 5px;\n  justify-content: center;\n  align-content: center;\n}\n.toggle_button {\n  --background: #f1f1f1;\n  width: 100%;\n  text-align: center;\n  padding: 0;\n  color: #202020;\n  cursor: pointer;\n  min-width: 100%;\n}\n.toggle_button ion-label {\n  font-size: 16px;\n  color: #202020;\n  text-align: left;\n  margin-left: 20px;\n  font-weight: bold;\n}\ndiv.accordion-container {\n  overflow: hidden;\n  overflow-y: scroll;\n  transition: max-height 0.5s ease-in-out;\n  height: auto;\n  background: #1f2b37;\n}\ndiv.accordion-container.collapsed {\n  max-height: 0 !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL2FkZGFkbWlzc2lvbi5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsZ0JBQWdCO0FBSWhCO0VBQ0ksY0FBQTtFQUNBLGVBQUE7RUFDQSxpQkFBQTtFQUNBLG9CQUFBO0VBQ0Esa0JBQUE7RUFDQSxpQkFBQTtBQUZKO0FBSUE7RUFDSSxjQUFBO0VBQ0EsaUJBQUE7RUFDQSxvQkFBQTtFQUNBLGVBQUE7RUFDQSxhQUFBO0VBQ0EsaUJBQUE7RUFDQSwwQkFBQTtFQUNBLDhCQUFBO0FBREo7QUFHQTtFQUNJLGtCQUFBO0VBQ0Esa0JBQUE7QUFBSjtBQUdFO0VBQ0UsV0FBQTtFQUNBLGtCQUFBO0VBQ0EsUUFBQTtFQUNBLFNBQUE7RUFDQSwrQkFBQTtFQUNBLGtCQUFBO0VBQ0EsVUFBQTtFQUNBLDJCQUFBO0VBQ0Esb0JBQUE7QUFBSjtBQUVFO0VBQ0UsbUJBQUE7RUFDQSxjQUFBO0FBQ0o7QUFDRTtFQUNFLGtCQUFBO0VBQ0EscUJBQUE7RUFDQSxZQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxlQUFBO0VBQ0Esa0JBQUE7RUFDQSx5QkFBQTtFQUNBLGdCQUFBO0VBQ0EsY0FBQTtFQUNBLGtCQUFBO0FBRUo7QUFBSTtFQUNJLGVBQUE7RUFDQSxlQUFBO0FBRVI7QUFJRTtFQUNFLGNBQUE7RUFDQSxnQkFBQTtFQUNBLGVBQUE7QUFESjtBQUdBO0VBQ0ksY0FBQTtFQUNBLGdCQUFBO0VBQ0EsZUFBQTtBQUFKO0FBRUE7RUFDSSxjQUFBO0VBQ0EsZUFBQTtBQUNKO0FBQ0E7RUFDSSx5QkFBQTtFQUNBLGtCQUFBO0VBQ0EsK0JBQUE7RUFDQSxZQUFBO0FBRUo7QUFBQTtFQUNJLHlCQUFBO0VBQ0Esa0JBQUE7RUFDQSwrQkFBQTtBQUdKO0FBREE7RUFDSSx5QkFBQTtFQUNBLGtCQUFBO0VBQ0EsK0JBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtBQUlKO0FBREE7RUFFSSxrQkFBQTtFQUNBLDJCQUFBO0VBQ0EsbUNBQUE7RUFDQSwwQ0FBQTtFQUNBLGlDQUFBO0VBQ0Esd0NBQUE7RUFDQSwrQkFBQTtFQUNBLHNDQUFBO0FBR0o7QUFESTtFQUNJLGVBQUE7RUFDQSxjQUFBO0FBR1I7QUFFUTtFQUNJLGdCQUFBO0FBQ1o7QUFDUTtFQUNJLGVBQUE7QUFDWjtBQUNRO0VBQ0EsaUJBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtBQUNSO0FBR0k7RUFDSSxlQUFBO0FBQVI7QUFHSTtFQUNJLG9CQUFBO0FBQVI7QUFHSTtFQUNJLHFCQUFBO0VBQ0EsWUFBQTtBQUFSO0FBRUk7RUFDSSxnQkFBQTtFQUNBLGNBQUE7QUFDUjtBQUVRO0VBQ0ksa0JBQUE7RUFDQSx1QkFBQTtBQUNaO0FBQVk7RUFDSSxvQkFBQTtFQUVBLFVBQUE7QUFDaEI7QUFLUTtFQUNJLGtCQUFBO0VBQ0EsdUJBQUE7QUFGWjtBQUdZO0VBQ0ksb0JBQUE7RUFFQSxVQUFBO0FBRmhCO0FBT0k7RUFDSSwyQkFBQTtBQUpSO0FBTUk7RUFDSSxvQkFBQTtBQUhSO0FBS0k7RUFDSSxVQUFBO0FBRlI7QUFLSTtFQUNGLGdCQUFBO0VBQ0EsZ0JBQUE7RUFDQSw2Q0FBQTtBQUZGO0FBSUE7RUFDRSxrQkFBQTtFQUNBLFVBQUE7RUFDQSxXQUFBO0FBREY7QUFHQTtFQUNFLFdBQUE7RUFDQSxZQUFBO0VBQ0EsZ0JBQUE7QUFBRjtBQUNFO0VBQ0UsYUFBQTtFQUNBLDhCQUFBO0VBQ0EsWUFBQTtFQUNBLG1CQWxNTztFQW1NUCxpQkFBQTtFQUNBLGVBQUE7RUFDQSxTQUFBO0FBQ0o7QUFBSTtFQUNFLG1CQUFBO0FBRU47QUFBSTtFQUNFLFlBQUE7RUFDQSxVQUFBO0VBQ0EsV0FBQTtFQUNBLGtCQUFBO0VBQ0EscUJBQUE7QUFFTjtBQUNFO0VBQ0UsYUFBQTtFQUNBLGNBQUE7RUFDQSxjQXBOTztFQXFOUCxpQkFBQTtFQUNBLHFCQUFBO0FBQ0o7QUFDRTtFQUNFLGFBQUE7RUFDQSx5QkFBQTtFQUNBLFlBQUE7RUFDQSxpQkFBQTtFQUNBLG1CQTdOTztFQThOUCxlQUFBO0FBQ0o7QUFBSTtFQUNFLG1CQUFBO0FBRU47QUFHSTtFQUNFLG1CQUFBO0FBQU47QUFDTTtFQUNFLHdCQUFBO0FBQ1I7QUFFSTtFQUNFLGlCQUFBO0VBQ0EsWUFBQTtBQUFOO0FBR0U7RUFDRSxhQUFBO0FBQUo7QUFFQTtFQUNFLFlBQUE7RUFDQSw4QkFBQTtFQUNBLHNCQUFBO0VBQ0EsZ0JBQUE7RUFDQSwrQkFBQTtFQUNBLGtCQUFBO0VBQ0Esa0JBQUE7RUFDQSxtQkFBQTtFQUNBLGdCQUFBO0FBQ0Y7QUFDQTtFQUNFLGtCQUFBO0VBQ0EseUJBQUE7RUFDQSxXQUFBO0VBQ0EsOEJBQUE7RUFDQSxxQkFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0EsaUJBQUE7RUFDQSxrQkFBQTtFQUNBLGtCQUFBO0VBQ0EsV0FBQTtBQUVGO0FBQUE7RUFDRSxrQkFBQTtFQUNBLHlCQUFBO0VBQ0EsV0FBQTtFQUNBLDhCQUFBO0VBQ0EscUJBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGlCQUFBO0VBQ0Esa0JBQUE7RUFDQSxrQkFBQTtFQUNBLFdBQUE7QUFHRjtBQURBO0VBQ0UsNEJBQUE7QUFJRjtBQUZBO0VBQ0Usa0JBQUE7RUFDQSx5QkFBQTtFQUNBLFdBQUE7RUFDQSw4QkFBQTtFQUNBLHFCQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxpQkFBQTtFQUNBLGtCQUFBO0VBQ0Esa0JBQUE7RUFDQSxXQUFBO0FBS0Y7QUFIQTtFQUNFLGNBQUE7RUFDQSxnQkFBQTtFQUNBLGdCQUFBO0FBTUY7QUFIQTtFQUNFLFdBQUE7RUFDQSxVQUFBO0VBQ0EsU0FBQTtFQUNBLGdCQUFBO0VBS0EsYUFBQTtFQUNBLGVBQUE7RUFDQSxzQkFBQTtFQUNBLDZCQUFBO0VBQ0EsaUJBQUE7RUFDQSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSxXQUFBO0FBTUY7QUFIRTtFQUVFLGFBQUE7RUFDQSxjQUFBO0VBQ0EsZ0JBQUE7RUFDQSxpQkFBQTtFQUdBLG1CQUFBO0VBQ0EsV0FBQTtFQUNBLHVCQUFBO0VBQ0EscUJBQUE7QUFNSjtBQUZBO0VBQ0UscUJBQUE7RUFDQSxXQUFBO0VBQ0Esa0JBQUE7RUFDQSxVQUFBO0VBQ0EsY0FBQTtFQUNBLGVBQUE7RUFDQSxlQUFBO0FBS0Y7QUFKRTtFQUNFLGVBQUE7RUFDQSxjQUFBO0VBQ0EsZ0JBQUE7RUFDQSxpQkFBQTtFQUNBLGlCQUFBO0FBTUo7QUFIQTtFQUNFLGdCQUFBO0VBQ0Esa0JBQUE7RUFDQSx1Q0FBQTtFQUNBLFlBQUE7RUFDQSxtQkFBQTtBQU1GO0FBSEE7RUFDRSx3QkFBQTtBQU1GIiwiZmlsZSI6ImFkZGFkbWlzc2lvbi5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJcclxuJG1pZG5pZ2h0OiAjMmMzZTUwO1xyXG4kY2xvdWRzOiAjZWNmMGYxO1xyXG5cclxuLnN0ZXB7XHJcbiAgICBjb2xvcjogI2EyYTJhMjtcclxuICAgIGZvbnQtc2l6ZTogMTZweDtcclxuICAgIG1hcmdpbi1sZWZ0OiAxNnB4O1xyXG4gICAgZm9udC1mYW1pbHk6IGluaXRpYWw7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAycHg7XHJcbiAgICBmb250LXdlaWdodDogYm9sZDtcclxufVxyXG4uc3RlcC1oZWFkaW5ne1xyXG4gICAgY29sb3I6ICNmZGQ2NTM7XHJcbiAgICBtYXJnaW4tbGVmdDogMTZweDtcclxuICAgIGZvbnQtZmFtaWx5OiBpbml0aWFsO1xyXG4gICAgZm9udC1zaXplOiAzMHB4O1xyXG4gICAgbWFyZ2luLXRvcDogMDtcclxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gICAgdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmU7XHJcbiAgICB0ZXh0LWRlY29yYXRpb24tdGhpY2tuZXNzOiAycHg7XHJcbn1cclxuLndyYXAge1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gIH1cclxuICBcclxuICAud3JhcDpiZWZvcmUge1xyXG4gICAgY29udGVudDogXCJcIjtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIHRvcDogMjAlO1xyXG4gICAgbGVmdDogMTglO1xyXG4gICAgYm9yZGVyLXRvcDogMC41cHggc29saWQgIzY3NzQ4MztcclxuICAgIGJvcmRlci13aWR0aDogdGhpbjtcclxuICAgIHdpZHRoOiA2NSU7XHJcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTUwJSk7XHJcbiAgICBib3JkZXItc3R5bGU6IGRhc2hlZDtcclxuICB9XHJcbiAgLmFjdGl2ZXtcclxuICAgIGJhY2tncm91bmQ6ICNmZGQ2NTM7XHJcbiAgICBjb2xvcjogI2ZmZmZmZjtcclxuICB9XHJcbiAgLmljb24tY2lyY2xle1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gICAgbWFyZ2luOiAtMXB4O1xyXG4gICAgd2lkdGg6IDMwcHg7XHJcbiAgICBoZWlnaHQ6IDMwcHg7XHJcbiAgICBmb250LXNpemU6IDI2cHg7XHJcbiAgICBib3JkZXItcmFkaXVzOiA1MCU7XHJcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjMjAyMDIwO1xyXG4gICAgYmFja2dyb3VuZDogI2ZmZjtcclxuICAgIGNvbG9yOiAjMjAyMDIwO1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG5cclxuICAgIGlvbi1pY29ue1xyXG4gICAgICAgIG1hcmdpbi10b3A6IDJweDtcclxuICAgICAgICBmb250LXNpemU6IDIwcHg7XHJcbiAgICB9XHJcbiAgXHJcbiAgfVxyXG4gIFxyXG4gIFxyXG4gIC5oZWFkaW5nLTF7XHJcbiAgICBjb2xvcjogIzY3Njc2NztcclxuICAgIG1hcmdpbi1ib3R0b206IDA7XHJcbiAgICBmb250LXNpemU6IDE2cHg7XHJcbn1cclxuLmhlYWRpbmd7XHJcbiAgICBjb2xvcjogIzliOWNhNjtcclxuICAgIG1hcmdpbi1ib3R0b206IDA7XHJcbiAgICBmb250LXNpemU6IDE0cHg7XHJcbn1cclxuaW9uLWxhYmVse1xyXG4gICAgY29sb3I6ICM5YjljYTY7XHJcbiAgICBmb250LXNpemU6IDE0cHg7XHJcbn1cclxuaW9uLWlucHV0IHtcclxuICAgIGJvcmRlcjogMXB4IHNvbGlkICM5YjljYTY7XHJcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XHJcbiAgICAtLXBhZGRpbmctc3RhcnQ6IDVweCAhaW1wb3J0YW50O1xyXG4gICAgaGVpZ2h0OjM1cHg7XHJcbn1cclxuaW9uLXRleHRhcmVhe1xyXG4gICAgYm9yZGVyOiAxcHggc29saWQgIzliOWNhNjtcclxuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcclxuICAgIC0tcGFkZGluZy1zdGFydDogNXB4ICFpbXBvcnRhbnQ7XHJcbn1cclxuaW9uLWRhdGV0aW1le1xyXG4gICAgYm9yZGVyOiAxcHggc29saWQgIzliOWNhNjtcclxuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcclxuICAgIC0tcGFkZGluZy1zdGFydDogNXB4ICFpbXBvcnRhbnQ7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGhlaWdodDozNXB4O1xyXG5cclxufVxyXG5pb24taXRlbXtcclxuICAgIC8vIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjNjc3NDgzO1xyXG4gICAgLS1wYWRkaW5nLXN0YXJ0OiAwO1xyXG4gICAgLS1yaXBwbGUtY29sb3I6IHRyYW5zcGFyZW50O1xyXG4gICAgLS1iYWNrZ3JvdW5kLWFjdGl2YXRlZDogdHJhbnNwYXJlbnQ7XHJcbiAgICAtLWJhY2tncm91bmQtYWN0aXZhdGVkLW9wYWNpdHk6dHJhbnNwYXJlbnQ7XHJcbiAgICAtLWJhY2tncm91bmQtZm9jdXNlZDogdHJhbnNwYXJlbnQ7XHJcbiAgICAtLWJhY2tncm91bmQtZm9jdXNlZC1vcGFjaXR5OnRyYW5zcGFyZW50O1xyXG4gICAgLS1iYWNrZ3JvdW5kLWhvdmVyICA6IHRyYW5zcGFyZW50O1xyXG4gICAgLS1iYWNrZ3JvdW5kLWhvdmVyLW9wYWNpdHkgIDp0cmFuc3BhcmVudDtcclxuXHJcbiAgICBpb24tbGFiZWwge1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMTJweDtcclxuICAgICAgICBjb2xvcjogIzliOWNhNjtcclxuXHJcbiAgICB9XHJcbn1cclxuICAgIGlvbi1yYWRpby1ncm91cHtcclxuICAgICAgICBpb24taXRlbXtcclxuICAgICAgICAgICAgYm9yZGVyLWJvdHRvbTogMDtcclxuICAgICAgICB9XHJcbiAgICAgICAgaW9uLWNvbCB7XHJcbiAgICAgICAgICAgIHBhZGRpbmctbGVmdDogMDtcclxuICAgICAgICB9XHJcbiAgICAgICAgaW9uLXJhZGlve1xyXG4gICAgICAgIG1hcmdpbi1yaWdodDogOHB4O1xyXG4gICAgICAgIHdpZHRoOiAxOHB4O1xyXG4gICAgICAgIGhlaWdodDogMThweDtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgaW9uLWNvbCB7XHJcbiAgICAgICAgcGFkZGluZy1sZWZ0OiAwO1xyXG4gICAgfVxyXG5cclxuICAgIGlvbi1idXR0b24ge1xyXG4gICAgICAgIHRleHQtdHJhbnNmb3JtOiBub25lO1xyXG4gICAgfVxyXG4gICAgXHJcbiAgICAuY2hvb3NlLWJ0bntcclxuICAgICAgICAtLWJhY2tncm91bmQ6ICNlZTRhMzU7XHJcbiAgICAgICAgLS1jb2xvcjojZmZmO1xyXG4gICAgfVxyXG4gICAgLmhlYWRpbmctM3tcclxuICAgICAgICBtYXJnaW4tdG9wOiAxMnB4O1xyXG4gICAgICAgIGNvbG9yOiAjOTI5NzkxO1xyXG4gICAgfVxyXG4gICAgLmFkbWlzc2lvbi1yb3d7XHJcbiAgICAgICAgaW9uLWNvbHtcclxuICAgICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgICAgICAgICB0ZXh0LWFsaWduOiAtbW96LWNlbnRlcjtcclxuICAgICAgICAgICAgaW9uLWJ1dHRvbntcclxuICAgICAgICAgICAgICAgIHRleHQtdHJhbnNmb3JtOiBub25lO1xyXG4gICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgIHdpZHRoOiA0MCU7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgLmJ0bi1yb3d7XHJcbiAgICAgICAgaW9uLWNvbHtcclxuICAgICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgICAgICAgICB0ZXh0LWFsaWduOiAtbW96LWNlbnRlcjtcclxuICAgICAgICAgICAgaW9uLWJ1dHRvbntcclxuICAgICAgICAgICAgICAgIHRleHQtdHJhbnNmb3JtOiBub25lO1xyXG4gICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgIHdpZHRoOiA3NSU7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgLm5leHQtYnRuLWNvbHtcclxuICAgICAgICB0ZXh0LWFsaWduOiBsZWZ0ICFpbXBvcnRhbnQ7XHJcbiAgICB9XHJcbiAgICBpb24tc2VnbWVudC1idXR0b257XHJcbiAgICAgICAgdGV4dC10cmFuc2Zvcm06IG5vbmU7XHJcbiAgICB9XHJcbiAgICBpbWd7XHJcbiAgICAgICAgd2lkdGg6IDYwJTtcclxuICAgIH1cclxuXHJcbiAgICAudGFicyB7XHJcbiAgYm9yZGVyLXJhZGl1czogMDtcclxuICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gIGJveC1zaGFkb3c6IDAgNHB4IDRweCAtMnB4IHJnYmEoMCwwLDAsMC41KTtcclxufVxyXG4jY2hjazF7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIG9wYWNpdHk6IDA7XHJcbiAgei1pbmRleDogLTE7XHJcbn1cclxuLnRhYiB7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgY29sb3I6IHdoaXRlO1xyXG4gIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgJi1sYWJlbCB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG4gICAgcGFkZGluZzogMWVtO1xyXG4gICAgYmFja2dyb3VuZDogJG1pZG5pZ2h0O1xyXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICAvKiBJY29uICovXHJcbiAgICAmOmhvdmVyIHtcclxuICAgICAgYmFja2dyb3VuZDogZGFya2VuKCRtaWRuaWdodCwgMTAlKTtcclxuICAgIH1cclxuICAgICY6OmFmdGVyIHtcclxuICAgICAgY29udGVudDogXCJcXDI3NkZcIjtcclxuICAgICAgd2lkdGg6IDFlbTtcclxuICAgICAgaGVpZ2h0OiAxZW07XHJcbiAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgICAgdHJhbnNpdGlvbjogYWxsIC4zNXM7XHJcbiAgICB9XHJcbiAgfVxyXG4gICYtY29udGVudCB7XHJcbiAgICBtYXgtaGVpZ2h0OiAwO1xyXG4gICAgcGFkZGluZzogMCAxZW07XHJcbiAgICBjb2xvcjogJG1pZG5pZ2h0O1xyXG4gICAgYmFja2dyb3VuZDogd2hpdGU7XHJcbiAgICB0cmFuc2l0aW9uOiBhbGwgLjM1cztcclxuICB9XHJcbiAgJi1jbG9zZSB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAganVzdGlmeS1jb250ZW50OiBmbGV4LWVuZDtcclxuICAgIHBhZGRpbmc6IDFlbTtcclxuICAgIGZvbnQtc2l6ZTogMC43NWVtO1xyXG4gICAgYmFja2dyb3VuZDogJG1pZG5pZ2h0O1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgJjpob3ZlciB7XHJcbiAgICAgIGJhY2tncm91bmQ6IGRhcmtlbigkbWlkbmlnaHQsIDEwJSk7XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcbiNjaGNrMTpjaGVja2VkIHtcclxuICAgICsgLnRhYi1sYWJlbCB7XHJcbiAgICAgIGJhY2tncm91bmQ6IGRhcmtlbigkbWlkbmlnaHQsIDEwJSk7XHJcbiAgICAgICY6OmFmdGVyIHtcclxuICAgICAgICB0cmFuc2Zvcm06IHJvdGF0ZSg5MGRlZyk7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICAgIH4gLnRhYi1jb250ZW50IHtcclxuICAgICAgbWF4LWhlaWdodDogMTAwdmg7XHJcbiAgICAgIHBhZGRpbmc6IDFlbTtcclxuICAgIH1cclxuICB9XHJcbiAgLmluc2lkZS1ib2R5IHtcclxuICAgIHBhZGRpbmc6IDI1cHg7XHJcbn1cclxuLmxpc3QtZ3JvdXAudmVydGljYWwtc3RlcHMgLmxpc3QtZ3JvdXAtaXRlbSB7XHJcbiAgYm9yZGVyOiBub25lO1xyXG4gIGJvcmRlci1sZWZ0OiAzcHggc29saWQgI2I0YjRiNDtcclxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xyXG4gIGJvcmRlci1yYWRpdXM6IDA7XHJcbiAgY291bnRlci1pbmNyZW1lbnQ6IHN0ZXAtY291bnRlcjtcclxuICBwYWRkaW5nLWxlZnQ6IDIwcHg7XHJcbiAgcGFkZGluZy1yaWdodDogMHB4O1xyXG4gIHBhZGRpbmctYm90dG9tOiA3cHg7XHJcbiAgcGFkZGluZy10b3A6IDBweDtcclxufVxyXG4ubGlzdC1ncm91cC52ZXJ0aWNhbC1zdGVwcyAubGlzdC1ncm91cC1pdGVtOjpiZWZvcmUge1xyXG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjYjRiNGI0O1xyXG4gIGNvbG9yOiAjZmZmO1xyXG4gIGNvbnRlbnQ6IGNvdW50ZXIoc3RlcC1jb3VudGVyKTtcclxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgZmxvYXQ6IGxlZnQ7XHJcbiAgaGVpZ2h0OiAyNXB4O1xyXG4gIGxpbmUtaGVpZ2h0OiAyNXB4O1xyXG4gIG1hcmdpbi1sZWZ0OiAtMzVweDtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgd2lkdGg6IDI1cHg7XHJcbn1cclxuLmxpc3QtZ3JvdXAudmVydGljYWwtc3RlcHMgLmZpbmFsOjpiZWZvcmUge1xyXG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjYjRiNGI0O1xyXG4gIGNvbG9yOiAjZmZmO1xyXG4gIGNvbnRlbnQ6IGNvdW50ZXIoc3RlcC1jb3VudGVyKTtcclxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgZmxvYXQ6IGxlZnQ7XHJcbiAgaGVpZ2h0OiAyNXB4O1xyXG4gIGxpbmUtaGVpZ2h0OiAyNXB4O1xyXG4gIG1hcmdpbi1sZWZ0OiAtMzJweDtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgd2lkdGg6IDI1cHg7XHJcbn1cclxuLmZpbmFse1xyXG4gIGJvcmRlci1sZWZ0OiBub25lICFpbXBvcnRhbnQ7XHJcbn1cclxuLmxpc3QtZ3JvdXAudmVydGljYWwtc3RlcHMgLnN0ZXAtYWN0aXZlOjpiZWZvcmUge1xyXG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMmRkMzZmO1xyXG4gIGNvbG9yOiAjZmZmO1xyXG4gIGNvbnRlbnQ6IGNvdW50ZXIoc3RlcC1jb3VudGVyKTtcclxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgZmxvYXQ6IGxlZnQ7XHJcbiAgaGVpZ2h0OiAyNXB4O1xyXG4gIGxpbmUtaGVpZ2h0OiAyNXB4O1xyXG4gIG1hcmdpbi1sZWZ0OiAtMzVweDtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgd2lkdGg6IDI1cHg7XHJcbn1cclxuLmxpc3QtZ3JvdXAudmVydGljYWwtc3RlcHMgLmxpc3QtZ3JvdXAtaXRlbSBzcGFuLCAubGlzdC1ncm91cC52ZXJ0aWNhbC1zdGVwcyAubGlzdC1ncm91cC1pdGVtIGEge1xyXG4gIGRpc3BsYXk6IGJsb2NrO1xyXG4gIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgcGFkZGluZy10b3A6IDJweDtcclxufVxyXG5cclxuZGl2LnJldXNhYmxlX2FjY29yZGlvbiB7XHJcbiAgei1pbmRleDogOTk7XHJcbiAgcGFkZGluZzogMDtcclxuICBtYXJnaW46IDA7XHJcbiAgbGlzdC1zdHlsZTogbm9uZTtcclxuICBkaXNwbGF5OiAtd2Via2l0LWJveDtcclxuICBkaXNwbGF5OiAtbW96LWJveDtcclxuICBkaXNwbGF5OiAtbXMtZmxleGJveDtcclxuICBkaXNwbGF5OiAtd2Via2l0LWZsZXg7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBmbGV4LXdyYXA6IHdyYXA7XHJcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcclxuICBsaW5lLWhlaWdodDogMjVweDtcclxuICBoZWlnaHQ6IDE4MHB4O1xyXG4gIGJhY2tncm91bmQ6ICNmMWYxZjE7XHJcbiAgd2lkdGg6IGF1dG87XHJcbn1cclxuZGl2LnRlbXBsYXRlX2FjY29yZGlvbiB7XHJcbiAgZGl2LnRlbXBsYXRlX2NvbnRhaW5lcnMge1xyXG4gICAgZGlzcGxheTogLXdlYmtpdC1ib3g7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgbWluLXdpZHRoOiA0NSU7XHJcbiAgICBtaW4taGVpZ2h0OiA2MHB4O1xyXG4gICAgYmFja2dyb3VuZDogd2hpdGU7XHJcbiAgICAtd2Via2l0LWJveC1vcmllbnQ6IGhvcml6b250YWw7XHJcbiAgICAtd2Via2l0LWJveC1kaXJlY3Rpb246IG5vcm1hbDtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XHJcbiAgICBtYXJnaW46IDVweDtcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgYWxpZ24tY29udGVudDogY2VudGVyO1xyXG4gIH1cclxufVxyXG5cclxuLnRvZ2dsZV9idXR0b24ge1xyXG4gIC0tYmFja2dyb3VuZDogI2YxZjFmMTtcclxuICB3aWR0aDogMTAwJTtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgcGFkZGluZzogMDtcclxuICBjb2xvcjogIzIwMjAyMDtcclxuICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgbWluLXdpZHRoOiAxMDAlO1xyXG4gIGlvbi1sYWJlbHtcclxuICAgIGZvbnQtc2l6ZTogMTZweDtcclxuICAgIGNvbG9yOiAjMjAyMDIwO1xyXG4gICAgdGV4dC1hbGlnbjogbGVmdDtcclxuICAgIG1hcmdpbi1sZWZ0OiAyMHB4O1xyXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgfVxyXG59XHJcbmRpdi5hY2NvcmRpb24tY29udGFpbmVyIHtcclxuICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gIG92ZXJmbG93LXk6IHNjcm9sbDtcclxuICB0cmFuc2l0aW9uOiBtYXgtaGVpZ2h0IDAuNXMgZWFzZS1pbi1vdXQ7XHJcbiAgaGVpZ2h0OiBhdXRvO1xyXG4gIGJhY2tncm91bmQ6IHJnYigzMSwgNDMsIDU1KTtcclxufVxyXG5cclxuZGl2LmFjY29yZGlvbi1jb250YWluZXIuY29sbGFwc2VkIHtcclxuICBtYXgtaGVpZ2h0OiAwICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbiJdfQ== */";
      /***/
    },

    /***/
    "S+fq":
    /*!*************************************************************!*\
      !*** ./src/app/addadmission/addadmission-routing.module.ts ***!
      \*************************************************************/

    /*! exports provided: AddadmissionPageRoutingModule */

    /***/
    function SFq(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AddadmissionPageRoutingModule", function () {
        return AddadmissionPageRoutingModule;
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


      var _addadmission_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./addadmission.page */
      "aM1N");

      var routes = [{
        path: '',
        component: _addadmission_page__WEBPACK_IMPORTED_MODULE_3__["AddadmissionPage"]
      }];

      var AddadmissionPageRoutingModule = /*#__PURE__*/_createClass(function AddadmissionPageRoutingModule() {
        _classCallCheck(this, AddadmissionPageRoutingModule);
      });

      AddadmissionPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
      })], AddadmissionPageRoutingModule);
      /***/
    },

    /***/
    "aM1N":
    /*!***************************************************!*\
      !*** ./src/app/addadmission/addadmission.page.ts ***!
      \***************************************************/

    /*! exports provided: AddadmissionPage */

    /***/
    function aM1N(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AddadmissionPage", function () {
        return AddadmissionPage;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_addadmission_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./addadmission.page.html */
      "2JKY");
      /* harmony import */


      var _addadmission_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./addadmission.page.scss */
      "3l9b");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");
      /* harmony import */


      var _api_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ./../api.service */
      "yTNM");
      /* harmony import */


      var _ionic_storage__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @ionic/storage */
      "e8h1");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @angular/forms */
      "3Pt+");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! @ionic/angular */
      "TEn/");
      /* harmony import */


      var _ionic_native_camera_ngx__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! @ionic-native/camera/ngx */
      "a/9d");
      /* harmony import */


      var _ionic_native_file_ngx__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! @ionic-native/file/ngx */
      "FAH8");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");

      var AddadmissionPage = /*#__PURE__*/function () {
        function AddadmissionPage(storage, apiService, actionSheetController, file, camera, cf, alertController, router, loadingController, location, menuCtrl) {
          _classCallCheck(this, AddadmissionPage);

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
          this.step = 'step-1';
          this.value = 'personal_info';
          this.isOtherInfoEnabled = false;
          this.isImagesEnabled = false;
          this.isDisabled = false;
          this.isLoggedIn = false;
          this.todays_date = new Date().toJSON().split('T')[0];
          this.accordion_expanded = false;
          this.isApproved = false;
        }

        _createClass(AddadmissionPage, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            this.menuCtrl.enable(false);
            this.dayCareRegForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormGroup"]({
              branch_id: new _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].required]),
              program: new _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].pattern(/^[a-zA-z ]+$/)]),
              timings: new _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormControl"](''),
              child_name: new _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].pattern(/^[a-zA-Z\. ]+$/)]),
              pet_name: new _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].pattern(/^[a-zA-z ]+$/)]),
              gender: new _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].required]),
              d_o_b: new _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].required]),
              // dob_words: new FormControl('', [Validators.required,Validators.pattern(/^[a-zA-Z ]+$/)]),
              // figures: new FormControl('', [Validators.required]),
              mobile_1: new _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].maxLength(10), _angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].minLength(10), _angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].pattern(/^[0-9]{10}$/)]),
              emailid: new _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].pattern(/^(?!\_)(?!_*_$)([0-9A-Za-z]+\.)*[a-zA-Z0-9_+-]+@([\w+-]+\.)*[\w+-]+\.[a-zA-Z]{2,4}$/)]),
              address: new _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormControl"](''),
              landmark: new _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormControl"](''),
              mother_qua: new _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormControl"](''),
              mother_hobbies: new _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].pattern(/^[a-zA-z ,]+$/)]),
              mother_work_place: new _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormControl"](''),
              mother_work_phone_num: new _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].maxLength(10), _angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].minLength(10), _angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].pattern(/^[0-9]{10}$/)]),
              mother_work_mob_num: new _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].maxLength(10), _angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].minLength(10), _angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].pattern(/^[0-9]{10}$/)]),
              father_qualification: new _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormControl"](''),
              father_hobbies: new _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].pattern(/^[a-zA-z ,]+$/)]),
              father_work_place: new _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormControl"](''),
              father_work_phone_num: new _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].maxLength(10), _angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].minLength(10), _angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].pattern(/^[0-9]{10}$/)]),
              father_work_mob_num: new _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].maxLength(10), _angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].minLength(10), _angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].pattern(/^[0-9]{10}$/)]),
              sibling_name: new _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].pattern(/^[a-zA-Z\. ]+$/)]),
              sibling_age: new _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormControl"](''),
              sibling_school: new _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormControl"](''),
              emg_name: new _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].pattern(/^[a-zA-Z\. ]+$/)]),
              emg_contact_rel: new _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].pattern(/^[a-zA-z ]+$/)]),
              emg_contact_phone: new _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].maxLength(10), _angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].minLength(10), _angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].pattern(/^[0-9]{10}$/)]),
              household_name: new _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].pattern(/^[a-zA-Z\. ]+$/)]),
              household_rel: new _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].pattern(/^[a-zA-z ]+$/)]),
              household_num: new _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].maxLength(10), _angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].minLength(10), _angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].pattern(/^[0-9]{10}$/)])
            });
          }
        }, {
          key: "toggleForm",
          value: function toggleForm(stepToActivate) {
            this.step = 'step-' + stepToActivate;
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
          key: "segmentChanged",
          value: function segmentChanged(ev) {
            this.value = ev.detail.value;
            console.log('Segment changed', ev);
          }
        }, {
          key: "goToForm",
          value: function goToForm(value) {
            if (value === 'other_info') {
              if (this.branch_id.valid == false) {
                this.apiService.presentToast('Please select center', 2000);
              }

              if (this.program.valid == false) {
                this.apiService.presentToast('Please enter valid program', 2000);
              } else if (this.timings.valid == false) {
                this.apiService.presentToast('Please enter valid timing', 2000);
              } else if (this.child_name.valid == false) {
                this.apiService.presentToast('Please enter valid child name', 2000);
              } else if (this.pet_name.valid == false) {
                this.apiService.presentToast('Please enter valid pet name', 2000);
              } else if (this.gender.valid == false) {
                this.apiService.presentToast('Please select gender', 2000);
              } else if (this.d_o_b.valid == false) {
                this.apiService.presentToast('Please enter valid date of birth', 2000);
              } // } else if (this.dob_words.valid == false) {
              //   this.apiService.presentToast(
              //     'Please enter valid date of birth in words',
              //     2000
              //   );
              // }
              // else if (this.figures.valid == false) {
              //   this.apiService.presentToast(
              //     'Please enter valid date of birth in figures',
              //     2000
              //   );
              // }
              else if (this.mobile_1.valid == false) {
                this.apiService.presentToast('Please enter valid residence phone number', 2000);
              } else if (this.emailid.valid == false) {
                this.apiService.presentToast('Please enter valid email', 2000);
              } else if (this.address.valid == false) {
                this.apiService.presentToast('Please enter valid address', 2000);
              } else if (this.landmark.valid == false) {
                this.apiService.presentToast('Please enter valid landmark', 2000);
              } else if (this.mother_qua.valid == false) {
                this.apiService.presentToast("Please enter valid mother's qualification", 2000);
              } else if (this.mother_hobbies.valid == false) {
                this.apiService.presentToast("Please enter valid mother's hobbies", 2000);
              } else if (this.mother_work_place.valid == false) {
                this.apiService.presentToast("Please enter valid mother's work place", 2000);
              } else if (this.mother_work_phone_num.valid == false) {
                this.apiService.presentToast("Please enter valid mother's work phone number", 2000);
              } else if (this.mother_work_mob_num.valid == false) {
                this.apiService.presentToast("Please enter valid mother's work mobile number", 2000);
              } else if (this.father_qualification.valid == false) {
                this.apiService.presentToast("Please enter valid father's qualification", 2000);
              } else if (this.father_hobbies.valid == false) {
                this.apiService.presentToast("Please enter valid father's hobbies", 2000);
              } else if (this.father_work_place.valid == false) {
                this.apiService.presentToast("Please enter valid father's work place", 2000);
              } else if (this.father_work_phone_num.valid == false) {
                this.apiService.presentToast("Please enter valid father's work phone number", 2000);
              } else if (this.father_work_mob_num.valid == false) {
                this.apiService.presentToast("Please enter valid father's work mobile number", 2000);
              } else {
                this.value = value;
                this.isOtherInfoEnabled = true;
              }
            } else if (value === 'images') {
              if (this.sibling_name.valid == false) {
                this.apiService.presentToast('Please enter valid sibling name', 2000);
              } else if (this.sibling_age.valid == false) {
                this.apiService.presentToast("Please enter valid sibling's age", 2000);
              } else if (this.sibling_school.valid == false) {
                this.apiService.presentToast("Please enter valid sibling's school", 2000);
              } else if (this.emg_name.valid == false) {
                this.apiService.presentToast("Please enter valid emergency contact's name", 2000);
              } else if (this.emg_contact_rel.valid == false) {
                this.apiService.presentToast("Please enter valid emergency contact's relation", 2000);
              } else if (this.emg_contact_phone.valid == false) {
                this.apiService.presentToast("Please enter valid emergency contact's phone number", 2000);
              } else if (this.household_name.valid == false) {
                this.apiService.presentToast("Please enter valid name of other member's of household ", 2000);
              } else if (this.household_rel.valid == false) {
                this.apiService.presentToast("Please enter valid relation of other member's of household", 2000);
              } else if (this.household_num.valid == false) {
                this.apiService.presentToast("Please enter valid number of other member's of household", 2000);
              } else {
                this.isImagesEnabled = true;
                this.value = value;
              }
            }

            this.myContent.scrollToTop(700);
          }
        }, {
          key: "onSubmit",
          value: function onSubmit(body) {
            var _this = this;

            this.presentLoading();
            console.log(body);
            console.log('body', body);
            var formData = new FormData();
            formData.append('branch_id', body['branch_id']);
            formData.append('program', body['program']);
            formData.append('timings', body['timings']);
            formData.append('child_name', body['child_name']);
            formData.append('pet_name', body['pet_name']);
            formData.append('gender', body['gender']);
            formData.append('d_o_b', body['d_o_b']); //formData.append('dob_words', body['dob_words']);

            formData.append('figures', '');
            formData.append('mobile_1', body['mobile_1']);
            formData.append('emailid', body['emailid']);

            if (body['address']) {
              var address = body['address'];
            } else {
              var address = '';
            }

            if (body['landmark']) {
              var landmark = body['landmark'];
            } else {
              var landmark = '';
            }

            if (body['mother_qua']) {
              var mother_qua = body['mother_qua'];
            } else {
              var mother_qua = '';
            }

            if (body['mother_hobbies']) {
              var mother_hobbies = body['mother_hobbies'];
            } else {
              var mother_hobbies = '';
            }

            if (body['mother_work_place']) {
              var mother_work_place = body['mother_work_place'];
            } else {
              var mother_work_place = '';
            }

            if (body['mother_work_phone_num']) {
              var mother_work_phone_num = body['mother_work_phone_num'];
            } else {
              var mother_work_phone_num = '';
            }

            if (body['mother_work_mob_num']) {
              var mother_work_mob_num = body['mother_work_mob_num'];
            } else {
              var mother_work_mob_num = '';
            }

            if (body['father_qualification']) {
              var father_qualification = body['father_qualification'];
            } else {
              var father_qualification = '';
            }

            if (body['father_hobbies']) {
              var father_hobbies = body['father_hobbies'];
            } else {
              var father_hobbies = '';
            }

            if (body['father_work_place']) {
              var father_work_place = body['father_work_place'];
            } else {
              var father_work_place = '';
            }

            if (body['father_work_phone_num']) {
              var father_work_phone_num = body['father_work_phone_num'];
            } else {
              var father_work_phone_num = '';
            }

            if (body['father_work_mob_num']) {
              var father_work_mob_num = body['father_work_mob_num'];
            } else {
              var father_work_mob_num = '';
            }

            if (body['sibling_name']) {
              var sibling_name = body['sibling_name'];
            } else {
              var sibling_name = '';
            }

            if (body['sibling_age']) {
              var sibling_age = body['sibling_age'];
            } else {
              var sibling_age = '';
            }

            if (body['sibling_school']) {
              var sibling_school = body['sibling_school'];
            } else {
              var sibling_school = '';
            }

            if (body['household_name']) {
              var household_name = body['household_name'];
            } else {
              var household_name = '';
            }

            if (body['household_rel']) {
              var household_rel = body['household_rel'];
            } else {
              var household_rel = '';
            }

            if (body['household_num']) {
              var household_num = body['household_num'];
            } else {
              var household_num = '';
            }

            formData.append('address', address);
            formData.append('landmark', landmark);
            formData.append('mother_qua', mother_qua);
            formData.append('mother_hobbies', mother_hobbies);
            formData.append('mother_work_place', mother_work_place);
            formData.append('mother_work_phone_num', mother_work_phone_num);
            formData.append('mother_work_mob_num', mother_work_mob_num);
            formData.append('father_qualification', father_qualification);
            formData.append('father_hobbies', father_hobbies);
            formData.append('father_work_place', father_work_place);
            formData.append('father_work_phone_num', father_work_phone_num);
            formData.append('father_work_mob_num', father_work_mob_num);
            formData.append('sibling_name', sibling_name);
            formData.append('sibling_age', sibling_age);
            formData.append('sibling_school', sibling_school);
            formData.append('emg_name', body['emg_name']);
            formData.append('emg_contact_rel', body['emg_contact_rel']);
            formData.append('emg_contact_phone', body['emg_contact_phone']);
            formData.append('household_name', household_name);
            formData.append('household_rel', household_rel);
            formData.append('household_num', household_num);

            if (this.isDataPresent) {
              formData.append('id', this.id);
              formData.append('userid', this.userid);
              formData.append('old_img[]', this.childioldmg);
              formData.append('old_img[]', this.motheroldimg);
              formData.append('old_img[]', this.fatheroldimg);
              formData.append('old_img[]', this.guardianoldimg);

              if (this.childimgBlob) {
                formData.append('image[]', this.childimgBlob, this.child_file_name);
              } else {
                formData.append('image[]', '');
              }

              if (this.motherimgBlob) {
                formData.append('image[]', this.motherimgBlob, this.mother_file_name);
              } else {
                formData.append('image[]', '');
              }

              if (this.fatherimgBlob) {
                formData.append('image[]', this.fatherimgBlob, this.father_file_name);
              } else {
                formData.append('image[]', '');
              }

              if (this.guardianimgBlob) {
                formData.append('image[]', this.guardianimgBlob, this.guardian_file_name);
              } else {
                formData.append('image[]', '');
              }

              this.apiService.updateDaycareRegStep1(formData).subscribe(function (data) {
                console.log('data', data);

                _this.loadingController.dismiss();

                _this.presentAlert('Daycare registration updated successfully');

                console.log(data);
                _this.childbase64Image = '';
                _this.fatherbase64Image = '';
                _this.motherbase64Image = '';
                _this.guardianbase64Image = '';
                _this.childimgBlob = null;
                _this.fatherimgBlob = null;
                _this.motherimgBlob = null;
                _this.guardianimgBlob = null;
              }, function (err) {
                console.log(err);

                _this.loadingController.dismiss(); // this.apiService.presentToast(err.error, 2000);


                _this.apiService.presentToast("some fields are missing", 2000);
              });
            } else {
              if (this.childimgBlob) {
                formData.append('image[]', this.childimgBlob, this.child_file_name);
              }

              if (this.motherimgBlob) {
                formData.append('image[]', this.motherimgBlob, this.mother_file_name);
              }

              if (this.fatherimgBlob) {
                formData.append('image[]', this.fatherimgBlob, this.father_file_name);
              }

              if (this.guardianimgBlob) {
                formData.append('image[]', this.guardianimgBlob, this.guardian_file_name);
              }

              this.apiService.daycareRegistration(formData).subscribe(function (data) {
                console.log('data', data);

                _this.loadingController.dismiss();

                _this.presentAlert('Daycare registration submitted successfully');

                alert("Please Wait until your registration is approved. We will contact you");
                console.log(data);
                _this.childbase64Image = '';
                _this.fatherbase64Image = '';
                _this.motherbase64Image = '';
                _this.guardianbase64Image = '';
                _this.childimgBlob = null;
                _this.fatherimgBlob = null;
                _this.motherimgBlob = null;
                _this.guardianimgBlob = null;
              }, function (err) {
                console.log(err);

                _this.loadingController.dismiss();

                _this.apiService.presentToast("some fields are missing", 2000); // this.apiService.presentToast(err.error, 2000);

              });
            }
          }
        }, {
          key: "ionViewWillEnter",
          value: function ionViewWillEnter() {
            var _this2 = this;

            if (this.menuCtrl.isEnabled) {
              console.log('hi');
              this.menuCtrl.swipeGesture(false);
            }

            this.presentLoading().then(function () {
              _this2.storage.get('user').then(function (data) {
                if (data) {
                  _this2.isLoggedIn = true;
                  var user = JSON.parse(data);
                  _this2.userid = user.id;

                  _this2.storage.get('userType').then(function (userType) {
                    if (userType == 'Daycare') {
                      _this2.userType = 'Daycare';

                      _this2.apiService.userDetails(user.id, userType).then(function (data) {
                        console.log('fetchDaycareStepOne', data.data);
                        _this2.fetchDaycareStepOne = JSON.parse(data.data);

                        if (_this2.fetchDaycareStepOne) {
                          if (_this2.fetchDaycareStepOne.status == 'Active' && _this2.fetchDaycareStepOne.Approve_status == 'Active') {
                            _this2.isApproved = true;
                          }

                          _this2.isDisabled = true;
                          _this2.id = _this2.fetchDaycareStepOne.id;

                          _this2.dayCareRegForm.patchValue({
                            branch_id: _this2.fetchDaycareStepOne.branch_id,
                            program: _this2.fetchDaycareStepOne.program,
                            timings: _this2.fetchDaycareStepOne.timings,
                            child_name: _this2.fetchDaycareStepOne.child_name,
                            pet_name: _this2.fetchDaycareStepOne.pet_name,
                            gender: _this2.fetchDaycareStepOne.gender,
                            d_o_b: new Date(_this2.fetchDaycareStepOne.dob).toISOString(),
                            // dob_words: this.fetchDaycareStepOne.dob_words,
                            // figures: this.fetchDaycareStepOne.figures,
                            mobile_1: _this2.fetchDaycareStepOne.home_phone,
                            emailid: _this2.fetchDaycareStepOne.emailid,
                            address: _this2.fetchDaycareStepOne.address,
                            landmark: _this2.fetchDaycareStepOne.landmark,
                            mother_qua: _this2.fetchDaycareStepOne.mother_qualification,
                            mother_hobbies: _this2.fetchDaycareStepOne.mother_hobbies,
                            mother_work_place: _this2.fetchDaycareStepOne.mother_work_place,
                            mother_work_phone_num: _this2.fetchDaycareStepOne.mother_work_phone,
                            mother_work_mob_num: _this2.fetchDaycareStepOne.mother_mobile_number,
                            father_qualification: _this2.fetchDaycareStepOne.father_qualifiaction,
                            father_hobbies: _this2.fetchDaycareStepOne.father_hobbies,
                            father_work_place: _this2.fetchDaycareStepOne.father_work_place,
                            father_work_phone_num: _this2.fetchDaycareStepOne.father_work_phone,
                            father_work_mob_num: _this2.fetchDaycareStepOne.father_mobile_number,
                            sibling_name: _this2.fetchDaycareStepOne.child_name1,
                            sibling_age: _this2.fetchDaycareStepOne.child_age1,
                            sibling_school: _this2.fetchDaycareStepOne.child_school1,
                            emg_name: _this2.fetchDaycareStepOne.emg_name1,
                            emg_contact_rel: _this2.fetchDaycareStepOne.emg_relationship1,
                            emg_contact_phone: _this2.fetchDaycareStepOne.emg_mobile1,
                            household_name: _this2.fetchDaycareStepOne.other_name1,
                            household_rel: _this2.fetchDaycareStepOne.other_relationship1,
                            household_num: _this2.fetchDaycareStepOne.other_mobile1
                          });

                          _this2.childimg = _this2.fetchDaycareStepOne.child_img;
                          _this2.motherimg = _this2.fetchDaycareStepOne.mother_img;
                          _this2.fatherimg = _this2.fetchDaycareStepOne.father_img;
                          _this2.guardianimg = _this2.fetchDaycareStepOne.guardian_img;
                          _this2.childioldmg = _this2.fetchDaycareStepOne.child_image;
                          _this2.motheroldimg = _this2.fetchDaycareStepOne.mother_image;
                          _this2.fatheroldimg = _this2.fetchDaycareStepOne.father_image;
                          _this2.guardianoldimg = _this2.fetchDaycareStepOne.guardian_image;
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

                  _this2.dayCareRegForm.reset();
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
            return this.dayCareRegForm.get('branch_id');
          }
        }, {
          key: "program",
          get: function get() {
            return this.dayCareRegForm.get('program');
          }
        }, {
          key: "timings",
          get: function get() {
            return this.dayCareRegForm.get('timings');
          }
        }, {
          key: "child_name",
          get: function get() {
            return this.dayCareRegForm.get('child_name');
          }
        }, {
          key: "pet_name",
          get: function get() {
            return this.dayCareRegForm.get('pet_name');
          }
        }, {
          key: "gender",
          get: function get() {
            return this.dayCareRegForm.get('gender');
          }
        }, {
          key: "d_o_b",
          get: function get() {
            return this.dayCareRegForm.get('d_o_b');
          } // get dob_words() {
          //   return this.dayCareRegForm.get('dob_words');
          // }
          // get figures() {
          //   return this.dayCareRegForm.get('figures');
          // }

        }, {
          key: "mobile_1",
          get: function get() {
            return this.dayCareRegForm.get('mobile_1');
          }
        }, {
          key: "emailid",
          get: function get() {
            return this.dayCareRegForm.get('emailid');
          }
        }, {
          key: "address",
          get: function get() {
            return this.dayCareRegForm.get('address');
          }
        }, {
          key: "landmark",
          get: function get() {
            return this.dayCareRegForm.get('landmark');
          }
        }, {
          key: "mother_qua",
          get: function get() {
            return this.dayCareRegForm.get('mother_qua');
          }
        }, {
          key: "mother_hobbies",
          get: function get() {
            return this.dayCareRegForm.get('mother_hobbies');
          }
        }, {
          key: "mother_work_place",
          get: function get() {
            return this.dayCareRegForm.get('mother_work_place');
          }
        }, {
          key: "mother_work_phone_num",
          get: function get() {
            return this.dayCareRegForm.get('mother_work_phone_num');
          }
        }, {
          key: "mother_work_mob_num",
          get: function get() {
            return this.dayCareRegForm.get('mother_work_mob_num');
          }
        }, {
          key: "father_qualification",
          get: function get() {
            return this.dayCareRegForm.get('father_qualification');
          }
        }, {
          key: "father_hobbies",
          get: function get() {
            return this.dayCareRegForm.get('father_hobbies');
          }
        }, {
          key: "father_work_place",
          get: function get() {
            return this.dayCareRegForm.get('father_work_place');
          }
        }, {
          key: "father_work_phone_num",
          get: function get() {
            return this.dayCareRegForm.get('father_work_phone_num');
          }
        }, {
          key: "father_work_mob_num",
          get: function get() {
            return this.dayCareRegForm.get('father_work_mob_num');
          }
        }, {
          key: "sibling_name",
          get: function get() {
            return this.dayCareRegForm.get('sibling_name');
          }
        }, {
          key: "sibling_age",
          get: function get() {
            return this.dayCareRegForm.get('sibling_age');
          }
        }, {
          key: "sibling_school",
          get: function get() {
            return this.dayCareRegForm.get('sibling_school');
          }
        }, {
          key: "emg_name",
          get: function get() {
            return this.dayCareRegForm.get('emg_name');
          }
        }, {
          key: "emg_contact_rel",
          get: function get() {
            return this.dayCareRegForm.get('emg_contact_rel');
          }
        }, {
          key: "emg_contact_phone",
          get: function get() {
            return this.dayCareRegForm.get('emg_contact_phone');
          }
        }, {
          key: "household_name",
          get: function get() {
            return this.dayCareRegForm.get('household_name');
          }
        }, {
          key: "household_rel",
          get: function get() {
            return this.dayCareRegForm.get('household_rel');
          }
        }, {
          key: "household_num",
          get: function get() {
            return this.dayCareRegForm.get('household_num');
          }
        }, {
          key: "presentActionSheet",
          value: function presentActionSheet(type) {
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
                          if (type == 'child') {
                            _this3.takePicture('child');
                          } else if (type == 'mother') {
                            _this3.takePicture('mother');
                          } else if (type == 'father') {
                            _this3.takePicture('father');
                          } else if (type == 'guardian') {
                            _this3.takePicture('guardian');
                          }
                        }
                      }, {
                        text: 'Choose photo from Gallery',
                        icon: 'images-outline',
                        handler: function handler() {
                          if (type == 'child') {
                            _this3.openGallery('child');
                          } else if (type == 'mother') {
                            _this3.openGallery('mother');
                          } else if (type == 'father') {
                            _this3.openGallery('father');
                          } else if (type == 'guardian') {
                            _this3.openGallery('guardian');
                          }
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

                  if (type == 'child') {
                    _this4.child_file_name = file.name;
                    _this4.childbase64Image = window.Ionic.WebView.convertFileSrc(imageData);
                  } else if (type == 'mother') {
                    _this4.mother_file_name = file.name;
                    _this4.motherbase64Image = window.Ionic.WebView.convertFileSrc(imageData);
                  } else if (type == 'father') {
                    _this4.father_file_name = file.name;
                    _this4.fatherbase64Image = window.Ionic.WebView.convertFileSrc(imageData);
                  } else if (type == 'guardian') {
                    _this4.guardian_file_name = file.name;
                    _this4.guardianbase64Image = window.Ionic.WebView.convertFileSrc(imageData);
                  }

                  _this4.cf.detectChanges();

                  _this4.readFile(file, type);
                });
              });
            }, function (err) {
              _this4.childbase64Image = null;
              _this4.motherbase64Image = null;
              _this4.fatherbase64Image = null;
              _this4.guardianbase64Image = null;
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
                  console.log(file);

                  if (file.type == 'image/jpeg') {
                    var filename = file.name;
                    var file_ext = filename.split('.').slice(-1).join('.');
                    var filename_wo_ext = filename.split('.').slice(0, -1).join('.');
                    _this5.modified_filename = filename_wo_ext + file.lastModified.toString() + '.' + file_ext;
                    console.log('this.child_file_name', _this5.modified_filename);
                  } else {
                    _this5.modified_filename = file.name;
                  }

                  if (type == 'child') {
                    _this5.child_file_name = _this5.modified_filename;
                    _this5.childbase64Image = window.Ionic.WebView.convertFileSrc(imageData);
                  } else if (type == 'mother') {
                    _this5.mother_file_name = _this5.modified_filename;
                    _this5.motherbase64Image = window.Ionic.WebView.convertFileSrc(imageData);
                  } else if (type == 'father') {
                    _this5.father_file_name = _this5.modified_filename;
                    _this5.fatherbase64Image = window.Ionic.WebView.convertFileSrc(imageData);
                  } else if (type == 'guardian') {
                    _this5.guardian_file_name = _this5.modified_filename;
                    _this5.guardianbase64Image = window.Ionic.WebView.convertFileSrc(imageData);
                  }

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
              if (type == 'child') {
                _this6.childimgBlob = new Blob([reader.result], {
                  type: file.type
                });
              } else if (type == 'mother') {
                _this6.motherimgBlob = new Blob([reader.result], {
                  type: file.type
                });
              } else if (type == 'father') {
                _this6.fatherimgBlob = new Blob([reader.result], {
                  type: file.type
                });
              } else if (type == 'guardian') {
                _this6.guardianimgBlob = new Blob([reader.result], {
                  type: file.type
                });
              }

              console.log('name', file.name);
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
                          // this.router.navigate(['mobilelogin'])
                          if (_this7.isLoggedIn) {
                            if (_this7.userType == 'Daycare') {
                              _this7.router.navigate(['childprofile']);
                            } else {
                              _this7.storage.set('type', 'login').then(function (_) {
                                _this7.router.navigate(['login']);
                              });
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
          key: "toggle_accordion",
          value: function toggle_accordion() {
            this.accordion_expanded = this.accordion_expanded === false;
          }
        }, {
          key: "goBack",
          value: function goBack() {
            console.log(this.isLoggedIn, this.isApproved, this.userType);

            if (this.isLoggedIn) {
              if (this.isApproved) {
                this.router.navigate(['quicktour']);
              } else {
                if (this.userType == 'Daycare') {
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
          key: "doRefresh",
          value: function doRefresh(event) {
            var _this8 = this;

            this.menuCtrl.enable(false);
            this.presentLoading().then(function () {
              _this8.storage.get('user').then(function (data) {
                if (data) {
                  _this8.isLoggedIn = true;
                  var user = JSON.parse(data);
                  _this8.userid = user.id;

                  _this8.storage.get('userType').then(function (userType) {
                    console.log('userType');

                    if (userType == 'Daycare') {
                      _this8.apiService.userDetails(user.id, userType).then(function (data) {
                        event.target.complete();
                        console.log('fetchDaycareStepOne', data.data);
                        _this8.fetchDaycareStepOne = JSON.parse(data.data);

                        if (_this8.fetchDaycareStepOne) {
                          if (_this8.fetchDaycareStepOne.status == 'Active' && _this8.fetchDaycareStepOne.Approve_status == 'Active') {
                            _this8.isApproved = true;
                          }

                          _this8.isDisabled = true;
                          _this8.id = _this8.fetchDaycareStepOne.id;

                          _this8.dayCareRegForm.patchValue({
                            branch_id: _this8.fetchDaycareStepOne.branch_id,
                            program: _this8.fetchDaycareStepOne.program,
                            timings: _this8.fetchDaycareStepOne.timings,
                            child_name: _this8.fetchDaycareStepOne.child_name,
                            pet_name: _this8.fetchDaycareStepOne.pet_name,
                            gender: _this8.fetchDaycareStepOne.gender,
                            d_o_b: new Date(_this8.fetchDaycareStepOne.dob).toISOString(),
                            // dob_words: this.fetchDaycareStepOne.dob_words,
                            // figures: this.fetchDaycareStepOne.figures,
                            mobile_1: _this8.fetchDaycareStepOne.home_phone,
                            emailid: _this8.fetchDaycareStepOne.emailid,
                            address: _this8.fetchDaycareStepOne.address,
                            landmark: _this8.fetchDaycareStepOne.landmark,
                            mother_qua: _this8.fetchDaycareStepOne.mother_qualification,
                            mother_hobbies: _this8.fetchDaycareStepOne.mother_hobbies,
                            mother_work_place: _this8.fetchDaycareStepOne.mother_work_place,
                            mother_work_phone_num: _this8.fetchDaycareStepOne.mother_work_phone,
                            mother_work_mob_num: _this8.fetchDaycareStepOne.mother_mobile_number,
                            father_qualification: _this8.fetchDaycareStepOne.father_qualifiaction,
                            father_hobbies: _this8.fetchDaycareStepOne.father_hobbies,
                            father_work_place: _this8.fetchDaycareStepOne.father_work_place,
                            father_work_phone_num: _this8.fetchDaycareStepOne.father_work_phone,
                            father_work_mob_num: _this8.fetchDaycareStepOne.father_mobile_number,
                            sibling_name: _this8.fetchDaycareStepOne.child_name1,
                            sibling_age: _this8.fetchDaycareStepOne.child_age1,
                            sibling_school: _this8.fetchDaycareStepOne.child_school1,
                            emg_name: _this8.fetchDaycareStepOne.emg_name1,
                            emg_contact_rel: _this8.fetchDaycareStepOne.emg_relationship1,
                            emg_contact_phone: _this8.fetchDaycareStepOne.emg_mobile1,
                            household_name: _this8.fetchDaycareStepOne.other_name1,
                            household_rel: _this8.fetchDaycareStepOne.other_relationship1,
                            household_num: _this8.fetchDaycareStepOne.other_mobile1
                          });

                          _this8.childimg = _this8.fetchDaycareStepOne.child_img;
                          _this8.motherimg = _this8.fetchDaycareStepOne.mother_img;
                          _this8.fatherimg = _this8.fetchDaycareStepOne.father_img;
                          _this8.guardianimg = _this8.fetchDaycareStepOne.guardian_img;
                          _this8.childioldmg = _this8.fetchDaycareStepOne.child_image;
                          _this8.motheroldimg = _this8.fetchDaycareStepOne.mother_image;
                          _this8.fatheroldimg = _this8.fetchDaycareStepOne.father_image;
                          _this8.guardianoldimg = _this8.fetchDaycareStepOne.guardian_image;
                          _this8.isDataPresent = true;

                          _this8.loadingController.dismiss();
                        } else {
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

                  _this8.dayCareRegForm.reset();
                }
              });

              event.target.complete();

              _this8.apiService.getBranches().then(function (data) {
                _this8.branches = JSON.parse(data.data);
              });
            });
          }
        }]);

        return AddadmissionPage;
      }();

      AddadmissionPage.ctorParameters = function () {
        return [{
          type: _ionic_storage__WEBPACK_IMPORTED_MODULE_5__["Storage"]
        }, {
          type: _api_service__WEBPACK_IMPORTED_MODULE_4__["ApiService"]
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_8__["ActionSheetController"]
        }, {
          type: _ionic_native_file_ngx__WEBPACK_IMPORTED_MODULE_10__["File"]
        }, {
          type: _ionic_native_camera_ngx__WEBPACK_IMPORTED_MODULE_9__["Camera"]
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_7__["ChangeDetectorRef"]
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_8__["AlertController"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_8__["LoadingController"]
        }, {
          type: _angular_common__WEBPACK_IMPORTED_MODULE_11__["Location"]
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_8__["MenuController"]
        }];
      };

      AddadmissionPage.propDecorators = {
        myContent: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_7__["ViewChild"],
          args: [_ionic_angular__WEBPACK_IMPORTED_MODULE_8__["IonContent"], {
            read: _ionic_angular__WEBPACK_IMPORTED_MODULE_8__["IonContent"],
            "static": false
          }]
        }]
      };
      AddadmissionPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_7__["Component"])({
        selector: 'app-addadmission',
        template: _raw_loader_addadmission_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_addadmission_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
      })], AddadmissionPage);
      /***/
    },

    /***/
    "qhoA":
    /*!*****************************************************!*\
      !*** ./src/app/addadmission/addadmission.module.ts ***!
      \*****************************************************/

    /*! exports provided: AddadmissionPageModule */

    /***/
    function qhoA(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AddadmissionPageModule", function () {
        return AddadmissionPageModule;
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


      var _addadmission_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./addadmission-routing.module */
      "S+fq");
      /* harmony import */


      var _addadmission_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./addadmission.page */
      "aM1N");

      var AddadmissionPageModule = /*#__PURE__*/_createClass(function AddadmissionPageModule() {
        _classCallCheck(this, AddadmissionPageModule);
      });

      AddadmissionPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _addadmission_routing_module__WEBPACK_IMPORTED_MODULE_5__["AddadmissionPageRoutingModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"]],
        declarations: [_addadmission_page__WEBPACK_IMPORTED_MODULE_6__["AddadmissionPage"]]
      })], AddadmissionPageModule);
      /***/
    }
  }]);
})();
//# sourceMappingURL=addadmission-addadmission-module-es5.js.map