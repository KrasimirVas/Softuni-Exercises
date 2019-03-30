import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import Movie from '../models/Movie';
const BASE_URL='https://api.themoviedb.org/3/movie';
const IN_THEATERS='https://api.themoviedb.org/3/discover/movie';
const API_KEY='?api_key=3c380ca94e7f6d5fb6bc3faf2e61083e';
@Injectable({
  providedIn: 'root'
})


export class MovieService {

  constructor(private http: HttpClient) { }

  getPopularMovies(): Observable<Array<Movie>> {
    return this.http.get<Array<Movie>>(BASE_URL + '/popular' + API_KEY)
  }
  getInTheaterMovies():Observable<Array<Movie>> {
    return this.http.get<Array<Movie>>(IN_THEATERS + API_KEY+'&with_release_type=2|3')
  }
}
