import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {HomeComponent} from "./components/home/home.component";
import {BasketComponent} from "./components/basket/basket.component";
import {AuthGuard} from "./guards/auth.guard";


const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'basket', component: BasketComponent},
  {path: 'about', loadChildren: () => import('./domains/about/about.module').then(md => md.AboutModule)},
  {path: 'catalog', loadChildren: () => import('./domains/catalog/catalog.module').then(md => md.CatalogModule)},
  {path: 'admin', loadChildren: () => import('./domains/admin/admin.module').then(md => md.AdminModule)}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
