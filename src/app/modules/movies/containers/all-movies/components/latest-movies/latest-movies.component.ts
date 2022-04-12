import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { LatestMoviesInterface } from 'src/app/data/interfaces/latestMovies.interface';
import { MoviesService } from 'src/app/shared/services/movies/movies.service';

@Component({
  selector: 'app-latest-movies',
  templateUrl: './latest-movies.component.html',
  styleUrls: ['./latest-movies.component.scss'],
})
export class LatestMoviesComponent implements OnInit {
  constructor(private moviesSvc: MoviesService) {}

  $latestMovies: LatestMoviesInterface;

  ngOnInit(): void {
    this.moviesSvc.getLatestMovies().subscribe((movies) => {
      this.$latestMovies = movies;
    });
  }
}
