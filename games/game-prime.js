import { cons } from '@hexlet/pairs';
import startGameEngine from '../src/index.js';

const playGamePrime = () => {
  const rulesGame = '';

  const getPairQuestionCorrectAnswer = () => {
    const question = 0;
    const correctAnswer = 0;

    return cons(question, correctAnswer);
  };

  startGameEngine(rulesGame, getPairQuestionCorrectAnswer);
};

export default playGamePrime;
