import { getRandomNumber, findGcd } from '../functions.js';
import startGameEngine from '../index.js';

const playGameGcd = () => {
  const rulesGame = 'Find the greatest common divisor of given numbers.';

  const getPairQuestionCorrectAnswer = () => {
    const number1 = getRandomNumber(1, 100);
    const number2 = getRandomNumber(1, 100);
    const question = `${number1} ${number2}`;

    const correctAnswer = findGcd(number1, number2).toString();

    return [question, correctAnswer];
  };

  startGameEngine(rulesGame, getPairQuestionCorrectAnswer);
};

export default playGameGcd;
