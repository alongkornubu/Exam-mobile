import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ShowcameraPage } from './showcamera.page';

const routes: Routes = [
  {
    path: '',
    component: ShowcameraPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ShowcameraPageRoutingModule {}
