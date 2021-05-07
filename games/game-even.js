import { cons } from '@hexlet/pairs';
import { getRandomNumber, isEven } from '../src/functions.js';
import startGameEngine from '../src/index.js';

const playGameEven = () => {
  const rulesGame = 'Answer "yes" if the number is even, otherwise answer "no"';

  const getPairQuestionCorrectAnswer = () => {
    const question = getRandomNumber(1, 100);
    const correctAnswer = isEven(question) ? 'yes' : 'no';

    return cons(question, correctAnswer);
  };

  startGameEngine(rulesGame, getPairQuestionCorrectAnswer);
};

export default playGameEven;
