var randomNumber = Math.random() * 100 + 1;
randomNumber = Math.round(randomNumber);
console.log(randomNumber);

const readline = require("readline").createInterface({
  input: process.stdin,
  output: process.stdout,
});

var attemptTime = 0;
const guessInput = () => {
  if (attemptTime <=10) {
    attemptTime++;
    console.log(attemptTime);

    const obtainNumber = (guessedNum) => {
      console.log(`Guessed number is: ${guessedNum}!`);

      if (randomNumber < guessedNum) {
        console.log("Try again with a smaller number");
        guessInput();
      } else if (randomNumber > guessedNum) {
        console.log("Try again with a bigger number");
        guessInput();
      } else {
        console.log("Congratulations");
        readline.close();
      }
      
    };
    readline.question("Enter a number between 1 and 100\n", obtainNumber);
  }
};
guessInput();
