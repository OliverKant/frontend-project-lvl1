import getRandomNum from '../getRandom.js';

const rule = 'What number is missing in the progression?';

const generateProgression = (progressStep, arrayLength, startProgress) => {
  const result = [];
  let current = startProgress;

  for (let i = 0; i < arrayLength; i += 1) {
    result.push(current);
    current += progressStep;
  }
  return result;
};

const getMissingNumber = () => {
  const progressStep = getRandomNum(3, 7);
  const arrayLength = getRandomNum(5, 12);
  const startProgress = getRandomNum(0, 9);
  const randomIndex = getRandomNum(0, arrayLength);

  const result = generateProgression(progressStep, arrayLength, startProgress);

  const correctAnswer = result[randomIndex];
  result[randomIndex] = '..';

  console.log(`Question: ${result.join(' ')}`);
  return String(correctAnswer);
};

export { getMissingNumber, rule };
