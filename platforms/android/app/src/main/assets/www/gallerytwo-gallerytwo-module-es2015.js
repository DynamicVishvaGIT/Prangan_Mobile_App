(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["gallerytwo-gallerytwo-module"],{

/***/ "4cPm":
/*!*************************************************!*\
  !*** ./src/app/gallerytwo/gallerytwo.module.ts ***!
  \*************************************************/
/*! exports provided: GallerytwoPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GallerytwoPageModule", function() { return GallerytwoPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _gallerytwo_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./gallerytwo-routing.module */ "xiGB");
/* harmony import */ var _gallerytwo_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./gallerytwo.page */ "KA1o");







let GallerytwoPageModule = class GallerytwoPageModule {
};
GallerytwoPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _gallerytwo_routing_module__WEBPACK_IMPORTED_MODULE_5__["GallerytwoPageRoutingModule"]
        ],
        declarations: [_gallerytwo_page__WEBPACK_IMPORTED_MODULE_6__["GallerytwoPage"]]
    })
], GallerytwoPageModule);



/***/ }),

/***/ "DcER":
/*!*************************************************!*\
  !*** ./src/app/gallerytwo/gallerytwo.page.scss ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("ion-content {\n  --background:#f3fbfe;\n}\n\n.frame-div {\n  position: relative;\n  overflow: hidden;\n  width: 100%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL2dhbGxlcnl0d28ucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksb0JBQUE7QUFDSjs7QUFDQTtFQUNJLGtCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxXQUFBO0FBRUoiLCJmaWxlIjoiZ2FsbGVyeXR3by5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJpb24tY29udGVudCB7XHJcbiAgICAtLWJhY2tncm91bmQ6I2YzZmJmZTtcclxufVxyXG4uZnJhbWUtZGl2IHtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICB9Il19 */");

/***/ }),

/***/ "H41p":
/*!***************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/gallerytwo/gallerytwo.page.html ***!
  \***************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n  <ion-toolbar>\n    <ion-title *ngIf=\"name\">{{name|titlecase}}</ion-title>\n    <ion-buttons slot=\"start\">\n      <ion-button  shape=\"round\"  (click)=\"goBack()\">\n        <ion-icon name=\"arrow-back-sharp\" color=\"light\"></ion-icon>\n      </ion-button>\n    </ion-buttons>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <ion-refresher slot=\"fixed\" (ionRefresh)=\"doRefresh($event)\">\n    <ion-refresher-content></ion-refresher-content>\n  </ion-refresher>\n  <div class=\"padding-ionic\" *ngIf=\"images\">\n    <ion-row >\n      <ion-col size=\"6\" *ngFor=\"let image of images\">\n        <ion-img *ngIf=\"image.image\" src=\"{{image.image}}\" (click)=\"viewImage(image.image)\"></ion-img>\n        <div class=\"frame-div\" *ngIf=\"image.video\">\n          <iframe class=\"responsive-iframe\" [src]=\"sanitizer.bypassSecurityTrustResourceUrl(image.video)\"  target=\"_parent\" allowfullscreen></iframe>\n        </div>\n        <br>\n        <ion-item (click)=\"download(image.image)\" *ngIf=\"image.image\">\n          <ion-icon name=\"download-outline\" ></ion-icon>\n          <ion-label>Download</ion-label>\n        </ion-item>\n      </ion-col>\n    </ion-row>\n  </div>\n</ion-content>\n");

/***/ }),

/***/ "KA1o":
/*!***********************************************!*\
  !*** ./src/app/gallerytwo/gallerytwo.page.ts ***!
  \***********************************************/
/*! exports provided: GallerytwoPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GallerytwoPage", function() { return GallerytwoPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_gallerytwo_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./gallerytwo.page.html */ "H41p");
/* harmony import */ var _gallerytwo_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./gallerytwo.page.scss */ "DcER");
/* harmony import */ var _ionic_native_http_ngx__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic-native/http/ngx */ "XSEc");
/* harmony import */ var _api_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./../api.service */ "yTNM");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _ionic_native_photo_viewer_ngx__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ionic-native/photo-viewer/ngx */ "U3FU");
/* harmony import */ var _ionic_native_file_ngx__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @ionic-native/file/ngx */ "FAH8");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");
/* harmony import */ var _ionic_native_android_permissions_ngx__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @ionic-native/android-permissions/ngx */ "WOgW");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @ionic/angular */ "TEn/");








// import { FileTransfer, FileTransferObject } from '@ionic-native/file-transfer/ngx';





