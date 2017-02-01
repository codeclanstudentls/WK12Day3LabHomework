var Country = require('./country');
var Countries = require('./countries');

var Bucketlist = function() {

};

Bucketlist.prototype = {
  makeRequest: function(method, url, callback, payload){
    var request = new XMLHttpRequest();
    request.open("GET", url);
    request.setRequestHeader("Content-type", "application/json");
    request.onload = callback;
    request.send(payload);

  },

  all: function(callback) {
    var self = this;
    this.makeRequest("GET", "http://localhost:3000/api/countries", function(){
      if (this.status !== 200) return;
      var jsonString = this.responseText;
      var results = JSON.parse(jsonString);

      var countries = self.populateCountries(results);
      console.log(countries)
      callback(countries);

    });
  },

  populateCountries: function(results){
    var countries = [];

    for (var result of results){
      var country = new Country(result);
      countries.push(country);
    }
    return countries;
  },

  add: function(newCountry, callback){
    var countryToAdd = JSON.stringify(newCountry);
    this.makeRequest("POST", "http://localhost:3000/api/countries", callback, countryToAdd);

  }


}

module.exports = Bucketlist