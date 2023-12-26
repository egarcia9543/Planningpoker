import { Component } from '@angular/core';
import { NavbarComponent } from '../../organisms/navbar/navbar.component';
import { LabelComponent } from '../../atoms/label/label.component';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-user-signup',
  standalone: true,
  imports: [NavbarComponent, LabelComponent, ReactiveFormsModule],
  templateUrl: './user-signup.component.html',
  styleUrl: './user-signup.component.css'
})
export class UserSignupComponent {
  signupForm = new FormGroup({
    username: new FormControl('', [Validators.required]),
    playerType: new FormControl('', [Validators.required])
  });

  onSubmit() {
    console.log(this.signupForm.value);
  }
}
