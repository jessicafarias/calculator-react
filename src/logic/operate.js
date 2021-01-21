import Big from 'big.js';

const operate = (next, total, operation) => {
  const firstNumber = new Big(next);
  const secondNumber = new Big(total);
  const multiply = total === '0' ? 1 : secondNumber;

  let result = 0;
  switch (operation) {
    case '+':
      result = firstNumber.plus(secondNumber);
      break;
    case '-':
      result = firstNumber.minus(secondNumber);
      break;
    case '/':
      result = firstNumber.div(multiply);
      break;
    case '%':
      result = secondNumber.div(100).mul(firstNumber);
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
