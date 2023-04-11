import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {ApiPopularResponce, ApiResponseGenre, Genre, Genres, Movie, Movies} from "../types/types";
import {map, Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class MoviesService {
  movies: Movies = [];

  constructor(private http: HttpClient) { }

  getPopularMovies(): Observable<Movies> {
    return this.http
      .get<ApiPopularResponce>(
        'https://api.themoviedb.org/3/movie/popular?page=1'
      )
      .pipe(
        map((response) => {
          return response.results.map((item) => {
            return {
              id: item.id,
              title: item.title,
              description: item.overview,
              rating: item.vote_average,
              image: `https://image.tmdb.org/t/p/w500/${item.poster_path}`
            } as Movie;
          })
        })
      );
  }

  getGenreMovies(): Observable<Genres> {
    return this.http.get<ApiResponseGenre>(
      'https://api.themoviedb.org/3/genre/movie/list'
    )
      .pipe(
        map((response) => {
          return response.genres.map((item) => {
            return {
              id: item.id,
              name: item.name
            } as Genre
          })
        })
      );
  }

}
