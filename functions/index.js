const functions = require('firebase-functions');
const Gdax = require('gdax');
const cors = require('cors')({origin: true});

exports.helloWorld = functions.https.onRequest((request, response) => {
  cors(request, response, () => {
    var client = {}
    if (request.body.apikey && request.body.secret && request.body.passphrase) {
      client = new Gdax.AuthenticatedClient(request.body.apikey, request.body.secret, request.body.passphrase, request.body.apiURL);
    } else {
      client = new Gdax.PublicClient('BTC-USD', request.body.apiURL);
    }
    client.getProducts(function(err, resp, data) {
      if (err) {
        response.send(err);
        return;
      }
      response.send(data);
    });
  })
});
