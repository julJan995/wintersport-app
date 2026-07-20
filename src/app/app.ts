import { Component } from '@angular/core';
import { AuthPage } from './features/auth-page/auth-page';


@Component({
  selector: 'app-root',
  imports: [AuthPage],
  templateUrl: './app.html',
  styleUrl: './app.scss',
})
export class App {}
