import { Injectable } from '@angular/core';
import { STRAVA_ACTIVITIES_MOCK } from '../mocks/strava-activities.mock';
import { StravaActivity } from '../models/strava-activity.model';

@Injectable({
  providedIn: 'root',
})
export class StravaService {
  getActivities(): StravaActivity[] {
    return STRAVA_ACTIVITIES_MOCK;
  }
}
