import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SignInOrSinUpPage } from './sign-in-or-sin-up.page';

const routes: Routes = [
  {
    path: '',
    component: SignInOrSinUpPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SignInOrSinUpPageRoutingModule {}
