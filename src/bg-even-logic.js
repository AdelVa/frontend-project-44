import readlineSync from 'readline-sync/lib/readline-sync.js';

export const brainGameEven = () => {
  // Зададим мин-макс для генератора чисел
  const min = 1;
  const max = 1000;
  // Спрашиваем имя юзера, здороваемся и объясняем правила игры
  const userName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${userName}!`);
  console.log('Answer "yes" if the number is even, otherwise answer "no".');
  // Цикл
  let i = 0;
  // переменная для завершения игры + выведения соответствующего сообщения в случае победы\проигрыша
  let gameError = false;
  while (i < 3 && gameError === false) {
    // Генерим случайное число и правильный ответ
    const randomNum = Math.floor(Math.random() * (max - min + 1) + min);
    const gameAnswer = randomNum % 2 === 0 ? 'yes' : 'no';
    // Спрашиваем юзера и сравниваем ответ с правильным
    console.log(`Question: ${randomNum}`);
    const userAnswer = readlineSync.question('Your answer: ');
    if (userAnswer === gameAnswer) {
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

export default brainGameEven;
