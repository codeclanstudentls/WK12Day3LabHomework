/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;
/******/
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	var UI = __webpack_require__(1);
	
	var app = function(){
	  new UI();
	}
	
	window.onload = app;

/***/ },
/* 1 */
/***/ function(module, exports, __webpack_require__) {

	var Countries = __webpack_require__(2);
	
	var UI = function(){
	  this.countries = new Countries();
	  this
	  this.countries.all(function(result){
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
	    
	      container.appendChild('li');
	
	    }
	
	  }
	}
	
	module.exports = UI;


/***/ },
/* 2 */
/***/ function(module, exports, __webpack_require__) {

	var Country = __webpack_require__(3);
	
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


/***/ },
/* 3 */
/***/ function(module, exports) {

	var Country = function(options) {
	  this.name = options.name;
	  this.capital = options.capital;
	  this.latlng = options.latlng;
	}
	
	module.exports = Country;

/***/ }
/******/ ]);
//# sourceMappingURL=bundle.js.map