import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EditillnessPage } from './editillness.page';

const routes: Routes = [
  {
    path: '',
    component: EditillnessPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EditillnessPageRoutingModule {}
