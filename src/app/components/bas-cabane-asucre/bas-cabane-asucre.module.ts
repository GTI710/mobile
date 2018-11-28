import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { BasCabaneASucrePage } from './bas-cabane-asucre.page';

const routes: Routes = [
  {
    path: '',
    component: BasCabaneASucrePage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [BasCabaneASucrePage]
})
export class BasCabaneASucrePageModule {}
