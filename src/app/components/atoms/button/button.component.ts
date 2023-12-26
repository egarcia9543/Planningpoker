import { Component, EventEmitter, Input, Output, inject } from '@angular/core';

@Component({
  selector: 'app-button',
  standalone: true,
  imports: [],
  templateUrl: './button.component.html',
  styleUrl: './button.component.css'
})
export class ButtonComponent {
  @Input({required: true}) buttonClass: string = '';
  @Input({required: true}) buttonText: string = '';
  @Input() buttonType: string = '';
  @Output() eventListened = new EventEmitter();


  buttonClicked() {
    this.eventListened.emit();
  }
}
