import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ChildotherinfotwoPageRoutingModule } from './childotherinfotwo-routing.module';

import { ChildotherinfotwoPage } from './childotherinfotwo.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ChildotherinfotwoPageRoutingModule,
    ReactiveFormsModule
  ],
  declarations: [ChildotherinfotwoPage]
})
export class ChildotherinfotwoPageModule {}