let GallerytwoPage = class GallerytwoPage {
    // fileTransfer: FileTransferObject
    constructor(route, apiService, location, photoViewer, file, sanitizer, http, androidPermissions, alertController) {
        this.route = route;
        this.apiService = apiService;
        this.location = location;
        this.photoViewer = photoViewer;
        this.file = file;
        this.sanitizer = sanitizer;
        this.http = http;
        this.androidPermissions = androidPermissions;
        this.alertController = alertController;
    }
    ngOnInit() {
    }
    ionViewDidEnter() {
        this.route.paramMap.subscribe(params => {
            this.id = params.get('id');
            this.name = params.get('name');
            this.apiService.fetchAlbumDetails(this.id).then(data => {
                console.log('data', data);
                this.images = JSON.parse(data.data);
            });
        });
    }
    goBack() {
        this.location.back();
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
                            console.log('ok');
                        },
                    },
                ],
            });
            yield alert.present();
        });
    }
    download(url) {
        if (url) {
            this.androidPermissions.checkPermission(this.androidPermissions.PERMISSION.READ_EXTERNAL_STORAGE).then(data => {
                console.log(data);
                if (!data.hasPermission) {
                    console.log('1');
                    this.apiService.presentToast('Storage permission is not turned on', 2000);
                    this.androidPermissions.requestPermissions([this.androidPermissions.PERMISSION.READ_EXTERNAL_STORAGE]);
                }
                else {
                    console.log('2');
                    var filename = this.parseUrlFilename(url);
                    console.log('filename', filename);
                    const filePath = this.file.externalRootDirectory + '/Download/' + filename;
                    this.http.downloadFile(url, {}, {}, filePath).then(response => {
                        this.presentAlert('Image saved to Downloads folder');
                    }).catch(err => {
                        this.apiService.presentToast(err.error, 2000);
                        // prints 403
                        console.log('error block ... ', err.status);
                        // prints Permission denied
                        console.log('error block ... ', err.error);
                    });
                }
            }).catch(err => {
                this.androidPermissions.requestPermissions([this.androidPermissions.PERMISSION.READ_EXTERNAL_STORAGE]);
            });
        }
    }
    parseUrlFilename(url, defaultFilename = null) {
        let filename = new URL(url, "https://example.com").href.split("#").shift().split("?").shift().split("/").pop(); //No need to change "https://example.com"; it's only present to allow for processing relative URLs.
        if (!filename) {
            if (defaultFilename) {
                filename = defaultFilename;
                //No default filename provided; use a pseudorandom string.
            }
            else {
                filename = Math.random().toString(36).substr(2, 10);
                // filename='abc.png'
            }
        }
        return filename;
    }
    viewImage(url) {
        if (url) {
            this.photoViewer.show(url, '', { share: true });
        }
    }
    doRefresh(event) {
        this.route.paramMap.subscribe(params => {
            this.id = params.get('id');
            this.name = params.get('name');
            this.apiService.fetchAlbumDetails(this.id).then(data => {
                console.log('data', data);
                this.images = JSON.parse(data.data);
                event.target.complete();
            }).catch(err => {
                event.target.complete();
            });
        });
    }
};
GallerytwoPage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_6__["ActivatedRoute"] },
    { type: _api_service__WEBPACK_IMPORTED_MODULE_4__["ApiService"] },
    { type: _angular_common__WEBPACK_IMPORTED_MODULE_7__["Location"] },
    { type: _ionic_native_photo_viewer_ngx__WEBPACK_IMPORTED_MODULE_8__["PhotoViewer"] },
    { type: _ionic_native_file_ngx__WEBPACK_IMPORTED_MODULE_9__["File"] },
    { type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_10__["DomSanitizer"] },
    { type: _ionic_native_http_ngx__WEBPACK_IMPORTED_MODULE_3__["HTTP"] },
    { type: _ionic_native_android_permissions_ngx__WEBPACK_IMPORTED_MODULE_11__["AndroidPermissions"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_12__["AlertController"] }
];
GallerytwoPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_5__["Component"])({
        selector: 'app-gallerytwo',
        template: _raw_loader_gallerytwo_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_gallerytwo_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], GallerytwoPage);



/***/ }),

/***/ "xiGB":
/*!*********************************************************!*\
  !*** ./src/app/gallerytwo/gallerytwo-routing.module.ts ***!
  \*********************************************************/
/*! exports provided: GallerytwoPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GallerytwoPageRoutingModule", function() { return GallerytwoPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _gallerytwo_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./gallerytwo.page */ "KA1o");




const routes = [
    {
        path: '',
        component: _gallerytwo_page__WEBPACK_IMPORTED_MODULE_3__["GallerytwoPage"]
    }
];
let GallerytwoPageRoutingModule = class GallerytwoPageRoutingModule {
};
GallerytwoPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], GallerytwoPageRoutingModule);



/***/ })

}]);
//# sourceMappingURL=gallerytwo-gallerytwo-module-es2015.js.map