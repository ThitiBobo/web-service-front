import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MovieCardComponent} from "./components/movie-card/movie-card.component";
import {BrowserModule} from "@angular/platform-browser";
import {AppRoutingModule} from "../app-routing.module";
import {LayoutModule} from "@angular/cdk/layout";
import {MatToolbarModule} from "@angular/material/toolbar";
import {MatButtonModule} from "@angular/material/button";
import {MatSidenavModule} from "@angular/material/sidenav";
import {MatIconModule} from "@angular/material/icon";
import {MatListModule} from "@angular/material/list";
import {MatButtonToggleModule} from "@angular/material/button-toggle";
import {MatMenuModule} from "@angular/material/menu";
import {MatCardModule} from "@angular/material/card";
import {MatDialogModule} from "@angular/material/dialog";
import {FontAwesomeModule} from "@fortawesome/angular-fontawesome";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {FlexLayoutModule} from "@angular/flex-layout";
import {AppModule} from "../app.module";
import { AlertComponent } from './components/alert/alert.component';
import { ActorCardComponent } from './components/actor-card/actor-card.component';
import { ActorDescriptionComponent } from './components/actor-description/actor-description.component';
import { CharacterCardComponent } from './components/character-card/character-card.component';



@NgModule({
  imports: [
    CommonModule,
    MatCardModule,
    MatCardModule,
    FlexLayoutModule,
  ],
  declarations: [
    MovieCardComponent,
    ActorCardComponent,
    AlertComponent,
    ActorCardComponent,
    ActorDescriptionComponent,
    CharacterCardComponent
  ],
  exports: [
    MovieCardComponent,
    MatCardModule,
    FlexLayoutModule,
    ActorCardComponent,
  ],
})
export class SharedModule { }
