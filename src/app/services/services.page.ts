import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-services',
  templateUrl: './services.page.html',
  styleUrls: ['./services.page.scss'],
})
export class ServicesPage implements OnInit {
  services;
  isServicesPresent=false;
  constructor(
    public router: Router,
    public apiService: ApiService
  ) { }

  ngOnInit() {
  }
  ionViewWillEnter(){
    this.apiService.fetchServices().then(data=>{
      this.services=JSON.parse(data.data);
      this.isServicesPresent=true;
    }).catch(err=>{
      this.services='';
      this.isServicesPresent=false;
    });
  }
  doRefresh(event){
    this.apiService.fetchServices().then(data=>{
      this.services=JSON.parse(data.data);
      this.isServicesPresent=true;
      event.target.complete();

    }).catch(err=>{
      this.services='';
      this.isServicesPresent=false;
      event.target.complete();

    });
  }
}
