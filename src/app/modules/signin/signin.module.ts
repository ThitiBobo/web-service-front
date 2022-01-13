import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SigninRoutingModule } from './signin-routing.module';
import {SigninComponent} from "./signin.component";
import {MatCardModule} from "@angular/material/card";
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatInputModule} from "@angular/material/input";
import {MatButtonModule} from "@angular/material/button";
import {ReactiveFormsModule} from "@angular/forms";
import { LoginFormComponent } from './component/login-form/login-form.component';
import {MatIconModule} from "@angular/material/icon";


@NgModule({
  declarations: [
    SigninComponent,
    LoginFormComponent
  ],
  imports: [
    CommonModule,
    SigninRoutingModule,
    MatCardModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    ReactiveFormsModule,
    MatIconModule,
  ],
  exports: [
    SigninComponent
  ]
})
export class SigninModule { }
