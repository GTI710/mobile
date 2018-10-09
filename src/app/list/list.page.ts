import { Component, OnInit } from '@angular/core';
import { Categories } from "../models/categories";
import { CategoriesService } from "../services/categories.service";
import {ProduitsService} from "../services/produits.service";
import {Produits} from "../models/produits";

@Component({
  selector: 'app-list',
  templateUrl: 'list.page.html',
  styleUrls: ['list.page.scss']
})
export class ListPage implements OnInit {
    /*private selectedItem: any;
    private icons = [
        'flask',
        'wifi',
        'beer',
        'football',
        'basketball',
        'paper-plane',
        'american-football',
        'boat',
        'bluetooth',
        'build'
    ];*/
  categorie = Categories[0];
  produit = Produits[0];
  //public items: Array<{ title: string; note: string; icon: string }> = [];

  constructor(private categorieService: CategoriesService, private produitService: ProduitsService) {

    /*for (let i = 1; i < 11; i++) {
      this.items.push({
        title: 'Item ' + i,
        note: 'This is item #' + i,
        icon: this.icons[Math.floor(Math.random() * this.icons.length)]
      });
    }*/
  }

  ngOnInit() {
    this.getCategories();
    this.getProduits();
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
            }
        );
    }
  // add back when alpha.4 is out
  // navigate(item) {
  //   this.router.navigate(['/list', JSON.stringify(item)]);
  // }
}

