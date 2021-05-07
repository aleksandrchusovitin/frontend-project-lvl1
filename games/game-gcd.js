import { cons } from '@hexlet/pairs';
import startGameEngine from '../src/index.js';

const playGameGcd = () => {
  const rulesGame = 'Find the greatest common divisor of given numbers.';

  const getPairQuestionCorrectAnswer = () => {
    const findGcd = (a, b) => {
      if (!b) {
        return a;
      }
      return findGcd(b, a % b);
    };

    const minValue = 1;
    const maxValue = 100;
    const number1 = Math.floor(minValue + Math.random() * (maxValue + 1 - minValue));
    const number2 = Math.floor(minValue + Math.random() * (maxValue + 1 - minValue));
    const question = `${number1} ${number2}`;

    const correctAnswer = findGcd(number1, number2).toString();

    return cons(question, correctAnswer);
  };

  startGameEngine(rulesGame, getPairQuestionCorrectAnswer);
};

export default playGameGcd;
