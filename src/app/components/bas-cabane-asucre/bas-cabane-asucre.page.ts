import { Component, OnInit } from '@angular/core';
import {ProduitsService} from '../../services/produits.service';
import {NavController} from '../../../../node_modules/@ionic/angular';

@Component({
  selector: 'app-bas-cabane-asucre',
  templateUrl: './bas-cabane-asucre.page.html',
  styleUrls: ['./bas-cabane-asucre.page.scss'],
})
export class BasCabaneASucrePage implements OnInit {

    product = [];
    constructor(private navCtrl: NavController, private produitService: ProduitsService) { }


    ngOnInit() {
        this.getProduits();
    }

    getProduits(): void {
        this.produitService.getProduitsCabaneASucre().subscribe(
            data => this.product = data['products']);
    }
    go(id: number): void {
        this.produitService.setProduitsIndividuelId(id);
        this.navCtrl.navigateForward('1/8/' + id.toString());
    }

}
