import { ProductModule } from './../product/product.module';
import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PdPageComponent } from './pd-page/pd-page.component';

const routes: Routes = [
  {
    path: ':stockCode',
    component: PdPageComponent,
  }
];

@NgModule({
  declarations: [PdPageComponent],
  imports: [
    RouterModule.forChild(routes),
    CommonModule,
    ProductModule
  ]
})
export class ProductDetailModule { }
