import { Location } from '@angular/common';
import { Router } from '@angular/router';
import { ApiService } from './../api.service';
import { Storage } from '@ionic/storage';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ChangeDetectorRef, Component, OnInit, ViewChild } from '@angular/core';
import { ActionSheetController,AlertController, LoadingController } from '@ionic/angular';
import { Camera, CameraOptions } from '@ionic-native/camera/ngx';
import { File,FileEntry } from '@ionic-native/file/ngx';
import { MenuController } from '@ionic/angular';

@Component({
  selector: 'app-preschoolform',
  templateUrl: './preschoolform.page.html',
  styleUrls: ['./preschoolform.page.scss'],
})
export class PreschoolformPage implements OnInit {
  preschoolRegForm: FormGroup;
  step: string;
  value: any;
  isOtherInfoEnabled: boolean;
  isImagesEnabled: boolean;
  myContent: any;
  isLoggedIn: boolean;
  branches: any;
  todays_date=new Date().toJSON().split('T')[0];
  childbase64Image: any;
  motherbase64Image: any;
  fatherbase64Image: any;
  guardianbase64Image: any;
  child_file_name: string;
  childimgBlob: Blob;
  userid: any;
  fetchPreschoolStepOne: any;
  child_image: any;
  isDataPresent: boolean;
  id: any;
  isDisabled = false;
  old_image: any;
  isFormSubmitted = false;
  isApproved=false;
  userType: any;
  columns: any;
  notifications: any;
  constructor(
    public storage: Storage,
    public apiService: ApiService,
    public actionSheetController: ActionSheetController,
    private file: File,
    private camera: Camera,
    private cf: ChangeDetectorRef,
    public alertController: AlertController,
    public router: Router,
    public loadingController: LoadingController,
    public location: Location,
    public menuCtrl: MenuController


  ) { }
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
  ngOnInit() {
    this.menuCtrl.enable(false);

      this.preschoolRegForm=new FormGroup({
        branch_id:new FormControl('',[Validators.required]),
        child_name:new FormControl('',[Validators.required,Validators.pattern(/^[a-zA-Z\. ]+$/)]),
        pet_name:new FormControl('',[Validators.pattern(/^[a-zA-z ]+$/)]),
        gender:new FormControl('',[Validators.required]),
        d_o_b:new FormControl('',[Validators.required]),
        //dob_words:new FormControl('',[Validators.required,Validators.pattern(/^[a-zA-Z ]+$/)]),
        // figures:new FormControl('',[Validators.required]),
        mobile_1:new FormControl('',[Validators.required, Validators.maxLength(10),Validators.minLength(10),Validators.pattern(/^[0-9]{10}$/)]),
        mobile_2:new FormControl('',[Validators.required,Validators.maxLength(10),Validators.minLength(10),Validators.pattern(/^[0-9]{10}$/)]),
        mother_tonge:new FormControl('',[Validators.required,Validators.pattern(/^[a-zA-z ]+$/)]),
        other_languages:new FormControl('',[Validators.required,Validators.pattern(/^[a-zA-z ,]+$/)]),
        nationality:new FormControl('',[Validators.required,Validators.pattern(/^[a-zA-z ]+$/)]),
        class:new FormControl('',[Validators.required]),
      });


  }



  onSubmit(body){
    // if (this.childimgBlob == null){
    //   console.log(this.preschoolRegForm.valid)
    //   alert("You Forgot to add child image !")
    //   console.log('childimgBlob is null ',this.childimgBlob)
    //   }else{
        this.presentLoading();

    console.log('child_file_name1',this.child_file_name);

    if(this.child_file_name==''){
    console.log('child_file_name2',this.child_file_name);
    this.loadingController.dismiss();
    this.apiService.presentToast('Please upload child image',2000);
    }
    else{
    console.log('child_file_name3',this.child_file_name);
    console.log(body);
    console.log('body', body);
    const formData = new FormData();
    formData.append('branch_id', body.branch_id);
    formData.append('child_name', body.child_name);
    formData.append('pet_name', body.pet_name);
    formData.append('gender', body.gender);
    formData.append('d_o_b', body.d_o_b);
    //formData.append("dob_words", body['dob_words'])
    formData.append('figures', '');
    formData.append('mobile_1', body.mobile_1);
    formData.append('mobile_2', body.mobile_2);
    formData.append('mother_tonge', body.mother_tonge);
    formData.append('other_languages', body.other_languages);
    formData.append('nationality', body.nationality);
    formData.append('class', body.class);

    if(this.isDataPresent){
      if(this.childimgBlob){
        formData.append('image', this.childimgBlob, this.child_file_name);
      }
      else{
        formData.append('image', '');
      }
      formData.append('user_id', this.id);
      formData.append('old_image', this.old_image);
      this.apiService.updatePreschoolRegStep1(formData).subscribe(data => {
        console.log('data',data);
        this.loadingController.dismiss();

          this.presentAlert('Preschool form updated successfully');


          console.log(data);
      },err=>{
        console.log(err);
        this.loadingController.dismiss();

        this.apiService.presentToast(err.error,2000);
      });
    }
    else{
      formData.append('image', this.childimgBlob, this.child_file_name);
        this.apiService.preschoolRegStep1(formData).subscribe(data => {
        console.log('data',data);
        this.loadingController.dismiss();

          this.presentAlert('Preschool form submitted successfully. Please wait for your registration approval.');

          this.preschoolRegForm.reset();
          this.childbase64Image='';
          this.child_file_name='';
          console.log(data);
      },err=>{
        console.log(err);
        this.loadingController.dismiss();

        this.apiService.presentToast(err.error,2000);
      });


  }

  }

  }

