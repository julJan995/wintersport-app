import { Injectable } from '@angular/core';
import { environment } from '../env/env.local';

@Injectable({
  providedIn: 'root',
})
export class StravaAuthService {
  private readonly clientId = environment.CLIENT_ID;
  private readonly stravaUrl = 'https://www.strava.com/oauth/authorize';
  private readonly redirectUri = `${environment.FRONTEND_URL}auth/strava/callback`;
  private readonly scope = 'activity:read_all';

  connectWithStrava(): void {
    const params = new URLSearchParams({
      client_id: this.clientId,
      response_type: 'code',
      redirect_uri: this.redirectUri,
      approval_prompt: 'auto',
      scope: this.scope,
    });

    window.location.href = `${this.stravaUrl}?${params.toString()}`;
  }
}
