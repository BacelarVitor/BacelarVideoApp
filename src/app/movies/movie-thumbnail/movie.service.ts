import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { IMovie } from './imovie';
import { ILocation } from '../movie/location';
import { UserService } from 'src/app/core/user/user.service';

const API = 'https://localhost:44398/api/';

@Injectable({ providedIn: 'root' })
export class MovieService {

  constructor(private http: HttpClient, private userService: UserService) {}

  listMovies() {
      return this.http.get<IMovie[]>(API + 'Filme');
  }

  GetMovie(id: number) {
    return this.http.get<IMovie>(API + 'Filme/' + id);
  }

  GetLocation(movieId: number) {
    return this.http.get<ILocation>(API + 'Locacao/' + movieId);
  }

  RentMovie(movieId: number) {
    // tslint:disable-next-line: radix
    const ClienteId = parseInt(this.userService.getUserId().toString());
    return this.http.post(API + 'Locacao', { FilmeId: movieId, ClienteId, Ativa: true });
  }

  RenturnMovie(location: ILocation) {
    return this.http.put(API + 'Locacao', { Id: location.id,
                                            FilmeId: location.filmeId,
                                            clienteId: location.clienteId,
                                            Ativa: false });
  }
}
