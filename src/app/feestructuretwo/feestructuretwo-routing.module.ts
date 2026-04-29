import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FeestructuretwoPage } from './feestructuretwo.page';

const routes: Routes = [
  {
    path: '',
    component: FeestructuretwoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FeestructuretwoPageRoutingModule {}
