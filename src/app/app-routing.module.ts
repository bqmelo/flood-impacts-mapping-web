import { Routes } from '@angular/router';
import { UserFormComponent } from './user-form/user-form.component';
import { UserListComponent } from './user-list/user-list.component';
import {AgricultorListComponent} from "./agricultor-list/agricultor-list.component";
import {DanosComponent} from "./danos/danos.component";

export const routes: Routes = [
  { path: '', redirectTo: '/users', pathMatch: 'full' },
  { path: 'users', component: UserListComponent },
  { path: 'create-user', component: UserFormComponent },
  { path: 'list-agricultor', component: AgricultorListComponent },
  { path: 'danos', component: DanosComponent }
];
