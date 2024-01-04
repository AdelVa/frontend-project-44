import readlineSync from "../node_modules/readline-sync/lib/readline-sync.js";

export const AskNameGreet = () => {
  var userName = readlineSync.question("May I have your name? ");
  return console.log("Hello, " + userName + "!");
};

export default AskNameGreet;
