import { Routes } from '@angular/router';
import { HomeComponent } from './components/templates/home/home.component';
import { TableComponent } from './components/templates/table/table.component';
import { UserSignupComponent } from './components/templates/user-signup/user-signup.component';

export const routes: Routes = [
    { path: '', component: HomeComponent },
    { path: 'table/:id', component: TableComponent },
    { path: 'signup', component: UserSignupComponent}
];
