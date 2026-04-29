import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AdmissionformPageRoutingModule } from './admissionform-routing.module';

import { AdmissionformPage } from './admissionform.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AdmissionformPageRoutingModule,
    ReactiveFormsModule
  ],
  declarations: [AdmissionformPage]
})
export class AdmissionformPageModule {}
