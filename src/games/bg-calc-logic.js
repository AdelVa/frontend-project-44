import { giveMeRand, gameEngine } from '../index.js';

const pickMeOp = (operRand, opOne, opTwo) => {
  switch (operRand) {
    case 1:
      return [`${opOne} - ${opTwo}`, opOne - opTwo];
    case 2:
      return [`${opOne} * ${opTwo}`, opOne * opTwo];
    default:
      return [`${opOne} + ${opTwo}`, opOne + opTwo];
  }
};
const gameRule = 'What is the result of the expression?';

const gameValues = () => {
  const operRand = giveMeRand(3);
  const opOne = giveMeRand(50);
  const opTwo = giveMeRand(50);
  return pickMeOp(operRand, opOne, opTwo);
};

export const brainGameCalc = () => {
  gameEngine(gameRule, gameValues);
};

export default brainGameCalc;
