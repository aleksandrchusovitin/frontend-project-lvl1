import getRandomNumber from '../functions.js';
import startGameEngine from '../index.js';

const rulesGame = 'Answer "yes" if the number is even, otherwise answer "no"';
const isEven = (number) => number % 2 === 0;

const getQuestionCorrectAnswer = () => {
  const question = getRandomNumber(1, 100);
  const correctAnswer = isEven(question) ? 'yes' : 'no';

  return [question, correctAnswer];
};

export default () => startGameEngine(rulesGame, getQuestionCorrectAnswer);
