import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { CartProductService } from '@goods/core/services/cart-product.service';
import { CartProduct } from './store/reducers/cart.reducer';

@Component({
  selector: 'goods-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {

  public products$: Observable<CartProduct[]>;
  public totalCount$: Observable<number>;
  public totalPrice$: Observable<number>;

  constructor(private cartProductService: CartProductService) { }

  ngOnInit() {
    this.products$ = this.cartProductService.products$;
    this.totalCount$ = this.cartProductService.totalCount$;
    this.totalPrice$ = this.cartProductService.totalPrice$;
  }

  removeProduct(product): void {
    this.cartProductService.remove(product);
  }

  incrementProduct(product): void {
    this.cartProductService.increment(product);
  }

  decrementProduct(product): void {
    this.cartProductService.decrement(product);
  }

}
