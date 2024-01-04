import readlineSync from 'readline-sync/lib/readline-sync.js';

export const AskNameGreet = () => {
  const userName = readlineSync.question('May I have your name? ');
  return console.log(`Hello, ${userName}!`);
};

export default AskNameGreet;
