import { Component, inject } from '@angular/core';
import { UsersService } from '../../../services/users.service';

@Component({
  selector: 'app-top-cards',
  standalone: true,
  imports: [],
  templateUrl: './top-cards.component.html',
  styleUrl: './top-cards.component.css'
})
export class TopCardsComponent {
  private playerService = inject(UsersService);
  players = this.playerService.players().slice(0, 3);
}
