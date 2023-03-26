const sinon = require('sinon');
const Utils = require('./utils.js');
const sendPaymentRequestToApi = require('./3-payment.js');
const chai = require('chai');
const expect = chai.expect;

describe('sendPaymentRequestToApi', function() {
  const sinonSpy = sinon.spy(console, 'log');

  it('Confirms Number calculated', function() {
    const sinonStub = sinon.stub(Utils, 'calculateNumber');
    sinonStub.withArgs('SUM', 100, 20).returns(10);
    sendPaymentRequestToApi(100, 20);
    expect(sinonSpy.calledOnce).to.be.true;
    expect(sinonSpy.calledWith('The total is: 10')).to.be.true;
    sinonStub.restore();
    sinonSpy.restore();
  });
});
