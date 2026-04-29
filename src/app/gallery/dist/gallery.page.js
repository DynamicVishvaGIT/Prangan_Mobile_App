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
exports.GalleryPage = void 0;
var core_1 = require("@angular/core");
var GalleryPage = /** @class */ (function () {
    function GalleryPage(storage, router, apiService, location) {
        this.storage = storage;
        this.router = router;
        this.apiService = apiService;
        this.location = location;
    }
    GalleryPage.prototype.ngOnInit = function () {
    };
    GalleryPage.prototype.ionViewWillEnter = function () {
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
                }
                else {
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
                    }
                    else {
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
            }
            else {
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
                    _this.albums = '';
                    _this.isAlbumPresent = false;
                });
            }
        });
    };
    GalleryPage.prototype.goBack = function () {
        this.location.back();
    };
    GalleryPage.prototype.openDetails = function (event) {
        this.router.navigate(['eventdetails', event]);
    };
    GalleryPage.prototype.openDetails2 = function (id, name) {
        this.router.navigate(['gallerytwo', id, name]);
    };
    GalleryPage.prototype.doRefresh = function (event) {
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
                }
                else {
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
                    }
                    else {
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
                event.target.complete();
            }
            else {
                _this.apiService.fetchAllAlbums().then(function (data) {
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
                    event.target.complete();
                    _this.albums = '';
                    _this.isAlbumPresent = false;
                });
            }
        });
    };
    GalleryPage = __decorate([
        core_1.Component({
            selector: 'app-gallery',
            templateUrl: './gallery.page.html',
            styleUrls: ['./gallery.page.scss']
        })
    ], GalleryPage);
    return GalleryPage;
}());
exports.GalleryPage = GalleryPage;
