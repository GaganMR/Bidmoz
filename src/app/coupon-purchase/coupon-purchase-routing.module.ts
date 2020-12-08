import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CouponPurchasePage } from './coupon-purchase.page';

const routes: Routes = [
  {
    path: '',
    component: CouponPurchasePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CouponPurchasePageRoutingModule {}
