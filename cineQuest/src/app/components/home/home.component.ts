import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  trendingMovies: any;
  errorMessage: string = '';
  constructor(private dataService: DataService) { }

  ngOnInit() {
    this.getInitialData();
    this.updateMovieList();
  }

  getInitialData = () => {
    this.dataService.getTrendingMovies().subscribe(
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

  updateMovieList = () => {
    this.dataService.currentMoviesList.subscribe(
      (movies) => {
        if (movies.length > 0) {
          this.trendingMovies = movies;
        }
      },
      (error) => {
        console.error("Error fetching searched movies:", error);
        this.errorMessage = 'Failed to fetch search results.';
      }
    );
  }
}
