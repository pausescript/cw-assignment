import { BehaviorSubject } from 'rxjs';
import { Injectable } from '@angular/core';
import { Product } from './../product/product';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  public trolley = {
    products: [] as Array<Product>,
    totalQty: 0,
    subTotal: 0,
    total: 0
  };

  public trolleyObservable = new BehaviorSubject<Object>(this.trolley);

  constructor() { }

  /**
   * Add product to the cart
   * @param {Object} product - the product which needs to be added
   */

  addToCart(product: Product, qty: number) {

    // Update the trolley when the product already exisit
    const match = this.trolley.products.find((obj) => {

      if (obj.stockCode === product.stockCode) {
        obj.qtyInTrolley += 1;
        obj.unitPrice = obj.qtyInTrolley * obj.price;

        // Subtotal and total price calucation
        this.trolley.total = this.trolley.subTotal += obj.price;
        return true;
      }
    });

    if (match) {
      this.trolleyObservable.next(this.trolley);
    } else {
      product.qtyInTrolley = qty;
      product.unitPrice = product.price;
      this.trolley.total = this.trolley.subTotal += product.price;
      this.trolley.totalQty += qty;
      this.trolley.products.push(product);
      this.trolleyObservable.next(this.trolley);
    }
  }

   /**
   * Update product to the cart
   * @param {Object} product - the product which needs to be added
   * @param {number} qty - product quantity
   */

  updateToCart(product: Product) {
    this.trolley.total = this.trolley.subTotal = 0;
    this.trolley.products.map((obj) => {

      if (obj.stockCode === product.stockCode) {
        obj.unitPrice = obj.qtyInTrolley * obj.price;
      }
      this.trolley.total = this.trolley.subTotal += obj.qtyInTrolley * obj.price;

    });
  }

  removeFromCart(product) {
    this.trolley.products = this.trolley.products.filter((obj) => {
      if (obj.stockCode !== product.stockCode) {
        return obj;
      }
    });

    this.trolley.totalQty = this.trolley.total = this.trolley.subTotal = 0;

    this.trolley.products.map((obj) => {
      this.trolley.totalQty += 1;
      this.trolley.total = this.trolley.subTotal += obj.qtyInTrolley * obj.price;
    });

    this.trolleyObservable.next(this.trolley);
  }
}
