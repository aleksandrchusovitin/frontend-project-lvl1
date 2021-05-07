import readlineSync from 'readline-sync';
import { car, cdr } from '@hexlet/pairs';

const startGameEngine = (rulesGame, getPairQuestionCorrectAnswer) => {
  console.log('Welcome to the Brain Games!');
  const userName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${userName}!`);
  console.log(rulesGame);

  const checkUserAnswer = (userAnswer, correctAnswer) => userAnswer === correctAnswer;
  const countQuestions = 3;

  for (let i = 0; i < countQuestions; i += 1) {
    const PairQuestionCorrectAnswer = getPairQuestionCorrectAnswer();
    const question = car(PairQuestionCorrectAnswer);
    const correctAnswer = cdr(PairQuestionCorrectAnswer);
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

export default startGameEngine;
