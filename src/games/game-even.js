import { getRandomNumber, isEven } from '../functions.js';
import startGameEngine from '../index.js';

const rulesGame = 'Answer "yes" if the number is even, otherwise answer "no"';

const getPairQuestionCorrectAnswer = () => {
  const question = getRandomNumber(1, 100);
  const correctAnswer = isEven(question) ? 'yes' : 'no';

  return [question, correctAnswer];
};

export default () => startGameEngine(rulesGame, getPairQuestionCorrectAnswer);
