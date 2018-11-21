import { Component, OnInit } from '@angular/core';
import {Validators, FormControl, FormGroup} from '@angular/forms';
import { Storage } from '@ionic/storage';
import { AlertController, NavController } from '@ionic/angular';


@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.page.html',
  styleUrls: ['./checkout.page.scss'],
})
export class CheckoutPage implements OnInit {

  name: String;
  lastName: String;
  address: String;
  phone: String;
  email: String;
  postalCode: String;
  creditCard: String;
  creditCardCvv: String;
  creditCardName: String;
  creditCardExpiration: String;

  constructor(private storage: Storage, private alertCtrl: AlertController, private navCtrl: NavController) { }

  ngOnInit() {
  }
  clear() {
    this.storage.clear().then(() => {
        console.log('all keys cleared');
    });
    this.name = '';
    this.lastName = '';
    this.address = '';
    this.phone = '';
    this.email = '';
    this.postalCode = '';
    this.creditCard = '';
    this.creditCardCvv = '';
    this.creditCardName = '';
    this.creditCardExpiration = '';

    this.presentAlert();
    this.navCtrl.navigateForward('panier');
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
