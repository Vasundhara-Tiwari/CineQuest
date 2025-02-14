import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  private movieSource = new BehaviorSubject<string>('');
  currentMovie = this.movieSource.asObservable();

  private movieListSource = new BehaviorSubject<any[]>([]);
  currentMoviesList = this.movieListSource.asObservable();

  private genresSubject = new BehaviorSubject<any[]>([]);
  genres$ = this.genresSubject.asObservable();

  private API_KEY = '5fb013f828dc53501234ae8f4379871f';
  private baseUrl = 'https://api.themoviedb.org/3';
  constructor(
    private http: HttpClient
  ) {
    this.fetchGenres();
   }

  getTrendingMovies(page: number): Observable<any> {
    const url = `${this.baseUrl}/trending/all/week?api_key=${this.API_KEY}`;
    return this.http.get(url);
  }  

  getAllMoviesByPage(page: number): Observable<any>{
    const url = `${this.baseUrl}/discover/movie?api_key=${this.API_KEY}&page=${page}`;
    return this.http.get(url);
  }

  searchMovies(query: string): Observable<any> {
    const url = `${this.baseUrl}/search/movie?api_key=${this.API_KEY}&query=${encodeURIComponent(query)}`;
    return this.http.get(url);
  }

  changeMovie(movie: string) {
    this.movieSource.next(movie);
  }

  updateMoviesList(movies: any[]) {
    this.movieListSource.next(movies);
  }
  getGenres(): Observable<any> {
    return this.http.get(`${this.baseUrl}/genre/movie/list?api_key=${this.API_KEY}&language=en-US`);
  }

  getMoviesByGenre(genreId: number): Observable<any> {
    return this.http.get(`${this.baseUrl}/discover/movie?api_key=${this.API_KEY}&with_genres=${genreId}`);
  }

  fetchGenres() {
    this.getGenres().subscribe((response) => {
      if (response && response.genres) {
        this.genresSubject.next(response.genres);
      }
    });
  }
}