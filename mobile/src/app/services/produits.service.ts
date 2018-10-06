import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Produits} from '../models/produits';

@Injectable({
  providedIn: 'root'
})
export class ProduitsService {
  baseUrl: String;

  constructor (private http: HttpClient) { }

  getProduits(): Observable<any> {
    const url = this.baseUrl + 'api/produits';
    return this.http.get<Produits>(url);
  }

  getProduitsId(id: number): Observable<any> {
    const url = this.baseUrl + `${this.baseUrl}/api/produits/${id}`;
    return this.http.get<Produits>(url);
  }
}
