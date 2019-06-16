import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { Product } from '../models';
import * as productDetailsAction from '../.././features/product-details/store/actions/product-details.action';
import { ProductDetailstState } from '@goods/features/product-details/store/reducers/product-details.reducer';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ProductDetailstService {

  public oneProduct$: Observable<Product[]>;

  constructor(private oneProduct: Store<ProductDetailstState>) {
    this.oneProduct$ = oneProduct.select((state: any) => state.productDetails.products);
  }

  getAllProducts() {
    return this.oneProduct.dispatch(new productDetailsAction.GetAllProducts());
  }

  getOneProduct(id) {
    return this.oneProduct$.pipe(
      map((products: Product[]) => products.filter((product: Product) => product.id == id))
    )
  }
}
