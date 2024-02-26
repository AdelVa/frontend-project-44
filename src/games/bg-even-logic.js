import { giveRandomNumber, playGame } from '../index.js';

const gameRule = 'Answer "yes" if the number is even, otherwise answer "no".';

const getGameValues = () => {
  const randomGameMax = 1000;
  const gameQuestion = giveRandomNumber(randomGameMax);
  const gameAnswer = gameQuestion % 2 === 0 ? 'yes' : 'no';
  return [gameQuestion, gameAnswer];
};

export const playBrainEven = () => {
  playGame(gameRule, getGameValues);
};

export default playBrainEven;
