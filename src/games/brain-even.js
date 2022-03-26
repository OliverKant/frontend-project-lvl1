import getRandomArbitrary from '../getRandom.js';

const parityCheck = () => {
  console.log('Answer "yes" if the number is even, otherwise answer "no".');
  const number = getRandomArbitrary(1, 30);
  console.log(`Question: ${number}`);
  const isEven = (num) => num % 2 === 0;
  const userAnswer = isEven(number) ? 'yes' : 'no';
  return userAnswer;
};

export default parityCheck;
