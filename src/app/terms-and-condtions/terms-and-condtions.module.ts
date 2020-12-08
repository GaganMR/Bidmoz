import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TermsAndCondtionsPageRoutingModule } from './terms-and-condtions-routing.module';

import { TermsAndCondtionsPage } from './terms-and-condtions.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TermsAndCondtionsPageRoutingModule
  ],
  declarations: [TermsAndCondtionsPage]
})
export class TermsAndCondtionsPageModule {}
