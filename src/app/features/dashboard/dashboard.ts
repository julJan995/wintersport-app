import { Component, inject } from '@angular/core';
import { StravaService } from '../../services/strava';
import { DistancePipe } from '../../shared/pipes/distance.pipe';
import { DurationPipe } from '../../shared/pipes/duration.pipe';
import { FormControl, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatSelectModule } from '@angular/material/select';
import { MatFormFieldModule } from '@angular/material/form-field';
import { Navbar } from '../../layout/navbar/navbar';
import { Sidebar } from '../../layout/sidebar/sidebar';

@Component({
  selector: 'app-dashboard',
  imports: [
    DistancePipe,
    DurationPipe,
    MatSelectModule,
    MatFormFieldModule,
    MatFormFieldModule,
    MatSelectModule,
    FormsModule,
    ReactiveFormsModule,
    Navbar,
    Sidebar
  ],
  templateUrl: './dashboard.html',
  styleUrl: './dashboard.scss',
})
export class Dashboard {
  private stravaService = inject(StravaService);
  selected = new FormControl();

  activities = this.stravaService.getActivities();
}
