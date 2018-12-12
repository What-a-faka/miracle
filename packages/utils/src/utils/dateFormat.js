import _format from 'date-fns/format'

export function format(time, pattern = 'YYYY-MM-DD HH:mm:ss') {
  return time ? _format(time, pattern) : ''
}

export function rangeFormat(dateRange, pattern = 'YYYY-MM-DD HH:mm:ss') {
  if (Array.isArray(dateRange)) {
    const dr = dateRange.map(date => format(date, pattern))

    // startTime and endTime must exist togegher.
    if (dr[0] && dr[1]) {
      return dr
    }
    return []
  }
  return dateRange || []
}

export function todayRangeFormat(date = Date.now()) {
  const start = format(new Date(date).setHours(0, 0, 0))
  const end = format(new Date(date).setHours(23, 59, 59))
  return [start, end]
}
