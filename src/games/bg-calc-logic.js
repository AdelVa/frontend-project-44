import { giveRandomNumber, playGame } from '../index.js';

const calculateOperation = (operation, operandOne, operandTwo) => {
  switch (operation) {
    case '-':
      return operandOne - operandTwo;
    case '*':
      return operandOne * operandTwo;
    case '+':
      return operandOne + operandTwo;
    default:
      throw new Error(`Unexpected out of range value - ${operation}`);
  }
};
const gameRule = 'What is the result of the expression?';

const getGameValues = () => {
  const randomGameMax = 50;
  const availableOperations = ['+', '-', '*'];
  const operation = availableOperations[giveRandomNumber(availableOperations.length)];
  const operandOne = giveRandomNumber(randomGameMax);
  const operandTwo = giveRandomNumber(randomGameMax);
  const gameAnswer = String(
    calculateOperation(operation, operandOne, operandTwo),
  );
  const gameQuestion = `${operandOne} ${operation} ${operandTwo}`;
  return [gameQuestion, gameAnswer];
};

export const playBrainCalc = () => {
  playGame(gameRule, getGameValues);
};

export default playBrainCalc;
