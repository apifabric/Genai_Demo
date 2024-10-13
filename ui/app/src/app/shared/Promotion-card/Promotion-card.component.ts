import { Component, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'transactions-card',
  templateUrl: './Promotion-card.component.html',
  styleUrls: ['./Promotion-card.component.scss'],
  encapsulation: ViewEncapsulation.None,
  host: {
    '[class.Promotion-card]': 'true'
  }
})

export class PromotionCardComponent {


}