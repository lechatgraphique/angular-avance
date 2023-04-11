import { Component, OnInit } from '@angular/core';
import {HttpClient} from "@angular/common/http";

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.css']
})
export class MoviesComponent implements OnInit {
  movies: any[] = [];
  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    const responce = this.http.get('https://api.themoviedb.org/3/movie/popular?api_key=9fcfd84b49752709e1ee2080f0448675&language=fr-FR&page=1');

    responce.subscribe((res: any) => {
      this.movies = res.results;
    })
  }
}
