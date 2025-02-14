import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  movieName: string = '';

  constructor(private dataService: DataService) {}

  ngOnInit(): void {}

  onChangeText() {
    if (!this.movieName.trim()) return;

    this.dataService.changeMovie(this.movieName);

    this.dataService.searchMovies(this.movieName).subscribe(
      (response: any) => {
        console.log("API Response:", response.results);
        this.dataService.updateMoviesList(response.results); // Update movie list globally
      },
      (error) => {
        console.error("API Error:", error);
      }
    );
  }
}
