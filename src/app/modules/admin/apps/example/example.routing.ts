import {Route} from '@angular/router';
import {ExampleComponent} from "./example.component";
import {ProjectResolver} from "../../dashboards/project/project.resolvers";

export const exampleRoutes: Route[] = [
    {
        path: '',
        component: ExampleComponent,
        resolve  : {
            data: ProjectResolver
        }
    }
];
