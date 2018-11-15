import { Component, OnInit } from '@angular/core';
import {ProduitsService} from '../../services/produits.service';
import {NavController} from '@ionic/angular';
import {Produits} from '../../models/produits';
import { Storage } from '@ionic/storage';

@Component({
  selector: 'app-produit',
  templateUrl: './produit.page.html',
  styleUrls: ['./produit.page.scss'],
})
export class ProduitPage implements OnInit {

  produitId = this.produitService.getProduitsIndividuelId();
  info: Object;
  commentaires: Object;
  produitInfo: Object;
  tableauStorage = [];

  constructor(private navCtrl: NavController, private produitService: ProduitsService, private storage: Storage) { }

  ngOnInit() {
    this.getProduitIndividuel();
    this.getCommentaires();
  }

  getProduitIndividuel() {
      this.produitService.getProduitsId(this.produitId).subscribe(
          (data) => {
              this.info = data['product'];
              console.log(this.info);
          }
      );
  }
    getCommentaires() {
        this.produitService.getProduitsId(this.produitId).subscribe(
            (data) => {
                this.commentaires = data['product']['comments'];
                console.log(this.commentaires);
            }
        );
    }
    ajoutAuPanier() {
        // this.tableauStorage.push(this.info);
        this.storage.set(`Bas:${ this.produitInfo }`, this.info);
    }
}
