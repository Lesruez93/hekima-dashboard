import {Routes} from '@angular/router';

import {TherapistsComponent} from './therapists.component';

export const StoreRoutes: Routes = [
    {

      path: '',
      children: [ {
        path: 'users',
        component: TherapistsComponent
    }]
}
];
