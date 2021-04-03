import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';
import { HomeService } from '../home/home.service';
import { Product } from '../shared/product.model';
import { UNSPLASH_API_KEY } from 'src/environments/environment.prod';

@Injectable({ providedIn: 'root' })
export class AddProductService {
  constructor(private http: HttpClient, private homeService: HomeService) {}

  fetchImage() {
    return this.http
      .get(
        'https://api.unsplash.com/search/photos',

        {
          headers: new HttpHeaders({ Authorization: UNSPLASH_API_KEY }),
          params: new HttpParams().set('query', 'laptop'),
        }
      )
      .pipe(
        map((responseData: any) => {
          const respImages = responseData.results.map(
            (data: any) => data.urls.regular
          );
          return respImages;
        })
      );
  }

  addProduct(product: Product) {
    this.homeService.addNewProduct(product);
  }
}
