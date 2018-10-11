import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'home',
    loadChildren: './home/home.module#HomePageModule'
  },
  {
    path: 'list',
    loadChildren: './list/list.module#ListPageModule'
  },
  { path: 'panier',
    loadChildren: './panier/panier.module#PanierPageModule' },

  { path: 'basDeNoel', loadChildren: './bas-de-noel/bas-de-noel.module#BasDeNoelPageModule' },
  { path: 'basUniforme', loadChildren: './bas-uniforme/bas-uniforme.module#BasUniformePageModule' },
  { path: 'basHalloween', loadChildren: './bas-halloween/bas-halloween.module#BasHalloweenPageModule' },
  { path: 'basCabaneASucre', loadChildren: './bas-cabane-asucre/bas-cabane-asucre.module#BasCabaneASucrePageModule' },
  { path: 'basSaintValentin', loadChildren: './bas-saint-valentin/bas-saint-valentin.module#BasSaintValentinPageModule' }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
