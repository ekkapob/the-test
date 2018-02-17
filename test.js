const X_SEQUENCE_LIMIT = 100;

function Test() {
  this.problemOneCache = [0, 3];
  this.problemThreeCache = [0, 5];
};

/*
 * return cache value
 * @params
 *   cache
 *   x - input to find value from cache
 * @return
 *   undefined if cache is undefined or has no value
 *   first cache value (cache[0]) if x is undefined, not number, or less than 1
 *   second cache value (cache[1]) if x is 1
 *   cache value if above criteria does not meet
 */
Test.prototype.getCacheValue = function(cache, x) {
  if (!cache) return;
  if (!x) return cache[0];
  if (isNaN(parseInt(x))) return cache[0];
  if (x < 1) return cache[0];
  if (x == 1) return cache[1];
  return cache[x];
};

/*
 * return x value of problem one
 * @param
 *   x - sequence input to find value (must be <= 100)
 * @return
 *   value
 */
Test.prototype.problemOneFindX = function(x) {
  const cacheValue = this.getCacheValue(this.problemOneCache, x);
  if (cacheValue != undefined) return cacheValue;
  if (this.isOutOfBound(x, X_SEQUENCE_LIMIT)) {
    this.printXOutOfSequenceLimitError();
    return;
  }
  const addition = x + (x - 2);
  this.problemOneCache[x] = addition + this.problemOneFindX(x - 1);
  return this.problemOneCache[x];
};

/*
 * return y value of the fix math problem
 *   (Y + 24) + (10 × 2) = 99
 * @return
 *   55 (always)
 */
Test.prototype.problemTwoFindY = function() {
  return 99 - (10 * 2) - 24;
};

/*
 * return x value of problem three
 * @param
 *   x - sequence input to find value (must be <= 100)
 * @return
 *   value
 */
Test.prototype.problemThreeFindX = function(x) {
  const cacheValue = this.getCacheValue(this.problemThreeCache, x);
  if (cacheValue != undefined) return cacheValue;
  if (this.isOutOfBound(x, X_SEQUENCE_LIMIT)) {
    this.printXOutOfSequenceLimitError();
    return;
  }
  const addition = x * Math.pow(10, x - 1);
  this.problemThreeCache[x] = addition + this.problemThreeFindX(x - 1);
  return this.problemThreeCache[x];
};

/*
 * return boolean if value is out of limit
 * @params
 *   number to check
 *   limit of the number
 * @return
 *   true if number exceeds the limit; otherwise, false
 */
Test.prototype.isOutOfBound = function(number, limit) {
  return (number > limit);
}

Test.prototype.printXOutOfSequenceLimitError = function () {
  console.error(`X must be less than or equal to ${X_SEQUENCE_LIMIT}.`);
}

module.exports = Test;
