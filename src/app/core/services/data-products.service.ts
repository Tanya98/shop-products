import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})

export class DataProductsService {

  private products = 'api/products';
  private categories = 'api/categories';

  constructor(private http: HttpClient) { }

  getProducts() {
    return this.http.get(`${this.products}`);
  }

  getCategories() {
    return this.http.get(`${this.categories}`);
  }
}
