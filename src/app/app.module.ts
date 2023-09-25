import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser'
import { RouterModule } from '@angular/router';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeroComponent } from './DNK/hero/hero.component';
import { ProductPageComponent } from './DNK/product-page/product-page.component';
import { LoginComponent } from './DNK/login/login.component';
import { RegisterComponent } from './DNK/register/register.component';
import { HeroBuyerComponent } from './Buyer/hero-buyer/hero-buyer.component';
import { HeroSellerComponent } from './Seller/hero-seller/hero-seller.component';
import { ProductDetailsComponent } from './Seller/product-details/product-details.component';

@NgModule({
  declarations: [
    AppComponent,
    HeroComponent,
    ProductPageComponent,
    LoginComponent,
    RegisterComponent,
    HeroBuyerComponent,
    HeroSellerComponent,
    ProductDetailsComponent
  ],
  imports: [
    BrowserModule,
    RouterModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
