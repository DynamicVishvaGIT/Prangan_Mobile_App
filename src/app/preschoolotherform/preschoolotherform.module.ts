import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PreschoolotherformPageRoutingModule } from './preschoolotherform-routing.module';

import { PreschoolotherformPage } from './preschoolotherform.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PreschoolotherformPageRoutingModule,
    ReactiveFormsModule
  ],
  declarations: [PreschoolotherformPage]
})
export class PreschoolotherformPageModule {}
