var express = require('express');
var app = express();
var countryRouter = express.Router();

var countries = require('../client/src/models/countries')();
var Country = require('../client/src/models/country');
var bucketlist = require('../client/src/models/bucketlist');


var CountryQuery = require('../db/countryQuery.js');
var query = new CountryQuery();


countryRouter.get('/', function(req, res){
  query.all(function(results){
    res.json(results);
    // console.log(results);
  });
});

module.exports = countryRouter;