import { Component, Input, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ApiService } from '../api.service';
import { ModalController, AlertController, LoadingController } from '@ionic/angular';

@Component({
  selector: 'app-editmedicine',
  templateUrl: './editmedicine.page.html',
  styleUrls: ['./editmedicine.page.scss'],
})
export class EditmedicinePage implements OnInit {

  @Input() userId;
  @Input() illnessId;
  @Input() tabId;
  @Input() medicine_obj;
  editMedicineForm: FormGroup;
  constructor(
    public modalController: ModalController,
    public apiService:ApiService,
    public alertController: AlertController,
    public loadingController: LoadingController,
  ) { }

  ngOnInit() {
    
    this.editMedicineForm = new FormGroup({
      tab: new FormControl(this.medicine_obj.tabName, [Validators.required,Validators.pattern(/^[a-zA-z ]+$/)]),
      morningTime: new FormControl(this.medicine_obj.morningTime),
      afternoonTime: new FormControl(this.medicine_obj.afternoonTime),
      eveningTime: new FormControl(this.medicine_obj.eveningTime),
      quantity: new FormControl(this.medicine_obj.quantity, [Validators.required]),
      comment: new FormControl(this.medicine_obj.comment, [Validators.required]),
    })
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
            this.modalController.dismiss()
          },
        },
      ],
    });
    await alert.present();
  }
  onSubmit(body){
    console.log(body);
    body['userId']=this.userId
    body['illnessId']=this.illnessId
    body['tabId']=this.tabId
    this.apiService.editMedicine(body).then(data=>{
      console.log('data',data);
      this.presentAlert('Medicine updated successfully')
    
    }).catch(err=>{
        console.log('err',err);
        this.apiService.presentToast(err.error,2000);
    });
  }
  closeModal(){
    this.modalController.dismiss()
  }
}
