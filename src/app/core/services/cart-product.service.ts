import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import * as fromAction from '../../shared/layout/cart/store/actions/cart.action';
import * as fromReducer from '../../shared/layout/cart/store/reducers/cart.reducer';
import { CartProduct } from '../../shared/layout/cart/store/reducers/cart.reducer';

@Injectable({
  providedIn: 'root'
})

export class CartProductService {

  products$: Observable<CartProduct[]>;
  totalCount$: Observable<number>;
  totalPrice$: Observable<number>;

  constructor(private store: Store<fromReducer.CartState>) {
    this.products$ = this.store.select(fromReducer.selectAll);
    this.totalCount$ = this.store.select(fromReducer.totalCount);
    this.totalPrice$ = this.store.select(fromReducer.totalPrice);
  }

  remove(product): void {
    this.store.dispatch(new fromAction.RemoveProductCart(product));
  }

  increment(product): void {
    this.store.dispatch(new fromAction.IncrementProductCart(product));
  }

  decrement(product): void {
    this.store.dispatch(new fromAction.DecrementProductCart(product));
  }

}
