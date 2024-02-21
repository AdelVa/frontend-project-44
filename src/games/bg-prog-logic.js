import readlineSync from 'readline-sync/lib/readline-sync.js';
import {
  giveMeRand,
  checkAnswer,
  gameEndMessage,
  checkMessage,
} from '../index.js';

const formatArr = (arr) => arr.join(' ');

export const brainGameProg = () => {
  const userName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${userName}!`);
  console.log('What number is missing in the progression?');
  let i = 0;
  let gameError = false;
  while (i < 3 && gameError === false) {
    const firstEl = giveMeRand(20);
    const incr = giveMeRand(5);
    const gameArr = [firstEl];
    for (let j = 0; j < 9; j += 1) {
      gameArr.push(gameArr[j] + incr);
    }
    const randIndex = giveMeRand(10);
    const gameAnswer = gameArr[randIndex];
    gameArr[randIndex] = '..';
    const gameQuestion = formatArr(gameArr);
    i += 1;
    console.log(`Question: ${gameQuestion}`);
    const userAnswer = readlineSync.question('Your answer: ');
    gameError = checkAnswer(userAnswer, gameAnswer);
    console.log(checkMessage(gameError, userAnswer, gameAnswer));
  }
  return gameEndMessage(userName, gameError);
};

export default brainGameProg;
