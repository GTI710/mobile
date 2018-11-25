import { Component, OnInit } from '@angular/core';
import {ProduitsService} from '../../services/produits.service';
import {NavController, AlertController} from '@ionic/angular';
import { ToastController } from '@ionic/angular';


@Component({
  selector: 'app-produit',
  templateUrl: './produit.page.html',
  styleUrls: ['./produit.page.scss'],
})
export class ProduitPage implements OnInit {

    produitId = this.produitService.getProduitsIndividuelId();
    info: Object;
    quantite: number;
    rating: number;


    constructor(private navCtrl: NavController, private produitService: ProduitsService,
                private toast: ToastController, private alertCtrl: AlertController) {
    }

    ngOnInit() {
        this.produitService.getProduitsId(this.produitId).subscribe(
            (data) => {
                this.info = data['product'];
            }
        );
    }

    postRating(score, id) {
        console.log(score);
        console.log(id);
        const rating = {
            'idProductTemplate': id,
            'score': score
        };
        this.produitService.postRating(rating);
        this.presentAlertScore();
    }
    postCommentaireUsager(comment, id) {

        console.log(comment);
        const commentaire = {
            'idProductTemplate': id,
            'body': comment
        };
        if (comment !== null && comment !== undefined && comment !== '') {
            this.produitService.postCommentaire(commentaire);
            this.presentAlertCommentaire();
        } else {
            this.presentAlertCommentaireVide();
        }
    }

    ajoutAuPanier(id, quantite) {
        if (quantite == null || quantite === undefined || quantite === 0 ) {
            this.presentAlertQuantite();
        } else {this.presentAlertAjout(); }
        if (id !== null && id !== undefined) {
            let itemsInCart = {};
            if (localStorage.getItem('itemsInCart') !== null) {
                itemsInCart = JSON.parse(localStorage.getItem('itemsInCart'));
            }

            itemsInCart[id] = quantite;
            localStorage.setItem('itemsInCart', JSON.stringify(itemsInCart));
            document.getElementById('cart-add-alert').classList.remove('d-none');
            return true;
        }
        return false;
    }
    back(id) {
        this.navCtrl.navigateBack('1/' + id + '/');
    }

    async toastMsg() {
        const toast = await this.toast.create({
            message: 'Your settings have been saved.',
            duration: 2000
        });
        toast.present();
    }
    async presentAlertScore() {
        const alert = await this.alertCtrl.create({
            header: '',
            subHeader: 'Le score que vous avez soumis est',
            message: '' + this.rating,
            buttons: ['Merci!']
        });
        await alert.present();
    }
    async presentAlertCommentaire() {
        const alert = await this.alertCtrl.create({
            header: '',
            subHeader: 'Le commentaire a bien été soumis',
            message: '',
            buttons: ['Merci!']
        });
        await alert.present();
    }
    async presentAlertCommentaireVide() {
        const alert = await this.alertCtrl.create({
            header: '',
            subHeader: 'Vous n\'avez rien écris comme commentaire',
            message: '',
            buttons: ['Veuillez écrire un commentaire!']
        });
        await alert.present();
    }
    async presentAlertQuantite() {
        const alert = await this.alertCtrl.create({
            header: '',
            subHeader: '\'Vous n\'avez pas choisit de quantité',
            message: '',
            buttons: ['Merci!']
        });
        await alert.present();
    }
    async presentAlertAjout() {
        const alert = await this.alertCtrl.create({
            header: '',
            subHeader: 'Vous avez ajouté ' + this.quantite + ' bas à votre panier',
            message: '',
            buttons: ['Merci!']
        });
        await alert.present();
    }
}
