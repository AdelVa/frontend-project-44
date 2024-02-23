import readlineSync from 'readline-sync/lib/readline-sync.js';

const giveMeRand = (max) => Math.floor(Math.random() * (max - 1 + 1)) + 1;

const checkAnswer = (userAnswer, gameAnswer) => !(userAnswer === gameAnswer.toString());

const checkMessage = (gameError, userAnswer, gameAnswer) => (gameError === false
  ? 'Correct!'
  : `'${userAnswer}' is wrong answer ;(. Correct answer was '${gameAnswer}'`);

const gameEndMessage = (userName, gameError) => (gameError === false
  ? console.log(`Congratulations, ${userName}!`)
  : console.log(`Let's try again, ${userName}!`));

const gameEngine = (gameRule, gameValues) => {
  const userName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${userName}!`);
  console.log(gameRule);
  let i = 0;
  let gameError = false;
  while (i < 3 && gameError === false) {
    const [gameQuestion, gameAnswer] = gameValues();
    i += 1;
    console.log(`Question: ${gameQuestion}`);
    const userAnswer = readlineSync.question('Your answer: ');
    gameError = checkAnswer(userAnswer, gameAnswer);
    console.log(checkMessage(gameError, userAnswer, gameAnswer));
  }
  return gameEndMessage(userName, gameError);
};

export { giveMeRand, gameEngine };
