import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'login',
    loadChildren: () => import('./login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'quicktour',
    loadChildren: () => import('./quicktour/quicktour.module').then( m => m.QuicktourPageModule)
  },
  {
    path: 'centre',
    loadChildren: () => import('./centre/centre.module').then( m => m.CentrePageModule)
  },
  {
    path: 'feestructure',
    loadChildren: () => import('./feestructure/feestructure.module').then( m => m.FeestructurePageModule)
  },
  {
    path: 'paymenthistory',
    loadChildren: () => import('./paymenthistory/paymenthistory.module').then( m => m.PaymenthistoryPageModule)
  },
  {
    path: 'courses',
    loadChildren: () => import('./courses/courses.module').then( m => m.CoursesPageModule)
  },
  {
    path: 'events',
    loadChildren: () => import('./events/events.module').then( m => m.EventsPageModule)
  },
  {
    path: 'aboutus',
    loadChildren: () => import('./aboutus/aboutus.module').then( m => m.AboutusPageModule)
  },
  {
    path: 'eventdetails/:event',
    loadChildren: () => import('./eventdetails/eventdetails.module').then( m => m.EventdetailsPageModule)
  },
  {
    path: 'gallery',
    loadChildren: () => import('./gallery/gallery.module').then( m => m.GalleryPageModule)
  },
  {
    path: 'addinquiry',
    loadChildren: () => import('./addinquiry/addinquiry.module').then( m => m.AddinquiryPageModule)
  },
  {
    path: 'addadmission',
    loadChildren: () => import('./addadmission/addadmission.module').then( m => m.AddadmissionPageModule)
  },
  {
    path: 'otp/:mobNo',
    loadChildren: () => import('./otp/otp.module').then( m => m.OtpPageModule)
  },
  {
    path: 'mobilelogin',
    loadChildren: () => import('./mobilelogin/mobilelogin.module').then( m => m.MobileloginPageModule)
  },
  {
    path: 'profile',
    loadChildren: () => import('./profile/profile.module').then( m => m.ProfilePageModule)
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
    loadChildren: () => import('./childotherinfo/childotherinfo.module').then( m => m.ChildotherinfoPageModule)
  },
  {
    path: 'childprofile',
    loadChildren: () => import('./childprofile/childprofile.module').then( m => m.ChildprofilePageModule)
  },
  {
    path: 'childotherinfotwo',
    loadChildren: () => import('./childotherinfotwo/childotherinfotwo.module').then( m => m.ChildotherinfotwoPageModule)
  },
  {
    path: 'parentsinfo',
    loadChildren: () => import('./parentsinfo/parentsinfo.module').then( m => m.ParentsinfoPageModule)
  },
  {
    path: 'feestructuretwo/:branch_id/:pdf/:branch_name',
    loadChildren: () => import('./feestructuretwo/feestructuretwo.module').then( m => m.FeestructuretwoPageModule)
  },
  {
    path: 'gallerytwo/:id/:name',
    loadChildren: () => import('./gallerytwo/gallerytwo.module').then( m => m.GallerytwoPageModule)
  },
  {
    path: 'switchprofile',
    loadChildren: () => import('./switchprofile/switchprofile.module').then( m => m.SwitchprofilePageModule)
  },
  {
    path: 'siblingsform',
    loadChildren: () => import('./siblingsform/siblingsform.module').then( m => m.SiblingsformPageModule)
  },
  {
    path: 'imageform',
    loadChildren: () => import('./imageform/imageform.module').then( m => m.ImageformPageModule)
  },
  {
    path: 'preschoolform',
    loadChildren: () => import('./preschoolform/preschoolform.module').then( m => m.PreschoolformPageModule)
  },
  {
    path: 'preschoolotherform',
    loadChildren: () => import('./preschoolotherform/preschoolotherform.module').then( m => m.PreschoolotherformPageModule)
  },
  {
    path: 'notifications',
    loadChildren: () => import('./notifications/notifications.module').then( m => m.NotificationsPageModule)
  },
  {
    path: 'editprofile',
    loadChildren: () => import('./editprofile/editprofile.module').then( m => m.EditprofilePageModule)
  },
  {
    path: 'medicines',
    loadChildren: () => import('./medicines/medicines.module').then( m => m.MedicinesPageModule)
  },
  {
    path: 'schedule',
    loadChildren: () => import('./schedule/schedule.module').then( m => m.SchedulePageModule)
  },
  {
    path: 'rules',
    loadChildren: () => import('./rules/rules.module').then( m => m.RulesPageModule)
  },
  {
    path: 'notice',
    loadChildren: () => import('./notice/notice.module').then( m => m.NoticePageModule)
  },
  {
    path: 'services',
    loadChildren: () => import('./services/services.module').then( m => m.ServicesPageModule)
  },
  {
    path: 'offers',
    loadChildren: () => import('./offers/offers.module').then( m => m.OffersPageModule)
  },
  {
    path: 'otheractivities',
    loadChildren: () => import('./otheractivities/otheractivities.module').then( m => m.OtheractivitiesPageModule)
  },
  {
    path: 'yearlyevents',
    loadChildren: () => import('./yearlyevents/yearlyevents.module').then( m => m.YearlyeventsPageModule)
  },
  {
    path: 'addillness',
    loadChildren: () => import('./addillness/addillness.module').then( m => m.AddillnessPageModule)
  },
  {
    path: 'addmedicine/:illnessId',
    loadChildren: () => import('./addmedicine/addmedicine.module').then( m => m.AddmedicinePageModule)
  },
  {
    path: 'admissionform',
    loadChildren: () => import('./admissionform/admissionform.module').then( m => m.AdmissionformPageModule)
  },
  {
    path: 'editillness',
    loadChildren: () => import('./editillness/editillness.module').then( m => m.EditillnessPageModule)
  },
  {
    path: 'editmedicine',
    loadChildren: () => import('./editmedicine/editmedicine.module').then( m => m.EditmedicinePageModule)
  },
 
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
