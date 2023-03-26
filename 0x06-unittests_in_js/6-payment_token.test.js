const chai = require('chai');
const getPaymentTokenFromAPI = require('./6-payment_token');

describe('getPaymentTokenFromAPI', function () {
  it('test async function', function() {
    getPaymentTokenFromAPI(true).then((data) => {
      chai.expect(data).to.equal({data: 'Successful response from the API' });
    });
  });
});
