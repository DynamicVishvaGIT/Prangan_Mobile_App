import { Component, OnInit } from '@angular/core';
import { Storage } from '@ionic/storage';
import { ApiService } from './../api.service';
@Component({
  selector: 'app-notifications',
  templateUrl: './notifications.page.html',
  styleUrls: ['./notifications.page.scss'],
})
export class NotificationsPage implements OnInit {
  user_id: any;
  notifications: any;

  constructor(
    public storage: Storage,
    public apiService:ApiService
  ) { }

  ngOnInit() {
  }
  ionViewWillEnter(){
    this.storage.get('user').then(data=>{
      this.user_id = JSON.parse(data).id;
      this.storage.get('userType').then(userType=>{
          this.apiService.fetchNotifications(userType,this.user_id).then(data=>{
            this.notifications=JSON.parse(data.data)
            console.log('notific',this.notifications)
          }).catch(err=>{
            this.notifications=''
          })
        
      })
    })
  }
  doRefresh(event){
    this.storage.get('user').then(data=>{
      this.user_id = JSON.parse(data).id;
      this.storage.get('userType').then(userType=>{
          this.apiService.fetchNotifications(userType,this.user_id).then(data=>{
            this.notifications=JSON.parse(data.data)
            console.log('notific',this.notifications)
      event.target.complete()

          }).catch(err=>{
            this.notifications=''
      event.target.complete()

          })
        
      })
    })
  }
}
