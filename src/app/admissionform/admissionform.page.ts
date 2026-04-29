import { Router } from '@angular/router';
import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ApiService } from './../api.service';
import { File, FileEntry } from '@ionic-native/file/ngx';
import { Storage } from '@ionic/storage';

import { ActionSheetController,AlertController,LoadingController, MenuController,  } from '@ionic/angular';
import { Camera, CameraOptions } from '@ionic-native/camera/ngx';

@Component({
  selector: 'app-admissionform',
  templateUrl: './admissionform.page.html',
  styleUrls: ['./admissionform.page.scss'],
})
export class AdmissionformPage implements OnInit {
  admissionForm;
  child_file_name;
  childbase64Image;
  modified_filename;
  childimgBlob;
  branches: any;
  constructor(
    public storage: Storage,
    public apiService: ApiService,
    public actionSheetController: ActionSheetController,
    private file: File,
    private camera: Camera,
    private cf: ChangeDetectorRef,
    public menuCtrl: MenuController,
    public loadingController: LoadingController,
    public alertController: AlertController,
    public router: Router

  ) {}

  ngOnInit() {
    this.menuCtrl.enable(false);
    this.admissionForm = new FormGroup({
      branch_id: new FormControl('', [Validators.required]),
      program: new FormControl('', [
        Validators.required,
        Validators.pattern(/^[a-zA-z ]+$/),
      ]),
      child_name: new FormControl('', [
        Validators.required,
        Validators.pattern(/^[a-zA-Z\. ]+$/),
      ]),
      gender: new FormControl('', [Validators.required]),
      d_o_b: new FormControl('', [Validators.required]),
      child_age: new FormControl('', [Validators.required]),
      address: new FormControl('', [Validators.required]),
      school_name: new FormControl('', [
        Validators.required,
        Validators.pattern(/^[a-zA-Z\. ]+$/),
      ]),
      school_std: new FormControl('', [
        Validators.required
      ]),
      mothers_name:new FormControl('',[Validators.required,Validators.pattern(/^[a-zA-Z\. ]+$/)]),  
      mothers_age:new FormControl('',[Validators.required]),  
      height:new FormControl('',[Validators.required]),  
      weight:new FormControl('',[Validators.required]),  
      family:new FormControl('',[Validators.required]),  
      total_members:new FormControl('',[Validators.required]),  
      attached_to:new FormControl('',[Validators.required]),  
      sibling_sister:new FormControl(''),  
      sibling_brother:new FormControl(''),  
      mothers_qualification:new FormControl('',[Validators.required,Validators.pattern(/^[a-zA-Z\. ]+$/)]),  
      food_allergies:new FormControl('',[Validators.required,Validators.pattern(/^[a-zA-Z\. ]+$/)]),  
      other_allergies:new FormControl('',[Validators.required,Validators.pattern(/^[a-zA-Z\. ]+$/)]),  
      precautions:new FormControl('',[Validators.required,Validators.pattern(/^[a-zA-Z\. ]+$/)]),  
      languages:new FormControl('',[Validators.required,Validators.pattern(/^[a-zA-Z\. ]+$/)]),  
      mother_office_address: new FormControl('', [Validators.required]),
      
      mothers_no:new FormControl('',[Validators.required,Validators.maxLength(10),Validators.minLength(10),Validators.pattern(/^[0-9]{10}$/)]),
      mothers_email:new FormControl('',[Validators.pattern(/^(?!\_)(?!_*_$)([0-9A-Za-z]+\.)*[a-zA-Z0-9_+-]+@([\w+-]+\.)*[\w+-]+\.[a-zA-Z]{2,4}$/)]),
      fathers_name:new FormControl('',[Validators.required,Validators.pattern(/^[a-zA-Z\. ]+$/)]),  
      mother_tongue:new FormControl('',[Validators.required,Validators.pattern(/^[a-zA-Z\. ]+$/)]),  
      fathers_qualification:new FormControl('',[Validators.required,Validators.pattern(/^[a-zA-Z\. ]+$/)]),  
      office_address: new FormControl('', [Validators.required]),
      fathers_age:new FormControl('',[Validators.required]),  
      fathers_no:new FormControl('',[Validators.required,Validators.maxLength(10),Validators.minLength(10),Validators.pattern(/^[0-9]{10}$/)]),
      fathers_email:new FormControl('',[Validators.pattern(/^(?!\_)(?!_*_$)([0-9A-Za-z]+\.)*[a-zA-Z0-9_+-]+@([\w+-]+\.)*[\w+-]+\.[a-zA-Z]{2,4}$/)]),
      emergency_cntct_no: new FormControl('', [
        Validators.required,
        Validators.maxLength(10),
        Validators.minLength(10),
        Validators.pattern(/^[0-9]{10}$/),
      ]),
    });
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
  get branch_id(){
    return this.admissionForm.get('branch_id')
  }
  get program(){
    return this.admissionForm.get('program')
  }
  get child_name(){
    return this.admissionForm.get('child_name')
  }
  get gender(){
    return this.admissionForm.get('gender')
  }
  get d_o_b(){
    return this.admissionForm.get('d_o_b')
  }
  get child_age(){
    return this.admissionForm.get('child_age')
  }
  get address(){
    return this.admissionForm.get('address')
  }
  get school_name(){
    return this.admissionForm.get('school_name')
  }
  get school_std(){
    return this.admissionForm.get('school_std')
  }
  get mothers_name(){
    return this.admissionForm.get('mothers_name')
  }
  get mothers_age(){
    return this.admissionForm.get('mothers_age')
  }
  get height(){
    return this.admissionForm.get('height')
  }
  get weight(){
    return this.admissionForm.get('weight')
  }
  get family(){
    return this.admissionForm.get('family')
  }
  get total_members(){
    return this.admissionForm.get('total_members')
  }
  get attached_to(){
    return this.admissionForm.get('attached_to')
  }
  get sibling_sister(){
    return this.admissionForm.get('sibling_sister')
  }
  get sibling_brother(){
    return this.admissionForm.get('sibling_brother')
  }
  get mothers_qualification(){
    return this.admissionForm.get('mothers_qualification')
  }
  get food_allergies(){
    return this.admissionForm.get('food_allergies')
  }
  get other_allergies(){
    return this.admissionForm.get('other_allergies')
  }
  get precautions(){
    return this.admissionForm.get('precautions')
  }
  get languages(){
    return this.admissionForm.get('languages')
  }
  get mother_office_address(){
    return this.admissionForm.get('mother_office_address')
  }
  get mothers_no(){
    return this.admissionForm.get('mothers_no')
  }
  get mothers_email(){
    return this.admissionForm.get('mothers_email')
  }
  get fathers_name(){
    return this.admissionForm.get('fathers_name')
  }
  get mother_tongue(){
    return this.admissionForm.get('mother_tongue')
  }
  get fathers_qualification(){
    return this.admissionForm.get('fathers_qualification')
  }
  get office_address(){
    return this.admissionForm.get('office_address')
  }
  get fathers_age(){
    return this.admissionForm.get('fathers_age')
  }
  get fathers_no(){
    return this.admissionForm.get('fathers_no')
  }
  get fathers_email(){
    return this.admissionForm.get('fathers_email')
  }
  get emergency_cntct_no(){
    return this.admissionForm.get('emergency_cntct_no')
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
           
          },
        },
        {
          text: 'Choose photo from Gallery',
          icon: 'images-outline',
          handler: () => {
            this.openGallery();
         
          },
        },
      ],
    });
    actionSheet.present();
  }
  takePicture() {
    const options: CameraOptions = {
      quality: 70,
      destinationType: this.camera.DestinationType.FILE_URI,
      encodingType: this.camera.EncodingType.JPEG,
      mediaType: this.camera.MediaType.PICTURE,
      correctOrientation: true,
    };

    this.camera.getPicture(options).then(
      (imageData) => {
        this.file
          .resolveLocalFilesystemUrl(imageData)
          .then((entry: FileEntry) => {
            entry.file((file) => {
              console.log(file);
             
                this.child_file_name = file.name;
                this.childbase64Image = (<any>(
                  window
                )).Ionic.WebView.convertFileSrc(imageData);

              this.cf.detectChanges();
              this.readFile(file);
            })

            });
          });
      
  }
  openGallery() {
    const options: CameraOptions = {
      quality: 70,
      destinationType: this.camera.DestinationType.FILE_URI,
      encodingType: this.camera.EncodingType.JPEG,
      mediaType: this.camera.MediaType.PICTURE,
      correctOrientation: true,
      sourceType: this.camera.PictureSourceType.PHOTOLIBRARY,
    };

    this.camera.getPicture(options).then(
      (imageData) => {
        this.file
          .resolveLocalFilesystemUrl(imageData)
          .then((entry: FileEntry) => {
            entry.file((file) => {
              console.log(file);
              if (file.type == 'image/jpeg') {
                var filename = file.name;
                var file_ext = filename.split('.').slice(-1).join('.');
                var filename_wo_ext = filename
                  .split('.')
                  .slice(0, -1)
                  .join('.');
                this.modified_filename =
                  filename_wo_ext +
                  file.lastModified.toString() +
                  '.' +
                  file_ext;

                console.log('this.child_file_name', this.modified_filename);
              } else {
                this.modified_filename = file.name;
              }
                this.child_file_name = this.modified_filename;

                this.childbase64Image = (<any>(
                  window
                )).Ionic.WebView.convertFileSrc(imageData);
         
              this.cf.detectChanges();
              this.readFile(file);
            });
          });
      },
      (err) => {
        // Handle error
      }
    );
  }
  readFile(file: any) {
    const reader = new FileReader();
    reader.onloadend = () => {
        this.childimgBlob = new Blob([reader.result], {
          type: file.type,
        });

      console.log('name', file.name);
    };
    reader.readAsArrayBuffer(file);
  }

  onSubmit(body){
    console.log('body', body);
    const formData = new FormData();
    formData.append('branch_id', body['branch_id']);
    formData.append('program', body['program']);
    formData.append('child_name', body['child_name']);
    formData.append('gender', body['gender']);
    formData.append('d_o_b', body['d_o_b']);
    formData.append('child_age', body['child_age']);
    formData.append('address', body['address']);
    formData.append('school_name', body['school_name']);
    formData.append('school_std', body['school_std']);
    formData.append('mothers_name', body['mothers_name']);
    formData.append('mothers_age', body['mothers_age']);
    formData.append('height', body['height']);
    formData.append('weight', body['weight']);
    formData.append('family', body['family']);
    formData.append('total_members', body['total_members']);
    formData.append('attached_to', body['attached_to']);
    formData.append('sibling_sister', body['sibling_sister']);
    formData.append('sibling_brother', body['sibling_brother']);
    formData.append('mothers_qualification', body['mothers_qualification']);
    formData.append('food_allergies', body['food_allergies']);
    formData.append('other_allergies', body['other_allergies']);
    formData.append('precautions', body['precautions']);
    formData.append('languages', body['languages']);
    formData.append('mother_office_address', body['mother_office_address']);
    formData.append('mothers_no', body['mothers_no']);
    formData.append('mothers_email', body['mothers_email']);
    formData.append('fathers_name', body['fathers_name']);
    formData.append('mother_tongue', body['mother_tongue']);
    formData.append('fathers_qualification', body['fathers_qualification']);
    formData.append('office_address', body['office_address']);
    formData.append('fathers_age', body['fathers_age']);
    formData.append('fathers_no', body['fathers_no']);
    formData.append('fathers_email', body['fathers_email']);
    formData.append('emergency_cntct_no', body['emergency_cntct_no']);
    formData.append('image', this.childimgBlob, this.child_file_name);
    this.apiService.updateDaycareRegStep1(formData).subscribe(
      (data) => {
        console.log('data', data);
        this.loadingController.dismiss();
        this.presentAlert('Daycare registration updated successfully');
        console.log(data);
        this.childbase64Image = '';
      
        this.childimgBlob = null;
     
      },
      (err) => {
        console.log(err);
        this.loadingController.dismiss();
        this.apiService.presentToast(err.error, 2000);
      }
    );

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
            // this.router.navigate(['mobilelogin'])
         
          },
        },
      ],
    });
    await alert.present();
  }
  ionViewWillEnter() {
    if(this.menuCtrl.isEnabled){
      console.log('hi')
      this.menuCtrl.swipeGesture(false)
    }
    this.apiService.getBranches().then((data) => {
      this.branches = JSON.parse(data.data);
    });
  }
  doRefresh(event) {
   
    this.apiService.getBranches().then((data) => {
      this.branches = JSON.parse(data.data);
      event.target.complete()
    });
  }
  goBack() {
    this.router.navigate(['quicktour']);
  }
}
