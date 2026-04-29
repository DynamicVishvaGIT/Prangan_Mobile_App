import { Component, OnInit } from '@angular/core';
import { Navigation } from '@angular/router';
import { MenuController } from '@ionic/angular';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  constructor(
    public menuCtrl: MenuController,

  ) {

    // this.menuCtrl.enable(false, 'main-content-1');
    // this.menuCtrl.enable(false, 'main-content-2');

   }
   ionViewDidEnter(){
     this.menuCtrl.enable(false, 'main-content-1');
    this.menuCtrl.enable(false, 'main-content-2');
   }
  ngOnInit() {
    this.menuCtrl.enable(false, 'main-content-1');
    this.menuCtrl.enable(false, 'main-content-2');
  }
  // ionViewDidLeave(){
  //   this.menuCtrl.enable(true, 'main-content-1');
  //   this.menuCtrl.enable(true, 'main-content-2');
  // }
}
