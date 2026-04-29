import { Component, OnInit } from '@angular/core';
import { ApiService } from './../api.service';
import { Storage } from '@ionic/storage';
import { AlertController } from '@ionic/angular';
import { ThrowStmt } from '@angular/compiler';

@Component({
  selector: 'app-paymenthistory',
  templateUrl: './paymenthistory.page.html',
  styleUrls: ['./paymenthistory.page.scss'],
})
export class PaymenthistoryPage implements OnInit {
  branch_id: any;
  user_id: any;
  userType: any;
  orders: any;
  isOrdersAvailable: boolean;

  constructor(
    public storage: Storage,
    public apiService:ApiService,
    public alertController:AlertController
  ) { }

  ngOnInit() {
  }
  ionViewWillEnter(){
    this.storage.get('user').then(data=>{
      this.branch_id = JSON.parse(data).branch_id;
      this.user_id = JSON.parse(data).id;
      this.storage.get('userType').then(userType=>{
        this.userType=userType
        if(userType=='Preschool'){

        this.apiService.paymentHistory(this.userType,this.user_id).then(data=>{
          console.log(JSON.parse(data.data));
          this.orders=JSON.parse(data.data)
          this.isOrdersAvailable=true;

        }).catch(err=>{
          console.log(err);
          this.isOrdersAvailable=false;
          this.orders=''

        })
      }
      else{
        this.apiService.fetchDaycare(this.user_id).then(data=>{
          this.orders=JSON.parse(data.data)
          console.log('fess',this.orders)
          this.isOrdersAvailable=true;
        }).catch(err=>{
          this.orders=''
          this.isOrdersAvailable=false;
          console.log(err);
        })
       
      }
      })
    })


  }
  ConvertTimeStamp(time) {
      return this.formatDate(new Date(time * 1000));
  }
  formatDate(date) {
      
      var d = new Date(date), month = '' + (d.getMonth() + 1), day = '' + d.getDate(), year = d.getFullYear();
      if (month.length < 2)
          month = '0' + month;
      if (day.length < 2)
          day = '0' + day;
      return [day, month, year].join('/') +" "+ d.getHours()+":"+d.getMinutes();
  }
  doRefresh(event){
    this.storage.get('user').then(data=>{
      this.branch_id = JSON.parse(data).branch_id;
      this.user_id = JSON.parse(data).id;
      this.storage.get('userType').then(userType=>{
        this.userType=userType
        this.apiService.paymentHistory(this.userType,this.user_id).then(data=>{
          console.log(data);
          this.orders=JSON.parse(data.data)
          this.isOrdersAvailable=true;
          event.target.complete()

        }).catch(err=>{
          console.log(err);
          this.isOrdersAvailable=false;
          this.orders=''
          event.target.complete()
        })
      })
    })
  }
}
