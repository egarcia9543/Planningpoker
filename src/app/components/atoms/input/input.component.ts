import { Component, EventEmitter, Input, Output, } from '@angular/core';


@Component({
  selector: 'app-input',
  standalone: true,
  imports: [],
  templateUrl: './input.component.html',
  styleUrl: './input.component.css',
})
export class InputComponent {
  @Input({required: true}) inputType: string = '';
  @Input({required: true}) inputId: string = '';
  @Output() valueChanged = new EventEmitter();

  onInput(event: any) {
    console.log(event.target.value);
    this.valueChanged.emit(event.target.value);
  }
}
