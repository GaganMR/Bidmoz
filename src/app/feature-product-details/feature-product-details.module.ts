import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { FeatureProductDetailsPageRoutingModule } from './feature-product-details-routing.module';

import { FeatureProductDetailsPage } from './feature-product-details.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    FeatureProductDetailsPageRoutingModule
  ],
  declarations: [FeatureProductDetailsPage]
})
export class FeatureProductDetailsPageModule {}
