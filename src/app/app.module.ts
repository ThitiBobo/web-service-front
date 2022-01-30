import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppRoutingModule} from '@app/app-routing.module';
import {AppComponent} from '@app/app.component';
import {NotFoundComponent} from '@modules/not-found/not-found.component';
import {HomeComponent} from "@modules/home/home.component";
import {LayoutModule} from '@angular/cdk/layout';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatButtonModule} from '@angular/material/button';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatIconModule} from '@angular/material/icon';
import {MatListModule} from '@angular/material/list';
import {MatButtonToggleModule} from "@angular/material/button-toggle";
import {FontAwesomeModule} from "@fortawesome/angular-fontawesome";
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatMenuModule} from "@angular/material/menu";
import {MatCardModule} from "@angular/material/card";
import {HeaderComponent} from "@shared/components/header/header.component";
import {FooterComponent} from "@shared/components/footer/footer.component";
import {NavbarComponent} from "@shared/components/navbar/navbar.component";
import {ProfilFabComponent} from "@shared/components/profil-fab/profil-fab.component";
import {ThemeSwitchComponent} from "@shared/components/theme-switch/theme-switch.component";
import {FlexLayoutModule} from "@angular/flex-layout";
import {MovieDescriptionComponent} from '@shared/components/movie-description/movie-description.component';
import {MatDialogModule} from "@angular/material/dialog";
import {HTTP_INTERCEPTORS, HttpClientModule} from "@angular/common/http";
import {JwtInterceptor} from "@core/interceptors/jwt-interceptor.interceptor";
import {ErrorInterceptor} from "@core/interceptors/error.interceptor";
import {SharedModule} from "@shared/shared.module";


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NotFoundComponent,
    HeaderComponent,
    FooterComponent,
    NavbarComponent,
    ProfilFabComponent,
    ThemeSwitchComponent,
    MovieDescriptionComponent,
  ],
    imports: [
        HttpClientModule,
        BrowserModule,
        AppRoutingModule,
        LayoutModule,
        MatToolbarModule,
        MatButtonModule,
        MatSidenavModule,
        MatIconModule,
        MatListModule,
        MatButtonToggleModule,
        MatMenuModule,
        MatCardModule,
        MatDialogModule,
        FontAwesomeModule,
        BrowserAnimationsModule,
        FlexLayoutModule,
        SharedModule,
    ],
  providers: [
    {provide: HTTP_INTERCEPTORS, useClass: JwtInterceptor, multi: true},
    {provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi: true},
  ],
  exports: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
