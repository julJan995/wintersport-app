import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-strava-callback',
  standalone: true,
  template: `
    <p>Connected to Strava..</p>
  `,
})
export class StravaCallback implements OnInit {
  code: string | null = null;

  constructor(
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    const code = this.route.snapshot.queryParamMap.get('code');

    if (!code) {
      console.error('No code from Strava');
      return;
    }

    console.log('Strava code:', code);
    this.router.navigate(['/dashboard']);
  }
}
