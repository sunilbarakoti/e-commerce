import { Component, OnInit } from '@angular/core';
import { Product } from '../shared/product.model';
import { HomeService } from './home.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  products: Product[] = [];

  constructor(private homeService: HomeService) {}

  ngOnInit(): void {
    this.products = this.homeService.getProducts();
  }
}
