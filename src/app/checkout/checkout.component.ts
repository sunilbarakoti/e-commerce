import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subject, Subscription } from 'rxjs';
import { Product } from '../shared/product.model';
import { CheckoutService } from './checkout.service';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.scss'],
})
export class CheckoutComponent implements OnInit, OnDestroy {
  products: Product[] = [];
  private removeProducts: Subscription;

  constructor(private checkoutService: CheckoutService) {
    this.products = this.checkoutService.getProducts();
    this.removeProducts = this.checkoutService.checkoutChanged.subscribe(
      (products: Product[]) => (this.products = products)
    );
  }

  ngOnInit(): void {}

  ngOnDestroy() {
    this.removeProducts.unsubscribe();
  }
}
