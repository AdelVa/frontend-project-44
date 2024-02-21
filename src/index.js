const giveMeRand = (max) => Math.floor(Math.random() * (max - 1 + 1)) + 1;

const checkAnswer = (userAnswer, gameAnswer) => !(userAnswer === gameAnswer.toString());

const checkMessage = (gameError, userAnswer, gameAnswer) => (gameError === false
  ? 'Correct!'
  : `'${userAnswer}' is wrong answer ;(. Correct answer was '${gameAnswer}'`);

const gameEndMessage = (userName, gameError) => (gameError === false
  ? console.log(`Congratulations, ${userName}!`)
  : console.log(`Let's try again, ${userName}!`));

export {
  giveMeRand, checkAnswer, checkMessage, gameEndMessage,
};
