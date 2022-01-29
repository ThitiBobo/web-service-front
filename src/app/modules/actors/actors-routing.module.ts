import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {ActorsComponent} from "./actors.component";

const routes: Routes = [
  { path: '', component: ActorsComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ActorsRoutingModule { }
