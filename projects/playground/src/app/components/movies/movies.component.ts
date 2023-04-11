import { Component, OnInit } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {ApiMovie, ApiPopularResponce, Movies} from "../../types/types";
import {MoviesService} from "../../services/movies.service";

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.css']
})
export class MoviesComponent implements OnInit {
  movies: Movies = [];
  constructor(private moviesService: MoviesService) { }

  ngOnInit(): void {
    this.moviesService
      .getPopularMovies()
      .subscribe((movies) => this.movies = movies);
  }
}
