import { Injectable } from '@angular/core';
import * as ProductData from '../../assets/static/products.json';
import { CheckoutService } from '../checkout/checkout.service';
import { Product } from '../shared/product.model';

@Injectable({ providedIn: 'root' })
export class HomeService {
  private products: Product[] = ProductData.products.map(
    (item: Product) =>
      new Product(item.id, item.title, item.price, item.rating, item.image)
  );

  constructor(private checkoutService: CheckoutService) {}

  getProducts() {
    return this.products.slice();
  }

  addToCart(product: Product) {
    this.checkoutService.addProduct(product);
  }

  addNewProduct(product: Product) {
    this.products.push(product);
  }
}
