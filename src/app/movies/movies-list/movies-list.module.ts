import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MoviesListComponent } from './movies-list.component';
import { MoviesComponent } from './movies/movies.component';
import { FilterByTitle } from './filter-by-title.pipe';
import { MovieThumbnailModule } from '../movie-thumbnail/movie-thumbnail.module';
import { CardModule } from '../../shared/components/card/card.module';
import { SearchComponent } from './search/search.component';
import { DarkenOnHoverModule } from '../../shared/directives/darken-on-hover/darken-on-hover.module';

@NgModule({
    declarations: [
      MoviesListComponent,
      MoviesComponent,
      FilterByTitle,
      SearchComponent
    ],
    imports: [
        CommonModule,
        MovieThumbnailModule,
        CardModule,
        DarkenOnHoverModule
    ]
})
export class MoviesListModule {}
