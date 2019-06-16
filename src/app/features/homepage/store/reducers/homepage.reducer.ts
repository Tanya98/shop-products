import * as fromAction from '../actions/homepage.action';
// import * as _ from 'lodash';
import { Category, Product } from '@goods/core/models';

export interface HomePageState {
    productsByCategory: Product[];
    products: Product[];
    categories: Category[];
}

export const homepageInitialState: HomePageState = {
    productsByCategory: [],
    products: [],
    categories: []
};

export const homepageReducer = (state = homepageInitialState, action: fromAction.Action) => {
    switch (action.type) {

        case fromAction.GET_ALL_PRODUCTS: {
            return { ...state };
        }
        case fromAction.GET_ALL_CATEGORIES: {
            return { ...state };
        }
        case fromAction.SET_ALL_PRODUCTS: {
            const products = action.payload;
            return {
                ...state,
                products: state.products.length === 0 ? [...state.products.concat(...products)] : state.products,
            };
        }
        case fromAction.SET_ALL_CATEGORIES: {
            const categories = action.payload;
            return {
                ...state,
                categories: state.categories.length === 0 ? [...state.categories.concat(...categories)] : state.categories,
            };
        }

        default:
            return state;

    }
};
