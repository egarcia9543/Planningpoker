import { Component, inject } from '@angular/core';
import { UsersService } from '../../../services/users.service';

@Component({
  selector: 'app-bottom-cards',
  standalone: true,
  imports: [],
  templateUrl: './bottom-cards.component.html',
  styleUrl: './bottom-cards.component.css'
})
export class BottomCardsComponent {
  private playerService = inject(UsersService);
  players = this.playerService.players().slice(4, 7);
}
