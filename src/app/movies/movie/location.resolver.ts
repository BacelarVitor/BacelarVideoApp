import { Injectable } from '@angular/core';
import { Resolve, RouterStateSnapshot, ActivatedRouteSnapshot } from '@angular/router';
import { Observable } from 'rxjs';

import { MovieService } from '../movie-thumbnail/movie.service';
import { ILocation } from './location';

@Injectable({ providedIn: 'root'})
export class LocationResolver implements Resolve<Observable<ILocation>>{

    constructor(private service: MovieService) {}

    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<ILocation> {
      const movieId = route.params.id;
      return this.service.GetLocation(movieId);
    }
}
