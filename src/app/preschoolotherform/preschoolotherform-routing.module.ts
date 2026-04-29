import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PreschoolotherformPage } from './preschoolotherform.page';

const routes: Routes = [
  {
    path: '',
    component: PreschoolotherformPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PreschoolotherformPageRoutingModule {}
