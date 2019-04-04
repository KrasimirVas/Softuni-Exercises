import { Component, OnInit } from '@angular/core';
import Movie from '../models/Movie';
import { MovieService } from '../services/movie.service';
import { ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-movie-seach',
  templateUrl: './movie-seach.component.html',
  styleUrls: ['./movie-seach.component.css']
})
export class MovieSeachComponent implements OnInit {
  searchedMovies: Movie[];
  query:string;

  constructor(
    private movieService: MovieService,
    private route:ActivatedRoute
  ) { }

  ngOnInit() {
    this.route.queryParams.subscribe((params: Params)=>{
      this.query=params['search'];
      this.movieService.searchMovie(this.query)
      .subscribe(data => {
        this.searchedMovies = data['results'];
      });
    });
  }
}
