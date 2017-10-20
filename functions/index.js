const functions = require('firebase-functions');
const Gdax = require('gdax');
const cors = require('cors')({origin: true});

// private endpoints
exports.getCoinbaseAccounts = functions.https.onRequest((request, response) => {
  cors(request, response, () => {
    var client = new Gdax.AuthenticatedClient(request.body.apikey, request.body.secret, request.body.passphrase, request.body.apiURL)
    client.getCoinbaseAccounts(function(err, resp, data) {
      if (err) {response.send(err)}
      else {response.send(data)}
    })
  })
})

// public endpoints
exports.getProducts = functions.https.onRequest((request, response) => {
  cors(request, response, () => {
    var client = new Gdax.PublicClient(request.body.product, request.body.apiURL)
    client.getProducts(function(err, resp, data) {
      if (err) {response.send(err)}
      else {response.send(data)}
    })
  })
})

exports.getProductOrderBook = functions.https.onRequest((request, response) => {
  cors(request, response, () => {
    var client = new Gdax.PublicClient(request.body.product, request.body.apiURL)
    client.getProductOrderBook({level: request.body.level || 1}, function(err, resp, data) {
      if (err) {response.send(err)}
      else {response.send(data)}
    })
  })
})

exports.getProductTicker = functions.https.onRequest((request, response) => {
  cors(request, response, () => {
    var client = new Gdax.PublicClient(request.body.product, request.body.apiURL)
    client.getProductTicker(function(err, resp, data) {
      if (err) {response.send(err)}
      else {response.send(data)}
    })
  })
})

exports.getProductTrades = functions.https.onRequest((request, response) => {
  cors(request, response, () => {
    var client = new Gdax.PublicClient(request.body.product, request.body.apiURL)
    client.getProductTrades({after: request.body.after}, function(err, resp, data) {
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
    var client = new Gdax.PublicClient(request.body.product, request.body.apiURL)
    client.getProductHistoricRates({granularity: request.body.granularity || 3000}, function(err, resp, data) {
      if (err) {response.send(err)}
      else {response.send(data)}
    })
  })
})

exports.getProduct24HrStats = functions.https.onRequest((request, response) => {
  cors(request, response, () => {
    var client = new Gdax.PublicClient(request.body.product, request.body.apiURL)
    client.getProduct24HrStats(function(err, resp, data) {
      if (err) {response.send(err)}
      else {response.send(data)}
    })
  })
})

exports.getCurrencies = functions.https.onRequest((request, response) => {
  cors(request, response, () => {
    var client = new Gdax.PublicClient(request.body.product, request.body.apiURL)
    client.getCurrencies(function(err, resp, data) {
      if (err) {response.send(err)}
      else {response.send(data)}
    })
  })
})
