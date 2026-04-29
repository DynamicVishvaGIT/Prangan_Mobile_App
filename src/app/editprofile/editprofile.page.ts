import { Storage } from '@ionic/storage';
import { ApiService } from './../api.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ChangeDetectorRef, Component, Input, OnInit } from '@angular/core';
import { ActionSheetController, AlertController, LoadingController, ModalController } from '@ionic/angular';
import { Camera, CameraOptions } from '@ionic-native/camera/ngx';
import { File,FileEntry, IFile } from '@ionic-native/file/ngx';
@Component({
  selector: 'app-editprofile',
  templateUrl: './editprofile.page.html',
  styleUrls: ['./editprofile.page.scss'],
})
export class EditprofilePage implements OnInit {
  @Input() userType;
  @Input() profile;
  preschoolUpdateForm: FormGroup;
  DaycareUpdateForm: FormGroup;
  old_image: any;
  id: any;
  childimgBlob: any;
  child_file_name: string;
  child_image;
  childbase64Image: any;
  fetchPreschoolStepOne: any;
  branch_id: any;
  pet_name: any;
  dob_words: any;
  mobile_1: any;
  mobile_2: any;
  mother_tonge: any;
  other_languages: any;
  nationality: any;
  fetchDaycareStepOne: any;
  childimg: any;
  motherimg: any;
  fatherimg: any;
  guardianimg: any;
  childioldmg: any;
  motheroldimg: any;
  fatheroldimg: any;
  guardianoldimg: any;
  program: any;
  timings: any;
  emailid: any;
  address: any;
  landmark: any;
  mother_qua: any;
  mother_hobbies: any;
  mother_work_place: any;
  mother_work_phone_num: any;
  mother_work_mob_num: any;
  father_qualification: any;
  father_hobbies: any;
  father_work_place: any;
  father_work_phone_num: any;
  father_work_mob_num: any;
  sibling_name: any;
  sibling_age: any;
  sibling_school: any;
  emg_name: any;
  emg_contact_rel: any;
  emg_contact_phone: any;
  household_name: any;
  household_rel: any;
  household_num: any;
  modified_filename: string;
  todays_date=new Date().toJSON().split('T')[0];
  class: any;
  constructor(
    public modalController: ModalController,
    public apiService:ApiService,
    public storage: Storage,
    public actionSheetController: ActionSheetController,
    private file: File,
    private camera: Camera,
    private cf: ChangeDetectorRef,
    public alertController: AlertController,
    public loadingController: LoadingController,

  ) { }

