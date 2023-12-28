import { Component, inject } from '@angular/core';
import { UsersService } from '../../../services/users.service';

@Component({
  selector: 'app-left-card',
  standalone: true,
  imports: [],
  templateUrl: './left-card.component.html',
  styleUrl: './left-card.component.css'
})
export class LeftCardComponent {
  private playerService = inject(UsersService);
  players = this.playerService.players().slice(7, 8);
}
