import { ProductModule } from './../product/product.module';
import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ViewCartComponent } from './view-cart/view-cart.component';


@NgModule({
  declarations: [ViewCartComponent],
  imports: [
    CommonModule,
    ProductModule
  ]
})
export class CartModule { }
