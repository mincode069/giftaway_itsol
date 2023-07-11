import {Route} from '@angular/router';
import {SumupRandomComponent} from "./sumup-random.component";

export const sumupRandomRoutes: Route[] = [
    {
        path: ':code',
        component: SumupRandomComponent
    }
];
