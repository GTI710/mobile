import { Component, OnInit } from '@angular/core';
import {ProduitsService} from '../../services/produits.service';
import {NavController} from '@ionic/angular';

@Component({
  selector: 'app-produit',
  templateUrl: './produit.page.html',
  styleUrls: ['./produit.page.scss'],
})
export class ProduitPage implements OnInit {

  produitId = this.produitService.getProduitsIndividuelId();
  info = Object;

  constructor(private navCtrl: NavController, private produitService: ProduitsService) { }

  ngOnInit() {
    this.getProduitIndividuel();
  }

  getProduitIndividuel() {
      this.produitService.getProduitsId(this.produitId).subscribe(
          (data) => {
              this.info = data['product'];
              console.log(this.info);
          }
      );
  }
}
