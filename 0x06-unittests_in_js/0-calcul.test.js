#!/usr/bin/node
// test cases for calculate Number function

const assert = require('assert');
const calculateNumber = require("./0-calcul.js");

describe('calculateNumber', function () {
  it('Confirms output', function () {
    assert.strictEqual(calculateNumber(1.5, 5), 7);
    assert.strictEqual(calculateNumber(1, 3.6), 5);
    assert.strictEqual(calculateNumber(2.3, 5.8), 8);
    assert.strictEqual(calculateNumber(2, 4.8), 7);
    assert.strictEqual(calculateNumber(2.3, 9), 11);
    assert.strictEqual(calculateNumber(2.3, 3.2), 5);
  });
  it('Check arguements', function () {
    assert.strictEqual(isNaN(calculateNumber(0)), true);
    assert.strictEqual(isNaN(calculateNumber()), true);
  });
});
