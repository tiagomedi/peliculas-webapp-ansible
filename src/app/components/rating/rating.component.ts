import { Component, Input, Output, EventEmitter, OnInit } from '@angular/core';

@Component({
  selector: 'app-rating',
  templateUrl: './rating.component.html',
  styleUrls: ['./rating.component.css']
})
export class RatingComponent {
  /** Ej: 7.67, 6.78... */
  @Input() rating = 0;
  /** Total de estrellas (10 para vote_average de TheMovieDB) */
  @Input() maxStars = 10;

  // array con [1,2,3,...,maxStars]
  stars: number[] = [];

  // Número de estrellas rellenas (por la parte entera del rating)
  get filledStars() {
    return Math.floor(this.rating);
  }

  ngOnInit(): void {
    this.stars = Array.from({ length: this.maxStars }, (_, i) => i + 1);
  }
}
