import { CommonModule } from '@angular/common';
import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { UiKitModule } from '@goods/shared/ui-kit';
import { homepageModuleRoutes } from './homepage.routing';
import { HomepageComponent } from './homepage.component';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { HomepageEffect } from './store/effects/homepage.effect';
import { CarouselComponent } from './carousel/carousel.component';
import { CarouselDirective } from './carousel/carousel.directive';
import { homepageReducer } from './store/reducers/homepage.reducer';
import { CarouselModule } from 'ngx-bootstrap/carousel';

@NgModule({
    imports: [
        CommonModule,
        UiKitModule,
        homepageModuleRoutes,
        StoreModule.forFeature('homepage', homepageReducer),
        EffectsModule.forFeature([HomepageEffect]),
        CarouselModule.forRoot(),
    ],
    declarations: [
        HomepageComponent,
        CarouselComponent,
        CarouselDirective,
    ],
    providers: [],
    schemas: [NO_ERRORS_SCHEMA]
})
export class HomepageModule { }
