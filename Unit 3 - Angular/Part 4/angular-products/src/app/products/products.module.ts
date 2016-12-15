import { ProductsService } from './services/products.service';
import { RatingModule } from '../rating/rating.module';
import { ProductFilterPipe } from './pipes/product-filter.pipe';
import { ProductItemComponent } from './product-item/product-item.component';
import { ProductDetailGuard } from './services/product-detail-guard.service';
import { ProductDetailResolve } from './services/product-detail-resolve.service';
import { ProductEditComponent } from './product-edit/product-edit.component';
import { CanDeactivateGuard } from '../shared/can-deactivate-guard.service';
import { ProductDetailComponent } from './product-detail/product-detail.component';
import { ProductListComponent } from './product-list/product-list.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Route } from '@angular/router';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

const PRODUCT_ROUTES: Route[] = [
    {
        path: '',
        component: ProductListComponent
    },
    {
        path: ':id',
        component: ProductDetailComponent,
        canActivate: [ProductDetailGuard],
        resolve: {
            product: ProductDetailResolve
        }
    },
    {
        path: 'edit/:id',
        canActivate: [ProductDetailGuard],
        canDeactivate: [CanDeactivateGuard],
        component: ProductEditComponent,
        resolve: {
            product: ProductDetailResolve
        }
    },
]

@NgModule({
    declarations: [
        ProductListComponent,
        ProductItemComponent,
        ProductFilterPipe,
        ProductDetailComponent,
        ProductEditComponent
    ],
    imports: [
        RatingModule,
        CommonModule,
        HttpModule,
        FormsModule,
        RouterModule.forChild(PRODUCT_ROUTES)
    ],
    providers: [
        ProductsService,
        ProductDetailGuard,
        ProductDetailResolve
    ]
})
export class ProductsModule { }
