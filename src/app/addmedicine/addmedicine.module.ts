import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AddmedicinePageRoutingModule } from './addmedicine-routing.module';

import { AddmedicinePage } from './addmedicine.page';
import { IonBottomSheetModule } from 'ion-bottom-sheet';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AddmedicinePageRoutingModule,
    IonBottomSheetModule,
    ReactiveFormsModule

  ],
  declarations: [AddmedicinePage]
})
export class AddmedicinePageModule {}
