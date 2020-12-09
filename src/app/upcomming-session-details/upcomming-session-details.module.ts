import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { UpcommingSessionDetailsPageRoutingModule } from './upcomming-session-details-routing.module';

import { UpcommingSessionDetailsPage } from './upcomming-session-details.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    UpcommingSessionDetailsPageRoutingModule
  ],
  declarations: [UpcommingSessionDetailsPage]
})
export class UpcommingSessionDetailsPageModule {}
