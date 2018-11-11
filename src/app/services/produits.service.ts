import { Injectable } from '@angular/core';
import {HttpClient, HttpClientModule} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Produits} from '../models/produits';

@Injectable({
  providedIn: 'root'
})
export class ProduitsService {
  // baseUrl: 'http://localhost:3000/basDeNoel';
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
  getProduitsId(id: number): Observable<any> {
    const url = `http://localhost:8080/api/product/` + id;
    return this.http.get<Produits>(url);
  }
  setProduitsIndividuelId(id: number): void {
      this.idSelection = id;
  }
  getProduitsIndividuelId() {
      return this.idSelection;
  }
}
