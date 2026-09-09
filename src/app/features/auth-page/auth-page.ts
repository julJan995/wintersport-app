import { Component, inject } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { StravaAuthService } from '../../services/strava-auth';
import { Navbar } from '../../layout/navbar/navbar';

@Component({
  selector: 'app-auth-page',
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatIconModule,
    Navbar
  ],
  templateUrl: './auth-page.html',
  styleUrl: './auth-page.scss'
})
export class AuthPage {
  private fb = inject(FormBuilder);
  hidePassword = true;

  loginForm = this.fb.group({
    email: ['', [Validators.required, Validators.email]],
    password: ['', [Validators.required, Validators.minLength(6)]],
  });

  private readonly stravaAuth = inject(StravaAuthService);

  onConnectWithStrava(): void {
    this.stravaAuth.connectWithStrava();
  }

  togglePasswordVisibility(event: MouseEvent): void {
    event.preventDefault();
    this.hidePassword = !this.hidePassword;
  }

  onSubmit(): void {
    if (this.loginForm.invalid) {
      this.loginForm.markAllAsTouched();
      return;
    }

    const { email, password } = this.loginForm.getRawValue();
    // TO DO:
    console.log('Login:', { email, password });
  }

  goToRegister(): void {
    // TO DO:
    console.log('Register:');
  }
}
