import { giveRandomNumber, playGame } from '../index.js';

const formatProgression = (arr) => arr.join(' ');

const gameRule = 'What number is missing in the progression?';

const getProgression = (gameArray) => {
  const randomIncrMax = 5;
  const incr = giveRandomNumber(randomIncrMax);
  for (let j = 0; j < 9; j += 1) {
    gameArray.push(gameArray[j] + incr);
  }
  return gameArray;
};

const getGameValues = () => {
  const randomGameMax = 20;
  const firstElement = giveRandomNumber(randomGameMax);
  const gameArray = [firstElement];
  const gameProgression = getProgression(gameArray);
  const hiddenIndex = giveRandomNumber(gameProgression.length);
  const gameAnswer = String(gameProgression[hiddenIndex]);
  gameProgression[hiddenIndex] = '..';
  const gameQuestion = formatProgression(gameProgression);
  return [gameQuestion, gameAnswer];
};

export const playBrainProg = () => {
  playGame(gameRule, getGameValues);
};

export default playBrainProg;
