import { ApiService } from './../api.service';
import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-notice',
  templateUrl: './notice.page.html',
  styleUrls: ['./notice.page.scss'],
})
export class NoticePage implements OnInit {
  notices;
  isNoticePresent=false;
  constructor(
    public router: Router,
    public apiService: ApiService
    ) { }

  ngOnInit() {
  }
  goBack(){
    this.router.navigate(['quicktour']);
  }
  ionViewWillEnter(){
    this.apiService.fetchNotices().then(data=>{
      this.notices=JSON.parse(data.data);
      console.log('notices',this.notices);
      this.isNoticePresent=true;
    }).catch(err=>{
    this.notices='';

      this.isNoticePresent=false;
    });
  }
  doRefresh(event){
    this.apiService.fetchNotices().then(data=>{
      this.notices=JSON.parse(data.data);
      console.log('notices',this.notices);
      this.isNoticePresent=true;
      event.target.complete();
    }).catch(err=>{
      this.notices='';
      event.target.complete();
      this.isNoticePresent=false;
    });
  }
}
