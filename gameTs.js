var randomNumber = Math.random() * 100 + 1;
randomNumber = Math.round(randomNumber);
console.log(randomNumber);
var readline = require("readline-sync");
var counter = 1;
var isWon = false;
var playerNo;
var playerNumber = readline.question("How many players will play?\n");
while (counter < 11) {
    console.log("\n------".concat(counter, ". ROUND------\n"));
    for (playerNo = 1; playerNo <= playerNumber; playerNo++) {
        var guessedNumber_1 = readline.question(playerNo + ". player : Enter a number between 1 and 100\n");
        while (!checkRestriction(guessedNumber_1)) {
            guessedNumber_1 = readline.question("Please enter a valid number\n");
        }
        if (checkNumber(guessedNumber_1)) {
            isWon = true;
            break;
        }
    }
    if (counter > 11) {
        console.log("Algoritmik zekaniz yok!");
    }
    else {
        if (isWon) {
            console.log(playerNo + ". player WINS!");
            console.log("Your successful attempt number: " + counter);
            break;
        }
        counter++;
    }
    function checkNumber(num) {
        if (randomNumber < num) {
            console.log("Try again with a smaller number");
        }
        else if (randomNumber > num) {
            console.log("Try again with a bigger number");
        }
        else {
            console.log("Congratulations");
            return true;
        }
    }
    function checkRestriction(param) {
        if (param < 1 || param > 100 || isNaN(param)) {
            return false;
        }
        return true;
    }
}
