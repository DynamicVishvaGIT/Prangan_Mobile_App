(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["admissionform-admissionform-module"],{

/***/ "6Yi+":
/*!*******************************************************!*\
  !*** ./src/app/admissionform/admissionform.module.ts ***!
  \*******************************************************/
/*! exports provided: AdmissionformPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdmissionformPageModule", function() { return AdmissionformPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _admissionform_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./admissionform-routing.module */ "vpSC");
/* harmony import */ var _admissionform_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./admissionform.page */ "yyuz");







let AdmissionformPageModule = class AdmissionformPageModule {
};
AdmissionformPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _admissionform_routing_module__WEBPACK_IMPORTED_MODULE_5__["AdmissionformPageRoutingModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"]
        ],
        declarations: [_admissionform_page__WEBPACK_IMPORTED_MODULE_6__["AdmissionformPage"]]
    })
], AdmissionformPageModule);



/***/ }),

/***/ "Grok":
/*!*******************************************************!*\
  !*** ./src/app/admissionform/admissionform.page.scss ***!
  \*******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("@charset \"UTF-8\";\n.step {\n  color: #a2a2a2;\n  font-size: 16px;\n  margin-left: 16px;\n  font-family: initial;\n  margin-bottom: 2px;\n  font-weight: bold;\n}\n.step-heading {\n  color: #fdd653;\n  margin-left: 16px;\n  font-family: initial;\n  font-size: 30px;\n  margin-top: 0;\n  font-weight: bold;\n  text-decoration: underline;\n  text-decoration-thickness: 2px;\n}\n.wrap {\n  text-align: center;\n  position: relative;\n}\n.wrap:before {\n  content: \"\";\n  position: absolute;\n  top: 20%;\n  left: 18%;\n  border-top: 0.5px solid #677483;\n  border-width: thin;\n  width: 65%;\n  transform: translateY(-50%);\n  border-style: dashed;\n}\n.active {\n  background: #fdd653;\n  color: #ffffff;\n}\n.icon-circle {\n  position: relative;\n  display: inline-block;\n  margin: -1px;\n  width: 30px;\n  height: 30px;\n  font-size: 26px;\n  border-radius: 50%;\n  border: 1px solid #202020;\n  background: #fff;\n  color: #202020;\n  text-align: center;\n}\n.icon-circle ion-icon {\n  margin-top: 2px;\n  font-size: 20px;\n}\n.heading-1 {\n  color: #676767;\n  margin-bottom: 0;\n  font-size: 16px;\n}\n.heading {\n  color: #9b9ca6;\n  margin-bottom: 0;\n  font-size: 14px;\n}\nion-label {\n  color: #9b9ca6;\n  font-size: 14px;\n}\nion-input {\n  border: 1px solid #9b9ca6;\n  border-radius: 5px;\n  --padding-start: 5px !important;\n  height: 35px;\n}\nion-textarea {\n  border: 1px solid #9b9ca6;\n  border-radius: 5px;\n  --padding-start: 5px !important;\n}\nion-datetime {\n  border: 1px solid #9b9ca6;\n  border-radius: 5px;\n  --padding-start: 5px !important;\n  width: 100%;\n  height: 35px;\n}\nion-item {\n  --padding-start: 0;\n  --ripple-color: transparent;\n  --background-activated: transparent;\n  --background-activated-opacity:transparent;\n  --background-focused: transparent;\n  --background-focused-opacity:transparent;\n  --background-hover: transparent;\n  --background-hover-opacity:transparent;\n}\nion-item ion-label {\n  font-size: 12px;\n  color: #9b9ca6;\n}\nion-radio-group ion-item {\n  border-bottom: 0;\n}\nion-radio-group ion-col {\n  padding-left: 0;\n}\nion-radio-group ion-radio {\n  margin-right: 8px;\n  width: 18px;\n  height: 18px;\n}\nion-col {\n  padding-left: 0;\n}\nion-button {\n  text-transform: none;\n}\n.choose-btn {\n  --background: #ee4a35;\n  --color:#fff;\n}\n.heading-3 {\n  margin-top: 12px;\n  color: #929791;\n}\n.admission-row ion-col {\n  text-align: center;\n  text-align: -moz-center;\n}\n.admission-row ion-col ion-button {\n  text-transform: none;\n  width: 40%;\n}\n.btn-row ion-col {\n  text-align: center;\n  text-align: -moz-center;\n}\n.btn-row ion-col ion-button {\n  text-transform: none;\n  width: 75%;\n}\n.next-btn-col {\n  text-align: left !important;\n}\nion-segment-button {\n  text-transform: none;\n}\nimg {\n  width: 60%;\n}\n.tabs {\n  border-radius: 0;\n  overflow: hidden;\n  box-shadow: 0 4px 4px -2px rgba(0, 0, 0, 0.5);\n}\n#chck1 {\n  position: absolute;\n  opacity: 0;\n  z-index: -1;\n}\n.tab {\n  width: 100%;\n  color: white;\n  overflow: hidden;\n}\n.tab-label {\n  display: flex;\n  justify-content: space-between;\n  padding: 1em;\n  background: #2c3e50;\n  font-weight: bold;\n  cursor: pointer;\n  /* Icon */\n}\n.tab-label:hover {\n  background: #1a252f;\n}\n.tab-label::after {\n  content: \"❯\";\n  width: 1em;\n  height: 1em;\n  text-align: center;\n  transition: all 0.35s;\n}\n.tab-content {\n  max-height: 0;\n  padding: 0 1em;\n  color: #2c3e50;\n  background: white;\n  transition: all 0.35s;\n}\n.tab-close {\n  display: flex;\n  justify-content: flex-end;\n  padding: 1em;\n  font-size: 0.75em;\n  background: #2c3e50;\n  cursor: pointer;\n}\n.tab-close:hover {\n  background: #1a252f;\n}\n#chck1:checked + .tab-label {\n  background: #1a252f;\n}\n#chck1:checked + .tab-label::after {\n  transform: rotate(90deg);\n}\n#chck1:checked ~ .tab-content {\n  max-height: 100vh;\n  padding: 1em;\n}\n.inside-body {\n  padding: 25px;\n}\n.list-group.vertical-steps .list-group-item {\n  border: none;\n  border-left: 3px solid #b4b4b4;\n  box-sizing: border-box;\n  border-radius: 0;\n  counter-increment: step-counter;\n  padding-left: 20px;\n  padding-right: 0px;\n  padding-bottom: 7px;\n  padding-top: 0px;\n}\n.list-group.vertical-steps .list-group-item::before {\n  border-radius: 50%;\n  background-color: #b4b4b4;\n  color: #fff;\n  content: counter(step-counter);\n  display: inline-block;\n  float: left;\n  height: 25px;\n  line-height: 25px;\n  margin-left: -35px;\n  text-align: center;\n  width: 25px;\n}\n.list-group.vertical-steps .final::before {\n  border-radius: 50%;\n  background-color: #b4b4b4;\n  color: #fff;\n  content: counter(step-counter);\n  display: inline-block;\n  float: left;\n  height: 25px;\n  line-height: 25px;\n  margin-left: -32px;\n  text-align: center;\n  width: 25px;\n}\n.final {\n  border-left: none !important;\n}\n.list-group.vertical-steps .step-active::before {\n  border-radius: 50%;\n  background-color: #2dd36f;\n  color: #fff;\n  content: counter(step-counter);\n  display: inline-block;\n  float: left;\n  height: 25px;\n  line-height: 25px;\n  margin-left: -35px;\n  text-align: center;\n  width: 25px;\n}\n.list-group.vertical-steps .list-group-item span, .list-group.vertical-steps .list-group-item a {\n  display: block;\n  overflow: hidden;\n  padding-top: 2px;\n}\ndiv.reusable_accordion {\n  z-index: 99;\n  padding: 0;\n  margin: 0;\n  list-style: none;\n  display: flex;\n  flex-wrap: wrap;\n  flex-direction: column;\n  justify-content: space-around;\n  line-height: 25px;\n  height: 180px;\n  background: #f1f1f1;\n  width: auto;\n}\ndiv.template_accordion div.template_containers {\n  display: flex;\n  min-width: 45%;\n  min-height: 60px;\n  background: white;\n  flex-direction: row;\n  margin: 5px;\n  justify-content: center;\n  align-content: center;\n}\n.toggle_button {\n  --background: #f1f1f1;\n  width: 100%;\n  text-align: center;\n  padding: 0;\n  color: #202020;\n  cursor: pointer;\n  min-width: 100%;\n}\n.toggle_button ion-label {\n  font-size: 16px;\n  color: #202020;\n  text-align: left;\n  margin-left: 20px;\n  font-weight: bold;\n}\ndiv.accordion-container {\n  overflow: hidden;\n  overflow-y: scroll;\n  transition: max-height 0.5s ease-in-out;\n  height: auto;\n  background: #1f2b37;\n}\ndiv.accordion-container.collapsed {\n  max-height: 0 !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL2FkbWlzc2lvbmZvcm0ucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLGdCQUFnQjtBQUloQjtFQUNJLGNBQUE7RUFDQSxlQUFBO0VBQ0EsaUJBQUE7RUFDQSxvQkFBQTtFQUNBLGtCQUFBO0VBQ0EsaUJBQUE7QUFGSjtBQUlBO0VBQ0ksY0FBQTtFQUNBLGlCQUFBO0VBQ0Esb0JBQUE7RUFDQSxlQUFBO0VBQ0EsYUFBQTtFQUNBLGlCQUFBO0VBQ0EsMEJBQUE7RUFDQSw4QkFBQTtBQURKO0FBR0E7RUFDSSxrQkFBQTtFQUNBLGtCQUFBO0FBQUo7QUFHRTtFQUNFLFdBQUE7RUFDQSxrQkFBQTtFQUNBLFFBQUE7RUFDQSxTQUFBO0VBQ0EsK0JBQUE7RUFDQSxrQkFBQTtFQUNBLFVBQUE7RUFDQSwyQkFBQTtFQUNBLG9CQUFBO0FBQUo7QUFFRTtFQUNFLG1CQUFBO0VBQ0EsY0FBQTtBQUNKO0FBQ0U7RUFDRSxrQkFBQTtFQUNBLHFCQUFBO0VBQ0EsWUFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0EsZUFBQTtFQUNBLGtCQUFBO0VBQ0EseUJBQUE7RUFDQSxnQkFBQTtFQUNBLGNBQUE7RUFDQSxrQkFBQTtBQUVKO0FBQUk7RUFDSSxlQUFBO0VBQ0EsZUFBQTtBQUVSO0FBSUU7RUFDRSxjQUFBO0VBQ0EsZ0JBQUE7RUFDQSxlQUFBO0FBREo7QUFHQTtFQUNJLGNBQUE7RUFDQSxnQkFBQTtFQUNBLGVBQUE7QUFBSjtBQUVBO0VBQ0ksY0FBQTtFQUNBLGVBQUE7QUFDSjtBQUNBO0VBQ0kseUJBQUE7RUFDQSxrQkFBQTtFQUNBLCtCQUFBO0VBQ0EsWUFBQTtBQUVKO0FBQUE7RUFDSSx5QkFBQTtFQUNBLGtCQUFBO0VBQ0EsK0JBQUE7QUFHSjtBQURBO0VBQ0kseUJBQUE7RUFDQSxrQkFBQTtFQUNBLCtCQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7QUFJSjtBQURBO0VBRUksa0JBQUE7RUFDQSwyQkFBQTtFQUNBLG1DQUFBO0VBQ0EsMENBQUE7RUFDQSxpQ0FBQTtFQUNBLHdDQUFBO0VBQ0EsK0JBQUE7RUFDQSxzQ0FBQTtBQUdKO0FBREk7RUFDSSxlQUFBO0VBQ0EsY0FBQTtBQUdSO0FBRVE7RUFDSSxnQkFBQTtBQUNaO0FBQ1E7RUFDSSxlQUFBO0FBQ1o7QUFDUTtFQUNBLGlCQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7QUFDUjtBQUdJO0VBQ0ksZUFBQTtBQUFSO0FBR0k7RUFDSSxvQkFBQTtBQUFSO0FBR0k7RUFDSSxxQkFBQTtFQUNBLFlBQUE7QUFBUjtBQUVJO0VBQ0ksZ0JBQUE7RUFDQSxjQUFBO0FBQ1I7QUFFUTtFQUNJLGtCQUFBO0VBQ0EsdUJBQUE7QUFDWjtBQUFZO0VBQ0ksb0JBQUE7RUFFQSxVQUFBO0FBQ2hCO0FBS1E7RUFDSSxrQkFBQTtFQUNBLHVCQUFBO0FBRlo7QUFHWTtFQUNJLG9CQUFBO0VBRUEsVUFBQTtBQUZoQjtBQU9JO0VBQ0ksMkJBQUE7QUFKUjtBQU1JO0VBQ0ksb0JBQUE7QUFIUjtBQUtJO0VBQ0ksVUFBQTtBQUZSO0FBS0k7RUFDRixnQkFBQTtFQUNBLGdCQUFBO0VBQ0EsNkNBQUE7QUFGRjtBQUlBO0VBQ0Usa0JBQUE7RUFDQSxVQUFBO0VBQ0EsV0FBQTtBQURGO0FBR0E7RUFDRSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGdCQUFBO0FBQUY7QUFDRTtFQUNFLGFBQUE7RUFDQSw4QkFBQTtFQUNBLFlBQUE7RUFDQSxtQkFsTU87RUFtTVAsaUJBQUE7RUFDQSxlQUFBO0VBQ0EsU0FBQTtBQUNKO0FBQUk7RUFDRSxtQkFBQTtBQUVOO0FBQUk7RUFDRSxZQUFBO0VBQ0EsVUFBQTtFQUNBLFdBQUE7RUFDQSxrQkFBQTtFQUNBLHFCQUFBO0FBRU47QUFDRTtFQUNFLGFBQUE7RUFDQSxjQUFBO0VBQ0EsY0FwTk87RUFxTlAsaUJBQUE7RUFDQSxxQkFBQTtBQUNKO0FBQ0U7RUFDRSxhQUFBO0VBQ0EseUJBQUE7RUFDQSxZQUFBO0VBQ0EsaUJBQUE7RUFDQSxtQkE3Tk87RUE4TlAsZUFBQTtBQUNKO0FBQUk7RUFDRSxtQkFBQTtBQUVOO0FBR0k7RUFDRSxtQkFBQTtBQUFOO0FBQ007RUFDRSx3QkFBQTtBQUNSO0FBRUk7RUFDRSxpQkFBQTtFQUNBLFlBQUE7QUFBTjtBQUdFO0VBQ0UsYUFBQTtBQUFKO0FBRUE7RUFDRSxZQUFBO0VBQ0EsOEJBQUE7RUFDQSxzQkFBQTtFQUNBLGdCQUFBO0VBQ0EsK0JBQUE7RUFDQSxrQkFBQTtFQUNBLGtCQUFBO0VBQ0EsbUJBQUE7RUFDQSxnQkFBQTtBQUNGO0FBQ0E7RUFDRSxrQkFBQTtFQUNBLHlCQUFBO0VBQ0EsV0FBQTtFQUNBLDhCQUFBO0VBQ0EscUJBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGlCQUFBO0VBQ0Esa0JBQUE7RUFDQSxrQkFBQTtFQUNBLFdBQUE7QUFFRjtBQUFBO0VBQ0Usa0JBQUE7RUFDQSx5QkFBQTtFQUNBLFdBQUE7RUFDQSw4QkFBQTtFQUNBLHFCQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxpQkFBQTtFQUNBLGtCQUFBO0VBQ0Esa0JBQUE7RUFDQSxXQUFBO0FBR0Y7QUFEQTtFQUNFLDRCQUFBO0FBSUY7QUFGQTtFQUNFLGtCQUFBO0VBQ0EseUJBQUE7RUFDQSxXQUFBO0VBQ0EsOEJBQUE7RUFDQSxxQkFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0EsaUJBQUE7RUFDQSxrQkFBQTtFQUNBLGtCQUFBO0VBQ0EsV0FBQTtBQUtGO0FBSEE7RUFDRSxjQUFBO0VBQ0EsZ0JBQUE7RUFDQSxnQkFBQTtBQU1GO0FBSEE7RUFDRSxXQUFBO0VBQ0EsVUFBQTtFQUNBLFNBQUE7RUFDQSxnQkFBQTtFQUtBLGFBQUE7RUFDQSxlQUFBO0VBQ0Esc0JBQUE7RUFDQSw2QkFBQTtFQUNBLGlCQUFBO0VBQ0EsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsV0FBQTtBQU1GO0FBSEU7RUFFRSxhQUFBO0VBQ0EsY0FBQTtFQUNBLGdCQUFBO0VBQ0EsaUJBQUE7RUFHQSxtQkFBQTtFQUNBLFdBQUE7RUFDQSx1QkFBQTtFQUNBLHFCQUFBO0FBTUo7QUFGQTtFQUNFLHFCQUFBO0VBQ0EsV0FBQTtFQUNBLGtCQUFBO0VBQ0EsVUFBQTtFQUNBLGNBQUE7RUFDQSxlQUFBO0VBQ0EsZUFBQTtBQUtGO0FBSkU7RUFDRSxlQUFBO0VBQ0EsY0FBQTtFQUNBLGdCQUFBO0VBQ0EsaUJBQUE7RUFDQSxpQkFBQTtBQU1KO0FBSEE7RUFDRSxnQkFBQTtFQUNBLGtCQUFBO0VBQ0EsdUNBQUE7RUFDQSxZQUFBO0VBQ0EsbUJBQUE7QUFNRjtBQUhBO0VBQ0Usd0JBQUE7QUFNRiIsImZpbGUiOiJhZG1pc3Npb25mb3JtLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIlxyXG4kbWlkbmlnaHQ6ICMyYzNlNTA7XHJcbiRjbG91ZHM6ICNlY2YwZjE7XHJcblxyXG4uc3RlcHtcclxuICAgIGNvbG9yOiAjYTJhMmEyO1xyXG4gICAgZm9udC1zaXplOiAxNnB4O1xyXG4gICAgbWFyZ2luLWxlZnQ6IDE2cHg7XHJcbiAgICBmb250LWZhbWlseTogaW5pdGlhbDtcclxuICAgIG1hcmdpbi1ib3R0b206IDJweDtcclxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG59XHJcbi5zdGVwLWhlYWRpbmd7XHJcbiAgICBjb2xvcjogI2ZkZDY1MztcclxuICAgIG1hcmdpbi1sZWZ0OiAxNnB4O1xyXG4gICAgZm9udC1mYW1pbHk6IGluaXRpYWw7XHJcbiAgICBmb250LXNpemU6IDMwcHg7XHJcbiAgICBtYXJnaW4tdG9wOiAwO1xyXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgICB0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZTtcclxuICAgIHRleHQtZGVjb3JhdGlvbi10aGlja25lc3M6IDJweDtcclxufVxyXG4ud3JhcCB7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgfVxyXG4gIFxyXG4gIC53cmFwOmJlZm9yZSB7XHJcbiAgICBjb250ZW50OiBcIlwiO1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgdG9wOiAyMCU7XHJcbiAgICBsZWZ0OiAxOCU7XHJcbiAgICBib3JkZXItdG9wOiAwLjVweCBzb2xpZCAjNjc3NDgzO1xyXG4gICAgYm9yZGVyLXdpZHRoOiB0aGluO1xyXG4gICAgd2lkdGg6IDY1JTtcclxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtNTAlKTtcclxuICAgIGJvcmRlci1zdHlsZTogZGFzaGVkO1xyXG4gIH1cclxuICAuYWN0aXZle1xyXG4gICAgYmFja2dyb3VuZDogI2ZkZDY1MztcclxuICAgIGNvbG9yOiAjZmZmZmZmO1xyXG4gIH1cclxuICAuaWNvbi1jaXJjbGV7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgICBtYXJnaW46IC0xcHg7XHJcbiAgICB3aWR0aDogMzBweDtcclxuICAgIGhlaWdodDogMzBweDtcclxuICAgIGZvbnQtc2l6ZTogMjZweDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcclxuICAgIGJvcmRlcjogMXB4IHNvbGlkICMyMDIwMjA7XHJcbiAgICBiYWNrZ3JvdW5kOiAjZmZmO1xyXG4gICAgY29sb3I6ICMyMDIwMjA7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcblxyXG4gICAgaW9uLWljb257XHJcbiAgICAgICAgbWFyZ2luLXRvcDogMnB4O1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMjBweDtcclxuICAgIH1cclxuICBcclxuICB9XHJcbiAgXHJcbiAgXHJcbiAgLmhlYWRpbmctMXtcclxuICAgIGNvbG9yOiAjNjc2NzY3O1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMDtcclxuICAgIGZvbnQtc2l6ZTogMTZweDtcclxufVxyXG4uaGVhZGluZ3tcclxuICAgIGNvbG9yOiAjOWI5Y2E2O1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMDtcclxuICAgIGZvbnQtc2l6ZTogMTRweDtcclxufVxyXG5pb24tbGFiZWx7XHJcbiAgICBjb2xvcjogIzliOWNhNjtcclxuICAgIGZvbnQtc2l6ZTogMTRweDtcclxufVxyXG5pb24taW5wdXQge1xyXG4gICAgYm9yZGVyOiAxcHggc29saWQgIzliOWNhNjtcclxuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcclxuICAgIC0tcGFkZGluZy1zdGFydDogNXB4ICFpbXBvcnRhbnQ7XHJcbiAgICBoZWlnaHQ6MzVweDtcclxufVxyXG5pb24tdGV4dGFyZWF7XHJcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjOWI5Y2E2O1xyXG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xyXG4gICAgLS1wYWRkaW5nLXN0YXJ0OiA1cHggIWltcG9ydGFudDtcclxufVxyXG5pb24tZGF0ZXRpbWV7XHJcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjOWI5Y2E2O1xyXG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xyXG4gICAgLS1wYWRkaW5nLXN0YXJ0OiA1cHggIWltcG9ydGFudDtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgaGVpZ2h0OjM1cHg7XHJcblxyXG59XHJcbmlvbi1pdGVte1xyXG4gICAgLy8gYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICM2Nzc0ODM7XHJcbiAgICAtLXBhZGRpbmctc3RhcnQ6IDA7XHJcbiAgICAtLXJpcHBsZS1jb2xvcjogdHJhbnNwYXJlbnQ7XHJcbiAgICAtLWJhY2tncm91bmQtYWN0aXZhdGVkOiB0cmFuc3BhcmVudDtcclxuICAgIC0tYmFja2dyb3VuZC1hY3RpdmF0ZWQtb3BhY2l0eTp0cmFuc3BhcmVudDtcclxuICAgIC0tYmFja2dyb3VuZC1mb2N1c2VkOiB0cmFuc3BhcmVudDtcclxuICAgIC0tYmFja2dyb3VuZC1mb2N1c2VkLW9wYWNpdHk6dHJhbnNwYXJlbnQ7XHJcbiAgICAtLWJhY2tncm91bmQtaG92ZXIgIDogdHJhbnNwYXJlbnQ7XHJcbiAgICAtLWJhY2tncm91bmQtaG92ZXItb3BhY2l0eSAgOnRyYW5zcGFyZW50O1xyXG5cclxuICAgIGlvbi1sYWJlbCB7XHJcbiAgICAgICAgZm9udC1zaXplOiAxMnB4O1xyXG4gICAgICAgIGNvbG9yOiAjOWI5Y2E2O1xyXG5cclxuICAgIH1cclxufVxyXG4gICAgaW9uLXJhZGlvLWdyb3Vwe1xyXG4gICAgICAgIGlvbi1pdGVte1xyXG4gICAgICAgICAgICBib3JkZXItYm90dG9tOiAwO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpb24tY29sIHtcclxuICAgICAgICAgICAgcGFkZGluZy1sZWZ0OiAwO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpb24tcmFkaW97XHJcbiAgICAgICAgbWFyZ2luLXJpZ2h0OiA4cHg7XHJcbiAgICAgICAgd2lkdGg6IDE4cHg7XHJcbiAgICAgICAgaGVpZ2h0OiAxOHB4O1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBpb24tY29sIHtcclxuICAgICAgICBwYWRkaW5nLWxlZnQ6IDA7XHJcbiAgICB9XHJcblxyXG4gICAgaW9uLWJ1dHRvbiB7XHJcbiAgICAgICAgdGV4dC10cmFuc2Zvcm06IG5vbmU7XHJcbiAgICB9XHJcbiAgICBcclxuICAgIC5jaG9vc2UtYnRue1xyXG4gICAgICAgIC0tYmFja2dyb3VuZDogI2VlNGEzNTtcclxuICAgICAgICAtLWNvbG9yOiNmZmY7XHJcbiAgICB9XHJcbiAgICAuaGVhZGluZy0ze1xyXG4gICAgICAgIG1hcmdpbi10b3A6IDEycHg7XHJcbiAgICAgICAgY29sb3I6ICM5Mjk3OTE7XHJcbiAgICB9XHJcbiAgICAuYWRtaXNzaW9uLXJvd3tcclxuICAgICAgICBpb24tY29se1xyXG4gICAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICAgICAgICAgIHRleHQtYWxpZ246IC1tb3otY2VudGVyO1xyXG4gICAgICAgICAgICBpb24tYnV0dG9ue1xyXG4gICAgICAgICAgICAgICAgdGV4dC10cmFuc2Zvcm06IG5vbmU7XHJcbiAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgd2lkdGg6IDQwJTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICBcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICAuYnRuLXJvd3tcclxuICAgICAgICBpb24tY29se1xyXG4gICAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICAgICAgICAgIHRleHQtYWxpZ246IC1tb3otY2VudGVyO1xyXG4gICAgICAgICAgICBpb24tYnV0dG9ue1xyXG4gICAgICAgICAgICAgICAgdGV4dC10cmFuc2Zvcm06IG5vbmU7XHJcbiAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgd2lkdGg6IDc1JTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICBcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICAubmV4dC1idG4tY29se1xyXG4gICAgICAgIHRleHQtYWxpZ246IGxlZnQgIWltcG9ydGFudDtcclxuICAgIH1cclxuICAgIGlvbi1zZWdtZW50LWJ1dHRvbntcclxuICAgICAgICB0ZXh0LXRyYW5zZm9ybTogbm9uZTtcclxuICAgIH1cclxuICAgIGltZ3tcclxuICAgICAgICB3aWR0aDogNjAlO1xyXG4gICAgfVxyXG5cclxuICAgIC50YWJzIHtcclxuICBib3JkZXItcmFkaXVzOiAwO1xyXG4gIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgYm94LXNoYWRvdzogMCA0cHggNHB4IC0ycHggcmdiYSgwLDAsMCwwLjUpO1xyXG59XHJcbiNjaGNrMXtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgb3BhY2l0eTogMDtcclxuICB6LWluZGV4OiAtMTtcclxufVxyXG4udGFiIHtcclxuICB3aWR0aDogMTAwJTtcclxuICBjb2xvcjogd2hpdGU7XHJcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICAmLWxhYmVsIHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcbiAgICBwYWRkaW5nOiAxZW07XHJcbiAgICBiYWNrZ3JvdW5kOiAkbWlkbmlnaHQ7XHJcbiAgICBmb250LXdlaWdodDogYm9sZDtcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgIC8qIEljb24gKi9cclxuICAgICY6aG92ZXIge1xyXG4gICAgICBiYWNrZ3JvdW5kOiBkYXJrZW4oJG1pZG5pZ2h0LCAxMCUpO1xyXG4gICAgfVxyXG4gICAgJjo6YWZ0ZXIge1xyXG4gICAgICBjb250ZW50OiBcIlxcMjc2RlwiO1xyXG4gICAgICB3aWR0aDogMWVtO1xyXG4gICAgICBoZWlnaHQ6IDFlbTtcclxuICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgICB0cmFuc2l0aW9uOiBhbGwgLjM1cztcclxuICAgIH1cclxuICB9XHJcbiAgJi1jb250ZW50IHtcclxuICAgIG1heC1oZWlnaHQ6IDA7XHJcbiAgICBwYWRkaW5nOiAwIDFlbTtcclxuICAgIGNvbG9yOiAkbWlkbmlnaHQ7XHJcbiAgICBiYWNrZ3JvdW5kOiB3aGl0ZTtcclxuICAgIHRyYW5zaXRpb246IGFsbCAuMzVzO1xyXG4gIH1cclxuICAmLWNsb3NlIHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtZW5kO1xyXG4gICAgcGFkZGluZzogMWVtO1xyXG4gICAgZm9udC1zaXplOiAwLjc1ZW07XHJcbiAgICBiYWNrZ3JvdW5kOiAkbWlkbmlnaHQ7XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICAmOmhvdmVyIHtcclxuICAgICAgYmFja2dyb3VuZDogZGFya2VuKCRtaWRuaWdodCwgMTAlKTtcclxuICAgIH1cclxuICB9XHJcbn1cclxuI2NoY2sxOmNoZWNrZWQge1xyXG4gICAgKyAudGFiLWxhYmVsIHtcclxuICAgICAgYmFja2dyb3VuZDogZGFya2VuKCRtaWRuaWdodCwgMTAlKTtcclxuICAgICAgJjo6YWZ0ZXIge1xyXG4gICAgICAgIHRyYW5zZm9ybTogcm90YXRlKDkwZGVnKTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gICAgfiAudGFiLWNvbnRlbnQge1xyXG4gICAgICBtYXgtaGVpZ2h0OiAxMDB2aDtcclxuICAgICAgcGFkZGluZzogMWVtO1xyXG4gICAgfVxyXG4gIH1cclxuICAuaW5zaWRlLWJvZHkge1xyXG4gICAgcGFkZGluZzogMjVweDtcclxufVxyXG4ubGlzdC1ncm91cC52ZXJ0aWNhbC1zdGVwcyAubGlzdC1ncm91cC1pdGVtIHtcclxuICBib3JkZXI6IG5vbmU7XHJcbiAgYm9yZGVyLWxlZnQ6IDNweCBzb2xpZCAjYjRiNGI0O1xyXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XHJcbiAgYm9yZGVyLXJhZGl1czogMDtcclxuICBjb3VudGVyLWluY3JlbWVudDogc3RlcC1jb3VudGVyO1xyXG4gIHBhZGRpbmctbGVmdDogMjBweDtcclxuICBwYWRkaW5nLXJpZ2h0OiAwcHg7XHJcbiAgcGFkZGluZy1ib3R0b206IDdweDtcclxuICBwYWRkaW5nLXRvcDogMHB4O1xyXG59XHJcbi5saXN0LWdyb3VwLnZlcnRpY2FsLXN0ZXBzIC5saXN0LWdyb3VwLWl0ZW06OmJlZm9yZSB7XHJcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICNiNGI0YjQ7XHJcbiAgY29sb3I6ICNmZmY7XHJcbiAgY29udGVudDogY291bnRlcihzdGVwLWNvdW50ZXIpO1xyXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICBmbG9hdDogbGVmdDtcclxuICBoZWlnaHQ6IDI1cHg7XHJcbiAgbGluZS1oZWlnaHQ6IDI1cHg7XHJcbiAgbWFyZ2luLWxlZnQ6IC0zNXB4O1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICB3aWR0aDogMjVweDtcclxufVxyXG4ubGlzdC1ncm91cC52ZXJ0aWNhbC1zdGVwcyAuZmluYWw6OmJlZm9yZSB7XHJcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICNiNGI0YjQ7XHJcbiAgY29sb3I6ICNmZmY7XHJcbiAgY29udGVudDogY291bnRlcihzdGVwLWNvdW50ZXIpO1xyXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICBmbG9hdDogbGVmdDtcclxuICBoZWlnaHQ6IDI1cHg7XHJcbiAgbGluZS1oZWlnaHQ6IDI1cHg7XHJcbiAgbWFyZ2luLWxlZnQ6IC0zMnB4O1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICB3aWR0aDogMjVweDtcclxufVxyXG4uZmluYWx7XHJcbiAgYm9yZGVyLWxlZnQ6IG5vbmUgIWltcG9ydGFudDtcclxufVxyXG4ubGlzdC1ncm91cC52ZXJ0aWNhbC1zdGVwcyAuc3RlcC1hY3RpdmU6OmJlZm9yZSB7XHJcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICMyZGQzNmY7XHJcbiAgY29sb3I6ICNmZmY7XHJcbiAgY29udGVudDogY291bnRlcihzdGVwLWNvdW50ZXIpO1xyXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICBmbG9hdDogbGVmdDtcclxuICBoZWlnaHQ6IDI1cHg7XHJcbiAgbGluZS1oZWlnaHQ6IDI1cHg7XHJcbiAgbWFyZ2luLWxlZnQ6IC0zNXB4O1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICB3aWR0aDogMjVweDtcclxufVxyXG4ubGlzdC1ncm91cC52ZXJ0aWNhbC1zdGVwcyAubGlzdC1ncm91cC1pdGVtIHNwYW4sIC5saXN0LWdyb3VwLnZlcnRpY2FsLXN0ZXBzIC5saXN0LWdyb3VwLWl0ZW0gYSB7XHJcbiAgZGlzcGxheTogYmxvY2s7XHJcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICBwYWRkaW5nLXRvcDogMnB4O1xyXG59XHJcblxyXG5kaXYucmV1c2FibGVfYWNjb3JkaW9uIHtcclxuICB6LWluZGV4OiA5OTtcclxuICBwYWRkaW5nOiAwO1xyXG4gIG1hcmdpbjogMDtcclxuICBsaXN0LXN0eWxlOiBub25lO1xyXG4gIGRpc3BsYXk6IC13ZWJraXQtYm94O1xyXG4gIGRpc3BsYXk6IC1tb3otYm94O1xyXG4gIGRpc3BsYXk6IC1tcy1mbGV4Ym94O1xyXG4gIGRpc3BsYXk6IC13ZWJraXQtZmxleDtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGZsZXgtd3JhcDogd3JhcDtcclxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xyXG4gIGxpbmUtaGVpZ2h0OiAyNXB4O1xyXG4gIGhlaWdodDogMTgwcHg7XHJcbiAgYmFja2dyb3VuZDogI2YxZjFmMTtcclxuICB3aWR0aDogYXV0bztcclxufVxyXG5kaXYudGVtcGxhdGVfYWNjb3JkaW9uIHtcclxuICBkaXYudGVtcGxhdGVfY29udGFpbmVycyB7XHJcbiAgICBkaXNwbGF5OiAtd2Via2l0LWJveDtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBtaW4td2lkdGg6IDQ1JTtcclxuICAgIG1pbi1oZWlnaHQ6IDYwcHg7XHJcbiAgICBiYWNrZ3JvdW5kOiB3aGl0ZTtcclxuICAgIC13ZWJraXQtYm94LW9yaWVudDogaG9yaXpvbnRhbDtcclxuICAgIC13ZWJraXQtYm94LWRpcmVjdGlvbjogbm9ybWFsO1xyXG4gICAgZmxleC1kaXJlY3Rpb246IHJvdztcclxuICAgIG1hcmdpbjogNXB4O1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICBhbGlnbi1jb250ZW50OiBjZW50ZXI7XHJcbiAgfVxyXG59XHJcblxyXG4udG9nZ2xlX2J1dHRvbiB7XHJcbiAgLS1iYWNrZ3JvdW5kOiAjZjFmMWYxO1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICBwYWRkaW5nOiAwO1xyXG4gIGNvbG9yOiAjMjAyMDIwO1xyXG4gIGN1cnNvcjogcG9pbnRlcjtcclxuICBtaW4td2lkdGg6IDEwMCU7XHJcbiAgaW9uLWxhYmVse1xyXG4gICAgZm9udC1zaXplOiAxNnB4O1xyXG4gICAgY29sb3I6ICMyMDIwMjA7XHJcbiAgICB0ZXh0LWFsaWduOiBsZWZ0O1xyXG4gICAgbWFyZ2luLWxlZnQ6IDIwcHg7XHJcbiAgICBmb250LXdlaWdodDogYm9sZDtcclxuICB9XHJcbn1cclxuZGl2LmFjY29yZGlvbi1jb250YWluZXIge1xyXG4gIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgb3ZlcmZsb3cteTogc2Nyb2xsO1xyXG4gIHRyYW5zaXRpb246IG1heC1oZWlnaHQgMC41cyBlYXNlLWluLW91dDtcclxuICBoZWlnaHQ6IGF1dG87XHJcbiAgYmFja2dyb3VuZDogcmdiKDMxLCA0MywgNTUpO1xyXG59XHJcblxyXG5kaXYuYWNjb3JkaW9uLWNvbnRhaW5lci5jb2xsYXBzZWQge1xyXG4gIG1heC1oZWlnaHQ6IDAgIWltcG9ydGFudDtcclxufVxyXG5cclxuIl19 */");

/***/ }),

