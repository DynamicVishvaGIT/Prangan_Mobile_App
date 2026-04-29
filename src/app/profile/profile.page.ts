import { EditprofilePage } from './../editprofile/editprofile.page';
import { MenuController, ModalController } from '@ionic/angular';
import { ApiService } from './../api.service';
import { Storage } from '@ionic/storage';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.page.html',
  styleUrls: ['./profile.page.scss'],
})
export class ProfilePage implements OnInit {
  profile: any;
  userid: any;
  userType;
  constructor(
    public storage:Storage,
    public apiService:ApiService,
    public menuCtrl:MenuController,
    public modalController:ModalController
  ) { }

  ngOnInit() {
  }
  ionViewDidEnter(){
    if(this.menuCtrl.isEnabled){
      this.menuCtrl.swipeGesture(true)
    }
    this.menuCtrl.close()
    this.storage.get('user').then(data=>{
        var user=JSON.parse(data)
        this.userid=user.userid
        this.storage.get('userType').then(userType=>{
          this.userType=userType
        this.apiService.userDetails(user.id,userType).then(data=>{
          console.log('data',data.data);
          this.profile=JSON.parse(data.data)
         
        })

        })
    })
  }
      async openEdit() {
        const modal = await this.modalController.create({
        component: EditprofilePage,
        componentProps: { 
          'userType': this.userType,
          'profile':this.profile
        },
        swipeToClose:true
        });
      
        await modal.present();
      
        const data = await modal.onDidDismiss().then(data=>{
          this.ionViewDidEnter()
        });
        console.log(data)
      
      }
      doRefresh(event){
        this.storage.get('user').then(data=>{
          var user=JSON.parse(data)
          this.userid=user.userid
          this.storage.get('userType').then(userType=>{
            this.userType=userType
          this.apiService.userDetails(user.id,userType).then(data=>{
            console.log('data',data.data);
            this.profile=JSON.parse(data.data)
            event.target.complete()

          }).catch(err=>{
          event.target.complete()

          });

          });
      });
      }
}
