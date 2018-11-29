
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
  var assert = chai.assert;
  for (var prefix = 51; prefix <=55; prefix++) {
    (function(prefix) {
      it('has a prefix of ' + prefix + ' and a length of 16', function() {
        assert(detectNetwork(prefix + '34567890123456') === 'MasterCard');
      })
    })(prefix)
  }
});

describe('Discover', function() {
  var assert = chai.assert;
  for (var prefix = 644; prefix <=649; prefix++) {
    (function(prefix) {
      it('has a prefix of ' + prefix + ' and a length of 16', function() {
        assert(detectNetwork(prefix + '34567890123456') === 'Discover');
      })
    })(prefix)
  }
});
/*
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
});*/

describe('Maestro', function() {
  var assert = chai.assert;
  
  it('has a prefix of ')
});

describe('should support China UnionPay')
describe('should support Switch')
