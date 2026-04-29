import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-eventdetails',
  templateUrl: './eventdetails.page.html',
  styleUrls: ['./eventdetails.page.scss'],
})
export class EventdetailsPage implements OnInit {
  event;
  constructor(
    public route: ActivatedRoute
  ) { }

  ngOnInit() {
  }
  ionViewDidEnter(){
    this.route.paramMap.subscribe(params=>{
      this.event = params.get('event');
    });
  }
}
