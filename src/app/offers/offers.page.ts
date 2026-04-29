import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-offers',
  templateUrl: './offers.page.html',
  styleUrls: ['./offers.page.scss'],
})
export class OffersPage implements OnInit {
  offers;
  isOfferPresent=false;

  constructor(
    public apiService: ApiService

  ) { }

  ngOnInit() {
  }
  ionViewWillEnter(){
    this.apiService.fetchOffers().then(data=>{
      this.offers=JSON.parse(data.data);
      console.log('notices',this.offers);
      this.isOfferPresent=true;
    }).catch(err=>{
    this.offers='';

      this.isOfferPresent=false;
    });
  }
  doRefresh(event){
    this.apiService.fetchOffers().then(data=>{
      this.offers=JSON.parse(data.data);
      console.log('offers',this.offers);
      this.isOfferPresent=true;
      event.target.complete();
    }).catch(err=>{
    this.offers='';
    event.target.complete();

      this.isOfferPresent=false;
    });
  }
}
