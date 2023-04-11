import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.css']
})
export class MoviesComponent implements OnInit {

  movies: any[] = [];
  constructor() { }

  ngOnInit(): void {
    fetch('https://api.themoviedb.org/3/movie/popular?api_key=9fcfd84b49752709e1ee2080f0448675&language=fr-FR&page=1')
      .then(response => response.json())
      .then((data: any) => {
        this.movies = data.results;
      })
  }

}
