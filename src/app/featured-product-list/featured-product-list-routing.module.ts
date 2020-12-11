import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FeaturedProductListPage } from './featured-product-list.page';

const routes: Routes = [
  {
    path: '',
    component: FeaturedProductListPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FeaturedProductListPageRoutingModule {}
