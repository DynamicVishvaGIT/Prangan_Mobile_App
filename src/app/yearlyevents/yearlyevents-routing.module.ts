import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { YearlyeventsPage } from './yearlyevents.page';

const routes: Routes = [
  {
    path: '',
    component: YearlyeventsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class YearlyeventsPageRoutingModule {}
