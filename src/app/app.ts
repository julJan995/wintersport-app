import { Component } from '@angular/core';
import { AuthPage } from './features/auth-page/auth-page';
import { Dashboard } from './features/dashboard/dashboard';


@Component({
  selector: 'app-root',
  imports: [AuthPage, Dashboard],
  templateUrl: './app.html',
  styleUrl: './app.scss',
})
export class App {
  isAuthComponentReady = false;
}
