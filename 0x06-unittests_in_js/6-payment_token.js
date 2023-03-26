function getPaymentTokenFromAPI(success) {
  if (success === true) {
    return new Promise((res, rej) => {
      res({data: 'Successful response from the API'});
    });
  }
}

module.exports = getPaymentTokenFromAPI;
