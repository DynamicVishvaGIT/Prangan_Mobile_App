import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PreschoolformPageRoutingModule } from './preschoolform-routing.module';

import { PreschoolformPage } from './preschoolform.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PreschoolformPageRoutingModule,
    ReactiveFormsModule
  ],
  declarations: [PreschoolformPage]
})
export class PreschoolformPageModule {}
