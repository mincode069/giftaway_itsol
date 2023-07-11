import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {MAT_DATE_FORMATS, MatRippleModule} from "@angular/material/core";
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatInputModule} from "@angular/material/input";
import {MatDatepickerModule} from "@angular/material/datepicker";
import {MatMomentDateModule} from "@angular/material-moment-adapter";
import {MatSelectModule} from "@angular/material/select";
import {MatButtonModule} from "@angular/material/button";
import {MatCheckboxModule} from "@angular/material/checkbox";
import {MatIconModule} from "@angular/material/icon";
import {MatMenuModule} from "@angular/material/menu";
import {MatPaginatorIntl, MatPaginatorModule} from "@angular/material/paginator";
import {MatProgressBarModule} from "@angular/material/progress-bar";
import {MatSortModule} from "@angular/material/sort";
import {MatSlideToggleModule} from "@angular/material/slide-toggle";
import {MatTooltipModule} from "@angular/material/tooltip";
import {InputTrimModule} from "ng2-trim-directive";
import {CustomPaginator} from "./mat-table/CustomPaginatorConfiguration";
import {FuseScrollbarModule} from "../../@fuse/directives/scrollbar";

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        MatFormFieldModule,
        MatInputModule,
        MatMomentDateModule,
        ReactiveFormsModule,
        MatButtonModule,
        MatCheckboxModule,
        MatIconModule,
        MatMenuModule,
        MatPaginatorModule,
        MatProgressBarModule,
        MatRippleModule,
        MatSortModule,
        MatSelectModule,
        MatSlideToggleModule,
        MatTooltipModule,
        MatDatepickerModule,
        InputTrimModule,
        FuseScrollbarModule
    ],
    providers: [
        {
            provide: MAT_DATE_FORMATS,
            useValue: {
                parse: {
                    dateInput: 'DD/MM/YYYY'
                },
                display: {
                    dateInput: 'DD/MM/YYYY',
                    monthYearLabel: 'MMM YYYY',
                    dateA11yLabel: 'DD/MM/YYYY',
                    monthYearA11yLabel: 'MMMM YYYY'
                }
            }
        },
        {provide: MatPaginatorIntl, useValue: CustomPaginator()}
    ],
    exports: [
        CommonModule,
        FormsModule,
        MatFormFieldModule,
        MatInputModule,
        MatMomentDateModule,
        ReactiveFormsModule,
        MatButtonModule,
        MatCheckboxModule,
        MatIconModule,
        MatMenuModule,
        MatPaginatorModule,
        MatProgressBarModule,
        MatRippleModule,
        MatSortModule,
        MatSelectModule,
        MatSlideToggleModule,
        MatTooltipModule,
        MatDatepickerModule,
        InputTrimModule,
        FuseScrollbarModule
    ]
})
export class SharedModule {
}
