import { CartProduct } from '../reducers/cart.reducer';

export const ADD_PRODUCT_CART_TO_CART = '[Product] Add Product to Cart';
export const REMOVE_PRODUCT_FROM_CART = '[Product] Remove Product from Cart';
export const INCREMENT_PRODUCT_IN_CART = '[Product] Increment Product in Cart';
export const DECREMENT_PRODUCT_IN_CART = '[Product] Decrement Product in Cart';

export class AddProductCart {
    readonly type = ADD_PRODUCT_CART_TO_CART;
    constructor(public payload: CartProduct) { }
}
export class RemoveProductCart {
    readonly type = REMOVE_PRODUCT_FROM_CART;
    constructor(public payload: CartProduct) { }
}
export class IncrementProductCart {
    readonly type = INCREMENT_PRODUCT_IN_CART;
    constructor(public payload: CartProduct) { }
}
export class DecrementProductCart {
    readonly type = DECREMENT_PRODUCT_IN_CART;
    constructor(public payload: CartProduct) { }
}

export type Action = AddProductCart | RemoveProductCart | IncrementProductCart | DecrementProductCart;