/***/ "MDSC":
/*!*********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/admissionform/admissionform.page.html ***!
  \*********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n  <ion-toolbar>\n    <ion-title>Admission Form</ion-title>\n    <ion-buttons slot=\"start\">\n      <ion-button shape=\"round\" (click)=\"goBack()\">\n        <ion-icon color=\"light\" name=\"arrow-back-outline\"></ion-icon>\n      </ion-button>\n    </ion-buttons>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <ion-refresher slot=\"fixed\" (ionRefresh)=\"doRefresh($event)\">\n    <ion-refresher-content></ion-refresher-content>\n  </ion-refresher>\n  <div class=\"margin-ionic\">\n  <form [formGroup]=\"admissionForm\" (ngSubmit)=\"onSubmit(admissionForm.value)\">\n    <p class=\"heading-1\">Prangan Centres </p>\n    <ion-radio-group allowEmptySelection=\"false\" color=\"primary\" formControlName=\"branch_id\">\n      <ion-row *ngIf=\"branches\">\n        <ion-col *ngFor=\"let branch of branches\">\n          <ion-item lines=\"none\">\n            <!-- <ion-radio value=\"{{branch.id}}\"  [disabled]=\"isLoggedIn && userType=='Daycare'\"></ion-radio> -->\n            <ion-radio value=\"{{branch.id}}\" ></ion-radio>\n            <ion-label>{{branch.branch_name}}</ion-label>\n          </ion-item>\n        </ion-col>\n      </ion-row>\n    </ion-radio-group>\n    <ion-row>\n      <ion-col size=\"6\">\n        <ion-label>Program </ion-label>\n        <ion-item lines=\"none\">\n          <ion-input  type=\"text\" formControlName=\"program\"></ion-input>\n        </ion-item>\n        <div class=\"error-div\" *ngIf=\"(program?.invalid && program?.touched) || program?.dirty\">\n          <small *ngIf=\"program.errors?.pattern\" class=\"text-danger\">Enter a valid program</small>\n        </div>\n      </ion-col>\n      <ion-col size=\"12\">\n        <ion-label>Child's Name </ion-label>\n        <ion-item lines=\"none\">\n          <ion-input formControlName=\"child_name\" type=\"text\"></ion-input>\n        </ion-item>\n        <div class=\"error-div\" *ngIf=\"(child_name?.invalid && program?.touched) || child_name?.dirty\">\n          <small *ngIf=\"child_name.errors?.pattern\" class=\"text-danger\">Enter a valid child name</small>\n        </div>\n      </ion-col>\n      <ion-col size=\"12\">\n        <ion-label>Gender </ion-label>\n\n        <ion-radio-group allowEmptySelection=\"false\" color=\"primary\" formControlName=\"gender\">\n          <ion-row>\n            <ion-col size=\"4\">\n              <ion-item lines=\"none\">\n                <ion-radio value=\"Boy\"></ion-radio>\n                <ion-label>Boy</ion-label>\n              </ion-item>\n            </ion-col>\n            <ion-col size=\"4\">\n              <ion-item lines=\"none\">\n                <ion-radio value=\"Girl\"></ion-radio>\n                <ion-label>Girl</ion-label>\n              </ion-item>\n            </ion-col>\n            <ion-col size=\"4\">\n              <ion-item lines=\"none\">\n                <ion-radio value=\"Other\"></ion-radio>\n                <ion-label>Other</ion-label>\n              </ion-item>\n            </ion-col>\n          </ion-row>\n        </ion-radio-group>\n      </ion-col>\n      <ion-col size=\"6\">\n        <ion-label>Child's DOB </ion-label>\n        <ion-item lines=\"none\">\n          <ion-datetime displayFormat=\"DD MMM  YYYY\" formControlName=\"d_o_b\"></ion-datetime>\n          <!-- <ion-datetime displayFormat=\"DD MMM  YYYY\" formControlName=\"d_o_b\" max=\"{{todays_date}}\" (ionChange)=\"ageFromDOB($event)\"></ion-datetime> -->\n        </ion-item>\n      </ion-col>\n        <ion-col size=\"6\">\n        <ion-label>Child's Age</ion-label>\n        <ion-item lines=\"none\">\n          <ion-input type=\"number\" formControlName=\"child_age\" maxLength=\"2\"></ion-input>\n        </ion-item>\n      </ion-col>\n      </ion-row>\n\n      <ion-label>Address </ion-label>\n\n      <ion-item lines=\"none\">\n        <ion-textarea rows=\"6\" cols=\"20\" formControlName=\"address\"></ion-textarea>\n      </ion-item>\n      <ion-row>\n      <ion-col size=\"12\">\n        <ion-label>Name of the School</ion-label>\n        <ion-item lines=\"none\">\n          <ion-input formControlName=\"school_name\" type=\"text\"></ion-input>\n        </ion-item>\n      </ion-col>\n      <ion-col size=\"12\">\n        <ion-label>Standard</ion-label>\n        <ion-item lines=\"none\">\n          <ion-input formControlName=\"school_std\" type=\"text\"></ion-input>\n        </ion-item>\n      </ion-col>\n\n      <p>Parent's Details</p>\n      <ion-col size=\"12\">\n        <ion-label>Father's Name</ion-label>\n        <ion-item lines=\"none\">\n          <ion-input formControlName=\"fathers_name\" type=\"text\"></ion-input>\n        </ion-item>\n        <div class=\"error-div\" *ngIf=\"(fathers_name?.invalid && fathers_name?.touched) || fathers_name?.dirty\">\n          <small *ngIf=\"fathers_name.errors?.pattern\" class=\"text-danger\">Enter a valid name </small>\n        </div>\n      </ion-col>\n      <ion-col size=\"6\">\n        <ion-label>Father's Age</ion-label>\n        <ion-item lines=\"none\">\n          <ion-input formControlName=\"fathers_age\" type=\"number\"></ion-input>\n        </ion-item>\n      </ion-col>\n      <ion-col size=\"6\">\n        <ion-label>Father's Qualification</ion-label>\n        <ion-item lines=\"none\">\n          <ion-input formControlName=\"fathers_qualification\" type=\"text\"></ion-input>\n        </ion-item>\n      </ion-col>\n      </ion-row>\n      <ion-label>Office Address </ion-label>\n      <ion-item lines=\"none\">\n        <ion-textarea rows=\"6\" cols=\"20\" formControlName=\"office_address\"></ion-textarea>\n      </ion-item>\n      <ion-row>\n   \n      <ion-col size=\"6\">\n        <ion-label>Father's Mobile Number\n        </ion-label>\n        <ion-item lines=\"none\">\n          <ion-input type=\"tel\" maxlength=\"10\" formControlName=\"fathers_no\"></ion-input>\n        </ion-item>\n        <div class=\"error-div\" *ngIf=\"(fathers_no?.invalid && fathers_no?.touched) || fathers_no?.dirty\">\n          <small *ngIf=\"fathers_no.errors?.pattern\" class=\"text-danger\">Enter a valid mobile number</small>\n        </div>\n      </ion-col>\n      <ion-col size=\"6\">\n        <ion-label>Father's Email ID</ion-label>\n        <ion-item lines=\"none\">\n          <ion-input type=\"text\" formControlName=\"fathers_email\"></ion-input>\n        </ion-item>\n        <div class=\"error-div\" *ngIf=\"(fathers_email?.invalid && fathers_email?.touched) || fathers_email?.dirty\">\n          <small *ngIf=\"fathers_email.errors?.pattern\" class=\"text-danger\">Enter a valid email id</small>\n        </div>\n      </ion-col>\n      <ion-col size=\"12\">\n        <ion-label>Mother's Name\n        </ion-label>\n        <ion-item lines=\"none\">\n          <ion-input type=\"text\" formControlName=\"mothers_name\"></ion-input>\n        </ion-item>\n        <div class=\"error-div\" *ngIf=\"(mothers_name?.invalid && mothers_name?.touched) || mothers_name?.dirty\">\n          <small *ngIf=\"mothers_name.errors?.pattern\" class=\"text-danger\">Enter a valid name </small>\n        </div>\n      </ion-col>\n      <ion-col size=\"6\">\n        <ion-label>Mother's Age</ion-label>\n        <ion-item lines=\"none\">\n          <ion-input formControlName=\"mothers_age\" type=\"number\"></ion-input>\n        </ion-item>\n      </ion-col>\n      <ion-col size=\"6\">\n        <ion-label>Mother's Qualification</ion-label>\n        <ion-item lines=\"none\">\n          <ion-input formControlName=\"mothers_qualification\" type=\"text\"></ion-input>\n        </ion-item>\n      </ion-col>\n      </ion-row>\n      <ion-label>Office Address </ion-label>\n      <ion-item lines=\"none\">\n        <ion-textarea rows=\"6\" cols=\"20\" formControlName=\"mother_office_address\"></ion-textarea>\n      </ion-item>\n      <ion-row>\n\n      <ion-col size=\"6\">\n        <ion-label>Mother's Mobile Number\n        </ion-label>\n        <ion-item lines=\"none\">\n          <ion-input type=\"tel\" maxlength=\"10\" formControlName=\"mothers_no\"></ion-input>\n        </ion-item>\n        <div class=\"error-div\" *ngIf=\"(mothers_no?.invalid && mothers_no?.touched) || mothers_no?.dirty\">\n          <small *ngIf=\"mothers_no.errors?.pattern\" class=\"text-danger\">Enter a valid mobile number</small>\n        </div>\n      </ion-col>\n      <ion-col size=\"6\">\n        <ion-label>Mother's Email ID</ion-label>\n        <ion-item lines=\"none\">\n          <ion-input type=\"text\" formControlName=\"mothers_email\"></ion-input>\n        </ion-item>\n        <div class=\"error-div\" *ngIf=\"(mothers_email?.invalid && mothers_email?.touched) || mothers_email?.dirty\">\n          <small *ngIf=\"mothers_email.errors?.pattern\" class=\"text-danger\">Enter a valid email id</small>\n        </div>\n      </ion-col>\n    \n      <ion-col size=\"6\">\n        <ion-label>Mother Tongue</ion-label>\n        <ion-item lines=\"none\">\n          <ion-input type=\"text\" formControlName=\"mother_tongue\"></ion-input>\n        </ion-item>\n        <div class=\"error-div\" *ngIf=\"(mother_tongue?.invalid && mother_tongue?.touched) || mother_tongue?.dirty\">\n          <small *ngIf=\"mother_tongue.errors?.pattern\" class=\"text-danger\">Enter valid mother tongue</small>\n        </div>\n      </ion-col>\n      <ion-col size=\"6\">\n        <ion-label>Height</ion-label>\n        <ion-item lines=\"none\">\n          <ion-input type=\"number\" formControlName=\"height\"></ion-input>\n        </ion-item>\n        <div class=\"error-div\" *ngIf=\"(height?.invalid && height?.touched) || height?.dirty\">\n          <small *ngIf=\"height.errors?.pattern\" class=\"text-danger\">Enter valid height</small>\n        </div>\n      </ion-col>\n      <ion-col size=\"6\">\n        <ion-label>Weight (On the day of joining Prangan)</ion-label>\n        <ion-item lines=\"none\">\n          <ion-input type=\"number\" formControlName=\"weight\"></ion-input>\n        </ion-item>\n        <div class=\"error-div\" *ngIf=\"(weight?.invalid && weight?.touched) || weight?.dirty\">\n          <small *ngIf=\"weight.errors?.pattern\" class=\"text-danger\">Enter valid weight</small>\n        </div>\n      </ion-col>\n      <ion-col size=\"12\">\n        <ion-label>Languages known to the child</ion-label>\n        <ion-item lines=\"none\">\n          <ion-input type=\"text\" formControlName=\"languages\"></ion-input>\n        </ion-item>\n        <div class=\"error-div\" *ngIf=\"(languages?.invalid && languages?.touched) || languages?.dirty\">\n          <small *ngIf=\"languages.errors?.pattern\" class=\"text-danger\">Enter valid language</small>\n        </div>\n      </ion-col>\n      <ion-radio-group allowEmptySelection=\"false\" color=\"primary\" formControlName=\"family\">\n        <ion-row >\n          <ion-col >\n            <ion-item lines=\"none\">\n              <ion-radio value=\"joint\"></ion-radio>\n              <ion-label>Joint</ion-label>\n            </ion-item>\n          </ion-col>\n          <ion-col >\n            <ion-item lines=\"none\">\n              <ion-radio value=\"nuclear\"></ion-radio>\n              <ion-label>Nuclear</ion-label>\n            </ion-item>\n          </ion-col>\n        </ion-row>\n      </ion-radio-group>\n      <ion-col size=\"6\">\n        <ion-label>Sibling Sisters</ion-label>\n        <ion-item lines=\"none\">\n          <ion-input type=\"text\" formControlName=\"sibling_sister\"></ion-input>\n        </ion-item>\n        \n      </ion-col>\n      <ion-col size=\"6\">\n        <ion-label>Sibling Brother</ion-label>\n        <ion-item lines=\"none\">\n          <ion-input type=\"text\" formControlName=\"sibling_brother\"></ion-input>\n        </ion-item>\n       \n      </ion-col>\n      <ion-col size=\"12\">\n        <ion-label>Total numbers of members in the family</ion-label>\n        <ion-item lines=\"none\">\n          <ion-input type=\"number\" formControlName=\"total_members\"></ion-input>\n        </ion-item>\n        <div class=\"error-div\" *ngIf=\"(total_members?.invalid && total_members?.touched) || total_members?.dirty\">\n          <small *ngIf=\"total_members.errors?.pattern\" class=\"text-danger\">Enter  valid number</small>\n        </div>\n      </ion-col>\n      <ion-col size=\"12\">\n        <ion-label>Child is more attached to</ion-label>\n        <ion-item lines=\"none\">\n          <ion-input type=\"text\" formControlName=\"attached_to\"></ion-input>\n        </ion-item>\n      </ion-col>\n      <ion-col size=\"6\">\n        <ion-label>Emergency Contact Number\n        </ion-label>\n        <ion-item lines=\"none\">\n          <ion-input type=\"tel\" maxlength=\"10\" formControlName=\"emergency_cntct_no\"></ion-input>\n        </ion-item>\n        <div class=\"error-div\" *ngIf=\"(emergency_cntct_no?.invalid && emergency_cntct_no?.touched) || emergency_cntct_no?.dirty\">\n          <small *ngIf=\"emergency_cntct_no.errors?.pattern\" class=\"text-danger\">Enter a valid mobile number</small>\n        </div>\n      </ion-col>\n      <ion-col size=\"12\">\n        <ion-label>Any Food Allergies\n        </ion-label>\n        <ion-item lines=\"none\">\n          <ion-input type=\"text\" formControlName=\"food_allergies\"></ion-input>\n        </ion-item>\n        <div class=\"error-div\" *ngIf=\"(food_allergies?.invalid && food_allergies?.touched) || food_allergies?.dirty\">\n          <small *ngIf=\"food_allergies.errors?.pattern\" class=\"text-danger\">Enter valid allergy</small>\n        </div>\n      </ion-col>\n      <ion-col size=\"12\">\n        <ion-label>Any Other Allergies\n        </ion-label>\n        <ion-item lines=\"none\">\n          <ion-input type=\"text\" formControlName=\"other_allergies\"></ion-input>\n        </ion-item>\n        <div class=\"error-div\" *ngIf=\"(other_allergies?.invalid && other_allergies?.touched) || other_allergies?.dirty\">\n          <small *ngIf=\"other_allergies.errors?.pattern\" class=\"text-danger\">Enter  valid allergy</small>\n        </div>\n      </ion-col>\n      <ion-col size=\"12\">\n        <ion-label>Precautions against any specific ailments\n        </ion-label>\n        <ion-item lines=\"none\">\n          <ion-input type=\"text\" formControlName=\"precautions\"></ion-input>\n        </ion-item>\n        <div class=\"error-div\" *ngIf=\"(precautions?.invalid && precautions?.touched) || precautions?.dirty\">\n          <small *ngIf=\"precautions.errors?.pattern\" class=\"text-danger\">Enter valid precaution</small>\n        </div>\n      </ion-col>\n        <ion-col size=\"6\">\n          <ion-label>\n            Child's Picture </ion-label>\n            <br>\n            <img  class=\"img-size\" *ngIf=\"childbase64Image\" src=\"{{childbase64Image}}\" alt=\"\" class=\"image_container\">\n            <img  class=\"img-size\" *ngIf=\"!childbase64Image\" src=\"{{childbase64Image}}\" alt=\"\" class=\"image_container\">\n            <!-- <img  class=\"img-size\" *ngIf=\"childimg && !childbase64Image\" src=\"{{childimg}}\" alt=\"\" class=\"image_container\"> -->\n          <ion-item lines=\"none\">\n            <ion-button (click)=\"presentActionSheet()\" shape=\"round\" class=\"choose-btn\" size=\"small\" >\n              Choose File\n             </ion-button>\n          </ion-item>\n        </ion-col>\n    </ion-row>\n    \n        <div class=\"ion-text-center\">\n          <ion-button [disabled]=\"admissionForm.invalid\" type=\"submit\" shape=\"round\"   color=\"primary\">\n            Submit\n          </ion-button>\n        </div>\n  </form>\n</div>\n</ion-content>\n");

/***/ }),

