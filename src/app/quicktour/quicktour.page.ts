import { ApiService } from './../api.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MenuController } from '@ionic/angular';
import { Storage } from '@ionic/storage';

@Component({
  selector: 'app-quicktour',
  templateUrl: './quicktour.page.html',
  styleUrls: ['./quicktour.page.scss'],
})
export class QuicktourPage implements OnInit {
  sliderOpts = {
    initialSlide: 0,
    slidesPerView: 2.1,
    };
    eventsliderOpts = {
    initialSlide: 0,
    slidesPerView: 1.8,
    };
    type;
    in_time;
  events: any;
  albums: any;
  branch_id;
  holidays: any;
  child_name: any;
  plan: any;
  isEventPresent: boolean;
  isAlbumPresent: boolean;
  isHolidayPresent: boolean;
  classType: any;
  user_id: any;
  attendance: any;
  out_time: string;
  profile: any;
  pending_amount;
  notifications:any
  constructor(
    public menuCtrl: MenuController,
    public router: Router,
    public storage: Storage,
    public apiService:ApiService
  ) {
    // this.menuCtrl.enable(false);
  }

  ngOnInit() {

  }

  ionViewWillEnter(){
    if(this.menuCtrl.isEnabled){
      console.log('hi')
      this.menuCtrl.swipeGesture(true)
    }
    this.storage.get('type').then(data=>{
      console.log('data',data);
      this.type=data;
      if(data ==='quicktour'){
        this.menuCtrl.enable(true,'main-content-3');
        this.menuCtrl.enable(false,'main-content-2');
        this.menuCtrl.enable(false,'main-content-1');
        this.apiService.fetchAllEvents().then(data=>{
          var events=JSON.parse(data.data)
          if(events){

          var events_array=[]
          var class_array=[]

          for (let index = 0; index < events.length; index++) {
            if(events[index]['b']){
              for (let i = 0; i < events[index]['b'].length; i++) {
                class_array.push(events[index]['b'][i]['class'])
              }

              var event={
                ...events[index]['a']
              }
              event['class']=class_array.join()
            }
            else{
              var event={
                ...events[index]['a'],
               
              }
              event['class']=''
            }
          
          events_array.push(event)
          }
          this.events=events_array;
          this.isEventPresent=true;

        }
        else{
          this.isEventPresent=false;
        }

        }).catch(err=>{
          console.log('err',err);
          this.events=''
          this.isEventPresent=false;
        })
        this.apiService.fetchAllAlbums().then(data=>{
          var albums=JSON.parse(data.data)
          console.log("albumsFetch",albums)
          if(albums){

          var albums_array=[]
          var class_array=[]

          for (let index = 0; index < albums.length; index++) {
            if(albums[index]['b']){
              for (let i = 0; i < albums[index]['b'].length; i++) {
                class_array.push(albums[index]['b'][i]['class'])
              }

              var album={
                ...albums[index]['a']
              }
              album['class']=class_array.join()
            }
            else{
              var album={
                ...albums[index]['a'],
               
              }
              album['class']=''
            }
          
            albums_array.push(album)
          }
          this.albums=albums_array;
          this.isAlbumPresent=true

        }
        else{
          this.isAlbumPresent=false

        }
        }).catch(err=>{
          console.log('err',err);
          this.albums='';

          this.isAlbumPresent=false


        })
      }
      else{
        console.log("")
        this.menuCtrl.enable(true,'main-content-1');
        this.menuCtrl.enable(false,'main-content-2');
        this.storage.get('user').then(data=>{
            this.child_name=JSON.parse(data).child_name
            if(JSON.parse(data).class){
              this.plan='Preschool'
              this.classType=JSON.parse(data).class
            }
            else{
              this.plan='Daycare'
              this.classType='Daycare'
            }
            this.branch_id = JSON.parse(data).branch_id;
            this.user_id = JSON.parse(data).id;
            this.storage.get('userType').then(userType=>{
              this.apiService.fetchNotifications(userType,this.user_id).then(data=>{
                this.notifications=JSON.parse(data.data)
                console.log('notific',this.notifications)
              }).catch(err=>{
                this.notifications=''
              })
              if(userType=='Daycare'){
              this.apiService.fetchBranchEvents(userType,userType,this.branch_id).then(events_data=>{
                this.events=JSON.parse(events_data.data)
                this.isEventPresent=true;

              }).catch(err=>{
                this.events=''
                this.isEventPresent=false;

              })

              this.apiService.fetchBranchHoliday(userType,userType,this.branch_id).then(holiday_data=>{
                this.holidays=JSON.parse(holiday_data.data)
                this.isHolidayPresent=true

              }).catch(err=>{
                this.holidays=''
                this.isHolidayPresent=false
              })
              this.apiService.fetchBranchAlbum(userType,userType,this.branch_id).then(album_data=>{
                this.albums=JSON.parse(album_data.data)
                console.log(this.albums)
                this.isAlbumPresent=true

              })
              .catch(err=>{
                this.albums=''
                this.isAlbumPresent=false
              })
              
          
              
              this.apiService.fetchUserAttendance(userType,this.user_id).then(data=>{
                console.log("fetchUserAttendance",data);
                var attendance=JSON.parse(data.data)
                var today=attendance.today
                var yesterday=attendance.yesterday
                if(!today){
                  this.attendance=yesterday
                }
                else{
                  this.attendance=today
                
                }
                if(this.attendance){
                  this.in_time = this.attendance.date + ' ' + this.attendance.in_time;
                  this.out_time = this.attendance.date + ' ' + this.attendance.out_time;
                }
              })
              this.apiService.userDetails(this.user_id, userType).then(data => {
                console.log('data', data.data);
                this.profile = JSON.parse(data.data);
                var total_amount= this.profile.amount;
              this.apiService.fetchDaycare(this.user_id).then(data=>{
                var daycare_fee_details=JSON.parse(data.data)
                var total_amount_array=[]
                if(daycare_fee_details.length>0){

                for (let i = 0; i < daycare_fee_details.length; i++) {
                  total_amount_array.push(parseFloat(daycare_fee_details[i].amount))
                }
                var paid_amount=total_amount_array.reduce((a, b) => a + b, 0)
                this.pending_amount=parseFloat(total_amount)-parseFloat(paid_amount)
                console.log('tot',total_amount,paid_amount, this.pending_amount);
              }
              else{
                this.pending_amount=total_amount
              }
              }).catch(err=>{
                console.log(err);
                this.pending_amount = total_amount;
              })
            })
            }
            else{
              this.apiService.fetchBranchEvents(this.classType,userType,this.branch_id).then(events_data=>{
                this.events=JSON.parse(events_data.data)
                this.isEventPresent=true;

              }).catch(err=>{
                this.events=''
                this.isEventPresent=false;

              })
              this.apiService.fetchBranchHoliday(this.classType,userType,this.branch_id).then(holiday_data=>{
                this.holidays=JSON.parse(holiday_data.data)
                this.isHolidayPresent=true

              }).catch(err=>{
                this.holidays=''
                this.isHolidayPresent=false

              })
              this.apiService.userDetails(this.user_id, 'Preschool').then(data => {
                console.log('data', data.data);
                this.profile = JSON.parse(data.data);
                var  total_amount= this.profile.amount;
                this.apiService.fetchFeesDetails(this.user_id).then(data => {
                  if(JSON.parse(data.data)['a']){

                    var paid_amount = JSON.parse(data.data)['a']['amount'];
                    console.log('tao',paid_amount,total_amount)
                    this.pending_amount = (parseInt(total_amount) - parseInt(paid_amount)).toString()
                     console.log('tao2',paid_amount,total_amount,this.pending_amount)
                    }
                else{
                  this.pending_amount=total_amount
                }
                    }).catch(err=>{
                      this.pending_amount=total_amount
                    })

            });
              this.apiService.fetchBranchAlbum(this.classType,userType,this.branch_id).then(album_data=>{
                this.albums=JSON.parse(album_data.data)
                this.isAlbumPresent=true

              }).catch(err=>{
                this.albums=''
                this.isAlbumPresent=false
              })
              this.apiService.fetchUserAttendance('Preschool',this.user_id).then(data=>{
                console.log("Preschool fetchUserAttendance",data)
                
                var attendance=JSON.parse(data.data)
                var today=attendance.today
                var yesterday=attendance.yesterday
                console.log('attendance',attendance)
                if(!today){
                  this.attendance=yesterday
                }
                else{
                  this.attendance=today
                }
                if(this.attendance){
                  this.in_time = this.attendance.date + ' ' + this.attendance.in_time;
                  this.out_time = this.attendance.date + ' ' + this.attendance.out_time;
                }

                console.log('attendance',this.attendance);
              })
            }
            })
        })
      
      }
    });
  
  }
  // openDetails(event){
  //   this.router.navigate(['eventdetails',event]);
  // }
  openAlbum(id,name){
    this.router.navigate(['gallerytwo',id,name]);
  }
  doRefresh(event){
    this.storage.get('type').then(data=>{
      console.log('data',data);
      this.type=data;
      if(data ==='quicktour'){
      event.target.complete()

        this.menuCtrl.enable(true,'main-content-2');
        this.menuCtrl.enable(false,'main-content-1');
        this.apiService.fetchAllEvents().then(data=>{
          var events=JSON.parse(data.data)
          if(events){

          var events_array=[]
          var class_array=[]

          for (let index = 0; index < events.length; index++) {
            if(events[index]['b']){
              for (let i = 0; i < events[index]['b'].length; i++) {
                class_array.push(events[index]['b'][i]['class'])
              }

              var event={
                ...events[index]['a']
              }
              event['class']=class_array.join()
            }
            else{
              var event={
                ...events[index]['a'],
               
              }
              event['class']=''
            }
          
          events_array.push(event)
          }
          this.events=events_array;
          this.isEventPresent=true;

        }
        else{
          this.isEventPresent=false;
        }

        }).catch(err=>{
          console.log('err',err);
          this.events=''
          this.isEventPresent=false;
        })
        this.apiService.fetchAllAlbums().then(data=>{
          var albums=JSON.parse(data.data)
          console.log("Albums array",albums)
          if(albums){

          var albums_array=[]
          var class_array=[]

          for (let index = 0; index < albums.length; index++) {
            if(albums[index]['b']){
              for (let i = 0; i < albums[index]['b'].length; i++) {
                class_array.push(albums[index]['b'][i]['class'])
              }

              var album={
                ...albums[index]['a']
              }
              album['class']=class_array.join()
            }
            else{
              var album={
                ...albums[index]['a'],
               
              }
              album['class']=''
            }
          
            albums_array.push(album)
          }
          this.albums=albums_array;
          this.isAlbumPresent=true

        }
        else{
          this.isAlbumPresent=false

        }
        }).catch(err=>{
          console.log('err',err);
          this.albums='';

          this.isAlbumPresent=false


        })
      }
      else{
      event.target.complete()

        this.menuCtrl.enable(true,'main-content-1');
        this.menuCtrl.enable(false,'main-content-2');
        this.storage.get('user').then(data=>{
            this.child_name=JSON.parse(data).child_name
            if(JSON.parse(data).class){
              this.plan='Preschool'
              this.classType=JSON.parse(data).class
            }
            else{
              this.plan='Daycare'
              this.classType='Daycare'
            }
            this.branch_id = JSON.parse(data).branch_id;
            this.user_id = JSON.parse(data).id;
            this.storage.get('userType').then(userType=>{
              if(userType=='Daycare'){
              this.apiService.fetchBranchEvents(userType,userType,this.branch_id).then(events_data=>{
                this.events=JSON.parse(events_data.data)
                this.isEventPresent=true;

              }).catch(err=>{
                this.events=''
                this.isEventPresent=false;

              })

              this.apiService.fetchBranchHoliday(userType,userType,this.branch_id).then(holiday_data=>{
                this.holidays=JSON.parse(holiday_data.data)
                this.isHolidayPresent=true

              }).catch(err=>{
                this.holidays=''
                this.isHolidayPresent=false
              })
              this.apiService.fetchBranchAlbum(userType,userType,this.branch_id).then(album_data=>{
                this.albums=JSON.parse(album_data.data)
                this.isAlbumPresent=true

              })
              .catch(err=>{
                this.albums=''
                this.isAlbumPresent=false
              })
              this.apiService.fetchUserAttendance(userType,this.user_id).then(data=>{
                console.log(data);
                var attendance=JSON.parse(data.data)
                var today=attendance.today
                var yesterday=attendance.yesterday
                if(!today){
                  this.attendance=yesterday
                }
                else{
                  this.attendance=today
                
                }
                if(this.attendance){
                  this.in_time = this.attendance.date + ' ' + this.attendance.in_time;
                  this.out_time = this.attendance.date + ' ' + this.attendance.out_time;
                }
              })

            }
            else{
              this.apiService.fetchBranchEvents(this.classType,userType,this.branch_id).then(events_data=>{
                this.events=JSON.parse(events_data.data)
                this.isEventPresent=true;

              }).catch(err=>{
                this.events=''
                this.isEventPresent=false;

              })
              this.apiService.fetchBranchHoliday(this.classType,userType,this.branch_id).then(holiday_data=>{
                this.holidays=JSON.parse(holiday_data.data)
                this.isHolidayPresent=true

              }).catch(err=>{
                this.holidays=''
                this.isHolidayPresent=false

              })
              this.apiService.fetchBranchAlbum(this.classType,userType,this.branch_id).then(album_data=>{
                this.albums=JSON.parse(album_data.data)
                this.isAlbumPresent=true

              }).catch(err=>{
                this.albums=''
                this.isAlbumPresent=false
              })
              this.apiService.fetchUserAttendance('Preschool',this.user_id).then(data=>{
                var attendance=JSON.parse(data.data)
                var today=attendance.today
                var yesterday=attendance.yesterday
                console.log('attendance',attendance)
                if(!today){
                  this.attendance=yesterday
                }
                else{
                  this.attendance=today
                }
                if(this.attendance){
                  this.in_time = this.attendance.date + ' ' + this.attendance.in_time;
                  this.out_time = this.attendance.date + ' ' + this.attendance.out_time;
                }

                console.log('attendance',this.attendance);
              })
            }
            })
        })
      
      }
    });
  }
}
