#!/usr/bin/env node

import readlineSync from 'readline-sync';
import getRandomArbitrary from '../../src/getRandom.js';

const NUMBERS_OF_ROUNDS = 3;

const parityCheck = () => {
  const name = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${name}!`);
  console.log('Answer "yes" if the number is even, otherwise answer "no".');

  for (let i = 0; i < NUMBERS_OF_ROUNDS; i += 1) {
    const number = getRandomArbitrary(1, 30);
    console.log(`Question: ${number}`);
    const answer = readlineSync.question('Your answer: ');
    const isEven = (num) => num % 2 === 0;
    const userAnswer = isEven(number) ? 'yes' : 'no';

    if (userAnswer !== answer) {
      console.log(`'${answer}' is wrong answer ;(. Correct answer was '${userAnswer}'.`);
      console.log(`Let's try again, ${name}!`);
      return;
    }
    console.log('Correct!');
  }
  console.log(`Congratulations, ${name}!`);
};

parityCheck();
