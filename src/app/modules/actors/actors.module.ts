import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActorsComponent } from './actors.component';
import {SharedModule} from "../../shared/shared.module";
import {MoviesRoutingModule} from "../movies/movies-routing.module";
import {MatToolbarModule} from "@angular/material/toolbar";
import {MatButtonModule} from "@angular/material/button";
import {MatSidenavModule} from "@angular/material/sidenav";
import {MatIconModule} from "@angular/material/icon";
import {MatListModule} from "@angular/material/list";
import {MatButtonToggleModule} from "@angular/material/button-toggle";
import {MatMenuModule} from "@angular/material/menu";
import {MatCardModule} from "@angular/material/card";
import {MatDialogModule} from "@angular/material/dialog";
import {FlexLayoutModule} from "@angular/flex-layout";
import {ActorsRoutingModule} from "./actors-routing.module";



@NgModule({
  declarations: [
    ActorsComponent
  ],
  imports: [
    CommonModule,
    ActorsRoutingModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    MatButtonToggleModule,
    MatMenuModule,
    MatCardModule,
    MatDialogModule,
    FlexLayoutModule,
    SharedModule,
  ],
  exports: [
    ActorsComponent
  ]
})
export class ActorsModule { }
