import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { InMemoryDataService } from './api';
import { InMemoryWebApiModule } from 'angular-in-memory-web-api';

@NgModule({
    imports: [
        HttpClientModule,
        InMemoryWebApiModule.forRoot(InMemoryDataService),
    ],
    exports: [HttpClientModule],
    providers: [],
})
export class HttpModule { }
