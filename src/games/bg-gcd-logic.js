import { giveMeRand, gameEngine } from '../index.js';

const GCD = (opOne, opTwo) => {
  if (opTwo > opOne) {
    return GCD(opTwo, opOne);
  }
  if (!opTwo) {
    return opOne;
  }
  return GCD(opTwo, opOne % opTwo);
};

const gameRule = 'Find the greatest common divisor of given numbers.';

const gameValues = () => {
  const opOne = giveMeRand(50);
  const opTwo = giveMeRand(50);
  const gameAnswer = GCD(opOne, opTwo);
  const gameQuestion = `${opOne} ${opTwo}`;
  return [gameQuestion, gameAnswer];
};

export const brainGameGCD = () => {
  gameEngine(gameRule, gameValues);
};

export default brainGameGCD;
