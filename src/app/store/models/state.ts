import { HomePageState } from '@goods/features/homepage/store/reducers/homepage.reducer';
import { CartProduct } from '@goods/shared/layout/cart/store/reducers/cart.reducer';

export interface State {
    newProducts: HomePageState[];
    cart: CartProduct[];
}
