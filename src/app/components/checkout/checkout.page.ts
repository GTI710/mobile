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
    //this.presentAlertConfirm();
    this.presentAlert();
    this.navCtrl.navigateForward('list');
    localStorage.clear();

  }
  async presentAlert() {
      const alert = await this.alertCtrl.create({
          header: 'Votre c',
          subHeader: '',
          message: '',
          buttons: ['Merci!']
      });
      await alert.present();
  }
    async presentAlertConfirm() {
        const alert = await this.alertCtrl.create({
            header: 'Votre commande est sur le point d\'être envoyé',
            message: '',
            buttons: [
                {
                    text: 'Cancel',
                    role: 'cancel',
                    cssClass: 'secondary',
                    handler: () => {
                        alert.dismiss(false);
                        return false;
                    }
                }, {
                    text: 'Okay',
                    handler: () => {
                        alert.dismiss(true);
                        return true;
                    }
                }
            ]
        });

        await alert.present();
    }

}
