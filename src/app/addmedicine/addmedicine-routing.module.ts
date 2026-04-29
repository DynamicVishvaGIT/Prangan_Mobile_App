import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AddmedicinePage } from './addmedicine.page';

const routes: Routes = [
  {
    path: '',
    component: AddmedicinePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AddmedicinePageRoutingModule {}
