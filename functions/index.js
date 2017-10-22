const functions = require('firebase-functions');
const Gdax = require('gdax');
const cors = require('cors')({origin: true});

// private endpoints
exports.getAccounts = functions.https.onRequest((request, response) => {
  cors(request, response, () => {
    var client = new Gdax.AuthenticatedClient(request.query.apikey, request.query.secret, request.query.passphrase, request.query.apiURI)
    console.log(client)
    client.getAccounts(function(err, resp, data) {
      if (err) {response.send(err)}
      else {response.send(data)}
    })
  })
})

// public endpoints
exports.getProducts = functions.https.onRequest((request, response) => {
  cors(request, response, () => {
    var client = new Gdax.PublicClient(request.query.productID, request.query.apiURI)
    client.getProducts(function(err, resp, data) {
      if (err) {response.send(err)}
      else {response.send(data)}
    })
  })
})

exports.getProductOrderBook = functions.https.onRequest((request, response) => {
  cors(request, response, () => {
    var client = new Gdax.PublicClient(request.query.productID, request.query.apiURI)
    client.getProductOrderBook({level: request.query.level || 1}, function(err, resp, data) {
      if (err) {response.send(err)}
      else {response.send(data)}
    })
  })
})

exports.getProductTicker = functions.https.onRequest((request, response) => {
  cors(request, response, () => {
    var client = new Gdax.PublicClient(request.query.productID, request.query.apiURI)
    client.getProductTicker(function(err, resp, data) {
      if (err) {response.send(err)}
      else {response.send(data)}
    })
  })
})

exports.getProductTrades = functions.https.onRequest((request, response) => {
  cors(request, response, () => {
    var client = new Gdax.PublicClient(request.query.productID, request.query.apiURI)
    client.getProductTrades({after: request.query.after}, function(err, resp, data) {
      if (err) {response.send(err)}
      else {response.send(data)}
    })
  })
})

// exports.getProductTradeStream = functions.https.onRequest((request, response) => {
//   cors(request, response, () => {
//     var client = new Gdax.PublicClient(request.body.product, request.body.apiURL)
//     client.getProductTrades(tradesFrom, tradesTo)
//   })
// })

exports.getProductHistoricRates = functions.https.onRequest((request, response) => {
  cors(request, response, () => {
    var client = new Gdax.PublicClient(request.query.productID, request.query.apiURI)
    client.getProductHistoricRates({granularity: request.query.granularity || 3000}, function(err, resp, data) {
      if (err) {response.send(err)}
      else {response.send(data)}
    })
  })
})

exports.getProduct24HrStats = functions.https.onRequest((request, response) => {
  cors(request, response, () => {
    var client = new Gdax.PublicClient(request.query.productID, request.query.apiURI)
    client.getProduct24HrStats(function(err, resp, data) {
      if (err) {response.send(err)}
      else {response.send(data)}
    })
  })
})

exports.getCurrencies = functions.https.onRequest((request, response) => {
  cors(request, response, () => {
    var client = new Gdax.PublicClient(request.query.productID, request.query.apiURI)
    client.getCurrencies(function(err, resp, data) {
      if (err) {response.send(err)}
      else {response.send(data)}
    })
  })
})
