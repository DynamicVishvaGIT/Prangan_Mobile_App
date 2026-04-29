(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["addillness-addillness-module"],{

/***/ "I8LU":
/*!*************************************************!*\
  !*** ./src/app/addillness/addillness.page.scss ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("@charset \"UTF-8\";\nform {\n  margin: 16px;\n}\n.step {\n  color: #a2a2a2;\n  font-size: 16px;\n  margin-left: 16px;\n  font-family: initial;\n  margin-bottom: 2px;\n  font-weight: bold;\n}\n.step-heading {\n  color: #fdd653;\n  margin-left: 16px;\n  font-family: initial;\n  font-size: 30px;\n  margin-top: 0;\n  font-weight: bold;\n  text-decoration: underline;\n  text-decoration-thickness: 2px;\n}\n.wrap {\n  text-align: center;\n  position: relative;\n}\n.wrap:before {\n  content: \"\";\n  position: absolute;\n  top: 20%;\n  left: 18%;\n  border-top: 0.5px solid #677483;\n  border-width: thin;\n  width: 65%;\n  transform: translateY(-50%);\n  border-style: dashed;\n}\n.active {\n  background: #fdd653;\n  color: #ffffff;\n}\n.icon-circle {\n  position: relative;\n  display: inline-block;\n  margin: -1px;\n  width: 30px;\n  height: 30px;\n  font-size: 26px;\n  border-radius: 50%;\n  border: 1px solid #202020;\n  background: #fff;\n  color: #202020;\n  text-align: center;\n}\n.icon-circle ion-icon {\n  margin-top: 2px;\n  font-size: 20px;\n}\n.heading-1 {\n  color: #676767;\n  margin-bottom: 0;\n  font-size: 16px;\n}\n.heading {\n  color: #9b9ca6;\n  margin-bottom: 0;\n  font-size: 14px;\n}\nion-label {\n  color: #9b9ca6;\n  font-size: 14px;\n}\nion-input {\n  border: 1px solid #9b9ca6;\n  border-radius: 5px;\n  --padding-start: 5px !important;\n  height: 35px;\n}\nion-textarea {\n  border: 1px solid #9b9ca6;\n  border-radius: 5px;\n  --padding-start: 5px !important;\n}\nion-datetime {\n  border: 1px solid #9b9ca6;\n  border-radius: 5px;\n  --padding-start: 5px !important;\n  width: 100%;\n  height: 35px;\n}\nion-item {\n  --padding-start: 0;\n  --ripple-color: transparent;\n  --background-activated: transparent;\n  --background-activated-opacity:transparent;\n  --background-focused: transparent;\n  --background-focused-opacity:transparent;\n  --background-hover: transparent;\n  --background-hover-opacity:transparent;\n}\nion-item ion-label {\n  font-size: 12px;\n  color: #9b9ca6;\n}\nion-radio-group ion-item {\n  border-bottom: 0;\n}\nion-radio-group ion-col {\n  padding-left: 0;\n}\nion-radio-group ion-radio {\n  margin-right: 8px;\n  width: 18px;\n  height: 18px;\n}\nion-col {\n  padding-left: 0;\n}\nion-button {\n  text-transform: none;\n}\n.choose-btn {\n  --background: #ee4a35;\n  --color:#fff;\n}\n.heading-3 {\n  margin-top: 12px;\n  color: #929791;\n}\n.admission-row ion-col {\n  text-align: center;\n  text-align: -moz-center;\n}\n.admission-row ion-col ion-button {\n  text-transform: none;\n  width: 40%;\n}\n.btn-row ion-col {\n  text-align: center;\n  text-align: -moz-center;\n}\n.btn-row ion-col ion-button {\n  text-transform: none;\n  width: 75%;\n}\n.next-btn-col {\n  text-align: left !important;\n}\nion-segment-button {\n  text-transform: none;\n}\nimg {\n  width: 60%;\n}\n.tabs {\n  border-radius: 0;\n  overflow: hidden;\n  box-shadow: 0 4px 4px -2px rgba(0, 0, 0, 0.5);\n}\n#chck1 {\n  position: absolute;\n  opacity: 0;\n  z-index: -1;\n}\n.tab {\n  width: 100%;\n  color: white;\n  overflow: hidden;\n}\n.tab-label {\n  display: flex;\n  justify-content: space-between;\n  padding: 1em;\n  background: #2c3e50;\n  font-weight: bold;\n  cursor: pointer;\n  /* Icon */\n}\n.tab-label:hover {\n  background: #1a252f;\n}\n.tab-label::after {\n  content: \"❯\";\n  width: 1em;\n  height: 1em;\n  text-align: center;\n  transition: all 0.35s;\n}\n.tab-content {\n  max-height: 0;\n  padding: 0 1em;\n  color: #2c3e50;\n  background: white;\n  transition: all 0.35s;\n}\n.tab-close {\n  display: flex;\n  justify-content: flex-end;\n  padding: 1em;\n  font-size: 0.75em;\n  background: #2c3e50;\n  cursor: pointer;\n}\n.tab-close:hover {\n  background: #1a252f;\n}\n#chck1:checked + .tab-label {\n  background: #1a252f;\n}\n#chck1:checked + .tab-label::after {\n  transform: rotate(90deg);\n}\n#chck1:checked ~ .tab-content {\n  max-height: 100vh;\n  padding: 1em;\n}\n.inside-body {\n  padding: 25px;\n}\n.list-group.vertical-steps .list-group-item {\n  border: none;\n  border-left: 3px solid #b4b4b4;\n  box-sizing: border-box;\n  border-radius: 0;\n  counter-increment: step-counter;\n  padding-left: 20px;\n  padding-right: 0px;\n  padding-bottom: 7px;\n  padding-top: 0px;\n}\n.list-group.vertical-steps .list-group-item::before {\n  border-radius: 50%;\n  background-color: #b4b4b4;\n  color: #fff;\n  content: counter(step-counter);\n  display: inline-block;\n  float: left;\n  height: 25px;\n  line-height: 25px;\n  margin-left: -35px;\n  text-align: center;\n  width: 25px;\n}\n.list-group.vertical-steps .final::before {\n  border-radius: 50%;\n  background-color: #b4b4b4;\n  color: #fff;\n  content: counter(step-counter);\n  display: inline-block;\n  float: left;\n  height: 25px;\n  line-height: 25px;\n  margin-left: -32px;\n  text-align: center;\n  width: 25px;\n}\n.final {\n  border-left: none !important;\n}\n.list-group.vertical-steps .step-active::before {\n  border-radius: 50%;\n  background-color: #2dd36f;\n  color: #fff;\n  content: counter(step-counter);\n  display: inline-block;\n  float: left;\n  height: 25px;\n  line-height: 25px;\n  margin-left: -35px;\n  text-align: center;\n  width: 25px;\n}\n.list-group.vertical-steps .list-group-item span, .list-group.vertical-steps .list-group-item a {\n  display: block;\n  overflow: hidden;\n  padding-top: 2px;\n}\ndiv.reusable_accordion {\n  z-index: 99;\n  padding: 0;\n  margin: 0;\n  list-style: none;\n  display: flex;\n  flex-wrap: wrap;\n  flex-direction: column;\n  justify-content: space-around;\n  line-height: 25px;\n  height: 180px;\n  background: #f1f1f1;\n  width: auto;\n}\ndiv.template_accordion div.template_containers {\n  display: flex;\n  min-width: 45%;\n  min-height: 60px;\n  background: white;\n  flex-direction: row;\n  margin: 5px;\n  justify-content: center;\n  align-content: center;\n}\n.toggle_button {\n  --background: #f1f1f1;\n  width: 100%;\n  text-align: center;\n  padding: 0;\n  color: #202020;\n  cursor: pointer;\n  min-width: 100%;\n}\n.toggle_button ion-label {\n  font-size: 16px;\n  color: #202020;\n  text-align: left;\n  margin-left: 20px;\n  font-weight: bold;\n}\ndiv.accordion-container {\n  overflow: hidden;\n  overflow-y: scroll;\n  transition: max-height 0.5s ease-in-out;\n  height: auto;\n  background: #1f2b37;\n}\ndiv.accordion-container.collapsed {\n  max-height: 0 !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL2FkZGlsbG5lc3MucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLGdCQUFnQjtBQUdoQjtFQUNJLFlBQUE7QUFESjtBQUdBO0VBQ0ksY0FBQTtFQUNBLGVBQUE7RUFDQSxpQkFBQTtFQUNBLG9CQUFBO0VBQ0Esa0JBQUE7RUFDQSxpQkFBQTtBQUFKO0FBRUE7RUFDSSxjQUFBO0VBQ0EsaUJBQUE7RUFDQSxvQkFBQTtFQUNBLGVBQUE7RUFDQSxhQUFBO0VBQ0EsaUJBQUE7RUFDQSwwQkFBQTtFQUNBLDhCQUFBO0FBQ0o7QUFDQTtFQUNJLGtCQUFBO0VBQ0Esa0JBQUE7QUFFSjtBQUNFO0VBQ0UsV0FBQTtFQUNBLGtCQUFBO0VBQ0EsUUFBQTtFQUNBLFNBQUE7RUFDQSwrQkFBQTtFQUNBLGtCQUFBO0VBQ0EsVUFBQTtFQUNBLDJCQUFBO0VBQ0Esb0JBQUE7QUFFSjtBQUFFO0VBQ0UsbUJBQUE7RUFDQSxjQUFBO0FBR0o7QUFERTtFQUNFLGtCQUFBO0VBQ0EscUJBQUE7RUFDQSxZQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxlQUFBO0VBQ0Esa0JBQUE7RUFDQSx5QkFBQTtFQUNBLGdCQUFBO0VBQ0EsY0FBQTtFQUNBLGtCQUFBO0FBSUo7QUFGSTtFQUNJLGVBQUE7RUFDQSxlQUFBO0FBSVI7QUFFRTtFQUNFLGNBQUE7RUFDQSxnQkFBQTtFQUNBLGVBQUE7QUFDSjtBQUNBO0VBQ0ksY0FBQTtFQUNBLGdCQUFBO0VBQ0EsZUFBQTtBQUVKO0FBQUE7RUFDSSxjQUFBO0VBQ0EsZUFBQTtBQUdKO0FBREE7RUFDSSx5QkFBQTtFQUNBLGtCQUFBO0VBQ0EsK0JBQUE7RUFDQSxZQUFBO0FBSUo7QUFGQTtFQUNJLHlCQUFBO0VBQ0Esa0JBQUE7RUFDQSwrQkFBQTtBQUtKO0FBSEE7RUFDSSx5QkFBQTtFQUNBLGtCQUFBO0VBQ0EsK0JBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtBQU1KO0FBSEE7RUFFSSxrQkFBQTtFQUNBLDJC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QUE7QUFRSjtBQUpBO0VBQ0UscUJBQUE7RUFDQSxXQUFBO0VBQ0Esa0JBQUE7RUFDQSxVQUFBO0VBQ0EsY0FBQTtFQUNBLGVBQUE7RUFDQSxlQUFBO0FBT0Y7QUFORTtFQUNFLGVBQUE7RUFDQSxjQUFBO0VBQ0EsZ0JBQUE7RUFDQSxpQkFBQTtFQUNBLGlCQUFBO0FBUUo7QUFMQTtFQUNFLGdCQUFBO0VBQ0Esa0JBQUE7RUFDQSx1Q0FBQTtFQUNBLFlBQUE7RUFDQSxtQkFBQTtBQVFGO0FBTEE7RUFDRSx3QkFBQTtBQVFGIiwiZmlsZSI6ImFkZGlsbG5lc3MucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiXHJcbiRtaWRuaWdodDogIzJjM2U1MDtcclxuJGNsb3VkczogI2VjZjBmMTtcclxuZm9ybXtcclxuICAgIG1hcmdpbjogMTZweDtcclxufVxyXG4uc3RlcHtcclxuICAgIGNvbG9yOiAjYTJhMmEyO1xyXG4gICAgZm9udC1zaXplOiAxNnB4O1xyXG4gICAgbWFyZ2luLWxlZnQ6IDE2cHg7XHJcbiAgICBmb250LWZhbWlseTogaW5pdGlhbDtcclxuICAgIG1hcmdpbi1ib3R0b206IDJweDtcclxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG59XHJcbi5zdGVwLWhlYWRpbmd7XHJcbiAgICBjb2xvcjogI2ZkZDY1MztcclxuICAgIG1hcmdpbi1sZWZ0OiAxNnB4O1xyXG4gICAgZm9udC1mYW1pbHk6IGluaXRpYWw7XHJcbiAgICBmb250LXNpemU6IDMwcHg7XHJcbiAgICBtYXJnaW4tdG9wOiAwO1xyXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgICB0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZTtcclxuICAgIHRleHQtZGVjb3JhdGlvbi10aGlja25lc3M6IDJweDtcclxufVxyXG4ud3JhcCB7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgfVxyXG4gIFxyXG4gIC53cmFwOmJlZm9yZSB7XHJcbiAgICBjb250ZW50OiBcIlwiO1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgdG9wOiAyMCU7XHJcbiAgICBsZWZ0OiAxOCU7XHJcbiAgICBib3JkZXItdG9wOiAwLjVweCBzb2xpZCAjNjc3NDgzO1xyXG4gICAgYm9yZGVyLXdpZHRoOiB0aGluO1xyXG4gICAgd2lkdGg6IDY1JTtcclxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtNTAlKTtcclxuICAgIGJvcmRlci1zdHlsZTogZGFzaGVkO1xyXG4gIH1cclxuICAuYWN0aXZle1xyXG4gICAgYmFja2dyb3VuZDogI2ZkZDY1MztcclxuICAgIGNvbG9yOiAjZmZmZmZmO1xyXG4gIH1cclxuICAuaWNvbi1jaXJjbGV7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgICBtYXJnaW46IC0xcHg7XHJcbiAgICB3aWR0aDogMzBweDtcclxuICAgIGhlaWdodDogMzBweDtcclxuICAgIGZvbnQtc2l6ZTogMjZweDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcclxuICAgIGJvcmRlcjogMXB4IHNvbGlkICMyMDIwMjA7XHJcbiAgICBiYWNrZ3JvdW5kOiAjZmZmO1xyXG4gICAgY29sb3I6ICMyMDIwMjA7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcblxyXG4gICAgaW9uLWljb257XHJcbiAgICAgICAgbWFyZ2luLXRvcDogMnB4O1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMjBweDtcclxuICAgIH1cclxuICBcclxuICB9XHJcbiAgXHJcbiAgXHJcbiAgLmhlYWRpbmctMXtcclxuICAgIGNvbG9yOiAjNjc2NzY3O1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMDtcclxuICAgIGZvbnQtc2l6ZTogMTZweDtcclxufVxyXG4uaGVhZGluZ3tcclxuICAgIGNvbG9yOiAjOWI5Y2E2O1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMDtcclxuICAgIGZvbnQtc2l6ZTogMTRweDtcclxufVxyXG5pb24tbGFiZWx7XHJcbiAgICBjb2xvcjogIzliOWNhNjtcclxuICAgIGZvbnQtc2l6ZTogMTRweDtcclxufVxyXG5pb24taW5wdXQge1xyXG4gICAgYm9yZGVyOiAxcHggc29saWQgIzliOWNhNjtcclxuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcclxuICAgIC0tcGFkZGluZy1zdGFydDogNXB4ICFpbXBvcnRhbnQ7XHJcbiAgICBoZWlnaHQ6MzVweDtcclxufVxyXG5pb24tdGV4dGFyZWF7XHJcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjOWI5Y2E2O1xyXG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xyXG4gICAgLS1wYWRkaW5nLXN0YXJ0OiA1cHggIWltcG9ydGFudDtcclxufVxyXG5pb24tZGF0ZXRpbWV7XHJcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjOWI5Y2E2O1xyXG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xyXG4gICAgLS1wYWRkaW5nLXN0YXJ0OiA1cHggIWltcG9ydGFudDtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgaGVpZ2h0OjM1cHg7XHJcblxyXG59XHJcbmlvbi1pdGVte1xyXG4gICAgLy8gYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICM2Nzc0ODM7XHJcbiAgICAtLXBhZGRpbmctc3RhcnQ6IDA7XHJcbiAgICAtLXJpcHBsZS1jb2xvcjogdHJhbnNwYXJlbnQ7XHJcbiAgICAtLWJhY2tncm91bmQtYWN0aXZhdGVkOiB0cmFuc3BhcmVudDtcclxuICAgIC0tYmFja2dyb3VuZC1hY3RpdmF0ZWQtb3BhY2l0eTp0cmFuc3BhcmVudDtcclxuICAgIC0tYmFja2dyb3VuZC1mb2N1c2VkOiB0cmFuc3BhcmVudDtcclxuICAgIC0tYmFja2dyb3VuZC1mb2N1c2VkLW9wYWNpdHk6dHJhbnNwYXJlbnQ7XHJcbiAgICAtLWJhY2tncm91bmQtaG92ZXIgIDogdHJhbnNwYXJlbnQ7XHJcbiAgICAtLWJhY2tncm91bmQtaG92ZXItb3BhY2l0eSAgOnRyYW5zcGFyZW50O1xyXG5cclxuICAgIGlvbi1sYWJlbCB7XHJcbiAgICAgICAgZm9udC1zaXplOiAxMnB4O1xyXG4gICAgICAgIGNvbG9yOiAjOWI5Y2E2O1xyXG5cclxuICAgIH1cclxufVxyXG4gICAgaW9uLXJhZGlvLWdyb3Vwe1xyXG4gICAgICAgIGlvbi1pdGVte1xyXG4gICAgICAgICAgICBib3JkZXItYm90dG9tOiAwO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpb24tY29sIHtcclxuICAgICAgICAgICAgcGFkZGluZy1sZWZ0OiAwO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpb24tcmFkaW97XHJcbiAgICAgICAgbWFyZ2luLXJpZ2h0OiA4cHg7XHJcbiAgICAgICAgd2lkdGg6IDE4cHg7XHJcbiAgICAgICAgaGVpZ2h0OiAxOHB4O1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBpb24tY29sIHtcclxuICAgICAgICBwYWRkaW5nLWxlZnQ6IDA7XHJcbiAgICB9XHJcblxyXG4gICAgaW9uLWJ1dHRvbiB7XHJcbiAgICAgICAgdGV4dC10cmFuc2Zvcm06IG5vbmU7XHJcbiAgICB9XHJcbiAgICBcclxuICAgIC5jaG9vc2UtYnRue1xyXG4gICAgICAgIC0tYmFja2dyb3VuZDogI2VlNGEzNTtcclxuICAgICAgICAtLWNvbG9yOiNmZmY7XHJcbiAgICB9XHJcbiAgICAuaGVhZGluZy0ze1xyXG4gICAgICAgIG1hcmdpbi10b3A6IDEycHg7XHJcbiAgICAgICAgY29sb3I6ICM5Mjk3OTE7XHJcbiAgICB9XHJcbiAgICAuYWRtaXNzaW9uLXJvd3tcclxuICAgICAgICBpb24tY29se1xyXG4gICAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICAgICAgICAgIHRleHQtYWxpZ246IC1tb3otY2VudGVyO1xyXG4gICAgICAgICAgICBpb24tYnV0dG9ue1xyXG4gICAgICAgICAgICAgICAgdGV4dC10cmFuc2Zvcm06IG5vbmU7XHJcbiAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgd2lkdGg6IDQwJTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICBcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICAuYnRuLXJvd3tcclxuICAgICAgICBpb24tY29se1xyXG4gICAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICAgICAgICAgIHRleHQtYWxpZ246IC1tb3otY2VudGVyO1xyXG4gICAgICAgICAgICBpb24tYnV0dG9ue1xyXG4gICAgICAgICAgICAgICAgdGV4dC10cmFuc2Zvcm06IG5vbmU7XHJcbiAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgd2lkdGg6IDc1JTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICBcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICAubmV4dC1idG4tY29se1xyXG4gICAgICAgIHRleHQtYWxpZ246IGxlZnQgIWltcG9ydGFudDtcclxuICAgIH1cclxuICAgIGlvbi1zZWdtZW50LWJ1dHRvbntcclxuICAgICAgICB0ZXh0LXRyYW5zZm9ybTogbm9uZTtcclxuICAgIH1cclxuICAgIGltZ3tcclxuICAgICAgICB3aWR0aDogNjAlO1xyXG4gICAgfVxyXG5cclxuICAgIC50YWJzIHtcclxuICBib3JkZXItcmFkaXVzOiAwO1xyXG4gIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgYm94LXNoYWRvdzogMCA0cHggNHB4IC0ycHggcmdiYSgwLDAsMCwwLjUpO1xyXG59XHJcbiNjaGNrMXtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgb3BhY2l0eTogMDtcclxuICB6LWluZGV4OiAtMTtcclxufVxyXG4udGFiIHtcclxuICB3aWR0aDogMTAwJTtcclxuICBjb2xvcjogd2hpdGU7XHJcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICAmLWxhYmVsIHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcbiAgICBwYWRkaW5nOiAxZW07XHJcbiAgICBiYWNrZ3JvdW5kOiAkbWlkbmlnaHQ7XHJcbiAgICBmb250LXdlaWdodDogYm9sZDtcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgIC8qIEljb24gKi9cclxuICAgICY6aG92ZXIge1xyXG4gICAgICBiYWNrZ3JvdW5kOiBkYXJrZW4oJG1pZG5pZ2h0LCAxMCUpO1xyXG4gICAgfVxyXG4gICAgJjo6YWZ0ZXIge1xyXG4gICAgICBjb250ZW50OiBcIlxcMjc2RlwiO1xyXG4gICAgICB3aWR0aDogMWVtO1xyXG4gICAgICBoZWlnaHQ6IDFlbTtcclxuICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgICB0cmFuc2l0aW9uOiBhbGwgLjM1cztcclxuICAgIH1cclxuICB9XHJcbiAgJi1jb250ZW50IHtcclxuICAgIG1heC1oZWlnaHQ6IDA7XHJcbiAgICBwYWRkaW5nOiAwIDFlbTtcclxuICAgIGNvbG9yOiAkbWlkbmlnaHQ7XHJcbiAgICBiYWNrZ3JvdW5kOiB3aGl0ZTtcclxuICAgIHRyYW5zaXRpb246IGFsbCAuMzVzO1xyXG4gIH1cclxuICAmLWNsb3NlIHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtZW5kO1xyXG4gICAgcGFkZGluZzogMWVtO1xyXG4gICAgZm9udC1zaXplOiAwLjc1ZW07XHJcbiAgICBiYWNrZ3JvdW5kOiAkbWlkbmlnaHQ7XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICAmOmhvdmVyIHtcclxuICAgICAgYmFja2dyb3VuZDogZGFya2VuKCRtaWRuaWdodCwgMTAlKTtcclxuICAgIH1cclxuICB9XHJcbn1cclxuI2NoY2sxOmNoZWNrZWQge1xyXG4gICAgKyAudGFiLWxhYmVsIHtcclxuICAgICAgYmFja2dyb3VuZDogZGFya2VuKCRtaWRuaWdodCwgMTAlKTtcclxuICAgICAgJjo6YWZ0ZXIge1xyXG4gICAgICAgIHRyYW5zZm9ybTogcm90YXRlKDkwZGVnKTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gICAgfiAudGFiLWNvbnRlbnQge1xyXG4gICAgICBtYXgtaGVpZ2h0OiAxMDB2aDtcclxuICAgICAgcGFkZGluZzogMWVtO1xyXG4gICAgfVxyXG4gIH1cclxuICAuaW5zaWRlLWJvZHkge1xyXG4gICAgcGFkZGluZzogMjVweDtcclxufVxyXG4ubGlzdC1ncm91cC52ZXJ0aWNhbC1zdGVwcyAubGlzdC1ncm91cC1pdGVtIHtcclxuICBib3JkZXI6IG5vbmU7XHJcbiAgYm9yZGVyLWxlZnQ6IDNweCBzb2xpZCAjYjRiNGI0O1xyXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XHJcbiAgYm9yZGVyLXJhZGl1czogMDtcclxuICBjb3VudGVyLWluY3JlbWVudDogc3RlcC1jb3VudGVyO1xyXG4gIHBhZGRpbmctbGVmdDogMjBweDtcclxuICBwYWRkaW5nLXJpZ2h0OiAwcHg7XHJcbiAgcGFkZGluZy1ib3R0b206IDdweDtcclxuICBwYWRkaW5nLXRvcDogMHB4O1xyXG59XHJcbi5saXN0LWdyb3VwLnZlcnRpY2FsLXN0ZXBzIC5saXN0LWdyb3VwLWl0ZW06OmJlZm9yZSB7XHJcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICNiNGI0YjQ7XHJcbiAgY29sb3I6ICNmZmY7XHJcbiAgY29udGVudDogY291bnRlcihzdGVwLWNvdW50ZXIpO1xyXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICBmbG9hdDogbGVmdDtcclxuICBoZWlnaHQ6IDI1cHg7XHJcbiAgbGluZS1oZWlnaHQ6IDI1cHg7XHJcbiAgbWFyZ2luLWxlZnQ6IC0zNXB4O1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICB3aWR0aDogMjVweDtcclxufVxyXG4ubGlzdC1ncm91cC52ZXJ0aWNhbC1zdGVwcyAuZmluYWw6OmJlZm9yZSB7XHJcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICNiNGI0YjQ7XHJcbiAgY29sb3I6ICNmZmY7XHJcbiAgY29udGVudDogY291bnRlcihzdGVwLWNvdW50ZXIpO1xyXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICBmbG9hdDogbGVmdDtcclxuICBoZWlnaHQ6IDI1cHg7XHJcbiAgbGluZS1oZWlnaHQ6IDI1cHg7XHJcbiAgbWFyZ2luLWxlZnQ6IC0zMnB4O1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICB3aWR0aDogMjVweDtcclxufVxyXG4uZmluYWx7XHJcbiAgYm9yZGVyLWxlZnQ6IG5vbmUgIWltcG9ydGFudDtcclxufVxyXG4ubGlzdC1ncm91cC52ZXJ0aWNhbC1zdGVwcyAuc3RlcC1hY3RpdmU6OmJlZm9yZSB7XHJcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICMyZGQzNmY7XHJcbiAgY29sb3I6ICNmZmY7XHJcbiAgY29udGVudDogY291bnRlcihzdGVwLWNvdW50ZXIpO1xyXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICBmbG9hdDogbGVmdDtcclxuICBoZWlnaHQ6IDI1cHg7XHJcbiAgbGluZS1oZWlnaHQ6IDI1cHg7XHJcbiAgbWFyZ2luLWxlZnQ6IC0zNXB4O1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICB3aWR0aDogMjVweDtcclxufVxyXG4ubGlzdC1ncm91cC52ZXJ0aWNhbC1zdGVwcyAubGlzdC1ncm91cC1pdGVtIHNwYW4sIC5saXN0LWdyb3VwLnZlcnRpY2FsLXN0ZXBzIC5saXN0LWdyb3VwLWl0ZW0gYSB7XHJcbiAgZGlzcGxheTogYmxvY2s7XHJcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICBwYWRkaW5nLXRvcDogMnB4O1xyXG59XHJcblxyXG5kaXYucmV1c2FibGVfYWNjb3JkaW9uIHtcclxuICB6LWluZGV4OiA5OTtcclxuICBwYWRkaW5nOiAwO1xyXG4gIG1hcmdpbjogMDtcclxuICBsaXN0LXN0eWxlOiBub25lO1xyXG4gIGRpc3BsYXk6IC13ZWJraXQtYm94O1xyXG4gIGRpc3BsYXk6IC1tb3otYm94O1xyXG4gIGRpc3BsYXk6IC1tcy1mbGV4Ym94O1xyXG4gIGRpc3BsYXk6IC13ZWJraXQtZmxleDtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGZsZXgtd3JhcDogd3JhcDtcclxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xyXG4gIGxpbmUtaGVpZ2h0OiAyNXB4O1xyXG4gIGhlaWdodDogMTgwcHg7XHJcbiAgYmFja2dyb3VuZDogI2YxZjFmMTtcclxuICB3aWR0aDogYXV0bztcclxufVxyXG5kaXYudGVtcGxhdGVfYWNjb3JkaW9uIHtcclxuICBkaXYudGVtcGxhdGVfY29udGFpbmVycyB7XHJcbiAgICBkaXNwbGF5OiAtd2Via2l0LWJveDtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBtaW4td2lkdGg6IDQ1JTtcclxuICAgIG1pbi1oZWlnaHQ6IDYwcHg7XHJcbiAgICBiYWNrZ3JvdW5kOiB3aGl0ZTtcclxuICAgIC13ZWJraXQtYm94LW9yaWVudDogaG9yaXpvbnRhbDtcclxuICAgIC13ZWJraXQtYm94LWRpcmVjdGlvbjogbm9ybWFsO1xyXG4gICAgZmxleC1kaXJlY3Rpb246IHJvdztcclxuICAgIG1hcmdpbjogNXB4O1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICBhbGlnbi1jb250ZW50OiBjZW50ZXI7XHJcbiAgfVxyXG59XHJcblxyXG4udG9nZ2xlX2J1dHRvbiB7XHJcbiAgLS1iYWNrZ3JvdW5kOiAjZjFmMWYxO1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICBwYWRkaW5nOiAwO1xyXG4gIGNvbG9yOiAjMjAyMDIwO1xyXG4gIGN1cnNvcjogcG9pbnRlcjtcclxuICBtaW4td2lkdGg6IDEwMCU7XHJcbiAgaW9uLWxhYmVse1xyXG4gICAgZm9udC1zaXplOiAxNnB4O1xyXG4gICAgY29sb3I6ICMyMDIwMjA7XHJcbiAgICB0ZXh0LWFsaWduOiBsZWZ0O1xyXG4gICAgbWFyZ2luLWxlZnQ6IDIwcHg7XHJcbiAgICBmb250LXdlaWdodDogYm9sZDtcclxuICB9XHJcbn1cclxuZGl2LmFjY29yZGlvbi1jb250YWluZXIge1xyXG4gIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgb3ZlcmZsb3cteTogc2Nyb2xsO1xyXG4gIHRyYW5zaXRpb246IG1heC1oZWlnaHQgMC41cyBlYXNlLWluLW91dDtcclxuICBoZWlnaHQ6IGF1dG87XHJcbiAgYmFja2dyb3VuZDogcmdiKDMxLCA0MywgNTUpO1xyXG59XHJcblxyXG5kaXYuYWNjb3JkaW9uLWNvbnRhaW5lci5jb2xsYXBzZWQge1xyXG4gIG1heC1oZWlnaHQ6IDAgIWltcG9ydGFudDtcclxufVxyXG5cclxuIl19 */");

/***/ }),

