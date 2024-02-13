import readlineSync from 'readline-sync/lib/readline-sync.js';

const GCD = (opOne, opTwo) => {
  if (opTwo > opOne) {
    return GCD(opTwo, opOne);
  }
  if (!opTwo) {
    return opOne;
  }
  return GCD(opTwo, opOne % opTwo);
};

export const brainGameGCD = () => {
  const userName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${userName}!`);
  console.log('Find the greatest common divisor of given numbers.');
  // Цикл
  let i = 0;
  // переменная для завершения игры + выведения соответствующего сообщения в случае победы\проигрыша
  let gameError = false;
  while (i < 3 && gameError === false) {
    // Генерим случайные числа и правильный ответ
    const min = 1;
    const max = 50;
    const opOne = Math.floor(Math.random() * (max - min + 1) + min);
    const opTwo = Math.floor(Math.random() * (max - min + 1) + min);
    const gameAnswer = GCD(opOne, opTwo);
    const gameQuestion = `${opOne} ${opTwo}`;
    // Спрашиваем юзера и сравниваем ответ с правильным
    console.log(`Question: ${gameQuestion}`);
    const userAnswer = readlineSync.question('Your answer: ');
    if (userAnswer === gameAnswer.toString()) {
      i += 1;
      console.log('Correct!');
    } else {
      gameError = true;
      console.log(
        `'${userAnswer}' is wrong answer ;(. Correct answer was '${gameAnswer}'`,
      );
    }
  }
  // сообщение при завершении игры
  return gameError === false
    ? console.log(`Congratulations, ${userName}!`)
    : console.log(`Let's try again, ${userName}!`);
};

export default brainGameGCD;
