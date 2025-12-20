import { Routes } from '@angular/router';
import { AuthComponent } from './core/auth/auth.component';
import { TestsTableComponent } from './features/tests-table/tests-table.component';
import { authGuard } from './core/auth/auth.guard';

export const routes: Routes = [
  {
    path: '',
    component: TestsTableComponent,
    canActivate: [authGuard],
  },
  {
    path: 'register',
    component: AuthComponent,
  },
  {
    path: 'login',
    component: AuthComponent,
  },
  {
    path: 'passed-tests',
    loadComponent: () =>
      import('./features/tests-table/tests-table.component').then((c) => c.TestsTableComponent),
    canActivate: [authGuard],
  },
  {
    path: 'test',
    loadComponent: () => import('./features/test/test.component').then((c) => c.TestComponent),
    canActivate: [authGuard],
  },
];
