import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { YearlyeventsPageRoutingModule } from './yearlyevents-routing.module';

import { YearlyeventsPage } from './yearlyevents.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    YearlyeventsPageRoutingModule
  ],
  declarations: [YearlyeventsPage]
})
export class YearlyeventsPageModule {}
