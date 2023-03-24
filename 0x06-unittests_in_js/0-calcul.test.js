#!/usr/bin/node
// test cases for calculate Number function

const assert = require('assert');
const calculateNumber = require("./0-calcul.js");

describe('calculateNumber', function () {
  it('First number rounded', function () {
    assert.equal(calculateNumber(1.5, 5), calculateNumber(2, 5));
  });
  it('Second number rounded', function () {
    assert.equal(calculateNumber(1, 3.6), calculateNumber(1, 4));
  });
  it('Both number rounded', function () {
    assert.equal(calculateNumber(2.3, 5.8), calculateNumber(2, 6));
  });
});
