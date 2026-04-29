"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.AppRoutingModule = void 0;
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
var routes = [
    {
        path: 'home',
        loadChildren: function () { return Promise.resolve().then(function () { return require('./home/home.module'); }).then(function (m) { return m.HomePageModule; }); }
    },
    {
        path: '',
        redirectTo: 'home',
        pathMatch: 'full'
    },
    {
        path: 'login',
        loadChildren: function () { return Promise.resolve().then(function () { return require('./login/login.module'); }).then(function (m) { return m.LoginPageModule; }); }
    },
    {
        path: 'quicktour',
        loadChildren: function () { return Promise.resolve().then(function () { return require('./quicktour/quicktour.module'); }).then(function (m) { return m.QuicktourPageModule; }); }
    },
    {
        path: 'centre',
        loadChildren: function () { return Promise.resolve().then(function () { return require('./centre/centre.module'); }).then(function (m) { return m.CentrePageModule; }); }
    },
    {
        path: 'feestructure',
        loadChildren: function () { return Promise.resolve().then(function () { return require('./feestructure/feestructure.module'); }).then(function (m) { return m.FeestructurePageModule; }); }
    },
    {
        path: 'paymenthistory',
        loadChildren: function () { return Promise.resolve().then(function () { return require('./paymenthistory/paymenthistory.module'); }).then(function (m) { return m.PaymenthistoryPageModule; }); }
    },
    {
        path: 'courses',
        loadChildren: function () { return Promise.resolve().then(function () { return require('./courses/courses.module'); }).then(function (m) { return m.CoursesPageModule; }); }
    },
    {
        path: 'events',
        loadChildren: function () { return Promise.resolve().then(function () { return require('./events/events.module'); }).then(function (m) { return m.EventsPageModule; }); }
    },
    {
        path: 'aboutus',
        loadChildren: function () { return Promise.resolve().then(function () { return require('./aboutus/aboutus.module'); }).then(function (m) { return m.AboutusPageModule; }); }
    },
    {
        path: 'eventdetails/:event',
        loadChildren: function () { return Promise.resolve().then(function () { return require('./eventdetails/eventdetails.module'); }).then(function (m) { return m.EventdetailsPageModule; }); }
    },
    {
        path: 'gallery',
        loadChildren: function () { return Promise.resolve().then(function () { return require('./gallery/gallery.module'); }).then(function (m) { return m.GalleryPageModule; }); }
    },
    {
        path: 'addinquiry',
        loadChildren: function () { return Promise.resolve().then(function () { return require('./addinquiry/addinquiry.module'); }).then(function (m) { return m.AddinquiryPageModule; }); }
    },
    {
        path: 'addadmission',
        loadChildren: function () { return Promise.resolve().then(function () { return require('./addadmission/addadmission.module'); }).then(function (m) { return m.AddadmissionPageModule; }); }
    },
    {
        path: 'otp/:mobNo',
        loadChildren: function () { return Promise.resolve().then(function () { return require('./otp/otp.module'); }).then(function (m) { return m.OtpPageModule; }); }
    },
    {
        path: 'mobilelogin',
        loadChildren: function () { return Promise.resolve().then(function () { return require('./mobilelogin/mobilelogin.module'); }).then(function (m) { return m.MobileloginPageModule; }); }
    },
    {
        path: 'profile',
        loadChildren: function () { return Promise.resolve().then(function () { return require('./profile/profile.module'); }).then(function (m) { return m.ProfilePageModule; }); }
    },
    // {
    //   path: 'homework',
    //   loadChildren: () => import('./homework/homework.module').then( m => m.HomeworkPageModule)
    // },
    // {
    //   path: 'homeworkdetails',
    //   loadChildren: () => import('./homeworkdetails/homeworkdetails.module').then( m => m.HomeworkdetailsPageModule)
    // },
    {
        path: 'childotherinfo',
        loadChildren: function () { return Promise.resolve().then(function () { return require('./childotherinfo/childotherinfo.module'); }).then(function (m) { return m.ChildotherinfoPageModule; }); }
    },
    {
        path: 'childprofile',
        loadChildren: function () { return Promise.resolve().then(function () { return require('./childprofile/childprofile.module'); }).then(function (m) { return m.ChildprofilePageModule; }); }
    },
    {
        path: 'childotherinfotwo',
        loadChildren: function () { return Promise.resolve().then(function () { return require('./childotherinfotwo/childotherinfotwo.module'); }).then(function (m) { return m.ChildotherinfotwoPageModule; }); }
    },
    {
        path: 'parentsinfo',
        loadChildren: function () { return Promise.resolve().then(function () { return require('./parentsinfo/parentsinfo.module'); }).then(function (m) { return m.ParentsinfoPageModule; }); }
    },
    {
        path: 'feestructuretwo/:branch_id/:pdf/:branch_name',
        loadChildren: function () { return Promise.resolve().then(function () { return require('./feestructuretwo/feestructuretwo.module'); }).then(function (m) { return m.FeestructuretwoPageModule; }); }
    },
    {
        path: 'gallerytwo/:id/:name',
        loadChildren: function () { return Promise.resolve().then(function () { return require('./gallerytwo/gallerytwo.module'); }).then(function (m) { return m.GallerytwoPageModule; }); }
    },
    {
        path: 'switchprofile',
        loadChildren: function () { return Promise.resolve().then(function () { return require('./switchprofile/switchprofile.module'); }).then(function (m) { return m.SwitchprofilePageModule; }); }
    },
    {
        path: 'siblingsform',
        loadChildren: function () { return Promise.resolve().then(function () { return require('./siblingsform/siblingsform.module'); }).then(function (m) { return m.SiblingsformPageModule; }); }
    },
    {
        path: 'imageform',
        loadChildren: function () { return Promise.resolve().then(function () { return require('./imageform/imageform.module'); }).then(function (m) { return m.ImageformPageModule; }); }
    },
    {
        path: 'preschoolform',
        loadChildren: function () { return Promise.resolve().then(function () { return require('./preschoolform/preschoolform.module'); }).then(function (m) { return m.PreschoolformPageModule; }); }
    },
    {
        path: 'preschoolotherform',
        loadChildren: function () { return Promise.resolve().then(function () { return require('./preschoolotherform/preschoolotherform.module'); }).then(function (m) { return m.PreschoolotherformPageModule; }); }
    },
    {
        path: 'notifications',
        loadChildren: function () { return Promise.resolve().then(function () { return require('./notifications/notifications.module'); }).then(function (m) { return m.NotificationsPageModule; }); }
    },
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        core_1.NgModule({
            imports: [
                router_1.RouterModule.forRoot(routes, { preloadingStrategy: router_1.PreloadAllModules })
            ],
            exports: [router_1.RouterModule]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());
exports.AppRoutingModule = AppRoutingModule;
