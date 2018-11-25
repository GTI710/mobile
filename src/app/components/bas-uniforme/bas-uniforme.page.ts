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
    go(id: number): void {
        this.produitService.setProduitsIndividuelId(id);
        this.navCtrl.navigateForward('1/7/' + id.toString());
    }
    back() {
        this.navCtrl.goBack();
    }
}
