import { Router } from '@angular/router';
import { ApiService } from './../api.service';
import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { ActionSheetController, AlertController, LoadingController } from '@ionic/angular';
import { Camera, CameraOptions } from '@ionic-native/camera/ngx';
import { File, FileEntry } from '@ionic-native/file/ngx';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Storage } from '@ionic/storage';

@Component({
  selector: 'app-addillness',
  templateUrl: './addillness.page.html',
  styleUrls: ['./addillness.page.scss'],
})
export class AddillnessPage implements OnInit {
  imageClicked: boolean;
  pdfClicked: boolean;
  file_name: string;
  base64Image: any;
  todays_date = new Date().toJSON().split('T')[0];
  profile_pic2: string;
  imgBlob: Blob;
  illnessForm: FormGroup;
  userid;
  constructor(
    public actionSheetController: ActionSheetController,
    private camera: Camera,
    private file: File,
    private apiService:ApiService,
    public loadingController: LoadingController,
    public alertController: AlertController,
    public router: Router,
    public storage: Storage,
    public cf: ChangeDetectorRef






  ) { }

  ngOnInit() {
    this.illnessForm = new FormGroup({
      illness: new FormControl('', [Validators.required,Validators.pattern(/^[a-zA-z ]+$/)]),
      from_date: new FormControl('', [Validators.required]),
      to_date: new FormControl('', [Validators.required]),
      dont_prescription: new FormControl('', [Validators.required]),
    })
  }
  ionViewWillEnter(){
    this.storage.get('user').then((data) => {
      if (data) {
        var user = JSON.parse(data);
        this.userid = user.id;
      }
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
            this.router.navigate(['medicines']);
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
    return this.illnessForm.get('illness')
  }
  get from_date(){
    return this.illnessForm.get('from_date')
  }
  get to_date(){
    return this.illnessForm.get('to_date')
  }
  get dont_prescription(){
    return this.illnessForm.get('dont_prescription')
  }
  async presentLoading() {
    const loading = await this.loadingController.create({
      message: 'Please wait...',
      mode: 'ios',
      backdropDismiss: false,
    });
    return loading.present();

    const { role, data } = await loading.onDidDismiss();
    console.log('Loading dismissed!');
  }
  onSubmit(body){
    if(!this.file_name || this.file_name==''){
      this.apiService.presentToast('Please upload prescription', 2000);
    }
    else{
      var formdata= new FormData()
      formdata.append("userId",this.userid);
      formdata.append("illness",body['illness']);
      formdata.append("from_date",body['from_date']);
      formdata.append("to_date",body['to_date']);
      formdata.append("dont_prescription",body['dont_prescription']);
      formdata.append("image",this.imgBlob,this.file_name);
     
     
      this.apiService.addIllness(formdata).subscribe(data=>{
        this.loadingController.dismiss();
        this.presentAlert('Illness added successfully');
      },err=>{
        this.loadingController.dismiss();
        this.apiService.presentToast(err.error, 2000);
      })
    }

  }
}
