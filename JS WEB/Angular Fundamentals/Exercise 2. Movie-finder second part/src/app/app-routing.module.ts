import { NgModule } from '@angular/core';
import { Route, RouterModule } from '@angular/router';
import { MoviesComponent } from './movies/movies.component';
import { MovieDetailsComponent } from './movie-details/movie-details.component';
import { SingleMovieResolver } from './services/resolvers/single-movie.resolver';
import { MovieSeachComponent } from './movie-seach/movie-seach.component';

const appRoutes: Route[] = [
  {path: '', pathMatch:'full', redirectTo:'movies' },
  {path: 'movies', component:MoviesComponent},
  {path:'movies/search', component:MovieSeachComponent},
  {path: 'movies/:id',
   component: MovieDetailsComponent,
   resolve:{ singleMovie:SingleMovieResolver}
  }
];

@NgModule ({

  imports:[
    RouterModule.forRoot(appRoutes)
  ],
  exports:[
    RouterModule
  ]
})
export class AppRoutingModule{}

