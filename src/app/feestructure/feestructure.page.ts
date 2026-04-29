import { AlertController } from '@ionic/angular';
import { HTTP } from '@ionic-native/http/ngx';
import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { Storage } from '@ionic/storage';
import { ApiService } from './../api.service';
declare var RazorpayCheckout:any;
@Component({
  selector: 'app-feestructure',
  templateUrl: './feestructure.page.html',
  styleUrls: ['./feestructure.page.scss'],
})
export class FeestructurePage implements OnInit {
  type;
  fees: any;
  branch_id: any;
  columns: any;
  rows=[];
  amounts: any;
  branch_id_array=[];
  user_id: any;
  fee_details: any;
  user_amt_a: any;
  user_amt_b: any;
  installations: any;
  daycare_fee_details: any;
  userType: any;
  amount = {};
  original_amt_data: any;
  fee_details_original: any;
  header: { Authorization: string; };
  rkey: string;
  data: any;
  orderId: any;
  userId: any;
  selected_payment_type: any;
  payment_slot: any;
  useWallet: any;
  log: any;
  payment_data={};
  original_daycare_amt: any;
  order_id: any;
  month_type='single';
  from_month;
  to_month;
  multiple_amount;
  single_from_month;
  single_amount;
  constructor(
    public storage: Storage,
    public apiService:ApiService,
    public router:Router,
    public http:HTTP,
    public alertController:AlertController

  ) { }

  ngOnInit() {
  }
  ionViewWillEnter(){
    this.storage.get('type').then(data=>{
      console.log('data',data);
      this.type=data;
      
      if(data ==='quicktour'){
        this.apiService.fetchAllBranchFeeStructure().then(data=>{
          this.fees=JSON.parse(data.data)
        
        })
      }
      else{
        this.storage.get('user').then(data=>{
          this.branch_id = JSON.parse(data).branch_id;
          console.log('user',data)
          this.rkey='rzp_test_90ElcNKYzC3OjW'
            this.header = {
              'Authorization' : 'Basic '+ btoa("rzp_test_90ElcNKYzC3OjW:ClzKfJ5Rn6zlnYDGwXIPdBdh")
              };
          this.user_id = JSON.parse(data).id;
          this.apiService.fetchBranchFeeStructure(this.branch_id).then(data=>{
          this.fees=[JSON.parse(data.data)]
          // if(this.branch_id=='1'){
          //   this.rkey='rzp_test_YWFaY0cPlGJ7Lc'
          //   this.header = {
          //     'Authorization' : 'Basic '+ btoa("rzp_test_YWFaY0cPlGJ7Lc:HFYXeeJ7YfSWBzEmQlRDFCYj")
          //     };
          // }
          // else if(this.branch_id=='9'){
          //   this.rkey='rzp_test_tjMm2K5OafvfTD'
          //   this.header = {
          //     'Authorization' : 'Basic '+ btoa("rzp_test_tjMm2K5OafvfTD:mbqr5LV8Czty5FM69iqFItaI")
          //     };
          // }
          // else if(this.branch_id=='10'){
          //   this.rkey='rzp_test_v2v3L8A4Zf0Ber'
          //   this.header = {
          //     'Authorization' : 'Basic '+ btoa("rzp_test_v2v3L8A4Zf0Ber:a7ErXuPClT67NeM7m6OmVWDy")
          //     };
          // }
          // else if(this.branch_id=='2'){
          //   this.rkey='rzp_test_B4OIYna3AFk95P'
          //   this.header = {
          //     'Authorization' : 'Basic '+ btoa("rzp_test_B4OIYna3AFk95P:ANKcDzQfNuetTssXczBkx0Iy")
          //     };
          // }
           
          this.storage.get('userType').then(userType=>{
            this.userType=userType
            if(userType=='Daycare'){
              this.apiService.fetchDaycare(this.user_id).then(data=>{
                this.daycare_fee_details=JSON.parse(data.data)
                console.log(this.daycare_fee_details)
                this.original_daycare_amt =JSON.parse(data.data)
                console.log('fess',this.daycare_fee_details)
              }).catch(err=>{
                this.daycare_fee_details=''
                console.log(err);
              })
            }
            else{
              this.apiService.fetchFeesDetails(this.user_id).then(data=>{
                this.fee_details=JSON.parse(data.data)
                this.fee_details_original=JSON.parse(data.data)
                this.original_amt_data=this.fee_details_original['b']
                this.user_amt_a=this.fee_details['a']
                this.user_amt_b=this.fee_details['b']
               
                if(!this.user_amt_b){
                  this.apiService.fetchInstallation().then(data=>{
                    console.log('dara',data)
                    this.installations=JSON.parse(data.data)
                    this.original_amt_data=JSON.parse(data.data)
                  }).catch(err=>{
                    this.installations=''
                    console.log(err);
                  })
                }
                
              }).catch(err=>{
                this.fee_details=''
              })
            }
     
          })
          })
        })
      }
    });
    
 

  }

