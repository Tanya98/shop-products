import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import * as actions from '../../features/homepage/store/actions/homepage.action';
import { Observable } from 'rxjs';
import * as _ from 'lodash';
import { map } from 'rxjs/operators';
import { Product, Category } from '../models';
import { HomePageState } from '@goods/features/homepage/store/reducers/homepage.reducer';

@Injectable({
  providedIn: 'root'
})
export class HomepageService {

  products$: Observable<Product[]>;
  categories$: Observable<Category[]>;

  constructor(private store: Store<HomePageState>) {
    this.products$ = store.select((state: any) => state.home.products);
    this.categories$ = store.select((state: any) => state.home.categories);
  }

  getNewProducts() {
    return this.store.dispatch(new actions.GetAllProducts());
  }

  getNewCategories() {
    return this.store.dispatch(new actions.GetAllCategories());
  }

  getProductsByCategory(id) {
    return this.products$.pipe(
      map((products: Product[]) => products.filter(x => _.some(x.category, (c: number) => c === id))));
  }

  getOneCategory(id) {
    return this.categories$.pipe(
      map((categories: Category[]) => categories.filter(category => category.id === id)));
  }
}
