import { takeUntil } from 'rxjs/operators';
import { CartService } from './../cart.service';
import { Subject } from 'rxjs';
import { Component, OnInit, ChangeDetectionStrategy, OnDestroy, ChangeDetectorRef } from '@angular/core';
import { Product } from './../../product/product';

@Component({
  selector: 'app-view-cart',
  templateUrl: './view-cart.component.html',
  styleUrls: ['./view-cart.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ViewCartComponent implements OnInit, OnDestroy {

  trolley;
  private unsubscribe: Subject<void> = new Subject<void>();

  constructor(
    private cartService: CartService,
    private cd: ChangeDetectorRef) { }

  ngOnInit() {
    this.cartService.trolleyObservable.pipe(takeUntil(this.unsubscribe)).subscribe((trolley) => {
      this.trolley = trolley;
      this.cd.markForCheck();
    });
  }

  removeProduct(product) {
    this.cartService.removeFromCart(product);
  }

  ngOnDestroy() {
    this.unsubscribe.next();
    this.unsubscribe.complete();
  }
}
