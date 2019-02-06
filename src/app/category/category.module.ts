import { ProductModule } from './../product/product.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CategoryPageComponent } from './category-page/category-page.component';

@NgModule({
  declarations: [CategoryPageComponent],
  imports: [
    CommonModule,
    ProductModule
  ]
})
export class CategoryModule { }
