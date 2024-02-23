import { giveMeRand, gameEngine } from '../index.js';

const formatArr = (arr) => arr.join(' ');

const gameRule = 'What number is missing in the progression?';

const gameValues = () => {
  const firstEl = giveMeRand(20);
  const incr = giveMeRand(5);
  const gameArr = [firstEl];
  for (let j = 0; j < 9; j += 1) {
    gameArr.push(gameArr[j] + incr);
  }
  const randIndex = giveMeRand(9);
  const gameAnswer = gameArr[randIndex];
  gameArr[randIndex] = '..';
  const gameQuestion = formatArr(gameArr);
  return [gameQuestion, gameAnswer];
};

export const brainGameProg = () => {
  gameEngine(gameRule, gameValues);
};

export default brainGameProg;
