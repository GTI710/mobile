import { Component, OnInit } from '@angular/core';
import {Produits} from "../../models/produits";
import {ProduitsService} from "../../services/produits.service";
import {Categories} from "../../models/categories";
import {NavController} from '@ionic/angular';


@Component({
  selector: 'app-bas-uniforme',
  templateUrl: './bas-uniforme.page.html',
  styleUrls: ['./bas-uniforme.page.scss'],
})
export class BasUniformePage implements OnInit {


    product = [];
    constructor(private navCtrl: NavController, private produitService: ProduitsService) { }


    ngOnInit() {
        this.getProduits();
    }

    getProduits(): void {
        this.produitService.getProduitsUniforme().subscribe(
            data => this.product = data['products']);
    }
    /*
    go(categorieClick: Categories): void {
        console.log(categorieClick);
        this.navCtrl.navigateForward(categorieClick.path.toString());
    }*/

}
