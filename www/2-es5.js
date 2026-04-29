(function () {
  function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return e; }; var t, e = {}, r = Object.prototype, n = r.hasOwnProperty, o = Object.defineProperty || function (t, e, r) { t[e] = r.value; }, i = "function" == typeof Symbol ? Symbol : {}, a = i.iterator || "@@iterator", c = i.asyncIterator || "@@asyncIterator", u = i.toStringTag || "@@toStringTag"; function define(t, e, r) { return Object.defineProperty(t, e, { value: r, enumerable: !0, configurable: !0, writable: !0 }), t[e]; } try { define({}, ""); } catch (t) { define = function define(t, e, r) { return t[e] = r; }; } function wrap(t, e, r, n) { var i = e && e.prototype instanceof Generator ? e : Generator, a = Object.create(i.prototype), c = new Context(n || []); return o(a, "_invoke", { value: makeInvokeMethod(t, r, c) }), a; } function tryCatch(t, e, r) { try { return { type: "normal", arg: t.call(e, r) }; } catch (t) { return { type: "throw", arg: t }; } } e.wrap = wrap; var h = "suspendedStart", l = "suspendedYield", f = "executing", s = "completed", y = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var p = {}; define(p, a, function () { return this; }); var d = Object.getPrototypeOf, v = d && d(d(values([]))); v && v !== r && n.call(v, a) && (p = v); var g = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(p); function defineIteratorMethods(t) { ["next", "throw", "return"].forEach(function (e) { define(t, e, function (t) { return this._invoke(e, t); }); }); } function AsyncIterator(t, e) { function invoke(r, o, i, a) { var c = tryCatch(t[r], t, o); if ("throw" !== c.type) { var u = c.arg, h = u.value; return h && "object" == typeof h && n.call(h, "__await") ? e.resolve(h.__await).then(function (t) { invoke("next", t, i, a); }, function (t) { invoke("throw", t, i, a); }) : e.resolve(h).then(function (t) { u.value = t, i(u); }, function (t) { return invoke("throw", t, i, a); }); } a(c.arg); } var r; o(this, "_invoke", { value: function value(t, n) { function callInvokeWithMethodAndArg() { return new e(function (e, r) { invoke(t, n, e, r); }); } return r = r ? r.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); } }); } function makeInvokeMethod(e, r, n) { var o = h; return function (i, a) { if (o === f) throw new Error("Generator is already running"); if (o === s) { if ("throw" === i) throw a; return { value: t, done: !0 }; } for (n.method = i, n.arg = a;;) { var c = n.delegate; if (c) { var u = maybeInvokeDelegate(c, n); if (u) { if (u === y) continue; return u; } } if ("next" === n.method) n.sent = n._sent = n.arg;else if ("throw" === n.method) { if (o === h) throw o = s, n.arg; n.dispatchException(n.arg); } else "return" === n.method && n.abrupt("return", n.arg); o = f; var p = tryCatch(e, r, n); if ("normal" === p.type) { if (o = n.done ? s : l, p.arg === y) continue; return { value: p.arg, done: n.done }; } "throw" === p.type && (o = s, n.method = "throw", n.arg = p.arg); } }; } function maybeInvokeDelegate(e, r) { var n = r.method, o = e.iterator[n]; if (o === t) return r.delegate = null, "throw" === n && e.iterator["return"] && (r.method = "return", r.arg = t, maybeInvokeDelegate(e, r), "throw" === r.method) || "return" !== n && (r.method = "throw", r.arg = new TypeError("The iterator does not provide a '" + n + "' method")), y; var i = tryCatch(o, e.iterator, r.arg); if ("throw" === i.type) return r.method = "throw", r.arg = i.arg, r.delegate = null, y; var a = i.arg; return a ? a.done ? (r[e.resultName] = a.value, r.next = e.nextLoc, "return" !== r.method && (r.method = "next", r.arg = t), r.delegate = null, y) : a : (r.method = "throw", r.arg = new TypeError("iterator result is not an object"), r.delegate = null, y); } function pushTryEntry(t) { var e = { tryLoc: t[0] }; 1 in t && (e.catchLoc = t[1]), 2 in t && (e.finallyLoc = t[2], e.afterLoc = t[3]), this.tryEntries.push(e); } function resetTryEntry(t) { var e = t.completion || {}; e.type = "normal", delete e.arg, t.completion = e; } function Context(t) { this.tryEntries = [{ tryLoc: "root" }], t.forEach(pushTryEntry, this), this.reset(!0); } function values(e) { if (e || "" === e) { var r = e[a]; if (r) return r.call(e); if ("function" == typeof e.next) return e; if (!isNaN(e.length)) { var o = -1, i = function next() { for (; ++o < e.length;) if (n.call(e, o)) return next.value = e[o], next.done = !1, next; return next.value = t, next.done = !0, next; }; return i.next = i; } } throw new TypeError(typeof e + " is not iterable"); } return GeneratorFunction.prototype = GeneratorFunctionPrototype, o(g, "constructor", { value: GeneratorFunctionPrototype, configurable: !0 }), o(GeneratorFunctionPrototype, "constructor", { value: GeneratorFunction, configurable: !0 }), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, u, "GeneratorFunction"), e.isGeneratorFunction = function (t) { var e = "function" == typeof t && t.constructor; return !!e && (e === GeneratorFunction || "GeneratorFunction" === (e.displayName || e.name)); }, e.mark = function (t) { return Object.setPrototypeOf ? Object.setPrototypeOf(t, GeneratorFunctionPrototype) : (t.__proto__ = GeneratorFunctionPrototype, define(t, u, "GeneratorFunction")), t.prototype = Object.create(g), t; }, e.awrap = function (t) { return { __await: t }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, c, function () { return this; }), e.AsyncIterator = AsyncIterator, e.async = function (t, r, n, o, i) { void 0 === i && (i = Promise); var a = new AsyncIterator(wrap(t, r, n, o), i); return e.isGeneratorFunction(r) ? a : a.next().then(function (t) { return t.done ? t.value : a.next(); }); }, defineIteratorMethods(g), define(g, u, "Generator"), define(g, a, function () { return this; }), define(g, "toString", function () { return "[object Generator]"; }), e.keys = function (t) { var e = Object(t), r = []; for (var n in e) r.push(n); return r.reverse(), function next() { for (; r.length;) { var t = r.pop(); if (t in e) return next.value = t, next.done = !1, next; } return next.done = !0, next; }; }, e.values = values, Context.prototype = { constructor: Context, reset: function reset(e) { if (this.prev = 0, this.next = 0, this.sent = this._sent = t, this.done = !1, this.delegate = null, this.method = "next", this.arg = t, this.tryEntries.forEach(resetTryEntry), !e) for (var r in this) "t" === r.charAt(0) && n.call(this, r) && !isNaN(+r.slice(1)) && (this[r] = t); }, stop: function stop() { this.done = !0; var t = this.tryEntries[0].completion; if ("throw" === t.type) throw t.arg; return this.rval; }, dispatchException: function dispatchException(e) { if (this.done) throw e; var r = this; function handle(n, o) { return a.type = "throw", a.arg = e, r.next = n, o && (r.method = "next", r.arg = t), !!o; } for (var o = this.tryEntries.length - 1; o >= 0; --o) { var i = this.tryEntries[o], a = i.completion; if ("root" === i.tryLoc) return handle("end"); if (i.tryLoc <= this.prev) { var c = n.call(i, "catchLoc"), u = n.call(i, "finallyLoc"); if (c && u) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } else if (c) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); } else { if (!u) throw new Error("try statement without catch or finally"); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } } } }, abrupt: function abrupt(t, e) { for (var r = this.tryEntries.length - 1; r >= 0; --r) { var o = this.tryEntries[r]; if (o.tryLoc <= this.prev && n.call(o, "finallyLoc") && this.prev < o.finallyLoc) { var i = o; break; } } i && ("break" === t || "continue" === t) && i.tryLoc <= e && e <= i.finallyLoc && (i = null); var a = i ? i.completion : {}; return a.type = t, a.arg = e, i ? (this.method = "next", this.next = i.finallyLoc, y) : this.complete(a); }, complete: function complete(t, e) { if ("throw" === t.type) throw t.arg; return "break" === t.type || "continue" === t.type ? this.next = t.arg : "return" === t.type ? (this.rval = this.arg = t.arg, this.method = "return", this.next = "end") : "normal" === t.type && e && (this.next = e), y; }, finish: function finish(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.finallyLoc === t) return this.complete(r.completion, r.afterLoc), resetTryEntry(r), y; } }, "catch": function _catch(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.tryLoc === t) { var n = r.completion; if ("throw" === n.type) { var o = n.arg; resetTryEntry(r); } return o; } } throw new Error("illegal catch attempt"); }, delegateYield: function delegateYield(e, r, n) { return this.delegate = { iterator: values(e), resultName: r, nextLoc: n }, "next" === this.method && (this.arg = t), y; } }, e; }

  function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

  function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

  function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return typeof key === "symbol" ? key : String(key); }

  function _toPrimitive(input, hint) { if (typeof input !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (typeof res !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([[2], {
    /***/
    "XRr/":
    /*!***************************************************************************!*\
      !*** ./node_modules/@ionic-super-tabs/core/dist/esm/super-tab_3.entry.js ***!
      \***************************************************************************/

    /*! exports provided: super_tab, super_tabs, super_tabs_container */

    /***/
    function XRr(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "super_tab", function () {
        return SuperTabComponent;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "super_tabs", function () {
        return SuperTabsComponent;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "super_tabs_container", function () {
        return SuperTabsContainerComponent;
      });
      /* harmony import */


      var _index_a34c410e_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./index-a34c410e.js */
      "N9VD");
      /* harmony import */


      var _utils_640d2cf5_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./utils-640d2cf5.js */
      "HLkV");

      var superTabComponentCss = ":host{height:var(--super-tab-height, 100%);position:relative;display:block;overflow-x:hidden;overflow-y:auto;contain:size style;z-index:1;-ms-flex-negative:0;flex-shrink:0;-ms-flex-positive:0;flex-grow:0;width:var(--super-tab-width, 100vw);-webkit-transform:translate3d(0, 0, 0);transform:translate3d(0, 0, 0);-webkit-box-sizing:border-box;box-sizing:border-box;-ms-flex-order:-1;order:-1;-webkit-user-select:none;-webkit-touch-callout:none;-webkit-text-size-adjust:none;-webkit-tap-highlight-color:rgba(0, 0, 0, 0);-webkit-font-smoothing:antialiased}:host[noScroll]{overflow-y:hidden}ion-nav,ion-content{height:100%;max-height:100%;position:absolute}ion-nav>.ion-page,ion-content>.ion-page{position:absolute}";

      var SuperTabComponent = /*#__PURE__*/function () {
        function SuperTabComponent(hostRef) {
          _classCallCheck(this, SuperTabComponent);

          Object(_index_a34c410e_js__WEBPACK_IMPORTED_MODULE_0__["r"])(this, hostRef);
        }

        _createClass(SuperTabComponent, [{
          key: "componentDidLoad",
          value: function componentDidLoad() {
            this.checkIonContent();
          }
        }, {
          key: "componentDidUpdate",
          value: function componentDidUpdate() {
            // check for ion-content after update, in case it was dynamically loaded
            this.checkIonContent();
          }
          /**
           * Check if we have an ion-content as a child and update the `noScroll` property
           * if it's not set yet.
           */

        }, {
          key: "checkIonContent",
          value: function checkIonContent() {
            if (typeof this.noScroll !== 'boolean') {
              var ionContentEl = this.el.querySelector('ion-content');

              if (ionContentEl && ionContentEl.parentElement === this.el) {
                this.noScroll = true;
              }
            }
          }
          /**
           * Returns the root scrollable element
           */

        }, {
          key: "getRootScrollableEl",
          value: function () {
            var _getRootScrollableEl = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee() {
              var ionContent;
              return _regeneratorRuntime().wrap(function _callee$(_context) {
                while (1) switch (_context.prev = _context.next) {
                  case 0:
                    if (!(!this.noScroll && this.el.scrollHeight > this.el.clientHeight)) {
                      _context.next = 2;
                      break;
                    }

                    return _context.abrupt("return", this.el);

                  case 2:
                    ionContent = this.el.querySelector('ion-content');

                    if (!ionContent) {
                      _context.next = 5;
                      break;
                    }

                    return _context.abrupt("return", ionContent.getScrollElement());

                  case 5:
                    if (!this.noScroll) {
                      _context.next = 7;
                      break;
                    }

                    return _context.abrupt("return", null);

                  case 7:
                    return _context.abrupt("return", this.el);

                  case 8:
                  case "end":
                    return _context.stop();
                }
              }, _callee, this);
            }));

            function getRootScrollableEl() {
              return _getRootScrollableEl.apply(this, arguments);
            }

            return getRootScrollableEl;
          }()
        }, {
          key: "render",
          value: function render() {
            return Object(_index_a34c410e_js__WEBPACK_IMPORTED_MODULE_0__["h"])("slot", null);
          }
        }, {
          key: "el",
          get: function get() {
            return Object(_index_a34c410e_js__WEBPACK_IMPORTED_MODULE_0__["g"])(this);
          }
        }]);

        return SuperTabComponent;
      }();

      SuperTabComponent.style = superTabComponentCss;
      var superTabsComponentCss = ":host{height:100%;max-height:100%;display:-ms-flexbox;display:flex;-ms-flex-direction:column;flex-direction:column;overflow:hidden;z-index:1;position:relative;contain:layout size style;-ms-flex-order:-1;order:-1;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;-webkit-touch-callout:none;-webkit-text-size-adjust:none;-webkit-tap-highlight-color:rgba(0, 0, 0, 0);-webkit-font-smoothing:antialiased;-ms-touch-action:none;touch-action:none;-webkit-box-sizing:border-box;box-sizing:border-box;margin:0;padding:0}";
      var maxInitRetries = 1e3;
      /**
       * Root component that controls the other super-tab components.
       *
       * This component propagates configuration over to children and keeps track of the tabs state.
       */

      var SuperTabsComponent = /*#__PURE__*/function () {
        function SuperTabsComponent(hostRef) {
          var _this = this;

          _classCallCheck(this, SuperTabsComponent);

          Object(_index_a34c410e_js__WEBPACK_IMPORTED_MODULE_0__["r"])(this, hostRef);
          /**
           * Initial active tab index.
           * Defaults to `0`.
           *
           * @type {number}
           */

          this.activeTabIndex = 0;
          this._config = _utils_640d2cf5_js__WEBPACK_IMPORTED_MODULE_1__["D"];
          this.initAttempts = 0;
          this.initPromise = new Promise(function (resolve) {
            _this.initPromiseResolve = resolve;
          });
          this.tabChange = Object(_index_a34c410e_js__WEBPACK_IMPORTED_MODULE_0__["c"])(this, "tabChange", 7);
        }
        /**
         * Set/update the configuration
         * @param {SuperTabsConfig} config Configuration object
         */


        _createClass(SuperTabsComponent, [{
          key: "setConfig",
          value: function () {
            var _setConfig = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee2(config) {
              return _regeneratorRuntime().wrap(function _callee2$(_context2) {
                while (1) switch (_context2.prev = _context2.next) {
                  case 0:
                    this._config = Object.assign(Object.assign({}, _utils_640d2cf5_js__WEBPACK_IMPORTED_MODULE_1__["D"]), config);

                  case 1:
                  case "end":
                    return _context2.stop();
                }
              }, _callee2, this);
            }));

            function setConfig(_x) {
              return _setConfig.apply(this, arguments);
            }

            return setConfig;
          }()
        }, {
          key: "propagateConfig",
          value: function propagateConfig() {
            this.container && (this.container.config = this._config);
            this.toolbar && (this.toolbar.config = this._config);
          }
          /**
           * Set the selected tab.
           * This will move the container and the toolbar to the selected tab.
           * @param index {number} the index of the tab you want to select
           * @param [animate=true] {boolean} whether you want to animate the transition
           * @param [emit=true] {boolean} whether you want to emit tab change event
           */

        }, {
          key: "selectTab",
          value: function () {
            var _selectTab = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee3(index) {
              var animate,
                  emit,
                  lastIndex,
                  _args3 = arguments;
              return _regeneratorRuntime().wrap(function _callee3$(_context3) {
                while (1) switch (_context3.prev = _context3.next) {
                  case 0:
                    animate = _args3.length > 1 && _args3[1] !== undefined ? _args3[1] : true;
                    emit = _args3.length > 2 && _args3[2] !== undefined ? _args3[2] : true;
                    this.debug('selectTab', index, animate);
                    _context3.next = 5;
                    return this.initPromise;

                  case 5:
                    lastIndex = this.activeTabIndex;

                    if (!this.container) {
                      _context3.next = 9;
                      break;
                    }

                    _context3.next = 9;
                    return this.container.setActiveTabIndex(index, true, animate);

                  case 9:
                    if (!this.toolbar) {
                      _context3.next = 12;
                      break;
                    }

                    _context3.next = 12;
                    return this.toolbar.setActiveTab(index, true, animate);

                  case 12:
                    if (emit) {
                      this.emitTabChangeEvent(index, lastIndex);
                    }

                    this.activeTabIndex = lastIndex;

                  case 14:
                  case "end":
                    return _context3.stop();
                }
              }, _callee3, this);
            }));

            function selectTab(_x2) {
              return _selectTab.apply(this, arguments);
            }

            return selectTab;
          }()
        }, {
          key: "onConfigChange",
          value: function () {
            var _onConfigChange = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee4(config) {
              return _regeneratorRuntime().wrap(function _callee4$(_context4) {
                while (1) switch (_context4.prev = _context4.next) {
                  case 0:
                    _context4.next = 2;
                    return this.setConfig(config);

                  case 2:
                  case "end":
                    return _context4.stop();
                }
              }, _callee4, this);
            }));

            function onConfigChange(_x3) {
              return _onConfigChange.apply(this, arguments);
            }

            return onConfigChange;
          }()
        }, {
          key: "onWindowResize",
          value: function onWindowResize() {
            this.debug('onWindowResize');
            this.toolbar && this.toolbar.setSelectedTab(this.activeTabIndex);
            this.container.reindexTabs();
          }
        }, {
          key: "componentWillLoad",
          value: function () {
            var _componentWillLoad = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee5() {
              return _regeneratorRuntime().wrap(function _callee5$(_context5) {
                while (1) switch (_context5.prev = _context5.next) {
                  case 0:
                    if (!this.config) {
                      _context5.next = 3;
                      break;
                    }

                    _context5.next = 3;
                    return this.setConfig(this.config);

                  case 3:
                  case "end":
                    return _context5.stop();
                }
              }, _callee5, this);
            }));

            function componentWillLoad() {
              return _componentWillLoad.apply(this, arguments);
            }

            return componentWillLoad;
          }()
        }, {
          key: "componentDidLoad",
          value: function componentDidLoad() {
            var _this2 = this;

            this.debug('componentDidLoad'); // index children

            this.indexChildren(); // set the selected tab so the toolbar & container are aligned and in sync

            if (this.container) {
              this.container.setActiveTabIndex(this.activeTabIndex, true, false);
            }

            if (this.toolbar) {
              this.toolbar.setActiveTab(this.activeTabIndex, true, false);
            } // listen to `slotchange` event to detect any changes in children


            this.el.shadowRoot.addEventListener('slotchange', this.onSlotchange.bind(this));
            requestAnimationFrame(function () {
              _this2.initComponent();
            });
          }
        }, {
          key: "initComponent",
          value: function initComponent() {
            var _this3 = this;

            if (!this.container) {
              if (++this.initAttempts <= maxInitRetries) {
                requestAnimationFrame(function () {
                  _this3.initComponent();
                });
                return;
              } else {
                this.debug("container still doesn't exists after ".concat(maxInitRetries, " frames"));
              }
            }

            if (this.container) {
              this.container.setActiveTabIndex(this.activeTabIndex, true, false);
            }

            if (this.toolbar) {
              this.toolbar.setActiveTab(this.activeTabIndex, true);
            }

            this.propagateConfig();
            this.setupEventListeners();
            this.initPromiseResolve();
          }
          /**
           * Setup event listeners to synchronize child components
           */

        }, {
          key: "setupEventListeners",
          value: function () {
            var _setupEventListeners = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee6() {
              return _regeneratorRuntime().wrap(function _callee6$(_context6) {
                while (1) switch (_context6.prev = _context6.next) {
                  case 0:
                    if (!this.container) {
                      _context6.next = 7;
                      break;
                    }

                    _context6.next = 3;
                    return this.container.componentOnReady();

                  case 3:
                    this.el.addEventListener('selectedTabIndexChange', this.onContainerSelectedTabChange.bind(this));
                    this.el.addEventListener('activeTabIndexChange', this.onContainerActiveTabChange.bind(this));
                    _context6.next = 8;
                    break;

                  case 7:
                    this.debug('setupEventListeners: container does not exist');

                  case 8:
                    if (!this.toolbar) {
                      _context6.next = 14;
                      break;
                    }

                    _context6.next = 11;
                    return this.toolbar.componentOnReady();

                  case 11:
                    this.el.addEventListener('buttonClick', this.onToolbarButtonClick.bind(this));
                    _context6.next = 15;
                    break;

                  case 14:
                    this.debug('setupEventListeners: toolbar does not exist');

                  case 15:
                  case "end":
                    return _context6.stop();
                }
              }, _callee6, this);
            }));

            function setupEventListeners() {
              return _setupEventListeners.apply(this, arguments);
            }

            return setupEventListeners;
          }()
        }, {
          key: "onContainerSelectedTabChange",
          value: function () {
            var _onContainerSelectedTabChange = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee7(ev) {
              return _regeneratorRuntime().wrap(function _callee7$(_context7) {
                while (1) switch (_context7.prev = _context7.next) {
                  case 0:
                    this.debug('onContainerSelectedTabChange called with: ', ev);

                    if (!this.toolbar) {
                      _context7.next = 4;
                      break;
                    }

                    _context7.next = 4;
                    return this.toolbar.setSelectedTab(ev.detail);

                  case 4:
                  case "end":
                    return _context7.stop();
                }
              }, _callee7, this);
            }));

            function onContainerSelectedTabChange(_x4) {
              return _onContainerSelectedTabChange.apply(this, arguments);
            }

            return onContainerSelectedTabChange;
          }()
        }, {
          key: "emitTabChangeEvent",
          value: function emitTabChangeEvent(newIndex, oldIndex) {
            if (typeof newIndex !== 'number' || newIndex < 0) {
              return;
            }

            if (typeof oldIndex !== 'number' || oldIndex < 0) {
              oldIndex = this.activeTabIndex;
            }

            this.tabChange.emit({
              changed: newIndex !== oldIndex,
              index: newIndex
            });
          }
        }, {
          key: "onContainerActiveTabChange",
          value: function onContainerActiveTabChange(ev) {
            this.debug('onContainerActiveTabChange', ev);
            var index = ev.detail;
            this.emitTabChangeEvent(index);
            this.activeTabIndex = index;
            this.toolbar && this.toolbar.setActiveTab(index, true, true);
          }
        }, {
          key: "onToolbarButtonClick",
          value: function onToolbarButtonClick(ev) {
            this.debug('onToolbarButtonClick', ev);
            var index = ev.detail.index;
            this.container && this.container.setActiveTabIndex(index, true, true);
            this.emitTabChangeEvent(index);
            this.activeTabIndex = index;
          }
        }, {
          key: "indexChildren",
          value: function indexChildren() {
            this.debug('indexChildren');
            var container = this.el.querySelector('super-tabs-container');
            var toolbar = this.el.querySelector('super-tabs-toolbar');

            if (container && this.container !== container) {
              this.container = container;
            }

            if (toolbar && this.toolbar !== toolbar) {
              this.toolbar = toolbar;
            }

            this.propagateConfig();
          }
        }, {
          key: "onSlotchange",
          value: function () {
            var _onSlotchange = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee8() {
              return _regeneratorRuntime().wrap(function _callee8$(_context8) {
                while (1) switch (_context8.prev = _context8.next) {
                  case 0:
                    // re-index the child components
                    this.indexChildren(); // reselect the current tab to ensure that we're on the correct tab

                    this.selectTab(this.activeTabIndex, true, false);

                  case 2:
                  case "end":
                    return _context8.stop();
                }
              }, _callee8, this);
            }));

            function onSlotchange() {
              return _onSlotchange.apply(this, arguments);
            }

            return onSlotchange;
          }()
          /**
           * Internal method to output values in debug mode.
           */

        }, {
          key: "debug",
          value: function debug() {
            for (var _len = arguments.length, vals = new Array(_len), _key = 0; _key < _len; _key++) {
              vals[_key] = arguments[_key];
            }

            Object(_utils_640d2cf5_js__WEBPACK_IMPORTED_MODULE_1__["d"])(this._config, 'tabs', vals);
          }
        }, {
          key: "render",
          value: function render() {
            // Render 3 slots
            // Top & bottom slots allow the toolbar position to be configurable via slots.
            // The nameless slot is used to hold the `super-tabs-container`.
            return Object(_index_a34c410e_js__WEBPACK_IMPORTED_MODULE_0__["h"])(_index_a34c410e_js__WEBPACK_IMPORTED_MODULE_0__["H"], null, Object(_index_a34c410e_js__WEBPACK_IMPORTED_MODULE_0__["h"])("slot", {
              name: "top"
            }), Object(_index_a34c410e_js__WEBPACK_IMPORTED_MODULE_0__["h"])("slot", null), Object(_index_a34c410e_js__WEBPACK_IMPORTED_MODULE_0__["h"])("slot", {
              name: "bottom"
            }));
          }
        }, {
          key: "el",
          get: function get() {
            return Object(_index_a34c410e_js__WEBPACK_IMPORTED_MODULE_0__["g"])(this);
          }
        }], [{
          key: "watchers",
          get: function get() {
            return {
              "config": ["onConfigChange"]
            };
          }
        }]);

        return SuperTabsComponent;
      }();

      SuperTabsComponent.style = superTabsComponentCss;
      var superTabsContainerComponentCss = ":host{display:-ms-flexbox;display:flex;-ms-flex-flow:row nowrap;flex-flow:row nowrap;min-width:100%;-ms-flex:1 1 auto;flex:1 1 auto;position:relative;-webkit-box-sizing:border-box;box-sizing:border-box;width:var(--super-tab-width, 100vw);height:var(--super-tab-height, 100%);overflow:hidden;-webkit-transform:translate3d(0, 0, 0);transform:translate3d(0, 0, 0);-ms-touch-action:pan-y;touch-action:pan-y;-moz-user-select:none;-ms-user-select:none;user-select:none;will-change:scroll-position;-ms-flex-order:-1;order:-1;-webkit-user-select:none;-webkit-touch-callout:none;-webkit-text-size-adjust:none;-webkit-tap-highlight-color:rgba(0, 0, 0, 0);-webkit-font-smoothing:antialiased}";

      var SuperTabsContainerComponent = /*#__PURE__*/function () {
        function SuperTabsContainerComponent(hostRef) {
          _classCallCheck(this, SuperTabsContainerComponent);

          Object(_index_a34c410e_js__WEBPACK_IMPORTED_MODULE_0__["r"])(this, hostRef);
          /**
           * Enable/disable swiping
           */

          this.swipeEnabled = true;
          /**
           * Set to true to automatically scroll to the top of the tab when the button is clicked while the tab is
           * already selected.
           */

          this.autoScrollTop = false;
          this.tabs = [];
          this.isDragging = false;
          this.leftThreshold = 0;
          this.rightThreshold = 0;
          this.scrollWidth = 0;
          this.width = 0;
          this.activeTabIndexChange = Object(_index_a34c410e_js__WEBPACK_IMPORTED_MODULE_0__["c"])(this, "activeTabIndexChange", 7);
          this.selectedTabIndexChange = Object(_index_a34c410e_js__WEBPACK_IMPORTED_MODULE_0__["c"])(this, "selectedTabIndexChange", 7);
          this.queue = Object(_index_a34c410e_js__WEBPACK_IMPORTED_MODULE_0__["d"])(this, "queue");
        }

        _createClass(SuperTabsContainerComponent, [{
          key: "componentDidLoad",
          value: function () {
            var _componentDidLoad = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee9() {
              return _regeneratorRuntime().wrap(function _callee9$(_context9) {
                while (1) switch (_context9.prev = _context9.next) {
                  case 0:
                    this.debug('componentDidLoad');
                    this.updateWidth();
                    _context9.next = 4;
                    return this.indexTabs();

                  case 4:
                    this.slot = this.el.shadowRoot.querySelector('slot');
                    this.slot.addEventListener('slotchange', this.onSlotChange.bind(this));

                  case 6:
                  case "end":
                    return _context9.stop();
                }
              }, _callee9, this);
            }));

            function componentDidLoad() {
              return _componentDidLoad.apply(this, arguments);
            }

            return componentDidLoad;
          }()
        }, {
          key: "onSlotChange",
          value: function () {
            var _onSlotChange = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee10() {
              return _regeneratorRuntime().wrap(function _callee10$(_context10) {
                while (1) switch (_context10.prev = _context10.next) {
                  case 0:
                    this.debug('onSlotChange', this.tabs.length);
                    this.updateWidth();
                    this.indexTabs();

                  case 3:
                  case "end":
                    return _context10.stop();
                }
              }, _callee10, this);
            }));

            function onSlotChange() {
              return _onSlotChange.apply(this, arguments);
            }

            return onSlotChange;
          }()
        }, {
          key: "componentDidRender",
          value: function () {
            var _componentDidRender = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee11() {
              return _regeneratorRuntime().wrap(function _callee11$(_context11) {
                while (1) switch (_context11.prev = _context11.next) {
                  case 0:
                    this.updateWidth();

                  case 1:
                  case "end":
                    return _context11.stop();
                }
              }, _callee11, this);
            }));

            function componentDidRender() {
              return _componentDidRender.apply(this, arguments);
            }

            return componentDidRender;
          }()
          /**
           * @internal
           */

        }, {
          key: "reindexTabs",
          value: function () {
            var _reindexTabs = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee12() {
              return _regeneratorRuntime().wrap(function _callee12$(_context12) {
                while (1) switch (_context12.prev = _context12.next) {
                  case 0:
                    this.updateWidth();
                    _context12.next = 3;
                    return this.indexTabs();

                  case 3:
                  case "end":
                    return _context12.stop();
                }
              }, _callee12, this);
            }));

            function reindexTabs() {
              return _reindexTabs.apply(this, arguments);
            }

            return reindexTabs;
          }()
          /**
           * @internal
           *
           * Moves the container to align with the specified tab index
           * @param index {number} Index of the tab
           * @param animate {boolean} Whether to animate the transition
           */

        }, {
          key: "moveContainerByIndex",
          value: function moveContainerByIndex(index, animate) {
            var scrollX = this.indexToPosition(index);

            if (scrollX === 0 && index > 0) {
              return Promise.resolve();
            }

            return this.moveContainer(scrollX, animate);
          }
          /**
           * @internal
           *
           * Sets the scrollLeft property of the container
           * @param scrollX {number}
           * @param animate {boolean}
           */

        }, {
          key: "moveContainer",
          value: function moveContainer(scrollX, animate) {
            if (animate) {
              Object(_utils_640d2cf5_js__WEBPACK_IMPORTED_MODULE_1__["s"])(this.el, scrollX, 0, this.config.nativeSmoothScroll, this.config.transitionDuration);
            } else {
              this.el.scroll(scrollX, 0);
            }

            return Promise.resolve();
          }
          /** @internal */

        }, {
          key: "setActiveTabIndex",
          value: function () {
            var _setActiveTabIndex = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee13(index) {
              var moveContainer,
                  animate,
                  _args13 = arguments;
              return _regeneratorRuntime().wrap(function _callee13$(_context13) {
                while (1) switch (_context13.prev = _context13.next) {
                  case 0:
                    moveContainer = _args13.length > 1 && _args13[1] !== undefined ? _args13[1] : true;
                    animate = _args13.length > 2 && _args13[2] !== undefined ? _args13[2] : true;
                    this.debug('setActiveTabIndex', index);

                    if (!(this._activeTabIndex === index)) {
                      _context13.next = 7;
                      break;
                    }

                    if (this.autoScrollTop) {
                      _context13.next = 6;
                      break;
                    }

                    return _context13.abrupt("return");

                  case 6:
                    this.scrollToTop();

                  case 7:
                    if (moveContainer) {
                      this.moveContainerByIndex(index, animate);
                    }

                    this.updateActiveTabIndex(index, false);

                  case 9:
                  case "end":
                    return _context13.stop();
                }
              }, _callee13, this);
            }));

            function setActiveTabIndex(_x5) {
              return _setActiveTabIndex.apply(this, arguments);
            }

            return setActiveTabIndex;
          }()
          /**
           * Scroll the active tab to the top.
           */

        }, {
          key: "scrollToTop",
          value: function () {
            var _scrollToTop = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee14() {
              var current, el;
              return _regeneratorRuntime().wrap(function _callee14$(_context14) {
                while (1) switch (_context14.prev = _context14.next) {
                  case 0:
                    if (!(this._activeTabIndex === undefined || this.tabs === undefined)) {
                      _context14.next = 3;
                      break;
                    }

                    this.debug('scrollToTop', 'activeTabIndex or tabs was undefined', this._activeTabIndex, this.tabs);
                    return _context14.abrupt("return");

                  case 3:
                    current = this.tabs[this._activeTabIndex];

                    if (current) {
                      _context14.next = 7;
                      break;
                    }

                    this.debug('Current active tab was undefined in scrollToTop');
                    return _context14.abrupt("return");

                  case 7:
                    _context14.next = 9;
                    return current.getRootScrollableEl();

                  case 9:
                    el = _context14.sent;

                    if (el) {
                      Object(_utils_640d2cf5_js__WEBPACK_IMPORTED_MODULE_1__["s"])(el, 0, 0, this.config.nativeSmoothScroll, this.config.transitionDuration);
                    } else {
                      this.debug('scrollToTop', 'couldnt find a scrollable element');
                    }

                  case 11:
                  case "end":
                    return _context14.stop();
                }
              }, _callee14, this);
            }));

            function scrollToTop() {
              return _scrollToTop.apply(this, arguments);
            }

            return scrollToTop;
          }()
        }, {
          key: "updateActiveTabIndex",
          value: function updateActiveTabIndex(index) {
            var emit = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;
            this.debug('updateActiveTabIndex', index, emit, this._activeTabIndex);
            this._activeTabIndex = index;
            emit && this.activeTabIndexChange.emit(this._activeTabIndex);
          }
        }, {
          key: "updateSelectedTabIndex",
          value: function updateSelectedTabIndex(index) {
            if (index === this._selectedTabIndex) {
              return;
            }

            this._selectedTabIndex = index;
            this.selectedTabIndexChange.emit(this._selectedTabIndex);
          }
        }, {
          key: "onTouchStart",
          value: function () {
            var _onTouchStart = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee15(ev) {
              var avoid, element, coords, vw;
              return _regeneratorRuntime().wrap(function _callee15$(_context15) {
                while (1) switch (_context15.prev = _context15.next) {
                  case 0:
                    if (this.swipeEnabled) {
                      _context15.next = 2;
                      break;
                    }

                    return _context15.abrupt("return");

                  case 2:
                    if (!this.config.avoidElements) {
                      _context15.next = 10;
                      break;
                    }

                    avoid = false;
                    element = ev.target;

                    if (!element) {
                      _context15.next = 10;
                      break;
                    }

                  case 6:
                    if (!(typeof element.getAttribute === 'function' && element.getAttribute('avoid-super-tabs'))) {
                      _context15.next = 8;
                      break;
                    }

                    return _context15.abrupt("return");

                  case 8:
                    element = element.parentElement;

                  case 9:
                    if (element && !avoid) {
                      _context15.next = 6;
                      break;
                    }

                  case 10:
                    coords = Object(_utils_640d2cf5_js__WEBPACK_IMPORTED_MODULE_1__["p"])(ev);
                    this.updateWidth();
                    vw = this.width;

                    if (!(coords.x < this.leftThreshold || coords.x > vw - this.rightThreshold)) {
                      _context15.next = 15;
                      break;
                    }

                    return _context15.abrupt("return");

                  case 15:
                    if (this.config.shortSwipeDuration > 0) {
                      this.initialTimestamp = Object(_utils_640d2cf5_js__WEBPACK_IMPORTED_MODULE_1__["a"])();
                    }

                    this.initialCoords = coords;
                    this.lastPosX = coords.x;

                  case 18:
                  case "end":
                    return _context15.stop();
                }
              }, _callee15, this);
            }));

            function onTouchStart(_x6) {
              return _onTouchStart.apply(this, arguments);
            }

            return onTouchStart;
          }()
        }, {
          key: "onClick",
          value: function () {
            var _onClick = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee16(ev) {
              return _regeneratorRuntime().wrap(function _callee16$(_context16) {
                while (1) switch (_context16.prev = _context16.next) {
                  case 0:
                    if (this.isDragging) {
                      ev.stopImmediatePropagation();
                      ev.preventDefault();
                    }

                  case 1:
                  case "end":
                    return _context16.stop();
                }
              }, _callee16, this);
            }));

            function onClick(_x7) {
              return _onClick.apply(this, arguments);
            }

            return onClick;
          }()
        }, {
          key: "onTouchMove",
          value: function () {
            var _onTouchMove = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee17(ev) {
              var coords, deltaX, scrollX, index;
              return _regeneratorRuntime().wrap(function _callee17$(_context17) {
                while (1) switch (_context17.prev = _context17.next) {
                  case 0:
                    if (!(!this.swipeEnabled || !this.initialCoords || typeof this.lastPosX !== 'number')) {
                      _context17.next = 2;
                      break;
                    }

                    return _context17.abrupt("return");

                  case 2:
                    coords = Object(_utils_640d2cf5_js__WEBPACK_IMPORTED_MODULE_1__["p"])(ev);

                    if (this.isDragging) {
                      _context17.next = 8;
                      break;
                    }

                    if (Object(_utils_640d2cf5_js__WEBPACK_IMPORTED_MODULE_1__["c"])(coords, this.initialCoords, this.config)) {
                      _context17.next = 7;
                      break;
                    }

                    if (Math.abs(coords.y - this.initialCoords.y) > 100) {
                      this.initialCoords = void 0;
                      this.lastPosX = void 0;
                    }

                    return _context17.abrupt("return");

                  case 7:
                    this.isDragging = true;

                  case 8:
                    // stop anything else from capturing these events, to make sure the content doesn't slide
                    if (!this.config.allowElementScroll) {
                      ev.stopImmediatePropagation();
                    } // get delta X


                    deltaX = this.lastPosX - coords.x;

                    if (!(deltaX === 0)) {
                      _context17.next = 12;
                      break;
                    }

                    return _context17.abrupt("return");

                  case 12:
                    scrollX = Math.max(0, Math.min(this.scrollWidth - this.width, this.el.scrollLeft + deltaX));

                    if (!(Math.floor(scrollX) === Math.floor(this.el.scrollLeft))) {
                      _context17.next = 15;
                      break;
                    }

                    return _context17.abrupt("return");

                  case 15:
                    index = Math.round(this.positionToIndex(scrollX) * 100) / 100;
                    this.updateSelectedTabIndex(index); // update last X value

                    this.lastPosX = coords.x;
                    this.el.scroll(scrollX, 0);

                  case 19:
                  case "end":
                    return _context17.stop();
                }
              }, _callee17, this);
            }));

            function onTouchMove(_x8) {
              return _onTouchMove.apply(this, arguments);
            }

            return onTouchMove;
          }()
        }, {
          key: "onTouchEnd",
          value: function () {
            var _onTouchEnd = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee18(ev) {
              var coords, deltaTime, shortSwipe, shortSwipeDelta, selectedTabIndex, expectedTabIndex;
              return _regeneratorRuntime().wrap(function _callee18$(_context18) {
                while (1) switch (_context18.prev = _context18.next) {
                  case 0:
                    if (!(!this.swipeEnabled || !this.isDragging)) {
                      _context18.next = 2;
                      break;
                    }

                    return _context18.abrupt("return");

                  case 2:
                    coords = Object(_utils_640d2cf5_js__WEBPACK_IMPORTED_MODULE_1__["p"])(ev);
                    deltaTime = Object(_utils_640d2cf5_js__WEBPACK_IMPORTED_MODULE_1__["a"])() - this.initialTimestamp;
                    shortSwipe = this.config.shortSwipeDuration > 0 && deltaTime <= this.config.shortSwipeDuration;
                    shortSwipeDelta = coords.x - this.initialCoords.x;
                    selectedTabIndex = this.calcSelectedTab();
                    expectedTabIndex = Math.round(selectedTabIndex);

                    if (shortSwipe && expectedTabIndex === this._activeTabIndex) {
                      selectedTabIndex += shortSwipeDelta > 0 ? -1 : 1;
                    }

                    selectedTabIndex = this.normalizeSelectedTab(selectedTabIndex);
                    this.updateActiveTabIndex(selectedTabIndex);
                    this.moveContainerByIndex(selectedTabIndex, true);
                    this.isDragging = false;
                    this.initialCoords = void 0;
                    this.lastPosX = void 0;

                  case 15:
                  case "end":
                    return _context18.stop();
                }
              }, _callee18, this);
            }));

            function onTouchEnd(_x9) {
              return _onTouchEnd.apply(this, arguments);
            }

            return onTouchEnd;
          }()
        }, {
          key: "updateWidth",
          value: function updateWidth() {
            var boundingRect = this.el.getBoundingClientRect();
            this.width = Math.round(boundingRect.width * 10000) / 10000;
          }
        }, {
          key: "indexTabs",
          value: function () {
            var _indexTabs = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee19() {
              var _this4 = this;

              var tabs;
              return _regeneratorRuntime().wrap(function _callee19$(_context19) {
                while (1) switch (_context19.prev = _context19.next) {
                  case 0:
                    if (!(this.width === 0)) {
                      _context19.next = 3;
                      break;
                    }

                    requestAnimationFrame(function () {
                      _this4.updateWidth();

                      _this4.indexTabs();
                    });
                    return _context19.abrupt("return");

                  case 3:
                    tabs = Array.from(this.el.querySelectorAll('super-tab'));
                    this.scrollWidth = this.width * tabs.length;
                    this.debug('indexTab', this.scrollWidth, this.width);
                    _context19.next = 8;
                    return Promise.all(tabs.map(function (t) {
                      return t.componentOnReady();
                    }));

                  case 8:
                    this.tabs = tabs;

                    if (this.ready && typeof this._activeTabIndex === 'number') {
                      this.moveContainerByIndex(this._activeTabIndex, true);
                    }

                    if (!this.config) {
                      _context19.next = 20;
                      break;
                    }

                    _context19.t0 = this.config.sideMenu;
                    _context19.next = _context19.t0 === 'both' ? 14 : _context19.t0 === 'left' ? 16 : _context19.t0 === 'right' ? 18 : 20;
                    break;

                  case 14:
                    this.rightThreshold = this.leftThreshold = this.config.sideMenuThreshold || 0;
                    return _context19.abrupt("break", 20);

                  case 16:
                    this.leftThreshold = this.config.sideMenuThreshold || 0;
                    return _context19.abrupt("break", 20);

                  case 18:
                    this.rightThreshold = this.config.sideMenuThreshold || 0;
                    return _context19.abrupt("break", 20);

                  case 20:
                    if (this._activeTabIndex !== undefined) {
                      this.moveContainerByIndex(this._activeTabIndex, false).then(function () {
                        _this4.ready = true;
                      });
                    }

                  case 21:
                  case "end":
                    return _context19.stop();
                }
              }, _callee19, this);
            }));

            function indexTabs() {
              return _indexTabs.apply(this, arguments);
            }

            return indexTabs;
          }()
        }, {
          key: "calcSelectedTab",
          value: function calcSelectedTab() {
            var scrollX = Math.max(0, Math.min(this.scrollWidth - this.width, this.el.scrollLeft));
            return this.positionToIndex(scrollX);
          }
        }, {
          key: "positionToIndex",
          value: function positionToIndex(scrollX) {
            var tabWidth = this.width;
            return scrollX / tabWidth;
          }
        }, {
          key: "indexToPosition",
          value: function indexToPosition(tabIndex) {
            return Math.round(tabIndex * this.width * 10000) / 10000;
          }
        }, {
          key: "normalizeSelectedTab",
          value: function normalizeSelectedTab(index) {
            var scrollX = Math.max(0, Math.min(this.scrollWidth - this.width, this.indexToPosition(index)));
            return Math.round(scrollX / this.width);
          }
          /**
           * Internal method to output values in debug mode.
           */

        }, {
          key: "debug",
          value: function debug() {
            for (var _len2 = arguments.length, vals = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
              vals[_key2] = arguments[_key2];
            }

            Object(_utils_640d2cf5_js__WEBPACK_IMPORTED_MODULE_1__["d"])(this.config, 'container', vals);
          }
        }, {
          key: "render",
          value: function render() {
            return Object(_index_a34c410e_js__WEBPACK_IMPORTED_MODULE_0__["h"])("slot", null);
          }
        }, {
          key: "el",
          get: function get() {
            return Object(_index_a34c410e_js__WEBPACK_IMPORTED_MODULE_0__["g"])(this);
          }
        }]);

        return SuperTabsContainerComponent;
      }();

      SuperTabsContainerComponent.style = superTabsContainerComponentCss;
      /***/
    }
  }]);
})();
//# sourceMappingURL=2-es5.js.map