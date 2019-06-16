import { homepageReducer as home } from '../features/homepage/store/reducers/homepage.reducer';
import { cartReducer as cart } from '../shared/layout/cart/store/reducers/cart.reducer';
import { productDetailsReducer as productDetails } from '../features/product-details/store/reducers/product-details.reducer';
export const rootReducer = () => {
    return {
        home,
        cart,
        productDetails
    };
};
