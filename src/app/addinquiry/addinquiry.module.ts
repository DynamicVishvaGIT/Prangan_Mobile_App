import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AddinquiryPageRoutingModule } from './addinquiry-routing.module';

import { AddinquiryPage } from './addinquiry.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AddinquiryPageRoutingModule,
    ReactiveFormsModule
  ],
  declarations: [AddinquiryPage]
})
export class AddinquiryPageModule {}
