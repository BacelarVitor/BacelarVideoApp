import { Pipe, PipeTransform } from '@angular/core';

import { IMovie } from '../movie-thumbnail/imovie';

@Pipe({ name: 'filterByTitle'})
export class FilterByTitle implements PipeTransform {

    transform(movies: IMovie[], titleQuery: string) {
        titleQuery = titleQuery
            .trim()
            .toLowerCase();

        if (titleQuery) {
            return movies.filter(movie =>
                movie.titulo.toLowerCase().includes(titleQuery)
            );
        }
        return movies;
    }

}
