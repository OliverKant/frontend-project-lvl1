import getRandomNum from '../getRandom.js';

const rule = 'Find the greatest common divisor of given numbers.';

const getGCD = (num1, num2) => {
  if (num2 === 0) {
    return num1;
  }
  return getGCD(num2, num1 % num2);
};

const getMaximumDivisor = () => {
  const num1 = getRandomNum(1, 100);
  const num2 = getRandomNum(1, 100);

  console.log(`Question: ${num1}, ${num2}`);

  const correctAnswer = getGCD(num1, num2);
  return String(correctAnswer);
};

export { getMaximumDivisor, rule };
