import startGameEngine from '../src/index.js';

const playGameCalc = () => {
  const rulesGame = 'What is the result of the expression?';

  const operators = ['+', '-', '*'];
  const minValue = 1;
  const maxValue = 100;
  const countQuestions = 3;

  const questions = [];
  const correctAnswers = [];

  for (let i = 0; i < countQuestions; i += 1) {
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

    questions.push(question);
    correctAnswers.push(correctAnswer);
  }

  startGameEngine(rulesGame, questions, correctAnswers);
};

export default playGameCalc;
