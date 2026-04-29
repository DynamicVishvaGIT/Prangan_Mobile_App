import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ImageformPageRoutingModule } from './imageform-routing.module';

import { ImageformPage } from './imageform.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ImageformPageRoutingModule
  ],
  declarations: [ImageformPage]
})
export class ImageformPageModule {}
