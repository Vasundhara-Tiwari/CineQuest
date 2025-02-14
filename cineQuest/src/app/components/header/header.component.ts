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

  constructor(private dataService: DataService) {}

  ngOnInit(): void {}

  onChangeText() {
    if (this.movieName == ''){
      this.getTrendingMovies();
    } else {
      this.searchByMovieName();
    }
  }

  getTrendingMovies = () => {
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
