import { Injectable } from '@angular/core';
import {HttpClient, HttpClientModule} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Produits} from '../models/produits';

@Injectable({
  providedIn: 'root'
})
export class ProduitsService {
  // baseUrl: 'http://localhost:3000/basDeNoel';

  constructor (private http: HttpClient) { }

  getProduitsBasDeNoel(): Observable<any> {
    return this.http.get<Produits>('http://localhost:8080/api/product/findall/4');
  }
  getProduitsId(id: number): Observable<any> {
      const url = 'http://localhost:3000/' + `basDeNoel/${id}`;
      return this.http.get<Produits>(url);
  }
  getProduitsUniforme(): Observable<any> {
      return this.http.get<Produits>('http://localhost:8080/1/7/');
  }
  getProduitsHalloween(): Observable<any> {
      return this.http.get<Produits>('http://localhost:8080/1/5/');
  }
  getProduitsStValentin(): Observable<any> {
      return this.http.get<Produits>('http://localhost:8080/1/6/');
  }
  getProduitsCabaneASucre(): Observable<any> {
      return this.http.get<Produits>('http://localhost:8080/1/8/');
  }


}
