import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SiblingsformPageRoutingModule } from './siblingsform-routing.module';

import { SiblingsformPage } from './siblingsform.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SiblingsformPageRoutingModule
  ],
  declarations: [SiblingsformPage]
})
export class SiblingsformPageModule {}
