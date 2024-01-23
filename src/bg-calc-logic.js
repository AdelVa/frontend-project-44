import readlineSync from "readline-sync/lib/readline-sync.js";

export const brainGameCalc = () => {
  // Зададим мин-макс для генератора чисел
  // Спрашиваем имя юзера, здороваемся и объясняем правила игры
  const userName = readlineSync.question("May I have your name? ");
  console.log(`Hello, ${userName}!`);
  console.log("What is the result of the expression?");
  // Цикл
  let i = 0;
  // переменная для завершения игры + выведения соответствующего сообщения в случае победы\проигрыша
  let gameError = false;
  while (i < 3 && gameError === false) {
    // Генерим случайные числа и правильный ответ
    let gameAnswer = 0;
    let gameQuestion = ``;
    const min = 1;
    const max = 50;
    const operRandMin = 0;
    const operRandMax = 2;
    const operRand = Math.floor(
      Math.random() * (operRandMax - operRandMin + 1) + operRandMin
    );
    const opOne = Math.floor(Math.random() * (max - min + 1) + min);
    const opTwo = Math.floor(Math.random() * (max - min + 1) + min);
    switch (operRand) {
      case 0:
        gameAnswer = opOne + opTwo;
        gameQuestion = `${opOne}` + `+` + `${opTwo}`;
        break;
      case 1:
        gameAnswer = opOne - opTwo;
        gameQuestion = `${opOne}` + `-` + `${opTwo}`;
        break;
      case 2:
        gameAnswer = opOne * opTwo;
        gameQuestion = `${opOne}` + `*` + `${opTwo}`;
        break;
      default:
        gameAnswer = opOne + opTwo;
        gameQuestion = `${opOne}` + `+` + `${opTwo}`;
        break;
    }
    // Спрашиваем юзера и сравниваем ответ с правильным
    console.log(`Question: ${gameQuestion}`);
    const userAnswer = readlineSync.question("Your answer: ");
    if (userAnswer === gameAnswer.toString()) {
      i += 1;
      console.log("Correct!");
    } else {
      gameError = true;
      console.log(
        `'${userAnswer}' is wrong answer ;(. Correct answer was '${gameAnswer}'`
      );
    }
  }
  // сообщение при завершении игры
  return gameError === false
    ? console.log(`Congratulations, ${userName}!`)
    : console.log(`Let's try again, ${userName}!`);
};

export default brainGameCalc;
