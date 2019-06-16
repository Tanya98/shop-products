import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CartProduct } from '../store/reducers/cart.reducer';

@Component({
  selector: 'goods-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent {

  @Input()
  public product: CartProduct;

  @Output()
  public remove = new EventEmitter();

  @Output()
  public increment = new EventEmitter();

  @Output()
  public decrement = new EventEmitter();

  removeProduct(product): void {
    this.remove.emit(product);
  }

  incrementProduct(product): void {
    this.increment.emit(product);
  }

  decrementProduct(product): void {
    if (product.count === 1) {
      this.remove.emit(product);
      return;
    }
    this.decrement.emit(product);
  }

}
