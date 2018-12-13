import _format from 'date-fns/format';

const patternStr = 'YYYY-MM-DD HH:mm:ss';

export function format(time, pattern = patternStr) {
  return time ? _format(time, pattern) : '';
}

export function rangeFormat(dateRange, pattern = patternStr) {
  if (Array.isArray(dateRange)) {
    const dr = dateRange.map((date) => format(date, pattern));

    // startTime and endTime must exist togegher.
    if (dr[0] && dr[1]) {
      return dr;
    }
    return [];
  }
  return dateRange || [];
}

export function getDayRangeFormat(date = Date.now(), pattern = patternStr) {
  const start = format(new Date(date).setHours(0, 0, 0), pattern);
  const end = format(new Date(date).setHours(23, 59, 59), pattern);
  return [start, end];
}
