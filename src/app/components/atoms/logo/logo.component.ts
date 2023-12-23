import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-logo',
  standalone: true,
  imports: [],
  templateUrl: './logo.component.html',
  styleUrl: './logo.component.css'
})
export class LogoComponent {
  @Input({required: true}) logoUrl: string = '';
  @Input({required: true}) logoAlt: string = '';
  @Input({required: true}) logoClass: string = '';
  @Input() logoWidth: string = '';
  @Input() logoHeight: string = '';
}
