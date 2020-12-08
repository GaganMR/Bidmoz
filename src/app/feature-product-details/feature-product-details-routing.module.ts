import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FeatureProductDetailsPage } from './feature-product-details.page';

const routes: Routes = [
  {
    path: '',
    component: FeatureProductDetailsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FeatureProductDetailsPageRoutingModule {}
