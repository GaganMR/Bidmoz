import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';


import { Routes, RouterModule } from '@angular/router';
import { IonicModule } from '@ionic/angular';

import { BidPlansPageRoutingModule } from './bid-plans-routing.module';

import { BidPlansPage } from './bid-plans.page';
// const routes: Routes = [
//   {
//     path: '',
//     component: BidPlansPage
//   },
// ]
@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    BidPlansPageRoutingModule
  ],
  declarations: [BidPlansPage]
})
export class BidPlansPageModule {}
