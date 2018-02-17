# The Test
Author:  Ekkapob Chitpanorak (ekkapob@gmail.com)

Linkedin: https://www.linkedin.com/in/ekkapob

### Program information
- developed on MacOS High Sierra (10.13.1)
- written in Node.js (v9.5.0)
- npm (5.6.0)
- uses [Mocha](https://mochajs.org) JavaScript test framework

### Basic Installation
```sh
$ git clone git@github.com:ekkapob/the-test.git
$ cd the-test
$ npm install
$ npm start # to run the program
$ npm test # to run all tests
```

### Program Limitaions
Problem one and three has limit number of an input set to 100. This prevents maximum stack exceeding error.

### Possible Problems
Running tests on Windows might have some problems. Path to run `npm test` in package.json is set to `node_modules/mocha/bin/mocha` (Linux based) which is not supported on Windows system. It would need to change to `node_modules\mocha\bin\mocha`.
