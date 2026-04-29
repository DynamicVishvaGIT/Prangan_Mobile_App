import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-otheractivities',
  templateUrl: './otheractivities.page.html',
  styleUrls: ['./otheractivities.page.scss'],
})
export class OtheractivitiesPage implements OnInit {
  activities;
  isActivityPresent=false;

  constructor(
    public router: Router,
    public apiService: ApiService
  ) { }

  ngOnInit() {
  }
  ionViewWillEnter(){
    this.apiService.fetchOtherActivities().then(data=>{
      this.activities=JSON.parse(data.data);
      this.isActivityPresent=true;
    }).catch(err=>{
      this.activities='';
      this.isActivityPresent=false;
    });
  }
  doRefresh(event){
    this.apiService.fetchOtherActivities().then(data=>{
      this.activities=JSON.parse(data.data);
      this.isActivityPresent=true;
      event.target.complete();

    }).catch(err=>{
      this.activities='';
      this.isActivityPresent=false;
      event.target.complete();

    });
  }
}
