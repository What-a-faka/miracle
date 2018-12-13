import storage from './main';

storage.setItem('test', '123');

test('getItem', () => {
  expect(storage.getItem('test')).toBe('123');
});

test('setItem', () => {
  storage.setItem('haha', {test: 123})
  expect(storage.getItem('haha').test).toBe(123);
});
