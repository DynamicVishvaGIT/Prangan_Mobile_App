(function () {
  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

  function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return typeof key === "symbol" ? key : String(key); }

  function _toPrimitive(input, hint) { if (typeof input !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (typeof res !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["quicktour-quicktour-module"], {
    /***/
    "SZB/":
    /*!*********************************************!*\
      !*** ./src/app/quicktour/quicktour.page.ts ***!
      \*********************************************/

    /*! exports provided: QuicktourPage */

    /***/
    function SZB(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "QuicktourPage", function () {
        return QuicktourPage;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_quicktour_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./quicktour.page.html */
      "bLF+");
      /* harmony import */


      var _quicktour_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./quicktour.page.scss */
      "WDY6");
      /* harmony import */


      var _api_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./../api.service */
      "yTNM");
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


      var _ionic_storage__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @ionic/storage */
      "e8h1");

      var QuicktourPage = /*#__PURE__*/function () {
        function QuicktourPage(menuCtrl, router, storage, apiService) {
          _classCallCheck(this, QuicktourPage);

          this.menuCtrl = menuCtrl;
          this.router = router;
          this.storage = storage;
          this.apiService = apiService;
          this.sliderOpts = {
            initialSlide: 0,
            slidesPerView: 2.1
          };
          this.eventsliderOpts = {
            initialSlide: 0,
            slidesPerView: 1.8
          }; // this.menuCtrl.enable(false);
        }

        _createClass(QuicktourPage, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }, {
          key: "ionViewWillEnter",
          value: function ionViewWillEnter() {
            var _this = this;

            if (this.menuCtrl.isEnabled) {
              console.log('hi');
              this.menuCtrl.swipeGesture(true);
            }

            this.storage.get('type').then(function (data) {
              console.log('data', data);
              _this.type = data;

              if (data === 'quicktour') {
                _this.menuCtrl.enable(true, 'main-content-3');

                _this.menuCtrl.enable(false, 'main-content-2');

                _this.menuCtrl.enable(false, 'main-content-1');

                _this.apiService.fetchAllEvents().then(function (data) {
                  var events = JSON.parse(data.data);

                  if (events) {
                    var events_array = [];
                    var class_array = [];

                    for (var index = 0; index < events.length; index++) {
                      if (events[index]['b']) {
                        for (var i = 0; i < events[index]['b'].length; i++) {
                          class_array.push(events[index]['b'][i]['class']);
                        }

                        var event = Object.assign({}, events[index]['a']);
                        event['class'] = class_array.join();
                      } else {
                        var event = Object.assign({}, events[index]['a']);
                        event['class'] = '';
                      }

                      events_array.push(event);
                    }

                    _this.events = events_array;
                    _this.isEventPresent = true;
                  } else {
                    _this.isEventPresent = false;
                  }
                })["catch"](function (err) {
                  console.log('err', err);
                  _this.events = '';
                  _this.isEventPresent = false;
                });

                _this.apiService.fetchAllAlbums().then(function (data) {
                  var albums = JSON.parse(data.data);
                  console.log("albumsFetch", albums);

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
                  console.log('err', err);
                  _this.albums = '';
                  _this.isAlbumPresent = false;
                });
              } else {
                console.log("");

                _this.menuCtrl.enable(true, 'main-content-1');

                _this.menuCtrl.enable(false, 'main-content-2');

                _this.storage.get('user').then(function (data) {
                  _this.child_name = JSON.parse(data).child_name;

                  if (JSON.parse(data)["class"]) {
                    _this.plan = 'Preschool';
                    _this.classType = JSON.parse(data)["class"];
                  } else {
                    _this.plan = 'Daycare';
                    _this.classType = 'Daycare';
                  }

                  _this.branch_id = JSON.parse(data).branch_id;
                  _this.user_id = JSON.parse(data).id;

                  _this.storage.get('userType').then(function (userType) {
                    _this.apiService.fetchNotifications(userType, _this.user_id).then(function (data) {
                      _this.notifications = JSON.parse(data.data);
                      console.log('notific', _this.notifications);
                    })["catch"](function (err) {
                      _this.notifications = '';
                    });

                    if (userType == 'Daycare') {
                      _this.apiService.fetchBranchEvents(userType, userType, _this.branch_id).then(function (events_data) {
                        _this.events = JSON.parse(events_data.data);
                        _this.isEventPresent = true;
                      })["catch"](function (err) {
                        _this.events = '';
                        _this.isEventPresent = false;
                      });

                      _this.apiService.fetchBranchHoliday(userType, userType, _this.branch_id).then(function (holiday_data) {
                        _this.holidays = JSON.parse(holiday_data.data);
                        _this.isHolidayPresent = true;
                      })["catch"](function (err) {
                        _this.holidays = '';
                        _this.isHolidayPresent = false;
                      });

                      _this.apiService.fetchBranchAlbum(userType, userType, _this.branch_id).then(function (album_data) {
                        _this.albums = JSON.parse(album_data.data);
                        console.log(_this.albums);
                        _this.isAlbumPresent = true;
                      })["catch"](function (err) {
                        _this.albums = '';
                        _this.isAlbumPresent = false;
                      });

                      _this.apiService.fetchUserAttendance(userType, _this.user_id).then(function (data) {
                        console.log("fetchUserAttendance", data);
                        var attendance = JSON.parse(data.data);
                        var today = attendance.today;
                        var yesterday = attendance.yesterday;

                        if (!today) {
                          _this.attendance = yesterday;
                        } else {
                          _this.attendance = today;
                        }

                        if (_this.attendance) {
                          _this.in_time = _this.attendance.date + ' ' + _this.attendance.in_time;
                          _this.out_time = _this.attendance.date + ' ' + _this.attendance.out_time;
                        }
                      });

                      _this.apiService.userDetails(_this.user_id, userType).then(function (data) {
                        console.log('data', data.data);
                        _this.profile = JSON.parse(data.data);
                        var total_amount = _this.profile.amount;

                        _this.apiService.fetchDaycare(_this.user_id).then(function (data) {
                          var daycare_fee_details = JSON.parse(data.data);
                          var total_amount_array = [];

                          if (daycare_fee_details.length > 0) {
                            for (var i = 0; i < daycare_fee_details.length; i++) {
                              total_amount_array.push(parseFloat(daycare_fee_details[i].amount));
                            }

                            var paid_amount = total_amount_array.reduce(function (a, b) {
                              return a + b;
                            }, 0);
                            _this.pending_amount = parseFloat(total_amount) - parseFloat(paid_amount);
                            console.log('tot', total_amount, paid_amount, _this.pending_amount);
                          } else {
                            _this.pending_amount = total_amount;
                          }
                        })["catch"](function (err) {
                          console.log(err);
                          _this.pending_amount = total_amount;
                        });
                      });
                    } else {
                      _this.apiService.fetchBranchEvents(_this.classType, userType, _this.branch_id).then(function (events_data) {
                        _this.events = JSON.parse(events_data.data);
                        _this.isEventPresent = true;
                      })["catch"](function (err) {
                        _this.events = '';
                        _this.isEventPresent = false;
                      });

                      _this.apiService.fetchBranchHoliday(_this.classType, userType, _this.branch_id).then(function (holiday_data) {
                        _this.holidays = JSON.parse(holiday_data.data);
                        _this.isHolidayPresent = true;
                      })["catch"](function (err) {
                        _this.holidays = '';
                        _this.isHolidayPresent = false;
                      });

                      _this.apiService.userDetails(_this.user_id, 'Preschool').then(function (data) {
                        console.log('data', data.data);
                        _this.profile = JSON.parse(data.data);
                        var total_amount = _this.profile.amount;

                        _this.apiService.fetchFeesDetails(_this.user_id).then(function (data) {
                          if (JSON.parse(data.data)['a']) {
                            var paid_amount = JSON.parse(data.data)['a']['amount'];
                            console.log('tao', paid_amount, total_amount);
                            _this.pending_amount = (parseInt(total_amount) - parseInt(paid_amount)).toString();
                            console.log('tao2', paid_amount, total_amount, _this.pending_amount);
                          } else {
                            _this.pending_amount = total_amount;
                          }
                        })["catch"](function (err) {
                          _this.pending_amount = total_amount;
                        });
                      });

                      _this.apiService.fetchBranchAlbum(_this.classType, userType, _this.branch_id).then(function (album_data) {
                        _this.albums = JSON.parse(album_data.data);
                        _this.isAlbumPresent = true;
                      })["catch"](function (err) {
                        _this.albums = '';
                        _this.isAlbumPresent = false;
                      });

                      _this.apiService.fetchUserAttendance('Preschool', _this.user_id).then(function (data) {
                        console.log("Preschool fetchUserAttendance", data);
                        var attendance = JSON.parse(data.data);
                        var today = attendance.today;
                        var yesterday = attendance.yesterday;
                        console.log('attendance', attendance);

                        if (!today) {
                          _this.attendance = yesterday;
                        } else {
                          _this.attendance = today;
                        }

                        if (_this.attendance) {
                          _this.in_time = _this.attendance.date + ' ' + _this.attendance.in_time;
                          _this.out_time = _this.attendance.date + ' ' + _this.attendance.out_time;
                        }

                        console.log('attendance', _this.attendance);
                      });
                    }
                  });
                });
              }
            });
          } // openDetails(event){
          //   this.router.navigate(['eventdetails',event]);
          // }

        }, {
          key: "openAlbum",
          value: function openAlbum(id, name) {
            this.router.navigate(['gallerytwo', id, name]);
          }
        }, {
          key: "doRefresh",
          value: function doRefresh(event) {
            var _this2 = this;

            this.storage.get('type').then(function (data) {
              console.log('data', data);
              _this2.type = data;

              if (data === 'quicktour') {
                event.target.complete();

                _this2.menuCtrl.enable(true, 'main-content-2');

                _this2.menuCtrl.enable(false, 'main-content-1');

                _this2.apiService.fetchAllEvents().then(function (data) {
                  var events = JSON.parse(data.data);

                  if (events) {
                    var events_array = [];
                    var class_array = [];

                    for (var index = 0; index < events.length; index++) {
                      if (events[index]['b']) {
                        for (var i = 0; i < events[index]['b'].length; i++) {
                          class_array.push(events[index]['b'][i]['class']);
                        }

                        var event = Object.assign({}, events[index]['a']);
                        event['class'] = class_array.join();
                      } else {
                        var event = Object.assign({}, events[index]['a']);
                        event['class'] = '';
                      }

                      events_array.push(event);
                    }

                    _this2.events = events_array;
                    _this2.isEventPresent = true;
                  } else {
                    _this2.isEventPresent = false;
                  }
                })["catch"](function (err) {
                  console.log('err', err);
                  _this2.events = '';
                  _this2.isEventPresent = false;
                });

                _this2.apiService.fetchAllAlbums().then(function (data) {
                  var albums = JSON.parse(data.data);
                  console.log("Albums array", albums);

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
                  console.log('err', err);
                  _this2.albums = '';
                  _this2.isAlbumPresent = false;
                });
              } else {
                event.target.complete();

                _this2.menuCtrl.enable(true, 'main-content-1');

                _this2.menuCtrl.enable(false, 'main-content-2');

                _this2.storage.get('user').then(function (data) {
                  _this2.child_name = JSON.parse(data).child_name;

                  if (JSON.parse(data)["class"]) {
                    _this2.plan = 'Preschool';
                    _this2.classType = JSON.parse(data)["class"];
                  } else {
                    _this2.plan = 'Daycare';
                    _this2.classType = 'Daycare';
                  }

                  _this2.branch_id = JSON.parse(data).branch_id;
                  _this2.user_id = JSON.parse(data).id;

                  _this2.storage.get('userType').then(function (userType) {
                    if (userType == 'Daycare') {
                      _this2.apiService.fetchBranchEvents(userType, userType, _this2.branch_id).then(function (events_data) {
                        _this2.events = JSON.parse(events_data.data);
                        _this2.isEventPresent = true;
                      })["catch"](function (err) {
                        _this2.events = '';
                        _this2.isEventPresent = false;
                      });

                      _this2.apiService.fetchBranchHoliday(userType, userType, _this2.branch_id).then(function (holiday_data) {
                        _this2.holidays = JSON.parse(holiday_data.data);
                        _this2.isHolidayPresent = true;
                      })["catch"](function (err) {
                        _this2.holidays = '';
                        _this2.isHolidayPresent = false;
                      });

                      _this2.apiService.fetchBranchAlbum(userType, userType, _this2.branch_id).then(function (album_data) {
                        _this2.albums = JSON.parse(album_data.data);
                        _this2.isAlbumPresent = true;
                      })["catch"](function (err) {
                        _this2.albums = '';
                        _this2.isAlbumPresent = false;
                      });

                      _this2.apiService.fetchUserAttendance(userType, _this2.user_id).then(function (data) {
                        console.log(data);
                        var attendance = JSON.parse(data.data);
                        var today = attendance.today;
                        var yesterday = attendance.yesterday;

                        if (!today) {
                          _this2.attendance = yesterday;
                        } else {
                          _this2.attendance = today;
                        }

                        if (_this2.attendance) {
                          _this2.in_time = _this2.attendance.date + ' ' + _this2.attendance.in_time;
                          _this2.out_time = _this2.attendance.date + ' ' + _this2.attendance.out_time;
                        }
                      });
                    } else {
                      _this2.apiService.fetchBranchEvents(_this2.classType, userType, _this2.branch_id).then(function (events_data) {
                        _this2.events = JSON.parse(events_data.data);
                        _this2.isEventPresent = true;
                      })["catch"](function (err) {
                        _this2.events = '';
                        _this2.isEventPresent = false;
                      });

                      _this2.apiService.fetchBranchHoliday(_this2.classType, userType, _this2.branch_id).then(function (holiday_data) {
                        _this2.holidays = JSON.parse(holiday_data.data);
                        _this2.isHolidayPresent = true;
                      })["catch"](function (err) {
                        _this2.holidays = '';
                        _this2.isHolidayPresent = false;
                      });

                      _this2.apiService.fetchBranchAlbum(_this2.classType, userType, _this2.branch_id).then(function (album_data) {
                        _this2.albums = JSON.parse(album_data.data);
                        _this2.isAlbumPresent = true;
                      })["catch"](function (err) {
                        _this2.albums = '';
                        _this2.isAlbumPresent = false;
                      });

                      _this2.apiService.fetchUserAttendance('Preschool', _this2.user_id).then(function (data) {
                        var attendance = JSON.parse(data.data);
                        var today = attendance.today;
                        var yesterday = attendance.yesterday;
                        console.log('attendance', attendance);

                        if (!today) {
                          _this2.attendance = yesterday;
                        } else {
                          _this2.attendance = today;
                        }

                        if (_this2.attendance) {
                          _this2.in_time = _this2.attendance.date + ' ' + _this2.attendance.in_time;
                          _this2.out_time = _this2.attendance.date + ' ' + _this2.attendance.out_time;
                        }

                        console.log('attendance', _this2.attendance);
                      });
                    }
                  });
                });
              }
            });
          }
        }]);

        return QuicktourPage;
      }();

      QuicktourPage.ctorParameters = function () {
        return [{
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["MenuController"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"]
        }, {
          type: _ionic_storage__WEBPACK_IMPORTED_MODULE_7__["Storage"]
        }, {
          type: _api_service__WEBPACK_IMPORTED_MODULE_3__["ApiService"]
        }];
      };

      QuicktourPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_4__["Component"])({
        selector: 'app-quicktour',
        template: _raw_loader_quicktour_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_quicktour_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
      })], QuicktourPage);
      /***/
    },

    /***/
    "WDY6":
    /*!***********************************************!*\
      !*** ./src/app/quicktour/quicktour.page.scss ***!
      \***********************************************/

    /*! exports provided: default */

    /***/
    function WDY6(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "ion-header {\n  box-shadow: 0 17px 50px 0 rgba(0, 0, 0, 0), 0 12px 15px 0 rgba(0, 0, 0, 0.1);\n}\n\nion-card-subtitle {\n  color: #fff;\n  margin-left: 4px;\n}\n\nion-title {\n  padding-left: 2px;\n}\n\n.class_type {\n  margin-top: 0;\n}\n\n.toolbar-div {\n  background: #fdd653;\n  position: absolute;\n  left: 0;\n  right: 0;\n  top: 0;\n  z-index: 1000;\n  height: 200px;\n}\n\n.toolbar-div .child-name {\n  margin-top: 16px;\n  margin-left: 56px;\n  margin-bottom: 8px;\n  color: #fff;\n  font-weight: bold;\n  font-size: 14px;\n}\n\n.toolbar-div .name {\n  margin-top: 0;\n  margin-left: 56px;\n  margin-bottom: 8px;\n  color: #fff;\n  font-weight: bold;\n  font-size: 14px;\n}\n\n.toolbar-div ion-card {\n  text-align: center;\n  border-radius: 18px;\n  margin-top: 0;\n}\n\n.toolbar-div ion-card ion-col {\n  font-weight: bold;\n}\n\n.toolbar-div ion-card img {\n  width: 20%;\n}\n\n.toolbar-div ion-card ion-card-subtitle {\n  color: #202020;\n  margin-left: 0;\n  text-transform: none;\n}\n\n.toolbar-div .heading {\n  font-weight: bold;\n  margin-left: 16px;\n}\n\n.toolbar-div .data-card {\n  width: 100%;\n  box-shadow: rgba(0, 0, 0, 0.11) 0px 0px 12px 0px;\n  border-radius: 8px;\n  margin-left: 4px;\n}\n\n.toolbar-div .data-card img {\n  width: 33%;\n  margin-top: 18px;\n  border-radius: 50%;\n  margin-bottom: 8px;\n}\n\n.toolbar-div .data-card p {\n  margin-left: 8px;\n}\n\n.toolbar-div .data-card ion-col p {\n  font-size: 12px;\n}\n\n.toolbar-div .data-card ion-col img {\n  width: 62px;\n  height: 62px;\n}\n\n.toolbar-div .date {\n  color: #202020;\n}\n\n.toolbar-div .holiday {\n  color: #202020;\n  margin-left: 10px !important;\n  margin-top: 8px;\n  margin-bottom: 8px;\n  text-align: left;\n}\n\n.toolbar-div-2 {\n  background: #fdd653;\n  position: absolute;\n  left: 0;\n  right: 0;\n  top: 0;\n  z-index: 1000;\n  height: 90px;\n}\n\n.toolbar-div-2 .child-name {\n  margin-top: 16px;\n  margin-left: 56px;\n  margin-bottom: 8px;\n  color: #fff;\n  font-weight: bold;\n}\n\n.toolbar-div-2 .name {\n  margin-top: 0;\n  margin-left: 56px;\n  margin-bottom: 8px;\n  color: #fff;\n  font-weight: bold;\n}\n\n.toolbar-div-2 ion-card {\n  text-align: center;\n  border-radius: 18px;\n}\n\n.toolbar-div-2 ion-card ion-col {\n  font-weight: bold;\n}\n\n.toolbar-div-2 ion-card img {\n  width: 20%;\n}\n\n.toolbar-div-2 ion-card ion-card-subtitle {\n  color: #202020;\n  margin-left: 0;\n  text-transform: none;\n}\n\n.toolbar-div-2 .heading {\n  font-weight: bold;\n  margin-left: 16px;\n}\n\n.toolbar-div-2 .data-card {\n  width: 100%;\n  box-shadow: rgba(0, 0, 0, 0.11) 0px 0px 12px 0px;\n  border-radius: 8px;\n  margin-left: 4px;\n}\n\n.toolbar-div-2 .data-card img {\n  width: 33%;\n  margin-top: 18px;\n  border-radius: 50%;\n  margin-bottom: 8px;\n}\n\n.toolbar-div-2 .data-card p {\n  margin-left: 8px;\n}\n\n.toolbar-div-2 .data-card ion-col p {\n  font-size: 12px;\n}\n\n.toolbar-div-2 .data-card ion-col img {\n  width: 62px;\n  height: 62px;\n}\n\n.toolbar-div-2 .date {\n  color: #202020;\n}\n\n.toolbar-div-2 .holiday {\n  color: #202020;\n  margin-left: 10px !important;\n  margin-top: 8px;\n  margin-bottom: 8px;\n  text-align: left;\n}\n\n.see-btn-div .see {\n  color: #fdd653;\n}\n\n.see-btn-div ion-button {\n  text-transform: none;\n  margin-top: -16px;\n  margin-right: 1px;\n}\n\n@media screen and (max-width: 360px) {\n  .events-slider ion-slide ion-card {\n    height: 115px;\n  }\n}\n\n.time {\n  font-weight: bold;\n  color: #fdd653;\n}\n\n.daycare-btn {\n  --background:#ea1b26;\n  --color:#fff;\n}\n\n.preschool-btn {\n  --background:#218bba;\n  --color:#fff;\n}\n\n.daycare-btn, .preschool-btn {\n  height: 26px;\n}\n\n.toolbar-div-3 {\n  background: #fdd653;\n  position: absolute;\n  left: 0;\n  right: 0;\n  top: 0;\n  z-index: 1000;\n  height: 180px;\n}\n\n.toolbar-div-3 .child-name {\n  margin-top: 16px;\n  margin-left: 56px;\n  margin-bottom: 8px;\n  color: #fff;\n  font-weight: bold;\n  font-size: 14px;\n}\n\n.toolbar-div-3 .name {\n  margin-top: 0;\n  margin-left: 56px;\n  margin-bottom: 8px;\n  color: #fff;\n  font-weight: bold;\n  font-size: 14px;\n}\n\n.toolbar-div-3 ion-card {\n  text-align: center;\n  border-radius: 18px;\n}\n\n.toolbar-div-3 ion-card ion-col {\n  font-weight: bold;\n}\n\n.toolbar-div-3 ion-card img {\n  width: 20%;\n}\n\n.toolbar-div-3 ion-card ion-card-subtitle {\n  color: #202020;\n  margin-left: 0;\n  text-transform: none;\n}\n\n.toolbar-div-3 .heading {\n  font-weight: bold;\n  margin-left: 16px;\n}\n\n.toolbar-div-3 .data-card {\n  width: 100%;\n  box-shadow: rgba(0, 0, 0, 0.11) 0px 0px 12px 0px;\n  border-radius: 8px;\n  margin-left: 4px;\n  height: 150px;\n}\n\n.toolbar-div-3 .data-card img {\n  width: 33%;\n  margin-top: 18px;\n  border-radius: 50%;\n  margin-bottom: 8px;\n}\n\n.toolbar-div-3 .data-card p {\n  margin-left: 8px;\n  font-size: 12px;\n}\n\n.toolbar-div-3 .data-card ion-col p {\n  font-size: 12px;\n}\n\n.toolbar-div-3 .data-card ion-col img {\n  width: 62px;\n  height: 62px;\n}\n\n.toolbar-div-3 .date {\n  color: #202020;\n}\n\n.toolbar-div-3 .holiday {\n  color: #202020;\n  margin-left: 10px !important;\n  margin-top: 8px;\n  margin-bottom: 8px;\n  text-align: left;\n}\n\n.name-2 {\n  margin-top: 0;\n  margin-bottom: 8px;\n  color: #fff;\n  font-weight: bold;\n  font-size: 14px;\n  text-align: center;\n}\n\n.gallery-slider {\n  max-height: 150px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3F1aWNrdG91ci5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSw0RUFBQTtBQUNKOztBQUVBO0VBQ0ksV0FBQTtFQUNBLGdCQUFBO0FBQ0o7O0FBRUE7RUFDSSxpQkFBQTtBQUNKOztBQUNBO0VBQ0ksYUFBQTtBQUVKOztBQUFBO0VBQ0ksbUJBQUE7RUFDQSxrQkFBQTtFQUNBLE9BQUE7RUFDQSxRQUFBO0VBQ0EsTUFBQTtFQUNBLGFBQUE7RUFDQSxhQUFBO0FBR0o7O0FBRkk7RUFDSSxnQkFBQTtFQUNBLGlCQUFBO0VBQ0Esa0JBQUE7RUFDQSxXQUFBO0VBQ0EsaUJBQUE7RUFDQSxlQUFBO0FBSVI7O0FBRkk7RUFDSSxhQUFBO0VBQ0EsaUJBQUE7RUFDQSxrQkFBQTtFQUNBLFdBQUE7RUFDQSxpQkFBQTtFQUNBLGVBQUE7QUFJUjs7QUFESTtFQUNJLGtCQUFBO0VBQ0EsbUJBQUE7RUFDQSxhQUFBO0FBR1I7O0FBRlE7RUFDSSxpQkFBQTtBQUlaOztBQUZRO0VBQ0ksVUFBQTtBQUlaOztBQUZRO0VBQ0ksY0FBQTtFQUNBLGNBQUE7RUFDQSxvQkFBQTtBQUlaOztBQURJO0VBQ0ksaUJBQUE7RUFDQSxpQkFBQTtBQUdSOztBQUFJO0VBQ0ksV0FBQTtFQUNBLGdEQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQkFBQTtBQUVSOztBQURRO0VBQ0ksVUFBQTtFQUNBLGdCQUFBO0VBQ0Esa0JBQUE7RUFDQSxrQkFBQTtBQUdaOztBQURRO0VBQ0ksZ0JBQUE7QUFHWjs7QUFBWTtFQUNJLGVBQUE7QUFFaEI7O0FBQVk7RUFDSSxXQUFBO0VBQ0EsWUFBQTtBQUVoQjs7QUFJSTtFQUNJLGNBQUE7QUFGUjs7QUFJSTtFQUNJLGNBQUE7RUFDQSw0QkFBQTtFQUNBLGVBQUE7RUFDQSxrQkFBQTtFQUNBLGdCQUFBO0FBRlI7O0FBS0E7RUFDSSxtQkFBQTtFQUNBLGtCQUFBO0VBQ0EsT0FBQTtFQUNBLFFBQUE7RUFDQSxNQUFBO0VBQ0EsYUFBQTtFQUNBLFlBQUE7QUFGSjs7QUFHSTtFQUNJLGdCQUFBO0VBQ0EsaUJBQUE7RUFDQSxrQkFBQTtFQUNBLFdBQUE7RUFDQSxpQkFBQTtBQURSOztBQUdJO0VBQ0ksYUFBQTtFQUNBLGlCQUFBO0VBQ0Esa0JBQUE7RUFDQSxXQUFBO0VBQ0EsaUJBQUE7QUFEUjs7QUFHSTtFQUNJLGtCQUFBO0VBQ0EsbUJBQUE7QUFEUjs7QUFFUTtFQUNJLGlCQUFBO0FBQVo7O0FBRVE7RUFDSSxVQUFBO0FBQVo7O0FBRVE7RUFDSSxjQUFBO0VBQ0EsY0FBQTtFQUNBLG9CQUFBO0FBQVo7O0FBR0k7RUFDSSxpQkFBQTtFQUNBLGlCQUFBO0FBRFI7O0FBSUk7RUFDSSxXQUFBO0VBQ0EsZ0RBQUE7RUFDQSxrQkFBQTtFQUNBLGdCQUFBO0FBRlI7O0FBR1E7RUFDSSxVQUFBO0VBQ0EsZ0JBQUE7RUFDQSxrQkFBQTtFQUNBLGtCQUFBO0FBRFo7O0FBR1E7RUFDSSxnQkFBQTtBQURaOztBQUlZO0VBQ0ksZUFBQTtBQUZoQjs7QUFJWTtFQUNJLFdBQUE7RUFDQSxZQUFBO0FBRmhCOztBQVFJO0VBQ0ksY0FBQTtBQU5SOztBQVFJO0VBQ0ksY0FBQTtFQUNBLDRCQUFBO0VBQ0EsZUFBQTtFQUNBLGtCQUFBO0VBQ0EsZ0JBQUE7QUFOUjs7QUFVSTtFQUNJLGNBQUE7QUFQUjs7QUFTSTtFQUNJLG9CQUFBO0VBQ0EsaUJBQUE7RUFDQSxpQkFBQTtBQVBSOztBQVVBO0VBSVk7SUFDSSxhQUFBO0VBVmQ7QUFDRjs7QUFjQTtFQUNJLGlCQUFBO0VBQ0EsY0FBQTtBQVpKOztBQWNBO0VBQ0ksb0JBQUE7RUFDQSxZQUFBO0FBWEo7O0FBYUE7RUFDSSxvQkFBQTtFQUNBLFlBQUE7QUFWSjs7QUFZQTtFQUNJLFlBQUE7QUFUSjs7QUFXQTtFQUNJLG1CQUFBO0VBQ0Esa0JBQUE7RUFDQSxPQUFBO0VBQ0EsUUFBQTtFQUNBLE1BQUE7RUFDQSxhQUFBO0VBQ0EsYUFBQTtBQVJKOztBQVNJO0VBQ0ksZ0JBQUE7RUFDQSxpQkFBQTtFQUNBLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLGlCQUFBO0VBQ0EsZUFBQTtBQVBSOztBQVNJO0VBQ0ksYUFBQTtFQUNBLGlCQUFBO0VBQ0Esa0JBQUE7RUFDQSxXQUFBO0VBQ0EsaUJBQUE7RUFDQSxlQUFBO0FBUFI7O0FBVUk7RUFDSSxrQkFBQTtFQUNBLG1CQUFBO0FBUlI7O0FBU1E7RUFDSSxpQkFBQTtBQVBaOztBQVNRO0VBQ0ksVUFBQTtBQVBaOztBQVNRO0VBQ0ksY0FBQTtFQUNBLGNBQUE7RUFDQSxvQkFBQTtBQVBaOztBQVVJO0VBQ0ksaUJBQUE7RUFDQSxpQkFBQTtBQVJSOztBQVdJO0VBQ0ksV0FBQTtFQUNBLGdEQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQkFBQTtFQUNBLGFBQUE7QUFUUjs7QUFVUTtFQUNJLFVBQUE7RUFDQSxnQkFBQTtFQUNBLGtCQUFBO0VBQ0Esa0JBQUE7QUFSWjs7QUFVUTtFQUNJLGdCQUFBO0VBQ0EsZUFBQTtBQVJaOztBQVdZO0VBQ0ksZUFBQTtBQVRoQjs7QUFXWTtFQUNJLFdBQUE7RUFDQSxZQUFBO0FBVGhCOztBQWVJO0VBQ0ksY0FBQTtBQWJSOztBQWVJO0VBQ0ksY0FBQTtFQUNBLDRCQUFBO0VBQ0EsZUFBQTtFQUNBLGtCQUFBO0VBQ0EsZ0JBQUE7QUFiUjs7QUFnQkE7RUFDSSxhQUFBO0VBQ0Esa0JBQUE7RUFDQSxXQUFBO0VBQ0EsaUJBQUE7RUFDQSxlQUFBO0VBQ0Esa0JBQUE7QUFiSjs7QUFnQkE7RUFDSSxpQkFBQTtBQWJKIiwiZmlsZSI6InF1aWNrdG91ci5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJpb24taGVhZGVye1xyXG4gICAgYm94LXNoYWRvdzogMCAxN3B4IDUwcHggMCByZ2JhKDAsIDAsIDAsIDApLCAwIDEycHggMTVweCAwIHJnYmEoMCwgMCwgMCwgMC4xKTtcclxufVxyXG5cclxuaW9uLWNhcmQtc3VidGl0bGV7XHJcbiAgICBjb2xvcjogI2ZmZjtcclxuICAgIG1hcmdpbi1sZWZ0OiA0cHg7XHJcbn1cclxuXHJcbmlvbi10aXRsZXtcclxuICAgIHBhZGRpbmctbGVmdDogMnB4O1xyXG59XHJcbi5jbGFzc190eXBle1xyXG4gICAgbWFyZ2luLXRvcDogMDtcclxufVxyXG4udG9vbGJhci1kaXZ7XHJcbiAgICBiYWNrZ3JvdW5kOiAjZmRkNjUzO1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgbGVmdDogMDtcclxuICAgIHJpZ2h0OiAwO1xyXG4gICAgdG9wOiAwO1xyXG4gICAgei1pbmRleDogMTAwMDtcclxuICAgIGhlaWdodDogMjAwcHg7XHJcbiAgICAuY2hpbGQtbmFtZSB7XHJcbiAgICAgICAgbWFyZ2luLXRvcDogMTZweDtcclxuICAgICAgICBtYXJnaW4tbGVmdDogNTZweDtcclxuICAgICAgICBtYXJnaW4tYm90dG9tOiA4cHg7XHJcbiAgICAgICAgY29sb3I6ICNmZmY7XHJcbiAgICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgICAgICAgZm9udC1zaXplOiAxNHB4O1xyXG4gICAgfVxyXG4gICAgLm5hbWUge1xyXG4gICAgICAgIG1hcmdpbi10b3A6IDA7XHJcbiAgICAgICAgbWFyZ2luLWxlZnQ6IDU2cHg7XHJcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogOHB4O1xyXG4gICAgICAgIGNvbG9yOiAjZmZmO1xyXG4gICAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMTRweDtcclxuXHJcbiAgICB9XHJcbiAgICBpb24tY2FyZCB7XHJcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDE4cHg7XHJcbiAgICAgICAgbWFyZ2luLXRvcDogMDtcclxuICAgICAgICBpb24tY29sIHtcclxuICAgICAgICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGltZyB7XHJcbiAgICAgICAgICAgIHdpZHRoOiAyMCU7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlvbi1jYXJkLXN1YnRpdGxlIHtcclxuICAgICAgICAgICAgY29sb3I6ICMyMDIwMjA7XHJcbiAgICAgICAgICAgIG1hcmdpbi1sZWZ0OiAwO1xyXG4gICAgICAgICAgICB0ZXh0LXRyYW5zZm9ybTogbm9uZTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICAuaGVhZGluZyB7XHJcbiAgICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgICAgICAgbWFyZ2luLWxlZnQ6IDE2cHg7XHJcbiAgICB9XHJcblxyXG4gICAgLmRhdGEtY2FyZHtcclxuICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICBib3gtc2hhZG93OiByZ2IoMCAwIDAgLyAxMSUpIDBweCAwcHggMTJweCAwcHg7XHJcbiAgICAgICAgYm9yZGVyLXJhZGl1czogOHB4O1xyXG4gICAgICAgIG1hcmdpbi1sZWZ0OiA0cHg7XHJcbiAgICAgICAgaW1nIHtcclxuICAgICAgICAgICAgd2lkdGg6IDMzJTtcclxuICAgICAgICAgICAgbWFyZ2luLXRvcDogMThweDtcclxuICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogNTAlO1xyXG4gICAgICAgICAgICBtYXJnaW4tYm90dG9tOiA4cHg7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHAge1xyXG4gICAgICAgICAgICBtYXJnaW4tbGVmdDogOHB4O1xyXG4gICAgICAgIH1cclxuICAgICAgICBpb24tY29sIHtcclxuICAgICAgICAgICAgcCB7XHJcbiAgICAgICAgICAgICAgICBmb250LXNpemU6IDEycHg7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgaW1nIHtcclxuICAgICAgICAgICAgICAgIHdpZHRoOiA2MnB4O1xyXG4gICAgICAgICAgICAgICAgaGVpZ2h0OiA2MnB4O1xyXG5cclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICAuZGF0ZSB7XHJcbiAgICAgICAgY29sb3I6ICMyMDIwMjA7XHJcbiAgICB9XHJcbiAgICAuaG9saWRheSB7XHJcbiAgICAgICAgY29sb3I6ICMyMDIwMjA7XHJcbiAgICAgICAgbWFyZ2luLWxlZnQ6IDEwcHggIWltcG9ydGFudDtcclxuICAgICAgICBtYXJnaW4tdG9wOiA4cHg7XHJcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogOHB4O1xyXG4gICAgICAgIHRleHQtYWxpZ246IGxlZnQ7XHJcbiAgICB9XHJcbn1cclxuLnRvb2xiYXItZGl2LTJ7XHJcbiAgICBiYWNrZ3JvdW5kOiAjZmRkNjUzO1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgbGVmdDogMDtcclxuICAgIHJpZ2h0OiAwO1xyXG4gICAgdG9wOiAwO1xyXG4gICAgei1pbmRleDogMTAwMDtcclxuICAgIGhlaWdodDogOTBweDtcclxuICAgIC5jaGlsZC1uYW1lIHtcclxuICAgICAgICBtYXJnaW4tdG9wOiAxNnB4O1xyXG4gICAgICAgIG1hcmdpbi1sZWZ0OiA1NnB4O1xyXG4gICAgICAgIG1hcmdpbi1ib3R0b206IDhweDtcclxuICAgICAgICBjb2xvcjogI2ZmZjtcclxuICAgICAgICBmb250LXdlaWdodDogYm9sZDtcclxuICAgIH1cclxuICAgIC5uYW1lIHtcclxuICAgICAgICBtYXJnaW4tdG9wOiAwO1xyXG4gICAgICAgIG1hcmdpbi1sZWZ0OiA1NnB4O1xyXG4gICAgICAgIG1hcmdpbi1ib3R0b206IDhweDtcclxuICAgICAgICBjb2xvcjogI2ZmZjtcclxuICAgICAgICBmb250LXdlaWdodDogYm9sZDtcclxuICAgIH1cclxuICAgIGlvbi1jYXJkIHtcclxuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICAgICAgYm9yZGVyLXJhZGl1czogMThweDtcclxuICAgICAgICBpb24tY29sIHtcclxuICAgICAgICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGltZyB7XHJcbiAgICAgICAgICAgIHdpZHRoOiAyMCU7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlvbi1jYXJkLXN1YnRpdGxlIHtcclxuICAgICAgICAgICAgY29sb3I6ICMyMDIwMjA7XHJcbiAgICAgICAgICAgIG1hcmdpbi1sZWZ0OiAwO1xyXG4gICAgICAgICAgICB0ZXh0LXRyYW5zZm9ybTogbm9uZTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICAuaGVhZGluZyB7XHJcbiAgICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgICAgICAgbWFyZ2luLWxlZnQ6IDE2cHg7XHJcbiAgICB9XHJcblxyXG4gICAgLmRhdGEtY2FyZHtcclxuICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICBib3gtc2hhZG93OiByZ2IoMCAwIDAgLyAxMSUpIDBweCAwcHggMTJweCAwcHg7XHJcbiAgICAgICAgYm9yZGVyLXJhZGl1czogOHB4O1xyXG4gICAgICAgIG1hcmdpbi1sZWZ0OiA0cHg7XHJcbiAgICAgICAgaW1nIHtcclxuICAgICAgICAgICAgd2lkdGg6IDMzJTtcclxuICAgICAgICAgICAgbWFyZ2luLXRvcDogMThweDtcclxuICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogNTAlO1xyXG4gICAgICAgICAgICBtYXJnaW4tYm90dG9tOiA4cHg7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHAge1xyXG4gICAgICAgICAgICBtYXJnaW4tbGVmdDogOHB4O1xyXG4gICAgICAgIH1cclxuICAgICAgICBpb24tY29sIHtcclxuICAgICAgICAgICAgcCB7XHJcbiAgICAgICAgICAgICAgICBmb250LXNpemU6IDEycHg7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgaW1nIHtcclxuICAgICAgICAgICAgICAgIHdpZHRoOiA2MnB4O1xyXG4gICAgICAgICAgICAgICAgaGVpZ2h0OiA2MnB4O1xyXG5cclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICAuZGF0ZSB7XHJcbiAgICAgICAgY29sb3I6ICMyMDIwMjA7XHJcbiAgICB9XHJcbiAgICAuaG9saWRheSB7XHJcbiAgICAgICAgY29sb3I6ICMyMDIwMjA7XHJcbiAgICAgICAgbWFyZ2luLWxlZnQ6IDEwcHggIWltcG9ydGFudDtcclxuICAgICAgICBtYXJnaW4tdG9wOiA4cHg7XHJcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogOHB4O1xyXG4gICAgICAgIHRleHQtYWxpZ246IGxlZnQ7XHJcbiAgICB9XHJcbn1cclxuLnNlZS1idG4tZGl2e1xyXG4gICAgLnNlZXtcclxuICAgICAgICBjb2xvcjogI2ZkZDY1MztcclxuICAgIH1cclxuICAgIGlvbi1idXR0b24ge1xyXG4gICAgICAgIHRleHQtdHJhbnNmb3JtOiBub25lO1xyXG4gICAgICAgIG1hcmdpbi10b3A6IC0xNnB4O1xyXG4gICAgICAgIG1hcmdpbi1yaWdodDogMXB4O1xyXG4gICAgfVxyXG59XHJcbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDM2MHB4KXtcclxuXHJcbiAgICAuZXZlbnRzLXNsaWRlcntcclxuICAgICAgICBpb24tc2xpZGV7XHJcbiAgICAgICAgICAgIGlvbi1jYXJke1xyXG4gICAgICAgICAgICAgICAgaGVpZ2h0OiAxMTVweDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG4udGltZXtcclxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gICAgY29sb3I6ICNmZGQ2NTM7XHJcbn1cclxuLmRheWNhcmUtYnRue1xyXG4gICAgLS1iYWNrZ3JvdW5kOiNlYTFiMjY7XHJcbiAgICAtLWNvbG9yOiNmZmY7XHJcbn1cclxuLnByZXNjaG9vbC1idG57XHJcbiAgICAtLWJhY2tncm91bmQ6IzIxOGJiYTtcclxuICAgIC0tY29sb3I6I2ZmZjtcclxufVxyXG4uZGF5Y2FyZS1idG4sLnByZXNjaG9vbC1idG57XHJcbiAgICBoZWlnaHQ6IDI2cHg7XHJcbn1cclxuLnRvb2xiYXItZGl2LTN7XHJcbiAgICBiYWNrZ3JvdW5kOiAjZmRkNjUzO1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgbGVmdDogMDtcclxuICAgIHJpZ2h0OiAwO1xyXG4gICAgdG9wOiAwO1xyXG4gICAgei1pbmRleDogMTAwMDtcclxuICAgIGhlaWdodDogMTgwcHg7XHJcbiAgICAuY2hpbGQtbmFtZSB7XHJcbiAgICAgICAgbWFyZ2luLXRvcDogMTZweDtcclxuICAgICAgICBtYXJnaW4tbGVmdDogNTZweDtcclxuICAgICAgICBtYXJnaW4tYm90dG9tOiA4cHg7XHJcbiAgICAgICAgY29sb3I6ICNmZmY7XHJcbiAgICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgICAgICAgZm9udC1zaXplOiAxNHB4O1xyXG4gICAgfVxyXG4gICAgLm5hbWUge1xyXG4gICAgICAgIG1hcmdpbi10b3A6IDA7XHJcbiAgICAgICAgbWFyZ2luLWxlZnQ6IDU2cHg7XHJcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogOHB4O1xyXG4gICAgICAgIGNvbG9yOiAjZmZmO1xyXG4gICAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMTRweDtcclxuXHJcbiAgICB9XHJcbiAgICBpb24tY2FyZCB7XHJcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDE4cHg7XHJcbiAgICAgICAgaW9uLWNvbCB7XHJcbiAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpbWcge1xyXG4gICAgICAgICAgICB3aWR0aDogMjAlO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpb24tY2FyZC1zdWJ0aXRsZSB7XHJcbiAgICAgICAgICAgIGNvbG9yOiAjMjAyMDIwO1xyXG4gICAgICAgICAgICBtYXJnaW4tbGVmdDogMDtcclxuICAgICAgICAgICAgdGV4dC10cmFuc2Zvcm06IG5vbmU7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgLmhlYWRpbmcge1xyXG4gICAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gICAgICAgIG1hcmdpbi1sZWZ0OiAxNnB4O1xyXG4gICAgfVxyXG5cclxuICAgIC5kYXRhLWNhcmR7XHJcbiAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgYm94LXNoYWRvdzogcmdiKDAgMCAwIC8gMTElKSAwcHggMHB4IDEycHggMHB4O1xyXG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDhweDtcclxuICAgICAgICBtYXJnaW4tbGVmdDogNHB4O1xyXG4gICAgICAgIGhlaWdodDogMTUwcHg7XHJcbiAgICAgICAgaW1nIHtcclxuICAgICAgICAgICAgd2lkdGg6IDMzJTtcclxuICAgICAgICAgICAgbWFyZ2luLXRvcDogMThweDtcclxuICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogNTAlO1xyXG4gICAgICAgICAgICBtYXJnaW4tYm90dG9tOiA4cHg7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHAge1xyXG4gICAgICAgICAgICBtYXJnaW4tbGVmdDogOHB4O1xyXG4gICAgICAgICAgICBmb250LXNpemU6IDEycHg7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlvbi1jb2wge1xyXG4gICAgICAgICAgICBwIHtcclxuICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMTJweDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBpbWcge1xyXG4gICAgICAgICAgICAgICAgd2lkdGg6IDYycHg7XHJcbiAgICAgICAgICAgICAgICBoZWlnaHQ6IDYycHg7XHJcblxyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIC5kYXRlIHtcclxuICAgICAgICBjb2xvcjogIzIwMjAyMDtcclxuICAgIH1cclxuICAgIC5ob2xpZGF5IHtcclxuICAgICAgICBjb2xvcjogIzIwMjAyMDtcclxuICAgICAgICBtYXJnaW4tbGVmdDogMTBweCAhaW1wb3J0YW50O1xyXG4gICAgICAgIG1hcmdpbi10b3A6IDhweDtcclxuICAgICAgICBtYXJnaW4tYm90dG9tOiA4cHg7XHJcbiAgICAgICAgdGV4dC1hbGlnbjogbGVmdDtcclxuICAgIH1cclxufVxyXG4ubmFtZS0yIHtcclxuICAgIG1hcmdpbi10b3A6IDA7XHJcbiAgICBtYXJnaW4tYm90dG9tOiA4cHg7XHJcbiAgICBjb2xvcjogI2ZmZjtcclxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gICAgZm9udC1zaXplOiAxNHB4O1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG5cclxufVxyXG4uZ2FsbGVyeS1zbGlkZXJ7XHJcbiAgICBtYXgtaGVpZ2h0OiAxNTBweDtcclxufVxyXG5cclxuXHJcbiJdfQ== */";
      /***/
    },

    /***/
    "bLF+":
    /*!*************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/quicktour/quicktour.page.html ***!
      \*************************************************************************************/

    /*! exports provided: default */

    /***/
    function bLF(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-header class=\"ion-no-border\">\n  <ion-toolbar>\n    <!-- <ion-buttons slot=\"start\">\n      <ion-back-button color=\"light\"></ion-back-button>\n    </ion-buttons> -->\n    <ion-buttons slot=\"start\">\n      <ion-menu-button menu=\"main-content-3\"></ion-menu-button>\n    </ion-buttons>\n    <ion-buttons slot=\"start\">\n      <ion-menu-button menu=\"main-content-1\"></ion-menu-button>\n    </ion-buttons>\n    <ion-buttons slot=\"start\">\n      <ion-menu-button menu=\"main-content-2\"></ion-menu-button>\n    </ion-buttons>\n    <ion-title>Prangan</ion-title>\n    <ion-card-subtitle>Preschool and Daycare</ion-card-subtitle>\n    <!-- <ion-icon *ngIf=\"type !=='quicktour'\" [routerLink]=\"['/notifications']\" size=\"large\" style=\"margin-right:5%\" slot=\"end\" name=\"notifications-outline\"></ion-icon> -->\n    <ion-avatar *ngIf=\"type !=='quicktour'\" [routerLink]=\"['/notifications']\" slot=\"end\" >\n      <ion-badge color=\"danger\" style=\"position: absolute\">{{notifications?.length}}</ion-badge>\n      <ion-badge color=\"danger\" style=\"position: absolute\">{{notifications?.length}}</ion-badge>\n      <img style=\"width: 40px;height:40px;margin-top: 20%;margin-right:10%\" src=\"assets/dashboard/noti.png\" />\n    </ion-avatar>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <ion-refresher slot=\"fixed\" (ionRefresh)=\"doRefresh($event)\">\n    <ion-refresher-content></ion-refresher-content>\n  </ion-refresher>\n<div  [ngClass]=\"{'toolbar-div': type !=='quicktour' ,'toolbar-div-2': type =='quicktour','toolbar-div-3': type !=='quicktour' && !attendance}\">\n  <p class=\"margin-ionic-start child-name\" *ngIf=\"type !=='quicktour' && child_name\">Welcome, {{child_name |titlecase }}</p>\n  <p class=\"margin-ionic-start name\" *ngIf=\"type !=='quicktour' && plan\">{{classType |titlecase }}</p>\n  <p *ngIf=\"type =='quicktour'\" class=\"margin-ionic-start name-2\" style=\"margin-top: 8px;\">Admission Form</p>\n \n  <div class=\"margin-ionic\" *ngIf=\"type =='quicktour'\">\n  <ion-row class=\"margin-ionic-start\">\n    <ion-col size=\"6\">\n      <ion-button class=\"daycare-btn\"  shape=\"round\"[routerLink]=\"['/addadmission']\" expand=\"block\" >\n        Daycare Form\n      </ion-button>\n    </ion-col>\n    <ion-col size=\"6\">\n      <ion-button class=\"preschool-btn\" shape=\"round\"[routerLink]=\"['/preschoolform']\" expand=\"block\" >\n        Preschool Form\n      </ion-button>\n    </ion-col>\n  </ion-row>\n</div>\n  <ion-card mode=\"ios\"  *ngIf=\"type !=='quicktour' \" >\n    <ion-card-header>\n      <ion-row>\n        <ion-col size=\"6\">\n          <ion-label class=\"time\" *ngIf=\"in_time\">{{in_time|date:'h:mm a'}}</ion-label>\n          <ion-label class=\"time\" *ngIf=\"!in_time\">--</ion-label>\n          <br>\n          <ion-label>Check In</ion-label>\n        </ion-col>\n        <ion-col size=\"6\">\n          <ion-label class=\"time\" *ngIf=\"out_time\">{{out_time|date:'h:mm a'}}</ion-label>\n          <ion-label class=\"time\" *ngIf=\"!out_time\">--</ion-label>\n          <br>\n          <ion-label>Check Out</ion-label>\n        </ion-col>\n      </ion-row>\n      <img src=\"../../assets/dashboard/clock_icon.png\" alt=\"\">\n      <ion-card-subtitle *ngIf=\"attendance\">{{attendance.date|date:'dd MMM,yyyy'}}</ion-card-subtitle>\n      <ion-card-subtitle *ngIf=\"!attendance\">--</ion-card-subtitle>\n    </ion-card-header>\n  \n  </ion-card>\n  <div class=\"margin-ionic ion-text-center\" *ngIf=\"type =='quicktour'\">\n    <ion-button  class=\"preschool-btn\"  shape=\"round\"[routerLink]=\"['/addinquiry']\"  color=\"primary\">\n      Enquiry Form\n    </ion-button>\n    <br>\n  </div>\n  <div *ngIf=\"type !=='quicktour' && pending_amount && pending_amount!=='0' \">\n    <p class=\"heading\">Pending Payments</p>\n    <div class=\"margin-ionic homework-slider\" >\n      <ion-slides pager=\"false\" class=\"slider-card events-slider\" [options]=\"eventsliderOpts\" >\n        <ion-slide >\n          <ion-card  class=\"ion-text-start  data-card\" [routerLink]=\"['/feestructure']\" routerLinkActive=\"router-link-active\" >\n            <ion-row>\n              <ion-col size=\"7\">\n                <p class=\"date\"><b>{{child_name |titlecase }}</b> </p>  \n                <p>Pending Fees</p>\n                <p class=\"date class_type\" *ngIf=\"pending_amount\"><b>₹ {{pending_amount}} </b></p>         \n              </ion-col>\n              <ion-col size=\"5\">\n                <img src=\"{{profile?.child_img}}\" alt=\"\">\n              </ion-col>\n            </ion-row>\n          </ion-card>\n        </ion-slide>\n    \n      </ion-slides>\n    </div>\n  </div>\n  <div *ngIf=\"type !=='quicktour'\">\n    <p class=\"heading\" style=\"padding-top: 8px;\">Holidays</p>\n    <div class=\"margin-ionic homework-slider\" *ngIf=\"holidays\">\n      <ion-slides pager=\"false\" class=\"slider-card \" [options]=\"sliderOpts\" >\n        <ion-slide *ngFor=\"let holiday of holidays\">\n          <ion-card  class=\"data-card\" >\n            <img src=\"{{holiday.image}}\" alt=\"\">\n            <p class=\"holiday\"><b>{{holiday.name}}</b> </p>         \n            <p class=\"holiday\" *ngIf=\"holiday.from_date==holiday.to_date\"><b>{{holiday.from_date}}</b> </p>         \n            <p class=\"holiday\" *ngIf=\"holiday.from_date!==holiday.to_date\"><b>{{holiday.from_date}} - {{holiday.to_date}}</b> </p>         \n          </ion-card>\n        </ion-slide>\n      </ion-slides>\n    </div>\n    <div class=\"margin-ionic homework-slider\" *ngIf=\"!isHolidayPresent\">\n      <ion-slides pager=\"false\" class=\"slider-card events-slider\" [options]=\"eventsliderOpts\" >\n        <ion-slide>\n          <ion-card  class=\"ion-text-start  data-card\" >\n            <ion-row>\n              <ion-col size=\"7\">\n                <p class=\"date\"><b>No Holidays</b> </p>         \n              </ion-col>\n              <ion-col size=\"5\">\n              </ion-col>\n            </ion-row>\n           \n          </ion-card>\n        </ion-slide>\n      </ion-slides>\n    </div>\n    <div class=\"margin-ionic homework-slider\" *ngIf=\"holidays !='' && !isHolidayPresent\">\n      <ion-slides pager=\"false\" class=\"slider-card events-slider\" [options]=\"eventsliderOpts\" >\n        <ion-slide>\n          <ion-card  class=\"ion-text-start  data-card\">\n            <ion-row>\n              <ion-col size=\"7\">\n                <p class=\"date\"><b><ion-skeleton-text animated style=\"width: 60%\"></ion-skeleton-text></b> </p>         \n                <p><ion-skeleton-text animated style=\"width: 80%\"></ion-skeleton-text></p>         \n              </ion-col>\n              <ion-col size=\"5\">\n              </ion-col>\n            </ion-row>\n          </ion-card>\n        </ion-slide>\n      </ion-slides>\n    </div>\n  </div>\n  <div>\n    <p class=\"heading\">Events</p>\n    <div class=\"margin-ionic homework-slider\" *ngIf=\"events\">\n      <ion-slides pager=\"false\" class=\"slider-card events-slider\" [options]=\"eventsliderOpts\" >\n        <ion-slide *ngFor=\"let event of events\">\n          <ion-card  class=\"ion-text-start  data-card\" >\n            <ion-row>\n              <ion-col size=\"7\">\n                <p class=\"date\"><b>{{event.name |titlecase}}</b> </p>         \n                <p>{{event.event_date |date:'dd,MMM yyyy'}}</p>\n                <p *ngIf=\"event.class_type!=='Both'\" class=\"date class_type\"><b>{{event.class_type|titlecase}}</b> </p>         \n                <p *ngIf=\"event.class_type=='Both'\" class=\"date class_type\"><b>Preschool and Daycare</b> </p>         \n\n              </ion-col>\n              <ion-col size=\"5\">\n                <img src=\"{{event.image}}\" alt=\"\">\n              </ion-col>\n            </ion-row>\n          \n          </ion-card>\n        </ion-slide>\n      </ion-slides>\n    </div>\n    <div class=\"margin-ionic homework-slider\" *ngIf=\"!isEventPresent\">\n      <ion-slides pager=\"false\" class=\"slider-card events-slider\" [options]=\"eventsliderOpts\" >\n        <ion-slide>\n          <ion-card  class=\"ion-text-start  data-card\" >\n            <ion-row>\n              <ion-col size=\"7\">\n                <p class=\"date\"><b>No Events</b> </p>         \n              </ion-col>\n              <ion-col size=\"5\">\n              </ion-col>\n            </ion-row>\n           \n          </ion-card>\n        </ion-slide>\n      </ion-slides>\n    </div>\n    <div class=\"margin-ionic homework-slider\" *ngIf=\"events!=='' && !isEventPresent\">\n      <ion-slides pager=\"false\" class=\"slider-card events-slider\" [options]=\"eventsliderOpts\" >\n        <ion-slide>\n          <ion-card  class=\"ion-text-start  data-card\">\n            <ion-row>\n              <ion-col size=\"7\">\n                <p class=\"date\"><b><ion-skeleton-text animated style=\"width: 60%\"></ion-skeleton-text></b> </p>         \n                <p><ion-skeleton-text animated style=\"width: 80%\"></ion-skeleton-text></p>         \n              </ion-col>\n              <ion-col size=\"5\">\n              </ion-col>\n            </ion-row>\n          </ion-card>\n        </ion-slide>\n      </ion-slides>\n    </div>\n   \n  </div>\n  <div>\n    <p class=\"heading\">Gallery</p>\n    <div class=\"margin-ionic homework-slider gallery-slider\" *ngIf=\"albums\">\n      <ion-slides pager=\"false\" class=\"slider-card events-slider\" [options]=\"eventsliderOpts\" >\n        <ion-slide *ngFor=\"let album of albums\">\n          <ion-card  class=\"ion-text-start  data-card\" (click)=\"openAlbum(album.id,album.name)\">\n            <ion-row>\n              <ion-col size=\"7\">\n                <p class=\"date\"><b>{{album.name |titlecase}}</b> </p>  \n                <p>{{album.date |date:'dd,MMM yyyy'}}</p>\n                <p *ngIf=\"album.class_type!=='Both'\" class=\"date class_type\"><b>{{album.class_type|titlecase}}</b> </p>         \n                <!-- <p *ngIf=\"album.class\" class=\"date class_type\"><b>{{album.class|titlecase}}</b> </p>     -->       \n                <p *ngIf=\"album.class_type=='Both'\" class=\"date class_type\"><b>Preschool and Daycare</b> </p>       \n              </ion-col>\n              <ion-col size=\"5\">\n                <img src=\"{{album.image}}\" alt=\"\">\n              </ion-col>\n            </ion-row>\n          </ion-card>\n        </ion-slide>\n      </ion-slides>\n    </div>\n    <div class=\"margin-ionic homework-slider\" *ngIf=\"!isAlbumPresent\">\n      <ion-slides pager=\"false\" class=\"slider-card events-slider\" [options]=\"eventsliderOpts\" >\n        <ion-slide>\n          <ion-card  class=\"ion-text-start  data-card\" >\n            <ion-row>\n              <ion-col size=\"7\">\n                <p class=\"date\"><b>No Gallery</b> </p>         \n              </ion-col>\n              <ion-col size=\"5\">\n              </ion-col>\n            </ion-row>\n           \n          </ion-card>\n        </ion-slide>\n      </ion-slides>\n    </div>\n    <div class=\"margin-ionic homework-slider\" *ngIf=\"albums !='' && !isAlbumPresent\">\n      <ion-slides pager=\"false\" class=\"slider-card events-slider\" [options]=\"eventsliderOpts\" >\n        <ion-slide>\n          <ion-card  class=\"ion-text-start  data-card\">\n            <ion-row>\n              <ion-col size=\"7\">\n                <p class=\"date\"><b><ion-skeleton-text animated style=\"width: 60%\"></ion-skeleton-text></b> </p>         \n                <p><ion-skeleton-text animated style=\"width: 80%\"></ion-skeleton-text></p>         \n              </ion-col>\n              <ion-col size=\"5\">\n              </ion-col>\n            </ion-row>\n          </ion-card>\n        </ion-slide>\n      </ion-slides>\n    </div>\n  </div>\n  <div *ngIf=\"type =='quicktour'\">\n    <p class=\"heading\">Courses</p>\n    <div class=\"margin-ionic homework-slider\" >\n      <ion-slides pager=\"false\" class=\"slider-card events-slider\" [options]=\"eventsliderOpts\" >\n        <ion-slide >\n          <ion-card  class=\"ion-text-start  data-card\" >\n            <ion-row>\n              <ion-col size=\"7\">\n                <p class=\"date\"><b>Toddler</b> </p>  \n                <p>Age Criteria</p>\n                <p class=\"date class_type\"><b>12 Months</b> </p>         \n              </ion-col>\n              <ion-col size=\"5\">\n                <img src=\"../../assets/courses/01_Toddler.png\" alt=\"\">\n              </ion-col>\n            </ion-row>\n          </ion-card>\n        </ion-slide>\n        <ion-slide >\n          <ion-card  class=\"ion-text-start  data-card\" >\n            <ion-row>\n              <ion-col size=\"7\">\n                <p class=\"date\"><b>Playgroup</b> </p>  \n                <p>Age Criteria</p>\n                <p  class=\"date class_type\"><b>24 Months</b> </p>         \n              </ion-col>\n              <ion-col size=\"5\">\n                <img src=\"../../assets/courses/02_Playgroup.png\" alt=\"\">\n              </ion-col>\n            </ion-row>\n          </ion-card>\n        </ion-slide>\n        <ion-slide >\n          <ion-card  class=\"ion-text-start  data-card\" >\n            <ion-row>\n              <ion-col size=\"7\">\n                <p class=\"date\"><b>Nursery</b> </p>  \n                <p>Age Criteria</p>\n                <p  class=\"date class_type\"><b>2.8 Years</b> </p>         \n              </ion-col>\n              <ion-col size=\"5\">\n                <img src=\"../../assets/courses/03_Nursery.png\" alt=\"\">\n              </ion-col>\n            </ion-row>\n          </ion-card>\n        </ion-slide>\n        <ion-slide >\n          <ion-card  class=\"ion-text-start  data-card\" >\n            <ion-row>\n              <ion-col size=\"7\">\n                <p class=\"date\"><b>Jr.Kg</b> </p>  \n                <p>Age Criteria</p>\n                <p  class=\"date class_type\"><b>2.8 years</b> </p>         \n              </ion-col>\n              <ion-col size=\"5\">\n                <img src=\"../../assets/courses/04_Jr. Kg.png\" alt=\"\">\n              </ion-col>\n            </ion-row>\n          </ion-card>\n        </ion-slide>\n        <ion-slide >\n          <ion-card  class=\"ion-text-start  data-card\" >\n            <ion-row>\n              <ion-col size=\"7\">\n                <p class=\"date\"><b>Sr.Kg</b> </p>  \n                <p>Age Criteria</p>\n                <p  class=\"date class_type\"><b>2.8 Years</b> </p>         \n              </ion-col>\n              <ion-col size=\"5\">\n                <img src=\"../../assets/courses/05_Sr. Kg.png\" alt=\"\">\n              </ion-col>\n            </ion-row>\n          </ion-card>\n        </ion-slide>\n      </ion-slides>\n    </div>\n  </div>\n\n</div>\n\n</ion-content>\n";
      /***/
    },

    /***/
    "lKOA":
    /*!*******************************************************!*\
      !*** ./src/app/quicktour/quicktour-routing.module.ts ***!
      \*******************************************************/

    /*! exports provided: QuicktourPageRoutingModule */

    /***/
    function lKOA(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "QuicktourPageRoutingModule", function () {
        return QuicktourPageRoutingModule;
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


      var _quicktour_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./quicktour.page */
      "SZB/");

      var routes = [{
        path: '',
        component: _quicktour_page__WEBPACK_IMPORTED_MODULE_3__["QuicktourPage"]
      }];

      var QuicktourPageRoutingModule = /*#__PURE__*/_createClass(function QuicktourPageRoutingModule() {
        _classCallCheck(this, QuicktourPageRoutingModule);
      });

      QuicktourPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
      })], QuicktourPageRoutingModule);
      /***/
    },

    /***/
    "vqB2":
    /*!***********************************************!*\
      !*** ./src/app/quicktour/quicktour.module.ts ***!
      \***********************************************/

    /*! exports provided: QuicktourPageModule */

    /***/
    function vqB2(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "QuicktourPageModule", function () {
        return QuicktourPageModule;
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


      var _quicktour_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./quicktour-routing.module */
      "lKOA");
      /* harmony import */


      var _quicktour_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./quicktour.page */
      "SZB/");

      var QuicktourPageModule = /*#__PURE__*/_createClass(function QuicktourPageModule() {
        _classCallCheck(this, QuicktourPageModule);
      });

      QuicktourPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _quicktour_routing_module__WEBPACK_IMPORTED_MODULE_5__["QuicktourPageRoutingModule"]],
        declarations: [_quicktour_page__WEBPACK_IMPORTED_MODULE_6__["QuicktourPage"]]
      })], QuicktourPageModule);
      /***/
    }
  }]);
})();
//# sourceMappingURL=quicktour-quicktour-module-es5.js.map