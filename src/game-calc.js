import readlineSync from 'readline-sync';

const playGameCalc = () => {
  const userName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${userName}!`);
  console.log('What is the result of the expression?');

  const checkUserAnswer = (userAnswer, correctAnswer) => userAnswer === correctAnswer;

  const operators = ['+', '-', '*'];
  const minValue = 1;
  const maxValue = 100;
  const countQuestions = 3;

  for (let i = 0; i < countQuestions; i += 1) {
    const operand1 = Math.floor(minValue + Math.random() * (maxValue + 1 - minValue));
    const operand2 = Math.floor(minValue + Math.random() * (maxValue + 1 - minValue));
    const operator = operators[Math.floor(Math.random() * operators.length)];

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

    const question = `${operand1} ${operator} ${operand2}`;
    console.log(`Question: ${question}`);

    const userAnswer = readlineSync.question('Your answer: ');
    const resultStep = checkUserAnswer(userAnswer, correctAnswer);

    if (!resultStep) {
      console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.`);
      console.log(`Let's try again, ${userName}!`);
      return;
    }

    console.log('Correct!');
  }

  console.log(`Congratulations, ${userName}`);
};

export default playGameCalc;
