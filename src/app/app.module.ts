import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { CheckoutComponent } from './checkout/checkout.component';
import { AddProductComponent } from './add-product/add-product.component';
import { NavigationComponent } from './navigation/navigation.component';
import { ProductComponent } from './home/product/product.component';
import { CheckoutProductComponent } from './checkout/checkout-product/checkout-product.component';
import { SubtotalComponent } from './checkout/subtotal/subtotal.component';
import { RatingPipe } from './shared/rating.pipe';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    CheckoutComponent,
    AddProductComponent,
    NavigationComponent,
    ProductComponent,
    CheckoutProductComponent,
    SubtotalComponent,
    RatingPipe,
  ],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