/***/ "IbWT":
/*!***************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/addillness/addillness.page.html ***!
  \***************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n  <ion-toolbar>\n    <ion-title>Add Illness</ion-title>\n    <ion-buttons slot=\"start\">\n      <ion-button shape=\"round\"  [routerLink]=\"['/medicines']\">\n        <ion-icon color=\"light\" name=\"arrow-back-outline\"></ion-icon>\n      </ion-button>\n    </ion-buttons>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <div>\n\n  <form [formGroup]=\"illnessForm\" (ngSubmit)=\"onSubmit(illnessForm.value)\">\n    <ion-row>\n      <ion-col size=\"12\">\n        <ion-label>Sickness & Ilnness </ion-label>\n        <ion-item lines=\"none\">\n          <ion-input formControlName=\"illness\" type=\"text\" ></ion-input>\n        </ion-item>\n        <div class=\"error-div\" *ngIf=\"(illness?.invalid && illness?.touched) || illness?.dirty\">\n          <small *ngIf=\"illness.errors?.pattern\" class=\"text-danger\">Enter a valid illness</small>\n        </div>\n      </ion-col>\n    </ion-row>\n    <ion-row>\n      <ion-col size=\"6\">\n        <ion-label>From Date </ion-label>\n        <ion-item lines=\"none\">\n          <ion-datetime formControlName=\"from_date\" displayFormat=\"DD MMM  YYYY\" ></ion-datetime>\n        </ion-item>\n      </ion-col>\n      <ion-col size=\"6\">\n        <ion-label>To Date </ion-label>\n        <ion-item lines=\"none\">\n          <ion-datetime formControlName=\"to_date\" displayFormat=\"DD MMM  YYYY\" ></ion-datetime>\n        </ion-item>\n      </ion-col>\n    </ion-row>\n    <ion-row>\n      <ion-col size=\"12\">\n        <ion-label>Add Prescription </ion-label>\n        <ion-item lines=\"none\">\n         \n          <ion-button color=\"primary\" (click)=\"presentActionSheet()\">\n            Upload Image\n          </ion-button>\n         \n        </ion-item>\n      </ion-col>\n      <ion-col size=\"12\"  class=\"home-header-img\" *ngIf=\"imageClicked && !pdfClicked\">\n        <img src=\"{{base64Image}}\" *ngIf=\"base64Image\" alt=\"Avatar\" width=\"215\" />\n      </ion-col>\n      <!-- <ion-col size=\"6\">\n        <ion-label></ion-label>\n        <ion-item lines=\"none\">\n          <ion-input style=\"margin-top:26px\" type=\"text\" ></ion-input>\n        </ion-item>\n      </ion-col> -->\n    </ion-row>\n    <ion-row>\n      <ion-col size=\"6\">\n        <ion-item lines=\"none\">\n          <ion-checkbox formControlName=\"dont_prescription\"></ion-checkbox>\n          <ion-label>I dont have prescription</ion-label>\n\n        </ion-item>\n      </ion-col>\n     \n    </ion-row>\n    <ion-row>\n      <ion-col size=\"12\" class=\"ion-text-center\">\n      \n          <ion-button [disabled]=\"illnessForm.invalid\" shape=\"round\" type=\"submit\"  color=\"secondary\">\n            Submit\n          </ion-button>\n      </ion-col>\n    </ion-row>\n    \n  </form>\n</div>\n\n</ion-content>\n");

/***/ }),