/***/ "vpSC":
/*!***************************************************************!*\
  !*** ./src/app/admissionform/admissionform-routing.module.ts ***!
  \***************************************************************/
/*! exports provided: AdmissionformPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdmissionformPageRoutingModule", function() { return AdmissionformPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _admissionform_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./admissionform.page */ "yyuz");




const routes = [
    {
        path: '',
        component: _admissionform_page__WEBPACK_IMPORTED_MODULE_3__["AdmissionformPage"]
    }
];
let AdmissionformPageRoutingModule = class AdmissionformPageRoutingModule {
};
AdmissionformPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], AdmissionformPageRoutingModule);



/***/ }),

/***/ "yyuz":
/*!*****************************************************!*\
  !*** ./src/app/admissionform/admissionform.page.ts ***!
  \*****************************************************/
/*! exports provided: AdmissionformPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdmissionformPage", function() { return AdmissionformPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_admissionform_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./admissionform.page.html */ "MDSC");
/* harmony import */ var _admissionform_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./admissionform.page.scss */ "Grok");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _api_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./../api.service */ "yTNM");
/* harmony import */ var _ionic_native_file_ngx__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic-native/file/ngx */ "FAH8");
/* harmony import */ var _ionic_storage__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ionic/storage */ "e8h1");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _ionic_native_camera_ngx__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @ionic-native/camera/ngx */ "a/9d");











