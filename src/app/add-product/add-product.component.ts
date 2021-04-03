import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { v4 as uuidv4 } from 'uuid';
import { Product } from '../shared/product.model';
import { AddProductService } from './add-product.service';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.scss'],
})
export class AddProductComponent implements OnInit {
  defaultImage: string = '';
  defaultRating: number = 3;
  constructor(private addProductService: AddProductService) {}

  ngOnInit(): void {
    this.addProductService.fetchImage().subscribe(
      (images: any) => {
        console.log(images);
        this.defaultImage = images[1];
      },
      (error) => {
        console.log(error.message);
      }
    );
  }

  onAddProduct(form: NgForm) {
    const { title, price, rating, image } = form.value;
    const product = new Product(uuidv4(), title, price, +rating, image);
    this.addProductService.addProduct(product);
    form.reset({ image });
    alert('Product Added');
  }
}
