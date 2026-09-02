import { DistancePipe } from './distance.pipe';

describe('DistancePipe', () => {
  const pipe = new DistancePipe();

  it('should convert meters to kilometers', () => {
    expect(pipe.transform(3300)).toBe('3.3 km');
  });

  it('should format kilometers with one decimal place', () => {
    expect(pipe.transform(3000)).toBe('3.0 km');
  });

  it('should handle zero', () => {
    expect(pipe.transform(0)).toBe('0.0 km');
  });

  it('should round to one decimal place', () => {
    expect(pipe.transform(3350)).toBe('3.4 km');
  });
});
