import Big from 'big.js';

const operate = (next, total, operation) => {
  const firstNumber = new Big(next);
  const secondNumber = total !== null ? new Big(total) : '0';
  const multiply = secondNumber === '0' ? 1 : secondNumber;

  let result = 0;
  switch (operation) {
    case '+':
      result = firstNumber.plus(secondNumber);
      break;
    case '-':
      result = secondNumber.minus(firstNumber);
      break;
    case '/':
      result = firstNumber.div(multiply);
      break;
    case '%':
      result = firstNumber.div(100).mul(secondNumber);
      break;
    case 'X':
      result = firstNumber.mul(multiply);
      break;
    default:
      result = firstNumber;
  }
  return result;
};

export default operate;
