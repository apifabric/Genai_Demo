import { Component, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'transactions-card',
  templateUrl: './Payment-card.component.html',
  styleUrls: ['./Payment-card.component.scss'],
  encapsulation: ViewEncapsulation.None,
  host: {
    '[class.Payment-card]': 'true'
  }
})

export class PaymentCardComponent {


}