import Big from 'big.js';

const operate = (next, total, operation) => {
  const firstNumber = next !== null ? new Big(next) : new Big('0');
  const secondNumber = total !== null ? new Big(total) : new Big('0');
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
      if (next === null) {
        result = secondNumber.div(100);
        break;
      } else {
        result = secondNumber.div(100).mul(firstNumber);
        break;
      }
    case 'X':
      result = firstNumber.mul(multiply);
      break;
    default:
      result = firstNumber;
  }
  return result;
};

export default operate;
