import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-rules',
  templateUrl: './rules.page.html',
  styleUrls: ['./rules.page.scss'],
})
export class RulesPage implements OnInit {
  rules;
  isRulesPresent=false;

  constructor(
    public router: Router,
    public apiService: ApiService
  ) { }

  ngOnInit() {
  }
  ionViewWillEnter(){
    this.apiService.fetchRules().then(data=>{
      this.rules=JSON.parse(data.data);
      this.isRulesPresent=true;
    }).catch(err=>{
      this.rules='';
      this.isRulesPresent=false;
    });
  }
  doRefresh(event){
    this.apiService.fetchRules().then(data=>{
      this.rules=JSON.parse(data.data);
      this.isRulesPresent=true;
      event.target.complete();

    }).catch(err=>{
      this.rules='';
      this.isRulesPresent=false;
      event.target.complete();

    });
  }
}
