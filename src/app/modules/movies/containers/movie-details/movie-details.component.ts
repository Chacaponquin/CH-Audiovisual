import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MoviesService } from 'src/app/shared/services/movies/movies.service';
import { Movie } from 'src/app/data/interfaces/popularMovies.interface';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-movie-details',
  templateUrl: './movie-details.component.html',
  styleUrls: ['./movie-details.component.scss'],
})
export class MovieDetailsComponent implements OnInit {
  constructor(private movieSvc: MoviesService, private route: ActivatedRoute) {}

  $movieFound: Observable<Movie>;

  ngOnInit(): void {
    this.$movieFound = this.movieSvc.getMovieDetails(
      this.route.snapshot.params['id']
    );

    this.movieSvc
      .getMovieDetails(this.route.snapshot.params['id'])
      .subscribe((movie) => console.log(movie));
  }
}
