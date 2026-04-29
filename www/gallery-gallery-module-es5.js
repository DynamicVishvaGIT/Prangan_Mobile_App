(function () {
  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

  function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return typeof key === "symbol" ? key : String(key); }

  function _toPrimitive(input, hint) { if (typeof input !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (typeof res !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["gallery-gallery-module"], {
    /***/
    "3ros":
    /*!*******************************************!*\
      !*** ./src/app/gallery/gallery.module.ts ***!
      \*******************************************/

    /*! exports provided: GalleryPageModule */

    /***/
    function ros(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "GalleryPageModule", function () {
        return GalleryPageModule;
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


      var _gallery_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./gallery-routing.module */
      "Fjtg");
      /* harmony import */


      var _gallery_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./gallery.page */
      "vl1N");

      var GalleryPageModule = /*#__PURE__*/_createClass(function GalleryPageModule() {
        _classCallCheck(this, GalleryPageModule);
      });

      GalleryPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _gallery_routing_module__WEBPACK_IMPORTED_MODULE_5__["GalleryPageRoutingModule"]],
        declarations: [_gallery_page__WEBPACK_IMPORTED_MODULE_6__["GalleryPage"]]
      })], GalleryPageModule);
      /***/
    },

    /***/
    "Fjtg":
    /*!***************************************************!*\
      !*** ./src/app/gallery/gallery-routing.module.ts ***!
      \***************************************************/

    /*! exports provided: GalleryPageRoutingModule */

    /***/
    function Fjtg(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "GalleryPageRoutingModule", function () {
        return GalleryPageRoutingModule;
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


      var _gallery_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./gallery.page */
      "vl1N");

      var routes = [{
        path: '',
        component: _gallery_page__WEBPACK_IMPORTED_MODULE_3__["GalleryPage"]
      }];

      var GalleryPageRoutingModule = /*#__PURE__*/_createClass(function GalleryPageRoutingModule() {
        _classCallCheck(this, GalleryPageRoutingModule);
      });

      GalleryPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
      })], GalleryPageRoutingModule);
      /***/
    },

    /***/
    "GVE3":
    /*!*******************************************!*\
      !*** ./src/app/gallery/gallery.page.scss ***!
      \*******************************************/

    /*! exports provided: default */

    /***/
    function GVE3(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "ion-content {\n  --background:#f3fbfe;\n}\n\nimg {\n  width: 50%;\n  margin-top: 27px;\n}\n\nion-card {\n  margin: 20px;\n  border-radius: 5px;\n  box-shadow: 0 3px 0px -2px rgba(0, 0, 0, 0), 0 2px 4px 2px rgba(0, 0, 0, 0.03), 0 1px 5px 0 rgba(0, 0, 0, 0.11);\n}\n\n.card-row {\n  padding: 12px;\n  padding-bottom: 7px;\n  padding-right: 16px;\n}\n\n.card-top-row {\n  padding: 0;\n}\n\nhr {\n  border-top: 1px dotted #9d9fa6;\n  margin-left: -18px;\n  margin-right: 10px;\n}\n\n.header {\n  color: #9d9fa6;\n  margin-top: 0;\n  font-size: 11px;\n  margin-bottom: 0;\n}\n\n.value {\n  color: #202020;\n  margin-top: 6px;\n  font-size: 11px;\n}\n\n.view-btn {\n  margin-top: 0;\n  text-transform: none;\n}\n\n.age {\n  font-size: 16px;\n  color: #202020;\n  margin-top: 6px;\n  font-weight: bold;\n  margin-bottom: 6px;\n}\n\n.view-txt {\n  font-size: 10px;\n}\n\n.data-row ion-col {\n  padding-left: 0;\n}\n\n.w-100 {\n  width: 100%;\n}\n\n.date {\n  margin-left: 8px;\n  color: #202020;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL2dhbGxlcnkucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksb0JBQUE7QUFDSjs7QUFDQTtFQUNJLFVBQUE7RUFDQSxnQkFBQTtBQUVKOztBQUNFO0VBQ0UsWUFBQTtFQUNBLGtCQUFBO0VBQ0EsK0dBQUE7QUFFSjs7QUFBRTtFQUNJLGFBQUE7RUFDQSxtQkFBQTtFQUNBLG1CQUFBO0FBR047O0FBREU7RUFDRSxVQUFBO0FBSUo7O0FBRkU7RUFDRSw4QkFBQTtFQUNBLGtCQUFBO0VBQ0Esa0JBQUE7QUFLSjs7QUFIRTtFQUNFLGNBQUE7RUFDQSxhQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0FBTUo7O0FBSEU7RUFDRSxjQUFBO0VBQ0EsZUFBQTtFQUNBLGVBQUE7QUFNSjs7QUFKRTtFQUVFLGFBQUE7RUFDQSxvQkFBQTtBQU1KOztBQUhFO0VBQ0UsZUFBQTtFQUNBLGNBQUE7RUFDQSxlQUFBO0VBQ0EsaUJBQUE7RUFDQSxrQkFBQTtBQU1KOztBQUhFO0VBQ0ksZUFBQTtBQU1OOztBQUhJO0VBQ0ksZUFBQTtBQU1SOztBQUhFO0VBQ0UsV0FBQTtBQU1KOztBQUpFO0VBQ0UsZ0JBQUE7RUFDQSxjQUFBO0FBT0oiLCJmaWxlIjoiZ2FsbGVyeS5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJpb24tY29udGVudCB7XHJcbiAgICAtLWJhY2tncm91bmQ6I2YzZmJmZTtcclxufVxyXG5pbWcge1xyXG4gICAgd2lkdGg6IDUwJTtcclxuICAgIG1hcmdpbi10b3A6IDI3cHg7XHJcblxyXG4gIH1cclxuICBpb24tY2FyZHtcclxuICAgIG1hcmdpbjogMjBweDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcclxuICAgIGJveC1zaGFkb3c6IDAgM3B4IDBweCAtMnB4IHJnYmEoMCwgMCwgMCwgMCksIDAgMnB4IDRweCAycHggcmdiKDAgMCAwIC8gMyUpLCAwIDFweCA1cHggMCByZ2JhKDAsIDAsIDAsIDAuMTEpO1xyXG4gIH1cclxuICAuY2FyZC1yb3d7XHJcbiAgICAgIHBhZGRpbmc6IDEycHg7XHJcbiAgICAgIHBhZGRpbmctYm90dG9tOiA3cHg7XHJcbiAgICAgIHBhZGRpbmctcmlnaHQ6IDE2cHg7XHJcbiAgfVxyXG4gIC5jYXJkLXRvcC1yb3d7XHJcbiAgICBwYWRkaW5nOjA7XHJcbiAgfVxyXG4gIGhye1xyXG4gICAgYm9yZGVyLXRvcDogMXB4IGRvdHRlZCAjOWQ5ZmE2O1xyXG4gICAgbWFyZ2luLWxlZnQ6IC0xOHB4O1xyXG4gICAgbWFyZ2luLXJpZ2h0OiAxMHB4O1xyXG4gIH1cclxuICAuaGVhZGVye1xyXG4gICAgY29sb3I6ICM5ZDlmYTY7XHJcbiAgICBtYXJnaW4tdG9wOiAwO1xyXG4gICAgZm9udC1zaXplOiAxMXB4O1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMDtcclxuXHJcbiAgfVxyXG4gIC52YWx1ZXtcclxuICAgIGNvbG9yOiAjMjAyMDIwO1xyXG4gICAgbWFyZ2luLXRvcDogNnB4O1xyXG4gICAgZm9udC1zaXplOiAxMXB4O1xyXG4gIH1cclxuICAudmlldy1idG57XHJcbiAgICAvLyBoZWlnaHQ6IDM2cHg7XHJcbiAgICBtYXJnaW4tdG9wOiAwO1xyXG4gICAgdGV4dC10cmFuc2Zvcm06IG5vbmU7XHJcbiAgfVxyXG4gIFxyXG4gIC5hZ2V7XHJcbiAgICBmb250LXNpemU6IDE2cHg7XHJcbiAgICBjb2xvcjogIzIwMjAyMDtcclxuICAgIG1hcmdpbi10b3A6IDZweDtcclxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gICAgbWFyZ2luLWJvdHRvbTogNnB4O1xyXG5cclxuICB9XHJcbiAgLnZpZXctdHh0e1xyXG4gICAgICBmb250LXNpemU6IDEwcHg7XHJcbiAgfVxyXG4gIC5kYXRhLXJvd3tcclxuICAgIGlvbi1jb2x7XHJcbiAgICAgICAgcGFkZGluZy1sZWZ0OiAwO1xyXG4gICAgfVxyXG4gIH1cclxuICAudy0xMDB7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICB9XHJcbiAgLmRhdGV7XHJcbiAgICBtYXJnaW4tbGVmdDogOHB4O1xyXG4gICAgY29sb3I6ICMyMDIwMjA7XHJcbiAgfSJdfQ== */";
      /***/
    },

    /***/
    "XHaQ":
    /*!*********************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/gallery/gallery.page.html ***!
      \*********************************************************************************/

    /*! exports provided: default */

    /***/
    function XHaQ(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-header>\n  <ion-toolbar>\n    \n    <ion-title>Gallery</ion-title>\n    <ion-buttons slot=\"start\">\n      <ion-button  shape=\"round\" (click)=\"goBack()\">\n        <ion-icon color=\"light\" name=\"arrow-back-outline\"></ion-icon>\n      </ion-button>\n    </ion-buttons>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <ion-refresher slot=\"fixed\" (ionRefresh)=\"doRefresh($event)\">\n    <ion-refresher-content></ion-refresher-content>\n  </ion-refresher>\n  <!-- <div class=\"padding-ionic\" *ngIf=\"type=='quicktour'\">\n  <ion-row >\n    <ion-col size=\"6\">\n      <ion-img src=\"../../assets/events/01.png\"></ion-img>\n    </ion-col>\n    <ion-col size=\"6\">\n      <ion-img src=\"../../assets/events/02.png\"></ion-img>\n    </ion-col>\n    <ion-col size=\"6\">\n      <ion-img src=\"../../assets/events/03.png\"></ion-img>\n    </ion-col>\n    <ion-col size=\"6\">\n      <ion-img src=\"../../assets/events/04.png\"></ion-img>\n    </ion-col>\n  </ion-row>\n</div> -->\n<div class=\"padding-ionic\" *ngIf=\"albums\">\n  <ion-card class=\"ion-text-center\" *ngFor=\"let album of albums\">\n    <img src=\"{{album.image}}\" alt=\"\">\n\n    <ion-row class=\"card-row card-top-row\">\n      <ion-col size=\"12\">\n        <p class=\"age\">{{album.name |titlecase}}</p>\n        <hr>\n        <ion-row class=\"data-row\">\n        </ion-row>\n        <ion-row  class=\"data-row\">\n          <ion-col size=\"12\">\n            <ion-button  shape=\"round\"(click)=\"openDetails2(album.id,album.name)\" size=\"small\" class=\"view-btn\" color=\"primary\"><p class=\"view-txt\">View</p></ion-button>\n          </ion-col>\n        </ion-row>\n      </ion-col>\n    </ion-row>\n  </ion-card>\n\n \n</div>\n<div class=\"margin-ionic homework-slider\" *ngIf=\"!isAlbumPresent\">\n  <ion-slides pager=\"false\" class=\"slider-card events-slider\"  >\n    <ion-slide>\n      <ion-card  class=\"ion-text-start  data-card w-100\" >\n        <ion-row>\n          <ion-col size=\"12\">\n            <p class=\"date\"><b>No Gallery</b> </p>         \n          </ion-col>\n         \n        </ion-row>\n       \n      </ion-card>\n    </ion-slide>\n  </ion-slides>\n</div>\n<div class=\"padding-ionic\" *ngIf=\"albums !='' && !isAlbumPresent\">\n  <ion-card class=\"ion-text-center\">\n <ion-skeleton-text animated style=\"width: 60%\"></ion-skeleton-text>\n\n    <ion-row class=\"card-row card-top-row\">\n      <ion-col size=\"12\">\n        <p class=\"age\"><ion-skeleton-text animated style=\"width: 40%\"></ion-skeleton-text></p>\n        <hr>\n        <ion-row class=\"data-row\">\n        </ion-row>\n        <ion-row  class=\"data-row\">\n          <ion-col size=\"12\">\n            <!-- <ion-button  shape=\"round\" size=\"small\" class=\"view-btn\" color=\"primary\"><p class=\"view-txt\">View</p></ion-button> -->\n          </ion-col>\n        </ion-row>\n      </ion-col>\n    </ion-row>\n  </ion-card>\n</div>\n</ion-content>\n";
      /***/
    },

    /***/
    "vl1N":
    /*!*****************************************!*\
      !*** ./src/app/gallery/gallery.page.ts ***!
      \*****************************************/

    /*! exports provided: GalleryPage */

    /***/
    function vl1N(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "GalleryPage", function () {
        return GalleryPage;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_gallery_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./gallery.page.html */
      "XHaQ");
      /* harmony import */


      var _gallery_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./gallery.page.scss */
      "GVE3");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");
      /* harmony import */


      var _api_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ./../api.service */
      "yTNM");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");
      /* harmony import */


      var _ionic_storage__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @ionic/storage */
      "e8h1");

      var GalleryPage = /*#__PURE__*/function () {
        function GalleryPage(storage, router, apiService, location) {
          _classCallCheck(this, GalleryPage);

          this.storage = storage;
          this.router = router;
          this.apiService = apiService;
          this.location = location;
        }

        _createClass(GalleryPage, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }, {
          key: "ionViewWillEnter",
          value: function ionViewWillEnter() {
            var _this = this;

            this.storage.get('type').then(function (data) {
              console.log('data', data);
              _this.type = data;
            });
            this.storage.get('user').then(function (data) {
              if (data) {
                if (JSON.parse(data)["class"]) {
                  _this.plan = 'Preschool';
                  _this.classType = JSON.parse(data)["class"];
                } else {
                  _this.plan = 'Daycare';
                  _this.classType = 'Daycare';
                }

                _this.branch_id = JSON.parse(data).branch_id;

                _this.storage.get('userType').then(function (userType) {
                  if (userType == 'Daycare') {
                    _this.apiService.fetchBranchAlbum(userType, userType, _this.branch_id).then(function (album_data) {
                      _this.albums = JSON.parse(album_data.data);
                      console.log('albums', _this.albums);
                      _this.isAlbumPresent = true;
                    })["catch"](function (err) {
                      _this.albums = '';
                      _this.isAlbumPresent = false;
                    });
                  } else {
                    _this.apiService.fetchBranchAlbum(_this.classType, userType, _this.branch_id).then(function (album_data) {
                      _this.albums = JSON.parse(album_data.data);
                      console.log('albums', _this.albums);
                      _this.isAlbumPresent = true;
                    })["catch"](function (err) {
                      _this.albums = '';
                      _this.isAlbumPresent = false;
                    });
                  }
                });
              } else {
                _this.apiService.fetchAllAlbums().then(function (data) {
                  var albums = JSON.parse(data.data);

                  if (albums) {
                    var albums_array = [];
                    var class_array = [];

                    for (var index = 0; index < albums.length; index++) {
                      if (albums[index]['b']) {
                        for (var i = 0; i < albums[index]['b'].length; i++) {
                          class_array.push(albums[index]['b'][i]['class']);
                        }

                        var album = Object.assign({}, albums[index]['a']);
                        album['class'] = class_array.join();
                      } else {
                        var album = Object.assign({}, albums[index]['a']);
                        album['class'] = '';
                      }

                      albums_array.push(album);
                    }

                    _this.albums = albums_array;
                    _this.isAlbumPresent = true;
                  } else {
                    _this.isAlbumPresent = false;
                  }
                })["catch"](function (err) {
                  _this.albums = '';
                  _this.isAlbumPresent = false;
                });
              }
            });
          }
        }, {
          key: "goBack",
          value: function goBack() {
            this.location.back();
          }
        }, {
          key: "openDetails",
          value: function openDetails(event) {
            this.router.navigate(['eventdetails', event]);
          }
        }, {
          key: "openDetails2",
          value: function openDetails2(id, name) {
            this.router.navigate(['gallerytwo', id, name]);
          }
        }, {
          key: "doRefresh",
          value: function doRefresh(event) {
            var _this2 = this;

            this.storage.get('type').then(function (data) {
              console.log('data', data);
              _this2.type = data;
            });
            this.storage.get('user').then(function (data) {
              if (data) {
                if (JSON.parse(data)["class"]) {
                  _this2.plan = 'Preschool';
                  _this2.classType = JSON.parse(data)["class"];
                } else {
                  _this2.plan = 'Daycare';
                  _this2.classType = 'Daycare';
                }

                _this2.branch_id = JSON.parse(data).branch_id;

                _this2.storage.get('userType').then(function (userType) {
                  if (userType == 'Daycare') {
                    _this2.apiService.fetchBranchAlbum(userType, userType, _this2.branch_id).then(function (album_data) {
                      _this2.albums = JSON.parse(album_data.data);
                      console.log('albums', _this2.albums);
                      _this2.isAlbumPresent = true;
                    })["catch"](function (err) {
                      _this2.albums = '';
                      _this2.isAlbumPresent = false;
                    });
                  } else {
                    _this2.apiService.fetchBranchAlbum(_this2.classType, userType, _this2.branch_id).then(function (album_data) {
                      _this2.albums = JSON.parse(album_data.data);
                      console.log('albums', _this2.albums);
                      _this2.isAlbumPresent = true;
                    })["catch"](function (err) {
                      _this2.albums = '';
                      _this2.isAlbumPresent = false;
                    });
                  }
                });

                event.target.complete();
              } else {
                _this2.apiService.fetchAllAlbums().then(function (data) {
                  event.target.complete();
                  var albums = JSON.parse(data.data);

                  if (albums) {
                    var albums_array = [];
                    var class_array = [];

                    for (var index = 0; index < albums.length; index++) {
                      if (albums[index]['b']) {
                        for (var i = 0; i < albums[index]['b'].length; i++) {
                          class_array.push(albums[index]['b'][i]['class']);
                        }

                        var album = Object.assign({}, albums[index]['a']);
                        album['class'] = class_array.join();
                      } else {
                        var album = Object.assign({}, albums[index]['a']);
                        album['class'] = '';
                      }

                      albums_array.push(album);
                    }

                    _this2.albums = albums_array;
                    _this2.isAlbumPresent = true;
                  } else {
                    _this2.isAlbumPresent = false;
                  }
                })["catch"](function (err) {
                  event.target.complete();
                  _this2.albums = '';
                  _this2.isAlbumPresent = false;
                });
              }
            });
          }
        }]);

        return GalleryPage;
      }();

      GalleryPage.ctorParameters = function () {
        return [{
          type: _ionic_storage__WEBPACK_IMPORTED_MODULE_7__["Storage"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"]
        }, {
          type: _api_service__WEBPACK_IMPORTED_MODULE_4__["ApiService"]
        }, {
          type: _angular_common__WEBPACK_IMPORTED_MODULE_3__["Location"]
        }];
      };

      GalleryPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_5__["Component"])({
        selector: 'app-gallery',
        template: _raw_loader_gallery_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_gallery_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
      })], GalleryPage);
      /***/
    }
  }]);
})();
//# sourceMappingURL=gallery-gallery-module-es5.js.map