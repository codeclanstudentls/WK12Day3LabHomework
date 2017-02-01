var Country = require('./country');

var countries = null;

var Countries = function() {

}

Countries.prototype = {
  makeRequest: function(method, url, callback, payload){
    var request = new XMLHttpRequest();
    request.open(method, url);
    request.setRequestHeader("Content-type", "application/json");
    request.onload = callback;
    request.send(payload);
  },

  

  all: function(callback) {
    var self = this;
    this.makeRequest("GET", "https://restcountries.eu/rest/v1/all", function(){
      if (this.status !== 200){
        return;
      }
      var jsonString = this.responseText;
      countries = JSON.parse(jsonString);

      var countries = self.populateCountries(results);
      console.log(countries);
      callback(countries);
    }
  )},

  populateCountries: function(countries){
    
  }
}






module.exports = Countries;