  dismissLoader() {
    this.loadingController.dismiss();
  }


  ionViewDidEnter(){
    if(this.menuCtrl.isEnabled){
      console.log('hi');
      this.menuCtrl.swipeGesture(false);
    }
    this.presentLoading().then(()=>{
      this.apiService.fetchFeeColumn().then(data=>{
        console.log(data);
        this.columns=JSON.parse(data.data);
      }).catch(err=>{
        console.log(err,err);
      });
    this.storage.get('user').then(data=>{
      console.log('storage',data);
      if(data){
        const user=JSON.parse(data);
        this.isLoggedIn=true;
        this.userid=user.userid;
        this.storage.get('userType').then(userType=>{
          console.log(userType);
          this.userType=userType;

          if(this.userType=='Preschool'){
          console.log(user.id,userType, this.userType);
        this.apiService.userDetails(user.id,userType).then(data=>{
          console.log('fetchPreschoolStepOne',data.data);
          this.fetchPreschoolStepOne=JSON.parse(data.data);

          if(this.fetchPreschoolStepOne.id){
            if(this.fetchPreschoolStepOne.status =='Active' && this.fetchPreschoolStepOne.Approve_status =='Active'){
              this.isApproved=true;
            }
            this.isFormSubmitted=true;
            this.child_image=this.fetchPreschoolStepOne.child_img;
            this.id=this.fetchPreschoolStepOne.id;
            this.isDisabled=true;
            this.old_image=this.fetchPreschoolStepOne.child_image;
          this.preschoolRegForm.patchValue({
            branch_id:this.fetchPreschoolStepOne.branch_id,
            child_name:this.fetchPreschoolStepOne.child_name,
            pet_name:this.fetchPreschoolStepOne.pet_name,
            gender:this.fetchPreschoolStepOne.gender,
            d_o_b:this.fetchPreschoolStepOne.dob,
            //'dob_words':this.fetchPreschoolStepOne.dob_in_words,
            // 'figures':this.fetchPreschoolStepOne.dob_in_figure,
            mobile_1:this.fetchPreschoolStepOne.residence_phone,
            mobile_2:this.fetchPreschoolStepOne.emg_number,
            mother_tonge:this.fetchPreschoolStepOne.mother_tongue,
            other_languages:this.fetchPreschoolStepOne.other_lang,
            nationality:this.fetchPreschoolStepOne.nationality,
            class:this.fetchPreschoolStepOne.class,
          });
          this.isDataPresent=true;
          this.loadingController.dismiss();

        }
        else{
          this.isDataPresent=false;
          this.loadingController.dismiss();

        }
        });
      }
      else{
        this.isDataPresent=false;
        this.loadingController.dismiss();
      }
        });
      }
      else{
        this.loadingController.dismiss();
        this.isDataPresent=false;
        this.isLoggedIn = false;
        this.preschoolRegForm.reset();
      }
    });

    this.apiService.getBranches().then(data=>{
      this.branches = JSON.parse(data.data);
    });
    });
  }
  get branch_id(){
    return this.preschoolRegForm.get('branch_id');
  }

  get child_name(){
    return this.preschoolRegForm.get('child_name');
  }
  get pet_name(){
    return this.preschoolRegForm.get('pet_name');
  }
  get gender(){
    return this.preschoolRegForm.get('gender');
  }
  get d_o_b(){
    return this.preschoolRegForm.get('d_o_b');
  }
  // get dob_words(){
  //   return this.preschoolRegForm.get('dob_words')
  // }
  // get figures(){
  //   return this.preschoolRegForm.get('figures')
  // }
  get mobile_1(){
    return this.preschoolRegForm.get('mobile_1');
  }
  get mobile_2(){
    return this.preschoolRegForm.get('mobile_2');
  }
  get mother_tonge(){
    return this.preschoolRegForm.get('mother_tonge');
  }
  get other_languages(){
    return this.preschoolRegForm.get('other_languages');
  }
  get nationality(){
    return this.preschoolRegForm.get('nationality');
  }
  get class(){
    return this.preschoolRegForm.get('class');
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
  };


