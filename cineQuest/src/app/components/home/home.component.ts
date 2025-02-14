import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  trendingMovies: any;
  constructor(private dataService: DataService) { }

  ngOnInit() {
    this.dataService.getTrendingMovies().subscribe(response => {
      this.trendingMovies = response.results;
      console.log("Trending Movies:", this.trendingMovies);
    });

    this.dataService.currentMoviesList.subscribe(movies => {
      if (movies.length > 0) {
        this.trendingMovies = movies;
      }
    });
  }

}
