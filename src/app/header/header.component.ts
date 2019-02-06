import { takeUntil } from 'rxjs/operators';
import { Subject } from 'rxjs';
import { CartService } from './../cart/cart.service';
import { Component, OnDestroy, OnInit, ChangeDetectionStrategy, ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class HeaderComponent implements OnInit, OnDestroy {

  private unsubscribe: Subject<void> = new Subject<void>();
  public trolleyInfo;

  constructor(
    private cartService: CartService,
    private cd: ChangeDetectorRef) { }

  ngOnInit() {
    this.cartService.trolleyObservable.pipe(takeUntil(this.unsubscribe)).subscribe((trolley) => {
      this.trolleyInfo = trolley;
      this.cd.markForCheck();
    });
  }

  removeProduct(product) {
    this.cartService.removeFromCart(product);
  }

  trackByFn(index) {
    return index;
  }

  ngOnDestroy() {
    this.unsubscribe.next();
    this.unsubscribe.complete();
  }

}
