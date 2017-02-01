var Countries = require('../models/countries');
var Bucketlist = require('../models/bucketlist');

var countryList = null;

var UI = function(){
  this.countries = new Countries();
  // this.countries.
  this.countries.all(function(result){
    this.render(result);
  }.bind(this));

  this.bucketlist = new Bucketlist();
  this.bucketlist.all(function(result){
    this.render(result);
  }.bind(this));

};


UI.prototype = {

  createText: function(text, label) {
    var p = document.createElement('p');
    p.innerText = label + text;
    return p;
  },


  appendText: function(element, text, label){
    var pTag = this.createText(text, label);
    element.appendChild(pTag);
  },


  render: function(countries){
    var container = document.getElementById('countries');

    for (var country of countries){
      var li = document.createElement('li');
      this.appendText(li, country.name, 'Country: ');
      this.appendText(li, country.capital, 'Capital City : ');
      this.appendText(li, country.latlng, 'Coordinates: ');
    
      container.appendChild(li);

    }

    this.createDropDown(countryList);
    // var select = document.querySelector('select');
    // select.onchange = function() {
    //   var country = this.value;
    // }


  },

  createDropDown: function(countries){
      var select = document.querySelector('select');
      countries.forEach( function(country){
        var option = document.createElement('option');
        option.text = country.name;
        option.value = country.name;
        select.appendChild(option);
      });
    
  }
}

module.exports = UI;
