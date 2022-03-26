import getRandomNum from '../getRandom.js';

const rule = 'Answer "yes" if given number is prime. Otherwise answer "no".';

const isPrime = (num) => {
  if (num < 2) {
    return false;
  }
  let counter = 2;

  while (counter < num) {
    if (num % counter === 0) {
      return false;
    }
    counter += 1;
  }
  return true;
};

const getQuestion = () => {
  const number = getRandomNum(1, 50);
  console.log(`Question: ${number}`);

  const correctAnswer = isPrime(number) ? 'yes' : 'no';
  return correctAnswer;
};

export { getQuestion, rule };
