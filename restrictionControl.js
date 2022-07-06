class RestrictionController {

  isValidNumber(param) {
    if (param < 1 || param > 100 || isNaN(param)) {
      return false;
    }
    return true;
  }
  // isNumericValue(param) {
  //   if (isNaN(param)) {
  //     return false;
  //   }
  //   return true;
  // }

}

// exports = Cat; // It will not work with `new Cat();`
// exports.Cat = Cat; // It will require `new Cat.Cat();` to work (yuck!)
module.exports = RestrictionController;
// module.exports= function (num, randomNumber)