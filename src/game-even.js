import readlineSync from 'readline-sync';

const playGameEven = () => {
  const userName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${userName}!`);
  console.log('Answer "yes" if the number is even, otherwise answer "no"');

  const isEven = (number) => number % 2 === 0;

  const checkUserAnswer = (userAnswer, correctAnswer) => userAnswer === correctAnswer;

  const minValue = 1;
  const maxValue = 100;
  const countQuestions = 3;

  for (let i = 0; i < countQuestions; i += 1) {
    const questionNumber = Math.floor(minValue + Math.random() * (maxValue + 1 - minValue));
    const correctAnswer = isEven(questionNumber) ? 'yes' : 'no';
    console.log(`Question: ${questionNumber}`);

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

export default playGameEven;
