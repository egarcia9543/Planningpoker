import { Component, EventEmitter, Output, inject } from '@angular/core';
import { UsersService } from '../../../services/users.service';

@Component({
  selector: 'app-card',
  standalone: true,
  imports: [],
  templateUrl: './card.component.html',
  styleUrl: './card.component.css'
})
export class CardComponent {
  @Output() cardClicked = new EventEmitter();
  isCardClicked: boolean = false;
  chosenCard: string | number | undefined = undefined;
  private playerService = inject(UsersService);
  constructor() { }

  cards = [0, 1, 3, 5, 8, 13, 21, 34, 55, 89, '?', '☕'];

  cardClick(card: number) {
    this.cardClicked.emit(this.cards[card]);
    this.isCardClicked = true;
    console.log(this.cards[card]);
    this.chosenCard = this.cards[card];
    this.playerService.setPlayerScore(this.playerService.adminPlayer()!, Number(this.cards[card]));
  }
}
