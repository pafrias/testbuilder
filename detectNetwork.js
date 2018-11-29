//This version of detectNetwork is based on comparisons to objects, instead of inline values
//Ideally, this means that new card networks can be added as objects, and the function will just need to be iterated again
//Input has to be converted to strings, as only the length can be an integer object literal
const dinersClub = {
  len : 14,
  prefix : ['38', '39']
}

const amEx = {
  len: 15,
  prefix: ['34', '37']
}

const visa = {
  len: [13, 16, 19],
  prefix: '4'
}

const masterCard = {
  len: 16,
  prefix: ['51', '52', '53', '54', '55']
}

const discover = {
  len: [16, 19],
  prefix: ['65', '644', '645', '646', '647', '648', '649', '6011']
}

const maestro = {
  len: null, //unsure how to plug in range in a more elegeant way
  prefix: ['5018', '5020', '5038', '6304']
}

var detectNetwork = function(cardNumber) { //stringifies, checks for valid credit cards  
  let cardNum = cardNumber.toString();
  let cardLen = cardNum.length;
  if (dinersClub.len === cardLen && dinersClub.prefix.includes(cardNum.slice(0,2))) {
    return 'Diner\'s Club';
  }  else if (amEx.len === cardLen && amEx.prefix.includes(cardNum.slice(0,2))) {
    return 'American Express';
  }  else if (visa.len.includes(cardLen) && visa.prefix === cardNum[0]) {
    return 'Visa';
  } else if (masterCard.len === cardLen && masterCard.prefix.includes(cardNum.slice(0,2))) {
    return 'MasterCard';
  } else if (discover.len.includes(cardLen) && (discover.prefix.includes(cardNum.slice(0,2)) || discover.prefix.includes(cardNum.slice(0,3)) || discover.prefix.includes(cardNum.slice(0,4)))) {
    return 'Discover';
  } else if ((cardLen > 11 && cardLen < 20) && (maestro.prefix.includes(cardNum.slice(0,4)))) {
    return 'Maestro';
  } else {
    return 'Invalid Card Number';
  }
};

testNums = [51 + '12345678901234', '38345678901234','393456789012345','4234567890123456', 644 + '4567890123456', '5018567890122345'];

for (var iter = 0; iter < testNums.length; iter++) {
  console.log(detectNetwork(testNums[iter]));
}