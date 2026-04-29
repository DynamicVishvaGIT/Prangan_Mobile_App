import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { QuicktourPageRoutingModule } from './quicktour-routing.module';

import { QuicktourPage } from './quicktour.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    QuicktourPageRoutingModule
  ],
  declarations: [QuicktourPage]
})
export class QuicktourPageModule {}
