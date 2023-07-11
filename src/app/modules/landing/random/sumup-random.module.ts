import {NgModule} from '@angular/core';
import {RouterModule} from '@angular/router';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import {SharedModule} from 'app/shared/shared.module';
// import {SumupRandomComponent} from "./sumup-random.component";
// import {sumupRandomRoutes} from "./sumup-random.routing";

@NgModule({
    declarations: [
        // SumupRandomComponent
    ],
    imports: [
        // RouterModule.forChild(sumupRandomRoutes),
        MatButtonModule,
        MatIconModule,
        SharedModule
    ]
})
export class SumupRandomModule {
}
