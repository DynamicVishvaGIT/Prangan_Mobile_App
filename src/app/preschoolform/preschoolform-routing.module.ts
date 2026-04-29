import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PreschoolformPage } from './preschoolform.page';

const routes: Routes = [
  {
    path: '',
    component: PreschoolformPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PreschoolformPageRoutingModule {}
