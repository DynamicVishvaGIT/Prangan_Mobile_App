import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { Storage } from '@ionic/storage';
import { ApiService } from './../api.service';
import { Router } from '@angular/router';
import { ActionSheetController, AlertController, LoadingController } from '@ionic/angular';
import { MenuController } from '@ionic/angular';

@Component({
  selector: 'app-childotherinfo',
  templateUrl: './childotherinfo.page.html',
  styleUrls: ['./childotherinfo.page.scss'],
})
export class ChildotherinfoPage implements OnInit {
  accordion_expanded = false;
  stepThreeForm: FormGroup;
  isDataPresent: any;
  fetchDayCareStep3: any;
  userid;
  child_food_id: any;
  child_physical_id: any;
  fetchDayCareStep3_food: any;
  fetchDayCareStep3_phy: any;
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

    this.stepThreeForm=new FormGroup({
      q1:new FormControl('',Validators.required), 
      q2:new FormControl(''),
      q3:new FormControl(''), 
      q4:new FormControl(''),
      q5:new FormControl(''), 
      q6:new FormControl(''),
      q7:new FormControl(''),
      q1_tol:new FormControl('',Validators.required),
      q2_tol:new FormControl(''), 
      q3_tol:new FormControl(''),
      q4_tol:new FormControl(''), 
      q5_tol:new FormControl(''),
      q6_tol:new FormControl(''), 
      q7_tol:new FormControl(''),
      q1_sp:new FormControl(''), 
      q2_sp:new FormControl(''),
      q3_sp:new FormControl(''), 
      q4_sp:new FormControl(''),
      q5_sp:new FormControl(''),  
      q6_sp:new FormControl(''),
      q7_sp:new FormControl(''),  
      q8_sp:new FormControl(''),
      q9_sp:new FormControl(''),
      q10_sp:new FormControl('')
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
    return this.stepThreeForm.get('q1')
  }
  get q2(){
    return this.stepThreeForm.get('q2')
  }
  get q3(){
    return this.stepThreeForm.get('q3')
  }
  get q4(){
    return this.stepThreeForm.get('q4')
  }
  get q5(){
    return this.stepThreeForm.get('q5')
  }
  get q6(){
    return this.stepThreeForm.get('q6')
  }
  get q7(){
    return this.stepThreeForm.get('q7')
  }
  get q1_tol(){
    return this.stepThreeForm.get('q1_tol')
  }
  get q2_tol(){
    return this.stepThreeForm.get('q2_tol')
  }
  get q3_tol(){
    return this.stepThreeForm.get('q3_tol')
  }
  get q4_tol(){
    return this.stepThreeForm.get('q4_tol')
  }
  get q5_tol(){
    return this.stepThreeForm.get('q5_tol')
  }
  get q6_tol(){
    return this.stepThreeForm.get('q6_tol')
  }
  get q7_tol(){
    return this.stepThreeForm.get('q7_tol')
  }
  get q1_sp(){
    return this.stepThreeForm.get('q1_sp')
  }
  get q2_sp(){
    return this.stepThreeForm.get('q2_sp')
  }
  get q3_sp(){
    return this.stepThreeForm.get('q3_sp')
  }
  get q4_sp(){
    return this.stepThreeForm.get('q4_sp')
  }
  get q5_sp(){
    return this.stepThreeForm.get('q5_sp')
  }
  get q6_sp(){
    return this.stepThreeForm.get('q6_sp')
  }
  get q7_sp(){
    return this.stepThreeForm.get('q7_sp')
  }
  get q8_sp(){
    return this.stepThreeForm.get('q8_sp')
  }
  get q9_sp(){
    return this.stepThreeForm.get('q9_sp')
  }
  get q10_sp(){
    return this.stepThreeForm.get('q10_sp')
  }
  onSubmit(body){
    this.presentLoading()
    console.log('body',body)
    const formData = new FormData();
    formData.append("userid", this.userid)
    formData.append("q1", body['q1'])
    formData.append("q2", body['q2'])
    formData.append("q3", body['q3'])
    formData.append("q4", body['q4'])
    formData.append("q5", body['q5'])
    formData.append("q6", body['q6'])
    formData.append("q7", body['q7'])
    formData.append("q1_tol", body['q1_tol'])
    formData.append("q2_tol", body['q2_tol'])
    formData.append("q3_tol", body['q3_tol'])
    formData.append("q4_tol", body['q4_tol'])
    formData.append("q5_tol", body['q5_tol'])
    formData.append("q6_tol", body['q6_tol'])
    formData.append("q7_tol", body['q7_tol'])
    formData.append("q1_sp", body['q1_sp'])
    formData.append("q2_sp", body['q2_sp'])
    formData.append("q3_sp", body['q3_sp'])
    formData.append("q4_sp", body['q4_sp'])
    formData.append("q5_sp", body['q5_sp'])
    formData.append("q6_sp", body['q6_sp'])
    formData.append("q7_sp", body['q7_sp'])
    formData.append("q8_sp", body['q8_sp'])
    formData.append("q9_sp", body['q9_sp'])
    formData.append("q10_sp", body['q10_sp'])
    if(this.isDataPresent){
      formData.append("child_food_id",this.child_food_id)
      formData.append("child_physical_id",this.child_physical_id)
      this.apiService.updateDaycareRegStep3(formData).subscribe(data => {
        console.log('data',data);
        this.loadingController.dismiss()

          this.presentAlert("Daycare Step 3 form updated successfully")
          // this.stepThreeForm.reset()
          console.log(data);
      },err=>{
        console.log(err);
        this.loadingController.dismiss()

        this.apiService.presentToast(err.error,2000);
      })
    }
    else{
      this.apiService.daycareRegistrationStep3(formData).subscribe(data => {
        console.log('data',data);
        this.loadingController.dismiss()

          this.presentAlert("Daycare Step 3 form submitted successfully")
          this.stepThreeForm.reset()
          console.log(data);
      },err=>{
        console.log(err);

        this.loadingController.dismiss()
        console.log(JSON.parse(err.error.message))
        this.apiService.presentToast(JSON.parse(err.error.message),2000);
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
        console.log('userid',this.userid)
        this.apiService.fetchDayCareStep3(this.userid).then(data=>{
          console.log('fetchDayCareStep3',data.data);
          var fetchDayCareStep3=JSON.parse(data.data)
          if(fetchDayCareStep3){
            this.fetchDayCareStep3_food=fetchDayCareStep3['a']
            this.fetchDayCareStep3_phy=fetchDayCareStep3['b']
            if(this.fetchDayCareStep3_food && this.fetchDayCareStep3_phy){
              this.isFormSubmitted=true

          this.child_food_id=this.fetchDayCareStep3_food.id
          this.child_physical_id=this.fetchDayCareStep3_phy.id

          this.stepThreeForm.patchValue({
            'q1':this.fetchDayCareStep3_food.child_behaviour,
            'q2':this.fetchDayCareStep3_food.is_the_child,
            'q3':this.fetchDayCareStep3_food.dietary_requirements,
            'q4':this.fetchDayCareStep3_food.meal,
            'q5':this.fetchDayCareStep3_food.food,
            'q6':this.fetchDayCareStep3_food.child_feed,
            'q7':this.fetchDayCareStep3_food.attitude,
            'q1_tol':this.fetchDayCareStep3_food.attitude,
            'q2_tol':this.fetchDayCareStep3_food.toilet_hobits_q2,
            'q3_tol':this.fetchDayCareStep3_food.toilet_hobits_q3,
            'q4_tol':this.fetchDayCareStep3_food.toilet_hobits_q4,
            'q5_tol':this.fetchDayCareStep3_food.toilet_hobits_q5,
            'q6_tol':this.fetchDayCareStep3_food.toilet_hobits_q6,
            'q7_tol':this.fetchDayCareStep3_food.toilet_hobits_q7,
            'q1_sp':this.fetchDayCareStep3_phy.q1,
            'q2_sp':this.fetchDayCareStep3_phy.q2,
            'q3_sp':this.fetchDayCareStep3_phy.q3,
            'q4_sp':this.fetchDayCareStep3_phy.q4,
            'q5_sp':this.fetchDayCareStep3_phy.q5,
            'q6_sp':this.fetchDayCareStep3_phy.q6,
            'q7_sp':this.fetchDayCareStep3_phy.q7,
            'q8_sp':this.fetchDayCareStep3_phy.q8,
            'q9_sp':this.fetchDayCareStep3_phy.q9,
            'q10_sp':this.fetchDayCareStep3_phy.q10,
           
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
            this.router.navigate(['childotherinfotwo'])
          }
        }
      ],

      
    });
    await alert.present();
  }
  ionViewWillEnter(){
    if(this.menuCtrl.isEnabled){
      console.log('hi')
      this.menuCtrl.swipeGesture(false)
    }
  }
  goToNextStep(){
    if(this.isFormSubmitted){
      this.router.navigate(['childotherinfotwo'])

    }
    else{
      this.apiService.presentToast('Please submit  form to go next step',3000)
    }
  }
  ionViewDidLeave() {
    this.menuCtrl.enable(true);
  }
}
