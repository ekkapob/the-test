function Test() {
  this.problemOneCache = [0, 3];
  this.problemThreeCache = [0, 5];
};

/*
 * return cache value
 *  @params
 *   cache
 *   x - input to find value from cache
 * @return
 *   undefined if cache is undefined or has no value
 *   first cache value (cache[0]) if x is undefined, not number, or less than 1
 *   second cache value (cache[1]) if x is 1
 *   cache value if above criteria does not meet
 */
Test.prototype.getValueFromCache = function(cache, x) {
  if (!cache) return;
  if (!x) return cache[0];
  if (isNaN(parseInt(x))) return cache[0];
  if (x < 1) return cache[0];
  if (x == 1) return cache[1];
  if (cache[x]) return cache[x];
  return;
};

/*
 * return x value of problem one
 *  @param
 *   x - input to find value
 * @return
 *   value
 */
Test.prototype.problemOneFindX = function(x) {
  const cacheValue = this.getValueFromCache(this.problemOneCache, x);
  if (cacheValue != undefined) return cacheValue;
  const addition = x + (x - 2);
  this.problemOneCache[x] = addition + this.problemOneFindX(x - 1);
  return this.problemOneCache[x];
};

/*
 * return x value of problem three
 *  @param
 *   x - input to find value
 * @return
 *   value
 */
Test.prototype.problemThreeFindX = function(x) {
  const cacheValue = this.getValueFromCache(this.problemThreeCache, x);
  if (cacheValue != undefined) return cacheValue;
  const addition = x * Math.pow(10, x - 1);
  this.problemThreeCache[x] = addition + this.problemThreeFindX(x - 1);
  return this.problemThreeCache[x];
};

module.exports = Test;
