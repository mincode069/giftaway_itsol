import {NgModule} from '@angular/core';
import {RouterModule} from '@angular/router';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import {SharedModule} from 'app/shared/shared.module';
// import {sumupHomeRoutes} from "./sumup.routing";
// import {SumupComponent} from "./sumup.component";

@NgModule({
    declarations: [
        // SumupComponent
    ],
    imports: [
        // RouterModule.forChild(sumupHomeRoutes),
        MatButtonModule,
        MatIconModule,
        SharedModule
    ]
})
export class SumupModule {
}
