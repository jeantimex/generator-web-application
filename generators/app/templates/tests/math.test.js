import { add } from 'lib/math';

describe('math', () => {
  test('1 + 1 = 2', () => {
    expect(add(1, 1)).toEqual(2);
  });
});
