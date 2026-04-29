import { EditillnessPage } from './../editillness/editillness.page';
import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { AlertController, ModalController } from '@ionic/angular';
import { ApiService } from '../api.service';
import { Storage } from '@ionic/storage';

@Component({
  selector: 'app-medicines',
  templateUrl: './medicines.page.html',
  styleUrls: ['./medicines.page.scss'],
})
export class MedicinesPage implements OnInit {
  illness;
  userid;
  discontinue_reason;
  constructor(
    public alertController: AlertController,
    public router:Router,
    public apiService: ApiService,
    public storage: Storage,
    public modalCtrl:ModalController
    ) { }

  ngOnInit() {
  }
  ionViewDidEnter(){
    this.storage.get('user').then((data) => {
      if (data) {
        var user = JSON.parse(data);
        this.userid = user.id;
        this.apiService.fetchIllness(this.userid).then(data=>{
          console.log('illness',data);
          this.illness=JSON.parse(data.data);
          console.log('notices',this.illness);
        }).catch(err=>{
          this.illness='';
        });
      }
    })
  }
  doRefresh(event){
    this.storage.get('user').then((data) => {
      if (data) {
        var user = JSON.parse(data);
        this.userid = user.id;
        this.apiService.fetchIllness(this.userid).then(data=>{
          console.log('illness',data);
          this.illness=JSON.parse(data.data);
          event.target.complete()
          console.log('notices',this.illness);
        }).catch(err=>{
          this.illness='';
          event.target.complete()

        });
      }
    })

  }
  async discontinueMedicines(illnessId){
    const alert = await this.alertController.create({
      cssClass: 'my-custom-class',
      header: 'Discontinue Illness',
      mode:'ios',
      subHeader: 'Are you sure you want to discontinue illness ?',
      inputs: [
        {
          name: 'reason',
          type: 'text',
          placeholder: 'Reason'
        },
        
      ],
      buttons: [
        {
          text: 'No',
          role: 'cancel',
          cssClass: 'secondary',
          handler: () => {
          }
        }, {
          text: 'Yes',
          handler: (formdata) => {
            console.log('Confirm Ok',formdata.reason);
            this.discontinue_reason=formdata.reason
            this.apiService.discontinueIllness(this.userid,illnessId,this.discontinue_reason).then(data=>{
              console.log('illness',data);
              this.presentAlert('Illness discontinued successfully')
            }).catch(err=>{
              console.log(err)
              this.apiService.presentToast(err.error,1000)
            });
          }
        }
      ]
    });

    await alert.present();
  }
  async presentdeleteIllnessAlert(id) {
    const alert = await this.alertController.create({
      cssClass: 'my-custom-class',
      header: 'Delete Illness',
      mode:'ios',
      message: 'Are you sure you want to delete illness ?',
      buttons: [
        {
          text: 'Yes',
          role: 'cancel',
          cssClass: 'secondary',
          handler: (blah) => {
            console.log('Confirm Cancel: blah');
            this.deleteIllness(id)

          }
        }, {
          text: 'No',
          handler: () => {
            console.log('Confirm Okay');
          }
        }
      ]
    });

    await alert.present();
  }
  openPrescription(img_url){
    window.open(img_url)
  }
 async openEditIllness(illness){
      const modal = await this.modalCtrl.create({
      component: EditillnessPage,
      componentProps: { 
        'userId': this.userid,
        'illness_obj':illness,

      },
      swipeToClose:true
      });
    
      await modal.present();
    
      const data = await modal.onDidDismiss().then(data=>{
        this.ionViewDidEnter()
      });
      console.log(data)
  }
  async presentAlert(message) {
    const alert = await this.alertController.create({
      header: 'Successful',
      message: message,
      mode: 'ios',
      backdropDismiss: false,
      buttons: [
        {
          text: 'OK',
          handler: () => {
            this.ionViewDidEnter()
          },
        },
      ],
    });
    await alert.present();
  }
  deleteIllness(illnessId){
    this.apiService.deleteIllness(this.userid,illnessId).then(data=>{
      console.log('illness',data);
      this.presentAlert('Illness deleted successfully')
      console.log('notices',this.illness);
    }).catch(err=>{
      this.apiService.presentToast(err.error,1000)
    });
  }
}
