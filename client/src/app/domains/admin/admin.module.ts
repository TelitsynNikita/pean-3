import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {ReactiveFormsModule} from "@angular/forms";

import {AdminComponent} from "./admin.component";
import {AdminRoutingModule} from "./admin-routing.module";
import {TypeComponent} from "../../components/type/type.component";
import {BrandComponent} from "../../components/brand/brand.component";
import {DeviceComponent} from "../../components/device/device.component";

@NgModule({
  declarations: [
    AdminComponent,
    TypeComponent,
    BrandComponent,
    DeviceComponent
  ],
  imports: [
    CommonModule,
    AdminRoutingModule,
    ReactiveFormsModule
  ],
})
export class AdminModule { }
