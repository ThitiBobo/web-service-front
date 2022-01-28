import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {MoviesComponent} from "./pages/home/movies.component";
import {CreateComponent} from "@modules/movies/pages/create/create.component";

const routes: Routes = [
  { path: '', component: MoviesComponent },
  { path: 'new', component: CreateComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MoviesRoutingModule { }
