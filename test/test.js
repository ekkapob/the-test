const assert = require('assert');
const Test = require('./../test');

describe('Test', () => {
  let test = new Test();

  describe('problemOneGetSequence()', () => {
    context('param is invalid', () => {
      context('undefined', () => {
        it('returns 0', () => {
          assert.equal(0, test.problemOneGetSequence());
        });
      });
      context('null', () => {
        it('returns 0', () => {
          assert.equal(0, test.problemOneGetSequence(null));
        });
      });
      context('not number', () => {
        it('returns 0', () => {
          assert.equal(0, test.problemOneGetSequence('hello'));
        });
      });
      context('negative', () => {
        it('returns 0', () => {
          assert.equal(0, test.problemOneGetSequence(-1));
        });
      });
      context('out of bound', () => {
        it('returns undefined', () => {
          assert.equal(undefined, test.problemOneGetSequence(101));
        });
      });
    });
    context('param is valid', () => {
      it('returns valid value', () => {
        assert.equal(3, test.problemOneGetSequence(1));
        assert.equal(5, test.problemOneGetSequence(2));
        assert.equal(9, test.problemOneGetSequence(3));
        assert.equal(15, test.problemOneGetSequence(4));
      });
    });
  });

  describe('problemOneCache', () => {
    before(()=> {
      test = new Test();
    });
    it('caches new calculation', () => {
      assert.equal(undefined, test.problemOneCache[2]);
      test.problemOneGetSequence(2);
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

  describe('problemThreeGetSequence()', () => {
    context('param is invalid', () => {
      context('undefined', () => {
        it('returns 0', () => {
          assert.equal(0, test.problemThreeGetSequence());
        });
      });
      context('null', () => {
        it('returns 0', () => {
          assert.equal(0, test.problemThreeGetSequence(null));
        });
      });
      context('not number', () => {
        it('returns 0', () => {
          assert.equal(0, test.problemThreeGetSequence('hello'));
        });
      });
      context('negative', () => {
        it('returns 0', () => {
          assert.equal(0, test.problemThreeGetSequence(-1));
        });
      });
      context('out of bound', () => {
        it('returns undefined', () => {
          assert.equal(undefined, test.problemThreeGetSequence(101));
        });
      });
    });
    context('param is valid', () => {
      it('returns valid value', () => {
        assert.equal(5, test.problemThreeGetSequence(1));
        assert.equal(25, test.problemThreeGetSequence(2));
        assert.equal(325, test.problemThreeGetSequence(3));
        assert.equal(4325, test.problemThreeGetSequence(4));
      });
    });
  });

  describe('problemThreeCache', () => {
    before(()=> {
      test = new Test();
    });
    it('caches new calculation', () => {
      assert.equal(undefined, test.problemThreeCache[2]);
      test.problemThreeGetSequence(2);
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
        it('returns first cache value', () => {
          assert.equal(9, test.getCacheValue([9]));
        });
      });
      context('not number', () => {
        it('returns first cache value', () => {
          assert.equal(9, test.getCacheValue([9], 'hello'));
        });
      });
      context('negative', () => {
        it('returns first cache value', () => {
          assert.equal(9, test.getCacheValue([9], -1));
        });
      });
      context('is zero', () => {
        it('returns first cache value', () => {
          assert.equal(9, test.getCacheValue([9], 0));
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

  describe('isOutOfBound()', () => {
    context('out of bound', () => {
      it('returns true', () => {
        assert.equal(true, test.isOutOfBound(101, 100));
      });
    });
    context('at the upper limit', () => {
      it('returns false', () => {
        assert.equal(false, test.isOutOfBound(100, 100));
      });
    });
    context('very low', () => {
      it('returns false', () => {
        assert.equal(false, test.isOutOfBound(-9999, 100));
      });
    });
  });

});

