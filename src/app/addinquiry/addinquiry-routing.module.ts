import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AddinquiryPage } from './addinquiry.page';

const routes: Routes = [
  {
    path: '',
    component: AddinquiryPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AddinquiryPageRoutingModule {}
