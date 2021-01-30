import calculate from '../calculate';

describe('calculate return diferent values', () => {
  test('return null when click on AC', () => {
    expect(calculate({ total: 9, next: 6, operation: '+' }, 'AC'))
      .toEqual({ total: null, next: null, operation: null });
  });

  test('make the + operation and override operation with +', () => {
    expect(calculate({ total: 1, next: 1, operation: '+' }, '+'))
      .toEqual({ total: '2', next: '0', operation: '+' });
  });

  test('make the + operation and override operation with -', () => {
    expect(calculate({ total: 1, next: 1, operation: '+' }, '-'))
      .toEqual({ total: '2', next: '0', operation: '-' });
  });

  test('make the + operation and override operation with X', () => {
    expect(calculate({ total: 1, next: 1, operation: '+' }, 'X'))
      .toEqual({ total: '2', next: '0', operation: 'X' });
  });

  test('make the - operation and override operation with X', () => {
    expect(calculate({ total: 1, next: 1, operation: '-' }, 'X'))
      .toEqual({ total: '0', next: '0', operation: 'X' });
  });

  test('make the - operation and override operation with +', () => {
    expect(calculate({ total: 1, next: 1, operation: '-' }, '+'))
      .toEqual({ total: '0', next: '0', operation: '+' });
  });

  test('Change the sign of the number', () => {
    expect(calculate({ total: 1, next: 1, operation: '-' }, '-/+'))
      .toEqual({ total: 1, next: 1, operation: '-' });
  });

  test('Calculate and store in total, asign operation equal to =', () => {
    expect(calculate({ total: 1, next: 1, operation: '+' }, '='))
      .toEqual({ total: 1, next: '2', operation: '=' });
  });
});
