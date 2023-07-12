import {Route} from '@angular/router';
import {GiftInforComponent} from "./gift-infor.component";
import {ProjectResolver} from "../../dashboards/project/project.resolvers";

export const giftInforRoutes: Route[] = [
    {
        path: '',
        component: GiftInforComponent,
        resolve  : {
            data: ProjectResolver
        }
    }
];
