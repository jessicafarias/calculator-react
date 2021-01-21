import Big from 'big.js';

const operate = (numberOne, numberTwo, operation) => {
  const firstNumber = new Big(numberOne);
  const secondNumber = new Big(numberTwo);
  let result = 0;
  switch (operation) {
    case '+':
      result = firstNumber.plus(secondNumber);
      break;
    case '-':
      result = firstNumber.minus(secondNumber);
      break;
    case '/':
      result = firstNumber.div(secondNumber);
      break;
    case '%':
      result = firstNumber.div(100).mul(secondNumber);
      break;
    case 'x':
      result = firstNumber.mul(secondNumber);
      break;
    default:
      result = firstNumber;
  }
  return result;
};

export default operate;
