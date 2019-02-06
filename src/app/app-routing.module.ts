import { CartModule } from './cart/cart.module';
import { ViewCartComponent } from './cart/view-cart/view-cart.component';
import { CategoryPageComponent } from './category/category-page/category-page.component';
import { CategoryModule } from './category/category.module';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    component: CategoryPageComponent,
  },
  {
    path: 'product',
    loadChildren: './product-detail/product-detail.module#ProductDetailModule'
  },
  {
    path: 'cart',
    component: ViewCartComponent
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes),
    CategoryModule,
    CartModule
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
