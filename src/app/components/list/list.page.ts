import { Component, OnInit } from '@angular/core';
import { Categories } from "../../models/categories";
import { CategoriesService } from "../../services/categories.service";
import {NavController} from '../../../../node_modules/@ionic/angular';

@Component({
  selector: 'app-list',
  templateUrl: 'list.page.html',
  styleUrls: ['list.page.scss']
})
export class ListPage implements OnInit {

  categorie = Categories[0];

  constructor(private categorieService: CategoriesService, private navCtrl: NavController) {
  }

  ngOnInit() {
    this.getCategories();
  }

  getCategories(): void {
      this.categorieService.getCategories().subscribe(
          (data) => {
              this.categorie = data;
              console.log(this.categorie);
          }
      );
  }

  go(categorieClick: Categories): void {
      console.log(categorieClick);
      this.navCtrl.navigateForward(categorieClick.path.toString());
  }
  // add back when alpha.4 is out
  // navigate(item) {
  //   this.router.navigate(['/list', JSON.stringify(item)]);
  // }
}

