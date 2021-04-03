import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { Product } from '../shared/product.model';

@Injectable({
  providedIn: 'root',
})
export class CheckoutService {
  checkoutChanged = new Subject<Product[]>();
  checkoutPriceSubs = new Subject<number>();

  private products: Product[] = [];

  addProduct(product: Product) {
    this.products.push(product);
  }

  getProducts() {
    return this.products.slice();
  }

  getTotalCheckoutAmount(): number {
    const totalAmount = this.products.reduce(
      (total: number, product: Product) => {
        return total + product.price;
      },
      0
    );
    this.checkoutPriceSubs.next(totalAmount);
    return totalAmount;
  }

  removeFormatCart(id: string) {
    let index = this.products.findIndex(
      (product: Product) => product.id === id
    );

    if (index >= 0) {
      this.products.splice(index, 1);
      this.checkoutChanged.next([...this.products]);
      this.getTotalCheckoutAmount();
    } else {
      console.warn('The element not found!');
    }
  }
}
