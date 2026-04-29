import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { OtheractivitiesPage } from './otheractivities.page';

const routes: Routes = [
  {
    path: '',
    component: OtheractivitiesPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class OtheractivitiesPageRoutingModule {}
