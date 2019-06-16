import { Routes, RouterModule } from '@angular/router';
import { SignupComponent } from './signup.component';
import { ModuleWithProviders } from '@angular/core';

const routes: Routes = [
    // { path: '', pathMatch: 'full', redirectTo: 'signup' },
    { path: 'signup', component: SignupComponent }
];

export const signupModuleRoutes: ModuleWithProviders = RouterModule.forChild(routes);
