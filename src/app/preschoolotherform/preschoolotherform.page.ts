import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';
import { Storage } from '@ionic/storage';
import { Router } from '@angular/router';
import { AlertController, LoadingController } from '@ionic/angular';
import { MenuController } from '@ionic/angular';

@Component({
  selector: 'app-preschoolotherform',
  templateUrl: './preschoolotherform.page.html',
  styleUrls: ['./preschoolotherform.page.scss'],
})
export class PreschoolotherformPage implements OnInit {
  preschoolStepThreeForm: FormGroup;
  id: any;
  fetchPreschoolRegStep3data: any;
  form_data_id: any;
  isDataPresent: boolean;
  fetchPreschoolStepOne: any;

  constructor(
    public storage: Storage,
    public apiService:ApiService,
    public router: Router,
    public alertController: AlertController,
    public loadingController: LoadingController,
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
  ionViewDidEnter(){
    this.menuCtrl.enable(false);

    this.presentLoading().then(()=>{

    this.storage.get('user').then(data=>{
      this.id=JSON.parse(data).id
      this.apiService.fetchPreschoolRegStep3(this.id).then(data=>{
        console.log('fetchPreschoolRegStep3',data);
        this.fetchPreschoolRegStep3data=JSON.parse(data.data)
        if(this.fetchPreschoolRegStep3data.id){
          this.form_data_id=this.fetchPreschoolRegStep3data.id
          this.preschoolStepThreeForm.patchValue({
            q1_ans:this.fetchPreschoolRegStep3data.q1,
            q2_ans:this.fetchPreschoolRegStep3data.q2,
            q3_ans:this.fetchPreschoolRegStep3data.q3,
            q4_ans:this.fetchPreschoolRegStep3data.q4,
            q5_ans:this.fetchPreschoolRegStep3data.q5,
            q6_ans:this.fetchPreschoolRegStep3data.q6,
            q7_ans:this.fetchPreschoolRegStep3data.q7,
            q8_ans:this.fetchPreschoolRegStep3data.q8,
            q9_ans:this.fetchPreschoolRegStep3data.q9,
            q10_ans:this.fetchPreschoolRegStep3data.q10,
            q11_ans:this.fetchPreschoolRegStep3data.q11,
            q12_ans:this.fetchPreschoolRegStep3data.q12,
            q13_ans:this.fetchPreschoolRegStep3data.q13,

          })
        this.isDataPresent=true
        this.loadingController.dismiss()

        }
        else{
          this.isDataPresent=false
          this.loadingController.dismiss()

        }

      }).catch(err=>{
        console.log('err',err);
      })
    })
    })
  }
  ngOnInit() {
    this.preschoolStepThreeForm=new FormGroup({
      q1_ans:new FormControl('',Validators.required),
      q2_ans:new FormControl(''),   
      q3_ans:new FormControl(''),
      q4_ans:new FormControl(''), 
      q5_ans:new FormControl(''),
      q6_ans:new FormControl(''),   
      q7_ans:new FormControl(''),
      q8_ans:new FormControl(''),
      q9_ans:new FormControl(''),
      q10_ans:new FormControl(''),    
      q11_ans:new FormControl(''),
      q12_ans:new FormControl(''),   
      q13_ans:new FormControl('')
    })
  }
  get q1_ans(){
    return this.preschoolStepThreeForm.get('q1_ans')
  }
  get q2_ans(){
    return this.preschoolStepThreeForm.get('q2_ans')
  }
  get q3_ans(){
    return this.preschoolStepThreeForm.get('q3_ans')
  }
  get q4_ans(){
    return this.preschoolStepThreeForm.get('q4_ans')
  }
  get q5_ans(){
    return this.preschoolStepThreeForm.get('q5_ans')
  }
  get q6_ans(){
    return this.preschoolStepThreeForm.get('q6_ans')
  }
  get q7_ans(){
    return this.preschoolStepThreeForm.get('q7_ans')
  }
  get q8_ans(){
    return this.preschoolStepThreeForm.get('q8_ans')
  }
  get q9_ans(){
    return this.preschoolStepThreeForm.get('q9_ans')
  }
  get q10_ans(){
    return this.preschoolStepThreeForm.get('q10_ans')
  }
  get q11_ans(){
    return this.preschoolStepThreeForm.get('q11_ans')
  }
  get q12_ans(){
    return this.preschoolStepThreeForm.get('q12_ans')
  }
  get q13_ans(){
    return this.preschoolStepThreeForm.get('q13_ans')
  }
  onSubmit(body){
   this.presentLoading()
    console.log('body', body);
    const formData = new FormData();
    formData.append("q1_ans", body['q1_ans'])
    formData.append("q2_ans", body['q2_ans'])
    formData.append("q3_ans", body['q3_ans'])
    formData.append("q4_ans", body['q4_ans'])
    formData.append("q5_ans", body['q5_ans'])
    formData.append("q6_ans", body['q6_ans'])
    formData.append("q7_ans", body['q7_ans'])
    formData.append("q8_ans", body['q8_ans'])
    formData.append("q9_ans", body['q9_ans'])
    formData.append("q10_ans", body['q10_ans'])
    formData.append("q11_ans", body['q11_ans'])
    formData.append("q12_ans", body['q12_ans'])
    formData.append("q13_ans", body['q13_ans'])
    formData.append("child2", body['child2'])
  
    if(this.isDataPresent){
    formData.append("userid",this.id)
    formData.append("id", this.form_data_id)

      this.apiService.updatePreschoolRegStep3(formData).subscribe(data => {
        console.log('data',data);
        this.loadingController.dismiss()

          this.presentAlert("Form updated successfully")
  
          console.log(data);
      },err=>{
        console.log(err,"enter error");
        this.loadingController.dismiss()
        this.apiService.userDetails(this.id,'Preschool').then(data=>{
          this.fetchPreschoolStepOne=JSON.parse(data.data)
          console.log(this.fetchPreschoolStepOne)
          console.log(this.fetchPreschoolStepOne.status,this.fetchPreschoolStepOne.Approve_status)
          // console.log(this.fetchPreschoolStepOne.status,this.fetchPreschoolStepOne.Approve_status)
        })
        // this.apiService.presentToast(err.error,2000);
      })
    }
    else{
    formData.append("userid",this.id)

      this.apiService.preschoolRegStep3(formData).subscribe(data => {
        console.log('data',data);
        this.loadingController.dismiss()

          this.presentAlert("Form submitted successfully")
          this.preschoolStepThreeForm.reset()
  
          console.log(data);
      },err=>{
        console.log(err,"enter error");
        this.loadingController.dismiss()
        this.apiService.presentToast(err.error,2000);
        this.apiService.userDetails(this.id,'Preschool').then(data=>{
          this.fetchPreschoolStepOne=JSON.parse(data.data)
          console.log(this.fetchPreschoolStepOne)
          
          console.log(this.fetchPreschoolStepOne.status,this.fetchPreschoolStepOne.Approve_status)
        })
      })
    }
   
 
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
            this.apiService.userDetails(this.id,'Preschool').then(data=>{
              this.fetchPreschoolStepOne=JSON.parse(data.data)
              if(this.fetchPreschoolStepOne.status =='Active' && this.fetchPreschoolStepOne.Approve_status =='Active'){
                this.router.navigate(['quicktour'])
                // this.router.navigate(['switchprofile'])
              }
              else{
                this.apiService.presentToast('Please wait for your registration approval',2000)
                this.router.navigate(['switchprofile'])
                // this.storage.set('type','login').then(_=>{
                //   this.router.navigate(['login']);
                //   });
              }
            })
          }
        }
      ],

      
    });
    await alert.present();
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
