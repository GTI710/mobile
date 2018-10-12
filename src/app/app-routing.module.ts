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
    loadChildren: './components/home/home.module#HomePageModule'
  },
  {
    path: 'list',
    loadChildren: './components/list/list.module#ListPageModule'
  },
  { path: 'panier',
    loadChildren: './components/panier/panier.module#PanierPageModule' },

  { path: 'basDeNoel', loadChildren: './components/bas-de-noel/bas-de-noel.module#BasDeNoelPageModule' },
  { path: 'basUniforme', loadChildren: './components/bas-uniforme/bas-uniforme.module#BasUniformePageModule' },
  { path: 'basHalloween', loadChildren: './components/bas-halloween/bas-halloween.module#BasHalloweenPageModule' },
  { path: 'basCabaneASucre', loadChildren: './components/bas-cabane-asucre/bas-cabane-asucre.module#BasCabaneASucrePageModule' },
  { path: 'basSaintValentin', loadChildren: './components/bas-saint-valentin/bas-saint-valentin.module#BasSaintValentinPageModule' }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
