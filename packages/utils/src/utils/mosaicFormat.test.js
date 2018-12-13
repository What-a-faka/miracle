import { mosaicFormat } from '../main'

test('mosaicPhone', () => {
  expect(mosaicFormat.mosaicPhone('13990000000')).toBe('139****0000')
})
