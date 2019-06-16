import { Injectable } from '@angular/core';
import { Effect, Actions, ofType } from '@ngrx/effects';
import * as fromAction from '../actions/product-details.action';
import { switchMap, map } from 'rxjs/operators';
import { Product } from '@goods/core/models';
import { DataProductsService } from '@goods/core/services/data-products.service';

@Injectable()
export class ProductDetailsEffect {
    constructor(private actions$: Actions, private dataProductsService: DataProductsService) { }

    @Effect()
    loadProduct$ = this.actions$.pipe(
        ofType(fromAction.GET_ALL_PRODUCTS),
        switchMap(() => {
            return this.dataProductsService.getProducts()
                .pipe(
                    map((products: Product[]) => new fromAction.SetAllProducts(products)));
        }));
}
