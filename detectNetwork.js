
  //Updated version to reflect new knowledge of constructed objects
  //this may, in fact, result in slower tests, but this is for personal education over speed
  //later versions might:
  		// make use of a range function for large, sequential arrays

function CreditCard(length, prefixes) {
  this.length = length;
  this.prefixes = prefixes;

  this.check = function(cardNum) {
    for (var i = 0; i < prefixes.length; i++) {
      if ((this.length).includes(cardNum.length)) {
        if (cardNum.startsWith(this.prefixes[i])) {
          return true;
        }
      }
    }
  }
}

const dinersClub = new CreditCard([14], ['38', '39']);
const amEx = new CreditCard([15], ['34', '37']);
const visa = new CreditCard([13, 16, 19], ['4']);
const masterCard = new CreditCard([16], ['51', '52', '53', '54', '55']);
const discover = new CreditCard([16, 19], ['65', '644', '645', '646', '647', '648', '649', '6011']);
const switchPay = new CreditCard([16, 18, 19], ['4903', '4905', '4911', '4936', '564182', '633110', '6333', '6759']);
// Maestro could be improved by _.range function
const maestro = new CreditCard([], ['5018', '5020', '5038', '6304']);
for (var cardLen = 12; cardLen <= 19; cardLen++) {
  maestro.length.push(cardLen);
}
// China Union could be improved by _.range function
const chinaUnion = new CreditCard([16, 17, 18, 19], ['624', '625', '626']);
for (var i = 6282; i <= 6288; i++) {
  chinaUnion.prefixes.push(`${i}`);
}
for (var i = 622126; i <= 622925; i++) {
  chinaUnion.prefixes.push(`${i}`);
}

var detectNetwork = function(cardNumber) { //stringifies, checks for valid credit cards  
  let cardString = cardNumber.toString();
  let cardLen = cardString.length;
  if (dinersClub.check(cardString)) {
    return 'Diner\'s Club';
  } else if (switchPay.check(cardString)) {
    return 'Switch';
  } else if (amEx.check(cardString)) {
    return 'American Express';
  } else if (visa.check(cardString)) {
    return 'Visa';
  } else if (masterCard.check(cardString)) {
    return 'MasterCard';
  } else if (discover.check(cardString)) {
    return 'Discover';
  } else if (maestro.check(cardString)) {
    return 'Maestro';
  } else if (chinaUnion.check(cardString)) {
    return 'China UnionPay';
  } else {
    return 'Invalid Card Number';
  }
};
