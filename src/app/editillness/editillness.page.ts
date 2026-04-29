import { ChangeDetectorRef, Component, Input, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ActionSheetController, AlertController, LoadingController, ModalController } from '@ionic/angular';
import { ApiService } from '../api.service';
import { Camera, CameraOptions } from '@ionic-native/camera/ngx';
import { File, FileEntry } from '@ionic-native/file/ngx';

@Component({
  selector: 'app-editillness',
  templateUrl: './editillness.page.html',
  styleUrls: ['./editillness.page.scss'],
})
export class EditillnessPage implements OnInit {
  @Input() userId;
  @Input() illness_obj;
  editIllnessForm;
  imageClicked: boolean;
  pdfClicked: boolean;
  profile_pic2: string;
  file_name: string;
  base64Image: any;
  imgBlob: Blob;
  constructor(
    public modalController: ModalController,
    public apiService:ApiService,
    public alertController: AlertController,
    public loadingController: LoadingController,
    public actionSheetController: ActionSheetController,
    private camera: Camera,
    private file: File,
    public router: Router,
    public cf: ChangeDetectorRef


  ) { }

  ngOnInit() {
    console.log(this.illness_obj.prescriptionImg)
    var splitted_from_date=this.illness_obj.fromDate.split('-')
    var splitted_to_date=this.illness_obj.toDate.split('-')
    var from_date=splitted_from_date[1]+'-'+splitted_from_date[0]+'-'+splitted_from_date[2]
    var to_date=splitted_to_date[1]+'-'+splitted_to_date[0]+'-'+splitted_to_date[2]
    this.editIllnessForm = new FormGroup({
      illness: new FormControl(this.illness_obj.illnessName, [Validators.required,Validators.pattern(/^[a-zA-z ]+$/)]),
      from_date: new FormControl(from_date, [Validators.required]),
      to_date: new FormControl(to_date, [Validators.required]),
      dont_prescription: new FormControl(this.illness_obj.isPrescription, [Validators.required]),
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
  async presentActionSheet() {
    const actionSheet = await this.actionSheetController.create({
      header: 'Options',
      cssClass: 'action-sheets-basic-page',
      buttons: [
        {
          text: 'Take photo',
          role: 'destructive',
          icon: 'camera-outline',
          handler: () => {
            this.takePicture();
          }
        },
        {
          text: 'Choose photo from Gallery',
          icon: 'images-outline',
          handler: () => {
            this.openGallery();
          }
        },
      ]
    });
      actionSheet.present();
    }
    takePicture(){
      this.imageClicked=true;
      this.pdfClicked=false;
    
      const options: CameraOptions = {
        quality: 70,
        destinationType: this.camera.DestinationType.FILE_URI,
        encodingType: this.camera.EncodingType.JPEG,
        mediaType: this.camera.MediaType.PICTURE,
        correctOrientation: true
      }
    
      this.camera.getPicture(options).then((imageData) => {
       this.profile_pic2 = 'data:image/jpeg;base64,' + imageData;
    
       this.file.resolveLocalFilesystemUrl(imageData).then((entry: FileEntry) => {
        entry.file(file => {
          console.log(file);
          this.file_name=file.name
          this.base64Image = (<any>window).Ionic.WebView.convertFileSrc(imageData);
          this.cf.detectChanges();
          this.readFile(file);
        });
      });
      }, (err) => {
       this.base64Image = null;      
      });
    }
    openGallery(){
      this.imageClicked=true;
      this.pdfClicked=false;
    
      const options: CameraOptions = {
        quality: 70,
        destinationType: this.camera.DestinationType.FILE_URI,
        encodingType: this.camera.EncodingType.JPEG,
        mediaType: this.camera.MediaType.PICTURE,
        correctOrientation: true,
        sourceType: this.camera.PictureSourceType.PHOTOLIBRARY
      }
    
      this.camera.getPicture(options).then((imageData) => {
       this.profile_pic2 = 'data:image/jpeg;base64,' + imageData;
    
        this.file.resolveLocalFilesystemUrl(imageData).then((entry: FileEntry) => {
          entry.file(file => {
            console.log(file);
            this.file_name=file.name
            this.base64Image = (<any>window).Ionic.WebView.convertFileSrc(imageData);
            this.cf.detectChanges();
            this.readFile(file);
          });
        });
      //  this.profile_pic = 'data:image/jpeg;base64,' + imageData;
      }, (err) => {
        this.base64Image = null;
      });
    }
    readFile(file: any) {
      const reader = new FileReader();
    
      reader.onloadend = () => {
        console.log('reader2',reader,reader.result);
    
        this.imgBlob = new Blob([reader.result], {
          type: file.type
        });
        this.file_name=file.name;
       console.log("name",file.name);
    
      };
      reader.readAsArrayBuffer(file);
    }
      get illness(){
        return this.editIllnessForm.get('illness')
      }
      get from_date(){
        return this.editIllnessForm.get('from_date')
      }
      get to_date(){
        return this.editIllnessForm.get('to_date')
      }
      get dont_prescription(){
        return this.editIllnessForm.get('dont_prescription')
      }
      onSubmit(body){
      
          var formdata= new FormData()
          formdata.append("userId",this.userId);
          formdata.append("illnessId",this.illness_obj.illnessId);
          formdata.append("illness",body['illness']);
          formdata.append("from_date",body['from_date']);
          formdata.append("to_date",body['to_date']);
          formdata.append("dont_prescription",body['dont_prescription']);
          formdata.append("olddocName",this.illness_obj.prescriptionImg);
          formdata.append("image",this.imgBlob,this.file_name);
          
         
          this.apiService.editIllness(formdata).subscribe(data=>{
            this.loadingController.dismiss();
            this.presentAlert('Illness updated successfully');
          },err=>{
            console.log(err.error)
            this.loadingController.dismiss();
            this.apiService.presentToast(err.error, 2000);
          })
    
      }
      closeModal(){
        this.modalController.dismiss()
      }
}