let AdmissionformPage = class AdmissionformPage {
    constructor(storage, apiService, actionSheetController, file, camera, cf, menuCtrl, loadingController, alertController, router) {
        this.storage = storage;
        this.apiService = apiService;
        this.actionSheetController = actionSheetController;
        this.file = file;
        this.camera = camera;
        this.cf = cf;
        this.menuCtrl = menuCtrl;
        this.loadingController = loadingController;
        this.alertController = alertController;
        this.router = router;
    }
    ngOnInit() {
        this.menuCtrl.enable(false);
        this.admissionForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormGroup"]({
            branch_id: new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required]),
            program: new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"]('', [
                _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required,
                _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].pattern(/^[a-zA-z ]+$/),
            ]),
            child_name: new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"]('', [
                _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required,
                _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].pattern(/^[a-zA-Z\. ]+$/),
            ]),
            gender: new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required]),
            d_o_b: new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required]),
            child_age: new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required]),
            address: new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required]),
            school_name: new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"]('', [
                _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required,
                _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].pattern(/^[a-zA-Z\. ]+$/),
            ]),
            school_std: new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"]('', [
                _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required
            ]),
            mothers_name: new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].pattern(/^[a-zA-Z\. ]+$/)]),
            mothers_age: new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required]),
            height: new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required]),
            weight: new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required]),
            family: new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required]),
            total_members: new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required]),
            attached_to: new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required]),
            sibling_sister: new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"](''),
            sibling_brother: new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"](''),
            mothers_qualification: new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].pattern(/^[a-zA-Z\. ]+$/)]),
            food_allergies: new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].pattern(/^[a-zA-Z\. ]+$/)]),
            other_allergies: new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].pattern(/^[a-zA-Z\. ]+$/)]),
            precautions: new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].pattern(/^[a-zA-Z\. ]+$/)]),
            languages: new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].pattern(/^[a-zA-Z\. ]+$/)]),
            mother_office_address: new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required]),
            mothers_no: new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].maxLength(10), _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].minLength(10), _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].pattern(/^[0-9]{10}$/)]),
            mothers_email: new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].pattern(/^(?!\_)(?!_*_$)([0-9A-Za-z]+\.)*[a-zA-Z0-9_+-]+@([\w+-]+\.)*[\w+-]+\.[a-zA-Z]{2,4}$/)]),
            fathers_name: new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].pattern(/^[a-zA-Z\. ]+$/)]),
            mother_tongue: new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].pattern(/^[a-zA-Z\. ]+$/)]),
            fathers_qualification: new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].pattern(/^[a-zA-Z\. ]+$/)]),
            office_address: new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required]),
            fathers_age: new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required]),
            fathers_no: new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].maxLength(10), _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].minLength(10), _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].pattern(/^[0-9]{10}$/)]),
            fathers_email: new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].pattern(/^(?!\_)(?!_*_$)([0-9A-Za-z]+\.)*[a-zA-Z0-9_+-]+@([\w+-]+\.)*[\w+-]+\.[a-zA-Z]{2,4}$/)]),
            emergency_cntct_no: new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"]('', [
                _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required,
                _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].maxLength(10),
                _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].minLength(10),
                _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].pattern(/^[0-9]{10}$/),
            ]),
        });
    }
    presentLoading() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const loading = yield this.loadingController.create({
                message: 'Please wait...',
                mode: 'ios',
                backdropDismiss: false,
            });
            return loading.present();
            const { role, data } = yield loading.onDidDismiss();
            console.log('Loading dismissed!');
        });
    }
    get branch_id() {
        return this.admissionForm.get('branch_id');
    }
    get program() {
        return this.admissionForm.get('program');
    }
    get child_name() {
        return this.admissionForm.get('child_name');
    }
    get gender() {
        return this.admissionForm.get('gender');
    }
    get d_o_b() {
        return this.admissionForm.get('d_o_b');
    }
    get child_age() {
        return this.admissionForm.get('child_age');
    }
    get address() {
        return this.admissionForm.get('address');
    }
    get school_name() {
        return this.admissionForm.get('school_name');
    }
    get school_std() {
        return this.admissionForm.get('school_std');
    }
    get mothers_name() {
        return this.admissionForm.get('mothers_name');
    }
    get mothers_age() {
        return this.admissionForm.get('mothers_age');
    }
    get height() {
        return this.admissionForm.get('height');
    }
    get weight() {
        return this.admissionForm.get('weight');
    }
    get family() {
        return this.admissionForm.get('family');
    }
    get total_members() {
        return this.admissionForm.get('total_members');
    }
    get attached_to() {
        return this.admissionForm.get('attached_to');
    }
    get sibling_sister() {
        return this.admissionForm.get('sibling_sister');
    }
    get sibling_brother() {
        return this.admissionForm.get('sibling_brother');
    }
    get mothers_qualification() {
        return this.admissionForm.get('mothers_qualification');
    }
    get food_allergies() {
        return this.admissionForm.get('food_allergies');
    }
    get other_allergies() {
        return this.admissionForm.get('other_allergies');
    }
    get precautions() {
        return this.admissionForm.get('precautions');
    }
    get languages() {
        return this.admissionForm.get('languages');
    }
    get mother_office_address() {
        return this.admissionForm.get('mother_office_address');
    }
    get mothers_no() {
        return this.admissionForm.get('mothers_no');
    }
    get mothers_email() {
        return this.admissionForm.get('mothers_email');
    }
    get fathers_name() {
        return this.admissionForm.get('fathers_name');
    }
    get mother_tongue() {
        return this.admissionForm.get('mother_tongue');
    }
    get fathers_qualification() {
        return this.admissionForm.get('fathers_qualification');
    }
    get office_address() {
        return this.admissionForm.get('office_address');
    }
    get fathers_age() {
        return this.admissionForm.get('fathers_age');
    }
    get fathers_no() {
        return this.admissionForm.get('fathers_no');
    }
    get fathers_email() {
        return this.admissionForm.get('fathers_email');
    }
    get emergency_cntct_no() {
        return this.admissionForm.get('emergency_cntct_no');
    }
    presentActionSheet() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const actionSheet = yield this.actionSheetController.create({
                header: 'Options',
                cssClass: 'action-sheets-basic-page',
                buttons: [
                    {
                        text: 'Take photo',
                        role: 'destructive',
                        icon: 'camera-outline',
                        handler: () => {
                            this.takePicture();
                        },
                    },
                    {
                        text: 'Choose photo from Gallery',
                        icon: 'images-outline',
                        handler: () => {
                            this.openGallery();
                        },
                    },
                ],
            });
            actionSheet.present();
        });
    }
    takePicture() {
        const options = {
            quality: 70,
            destinationType: this.camera.DestinationType.FILE_URI,
            encodingType: this.camera.EncodingType.JPEG,
            mediaType: this.camera.MediaType.PICTURE,
            correctOrientation: true,
        };
        this.camera.getPicture(options).then((imageData) => {
            this.file
                .resolveLocalFilesystemUrl(imageData)
                .then((entry) => {
                entry.file((file) => {
                    console.log(file);
                    this.child_file_name = file.name;
                    this.childbase64Image = (window).Ionic.WebView.convertFileSrc(imageData);
                    this.cf.detectChanges();
                    this.readFile(file);
                });
            });
        });
    }
    openGallery() {
        const options = {
            quality: 70,
            destinationType: this.camera.DestinationType.FILE_URI,
            encodingType: this.camera.EncodingType.JPEG,
            mediaType: this.camera.MediaType.PICTURE,
            correctOrientation: true,
            sourceType: this.camera.PictureSourceType.PHOTOLIBRARY,
        };
        this.camera.getPicture(options).then((imageData) => {
            this.file
                .resolveLocalFilesystemUrl(imageData)
                .then((entry) => {
                entry.file((file) => {
                    console.log(file);
                    if (file.type == 'image/jpeg') {
                        var filename = file.name;
                        var file_ext = filename.split('.').slice(-1).join('.');
                        var filename_wo_ext = filename
                            .split('.')
                            .slice(0, -1)
                            .join('.');
                        this.modified_filename =
                            filename_wo_ext +
                                file.lastModified.toString() +
                                '.' +
                                file_ext;
                        console.log('this.child_file_name', this.modified_filename);
                    }
                    else {
                        this.modified_filename = file.name;
                    }
                    this.child_file_name = this.modified_filename;
                    this.childbase64Image = (window).Ionic.WebView.convertFileSrc(imageData);
                    this.cf.detectChanges();
                    this.readFile(file);
                });
            });
        }, (err) => {
            // Handle error
        });
    }
    readFile(file) {
        const reader = new FileReader();
        reader.onloadend = () => {
            this.childimgBlob = new Blob([reader.result], {
                type: file.type,
            });
            console.log('name', file.name);
        };
        reader.readAsArrayBuffer(file);
    }
    onSubmit(body) {
        console.log('body', body);
        const formData = new FormData();
        formData.append('branch_id', body['branch_id']);
        formData.append('program', body['program']);
        formData.append('child_name', body['child_name']);
        formData.append('gender', body['gender']);
        formData.append('d_o_b', body['d_o_b']);
        formData.append('child_age', body['child_age']);
        formData.append('address', body['address']);
        formData.append('school_name', body['school_name']);
        formData.append('school_std', body['school_std']);
        formData.append('mothers_name', body['mothers_name']);
        formData.append('mothers_age', body['mothers_age']);
        formData.append('height', body['height']);
        formData.append('weight', body['weight']);
        formData.append('family', body['family']);
        formData.append('total_members', body['total_members']);
        formData.append('attached_to', body['attached_to']);
        formData.append('sibling_sister', body['sibling_sister']);
        formData.append('sibling_brother', body['sibling_brother']);
        formData.append('mothers_qualification', body['mothers_qualification']);
        formData.append('food_allergies', body['food_allergies']);
        formData.append('other_allergies', body['other_allergies']);
        formData.append('precautions', body['precautions']);
        formData.append('languages', body['languages']);
        formData.append('mother_office_address', body['mother_office_address']);
        formData.append('mothers_no', body['mothers_no']);
        formData.append('mothers_email', body['mothers_email']);
        formData.append('fathers_name', body['fathers_name']);
        formData.append('mother_tongue', body['mother_tongue']);
        formData.append('fathers_qualification', body['fathers_qualification']);
        formData.append('office_address', body['office_address']);
        formData.append('fathers_age', body['fathers_age']);
        formData.append('fathers_no', body['fathers_no']);
        formData.append('fathers_email', body['fathers_email']);
        formData.append('emergency_cntct_no', body['emergency_cntct_no']);
        formData.append('image', this.childimgBlob, this.child_file_name);
        this.apiService.updateDaycareRegStep1(formData).subscribe((data) => {
            console.log('data', data);
            this.loadingController.dismiss();
            this.presentAlert('Daycare registration updated successfully');
            console.log(data);
            this.childbase64Image = '';
            this.childimgBlob = null;
        }, (err) => {
            console.log(err);
            this.loadingController.dismiss();
            this.apiService.presentToast(err.error, 2000);
        });
    }
    presentAlert(message) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const alert = yield this.alertController.create({
                header: 'Successful',
                message: message,
                mode: 'ios',
                backdropDismiss: false,
                buttons: [
                    {
                        text: 'OK',
                        handler: () => {
                            // this.router.navigate(['mobilelogin'])
                        },
                    },
                ],
            });
            yield alert.present();
        });
    }
    ionViewWillEnter() {
        if (this.menuCtrl.isEnabled) {
            console.log('hi');
            this.menuCtrl.swipeGesture(false);
        }
        this.apiService.getBranches().then((data) => {
            this.branches = JSON.parse(data.data);
        });
    }
    doRefresh(event) {
        this.apiService.getBranches().then((data) => {
            this.branches = JSON.parse(data.data);
            event.target.complete();
        });
    }
    goBack() {
        this.router.navigate(['quicktour']);
    }
};
AdmissionformPage.ctorParameters = () => [
    { type: _ionic_storage__WEBPACK_IMPORTED_MODULE_8__["Storage"] },
    { type: _api_service__WEBPACK_IMPORTED_MODULE_6__["ApiService"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_9__["ActionSheetController"] },
    { type: _ionic_native_file_ngx__WEBPACK_IMPORTED_MODULE_7__["File"] },
    { type: _ionic_native_camera_ngx__WEBPACK_IMPORTED_MODULE_10__["Camera"] },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["ChangeDetectorRef"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_9__["MenuController"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_9__["LoadingController"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_9__["AlertController"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] }
];
AdmissionformPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_4__["Component"])({
        selector: 'app-admissionform',
        template: _raw_loader_admissionform_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_admissionform_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], AdmissionformPage);



/***/ })

}]);
//# sourceMappingURL=admissionform-admissionform-module-es2015.js.map