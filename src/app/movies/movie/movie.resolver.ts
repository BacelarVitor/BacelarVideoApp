import { Injectable } from '@angular/core';
import { Resolve, RouterStateSnapshot, ActivatedRouteSnapshot } from '@angular/router';
import { Observable } from 'rxjs';

import { MovieService } from '../movie-thumbnail/movie.service';
import { IMovie } from '../movie-thumbnail/imovie';

@Injectable({ providedIn: 'root'})
export class MovieResolver implements Resolve<Observable<IMovie>>{

    constructor(private service: MovieService) {}

    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<IMovie> {
      const movieId = route.params.id;
      return this.service.GetMovie(movieId);
    }
}
