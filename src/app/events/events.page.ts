import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-events',
  templateUrl: './events.page.html',
  styleUrls: ['./events.page.scss'],
})
export class EventsPage implements OnInit {

  constructor(
    public router: Router
  ) { }

  ngOnInit() {
  }
  openDetails(event){
    this.router.navigate(['eventdetails',event]);
  }
}
