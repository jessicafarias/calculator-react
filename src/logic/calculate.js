import Big from 'big.js';
import operate from './operate';

const calculate = (dataObject, symbol) => {
  const { total, next, operation } = dataObject;

  if (symbol === 'AC') {
    return { total: '0', next: '0', operation: '' };
  }

  if (symbol === 'X') {
    return {
      total: operate(next, total, operation),
      next: '0',
      operation: 'X',
    };
  }

  if (symbol === '/') {
    return {
      total: next,
      next: operate(total, next, operation),
      operation: '/',
    };
  }

  if (symbol === '%') {
    return {
      total: '0',
      next: operate(total, next, operation),
      operation: '%',
    };
  }

  if (symbol === '+') {
    return {
      total: operate(next, total, operation),
      next: '0',
      operation: '+',
    };
  }

  if (symbol === '-') {
    return {
      total: operate(next, total, operation),
      next: '0',
      operation: '-',
    };
  }
  if (symbol === '=') {
    return {
      next: operate(total, next, operation),
      total: '0',
      operation: '+',
    };
  }

  if (symbol === '+/-') {
    return {
      next: `${next * (-1)}`,
    };
  }

  return {
    next: new Big(`${next}${symbol}`),
    total: new Big(`${total}`),
  };
};

export default calculate;
