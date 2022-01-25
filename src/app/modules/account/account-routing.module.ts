import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {SigninComponent} from "./pages/signin/signin.component";
import {RegisterComponent} from "./pages/register/register.component";

const routes: Routes = [
  {path: '', component: SigninComponent},
  {path: 'login', component: SigninComponent},
  {path: 'register', component: RegisterComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AccountRoutingModule {
}
