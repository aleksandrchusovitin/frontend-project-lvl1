import getRandomNumber from '../functions.js';
import startGameEngine from '../index.js';

const rulesGame = 'What number is missing in the progression?';

const generateProgression = (length, startNumber, step) => {
  let nextNumber = startNumber;
  const progression = [nextNumber];

  for (let i = 0; i < length; i += 1) {
    nextNumber += step;
    progression.push(nextNumber);
  }

  return progression;
};

const hideNumberInProgression = (progression, index) => {
  const hiddenProgression = [...progression];
  hiddenProgression[index] = '..';

  return hiddenProgression;
};

const getQuestionCorrectAnswer = () => {
  const lengthProgression = getRandomNumber(5, 15);
  const indexHiddenNumber = getRandomNumber(0, lengthProgression - 1);
  const startNumber = getRandomNumber(2, 50);
  const stepProgression = getRandomNumber(2, 8);

  const progression = generateProgression(lengthProgression, startNumber, stepProgression);
  const hiddenProgression = hideNumberInProgression(progression, indexHiddenNumber);

  const question = hiddenProgression.join(' ');
  const correctAnswer = progression[indexHiddenNumber].toString();

  return [question, correctAnswer];
};

export default () => startGameEngine(rulesGame, getQuestionCorrectAnswer);
