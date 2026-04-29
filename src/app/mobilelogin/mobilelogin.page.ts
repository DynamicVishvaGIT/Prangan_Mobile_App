import { Router } from '@angular/router';

import { ApiService } from './../api.service';
import { Component, OnInit } from '@angular/core';
import { MenuController } from '@ionic/angular';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-mobilelogin',
  templateUrl: './mobilelogin.page.html',
  styleUrls: ['./mobilelogin.page.scss'],
})
export class MobileloginPage implements OnInit {
  loginForm: FormGroup;

  constructor(
    public menuCtrl: MenuController,
    public apiService: ApiService,
    public router: Router

  ) {
   
  }

  ngOnInit() {
    this.loginForm=new FormGroup({
      userMobile:new FormControl('',[Validators.required,Validators.maxLength(10),Validators.minLength(10),Validators.pattern(/^[0-9]{10}$/)]),
    });
    this.menuCtrl.enable(false, 'main-content-1');
    this.menuCtrl.enable(false, 'main-content-2');

  }
  get userMobile(){
    return this.loginForm.get('userMobile');
  }
  // onSubmit(body){
  //   this.apiService.login({'Username':body['userMobile']}).subscribe((res:any)=>{
  //     console.log('data',res);
  //     // if(res.status===200){
  //     if(res=='otp send to your register number'){
  //       this.router.navigate(['otp',body['userMobile']]);
  //     }
  //   },(err)=>{
  //     if (err.status === 403){
  //       this.apiService.presentToast('Invalid Mobile Number',2000);
  //     }
  //     console.log('err',err);
  //   });
  // }
  onSubmit(body){
    //console.log(body);
    this.apiService.login({'Username':body['userMobile']}).then(data=>{
      console.log('data',data);
      if(data.status===200){
        this.router.navigate(['otp',body['userMobile']]);
      }
    }).catch(err=>{
      if (err.status === 403){
        this.apiService.presentToast('Invalid Mobile Number',2000);
      }
      console.log('err',err);
    });
  }
  ionViewWillEnter(){
    this.menuCtrl.enable(false, 'main-content-1');
    this.menuCtrl.enable(false, 'main-content-2');
  }
  // ionViewDidLeave(){
  //   this.menuCtrl.enable(true);
  // }
}
