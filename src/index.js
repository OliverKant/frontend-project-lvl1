import readlineSync from 'readline-sync';

const NUMBERS_OF_ROUNDS = 3;

const startGame = (getRoundData) => {
  const name = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${name}!`);

  for (let i = 0; i < NUMBERS_OF_ROUNDS; i += 1) {
    const userAnswer = getRoundData();
    const correctAnswer = readlineSync.question('Your answer: ');
    if (userAnswer !== correctAnswer) {
      console.log(`'${correctAnswer}' is wrong answer ;(. Correct answer was '${userAnswer}'.`);
      console.log(`Let's try again, ${name}!`);
      return;
    }
    console.log('Correct!');
  }

  console.log(`Congratulations, ${name}!`);
};

export default startGame;
