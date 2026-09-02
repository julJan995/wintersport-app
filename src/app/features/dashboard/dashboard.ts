import { Component, inject } from '@angular/core';
import { StravaService } from '../../services/strava';
import { DistancePipe } from '../../shared/pipes/distance.pipe';
import { DurationPipe } from '../../shared/pipes/duration.pipe';

@Component({
  selector: 'app-dashboard',
  imports: [DistancePipe, DurationPipe],
  templateUrl: './dashboard.html',
  styleUrl: './dashboard.scss',
})
export class Dashboard {
  private stravaService = inject(StravaService);

  activities = this.stravaService.getActivities();
}
