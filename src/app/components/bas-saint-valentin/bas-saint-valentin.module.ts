import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { BasSaintValentinPage } from './bas-saint-valentin.page';

const routes: Routes = [
  {
    path: '',
    component: BasSaintValentinPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [BasSaintValentinPage]
})
export class BasSaintValentinPageModule {}
