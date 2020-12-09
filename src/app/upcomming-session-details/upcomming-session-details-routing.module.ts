import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { UpcommingSessionDetailsPage } from './upcomming-session-details.page';

const routes: Routes = [
  {
    path: '',
    component: UpcommingSessionDetailsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class UpcommingSessionDetailsPageRoutingModule {}
