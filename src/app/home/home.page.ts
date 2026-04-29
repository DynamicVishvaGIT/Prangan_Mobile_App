import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MenuController } from '@ionic/angular';
import { Storage } from '@ionic/storage';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {

  constructor(
    public router: Router,
    public menuCtrl: MenuController,
    public storage: Storage,

  ) {
    
  }
  openQuickTour(){
    this.storage.set('type','quicktour').then(_=>{
    this.router.navigate(['quicktour']);
    });
  }
  openLogin(){

    this.storage.set('type','login').then(_=>{
      this.router.navigate(['login']);
      });

  }
  ionViewWillEnter(){
    this.menuCtrl.enable(false, 'main-content-1');
    this.menuCtrl.enable(false, 'main-content-2');
  }
  // ionViewDidLeave(){
  //   this.menuCtrl.enable(true);

  // }
  ngOnInit() {
    this.menuCtrl.enable(false, 'main-content-1');
    this.menuCtrl.enable(false, 'main-content-2');
  }
}
