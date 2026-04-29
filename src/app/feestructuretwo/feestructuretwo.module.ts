import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { FeestructuretwoPageRoutingModule } from './feestructuretwo-routing.module';

import { FeestructuretwoPage } from './feestructuretwo.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    FeestructuretwoPageRoutingModule
  ],
  declarations: [FeestructuretwoPage]
})
export class FeestructuretwoPageModule {}
