import getRandomNum from '../getRandom.js';

const rule = 'Answer "yes" if the number is even, otherwise answer "no".';

const parityCheck = () => {
  const number = getRandomNum(1, 30);
  console.log(`Question: ${number}`);
  const isEven = (num) => num % 2 === 0;
  const userAnswer = isEven(number) ? 'yes' : 'no';
  return userAnswer;
};

export { parityCheck, rule };
