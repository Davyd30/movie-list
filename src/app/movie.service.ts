import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MovieService {

  constructor() { }

  addMovie(movietitle: string, moviedirector: string, movieyear: string) {
    this.movieList.push({title: movietitle, director: moviedirector, year: movieyear});
  }

  movieList = [
    {title: 'The Shawshank Redemption', director: 'Frank Darabont', year: '1994'},
    {title: 'The Godfather', director: 'Francis Ford Coppola', year: '1972'},
    {title: 'The Godfather: Part II', director: 'Francis Ford Coppola', year: '1974'},
    {title: 'The Dark Knight', director: 'Christopher Nolan', year: '2008'},
  ];

  getMovies() {
    return this.movieList;
  }
}
