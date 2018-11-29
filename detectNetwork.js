
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

const maestro = {
  len : null, //unsure how to plug in range in a more elegeant way
  prefix : ['5018', '5020', '5038', '6304']
}
const chinaUnion = {
  len : [16, 17, 18, 19],
  prefix : ['624', '625', '626']
}
for (var i = 6282; i <= 6288; i++) {
  chinaUnion.prefix.push(`${i}`);
}
for (var i = 622126; i <= 622925; i++) {
  chinaUnion.prefix.push(`${i}`);
}
const switchPay = {
  len : [16, 18, 19],
  prefix : ['4903', '4905', '4911', '4936', '564182', '633110', '6333', '6759']
}

var detectNetwork = function(cardNumber) { //stringifies, checks for valid credit cards  
  let cardNum = cardNumber.toString();
  let cardLen = cardNum.length;
  if (dinersClub.len === cardLen && dinersClub.prefix.includes(cardNum.slice(0,2))) {
    return 'Diner\'s Club';
  } else if (switchPay.len.includes(cardLen) && (switchPay.prefix.includes(cardNum.slice(0,4)) || switchPay.prefix.includes(cardNum.slice(0,6)))) {
    return 'Switch';
  } else if (amEx.len === cardLen && amEx.prefix.includes(cardNum.slice(0,2))) {
    return 'American Express';
  } else if (visa.len.includes(cardLen) && visa.prefix === cardNum[0]) {
    return 'Visa';
  } else if (masterCard.len === cardLen && masterCard.prefix.includes(cardNum.slice(0,2))) {
    return 'MasterCard';
  } else if (discover.len.includes(cardLen) && (discover.prefix.includes(cardNum.slice(0,2)) || discover.prefix.includes(cardNum.slice(0,3)) || discover.prefix.includes(cardNum.slice(0,4)))) {
    return 'Discover';
  } else if ((cardLen >= 12 && cardLen <= 19) && (maestro.prefix.includes(cardNum.slice(0,4)))) {
    return 'Maestro';
  } else if (chinaUnion.len.includes(cardLen) && (chinaUnion.prefix.includes(cardNum.slice(0,3)) || chinaUnion.prefix.includes(cardNum.slice(0,4)) || chinaUnion.prefix.includes(cardNum.slice(0,6)))) { //unfinished
    return 'China UnionPay'
  } else {
    return 'Invalid Card Number';
  }
};

