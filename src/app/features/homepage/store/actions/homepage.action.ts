import { Action } from '@ngrx/store';
import { Product, Category } from '@goods/core/models';

export const GET_ALL_PRODUCTS = '[Product], Get All Products';
export const GET_ALL_CATEGORIES = '[Category], Get All Categories';
export const SET_ALL_PRODUCTS = '[Product], Set Products';
export const SET_ALL_CATEGORIES = '[Category], Set Categories';

export const FILTER_PRODUCTS_BY_CATEGORY = '[Category], Filter Products';

export const SELECTED_PRODUCTS = '[Product], Selected Products';

export class GetAllProducts implements Action {
    readonly type = GET_ALL_PRODUCTS;
    constructor() { }
}

export class GetAllCategories implements Action {
    readonly type = GET_ALL_CATEGORIES;
    constructor() { }
}

export class SetAllProducts implements Action {
    readonly type = SET_ALL_PRODUCTS;
    constructor(public payload: Product[]) { }
}

export class SetAllCategories implements Action {
    readonly type = SET_ALL_CATEGORIES;
    constructor(public payload: Category[]) { }
}

export class GetProductByIdAction implements Action {
    readonly type = FILTER_PRODUCTS_BY_CATEGORY;
    constructor(public payload: Category[]) { }
}

export class SelectedProducts implements Action {
    readonly type = SELECTED_PRODUCTS;
    constructor(public payload: number) { }
}

export type Action = GetAllProducts | GetAllCategories | SetAllProducts | SetAllCategories | SelectedProducts;
