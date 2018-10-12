import { Component, OnInit } from '@angular/core';
import { Categories } from "../../models/categories";
import { CategoriesService } from "../../services/categories.service";
import {ProduitsService} from "../../services/produits.service";
import {Produits} from "../../models/produits";
import {NavController} from '../../../../node_modules/@ionic/angular';

@Component({
  selector: 'app-list',
  templateUrl: 'list.page.html',
  styleUrls: ['list.page.scss']
})
export class ListPage implements OnInit {

  categorie = Categories[0];
  produit = Produits;

  constructor(private categorieService: CategoriesService, private produitService: ProduitsService, private navCtrl: NavController) {
  }

  ngOnInit() {
    this.getCategories();
    //this.getProduits();
  }

  getCategories(): void{
      this.categorieService.getCategories().subscribe(
          (data) => {
              this.categorie = data;
              console.log(this.categorie);
          }
      );
  }

  getProduits(): void{
      this.produitService.getProduits().subscribe(
          (data) => {
              this.produit = data;
              console.log(this.produit);
          });
    }

    go(categorieClick: Categories): void{
      console.log(categorieClick);
      this.navCtrl.navigateForward(categorieClick.path.toString());
    }
  // add back when alpha.4 is out
  // navigate(item) {
  //   this.router.navigate(['/list', JSON.stringify(item)]);
  // }
}

