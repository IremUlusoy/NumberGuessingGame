var randomNumber = Math.random() * 100 + 1;
randomNumber = Math.round(randomNumber);
console.log(randomNumber);

const readline = require("readline-sync");
let counter = 1;
let user = false


let playerNumber = readline.question("How many players will play?\n");
while (counter < 11) {
for (player= 1; player <= playerNumber; player++ ) 
{

    let guessedNumber_1 = readline.question(
      player + ". player : Enter a number between 1 and 100\n"
    );

    while (!checkRestriction(guessedNumber_1)) {
      guessedNumber_1 = readline.question("Please enter a valid number\n");
    }
    if (checkNumber(guessedNumber_1)) {
      user = true;
      break;
    }
    
  }
  counter++;
  if (counter > 11) {
    console.log("Algoritmik zekaniz yok!");
  } else {
    if (user) {
      console.log(player+". player WINS!");
    console.log("Your successful attempt number: " + counter);
    break
    }
  }
  function checkNumber(num) {
    if (randomNumber < num) {
      console.log("Try again with a smaller number");
    } else if (randomNumber > num) {
      console.log("Try again with a bigger number");
    } else {
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

// kullanıcı sayısını soracak, oynayacak kişi sayısına göre round yapılacak
// Yaşadığın hataları blog yazısı ile anlatabilirsin
// TypeScripte çevirebilirsin
// while içinde while kullanmak dışında bir yol var mıdır? Time complexity düşürmek için
// Projeyi versiyon kontrol sistemine koy