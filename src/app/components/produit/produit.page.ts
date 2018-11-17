import { Component, OnInit } from '@angular/core';
import {ProduitsService} from '../../services/produits.service';
import {NavController} from '@ionic/angular';
import {Commentaire} from '../../models/commentaire';
import { Storage } from '@ionic/storage';
import { ToastController } from '@ionic/angular';

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
  quantite: number;
  commentaireUsager: String;
  commentaireModel: Commentaire;



  constructor(private navCtrl: NavController, private produitService: ProduitsService,
              private storage: Storage, private toast: ToastController) { }

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
    postCommentaireUsager() {
      this.commentaireModel.body = this.commentaireUsager;
      this.produitService.postCommentaire(this.commentaireModel.body);
    }
    ajoutAuPanier() {
        // this.tableauStorage.push(this.info);
        this.storage.set(`Bas:${ this.produitInfo }`, this.info);
        const toast = this.toast.create({
            message: 'Page added to favourites!',
            duration: 3000,
            position: 'bottom',
            showCloseButton: true
        });
        // toast.present();
    }
}
