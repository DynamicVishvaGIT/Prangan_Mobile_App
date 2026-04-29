import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ParentsinfoPageRoutingModule } from './parentsinfo-routing.module';

import { ParentsinfoPage } from './parentsinfo.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ParentsinfoPageRoutingModule,
    ReactiveFormsModule
  ],
  declarations: [ParentsinfoPage]
})
export class ParentsinfoPageModule {}
