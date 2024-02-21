import readlineSync from 'readline-sync/lib/readline-sync.js';
import {
  giveMeRand,
  checkAnswer,
  gameEndMessage,
  checkMessage,
} from '../index.js';

const checkPrime = (num) => {
  if (num < 2) {
    return 'no';
  }
  for (let i = 2; i < num; i += 1) {
    if (num % i === 0) {
      return 'no';
    }
  }
  return 'yes';
};

export const brainGamePrime = () => {
  const userName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${userName}!`);
  console.log('Answer "yes" if given number is prime. Otherwise answer "no".');
  let i = 0;
  let gameError = false;
  while (i < 3 && gameError === false) {
    const randomNum = giveMeRand(1000);
    const gameAnswer = checkPrime(randomNum);
    i += 1;
    console.log(`Question: ${randomNum}`);
    const userAnswer = readlineSync.question('Your answer: ');
    gameError = checkAnswer(userAnswer, gameAnswer);
    console.log(checkMessage(gameError, userAnswer, gameAnswer));
  }
  return gameEndMessage(userName, gameError);
};

export default brainGamePrime;
