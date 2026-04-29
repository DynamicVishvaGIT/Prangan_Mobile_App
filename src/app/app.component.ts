import { QuicktourPage } from './quicktour/quicktour.page';
import { ApiService } from './api.service';
import { Router } from '@angular/router';
import { Component, OnInit, QueryList, ViewChild, ViewChildren } from '@angular/core';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { Platform, MenuController, AlertController, IonRouterOutlet, ActionSheetController } from '@ionic/angular';
import { Storage } from '@ionic/storage';
//import { FCM } from 'cordova-plugin-fcm-with-dependecy-updated/ionic/ngx';
import { AppMinimize } from '@ionic-native/app-minimize/ngx';
import { Location } from '@angular/common';
import { HomePage } from './home/home.page';
import { NotificationsPage } from './notifications/notifications.page';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent implements OnInit{
  type: any;
  @ViewChildren(IonRouterOutlet) routerOutlets: QueryList < IonRouterOutlet > ;
  isActive=false;
  public isNestedSideMenu: boolean = false;
  public appPages = [
    {
      title: 'Enquiry Form',
      url: '/addinquiry',
      icon: 'assets/drawer_icons/01_Inquiry_form.png',
      open:false
    },
    {
      title: 'Admission Form',
      icon: 'assets/drawer_icons/02_Admission_form.png',
      url: '/admissionform',
    },
    {
      title: 'Switch Profile',
      url: '/switchprofile',
      icon: 'assets/drawer_icons/03_About_us.png',
      open:false

    },
    {
      title: 'About Us',
      url: '/aboutus',
      icon: 'assets/drawer_icons/03_About_us.png',
      open:false

    },
    {
      title: 'Gallery',
      url: '/gallery',
      icon: 'assets/drawer_icons/04_Gallery.png',
      open:false

    },
    {
      title: 'Fee Payment',
      url: '/feestructure',
      icon: 'assets/drawer_icons/05_Fee_structure.png',
      open:false

    },
    {
      title: 'Payment History',
      url: '/paymenthistory',
      icon: 'assets/drawer_icons/06_Pyment_history.png'
    },
    // {
    //   title: 'Courses',
    //   url: '/courses',
    //   icon: 'assets/drawer_icons/07_Courses.png',
    //   open:false

    // },
    {
      title: 'Notifications',
      url: '/notifications',
      icon: 'assets/drawer_icons/notifications.png',
      open:false

    },
    // {
    //   title: 'Notice',
    //   url: '/notice',
    //   icon: 'assets/drawer_icons/notice.png',
    //   open:false
    // },
    // {
    //   title: 'Other Activities',
    //   url: '/otheractivities',
    //   icon: 'assets/drawer_icons/service.png',
    //   open:false
    // },
    // {
    //   title: 'Services',
    //   url: '/services',
    //   icon: 'assets/drawer_icons/service.png',
    //   open:false
    // },
    {
      title: 'Medicines',
      url: '/medicines',
      icon: 'assets/drawer_icons/medicine.png',
      open:false
    },
    {
      title: 'Offers',
      url: '/offers',
      icon: 'assets/drawer_icons/offer.png',
      open:false
    },
    {
      title: 'Rules & Regulations',
      url: '/rules',
      icon: 'assets/drawer_icons/rules.png',
      open:false
    },
    {
      title: 'Schedule',
      url: '/schedule',
      icon: 'assets/drawer_icons/schedule.png',
      open:false
    },
    // {
    //   title: 'Yearly Events',
    //   url: '/yearlyevents',
    //   icon: 'assets/drawer_icons/yearly_events.png',
    //   open:false
    // },
  ];
  profile: any;
  userType: any;
  notification: boolean=false;
  body: any;
  title: any;
  no: any;
  constructor(
    public router: Router,
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar,
    public storage: Storage,
    public apiService: ApiService,
    public menu: MenuController,
    //private fcm:FCM,
    public alertController: AlertController,
    private appMinimize: AppMinimize,
    public location:Location,
    public actionSheetCtrl:ActionSheetController
  ) {
    this.initializeApp();
    this.backButtonEvent();
  }
  ngOnInit() {
    console.log('hi')
      
  this.storage.get('userType').then(data=>{
    console.log('userType',data)
    this.userType=data
  })
  this.apiService.userData.subscribe(
    data => {
      console.log('userData',data.data);
      this.profile = JSON.parse(data.data)
      
  });
  this.apiService.userTypeData.subscribe(
    data => {
      console.log('1');
      if(data){
        console.log('2');

        console.log('userTypeData',data);
        this.userType=data;
      }
      else{
      console.log('3');

       
      }
     
  });
  }
  initializeApp() {

    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.statusBar.backgroundColorByHexString('fdd653');
      this.splashScreen.hide();
      this.checkLoginStatus()

      console.log(this.checkLoginStatus() != undefined)
      if(this.checkLoginStatus() == undefined){
        console.log("no one is logged in")
      }else{
        // this.fcm.getInitialPushPayload().then(data=>{
        //   console.log('initial',data)
        //   if(data){
        //     if(data.wasTapped){
        //       this.notification=true;
        //       this.body=data.body
        //       this.title=data.title
        //     }
        //   }
        // })
  
  
        // setTimeout(() => {
  
        //   this.fcm.onNotification().subscribe(data => {
        //     console.log(data)
        //     if (data.wasTapped) {
        //       console.log('Received in background',data);
        //       this.router.navigate([NotificationsPage])
        //     } else {
        //       console.log('Received in foreground');
        //       this.router.navigate([QuicktourPage])
        //       this.presentAlert(data.body,data.title)
        //     }
        //   });
    
        // }, 100);
  
        // this.fcm.createNotificationChannel({
        //   id: "channel_id_2",
        //   name: "channel_id_2",
        //   importance: "high",
        //  })
      }
    });
  }
  goToEnquiryForm(){
    this.router.navigate(['addinquiry']);
  }
  goToAdmissionForm(){
    // this.router.navigate(['admissionform']);
    this.presentActionSheet()
  }
  goToAboutUs(){
    this.router.navigate(['aboutus']);
  }
  goToGallery(){
    this.router.navigate(['gallery']);
  }
  goToFeeStructure(){
    this.router.navigate(['feestructure']);
  }

  goToPaymentHistory(){
    this.router.navigate(['paymenthistory']);
  }
  goToCourses(){
    this.router.navigate(['courses']);
  }

  goToSwitchProfile(){
    this.router.navigate(['switchprofile']);

  }
  logout(){
    this.storage.remove('active')
    this.storage.remove('type')
    this.storage.remove('cocoon_data')
    this.storage.remove('user')
    this.storage.remove('userType')
    this.storage.clear()
    this.menu.close()
    this.router.navigate(['home'])
    this.initializeApp()
  }
  ionViewDidEnter(){
    this.storage.get('type').then(data=>{
      console.log('2',data);
      this.type=data;
    });
    this.storage.get('userType').then(data=>{
      console.log('userType',data)
      this.userType=data
    })
   
  }
  checkLoginStatus(){
    this.storage.get('user').then((userData) => {
      if (userData){
        if(this.notification){
          this.router.navigate(['notifications'])

        }
        else{
        var user=JSON.parse(userData)
        this.storage.get('userType').then(userType=>{
        this.apiService.userDetails(user.id,userType).then(data=>{
         var userDetails=JSON.parse(data.data) 
         if(userDetails.status=='Active' && userDetails.Approve_status=='Active'){
            this.router.navigate(['quicktour'])
            this.storage.set('active',true)
            this.isActive=true;
         }
         else if (userDetails.status=='Active'){
          // if(userType=='Daycare'){
          //   this.storage.set('active',false)
          //   this.isActive=false;
          //   this.router.navigate(['addadmission'])
          // }
          // else{
          //   this.isActive=false;
          //   this.storage.set('active',false)
          //   this.router.navigate(['preschoolform'])
          // }
          this.router.navigate(['switchprofile'])

         }else{
          this.router.navigate(['home'])
         }
        })
   
        })
        this.profile = JSON.parse(userData)
      }
      }
      else{
        this.router.navigate(['home'])
      }
    })
  }
  toggleSideMenu(){
    this.isNestedSideMenu=!this.isNestedSideMenu
  }
  async presentAlert(body,title) {
    const alert = await this.alertController.create({
      header: title,
      message: body,
      mode:'ios',
      backdropDismiss:false,
      buttons:[{
        text: 'OK',
        handler: () => {
          this.router.navigate(['quicktour'])
          
        }
      }],
    });
    
    await alert.present();
  }
  backButtonEvent() {
    this.platform.backButton.subscribeWithPriority(10, () => {
      this.routerOutlets.forEach(async(outlet: IonRouterOutlet) => {
        if (this.router.url === '/quicktour'||this.router.url =='/home') {
          this.appMinimize.minimize();

        } else  {
          if(this.router.url === '/addadmission'||this.router.url =='/admissionform'||this.router.url =='/preschoolform'||this.router.url =='/preschoolotherform'||this.router.url =='/childotherinfotwo'){
            if(this.isActive){
            await this.location.back()

            }
            else{
              // this.apiService.presentToast('Please wait for your registration approval',3000)
              await this.location.back()
            }
          }
          else{
            await this.location.back()

          }

        }
         
      });
    });
  }

  async presentActionSheet() {
    const actionSheet = await this.actionSheetCtrl.create({
      header: 'Select Admission Type',
      cssClass: 'my-custom-class',
      mode:"ios",
      buttons: [
        {
          text: 'Daycare Form',
          role: 'destructive',
          handler: ()=> {
            this.router.navigate(['addadmission']);
          },

        },
        {
          text: 'Preschool Form',
          role: 'destructive',
          handler:()=> {
            this.router.navigate(['preschoolform']);
          },
        },
        {
          text: 'Cancel',
          role: 'cancel',

        },
      ],
    });

    actionSheet.present();
  }
}