  getAmount(rowId,BranchId){
    console.log('row',rowId,BranchId);
    
  }
  openBranchFeeStructure(branch_id,pdf,branch_name){
    this.router.navigate(['feestructuretwo',branch_id,pdf,branch_name])
  }
  pay(id,expected_amount,date,total_amount){
    console.log(expected_amount);
    var original_expected_amount=this.original_amt_data.filter(term=>{
      return term.id==id
    })
    if(original_expected_amount.length>0){
      if(expected_amount >original_expected_amount[0].expected_amount && expected_amount > total_amount){
        this.apiService.presentToast('Please enter amount less than expected amount',3000)
      }
      else{
        this.http.setDataSerializer('json')
        console.log('rkey',this.rkey)
        this.http.post('https://api.razorpay.com/v1/orders', { "amount": expected_amount*100, "currency": "INR" },this.header).then(data => {
          console.log('pay',data)
          
          var parsed_data=JSON.parse(data.data)
          this.order_id=parsed_data['id']
          parsed_data['userid']=this.user_id
          parsed_data['installmentid']=id
          parsed_data['from_date']=date+"-01";
          parsed_data['to_date']=''
          parsed_data['type']='Preschool'
          console.log('parsed_data',parsed_data)
          this.apiService.onlinePayment(parsed_data).then(data=>{
            if(data.status==200){
              var options = {
                description: 'Prangan',
                image: 'http://dynamicvishva.in/Prangan_New/images/prangan.png',
                currency: "INR", 
                key: this.rkey,
                amount: parsed_data['amount'],
                name: 'Prangan',
                order_id:parsed_data['id'],
              
                theme: {
                  color: '#fdd653'
                },
                modal: {
                  ondismiss: function () {
                    alert('dismissed')
                  }
                }
              };
              var successCallback = (payment_id)=> {
                this.successFn(payment_id); 
              };
          
             
              // var successCallback = (success)=> {
              //   alert('payment_id: ' + success.razorpay_payment_id)
              //   var orderId = success.razorpay_order_id
              //   var signature = success.razorpay_signature
              // }
              var cancelCallback = (error) => { // <- Here!
                this.apiService.presentToast("Payment Failed",2000)
              };
              RazorpayCheckout.on('payment.success', successCallback)
              RazorpayCheckout.on('payment.cancel', cancelCallback)
              RazorpayCheckout.open(options);
              
            }
          }).catch(err=>{
            console.log('err2',err)
          })
          
        }).catch(err=>{
          console.log('err1',err)
        })
      }
    }
    console.log('id',id,original_expected_amount);
 
  }
  payDaycare(){
    if(this.month_type=='single'){
     
      var amount=this.single_amount
      var from_date=this.single_from_month
      var to_date=''
      if(from_date){

        console.log(amount,this.rkey);
        if(amount>0){
         
          this.http.setDataSerializer('json')
          this.http.post('https://api.razorpay.com/v1/orders', { "amount": amount*100, "currency": "INR" },this.header).then(data => {
            console.log('pay',data)
            
            var parsed_data=JSON.parse(data.data)
            this.order_id=parsed_data['id']
            parsed_data['userid']=this.user_id
            parsed_data['installmentid']=''
            parsed_data['from_date']=from_date
            parsed_data['to_date']=to_date
            parsed_data['type']='Daycare'
            console.log('parsed_data',parsed_data)
            this.apiService.onlinePayment(parsed_data).then(data=>{
              if(data.status==200){
                var options = {
                  description: 'Prangan',
                  image: 'http://dynamicvishva.in/Prangan_New/images/prangan.png',
                  currency: "INR", 
                  key: this.rkey,
                  amount: parsed_data['amount'],
                  name: 'Prangan',
                  order_id:parsed_data['id'],
                
                  theme: {
                    color: '#fdd653'
                  },
                  modal: {
                    ondismiss: function () {
                      alert('dismissed')
                    }
                  }
                };
                var successCallback = (payment_id)=> {
                  this.successFn(payment_id); 
                };
            
               
                // var successCallback = (success)=> {
                //   alert('payment_id: ' + success.razorpay_payment_id)
                //   var orderId = success.razorpay_order_id
                //   var signature = success.razorpay_signature
                // }
                var cancelCallback = (error) => { // <- Here!
                  this.apiService.presentToast("Payment Failed",2000)
                };
                RazorpayCheckout.on('payment.success', successCallback)
                RazorpayCheckout.on('payment.cancel', cancelCallback)
                RazorpayCheckout.open(options);
                
              }
            }).catch(err=>{
              console.log('err2',err)
            })
            
          }).catch(err=>{
            console.log('err1',err)
          })
         
        }
        
        else{
          this.apiService.presentToast('Please enter amount ',3000)
        }
      }
      else{
        this.apiService.presentToast('Please select month ',3000)

      }
      }
       
   else{
      var amount=this.multiple_amount
      console.log("multiple_amount",this.multiple_amount)
      var month_from_date=this.from_month
      var month_to_date=this.to_month
      if(month_from_date && month_to_date){
    
        if(amount>0){
          if(month_from_date>month_to_date){
            this.apiService.presentToast('From month cannot be greater than To Month ',3000)
          }
          else{
          this.http.setDataSerializer('json')
          this.http.post('https://api.razorpay.com/v1/orders', { "amount": amount*100, "currency": "INR" },this.header).then(data => {
            console.log('pay',data)
            
            var parsed_data=JSON.parse(data.data)
            this.order_id=parsed_data['id']
            parsed_data['userid']=this.user_id
            parsed_data['installmentid']=''
            parsed_data['from_date']=month_from_date
            parsed_data['to_date']=month_to_date
            parsed_data['type']='Daycare'
            console.log('parsed_data',parsed_data)
            this.apiService.onlinePayment(parsed_data).then(data=>{
              if(data.status==200){
                var options = {
                  description: 'Prangan',
                  image: 'http://dynamicvishva.in/Prangan_New/images/prangan.png',
                  currency: "INR", 
                  key: this.rkey,
                  amount: parsed_data['amount'],
                  name: 'Prangan',
                  order_id:parsed_data['id'],
                
                  theme: {
                    color: '#fdd653'
                  },
                  modal: {
                    ondismiss: function () {
                      alert('dismissed')
                    }
                  }
                };
                var successCallback = (payment_id)=> {
                  this.successFn(payment_id); 
                };
            
               
                // var successCallback = (success)=> {
                //   alert('payment_id: ' + success.razorpay_payment_id)
                //   var orderId = success.razorpay_order_id
                //   var signature = success.razorpay_signature
                // }
                var cancelCallback = (error) => { // <- Here!
                  this.apiService.presentToast("Payment Failed",2000)
                };
                RazorpayCheckout.on('payment.success', successCallback)
                RazorpayCheckout.on('payment.cancel', cancelCallback)
                RazorpayCheckout.open(options);
                
              }
            }).catch(err=>{
              console.log('err2',err)
            })
            
          }).catch(err=>{
            console.log('err1',err)
          })
        }
        }

        else{
          this.apiService.presentToast('Please enter amount ',3000)
        }
      }
      else{
        this.apiService.presentToast('Please select both months ',3000)
      }
      }
       
 
  }
  payInstallment(id,amount,date,total_amount){
    if(parseInt(amount)>0){

    console.log(amount);
    var original_expected_amount=this.original_amt_data.filter(term=>{
      return term.id==id
    })
    if(original_expected_amount.length>0){
      if (amount > original_expected_amount[0].amount && amount > total_amount) {
        this.apiService.presentToast('Please enter amount less than expected amount',3000)
      }
      else{
        this.http.setDataSerializer('json')
        this.http.post('https://api.razorpay.com/v1/orders', { "amount": amount*100, "currency": "INR" },this.header).then(data => {
          console.log('pay',data)
          
          var parsed_data=JSON.parse(data.data)
          this.order_id=parsed_data['id']
          parsed_data['userid']=this.user_id
          parsed_data['installmentid']=''
          parsed_data['from_date']=date
          parsed_data['to_date']=''
          parsed_data['type']='Preschool'
          console.log('parsed_data',parsed_data)
          this.apiService.onlinePayment(parsed_data).then(data=>{
            if(data.status==200){
              var options = {
                description: 'Prangan',
                image: 'http://dynamicvishva.in/Prangan_New/images/prangan.png',
                currency: "INR", 
                key: this.rkey,
                amount: parsed_data['amount'],
                name: 'Prangan',
                order_id:parsed_data['id'],
              
                theme: {
                  color: '#fdd653'
                },
                modal: {
                  ondismiss: function () {
                    alert('dismissed')
                  }
                }
              };
              var successCallback = (payment_id)=> {
                this.successFn(payment_id); 
              };
          
             
              // var successCallback = (success)=> {
              //   alert('payment_id: ' + success.razorpay_payment_id)
              //   var orderId = success.razorpay_order_id
              //   var signature = success.razorpay_signature
              // }
              var cancelCallback = (error) => { // <- Here!
                this.apiService.presentToast("Payment Failed",2000)
              };
              RazorpayCheckout.on('payment.success', successCallback)
              RazorpayCheckout.on('payment.cancel', cancelCallback)
              RazorpayCheckout.open(options);
              
            }
          }).catch(err=>{
            console.log('err2',err)
          })
          
        }).catch(err=>{
          console.log('err1',err)
        })
          
      }
    }
    console.log('id',id,original_expected_amount);
 
  }
  else{
    this.apiService.presentToast('Please enter amount ',3000)

  }
}
async presentAlert(message) {
  const alert = await this.alertController.create({
    header: 'Successful',
    message: message,
    mode: 'ios',
    backdropDismiss: false,
    buttons: ['OK']
     
  });
  await alert.present();
}
successFn(payment_id){
  console.log(payment_id)
             console.log('a', this.payment_data)
  alert("success" ) 
  this.payment_data['order_id']=this.order_id
  this.payment_data['razorpay_payment_id']=payment_id.razorpay_payment_id
  this.payment_data['razorpay_order_id']=payment_id.razorpay_order_id
  this.payment_data['razorpay_signature']=payment_id.razorpay_signature
  this.payment_data['branchid']=this.branch_id
  this.apiService.verifyonlinePayment(this.payment_data).then(data=>{
    if(data.status==200){
      this.presentAlert('Payment is successful')
      this.from_month='';
      this.to_month='';
      this.multiple_amount='';
      this.single_from_month='';
      this.single_amount='';
      this.ionViewWillEnter()
    }
  }).catch(err=>{
    console.log(err)
    this.log=err;

    var error_message = JSON.parse(err.error)['error'];
    this.apiService.presentToast(error_message,2000)
  })

}
doRefresh(event){
  this.storage.get('type').then(data=>{
    console.log('data',data);
    this.type=data;
    
    if(data ==='quicktour'){
      this.apiService.fetchAllBranchFeeStructure().then(data=>{
        this.fees=JSON.parse(data.data)
      event.target.complete()
      })
    }
    else{
      this.storage.get('user').then(data=>{
        this.branch_id = JSON.parse(data).branch_id;
        this.user_id = JSON.parse(data).id;
        this.apiService.fetchBranchFeeStructure(this.branch_id).then(data=>{
        this.fees=[JSON.parse(data.data)]
        this.rkey='rzp_test_90ElcNKYzC3OjW'
        this.header = {
          'Authorization' : 'Basic '+ btoa("rzp_test_90ElcNKYzC3OjW:ClzKfJ5Rn6zlnYDGwXIPdBdh")
          };
        // if(this.branch_id=='1'){
        //   this.rkey='rzp_test_YWFaY0cPlGJ7Lc'
        //   this.header = {
        //     'Authorization' : 'Basic '+ btoa("rzp_test_YWFaY0cPlGJ7Lc:HFYXeeJ7YfSWBzEmQlRDFCYj")
        //     };
        // }
        // else if(this.branch_id=='9'){
        //   this.rkey='rzp_test_tjMm2K5OafvfTD'
        //   this.header = {
        //     'Authorization' : 'Basic '+ btoa("rzp_test_tjMm2K5OafvfTD:mbqr5LV8Czty5FM69iqFItaI")
        //     };
        // }
        // else if(this.branch_id=='10'){
        //   this.rkey='rzp_test_v2v3L8A4Zf0Ber'
        //   this.header = {
        //     'Authorization' : 'Basic '+ btoa("rzp_test_v2v3L8A4Zf0Ber:a7ErXuPClT67NeM7m6OmVWDy")
        //     };
        // }
        // else if(this.branch_id=='2'){
        //   this.rkey='rzp_test_B4OIYna3AFk95P'
        //   this.header = {
        //     'Authorization' : 'Basic '+ btoa("rzp_test_B4OIYna3AFk95P:ANKcDzQfNuetTssXczBkx0Iy")
        //     };
        // }
         
        this.storage.get('userType').then(userType=>{
          this.userType=userType
          if(userType=='Daycare'){
      event.target.complete()

            this.apiService.fetchDaycare(this.user_id).then(data=>{
              this.daycare_fee_details=JSON.parse(data.data)
             console.log("daycare_fee_details",this.daycare_fee_details)
              this.original_daycare_amt =JSON.parse(data.data)
              console.log('fess',this.daycare_fee_details)
            }).catch(err=>{
              this.daycare_fee_details=''
              console.log(err);
            })
          }
          else{
      event.target.complete()

            this.apiService.fetchFeesDetails(this.user_id).then(data=>{
              this.fee_details=JSON.parse(data.data)
              this.fee_details_original=JSON.parse(data.data)
              this.original_amt_data=this.fee_details_original['b']
              this.user_amt_a=this.fee_details['a']
              this.user_amt_b=this.fee_details['b']
             
              if(!this.user_amt_b){
                this.apiService.fetchInstallation().then(data=>{
                  console.log('dara',data)
                  this.installations=JSON.parse(data.data)
                  this.original_amt_data=JSON.parse(data.data)
                }).catch(err=>{
                  this.installations=''
                  console.log(err);
                })
              }
              console.log('fess',this.fee_details)
            }).catch(err=>{
              this.fee_details=''
            })
          }
   
        })
        })
      })
    }
  });
}
typeChange(event){
  console.log(event);
  console.log(event.target.value);
  this.month_type=event.target.value

}
alreadyPaid(){
  this.apiService.presentToast('Payment is already done ',3000)
}
}
