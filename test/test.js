const assert = require('assert');
const Test = require('./../test');

describe('Test', () => {
  let test = new Test();

  describe('solveProblemOne()', () => {
    context('param is invalid', () => {
      context('undefined', () => {
        it('returns undefined', () => {
          assert.equal(undefined, test.solveProblemOne());
        });
      });
      context('null', () => {
        it('returns undefined', () => {
          assert.equal(undefined, test.solveProblemOne(null));
        });
      });
      context('not number', () => {
        it('returns undefined', () => {
          assert.equal(undefined, test.solveProblemOne('hello'));
        });
      });
      context('zero', () => {
        it('returns undefined', () => {
          assert.equal(undefined, test.solveProblemOne(0));
        });
      });
      context('negative', () => {
        it('returns undefined', () => {
          assert.equal(undefined, test.solveProblemOne(-1));
        });
      });
      context('floating point', () => {
        it('returns undefined', () => {
          assert.equal(undefined, test.solveProblemOne(234.05));
        });
      });
      context('out of bound', () => {
        it('returns undefined', () => {
          assert.equal(undefined,
                       test.solveProblemOne(test.PROBLEM_ONE_SEQUENCE_LIMIT + 1));
        });
      });
    });
    context('param is valid', () => {
      it('returns valid value', () => {
        assert.equal(3, test.solveProblemOne(1));
        assert.equal(5, test.solveProblemOne(2));
        assert.equal(9, test.solveProblemOne('3'));
        assert.equal(15, test.solveProblemOne('4'));
        assert.equal(9999900003,
                     test.solveProblemOne(test.PROBLEM_ONE_SEQUENCE_LIMIT));
      });
    });
  });

  describe('problemOneCache', () => {
    before(()=> {
      test = new Test();
    });
    it('caches new calculation', () => {
      assert.equal(undefined, test.problemOneCache[2]);
      test.solveProblemOne(2);
      assert.equal(5, test.problemOneCache[2]);
    });
  });

  describe('problemTwoGetY()', () => {
    it('always returns 55', () => {
      assert.equal(55, test.problemTwoGetY());
      assert.equal(55, test.problemTwoGetY(100));
      assert.equal(55, test.problemTwoGetY(-100));
    });
  });

  describe('solveProblemThree()', () => {
    context('param is invalid', () => {
      context('undefined', () => {
        it('returns undefined', () => {
          assert.equal(undefined, test.solveProblemThree());
        });
      });
      context('null', () => {
        it('returns undefined', () => {
          assert.equal(undefined, test.solveProblemThree(null));
        });
      });
      context('not number', () => {
        it('returns undefined', () => {
          assert.equal(undefined, test.solveProblemThree('hello'));
        });
      });
      context('zero', () => {
        it('returns undefined', () => {
          assert.equal(undefined, test.solveProblemThree(0));
        });
      });
      context('negative', () => {
        it('returns undefined', () => {
          assert.equal(undefined, test.solveProblemThree(-1));
        });
      });
      context('floating point', () => {
        it('returns undefined', () => {
          assert.equal(undefined, test.solveProblemThree(234.05));
        });
      });
      context('out of bound', () => {
        it('returns undefined', () => {
          assert.equal(undefined,
                       test.solveProblemThree(test.PROBLEM_THREE_SEQUENCE_LIMIT + 1));
        });
      });
    });
    context('param is valid', () => {
      it('returns valid value', () => {
        assert.equal(5, test.solveProblemThree(1));
        assert.equal(25, test.solveProblemThree(2));
        assert.equal(325, test.solveProblemThree('3'));
        assert.equal(4325, test.solveProblemThree('4'));
        assert.equal(1.1098765432098767e+101,
                     test.solveProblemThree(test.PROBLEM_THREE_SEQUENCE_LIMIT));
      });
    });
  });

  describe('problemThreeCache', () => {
    before(()=> {
      test = new Test();
    });
    it('caches new calculation', () => {
      assert.equal(undefined, test.problemThreeCache[2]);
      test.solveProblemThree(2);
      assert.equal(25, test.problemThreeCache[2]);
    });
  });

  describe('getCacheValue()', () => {
    context('cache is undefined', () => {
      it('returns undefined', () => {
        assert.equal(undefined, test.getCacheValue(undefined, 1));
      });
    });
    context('value of x', () => {
      context('undefined', () => {
        it('returns undefined', () => {
          assert.equal(undefined, test.getCacheValue([9]));
        });
      });
      context('not number', () => {
        it('returns undefined', () => {
          assert.equal(undefined, test.getCacheValue([9], 'hello'));
        });
      });
      context('negative', () => {
        it('returns undefined', () => {
          assert.equal(undefined, test.getCacheValue([9], -1));
        });
      });
      context('is zero', () => {
        it('returns undefined', () => {
          assert.equal(undefined, test.getCacheValue([9], 0));
        });
      });
      context('is 1', () => {
        it('returns second cache (value array of #1)', () => {
          assert.equal(10, test.getCacheValue([9, 10], 1));
        });
      });
    });
    context('cache stores the value', () => {
      it('returns cache value', () => {
        assert.equal(100, test.getCacheValue([0, 1, 2, 100], 3));
      });
    });
    context('cache does not store the value', () => {
      it('returns undefined', () => {
        assert.equal(undefined, test.getCacheValue([0, 1, 2, 100], 4));
      });
    });
  });

  describe('validateSequence()', () => {
    context('valid sequence', () => {
      it('returns true', () => {
        assert.equal(true, test.validateSequence(10, 100));
        assert.equal(true, test.validateSequence('10', 100));
      });
    });
    context('invalid sequence', () => {
      it('returns false', () => {
        assert.equal(false, test.validateSequence());
        assert.equal(false, test.validateSequence(null));
        assert.equal(false, test.validateSequence(0, 100));
        assert.equal(false, test.validateSequence(-1, 100));
        assert.equal(false, test.validateSequence(101, 100));
        assert.equal(false, test.validateSequence(100.5, 100));
        assert.equal(false, test.validateSequence('hello', 100));
        assert.equal(false, test.validateSequence('', 100));
      });
    });
  });

  describe('isValidNumber()', () => {
    context('valid number', () => {
      it('returns true', () => {
        assert.equal(true, test.isValidNumber(10, 100));
        assert.equal(true, test.isValidNumber('10', 100));
      });
    });
    context('invalid number', () => {
      it('returns false', () => {
        assert.equal(false, test.isValidNumber());
        assert.equal(false, test.isValidNumber(null));
        assert.equal(false, test.isValidNumber(0, 100));
        assert.equal(false, test.isValidNumber(-1, 100));
        assert.equal(false, test.isValidNumber(101, 100));
        assert.equal(false, test.isValidNumber(100.5, 100));
        assert.equal(false, test.isValidNumber('hello', 100));
        assert.equal(false, test.isValidNumber('', 100));
      });
    });
  });

});