/***/ "OLQQ":
/*!***********************************************!*\
  !*** ./src/app/addillness/addillness.page.ts ***!
  \***********************************************/
/*! exports provided: AddillnessPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddillnessPage", function() { return AddillnessPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_addillness_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./addillness.page.html */ "IbWT");
/* harmony import */ var _addillness_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./addillness.page.scss */ "I8LU");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _api_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./../api.service */ "yTNM");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _ionic_native_camera_ngx__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic-native/camera/ngx */ "a/9d");
/* harmony import */ var _ionic_native_file_ngx__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ionic-native/file/ngx */ "FAH8");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _ionic_storage__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @ionic/storage */ "e8h1");











let AddillnessPage = class AddillnessPage {
    constructor(actionSheetController, camera, file, apiService, loadingController, alertController, router, storage, cf) {
        this.actionSheetController = actionSheetController;
        this.camera = camera;
        this.file = file;
        this.apiService = apiService;
        this.loadingController = loadingController;
        this.alertController = alertController;
        this.router = router;
        this.storage = storage;
        this.cf = cf;
        this.todays_date = new Date().toJSON().split('T')[0];
    }
    ngOnInit() {
        this.illnessForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_9__["FormGroup"]({
            illness: new _angular_forms__WEBPACK_IMPORTED_MODULE_9__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_9__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_9__["Validators"].pattern(/^[a-zA-z ]+$/)]),
            from_date: new _angular_forms__WEBPACK_IMPORTED_MODULE_9__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_9__["Validators"].required]),
            to_date: new _angular_forms__WEBPACK_IMPORTED_MODULE_9__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_9__["Validators"].required]),
            dont_prescription: new _angular_forms__WEBPACK_IMPORTED_MODULE_9__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_9__["Validators"].required]),
        });
    }
    ionViewWillEnter() {
        this.storage.get('user').then((data) => {
            if (data) {
                var user = JSON.parse(data);
                this.userid = user.id;
            }
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
                            this.router.navigate(['medicines']);
                        },
                    },
                ],
            });
            yield alert.present();
        });
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
                        }
                    },
                    {
                        text: 'Choose photo from Gallery',
                        icon: 'images-outline',
                        handler: () => {
                            this.openGallery();
                        }
                    },
                ]
            });
            actionSheet.present();
        });
    }
    takePicture() {
        this.imageClicked = true;
        this.pdfClicked = false;
        const options = {
            quality: 70,
            destinationType: this.camera.DestinationType.FILE_URI,
            encodingType: this.camera.EncodingType.JPEG,
            mediaType: this.camera.MediaType.PICTURE,
            correctOrientation: true
        };
        this.camera.getPicture(options).then((imageData) => {
            this.profile_pic2 = 'data:image/jpeg;base64,' + imageData;
            this.file.resolveLocalFilesystemUrl(imageData).then((entry) => {
                entry.file(file => {
                    console.log(file);
                    this.file_name = file.name;
                    this.base64Image = window.Ionic.WebView.convertFileSrc(imageData);
                    this.cf.detectChanges();
                    this.readFile(file);
                });
            });
        }, (err) => {
            this.base64Image = null;
        });
    }
    openGallery() {
        this.imageClicked = true;
        this.pdfClicked = false;
        const options = {
            quality: 70,
            destinationType: this.camera.DestinationType.FILE_URI,
            encodingType: this.camera.EncodingType.JPEG,
            mediaType: this.camera.MediaType.PICTURE,
            correctOrientation: true,
            sourceType: this.camera.PictureSourceType.PHOTOLIBRARY
        };
        this.camera.getPicture(options).then((imageData) => {
            this.profile_pic2 = 'data:image/jpeg;base64,' + imageData;
            this.file.resolveLocalFilesystemUrl(imageData).then((entry) => {
                entry.file(file => {
                    console.log(file);
                    this.file_name = file.name;
                    this.base64Image = window.Ionic.WebView.convertFileSrc(imageData);
                    this.cf.detectChanges();
                    this.readFile(file);
                });
            });
            //  this.profile_pic = 'data:image/jpeg;base64,' + imageData;
        }, (err) => {
            this.base64Image = null;
        });
    }
    readFile(file) {
        const reader = new FileReader();
        reader.onloadend = () => {
            console.log('reader2', reader, reader.result);
            this.imgBlob = new Blob([reader.result], {
                type: file.type
            });
            this.file_name = file.name;
            console.log("name", file.name);
        };
        reader.readAsArrayBuffer(file);
    }
    get illness() {
        return this.illnessForm.get('illness');
    }
    get from_date() {
        return this.illnessForm.get('from_date');
    }
    get to_date() {
        return this.illnessForm.get('to_date');
    }
    get dont_prescription() {
        return this.illnessForm.get('dont_prescription');
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
    onSubmit(body) {
        if (!this.file_name || this.file_name == '') {
            this.apiService.presentToast('Please upload prescription', 2000);
        }
        else {
            var formdata = new FormData();
            formdata.append("userId", this.userid);
            formdata.append("illness", body['illness']);
            formdata.append("from_date", body['from_date']);
            formdata.append("to_date", body['to_date']);
            formdata.append("dont_prescription", body['dont_prescription']);
            formdata.append("image", this.imgBlob, this.file_name);
            this.apiService.addIllness(formdata).subscribe(data => {
                this.loadingController.dismiss();
                this.presentAlert('Illness added successfully');
            }, err => {
                this.loadingController.dismiss();
                this.apiService.presentToast(err.error, 2000);
            });
        }
    }
};
AddillnessPage.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["ActionSheetController"] },
    { type: _ionic_native_camera_ngx__WEBPACK_IMPORTED_MODULE_7__["Camera"] },
    { type: _ionic_native_file_ngx__WEBPACK_IMPORTED_MODULE_8__["File"] },
    { type: _api_service__WEBPACK_IMPORTED_MODULE_4__["ApiService"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["LoadingController"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["AlertController"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] },
    { type: _ionic_storage__WEBPACK_IMPORTED_MODULE_10__["Storage"] },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_5__["ChangeDetectorRef"] }
];
AddillnessPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_5__["Component"])({
        selector: 'app-addillness',
        template: _raw_loader_addillness_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_addillness_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], AddillnessPage);



