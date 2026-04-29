import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ChildprofilePageRoutingModule } from './childprofile-routing.module';

import { ChildprofilePage } from './childprofile.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ChildprofilePageRoutingModule,
    ReactiveFormsModule
  ],
  declarations: [ChildprofilePage]
})
export class ChildprofilePageModule {}
