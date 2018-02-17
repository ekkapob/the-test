const Test = require('./test');
const test = new Test();

console.log(
`
Problem 1
=========
3, 5, 9, 15, X

answer: X is ${test.problemOneGetSequence(5)}.`);

console.log(
`
Problem 2
=========
(Y + 24) + (10 × 2) = 99

answer: Y is always ${test.problemTwoGetY()}.`);

console.log(`
Problem 3
=========
1 = 5 , 2 = 25 , 3 = 325 , 4 = 4325 Then 5 = X

answer: X is ${test.problemThreeGetSequence(5)}.`);
