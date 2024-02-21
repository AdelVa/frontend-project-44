import readlineSync from 'readline-sync/lib/readline-sync.js';
import {
  giveMeRand,
  checkAnswer,
  gameEndMessage,
  checkMessage,
} from '../index.js';

export const brainGameCalc = () => {
  const userName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${userName}!`);
  console.log('What is the result of the expression?');
  let i = 0;
  let gameError = false;
  while (i < 3 && gameError === false) {
    let gameAnswer = 0;
    let gameQuestion = '';
    const operRand = giveMeRand(3);
    const opOne = giveMeRand(50);
    const opTwo = giveMeRand(50);
    switch (operRand) {
      case 1:
        gameAnswer = opOne - opTwo;
        gameQuestion = `${opOne} - ${opTwo}`;
        break;
      case 2:
        gameAnswer = opOne * opTwo;
        gameQuestion = `${opOne} * ${opTwo}`;
        break;
      default:
        gameAnswer = opOne + opTwo;
        gameQuestion = `${opOne} + ${opTwo}`;
        break;
    }
    i += 1;
    console.log(`Question: ${gameQuestion}`);
    const userAnswer = readlineSync.question('Your answer: ');
    gameError = checkAnswer(userAnswer, gameAnswer);
    console.log(checkMessage(gameError, userAnswer, gameAnswer));
  }
  return gameEndMessage(userName, gameError);
};

export default brainGameCalc;
