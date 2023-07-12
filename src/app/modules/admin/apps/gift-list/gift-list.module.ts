import {NgModule} from '@angular/core';
import {RouterModule} from '@angular/router';
import {MatButtonModule} from '@angular/material/button';
import {MatButtonToggleModule} from '@angular/material/button-toggle';
import {MatDividerModule} from '@angular/material/divider';
import {MatIconModule} from '@angular/material/icon';
import {MatMenuModule} from '@angular/material/menu';
import {MatProgressBarModule} from '@angular/material/progress-bar';
import {MatRippleModule} from '@angular/material/core';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatSortModule} from '@angular/material/sort';
import {MatTableModule} from '@angular/material/table';
import {MatTabsModule} from '@angular/material/tabs';
import {TranslocoModule} from '@ngneat/transloco';
import {NgApexchartsModule} from 'ng-apexcharts';
import {SharedModule} from 'app/shared/shared.module';
import {GiftListComponent} from "./gift-list.component";
import {giftListRoutes} from "./gift-list.routing";
import {MatExpansionModule} from "@angular/material/expansion";

@NgModule({
    declarations: [
        GiftListComponent
    ],
    imports: [
        RouterModule.forChild(giftListRoutes),
        MatButtonModule,
        MatButtonToggleModule,
        MatDividerModule,
        MatIconModule,
        MatMenuModule,
        MatProgressBarModule,
        MatRippleModule,
        MatSidenavModule,
        MatSortModule,
        MatTableModule,
        MatTabsModule,
        MatExpansionModule,
        NgApexchartsModule,
        TranslocoModule,
        SharedModule,
    ]
})
export class GiftListModule {
}
