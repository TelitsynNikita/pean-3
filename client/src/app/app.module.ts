import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {ReactiveFormsModule} from "@angular/forms";
import {HttpClientModule} from "@angular/common/http";

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { BasketComponent } from './components/basket/basket.component';
import { SignInModalComponent } from './components/sign-in-modal/sign-in-modal.component';
import { SecondaryTitleComponent } from './components/secondary-title/secondary-title.component';
import {AuthService} from "./services/auth.service";
import {UserService} from "./services/user.service";
import {AuthGuard} from "./guards/auth.guard";
import {TypeComponent} from "./components/type/type.component";
import {BrandComponent} from "./components/brand/brand.component";

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    BasketComponent,
    SignInModalComponent,
    SecondaryTitleComponent,
    TypeComponent,
    BrandComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [
    AuthService,
    UserService,
    AuthGuard
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
