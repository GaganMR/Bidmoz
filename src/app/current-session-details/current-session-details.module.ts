import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CurrentSessionDetailsPageRoutingModule } from './current-session-details-routing.module';

import { CurrentSessionDetailsPage } from './current-session-details.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CurrentSessionDetailsPageRoutingModule
  ],
  declarations: [CurrentSessionDetailsPage]
})
export class CurrentSessionDetailsPageModule {}
