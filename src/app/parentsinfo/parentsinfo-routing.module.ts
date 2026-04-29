import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ParentsinfoPage } from './parentsinfo.page';

const routes: Routes = [
  {
    path: '',
    component: ParentsinfoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ParentsinfoPageRoutingModule {}
