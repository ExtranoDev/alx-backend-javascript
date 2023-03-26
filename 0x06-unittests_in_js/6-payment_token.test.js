const chai = require('chai');
const getPaymentTokenFromAPI = require('./6-payment_token');

describe('getPaymentTokenFromAPI', function () {
  it('test async function', function() {
    getPaymentTokenFromAPI(true).then((success) => {
      chai.expect(data).toBe({data: 'Successful response from the API' });
    });
  });
});
