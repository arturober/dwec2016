import { ProductDetailResolve } from './shared/product-detail-resolve.service';
import { CanDeactivateGuard } from './shared/can-deactivate-guard.service';
import { ProductDetailGuard } from './shared/product-detail-guard.service';
import { ProductListComponent } from './product-list/product-list.component';
import { Route } from '@angular/router';

import { WelcomeComponent } from './welcome/welcome.component';
import { ProductDetailComponent } from './product-detail/product-detail.component';
import { ProductEditComponent } from './product-edit/product-edit.component';

export const APP_ROUTES: Route[] = [
    {
        path: 'welcome',
        component: WelcomeComponent
    },
    {
        path: 'products',
        component: ProductListComponent
    },
    {
        path: 'products/:id',
        component: ProductDetailComponent,
        canActivate: [ProductDetailGuard],
        resolve: {
            product: ProductDetailResolve
        }
    },
    {
        path: 'products/edit/:id',
        canActivate: [ProductDetailGuard],
        canDeactivate: [CanDeactivateGuard],
        component: ProductEditComponent
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