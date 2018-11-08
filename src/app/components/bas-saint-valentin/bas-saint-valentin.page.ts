import { Component, OnInit } from '@angular/core';
import {ProduitsService} from '../../services/produits.service';
import {Categories} from '../../models/categories';
import {NavController} from '../../../../node_modules/@ionic/angular';

@Component({
  selector: 'app-bas-saint-valentin',
  templateUrl: './bas-saint-valentin.page.html',
  styleUrls: ['./bas-saint-valentin.page.scss'],
})
export class BasSaintValentinPage implements OnInit {

    product = [];
    constructor(private navCtrl: NavController, private produitService: ProduitsService) { }


    ngOnInit() {
        this.getProduits();
    }

    getProduits(): void {
        this.produitService.getProduitsStValentin().subscribe(
            data => this.product = data['product']);
    }
    /*
    go(categorieClick: Categories): void {
        console.log(categorieClick);
        this.navCtrl.navigateForward(categorieClick.path.toString());
    }*/
}
