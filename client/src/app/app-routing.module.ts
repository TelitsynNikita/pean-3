import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {HomeComponent} from "./components/home/home.component";

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'about', loadChildren: () => import('./domains/about/about.module').then(md => md.AboutModule)},
  {path: 'catalog', loadChildren: () => import('./domains/catalog/catalog.module').then(md => md.CatalogModule)}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
