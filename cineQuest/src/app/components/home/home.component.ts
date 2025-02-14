import { Component, HostListener, OnInit } from '@angular/core';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  totalPages = 100;
  allMovies: any[] = [];
  trendingMovies: any[] = [];
  errorMessage: string = '';
  page: number = 1;
  isLoading: boolean = false;
  searchMode: boolean = false;

  constructor(private dataService: DataService) { }

  ngOnInit() {
    this.getAllMovies();
    this.getTrendingMovies();
    this.listenForSearchUpdates();
  }

  getAllMovies() {
    this.dataService.getAllMoviesByPage(this.page).subscribe(
      (response: any) => {
        if (response && response.results) {
          this.allMovies = [...this.allMovies, ...response.results];
          console.log("allMovies:", this.allMovies);
        } else {
          this.errorMessage = 'No trending movies found.';
        }
        this.isLoading = false;
      },
      (error) => {
        console.error("Error fetching trending movies:", error);
        this.errorMessage = 'Failed to fetch trending movies. Please try again later.';
        this.isLoading = false;
      }
    );
  }

  getTrendingMovies(): void {
    if (this.isLoading) return;
    this.isLoading = true;
    this.dataService.getTrendingMovies(this.page).subscribe(
      (response: any) => {
        if (response && response.results) {
          this.trendingMovies = [...this.trendingMovies, ...response.results];  // Append new results
          console.log("Trending Movies:", this.trendingMovies);
        } else {
          this.errorMessage = 'No trending movies found.';
        }
        this.isLoading = false;
      },
      (error) => {
        console.error("Error fetching trending movies:", error);
        this.errorMessage = 'Failed to fetch trending movies. Please try again later.';
        this.isLoading = false;
      }
    );
  }

  listenForSearchUpdates(): void {
    this.dataService.currentMoviesList.subscribe(
      (movies) => {
        if (movies.length > 0) {
          this.searchMode = true;
          this.trendingMovies = movies;  // Replace with searched movies
        } else {
          this.searchMode = false;
          this.page = 1;
          this.trendingMovies = [];
          this.getTrendingMovies();  // Reset to trending movies
        }
      },
      (error) => {
        console.error("Error fetching searched movies:", error);
        this.errorMessage = 'Failed to fetch search results.';
      }
    );
  }

  @HostListener("window:scroll", [])
  onScroll(): void {
    this.page++;
    if (
      !this.searchMode && 
      (window.innerHeight + window.scrollY) >= document.body.offsetHeight - 10 && 
      !this.isLoading &&
      this.page <= this.totalPages
    ) {
      this.getAllMovies();
    }
  }
}
