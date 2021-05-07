import { cons } from '@hexlet/pairs';
import startGameEngine from '../src/index.js';

const playGameProgression = () => {
  const rulesGame = 'What number is missing in the progression?';

  const getPairQuestionCorrectAnswer = () => {
    const question = 0;
    const correctAnswer = [];

    return cons(question, correctAnswer);
  };
  startGameEngine(rulesGame, getPairQuestionCorrectAnswer);
};

export default playGameProgression;
