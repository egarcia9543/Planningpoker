import { Injectable, computed, signal } from '@angular/core';
import { Player } from '../models/players.model';

@Injectable({
  providedIn: 'root'
})
export class UsersService {
  players = signal<Player[]>([
    { name: 'Oscar', playerType: 'player', initials: 'OS', score: 0, role: 'player' },
    { name: 'John', playerType: 'player', initials: 'JO', score: 0, role: 'player' },
    { name: 'Carlos', playerType: 'player', initials: 'CA', score: 0, role: 'player' },
    { name: 'Pedro', playerType: 'player', initials: 'PE', score: 0, role: 'player' },
    { name: 'David', playerType: 'player', initials: 'DA', score: 0, role: 'player' },
    { name: 'Luis', playerType: 'player', initials: 'LU', score: 0, role: 'player' },
    { name: 'Andrés', playerType: 'player', initials: 'AN', score: 0, role: 'player' },
  ]);

  registerPlayer(player: Player) {
    this.players.set([player, ...this.players()]);
  }

  setPlayerScore(player: Player, score: number) {
    const players = this.players();
    const playerIndex = players.findIndex(p => p.name === player.name);
    players[playerIndex].score = score;
    this.players.set(players);
  }

  adminPlayer = computed(() => this.players().find(player => player.role === 'admin'));

  constructor() { }
}
