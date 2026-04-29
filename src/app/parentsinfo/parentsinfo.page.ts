import { ApiService } from './../api.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AlertController, LoadingController } from '@ionic/angular';
import { Storage } from '@ionic/storage';
import { MenuController } from '@ionic/angular';

@Component({
  selector: 'app-parentsinfo',
  templateUrl: './parentsinfo.page.html',
  styleUrls: ['./parentsinfo.page.scss'],
})
export class ParentsinfoPage implements OnInit {
  preschoolRegTwoForm: FormGroup;
  id: any;
  fetchPreschoolRegStep2data: any;
  isDataPresent: boolean;
  form_data_id: any;
  isFormSubmitted=false;

  constructor(
    public apiService: ApiService,
    public alertController: AlertController,
    public router: Router,
    public storage: Storage,
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
      this.apiService.fetchPreschoolRegStep2(this.id).then(data=>{
        console.log('fetchPreschoolRegStep2',data);
        this.fetchPreschoolRegStep2data=JSON.parse(data.data)
        if(this.fetchPreschoolRegStep2data.id){
          this.isFormSubmitted=true
          this.form_data_id=this.fetchPreschoolRegStep2data.id
          this.preschoolRegTwoForm.patchValue({
          mom_name:this.fetchPreschoolRegStep2data.mother_name,
          dad_name:this.fetchPreschoolRegStep2data.father_name,
          mom_education:this.fetchPreschoolRegStep2data.mother_qualification,
          dad_education:this.fetchPreschoolRegStep2data.father_qualification,
          mom_occupation:this.fetchPreschoolRegStep2data.mother_occupation,
          dad_occupationn:this.fetchPreschoolRegStep2data.father_occupation,
          mom_cell_no:this.fetchPreschoolRegStep2data.mother_mobile_number,
          dad_cell_no:this.fetchPreschoolRegStep2data.father_mobile_number,
          mom_email:this.fetchPreschoolRegStep2data.mother_email_id,
          dad_email:this.fetchPreschoolRegStep2data.father_email_id,
          child1:this.fetchPreschoolRegStep2data.sibling_name1,
          child_school_1:this.fetchPreschoolRegStep2data.sibling_school1,
          child_class1:this.fetchPreschoolRegStep2data.sibling_class1,
          child2:this.fetchPreschoolRegStep2data.sibling_name2,
          child_school_2:this.fetchPreschoolRegStep2data.sibling_school2,
          child_class2:this.fetchPreschoolRegStep2data.sibling_class1,
          other_name1:this.fetchPreschoolRegStep2data.other_name1,
          other_rel1:this.fetchPreschoolRegStep2data.other_relation1,
          other_name2:this.fetchPreschoolRegStep2data.other_name2,
          other_rel2:this.fetchPreschoolRegStep2data.other_relation2,
          q1_ans:this.fetchPreschoolRegStep2data.q1,
          q2:this.fetchPreschoolRegStep2data.q2,
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
    this.menuCtrl.enable(false);

    this.preschoolRegTwoForm=new FormGroup({
      mom_name:new FormControl('',[Validators.required,Validators.pattern(/^[a-zA-Z\. ]+$/)]),
      dad_name:new FormControl('',[Validators.required,Validators.pattern(/^[a-zA-Z\. ]+$/)]),
      mom_education:new FormControl(''),
      dad_education:new FormControl(''), 
      mom_occupation:new FormControl('',[Validators.pattern(/^[a-zA-z ]+$/)]),
      dad_occupationn:new FormControl('',[Validators.pattern(/^[a-zA-z ]+$/)]),
      mom_cell_no:new FormControl('',[Validators.maxLength(10),Validators.minLength(10),Validators.pattern(/^[0-9]{10}$/)]),
      dad_cell_no:new FormControl('',[Validators.maxLength(10),Validators.minLength(10),Validators.pattern(/^[0-9]{10}$/)]),
      mom_email:new FormControl('',[Validators.pattern(/^(?!\_)(?!_*_$)([0-9A-Za-z]+\.)*[a-zA-Z0-9_+-]+@([\w+-]+\.)*[\w+-]+\.[a-zA-Z]{2,4}$/)]),
      dad_email:new FormControl('',[Validators.pattern(/^(?!\_)(?!_*_$)([0-9A-Za-z]+\.)*[a-zA-Z0-9_+-]+@([\w+-]+\.)*[\w+-]+\.[a-zA-Z]{2,4}$/)]),
      child1:new FormControl('',[Validators.pattern(/^[a-zA-z ]+$/)]),
      child_school_1:new FormControl(''),  
      child_class1:new FormControl(''),
      child2:new FormControl('',[Validators.pattern(/^[a-zA-z ]+$/)]),
      child_school_2:new FormControl(''),
      child_class2:new FormControl(''),  
      other_name1:new FormControl('',[Validators.pattern(/^[a-zA-Z\. ]+$/)]),
      other_rel1:new FormControl('',[Validators.pattern(/^[a-zA-z ]+$/)]),
      other_name2:new FormControl('',[Validators.pattern(/^[a-zA-Z\. ]+$/)]),
      other_rel2:new FormControl('',[Validators.pattern(/^[a-zA-z ]+$/)]),   
      q1_ans:new FormControl(''),
      q2:new FormControl(''),
    })
  }
  ionViewWillEnter(){
    if(this.menuCtrl.isEnabled){
      console.log('hi')
      this.menuCtrl.swipeGesture(false)
    }
  }
  get mom_name(){
    return this.preschoolRegTwoForm.get('mom_name')
  }
  get dad_name(){
    return this.preschoolRegTwoForm.get('dad_name')
  }
  get mom_education(){
    return this.preschoolRegTwoForm.get('mom_education')
  }
  get dad_education(){
    return this.preschoolRegTwoForm.get('dad_education')
  }
  get mom_occupation(){
    return this.preschoolRegTwoForm.get('mom_occupation')
  }
  get dad_occupationn(){
    return this.preschoolRegTwoForm.get('dad_occupationn')
  }
  get mom_cell_no(){
    return this.preschoolRegTwoForm.get('mom_cell_no')
  }
  get dad_cell_no(){
    return this.preschoolRegTwoForm.get('dad_cell_no')
  }
  get mom_email(){
    return this.preschoolRegTwoForm.get('mom_email')
  }
  get dad_email(){
    return this.preschoolRegTwoForm.get('dad_email')
  }
  get child1(){
    return this.preschoolRegTwoForm.get('child1')
  }
  get child_school_1(){
    return this.preschoolRegTwoForm.get('child_school_1')
  }
  get child_class1(){
    return this.preschoolRegTwoForm.get('child_class1')
  }
  get child2(){
    return this.preschoolRegTwoForm.get('child2')
  }
  get child_school_2(){
    return this.preschoolRegTwoForm.get('child_school_2')
  }
  get child_class2(){
    return this.preschoolRegTwoForm.get('child_class2')
  }
  get other_name1(){
    return this.preschoolRegTwoForm.get('other_name1')
  }
  get other_rel1(){
    return this.preschoolRegTwoForm.get('other_rel1')
  }
  get other_name2(){
    return this.preschoolRegTwoForm.get('other_name2')
  }
  get other_rel2(){
    return this.preschoolRegTwoForm.get('other_rel2')
  }
  get q1_ans(){
    return this.preschoolRegTwoForm.get('q1_ans')
  }
  get q2(){
    return this.preschoolRegTwoForm.get('q2')
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
            this.router.navigate(['preschoolotherform'])
          }
        }
      ],

      
    });
    await alert.present();
  }
  onSubmit(body){
    this.presentLoading()
   
    console.log('body', body);
    const formData = new FormData();
    formData.append("mom_name", body['mom_name'])
    formData.append("dad_name", body['dad_name'])
    formData.append("mom_education", body['mom_education'])
    formData.append("dad_education", body['dad_education'])
    formData.append("mom_occupation", body['mom_occupation'])
    formData.append("dad_occupationn", body['dad_occupationn'])
    formData.append("mom_cell_no", body['mom_cell_no'])
    formData.append("dad_cell_no", body['dad_cell_no'])
    formData.append("mom_email", body['mom_email'])
    formData.append("dad_email", body['dad_email'])
    formData.append("child1", body['child1'])
    formData.append("child_school_1", body['child_school_1'])
    formData.append("child_class1", body['child_class1'])
    formData.append("child2", body['child2'])
    formData.append("child_school_2", body['child_school_2'])
    formData.append("child_class2", body['child_class2'])
    formData.append("other_name1", body['other_name1'])
    formData.append("other_rel1", body['other_rel1'])
    formData.append("other_name2", body['other_name2'])
    formData.append("other_rel2", body['other_rel2'])
    formData.append("q1_ans", body['q1_ans'])
    formData.append("q2", body['q2'])
    if(this.isDataPresent){
    formData.append("userid",this.id)
    formData.append("id", this.form_data_id)

      this.apiService.updatePreschoolRegStep2(formData).subscribe(data => {
        console.log('data',data);
        this.loadingController.dismiss()

          this.presentAlert("Parents info form updated successfully")
  
          console.log(data);
      },err=>{
        console.log(err);
        this.loadingController.dismiss()

        this.apiService.presentToast(err.error,2000);
      })
    }
    else{
      formData.append("userid",this.id)
      this.apiService.preschoolRegStep2(formData).subscribe(data => {
        console.log('data',data);
        this.loadingController.dismiss()

          this.presentAlert("Parents info form  submitted successfully")
          this.preschoolRegTwoForm.reset()
  
          console.log(data);
      },err=>{
        console.log(err);
        this.loadingController.dismiss()
        
        this.apiService.presentToast(err.error,2000);
      })
    }
   
 
  }
  ionViewDidLeave() {
    this.menuCtrl.enable(true);
  }
  goToStep3(){
    if(this.isFormSubmitted){
      this.router.navigateByUrl('/preschoolotherform')
    }
    else{
      this.apiService.presentToast('Please submit  form to go next step',3000)
    }
  }
}
