import Big from 'big.js';
import operate from './operate';

const calculate = (dataObject, symbol) => {
  const { total, next, operation } = dataObject;

  if (symbol === 'AC') {
    return {
      total: '0',
      next: '0',
      operation: '',
    };
  }

  if (symbol === '+') {
    return {
      total: operate(next, total, symbol),
      next: '0',
      operation: '+',
    };
  }

  if (symbol === '-') {
    return {
      total: operate(next, total, symbol),
      next: '0',
      operation: '-',
    };
  }

  if (symbol === '/') {
    return {
      total: '0',
      next: `${total}`,
      operation: '/',
    };
  }

  if (symbol === '%') {
    return {
      total: '0',
      next: `${total}`,
      operation: '%',
    };
  }

  if (symbol === '=') {
    return {
      total: operate(total, next, operation),
    };
  }

  if (symbol === '+/-') {
    return {
      next: `${next * (-1)}`,
      operation,
    };
  }

  return {
    next: new Big(`${next}${symbol}`),
  };
};

export default calculate;
