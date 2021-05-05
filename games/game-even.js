import startGameEngine from '../src/index.js';

const playGameEven = () => {
  const rulesGame = 'Answer "yes" if the number is even, otherwise answer "no"';
  const isEven = (number) => number % 2 === 0;
  const minValue = 1;
  const maxValue = 100;

  const countQuestions = 3;
  const questions = [];
  const correctAnswers = [];

  for (let i = 0; i < countQuestions; i += 1) {
    const question = Math.floor(minValue + Math.random() * (maxValue + 1 - minValue));
    const correctAnswer = isEven(question) ? 'yes' : 'no';

    questions.push(question);
    correctAnswers.push(correctAnswer);
  }

  startGameEngine(rulesGame, countQuestions, questions, correctAnswers);
};

export default playGameEven;
