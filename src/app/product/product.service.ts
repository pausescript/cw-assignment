import { Observable } from 'rxjs/internal/Rx';
import { UtilService } from '../util/util.service';
import { catchError } from 'rxjs/operators';
import { map } from 'rxjs/internal/operators';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Product } from './product';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private httpClient: HttpClient, private utilService: UtilService) { }

  getListOfProducts(): Observable<Array<Product>> {
    return this.httpClient.get(`/assets/json/products.json`).pipe(
      map(response => {
        return response as Array<Product>;
      }, catchError((error) => {
        return this.utilService.handleApiResponseError(error);
      })));
  }

  getProduct(stockCode: String): Observable<Product> {
    return this.httpClient.get(`/assets/json/products.json`).pipe(
      map(response => {
        return (response as Array<Product>).find(function(product) { return product.stockCode === stockCode; });
      }, catchError((error) => {
        return this.utilService.handleApiResponseError(error);
      })));
  }
}
