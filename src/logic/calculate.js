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
      next: operate(total, next, operation),
      operation: null,
    };
  }

  if (symbol === '+/-') {
    return {
      total: `-${total}`, // operacion para invertir signos
      next: null,
      operation,
    };
  }

  return {
    next: `${next}${symbol}`,
  };
};

export default calculate;
