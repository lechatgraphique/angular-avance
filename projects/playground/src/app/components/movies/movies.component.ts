import { Component, OnInit } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {ApiMovie, ApiPopularResponce, Genres, Movies} from "../../types/types";
import {MoviesService} from "../../services/movies.service";
import {forkJoin} from "rxjs";

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.css']
})
export class MoviesComponent implements OnInit {
  movies: Movies = [];
  genres: Genres = []
  constructor(private moviesService: MoviesService) { }

  ngOnInit(): void {
    forkJoin([
      this.moviesService.getGenreMovies(),
      this.moviesService.getPopularMovies()
    ])
      .subscribe(([genre, movies]) => {
        this.genres = genre;
        this.movies = movies;
      })
  }
}
