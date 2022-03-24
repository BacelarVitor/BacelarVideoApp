import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MoviesListComponent } from './movies/movies-list/movies-list.component';
import { NotFoundComponent } from './errors/not-found/not-found.component';
import { MoviesListResolver } from './movies/movies-list/movies-list.resolver';
import { MovieComponent } from './movies/movie/movie.component';
import { MovieResolver } from './movies/movie/movie.resolver';
import { LocationResolver } from './movies/movie/location.resolver';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'home'
  },
  {
    path: 'home',
    loadChildren: './home/home.module#HomeModule'
  },
  {
    path: 'movies',
    component: MoviesListComponent,
    resolve: {
      movies: MoviesListResolver
    }
  },
  {
    path: 'movie/:id',
    component: MovieComponent,
    resolve: {
      movie: MovieResolver,
      location: LocationResolver
    }
  },
  {
    path: '**',
    component: NotFoundComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
