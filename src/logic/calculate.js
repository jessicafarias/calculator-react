import operate from './operate';

const calculate = (dataObject, symbol) => {
  const { total, next, operation } = dataObject;

  if (symbol === 'AC') {
    return {
      total: null,
      next: null,
      operation: null,
    };
  }

  if (symbol === '+') {
    return {
      total: '',
      next: null,
      operation: `${total} +`,
    };
  }

  if (symbol === '-') {
    return {
      total: null,
      next: null,
      operation: `${total} -`,
    };
  }

  if (symbol === '/') {
    return {
      total: null,
      next: null,
      operation: `${total} /`,
    };
  }

  if (symbol === '%') {
    return {
      total: null,
      next: null,
      operation: `${total} %`,
    };
  }

  if (symbol === '=') {
    return {
      total: operate(total, next, symbol),
      next: null,
      operation: null,
    };
  }

  if (symbol === '+/-') {
    return {
      total: total * (-1),
      next: next * (-1),
      operation: null,
    };
  }

  return {
    total: null,
    next: operation,
    operation: null,
  };
};

export default calculate;
