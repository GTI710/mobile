import { Component, OnInit } from '@angular/core';
import {ProduitsService} from '../../services/produits.service';
import {NavController} from '../../../../node_modules/@ionic/angular';

@Component({
  selector: 'app-bas-halloween',
  templateUrl: './bas-halloween.page.html',
  styleUrls: ['./bas-halloween.page.scss'],
})
export class BasHalloweenPage implements OnInit {

    product = [];
    constructor(private navCtrl: NavController, private produitService: ProduitsService) { }


    ngOnInit() {
        this.getProduits();
    }

    getProduits(): void {
        this.produitService.getProduitsHalloween().subscribe(
            data => this.product = data['products']);
    }
    /*
    go(categorieClick: Categories): void {
        console.log(categorieClick);
        this.navCtrl.navigateForward(categorieClick.path.toString());
    }*/

}
