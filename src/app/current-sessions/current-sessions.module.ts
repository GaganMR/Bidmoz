import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CurrentSessionsPageRoutingModule } from './current-sessions-routing.module';

import { CurrentSessionsPage } from './current-sessions.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CurrentSessionsPageRoutingModule
  ],
  declarations: [CurrentSessionsPage]
})
export class CurrentSessionsPageModule {}
