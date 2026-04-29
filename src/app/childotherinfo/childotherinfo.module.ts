import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ChildotherinfoPageRoutingModule } from './childotherinfo-routing.module';

import { ChildotherinfoPage } from './childotherinfo.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ChildotherinfoPageRoutingModule,
    ReactiveFormsModule
  ],
  declarations: [ChildotherinfoPage]
})
export class ChildotherinfoPageModule {}
