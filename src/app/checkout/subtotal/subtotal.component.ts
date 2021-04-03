import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { Product } from 'src/app/shared/product.model';
import { CheckoutService } from '../checkout.service';

@Component({
  selector: 'app-subtotal',
  templateUrl: './subtotal.component.html',
  styleUrls: ['./subtotal.component.scss'],
})
export class SubtotalComponent implements OnInit {
  totalAmount: number = 0;
  private removeProducts: Subscription;

  constructor(private checkoutService: CheckoutService) {
    this.totalAmount = this.checkoutService.getTotalCheckoutAmount();
    this.removeProducts = this.checkoutService.checkoutPriceSubs.subscribe(
      (price: number) => (this.totalAmount = price)
    );
  }

  ngOnInit(): void {}

  ngOnDestroy() {
    this.removeProducts.unsubscribe();
  }
}
