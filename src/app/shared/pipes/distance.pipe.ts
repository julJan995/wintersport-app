import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'distance',
})
export class DistancePipe implements PipeTransform {
  transform(meters: number): string {
    return `${(meters / 1000).toFixed(1)} km`;
  }
}
