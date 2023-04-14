import {Component, OnInit} from '@angular/core';
import {Genres, Movies} from "../../types/types";
import {MoviesService} from "../../services/movies.service";
import {distinctUntilChanged, filter, forkJoin, fromEvent, map, tap} from "rxjs";

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.css']
})
export class MoviesComponent implements OnInit {
  movies: Movies = [];
  genres: Genres = [];
  page = 1;
  constructor(private moviesService: MoviesService) { }

  ngOnInit(): void {
    forkJoin([
      this.moviesService.getGenreMovies(),
      this.moviesService.getPopularMovies(this.page)
    ])
      .subscribe(([genre, movies]) => {
        this.genres = genre;
        this.movies = movies;
      });

    const scroll$ = fromEvent(window, 'scroll');
    scroll$.pipe(
      map(() => {
        return document.documentElement.scrollTop + document.documentElement.clientHeight >=
          document.documentElement.scrollHeight - 300;
      }),
      distinctUntilChanged(),
      filter((isBottom) => isBottom === true),
    )
      .subscribe(() => {
      this.page++;
      this.moviesService.getPopularMovies(this.page).subscribe((movies) => {
        this.movies = [...this.movies, ...movies];
      })
    })
  }
}
