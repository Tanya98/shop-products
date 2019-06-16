import { Actions, Effect, ofType } from '@ngrx/effects';
import * as fromAction from '../actions/homepage.action';
import { switchMap, map } from 'rxjs/operators';
import { Injectable } from '@angular/core';
import { Product, Category } from '@goods/core/models';
import { DataProductsService } from '@goods/core/services/data-products.service';

@Injectable()
export class HomepageEffect {

    constructor(private actions$: Actions, private dataProductsService: DataProductsService) { }

    @Effect()
    loadProduct$ = this.actions$.pipe(
        ofType(fromAction.GET_ALL_PRODUCTS),
        switchMap(() => {
            return this.dataProductsService.getProducts()
                .pipe(
                    map((products: Product[]) => new fromAction.SetAllProducts(products)));
        }));

    @Effect()
    loadCategories$ = this.actions$.pipe(
        ofType(fromAction.GET_ALL_CATEGORIES),
        switchMap(() => {
            return this.dataProductsService.getCategories()
                .pipe(
                    map((categories: Category[]) => new fromAction.SetAllCategories(categories)));
        }));
}
