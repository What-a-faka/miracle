import { htmlFormat } from '../main';

test('removeHtml', () => {
  const { removeHtml } = htmlFormat;
  expect(removeHtml('<p>h<span>a</span>ha</p>')).toBe('haha');
});
