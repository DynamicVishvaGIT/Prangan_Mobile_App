import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AddillnessPage } from './addillness.page';

const routes: Routes = [
  {
    path: '',
    component: AddillnessPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AddillnessPageRoutingModule {}
