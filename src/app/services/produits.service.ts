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
    return this.http.get<Produits>('http://localhost:8080/api/product/findall/4');
  }
  getProduitsUniforme(): Observable<any> {
      return this.http.get<Produits>('http://localhost:8080/api/product/findall/7');
  }
  getProduitsHalloween(): Observable<any> {
      return this.http.get<Produits>('http://localhost:8080/api/product/findall/5');
  }
  getProduitsStValentin(): Observable<any> {
      return this.http.get<Produits>('http://localhost:8080/api/product/findall/6');
  }
  getProduitsCabaneASucre(): Observable<any> {
      return this.http.get<Produits>('http://localhost:8080/api/product/findall/8');
  }
  getProduitsId(id: number) {
    return this.http.get<Produits>('http://localhost:8080/api/product/' + id);
  }
  setProduitsIndividuelId(id: number): void {
      this.idSelection = id;
  }
  getProduitsIndividuelId() {
      return this.idSelection;
  }
}
