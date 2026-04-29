"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.AppModule = void 0;
var editprofile_module_1 = require("./editprofile/editprofile.module");
var core_1 = require("@angular/core");
var platform_browser_1 = require("@angular/platform-browser");
var router_1 = require("@angular/router");
var angular_1 = require("@ionic/angular");
var app_component_1 = require("./app.component");
var app_routing_module_1 = require("./app-routing.module");
var ngx_1 = require("@ionic-native/splash-screen/ngx");
var ngx_2 = require("@ionic-native/status-bar/ngx");
var ng_otp_input_1 = require("ng-otp-input");
var storage_1 = require("@ionic/storage");
var ngx_3 = require("@ionic-native/http/ngx");
var ngx_4 = require("@ionic-native/file/ngx");
var ngx_5 = require("@ionic-native/file-transfer/ngx");
var ngx_6 = require("@ionic-native/camera/ngx");
var http_1 = require("@angular/common/http");
var ionic_native_http_connection_backend_1 = require("ionic-native-http-connection-backend");
var ngx_7 = require("cordova-plugin-fcm-with-dependecy-updated/ionic/ngx");
var ngx_8 = require("@ionic-native/app-minimize/ngx");
var angular_2 = require("@ionic-super-tabs/angular");
var ngx_9 = require("@ionic-native/photo-viewer/ngx");
var ngx_10 = require("@ionic-native/android-permissions/ngx");
var ion_bottom_sheet_1 = require("ion-bottom-sheet");
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        core_1.NgModule({
            declarations: [app_component_1.AppComponent],
            entryComponents: [],
            imports: [platform_browser_1.BrowserModule, angular_1.IonicModule.forRoot({
                    navAnimation: angular_1.iosTransitionAnimation
                }), app_routing_module_1.AppRoutingModule, ng_otp_input_1.NgOtpInputModule,
                storage_1.IonicStorageModule.forRoot(),
                http_1.HttpClientModule,
                ionic_native_http_connection_backend_1.NativeHttpModule,
                angular_2.SuperTabsModule.forRoot(),
                editprofile_module_1.EditprofilePageModule,
                ion_bottom_sheet_1.IonBottomSheetModule,
            ],
            providers: [
                ngx_1.SplashScreen,
                ngx_2.StatusBar,
                ngx_3.HTTP,
                ngx_4.File,
                ngx_5.FileTransfer,
                ngx_6.Camera,
                ngx_7.FCM,
                ngx_8.AppMinimize,
                ngx_9.PhotoViewer,
                ngx_10.AndroidPermissions,
                { provide: http_1.HttpBackend, useClass: ionic_native_http_connection_backend_1.NativeHttpFallback, deps: [angular_1.Platform, ionic_native_http_connection_backend_1.NativeHttpBackend, http_1.HttpXhrBackend] },
                { provide: router_1.RouteReuseStrategy, useClass: angular_1.IonicRouteStrategy }
            ],
            bootstrap: [app_component_1.AppComponent]
        })
    ], AppModule);
    return AppModule;
}());
exports.AppModule = AppModule;
