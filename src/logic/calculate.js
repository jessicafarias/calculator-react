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
  else if (symbol === '+') {
    return {
      total: '',
      next: null,
      operation: `${total} +`,
    };
  }
  else if (symbol === '-') {
    return {
      total: null,
      next: null,
      operation: `${total} -`,
    };
  }
  else if (symbol === '/') {
    return {
      total: null,
      next: null,
      operation: `${total} /`,
    };
  }
  else if (symbol === '%') {
    return {
      total: null,
      next: null,
      operation: `${total} %`,
    };
  }

  else if (symbol === '=') {
    return {
      total: operate(total, next),
      next: null,
      operation: null,
    };
  }

  else {
    return {
      total: null,
      next: operation,
      operation: null,
    };
  }
};

export default calculate;
