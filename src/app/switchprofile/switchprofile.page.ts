import { MenuController, Platform } from '@ionic/angular';
import { Storage } from '@ionic/storage';
import { Component, OnInit } from '@angular/core';
import { ApiService } from './../api.service';
import { Router } from '@angular/router';
//import {FCM} from 'cordova-plugin-fcm-with-dependecy-updated/ionic/ngx';

@Component({
  selector: 'app-switchprofile',
  templateUrl: './switchprofile.page.html',
  styleUrls: ['./switchprofile.page.scss'],
})
export class SwitchprofilePage implements OnInit {
  daycare_users;
  preschool_users;
  token: string;
  backButtonSubscription;
  constructor(
    public apiService: ApiService,
    public router: Router,
    public storage: Storage,
    //private fcm: FCM,
    public menuCtrl:MenuController,
    private platform:Platform

  ) { 
    
    
  }

  ngOnInit() {
  }
  ngAfterViewInit() {
    this.backButtonSubscription = this.platform.backButton.subscribe(() => {
      navigator['app'].exitApp();
    });
  }
  ionViewDidEnter(){
    if(this.menuCtrl.isEnabled){
      console.log('hi')
      this.menuCtrl.swipeGesture(false)
    }
    this.storage.get('cocoon_data').then(data=>{
      console.log('cc',data);
      this.preschool_users =JSON.parse(data)['preschool'];
      this.daycare_users = JSON.parse(data)['daycare'];
      // this.profile=JSON.parse(data)
    });
    // this.fcm.getToken().then(token => {
    //   this.token=token
    // });
  }
  selectUser(id,Class){
    this.apiService.userDetails(id,Class).then(data=>{
      var user=JSON.parse(data.data)
      this.storage.set('user',data.data)
      if(user.status=='Active' && user.Approve_status=='Active'){
        this.router.navigate(['quicktour'])
        this.storage.set('active',true)
      }
      else{
        if(Class=='Daycare'){
          this.storage.set('active',false).then(_=>{
            this.router.navigate(['addadmission'])
          })
        }
        else{
          this.storage.set('active',false).then(_=>{
            this.router.navigate(['preschoolform'])
          })
        }
        
      }
      this.storage.set('userType',Class)
      this.apiService.setUserData(data.data,Class)
      this.apiService.userFMS({'userid':user.id,'type':Class,'fmskey':this.token}).catch(err=>{
        console.log(err)
      })
    })
  }
  doRefresh(event){
    this.storage.get('cocoon_data').then(data=>{
      console.log('cc',data);
      this.preschool_users =JSON.parse(data)['preschool'];
      this.daycare_users = JSON.parse(data)['daycare'];
      // this.profile=JSON.parse(data)
      event.target.complete()
    }).catch(err=>{
      event.target.complete()

    })
    // this.fcm.getToken().then(token => {
    //   this.token=token
    // });
  }

  ngOnDestroy() {
    this.backButtonSubscription.unsubscribe();
  }
}
