import { Component, inject, signal } from '@angular/core';
import { NavbarComponent } from '../../organisms/navbar/navbar.component';
import { ActivatedRoute } from '@angular/router';
import { FormComponent } from '../../molecules/form/form.component';
import { CardComponent } from '../../atoms/card/card.component';
import { Player } from '../../../models/players.model';
import { UsersService } from '../../../services/users.service';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { LabelComponent } from '../../atoms/label/label.component';
import { TopCardsComponent } from '../../molecules/top-cards/top-cards.component';
import { RightCardComponent } from '../../molecules/right-card/right-card.component';
import { BottomCardsComponent } from '../../molecules/bottom-cards/bottom-cards.component';
import { LeftCardComponent } from '../../molecules/left-card/left-card.component';

@Component({
  selector: 'app-table',
  standalone: true,
  imports: [NavbarComponent, ReactiveFormsModule, FormComponent, CardComponent, LabelComponent, TopCardsComponent, RightCardComponent, BottomCardsComponent, LeftCardComponent],
  templateUrl: './table.component.html',
  styleUrl: './table.component.css'
})
export class TableComponent {
  constructor(private route: ActivatedRoute, private fb: FormBuilder) {}
  private playerService = inject(UsersService);
  tableName = signal<string>('');
  players = signal<Player[]>(this.playerService.players());
  isAdminReady = signal<boolean>(this.playerService.adminPlayer() !== undefined);
  initials = signal<string>(this.playerService.adminPlayer()?.initials ?? '');
  isSpectator = signal<boolean>(this.playerService.adminPlayer()?.playerType === 'spectator');

  signupForm = this.fb.group({
    username: ['', [
      Validators.required, 
      Validators.minLength(5),
      Validators.maxLength(20),
      Validators.pattern('(?!^d+$)(?!.*[()_,.*#/-])(?:[^0-9]*[0-9]){0,3}[^0-9]*')
    ]],
    playerType: ['', Validators.required],
  })
  
  ngOnInit() {
    this.route.params.subscribe(params => {
      this.tableName.set(params['id']);
    });
  }

  onSubmit() {
    this.playerService.registerPlayer({
      name: this.signupForm.value.username ?? '',
      playerType: this.signupForm.value.playerType ?? '',
      initials: (this.signupForm.value.username ?? '').substring(0, 2).toUpperCase(),
      score: 0,
      role: 'admin',
    });
    this.isAdminReady.set(true);
    this.initials.set(this.playerService.adminPlayer()?.initials ?? '');
    this.players.set(this.playerService.players());
    this.isSpectator.set(this.playerService.adminPlayer()?.playerType === 'spectator');
  }

}