  ngOnInit() {
    
    if(this.userType=='Preschool'){
      this.preschoolUpdateForm=new FormGroup({
        child_name:new FormControl(this.profile.child_name,[Validators.required,Validators.pattern(/^[a-zA-Z\. ]+$/)]),
        d_o_b:new FormControl(this.profile.dob,[Validators.required]),
        gender:new FormControl(this.profile.gender,[Validators.required]),
        // class:new FormControl(this.profile.class,[Validators.required]),

      })  
      this.apiService.userDetails(this.profile.id,'Preschool').then(data=>{
        console.log('fetchPreschoolStepOne',data.data);
        this.fetchPreschoolStepOne=JSON.parse(data.data)
      
        if(this.fetchPreschoolStepOne.id){  
         
          this.child_image=this.fetchPreschoolStepOne.child_img
          this.id=this.fetchPreschoolStepOne.id
          this.old_image=this.fetchPreschoolStepOne.child_image
          this.branch_id=this.fetchPreschoolStepOne.branch_id
          this.pet_name=this.fetchPreschoolStepOne.pet_name
          this.dob_words=this.fetchPreschoolStepOne.dob_in_words
          this.mobile_1=this.fetchPreschoolStepOne.residence_phone
          this.mobile_2=this.fetchPreschoolStepOne.emg_number
          this.mother_tonge=this.fetchPreschoolStepOne.mother_tongue
          this.other_languages=this.fetchPreschoolStepOne.other_lang
          this.nationality=this.fetchPreschoolStepOne.nationality
          this.class=this.fetchPreschoolStepOne.class
        }
        })
    }
    else{
      this.DaycareUpdateForm=new FormGroup({
        daycare_child_name:new FormControl(this.profile.child_name,[Validators.required,Validators.pattern(/^[a-zA-Z\. ]+$/)]),
        daycare_d_o_b:new FormControl(this.profile.dob,[Validators.required]),
        daycare_gender:new FormControl(this.profile.gender,[Validators.required]),
        daycare_address:new FormControl(this.profile.address,[Validators.required]),
        daycare_emailid:new FormControl(this.profile.emailid,[Validators.required]),
      })  
      this.apiService.userDetails(this.profile.id, 'Daycare').then((data) => {
        console.log('fetchDaycareStepOne', data.data);

        this.fetchDaycareStepOne = JSON.parse(data.data);
        if (this.fetchDaycareStepOne) {

          this.id = this.fetchDaycareStepOne.id;
            this.branch_id=this.fetchDaycareStepOne.branch_id
            this.program= this.fetchDaycareStepOne.program
            this.timings= this.fetchDaycareStepOne.timings
            this.pet_name= this.fetchDaycareStepOne.pet_name
            this.dob_words= this.fetchDaycareStepOne.dob_words
            this.mobile_1= this.fetchDaycareStepOne.home_phone
            this.emailid= this.fetchDaycareStepOne.emailid
            this.address= this.fetchDaycareStepOne.address
            this.landmark= this.fetchDaycareStepOne.landmark
            this.mother_qua= this.fetchDaycareStepOne.mother_qualification
            this.mother_hobbies= this.fetchDaycareStepOne.mother_hobbies
            this.mother_work_place= this.fetchDaycareStepOne.mother_work_place
            this.mother_work_phone_num=this.fetchDaycareStepOne.mother_work_phone
            this.mother_work_mob_num=this.fetchDaycareStepOne.mother_mobile_number
            this.father_qualification=this.fetchDaycareStepOne.father_qualifiaction
            this.father_hobbies= this.fetchDaycareStepOne.father_hobbies
            this.father_work_place= this.fetchDaycareStepOne.father_work_place
            this.father_work_phone_num=this.fetchDaycareStepOne.father_work_phone
            this.father_work_phone_num=this.fetchDaycareStepOne.father_mobile_number
            this.sibling_name= this.fetchDaycareStepOne.child_name1
            this.sibling_age= this.fetchDaycareStepOne.child_age1
            this.sibling_school= this.fetchDaycareStepOne.child_school1
            this.emg_name= this.fetchDaycareStepOne.emg_name1
            this.emg_contact_rel= this.fetchDaycareStepOne.emg_relationship1
            this.emg_contact_phone= this.fetchDaycareStepOne.emg_mobile1
            this.household_name= this.fetchDaycareStepOne.other_name1
            this.household_rel= this.fetchDaycareStepOne.other_relationship1
            this.household_num= this.fetchDaycareStepOne.other_mobile1
          
          this.child_image = this.fetchDaycareStepOne.child_img;
          this.motherimg = this.fetchDaycareStepOne.mother_img;
          this.fatherimg = this.fetchDaycareStepOne.father_img;
          this.guardianimg = this.fetchDaycareStepOne.guardian_img;
          this.childioldmg = this.fetchDaycareStepOne.child_image;
          this.motheroldimg = this.fetchDaycareStepOne.mother_image;
          this.fatheroldimg = this.fetchDaycareStepOne.father_image;
          this.guardianoldimg = this.fetchDaycareStepOne.guardian_image;
          
        } 
      });
    }
  }
  dismiss(){
    this.modalController.dismiss()
  }
  get child_name(){
      return this.preschoolUpdateForm.get('child_name')
  }
  get d_o_b(){
      return this.preschoolUpdateForm.get('d_o_b')
  }
  get gender(){
      return this.preschoolUpdateForm.get('gender')
  }
  // get class(){
  //     return this.preschoolUpdateForm.get('class')
  // }
  get daycare_child_name(){
      return this.DaycareUpdateForm.get('daycare_child_name')
  }
  get daycare_d_o_b(){
      return this.DaycareUpdateForm.get('daycare_d_o_b')
  }
  get daycare_gender(){
      return this.DaycareUpdateForm.get('daycare_gender')
  }


