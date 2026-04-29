import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CentrePageRoutingModule } from './centre-routing.module';

import { CentrePage } from './centre.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CentrePageRoutingModule
  ],
  declarations: [CentrePage]
})
export class CentrePageModule {}
