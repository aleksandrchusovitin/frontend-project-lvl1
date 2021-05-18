import readlineSync from 'readline-sync';

const questionsCount = 3;

const startGameEngine = (rulesGame, getPairQuestionCorrectAnswer) => {
  console.log('Welcome to the Brain Games!');
  const userName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${userName}!`);
  console.log(rulesGame);

  for (let i = 0; i < questionsCount; i += 1) {
    const [question, correctAnswer] = getPairQuestionCorrectAnswer();

    console.log(`Question: ${question}`);

    const userAnswer = readlineSync.question('Your answer: ');
    const resultStep = userAnswer === correctAnswer;

    if (!resultStep) {
      console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.`);
      console.log(`Let's try again, ${userName}!`);
      return;
    }

    console.log('Correct!');
  }

  console.log(`Congratulations, ${userName}!`);
};

export default startGameEngine;
