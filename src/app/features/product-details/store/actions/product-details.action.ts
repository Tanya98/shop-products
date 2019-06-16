import { Action } from '@ngrx/store';
import { Product } from '@goods/core/models';

export const GET_ALL_PRODUCTS = '[Product], Get All Products';
export const SET_ALL_PRODUCTS = '[Product], Set All Products';

export class GetAllProducts implements Action {
    readonly type = GET_ALL_PRODUCTS;
    constructor() { }
}

export class SetAllProducts implements Action {
    readonly type = SET_ALL_PRODUCTS;
    constructor(public payload: Product[]) { }
}

export type Action = GetAllProducts | SetAllProducts;
