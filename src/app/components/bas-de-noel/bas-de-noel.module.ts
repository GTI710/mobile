import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { BasDeNoelPage } from './bas-de-noel.page';

const routes: Routes = [
  {
    path: '',
    component: BasDeNoelPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [BasDeNoelPage]
})
export class BasDeNoelPageModule {}
