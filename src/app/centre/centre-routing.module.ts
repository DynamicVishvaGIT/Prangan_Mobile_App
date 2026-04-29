import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CentrePage } from './centre.page';

const routes: Routes = [
  {
    path: '',
    component: CentrePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CentrePageRoutingModule {}
