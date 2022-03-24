import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { Router } from '@angular/router';

import { IMovie } from '../../movie-thumbnail/imovie';
import { UserService } from 'src/app/core/user/user.service';
import { IUser } from 'src/app/core/user/user';

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.css']
})
export class MoviesComponent implements OnChanges {

  @Input() movies: IMovie[] = [];
  rows: any[] = [];
  user$: Observable<IUser>;

  constructor(private userService: UserService, private router: Router) {
    this.user$ = userService.getUser();
  }

  ngOnChanges(changes: SimpleChanges) {
    if (changes.movies) {
      this.rows = this.groupColumns(this.movies);
    }
  }

  groupColumns(movies: IMovie[]) {
    const newRows = [];

    for (let index = 0; index < movies.length; index += 3) {
      newRows.push(movies.slice(index, index + 3));
    }
    return newRows;
  }

  getDetails(id: number){
    this.router.navigate(['movie', id]);
  }

  redirectLogin(){
    this.router.navigate(['']);
  }
}
