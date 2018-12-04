var assert = chai.assert;
var should = chai.should();

describe('Diner\'s Club', function() {
  it('has a prefix of 38 and a length of 14', function() {
    if (detectNetwork('38345678901234') !== 'Diner\'s Club') {
      throw new Error('Test failed');
    }
  });

  it('has a prefix of 39 and a length of 14', function() {
    if (detectNetwork('39345678901234') !== 'Diner\'s Club') {
      throw new Error('Test failed');
    }
  });
});

describe('American Express', function() {
 
  var assert = function(isTrue) {
    if (!isTrue) {
      throw new Error('Test failed');
    }
  };

  it('has a prefix of 34 and a length of 15', function() {
    assert(detectNetwork('343456789012345') === 'American Express');
  });

  it('has a prefix of 37 and a length of 15', function() {
    assert(detectNetwork('373456789012345') === 'American Express');
  });
});

describe('Visa', function() {

  it('has a prefix of 4 and a length of 13', function() {
    assert(detectNetwork('4234567890123') === 'Visa');
  });

  it('has a prefix of 4 and a length of 16', function() {
    assert(detectNetwork('4123456789012345') === 'Visa');
  });

  it('has a prefix of 4 and a length of 19', function() {
    assert(detectNetwork('4123456789012345678') === 'Visa');
  });
});

describe('MasterCard', function() {

  for (var prefix = 51; prefix <=55; prefix++) {
    (function(prefix) {
      it('has a prefix of ' + prefix + ' and a length of 16', function() {
        detectNetwork(prefix + '34567890123456').should.equal('MasterCard');
      })
    })(prefix)
  }
});

describe('Discover', function() {

  for (var prefix = 644; prefix <= 649; prefix++) {
    (function(prefix) {
      it('has a prefix of ' + prefix + ' and a length of 16', function() {
        assert(detectNetwork(prefix + '4567890123456') === 'Discover');
      })
      it('has a prefix of ' + prefix + ' and a length of 19', function() {
        assert(detectNetwork(prefix + '4567890123456789') === 'Discover');
      })
    })(prefix)
  }
  it('has a prefix of 65 and a length of 16', function() {
    assert(detectNetwork('6511567890123456') === 'Discover');
  });
  it('has a prefix of 6011 and a length of 16', function() {
    assert(detectNetwork('6011567890123456') === 'Discover');
  });
  it('has a prefix of 65 and a length of 19', function() {
    assert(detectNetwork('6511567890123456789') === 'Discover');
  });
  it('has a prefix of 6011 and a length of 19', function() {
    assert(detectNetwork('6011567890123456789') === 'Discover');
  });
});

describe('Maestro', function() {

  var cardNumbers = [];
  var prefixes = ['5018', '5020', '5038', '6304'];
  var fill = '5678901234567890';
  for (var suffix = 8; suffix <= 15; suffix++) {    
    for (var i = 0; i < prefixes.length; i++) {      
      (function(i, suffix) {
        it('has a prefix of ' + prefixes[i] + ' and a length of ' + (suffix + prefixes[i].length), function() {
          detectNetwork(`${prefixes[i]}${fill.slice(0,suffix)}`).should.equal('Maestro');
        })
      })(i, suffix);
    }
  }
});

describe('Switch', function() {

  var filler = '12345678901234567890';
  var prefixes = ['4903', '4905', '4911', '4936', '564182', '633110', '6333', '6759'];
  prefixes.forEach(prefix => {
    for (var cardLength = 16; cardLength <= 19; cardLength++) {
      if (cardLength != 17) {
        (function(cardLength) {
          it(`has a prefix of ${prefix} and a length of ${cardLength}`, function() {
            detectNetwork(`${prefix}${filler.slice(prefix.length, cardLength)}`).should.equal('Switch');
          })
        })(cardLength)
      }
    }  
  })
});

describe('China UnionPay', function() {

  for (var prefix = 624; prefix <=626; prefix ++) {
    (function(prefix) {
      it(`has a prefix of ${prefix} and a length of 16`, function() {
        detectNetwork(`${prefix}4567890123456`).should.equal('China UnionPay');
      })
      it(`has a prefix of ${prefix} and a length of 17`, function() {
        detectNetwork(`${prefix}45678901234567`).should.equal('China UnionPay');
      })
      it(`has a prefix of ${prefix} and a length of 18`, function() {
        detectNetwork(`${prefix}456789012345678`).should.equal('China UnionPay');
      })
      it(`has a prefix of ${prefix} and a length of 19`, function() {
        detectNetwork(`${prefix}4567890123456789`).should.equal('China UnionPay');
      })
    })(prefix)
  }
  for (var prefix = 622126; prefix <= 622925; prefix++) {
    (function(prefix) {
      it(`has a prefix of ${prefix} and a length of 16`, function() {
        detectNetwork(`${prefix}7890123456`).should.equal('China UnionPay');
      })
      it(`has a prefix of ${prefix} and a length of 17`, function() {
        detectNetwork(`${prefix}78901234567`).should.equal('China UnionPay');
      })
      it(`has a prefix of ${prefix} and a length of 18`, function() {
        detectNetwork(`${prefix}789012345678`).should.equal('China UnionPay');
      })
      it(`has a prefix of ${prefix} and a length of 19`, function() {
        detectNetwork(`${prefix}7890123456789`).should.equal('China UnionPay');
      })
    })(prefix)
  }
  for (var prefix = 6282; prefix <= 6288; prefix++) {
    (function(prefix) {
      it(`has a prefix of ${prefix} and a length of 16`, function() {
        detectNetwork(`${prefix}567890123456`).should.equal('China UnionPay');
      })
      it(`has a prefix of ${prefix} and a length of 17`, function() {
        detectNetwork(`${prefix}5678901234567`).should.equal('China UnionPay');
      })
      it(`has a prefix of ${prefix} and a length of 18`, function() {
        detectNetwork(`${prefix}56789012345678`).should.equal('China UnionPay');
      })
      it(`has a prefix of ${prefix} and a length of 19`, function() {
        detectNetwork(`${prefix}567890123456789`).should.equal('China UnionPay');
      })
    })(prefix)
  }
});





