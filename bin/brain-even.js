#!/usr/bin/env node

import readlineSync from 'readline-sync';

const NUMBERS_OF_ROUNDS = 3;
const getRandomArbitrary = (min, max) => Math.floor(Math.random() * (max - min) + min);

const parityCheck = () => {
  let counter = 0;

  const name = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${name}!`);
  console.log('Answer "yes" if the number is even, otherwise answer "no".');

  const iter = (num) => {
    if (num === NUMBERS_OF_ROUNDS) {
      console.log(`Congratulations, ${name}!`);
      return;
    }
    const number = getRandomArbitrary(1, 30);
    console.log(`Question: ${number}`);
    const answer = readlineSync.question('Your answer: ', {
      trueValue: ['yes'],
      falseValue: ['no'],
    });
    const even = number % 2 === 0;
    const odd = number % 2 !== 0;
    if (even && answer === true) {
      counter += 1;
    } else if (odd && answer === false) {
      counter += 1;
    } else {
      return;
    }
    iter(counter);
  };
  return iter(counter);
};

parityCheck();
