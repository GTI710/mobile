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

  { path: '1/4/', loadChildren: './components/bas-de-noel/bas-de-noel.module#BasDeNoelPageModule' },
  { path: '1/7/', loadChildren: './components/bas-uniforme/bas-uniforme.module#BasUniformePageModule' },
  { path: '1/5/', loadChildren: './components/bas-halloween/bas-halloween.module#BasHalloweenPageModule' },
  { path: '1/8/', loadChildren: './components/bas-cabane-asucre/bas-cabane-asucre.module#BasCabaneASucrePageModule' },
  { path: '1/6/', loadChildren: './components/bas-saint-valentin/bas-saint-valentin.module#BasSaintValentinPageModule' },
  { path: '2', loadChildren: './components/produit/produit.module#ProduitPageModule' },
  { path: '3', loadChildren: './components/produit/produit.module#ProduitPageModule' },
  { path: '4', loadChildren: './components/produit/produit.module#ProduitPageModule' },
  { path: '5', loadChildren: './components/produit/produit.module#ProduitPageModule' },
  { path: '6', loadChildren: './components/produit/produit.module#ProduitPageModule' },
  { path: '7', loadChildren: './components/produit/produit.module#ProduitPageModule' },
  { path: '8', loadChildren: './components/produit/produit.module#ProduitPageModule' },
  { path: '9', loadChildren: './components/produit/produit.module#ProduitPageModule' },
  { path: '10', loadChildren: './components/produit/produit.module#ProduitPageModule' },
  { path: '11', loadChildren: './components/produit/produit.module#ProduitPageModule' },
  { path: '12', loadChildren: './components/produit/produit.module#ProduitPageModule' },
  { path: '13', loadChildren: './components/produit/produit.module#ProduitPageModule' },
  { path: '14', loadChildren: './components/produit/produit.module#ProduitPageModule' },
  { path: '15', loadChildren: './components/produit/produit.module#ProduitPageModule' },
  { path: '16', loadChildren: './components/produit/produit.module#ProduitPageModule' },
  { path: '17', loadChildren: './components/produit/produit.module#ProduitPageModule' },
  { path: '18', loadChildren: './components/produit/produit.module#ProduitPageModule' },
  { path: '19', loadChildren: './components/produit/produit.module#ProduitPageModule' },



    // { path: 'basDeNoel' + `/${id}`, loadChildren: './components/bas-saint-valentin/bas-saint-valentin.module#BasSaintValentinPageModule' },


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
