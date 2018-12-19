// import Mutation = require('./index');
import Mutation from './obj-mutation';

test('clean Default ', () => {
  const data = {
    test: '',
  };
  const mutation = new Mutation({});
  expect(mutation.parse(data)).toEqual({});
});

test('clean cleanValue ', () => {
  const data = {
    test: '',
    test1: undefined,
  };
  const mutation = new Mutation({}, { cleanValue: '' });
  expect(mutation.parse(data)).toEqual({ test1: undefined });
});

test('mutate', () => {
  const data = {
    test: 'haha',
  };
  const schema = {
    test: {
      mutate: {
        test1: (v: string) => `${v}hehe`,
      },
    },
  };
  const mutation = new Mutation(schema);
  expect(mutation.parse(data)).toEqual({ test1: 'hahahehe' });
});

test('create', () => {
  const data = {
    test1: 'haha',
    test2: 'hehe',
  };
  const schema = {
    test: {
      create(obj: any) {
        return obj.test1 + obj.test2;
      },
    },
  };
  const mutation = new Mutation(schema);
  expect(mutation.parse(data)).toEqual({ test: 'hahahehe', test1: 'haha', test2: 'hehe' });
});

test('format', () => {
  const data = {
    test: 'haha',
  };
  const schema = {
    test: {
      format: (v: string) => `${v}1`,
    },
  };
  const mutation = new Mutation(schema);
  expect(mutation.parse(data)).toEqual({ test: 'haha1' });
});
