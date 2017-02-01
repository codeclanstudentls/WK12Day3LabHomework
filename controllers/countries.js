var express = require('express');
var app = express();
var countryRouter = express.Router();

var countries = require('../client/src/models/countries')();
var Country = require('../client/src/models/country');

var CountryQuery = require('../client/db/countryQuery.js');
var query = new CountryQuery();


countryRouter.get('/', function(req, res){
  query.all(function(results){
    res.json(results);
  });
});

module.exports = countryRouter;