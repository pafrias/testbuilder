  // Should check the cardnumber, weed out entries that contain non-numbers
  // Should check that number for which financial institution it belongs to
  // should return a string with the name of that institution

var testInt = (numbers) => { //checks for numbers only, also lets us work with non-strings if need be
  let numbers = numbers.stringify();
  let numArray = numbers.split();
  return numArray.filter(num => (num.isNum()));
}

var detectNetwork = function(cardNumber) {
  let cardNumber = testInt(cardNumber);
  if (cardNumber.length === 14 && (cardNumber.slice(0,2) === '38' || cardNumber.slice(0,2) === '39')) {
    return 'Diner\'s Club';
  }  else if (cardNumber.length == 15 && (cardNumber.slice(0,2) === '34' || cardNumber.slice(0,2) === '37')) {
    return 'American Express';
  } else {
    return 'Please Try Again';
  }
};

testNum = '38145824658298';
testNum2 = '374572169854265';
testNums = [124567, ]
console.log(testNum.slice(0,2));
console.log(detectNetwork(testNum.length)
