import Big from 'big.js';

const operate = (numberOne, numberTwo, operation) => {
  const firstNumber = new Big(numberOne);
  let result = 0;
  switch (operation) {
    case '+':
      result = firstNumber.plus(numberTwo);
      break;
    case '-':
      result = firstNumber.minus(numberTwo);
      break;
    case '/':
      result = firstNumber.div(numberTwo);
      break;
    case '%':
      result = firstNumber.div(100).mul(numberTwo);
      break;
    case 'x':
      result = firstNumber.div(numberTwo);
      break;
    default:
      result = firstNumber;
  }
  return result;
};

export default operate;
