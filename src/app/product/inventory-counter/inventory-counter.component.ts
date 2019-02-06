import { CartService } from './../../cart/cart.service';
import { Product } from './../product';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-inventory-counter',
  templateUrl: './inventory-counter.component.html',
  styleUrls: ['./inventory-counter.component.scss']
})
export class InventoryCounterComponent implements OnInit {

  @Input() product: Product;


  constructor(private cartService: CartService) { }

  ngOnInit() {
  }

  increment() {
    this.product.qtyInTrolley += 1;
    this.cartService.updateToCart(this.product);
  }

  decrement() {
    if (this.product.qtyInTrolley > 1) {
      this.product.qtyInTrolley -= 1;
      this.cartService.updateToCart(this.product);
    }
  }
}
