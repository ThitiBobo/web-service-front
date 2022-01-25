import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {HomeComponent} from "./modules/home/home.component";
import {NotFoundComponent} from "./modules/not-found/not-found.component";

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'home', component: HomeComponent},
  {
    path: 'auth',
    loadChildren: () => import('./modules/account/account.module')
      .then(mod => mod.AccountModule)
  },
  {
    path: 'movies',
    loadChildren: () => import('./modules/movies/movies.module')
      .then(mod => mod.MoviesModule)
  },
  {
    path: 'categories',
    loadChildren: () => import('./modules/categories/categories.module')
      .then(mod => mod.CategoriesModule)
  },
  {path: '**', component: NotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
