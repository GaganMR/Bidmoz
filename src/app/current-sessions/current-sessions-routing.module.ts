import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CurrentSessionsPage } from './current-sessions.page';

const routes: Routes = [
  {
    path: '',
    component: CurrentSessionsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CurrentSessionsPageRoutingModule {}
