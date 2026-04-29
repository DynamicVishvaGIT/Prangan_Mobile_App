import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { FeestructurePageRoutingModule } from './feestructure-routing.module';

import { FeestructurePage } from './feestructure.page';
import { SuperTabsModule } from '@ionic-super-tabs/angular';
@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    FeestructurePageRoutingModule,
    SuperTabsModule,
  ],
  declarations: [FeestructurePage]
})
export class FeestructurePageModule {}
