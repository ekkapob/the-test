const SEQUENCE_LIMIT = 100;

function Test() {
  this.problemOneCache = [0, 3];
  this.problemThreeCache = [0, 5];
};

/*
 * return cache value
 * @params
 *   cache
 *   sequence to find value from cache
 * @return
 *   undefined if cache is undefined or has no value
 *   first cache value (cache[0]) if sequence is undefined, not number, or less than 1
 *   second cache value (cache[1]) if sequence is 1
 *   cache value if above criteria does not meet
 */
Test.prototype.getCacheValue = function(cache, sequence) {
  if (!cache) return;
  if (!sequence) return cache[0];
  if (isNaN(parseInt(sequence))) return cache[0];
  if (sequence < 1) return cache[0];
  if (sequence == 1) return cache[1];
  return cache[sequence];
};

/*
 * return problem #1 sequence value
 * @param
 *   sequence input to find value (must be <= 100)
 * @return
 *   value
 */
Test.prototype.problemOneGetSequence = function(sequence) {
  const cacheValue = this.getCacheValue(this.problemOneCache, sequence);
  if (cacheValue != undefined) return cacheValue;
  if (this.isOutOfBound(sequence, SEQUENCE_LIMIT)) {
    this.printOutOfSequenceLimitError();
    return;
  }
  const addition = sequence + (sequence - 2);
  this.problemOneCache[sequence] = addition + this.problemOneGetSequence(sequence - 1);
  return this.problemOneCache[sequence];
};

/*
 * return Y value of the fix math problem below
 *   (Y + 24) + (10 × 2) = 99
 * @return
 *   55 (always)
 */
Test.prototype.problemTwoGetY = function() {
  return 99 - (10 * 2) - 24;
};

/*
 * return problem #3 sequence value
 * @param
 *   sequence input to find value (must be <= 100)
 * @return
 *   value
 */
Test.prototype.problemThreeGetSequence = function(sequence) {
  const cacheValue = this.getCacheValue(this.problemThreeCache, sequence);
  if (cacheValue != undefined) return cacheValue;
  if (this.isOutOfBound(sequence, SEQUENCE_LIMIT)) {
    this.printOutOfSequenceLimitError();
    return;
  }
  const addition = sequence * Math.pow(10, sequence - 1);
  this.problemThreeCache[sequence] = addition + this.problemThreeGetSequence(sequence - 1);
  return this.problemThreeCache[sequence];
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

Test.prototype.printOutOfSequenceLimitError = function () {
  console.error(`Input sequence must be less than or equal to ${SEQUENCE_LIMIT}.`);
}

module.exports = Test;
