import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SignInOrSinUpPageRoutingModule } from './sign-in-or-sin-up-routing.module';

import { SignInOrSinUpPage } from './sign-in-or-sin-up.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SignInOrSinUpPageRoutingModule
  ],
  declarations: [SignInOrSinUpPage]
})
export class SignInOrSinUpPageModule {}
