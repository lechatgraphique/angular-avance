import { Component, OnInit } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {ApiMovie, ApiPopularResponce, Movies} from "../../types/types";

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.css']
})
export class MoviesComponent implements OnInit {
  movies: Movies = [];
  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    const request = this.http.get<ApiPopularResponce>('https://api.themoviedb.org/3/movie/popular?api_key=9fcfd84b49752709e1ee2080f0448675&language=fr-FR&page=1');

    request.subscribe((response) => {
      this.movies = response.results.map(item => {
        return {
          id: item.id,
          title: item.title,
          description: item.overview,
          rating: item.vote_average,
          image: `https://image.tmdb.org/t/p/w500/${item.poster_path}`
        }
      })
    })
  }
}
