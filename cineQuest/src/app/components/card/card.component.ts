import { Component, Input, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { DetailsDialogComponent } from '../details-dialog/details-dialog.component';
@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {

  @Input() movie:any;
  constructor(private dialogRef: MatDialog) { }

  ngOnInit(): void {
  }

  openDetailsModal() {
    this.dialogRef.open(DetailsDialogComponent, {
      data: { 
        title: this.movie.title,
        originalTitle: this.movie?.original_title,
        voteAverage: this.movie?.vote_average,
        overview: this.movie?.overview,
       },
    });

  }

}
