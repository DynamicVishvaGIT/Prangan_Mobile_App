import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { OtheractivitiesPageRoutingModule } from './otheractivities-routing.module';

import { OtheractivitiesPage } from './otheractivities.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    OtheractivitiesPageRoutingModule
  ],
  declarations: [OtheractivitiesPage]
})
export class OtheractivitiesPageModule {}
