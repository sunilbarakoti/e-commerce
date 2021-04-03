import { Component, Input, OnInit } from '@angular/core';
import { Product } from 'src/app/shared/product.model';
import { CheckoutService } from '../checkout.service';

@Component({
  selector: 'app-checkout-product',
  templateUrl: './checkout-product.component.html',
  styleUrls: ['./checkout-product.component.scss'],
})
export class CheckoutProductComponent implements OnInit {
  @Input() product: Product = {} as Product;

  constructor(private checkoutService: CheckoutService) {}

  ngOnInit(): void {}

  removeFromCart() {
    this.checkoutService.removeFormatCart(this.product.id);
  }
}
