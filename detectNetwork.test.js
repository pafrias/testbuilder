
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
  var assert = chai.assert;

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
  var assert = chai.should();
  for (var prefix = 51; prefix <=55; prefix++) {
    (function(prefix) {
      it('has a prefix of ' + prefix + ' and a length of 16', function() {
        detectNetwork(prefix + '34567890123456').should.equal('MasterCard');
      })
    })(prefix)
  }
});

describe('Discover', function() {
  var assert = chai.assert;
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
  var assert = chai.assert;
  var cardNumbers = [];
  var prefixes = ['5018', '5020', '5038', '6304'];
  var fill = '567890123456789';
  for (var i = 0; i < prefixes.length; i++) {
    for (var suffix = 8; suffix <= 15; suffix++) {
      cardNumbers.push(prefixes[i] + fill.slice(0, suffix)); //adds all prefix/length combos
    }
  }
  cardNumbers.forEach(number => {
    it('has a prefix of ' + number.slice(0,4) + ' and a length of ' + number.length, function() {
      assert(detectNetwork(number) === 'Maestro');
    })
  });
  /*for (var suffix = 8; suffix <= 15; suffix++) {    nested for loop, can't get to work
    for (var i = 0; i < prefixes.length; i++) {       continue pursuing for later patch
      (function() {
        it('has a prefix of ' + prefixes[i] + ' and a length of ' + (suffix + prefixes[i].length), function() {
          assert(detectNetwork(prefixes[i] + fill.slice(0,suffix)) === 'Maestro');
        })
      })()
    }
  }*/
});

describe('should support China UnionPay', function() {
  var should = chai.should();

});

describe('should support Switch', function() {
  var should = chai.should();
});








