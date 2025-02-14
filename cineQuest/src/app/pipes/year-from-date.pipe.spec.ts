import { YearFromDatePipe } from './year-from-date.pipe';

describe('YearFromDatePipe', () => {
  it('create an instance', () => {
    const pipe = new YearFromDatePipe();
    expect(pipe).toBeTruthy();
  });
});
