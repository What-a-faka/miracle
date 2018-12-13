import { dateFormat } from '../main';

const today = new Date(1994, 5, 16, 0, 0, 0, 0)
const yesterday = new Date(1994, 5, 15, 0, 0, 0, 0)

test('format', () => {
  expect(dateFormat.format(today)).toBe('1994-06-16 00:00:00');
});

test('rangeFormat', () => {
  const rangeTime = [yesterday, today];
  expect(dateFormat.rangeFormat(rangeTime)).toEqual(['1994-06-15 00:00:00', '1994-06-16 00:00:00']);
});

test('todayRangeFormat', () => {
  expect(dateFormat.todayRangeFormat(today)).toEqual(['1994-06-16 00:00:00', '1994-06-16 23:59:59']);
});
