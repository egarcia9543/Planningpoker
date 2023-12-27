import { Component } from '@angular/core';

@Component({
  selector: 'app-card',
  standalone: true,
  imports: [],
  templateUrl: './card.component.html',
  styleUrl: './card.component.css'
})
export class CardComponent {
  cards = [0, 1, 3, 5, 8, 13, 21, 34, 55, 89, '?', '☕'];
}
