import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AddadmissionPageRoutingModule } from './addadmission-routing.module';

import { AddadmissionPage } from './addadmission.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AddadmissionPageRoutingModule,
    ReactiveFormsModule
  ],
  declarations: [AddadmissionPage]
})
export class AddadmissionPageModule {}
