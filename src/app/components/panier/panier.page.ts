import { Component, OnInit } from '@angular/core';
import { Storage } from '@ionic/storage';
import {NavController} from '../../../../node_modules/@ionic/angular';


@Component({
  selector: 'app-panier',
  templateUrl: './panier.page.html',
  styleUrls: ['./panier.page.scss'],
})
export class PanierPage implements OnInit {

  storageData: object;

  constructor(private storage: Storage, private navCtrl: NavController) { }

  ngOnInit() {
     this.storageData =  this.storage.get('Basundefined').then((value) => {
         this.storageData = value;
     });
     console.log(this.storageData);
  }

  checkout() {
      this.navCtrl.navigateForward('checkout');
  }
  remove()  {
  }
}
