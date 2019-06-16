import { ModuleWithProviders } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductDetailsComponent } from './product-details.component';

const routes: Routes = [
    { path: 'products/:id', component: ProductDetailsComponent }
];

export const productDetailsModuleRoutes: ModuleWithProviders = RouterModule.forChild(routes);
