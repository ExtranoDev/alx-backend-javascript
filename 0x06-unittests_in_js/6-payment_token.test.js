const chai = require('chai');
const getPaymentTokenFromAPI = require('./6-payment_token');

describe('getPaymentTokenFromAPI', function () {
  it('test async function', function(done) {
    getPaymentTokenFromAPI(true).then((data) => {
      chai.expect(data).to.include({data: 'Successful response from the API' });
      done();
    }).catch((error) => done(error));
  });
});
