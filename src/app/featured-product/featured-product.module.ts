import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { FeaturedProductPageRoutingModule } from './featured-product-routing.module';

import { FeaturedProductPage } from './featured-product.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    FeaturedProductPageRoutingModule
  ],
  declarations: [FeaturedProductPage]
})
export class FeaturedProductPageModule {}
