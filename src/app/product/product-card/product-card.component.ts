import { CartService } from './../../cart/cart.service';
import { Subject } from 'rxjs';
import { Product } from './../product';
import { Router } from '@angular/router';
import { ChangeDetectionStrategy, Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ProductCardComponent implements OnInit {


  @Input() product: Product;

  constructor(private router: Router, private cartService: CartService) { }

  ngOnInit() {
  }

  navigatePDP() {
    this.router.navigate([`product/${this.product.stockCode}`]);
  }

  addToCart() {
    this.cartService.addToCart(this.product, 1);
  }
}
