import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {CategoriesComponent} from "./components/home/categories.component";
import {CategoryComponent} from "./components/category/category/category.component";

const routes: Routes = [
  { path: '', component: CategoriesComponent },
  { path: ':category', component: CategoryComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CategoriesRoutingModule { }
