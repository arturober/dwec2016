import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'star-rating',
  templateUrl: './star-rating.component.html',
  styleUrls: ['./star-rating.component.css']
})
export class StarRatingComponent implements OnInit {
  @Input() rating: number;
  ratingAux: number;
  @Output() ratingChanged: EventEmitter<number> = new EventEmitter<number>();

  constructor() { }

  setRating() {
    this.ratingChanged.emit(this.ratingAux);
  }

  ngOnInit() {
    this.ratingAux = this.rating;
  }

}
