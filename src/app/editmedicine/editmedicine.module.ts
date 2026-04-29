import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { EditmedicinePageRoutingModule } from './editmedicine-routing.module';

import { EditmedicinePage } from './editmedicine.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    EditmedicinePageRoutingModule,
    ReactiveFormsModule
  ],
  declarations: [EditmedicinePage]
})
export class EditmedicinePageModule {}
