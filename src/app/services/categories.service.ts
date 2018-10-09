import { Injectable } from '@angular/core';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import {Observable} from 'rxjs';
import {Categories} from '../models/categories';
import {Produits} from "../models/produits";

@Injectable({
  providedIn: 'root'
})
export class CategoriesService {

  baseUrl = "http://localhost:3000";

  constructor(private http: HttpClient) {}

  getCategories(): Observable<any> {
    const url = this.baseUrl + '/categories';
    return this.http.get<Categories>(url);
  }
  getCategoriesId(id: number): Observable<any> {
    const url = this.baseUrl + `${this.baseUrl}/categories/${id}`;
    return this.http.get<Produits>(url);
  }

}
