import { giveMeRand, gameEngine } from '../index.js';

const gameRule = 'Answer "yes" if the number is even, otherwise answer "no".';

const gameValues = () => {
  const gameQuestion = giveMeRand(1000);
  const gameAnswer = gameQuestion % 2 === 0 ? 'yes' : 'no';
  return [gameQuestion, gameAnswer];
};

export const brainGameEven = () => {
  gameEngine(gameRule, gameValues);
};

export default brainGameEven;
