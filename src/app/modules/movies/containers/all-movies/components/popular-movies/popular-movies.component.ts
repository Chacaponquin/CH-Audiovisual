import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Movie } from '../../../../../../data/interfaces/popularMovies.interface';
import { MoviesService } from 'src/app/shared/services/movies/movies.service';

@Component({
  selector: 'app-popular-movies',
  templateUrl: './popular-movies.component.html',
  styleUrls: ['./popular-movies.component.scss'],
})
export class PopularMoviesComponent implements OnInit {
  $popularMovies: Observable<Movie[]>;

  constructor(private moviesSvc: MoviesService) {}

  ngOnInit(): void {
    this.$popularMovies = this.moviesSvc.getPopularMovies();
  }
}
