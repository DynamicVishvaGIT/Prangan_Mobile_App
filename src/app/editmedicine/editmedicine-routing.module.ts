import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EditmedicinePage } from './editmedicine.page';

const routes: Routes = [
  {
    path: '',
    component: EditmedicinePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EditmedicinePageRoutingModule {}
