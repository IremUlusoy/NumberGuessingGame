var randomNumber = Math.random() * 100 + 1;
randomNumber = Math.round(randomNumber);
// console.log(randomNumber);

const readline = require("readline-sync"); //async ile de deneyeceğim- daha sonra deneyelim

let counter = 1;
let user_1 = false;
let user_2 = false;
while (counter < 11) {
  let guessedNumber_1 = readline.question(
    "User_1: Enter a number between 1 and 100\n"
  );

  while (!checkRestriction(guessedNumber_1)) {
    guessedNumber_1 = readline.question(
      "Please enter a valid number\n"
    );
  }
  if (checkNumber(guessedNumber_1)) {
    user_1 = true;
    break;
  }

  let guessedNumber_2 = readline.question(
    "User_2: Enter a number between 1 and 100\n"
  );

  while (!checkRestriction(guessedNumber_2)) {
    guessedNumber_2 = readline.question("Please enter a valid number\n");
  }
  if (checkNumber(guessedNumber_2)) {
    user_2 = true;
    break;
  }
  counter++;
}

if (counter > 11) {
  console.log("Algoritmik zekaniz yok!");
} else {
  if (user_1) {
    console.log("User 1 WINS!");
  }
  if (user_2) {
    console.log("User 2 WINS!");
  }
  console.log("Your successful attempt number: " + counter);
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


// kullanıcı sayısını soracak, oynayacak kişi sayısına göre round yapılacak
// Yaşadığın hataları blog yazısı ile anlatabilirsin
// TypeScripte çevirebilirsin
// while içinde while kullanmak dışında bir yol var mıdır? Time complexity düşürmek için
// Projeyi versiyon kontrol sistemine koy 