  this.camera.getPicture(options).then((imageData) => {
    this.file.resolveLocalFilesystemUrl(imageData).then((entry: FileEntry) => {
      entry.file(file => {
        console.log('file',file);
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
        console.log('child_file_name',this.child_file_name);

        this.child_file_name=file.name;


    };
    reader.readAsArrayBuffer(file);
  }
  previousTab(value){
    this.value = value;
  }
  async presentAlert(message) {
    const alert = await this.alertController.create({
      header: 'Successful',
      message,
      mode:'ios',
      backdropDismiss:false,
      buttons: [
        {
          text:'OK',
          handler:()=>{
            if(this.isLoggedIn){
              if(this.userType=='Preschool'){
                // this.router.navigate(['quicktour'])
                this.router.navigate(['parentsinfo']);

              }
              else{
                // this.storage.set('type','login').then(_=>{
                //   this.router.navigate(['login']);
                //   });
                this.router.navigate(['switchprofile']);

              }
            }
           else{
            this.storage.set('type','login').then(_=>{
              this.router.navigate(['login']);
              });
           }
          }
        }
      ],


    });
    await alert.present();
  }
  goBack(){
    if(this.isLoggedIn){
      if(this.isApproved){
        this.router.navigate(['quicktour']);
      }
      else{
        if(this.userType=='Preschool'){
          this.apiService.presentToast('Please wait for your registration approval',3000);
        }
        else{
        this.router.navigate(['quicktour']);

        }
      }
    }
    else{
      this.router.navigate(['login']);
    }
  }
  ionViewDidLeave(){
    this.menuCtrl.enable(true);
  }
  goToStep2(){
    if(this.isFormSubmitted){
      this.router.navigateByUrl('/parentsinfo');
    }
    else{
      this.apiService.presentToast('Please submit Registration Form to go next step',3000);
    }
  }
  goToStep3(){
    if(this.isFormSubmitted){
      this.router.navigateByUrl('/preschoolotherform');
    }
    else{
      this.apiService.presentToast('Please submit Registration Form to go next step',3000);
    }
  }
  doRefresh(event){
    this.menuCtrl.enable(false);

    this.presentLoading().then(()=>{
      this.apiService.fetchFeeColumn().then(data=>{
        console.log(data);
        this.columns=JSON.parse(data.data);
      }).catch(err=>{
        console.log(err,err);
      });
    this.storage.get('user').then(data=>{
      if(data){
        const user=JSON.parse(data);
        this.isLoggedIn=true;
        this.userid=user.userid;
        this.storage.get('userType').then(userType=>{
          this.userType=userType;

          if(this.userType=='Preschool'){
        this.apiService.userDetails(user.id,userType).then(data=>{
          event.target.complete();
          console.log('fetchPreschoolStepOne',data.data);
          this.fetchPreschoolStepOne=JSON.parse(data.data);

          if(this.fetchPreschoolStepOne.id){
            if(this.fetchPreschoolStepOne.status =='Active' && this.fetchPreschoolStepOne.Approve_status =='Active'){
              this.isApproved=true;
            }
            this.isFormSubmitted=true;
            this.child_image=this.fetchPreschoolStepOne.child_img;
            this.id=this.fetchPreschoolStepOne.id;
            this.isDisabled=true;
            this.old_image=this.fetchPreschoolStepOne.child_image;
          this.preschoolRegForm.patchValue({
            branch_id:this.fetchPreschoolStepOne.branch_id,
            child_name:this.fetchPreschoolStepOne.child_name,
            pet_name:this.fetchPreschoolStepOne.pet_name,
            gender:this.fetchPreschoolStepOne.gender,
            d_o_b:this.fetchPreschoolStepOne.dob,
            //'dob_words':this.fetchPreschoolStepOne.dob_in_words,
            // 'figures':this.fetchPreschoolStepOne.dob_in_figure,
            mobile_1:this.fetchPreschoolStepOne.residence_phone,
            mobile_2:this.fetchPreschoolStepOne.emg_number,
            mother_tonge:this.fetchPreschoolStepOne.mother_tongue,
            other_languages:this.fetchPreschoolStepOne.other_lang,
            nationality:this.fetchPreschoolStepOne.nationality,
            class:this.fetchPreschoolStepOne.class,
          });
          this.isDataPresent=true;
          this.loadingController.dismiss();

        }
        else{
          event.target.complete();
          this.isDataPresent=false;
          this.loadingController.dismiss();

        }
        });
      }
      else{
        this.isDataPresent=false;
        this.loadingController.dismiss();
      }
        });
      }
      else{
        event.target.complete();
        this.loadingController.dismiss();
        this.isDataPresent=false;
        this.isLoggedIn = false;
        this.preschoolRegForm.reset();
      }
    });

    this.apiService.getBranches().then(data=>{
      this.branches = JSON.parse(data.data);
    });
    });
  }
}

