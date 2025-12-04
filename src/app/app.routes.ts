import { Routes } from '@angular/router';
import { CreatedListsComponent } from './features/created-tests/created-test.component';
import { AuthComponent } from './core/auth/auth.component';

export const routes: Routes = [
  {
    path: '',
    component: CreatedListsComponent,
  },
  {
    path: 'register',
    component: AuthComponent,
  },
  {
    path: 'login',
    component: AuthComponent,
  },
];
