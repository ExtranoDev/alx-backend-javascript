const sinon = require('sinon');
const Utils = require('./utils.js');
const sendPaymentRequestToApi = require('./5-payment.js');
const chai = require('chai');
const expect = chai.expect;

describe('sendPaymentRequestToApi', function() {
  let sinonSpy;
  beforeEach(function () {
    sinonSpy = sinon.spy(console, 'log');
  });

  afterEach(function () {
    expect(sinonSpy.calledOnce).to.be.true;
    sinonSpy.restore();
  });

  it('Confirms call with 100, 20', function() {
    sendPaymentRequestToApi(100, 20);
    expect(sinonSpy.calledWith('The total is: 120')).to.be.true;
  });

  it('Confirms call with 10, 10', function() {
    sendPaymentRequestToApi(10, 10);
    expect(sinonSpy.calledWith('The total is: 20')).to.be.true;
  });
});
