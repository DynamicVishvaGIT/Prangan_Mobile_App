import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AddillnessPageRoutingModule } from './addillness-routing.module';

import { AddillnessPage } from './addillness.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AddillnessPageRoutingModule,
    ReactiveFormsModule
  ],
  declarations: [AddillnessPage]
})
export class AddillnessPageModule {}
