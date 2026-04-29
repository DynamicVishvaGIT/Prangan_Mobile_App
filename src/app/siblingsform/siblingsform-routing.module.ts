import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SiblingsformPage } from './siblingsform.page';

const routes: Routes = [
  {
    path: '',
    component: SiblingsformPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SiblingsformPageRoutingModule {}
