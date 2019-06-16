import * as cartAction from '../actions/cart.action';
import { EntityAdapter, createEntityAdapter, EntityState } from '@ngrx/entity';
import { createFeatureSelector, createSelector } from '@ngrx/store';
import { Product } from '@goods/core/models';

export interface CartProduct extends Product {
    count: number | null;
}

export interface CartState extends EntityState<CartProduct> {
    count: number | null;
}

export const adapter: EntityAdapter<CartProduct> = createEntityAdapter<CartProduct>();

export const cartInitialState = adapter.getInitialState({ count: null });

export const cartReducer = (state = cartInitialState, action: cartAction.Action) => {

    switch (action.type) {
        case cartAction.ADD_PRODUCT_CART_TO_CART: {
            const newProduct = action.payload;
            const addProduct = state.entities[action.payload.id];
            return adapter.upsertOne({
                ...newProduct,
                count: addProduct ? addProduct.count + 1 : 1,
            }, state);
        }
        case cartAction.REMOVE_PRODUCT_FROM_CART: {
            const removeProduct = action.payload;
            return adapter.removeOne(removeProduct.id, state);
        }
        case cartAction.INCREMENT_PRODUCT_IN_CART: {
            return adapter.updateOne({
                id: action.payload.id,
                changes: { count: action.payload.count + 1 }
            }, state);
        }
        case cartAction.DECREMENT_PRODUCT_IN_CART: {
            return adapter.updateOne({
                id: action.payload.id,
                changes: { count: action.payload.count - 1 }
            }, state);
        }
        default:
            return state;
    }
};

export const cartSelector = createFeatureSelector<CartState>('cart');

export const { selectAll, selectTotal } = adapter.getSelectors(cartSelector);

export const totalCount = createSelector(
    selectAll, (products: CartProduct[]) => {
        return products.reduce<number>((count: number, product: CartProduct) => {
            return count += product.count;
        }, 0);
    }
);

export const totalPrice = createSelector(
    selectAll, (products: CartProduct[]) => {
        return products.reduce<number>((price: number, product: CartProduct) => {
            return price += product.price * product.count;
        }, 0);
    }
);

