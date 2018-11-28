  // Note: `cardNumber` will always be a string
  // The Diner's Club network always starts with a 38 or 39 and is 14 digits long
  // The American Express network always starts with a 34 or 37 and is 15 digits long

var detectNetwork = function(cardNumber) { //stringifies, checks for valid credit cards
  let cardNum = cardNumber.toString();
  let cardLen = cardNum.length;
  if (cardLen === 14 && (cardNum.slice(0,2) === '38' || cardNum.slice(0,2) === '39')) {
    return 'Diner\'s Club';
  }  else if (cardLen === 15 && (cardNum.slice(0,2) === '34' || cardNum.slice(0,2) === '37')) {
    return 'American Express';
  }  else if ((cardLen === 13 || cardLen === 16 || cardLen == 19) && cardNum.slice(0,1) === '4') {
    return 'Visa';
  } else if (cardLen === 16 && (cardNum.slice(0,2) === '51' || cardNum.slice(0,2) === '52' || cardNum.slice(0,2) === '53' || cardNum.slice(0,2) === '54' || cardNum.slice(0,2) === '55')) {
    return 'MasterCard';
  } else if ((cardLen === 16 || cardLen === 19) && (cardNum.slice(0,2) === '65' || cardNum.slice(0,4) === '6011' || cardNum.slice(0,7) === '644-649')) {
    return 'Discover';
  } else if ((cardLen > 11 && cardLen < 20) && (cardNum.slice(0,4) === '5018' || cardNum.slice(0,4) === '5020' || cardNum.slice(0,4) === '5038' || cardNum.slice(0,4) === '6304')) {
    return 'Maestro';
  } else {
    return 'Invalid Card Number';
  }
};

/*function testNotInt(numbers) { // checks for non-numbers, then returns false for all numbers
  let numArray = numbers.split('');
  return (numArray.some(num => isNaN(parseInt(num))));
};*/


/*
testNums = [124567, 38145824658298,'3814582be4658298','374572169854265', 124567, '38145824658298'];

for (var iter = 0; iter < 6; iter++) {
  console.log(detectNetwork(testNums[iter]));
}*/
