import { cons } from '@hexlet/pairs';
import { getRandomNumber } from '../src/functions.js';
import startGameEngine from '../src/index.js';

const playGameCalc = () => {
  const rulesGame = 'What is the result of the expression?';

  const getPairQuestionCorrectAnswer = () => {
    const operators = ['+', '-', '*'];

    const operand1 = getRandomNumber();
    const operand2 = getRandomNumber();
    const randomIndexArr = Math.floor(Math.random() * operators.length);
    const operator = operators[randomIndexArr];

    const question = `${operand1} ${operator} ${operand2}`;

    let correctAnswer;
    switch (operator) {
      case '+':
        correctAnswer = operand1 + operand2;
        break;
      case '-':
        correctAnswer = operand1 - operand2;
        break;
      case '*':
        correctAnswer = operand1 * operand2;
        break;
      default:
        break;
    }
    correctAnswer = correctAnswer.toString();

    return cons(question, correctAnswer);
  };

  startGameEngine(rulesGame, getPairQuestionCorrectAnswer);
};

export default playGameCalc;
