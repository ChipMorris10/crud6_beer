var express = require('express');
var router = express.Router();
var Beer = require('../models/beer.js');

// ** GET ALL beers ** //
router.get('/beers', function (req, res, next) {
    Beer.findQ()
        .then(function(result){res.json(result)})
        .fail(function(err){res.send(err)})
        .done();
});

// ** GET SINGLE beer ** //
router.get('/beer/:id', function (req, res, next) {
    Beer.findByIdQ(req.params.id)
    .then(function(result){res.json(result)})
    .fail(function(err){res.send(err)})
    .done();
});


// ** POST ALL beers ** //
router.post('/beers', function (req, res, next) {

    new Beer ( {
        name: req.body.name,
        hoppy: req.body.hoppy
})
    .saveQ()
        .then(function(result){res.json(result)})
        .fail(function(err){res.send(err)})
        .done();
});

// ***************************************//
// PROBLEMS WITH PUT               //
// **************************************//
// ** PUT (Update) SINGLE beer ** //
router.put('/beer/:id', function (req, res, next) {
    Beer.findByIdAndUpdateQ(req.params.id, req.body)
        .then(function(result){res.json(result)})
        .fail(function(err){res.send(err)})
        .done();
});

// ** DELETE SINGLE beer ** //
router.delete('/beer/:id', function (req, res, next) {
    Beer.findByIdAndRemoveQ(req.params.id)
        .then(function(result){res.json(result)})
        .fail(function(err){res.send(err)})
        .done();
})


module.exports = router;