import { getRandomNumber } from '../src/functions.js';
import startGameEngine from '../src/index.js';

const playGameProgression = () => {
  const rulesGame = 'What number is missing in the progression?';

  const getPairQuestionCorrectAnswer = () => {
    const lengthProgression = getRandomNumber(5, 15);
    const indexHiddenNumber = getRandomNumber(0, lengthProgression - 1);
    let nextNumberProgression = getRandomNumber(2, 50);
    const stepProgression = getRandomNumber(2, 8);
    const progressionArr = [nextNumberProgression];

    let correctAnswer;

    for (let i = 0; i < lengthProgression; i += 1) {
      nextNumberProgression += stepProgression;
      if (i === indexHiddenNumber) {
        progressionArr.push('..');
        correctAnswer = nextNumberProgression.toString();
      } else {
        progressionArr.push(nextNumberProgression);
      }
    }

    const question = progressionArr.join(' ');

    return [question, correctAnswer];
  };
  startGameEngine(rulesGame, getPairQuestionCorrectAnswer);
};

export default playGameProgression;
