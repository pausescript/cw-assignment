import { CartService } from './../../cart/cart.service';
import { takeUntil } from 'rxjs/operators';
import { Product } from './../../product/product';
import { Subject } from 'rxjs';
import { ActivatedRoute } from '@angular/router';
import { ProductService } from './../../product/product.service';
import { ChangeDetectionStrategy, Component, OnDestroy, OnInit, ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-pd-page',
  templateUrl: './pd-page.component.html',
  styleUrls: ['./pd-page.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class PdPageComponent implements OnInit, OnDestroy {

  private unsubscribe: Subject<void> = new Subject<void>();
  public product: Product;

  constructor(
    private productService: ProductService,
    private activatedRoute: ActivatedRoute,
    private cd: ChangeDetectorRef,
    private cartService: CartService) { }

  ngOnInit() {
    this.activatedRoute.params.pipe(takeUntil(this.unsubscribe)).subscribe(
      (params: any) => {
        const stockCode = params['stockCode'];
        if (stockCode) {
          this.productService.getProduct(stockCode).subscribe((data) => {
            this.product = data;
            this.product.qtyInTrolley = 0;
            this.cd.markForCheck();
          });
        }
      });
  }

  addToCart() {
    this.cartService.addToCart(this.product, this.product.qtyInTrolley);
  }

  public ngOnDestroy() {
    this.unsubscribe.next();
    this.unsubscribe.complete();
  }
}
