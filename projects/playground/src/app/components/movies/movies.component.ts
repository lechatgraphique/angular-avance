import {Component, OnInit} from '@angular/core';
import {Genres, Movies} from "../../types/types";
import {MoviesService} from "../../services/movies.service";
import {filter, forkJoin, fromEvent, map, tap} from "rxjs";

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
    let enBas = false;
    scroll$.pipe(
      map(() => {
        return document.documentElement.scrollTop + document.documentElement.clientHeight >=
          document.documentElement.scrollHeight - 300;
      }),
      tap((isBottom) => {
        if(!isBottom) enBas = false;
      }),
      filter((isBottom) => isBottom === true),
      filter(() => !enBas)
    )
      .subscribe(() => {
      enBas = true;
      this.page++;
      this.moviesService.getPopularMovies(this.page).subscribe((movies) => {
        this.movies = [...this.movies, ...movies];
      })
    })
  }
}
