import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { ProductCardComponent } from './product-card/product-card.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InventoryCounterComponent } from './inventory-counter/inventory-counter.component';

@NgModule({
  declarations: [ProductCardComponent, InventoryCounterComponent],
  exports: [ProductCardComponent, InventoryCounterComponent],
  imports: [
    CommonModule,
    RouterModule,
    FormsModule
  ]
})
export class ProductModule { }
