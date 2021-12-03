import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CategoriesRoutingModule } from './categories-routing.module';
import {CategoriesComponent} from "./categories.component";
import {CategoryCardComponent} from "../../shared/components/category-card/category-card.component";
import {MatCardModule} from "@angular/material/card";


@NgModule({
  declarations: [
    CategoriesComponent,
    CategoryCardComponent,
  ],
  imports: [
    CommonModule,
    CategoriesRoutingModule,
    MatCardModule,
  ],
  exports: [
    CategoriesComponent
  ]
})
export class CategoriesModule { }