/***/ }),

/***/ "XPWm":
/*!*********************************************************!*\
  !*** ./src/app/addillness/addillness-routing.module.ts ***!
  \*********************************************************/
/*! exports provided: AddillnessPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddillnessPageRoutingModule", function() { return AddillnessPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _addillness_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./addillness.page */ "OLQQ");




const routes = [
    {
        path: '',
        component: _addillness_page__WEBPACK_IMPORTED_MODULE_3__["AddillnessPage"]
    }
];
let AddillnessPageRoutingModule = class AddillnessPageRoutingModule {
};
AddillnessPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], AddillnessPageRoutingModule);



/***/ }),

/***/ "Y7bj":
/*!*************************************************!*\
  !*** ./src/app/addillness/addillness.module.ts ***!
  \*************************************************/
/*! exports provided: AddillnessPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddillnessPageModule", function() { return AddillnessPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _addillness_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./addillness-routing.module */ "XPWm");
/* harmony import */ var _addillness_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./addillness.page */ "OLQQ");







let AddillnessPageModule = class AddillnessPageModule {
};
AddillnessPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _addillness_routing_module__WEBPACK_IMPORTED_MODULE_5__["AddillnessPageRoutingModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"]
        ],
        declarations: [_addillness_page__WEBPACK_IMPORTED_MODULE_6__["AddillnessPage"]]
    })
], AddillnessPageModule);



/***/ })

}]);
//# sourceMappingURL=addillness-addillness-module-es2015.js.map