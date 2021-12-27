import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CategoriesRoutingModule } from './categories-routing.module';
import {CategoriesComponent} from "./components/home/categories.component";
import {CategoryCardComponent} from "../../shared/components/category-card/category-card.component";
import {MatCardModule} from "@angular/material/card";
import {FlexLayoutModule} from "@angular/flex-layout";
import {MovieCardComponent} from "../../shared/components/movie-card/movie-card.component";
import {MatToolbarModule} from "@angular/material/toolbar";
import {MatButtonModule} from "@angular/material/button";
import {MatSidenavModule} from "@angular/material/sidenav";
import {MatIconModule} from "@angular/material/icon";
import {MatListModule} from "@angular/material/list";
import {MatButtonToggleModule} from "@angular/material/button-toggle";
import {MatMenuModule} from "@angular/material/menu";
import {MatDialogModule} from "@angular/material/dialog";
import {CategoryComponent} from "./components/category/category/category.component";
import {AppModule} from "../../app.module";
import {SharedModule} from "../../shared/shared.module";

const CATEGORIES = [

]


@NgModule({
  declarations: [
    CategoriesComponent,
    CategoryComponent,
    CategoryCardComponent,
  ],
  imports: [
    CommonModule,
    CategoriesRoutingModule,
    SharedModule,
  ],
  exports: [
    CategoriesComponent,
    CategoryComponent,
  ]
})
export class CategoriesModule { }
