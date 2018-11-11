import { Component, OnInit } from '@angular/core';
import {ProduitsService} from '../../services/produits.service';
import {NavController} from '@ionic/angular';
import {Produits} from '../../models/produits';

@Component({
  selector: 'app-bas-de-noel',
  templateUrl: './bas-de-noel.page.html',
  styleUrls: ['./bas-de-noel.page.scss'],
})
export class BasDeNoelPage implements OnInit {

    product = [];
    idString: String;
    constructor(private navCtrl: NavController, private produitService: ProduitsService) { }


    ngOnInit() {
        this.getProduits();
    }

    getProduits(): void {
      this.produitService.getProduitsBasDeNoel().subscribe(
          data => this.product = data['products']);
    }

    go(id: number): void {
        this.produitService.setProduitsIndividuelId(id);
        this.navCtrl.navigateForward(id.toString());
    }

}
