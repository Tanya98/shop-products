import { BrowserModule } from '@angular/platform-browser';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { GoodsComponent } from './goods.component';
import { RoutingModule } from './core/routing';
import { LayoutModule } from './shared/layout';
import { UiKitModule } from './shared/ui-kit';
import { RouterModule } from '@angular/router';
import { HttpModule } from './core/http/http.module';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { rootReducer } from './store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { environment } from 'environments/environment';

@NgModule({
  declarations: [GoodsComponent],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    RouterModule,
    HttpModule,
    RoutingModule,
    LayoutModule,
    UiKitModule,
    StoreModule.forRoot(rootReducer()),
    !environment.production ? StoreDevtoolsModule.instrument() : [],
    EffectsModule.forRoot([])
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  bootstrap: [GoodsComponent],
})
export class AppModule { }
