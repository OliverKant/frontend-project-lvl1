import getRandomNum from '../getRandom.js';

const operators = ['+', '-', '*'];
const rule = 'What is the result of the expression?';

const calc = (num1, num2, operator) => {
  let result = 0;
  switch (operator) {
    case '+':
      result = num1 + num2;
      break;
    case '-':
      result = num1 - num2;
      break;
    case '*':
      result = num1 * num2;
      break;
    default:
  }
  return result;
};

const getResultExpression = () => {
  const num1 = getRandomNum(1, 10);
  const num2 = getRandomNum(1, 10);
  const operator = operators[getRandomNum(0, 2)];
  console.log(`Question: ${num1} ${operator} ${num2}`);
  const correctAnswer = calc(num1, num2, operator);
  return String(correctAnswer);
};

export { getResultExpression, rule };
