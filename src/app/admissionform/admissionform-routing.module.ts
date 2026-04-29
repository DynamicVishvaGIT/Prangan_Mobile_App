import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AdmissionformPage } from './admissionform.page';

const routes: Routes = [
  {
    path: '',
    component: AdmissionformPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AdmissionformPageRoutingModule {}
