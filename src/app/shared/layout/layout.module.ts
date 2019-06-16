import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { PublicLayoutComponent } from './public-layout';
import { SecuredLayoutComponent } from './secured-layout';
import { RouterModule } from '@angular/router';
import { UiKitModule } from '../ui-kit';
import { NotFoundComponent } from './not-found';
import { HeaderComponent } from './header/header.component';
import { StartPageComponent } from '@goods/features/start-page';
import { NavMenuComponent } from './header/menu/nav-menu.component';
import { CartComponent } from './cart/cart.component';
import { ProductComponent } from './cart/product/product.component';
import { FruitsNavComponent } from './header/menu/fruits-nav/fruits-nav.component';
import { VegetablesNavComponent } from './header/menu/vegetables-nav/vegetables-nav.component';
import { CustomNavComponent } from './header/menu/custom-nav/custom-nav.component';
import { MenuContainerComponent } from './header/menu-container/menu-container.component';
import { BurgerMenuComponent } from './header/menu/burger-menu/burger-menu.component';

@NgModule({
    imports: [
        RouterModule,
        UiKitModule,
    ],
    declarations: [
        PublicLayoutComponent,
        SecuredLayoutComponent,
        NotFoundComponent,
        HeaderComponent,
        StartPageComponent,
        NavMenuComponent,
        CartComponent,
        ProductComponent,
        FruitsNavComponent,
        VegetablesNavComponent,
        CustomNavComponent,
        MenuContainerComponent,
        BurgerMenuComponent,
    ],
    schemas: [CUSTOM_ELEMENTS_SCHEMA],

})
export class LayoutModule { }
