import { zodiacFormat } from '../main'

test('zodiacTest', () => {
  expect(zodiacFormat('510302199429392834')).toBe('狗')
  expect(zodiacFormat('510302199529392834')).toBe('猪')
})
