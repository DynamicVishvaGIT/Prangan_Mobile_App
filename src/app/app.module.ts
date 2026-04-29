import { EditprofilePageModule } from './editprofile/editprofile.module';
import { NgModule } from '@angular/core';
import { BrowserModule, } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';
import { IonicModule, IonicRouteStrategy, iosTransitionAnimation, Platform } from '@ionic/angular';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
//import { NgOtpInputModule } from  'ng-otp-input';
import { IonicStorageModule } from '@ionic/storage';
import { HTTP } from '@ionic-native/http/ngx';
import { File } from '@ionic-native/file/ngx';
import { FileTransfer} from '@ionic-native/file-transfer/ngx';
import { Camera } from '@ionic-native/camera/ngx';
import { HttpClientModule,HttpBackend, HttpXhrBackend } from '@angular/common/http';
import { NativeHttpModule, NativeHttpBackend, NativeHttpFallback } from 'ionic-native-http-connection-backend';
import { FCM } from 'cordova-plugin-fcm-with-dependecy-updated/ionic/ngx';
import { AppMinimize } from '@ionic-native/app-minimize/ngx';
import { SuperTabsModule } from '@ionic-super-tabs/angular';
import { PhotoViewer } from '@ionic-native/photo-viewer/ngx';
import { AndroidPermissions } from '@ionic-native/android-permissions/ngx';
import { IonBottomSheetModule } from 'ion-bottom-sheet';
import { Chooser } from '@awesome-cordova-plugins/chooser/ngx';
import { SmsRetriever } from '@ionic-native/sms-retriever/ngx';
@NgModule({
  declarations: [AppComponent],
  entryComponents: [],
  imports: [BrowserModule, IonicModule.forRoot({
    navAnimation:iosTransitionAnimation
  }), AppRoutingModule,
  IonicStorageModule.forRoot(),
  HttpClientModule,
  NativeHttpModule,
  SuperTabsModule.forRoot(),
  EditprofilePageModule,
  IonBottomSheetModule,
],
  providers: [
    SmsRetriever,
    SplashScreen,
    StatusBar,
    HTTP,
    File,
    FileTransfer,
    Camera,
    FCM,
    AppMinimize,
    PhotoViewer,
    AndroidPermissions,
    Chooser,
    {provide: HttpBackend, useClass: NativeHttpFallback, deps: [Platform, NativeHttpBackend, HttpXhrBackend]},
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy }],
  bootstrap: [AppComponent],
})
export class AppModule {}
