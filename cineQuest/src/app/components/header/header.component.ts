import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  
  trendingMovies: any;
  errorMessage: string = '';
  movieName: string = '';
  genres: any[] = [];
  page: number = 1;
  filterByGenreClicked: boolean = false;

  constructor(private dataService: DataService) {}

  ngOnInit() {
    this.getGenres();
    this.filterByGenre(28);
  }

  getGenres() {
    this.dataService.genres$.subscribe((genres) => {
      this.genres = genres;
    });
  }

  filterByGenre(genreId: number): void {
    this.dataService.getMoviesByGenre(genreId).subscribe(
      (response: any) => {
        this.dataService.updateMoviesList(response.results);
      },
      (error) => {
        console.error('Error fetching movies by genre:', error);
      }
    );
  }

  filterClicked(){
    this.filterByGenreClicked = !this.filterByGenreClicked;
  }

  onChangeText() {
    if (this.movieName == ''){
      this.getTrendingMovies();
    } else {
      this.searchByMovieName();
    }
  }

  getTrendingMovies = () => {
    this.dataService.getTrendingMovies(this.page).subscribe(
      (response: any) => {
        if (response && response.results) {
          this.trendingMovies = response.results;
          console.log("Trending Movies:", this.trendingMovies);
        } else {
          this.errorMessage = 'No trending movies found.';
        }
      },
      (error) => {
        console.error("Error fetching trending movies:", error);
        this.errorMessage = 'Failed to fetch trending movies. Please try again later.';
      }
    );
  }

  searchByMovieName = () => {
    this.dataService.changeMovie(this.movieName);
    this.dataService.searchMovies(this.movieName).subscribe(
      (response: any) => {
        console.log("API Response:", response.results);
        this.dataService.updateMoviesList(response.results);
      },
      (error) => {
        console.error("API Error:", error);
      }
    );
  }
}
