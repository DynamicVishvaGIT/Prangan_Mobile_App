import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AddadmissionPage } from './addadmission.page';

const routes: Routes = [
  {
    path: '',
    component: AddadmissionPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AddadmissionPageRoutingModule {}
