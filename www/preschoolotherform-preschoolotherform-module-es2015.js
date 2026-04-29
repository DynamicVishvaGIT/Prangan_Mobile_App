(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["preschoolotherform-preschoolotherform-module"],{

/***/ "Dpv8":
/*!*******************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/preschoolotherform/preschoolotherform.page.html ***!
  \*******************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header class=\"ion-no-border\">\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n      <ion-back-button></ion-back-button>\n    </ion-buttons>\n    <ion-title>Preschool Admission Form</ion-title>\n    <!-- <ion-buttons slot=\"start\">\n      <ion-button  shape=\"round\"[routerLink]=\"['/parentsinfo']\">\n        <ion-icon color=\"light\" name=\"arrow-back-outline\"></ion-icon>\n      </ion-button>\n    </ion-buttons> -->\n  </ion-toolbar>\n \n\n</ion-header>\n\n<ion-content>\n  <ion-row class=\"ion-text-center margin-ionic-top wrap\">\n    <ion-col size=\"4\">\n      <!-- <div class=\"active \"> -->\n        <ion-icon [routerLink]=\"['/preschoolform']\" name=\"checkmark-circle\" class=\"checkmark\" size=\"large\" color=\"success\"></ion-icon>\n      <!-- </div> -->\n      <p class=\"color-green\" [routerLink]=\"['/preschoolform']\" routerLinkActive=\"router-link-active\" >Preschool Registration</p>\n    </ion-col>\n    <ion-col size=\"4\">\n      <img src=\"../../assets/dashboard/checkmark.png\" alt=\"\" [routerLink]=\"['/parentsinfo']\">\n\n      <p class=\"color-green\" [routerLink]=\"['/parentsinfo']\">Parents Info</p>\n\n\n    </ion-col>\n\n    <ion-col size=\"4\">\n      <div class=\"icon-circle \" >\n        <ion-icon name=\"ellipse\" class=\"dot\"></ion-icon>\n\n      </div>\n      <p class=\"color-red heading-3\">Additional Information</p>\n\n    </ion-col>\n  </ion-row>\n  <div class=\"margin-ionic\">\n<form [formGroup]=\"preschoolStepThreeForm\" (ngSubmit)=\"onSubmit(preschoolStepThreeForm.value)\">\n  <ion-label class=\"heading-1\">Food Habits</ion-label>\n   \n  <ion-row>\n    <ion-col size=\"12\">\n    <ion-label>What food does your child like ? <span class=\"text-danger\">*</span></ion-label>\n    <ion-item lines=\"none\">\n    <ion-input type=\"text\" formControlName=\"q1_ans\"></ion-input>\n    </ion-item>\n    </ion-col>\n  \n      <ion-col size=\"12\">\n        <ion-label>What food does your child dislike ? </ion-label>\n        <ion-item lines=\"none\">\n          <ion-input type=\"text\" formControlName=\"q2_ans\"></ion-input>\n        </ion-item>\n      </ion-col>\n      <ion-col size=\"12\">\n        <ion-label>Is your child allergic to any food/medicine ? </ion-label>\n        <ion-item lines=\"none\">\n          <ion-input type=\"text\" formControlName=\"q3_ans\"></ion-input>\n        </ion-item>\n      </ion-col>\n \n      <ion-col size=\"12\">\n        <ion-label>Is your child toilet-trained ? What word He/She uses ? </ion-label>\n        <ion-item lines=\"none\">\n          <ion-input type=\"text\" formControlName=\"q4_ans\"></ion-input>\n        </ion-item>\n      </ion-col>\n      <ion-col size=\"12\">\n        <ion-label>Your child when free loves to..</ion-label>\n        <ion-item lines=\"none\">\n          <ion-input type=\"text\" formControlName=\"q5_ans\"></ion-input>\n        </ion-item>\n      </ion-col>\n      <ion-col size=\"12\">\n        <ion-label>How do you discipline your child ? </ion-label>\n        <ion-item lines=\"none\">\n          <ion-input type=\"text\" formControlName=\"q6_ans\"></ion-input>\n        </ion-item>\n      </ion-col>\n      <ion-col size=\"12\">\n        <ion-label>How do you encourage your child to learn ? </ion-label>\n        <ion-item lines=\"none\">\n          <ion-input type=\"text\" formControlName=\"q7_ans\"></ion-input>\n        </ion-item>\n      </ion-col>\n      <ion-col size=\"12\">\n        <ion-label>Your aspiration from your child... </ion-label>\n        <ion-item lines=\"none\">\n          <ion-input type=\"text\" formControlName=\"q8_ans\"></ion-input>\n        </ion-item>\n      </ion-col>\n      <ion-col size=\"12\">\n        <ion-label>What value would you like to inclucate to your child ? </ion-label>\n        <ion-item lines=\"none\">\n          <ion-input type=\"text\" formControlName=\"q9_ans\"></ion-input>\n        </ion-item>\n      </ion-col>\n      <ion-col size=\"12\">\n        <ion-label>Why did you choose Prangan for your child? </ion-label>\n        <ion-item lines=\"none\">\n          <ion-input type=\"text\" formControlName=\"q10_ans\"></ion-input>\n        </ion-item>\n      </ion-col>\n      <ion-col size=\"12\">\n        <ion-label>As a Father, How much time do you spend with your child and how ? </ion-label>\n        <ion-item lines=\"none\">\n          <ion-input type=\"text\" formControlName=\"q11_ans\"></ion-input>\n        </ion-item>\n      </ion-col>\n      <ion-col size=\"12\">\n        <ion-label>As a Mother, How much time do you spend with your child and how ? </ion-label>\n        <ion-item lines=\"none\">\n          <ion-input type=\"text\" formControlName=\"q12_ans\"></ion-input>\n        </ion-item>\n      </ion-col>\n      <ion-col size=\"12\">\n        <ion-label>Areas of interest where parental contribution can enrich the school. </ion-label>\n        <ion-radio-group formControlName=\"q13_ans\" allowEmptySelection=\"false\" color=\"primary\" >\n          <ion-row>\n            <ion-col size=\"4\">\n              <ion-item lines=\"none\">\n                <ion-radio value=\"Music/ Dance/ Drawing\"></ion-radio>\n                <ion-label>Music/ Dance/ Drawing </ion-label>\n              </ion-item>\n            </ion-col>\n            <ion-col size=\"4\">\n              <ion-item lines=\"none\">\n                <ion-radio value=\"Social skills\"></ion-radio>\n                <ion-label>Social skills</ion-label>\n              </ion-item>\n            </ion-col>\n            <ion-col size=\"4\">\n              <ion-item lines=\"none\">\n                <ion-radio value=\"Public Speaking\"></ion-radio>\n                <ion-label>Public Speaking</ion-label>\n              </ion-item>\n            </ion-col>\n            <ion-col size=\"4\">\n              <ion-item lines=\"none\">\n                <ion-radio value=\"Painting/sculpting\"></ion-radio>\n                <ion-label>Painting/sculpting</ion-label>\n              </ion-item>\n            </ion-col>\n            <ion-col size=\"4\">\n              <ion-item lines=\"none\">\n                <ion-radio value=\"Academics\"></ion-radio>\n                <ion-label>Academics</ion-label>\n              </ion-item>\n            </ion-col>\n            <ion-col size=\"4\">\n              <ion-item lines=\"none\">\n                <ion-radio value=\"Crafts/ Arts\"></ion-radio>\n                <ion-label>Crafts/ Arts</ion-label>\n              </ion-item>\n            </ion-col>\n            <ion-col size=\"4\">\n              <ion-item lines=\"none\">\n                <ion-radio value=\"Others\"></ion-radio>\n                <ion-label>Others</ion-label>\n              </ion-item>\n            </ion-col>\n          </ion-row>\n        </ion-radio-group>\n      </ion-col>\n\n  </ion-row>\n  \n  <br>\n<div class=\"ion-text-center submit-btn\">\n    <ion-button [disabled]=\"preschoolStepThreeForm.invalid\" type=\"submit\" shape=\"round\"  routerLinkActive=\"router-link-active\"  color=\"primary\">\n      Submit\n    </ion-button>\n</div>\n</form>\n  </div>\n\n</ion-content>\n");

/***/ }),

