import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {Observable} from 'rxjs';
import {Categories} from '../models/categories';

@Injectable({
  providedIn: 'root'
})
export class CategoriesService {

  baseUrl: String;

  constructor(private http: HttpClient) {}

  getCategories(): Observable<any> {
    const url = this.baseUrl + 'api/categories';
    return this.http.get<Categories>(url);
  }

}
