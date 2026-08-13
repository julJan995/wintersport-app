import { Component, inject } from '@angular/core';
import { StravaService } from '../../services/strava';

@Component({
  selector: 'app-dashboard',
  imports: [],
  templateUrl: './dashboard.html',
  styleUrl: './dashboard.scss',
})
export class Dashboard {
  private stravaService = inject(StravaService);

  activities = this.stravaService.getActivities();
}