/***/ "kA2/":
/*!*****************************************************************!*\
  !*** ./src/app/preschoolotherform/preschoolotherform.page.scss ***!
  \*****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".wrap {\n  text-align: center;\n  position: relative;\n}\n\n.wrap:before {\n  content: \"\";\n  position: absolute;\n  top: 20%;\n  left: 18%;\n  border-top: 0.5px solid #677483;\n  border-width: thin;\n  width: 65%;\n  transform: translateY(-50%);\n  border-style: dashed;\n}\n\n.active {\n  border: 1px solid #2dd36f !important;\n  color: #ffffff;\n}\n\n.icon-circle {\n  position: relative;\n  display: inline-block;\n  margin: -1px;\n  width: 30px;\n  height: 30px;\n  font-size: 26px;\n  border-radius: 50%;\n  border: 1px solid #202020;\n  background: #fff;\n  color: #2dd36f;\n  text-align: center;\n}\n\n.icon-circle ion-icon {\n  margin-top: 2px;\n  font-size: 20px;\n}\n\n.heading-1 {\n  color: #676767;\n  margin-bottom: 0;\n  font-size: 16px;\n}\n\n.heading {\n  color: #9b9ca6;\n  margin-bottom: 0;\n  font-size: 14px;\n}\n\nion-label {\n  color: #9b9ca6;\n  font-size: 14px;\n}\n\nion-input {\n  border: 1px solid #9b9ca6;\n  border-radius: 5px;\n  --padding-start: 5px !important;\n  height: 35px;\n}\n\nion-textarea {\n  border: 1px solid #9b9ca6;\n  border-radius: 5px;\n  --padding-start: 5px !important;\n}\n\nion-datetime {\n  border: 1px solid #9b9ca6;\n  border-radius: 5px;\n  --padding-start: 5px !important;\n  width: 100%;\n  height: 35px;\n}\n\nion-item {\n  --padding-start: 0;\n  --ripple-color: transparent;\n  --background-activated: transparent;\n  --background-activated-opacity:transparent;\n  --background-focused: transparent;\n  --background-focused-opacity:transparent;\n  --background-hover: transparent;\n  --background-hover-opacity:transparent;\n}\n\nion-item ion-label {\n  font-size: 12px;\n  color: #9b9ca6;\n}\n\nion-radio-group ion-item {\n  border-bottom: 0;\n}\n\nion-radio-group ion-col {\n  padding-left: 0;\n}\n\nion-radio-group ion-radio {\n  margin-right: 8px;\n  width: 18px;\n  height: 18px;\n}\n\nion-col {\n  padding-left: 0;\n}\n\n.submit-btn ion-button {\n  text-transform: none;\n  width: 80%;\n  margin-right: 8px;\n}\n\n.choose-btn {\n  --background: #ee4a35;\n  text-transform: none;\n}\n\n.heading-3 {\n  margin-top: 16px;\n  color: #202020;\n}\n\n.color-green {\n  color: #2dd36f;\n  font-weight: bold;\n  margin-top: 10px;\n}\n\n.checkmark {\n  margin-top: -2px;\n}\n\n.dot {\n  color: #202020 !important;\n  margin-top: 2px;\n}\n\n.other-info {\n  margin-top: 16px;\n}\n\nimg {\n  width: 32px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3ByZXNjaG9vbG90aGVyZm9ybS5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxrQkFBQTtFQUNBLGtCQUFBO0FBQ0o7O0FBRUU7RUFDRSxXQUFBO0VBQ0Esa0JBQUE7RUFDQSxRQUFBO0VBQ0EsU0FBQTtFQUNBLCtCQUFBO0VBQ0Esa0JBQUE7RUFDQSxVQUFBO0VBQ0EsMkJBQUE7RUFDQSxvQkFBQTtBQUNKOztBQUNFO0VBQ0Usb0NBQUE7RUFDQSxjQUFBO0FBRUo7O0FBQUU7RUFDRSxrQkFBQTtFQUNBLHFCQUFBO0VBQ0EsWUFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0EsZUFBQTtFQUNBLGtCQUFBO0VBQ0EseUJBQUE7RUFDQSxnQkFBQTtFQUNBLGNBQUE7RUFDQSxrQkFBQTtBQUdKOztBQURJO0VBQ0ksZUFBQTtFQUNBLGVBQUE7QUFHUjs7QUFHRTtFQUNFLGNBQUE7RUFDQSxnQkFBQTtFQUNBLGVBQUE7QUFBSjs7QUFFQTtFQUNJLGNBQUE7RUFDQSxnQkFBQTtFQUNBLGVBQUE7QUFDSjs7QUFDQTtFQUNJLGNBQUE7RUFDQSxlQUFBO0FBRUo7O0FBQUE7RUFDSSx5QkFBQTtFQUNBLGtCQUFBO0VBQ0EsK0JBQUE7RUFDQSxZQUFBO0FBR0o7O0FBREE7RUFDSSx5QkFBQTtFQUNBLGtCQUFBO0VBQ0EsK0JBQUE7QUFJSjs7QUFGQTtFQUNJLHlCQUFBO0VBQ0Esa0JBQUE7RUFDQSwrQkFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0FBS0o7O0FBRkE7RUFFSSxrQkFBQTtFQUNBLDJCQUFBO0VBQ0EsbUNBQUE7RUFDQSwwQ0FBQTtFQUNBLGlDQUFBO0VBQ0Esd0NBQUE7RUFDQSwrQkFBQTtFQUNBLHNDQUFBO0FBSUo7O0FBRkk7RUFDSSxlQUFBO0VBQ0osY0FBQTtBQUlKOztBQUNRO0VBQ0ksZ0JBQUE7QUFFWjs7QUFBUTtFQUNJLGVBQUE7QUFFWjs7QUFBUTtFQUNBLGlCQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7QUFFUjs7QUFFSTtFQUNJLGVBQUE7QUFDUjs7QUFJUztFQUNHLG9CQUFBO0VBRUEsVUFBQTtFQUNBLGlCQUFBO0FBRlo7O0FBTUk7RUFDSSxxQkFBQTtFQUNBLG9CQUFBO0FBSFI7O0FBTUk7RUFDSSxnQkFBQTtFQUNBLGNBQUE7QUFIUjs7QUFLSTtFQUNJLGNBQUE7RUFDQSxpQkFBQTtFQUNBLGdCQUFBO0FBRlI7O0FBSUk7RUFDSSxnQkFBQTtBQURSOztBQUdJO0VBQ0kseUJBQUE7RUFDQSxlQUFBO0FBQVI7O0FBRUk7RUFDSSxnQkFBQTtBQUNSOztBQUNJO0VBQ0ksV0FBQTtBQUVSIiwiZmlsZSI6InByZXNjaG9vbG90aGVyZm9ybS5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIud3JhcCB7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgfVxyXG4gIFxyXG4gIC53cmFwOmJlZm9yZSB7XHJcbiAgICBjb250ZW50OiBcIlwiO1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgdG9wOiAyMCU7XHJcbiAgICBsZWZ0OiAxOCU7XHJcbiAgICBib3JkZXItdG9wOiAwLjVweCBzb2xpZCAjNjc3NDgzO1xyXG4gICAgYm9yZGVyLXdpZHRoOiB0aGluO1xyXG4gICAgd2lkdGg6IDY1JTtcclxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtNTAlKTtcclxuICAgIGJvcmRlci1zdHlsZTogZGFzaGVkO1xyXG4gIH1cclxuICAuYWN0aXZle1xyXG4gICAgYm9yZGVyOiAxcHggc29saWQgIzJkZDM2ZiAhaW1wb3J0YW50O1xyXG4gICAgY29sb3I6ICNmZmZmZmY7XHJcbiAgfVxyXG4gIC5pY29uLWNpcmNsZXtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICAgIG1hcmdpbjogLTFweDtcclxuICAgIHdpZHRoOiAzMHB4O1xyXG4gICAgaGVpZ2h0OiAzMHB4O1xyXG4gICAgZm9udC1zaXplOiAyNnB4O1xyXG4gICAgYm9yZGVyLXJhZGl1czogNTAlO1xyXG4gICAgYm9yZGVyOiAxcHggc29saWQgIzIwMjAyMDtcclxuICAgIGJhY2tncm91bmQ6ICNmZmY7XHJcbiAgICBjb2xvcjogIzJkZDM2ZjtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuXHJcbiAgICBpb24taWNvbntcclxuICAgICAgICBtYXJnaW4tdG9wOiAycHg7XHJcbiAgICAgICAgZm9udC1zaXplOiAyMHB4O1xyXG4gICAgfVxyXG4gIFxyXG4gIH1cclxuICBcclxuICBcclxuICAuaGVhZGluZy0xe1xyXG4gICAgY29sb3I6ICM2NzY3Njc7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAwO1xyXG4gICAgZm9udC1zaXplOiAxNnB4O1xyXG59XHJcbi5oZWFkaW5ne1xyXG4gICAgY29sb3I6ICM5YjljYTY7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAwO1xyXG4gICAgZm9udC1zaXplOiAxNHB4O1xyXG59XHJcbmlvbi1sYWJlbHtcclxuICAgIGNvbG9yOiAjOWI5Y2E2O1xyXG4gICAgZm9udC1zaXplOiAxNHB4O1xyXG59XHJcbmlvbi1pbnB1dCB7XHJcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjOWI5Y2E2O1xyXG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xyXG4gICAgLS1wYWRkaW5nLXN0YXJ0OiA1cHggIWltcG9ydGFudDtcclxuICAgIGhlaWdodDozNXB4O1xyXG59XHJcbmlvbi10ZXh0YXJlYXtcclxuICAgIGJvcmRlcjogMXB4IHNvbGlkICM5YjljYTY7XHJcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XHJcbiAgICAtLXBhZGRpbmctc3RhcnQ6IDVweCAhaW1wb3J0YW50O1xyXG59XHJcbmlvbi1kYXRldGltZXtcclxuICAgIGJvcmRlcjogMXB4IHNvbGlkICM5YjljYTY7XHJcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XHJcbiAgICAtLXBhZGRpbmctc3RhcnQ6IDVweCAhaW1wb3J0YW50O1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBoZWlnaHQ6MzVweDtcclxuXHJcbn1cclxuaW9uLWl0ZW17XHJcbiAgICAvLyBib3JkZXItYm90dG9tOiAxcHggc29saWQgIzY3NzQ4MztcclxuICAgIC0tcGFkZGluZy1zdGFydDogMDtcclxuICAgIC0tcmlwcGxlLWNvbG9yOiB0cmFuc3BhcmVudDtcclxuICAgIC0tYmFja2dyb3VuZC1hY3RpdmF0ZWQ6IHRyYW5zcGFyZW50O1xyXG4gICAgLS1iYWNrZ3JvdW5kLWFjdGl2YXRlZC1vcGFjaXR5OnRyYW5zcGFyZW50O1xyXG4gICAgLS1iYWNrZ3JvdW5kLWZvY3VzZWQ6IHRyYW5zcGFyZW50O1xyXG4gICAgLS1iYWNrZ3JvdW5kLWZvY3VzZWQtb3BhY2l0eTp0cmFuc3BhcmVudDtcclxuICAgIC0tYmFja2dyb3VuZC1ob3ZlciAgOiB0cmFuc3BhcmVudDtcclxuICAgIC0tYmFja2dyb3VuZC1ob3Zlci1vcGFjaXR5ICA6dHJhbnNwYXJlbnQ7XHJcblxyXG4gICAgaW9uLWxhYmVsIHtcclxuICAgICAgICBmb250LXNpemU6IDEycHg7XHJcbiAgICBjb2xvcjogIzliOWNhNjtcclxuXHJcbiAgICB9XHJcbn1cclxuICAgIGlvbi1yYWRpby1ncm91cHtcclxuICAgICAgICBpb24taXRlbXtcclxuICAgICAgICAgICAgYm9yZGVyLWJvdHRvbTogMDtcclxuICAgICAgICB9XHJcbiAgICAgICAgaW9uLWNvbCB7XHJcbiAgICAgICAgICAgIHBhZGRpbmctbGVmdDogMDtcclxuICAgICAgICB9XHJcbiAgICAgICAgaW9uLXJhZGlve1xyXG4gICAgICAgIG1hcmdpbi1yaWdodDogOHB4O1xyXG4gICAgICAgIHdpZHRoOiAxOHB4O1xyXG4gICAgICAgIGhlaWdodDogMThweDtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgaW9uLWNvbCB7XHJcbiAgICAgICAgcGFkZGluZy1sZWZ0OiAwO1xyXG4gICAgfVxyXG5cclxuICAgIC5zdWJtaXQtYnRuIFxyXG4gICAgIHtcclxuICAgICAgICAgaW9uLWJ1dHRvbiB7XHJcbiAgICAgICAgICAgIHRleHQtdHJhbnNmb3JtOiBub25lO1xyXG4gICAgICAgICAgIFxyXG4gICAgICAgICAgICB3aWR0aDogODAlO1xyXG4gICAgICAgICAgICBtYXJnaW4tcmlnaHQ6IDhweDtcclxuICAgICAgICAgfVxyXG4gICAgICAgXHJcbiAgICB9XHJcbiAgICAuY2hvb3NlLWJ0bntcclxuICAgICAgICAtLWJhY2tncm91bmQ6ICNlZTRhMzU7XHJcbiAgICAgICAgdGV4dC10cmFuc2Zvcm06IG5vbmU7XHJcblxyXG4gICAgfVxyXG4gICAgLmhlYWRpbmctM3tcclxuICAgICAgICBtYXJnaW4tdG9wOiAxNnB4O1xyXG4gICAgICAgIGNvbG9yOiAjMjAyMDIwO1xyXG4gICAgfVxyXG4gICAgLmNvbG9yLWdyZWVue1xyXG4gICAgICAgIGNvbG9yOiAjMmRkMzZmO1xyXG4gICAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gICAgICAgIG1hcmdpbi10b3A6IDEwcHg7XHJcbiAgICB9XHJcbiAgICAuY2hlY2ttYXJre1xyXG4gICAgICAgIG1hcmdpbi10b3A6IC0ycHg7XHJcbiAgICB9XHJcbiAgICAuZG90e1xyXG4gICAgICAgIGNvbG9yOiAjMjAyMDIwICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgbWFyZ2luLXRvcDogMnB4O1xyXG4gICAgfVxyXG4gICAgLm90aGVyLWluZm8ge1xyXG4gICAgICAgIG1hcmdpbi10b3A6IDE2cHg7XHJcbiAgICB9XHJcbiAgICBpbWcge1xyXG4gICAgICAgIHdpZHRoOiAzMnB4O1xyXG4gICAgfSJdfQ== */");

