import readlineSync from 'readline-sync/lib/readline-sync.js';
import {
  giveMeRand,
  checkAnswer,
  gameEndMessage,
  checkMessage,
} from '../index.js';

export const brainGameProg = () => {
  const userName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${userName}!`);
  console.log('What number is missing in the progression?');
  let i = 0;
  let gameError = false;
  while (i < 3 && gameError === false) {
    const firstEl = giveMeRand(20);
    const incr = giveMeRand(5);
    const gameQuestion = [firstEl];
    for (let j = 0; j < 9; j += 1) {
      gameQuestion.push(gameQuestion[j] + incr);
    }
    const randIndex = giveMeRand(10);
    const gameAnswer = gameQuestion[randIndex];
    gameQuestion[randIndex] = '..';
    i += 1;
    console.log(`Question: ${gameQuestion}`);
    const userAnswer = readlineSync.question('Your answer: ');
    gameError = checkAnswer(userAnswer, gameAnswer);
    console.log(checkMessage(gameError, userAnswer, gameAnswer));
  }
  return gameEndMessage(userName, gameError);
};

export default brainGameProg;
