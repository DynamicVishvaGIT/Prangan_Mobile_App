"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.QuicktourPage = void 0;
var core_1 = require("@angular/core");
var QuicktourPage = /** @class */ (function () {
    function QuicktourPage(menuCtrl, router, storage, apiService) {
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
        };
    }
    QuicktourPage.prototype.ngOnInit = function () {
    };
    QuicktourPage.prototype.ionViewWillEnter = function () {
        var _this = this;
        if (this.menuCtrl.isEnabled) {
            console.log('hi');
            this.menuCtrl.swipeGesture(true);
        }
        this.storage.get('type').then(function (data) {
            console.log('data', data);
            _this.type = data;
            if (data === 'quicktour') {
                _this.menuCtrl.enable(true, 'main-content-2');
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
                                var event = __assign({}, events[index]['a']);
                                event['class'] = class_array.join();
                            }
                            else {
                                var event = __assign({}, events[index]['a']);
                                event['class'] = '';
                            }
                            events_array.push(event);
                        }
                        _this.events = events_array;
                        _this.isEventPresent = true;
                    }
                    else {
                        _this.isEventPresent = false;
                    }
                })["catch"](function (err) {
                    console.log('err', err);
                    _this.events = '';
                    _this.isEventPresent = false;
                });
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
                                var album = __assign({}, albums[index]['a']);
                                album['class'] = class_array.join();
                            }
                            else {
                                var album = __assign({}, albums[index]['a']);
                                album['class'] = '';
                            }
                            albums_array.push(album);
                        }
                        _this.albums = albums_array;
                        _this.isAlbumPresent = true;
                    }
                    else {
                        _this.isAlbumPresent = false;
                    }
                })["catch"](function (err) {
                    console.log('err', err);
                    _this.albums = '';
                    _this.isAlbumPresent = false;
                });
            }
            else {
                _this.menuCtrl.enable(true, 'main-content-1');
                _this.menuCtrl.enable(false, 'main-content-2');
                _this.storage.get('user').then(function (data) {
                    _this.child_name = JSON.parse(data).child_name;
                    if (JSON.parse(data)["class"]) {
                        _this.plan = 'Preschool';
                        _this.classType = JSON.parse(data)["class"];
                    }
                    else {
                        _this.plan = 'Daycare';
                        _this.classType = 'Daycare';
                    }
                    _this.branch_id = JSON.parse(data).branch_id;
                    _this.user_id = JSON.parse(data).id;
                    _this.storage.get('userType').then(function (userType) {
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
                                _this.isAlbumPresent = true;
                            })["catch"](function (err) {
                                _this.albums = '';
                                _this.isAlbumPresent = false;
                            });
                            _this.apiService.fetchUserAttendance(userType, _this.user_id).then(function (data) {
                                console.log(data);
                                var attendance = JSON.parse(data.data);
                                var today = attendance.today;
                                var yesterday = attendance.yesterday;
                                if (!today) {
                                    _this.attendance = yesterday;
                                }
                                else {
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
                                        var paid_amount = total_amount_array.reduce(function (a, b) { return a + b; }, 0);
                                        _this.pending_amount = parseFloat(total_amount) - parseFloat(paid_amount);
                                        console.log('tot', total_amount, paid_amount, _this.pending_amount);
                                    }
                                    else {
                                        _this.pending_amount = total_amount;
                                    }
                                })["catch"](function (err) {
                                    console.log(err);
                                    _this.pending_amount = total_amount;
                                });
                            });
                        }
                        else {
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
                                    }
                                    else {
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
                                var attendance = JSON.parse(data.data);
                                var today = attendance.today;
                                var yesterday = attendance.yesterday;
                                console.log('attendance', attendance);
                                if (!today) {
                                    _this.attendance = yesterday;
                                }
                                else {
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
    };
    // openDetails(event){
    //   this.router.navigate(['eventdetails',event]);
    // }
    QuicktourPage.prototype.openAlbum = function (id, name) {
        this.router.navigate(['gallerytwo', id, name]);
    };
    QuicktourPage.prototype.doRefresh = function (event) {
        var _this = this;
        this.storage.get('type').then(function (data) {
            console.log('data', data);
            _this.type = data;
            if (data === 'quicktour') {
                event.target.complete();
                _this.menuCtrl.enable(true, 'main-content-2');
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
                                var event = __assign({}, events[index]['a']);
                                event['class'] = class_array.join();
                            }
                            else {
                                var event = __assign({}, events[index]['a']);
                                event['class'] = '';
                            }
                            events_array.push(event);
                        }
                        _this.events = events_array;
                        _this.isEventPresent = true;
                    }
                    else {
                        _this.isEventPresent = false;
                    }
                })["catch"](function (err) {
                    console.log('err', err);
                    _this.events = '';
                    _this.isEventPresent = false;
                });
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
                                var album = __assign({}, albums[index]['a']);
                                album['class'] = class_array.join();
                            }
                            else {
                                var album = __assign({}, albums[index]['a']);
                                album['class'] = '';
                            }
                            albums_array.push(album);
                        }
                        _this.albums = albums_array;
                        _this.isAlbumPresent = true;
                    }
                    else {
                        _this.isAlbumPresent = false;
                    }
                })["catch"](function (err) {
                    console.log('err', err);
                    _this.albums = '';
                    _this.isAlbumPresent = false;
                });
            }
            else {
                event.target.complete();
                _this.menuCtrl.enable(true, 'main-content-1');
                _this.menuCtrl.enable(false, 'main-content-2');
                _this.storage.get('user').then(function (data) {
                    _this.child_name = JSON.parse(data).child_name;
                    if (JSON.parse(data)["class"]) {
                        _this.plan = 'Preschool';
                        _this.classType = JSON.parse(data)["class"];
                    }
                    else {
                        _this.plan = 'Daycare';
                        _this.classType = 'Daycare';
                    }
                    _this.branch_id = JSON.parse(data).branch_id;
                    _this.user_id = JSON.parse(data).id;
                    _this.storage.get('userType').then(function (userType) {
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
                                _this.isAlbumPresent = true;
                            })["catch"](function (err) {
                                _this.albums = '';
                                _this.isAlbumPresent = false;
                            });
                            _this.apiService.fetchUserAttendance(userType, _this.user_id).then(function (data) {
                                console.log(data);
                                var attendance = JSON.parse(data.data);
                                var today = attendance.today;
                                var yesterday = attendance.yesterday;
                                if (!today) {
                                    _this.attendance = yesterday;
                                }
                                else {
                                    _this.attendance = today;
                                }
                                if (_this.attendance) {
                                    _this.in_time = _this.attendance.date + ' ' + _this.attendance.in_time;
                                    _this.out_time = _this.attendance.date + ' ' + _this.attendance.out_time;
                                }
                            });
                        }
                        else {
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
                            _this.apiService.fetchBranchAlbum(_this.classType, userType, _this.branch_id).then(function (album_data) {
                                _this.albums = JSON.parse(album_data.data);
                                _this.isAlbumPresent = true;
                            })["catch"](function (err) {
                                _this.albums = '';
                                _this.isAlbumPresent = false;
                            });
                            _this.apiService.fetchUserAttendance('Preschool', _this.user_id).then(function (data) {
                                var attendance = JSON.parse(data.data);
                                var today = attendance.today;
                                var yesterday = attendance.yesterday;
                                console.log('attendance', attendance);
                                if (!today) {
                                    _this.attendance = yesterday;
                                }
                                else {
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
    };
    QuicktourPage = __decorate([
        core_1.Component({
            selector: 'app-quicktour',
            templateUrl: './quicktour.page.html',
            styleUrls: ['./quicktour.page.scss']
        })
    ], QuicktourPage);
    return QuicktourPage;
}());
exports.QuicktourPage = QuicktourPage;
