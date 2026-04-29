import { EditmedicinePage } from './../editmedicine/editmedicine.page';
import { ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { AlertController,ModalController } from '@ionic/angular';
import { SheetState,IonBottomSheetComponent } from 'ion-bottom-sheet';
import { ApiService } from '../api.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Storage } from '@ionic/storage';

@Component({
  selector: 'app-addmedicine',
  templateUrl: './addmedicine.page.html',
  styleUrls: ['./addmedicine.page.scss'],
})
export class AddmedicinePage implements OnInit {
  sheetState=SheetState.Bottom;
  minHeight=300;
  dockedHeight=400;
  canBounce=true;
  dealers;
  topDistance=0;
  hideCloseButton=false;
  hideDragIcon=false;
  roundBorderOnTop=true;
  disableDrag=false;
  transition='0.4s ease';
  title='Add Medicine';
  userid: any;
  illnessId: any;
  medicines: any;
  discontinue_reason: any;
  addMedicineForm: any;
  constructor(
    public alertController: AlertController,
    public apiService: ApiService,
    public storage: Storage,
    public route: ActivatedRoute,
    public modalCtrl:ModalController



    ) { }

  ngOnInit() {
    this.addMedicineForm = new FormGroup({
      tab: new FormControl('', [Validators.required]),
      morningTime: new FormControl(''),
      afternoonTime: new FormControl(''),
      eveningTime: new FormControl(''),
      quantity: new FormControl('', [Validators.required]),
      comment: new FormControl(''),
    })
  }
  
  ionViewDidEnter(){
    this.storage.get('user').then((data) => {
      if (data) {

        var user = JSON.parse(data);
        this.userid = user.id;
        this.illnessId=this.route.snapshot.paramMap.get('illnessId')
        this.apiService.fetchMedicine(this.userid,this.illnessId).then(data=>{
          console.log('medicines',data);
          this.medicines=JSON.parse(data.data);
        }).catch(err=>{
          this.medicines='';
        });
      }
    })
  }
  doRefresh(event){
    this.storage.get('user').then((data) => {
      if (data) {

        var user = JSON.parse(data);
        this.userid = user.id;
        this.illnessId=this.route.snapshot.params.get('illnessId')
        this.apiService.fetchMedicine(this.userid,this.illnessId).then(data=>{
          console.log('medicines',data);
          this.medicines=JSON.parse(data.data);
          event.target.complete()

        }).catch(err=>{
          this.medicines='';
          event.target.complete()

        });
      }
    })
  }
  async deleteMedicineAlert(tabId) {
    const alert = await this.alertController.create({
      cssClass: 'my-custom-class',
      header: 'Delete Medicine',
      mode:'ios',
      message: 'Are you sure you want to delete medicine ?',
      buttons: [
        {
          text: 'Yes',
          role: 'cancel',
          cssClass: 'secondary',
          handler: (blah) => {
            console.log('Confirm Cancel: blah');
            this.deleteMedicine(tabId)
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
  openAddMedicine(){
    this.sheetState=SheetState.Docked
  }
  async discontinueMedicines(userId,illnessId,TabId){
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
            this.apiService.discontinueMedicine(userId,illnessId,TabId,this.discontinue_reason).then(data=>{
              console.log('illness',data);
              this.presentAlert('Medicine discontinued successfully')
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
           this.sheetState=SheetState.Bottom
          },
        },
      ],
    });
    await alert.present();
  }
  deleteMedicine(tabId){
    this.apiService.deleteMedicine(this.userid,this.illnessId,tabId).then(data=>{
      console.log('illness',data);
      this.presentAlert('Medicine deleted successfully')
    }).catch(err=>{
      this.apiService.presentToast(err.error,1000)
    });
  }
  async openEditMedicine(medicine_obj,tabId){
    const modal = await this.modalCtrl.create({
    component: EditmedicinePage,
    componentProps: { 
      'userId': this.userid,
      'illnessId': this.illnessId,
      'tabId': tabId,
      'medicine_obj':medicine_obj,

    },
    swipeToClose:true
    });
  
    await modal.present();
  
    const data = await modal.onDidDismiss().then(data=>{
      this.ionViewDidEnter()
    });
    console.log(data)
}
  onSubmit(body){
    body['userId']=this.userid
    body['illnessId']=this.illnessId
    console.log('body',body);
    if(body['morningTime']){
      body['morning']='morning'
    }
    else{
      body['morning']=''
    }
    if(body['afternoonTime']){
      body['afternoon']='afternoon'
    }
    else{
      body['afternoon']=''
    }
    if(body['eveningTime']){
      body['evening']='evening'
    }
    else{
      body['evening']=''
    }
    this.apiService.addMedicine(body).then(data=>{
      console.log('data',data);
      this.presentAlert('Medicine added successfully')
    
    }).catch(err=>{
        this.apiService.presentToast(err.error,2000);
      console.log('err',err);
    });
  }
}
