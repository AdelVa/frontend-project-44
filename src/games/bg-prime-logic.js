import { giveRandomNumber, playGame } from '../index.js';

const isPrime = (num) => {
  if (num < 2) {
    return false;
  }
  for (let i = 2; i < num; i += 1) {
    if (num % i === 0) {
      return false;
    }
  }
  return true;
};

const gameRule = 'Answer "yes" if given number is prime. Otherwise answer "no".';

const getGameValues = () => {
  const randomGameMax = 1000;
  const gameQuestion = giveRandomNumber(randomGameMax);
  const gameAnswer = isPrime(gameQuestion) === false ? 'no' : 'yes';
  return [gameQuestion, gameAnswer];
};

export const playBrainPrime = () => {
  playGame(gameRule, getGameValues);
};

export default playBrainPrime;
