import { NgModule } from '@angular/core';

import { MovieThumbnailModule } from './movie-thumbnail/movie-thumbnail.module';
import { MoviesListModule } from './movies-list/movies-list.module';
import { DarkenOnHoverModule } from '../shared/directives/darken-on-hover/darken-on-hover.module';
import { MovieModule } from './movie/movie.module';

@NgModule({
  imports: [
    MoviesListModule,
    MovieModule,
    MovieThumbnailModule,
    DarkenOnHoverModule
  ]
})
export class MoviesModule {}
