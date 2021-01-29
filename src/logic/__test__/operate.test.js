import operate from '../operate';

describe('Get result when operate 2 numbers', () => {
  test('testing addition', () => {
    expect(operate(5, 5, '+').toString()).toEqual("10")
  });

  test('testing multiplication', () => {
    expect(operate(5, 5, 'X').toString()).toEqual("25")
  });

  test('testing divition', () => {
    expect(operate(5, 5, '/').toString()).toEqual("1")
  });

  test('testing %', () => {
    expect(operate(null, 100, '%').toString()).toEqual("1")
  });

  test('testing % 10', () => {
    expect(operate(100, 10, '%').toString()).toEqual("10")
  });

});