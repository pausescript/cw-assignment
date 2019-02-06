import { ProductService } from '../../product/product.service';
import { Product } from './../../product/product';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-category-page',
  templateUrl: './category-page.component.html',
  styleUrls: ['./category-page.component.scss']
})
export class CategoryPageComponent implements OnInit {

  public products: Array<Product>;
  constructor(private proudctService: ProductService) { }

  ngOnInit() {
    this.getProducts();
  }

  getProducts() {
    this.proudctService.getListOfProducts().subscribe((data) => {
      if (data) {
        this.products = data;
      }
    });
  }

  trackByFn(index) {
    return index;
  }
}
