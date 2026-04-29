import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ActionSheetController, AlertController, LoadingController } from '@ionic/angular';
import { ApiService } from './../api.service';
import { Storage } from '@ionic/storage';
import { Camera, CameraOptions } from '@ionic-native/camera/ngx';
import { File,FileEntry } from '@ionic-native/file/ngx';
import { ChangeDetectorRef} from '@angular/core';
import { MenuController } from '@ionic/angular';

@Component({
  selector: 'app-childotherinfotwo',
  templateUrl: './childotherinfotwo.page.html',
  styleUrls: ['./childotherinfotwo.page.scss'],
})
export class ChildotherinfotwoPage implements OnInit {
  accordion_expanded = false;
  stepFourForm: FormGroup;
  userid;
  isDataPresent: any;
  fetchDayCareStep4: any;
  child_consent_id: any;
  image1_file_name: string;
  image1base64Image: any;
  image2_file_name: string;
  image2base64Image: any;
  image1imgBlob: Blob;
  image2imgBlob: Blob;
  old_image1: any;
  old_image2: any;
  img1: any;
  img2: any;
  modified_filename: string;
  fetchDayCareStep1: any;

  constructor(
    public storage: Storage,
    public apiService: ApiService,
    public actionSheetController: ActionSheetController,
    public alertController: AlertController,
    public router: Router,
    private file: File,
    private camera: Camera,
    private cf: ChangeDetectorRef,
    public loadingController: LoadingController,
    public menuCtrl: MenuController


  ) { }

