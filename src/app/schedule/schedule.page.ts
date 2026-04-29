import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from '../api.service';
import { Storage } from '@ionic/storage';

@Component({
  selector: 'app-schedule',
  templateUrl: './schedule.page.html',
  styleUrls: ['./schedule.page.scss'],
})
export class SchedulePage implements OnInit {
  schedule;
  userType;
  userid: any;
  profile: any;
  constructor(
    public router: Router,
    public apiService: ApiService,
    public storage: Storage,

  ) { }

  ngOnInit() {
  }
  ionViewWillEnter(){
    this.storage.get('userType').then(userType=>{
      this.userType=userType;
      if(userType==='Preschool'){
        var classId='Class_6';
        var type='PlayGroup'
      }
      else{
        var classId='Class_5';
        var type='Daycare'



      }
      this.storage.get('user').then(data=>{
        var user=JSON.parse(data);
        this.userid=user.userid;

        this.apiService.userDetails(user.id,userType).then(data1=>{
          this.profile=JSON.parse(data1.data);
          this.apiService.fetchSchedule(type,classId,this.profile.branch_id).then(data2=>{
            this.schedule=JSON.parse(data2.data);
            console.log('sch',this.schedule);
          }).catch(err=>{
            this.schedule='';
            console.log('sch',err);

          });
        });

    });


    });

  }
}
