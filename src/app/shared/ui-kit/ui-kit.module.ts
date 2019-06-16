import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { COMPONENTS } from './components';
import { DIRECTIVES } from './directives';
import { PIPES } from './pipes';
import { MaterialModule } from '../material/material.module';


@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        MaterialModule,
        ...COMPONENTS, ...PIPES, ...DIRECTIVES],
    exports: [
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        MaterialModule,
        ...COMPONENTS, ...PIPES, ...DIRECTIVES],
    declarations: [...COMPONENTS, ...PIPES, ...DIRECTIVES]
})
export class UiKitModule { }
