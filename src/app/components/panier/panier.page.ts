import { Component, OnInit } from '@angular/core';
import {NavController} from '@ionic/angular';
import {ProduitsService} from '../../services/produits.service';


@Component({
  selector: 'app-panier',
  templateUrl: './panier.page.html',
  styleUrls: ['./panier.page.scss'],
})
export class PanierPage implements OnInit {

    produits: Array<Object>;
    total: number;

    constructor(private navCtrl: NavController, private produitService: ProduitsService) {
    }

    ngOnInit() {
        this.getItemsInPanier();
        this.getTotal();
    }

    checkout() {
        this.produits = [];
        this.navCtrl.navigateForward('checkout');
    }

    getTotal() {
        // this.total = 0;
        // @ts-ignore
       this.produit.forEach(x => this.total += Number(x.listPrice * x.countInCart));
    }
    modifierquantite(id: number, quantity: string): boolean {
        if (id !== null && id !== undefined) {
            let itemsInCart = {};
            if (localStorage.getItem('itemsInCart') !== null) {
                itemsInCart = JSON.parse(localStorage.getItem('itemsInCart'));
            }

            itemsInCart[id] = +quantity;
            localStorage.setItem('itemsInCart', JSON.stringify(itemsInCart));

            // @ts-ignore
            this.produits.filter(x => x.idProductTemplate === id)[0].countInCart = +quantity;
            this.getTotal();
            return true;
        }

        return false;
    }
    getItemsInPanier() {
        let panier = {};
        this.produits = [];
        this.total = 0;

        if (localStorage.getItem('itemsInCart') !== null && localStorage.getItem('itemsInCart') !== undefined) {
            panier = JSON.parse(localStorage.getItem('itemsInCart'));
        }

        const keys = Object.keys(panier);

        for (const item of keys) {
            this.produitService.getProduitsId(item).subscribe(
                (data) => {
                    const modifiedItem = data['product'];
                    modifiedItem.countInCart = panier[item];
                    this.produits.push(modifiedItem);
                    this.total += Number(modifiedItem.listPrice * modifiedItem.countInCart);
                    console.log(this.produits);
                }
            );
        }
    }

    remove(id): boolean {
        if (id !== null && id !== undefined) {
            let itemsInCart = {};
            if (localStorage.getItem('itemsInCart') !== null) {
                itemsInCart = JSON.parse(localStorage.getItem('itemsInCart'));
            }
            delete itemsInCart[id];
            localStorage.setItem('itemsInCart', JSON.stringify(itemsInCart));
            this.produits.forEach((item, index) => {
                // @ts-ignore
                if (item.idProductTemplate === id) {
                    this.produits.splice(index, 1);
                }
            });
            this.getTotal();
            return true;
        }
        return false;
    }
}
