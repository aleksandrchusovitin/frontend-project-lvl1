import getRandomNumber from '../functions.js';
import startGameEngine from '../index.js';

const rulesGame = 'What is the result of the expression?';

const getPairQuestionCorrectAnswer = () => {
  const getRandomIndexArr = (arr) => Math.floor(Math.random() * arr.length);
  const getCorrectAnswer = (operand1, operator, operand2) => {
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
    return correctAnswer.toString();
  };

  const operators = ['+', '-', '*'];

  const operand1 = getRandomNumber(1, 100);
  const operand2 = getRandomNumber(1, 100);
  const randomIndexArr = getRandomIndexArr(operators);
  const operator = operators[randomIndexArr];

  const question = `${operand1} ${operator} ${operand2}`;
  const correctAnswer = getCorrectAnswer(operand1, operator, operand2);

  return [question, correctAnswer];
};

export default () => startGameEngine(rulesGame, getPairQuestionCorrectAnswer);