  ngOnInit() {
    this.menuCtrl.enable(false);

    this.stepFourForm= new FormGroup({
      q1_ans:new FormControl('',[Validators.required,Validators.pattern(/^[a-zA-Z\. ]+$/)]),
      q2_ans:new FormControl('',[Validators.pattern(/^[a-zA-z -]+$/)]),
      q3_ans:new FormControl(''),
      q5_ans:new FormControl('',[Validators.maxLength(10),Validators.minLength(10),Validators.pattern(/^[0-9]{10}$/)]), 
      q6_ans:new FormControl('',[Validators.pattern(/^[a-zA-Z\. ]+$/)]),
      q7_ans:new FormControl('',[Validators.pattern(/^[a-zA-z -]+$/)]),
      q8_ans:new FormControl(''),
      q10_ans:new FormControl('',[Validators.maxLength(10),Validators.minLength(10),Validators.pattern(/^[0-9]{10}$/)]),
      q11_ans:new FormControl(''), 
     
      // old_image1:new FormControl('',[Validators.required]),
      // old_image2:new FormControl('',[Validators.required]),      
      // q4_ans=$_FILES['q4_ans']['name'];
      // q4_tmp_ans=$_FILES['q4_ans']['tmp_name'];
      // q9_ans=$_FILES['q9_ans']['name'];
      // q9_tmp_ans=$_FILES['q9_ans']['tmp_name'];
    })
  }
  toggle_accordion() {
    this.accordion_expanded = this.accordion_expanded === false;
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
  get q1_ans(){
    return this.stepFourForm.get('q1_ans')
  }
  get q2_ans(){
    return this.stepFourForm.get('q2_ans')
  }
  get q3_ans(){
    return this.stepFourForm.get('q3_ans')
  }
  get q5_ans(){
    return this.stepFourForm.get('q5_ans')
  }
  get q6_ans(){
    return this.stepFourForm.get('q6_ans')
  }
  get q7_ans(){
    return this.stepFourForm.get('q7_ans')
  }
  get q8_ans(){
    return this.stepFourForm.get('q8_ans')
  }
  get q10_ans(){
    return this.stepFourForm.get('q10_ans')
  }
  get q11(){
    return this.stepFourForm.get('q11_ans')
  }
 
  // get old_image1(){
  //   return this.stepFourForm.get('old_image1')
  // }
  // get old_image2(){
  //   return this.stepFourForm.get('old_image2')
  // }
  onSubmit(body){
    this.presentLoading()
    console.log('body',body)
    const formData = new FormData();
    formData.append("userid", this.userid)
    formData.append("q1_ans", body['q1_ans'])
    formData.append("q2_ans", body['q2_ans'])
    formData.append("q3_ans", body['q3_ans'])
    formData.append("q5_ans", body['q5_ans'])
    formData.append("q6_ans", body['q6_ans'])
    formData.append("q7_ans", body['q7_ans'])
    formData.append("q8_ans", body['q8_ans'])
    formData.append("q10_ans", body['q10_ans'])
    formData.append("q11_ans", body['q11_ans'])
  
    if(this.isDataPresent){
      console.log("data present")
      formData.append("child_consent_id", this.child_consent_id)
      formData.append("old_image1", this.old_image1)
      formData.append("old_image2", this.old_image2)
      if( this.image1imgBlob){
        formData.append("q4_ans", this.image1imgBlob,this.image1_file_name)
      }
      if( this.image2imgBlob){
        formData.append("q9_ans", this.image2imgBlob,this.image2_file_name)
      }

      this.apiService.updateDaycareRegStep4(formData).subscribe(data => {
        console.log('data',data);
        this.loadingController.dismiss()
        this.presentAlert("Daycare Step 4 form submitted successfully")
        this.stepFourForm.reset()
      },err=>{
        console.log(err);
        console.log(err.status);
        this.loadingController.dismiss()
        // if (err.status == 200){
          
        // }else{
        //   console.log(JSON.parse(err.error.text));

        //   this.apiService.presentToast(err.error,2000);
        // } 
      })
    }
    else{
      console.log("data not present")
      formData.append("child_consent_id", this.child_consent_id)
      if( this.image1imgBlob){
        formData.append("q4_ans", this.image1imgBlob,this.image1_file_name)
      }
      if( this.image2imgBlob){

        formData.append("q9_ans", this.image2imgBlob,this.image2_file_name)
      }
      console.log(formData.get('q4_ans'));
        console.log(formData.get('q9_ans'));
      this.apiService.daycareRegistrationStep4(formData).subscribe(data => {
        console.log(data)
        this.loadingController.dismiss()
          this.presentAlert("Daycare Step 4 form submitted successfully")
          this.stepFourForm.reset()
          console.log(data);
      },err=>{
        console.log(err);
        console.log(err.status);
        this.loadingController.dismiss()
      })
    }
  
  }

  ionViewDidEnter(){
    this.menuCtrl.enable(false);

    this.presentLoading().then(()=>{

    this.storage.get('user').then(data=>{
      if(data){
        var user=JSON.parse(data)
        this.userid=user.id
        console.log('userid',this.userid,user.userid)
        this.apiService.fetchDayCareStep4(this.userid).then(data=>{
          console.log('fetchDayCareStep4',data.data);
          var fetchDayCareStep4=JSON.parse(data.data)
          if(fetchDayCareStep4){
            this.fetchDayCareStep4=fetchDayCareStep4['a']
            if(this.fetchDayCareStep4){
            this.child_consent_id=this.fetchDayCareStep4.id
            this.img1=this.fetchDayCareStep4.img1
            this.img2=this.fetchDayCareStep4.img2
            this.old_image1=this.fetchDayCareStep4.image1
            this.old_image2=this.fetchDayCareStep4.image2
          this.stepFourForm.patchValue({
            'q1_ans':this.fetchDayCareStep4.name1,
            'q2_ans':this.fetchDayCareStep4.relationship1,
            'q3_ans':this.fetchDayCareStep4.address1,
            'q5_ans':this.fetchDayCareStep4.mobile_number1,
            'q6_ans':this.fetchDayCareStep4.name2,
            'q7_ans':this.fetchDayCareStep4.relationship2,
            'q8_ans':this.fetchDayCareStep4.address2,
            'q10_ans':this.fetchDayCareStep4.mobile_number2,
            'q11_ans':this.fetchDayCareStep4.q1,
          
           
          })
          this.isDataPresent=true
          this.loadingController.dismiss()
        }
        else{
          this.isDataPresent=false
          this.loadingController.dismiss()
        }
        }
        else{
          this.isDataPresent=false
          this.loadingController.dismiss()


        }
        })

      }
    })
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
            this.apiService.userDetails(this.userid,'Daycare').then(data=>{
              console.log(this.fetchDayCareStep1)
              this.fetchDayCareStep1=JSON.parse(data.data)
              if(this.fetchDayCareStep1.status =='Active' && this.fetchDayCareStep1.Approve_status =='Active'){
                this.router.navigate(['quicktour'])
              }
              else{
                this.apiService.presentToast('Please wait for your registration approval',2000)
                this.router.navigate(['switchprofile']);

                // this.storage.set('type','login').then(_=>{
                //   });
              }
            })
          }
        }
      ],

      
    });
    await alert.present();
  }
  async presentActionSheet(type) {
    const actionSheet = await this.actionSheetController.create({
      header: 'Options',
      cssClass: 'action-sheets-basic-page',
      buttons: [
        {
          text: 'Take photo',
          role: 'destructive',
          icon: 'camera-outline',
          handler: () => {
            if (type=='image1'){
              this.takePicture('image1');

            }
            else if (type=='image2'){
              this.takePicture('image2');
              
            }
            
          }
        },
        {
          text: 'Choose photo from Gallery',
          icon: 'images-outline',
          handler: () => {
            if (type=='image1'){
              this.openGallery('image1');

            }
            else if (type=='image2'){
              this.openGallery('image2');
              
            }
          
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
      if(type=='image1'){
        this.image1_file_name=file.name
        this.image1base64Image = (<any>window).Ionic.WebView.convertFileSrc(imageData);
      }
      else if(type=='image2'){
        this.image2_file_name=file.name
        this.image2base64Image = (<any>window).Ionic.WebView.convertFileSrc(imageData);
      }
      

      this.cf.detectChanges();
      this.readFile(file,type);
    });
  });
  }, (err) => {
    this.image1base64Image= null;      
    this.image2base64Image= null;      
       
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
        console.log(file);
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
        if(type=='image1'){
          this.image1_file_name=this.modified_filename
          this.image1base64Image = (<any>window).Ionic.WebView.convertFileSrc(imageData);
        }
        else if(type=='image2'){
          this.image2_file_name=this.modified_filename
          this.image2base64Image = (<any>window).Ionic.WebView.convertFileSrc(imageData);
        }
        
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
      if(type=='image1'){
        this.image1imgBlob = new Blob([reader.result], {
          type: file.type
        });
      }
      else if(type=='image2'){
        this.image2imgBlob = new Blob([reader.result], {
          type: file.type
        });
      }
    
      
     console.log("name",file.name)
     
     
    };
    reader.readAsArrayBuffer(file);
  }
  ionViewDidLeave() {
    this.menuCtrl.enable(true);
  }
  ionViewWillEnter(){
    if(this.menuCtrl.isEnabled){
      console.log('hi')
      this.menuCtrl.swipeGesture(false)
    }
  }
}
