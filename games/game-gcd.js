import { cons } from '@hexlet/pairs';
import { getRandomNumber, findGcd } from '../src/functions.js';
import startGameEngine from '../src/index.js';

const playGameGcd = () => {
  const rulesGame = 'Find the greatest common divisor of given numbers.';

  const getPairQuestionCorrectAnswer = () => {
    const number1 = getRandomNumber(1, 100);
    const number2 = getRandomNumber(1, 100);
    const question = `${number1} ${number2}`;

    const correctAnswer = findGcd(number1, number2).toString();

    return cons(question, correctAnswer);
  };

  startGameEngine(rulesGame, getPairQuestionCorrectAnswer);
};

export default playGameGcd;
