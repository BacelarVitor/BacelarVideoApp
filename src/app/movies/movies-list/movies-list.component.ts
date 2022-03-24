import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { IMovie } from '../movie-thumbnail/imovie';
import { MovieService } from '../movie-thumbnail/movie.service';

@Component({
  selector: 'app-movies-list',
  templateUrl: './movies-list.component.html',
  styleUrls: ['./movies-list.component.css']
})
export class MoviesListComponent implements OnInit {

  movies: IMovie[] = [];
  filter = '';

  constructor(private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.movies = this.activatedRoute.snapshot.data.movies;
  }
}
