import getRandomNum from '../getRandom.js';

const rule = 'Find the greatest common divisor of given numbers.';

const getGCD = (num1, num2) => {
  let t = 0;
  let a = num1;
  let b = num2;
  while (b !== 0) {
    t = b;
    b = a % b;
    a = t;
  }
  const result = t;
  return result;
};

const getMaximumDivisor = () => {
  const num1 = getRandomNum(1, 100);
  const num2 = getRandomNum(1, 100);

  console.log(`Question: ${num1} ${num2}`);

  const correctAnswer = getGCD(num1, num2);
  return String(correctAnswer);
};

export { getMaximumDivisor, rule };
