import readlineSync from 'readline-sync/lib/readline-sync.js';

const giveRandomNumber = (max) => Math.floor(Math.random() * max);

const isCorrectAnswer = (userAnswer, gameAnswer) => userAnswer === gameAnswer;

const playGame = (gameRule, gameValues) => {
  console.log('Welcome to the Brain Games!');
  const userName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${userName}!`);
  console.log(gameRule);
  for (let i = 0; i < 3; i += 1) {
    const [gameQuestion, gameAnswer] = gameValues();
    console.log(`Question: ${gameQuestion}`);
    const userAnswer = readlineSync.question('Your answer: ');
    if (isCorrectAnswer(userAnswer, gameAnswer)) {
      console.log('Correct!');
    } else {
      console.log(
        `'${userAnswer}' is wrong answer ;(. Correct answer was '${gameAnswer}'`,
      );
      console.log(`Let's try again, ${userName}!`);
      return;
    }
  }
  console.log(`Congratulations, ${userName}!`);
};

export { giveRandomNumber, playGame };
