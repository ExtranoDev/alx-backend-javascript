#!/usr/bin/node
// test cases for calculate Number function

const assert = require('assert');
const calculateNumber = require("./1-calcul.js");

describe('calculateNumber', function () {
  it('Confirms output', function () {
    assert.strictEqual(calculateNumber('SUM', 1.5, 5), 7);
    assert.strictEqual(calculateNumber('SUM', 1, 3.6), 5);
    assert.strictEqual(calculateNumber('SUBTRACT', 5, 1.3), 4);
    assert.strictEqual(calculateNumber('SUBTRACT', 2, 4.8), -3);
    assert.strictEqual(calculateNumber('DIVIDE', 2.3, 0), 'Error');
    assert.strictEqual(calculateNumber('DIVIDE', 15, 3.2), 5);
  });
  it('Check arguements', function () {
    assert.strictEqual(isNaN(calculateNumber(0)), true);
    assert.strictEqual(isNaN(calculateNumber()), true);
  });
});
