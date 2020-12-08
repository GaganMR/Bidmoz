import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FeaturedProductPage } from './featured-product.page';

const routes: Routes = [
  {
    path: '',
    component: FeaturedProductPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FeaturedProductPageRoutingModule {}
