import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FeestructurePage } from './feestructure.page';

const routes: Routes = [
  {
    path: '',
    component: FeestructurePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FeestructurePageRoutingModule {}
