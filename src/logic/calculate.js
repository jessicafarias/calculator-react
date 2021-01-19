const calculate = (dataObject, simbol) => {
  const { total } = dataObject;
  const { next } = dataObject;
  let { operation } = dataObject;

  switch (simbol) {
    case '+/-':
      operation = total * (-1);
      break;
    case '-':
      operation = total - next;
      break;
    case '+':
      operation = total + next;
      break;
    default:
      operation = total / next;
      break;
  }
  return operation;
};

export default calculate;