/***/ }),

/***/ "w4YX":
/*!*****************************************************************!*\
  !*** ./src/app/preschoolotherform/preschoolotherform.module.ts ***!
  \*****************************************************************/
/*! exports provided: PreschoolotherformPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PreschoolotherformPageModule", function() { return PreschoolotherformPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _preschoolotherform_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./preschoolotherform-routing.module */ "y2jN");
/* harmony import */ var _preschoolotherform_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./preschoolotherform.page */ "z8di");







let PreschoolotherformPageModule = class PreschoolotherformPageModule {
};
PreschoolotherformPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _preschoolotherform_routing_module__WEBPACK_IMPORTED_MODULE_5__["PreschoolotherformPageRoutingModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"]
        ],
        declarations: [_preschoolotherform_page__WEBPACK_IMPORTED_MODULE_6__["PreschoolotherformPage"]]
    })
], PreschoolotherformPageModule);



/***/ }),

/***/ "y2jN":
/*!*************************************************************************!*\
  !*** ./src/app/preschoolotherform/preschoolotherform-routing.module.ts ***!
  \*************************************************************************/
/*! exports provided: PreschoolotherformPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PreschoolotherformPageRoutingModule", function() { return PreschoolotherformPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _preschoolotherform_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./preschoolotherform.page */ "z8di");




