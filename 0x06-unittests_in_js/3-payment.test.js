const sinon = require('sinon');
const Utils = require('./utils.js');
const sendPaymentRequestToApi = require('./3-payment.js');
const chai = require('chai');
const expect = chai.expect;

describe('sendPaymentRequestToApi', function() {
  const sinonSpy = sinon.spy(Utils, 'calculateNumber');

  it('Confirms Number calculated', function() {
    sendPaymentRequestToApi(100, 20);
    expect(sinonSpy.calledOnce).to.be.true;
    expect(sinonSpy.calledWith('SUM', 100, 20)).to.be.true;
    sinonSpy.restore();
  });
});
