
//   module.exports= {  
  
//   checkNumber(num, randomNumber) {
//       if (randomNumber < num) {
//         console.log("Try again with a smaller number");
//       } else if (randomNumber > num) {
//         console.log("Try again with a bigger number");
//       } else {
//         console.log("Congratulations");
//         return true;
//       }
//     }
//   }
// // module.exports = checkNumber

module.exports= function (num, randomNumber){
  if (randomNumber < num) {
    console.log("Try again with a smaller number");
  } else if (randomNumber > num) {
    console.log("Try again with a bigger number");
  } else {
    console.log("Congratulations");
    return true;
  }
}