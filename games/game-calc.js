import { cons } from '@hexlet/pairs';
import startGameEngine from '../src/index.js';

const playGameCalc = () => {
  const rulesGame = 'What is the result of the expression?';

  const getPairQuestionCorrectAnswer = () => {
    const operators = ['+', '-', '*'];
    const minValue = 1;
    const maxValue = 100;

    const operand1 = Math.floor(minValue + Math.random() * (maxValue + 1 - minValue));
    const operand2 = Math.floor(minValue + Math.random() * (maxValue + 1 - minValue));
    const operator = operators[Math.floor(Math.random() * operators.length)];

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
