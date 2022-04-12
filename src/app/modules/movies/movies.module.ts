import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MoviesRoutingModule } from './movies-routing.module';
import { AllMoviesComponent } from './containers/all-movies/all-movies.component';
import popularMoviesComponents from './containers/all-movies/components';
import { CategoryPipe } from 'src/app/shared/pipes/categoryPipe/category.pipe';
import { DatePipe } from 'src/app/shared/pipes/datePipe/date.pipe';
import { MovieDetailsComponent } from './containers/movie-details/movie-details.component';

@NgModule({
  declarations: [
    AllMoviesComponent,
    MovieDetailsComponent,
    ...popularMoviesComponents,
    CategoryPipe,
    DatePipe,
  ],
  imports: [CommonModule, MoviesRoutingModule],
})
export class MoviesModule {}
