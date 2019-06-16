import * as fromAction from '../actions/product-details.action';
import { Product } from '@goods/core/models';

export interface ProductDetailstState {
    products: Product[];
}

export const productDetailstInitialState: ProductDetailstState = {
    products: [],
};

export const productDetailsReducer = (state = productDetailstInitialState, action: fromAction.Action) => {
    switch (action.type) {

        case fromAction.GET_ALL_PRODUCTS: {
            return { ...state };
        }
        case fromAction.SET_ALL_PRODUCTS: {
            const allProducts = action.payload;
            return {
                ...state,
                products: state.products.length === 0 ? [...state.products.concat(...allProducts)] : state.products,
            };
        }
        default:
            return state;
    }
};
