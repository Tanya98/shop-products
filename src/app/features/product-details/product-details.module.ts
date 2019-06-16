import { NgModule } from '@angular/core';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { UiKitModule } from '@goods/shared/ui-kit';
import { ProductDetailsComponent } from './product-details.component';
import { productDetailsModuleRoutes } from './product-details.routing';
import { CommonModule } from '@angular/common';
import { ProductDetailsEffect } from './store/effects/product-details.effect';
import { productDetailsReducer } from './store/reducers/product-details.reducer';


@NgModule({
    imports: [
        CommonModule,
        UiKitModule,
        StoreModule.forFeature('productDetails', productDetailsReducer),
        EffectsModule.forFeature([ProductDetailsEffect]),
        productDetailsModuleRoutes
    ],
    declarations: [ProductDetailsComponent],
    providers: [],
})
export class ProductDetailsModule { }
