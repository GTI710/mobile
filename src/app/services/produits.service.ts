import { Injectable } from '@angular/core';
import {HttpClient, HttpClientModule} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Produits} from '../models/produits';

@Injectable({
  providedIn: 'root'
})
export class ProduitsService {
  baseUrl: 'http://localhost:3000/basDeNoel';

  constructor (private http: HttpClient) { }

  getProduits(): Observable<any> {
    return this.http.get<Produits>('http://localhost:3000/basDeNoel');
  }

  getProduitsId(id: number): Observable<any> {
    const url = this.baseUrl + `${this.baseUrl}/api/produits/${id}`;
    return this.http.get<Produits>(url);
  }
}
