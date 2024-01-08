import readlineSync from "readline-sync/lib/readline-sync.js";
// зададим мин-макс
const min = 1;
const max = 1000;
export const brainGameEven = (min, max) => {
  // Спрашиваем имя юзера, здороваемся и объясняем правила игры
  const userName = readlineSync.question("May I have your name? ");
  console.log(`Hello, ${userName}!`);
  console.log('Answer "yes" if the number is even, otherwise answer "no".');
  // Генерим случайное число и правильный ответ
  const randomNum = Math.floor(Math.random() * (max - min + 1) + min);
  const gameAnswer = randomNum % 2 === 0 ? "yes" : "no";
  // Спрашиваем юзера и сравниваем ответ с правильным
  console.log(`Question: ${randomNum}`);
  const userAnswer = readlineSync.question("Your answer: ");
  if (userAnswer === gameAnswer) {
    console.log("Correct!");
  } else {
    console.log("Incorrect!");
  }
};

export default brainGameEven;
