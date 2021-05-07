import { cons } from '@hexlet/pairs';
import { getRandomNumber, isPrime } from '../src/functions.js';
import startGameEngine from '../src/index.js';

const playGamePrime = () => {
  const rulesGame = 'Answer "yes" if given number is prime. Otherwise answer "no".';

  const getPairQuestionCorrectAnswer = () => {
    const question = getRandomNumber(2, 100);
    const correctAnswer = isPrime(question) ? 'yes' : 'no';

    return cons(question, correctAnswer);
  };

  startGameEngine(rulesGame, getPairQuestionCorrectAnswer);
};

export default playGamePrime;
