import { Component, OnInit } from '@angular/core';
import { AlertController, NavController } from '@ionic/angular';
import {ProduitsService} from '../../services/produits.service';


@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.page.html',
  styleUrls: ['./checkout.page.scss'],
})
export class CheckoutPage implements OnInit {

  constructor(private alertCtrl: AlertController, private navCtrl: NavController,
              private checkoutPost: ProduitsService) { }

  ngOnInit() {
  }
  checkout(name, address, postalCode, country, ville) {
    const checkout = {
        'nameClient': name,
        'street': address,
        'city': ville,
        'country': country,
        'zipcode': postalCode,
    };
    this.checkoutPost.postCheckOut(checkout);
    this.presentAlert();
    this.navCtrl.navigateForward('list');
    localStorage.clear();
  }
  async presentAlert() {
      const alert = await this.alertCtrl.create({
          header: 'Votre commande est envoyé',
          subHeader: '',
          message: '',
          buttons: ['Merci!']
      });
      await alert.present();
  }

}
