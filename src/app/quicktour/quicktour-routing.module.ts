import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { QuicktourPage } from './quicktour.page';

const routes: Routes = [
  {
    path: '',
    component: QuicktourPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class QuicktourPageRoutingModule {}
