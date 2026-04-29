import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { GallerytwoPage } from './gallerytwo.page';

const routes: Routes = [
  {
    path: '',
    component: GallerytwoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class GallerytwoPageRoutingModule {}
