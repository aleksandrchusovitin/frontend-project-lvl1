import getRandomNumber from '../functions.js';
import startGameEngine from '../index.js';

const rulesGame = 'What is the result of the expression?';

const getRandomIndexArr = (arr) => Math.floor(Math.random() * arr.length);
const getCorrectAnswer = (operand1, operator, operand2) => {
  switch (operator) {
    case '+':
      return operand1 + operand2;
    case '-':
      return operand1 - operand2;
    case '*':
      return operand1 * operand2;
    default:
      throw new Error(`Unknown operator: '${operator}'`);
  }
};

const getPairQuestionCorrectAnswer = () => {
  const operators = ['+', '-', '*'];

  const operand1 = getRandomNumber(1, 100);
  const operand2 = getRandomNumber(1, 100);
  const randomIndexArr = getRandomIndexArr(operators);
  const operator = operators[randomIndexArr];

  const question = `${operand1} ${operator} ${operand2}`;
  const correctAnswer = getCorrectAnswer(operand1, operator, operand2).toString();

  return [question, correctAnswer];
};

export default () => startGameEngine(rulesGame, getPairQuestionCorrectAnswer);
