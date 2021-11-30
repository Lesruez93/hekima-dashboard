import {NgModule} from '@angular/core';
import {RouterModule} from '@angular/router';
import {CommonModule} from '@angular/common';
import {FormsModule} from '@angular/forms';
import {MaterialModule} from '../app.module';
import {NgxSummernoteModule} from 'ngx-summernote';
import {StoreRoutes} from './therapists.routing';

import {NgxSpinnerModule} from 'ngx-spinner';
import {TherapistsComponent} from './therapists.component';
import {DataTablesModule} from 'angular-datatables';


@NgModule({
    imports: [
        CommonModule,
        RouterModule.forChild(StoreRoutes),
        FormsModule,
        MaterialModule,
        NgxSummernoteModule,
        NgxSpinnerModule,
        DataTablesModule
    ],
    declarations: [TherapistsComponent]
})
export class TherapistsModule {
}
