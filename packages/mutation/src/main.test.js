import Mutation from './main';

test('clean Default ', () => {
  const data = {
    test: ''
  }
  const mutation = new Mutation({})
  expect(mutation.parse(data)).toEqual({});
});

test('clean cleanValue ', () => {
  const data = {
    test: '',
    test1: undefined
  }
  const mutation = new Mutation({}, {cleanValue: ''})
  expect(mutation.parse(data)).toEqual({test1: undefined});
});

