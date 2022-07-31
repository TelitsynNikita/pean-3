import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {ReactiveFormsModule} from "@angular/forms";
import {HttpClientModule} from "@angular/common/http";

import {AdminComponent} from "./admin.component";
import {AdminRoutingModule} from "./admin-routing.module";
import {TypeComponent} from "../../components/type/type.component";
import {BrandComponent} from "../../components/brand/brand.component";
import {DeviceComponent} from "../../components/device/device.component";
import {SecondaryTitleComponent} from "../../components/secondary-title/secondary-title.component";

@NgModule({
  declarations: [
    AdminComponent,
    TypeComponent,
    BrandComponent,
    DeviceComponent,
    SecondaryTitleComponent
  ],
  imports: [
    CommonModule,
    AdminRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
  ]
})
export class AdminModule { }
