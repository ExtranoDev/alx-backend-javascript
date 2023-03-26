#!/usr/bin/node
// test cases for calculate Number function

const chai = require('chai');
const expect = chai.expect;
const calculateNumber = require("./1-calcul_chai.js");

describe('calculateNumber', function () {
  it('Confirms SUM output', function () {
    expect(calculateNumber('SUM', 1.5, 5)).to.equal(7);
    expect(calculateNumber('SUM', 1, 3.6)).to.equal(5);
  });
  it('Confirms SUBTRACT output', function () {
    expect(calculateNumber('SUBTRACT', 5, 1.3)).to.equal(4);
    expect(calculateNumber('SUBTRACT', 2, 4.8)).to.equal(-3);
  });
  it('Confirms DIVIDE', function () {
    expect(calculateNumber('DIVIDE', 2.3, 0)).to.eqaul('Error');
    expect(calculateNumber('DIVIDE', 15, 3.2)).to.equal(5);
  });
  it('Check arguements', function () {
    expect(isNaN(calculateNumber(0))).to.be.true;
    expect(isNaN(calculateNumber())).to.be.true;
  });
});
