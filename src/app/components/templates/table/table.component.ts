import { Component, signal } from '@angular/core';
import { NavbarComponent } from '../../organisms/navbar/navbar.component';
import { ActivatedRoute } from '@angular/router';
import { UserSignupComponent } from '../user-signup/user-signup.component';
import { FormComponent } from '../../molecules/form/form.component';

@Component({
  selector: 'app-table',
  standalone: true,
  imports: [NavbarComponent, UserSignupComponent, FormComponent],
  templateUrl: './table.component.html',
  styleUrl: './table.component.css'
})
export class TableComponent {
  tableName = signal<string>('');
  owner = signal<string>('');
  constructor(private route: ActivatedRoute) {}

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.tableName.set(params['id']);
    });

  }
}
