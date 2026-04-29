import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { GallerytwoPageRoutingModule } from './gallerytwo-routing.module';

import { GallerytwoPage } from './gallerytwo.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    GallerytwoPageRoutingModule
  ],
  declarations: [GallerytwoPage]
})
export class GallerytwoPageModule {}
