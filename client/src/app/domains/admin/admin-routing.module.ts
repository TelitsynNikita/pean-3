import {NgModule} from "@angular/core";
import {Routes, RouterModule} from "@angular/router";
import {AdminComponent} from "./admin.component";
import {BrandComponent} from "../../components/brand/brand.component";
import {TypeComponent} from "../../components/type/type.component";
import {DeviceComponent} from "../../components/device/device.component";

const childRoutes: Routes = [
  {path: 'device', component: DeviceComponent},
  {path: 'type', component: TypeComponent},
  {path: 'brand', component: BrandComponent}
]

const routes: Routes = [
  {path: '', component: AdminComponent, children: childRoutes}
]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