const routes = [
    {
        path: '',
        component: _preschoolotherform_page__WEBPACK_IMPORTED_MODULE_3__["PreschoolotherformPage"]
    }
];
let PreschoolotherformPageRoutingModule = class PreschoolotherformPageRoutingModule {
};
PreschoolotherformPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], PreschoolotherformPageRoutingModule);



/***/ }),

/***/ "z8di":
/*!***************************************************************!*\
  !*** ./src/app/preschoolotherform/preschoolotherform.page.ts ***!
  \***************************************************************/
/*! exports provided: PreschoolotherformPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PreschoolotherformPage", function() { return PreschoolotherformPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_preschoolotherform_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./preschoolotherform.page.html */ "Dpv8");
/* harmony import */ var _preschoolotherform_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./preschoolotherform.page.scss */ "kA2/");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _api_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../api.service */ "yTNM");
/* harmony import */ var _ionic_storage__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/storage */ "e8h1");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ionic/angular */ "TEn/");










let PreschoolotherformPage = class PreschoolotherformPage {
    constructor(storage, apiService, router, alertController, loadingController, menuCtrl) {
        this.storage = storage;
        this.apiService = apiService;
        this.router = router;
        this.alertController = alertController;
        this.loadingController = loadingController;
        this.menuCtrl = menuCtrl;
    }
    presentLoading() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const loading = yield this.loadingController.create({
                message: 'Please wait...',
                mode: 'ios',
                backdropDismiss: false
            });
            return loading.present();
            const { role, data } = yield loading.onDidDismiss();
            console.log('Loading dismissed!');
        });
    }
    ionViewDidEnter() {
        this.menuCtrl.enable(false);
        this.presentLoading().then(() => {
            this.storage.get('user').then(data => {
                this.id = JSON.parse(data).id;
                this.apiService.fetchPreschoolRegStep3(this.id).then(data => {
                    console.log('fetchPreschoolRegStep3', data);
                    this.fetchPreschoolRegStep3data = JSON.parse(data.data);
                    if (this.fetchPreschoolRegStep3data.id) {
                        this.form_data_id = this.fetchPreschoolRegStep3data.id;
                        this.preschoolStepThreeForm.patchValue({
                            q1_ans: this.fetchPreschoolRegStep3data.q1,
                            q2_ans: this.fetchPreschoolRegStep3data.q2,
                            q3_ans: this.fetchPreschoolRegStep3data.q3,
                            q4_ans: this.fetchPreschoolRegStep3data.q4,
                            q5_ans: this.fetchPreschoolRegStep3data.q5,
                            q6_ans: this.fetchPreschoolRegStep3data.q6,
                            q7_ans: this.fetchPreschoolRegStep3data.q7,
                            q8_ans: this.fetchPreschoolRegStep3data.q8,
                            q9_ans: this.fetchPreschoolRegStep3data.q9,
                            q10_ans: this.fetchPreschoolRegStep3data.q10,
                            q11_ans: this.fetchPreschoolRegStep3data.q11,
                            q12_ans: this.fetchPreschoolRegStep3data.q12,
                            q13_ans: this.fetchPreschoolRegStep3data.q13,
                        });
                        this.isDataPresent = true;
                        this.loadingController.dismiss();
                    }
                    else {
                        this.isDataPresent = false;
                        this.loadingController.dismiss();
                    }
                }).catch(err => {
                    console.log('err', err);
                });
            });
        });
    }
    ngOnInit() {
        this.preschoolStepThreeForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormGroup"]({
            q1_ans: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required),
            q2_ans: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](''),
            q3_ans: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](''),
            q4_ans: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](''),
            q5_ans: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](''),
            q6_ans: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](''),
            q7_ans: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](''),
            q8_ans: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](''),
            q9_ans: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](''),
            q10_ans: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](''),
            q11_ans: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](''),
            q12_ans: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](''),
            q13_ans: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]('')
        });
    }
    get q1_ans() {
        return this.preschoolStepThreeForm.get('q1_ans');
    }
    get q2_ans() {
        return this.preschoolStepThreeForm.get('q2_ans');
    }
    get q3_ans() {
        return this.preschoolStepThreeForm.get('q3_ans');
    }
    get q4_ans() {
        return this.preschoolStepThreeForm.get('q4_ans');
    }
    get q5_ans() {
        return this.preschoolStepThreeForm.get('q5_ans');
    }
    get q6_ans() {
        return this.preschoolStepThreeForm.get('q6_ans');
    }
    get q7_ans() {
        return this.preschoolStepThreeForm.get('q7_ans');
    }
    get q8_ans() {
        return this.preschoolStepThreeForm.get('q8_ans');
    }
    get q9_ans() {
        return this.preschoolStepThreeForm.get('q9_ans');
    }
    get q10_ans() {
        return this.preschoolStepThreeForm.get('q10_ans');
    }
    get q11_ans() {
        return this.preschoolStepThreeForm.get('q11_ans');
    }
    get q12_ans() {
        return this.preschoolStepThreeForm.get('q12_ans');
    }
    get q13_ans() {
        return this.preschoolStepThreeForm.get('q13_ans');
    }
    onSubmit(body) {
        this.presentLoading();
        console.log('body', body);
        const formData = new FormData();
        formData.append("q1_ans", body['q1_ans']);
        formData.append("q2_ans", body['q2_ans']);
        formData.append("q3_ans", body['q3_ans']);
        formData.append("q4_ans", body['q4_ans']);
        formData.append("q5_ans", body['q5_ans']);
        formData.append("q6_ans", body['q6_ans']);
        formData.append("q7_ans", body['q7_ans']);
        formData.append("q8_ans", body['q8_ans']);
        formData.append("q9_ans", body['q9_ans']);
        formData.append("q10_ans", body['q10_ans']);
        formData.append("q11_ans", body['q11_ans']);
        formData.append("q12_ans", body['q12_ans']);
        formData.append("q13_ans", body['q13_ans']);
        formData.append("child2", body['child2']);
        if (this.isDataPresent) {
            formData.append("userid", this.id);
            formData.append("id", this.form_data_id);
            this.apiService.updatePreschoolRegStep3(formData).subscribe(data => {
                console.log('data', data);
                this.loadingController.dismiss();
                this.presentAlert("Form updated successfully");
                console.log(data);
            }, err => {
                console.log(err, "enter error");
                this.loadingController.dismiss();
                this.apiService.userDetails(this.id, 'Preschool').then(data => {
                    this.fetchPreschoolStepOne = JSON.parse(data.data);
                    console.log(this.fetchPreschoolStepOne);
                    console.log(this.fetchPreschoolStepOne.status, this.fetchPreschoolStepOne.Approve_status);
                    // console.log(this.fetchPreschoolStepOne.status,this.fetchPreschoolStepOne.Approve_status)
                });
                // this.apiService.presentToast(err.error,2000);
            });
        }
        else {
            formData.append("userid", this.id);
            this.apiService.preschoolRegStep3(formData).subscribe(data => {
                console.log('data', data);
                this.loadingController.dismiss();
                this.presentAlert("Form submitted successfully");
                this.preschoolStepThreeForm.reset();
                console.log(data);
            }, err => {
                console.log(err, "enter error");
                this.loadingController.dismiss();
                this.apiService.presentToast(err.error, 2000);
                this.apiService.userDetails(this.id, 'Preschool').then(data => {
                    this.fetchPreschoolStepOne = JSON.parse(data.data);
                    console.log(this.fetchPreschoolStepOne);
                    console.log(this.fetchPreschoolStepOne.status, this.fetchPreschoolStepOne.Approve_status);
                });
            });
        }
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
                            this.apiService.userDetails(this.id, 'Preschool').then(data => {
                                this.fetchPreschoolStepOne = JSON.parse(data.data);
                                if (this.fetchPreschoolStepOne.status == 'Active' && this.fetchPreschoolStepOne.Approve_status == 'Active') {
                                    this.router.navigate(['quicktour']);
                                    // this.router.navigate(['switchprofile'])
                                }
                                else {
                                    this.apiService.presentToast('Please wait for your registration approval', 2000);
                                    this.router.navigate(['switchprofile']);
                                    // this.storage.set('type','login').then(_=>{
                                    //   this.router.navigate(['login']);
                                    //   });
                                }
                            });
                        }
                    }
                ],
            });
            yield alert.present();
        });
    }
    ionViewDidLeave() {
        this.menuCtrl.enable(true);
    }
    ionViewWillEnter() {
        if (this.menuCtrl.isEnabled) {
            console.log('hi');
            this.menuCtrl.swipeGesture(false);
        }
    }
};
PreschoolotherformPage.ctorParameters = () => [
    { type: _ionic_storage__WEBPACK_IMPORTED_MODULE_6__["Storage"] },
    { type: _api_service__WEBPACK_IMPORTED_MODULE_5__["ApiService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_7__["Router"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_8__["AlertController"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_8__["LoadingController"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_8__["MenuController"] }
];
PreschoolotherformPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_4__["Component"])({
        selector: 'app-preschoolotherform',
        template: _raw_loader_preschoolotherform_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_preschoolotherform_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], PreschoolotherformPage);



/***/ })

}]);
//# sourceMappingURL=preschoolotherform-preschoolotherform-module-es2015.js.map