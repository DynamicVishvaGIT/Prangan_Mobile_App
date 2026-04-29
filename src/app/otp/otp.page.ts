
import { Storage } from '@ionic/storage';
import { ActivatedRoute, Router } from '@angular/router';
import { ApiService } from './../api.service';
import { Component, OnInit } from '@angular/core';
import { MenuController } from '@ionic/angular';
//import {FCM} from 'cordova-plugin-fcm-with-dependecy-updated/ionic';
//import { SmsRetriever } from '@ionic-native/sms-retriever/ngx';
@Component({
  selector: 'app-otp',
  templateUrl: './otp.page.html',
  styleUrls: ['./otp.page.scss'],
})
export class OtpPage implements OnInit {
  otp: any;
  mobNo;
  // token: string;
  constructor(
    public menuCtrl: MenuController,
    public apiService: ApiService,
    public route: ActivatedRoute,
    public router: Router,
    public storage: Storage,
    //private fcm: FCM,
    //private smsRetriever: SmsRetriever

  ) {
    // this.smsRetriever.getAppHash()
    // .then((res: any) => console.log(res))
    // .catch((error: any) => console.error(error));
  }

  ionViewDidEnter(){
    this.mobNo=this.route.snapshot.paramMap.get('mobNo');
    // this.fcm.getToken().then(token => {
    //   this.token=token;
    // });
  
  }
  ngOnInit() {
    this.menuCtrl.enable(false, 'main-content-1');
    this.menuCtrl.enable(false, 'main-content-2');

    // this.smsRetriever.startWatching()
    // .then((res: any) => {
    //   console.log('start Watching',res);
    //   this.processSMS(res);
    // })
    // .catch((error: any) => console.error(error));
  }

  onOtpChange(otp) {
    this.otp = otp;
  }


  processSMS(data) {
    // Design your SMS with App hash so the retriever API can read the SMS without READ_SMS permission
    // Attach the App hash to SMS from your server, Last 11 characters should be the App Hash
    // After that, format the SMS so you can recognize the OTP correctly
    // Here I put the first 6 character as OTP
    const message = data.Message;
    console.log(message)
    
  }

  onSubmit(){
    console.log(this.otp);
    if(!this.otp){
      this.apiService.presentToast('Please enter OTP', 2000);
    }
    else {
      if (this.otp.length !== 6 ) {
         this.apiService.presentToast('Please enter valid OTP', 2000);
      }
      else{
        this.apiService.verify_otp(this.mobNo,this.otp).then((data:any)=>{
          console.log('data',data);
          var daycare=JSON.parse(data.data)['daycare'];
          var preschool=JSON.parse(data.data)['preschool'];
          this.storage.set('cocoon_data',data.data);
          if (daycare.length == 0 && preschool.length == 0) {
            this.apiService.presentToast('Please wait for your registration approval ',2000)
        }
          if(daycare.length >0 && preschool.length>0){
            this.router.navigate(['switchprofile']);
          }
      
          else if(daycare.length===1 && preschool.length===0){
            
            this.apiService.userDetails(daycare[0].id,'Daycare').then(data=>{
              var user=JSON.parse(data.data)
              this.storage.set('user',data.data)
              if(user.status=='Active' && user.Approve_status=='Active'){
                this.router.navigate(['quicktour'])
                this.storage.set('active',true)
               
              }
              else{
                this.storage.set('active',false).then(_=>{
                  this.router.navigate(['addadmission'])
                })
              }
              this.storage.set('userType','Daycare')
              this.apiService.setUserData(data.data,'Daycare')
             
              // this.apiService.userFMS({'userid':user.id,'type':'Daycare','fmskey':this.token}).catch(err=>{
              //   console.log(err)
              // })
            })
          }
          else if(preschool.length===1 && daycare.length===0){
            
            this.apiService.userDetails(preschool[0].id,'Preschool').then(data=>{
              var user=JSON.parse(data.data)
              this.storage.set('user',data.data)
              if(user.status=='Active' && user.Approve_status=='Active'){
                this.router.navigate(['quicktour'])
                this.storage.set('active',true)
             
              }
              else{
                this.storage.set('active',false).then(_=>{
                  this.router.navigate(['preschoolform'])
                })
              }
              // this.apiService.userFMS({'userid':user.id,'type':'Preschool','fmskey':this.token}).then(data=>{
              //   console.log(data);
              // }).catch(err=>{
              //   console.log(err)
              // })
              this.storage.set('userType','Preschool')
              this.apiService.setUserData(data.data,'Preschool')
             
            })
          }
          else if (preschool.length > 1 || daycare.length > 1) {
            console.log('err3', );
             this.router.navigate(['switchprofile']);
          }
        }
        ,(err)=>{
          if (err.status === 403){
            this.apiService.presentToast('OTP is invalid',2000);
          }
          console.log('err',err);
        });
      }
    }
    // this.router.navigate(['quicktour'])
  }
  ionViewWillEnter(){
    this.menuCtrl.enable(false)
  }
  // ionViewDidLeave(){
  //   this.menuCtrl.enable(true);
  // 
  resendOTP(){
    this.apiService.login({'Username':this.mobNo}).then((data:any)=>{
      if(data.status===200){
        this.apiService.presentToast('OTP is sent',2000)
      }
      })
    
  }
}
