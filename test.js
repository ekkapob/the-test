function Test() {
  this.PROBLEM_ONE_SEQUENCE_LIMIT = 1000000;
  this.PROBLEM_THREE_SEQUENCE_LIMIT = 100;
  this.SPLIT_LIMIT = 500;

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
  if (!cache || !sequence) return;
  if (!this.isValidNumber(sequence)) return;
  if (sequence == 1) return cache[1];
  return cache[sequence];
};

/*
 * calculate seqence value by spliting to prevent maximum stack exceeding
 * @params
 *   sequence to find value
 *   calculation function
 * @return
 *   sequence value
 *   undefined if sequence is invalid or unable to find value
 */
Test.prototype.splitCalculation = function(sequence, calculationFunction) {
  const round = parseInt(sequence / this.SPLIT_LIMIT);
  for (let i = 1; i <= round; i++) {
    calculationFunction.call(this, i * this.SPLIT_LIMIT);
  }
  return calculationFunction.call(this, sequence);
}

/*
 * find sequence value for problem one with spliting calculation
 * @params
 *   sequence to find value
 * @return
 *   sequence value
 *   undefined if sequence is invalid or unable to find value
 */
Test.prototype.solveProblemOne = function(sequence) {
  if (!this.validateSequence(sequence, this.PROBLEM_ONE_SEQUENCE_LIMIT)) {
    return this.printUsage(this.PROBLEM_ONE_SEQUENCE_LIMIT);
  }
  return this.splitCalculation(parseInt(sequence), this.problemOneGetSequence);
};

/*
 * find sequence value for problem three with spliting calculation
 * @params
 *   sequence to find value
 * @return
 *   sequence value
 *   undefined if sequence is invalid or unable to find value
 */
Test.prototype.solveProblemThree = function(sequence) {
  if (!this.validateSequence(sequence, this.PROBLEM_THREE_SEQUENCE_LIMIT)) {
    return this.printUsage(this.PROBLEM_THREE_SEQUENCE_LIMIT);
  }
  return this.splitCalculation(parseInt(sequence), this.problemThreeGetSequence);
};

/*
 * return sequence value for problem one
 * @param
 *   sequence to find value
 * @return
 *   sequence value
 */
Test.prototype.problemOneGetSequence = function(sequence) {
  const cacheValue = this.getCacheValue(this.problemOneCache, sequence);
  if (cacheValue != undefined) return cacheValue;
  const addition = sequence + (sequence - 2);
  this.problemOneCache[sequence] = addition + this.problemOneGetSequence(sequence - 1);
  return this.problemOneCache[sequence];
};

/*
 * return sequence value for problem three
 * @param
 *   sequence to find value
 * @return
 *   sequence value
 */
Test.prototype.problemThreeGetSequence = function(sequence) {
  const cacheValue = this.getCacheValue(this.problemThreeCache, sequence);
  if (cacheValue != undefined) return cacheValue;
  const addition = sequence * Math.pow(10, sequence - 1);
  this.problemThreeCache[sequence] = addition + this.problemThreeGetSequence(sequence - 1);
  return this.problemThreeCache[sequence];
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
 * return boolean if sequence is valid
 * @params
 *   sequence number to check
 *   limit of the number
 * @return
 *   true if valid sequence; otherwise, false
 */
Test.prototype.validateSequence = function(sequence, limit) {
  if (!sequence) return false;
  return this.isValidNumber(sequence, limit);
};

/*
 * return boolean if input is valid number
 * @params
 *   number to check
 *   limit of the number
 * @return
 *   true if valid number; otherwise, false
 */
Test.prototype.isValidNumber = function(number, limit) {
  if (isNaN(parseInt(number))) return false;
  if (number <= 0) return false;
  if (number % 1 !== 0) return false;
  if (limit === undefined) return true;
  if (number > limit) return false;
  return true;
};

/*
 * display problem one and two funciton usage
 */
Test.prototype.printUsage = function(limit) {
  const usage = [
    'Sequence must be integer, ',
    `greater than 0 but less than or equal to ${limit}.`,
  ].join('');
  console.log(usage);
};

module.exports = Test;
