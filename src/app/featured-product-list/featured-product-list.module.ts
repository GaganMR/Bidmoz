import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { FeaturedProductListPageRoutingModule } from './featured-product-list-routing.module';

import { FeaturedProductListPage } from './featured-product-list.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    FeaturedProductListPageRoutingModule
  ],
  declarations: [FeaturedProductListPage]
})
export class FeaturedProductListPageModule {}
