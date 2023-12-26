import { Component, ViewChild, signal } from '@angular/core';
import { LabelComponent } from '../../atoms/label/label.component';
import { InputComponent } from '../../atoms/input/input.component';
import { ButtonComponent } from '../../atoms/button/button.component';
import { FormControl, Validators, ReactiveFormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-form',
  standalone: true,
  imports: [InputComponent, ButtonComponent, LabelComponent, ReactiveFormsModule],
  templateUrl: './form.component.html',
  styleUrl: './form.component.css'
})
export class FormComponent {
  constructor(private router: Router) {}

  checkForm = new FormControl('', {
    nonNullable: true,
    validators: [
      Validators.required,
      Validators.minLength(5),
      Validators.maxLength(20),
      Validators.pattern('(?!^d+$)(?!.*[()_,.*#/-])(?:[^0-9]*[0-9]){0,3}[^0-9]*')
    ]
  });

  createMatch() {
    this.router.navigateByUrl(`/table/${this.checkForm.value}`);
  }
}
