import readlineSync from 'readline-sync/lib/readline-sync.js';
import {
  giveMeRand,
  checkAnswer,
  gameEndMessage,
  checkMessage,
} from '../index.js';

const GCD = (opOne, opTwo) => {
  if (opTwo > opOne) {
    return GCD(opTwo, opOne);
  }
  if (!opTwo) {
    return opOne;
  }
  return GCD(opTwo, opOne % opTwo);
};

export const brainGameGCD = () => {
  const userName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${userName}!`);
  console.log('Find the greatest common divisor of given numbers.');
  let i = 0;
  let gameError = false;
  while (i < 3 && gameError === false) {
    const opOne = giveMeRand(50);
    const opTwo = giveMeRand(50);
    const gameAnswer = GCD(opOne, opTwo);
    const gameQuestion = `${opOne} ${opTwo}`;
    i += 1;
    console.log(`Question: ${gameQuestion}`);
    const userAnswer = readlineSync.question('Your answer: ');
    gameError = checkAnswer(userAnswer, gameAnswer);
    console.log(checkMessage(gameError, userAnswer, gameAnswer));
  }
  return gameEndMessage(userName, gameError);
};

export default brainGameGCD;
