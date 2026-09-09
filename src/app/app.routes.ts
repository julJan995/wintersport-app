import { Routes } from '@angular/router';
import { StravaCallback } from './features/strava-callback/strava-callback';
import { AuthPage } from './features/auth-page/auth-page';
import { Dashboard } from './features/dashboard/dashboard';

export const routes: Routes = [
  {
    path: '',
    component: AuthPage,
  },
  {
    path: 'auth/strava/callback',
    component: StravaCallback,
  },
  {
    path: 'dashboard',
    component: Dashboard,
  },
];
