import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'test',
    loadComponent: () => import('./tests/tests.component').then((m) => m.TestsComponent),
  },
  {
    path: '',
    redirectTo: 'test',
    pathMatch: 'full',
  },
];
