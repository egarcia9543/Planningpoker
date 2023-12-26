import { Component, signal } from '@angular/core';
import { LogoComponent } from '../../atoms/logo/logo.component';
import { ButtonComponent } from '../../atoms/button/button.component';
import { NavbarComponent } from '../../organisms/navbar/navbar.component';
import { FormComponent } from '../../molecules/form/form.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [LogoComponent, ButtonComponent, NavbarComponent, FormComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  isCreatingMatch = signal<boolean>(false);

  createMatch() {
    this.isCreatingMatch.set(true);
  }
}
