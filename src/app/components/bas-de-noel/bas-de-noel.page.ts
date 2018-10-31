import { Component, OnInit } from '@angular/core';
import {ProduitsService} from '../../services/produits.service';
import {NavController} from '@ionic/angular';
import {Produits} from '../../models/produits';
import {Categories} from '../../models/categories';

@Component({
  selector: 'app-bas-de-noel',
  templateUrl: './bas-de-noel.page.html',
  styleUrls: ['./bas-de-noel.page.scss'],
})
export class BasDeNoelPage implements OnInit {

    produit = Produits[0];
    constructor(private navCtrl: NavController, private produitService: ProduitsService) { }


    ngOnInit() {
        this.getProduits();
    }

    getProduits(): void {
      this.produitService.getProduits().subscribe(
          (data) => {
              this.produit = data;
              console.log(this.produit);
          });
    }
    go(categorieClick: Categories): void {
        console.log(categorieClick);
        this.navCtrl.navigateForward(categorieClick.path.toString());
    }
}
