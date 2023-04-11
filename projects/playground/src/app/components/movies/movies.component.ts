import { Component, OnInit } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {ApiMovie, ApiPopularResponce, Genres, Movies} from "../../types/types";
import {MoviesService} from "../../services/movies.service";

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
    this.moviesService
      .getPopularMovies()
      .subscribe((movies) => this.movies = movies);

    this.moviesService
      .getGenreMovies()
      .subscribe((genres) => this.genres = genres);

  }
}
