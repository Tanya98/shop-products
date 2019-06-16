import { NgModule } from '@angular/core';
import { SignupComponent } from './signup.component';
import { CommonModule } from '@angular/common';
import { UiKitModule } from '@goods/shared/ui-kit';
import { signupModuleRoutes } from './signup.routing';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  imports: [
    CommonModule,
    UiKitModule,
    signupModuleRoutes,
    HttpClientModule
  ],
  exports: [],
  declarations: [SignupComponent],
  providers: [],
})
export class SignupModule { }
