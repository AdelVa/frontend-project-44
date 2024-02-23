import { giveMeRand, gameEngine } from '../index.js';

const checkPrime = (num) => {
  if (num < 2) {
    return 'no';
  }
  for (let i = 2; i < num; i += 1) {
    if (num % i === 0) {
      return 'no';
    }
  }
  return 'yes';
};

const gameRule = 'Answer "yes" if given number is prime. Otherwise answer "no".';

const gameValues = () => {
  const gameQuestion = giveMeRand(1000);
  const gameAnswer = checkPrime(gameQuestion);
  return [gameQuestion, gameAnswer];
};

export const brainGamePrime = () => {
  gameEngine(gameRule, gameValues);
};

export default brainGamePrime;
