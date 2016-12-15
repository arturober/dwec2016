import { Route } from '@angular/router';

import { WelcomeComponent } from './welcome/welcome.component';

export const APP_ROUTES: Route[] = [
    {
        path: 'welcome',
        component: WelcomeComponent
    },
    {
        path: 'products', 
        loadChildren: './products/products.module#ProductsModule'
    },
    {
        path: '',
        component: WelcomeComponent
    },
    {
        path: '**',
        component: WelcomeComponent
    }
];