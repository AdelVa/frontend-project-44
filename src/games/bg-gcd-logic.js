import { giveRandomNumber, playGame } from '../index.js';

const getGcd = (operandOne, operandTwo) => {
  if (operandTwo > operandOne) {
    return getGcd(operandTwo, operandOne);
  }
  if (!operandTwo) {
    return operandOne;
  }
  return getGcd(operandTwo, operandOne % operandTwo);
};

const gameRule = 'Find the greatest common divisor of given numbers.';

const getGameValues = () => {
  const randomGameMax = 50;
  const operandOne = giveRandomNumber(randomGameMax);
  const operandTwo = giveRandomNumber(randomGameMax);
  const gameAnswer = String(getGcd(operandOne, operandTwo));
  const gameQuestion = `${operandOne} ${operandTwo}`;
  return [gameQuestion, gameAnswer];
};

export const playBrainGCD = () => {
  playGame(gameRule, getGameValues);
};

export default playBrainGCD;
