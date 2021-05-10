import getRandomNumber from '../functions.js';
import startGameEngine from '../index.js';

const rulesGame = 'Find the greatest common divisor of given numbers.';

const findGcd = (a, b) => {
  if (!b) {
    return a;
  }
  return findGcd(b, a % b);
};

const getPairQuestionCorrectAnswer = () => {
  const number1 = getRandomNumber(1, 100);
  const number2 = getRandomNumber(1, 100);
  const question = `${number1} ${number2}`;

  const correctAnswer = findGcd(number1, number2).toString();

  return [question, correctAnswer];
};

export default () => startGameEngine(rulesGame, getPairQuestionCorrectAnswer);
