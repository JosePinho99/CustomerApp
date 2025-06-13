import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () =>
      import('./pages/customer-list/customer-list.component').then((m) => m.CustomerListComponent),
  },
  {
    path: 'customer/:id',
    loadComponent: () =>
      import('./pages/customer-profile/customer-profile.component').then((m) => m.CustomerProfileComponent),
  },
];
