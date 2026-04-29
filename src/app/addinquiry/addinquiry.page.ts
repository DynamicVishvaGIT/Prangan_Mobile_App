import { ApiService } from './../api.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { AlertController, MenuController } from '@ionic/angular';
import { Storage } from '@ionic/storage';
import { Router } from '@angular/router';

@Component({
  selector: 'app-addinquiry',
  templateUrl: './addinquiry.page.html',
  styleUrls: ['./addinquiry.page.scss'],
})
export class AddinquiryPage implements OnInit {
  enquiryForm: FormGroup;
  branches: any;
  isLoggedIn = false;
  todays_date=new Date().toJSON().split('T')[0];

  constructor(
    public apiService: ApiService,
    public menuCtrl: MenuController,
    public storage: Storage,
    public router: Router,
    public alertController: AlertController,


  ) { }

  ngOnInit() {
    this.menuCtrl.enable(false)

    this.enquiryForm=new FormGroup({
      branch_id:new FormControl('',[Validators.required]),   
      class:new FormControl('',[Validators.required]),
      first_name:new FormControl('',[Validators.required,Validators.pattern(/^[a-zA-Z\. ]+$/)]),  
      last_name:new FormControl('',[Validators.required,Validators.pattern(/^[a-zA-Z\. ]+$/)]),
      d_o_b:new FormControl('',[Validators.required]),
      mothers_name:new FormControl('',[Validators.required,Validators.pattern(/^[a-zA-Z\. ]+$/)]),  
      mothers_no:new FormControl('',[Validators.required,Validators.maxLength(10),Validators.minLength(10),Validators.pattern(/^[0-9]{10}$/)]),
      mothers_email:new FormControl('',[Validators.pattern(/^(?!\_)(?!_*_$)([0-9A-Za-z]+\.)*[a-zA-Z0-9_+-]+@([\w+-]+\.)*[\w+-]+\.[a-zA-Z]{2,4}$/)]),
      mothers_job_profile:new FormControl('',[Validators.required,Validators.pattern(/^[a-zA-Z\. ]+$/)]),  
      fathers_name:new FormControl('',[Validators.required,Validators.pattern(/^[a-zA-Z\. ]+$/)]),  
      fathers_no:new FormControl('',[Validators.required,Validators.maxLength(10),Validators.minLength(10),Validators.pattern(/^[0-9]{10}$/)]),
      fathers_email:new FormControl('',[Validators.pattern(/^(?!\_)(?!_*_$)([0-9A-Za-z]+\.)*[a-zA-Z0-9_+-]+@([\w+-]+\.)*[\w+-]+\.[a-zA-Z]{2,4}$/)]),
      fathers_job_profile:new FormControl('',[Validators.required,Validators.pattern(/^[a-zA-Z\. ]+$/)]),  
      siblings:new FormControl('',[Validators.pattern(/^[a-zA-Z\. ]+$/)]),  
      siblings_name:new FormControl('',[Validators.pattern(/^[a-zA-Z\. ]+$/)]),  
      sibling_d_o_b:new FormControl(''),
      // child_age:new FormControl('',[Validators.required]),
      gender:new FormControl('',[Validators.required]),  
      address:new FormControl('',[Validators.required,Validators.maxLength(100),Validators.pattern("^[a-zA-Z0-9,\/&(). ]{0,150}$")]), 
      // mobile_1:new FormControl('',[Validators.required,Validators.maxLength(10),Validators.minLength(10),Validators.pattern(/^[0-9]{10}$/)]),
      // mobile_2:new FormControl('',[Validators.required,Validators.maxLength(10),Validators.minLength(10),Validators.pattern(/^[0-9]{10}$/)]),   
      // // date:new FormControl('',[Validators.required]),  
      // email_1:new FormControl('',[Validators.required,Validators.pattern(/^(?!\_)(?!_*_$)([0-9A-Za-z]+\.)*[a-zA-Z0-9_+-]+@([\w+-]+\.)*[\w+-]+\.[a-zA-Z]{2,4}$/)]),
      // email_2:new FormControl('',[Validators.required,Validators.pattern(/^(?!\_)(?!_*_$)([0-9A-Za-z]+\.)*[a-zA-Z0-9_+-]+@([\w+-]+\.)*[\w+-]+\.[a-zA-Z]{2,4}$/)]),   
      q1:new FormControl('',[Validators.required]),
    })
  }
  get branch_id(){
    return this.enquiryForm.get('branch_id')
  }
  get class(){
    return this.enquiryForm.get('class')
  }
  get first_name(){
    return this.enquiryForm.get('first_name')
  }
  get last_name(){
    return this.enquiryForm.get('last_name')
  }
  get d_o_b(){
    return this.enquiryForm.get('d_o_b')
  }
  // get child_age(){
  //   return this.enquiryForm.get('child_age')
  // }
  get gender(){
    return this.enquiryForm.get('gender')
  }
  get address(){
    return this.enquiryForm.get('address')
  }
  // get mobile_1(){
  //   return this.enquiryForm.get('mobile_1')
  // }
  // get mobile_2(){
  //   return this.enquiryForm.get('mobile_2')
  // }
  // get date(){
  //   return this.enquiryForm.get('date')
  // }
  // get email_1(){
  //   return this.enquiryForm.get('email_1')
  // }
  // get email_2(){
  //   return this.enquiryForm.get('email_2')
  // }
  get q1(){
    return this.enquiryForm.get('q1')
  }
  get mothers_name(){
    return this.enquiryForm.get('mothers_name')
  }
  get mothers_no(){
    return this.enquiryForm.get('mothers_no')
  }
  get mothers_email(){
    return this.enquiryForm.get('mothers_email')
  }
  get mothers_job_profile(){
    return this.enquiryForm.get('mothers_job_profile')
  }
  get fathers_name(){
    return this.enquiryForm.get('fathers_name')
  }
  get fathers_no(){
    return this.enquiryForm.get('fathers_no')
  }
  get fathers_email(){
    return this.enquiryForm.get('fathers_email')
  }
  get fathers_job_profile(){
    return this.enquiryForm.get('fathers_job_profile')
  }
  get siblings(){
    return this.enquiryForm.get('siblings')
  }
  get siblings_name(){
    return this.enquiryForm.get('siblings_name')
  }
  get sibling_d_o_b(){
    return this.enquiryForm.get('sibling_d_o_b')
  }
  ionViewDidEnter(){
    this.apiService.getBranches().then(data=>{
      this.branches = JSON.parse(data.data);
    })
  }
  onSubmit(body){
    body['date']=new Date()
    console.log('body',body);

    this.apiService.addEnquiry(body).then(data=>{
      console.log('data',data);
      this.presentAlert('Enquiry added succsessfully')
      this.enquiryForm.reset({
        branch_id:'',   
        class:'',
        first_name:'',
        last_name:'',
        d_o_b:'',
        child_age:'',
        gender:'', 
        address:'',
        mobile_1:'',
        mobile_2:'',
        email_1:'',
        email_2:'',
        q1:'',
      })
    }).catch(err=>{
      this.apiService.presentToast(err,2000)
    })
  }
  ionViewWillEnter(){
    if(this.menuCtrl.isEnabled){
      console.log('hi')
      this.menuCtrl.swipeGesture(false)
    }
    this.storage.get('user').then((data) => {
      if (data) {
        this.isLoggedIn = true;
      }
    })
  }
  ionViewDidLeave(){
    this.menuCtrl.enable(true);
  }
  goBack() {
    if(this.isLoggedIn){
      this.router.navigate(['quicktour'])
    }
    else{
      this.router.navigate(['login'])
    }
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
            if (this.isLoggedIn) {
              this.router.navigate(['quicktour'])
            }
            else{
              this.storage.set('type','login').then(_=>{
                this.router.navigate(['login']);
                });
            }
          },
        },
      ],
    });
    await alert.present();
  }
  ageFromDOB(dateOfBirth) {
    var birthdate=new Date(dateOfBirth.detail.value)
    var timeDiff = Math.abs(new Date().getTime() - new Date(birthdate).getTime());
    var age = Math.floor((timeDiff / (1000 * 3600 * 24))/365);
    this.enquiryForm.patchValue({child_age:age})

  }
}