  get daycare_address(){
      return this.DaycareUpdateForm.get('daycare_address')
  }
  get daycare_emailid(){
      return this.DaycareUpdateForm.get('daycare_emailid')
  }
  async presentLoading() {
    const loading = await this.loadingController.create({
      message: 'Please wait...',
      mode:'ios',
      backdropDismiss:false
    });
    return loading.present();

    const { role, data } = await loading.onDidDismiss();
    console.log('Loading dismissed!');
  }
  onPreschoolSubmit(body){
    this.presentLoading()
    console.log('body', body);
    const formData = new FormData();
    formData.append("child_name", body['child_name'])
    formData.append("gender", body['gender'])
    formData.append("d_o_b", body['d_o_b'])
    formData.append("class", this.class)
    formData.append("branch_id", this.branch_id)
    formData.append("pet_name", this.pet_name)
    formData.append("dob_words", this.dob_words)
    formData.append("figures", '')
    formData.append("mobile_1", this.mobile_1)
    formData.append("mobile_2",this.mobile_2)
    formData.append("mother_tonge", this.mother_tonge)
    formData.append("other_languages", this.other_languages)
    formData.append("nationality", this.nationality)
    if(this.childimgBlob){
      formData.append('image', this.childimgBlob, this.child_file_name);
    }
    else{
      formData.append('image', '');
    }
    formData.append("user_id", this.id)
    formData.append("old_image", this.old_image)
    this.apiService.updatePreschoolRegStep1(formData).subscribe(data => {
      console.log('data',data);
      this.loadingController.dismiss()

        this.presentAlert("Profile updated successfully")

        console.log(data);
    },err=>{
      console.log(err);
      this.loadingController.dismiss()

      this.apiService.presentToast(err.error,2000);
    })
  }
  onDaycareSubmit(body){
    this.presentLoading()
    console.log('body', body);
    const formData = new FormData();
    formData.append("child_name", body['daycare_child_name'])
    formData.append("gender", body['daycare_gender'])
    formData.append("d_o_b", body['daycare_d_o_b'])
    formData.append("emailid", body['daycare_emailid'])
    formData.append("address", body['daycare_address'])
    formData.append('branch_id', this.branch_id);
    formData.append('program',this.program);
    formData.append('timings',this.timings);
    formData.append('pet_name',this.pet_name);
    formData.append('dob_words', this.dob_words);
    formData.append('figures', '');
    formData.append('mobile_1', this.mobile_1);
    formData.append('landmark', this.landmark);
    formData.append('mother_qua', this.mother_qua);
    formData.append('mother_hobbies', this.mother_hobbies);
    formData.append('mother_work_place', this.mother_work_place);
    formData.append('mother_work_phone_num', this.mother_work_phone_num);
    formData.append('mother_work_mob_num', this.mother_work_mob_num);
    formData.append('father_qualification', this.father_qualification);
    formData.append('father_hobbies', this.father_hobbies);
    formData.append('father_work_place',this.father_work_place);
    formData.append('father_work_phone_num',  this.father_work_phone_num);
    formData.append('father_work_mob_num',  this.father_work_phone_num);
    formData.append('sibling_name', this.sibling_name);
    formData.append('sibling_age', this.sibling_age);
    formData.append('sibling_school', this.sibling_school);
    formData.append('emg_name', this.emg_name);
    formData.append('emg_contact_rel', this.emg_contact_rel);
    formData.append('emg_contact_phone',  this.emg_contact_phone);
    formData.append('household_name', this.household_name);
    formData.append('household_rel',  this.household_rel);
    formData.append('household_num', this.household_num);
    formData.append('old_img[]', this.childioldmg);
    formData.append('old_img[]', this.motheroldimg);
    formData.append('old_img[]', this.fatheroldimg);
    formData.append('old_img[]', this.guardianoldimg);
    if(this.childimgBlob){
      formData.append('image[]', this.childimgBlob, this.child_file_name);
    }
    else{
      formData.append('image[]', '');
    }
    formData.append('image[]', '');
    formData.append('image[]', '');
    formData.append('image[]', '');
    formData.append("id", this.id)
    formData.append('userid', this.profile.id);
    this.apiService.updateDaycareRegStep1(formData).subscribe(data => {
      console.log('data',data);
      this.loadingController.dismiss()

        this.presentAlert("Profile  updated successfully")

        console.log(data);
    },err=>{
      console.log(err);
      this.loadingController.dismiss()

      this.apiService.presentToast(err.error,2000);
    })
  }
  async presentAlert(message) {
    const alert = await this.alertController.create({
      header: 'Successful',
      message: message,
      mode:'ios',
      backdropDismiss:false,
      buttons: [
        {
          text:'OK',
          handler:()=>{
            this.modalController.dismiss()
          }
        }
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
              this.takePicture('child');
          }
        },
        {
          text: 'Choose photo from Gallery',
          icon: 'images-outline',
          handler: () => {
              this.openGallery('child');

           
          }
        },
  ]
});
actionSheet.present();
}
takePicture(type){
    
  const options: CameraOptions = {
    quality: 70,
    destinationType: this.camera.DestinationType.FILE_URI,
    encodingType: this.camera.EncodingType.JPEG,
    mediaType: this.camera.MediaType.PICTURE,
    correctOrientation: true
  };


  this.camera.getPicture(options).then((imageData) => {
   this.file.resolveLocalFilesystemUrl(imageData).then((entry: FileEntry) => {
    entry.file(file => {
      console.log(file);
     
        this.childbase64Image = (<any>window).Ionic.WebView.convertFileSrc(imageData);
      

      this.cf.detectChanges();
      this.readFile(file,type);
    });
  });
  }, (err) => {
    this.childbase64Image= null;      
    
  });
}
openGallery(type){
  const options: CameraOptions = {
    quality: 70,
    destinationType: this.camera.DestinationType.FILE_URI,
    encodingType: this.camera.EncodingType.JPEG,
    mediaType: this.camera.MediaType.PICTURE,
    correctOrientation: true,
    sourceType: this.camera.PictureSourceType.PHOTOLIBRARY
  }


  this.camera.getPicture(options).then((imageData) => {
    this.file.resolveLocalFilesystemUrl(imageData).then((entry: FileEntry) => {
      entry.file(file => {
        console.log('file',file);
        if(file.type=='image/jpeg'){
          var filename=file.name
          var file_ext=(filename.split('.').slice(-1)).join('.')
          var filename_wo_ext=(filename.split('.').slice(0, -1)).join('.')
          this.modified_filename=filename_wo_ext + (file.lastModified).toString()+"."+file_ext
          
          console.log('this.child_file_name',this.modified_filename)
      }
        else{
           this.modified_filename = file.name;  
        }
        this.child_file_name = this.modified_filename
          this.childbase64Image = (<any>window).Ionic.WebView.convertFileSrc(imageData);
      
        this.cf.detectChanges();
        this.readFile(file,type);
      });
    });
  }, (err) => {
    // Handle error
  });}
  readFile(file: any,type) {
    const reader = new FileReader();
    reader.onloadend = () => {
   
        this.childimgBlob = new Blob([reader.result], {
          type: file.type
        });
      
     
     
    };
    reader.readAsArrayBuffer(file);
  }
}  