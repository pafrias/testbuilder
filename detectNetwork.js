  // Note: `cardNumber` will always be a string
  // The Diner's Club network always starts with a 38 or 39 and is 14 digits long
  // The American Express network always starts with a 34 or 37 and is 15 digits long

var detectNetwork = function(cardNumber) { //stringifies, checks for valid credit cards
  cardNumber = cardNumber.toString();
  if (testNotInt(cardNumber)) {
    return 'Please enter only numbers';
  }  else if (cardNumber.length === 14 && (cardNumber.slice(0,2) === '38' || cardNumber.slice(0,2) === '39')) {
    return 'Diner\'s Club';
  }  else if (cardNumber.length == 15 && (cardNumber.slice(0,2) === '34' || cardNumber.slice(0,2) === '37')) {
    return 'American Express';
  }  else {
    return 'Invalid Card Number';
  }
};

function testNotInt(numbers) { // checks for non-numbers, then returns false for all numbers
  let numArray = numbers.split('');
  return (numArray.some(num => isNaN(parseInt(num))));
};

/*
testNums = [124567, 38145824658298,'3814582be4658298','374572169854265', 124567, '38145824658298'];

for (var iter = 0; iter < 6; iter++) {
  console.log(detectNetwork(testNums[iter]));
}*/
