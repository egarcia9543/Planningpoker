import { Component, Input, signal } from '@angular/core';

@Component({
  selector: 'app-input',
  standalone: true,
  imports: [],
  templateUrl: './input.component.html',
  styleUrl: './input.component.css'
})
export class InputComponent {
  @Input({required: true}) inputType: string = '';
  @Input({required: true}) inputId: string = '';

  isFormValid = signal<boolean>(false);
}
