import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AllMoviesComponent } from './containers/all-movies/all-movies.component';
import { MovieDetailsComponent } from './containers/movie-details/movie-details.component';

const routes: Routes = [
  { path: '', component: AllMoviesComponent },
  { path: ':id', component: MovieDetailsComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MoviesRoutingModule {}
