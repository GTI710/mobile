import { Component, OnInit } from '@angular/core';
import { Storage } from '@ionic/storage';


@Component({
  selector: 'app-panier',
  templateUrl: './panier.page.html',
  styleUrls: ['./panier.page.scss'],
})
export class PanierPage implements OnInit {

  storageData: object;

  constructor(private storage: Storage) { }

  ngOnInit() {
     this.storageData =  this.storage.get('Basundefined').then((value) => {
         this.storageData = value;
     });
     console.log(this.storageData);
  }

}
