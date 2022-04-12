import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {
  Movie,
  PopularMoviesInterface,
} from '../../../data/interfaces/popularMovies.interface';
import { map, Observable } from 'rxjs';
import { QueryActions } from 'src/app/data/enums/queryActions.enum';
import { environment } from 'src/environments/environment.prod';
import {
  LatestMovie,
  LatestMoviesInterface,
} from 'src/app/data/interfaces/latestMovies.interface';

@Injectable({
  providedIn: 'root',
})
export class MoviesService {
  constructor(private http: HttpClient) {}

  private imageUrlConstructor(originalUrl: string) {
    return `https://www.themoviedb.org/t/p/w220_and_h330_face/${originalUrl}`;
  }

  private queryConstructor(action: QueryActions, movie_id?: string): string {
    switch (action) {
      case QueryActions.POPULAR_MOVIES:
        return `${environment.api_movie_uri}/popular?api_key=${environment.api_key}&language=en-US&page=1`;
      case QueryActions.LATEST_MOVIES:
        return `${environment.api_movie_uri}/now_playing?api_key=${environment.api_key}&language=en-US&page=1`;
      case QueryActions.MOVIE_DETAILS:
        return `${environment.api_movie_uri}/${movie_id}?api_key=${environment.api_key}&language=en-US&page=1`;
      default:
        return '';
    }
  }

  getPopularMovies(): Observable<Movie[]> {
    return this.http
      .get<PopularMoviesInterface>(
        this.queryConstructor(QueryActions.POPULAR_MOVIES)
      )
      .pipe(
        map((movies) => {
          const { results } = movies;

          for (let i = 0; i < results.length; i++) {
            results[i].poster_path = this.imageUrlConstructor(
              results[i].poster_path
            );
          }

          console.log(results);
          return results;
        })
      );
  }

  getLatestMovies(): Observable<LatestMoviesInterface> {
    return this.http
      .get<LatestMoviesInterface>(
        this.queryConstructor(QueryActions.LATEST_MOVIES)
      )
      .pipe(
        map((movies) => {
          for (let i = 0; i < movies.results.length; i++) {
            movies.results[i].poster_path = this.imageUrlConstructor(
              movies.results[i].poster_path
            );
          }

          console.log(movies.dates);
          return movies;
        })
      );
  }

  getMovieDetails(id: string): Observable<Movie> {
    return this.http
      .get<Movie>(this.queryConstructor(QueryActions.MOVIE_DETAILS, id))
      .pipe(
        map((movie) => {
          console.log(movie);
          return movie;
        })
      );
  }
}
