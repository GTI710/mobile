import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
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
  { path: '1/4/:id', loadChildren: './components/produit/produit.module#ProduitPageModule' },
  { path: '1/5/:id', loadChildren: './components/produit/produit.module#ProduitPageModule' },
  { path: '1/6/:id', loadChildren: './components/produit/produit.module#ProduitPageModule' },
  { path: '1/7/:id', loadChildren: './components/produit/produit.module#ProduitPageModule' },
  { path: '1/8/:id', loadChildren: './components/produit/produit.module#ProduitPageModule' },
  { path: 'checkout', loadChildren: './components/checkout/checkout.module#CheckoutPageModule' },


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
