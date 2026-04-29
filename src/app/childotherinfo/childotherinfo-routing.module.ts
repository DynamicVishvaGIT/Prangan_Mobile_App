import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ChildotherinfoPage } from './childotherinfo.page';

const routes: Routes = [
  {
    path: '',
    component: ChildotherinfoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ChildotherinfoPageRoutingModule {}
