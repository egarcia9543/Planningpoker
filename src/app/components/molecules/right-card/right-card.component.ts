import { Component, inject } from '@angular/core';
import { UsersService } from '../../../services/users.service';

@Component({
  selector: 'app-right-card',
  standalone: true,
  imports: [],
  templateUrl: './right-card.component.html',
  styleUrl: './right-card.component.css'
})
export class RightCardComponent {
  private playerService = inject(UsersService);
  players = this.playerService.players().slice(3, 4);
  
}
