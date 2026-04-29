(function () {
  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

  function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return typeof key === "symbol" ? key : String(key); }

  function _toPrimitive(input, hint) { if (typeof input !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (typeof res !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["eventdetails-eventdetails-module"], {
    /***/
    "1gaA":
    /*!*****************************************************!*\
      !*** ./src/app/eventdetails/eventdetails.page.scss ***!
      \*****************************************************/

    /*! exports provided: default */

    /***/
    function gaA(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "ion-content {\n  --background:#f3fbfe;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL2V2ZW50ZGV0YWlscy5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxvQkFBQTtBQUNKIiwiZmlsZSI6ImV2ZW50ZGV0YWlscy5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJpb24tY29udGVudCB7XHJcbiAgICAtLWJhY2tncm91bmQ6I2YzZmJmZTtcclxufSJdfQ== */";
      /***/
    },

    /***/
    "1qDM":
    /*!*******************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/eventdetails/eventdetails.page.html ***!
      \*******************************************************************************************/

    /*! exports provided: default */

    /***/
    function qDM(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-header>\n  <ion-toolbar>\n    <ion-title *ngIf=\"event\">{{event|titlecase}}</ion-title>\n    <ion-buttons slot=\"start\">\n      <ion-button  shape=\"round\"[routerLink]=\"['/events']\"  >\n        <ion-icon name=\"arrow-back-sharp\" color=\"light\"></ion-icon>\n      </ion-button>\n    </ion-buttons>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <div class=\"padding-ionic\">\n    <ion-row >\n      <ion-col size=\"6\">\n        <ion-img src=\"../../assets/events/01.png\"></ion-img>\n      </ion-col>\n      <ion-col size=\"6\">\n        <ion-img src=\"../../assets/events/02.png\"></ion-img>\n      </ion-col>\n      <ion-col size=\"6\">\n        <ion-img src=\"../../assets/events/03.png\"></ion-img>\n      </ion-col>\n      <ion-col size=\"6\">\n        <ion-img src=\"../../assets/events/04.png\"></ion-img>\n      </ion-col>\n    </ion-row>\n  </div>\n</ion-content>\n";
      /***/
    },

    /***/
    "a2y5":
    /*!***************************************************!*\
      !*** ./src/app/eventdetails/eventdetails.page.ts ***!
      \***************************************************/

    /*! exports provided: EventdetailsPage */

    /***/
    function a2y5(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "EventdetailsPage", function () {
        return EventdetailsPage;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_eventdetails_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./eventdetails.page.html */
      "1qDM");
      /* harmony import */


      var _eventdetails_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./eventdetails.page.scss */
      "1gaA");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");

      var EventdetailsPage = /*#__PURE__*/function () {
        function EventdetailsPage(route) {
          _classCallCheck(this, EventdetailsPage);

          this.route = route;
        }

        _createClass(EventdetailsPage, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }, {
          key: "ionViewDidEnter",
          value: function ionViewDidEnter() {
            var _this = this;

            this.route.paramMap.subscribe(function (params) {
              _this.event = params.get('event');
            });
          }
        }]);

        return EventdetailsPage;
      }();

      EventdetailsPage.ctorParameters = function () {
        return [{
          type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"]
        }];
      };

      EventdetailsPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-eventdetails',
        template: _raw_loader_eventdetails_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_eventdetails_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
      })], EventdetailsPage);
      /***/
    },

    /***/
    "njBr":
    /*!*************************************************************!*\
      !*** ./src/app/eventdetails/eventdetails-routing.module.ts ***!
      \*************************************************************/

    /*! exports provided: EventdetailsPageRoutingModule */

    /***/
    function njBr(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "EventdetailsPageRoutingModule", function () {
        return EventdetailsPageRoutingModule;
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


      var _eventdetails_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./eventdetails.page */
      "a2y5");

      var routes = [{
        path: '',
        component: _eventdetails_page__WEBPACK_IMPORTED_MODULE_3__["EventdetailsPage"]
      }];

      var EventdetailsPageRoutingModule = /*#__PURE__*/_createClass(function EventdetailsPageRoutingModule() {
        _classCallCheck(this, EventdetailsPageRoutingModule);
      });

      EventdetailsPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
      })], EventdetailsPageRoutingModule);
      /***/
    },

    /***/
    "zzI9":
    /*!*****************************************************!*\
      !*** ./src/app/eventdetails/eventdetails.module.ts ***!
      \*****************************************************/

    /*! exports provided: EventdetailsPageModule */

    /***/
    function zzI9(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "EventdetailsPageModule", function () {
        return EventdetailsPageModule;
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


      var _eventdetails_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./eventdetails-routing.module */
      "njBr");
      /* harmony import */


      var _eventdetails_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./eventdetails.page */
      "a2y5");

      var EventdetailsPageModule = /*#__PURE__*/_createClass(function EventdetailsPageModule() {
        _classCallCheck(this, EventdetailsPageModule);
      });

      EventdetailsPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _eventdetails_routing_module__WEBPACK_IMPORTED_MODULE_5__["EventdetailsPageRoutingModule"]],
        declarations: [_eventdetails_page__WEBPACK_IMPORTED_MODULE_6__["EventdetailsPage"]]
      })], EventdetailsPageModule);
      /***/
    }
  }]);
})();
//# sourceMappingURL=eventdetails-eventdetails-module-es5.js.map