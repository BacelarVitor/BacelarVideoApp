import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { IMovie } from '../movie-thumbnail/imovie';
import { ILocation } from './location';
import { MovieService } from '../movie-thumbnail/movie.service';

@Component({
  selector: 'app-movie',
  templateUrl: './movie.component.html',
  styleUrls: ['./movie.component.css']
})
export class MovieComponent implements OnInit {

  @Input() movie: IMovie;
  @Input() location: ILocation;
  novamente = 'novamente';

  constructor(private activatedRoute: ActivatedRoute,
              private movieService: MovieService) {}

  ngOnInit(): void {
    this.movie = this.activatedRoute.snapshot.data.movie;
    this.location = this.activatedRoute.snapshot.data.location;
  }

  rentMovie() {
    this.movieService.RentMovie(this.movie.id).subscribe(
          () => {
            this.movieService.GetLocation(this.movie.id).subscribe(
              (location) => this.location = location);
          },
          err => console.log(err)
        );
  }

  returnMovie() {
    this.movieService.RenturnMovie(this.location).subscribe(
      () => {
        this.movieService.GetLocation(this.movie.id).subscribe(
          (location) => this.location = location);
      },
      err => console.log(err)
    );
  }
}
