import { Component, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'transactions-card',
  templateUrl: './Review-card.component.html',
  styleUrls: ['./Review-card.component.scss'],
  encapsulation: ViewEncapsulation.None,
  host: {
    '[class.Review-card]': 'true'
  }
})

export class ReviewCardComponent {


}