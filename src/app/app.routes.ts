import { Routes } from '@angular/router';
import { HomeComponent } from './components/templates/home/home.component';
import { TableComponent } from './components/templates/table/table.component';

export const routes: Routes = [
    { path: '', component: HomeComponent },
    { path: 'table/:id', component: TableComponent },
];
