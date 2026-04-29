import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ChildotherinfotwoPage } from './childotherinfotwo.page';

const routes: Routes = [
  {
    path: '',
    component: ChildotherinfotwoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ChildotherinfotwoPageRoutingModule {}
