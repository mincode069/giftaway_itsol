import {Route} from '@angular/router';
import {GiftListComponent} from "./gift-list.component";
import {ProjectResolver} from "../../../dashboards/project/project.resolvers";

export const giftListRoutes: Route[] = [
    {
        path: '',
        component: GiftListComponent,
        resolve  : {
            data: ProjectResolver
        }
    }
];
