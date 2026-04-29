import { Storage } from '@ionic/storage';
import { ApiService } from './../api.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ActionSheetController, AlertController, LoadingController } from '@ionic/angular';
import { MenuController } from '@ionic/angular';

@Component({
  selector: 'app-childprofile',
  templateUrl: './childprofile.page.html',
  styleUrls: ['./childprofile.page.scss'],
})
export class ChildprofilePage implements OnInit {
  accordion_expanded = false;
  steptwoForm: FormGroup;
  fetchDayCareStep2: any;
  userid;
  isDataPresent: boolean;
  child_evn_id: any;
  child_medical_id: any;
  fetchDayCareStep2_env: any;
  fetchDayCareStep2_med: any;
  isFormSubmitted=false;

  constructor(
    public storage: Storage,
    public apiService: ApiService,
    public actionSheetController: ActionSheetController,
    public alertController: AlertController,
    public router: Router,
    public loadingController: LoadingController,
    public menuCtrl: MenuController

  ) { }

  ngOnInit() {
    this.menuCtrl.enable(false);

    this.steptwoForm=new FormGroup({
        q1:new FormControl('',Validators.required),
        q2:new FormControl(''), 
        q2_ans:new FormControl(''),
        q3:new FormControl(''),
        q4:new FormControl(''),
        q5:new FormControl(''),
        q6:new FormControl(''),
        q6_ans:new FormControl(''), 
        q7:new FormControl(''),
        q8:new FormControl(''),
        q9:new FormControl(''),
        q1_med:new FormControl('',[Validators.pattern(/^[a-zA-Z\. ]+$/)]),
        q2_med:new FormControl(''),
        q3_med:new FormControl('',[Validators.pattern(/((\+*)((0[ -]*)*|((91 )*))((\d{12})+|(\d{10})+))|\d{5}([- ]*)\d{6}/)]),
        q4_med:new FormControl(''),
        q4_med_ans:new FormControl(''),
        q5_med_ans:new FormControl(''),
        q6_med:new FormControl(''),
        q7_med:new FormControl(''),
        q8_med:new FormControl(''),
        q9_med:new FormControl(''),
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
  get q1(){
    return this.steptwoForm.get('q1')
  }
  get q2(){
    return this.steptwoForm.get('q2')
  }
  get q2_ans(){
    return this.steptwoForm.get('q2_ans')
  }
  get q3(){
    return this.steptwoForm.get('q3')
  }
  get q4(){
    return this.steptwoForm.get('q4')
  }
  get q5(){
    return this.steptwoForm.get('q5')
  }
  get q6(){
    return this.steptwoForm.get('q6')
  }
  get q6_ans(){
    return this.steptwoForm.get('q6_ans')
  }
  get q7(){
    return this.steptwoForm.get('q7')
  }
  get q8(){
    return this.steptwoForm.get('q8')
  }
  get q9(){
    return this.steptwoForm.get('q9')
  }
  get q1_med(){
    return this.steptwoForm.get('q1_med')
  }
  get q2_med(){
    return this.steptwoForm.get('q2_med')
  }
  get q3_med(){
    return this.steptwoForm.get('q3_med')
  }
  get q4_med(){
    return this.steptwoForm.get('q4_med')
  }
  get q4_med_ans(){
    return this.steptwoForm.get('q4_med_ans')
  }
  get q5_med_ans(){
    return this.steptwoForm.get('q5_med_ans')
  }
  get q6_med(){
    return this.steptwoForm.get('q6_med')
  }
  get q7_med(){
    return this.steptwoForm.get('q7_med')
  }
  get q8_med(){
    return this.steptwoForm.get('q8_med')
  }
  get q9_med(){
    return this.steptwoForm.get('q9_med')
  }
  onSubmit(body){
    this.presentLoading()
    console.log('body',body)
    const formData = new FormData();
    formData.append("userid", this.userid)
    formData.append("q1", body['q1'])
    formData.append("q2", body['q2'])
    formData.append("q2_ans", body['q2_ans'])
    formData.append("q3", body['q3'])
    formData.append("q4", body['q4'])
    formData.append("q5", body['q5'])
    formData.append("q6", body['q6'])
    formData.append("q6_ans", body['q6_ans'])
    formData.append("q7", body['q7'])
    formData.append("q8", body['q8'])
    formData.append("q9", body['q9'])
    formData.append("q1_med", body['q1_med'])
    formData.append("q2_med", body['q2_med'])
    formData.append("q3_med", body['q3_med'])
    formData.append("q4_med", body['q4_med'])
    formData.append("q4_med_ans", body['q4_med_ans'])
    formData.append("q5_men_ans", body['q5_med_ans'])
    formData.append("q6_med", body['q6_med'])
    formData.append("q7_med", body['q7_med'])
    formData.append("q8_med", body['q8_med'])
    formData.append("q9_med", body['q9_med'])
    if(this.isDataPresent){
    formData.append("child_evn_id",this.child_evn_id)
    formData.append("child_medical_id",this.child_medical_id)
      
      this.apiService.updateDaycareRegStep2(formData).subscribe(data => {
        console.log('data',data);
        this.loadingController.dismiss()

          this.presentAlert("Daycare Step 2 form updated successfully")
          // this.steptwoForm.reset()
          console.log(data);
      },err=>{
        console.log(err);
        this.loadingController.dismiss()

        this.apiService.presentToast(err.error,2000);
      })
    }
    else{
      this.apiService.daycareRegistrationStep2(formData).subscribe(data => {
        console.log('data',data);
        this.loadingController.dismiss()

          this.presentAlert("Daycare Step 2 form submitted successfully")
          this.steptwoForm.reset()
          console.log(data);
      },err=>{
        console.log(err);
        this.loadingController.dismiss()

        this.apiService.presentToast(err.error,2000);
      })
    }
  
  }
  ionViewWillEnter(){
    if(this.menuCtrl.isEnabled){
      console.log('hi')
      this.menuCtrl.swipeGesture(false)
    }
  }
  ionViewDidEnter(){

    this.presentLoading().then(()=>{
    this.storage.get('user').then(data=>{
      if(data){
        var user=JSON.parse(data)
        this.userid=user.id
        console.log('userid',this.userid,user.userid)
        this.apiService.fetchDayCareStep2(this.userid).then(data=>{
          console.log('fetchDayCareStep2',data.data);
          var fetchDayCareStep2=JSON.parse(data.data)
       
          if(fetchDayCareStep2){

            this.fetchDayCareStep2_env=fetchDayCareStep2['a']
            this.fetchDayCareStep2_med=fetchDayCareStep2['b']
            if(this.fetchDayCareStep2_env && this.fetchDayCareStep2_med){
          this.isFormSubmitted=true

            console.log(' this.fetchDayCareStep2', this.fetchDayCareStep2_env,this.fetchDayCareStep2_med);
            this.child_evn_id=this.fetchDayCareStep2_env.id
            this.child_medical_id=this.fetchDayCareStep2_med.id
          this.steptwoForm.patchValue({
            'q1':this.fetchDayCareStep2_env.room,
            'q2':this.fetchDayCareStep2_env.playgroup,
            'q2_ans':this.fetchDayCareStep2_env.playgroup_specify,
            'q3':this.fetchDayCareStep2_env.playmentes_specify,
            'q4':this.fetchDayCareStep2_env.tv,
            'q5':this.fetchDayCareStep2_env.play,
            'q6':this.fetchDayCareStep2_env.pets,
            'q6_ans':this.fetchDayCareStep2_env.pets_specify,
            'q7':this.fetchDayCareStep2_env.indoor_activity,
            'q8':this.fetchDayCareStep2_env.outdoor_activity,
            'q9':this.fetchDayCareStep2_env.child_favorite,
            'q1_med':this.fetchDayCareStep2_med.pediatricians_name,
            'q2_med':this.fetchDayCareStep2_med.address,
            'q3_med':this.fetchDayCareStep2_med.telephone_number,
            'q4_med':this.fetchDayCareStep2_med.allergic_reaction,
            'q4_med_ans':this.fetchDayCareStep2_med.allergies,
            'q5_med_ans':this.fetchDayCareStep2_med.allergies_usually_mainfest,
            'q6_med':this.fetchDayCareStep2_med.allergic_reaction,
            'q7_med':this.fetchDayCareStep2_med.fever,
            'q8_med':this.fetchDayCareStep2_med.chile_prone,
            'q9_med':this.fetchDayCareStep2_med.question,
           
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
            this.router.navigate(['childotherinfo'])
          }
        }
      ],

      
    });
    await alert.present();
  }
  ionViewDidLeave() {
    this.menuCtrl.enable(true);
  }
  goToNextStep(){
    if(this.isFormSubmitted){
      this.router.navigate(['childotherinfo'])

    }
    else{
      this.apiService.presentToast('Please submit  form to go next step',3000)
    }
  }
}
