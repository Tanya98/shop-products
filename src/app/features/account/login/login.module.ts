import { NgModule } from '@angular/core';
import { LoginComponent } from '../login/login.component';
import { CommonModule } from '@angular/common';
import { UiKitModule } from '@goods/shared/ui-kit';
import { loginModuleRoutes } from './login.routing';
import { AuthGuard } from '@goods/core/routing/guards';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
    imports: [
        CommonModule,
        UiKitModule,
        loginModuleRoutes,
        HttpClientModule
    ],
    exports: [],
    declarations: [LoginComponent],
    // providers: [AuthGuard],
})
export class LoginModule { }
