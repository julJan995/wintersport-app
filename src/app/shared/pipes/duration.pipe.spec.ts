import { DurationPipe } from './duration.pipe';

describe('DurationPipe', () => {
  const pipe = new DurationPipe();

  it('should format hours and minutes', () => {
    expect(pipe.transform(5400)).toBe('1h30min');
  });

  it('should format minutes', () => {
    expect(pipe.transform(1800)).toBe('30min');
  });

  it('should format zero', () => {
    expect(pipe.transform(0)).toBe('0min');
  });

  it('should format seconds below one minute', () => {
    expect(pipe.transform(45)).toBe('0min');
  });

  it('should format exactly one hour', () => {
    expect(pipe.transform(3600)).toBe('1h0min');
  });

  it('should format hours and minutes', () => {
    expect(pipe.transform(3660)).toBe('1h1min');
  });

  it('should format multiple hours', () => {
    expect(pipe.transform(7380)).toBe('2h3min');
  });
});
