import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BidPlansPage } from './bid-plans.page';

const routes: Routes = [
  {
    path: '',
    component: BidPlansPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BidPlansPageRoutingModule {}
