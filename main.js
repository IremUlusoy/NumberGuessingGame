var randomNumber = Math.random() * 100 + 1;
randomNumber = Math.round(randomNumber);
console.log(randomNumber);

const readline = require("readline-sync"); //async ile de deneyeceğim- daha sonra deneyelim
const numberCheck = require("./numberCheck");
const checkNumber = require("./numberCheck");
const RestrictionController = require("./restrictionControl");

let userName1 = readline.question ("User 1, Please enter your name\n");
let userName2 = readline.question ("User 2, Please enter your name\n");


// const rc  = new RestrictionController() //fonksiyon adıyla çağır
// const nc = new checkNumber ()
let counter = 1;
let user_1 = false;
let user_2 = false;
while (counter < 11) {
  let guessedNumber_1 = readline.question(
   userName1+ ": Enter a number between 1 and 100\n"
  );

  while(!RestrictionController.isValidNumber(guessedNumber_1))  {
    guessedNumber_1 = readline.question(
      "Please enter a valid number\n"
    );
  }
  if (numberCheck.checkNumber(guessedNumber_1, randomNumber)) {
    user_1 = true;
    break;
  }

  let guessedNumber_2 = readline.question(
    userName2+": Enter a number between 1 and 100\n"
  );

  while (!RestrictionController.isValidNumber(guessedNumber_2) ) {
    guessedNumber_2 = readline.question
    ("Please enter a valid number\n");
  }
  if (numberCheck.checkNumber(guessedNumber_2, randomNumber)) {
    user_2 = true;
    break;
  }
  counter++;
}

if (counter > 11) {
  console.log("Algoritmik zekaniz yok!");
} else {
  if (user_1) {
    console.log(userName1+" :WINS!");
  }
  if (user_2) {
    console.log(userName2+" :WINS!");
  }
  console.log("Your successful attempt number: " + counter);
}

// kullanıcı sayısını soracak, oynayacak kişi sayısına göre round yapılacak
// Yaşadığın hataları blog yazısı ile anlatabilirsin
// TypeScripte çevirebilirsin
// while içinde while kullanmak dışında bir yol var mıdır? Time complexity düşürmek için
// Projeyi versiyon kontrol sistemine koy 