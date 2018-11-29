import { Injectable } from '@angular/core';
import {HttpClient, HttpClientModule} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Produits} from '../models/produits';

@Injectable({
  providedIn: 'root'
})
export class ProduitsService {
  // baseUrl: '172.16.5.104';
    // http://localhost
    idSelection: number;

  constructor (private http: HttpClient) { }

  getProduitsBasDeNoel(): Observable<any> {
    return this.http.get<Produits>('http://172.20.10.2:8080/api/product/findall/4');
  }
  getProduitsUniforme(): Observable<any> {
      return this.http.get<Produits>('http://172.20.10.2:8080/api/product/findall/7');
  }
  getProduitsHalloween(): Observable<any> {
      return this.http.get<Produits>('http://172.20.10.2:8080/api/product/findall/5');
  }
  getProduitsStValentin(): Observable<any> {
      return this.http.get<Produits>('http://172.20.10.2:8080/api/product/findall/6');
  }
  getProduitsCabaneASucre(): Observable<any> {
      return this.http.get<Produits>('http://172.20.10.2:8080/api/product/findall/8');
  }
  getProduitsId(id: Object) {
    return this.http.get<Produits>('http://172.20.10.2:8080/api/product/' + id);
  }
  setProduitsIndividuelId(id: number): void {
      this.idSelection = id;
  }
  getProduitsIndividuelId() {
      return this.idSelection;
  }
  postCommentaire(commentaire) {
      return this.http.post('http://172.20.10.2:8080/api/comment', commentaire).subscribe(res => {
              console.log(res);
          },
          err => {
              console.log('Error occured');
          }
      );
  }

  postCheckOut(checkout) {
      return this.http.post('http://172.20.10.2:8080/api/sale', checkout).subscribe(res => {
              console.log(res);
          },
          err => {
              console.log('Error occured');
          }
      );
  }

  postRating(rating) {
      return this.http.post('http://172.20.10.2:8080/api/rating', rating).subscribe(res => {
              console.log(res);
          },
          err => {
              console.log('Error occured');
          }
      );
  }
}
