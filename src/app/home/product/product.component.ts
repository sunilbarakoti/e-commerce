import { Component, Input, OnInit } from '@angular/core';
import { Product } from 'src/app/shared/product.model';
import { HomeService } from '../home.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss'],
})
export class ProductComponent implements OnInit {
  @Input() product: Product = {} as Product;

  constructor(private homeService: HomeService) {}

  ngOnInit(): void {}

  addToBasket() {
    this.homeService.addToCart(this.product);
  }
}
