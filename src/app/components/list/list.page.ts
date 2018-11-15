import { Component, OnInit } from '@angular/core';
import { Categories } from '../../models/categories';
import { CategoriesService } from '../../services/categories.service';
import { NavController } from '../../../../node_modules/@ionic/angular';
import { _ } from 'lodash';

@Component({
  selector: 'app-list',
  templateUrl: 'list.page.html',
  styleUrls: ['list.page.scss']
})
export class ListPage implements OnInit {

  category: Object;

  constructor(private categorieService: CategoriesService, private navCtrl: NavController) {
  }

  ngOnInit() {
    this.getCategories();
    console.log(this.category);
  }

  getCategories(): void {
      this.categorieService.getCategories().subscribe(
          data => this.category = data['productCategories']);
  }

  go(path: String): void {
      console.log(path);
      this.navCtrl.navigateForward(path.toString());
  }
  // add back when alpha.4 is out
  // navigate(item) {
  //   this.router.navigate(['/list', JSON.stringify(item)]);
  // }
}

