import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { BasHalloweenPage } from './bas-halloween.page';

const routes: Routes = [
  {
    path: '',
    component: BasHalloweenPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [BasHalloweenPage]
})
export class BasHalloweenPageModule {}
