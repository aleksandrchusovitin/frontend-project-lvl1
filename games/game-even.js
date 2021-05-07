import { cons } from '@hexlet/pairs';
import startGameEngine from '../src/index.js';

const playGameEven = () => {
  const rulesGame = 'Answer "yes" if the number is even, otherwise answer "no"';

  const getPairQuestionCorrectAnswer = () => {
    const isEven = (number) => number % 2 === 0;

    const minValue = 1;
    const maxValue = 100;

    const question = Math.floor(minValue + Math.random() * (maxValue + 1 - minValue));
    const correctAnswer = isEven(question) ? 'yes' : 'no';

    return cons(question, correctAnswer);
  };

  startGameEngine(rulesGame, getPairQuestionCorrectAnswer);
};

export default playGameEven;
