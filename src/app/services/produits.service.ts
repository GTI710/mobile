import { Injectable } from '@angular/core';
import {HttpClient, HttpClientModule} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Produits} from '../models/produits';

@Injectable({
  providedIn: 'root'
})
export class ProduitsService {
  //baseUrl: 'http://localhost:3000/basDeNoel';

  constructor (private http: HttpClient) { }

  getProduitsNoel(): Observable<any> {
    return this.http.get<Produits>('http://localhost:3000');
  }
  getProduitsUniforme(): Observable<any> {
      return this.http.get<Produits>('http://localhost:3000');
  }
  getProduitsHalloween(): Observable<any> {
      return this.http.get<Produits>('http://localhost:3000');
  }
  getProduitsStValentin(): Observable<any> {
      return this.http.get<Produits>('http://localhost:3000');
  }
  getProduitsCabaneASucre(): Observable<any> {
      return this.http.get<Produits>('http://localhost:3000');
  }
/*
  getProduitsId(id: number): Observable<any> {
    const url = this.baseUrl + `${this.baseUrl}/api/produits/${id}`;
    return this.http.get<Produits>(url);
  }
  */
}
