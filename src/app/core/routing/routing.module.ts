import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NotFoundComponent } from '@goods/shared/layout/not-found';
import { StartPageComponent } from '@goods/features/start-page';
import { PublicLayoutComponent } from '@goods/shared/layout/public-layout';
import { SecuredLayoutComponent } from '@goods/shared/layout/secured-layout';
import { HeaderComponent } from '@goods/shared/layout/header/header.component';
import { AuthGuard } from './guards';

const routes: Routes = [
    {
        path: '',
        component: StartPageComponent
    },
    {
        path: '',
        component: PublicLayoutComponent,
        children: [
            {
                path: '',
                loadChildren: '@goods/features/account/login/login.module#LoginModule'
            }
        ]
    },
    {
        path: '',
        component: PublicLayoutComponent,
        children: [
            {
                path: '',
                loadChildren: '@goods/features/account/signup/signup.module#SignupModule'
            }
        ]
    },
    {
        path: '',
        canActivate: [
            AuthGuard,
        ],
        component: SecuredLayoutComponent,
        children: [
            {
                path: 'brezza',
                component: HeaderComponent,
                children: [
                    {
                        path: '',
                        loadChildren: '@goods/features/homepage/homepage.module#HomepageModule',
                    },
                    {
                        path: '',
                        loadChildren: '@goods/features/product-details/product-details.module#ProductDetailsModule'
                    }
                ]
            }
        ]
    },
    {
        path: '**',
        component: NotFoundComponent
    },
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule],
})
export class RoutingModule { }
